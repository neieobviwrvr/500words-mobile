import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORY_BY_ID } from '../../data/categories';
import { getLanguage } from '../../data/languages';
import { loadExerciseSentences } from '../../data/phrasebookContent';
import { Phrase, toPhrase } from '../../data/cheatsheetContent';
import { getTheme, ACCENT_BLUE, ACCENT_GREEN } from '../../theme/tokens';

// Cheat-Sheet-Kategorie-Screen: alle Saetze EINER Kategorie am Stueck, mit
// Vorlesen/Speichern pro Satz - seit 2026-08-07 auf echtem Content statt
// Platzhaltern. "groupId" ist jetzt eine echte Kategorie-ID (z.B.
// "hotel_accommodation" oder "grundwortschatz"), keine der alten 3
// hartcodierten Demo-Gruppen mehr.

export function CheatsheetCategoryScreen({ groupId }: { groupId: string }) {
  const { darkMode, toggleDark, saved, toggleSaved, targetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  const language = getLanguage(targetLanguageId);
  const title = groupId === 'grundwortschatz' ? 'Grundwortschatz' : (CATEGORY_BY_ID[groupId]?.name ?? groupId);

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [offline, setOffline] = useState(false);

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
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
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
            <Text style={[styles.title, { color: theme.text }]}>{'Cheat‑Sheet\n' + title}</Text>
          </View>
          <View style={styles.headerActions}>
            <Pressable
              onPress={toggleDark}
              accessibilityRole="switch"
              accessibilityLabel="Darkmode"
              accessibilityState={{ checked: darkMode }}
              style={[styles.actionBtn, { borderColor: theme.border, backgroundColor: darkMode ? theme.modeBg : theme.cardBg }]}
            >
              <Text style={{ color: theme.text, fontWeight: '700', fontSize: 11 }}>Darkmode</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Teilen und Drucken"
              accessibilityHint="Noch nicht verfügbar"
              accessibilityState={{ disabled: true }}
              style={[styles.actionBtn, { borderColor: theme.border }]}
            >
              <Text style={{ color: theme.text, fontWeight: '700', fontSize: 11 }}>Teilen + Drucken</Text>
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
        {phrases.map((ph) => {
          const isSaved = !!saved[ph.id];
          return (
            <View key={ph.id} style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
              <View style={styles.cardBody}>
                <Text style={[styles.sentenceText, { color: theme.text }]}>{ph.text}</Text>
                {ph.gloss && <Text style={[styles.de, { color: theme.sub }]}>{ph.gloss}</Text>}
              </View>
              <View style={styles.cardActions}>
                <Pressable
                  disabled
                  accessibilityRole="button"
                  accessibilityLabel="Vorlesen"
                  accessibilityHint="Für diesen Satz gibt es noch keine Audioaufnahme"
                  accessibilityState={{ disabled: true }}
                  style={[styles.smallBtn, { borderColor: theme.border }]}
                >
                  <Text style={{ color: theme.sub, fontWeight: '700', fontSize: 11 }}>▶ (kein Audio)</Text>
                </Pressable>
                <Pressable
                  onPress={() => toggleSaved(ph.id, ph)}
                  accessibilityRole="button"
                  accessibilityLabel={isSaved ? 'Gespeichert' : 'Speichern'}
                  accessibilityHint={isSaved ? 'Aus den Favoriten entfernen' : 'Zu den Favoriten hinzufügen'}
                  accessibilityState={{ selected: isSaved }}
                  style={[styles.smallBtn, { borderColor: isSaved ? ACCENT_GREEN : theme.border, backgroundColor: isSaved ? theme.buyBg : 'transparent' }]}
                >
                  <Text style={{ color: isSaved ? ACCENT_GREEN : theme.sub, fontWeight: '700', fontSize: 11 }}>
                    {isSaved ? '✓ Gespeichert' : 'Speichern'}
                  </Text>
                </Pressable>
              </View>
            </View>
          );
        })}
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
  title: { fontWeight: '800', fontSize: 19, lineHeight: 22 },
  headerActions: { gap: 6 },
  actionBtn: { paddingVertical: 7, paddingHorizontal: 10, borderRadius: 8, borderWidth: 1.5 },
  count: { fontSize: 13, fontWeight: '500' },
  centerBox: { alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 18, gap: 10 },
  card: { borderWidth: 1.5, borderRadius: 14, padding: 14, flexDirection: 'row', justifyContent: 'space-between', gap: 10, alignItems: 'center' },
  cardBody: { flex: 1, minWidth: 0, gap: 3 },
  sentenceText: { fontSize: 15, fontWeight: '700' },
  de: { fontSize: 13, fontWeight: '500' },
  cardActions: { gap: 6, flexShrink: 0 },
  smallBtn: { paddingVertical: 7, paddingHorizontal: 10, borderRadius: 8, borderWidth: 1.5 },
});
