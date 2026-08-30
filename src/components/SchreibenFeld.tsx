import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getTheme, elevation, RADIUS, SPACING, FONT_SIZE } from '../theme/tokens';

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
  label = 'Schreiben',
  variant = 'balken',
}: {
  dark: boolean;
  offen: boolean;
  onToggle: () => void;
  /** Das eigentliche Eingabefeld samt Zubehoer (Knopf, Hinweistext, ...). */
  children: ReactNode;
  /**
   * Beschriftung des Aufklapp-Knopfes. Vorgabe "Schreiben" - so heisst er
   * seit 2026-08-23 ueberall. Das Satz-Stufe-1-Template (2026-08-30) nennt
   * ihn stattdessen "Kein Sprechen möglich?", weil er dort neben einem
   * grossen Mikrofon steht und die Frage beantwortet, die sich dann stellt.
   */
  label?: string;
  /**
   * `balken` (Vorgabe): volle Breite, Beschriftung links, Chevron rechts -
   * der bisherige Aufbau. `pille` (2026-08-30): schmale, mittige Pille ohne
   * Chevron fuer das Satz-Stufe-1-Template, wo der Knopf ein leiser
   * Ausweg sein soll und kein Bedienelement auf Augenhoehe mit dem Mikrofon.
   */
  variant?: 'balken' | 'pille';
}) {
  const theme = getTheme(dark);
  const pille = variant === 'pille';
  return (
    <View>
      <Pressable
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityHint={
          offen ? 'Eingabefeld ausblenden' : 'Eingabefeld statt Sprechen einblenden'
        }
        accessibilityState={{ expanded: offen }}
        style={({ pressed }) => [
          pille ? styles.pille : styles.kopf,
          // Die Pillen-Variante hebt sich ab statt sich abzugrenzen (siehe
          // ELEVATION.chip in tokens.ts) - sie steht im Satz-Stufe-1-Template
          // neben Chips, die es genauso machen. Der Balken bleibt beim
          // Rahmen: er liegt dort ueber einem Eingabefeld und soll als Teil
          // des Formulars lesbar bleiben, nicht darueber schweben.
          pille ? elevation(dark, 'chip') : null,
          {
            backgroundColor: pille ? theme.subtleFill : theme.cardBg,
            borderColor: pille ? 'transparent' : theme.border,
            opacity: pressed ? 0.75 : 1,
            transform: [{ translateY: pille && pressed ? 1 : 0 }],
          },
        ]}
      >
        <Text style={[styles.text, { color: pille ? theme.sub : theme.text }]}>{label}</Text>
        {pille ? null : <Feather name={offen ? 'chevron-up' : 'chevron-down'} size={18} color={theme.sub} />}
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
  pille: {
    alignSelf: 'center',
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
  },
  text: { fontSize: FONT_SIZE.caption, fontWeight: '700' },
  inhalt: { marginTop: SPACING.sm },
});
