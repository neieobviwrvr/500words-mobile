import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  getTheme,
  ACCENT_ORANGE,
  ACCENT_ORANGE_EDGE,
  KACHEL_RAND_LIGHT,
  RADIUS,
  SPACING,
  FONT_SIZE, schrift } from '../theme/tokens';

// Vollflaechige Pillen-Knoepfe.
//
// Form von Babbel (Pille, ruhige Flaeche), das "gedrueckt"-Gefuehl von
// Duolingo: eine dunklere Unterkante, die beim Druecken verschwindet,
// waehrend der Knopf um genau diese Hoehe nach unten rutscht. Das ist der
// gesamte 30%-Duolingo-Anteil an den Knoepfen - keine dicken Rahmen, keine
// Grossbuchstaben.
//
// Lag bis 2026-08-18 unter `components/onboarding/`, wurde aber nie
// onboarding-spezifisch gebaut. Seit S1 dieselben Knoepfe braucht, liegt er
// eine Ebene hoeher; `components/onboarding/index.ts` reicht ihn weiter,
// damit die zwoelf Onboarding-Screens ihre Importe behalten.

// Von 4 auf 6 (2026-09-01, Simons "Boom"-Vorgabe: "borderBottomWidth ...
// spuerbar erhoehen, z.B. auf 5 bis 6"). Gilt fuer JEDEN Pillen-Knopf UND -
// weil `PathScreen.tsx` diese Konstante mitbenutzt - fuer die Bodenkante der
// Kategorie-Kacheln im Lernpfad.
const PRESS_DEPTH = 6;

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = {
  label: string;
  onPress: () => void;
  dark: boolean;
  variant?: Variant;
  disabled?: boolean;
  busy?: boolean;
  /** Nur fuer Screenreader - erklaert, was der Knopf ausloest. */
  hint?: string;
};

export function PillButton({
  label,
  onPress,
  dark,
  variant = 'primary',
  disabled = false,
  busy = false,
  hint,
}: Props) {
  const theme = getTheme(dark);
  const inactive = disabled || busy;

  // Ghost hat keine Flaeche und keine Kante - fuer "Ueberspringen" und
  // aehnliche Nebenwege, die sichtbar, aber nicht einladend sein sollen.
  const isGhost = variant === 'ghost';
  const isPrimary = variant === 'primary';

  const face = isPrimary
    ? ACCENT_ORANGE
    : isGhost
      ? 'transparent'
      : theme.cardBg;
  // Sekundaer-Rahmen (2026-09-01): heller Modus bekommt denselben kraeftigen
  // Neutralton wie `kachel()`, statt des blasseren `theme.border` - sonst
  // staende ein Sekundaer-Knopf sichtbar duenner/heller neben einer
  // Kachel-Flaeche. Dunkler Modus bleibt bei `theme.border`, genau wie bei
  // `kachel()` selbst (dort ist die Themenkontur schon kraeftig genug).
  const sekundaerRand = dark ? theme.border : KACHEL_RAND_LIGHT;
  const edge = isPrimary ? ACCENT_ORANGE_EDGE : isGhost ? 'transparent' : sekundaerRand;
  const labelColor = isPrimary ? '#FFFFFF' : theme.text;

  return (
    <Pressable
      onPress={onPress}
      disabled={inactive}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={hint}
      accessibilityState={{ disabled: inactive, busy }}
      style={({ pressed }) => [
        styles.wrapper,
        // Beim Druecken rutscht der Knopf um die Kantenhoehe nach unten und
        // die Kante verschwindet - zusammen ergibt das den Eindruck, dass
        // die Flaeche wirklich heruntergedrueckt wird.
        {
          marginBottom: pressed && !inactive ? 0 : PRESS_DEPTH,
          transform: [{ translateY: pressed && !inactive ? PRESS_DEPTH : 0 }],
        },
        inactive && styles.inactive,
      ]}
    >
      {({ pressed }) => (
        <View
          style={[
            styles.face,
            {
              backgroundColor: face,
              borderBottomWidth: pressed && !inactive ? 0 : PRESS_DEPTH,
              borderBottomColor: edge,
              borderWidth: isPrimary || isGhost ? 0 : 1.5,
              borderColor: isPrimary || isGhost ? 'transparent' : sekundaerRand,
            },
            // Sekundaer braucht die Unterkante zusaetzlich zum Rahmen -
            // borderWidth setzt sonst alle vier Seiten gleich dick.
            !isPrimary && !isGhost && !pressed && { borderBottomWidth: PRESS_DEPTH },
          ]}
        >
          {busy ? (
            <ActivityIndicator color={isPrimary ? '#FFFFFF' : theme.text} />
          ) : (
            <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
          )}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  inactive: {
    opacity: 0.45,
  },
  face: {
    minHeight: 54,
    borderRadius: RADIUS.pill,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.xl,
  },
  label: {
    fontSize: FONT_SIZE.bodyLg,
    ...schrift('800'),
  },
});

/** Kantenhoehe der Druck-Optik - S1 nutzt sie fuer die Pfad-Knoten mit. */
export { PRESS_DEPTH };
