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

// ============================================================ Absicherung
//
// (2026-09-14, Simon: "mach das in der Edge Function aber begrenze die Laenge
// auf knapp 30 Sekunden".) Die Function ist mit dem oeffentlichen anon-Key
// aufrufbar - Gaeste nutzen die Spracherkennung auch, und der Key steckt in
// jeder IPA. Eine Injection war nie das Risiko (der Text geht nur zurueck ans
// Geraet), wohl aber die Kosten: beliebig lange Aufnahmen, beliebige Sprache
// samt teurem Enhanced-Modell, beliebig viele Aufrufe. Drei Riegel davor.

// Nur die Sprachen der App - die `sttLanguage`-Werte aus
// mobile/src/data/languages.ts. Alles andere wird abgewiesen, statt es an
// Speechmatics weiterzureichen.
const ERLAUBTE_SPRACHEN = new Set(["de", "sv", "es", "fr", "cmn", "it", "no", "ru", "vi", "pl", "en"]);

// Knapp 30 Sekunden. Die laengste Aufgabe der App ist ein Satz oder der
// Finisher eines Moduls, das dauert Sekunden. Laenger wird abgelehnt,
// BEVOR Speechmatics etwas zu sehen (und abzurechnen) bekommt.
const MAX_SEKUNDEN = 29;

// Die App nimmt auf dem Handy 16-bit PCM WAV mit 16 kHz mono auf, 32.000
// Byte je Sekunde - daraus laesst sich die Laenge exakt aus dem Dateikopf
// lesen. Im Web-Browser nimmt sie WebM auf; dort geht das nicht, und es
// greift nur eine Byte-Grenze, die bei ueblichen Browser-Bitraten (bis
// 128 kbit/s) ebenfalls rund 30 Sekunden entspricht.
const MAX_BYTES_WAV = 2_000_000;
const MAX_BYTES_ANDERE = 500_000;

// Bremse je Konto bzw. je Gast-IP. Ein Mensch schafft mit Auswertung keine
// Aufnahme alle zwei Sekunden, und eine Lektion braucht rund zwanzig. Gaeste
// bekommen etwas mehr Luft, weil sich im Mobilfunk viele Nutzer eine IP
// teilen koennen.
const BREMSE_KONTO = { jeMinute: 20, jeTag: 600 };
const BREMSE_GAST = { jeMinute: 30, jeTag: 800 };

function antwort(status: number, fehler: string) {
  return new Response(JSON.stringify({ error: fehler }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * Laenge einer WAV-Datei in Sekunden, aus dem Dateikopf. `null`, wenn es
 * keine lesbare WAV ist.
 *
 * Geht die Chunks der RIFF-Datei durch, statt feste Offsets anzunehmen - manche
 * Recorder schreiben vor `data` noch einen `LIST`-Block. Steht als
 * Daten-Laenge 0 oder 0xFFFFFFFF (Aufnahme ohne nachgetragene Laenge), zaehlt
 * der Rest der Datei.
 */
async function wavSekunden(datei: File): Promise<number | null> {
  const kopf = new DataView(await datei.slice(0, 65536).arrayBuffer());
  const text = (o: number) =>
    String.fromCharCode(kopf.getUint8(o), kopf.getUint8(o + 1), kopf.getUint8(o + 2), kopf.getUint8(o + 3));
  if (kopf.byteLength < 12 || text(0) !== "RIFF" || text(8) !== "WAVE") return null;

  let byteRate = 0;
  let offset = 12;
  while (offset + 8 <= kopf.byteLength) {
    const id = text(offset);
    const groesse = kopf.getUint32(offset + 4, true);
    if (id === "fmt " && offset + 16 <= kopf.byteLength) {
      byteRate = kopf.getUint32(offset + 16, true);
    }
    if (id === "data") {
      if (!byteRate) return null;
      const rest = datei.size - (offset + 8);
      const daten = groesse === 0 || groesse === 0xffffffff ? rest : Math.min(groesse, rest);
      return daten / byteRate;
    }
    offset += 8 + groesse + (groesse % 2);
  }
  return null;
}

/**
 * Wen die Bremse zaehlt: das angemeldete Konto, sonst die IP des Gasts.
 *
 * Die Signatur des Tokens hat das Gateway schon geprueft (`verify_jwt`), hier
 * wird es nur noch gelesen. Die IP wird gehasht - gespeichert wird sie nie im
 * Klartext, und die Zeile ist nach einem Tag weg.
 */
async function bremsSchluessel(req: Request): Promise<{ schluessel: string; konto: boolean }> {
  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
  try {
    const nutzlast = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    if (nutzlast?.role === "authenticated" && typeof nutzlast.sub === "string") {
      return { schluessel: `konto:${nutzlast.sub}`, konto: true };
    }
  } catch {
    // kein lesbares Token - dann zaehlt die IP
  }
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unbekannt";
  const hash = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`stt-bremse:${ip}`)));
  const hex = Array.from(hash.slice(0, 16), (b) => b.toString(16).padStart(2, "0")).join("");
  return { schluessel: `ip:${hex}`, konto: false };
}

/**
 * Fragt `stt_bremse` (Migration 20260914200000). `true` = darf durch.
 *
 * Laesst im Zweifel DURCH: faellt die Datenbank aus, soll niemand mitten in
 * der Lektion nicht mehr sprechen koennen. Das Loch ist klein - die Laengen-
 * und Sprachgrenze greifen weiterhin.
 */
async function bremseErlaubt(schluessel: string, konto: boolean): Promise<boolean> {
  const url = Deno.env.get("SUPABASE_URL");
  const dienstKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !dienstKey) {
    console.error("stt-bremse: SUPABASE_URL oder SUPABASE_SERVICE_ROLE_KEY fehlt, Bremse aus");
    return true;
  }
  const grenze = konto ? BREMSE_KONTO : BREMSE_GAST;
  try {
    const res = await fetch(`${url}/rest/v1/rpc/stt_bremse`, {
      method: "POST",
      headers: { apikey: dienstKey, Authorization: `Bearer ${dienstKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ p_schluessel: schluessel, p_je_minute: grenze.jeMinute, p_je_tag: grenze.jeTag }),
    });
    if (!res.ok) {
      console.error("stt-bremse: Aufruf fehlgeschlagen", res.status, await res.text());
      return true;
    }
    return (await res.json()) !== false;
  } catch (e) {
    console.error("stt-bremse: nicht erreichbar", e);
    return true;
  }
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
    // Die Antwort von Speechmatics nur ins Log, nicht an den Aufrufer - sie
    // verraet Aufbau und Konto-Details (2026-09-14).
    console.error("Speechmatics lehnt Job ab", submitRes.status, await submitRes.text());
    // 4xx heisst: Speechmatics lehnt die Anfrage selbst ab (etwa eine
    // Vokabel, die es nicht annimmt) - dann lohnt ein Versuch ohne Hinweis.
    return {
      ok: false,
      status: 502,
      error: "Die Spracherkennung hat die Aufnahme nicht angenommen.",
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
      console.error("Speechmatics-Job fehlgeschlagen", jobId, status);
      return { ok: false, status: 502, error: "Die Spracherkennung ist fehlgeschlagen.", abgelehnt: status === "rejected" };
    }
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }

  if (!done) {
    // Kein zweiter Versuch: der wuerde die Wartezeit nur verdoppeln.
    return { ok: false, status: 504, error: "Die Spracherkennung hat zu lange gebraucht.", abgelehnt: false };
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
    // Groesse VOR dem Einlesen: Content-Length sagt sie, ohne dass die ganze
    // Datei im Speicher der Function landet.
    const laenge = Number(req.headers.get("content-length") ?? "0");
    if (laenge > MAX_BYTES_WAV + 100_000) {
      return antwort(413, `Die Aufnahme ist zu lang - höchstens ${MAX_SEKUNDEN} Sekunden.`);
    }

    const incomingForm = await req.formData();
    const audioFile = incomingForm.get("audio");
    const languageRoh = incomingForm.get("language");
    // Vorgabe "sv" wie bisher, wenn die App keine Sprache mitschickt.
    const language = typeof languageRoh === "string" && languageRoh ? languageRoh : "sv";

    if (!(audioFile instanceof File)) {
      return antwort(400, "Keine Aufnahme in der Anfrage.");
    }
    if (!ERLAUBTE_SPRACHEN.has(language)) {
      return antwort(400, "Diese Sprache wird nicht unterstützt.");
    }

    const sekunden = await wavSekunden(audioFile);
    const zuLang =
      sekunden !== null
        ? sekunden > MAX_SEKUNDEN || audioFile.size > MAX_BYTES_WAV
        : audioFile.size > MAX_BYTES_ANDERE;
    if (zuLang) {
      return antwort(413, `Die Aufnahme ist zu lang - höchstens ${MAX_SEKUNDEN} Sekunden.`);
    }

    // Erst NACH den billigen Pruefungen: ungueltige Anfragen zaehlen nicht
    // gegen die Bremse.
    const { schluessel, konto } = await bremsSchluessel(req);
    if (!(await bremseErlaubt(schluessel, konto))) {
      return antwort(429, "Zu viele Aufnahmen in kurzer Zeit. Warte bitte einen Moment.");
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
      return antwort(ergebnis.status, ergebnis.error);
    }
    // `vokabeln`: wie viele Hinweiswoerter tatsaechlich mitgingen - 0 heisst
    // "keine erwartet" oder "abgelehnt, ohne Hinweis wiederholt". Nur zur
    // Fehlersuche; die App liest allein `text`.
    return new Response(JSON.stringify({ text: ergebnis.text, vokabeln: genutzteVokabeln }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("speechmatics-transcribe: unerwarteter Fehler", e);
    return antwort(500, "Die Aufnahme ließ sich nicht verarbeiten.");
  }
});
