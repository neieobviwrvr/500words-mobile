import { View } from 'react-native';

// Der Hintergrund von S1: nur noch die Pergament-Textur (Nutzer-Wunsch
// 2026-08-21).
//
// Bis dahin lagen darueber zwei Kartenecken als eigene Bilder, die
// gelegentlich wackelten. Beides ist raus - die Ecken selbst und die
// Wackel-Animation samt "Bewegung reduzieren"-Abfrage, die es nur ihretwegen
// gab. Die Bilddateien (`bg-ecke-oben.png`, `bg-ecke-unten.png`) liegen noch
// in `assets/`, werden aber nirgends mehr eingebunden und landen dadurch auch
// nicht mehr im Bundle.
//
// TESTWEISE (2026-08-25, Simons Auftrag): die Textur (`bg-textur.png`) ist
// hier fuer einen Vergleich durch eine Volltonfarbe ersetzt - noch keine
// endgueltige Entscheidung, die Farbe selbst wechselte schon einmal
// (erst #F5A25F, jetzt ein helles Grau/#E6E4E0 - derselbe Ton wie
// `theme.border` in tokens.ts). Fuer die Rueckkehr zur Textur einfach die
// View unten wieder gegen das Image tauschen:
//   <Image source={require('../../../assets/bg-textur.png')}
//     style={[styles.layer, { width, height }]} resizeMode="cover"
//     accessibilityIgnoresInvertColors />

// Exportiert, damit der Ausblenden-Farbverlauf am oberen/unteren Rand der
// Pfad-Box (siehe PathScreen.tsx) IMMER zu genau dieser Farbe verblasst,
// egal welche Testfarbe hier gerade steht - eine Quelle statt zwei Stellen,
// die auseinanderlaufen koennten.
export const PATH_BACKDROP_COLOR = '#E6E4E0';

export function PathBackdrop({ width, height }: { width: number; height: number }) {
  return <View style={{ position: 'absolute', top: 0, left: 0, width, height, backgroundColor: PATH_BACKDROP_COLOR }} />;
}
