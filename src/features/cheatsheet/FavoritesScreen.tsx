import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { speakSentence } from '../tts/speak';
import { phraseLanguageId } from '../../data/cheatsheetContent';
import { PhraseCard } from './PhraseCard';
import {
  getTheme,
  ACCENT_BLUE,
  RADIUS,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../../theme/tokens';

// Die gespeicherten Saetze - Ziel des Knopfes "Gespeicherte Saetze" auf dem
// Survival-Screen.
//
// Aufbau nach Simons Vorlage (2026-08-20): Zurueck-Pfeil und zentrierter
// Titel, darunter ein Kasten mit der Trefferzahl, dann ein Zaehler-Knopf und
// die Satzliste. Die Saetze selbst rendert `PhraseCard`, damit Favoriten,
// Kategorie-Liste und Suchergebnisse dieselbe Karte benutzen.
//
// Favoriten sind reiner lokaler AppState (saved/savedMeta), seit 2026-08-07
// via AsyncStorage persistiert - funktioniert dadurch automatisch auch
// offline und im Gast-Modus. Speichern braucht kein Netzwerk, nur die Saetze
// selbst muessen vorher einmal geladen worden sein.

export function FavoritesScreen() {
  const { darkMode, saved, savedMeta, toggleSaved } = useAppState();
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
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
          style={styles.backBtn}
        >
          <Feather name="arrow-left" size={24} color={theme.text} />
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>Gespeicherte Sätze</Text>
        {/* Gleiche Breite wie der Pfeil, damit der Titel wirklich mittig
            steht und nicht nur ungefaehr. */}
        <View style={styles.backBtn} />
      </View>

      <View style={[styles.summary, { borderColor: theme.border }]}>
        <Text style={[styles.summaryText, { color: theme.sub }]}>
          {list.length === 1 ? 'Ein gespeicherter Satz' : `Gespeichert: ${list.length} Sätze`}
        </Text>
      </View>

      <View style={styles.countRow}>
        <View style={[styles.countPill, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
          <Feather name="bookmark" size={14} color={ACCENT_BLUE} />
          <Text style={[styles.countText, { color: theme.text }]}>
            Gespeichert (Anzahl {list.length})
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {list.length === 0 ? (
          <Text style={[styles.empty, { color: theme.sub }]}>
            Noch nichts gespeichert. Tippe bei einem Satz auf das Lesezeichen, dann findest
            du ihn hier wieder — auch offline.
          </Text>
        ) : (
          list.map((f) => (
            <PhraseCard
              key={f.id}
              phrase={f}
              dark={darkMode}
              saved
              onToggleSave={() => toggleSaved(f.id, f)}
              // Sprache aus der gespeicherten ID, NICHT die gerade
              // eingestellte: die Favoriten sammeln Saetze aus allen
              // Sprachen, in denen je etwas gemerkt wurde. Vorher lief
              // alles ueber die Vorgabe Deutsch - ein schwedischer Satz
              // wurde also mit deutscher Stimme vorgelesen.
              onSpeak={() =>
                speakSentence(
                  { text: f.text, audioUrl: f.audioUrl },
                  { languageId: phraseLanguageId(f.id) }
                )
              }
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
  },
  backBtn: { width: 32, alignItems: 'flex-start' },
  title: {
    flex: 1,
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    textAlign: 'center',
  },
  summary: {
    marginHorizontal: SPACING.lg,
    borderWidth: 1.5,
    borderRadius: RADIUS.sm,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  summaryText: { fontSize: FONT_SIZE.caption, textAlign: 'center' },
  countRow: { paddingHorizontal: SPACING.lg, paddingTop: SPACING.md },
  countPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  countText: { fontSize: FONT_SIZE.caption, fontWeight: '700' },
  scrollContent: { padding: SPACING.lg, gap: SPACING.md },
  empty: { fontSize: FONT_SIZE.body, lineHeight: LINE_HEIGHT.body, paddingVertical: SPACING.xl },
});
