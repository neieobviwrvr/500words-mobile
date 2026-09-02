import { Image, StyleSheet, View } from 'react-native';

// Bebilderter Pfad-Hintergrund fuer Chinesisch (2026-08-31, Simons Vorlage:
// zwei Zeichnungen, vertikal aneinandergehaengt - Grosse Mauer oben, Doerfer
// und Bambuswald unten).
//
// Das Bild KACHELT vertikal: der Pfad wird laenger, sobald Situationen
// aufgefaechert werden, das Bild aber nicht. Strecken haette die Zeichnung
// verzerrt, ein Abbruch nach einem Durchgang haette den Rest nackt gelassen.
// Weil beide Vorlagen oben wie unten in Vegetation auslaufen, faellt die
// Wiederholung kaum auf.

const QUELLE = require('../../../assets/pfad-hintergrund/china.png');

/** Masse der zusammengefuegten Vorlage - fuer das Kachel-Raster. */
export const CHINA_BG = { breite: 360, hoehe: 1232 };

/**
 * Verlauf des Weges im Bild, als Anteil der Breite (0 = links, 1 = rechts),
 * gleichmaessig ueber die Bildhoehe verteilt.
 *
 * **Automatisch aus dem Bild gelesen**, nicht von Hand gesetzt: die Mauer und
 * der Sandweg heben sich farblich klar von der Vegetation ab (hell, warm,
 * nicht gruenstichig). Der Weg wurde dabei VERFOLGT statt gemittelt - wo
 * mehrere Wegteile in einer Zeile liegen, laege der Mittelwert zwischen
 * ihnen und damit neben dem Weg.
 *
 * Wer die Vorlage austauscht, laesst die Werte neu erzeugen, statt sie zu
 * schaetzen.
 */
export const CHINA_WEG_X = [
  0.355, 0.180, 0.083, 0.241, 0.413, 0.664, 0.427, 0.578, 0.616, 0.612,
  0.696, 0.748, 0.713, 0.638, 0.577, 0.467, 0.410, 0.572, 0.515, 0.596,
  0.505, 0.426, 0.401, 0.500, 0.452, 0.381, 0.512, 0.652, 0.603, 0.430,
  0.361, 0.343,
];

/**
 * Wo der Weg auf einer bestimmten Hoehe verlaeuft - Anteil der Breite.
 * Zwischen den Stuetzpunkten wird linear interpoliert, ueber die Bildhoehe
 * hinaus wiederholt sich der Verlauf mit der Kachel.
 */
export function wegAnteilBei(y: number, kachelHoehe: number): number {
  const t = ((y % kachelHoehe) + kachelHoehe) % kachelHoehe / kachelHoehe;
  const pos = t * (CHINA_WEG_X.length - 1);
  const i = Math.floor(pos);
  const rest = pos - i;
  const a = CHINA_WEG_X[i];
  const b = CHINA_WEG_X[Math.min(i + 1, CHINA_WEG_X.length - 1)];
  return a + (b - a) * rest;
}

export function ChinaPfadHintergrund({ breite, hoehe }: { breite: number; hoehe: number }) {
  const kachelHoehe = Math.round(CHINA_BG.hoehe * (breite / CHINA_BG.breite));
  const anzahl = Math.ceil(hoehe / kachelHoehe) + 1;
  return (
    <View style={[styles.flaeche, { width: breite, height: hoehe }]} pointerEvents="none">
      {Array.from({ length: anzahl }).map((_, i) => (
        <Image
          key={i}
          source={QUELLE}
          style={{ position: 'absolute', top: i * kachelHoehe, left: 0, width: breite, height: kachelHoehe }}
          resizeMode="cover"
          accessibilityIgnoresInvertColors
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  flaeche: { position: 'absolute', top: 0, left: 0, overflow: 'hidden' },
});
