import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { karte, SPACING } from '../theme/tokens';

// Masse der Tab-Leiste (2026-09-11 aus app/(tabs)/_layout.tsx herausgezogen).
//
// Die Leiste selbst liest sie - und jeder Screen, dessen Inhalt UNTER der
// Leiste durchlaeuft (S1 mit seiner unteren Karte), braucht
// dieselben Zahlen, um sein Scroll-Ende oberhalb der Leiste zu halten. Zwei
// Kopien liefen beim naechsten Feinschliff auseinander, und der letzte
// Eintrag einer Liste verschwaende still unter der Leiste.
//
// Seit dem 2026-09-13 ist es die ANGEDOCKTE Leiste von Freunde, nicht mehr
// die schwebende Kapsel (Simon: "die regulaere Tab-Bar mit der Tab-Bar von
// Freunde ersetzen"). Die Kapsel samt Milchglas ist damit weg.

/**
 * Hoehe des Bands mit Symbolen und Beschriftung, ohne Sicherheitsrand.
 *
 * Flacher als die schwebende Kapsel (68): die brauchte ihre Hoehe, weil sie
 * frei stand und rundum Luft hatte - eine angedockte Leiste kommt mit 56
 * aus (2026-09-12, Simon: das Weiss unter den Symbolen reduzieren). Das ist
 * die zweite Knopfhoehe der App und immer noch mehr als Apples eigene
 * Leiste (49).
 */
export const LEISTEN_BAND = 56;

// Abstand zwischen Bildschirminhalt und Leiste. Ohne das verschwaende der
// Inhalt unter der Leiste - sie liegt absolut positioniert darueber und
// reserviert keinen Platz im Layout.
export const CONTENT_GAP = SPACING.md;

/**
 * Hoehe der Leiste und ihr Innenabstand unten.
 *
 * Der Sicherheitsrand gehoert NACH INNEN: die Leiste klebt am Rand, ihre
 * Symbole duerfen nicht unter dem Home-Indikator liegen. GEKAPPT auf
 * hoechstens SPACING.lg (2026-09-13, Simon nach dem zweiten Blick aufs
 * Geraet: unten ist sonst zu viel Weiss) - auf einem iPhone 12 16 statt 34
 * Punkte. Der Preis: die Beschriftungen ruecken naeher an den
 * Home-Indikator. Ein Tipp auf die Symbole funktioniert, ein Wisch von ganz
 * unten gehoert weiterhin iOS und fuehrt aus der App. Apples eigene Leiste
 * laesst den Streifen deshalb frei; diese ist bewusst enger.
 */
export function useTabLeiste() {
  const insets = useSafeAreaInsets();
  const rand = Math.min(insets.bottom, SPACING.lg);
  return { rand, hoehe: LEISTEN_BAND + rand };
}

/**
 * So viel Platz braucht Inhalt am unteren Ende, damit er oberhalb der Leiste
 * endet - genau der Innenabstand, den das Tab-Layout jedem Screen gibt
 * (`sceneStyle.paddingBottom`). Fuer Screens, die diesen Abstand abschalten,
 * um bis an den Bildschirmrand zu zeichnen, und ihn dann in ihre
 * Scroll-Flaeche verlegen.
 */
export function useTabLeistenFreiraum() {
  return useTabLeiste().hoehe + CONTENT_GAP;
}

/**
 * Das Material der Leiste: dieselbe `karte()` wie die fruehere Kopfleiste,
 * nur GESPIEGELT. Die Kopfleiste lief oben aus dem Bild (kein oberer Rand,
 * unten gerundet) - die Leiste laeuft unten hinaus, also kein unterer Rand
 * und oben gerundet.
 *
 * Auch der Schatten spiegelt: `karte()` wirft ihn nach unten, wo er bei
 * einer am Boden klebenden Leiste aus dem Bild fiele. Nach oben liegt er auf
 * dem Inhalt.
 */
export function leistenKarte(dark: boolean) {
  const { borderWidth: rand, borderRadius: radius, ...rest } = karte(dark);
  return {
    ...rest,
    shadowOffset: { width: 0, height: -2 },
    borderBottomWidth: 0,
    borderLeftWidth: rand,
    borderRightWidth: rand,
    borderTopWidth: rand,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  };
}
