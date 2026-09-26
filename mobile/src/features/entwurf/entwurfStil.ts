// Farben, Masse und Schrift NUR fuer den Entwurf (2026-09-26).
//
// **Bewusst hier und nicht in tokens.ts.** Der Entwurf soll sich vom heutigen
// Look unterscheiden - ein anderes Blau, harte Kanten, andere Schrift. Laege
// das in den Tokens, faerbte es die ganze App mit. So bleibt es auf diesen
// einen Screen beschraenkt, und beim Wegwerfen bleibt nichts zurueck.
//
// **Nur hell.** Die Vorlage ist eine helle Seite; ein Darkmode dafuer waere
// eine eigene Entwurfsentscheidung, die niemand getroffen hat. Der Screen
// sieht deshalb in beiden Modi gleich aus - wie "Nacht" im Design-Labor
// umgekehrt.

export const E = {
  grund: '#FFFFFF',
  text: '#0F172A',
  neben: '#64748B',
  linie: '#E7EBF0',

  blau: '#2563EB',
  blauHell: '#EFF4FF',

  // Knalliger und heller (2026-09-26, Simons Wunsch: "die grüne Schrift ein
  // bisschen mehr knallig und hell"). Vorher #16A34A - satt, aber gedaempft.
  //
  // **Der Preis steht hier, damit ihn niemand suchen muss:** je heller das
  // Gruen, desto schwaecher der Kontrast auf Weiss. Die Zaehlerzeile faellt
  // damit von 3,3:1 auf 2,3:1 - das ist deutlich unter den 4,5:1, die fuer
  // Fliesstext gelten. Bewusst so gewaehlt, es ist ein Entwurf zum
  // Vergleichen. Wird es auf dem Geraet zu blass, bringt #0FA958 rund 3,1:1
  // zurueck, ohne viel Leuchtkraft zu kosten.
  gruen: '#22C55E',
  gruenHell: '#DCFCE7',

  grau: '#94A3B8',
  grauHell: '#F1F5F9',

  /**
   * Die noch leeren Viertel des Stufenrings (2026-09-26).
   *
   * Eigener Wert und NICHT `linie`: mit #E7EBF0 war der Ring auf Weiss so
   * blass, dass man bei 0/4 gar nicht sah, dass es ueberhaupt vier Stufen
   * gibt - Simons "Das mit den Boegen sieht man nicht". Die leeren Viertel
   * muessen sichtbar sein, sonst zeigt der Ring nur, was schon geschafft
   * ist, und nie, was noch kommt.
   */
  ringLeer: '#C3CCD9',

  rot: '#EF4444',

  /**
   * Die Kapitel-Wiederholung am Ende jeder Kategorie (2026-09-27).
   *
   * Eigene Farbfamilie und bewusst NICHT Blau oder Gruen: Blau heisst hier
   * "offen", Gruen "geschafft". Das Finale ist weder - es ist immer
   * verfuegbar und nie abgeschlossen. Gold traegt das, ohne sich in die
   * Stufen-Logik einzumischen.
   */
  gold: '#E8A317',
  goldHell: '#FDF0D5',
  goldText: '#9A6B08',
} as const;

/** Seitlicher Rand der ganzen Seite. */
export const SEITE = 20;

/** Durchmesser eines Lektions-Kreises - zugleich die Mitte der Verbindungslinie. */
export const KREIS = 48;

/**
 * Manrope statt Nunito.
 *
 * Die Schrift ist der schnellste sichtbare Unterschied zum heutigen Look und
 * kostet nichts: `app/_layout.tsx` laedt sie seit dem Design-Labor ohnehin
 * bei jedem Start. Eine Schrift, die erst hier nachlaedt, zeigte
 * Ersatzkaestchen.
 */
export function s(gewicht: '400' | '500' | '600' | '700' | '800') {
  return { fontFamily: `Manrope_${GEWICHT[gewicht]}`, fontWeight: gewicht } as const;
}

const GEWICHT = {
  '400': '400Regular',
  '500': '500Medium',
  '600': '600SemiBold',
  '700': '700Bold',
  '800': '800ExtraBold',
} as const;
