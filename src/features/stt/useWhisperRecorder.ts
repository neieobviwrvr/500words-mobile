import { useEffect, useRef } from 'react';
import {
  AudioModule,
  setAudioModeAsync,
  useAudioRecorder,
  type RecordingOptions,
} from 'expo-audio';

// whisper.rn's transcribe() braucht 16-bit PCM WAV @ 16kHz mono.
// Auf iOS liefert linearPCM das direkt. Auf Android unterstuetzt MediaRecorder
// kein natives WAV - falls das in der Praxis Probleme macht, ist der naechste
// Schritt der von whisper.rn dokumentierte Realtime-PCM-Stream-Adapter
// (@fugood/react-native-audio-pcm-stream) statt dieser datei-basierten Aufnahme.
const whisperRecordingOptions: RecordingOptions = {
  extension: '.wav',
  sampleRate: 16000,
  numberOfChannels: 1,
  bitRate: 256000,
  ios: {
    outputFormat: 'lpcm',
    audioQuality: 96,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  android: {
    outputFormat: 'mpeg4',
    audioEncoder: 'aac',
  },
  web: {
    mimeType: 'audio/webm',
  },
};

export function useWhisperRecorder() {
  const recorder = useAudioRecorder(whisperRecordingOptions);
  const hasWarmedUp = useRef(false);

  // iOS braucht nach App-Start eine kurze Aufwaermphase, bis das Mikrofon
  // wirklich Samples liefert - ohne das ist die allererste echte Aufnahme
  // oft (fast) leer ("[BLANK_AUDIO]"). Einmalig eine stille Kurzaufnahme
  // im Hintergrund machen, damit die Audio-Session schon aktiv ist, wenn
  // der Nutzer zum ersten Mal wirklich aufnimmt.
  useEffect(() => {
    if (hasWarmedUp.current) return;
    hasWarmedUp.current = true;
    (async () => {
      try {
        const permission = await AudioModule.requestRecordingPermissionsAsync();
        if (!permission.granted) return;
        await setAudioModeAsync({ playsInSilentMode: true, allowsRecording: true });
        await recorder.prepareToRecordAsync();
        recorder.record();
        await new Promise((resolve) => setTimeout(resolve, 300));
        await recorder.stop();
      } catch {
        // Best-effort - falls das Warm-up fehlschlaegt, soll es die App
        // nicht blockieren, die normale Aufnahme laeuft trotzdem an.
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function start() {
    const permission = await AudioModule.requestRecordingPermissionsAsync();
    if (!permission.granted) {
      throw new Error('Mikrofon-Berechtigung wurde verweigert.');
    }
    await setAudioModeAsync({ playsInSilentMode: true, allowsRecording: true });
    await recorder.prepareToRecordAsync();
    recorder.record();
  }

  async function stop(): Promise<string | null> {
    await recorder.stop();
    return recorder.uri;
  }

  return { recorder, start, stop };
}
