import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  getTheme,
  ACCENT_ORANGE,
  RADIUS,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT, schrift,
  kachel,
} from '../../theme/tokens';

// Auswahlzeile im Babbel-Stil: Linien-Icon links, fetter Text in der Mitte,
// Kaestchen rechts. Weisse Karte mit feiner Kante, ausgewaehlt bekommt sie
// Orange als Rahmen und eine ganz helle Fuellung.
//
// Bewusst Linien-Icons statt Emoji (Nutzer-Entscheidung): Emoji sehen auf
// iOS und Android unterschiedlich aus und lassen sich nicht einfaerben.

export type FeatherIconName = ComponentProps<typeof Feather>['name'];

// Fuellung der ausgewaehlten Zeile. Fest eingetragen statt mit Transparenz
// gerechnet - eine halbtransparente Orangeflaeche kippt auf dunklem Grund
// ins Braun-Graue und wird dort unlesbar.
const SELECTED_FILL_LIGHT = '#FDEEE3';
const SELECTED_FILL_DARK = '#3A2517';

type Props = {
  label: string;
  onPress: () => void;
  dark: boolean;
  selected: boolean;
  icon?: FeatherIconName;
  /** Mehrfachauswahl zeigt ein Kaestchen, Einfachauswahl einen Kreis. */
  multi?: boolean;
  disabled?: boolean;
  /** Kleiner Zusatz unter dem Text, z.B. "bald verfuegbar". */
  note?: string;
};

export function OptionRow({
  label,
  onPress,
  dark,
  selected,
  icon,
  multi = false,
  disabled = false,
  note,
}: Props) {
  const theme = getTheme(dark);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole={multi ? 'checkbox' : 'radio'}
      accessibilityLabel={note ? `${label}, ${note}` : label}
      accessibilityState={{ checked: selected, disabled }}
      style={({ pressed }) => [
        styles.row,
        kachel(dark),
        {
          backgroundColor: selected
            ? dark
              ? SELECTED_FILL_DARK
              : SELECTED_FILL_LIGHT
            : theme.cardBg,
          // Rahmenstaerken kommen aus `kachel()` (siehe unten im Array) -
          // hier nur noch die Farbe. Der frueher noetige Ausgleich des
          // Innenabstands beim Auswaehlen ist damit weg: die Staerke aendert
          // sich nicht mehr, also springt auch nichts.
          ...(selected ? { borderColor: ACCENT_ORANGE } : null),
          padding: SPACING.lg,
          opacity: disabled ? 0.45 : pressed ? 0.7 : 1,
        },
      ]}
    >
      {icon && (
        <Feather
          name={icon}
          size={22}
          color={selected ? ACCENT_ORANGE : theme.text}
          style={styles.icon}
        />
      )}

      <View style={styles.textBlock}>
        <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
        {note && <Text style={[styles.note, { color: theme.sub }]}>{note}</Text>}
      </View>

      <View
        style={[
          styles.box,
          multi ? styles.boxSquare : styles.boxRound,
          {
            borderColor: selected ? ACCENT_ORANGE : theme.border,
            backgroundColor: selected ? ACCENT_ORANGE : 'transparent',
          },
        ]}
      >
        {selected && <Feather name="check" size={15} color="#FFFFFF" />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
    minHeight: 62,
  },
  icon: {
    marginRight: SPACING.md,
  },
  textBlock: {
    flex: 1,
    paddingRight: SPACING.md,
  },
  label: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    ...schrift('700'),
  },
  note: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    marginTop: 2,
  },
  box: {
    width: 26,
    height: 26,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSquare: {
    borderRadius: RADIUS.sm,
  },
  boxRound: {
    borderRadius: 13,
  },
});
