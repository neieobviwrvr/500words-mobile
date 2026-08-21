import { Image, StyleSheet } from 'react-native';

// Der Hintergrund von S1: nur noch die Pergament-Textur (Nutzer-Wunsch
// 2026-08-21).
//
// Bis dahin lagen darueber zwei Kartenecken als eigene Bilder, die
// gelegentlich wackelten. Beides ist raus - die Ecken selbst und die
// Wackel-Animation samt "Bewegung reduzieren"-Abfrage, die es nur ihretwegen
// gab. Die Bilddateien (`bg-ecke-oben.png`, `bg-ecke-unten.png`) liegen noch
// in `assets/`, werden aber nirgends mehr eingebunden und landen dadurch auch
// nicht mehr im Bundle.

export function PathBackdrop({ width, height }: { width: number; height: number }) {
  return (
    <Image
      source={require('../../../assets/bg-textur.png')}
      style={[styles.layer, { width, height }]}
      resizeMode="cover"
      accessibilityIgnoresInvertColors
    />
  );
}

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
