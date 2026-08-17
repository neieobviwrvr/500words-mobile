import { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { getTheme, RADIUS, SPACING } from '../theme/tokens';

// Umrandete Flaeche - der Grundbaustein, aus dem die Screens bestehen.
//
// Vorher definierten Pfad-Box, Wortschatz-Kaesten, Sprachfeld und die
// Knoepfe unten auf S1 jeweils dieselbe Kombination aus Rahmenstaerke,
// Radius und Fuellung neu, mit vier leicht verschiedenen Zahlen. Die
// Rahmenstaerke ist deshalb hier festgelegt und nicht mehr pro Screen
// waehlbar.
//
// `padded` ist der Normalfall. Flaechen, die selbst scrollen (die Pfad-Box),
// setzen es auf false und geben den Rand innen an den Scroll-Inhalt weiter -
// sonst scrollt der Inhalt unter einem Rand weg, der nicht mitscrollt.

const BORDER_WIDTH = 1.5;

type Props = {
  dark: boolean;
  children: ReactNode;
  padded?: boolean;
  style?: ViewStyle;
};

export function Card({ dark, children, padded = true, style }: Props) {
  const theme = getTheme(dark);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.cardBg,
          borderColor: theme.border,
          padding: padded ? SPACING.lg : 0,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: BORDER_WIDTH,
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
  },
});

export { BORDER_WIDTH as CARD_BORDER_WIDTH };
