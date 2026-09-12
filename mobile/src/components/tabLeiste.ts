import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SPACING } from '../theme/tokens';

// Masse der schwebenden Tab-Leiste (2026-09-11 aus app/(tabs)/_layout.tsx
// herausgezogen).
//
// Die Leiste selbst liest sie - und jeder Screen, dessen Inhalt UNTER der
// Leiste durchlaeuft (zuerst die zweite Karte auf dem Holo-Testscreen),
// braucht dieselben Zahlen, um sein Scroll-Ende oberhalb der Leiste zu
// halten. Zwei Kopien liefen beim naechsten Feinschliff auseinander, und der
// letzte Eintrag einer Liste verschwaende still unter der Leiste.

// Abstand nach unten. `Math.max` statt einer festen Zahl, weil beide Geraete-
// arten gemeint sind: auf Geraeten mit Home-Indikator ist der Sicherheitsrand
// (34) schon groesser als der gewuenschte Schwebeabstand, die Leiste sitzt
// dann genau auf dessen Oberkante; auf aelteren Geraeten ohne Indikator sorgt
// FLOAT_GAP fuer den Abstand zum Bildschirmrand.
export const FLOAT_GAP = 20;

// 2026-09-01 von 64 auf 68: der 3D-Kachel-Look kostet oben 1.5 und unten 4
// Punkte Rahmen, und in React Native liegt der Rahmen INNEN. Bei
// unveraenderten 64 waeren dem Inhalt 3.5 Punkte verloren gegangen - genau
// dort, wo die Beschriftung schon einmal abgeschnitten wurde (siehe die
// `paddingBottom: 0`-Notiz in app/(tabs)/_layout.tsx). Der sichtbare Koerper
// waechst also um 4, der nutzbare Innenraum bleibt bei rund 62.
export const BAR_HEIGHT = 68;

// Abstand zwischen Bildschirminhalt und Leiste. Ohne das verschwaende der
// Inhalt unter der Leiste - sie liegt absolut positioniert darueber und
// reserviert keinen Platz im Layout.
export const CONTENT_GAP = SPACING.md;

/**
 * So viel Platz braucht Inhalt am unteren Ende, damit er oberhalb der Leiste
 * endet - genau der Innenabstand, den das Tab-Layout jedem Screen gibt
 * (`sceneStyle.paddingBottom`). Fuer Screens, die diesen Abstand abschalten,
 * um bis an den Bildschirmrand zu zeichnen, und ihn dann in ihre
 * Scroll-Flaeche verlegen.
 */
export function useTabLeistenFreiraum() {
  const insets = useSafeAreaInsets();
  return Math.max(insets.bottom, FLOAT_GAP) + BAR_HEIGHT + CONTENT_GAP;
}
