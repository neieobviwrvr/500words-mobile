import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAppState } from '../../state/AppState';
import { HeaderMenu, PillButton, Screen } from '../../components';
import {
  getTheme,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../../theme/tokens';

// Platzhalter fuer Tabs, deren Screen es noch nicht gibt.
//
// Bewusst nicht leer und bewusst ohne "Coming soon"-Floskel: der Screen sagt,
// was hier einmal stehen wird, damit ein Tab-Tipp eine Antwort gibt statt
// einer weissen Flaeche. Sobald der echte Screen steht, faellt der jeweilige
// Aufruf weg - die Komponente selbst bleibt fuer den naechsten Platzhalter.

type Props = {
  title: string;
  /** Was hier spaeter stehen wird - ein bis zwei Saetze, im Klartext. */
  description: string;
  icon: React.ComponentProps<typeof Feather>['name'];
  /** Kopfzeilen-Menue zeigen - nur auf Tab-Screens sinnvoll. */
  showMenu?: boolean;
  /**
   * Ein Knopf unter dem Text (2026-08-22).
   *
   * Nicht jeder Platzhalter ist eine Sackgasse: der Freunde-Screen zeigt
   * Gaesten, dass sie ein Konto brauchen - dann muss es von dort auch dorthin
   * gehen. Ohne Knopf bleibt "Noch nicht gebaut." stehen, was in dem Fall
   * schlicht falsch waere: das Konto GIBT es.
   */
  actionLabel?: string;
  onAction?: () => void;
};

export function PlaceholderScreen({
  title,
  description,
  icon,
  showMenu = false,
  actionLabel,
  onAction,
}: Props) {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);

  return (
    <Screen dark={darkMode}>
      {/* Auf allen Tab-Screens erreichbar - siehe HeaderMenu. Die
          Unterscheidung macht `showMenu`: Screens, die ueber den Stack
          geoeffnet werden (Freunde), brauchen es nicht doppelt. */}
      {showMenu ? (
        <View style={styles.menuSlot}>
          <HeaderMenu dark={darkMode} overlay />
        </View>
      ) : null}

      <View style={styles.body}>
        <Feather name={icon} size={40} color={theme.sub} />
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
        <Text style={[styles.description, { color: theme.sub }]}>{description}</Text>
        {actionLabel && onAction ? (
          <PillButton label={actionLabel} dark={darkMode} onPress={onAction} />
        ) : (
          <Text style={[styles.note, { color: theme.sub }]}>Noch nicht gebaut.</Text>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  menuSlot: {
    position: 'relative',
    zIndex: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
    paddingHorizontal: SPACING.xl,
  },
  title: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    textAlign: 'center',
  },
  description: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    textAlign: 'center',
  },
  note: {
    fontSize: FONT_SIZE.caption,
    fontWeight: '700',
    marginTop: SPACING.sm,
  },
});
