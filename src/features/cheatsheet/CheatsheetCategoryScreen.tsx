import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORY_BY_ID } from '../../data/categories';
import { getLanguage } from '../../data/languages';
import { loadExerciseSentences } from '../../data/phrasebookContent';
import { Phrase, phraseLanguageId, toPhrase } from '../../data/cheatsheetContent';
import { speakSentence } from '../../features/tts/speak';
import { PhraseCard } from './PhraseCard';
import { getTheme, ACCENT_BLUE, ACCENT_GREEN, schrift } from '../../theme/tokens';

// Cheat-Sheet-Kategorie-Screen: alle Saetze EINER Kategorie am Stueck, mit
// Vorlesen/Speichern pro Satz - seit 2026-08-07 auf echtem Content statt
// Platzhaltern. "groupId" ist jetzt eine echte Kategorie-ID (z.B.
// "hotel_accommodation" oder "grundwortschatz"), keine der alten 3
// hartcodierten Demo-Gruppen mehr.

export function CheatsheetCategoryScreen({ groupId }: { groupId: string }) {
  const { darkMode, toggleDark, saved, toggleSaved, targetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  // Der native Header ist app-weit aus (app/_layout.tsx), jeder Screen
  // zeichnet seinen eigenen. Ohne diesen Einsatz liegt die Ueberschrift unter
  // der Statusleiste bzw. der Kamera-Insel und wird verdeckt.
  const insets = useSafeAreaInsets();
  const language = getLanguage(targetLanguageId);
  const title = groupId === 'grundwortschatz' ? 'Grundwortschatz' : (CATEGORY_BY_ID[groupId]?.name ?? groupId);

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [offline, setOffline] = useState(false);
  // Zeichen an/aus (2026-08-26, Simons Wunsch: "bei Chinesisch und generell
  // allen Sprachen mit Schriftzeichen die Schriftzeichen wieder ein- und
  // ausschalten"). Aus den echten Daten abgeleitet statt hart auf
  // `targetLanguageId === 'zh'` geprueft (nur dort ist `phonetic` je
  // gesetzt) - dieselbe Konvention wie `hatSchriftzeichen` in
  // WordReviewScreen.tsx, bleibt automatisch richtig, sollte je eine
  // weitere Sprache mit eigener Schrift dazukommen. Vorgabe AUS, wie beim
  // selben Umschalter in WordReviewScreen.tsx (Simons frühere Korrektur
  // dort) - gelernt/nachgeschlagen wird primär ueber Pinyin.
  const [zeichenEin, setZeichenEin] = useState(false);
  const hatSchriftzeichen = phrases.some((p) => !!p.phonetic);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const { sentences, fromCache } = await loadExerciseSentences(targetLanguageId, [groupId]);
        if (cancelled) return;
        setPhrases(sentences.map((s) => toPhrase(targetLanguageId, language.table!, title, s)));
        setOffline(fromCache);
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetLanguageId, groupId]);

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg, paddingTop: insets.top }]}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
        >
              <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
            </Pressable>
            {/* Berichtigt 2026-08-26 (Simons Fehlerbericht): stand bisher
                immer "Cheat-Sheet", auch wenn man ueber die neue
                "Satzliste"-Schaltflaeche im Lektionen-Chevron hierher kam
                (siehe LessonsScreen.tsx) - niemand fuehrt diesen Screen
                aktuell noch als "Cheat-Sheet" ein, also traegt er jetzt
                den Namen, den man tatsaechlich angetippt hat. */}
            <Text style={[styles.title, { color: theme.text }]}>{'Satzliste\n' + title}</Text>
          </View>
          <View style={styles.headerActions}>
            {/* Nur sichtbar, wenn ueberhaupt Schriftzeichen da sind (siehe
                hatSchriftzeichen oben) - fuer Sprachen ohne eigene Schrift
                gaebe es nichts zum Aus-/Einblenden. */}
            {hatSchriftzeichen ? (
              <Pressable
                onPress={() => setZeichenEin((z) => !z)}
                accessibilityRole="switch"
                accessibilityLabel="Zeichen"
                accessibilityState={{ checked: zeichenEin }}
                style={[styles.actionBtn, { borderColor: theme.border, backgroundColor: theme.cardBg }]}
              >
                <Text style={{ color: theme.text, ...schrift('700'), fontSize: 11 }}>
                  Zeichen {zeichenEin ? 'aus' : 'ein'}
                </Text>
              </Pressable>
            ) : null}
            <Pressable
              onPress={toggleDark}
              accessibilityRole="switch"
              accessibilityLabel="Darkmode"
              accessibilityState={{ checked: darkMode }}
              style={[styles.actionBtn, { borderColor: theme.border, backgroundColor: darkMode ? theme.modeBg : theme.cardBg }]}
            >
              <Text style={{ color: theme.text, ...schrift('700'), fontSize: 11 }}>Darkmode</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Teilen und Drucken"
              accessibilityHint="Noch nicht verfügbar"
              accessibilityState={{ disabled: true }}
              style={[styles.actionBtn, { borderColor: theme.border }]}
            >
              <Text style={{ color: theme.text, ...schrift('700'), fontSize: 11 }}>Teilen + Drucken</Text>
            </Pressable>
          </View>
        </View>
        <Text style={[styles.count, { color: theme.sub }]}>
          {phrases.length} Sätze{offline ? ' · 📴 Offline' : ''}
        </Text>
      </View>

      {loading && (
        <View style={styles.centerBox}>
          <ActivityIndicator color={ACCENT_BLUE} />
        </View>
      )}
      {!loading && loadError && (
        <View style={styles.centerBox}>
          <Text style={{ color: theme.sub, textAlign: 'center', paddingHorizontal: 20 }}>{loadError}</Text>
        </View>
      )}
      {!loading && !loadError && phrases.length === 0 && (
        <View style={styles.centerBox}>
          <Text style={{ color: theme.sub, fontStyle: 'italic' }}>(Platzhalter - noch keine Sätze für diese Kategorie)</Text>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* EINE Karte fuer alle drei Nachschlag-Screens (2026-08-21).
            Hier stand bis dahin eine zweite, handgezeichnete Fassung, die
            nur Satz und Uebersetzung kannte - Pinyin und Kulturhinweis
            fielen dadurch unter den Tisch, obwohl die Daten da waren.
            Dieselbe Falle wie bei den doppelten Situationsnamen. */}
        {phrases.map((ph) => (
          <PhraseCard
            key={ph.id}
            phrase={ph}
            dark={darkMode}
            zeichenEin={zeichenEin}
            saved={!!saved[ph.id]}
            onToggleSave={() => toggleSaved(ph.id, ph)}
            onSpeak={() =>
              speakSentence(
                { text: ph.text, audioUrl: ph.audioUrl },
                { languageId: phraseLanguageId(ph.id) }
              )
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  top: { padding: 16, paddingBottom: 8, gap: 6 },
  header: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10, flexShrink: 1 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { ...schrift('800'), fontSize: 19, lineHeight: 22 },
  headerActions: { gap: 6 },
  actionBtn: { paddingVertical: 7, paddingHorizontal: 10, borderRadius: 8, borderWidth: 1.5 },
  count: { fontSize: 13, ...schrift('500') },
  centerBox: { alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 18, gap: 10 },
  card: { borderWidth: 1.5, borderRadius: 14, padding: 14, flexDirection: 'row', justifyContent: 'space-between', gap: 10, alignItems: 'center' },
  cardBody: { flex: 1, minWidth: 0, gap: 3 },
  sentenceText: { fontSize: 15, ...schrift('700') },
  de: { fontSize: 13, ...schrift('500') },
  cardActions: { gap: 6, flexShrink: 0 },
  smallBtn: { paddingVertical: 7, paddingHorizontal: 10, borderRadius: 8, borderWidth: 1.5 },
});
