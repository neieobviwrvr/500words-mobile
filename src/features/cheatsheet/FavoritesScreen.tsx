import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { ColoredTokens } from '../../components/ColoredTokens';
import { getTheme, ACCENT_BLUE } from '../../theme/tokens';

export function FavoritesScreen() {
  const { darkMode, saved, savedMeta } = useAppState();
  const theme = getTheme(darkMode);

  const list = Object.keys(saved)
    .filter((id) => saved[id])
    .map((id) => savedMeta[id])
    .filter(Boolean);

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>Favoriten ({list.length})</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {list.length === 0 && (
          <Text style={{ color: theme.sub, fontSize: 14, paddingVertical: 20 }}>
            Noch keine gespeicherten Sätze. Tippe in einem Cheat-Sheet auf „Speichern".
          </Text>
        )}
        {list.map((f) => (
          <View key={f.id} style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
            <Text style={styles.context}>{f.context}</Text>
            {f.real && f.tokens ? (
              <>
                <ColoredTokens tokens={f.tokens} />
                <Text style={[styles.de, { color: theme.sub }]}>{f.de}</Text>
              </>
            ) : (
              <Text style={[styles.placeholder, { color: theme.sub }]}>(Platzhalter)</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 16, paddingBottom: 10 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 21 },
  scrollContent: { padding: 18, gap: 10 },
  card: { borderWidth: 1.5, borderRadius: 14, padding: 14, gap: 4 },
  context: { color: ACCENT_BLUE, fontWeight: '700', fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 },
  de: { fontSize: 13, fontWeight: '500' },
  placeholder: { fontSize: 14, fontStyle: 'italic' },
});
