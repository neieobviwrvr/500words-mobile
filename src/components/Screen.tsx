import { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTheme, SPACING } from '../theme/tokens';

// Seitengeruest fuer alle Screens ausserhalb des Onboardings (das hat mit
// `OnboardingScaffold` sein eigenes, weil dort Zurueck-Pfeil und
// Fortschrittsbalken fest dazugehoeren).
//
// Nimmt drei Dinge ab, die bisher jeder Screen selbst getippt hat: den
// Untergrund aus dem Theme, den Rand zur Statusleiste und den seitlichen
// Rand. Der obere Rand kommt aus den echten Geraete-Einsaetzen - unter der
// Dynamic Island darf nichts Bedienbares liegen.
//
// Der untere Rand ist bewusst NICHT eingebaut: liegt der Screen in der
// Tab-Gruppe, haelt die Tab-Leiste den Abstand zum Home-Indikator selbst.
// Wer ausserhalb der Leiste liegt und unten Bedienelemente hat, setzt
// `padBottom`.

type Props = {
  dark: boolean;
  children: ReactNode;
  /** Seitlicher Rand. `false` fuer Screens, die bis an den Rand zeichnen. */
  padHorizontal?: boolean;
  /** Abstand zum Home-Indikator - nur ausserhalb der Tab-Leiste noetig. */
  padBottom?: boolean;
  style?: ViewStyle;
};

export function Screen({
  dark,
  children,
  padHorizontal = true,
  padBottom = false,
  style,
}: Props) {
  const theme = getTheme(dark);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.page,
        {
          backgroundColor: theme.pageBg,
          paddingTop: insets.top + SPACING.sm,
          paddingHorizontal: padHorizontal ? SPACING.lg : 0,
          paddingBottom: padBottom ? Math.max(insets.bottom, SPACING.lg) : 0,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
