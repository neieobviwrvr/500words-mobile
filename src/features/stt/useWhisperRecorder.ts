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
