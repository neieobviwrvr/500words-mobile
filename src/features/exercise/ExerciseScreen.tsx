import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORY_BY_ID } from '../../data/categories';
import { FEEDBACK_MAP, SENTENCE_SETS, Tier } from '../../data/mockExercise';
import { TaggedTokens } from '../../components/ColoredTokens';
import { getTheme, ACCENT_BLUE, ACCENT_GREEN } from '../../theme/tokens';

// S4 - Uebungs-Screen (generisch fuer Woerter/Saetze/Konversation/SRS).
// EIN Screen-Typ mit Parametern (mode, categoryId), wie in CLAUDE.md
// verbindlich festgelegt. Inhalte aktuell noch aus mockExercise.ts
// (Platzhalter-Spanisch aus dem Design-Prototyp) - Anbindung an echten
// Supabase-Content (phrasebook_master etc.) ist ein separater Backlog-Punkt.

const MODE_LABELS: Record<string, string> = { spam: 'Alles', woerter: 'Wörter', saetze: 'Sätze', srs: 'Wiederholen' };

export function ExerciseScreen({ mode, categoryId }: { mode: string; categoryId: string }) {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);
  const set = SENTENCE_SETS.default;

  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<Tier | null>(null);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState<Tier[]>([]);

  const catName = categoryId === 'grundwortschatz' || categoryId === 'alle' ? 'Grundwortschatz' : CATEGORY_BY_ID[categoryId]?.name ?? categoryId;
  const sentence = set[Math.min(idx, set.length - 1)];

  const checkAnswer = () => {
    const a = input.trim().toLowerCase();
    const tier = sentence.check(a);
    setFeedback(tier);
    setResults((r) => [...r, tier]);
  };

  const nextCard = () => {
    const next = idx + 1;
    if (next >= set.length) {
      setDone(true);
      return;
    }
    setIdx(next);
    setInput('');
    setFeedback(null);
  };

  const richtigN = results.filter((r) => r === 'richtig').length;
  const ueberlebtN = results.filter((r) => r === 'ueberlebt').length;
  const nichtN = results.filter((r) => r === 'nicht').length;

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>
          {catName} — {MODE_LABELS[mode] ?? 'Üben'}
        </Text>
      </View>

      {!done ? (
        <>
          <Text style={[styles.cardLabel, { color: theme.sub }]}>
            Karte {idx + 1} von {set.length}
          </Text>

          <View style={[styles.sentenceCard, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
            <TaggedTokens tokens={sentence.tokens} textColor={theme.text} style={styles.sentenceText} />
            <Pressable style={[styles.ttsButton, { borderColor: ACCENT_BLUE }]}>
              <Text style={{ color: ACCENT_BLUE, fontWeight: '700', fontSize: 12 }}>▶ Vorlesen</Text>
            </Pressable>
          </View>

          <View style={[styles.inputCard, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Antwort / Übersetzung"
              placeholderTextColor={theme.sub}
              multiline
              style={[styles.input, { color: theme.text }]}
            />
          </View>

          {feedback && (
            <View style={[styles.feedback, { backgroundColor: FEEDBACK_MAP[feedback].bg }]}>
              <Text style={{ color: FEEDBACK_MAP[feedback].color, fontWeight: '700', fontSize: 13 }}>
                {FEEDBACK_MAP[feedback].msg}
              </Text>
            </View>
          )}

          {!feedback ? (
            <Pressable style={styles.solveButton} onPress={checkAnswer}>
              <Text style={styles.solveButtonText}>lösen ▶</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.nextButton} onPress={nextCard}>
              <Text style={styles.nextButtonText}>Weiter ▶</Text>
            </Pressable>
          )}
        </>
      ) : (
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
  title: { fontWeight: '800', fontSize: 17, flex: 1 },
  cardLabel: { fontWeight: '700', fontSize: 12, marginBottom: 16 },
  sentenceCard: { borderWidth: 1.5, borderRadius: 16, padding: 18, marginBottom: 14, gap: 12 },
  sentenceText: { lineHeight: 26 },
  ttsButton: { alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 100, borderWidth: 1.5 },
  inputCard: { borderWidth: 1.5, borderRadius: 16, padding: 14, marginBottom: 16, minHeight: 70 },
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
