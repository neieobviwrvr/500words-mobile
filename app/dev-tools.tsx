import { useState } from 'react';
import { ActivityIndicator, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { File } from 'expo-file-system';
import { useWhisper } from '../src/features/stt/useWhisper';
import { useWhisperRecorder } from '../src/features/stt/useWhisperRecorder';
import { supabase } from '../src/lib/supabase';
import { evaluateConcepts, type AcceptedConcepts, type EvaluationResult } from '../src/features/evaluation/evaluateConcepts';
import { LANGUAGES, getLanguage } from '../src/data/languages';

// Alle bisherigen Ad-hoc-Testbereiche (STT/TTS/Phrasebook), umgezogen von
// App.tsx hierher, als expo-router-Route erreichbar ueber /dev-tools -
// unveraendert in der Funktionalitaet, nur der Ort hat sich geaendert.

// 16kHz, 16-bit, mono => 32000 Bytes pro Sekunde Audio (siehe RecordingOptions).
const BYTES_PER_SECOND_16K_MONO_16BIT = 32000;

// "text" ist das vereinheitlichte Anzeige-/Vorlesefeld (bei phrasebook_master
// = die deutsche Spalte selbst, bei uebersetzten Tabellen = target_text) -
// "german" bleibt IMMER die deutsche Gloss, auch fuer nicht-deutsche
// Sprachen, zum Kontrollieren/Suchen (siehe Sprachauswahl unten, 2026-08-08:
// Nutzer-Wunsch, gezielt einen bestimmten Satz erneut testen zu koennen,
// statt auf einen zufaelligen Treffer beim Durchklicken zu hoffen).
type PhrasebookSentence = {
  id: number;
  text: string;
  german: string;
  scenario: string;
  accepted_concepts: AcceptedConcepts;
};

// Reale, bereits hochgeladene Vorleseaufnahme aus dem Supabase-Bucket "vocab_audio"
// (franzoesisch, Wort "garder") - dient hier nur als Beweis, dass das
// TTS-Playback-Pattern (vorgerenderte Datei aus Supabase abspielen) funktioniert.
const SAMPLE_TTS_URL =
  'https://xculnaxfdtwzpdplvedc.supabase.co/storage/v1/object/public/vocab_audio/franz_vocab/100_garder.mp3';

export default function DevToolsScreen() {
  const whisper = useWhisper();
  const recorder = useWhisperRecorder();
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recordError, setRecordError] = useState<string | null>(null);
  const [recordingInfo, setRecordingInfo] = useState('');

  const ttsPlayer = useAudioPlayer(SAMPLE_TTS_URL);
  const ttsStatus = useAudioPlayerStatus(ttsPlayer);

  const [phrasebookSentences, setPhrasebookSentences] = useState<PhrasebookSentence[]>([]);
  const [phrasebookIndex, setPhrasebookIndex] = useState(0);
  const [phrasebookLoading, setPhrasebookLoading] = useState(false);
  const [phrasebookError, setPhrasebookError] = useState<string | null>(null);
  const [phrasebookIsRecording, setPhrasebookIsRecording] = useState(false);
  const [phrasebookIsTranscribing, setPhrasebookIsTranscribing] = useState(false);
  const [phrasebookTranscript, setPhrasebookTranscript] = useState('');
  const [phrasebookResult, setPhrasebookResult] = useState<EvaluationResult | null>(null);
  const [phrasebookScore, setPhrasebookScore] = useState({ richtig: 0, ueberlebt: 0, total: 0 });
  const [clusters, setClusters] = useState<Record<string, string[]>>({});
  // Sprachauswahl + Suche (2026-08-08): vorher nur Deutsch, zufaellige 10
  // Saetze, keine Moeglichkeit gezielt einen bestimmten Satz erneut zu
  // testen. Jetzt: Sprache waehlbar (aus languages.ts, nur hasContent-
  // Sprachen), Freitextsuche gegen die deutsche Gloss UND den Zielsatz-
  // Text - findet z.B. "Quisiera pedir algo" ueber die Suche "bestellen"
  // oder "pedir", statt auf einen Zufallstreffer beim Durchklicken zu hoffen.
  const [phrasebookLanguageId, setPhrasebookLanguageId] = useState('de');
  const [phrasebookSearch, setPhrasebookSearch] = useState('');

  async function loadPhrasebookTest(onlyWithClusters: boolean) {
    setPhrasebookError(null);
    setPhrasebookLoading(true);
    try {
      const lang = getLanguage(phrasebookLanguageId);
      if (!lang.table) throw new Error(`Für ${lang.label} gibt es noch keine Inhalte.`);
      const isGerman = lang.table === 'phrasebook_master';
      const textColumn = isGerman ? 'german' : 'target_text';
      const selectCols = isGerman ? 'id, german, scenario, accepted_concepts' : 'id, target_text, german, scenario, accepted_concepts';

      let query = supabase.from(lang.table).select(selectCols);
      if (onlyWithClusters) {
        query = query.not('accepted_concepts->verb_cluster', 'is', null);
      }
      const search = phrasebookSearch.trim();
      if (search) {
        // Sucht in Gloss UND Zielsatz gleichzeitig (bei Deutsch ist beides
        // dieselbe Spalte, .or() mit doppeltem Filter schadet dort nicht).
        query = query.or(`german.ilike.%${search}%,${textColumn}.ilike.%${search}%`);
      }
      const [sentencesRes, clustersRes] = await Promise.all([
        query,
        supabase.from('answer_clusters').select('cluster_id, forms'),
      ]);
      if (sentencesRes.error) throw sentencesRes.error;
      if (clustersRes.error) throw clustersRes.error;
      if (!sentencesRes.data || sentencesRes.data.length === 0) throw new Error('Keine Sätze gefunden.');

      const clusterLookup: Record<string, string[]> = {};
      for (const row of clustersRes.data ?? []) {
        clusterLookup[row.cluster_id] = row.forms as string[];
      }
      setClusters(clusterLookup);

      const normalized: PhrasebookSentence[] = (sentencesRes.data as unknown as Record<string, unknown>[]).map((row) => ({
        id: row.id as number,
        text: (isGerman ? row.german : row.target_text) as string,
        german: row.german as string,
        scenario: row.scenario as string,
        accepted_concepts: row.accepted_concepts as AcceptedConcepts,
      }));
      // Bei aktiver Suche ALLE Treffer zeigen (typischerweise wenige, gezielt
      // gesucht) statt zufaellig auf 10 zu kappen - genau der Fall, den der
      // Nutzer wollte: einen bestimmten Satz gezielt wiederfinden.
      const result = search ? normalized : [...normalized].sort(() => Math.random() - 0.5).slice(0, 10);
      setPhrasebookSentences(result);
      setPhrasebookIndex(0);
      setPhrasebookScore({ richtig: 0, ueberlebt: 0, total: 0 });
      setPhrasebookTranscript('');
      setPhrasebookResult(null);
    } catch (e) {
      setPhrasebookError(e instanceof Error ? e.message : String(e));
    } finally {
      setPhrasebookLoading(false);
    }
  }

  async function handlePhrasebookRecordPress() {
    setPhrasebookError(null);
    if (!phrasebookIsRecording) {
      try {
        await recorder.start();
        setPhrasebookIsRecording(true);
      } catch (e) {
        setPhrasebookError(e instanceof Error ? e.message : String(e));
      }
      return;
    }

    setPhrasebookIsRecording(false);
    const uri = await recorder.stop();
    if (!uri) {
      setPhrasebookError('Keine Aufnahme-Datei erhalten.');
      return;
    }

    setPhrasebookIsTranscribing(true);
    setPhrasebookTranscript('');
    setPhrasebookResult(null);
    try {
      const current = phrasebookSentences[phrasebookIndex];
      const lang = getLanguage(phrasebookLanguageId);
      const { text: result } = await whisper.transcribe(uri, lang.whisperLanguage, current.text);
      setPhrasebookTranscript(result);
      const evaluation = evaluateConcepts(result, current.accepted_concepts, clusters, current.text);
      setPhrasebookResult(evaluation);
      setPhrasebookScore((prev) => ({
        richtig: prev.richtig + (evaluation.tier === 'richtig' ? 1 : 0),
        ueberlebt: prev.ueberlebt + (evaluation.tier === 'ueberlebt' ? 1 : 0),
        total: prev.total + 1,
      }));
    } catch (e) {
      setPhrasebookError(e instanceof Error ? e.message : String(e));
    } finally {
      setPhrasebookIsTranscribing(false);
    }
  }

  function nextPhrasebookSentence() {
    setPhrasebookIndex((i) => i + 1);
    setPhrasebookTranscript('');
    setPhrasebookResult(null);
  }

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
      const { text: result } = await whisper.transcribe(uri, 'fr', "Voici une phrase d'exemple en français.");
      setTranscript(`${result}  (${((Date.now() - startedAt) / 1000).toFixed(1)}s)`);
    } catch (e) {
      setRecordError(e instanceof Error ? e.message : String(e));
    } finally {
      setIsTranscribing(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>TTS-Test (Supabase-Audio)</Text>
      <Text>Status: {ttsStatus.isLoaded ? 'geladen' : 'laedt...'}</Text>
      <Button title="Satz abspielen (garder)" onPress={() => ttsPlayer.play()} />

      <View style={styles.spacer} />

      <Text style={styles.heading}>STT-Test (whisper.rn, base, on-device)</Text>
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

      <View style={styles.spacer} />

      <Text style={styles.heading}>Phrasebook-Test (Konzept-Bewertung)</Text>

      {/* Sprachauswahl (2026-08-08) - vorher fest auf Deutsch, jetzt jede
          Sprache mit echtem Content waehlbar. */}
      <View style={styles.row}>
        {LANGUAGES.filter((l) => l.hasContent).map((l) => (
          <Pressable
            key={l.id}
            onPress={() => setPhrasebookLanguageId(l.id)}
            style={[styles.langChip, phrasebookLanguageId === l.id && styles.langChipActive]}
          >
            <Text style={phrasebookLanguageId === l.id ? styles.langChipTextActive : undefined}>{l.label}</Text>
          </Pressable>
        ))}
      </View>

      {/* Freitextsuche (2026-08-08) - findet gezielt einen bestimmten Satz
          ueber deutsche Gloss ODER Zielsatz-Text, statt auf einen
          Zufallstreffer beim Durchklicken zu hoffen (Nutzer-Wunsch: einen
          konkret gemeldeten Problemfall gezielt erneut testen koennen). */}
      <TextInput
        value={phrasebookSearch}
        onChangeText={setPhrasebookSearch}
        placeholder="Suche (z.B. 'bestellen' oder 'pedir')..."
        style={styles.searchInput}
      />

      <Button
        title={phrasebookSearch.trim() ? 'Suchen' : '10 zufällige Sätze laden'}
        onPress={() => loadPhrasebookTest(false)}
        disabled={phrasebookLoading || whisper.status !== 'ready'}
      />
      <Button
        title="Nur Sätze MIT Verb-Cluster laden (Richtig/Überlebt testen)"
        onPress={() => loadPhrasebookTest(true)}
        disabled={phrasebookLoading || whisper.status !== 'ready'}
      />
      {phrasebookLoading && <ActivityIndicator />}
      {phrasebookError && <Text style={styles.error}>{phrasebookError}</Text>}

      {phrasebookSentences.length > 0 && phrasebookIndex < phrasebookSentences.length && (
        <View>
          <Text>
            Satz {phrasebookIndex + 1} von {phrasebookSentences.length} (
            {phrasebookSentences[phrasebookIndex].scenario})
          </Text>
          <Text style={styles.transcript}>{phrasebookSentences[phrasebookIndex].text}</Text>
          {phrasebookLanguageId !== 'de' && <Text>({phrasebookSentences[phrasebookIndex].german})</Text>}
          <Button
            title={phrasebookIsRecording ? 'Aufnahme stoppen & bewerten' : 'Nachsprechen'}
            onPress={handlePhrasebookRecordPress}
            disabled={phrasebookIsTranscribing}
          />
          {phrasebookIsTranscribing && (
            <View style={styles.row}>
              <ActivityIndicator />
              <Text>Whisper transkribiert...</Text>
            </View>
          )}
          {phrasebookTranscript !== '' && <Text>Erkannt: {phrasebookTranscript}</Text>}
          {phrasebookResult && (
            <View>
              <Text
                style={
                  phrasebookResult.tier === 'richtig'
                    ? styles.correct
                    : phrasebookResult.tier === 'ueberlebt'
                      ? styles.survived
                      : styles.error
                }
              >
                {phrasebookResult.tier === 'richtig'
                  ? '✅ Richtig-Niveau'
                  : phrasebookResult.tier === 'ueberlebt'
                    ? '🟡 Überlebensmodus-Niveau'
                    : '❌ Nicht verstanden'}
              </Text>
              <Text>Getroffen: {phrasebookResult.matched.join(', ') || '-'}</Text>
              <Text>Gefehlt: {phrasebookResult.missed.join(', ') || '-'}</Text>
              {phrasebookResult.verbClusterMatched !== null && (
                <Text>Richtiges Verb erkannt: {phrasebookResult.verbClusterMatched ? 'ja' : 'nein'}</Text>
              )}
              <Button
                title={phrasebookIndex + 1 < phrasebookSentences.length ? 'Nächster Satz' : 'Fertig'}
                onPress={nextPhrasebookSentence}
              />
            </View>
          )}
        </View>
      )}

      {phrasebookSentences.length > 0 && phrasebookIndex >= phrasebookSentences.length && (
        <Text style={styles.transcript}>
          Ergebnis: {phrasebookScore.richtig} Richtig-Niveau, {phrasebookScore.ueberlebt} Überlebensmodus, von{' '}
          {phrasebookScore.total}
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
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
  correct: {
    color: '#1e8449',
    fontWeight: '600',
  },
  survived: {
    color: '#b7950b',
    fontWeight: '600',
  },
  transcript: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  langChip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#999',
  },
  langChipActive: {
    backgroundColor: '#1e8449',
    borderColor: '#1e8449',
  },
  langChipTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
  },
});
