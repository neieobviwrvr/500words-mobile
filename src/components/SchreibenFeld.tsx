import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getTheme, RADIUS, SPACING, FONT_SIZE } from '../theme/tokens';

// Die Texteingabe ist ueberall ein FALLBACK, kein gleichwertiger Weg (siehe
// CLAUDE.md Kernprinzip: Sprechen lernen, nicht Lesen/Schreiben). Bis zum
// 2026-08-23 stand das Feld auf S4 (ExerciseScreen) trotzdem immer offen da -
// wer es sieht, tippt, und hat die Karte durch, ohne einmal gesprochen zu
// haben. LessonScreen hatte genau das schon geloest (2026-08-21, Knopf "Ich
// kann gerade nicht sprechen"), nur mit eigenem Wortlaut und eigenem Aufbau.
//
// Nutzer-Wunsch (Simon, 2026-08-23): EIN einheitlicher Drop-Down-Knopf mit
// Titel "Schreiben" ueberall, statt zwei verschiedener Loesungen fuer
// dasselbe Problem. Diese Komponente ersetzt beide Stellen.
//
// KONTROLLIERT (offen/onToggle kommen von aussen), keine eigene State-
// Verwaltung: beide Bildschirme lassen das Feld nach dem ersten Aufklappen
// fuer die ganze Sitzung offen (LessonScreens Regel von 2026-08-21 gilt
// weiter) - dafuer muss der Zustand beim aufrufenden Screen liegen, nicht
// hier versteckt sein.
export function SchreibenFeld({
  dark,
  offen,
  onToggle,
  children,
}: {
  dark: boolean;
  offen: boolean;
  onToggle: () => void;
  /** Das eigentliche Eingabefeld samt Zubehoer (Knopf, Hinweistext, ...). */
  children: ReactNode;
}) {
  const theme = getTheme(dark);
  return (
    <View>
      <Pressable
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityLabel="Schreiben"
        accessibilityHint={
          offen ? 'Eingabefeld ausblenden' : 'Eingabefeld statt Sprechen einblenden'
        }
        accessibilityState={{ expanded: offen }}
        style={({ pressed }) => [
          styles.kopf,
          { backgroundColor: theme.cardBg, borderColor: theme.border, opacity: pressed ? 0.7 : 1 },
        ]}
      >
        <Text style={[styles.text, { color: theme.text }]}>Schreiben</Text>
        <Feather name={offen ? 'chevron-up' : 'chevron-down'} size={18} color={theme.sub} />
      </Pressable>
      {offen ? <View style={styles.inhalt}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  kopf: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  text: { fontSize: FONT_SIZE.caption, fontWeight: '700' },
  inhalt: { marginTop: SPACING.sm },
});
