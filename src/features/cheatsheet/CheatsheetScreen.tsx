import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CHEAT_GROUP_DEFS } from '../../data/cheatsheetContent';
import { getTheme, ACCENT_BLUE } from '../../theme/tokens';

// S6 - Cheat-Sheet-Survival (aus dem Claude-Design-Prototyp uebernommen, war
// bisher NICHT im CLAUDE.md-Screen-Inventar dokumentiert - siehe
// App-Overlay-Spec.md Abschnitt 4). Verhalten laut Spec: Thema-Boxen sind
// auswaehlbar, jede Auswahl zaehlt +1 im Favoriten-Label; beide Such-Buttons
// sind aktuell ohne Funktion (das Suchfeld oben) bzw. fuehren zu den
// Suchergebnissen basierend auf den ausgewaehlten Themen-Boxen (unten).

export function CheatsheetScreen() {
  const { darkMode, selectedThemes, toggleThemeSelect, saved } = useAppState();
  const theme = getTheme(darkMode);

  const favoritesCount = Object.values(saved).filter(Boolean).length;
  const selectedCount = Object.keys(selectedThemes).length;

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
          </Pressable>
          <Text style={[styles.title, { color: theme.text }]}>Cheat‑Sheet‑Survival</Text>
        </View>
        <View style={styles.searchRow}>
          <TextInput
            placeholder="Wo brauchst du gerade Hilfe?"
            placeholderTextColor={theme.sub}
            style={[styles.searchInput, { borderColor: theme.border, backgroundColor: theme.cardBg, color: theme.text }]}
          />
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>⌕</Text>
          </View>
        </View>
        <Pressable onPress={() => router.push('/cheatsheet/favorites')}>
          <Text style={styles.favLink}>Favoriten (Anzahl {favoritesCount})</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {CHEAT_GROUP_DEFS.map((grp) => (
          <View key={grp.id}>
            <Pressable onPress={() => router.push(`/cheatsheet/${grp.id}`)} style={styles.groupHeader}>
              <Text style={[styles.groupTitle, { color: theme.text }]}>{grp.title}</Text>
              <Text style={[styles.groupLink, { color: theme.sub }]}>Cheat‑Sheet ›</Text>
            </Pressable>
            <View style={styles.themeGrid}>
              {grp.themes.map((label, i) => {
                const key = `${grp.id}_${i}`;
                const selected = !!selectedThemes[key];
                return (
                  <Pressable
                    key={key}
                    onPress={() => toggleThemeSelect(key, { groupId: grp.id, groupTitle: grp.title, themeLabel: label, key })}
                    style={[
                      styles.themeBox,
                      { borderColor: selected ? ACCENT_BLUE : theme.border, backgroundColor: selected ? theme.modeBg : theme.cardBg },
                    ]}
                  >
                    <Text style={{ color: selected ? ACCENT_BLUE : theme.text, fontWeight: '700', fontSize: 11, textAlign: 'center' }}>
                      {label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottom}>
        <Pressable
          disabled={selectedCount === 0}
          onPress={() => router.push('/cheatsheet/search-results')}
          style={[styles.searchAllButton, { borderColor: theme.text, opacity: selectedCount === 0 ? 0.5 : 1 }]}
        >
          <Text style={[styles.searchAllButtonText, { color: theme.text }]}>Suchen ({selectedCount})</Text>
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
  title: { fontWeight: '800', fontSize: 20 },
  searchRow: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  searchInput: { flex: 1, padding: 12, borderRadius: 100, borderWidth: 1.5 },
  searchButton: { width: 44, height: 44, borderRadius: 22, backgroundColor: ACCENT_BLUE, alignItems: 'center', justifyContent: 'center' },
  searchButtonText: { color: '#fff', fontSize: 16 },
  favLink: { color: ACCENT_BLUE, fontWeight: '700', fontSize: 13, textDecorationLine: 'underline' },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 8 },
  groupHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, paddingTop: 14 },
  groupTitle: { fontWeight: '800', fontSize: 13, letterSpacing: 0.4, textTransform: 'uppercase' },
  groupLink: { fontSize: 12 },
  themeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  themeBox: { width: '31%', paddingVertical: 10, paddingHorizontal: 6, borderRadius: 10, borderWidth: 1.5, alignItems: 'center' },
  bottom: { padding: 18 },
  searchAllButton: { padding: 14, borderRadius: 12, borderWidth: 2, alignItems: 'center' },
  searchAllButtonText: { fontWeight: '800', fontSize: 15 },
});
