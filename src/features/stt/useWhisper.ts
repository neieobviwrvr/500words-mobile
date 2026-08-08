import { useEffect, useRef, useState } from 'react';
import { Directory, File, Paths } from 'expo-file-system';
import { initWhisper, type WhisperContext } from 'whisper.rn';

// Multilingual small model (nicht ".en") - App muss FR/SV/DE/etc. erkennen,
// nicht nur Englisch. Umstieg von tiny auf base am 2026-08-04, dann base auf
// small am 2026-08-08 (echter Nutzerfall: selbst sauber ausgesprochenes
// Schwedisch/Spanisch wurde von "base" wiederholt als andere Sprache
// erkannt - Parameter-Tuning (prompt/temperatureInc/beamSize) hat das
// spuerbar, aber nicht ausreichend verbessert, siehe evaluateConcepts.ts/
// ExerciseScreen.tsx-Kommentare zum selben Datum). Nutzer-Entscheidung:
// groesserer Download (~466 statt ~142 MB) und etwas laengere Wartezeit pro
// Satz sind akzeptabel, wenn's die Erkennung wirklich robuster macht - "wir
// muessen ja nichts bezahlen". Alte "tiny"-Begruendung (Einwohnermeldeamt,
// Kaution, Fieber zu unzuverlaessig) gilt fuer den base->small-Schritt
// analog: Whisper ist stark englisch-lastig trainiert, bei Nicht-Englisch-
// Sprachen hilft ein groesseres Modell ueberproportional.
const MODEL_URL = 'https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin';
const MODEL_DIR_NAME = 'whisper-models';
const MODEL_FILE_NAME = 'ggml-small.bin';
// Alte, jetzt ungenutzte Modelldatei(en) - werden beim naechsten Start
// geloescht, damit sie nicht unnoetig Speicherplatz auf dem Geraet belegen
// (Nutzer, die schon "base" heruntergeladen hatten, wuerden sonst beide
// Dateien gleichzeitig vorhalten).
const OLD_MODEL_FILE_NAMES = ['ggml-tiny.bin', 'ggml-base.bin'];

export type WhisperStatus = 'idle' | 'downloading' | 'initializing' | 'ready' | 'error';

export function useWhisper() {
  const [status, setStatus] = useState<WhisperStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const contextRef = useRef<WhisperContext | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const dir = new Directory(Paths.document, MODEL_DIR_NAME);
        if (!dir.exists) dir.create();

        // Alte Modelldatei(en) aus fruehreren Modellgroessen-Wechseln
        // aufraeumen (best-effort - ein Fehler hier soll das Laden des
        // aktuellen Modells nicht verhindern).
        for (const oldName of OLD_MODEL_FILE_NAMES) {
          try {
            const oldFile = new File(dir, oldName);
            if (oldFile.exists) oldFile.delete();
          } catch {
            // ignorieren - reine Aufraeumarbeit, nicht kritisch
          }
        }

        const modelFile = new File(dir, MODEL_FILE_NAME);

        if (!modelFile.exists) {
          setStatus('downloading');
          const task = File.createDownloadTask(MODEL_URL, modelFile, {
            onProgress: ({ bytesWritten, totalBytes }) => {
              if (!cancelled && totalBytes > 0) setProgress(bytesWritten / totalBytes);
            },
          });
          await task.downloadAsync();
        }

        if (cancelled) return;
        setStatus('initializing');
        const context = await initWhisper({ filePath: modelFile.uri });
        if (cancelled) return;
        contextRef.current = context;
        setStatus('ready');
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : String(e));
          setStatus('error');
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // Gibt jetzt zusaetzlich die von Whisper selbst erkannte Sprache zurueck
  // (2026-08-08, Diagnose-Ergaenzung nach echtem Nutzerfall: schwedischer
  // Satz falsch ausgesprochen -> Transkript sah aus wie ein fluessiger
  // franzoesischer Satz). Vorher wurde `language` aus dem Whisper-Ergebnis
  // stillschweigend verworfen - dadurch liess sich nie unterscheiden, ob
  // (a) das erzwungene `language`-Flag wirklich ignoriert wurde (Whisper
  // meldet z.B. "fr" zurueck, obwohl "sv" angefordert war) oder (b) die
  // Sprach-Erzwingung funktioniert hat, aber das REIN-KOMPRIMIERTE/kaputte
  // Audio (Verdacht: Android-Aufnahme liefert AAC statt echtem PCM/WAV,
  // siehe useWhisperRecorder.ts-Kommentar) zu einer Halluzination gefuehrt
  // hat, die zufaellig wie Franzoesisch klingt. ExerciseScreen zeigt jetzt
  // eine Warnung, wenn erkannte != angeforderte Sprache - naechstes Mal
  // sehen wir schwarz auf weiss, welcher der beiden Faelle vorliegt.
  // Zusaetzliche Decoding-Parameter (2026-08-08, gleicher Nutzerfall):
  // `language` allein verankert nur den allerersten Token - reicht bei
  // unklarer/akzentbehafteter Aussprache nicht, um den Decoder ueber den
  // GANZEN Satz in der richtigen Sprache zu halten. Drei zusaetzliche Hebel,
  // alle ueber whisper.rn/whisper.cpp erreichbar, ohne dass der Nutzer
  // zweimal einsprechen muss:
  // - `prompt`: ein kurzer, generischer Beispielsatz in der Zielsprache
  //   (siehe languages.ts) - haelt den Sprachkontext ueber den ganzen
  //   Decoding-Vorgang aufrecht statt nur am Anfang.
  // - `temperatureInc: 0`: whisper.cpp erhoeht intern die "Kreativitaet"
  //   (Temperatur) bei Wiederholungsversuchen, wenn der erste Durchlauf
  //   laut eigener Qualitaetsheuristik unsicher aussieht - genau in diesen
  //   Fallback-Durchlaeufen ist das Risiko fuer Sprachabdrift am hoechsten.
  //   Deaktiviert diese Eskalationsleiter, bleibt immer beim nuechternen
  //   (deterministischen) ersten Versuch.
  // - `beamSize`: Beam-Search statt reinem Greedy-Sampling - robuster bei
  //   unklarer Aussprache, ohne "kreativer" zu werden.
  // Automatischer, stiller Zweitversuch bei Sprachabdrift (2026-08-08):
  // laut Whisper-Community-Diskussionen ist `language` grundsaetzlich nur
  // eine starke Praeferenz, keine harte Garantie - das gilt fuer JEDE
  // Whisper-Variante, nicht nur unsere, siehe z.B. openai/whisper Discussion
  // #529 "wrong language detection and forcing the right one". Deshalb statt
  // nur zu erkennen UND den Nutzer nochmal sprechen zu lassen: bei einer
  // erkannten Sprache != angeforderter Sprache wird DIESELBE Aufnahme
  // automatisch ein zweites Mal decodiert, mit bewusst anderer Strategie
  // (kein Prompt - falls der selbst zur Verwirrung beitraegt -, kleine
  // Temperatur statt striktem Greedy/Beam-5 - damit der zweite Versuch
  // tatsaechlich einen anderen Loesungsweg nimmt statt deterministisch
  // dasselbe Ergebnis nochmal zu berechnen). Kein Zusatzaufwand fuer den
  // Nutzer, nur etwas mehr Rechenzeit auf dem Geraet (kostenlos). Schlagen
  // beide Versuche fehl, gibt es den ersten (Prompt-verankerten) zurueck -
  // ExerciseScreen erkennt den Mismatch weiterhin und zaehlt es nicht als
  // Versuch.
  async function runAttempt(wavFileUri: string, language: string, prompt: string | undefined, opts: { beamSize: number; temperature: number }) {
    const { promise } = contextRef.current!.transcribe(wavFileUri, {
      language,
      prompt,
      temperature: opts.temperature,
      temperatureInc: 0,
      beamSize: opts.beamSize,
    });
    const { result, language: detectedLanguage } = await promise;
    return { text: result, detectedLanguage };
  }

  async function transcribe(wavFileUri: string, language: string, prompt?: string) {
    if (!contextRef.current) {
      throw new Error('Whisper-Modell ist noch nicht bereit.');
    }
    const first = await runAttempt(wavFileUri, language, prompt, { beamSize: 5, temperature: 0 });
    if (!first.detectedLanguage || first.detectedLanguage === language) {
      return first;
    }
    const second = await runAttempt(wavFileUri, language, undefined, { beamSize: 1, temperature: 0.2 });
    if (!second.detectedLanguage || second.detectedLanguage === language) {
      return second;
    }
    return first;
  }

  return { status, progress, error, transcribe };
}
