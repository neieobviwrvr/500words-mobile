import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORIES } from '../../data/categories';
import { getLanguage } from '../../data/languages';
import { CheatsheetCategoryGroup, Phrase, loadCheatsheetGroups, searchCheatsheetSentences, toPhrase } from '../../data/cheatsheetContent';
import { getTheme, ACCENT_ORANGE, ACCENT_GREEN } from '../../theme/tokens';

// Zwei Wege hierher (2026-08-07, echter Content statt Platzhalter):
// - Freitextsuche auf S6 -> "query"-Query-Parameter -> Token-Suche ueber
//   ALLE gekauften Kategorien (searchCheatsheetSentences)
// - Themen-Boxen ausgewaehlt -> selectedThemes aus AppState -> gruppiert
//   nach den gewaehlten Kategorie/Szenario-Kombinationen

export function SearchResultsScreen() {
  const { darkMode, selectedThemes, saved, toggleSaved, purchased, targetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  const language = getLanguage(targetLanguageId);
  const { query } = useLocalSearchParams<{ query?: string }>();

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [groups, setGroups] = useState<CheatsheetCategoryGroup[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const purchasedIds = CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id);
        const result = await loadCheatsheetGroups(targetLanguageId, purchasedIds);
        if (cancelled) return;
        setGroups(result.groups);
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [targetLanguageId, purchased]);

  type ResultSection = { title: string; phrases: Phrase[] };
  let sections: ResultSection[] = [];

  if (query) {
    const matches = searchCheatsheetSentences(groups, query);
    if (matches.length > 0 && language.table) {
      sections = [
        {
          title: `„${query}" (${matches.length} Treffer)`,
          phrases: matches.map((s) => toPhrase(targetLanguageId, language.table!, groups.find((g) => g.categoryId === s.category)?.title ?? s.category, s)),
        },
      ];
    }
  } else {
    for (const grp of groups) {
      const themesInGroup = Object.values(selectedThemes).filter((t) => t.groupId === grp.categoryId);
      if (themesInGroup.length === 0) continue;
      const wantsWholeCategory = grp.scenarios.length === 0;
      const sentences = wantsWholeCategory
        ? grp.allSentences
        : themesInGroup.flatMap((t) => grp.scenarios.find((sc) => `${grp.categoryId}_${sc.key}` === t.key)?.sentences ?? []);
      if (sentences.length === 0 || !language.table) continue;
      sections.push({ title: grp.title, phrases: sentences.map((s) => toPhrase(targetLanguageId, language.table!, grp.title, s)) });
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
        >
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>Suchergebnisse</Text>
      </View>

      {loading && (
        <View style={styles.centerBox}>
          <ActivityIndicator color={ACCENT_ORANGE} />
        </View>
      )}
      {!loading && loadError && (
        <View style={styles.centerBox}>
          <Text style={{ color: theme.sub, textAlign: 'center', paddingHorizontal: 20 }}>{loadError}</Text>
        </View>
      )}

      {!loading && !loadError && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {sections.length === 0 && (
            <Text style={{ color: theme.sub, fontSize: 14, paddingVertical: 20 }}>
              {query ? 'Keine Treffer gefunden.' : 'Keine Themen ausgewählt. Geh zurück und wähle mindestens eine Box aus.'}
            </Text>
          )}
          {sections.map((sec, si) => (
            <View key={si}>
              <Text style={styles.sectionTitle}>{sec.title}</Text>
              {sec.phrases.map((ph) => {
                const isSaved = !!saved[ph.id];
                return (
                  <View key={ph.id} style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
                    <View style={styles.cardBody}>
                      <Text style={[styles.context, { color: theme.sub }]}>{ph.context}</Text>
                      <Text style={[styles.sentenceText, { color: theme.text }]}>{ph.text}</Text>
                      {ph.gloss && <Text style={[styles.de, { color: theme.sub }]}>{ph.gloss}</Text>}
                    </View>
                    <Pressable
                      onPress={() => toggleSaved(ph.id, ph)}
                      accessibilityRole="button"
                      // Im gespeicherten Zustand steht dort nur ein "✓" -
                      // ohne Label gaebe es nichts Sinnvolles vorzulesen.
                      accessibilityLabel={isSaved ? 'Gespeichert' : 'Speichern'}
                      accessibilityHint={isSaved ? 'Aus den Favoriten entfernen' : 'Zu den Favoriten hinzufügen'}
                      accessibilityState={{ selected: isSaved }}
                      style={[styles.saveBtn, { borderColor: isSaved ? ACCENT_GREEN : theme.border, backgroundColor: isSaved ? theme.buyBg : 'transparent' }]}
                    >
                      <Text style={{ color: isSaved ? ACCENT_GREEN : theme.sub, fontWeight: '700', fontSize: 11 }}>
                        {isSaved ? '✓' : 'Speichern'}
                      </Text>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 16, paddingBottom: 4 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 20 },
  centerBox: { alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  scrollContent: { padding: 18, gap: 10 },
  sectionTitle: { color: ACCENT_ORANGE, fontWeight: '800', fontSize: 12, letterSpacing: 0.6, marginVertical: 10, textTransform: 'uppercase' },
  card: { borderWidth: 1.5, borderRadius: 14, padding: 14, marginBottom: 10, flexDirection: 'row', gap: 10, alignItems: 'center' },
  cardBody: { flex: 1, gap: 4 },
  context: { fontWeight: '700', fontSize: 11 },
  sentenceText: { fontSize: 15, fontWeight: '700' },
  de: { fontSize: 13, fontWeight: '500' },
  saveBtn: { paddingVertical: 7, paddingHorizontal: 10, borderRadius: 8, borderWidth: 1.5, flexShrink: 0 },
});
