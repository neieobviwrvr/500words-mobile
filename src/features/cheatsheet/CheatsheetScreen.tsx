import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORIES } from '../../data/categories';
import { CheatsheetCategoryGroup, loadCheatsheetGroups } from '../../data/cheatsheetContent';
import { getTheme, ACCENT_BLUE } from '../../theme/tokens';

// S6 - Cheat-Sheet-Survival. Seit 2026-08-07 auf echtem Supabase-Content
// (statt Platzhalter) - zeigt alle Saetze aus gekauften Kategorien +
// Grundwortschatz, offline-cachefaehig (siehe phrasebookContent.ts).
// Themen-Boxen = echte `scenario`-Werte, nur bei Kategorien mit mehreren
// unterschiedlichen Szenarien gezeigt (siehe cheatsheetContent.ts). Echte
// Freitextsuche (z.B. "Arzt suchen") jetzt eingebaut statt Deko-Suchfeld.

export function CheatsheetScreen() {
  const { darkMode, selectedThemes, toggleThemeSelect, saved, purchased, targetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [groups, setGroups] = useState<CheatsheetCategoryGroup[]>([]);
  const [offline, setOffline] = useState(false);

  const favoritesCount = Object.values(saved).filter(Boolean).length;
  const selectedCount = Object.keys(selectedThemes).length;

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
        setOffline(result.fromCache);
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

  const doTextSearch = () => {
    if (!query.trim()) return;
    router.push({ pathname: '/cheatsheet/search-results', params: { query: query.trim() } });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
          </Pressable>
          <Text style={[styles.title, { color: theme.text }]}>Cheat‑Sheet‑Survival</Text>
          {offline && <Text style={styles.offlineBadge}>📴 Offline</Text>}
        </View>
        <View style={styles.searchRow}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={doTextSearch}
            placeholder="Wo brauchst du gerade Hilfe? (z.B. „Arzt“)"
            placeholderTextColor={theme.sub}
            style={[styles.searchInput, { borderColor: theme.border, backgroundColor: theme.cardBg, color: theme.text }]}
          />
          <Pressable onPress={doTextSearch} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>⌕</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => router.push('/cheatsheet/favorites')}>
          <Text style={styles.favLink}>Favoriten (Anzahl {favoritesCount})</Text>
        </Pressable>
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

      {!loading && !loadError && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {groups.map((grp) => (
            <View key={grp.categoryId}>
              <Pressable onPress={() => router.push(`/cheatsheet/${grp.categoryId}`)} style={styles.groupHeader}>
                <Text style={[styles.groupTitle, { color: theme.text }]}>{grp.title}</Text>
                <Text style={[styles.groupLink, { color: theme.sub }]}>
                  {grp.allSentences.length > 0 ? `${grp.allSentences.length} Sätze ›` : 'Cheat‑Sheet ›'}
                </Text>
              </Pressable>
              {grp.allSentences.length === 0 && (
                <Text style={[styles.placeholderText, { color: theme.sub }]}>(Platzhalter - noch keine Sätze für diese Kategorie)</Text>
              )}
              {grp.scenarios.length > 0 && (
                <View style={styles.themeGrid}>
                  {grp.scenarios.map((sc) => {
                    const key = `${grp.categoryId}_${sc.key}`;
                    const selected = !!selectedThemes[key];
                    return (
                      <Pressable
                        key={key}
                        onPress={() => toggleThemeSelect(key, { groupId: grp.categoryId, groupTitle: grp.title, themeLabel: sc.label, key })}
                        style={[
                          styles.themeBox,
                          { borderColor: selected ? ACCENT_BLUE : theme.border, backgroundColor: selected ? theme.modeBg : theme.cardBg },
                        ]}
                      >
                        <Text style={{ color: selected ? ACCENT_BLUE : theme.text, fontWeight: '700', fontSize: 11, textAlign: 'center' }}>
                          {sc.label} ({sc.sentences.length})
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      )}

      <View style={styles.bottom}>
        <Pressable
          disabled={selectedCount === 0}
          onPress={() => router.push('/cheatsheet/search-results')}
          style={[styles.searchAllButton, { borderColor: theme.text, opacity: selectedCount === 0 ? 0.5 : 1 }]}
        >
          <Text style={[styles.searchAllButtonText, { color: theme.text }]}>Ausgewählte anzeigen ({selectedCount})</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  top: { padding: 16, paddingBottom: 10, gap: 10 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 20, flex: 1 },
  offlineBadge: { fontSize: 11, fontWeight: '700', color: '#9A5A1E' },
  searchRow: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  searchInput: { flex: 1, padding: 12, borderRadius: 100, borderWidth: 1.5 },
  searchButton: { width: 44, height: 44, borderRadius: 22, backgroundColor: ACCENT_BLUE, alignItems: 'center', justifyContent: 'center' },
  searchButtonText: { color: '#fff', fontSize: 16 },
  favLink: { color: ACCENT_BLUE, fontWeight: '700', fontSize: 13, textDecorationLine: 'underline' },
  centerBox: { alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 8 },
  groupHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, paddingTop: 14 },
  groupTitle: { fontWeight: '800', fontSize: 13, letterSpacing: 0.4, textTransform: 'uppercase' },
  groupLink: { fontSize: 12 },
  placeholderText: { fontSize: 12, fontStyle: 'italic', marginBottom: 8 },
  themeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  themeBox: { width: '31%', paddingVertical: 10, paddingHorizontal: 6, borderRadius: 10, borderWidth: 1.5, alignItems: 'center' },
  bottom: { padding: 18 },
  searchAllButton: { padding: 14, borderRadius: 12, borderWidth: 2, alignItems: 'center' },
  searchAllButtonText: { fontWeight: '800', fontSize: 15 },
});
