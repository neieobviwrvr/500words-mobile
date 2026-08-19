import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { getTheme, ACCENT_BLUE } from '../../theme/tokens';

// Favoriten sind reiner lokaler AppState (saved/savedMeta), seit 2026-08-07
// via AsyncStorage persistiert - funktioniert dadurch automatisch auch
// offline und im Gast-Modus, ganz ohne Zusatzaufwand (Nutzer-Frage
// 2026-08-07 beantwortet: Speichern braucht kein Netzwerk, nur die
// Anzeige der Saetze selbst muss vorher online geladen worden sein).

export function FavoritesScreen() {
  const { darkMode, saved, savedMeta } = useAppState();
  const theme = getTheme(darkMode);
  // Der native Header ist app-weit aus (app/_layout.tsx), jeder Screen
  // zeichnet seinen eigenen. Ohne diesen Einsatz liegt die Ueberschrift unter
  // der Statusleiste bzw. der Kamera-Insel und wird verdeckt.
  const insets = useSafeAreaInsets();

  const list = Object.keys(saved)
    .filter((id) => saved[id])
    .map((id) => savedMeta[id])
    .filter(Boolean);

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg, paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
        >
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
            <Text style={[styles.context, { color: ACCENT_BLUE }]}>{f.context}</Text>
            <Text style={[styles.sentenceText, { color: theme.text }]}>{f.text}</Text>
            {f.gloss && <Text style={[styles.de, { color: theme.sub }]}>{f.gloss}</Text>}
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
  context: { fontWeight: '700', fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 },
  sentenceText: { fontSize: 15, fontWeight: '700' },
  de: { fontSize: 13, fontWeight: '500' },
});
