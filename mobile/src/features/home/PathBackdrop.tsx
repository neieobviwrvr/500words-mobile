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
// Zwischen dem 2026-08-25 und dem 2026-08-31 stand hier TESTWEISE eine
// Volltonfarbe statt der Textur (Simons Auftrag, fuer einen Vergleich - erst
// #F5A25F, dann ein helles Grau). Der Vergleich ist entschieden: die Textur
// ist zurueck.

// Exportiert, damit der Ausblenden-Farbverlauf am oberen/unteren Rand der
// Pfad-Box (siehe PathScreen.tsx) IMMER zu genau diesem Ton verblasst - eine
// Quelle statt zwei Stellen, die auseinanderlaufen koennten.
//
// OFF-WHITE (2026-08-31). Warm gehalten, nicht neutral-grau: die Palette der
// App ist warm (`subtleFill` #F5F4F1, `border` #E6E4E0), ein kuehles Grau
// stuende quer dazu. Der Ton liegt bewusst zwischen reinem Weiss und
// `subtleFill` - die Seite soll sich von den weissen Karten darauf absetzen,
// ohne selbst als Flaeche aufzutreten. Die Pergament-Textur liegt weiterhin als `assets/bg-textur.png`
// bereit - fuer die Rueckkehr die View unten wieder gegen das Image tauschen:
//   <Image source={require('../../../assets/bg-textur.png')}
//     style={[styles.layer, { width, height }]} resizeMode="cover"
//     accessibilityIgnoresInvertColors />
// und diesen Wert auf den Medianton der Textur (#D5B58E) zuruecksetzen.
//
// Exportiert, damit der Ausblenden-Farbverlauf am oberen/unteren Rand der
// Pfad-Box (siehe PathScreen.tsx) IMMER zu genau diesem Ton verblasst - eine
// Quelle statt zwei Stellen, die auseinanderlaufen koennten.
export const PATH_BACKDROP_COLOR = '#FAF9F6';

/**
 * Dasselbe in durchsichtig - der Endpunkt beider Verlaeufe.
 *
 * Bewusst die Farbe mit Alpha `00` und NICHT das Schluesselwort
 * `transparent`: das ist in vielen Renderern durchsichtiges SCHWARZ, und ein
 * Verlauf dorthin zieht einen grauen Schleier ueber die Flaeche, statt
 * einfach zu verblassen.
 */
export const PATH_BACKDROP_TRANSPARENT = `${PATH_BACKDROP_COLOR}00`;

export function PathBackdrop({ width, height }: { width: number; height: number }) {
  return (
    <View
      style={{ position: 'absolute', top: 0, left: 0, width, height, backgroundColor: PATH_BACKDROP_COLOR }}
    />
  );
}
