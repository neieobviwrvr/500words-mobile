// Sichere Zwischenstation fuer Speechmatics-STT (2026-08-12).
//
// Warum das ueberhaupt noetig ist: Speechmatics braucht einen API-Key, den
// wir NICHT direkt in der ausgelieferten App einbetten koennen - mobile Apps
// lassen sich vergleichsweise leicht dekompilieren, ein eingebetteter Key
// waere sofort extrahierbar und missbrauchbar (Kontingent leerziehen etc.).
// Diese Edge Function haelt den echten SPEECHMATICS_API_KEY nur serverseitig
// (als Supabase Secret, nie im Client-Bundle) und nimmt stattdessen Audio
// vom Handy entgegen, reicht es an Speechmatics weiter und gibt nur das
// Transkript zurueck.
//
// Ablauf (Speechmatics Batch-API, siehe docs.speechmatics.com):
// 1. POST /v2/jobs/ mit Audiodatei + Sprachcode -> Job-ID
// 2. GET /v2/jobs/{id} pollen bis status="done"
// 3. GET /v2/jobs/{id}/transcript?format=txt -> reiner Text
//
// Aufruf vom Handy: POST an diese Function mit multipart/form-data
// (Feld "audio" = Aufnahme-Datei, Feld "language" = Sprachcode wie "sv",
// optional Feld "erwartet" = JSON-Liste der erwarteten Texte, siehe unten).

const SPEECHMATICS_BASE = "https://eu1.asr.api.speechmatics.com/v2";
const MAX_POLL_ATTEMPTS = 15;
const POLL_INTERVAL_MS = 1500;

// Sprachen, die das genauere Enhanced-Modell bekommen (2026-09-13, Simons
// Entscheidung). Alle anderen laufen auf Standard - das ist Speechmatics'
// Vorgabe, wenn kein `model` gesetzt ist.
//
// Warum nur diese beiden: Norwegisch erkannte bei uns die Eingaben
// nachweislich schlecht, und beide sind laut Speechmatics' eigenen Angaben
// die schwaecher abgedeckten Sprachen (Vietnamesisch hatte beim Ursa-2-Update
// den groessten Rueckstand, Norwegisch hat Dialekte und zwei Schriftnormen).
// Enhanced kostet laut Preisliste 0,75 $ statt 0,45 $ je Stunde Audio - fuer
// alle Sprachen waere das rund zwei Drittel Aufpreis.
//
// Die Codes sind die `sttLanguage`-Werte aus mobile/src/data/languages.ts.
const ENHANCED_SPRACHEN = new Set(["no", "vi"]);

// Erwartete Woerter als Hinweis an die Erkennung (2026-09-13, Simons
// Vorgabe: "fuer JEDE Eingabe in JEDER Sprache").
//
// Die App schickt, was an dieser Stelle gesagt werden soll - Zielsatz,
// Zielwort oder alle Optionen einer Auswahl. Daraus wird Speechmatics'
// `additional_vocab`: Woerter, die im Audio wahrscheinlich vorkommen. Ein mit
// Akzent gesprochenes "Jeg vet ikke" landet dadurch eher auf den richtigen
// Woertern. Es erzwingt nichts - was weit weg klingt, wird weiterhin als
// etwas anderes erkannt.
//
// Zerlegt wird hier und nicht in der App, damit sich die Regel ohne neuen
// App-Build aendern laesst.
//
// Die Obergrenzen sind Vorsicht, keine Vorgabe von Speechmatics: laut Doku
// kostet eine grosse Liste Laufzeit und Speicher. Der Finisher im gefuehrten
// Kurs schickt alle Saetze seines Moduls, das koennen einige Dutzend Woerter
// sein.
const MAX_VOKABELN = 100;
const MAX_VOKABEL_LAENGE = 60;

function vokabelnAus(erwartet: string[]): { content: string }[] {
  const gesehen = new Set<string>();
  const vokabeln: { content: string }[] = [];
  for (const roh of erwartet) {
    // Satzzeichen raus, Buchstaben, Tonzeichen, Ziffern, Apostroph und
    // Bindestrich bleiben ("don't", "Voulez-vous"). Ein Schraegstrich trennt
    // Genuspaare wie "cansado / cansada" - er faellt hier ebenfalls weg.
    const sauber = roh
      .normalize("NFC")
      .replace(/[^\p{L}\p{M}\p{N}'’\- ]+/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!sauber) continue;
    // Mit Leerzeichen: jedes Wort einzeln. Ohne (chinesischer Satz aus dem
    // Phrasebook): der ganze Satz als ein Eintrag - dort gibt es keine
    // Wortgrenzen zum Zerlegen, und die Kurs-Rahmen tragen ihre Leerzeichen
    // ohnehin selbst ("我 很 累").
    for (const wort of sauber.split(" ")) {
      const w = wort.replace(/^[-'’]+|[-'’]+$/g, "");
      if (!w || w.length > MAX_VOKABEL_LAENGE) continue;
      const schluessel = w.toLocaleLowerCase();
      if (gesehen.has(schluessel)) continue;
      gesehen.add(schluessel);
      vokabeln.push({ content: w });
      if (vokabeln.length >= MAX_VOKABELN) return vokabeln;
    }
  }
  return vokabeln;
}

type Ergebnis = { ok: true; text: string } | { ok: false; status: number; error: string; abgelehnt: boolean };

async function transkribiere(
  apiKey: string,
  audioFile: File,
  transcriptionConfig: Record<string, unknown>,
): Promise<Ergebnis> {
  // 1. Job einreichen
  const submitForm = new FormData();
  submitForm.append("data_file", audioFile, "audio.wav");
  submitForm.append("config", JSON.stringify({ type: "transcription", transcription_config: transcriptionConfig }));

  const submitRes = await fetch(`${SPEECHMATICS_BASE}/jobs/`, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: submitForm,
  });

  if (!submitRes.ok) {
    const errText = await submitRes.text();
    // 4xx heisst: Speechmatics lehnt die Anfrage selbst ab (etwa eine
    // Vokabel, die es nicht annimmt) - dann lohnt ein Versuch ohne Hinweis.
    return {
      ok: false,
      status: 502,
      error: `Speechmatics-Job-Einreichung fehlgeschlagen: ${errText}`,
      abgelehnt: submitRes.status >= 400 && submitRes.status < 500,
    };
  }

  const { id: jobId } = await submitRes.json();

  // 2. Pollen bis fertig (kurzes Audio ist meist innerhalb weniger Sekunden fertig)
  let done = false;
  for (let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt++) {
    const statusRes = await fetch(`${SPEECHMATICS_BASE}/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const statusJson = await statusRes.json();
    const status = statusJson?.job?.status;
    if (status === "done") {
      done = true;
      break;
    }
    if (status === "rejected" || status === "deleted") {
      return { ok: false, status: 502, error: `Speechmatics-Job fehlgeschlagen: ${status}`, abgelehnt: status === "rejected" };
    }
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }

  if (!done) {
    // Kein zweiter Versuch: der wuerde die Wartezeit nur verdoppeln.
    return { ok: false, status: 504, error: "Zeitueberschreitung beim Warten auf Speechmatics-Ergebnis", abgelehnt: false };
  }

  // 3. Transkript abholen
  const transcriptRes = await fetch(`${SPEECHMATICS_BASE}/jobs/${jobId}/transcript?format=txt`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  return { ok: true, text: (await transcriptRes.text()).trim() };
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Nur POST erlaubt" }), { status: 405 });
  }

  const apiKey = Deno.env.get("SPEECHMATICS_API_KEY");
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "SPEECHMATICS_API_KEY fehlt serverseitig" }), { status: 500 });
  }

  try {
    const incomingForm = await req.formData();
    const audioFile = incomingForm.get("audio");
    const language = (incomingForm.get("language") as string) || "sv";

    if (!(audioFile instanceof File)) {
      return new Response(JSON.stringify({ error: "Kein 'audio'-Feld in der Anfrage" }), { status: 400 });
    }

    // Kaputtes oder fehlendes "erwartet" ist kein Fehler - dann eben ohne
    // Hinweis, wie vor dem 2026-09-13.
    let erwartet: string[] = [];
    const erwartetRoh = incomingForm.get("erwartet");
    if (typeof erwartetRoh === "string") {
      try {
        const geparst = JSON.parse(erwartetRoh);
        if (Array.isArray(geparst)) erwartet = geparst.filter((t): t is string => typeof t === "string");
      } catch {
        erwartet = [];
      }
    }
    const vokabeln = vokabelnAus(erwartet);

    // `model` statt des aelteren `operating_point` - Speechmatics fuehrt
    // letzteres nur noch fuer Rueckwaertskompatibilitaet.
    const grundConfig: Record<string, unknown> = { language };
    if (ENHANCED_SPRACHEN.has(language)) grundConfig.model = "enhanced";

    let genutzteVokabeln = vokabeln.length;
    let ergebnis = await transkribiere(
      apiKey,
      audioFile,
      vokabeln.length > 0 ? { ...grundConfig, additional_vocab: vokabeln } : grundConfig,
    );
    // Lehnt Speechmatics den Job mit Hinweis ab, sofort noch einmal ohne -
    // eine Aufnahme darf nie am Hinweis scheitern, der sie verbessern sollte.
    if (!ergebnis.ok && ergebnis.abgelehnt && vokabeln.length > 0) {
      genutzteVokabeln = 0;
      ergebnis = await transkribiere(apiKey, audioFile, grundConfig);
    }

    if (!ergebnis.ok) {
      return new Response(JSON.stringify({ error: ergebnis.error }), { status: ergebnis.status });
    }
    // `vokabeln`: wie viele Hinweiswoerter tatsaechlich mitgingen - 0 heisst
    // "keine erwartet" oder "abgelehnt, ohne Hinweis wiederholt". Nur zur
    // Fehlersuche; die App liest allein `text`.
    return new Response(JSON.stringify({ text: ergebnis.text, vokabeln: genutzteVokabeln }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), { status: 500 });
  }
});
