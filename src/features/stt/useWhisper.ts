import { useEffect, useRef, useState } from 'react';
import { Directory, File, Paths } from 'expo-file-system';
import { initWhisper, type WhisperContext } from 'whisper.rn';

// Multilingual base model (nicht ".en") - App muss FR/SV/DE/etc. erkennen,
// nicht nur Englisch. Umstieg von tiny auf base am 2026-08-04, weil tiny bei
// selteneren/laengeren Woertern (Einwohnermeldeamt, Kaution, Fieber) zu
// unzuverlaessig war - Whisper ist ausserdem stark englisch-lastig trainiert,
// bei Nicht-Englisch-Sprachen hilft ein groesseres Modell ueberproportional.
const MODEL_URL = 'https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin';
const MODEL_DIR_NAME = 'whisper-models';
const MODEL_FILE_NAME = 'ggml-base.bin';

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
  // Nicht auf echtem Geraet verifiziert (kein Geraete-Build in dieser
  // Session moeglich) - naechster echter Testlauf sollte zeigen, ob das
  // reicht oder ob weiter nachjustiert werden muss.
  async function transcribe(wavFileUri: string, language: string, prompt?: string) {
    if (!contextRef.current) {
      throw new Error('Whisper-Modell ist noch nicht bereit.');
    }
    const { promise } = contextRef.current.transcribe(wavFileUri, {
      language,
      prompt,
      temperature: 0,
      temperatureInc: 0,
      beamSize: 5,
    });
    const { result, language: detectedLanguage } = await promise;
    return { text: result, detectedLanguage };
  }

  return { status, progress, error, transcribe };
}
