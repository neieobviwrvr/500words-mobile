import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { buildPhrases, findCheatGroup } from '../../data/cheatsheetContent';
import { ColoredTokens } from '../../components/ColoredTokens';
import { getTheme, ACCENT_BLUE, ACCENT_GREEN } from '../../theme/tokens';

// Cheat-Sheet-Kategorie-Screen: alle Saetze einer Themengruppe am Stueck,
// mit Vorlesen/Speichern pro Satz. Der "Darkmode"-Umschalter aus dem Design
// ist hier absichtlich global (AppState), nicht nur lokal fuer diesen einen
// Screen - wirkt konsistenter fuer eine echte App als ein Screen-lokaler Toggle.

export function CheatsheetCategoryScreen({ groupId }: { groupId: string }) {
  const { darkMode, toggleDark, saved, toggleSaved } = useAppState();
  const theme = getTheme(darkMode);
  const group = findCheatGroup(groupId);
  const phrases = buildPhrases(groupId + '_all', group.title, theme.text, true);

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Pressable onPress={() => router.back()} style={styles.backBtn}>
              <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
            </Pressable>
            <Text style={[styles.title, { color: theme.text }]}>{'Cheat‑Sheet\n' + group.title}</Text>
          </View>
          <View style={styles.headerActions}>
            <Pressable onPress={toggleDark} style={[styles.actionBtn, { borderColor: theme.border, backgroundColor: darkMode ? theme.modeBg : theme.cardBg }]}>
              <Text style={{ color: theme.text, fontWeight: '700', fontSize: 11 }}>Darkmode</Text>
            </Pressable>
            <Pressable style={[styles.actionBtn, { borderColor: theme.border }]}>
              <Text style={{ color: theme.text, fontWeight: '700', fontSize: 11 }}>Teilen + Drucken</Text>
            </Pressable>
          </View>
        </View>
        <Text style={[styles.count, { color: theme.sub }]}>{phrases.length} Sätze</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {phrases.map((ph) => {
          const isSaved = !!saved[ph.id];
          return (
            <View key={ph.id} style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
              <View style={styles.cardBody}>
                {ph.real && ph.tokens ? (
                  <>
                    <ColoredTokens tokens={ph.tokens} />
                    <Text style={[styles.phon, { color: theme.sub }]}>{ph.phon}</Text>
                    <Text style={[styles.de, { color: theme.sub }]}>{ph.de}</Text>
                  </>
                ) : (
                  <Text style={[styles.placeholder, { color: theme.sub }]}>(Platzhalter)</Text>
                )}
              </View>
              <View style={styles.cardActions}>
                <Pressable style={[styles.smallBtn, { borderColor: ACCENT_BLUE }]}>
                  <Text style={{ color: ACCENT_BLUE, fontWeight: '700', fontSize: 11 }}>▶ Vorlesen</Text>
                </Pressable>
                <Pressable
                  onPress={() => toggleSaved(ph.id, ph)}
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
  scrollContent: { paddingHorizontal: 16, paddingBottom: 18, gap: 10 },
  card: { borderWidth: 1.5, borderRadius: 14, padding: 14, flexDirection: 'row', justifyContent: 'space-between', gap: 10, alignItems: 'center' },
  cardBody: { flex: 1, minWidth: 0, gap: 3 },
  phon: { fontSize: 12, fontWeight: '500' },
  de: { fontSize: 13, fontWeight: '500' },
  placeholder: { fontSize: 14, fontStyle: 'italic' },
  cardActions: { gap: 6, flexShrink: 0 },
  smallBtn: { paddingVertical: 7, paddingHorizontal: 10, borderRadius: 8, borderWidth: 1.5 },
});
