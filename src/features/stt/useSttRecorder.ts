import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import {
  AudioModule,
  setAudioModeAsync,
  useAudioRecorder,
  type RecordingOptions,
} from 'expo-audio';

// 16-bit PCM WAV @ 16kHz mono. Das Format stammt urspruenglich aus der
// Anforderung von whisper.rn (bis 2026-08-12 der STT-Anbieter, seitdem
// entfernt) und wird fuer den Speechmatics-Upload unveraendert beibehalten -
// unkomprimiertes WAV ist ein Standard-Eingabeformat, kein Grund es zu
// aendern.
// Auf iOS liefert linearPCM das direkt. Auf Android unterstuetzt MediaRecorder
// kein natives WAV - falls das in der Praxis Probleme macht, ist der naechste
// Schritt ein Realtime-PCM-Stream-Adapter
// (@fugood/react-native-audio-pcm-stream) statt dieser datei-basierten
// Aufnahme. Dieser Punkt ist unabhaengig vom STT-Anbieter weiterhin offen,
// siehe CLAUDE.md-Backlog.
const recordingOptions: RecordingOptions = {
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

export function useSttRecorder() {
  const recorder = useAudioRecorder(recordingOptions);
  const hasWarmedUp = useRef(false);

  // iOS braucht nach App-Start eine kurze Aufwaermphase, bis das Mikrofon
  // wirklich Samples liefert - ohne das ist die allererste echte Aufnahme
  // oft (fast) leer ("[BLANK_AUDIO]"). Einmalig eine stille Kurzaufnahme
  // im Hintergrund machen, damit die Audio-Session schon aktiv ist, wenn
  // der Nutzer zum ersten Mal wirklich aufnimmt.
  //
  // Zwei Einschraenkungen (2026-08-16):
  // 1. Nur auf iOS - das Problem ist iOS-spezifisch (siehe oben), auf
  //    Android/Web brachte das Warm-up nichts und kostete nur eine
  //    ueberfluessige Mikrofon-Aktivierung.
  // 2. NUR wenn die Berechtigung bereits erteilt ist (get... statt
  //    request...). Vorher fragte das Warm-up die Erlaubnis direkt beim
  //    Betreten des Uebungs-Screens an, bevor der Nutzer irgendetwas
  //    angetippt hatte. Apples HIG rat davon ab: Berechtigungen im Kontext
  //    erfragen, sonst wirkt die Anfrage grundlos und wird oefter
  //    abgelehnt - und eine einmal abgelehnte Mikrofon-Erlaubnis macht die
  //    Kernfunktion der App unbrauchbar. Die echte Anfrage passiert jetzt
  //    ausschliesslich in start(), also beim ersten Tap auf den
  //    Mikrofon-Button. Beim allerersten Mal entfaellt das Warm-up damit -
  //    danach greift es wie gehabt.
  useEffect(() => {
    if (hasWarmedUp.current) return;
    if (Platform.OS !== 'ios') return;
    hasWarmedUp.current = true;
    (async () => {
      try {
        const permission = await AudioModule.getRecordingPermissionsAsync();
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
