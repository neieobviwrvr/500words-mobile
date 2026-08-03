import { useEffect, useRef, useState } from 'react';
import { Directory, File, Paths } from 'expo-file-system';
import { initWhisper, type WhisperContext } from 'whisper.rn';

// Multilingual tiny model (nicht ".en") - App muss FR/SV/etc. erkennen, nicht nur Englisch.
const MODEL_URL = 'https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin';
const MODEL_DIR_NAME = 'whisper-models';
const MODEL_FILE_NAME = 'ggml-tiny.bin';

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

  async function transcribe(wavFileUri: string, language: string) {
    if (!contextRef.current) {
      throw new Error('Whisper-Modell ist noch nicht bereit.');
    }
    const { promise } = contextRef.current.transcribe(wavFileUri, { language });
    const { result } = await promise;
    return result;
  }

  return { status, progress, error, transcribe };
}
