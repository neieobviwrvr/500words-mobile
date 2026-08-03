import { useState } from 'react';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { File } from 'expo-file-system';
import { useWhisper } from './src/features/stt/useWhisper';
import { useWhisperRecorder } from './src/features/stt/useWhisperRecorder';

// 16kHz, 16-bit, mono => 32000 Bytes pro Sekunde Audio (siehe RecordingOptions).
const BYTES_PER_SECOND_16K_MONO_16BIT = 32000;

// Reale, bereits hochgeladene Vorleseaufnahme aus dem Supabase-Bucket "vocab_audio"
// (franzoesisch, Wort "garder") - dient hier nur als Beweis, dass das
// TTS-Playback-Pattern (vorgerenderte Datei aus Supabase abspielen) funktioniert.
const SAMPLE_TTS_URL =
  'https://xculnaxfdtwzpdplvedc.supabase.co/storage/v1/object/public/vocab_audio/franz_vocab/100_garder.mp3';

export default function App() {
  const whisper = useWhisper();
  const recorder = useWhisperRecorder();
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recordError, setRecordError] = useState<string | null>(null);
  const [recordingInfo, setRecordingInfo] = useState('');

  const ttsPlayer = useAudioPlayer(SAMPLE_TTS_URL);
  const ttsStatus = useAudioPlayerStatus(ttsPlayer);

  async function handleRecordPress() {
    setRecordError(null);
    if (!isRecording) {
      try {
        await recorder.start();
        setIsRecording(true);
      } catch (e) {
        setRecordError(e instanceof Error ? e.message : String(e));
      }
      return;
    }

    setIsRecording(false);
    const uri = await recorder.stop();
    if (!uri) {
      setRecordError('Keine Aufnahme-Datei erhalten.');
      return;
    }

    const sizeBytes = new File(uri).size ?? 0;
    const impliedSeconds = sizeBytes / BYTES_PER_SECOND_16K_MONO_16BIT;
    setRecordingInfo(`Aufnahme-Datei: ${sizeBytes} Bytes (~${impliedSeconds.toFixed(1)}s Audio)`);

    setIsTranscribing(true);
    setTranscript('');
    const startedAt = Date.now();
    try {
      const result = await whisper.transcribe(uri, 'fr');
      setTranscript(`${result}  (${((Date.now() - startedAt) / 1000).toFixed(1)}s)`);
    } catch (e) {
      setRecordError(e instanceof Error ? e.message : String(e));
    } finally {
      setIsTranscribing(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.heading}>TTS-Test (Supabase-Audio)</Text>
      <Text>Status: {ttsStatus.isLoaded ? 'geladen' : 'laedt...'}</Text>
      <Button title="Satz abspielen (garder)" onPress={() => ttsPlayer.play()} />

      <View style={styles.spacer} />

      <Text style={styles.heading}>STT-Test (whisper.rn, tiny, on-device)</Text>
      {whisper.status !== 'ready' && whisper.status !== 'error' && (
        <View style={styles.row}>
          <ActivityIndicator />
          <Text>
            {whisper.status === 'downloading'
              ? `Modell wird geladen: ${Math.round(whisper.progress * 100)}%`
              : 'Initialisiere Whisper...'}
          </Text>
        </View>
      )}
      {whisper.status === 'error' && <Text style={styles.error}>Fehler: {whisper.error}</Text>}

      <Button
        title={isRecording ? 'Aufnahme stoppen & transkribieren' : 'Aufnahme starten'}
        onPress={handleRecordPress}
        disabled={whisper.status !== 'ready' || isTranscribing}
      />

      {isTranscribing && (
        <View style={styles.row}>
          <ActivityIndicator />
          <Text>Whisper transkribiert...</Text>
        </View>
      )}

      {recordingInfo !== '' && <Text>{recordingInfo}</Text>}
      {recordError && <Text style={styles.error}>{recordError}</Text>}
      {transcript !== '' && <Text style={styles.transcript}>Erkannt: {transcript}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 80,
    gap: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  spacer: {
    height: 32,
  },
  error: {
    color: '#c0392b',
  },
  transcript: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});
