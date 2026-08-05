import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState, ThemeSelection } from '../../state/AppState';
import { buildPhrases } from '../../data/cheatsheetContent';
import { ColoredTokens } from '../../components/ColoredTokens';
import { getTheme, ACCENT_ORANGE } from '../../theme/tokens';

export function SearchResultsScreen() {
  const { darkMode, selectedThemes } = useAppState();
  const theme = getTheme(darkMode);

  const selectedByGroup: Record<string, ThemeSelection[]> = {};
  Object.values(selectedThemes).forEach((t) => {
    (selectedByGroup[t.groupId] = selectedByGroup[t.groupId] || []).push(t);
  });
  const searchGroups = Object.keys(selectedByGroup).map((gid) => {
    const themes = selectedByGroup[gid];
    const phrases = themes.flatMap((t) =>
      buildPhrases(t.key, themes.length > 1 ? `${t.groupTitle} – ${t.themeLabel}` : t.themeLabel, theme.text, true)
    );
    return { title: themes[0].groupTitle, phrases };
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>Suchergebnisse</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {searchGroups.length === 0 && (
          <Text style={{ color: theme.sub, fontSize: 14, paddingVertical: 20 }}>
            Keine Themen ausgewählt. Geh zurück und wähle mindestens eine Box aus.
          </Text>
        )}
        {searchGroups.map((grp, gi) => (
          <View key={gi}>
            <Text style={styles.groupTitle}>{grp.title}</Text>
            {grp.phrases.map((ph) => (
              <View key={ph.id} style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
                <Text style={[styles.context, { color: theme.sub }]}>{ph.context}</Text>
                {ph.real && ph.tokens ? (
                  <>
                    <ColoredTokens tokens={ph.tokens} />
                    <Text style={[styles.de, { color: theme.sub }]}>{ph.de}</Text>
                  </>
                ) : (
                  <Text style={[styles.placeholder, { color: theme.sub }]}>(Platzhalter)</Text>
                )}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 16, paddingBottom: 4 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 20 },
  scrollContent: { padding: 18, gap: 10 },
  groupTitle: { color: ACCENT_ORANGE, fontWeight: '800', fontSize: 12, letterSpacing: 0.6, marginVertical: 10, textTransform: 'uppercase' },
  card: { borderWidth: 1.5, borderRadius: 14, padding: 14, marginBottom: 10, gap: 4 },
  context: { fontWeight: '700', fontSize: 11 },
  de: { fontSize: 13, fontWeight: '500' },
  placeholder: { fontSize: 14, fontStyle: 'italic' },
});
