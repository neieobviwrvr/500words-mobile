import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import type { Card } from 'ts-fsrs';
import { useAppState } from '../../state/AppState';
import { CATEGORIES, CATEGORY_BY_ID } from '../../data/categories';
import { getLanguage } from '../../data/languages';
import { ExerciseSentence, loadAnswerClusters, loadExerciseSentences, shuffle } from '../../data/phrasebookContent';
import { evaluateConcepts, EvaluationResult } from '../../features/evaluation/evaluateConcepts';
import { useWhisper } from '../../features/stt/useWhisper';
import { useWhisperRecorder } from '../../features/stt/useWhisperRecorder';
import { newCard, reviewCard, isDue } from '../../features/srs/fsrsEngine';
import { cardKey, loadAllCards, saveCard } from '../../features/srs/srsStorage';
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
//
// FSRS (2026-08-07): JEDE Antwort, egal ob die Session von S2 (Kategorie,
// source="category") oder S5 (SRS, source="srs") gestartet wurde,
// aktualisiert den FSRS-Zustand der jeweiligen Karte - "ein gemeinsamer
// Pool" bedeutet auch, dass gezieltes Kategorie-Ueben auf S2 genauso zaehlt
// wie eine S5-Session. Der Unterschied liegt nur in der AUSWAHL: S2 zeigt
// die ganze Kategorie ungefiltert (bewusstes Ueben), S5 filtert auf
// tatsaechlich faellige Karten (algorithmische Auswahl). Kein hartes
// Session-Limit (Nutzer-Entscheidung 2026-08-07: "widerspricht dem
// schnellen Lernen") - stattdessen alle 10 Karten ein kurzer, nicht
// blockierender Motivations-Einschub statt eines Stopp-Punkts.

const MODE_LABELS: Record<string, string> = { spam: 'Alles', woerter: 'Wörter', saetze: 'Sätze', konversation: 'Konversation' };

const FEEDBACK_MAP: Record<EvaluationResult['tier'], { msg: string; bg: string; color: string }> = {
  richtig: { msg: '✅ Richtig-Niveau', bg: '#DFF1E4', color: '#256B3F' },
  ueberlebt: { msg: '🟡 Überlebensmodus-Niveau', bg: '#FBE9D8', color: '#9A5A1E' },
  nicht_verstanden: { msg: '❌ Nicht verstanden. Versuch es nochmal.', bg: '#F1EEE6', color: '#85807D' },
};

const MOTIVATION_INTERVAL = 10;
const MOTIVATION_MESSAGES = [
  '🔥 Stark dabei, weiter im Flow!',
  '💪 Läuft gut, mach weiter!',
  '🌟 Du bleibst dran - genau richtig!',
  '🚀 Nächste Runde, weiter geht\'s!',
];

export function ExerciseScreen({ mode, categoryId, source = 'category' }: { mode: string; categoryId: string; source?: 'category' | 'srs' }) {
  const { darkMode, targetLanguageId, purchased } = useAppState();
  const theme = getTheme(darkMode);
  const language = getLanguage(targetLanguageId);
  const whisper = useWhisper();
  const recorder = useWhisperRecorder();

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [sentences, setSentences] = useState<ExerciseSentence[]>([]);
  const [clusters, setClusters] = useState<Record<string, string[]>>({});
  const [usedSrsFallback, setUsedSrsFallback] = useState(false);
  const [offline, setOffline] = useState(false);
  // Lokaler FSRS-Kartenzustand (AsyncStorage) - als Ref statt State, weil
  // er innerhalb einer Session nur gelesen/geschrieben wird, ohne dass ein
  // Re-Render davon abhaengt.
  const cardsRef = useRef<Record<string, Card>>({});

  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordError, setRecordError] = useState<string | null>(null);
  // Diagnose-State (2026-08-08): Sprachcode, den Whisper tatsaechlich
  // erkannt hat, wenn er vom angeforderten abweicht - siehe useWhisper.ts.
  const [languageMismatch, setLanguageMismatch] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<EvaluationResult | null>(null);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState<EvaluationResult['tier'][]>([]);
  const [showMotivation, setShowMotivation] = useState(false);

  const catName = categoryId === 'grundwortschatz' || categoryId === 'alle' ? 'Grundwortschatz' : CATEGORY_BY_ID[categoryId]?.name ?? categoryId;
  // Aus dem 2026-08-06-Design-Update uebernommen: der Header-Titel
  // unterscheidet, ob die Session von S2 (Kategorie) oder S5 (SRS) aus
  // gestartet wurde, statt "srs" als eigenen mode-Wert zu behandeln.
  const headerTitle = `${source === 'srs' ? 'Wiederholen' : catName} — ${MODE_LABELS[mode] ?? 'Üben'}`;

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setLoadError(null);
      setUsedSrsFallback(false);
      try {
        // S5 (source="srs") uebt ueber ALLE gekauften Kategorien + den
        // immer freien Grundwortschatz hinweg (siehe CLAUDE.md "EIN
        // gemeinsamer Wiederholungs-Pool"); S2 (source="category") bleibt
        // auf die eine angeklickte Kategorie beschraenkt.
        const categoryIds =
          source === 'srs' ? [...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id), 'grundwortschatz'] : [categoryId];

        const [sentencesResult, clusterData, cardStates] = await Promise.all([
          loadExerciseSentences(targetLanguageId, categoryIds),
          loadAnswerClusters(),
          loadAllCards(),
        ]);
        if (cancelled) return;
        cardsRef.current = cardStates;
        const sentencesData = sentencesResult.sentences;
        setOffline(sentencesResult.fromCache);

        if (sentencesData.length === 0) {
          setLoadError('Für diese Auswahl gibt es noch keine Sätze in der Datenbank.');
          setSentences([]);
          setClusters(clusterData);
          return;
        }

        let pool = sentencesData;
        if (source === 'srs') {
          const due = sentencesData.filter((s) => {
            const key = cardKey(targetLanguageId, language.table!, s.id);
            return isDue(cardStates[key]);
          });
          if (due.length > 0) {
            pool = due;
          } else {
            // Todo aus CLAUDE.md umgesetzt: nichts faellig -> ein paar
            // Karten vorziehen statt eine leere Session zu zeigen.
            pool = sentencesData;
            setUsedSrsFallback(true);
          }
        }

        // Kein hartes Session-Limit mehr (siehe Kommentar oben) - nur bei
        // sehr grossen Pools (z.B. "alle Kategorien") auf eine sinnvolle
        // Session-Groesse begrenzen, damit eine Session nicht aus Versehen
        // 150+ Karten hat.
        setSentences(shuffle(pool).slice(0, 40));
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
  }, [targetLanguageId, categoryId, source]);

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
    setLanguageMismatch(null);
    try {
      const { text, detectedLanguage } = await whisper.transcribe(uri, language.whisperLanguage, language.whisperPrompt);
      setTranscript(text);
      // Bestaetigt (2026-08-08, echter Nutzerfall, auf iOS reproduziert -
      // damit kein Android-Aufnahmeformat-Problem, siehe useWhisperRecorder.ts):
      // Whisper meldet zurueck, welche Sprache es TATSAECHLICH decodiert
      // hat. Weicht das vom angeforderten Code ab, ist das eine echte
      // Whisper-Halluzination, keine falsche Aussprache - das erzwungene
      // `language`-Flag schraenkt nur den Start-Token ein, die eigentlichen
      // Wort-Tokens bleiben bei unklarem/nicht-muttersprachlichem Audio frei
      // waehlbar. Kein Vorfall, den der Nutzer "falsch gemacht" hat, deshalb
      // NICHT wie eine normale falsche Antwort werten: kein FSRS-Update,
      // keine "nicht_verstanden"-Wertung - stattdessen einfach nochmal
      // aufnehmen lassen (siehe CLAUDE.md "SRS soll nicht schlecht gelaunt
      // machen"). Deckt weiterhin NICHT den Fall ab, dass Whisper "sv"
      // zurueckmeldet, der Inhalt aber trotzdem Halluzination ist - dafuer
      // gibt es keinen automatischen Indikator.
      if (detectedLanguage && detectedLanguage !== language.whisperLanguage) {
        setLanguageMismatch(detectedLanguage);
        return;
      }
      // Direkt nach dem Einsprechen auswerten - kein zusaetzlicher Tap auf
      // "loesen" noetig. Wertet mit dem frisch transkribierten Ergebnis aus
      // (nicht ueber den transcript-State), weil setState() asynchron ist
      // und der neue Wert sonst noch nicht sicher verfuegbar waere.
      evaluateAnswer(text);
    } catch (e) {
      setRecordError(e instanceof Error ? e.message : String(e));
    } finally {
      setIsTranscribing(false);
    }
  }

  function evaluateAnswer(answer: string) {
    if (!sentence || !language.table) return;
    const evaluation = evaluateConcepts(answer.trim(), sentence.accepted_concepts, clusters);
    setFeedback(evaluation);
    setResults((r) => [...r, evaluation.tier]);

    // FSRS-Update - passiert IMMER, egal ob die Session von S2 oder S5
    // gestartet wurde (siehe Kommentar am Dateianfang: gemeinsamer Pool).
    const key = cardKey(targetLanguageId, language.table, sentence.id);
    const previous = cardsRef.current[key] ?? newCard();
    const updated = reviewCard(previous, evaluation.tier);
    cardsRef.current[key] = updated;
    saveCard(key, updated).catch(() => {
      // Best-effort - ein einzelner Speicherfehler soll die Uebung nicht
      // unterbrechen, hoechstens verhindern, dass diese eine Karte korrekt
      // eingeplant wird.
    });
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
    setLanguageMismatch(null);
    setFeedback(null);
    // Kein Session-Stopp, nur ein kurzer, automatisch weiterlaufender
    // Motivations-Einschub alle MOTIVATION_INTERVAL Karten (Nutzer-
    // Entscheidung 2026-08-07: kein Ja/Nein-Checkpoint, kein Abbruchpunkt).
    if (next > 0 && next % MOTIVATION_INTERVAL === 0) {
      setShowMotivation(true);
    }
  }

  const richtigN = results.filter((r) => r === 'richtig').length;
  const ueberlebtN = results.filter((r) => r === 'ueberlebt').length;
  const nichtN = results.filter((r) => r === 'nicht_verstanden').length;
  const currentAnswer = input.trim() || transcript;

  // Motivations-Einschub verschwindet nach kurzer Zeit von selbst, kann
  // aber auch per Tap sofort weggetippt werden (siehe Render unten).
  useEffect(() => {
    if (!showMotivation) return;
    const t = setTimeout(() => setShowMotivation(false), 1400);
    return () => clearTimeout(t);
  }, [showMotivation]);

  const motivationMsg = MOTIVATION_MESSAGES[Math.floor(idx / MOTIVATION_INTERVAL) % MOTIVATION_MESSAGES.length];

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>
          {headerTitle} ({language.label})
        </Text>
        {offline && <Text style={styles.offlineBadge}>📴 Offline</Text>}
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

      {!loading && !loadError && sentence && !done && showMotivation && (
        <Pressable style={styles.centerBox} onPress={() => setShowMotivation(false)}>
          <Text style={[styles.motivationText, { color: theme.text }]}>{motivationMsg}</Text>
          <Text style={{ color: theme.sub, fontSize: 12, marginTop: 6 }}>{idx} geschafft</Text>
        </Pressable>
      )}

      {!loading && !loadError && sentence && !done && !showMotivation && (
        <>
          <Text style={[styles.cardLabel, { color: theme.sub }]}>
            Karte {idx + 1} von {sentences.length}
          </Text>
          {usedSrsFallback && idx === 0 && (
            <Text style={[styles.fallbackHint, { color: theme.sub }]}>
              Aktuell nichts fällig - hier ein paar Karten zum Auffrischen vorgezogen.
            </Text>
          )}

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
          {!!languageMismatch && (
            <Text style={{ color: '#D9564F', fontSize: 12, fontWeight: '700', marginBottom: 4 }}>
              ⚠️ Whisper hat das als „{languageMismatch}" statt „{language.whisperLanguage}" erkannt - das zählt nicht als
              Versuch. Bitte nochmal einsprechen (oder Antwort tippen).
            </Text>
          )}
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
              disabled={!currentAnswer || (!!languageMismatch && !input.trim())}
              style={[styles.solveButton, { opacity: currentAnswer && !(languageMismatch && !input.trim()) ? 1 : 0.5 }]}
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
  offlineBadge: { fontSize: 11, fontWeight: '700', color: '#9A5A1E' },
  centerBox: { alignItems: 'center', justifyContent: 'center', paddingVertical: 60 },
  motivationText: { fontSize: 20, fontWeight: '800', textAlign: 'center' },
  fallbackHint: { fontSize: 12, fontStyle: 'italic', marginBottom: 10 },
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
