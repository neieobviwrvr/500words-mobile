import type { ComponentProps } from 'react';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useOnboardingState } from '../../state/OnboardingState';
import { getMascot, type Mascot as MascotData, type MascotOutfit, type MascotState } from '../../data/mascots';
import { MASCOT_ENABLED } from './config';

// Die Figur, ueberall dieselbe Komponente.
//
// Wichtig fuer alle Aufrufer: Sie muessen NICHT wissen, ob es schon echte
// Grafik gibt, ob eine Figur gewaehlt wurde oder ob das Maskottchen
// ueberhaupt eingeschaltet ist. In allen drei Faellen kuemmert sich die
// Komponente selbst darum und rendert notfalls nichts.
//
// Solange `art === null` ist, wird ein Platzhalter gezeichnet: ein Kreis in
// der Figurenfarbe mit ihrem Symbol. Zustand und Outfit sind dabei als
// kleine Abzeichen sichtbar - so laesst sich die Mechanik schon vor der
// ersten Illustration pruefen.

const SIZES = {
  klein: 48,
  mittel: 72,
  gross: 112,
} as const;

// Abzeichen fuer die Gefuehlslage. `neutral` bekommt bewusst keines.
const STATE_BADGE: Partial<Record<MascotState, FeatherName>> = {
  freut_sich: 'smile',
  feiert: 'award',
  wartet: 'clock',
  schlaeft: 'moon',
};

// Abzeichen fuer den Auftritt je Kategoriewelt.
const OUTFIT_BADGE: Partial<Record<MascotOutfit, FeatherName>> = {
  club: 'disc',
  reise: 'map',
  uni: 'book',
  gesundheit: 'plus',
};

type FeatherName = ComponentProps<typeof Feather>['name'];

type Props = {
  state?: MascotState;
  outfit?: MascotOutfit;
  size?: keyof typeof SIZES;
  /** Ueberschreibt die gewaehlte Figur - fuer den Auswahl-Screen. */
  mascot?: MascotData;
};

export function Mascot({ state = 'neutral', outfit = 'standard', size = 'mittel', mascot }: Props) {
  const { mascotId } = useOnboardingState();
  const figure = mascot ?? getMascot(mascotId);

  // Drei Gruende, nichts zu zeichnen - alle voellig normal.
  if (!MASCOT_ENABLED || !figure) return null;

  const px = SIZES[size];
  const stateBadge = STATE_BADGE[state];
  const outfitBadge = OUTFIT_BADGE[outfit];

  return (
    <View
      style={[
        styles.circle,
        {
          width: px,
          height: px,
          borderRadius: px / 2,
          backgroundColor: tint(figure.accentColor),
          borderColor: figure.accentColor,
        },
      ]}
      accessibilityRole="image"
      accessibilityLabel={figure.name}
    >
      <Feather name={figure.placeholderIcon} size={px * 0.42} color={figure.accentColor} />

      {stateBadge && (
        <View style={[styles.badge, styles.badgeState, { backgroundColor: figure.accentColor }]}>
          <Feather name={stateBadge} size={12} color="#FFFFFF" />
        </View>
      )}

      {outfitBadge && (
        <View style={[styles.badge, styles.badgeOutfit, { backgroundColor: figure.accentColor }]}>
          <Feather name={outfitBadge} size={12} color="#FFFFFF" />
        </View>
      )}
    </View>
  );
}

// Sehr helle Variante der Figurenfarbe als Kreisfuellung. Ueber Transparenz
// geloest, damit sie auf hellem wie dunklem Grund funktioniert - anders als
// bei fest eingetragenen Fuellfarben muss dafuer nichts gepflegt werden.
function tint(hex: string): string {
  return `${hex}22`;
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  badge: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeState: {
    right: -2,
    bottom: -2,
  },
  badgeOutfit: {
    left: -2,
    bottom: -2,
  },
});
