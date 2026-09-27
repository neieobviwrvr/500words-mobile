import { useAppState } from '../../state/AppState';

// Farben, Masse und Schrift des neuen Looks (2026-09-26, hell und dunkel
// seit dem 2026-09-27).
//
// **Bewusst hier und nicht in tokens.ts.** Der Look unterscheidet sich vom
// heutigen - ein anderes Blau, harte Kanten, andere Schrift. Laege das in den
// Tokens, faerbte es die ganze App mit. So bleibt es auf den Screens, die ihn
// tragen: Start und Lektionen.
//
// **Zwei Fassungen, nicht mehr nur hell.** Bis zum 2026-09-27 stand hier
// "nur hell", mit der Begruendung, ein Darkmode dafuer sei eine
// Entwurfsentscheidung, die niemand getroffen habe. Simon hat sie getroffen
// ("Fixe das auch"): die beiden Screens folgen jetzt dem Schalter wie der
// Rest der App. Die dunklen Werte sind an `getTheme(true)` angelehnt - Grund,
// Karte, Rand und Text stimmen mit dem ueberein, was der Rahmen
// (`Screen`, Tab-Leiste) ohnehin zeichnet, sonst saehe man an der Naht, dass
// hier zwei Paletten aufeinandertreffen.
//
// **Warum die Farben durch eine FABRIK gehen** (`useStil`): ein
// `StyleSheet.create` auf Modulebene liest seine Farben genau einmal, beim
// Laden der Datei. Ein Schalter, der danach umlegt, erreicht es nie. Die
// Stilbloecke sind deshalb Funktionen der Palette, und `useStil` haelt je
// Block und Modus eine fertige Fassung im Speicher - gebaut wird jede also
// trotzdem nur einmal.

export type Palette = {
  grund: string;
  text: string;
  neben: string;
  linie: string;
  blau: string;
  blauHell: string;
  gruen: string;
  gruenHell: string;
  /** Gruen als SCHRIFT - dunkler als die Flaechenfarbe, siehe unten. */
  gruenText: string;
  grau: string;
  grauHell: string;
  ringLeer: string;
  rot: string;
  gold: string;
  goldHell: string;
  goldText: string;
};

const HELL: Palette = {
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
  // Fliesstext gelten. Bewusst so gewaehlt. Wird es auf dem Geraet zu blass,
  // bringt #0FA958 rund 3,1:1 zurueck, ohne viel Leuchtkraft zu kosten.
  gruen: '#22C55E',
  gruenHell: '#DCFCE7',
  gruenText: '#15803D',

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
};

/**
 * Dieselben Rollen im Dunkeln.
 *
 * Kein Umkehren der hellen Werte, sondern je Rolle neu gewaehlt - eine
 * gespiegelte Palette ergibt auf Schwarz Leuchtflaechen. Die Regel dahinter:
 * Flaechen werden dunkel, Schrift hell, und die Akzente werden HELLER statt
 * dunkler, weil sie sonst im Grund verschwinden (#2563EB auf #1D1D1B kommt
 * auf 2,1:1 und ist als Beschriftung unlesbar).
 *
 * Die zarten Fuelltoene (`blauHell`, `gruenHell`, `goldHell`) tragen im
 * Hellen eine Pille mit dunkler Schrift darauf. Im Dunkeln kehrt sich das
 * Paar um: die Fuellung wird ein tiefer Ton derselben Familie, die Schrift
 * der helle Akzent.
 */
const DUNKEL: Palette = {
  grund: '#1D1D1B',
  text: '#F5F4F1',
  neben: '#A3A099',
  linie: '#33322E',

  blau: '#7DA6FF',
  blauHell: '#1B2740',

  gruen: '#3DD47A',
  gruenHell: '#15311F',
  gruenText: '#4FE08A',

  grau: '#7A776F',
  grauHell: '#26261F',

  ringLeer: '#45443E',

  rot: '#F2726D',

  gold: '#EFB245',
  goldHell: '#332712',
  goldText: '#EFB245',
};

export function paletteFuer(dunkel: boolean): Palette {
  return dunkel ? DUNKEL : HELL;
}

/**
 * Die helle Palette als fester Wert.
 *
 * Nur noch fuer den Entwurfs-Screen unter `/entwurf`, der keinen Dunkelmodus
 * kennt und auch keinen braucht - er ist ein Vergleichsstand, kein Weg in der
 * App. Wer einen Screen baut, den der Nutzer erreicht, nimmt `useStil`.
 */
export const E = HELL;

export function usePalette(): Palette {
  return paletteFuer(useAppState().darkMode);
}

// Je Stilblock und Modus EIN fertiges StyleSheet. Ohne den Speicher baute
// jeder Aufruf ein neues - bei einer Liste aus dreihundert Karten bei jedem
// Bildaufbau dreihundert Stilbloecke.
const gebaut = new WeakMap<object, Map<boolean, unknown>>();

export function useStil<T>(fabrik: (E: Palette) => T): T {
  const dunkel = useAppState().darkMode;
  let jeModus = gebaut.get(fabrik);
  if (!jeModus) {
    jeModus = new Map();
    gebaut.set(fabrik, jeModus);
  }
  if (!jeModus.has(dunkel)) jeModus.set(dunkel, fabrik(paletteFuer(dunkel)));
  return jeModus.get(dunkel) as T;
}

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
