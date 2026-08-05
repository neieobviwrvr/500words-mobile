import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORY_BY_ID } from '../../data/categories';
import { getLanguage } from '../../data/languages';
import { ExerciseSentence, loadAnswerClusters, loadExerciseSentences, shuffle } from '../../data/phrasebookContent';
import { evaluateConcepts, EvaluationResult } from '../../features/evaluation/evaluateConcepts';
import { useWhisper } from '../../features/stt/useWhisper';
import { useWhisperRecorder } from '../../features/stt/useWhisperRecorder';
import { getTheme, ACCENT_BLUE, ACCENT_GREEN } from '../../theme/tokens';

// S4 - Uebungs-Screen (generisch fuer Woerter/Saetze/Konversation/SRS).
// Seit 2026-08-05 mit echtem Supabase-Content (phrasebook_master /
// schwedisch_phrasebook, je nach gewaehlter Zielsprache) statt der
// Spanisch-Platzhaltersaetze, plus echtem STT (whisper.rn) als primaerer
// Eingabeweg - Text-Eingabe bleibt Fallback, exakt wie in CLAUDE.md als
// Kernprinzip festgelegt ("TTS/STT ist die eigentliche Uebung, Text-Eingabe
// nur Uebergangsloesung"). "Woerter lernen" nutzt mangels echter
// Vokabel-Karteikarten-Tabelle aktuell dieselben Satz-Inhalte wie "Saetze
// lernen" - Lernmodus 1 (echte Wortkarten) ist laut Backlog noch nicht gebaut.

const MODE_LABELS: Record<string, string> = { spam: 'Alles', woerter: 'Wörter', saetze: 'Sätze', srs: 'Wiederholen' };

const FEEDBACK_MAP: Record<EvaluationResult['tier'], { msg: string; bg: string; color: string }> = {
  richtig: { msg: '✅ Richtig-Niveau', bg: '#DFF1E4', color: '#256B3F' },
  ueberlebt: { msg: '🟡 Überlebensmodus-Niveau', bg: '#FBE9D8', color: '#9A5A1E' },
  nicht_verstanden: { msg: '❌ Nicht verstanden. Versuch es nochmal.', bg: '#F1EEE6', color: '#85807D' },
};

export function ExerciseScreen({ mode, categoryId }: { mode: string; categoryId: string }) {
  const { darkMode, targetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  const language = getLanguage(targetLanguageId);
  const whisper = useWhisper();
  const recorder = useWhisperRecorder();

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [sentences, setSentences] = useState<ExerciseSentence[]>([]);
  const [clusters, setClusters] = useState<Record<string, string[]>>({});

  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordError, setRecordError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<EvaluationResult | null>(null);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState<EvaluationResult['tier'][]>([]);

  const catName = categoryId === 'grundwortschatz' || categoryId === 'alle' ? 'Grundwortschatz' : CATEGORY_BY_ID[categoryId]?.name ?? categoryId;

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setLoadError(null);
      try {
        const [sentencesData, clusterData] = await Promise.all([
          loadExerciseSentences(targetLanguageId, categoryId),
          loadAnswerClusters(),
        ]);
        if (cancelled) return;
        if (sentencesData.length === 0) {
          setLoadError('Für diese Auswahl gibt es noch keine Sätze in der Datenbank.');
          setSentences([]);
        } else {
          setSentences(shuffle(sentencesData).slice(0, 10));
        }
        setClusters(clusterData);
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetLanguageId, categoryId]);

  const sentence = sentences[Math.min(idx, sentences.length - 1)];

  async function handleMicPress() {
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
    setIsTranscribing(true);
    setTranscript('');
    try {
      const result = await whisper.transcribe(uri, language.whisperLanguage);
      setTranscript(result);
      // Direkt nach dem Einsprechen auswerten - kein zusaetzlicher Tap auf
      // "loesen" noetig. Wertet mit dem frisch transkribierten Ergebnis aus
      // (nicht ueber den transcript-State), weil setState() asynchron ist
      // und der neue Wert sonst noch nicht sicher verfuegbar waere.
      evaluateAnswer(result);
    } catch (e) {
      setRecordError(e instanceof Error ? e.message : String(e));
    } finally {
      setIsTranscribing(false);
    }
  }

  function evaluateAnswer(answer: string) {
    if (!sentence) return;
    const evaluation = evaluateConcepts(answer.trim(), sentence.accepted_concepts, clusters);
    setFeedback(evaluation);
    setResults((r) => [...r, evaluation.tier]);
  }

  function checkAnswer() {
    evaluateAnswer(input.trim() || transcript);
  }

  function nextCard() {
    const next = idx + 1;
    if (next >= sentences.length) {
      setDone(true);
      return;
    }
    setIdx(next);
    setInput('');
    setTranscript('');
    setFeedback(null);
  }

  const richtigN = results.filter((r) => r === 'richtig').length;
  const ueberlebtN = results.filter((r) => r === 'ueberlebt').length;
  const nichtN = results.filter((r) => r === 'nicht_verstanden').length;
  const currentAnswer = input.trim() || transcript;

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>
          {catName} — {MODE_LABELS[mode] ?? 'Üben'} ({language.label})
        </Text>
      </View>

      {loading && (
        <View style={styles.centerBox}>
          <ActivityIndicator color={ACCENT_BLUE} />
          <Text style={{ color: theme.sub, marginTop: 8 }}>Sätze werden geladen…</Text>
        </View>
      )}

      {!loading && loadError && (
        <View style={styles.centerBox}>
          <Text style={{ color: theme.sub, textAlign: 'center' }}>{loadError}</Text>
        </View>
      )}

      {!loading && !loadError && sentence && !done && (
        <>
          <Text style={[styles.cardLabel, { color: theme.sub }]}>
            Karte {idx + 1} von {sentences.length}
          </Text>

          <View style={[styles.sentenceCard, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
            <Text style={[styles.sentenceText, { color: theme.text }]}>{sentence.text}</Text>
            {sentence.germanGloss && <Text style={[styles.gloss, { color: theme.sub }]}>{sentence.germanGloss}</Text>}
            <Pressable disabled style={[styles.ttsButton, { borderColor: theme.border }]}>
              <Text style={{ color: theme.sub, fontWeight: '700', fontSize: 12 }}>▶ Vorlesen (noch kein Audio)</Text>
            </Pressable>
          </View>

          <View style={styles.sttRow}>
            {whisper.status === 'ready' ? (
              <Pressable
                onPress={handleMicPress}
                style={[styles.micButton, { backgroundColor: isRecording ? '#D9564F' : ACCENT_BLUE }]}
              >
                <Text style={styles.micButtonText}>
                  {isRecording ? '● Aufnahme stoppen' : isTranscribing ? '…' : '🎙 Antwort einsprechen'}
                </Text>
              </Pressable>
            ) : whisper.status === 'error' ? (
              <Text style={{ color: theme.sub, fontSize: 12 }}>Spracherkennung nicht verfügbar ({whisper.error}) - bitte Text eingeben.</Text>
            ) : (
              <Text style={{ color: theme.sub, fontSize: 12 }}>
                Spracherkennung lädt{whisper.status === 'downloading' ? ` (${Math.round(whisper.progress * 100)}%)` : '…'} - bis dahin geht auch Text-Eingabe.
              </Text>
            )}
            {isTranscribing && <ActivityIndicator color={ACCENT_BLUE} style={{ marginLeft: 8 }} />}
          </View>
          {!!transcript && <Text style={[styles.transcript, { color: theme.text }]}>Erkannt: „{transcript}"</Text>}
          {!!recordError && <Text style={{ color: '#D9564F', fontSize: 12 }}>{recordError}</Text>}

          <View style={[styles.inputCard, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="…oder Antwort tippen (Fallback)"
              placeholderTextColor={theme.sub}
              multiline
              style={[styles.input, { color: theme.text }]}
            />
          </View>

          {feedback && (
            <View style={[styles.feedback, { backgroundColor: FEEDBACK_MAP[feedback.tier].bg }]}>
              <Text style={{ color: FEEDBACK_MAP[feedback.tier].color, fontWeight: '700', fontSize: 13 }}>
                {FEEDBACK_MAP[feedback.tier].msg}
              </Text>
              {feedback.missed.length > 0 && (
                <Text style={{ color: FEEDBACK_MAP[feedback.tier].color, fontSize: 12, marginTop: 4 }}>
                  Gefehlt: {feedback.missed.join(', ')}
                </Text>
              )}
            </View>
          )}

          {!feedback ? (
            <Pressable
              disabled={!currentAnswer}
              style={[styles.solveButton, { opacity: currentAnswer ? 1 : 0.5 }]}
              onPress={checkAnswer}
            >
              <Text style={styles.solveButtonText}>lösen ▶</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.nextButton} onPress={nextCard}>
              <Text style={styles.nextButtonText}>Weiter ▶</Text>
            </Pressable>
          )}
        </>
      )}

      {!loading && !loadError && done && (
        <View style={styles.doneWrap}>
          <Text style={[styles.doneTitle, { color: theme.text }]}>Session beendet</Text>
          <Text style={[styles.doneSummary, { color: theme.sub }]}>
            {richtigN}× richtig · {ueberlebtN}× überlebt · {nichtN}× nicht verstanden
          </Text>
          <Pressable style={styles.finishButton} onPress={() => router.back()}>
            <Text style={styles.finishButtonText}>Fertig</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 18 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 16, flex: 1 },
  centerBox: { alignItems: 'center', justifyContent: 'center', paddingVertical: 60 },
  cardLabel: { fontWeight: '700', fontSize: 12, marginBottom: 16 },
  sentenceCard: { borderWidth: 1.5, borderRadius: 16, padding: 18, marginBottom: 14, gap: 10 },
  sentenceText: { fontSize: 19, fontWeight: '700', lineHeight: 26 },
  gloss: { fontSize: 13, fontStyle: 'italic' },
  ttsButton: { alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 100, borderWidth: 1.5 },
  sttRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  micButton: { flex: 1, paddingVertical: 14, borderRadius: 100, alignItems: 'center' },
  micButtonText: { color: '#fff', fontWeight: '800', fontSize: 15 },
  transcript: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  inputCard: { borderWidth: 1.5, borderRadius: 16, padding: 14, marginBottom: 16, minHeight: 60 },
  input: { fontSize: 15, flex: 1, textAlignVertical: 'top' },
  feedback: { padding: 12, borderRadius: 12, marginBottom: 14 },
  solveButton: {
    alignSelf: 'center', paddingVertical: 16, paddingHorizontal: 36, borderRadius: 100,
    borderWidth: 2, borderColor: ACCENT_GREEN,
  },
  solveButtonText: { color: ACCENT_GREEN, fontWeight: '800', fontSize: 16 },
  nextButton: { alignSelf: 'center', paddingVertical: 16, paddingHorizontal: 36, borderRadius: 100, backgroundColor: ACCENT_BLUE },
  nextButtonText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  doneWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 60 },
  doneTitle: { fontWeight: '800', fontSize: 22, marginBottom: 6 },
  doneSummary: { fontWeight: '600', fontSize: 15, marginBottom: 24 },
  finishButton: { paddingVertical: 15, paddingHorizontal: 38, borderRadius: 100, backgroundColor: ACCENT_BLUE },
  finishButtonText: { color: '#fff', fontWeight: '800', fontSize: 16 },
});
