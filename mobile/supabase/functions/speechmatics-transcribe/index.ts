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
// (Feld "audio" = Aufnahme-Datei, Feld "language" = Sprachcode wie "sv").

const SPEECHMATICS_BASE = "https://eu1.asr.api.speechmatics.com/v2";
const MAX_POLL_ATTEMPTS = 15;
const POLL_INTERVAL_MS = 1500;

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

    // 1. Job einreichen
    const submitForm = new FormData();
    submitForm.append("data_file", audioFile, "audio.wav");
    submitForm.append(
      "config",
      JSON.stringify({ type: "transcription", transcription_config: { language } }),
    );

    const submitRes = await fetch(`${SPEECHMATICS_BASE}/jobs/`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}` },
      body: submitForm,
    });

    if (!submitRes.ok) {
      const errText = await submitRes.text();
      return new Response(JSON.stringify({ error: `Speechmatics-Job-Einreichung fehlgeschlagen: ${errText}` }), {
        status: 502,
      });
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
        return new Response(JSON.stringify({ error: `Speechmatics-Job fehlgeschlagen: ${status}` }), { status: 502 });
      }
      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
    }

    if (!done) {
      return new Response(JSON.stringify({ error: "Zeitueberschreitung beim Warten auf Speechmatics-Ergebnis" }), {
        status: 504,
      });
    }

    // 3. Transkript abholen
    const transcriptRes = await fetch(`${SPEECHMATICS_BASE}/jobs/${jobId}/transcript?format=txt`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const transcript = (await transcriptRes.text()).trim();

    return new Response(JSON.stringify({ text: transcript }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), { status: 500 });
  }
});
