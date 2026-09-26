// Mehrere Looks nebeneinander, umschaltbar im laufenden Betrieb.
//
// Simons Auftrag (2026-09-22): "Ich wuerde gerne ein paar weitere Designs
// testen, wie so ein A/B-Test etwa" - und auf die Rueckfrage, ob es um
// andere Screens oder um andere Optik geht: "Selber Screen in einem ganz
// anderem Look".
//
// **Kein echter A/B-Test mit Nutzern**, und das ist Absicht: dafuer braeuchte
// es Nutzer und eine Auswertung, beides gibt es vor dem Launch nicht. Hier
// schaltet SIMON um und vergleicht selbst. Die Struktur traegt den echten
// Test aber mit - dann wuerfelt die App die Variante je Geraet, statt dass
// jemand tippt, und zaehlt mit.
//
// **Design A ist der heutige Stand, Wert fuer Wert kopiert.** Wer hier etwas
// an A aendert, aendert die App - A ist kein Entwurf, sondern das, was
// ausgeliefert wird. Die Alternativen daneben sind Entwuerfe.
//
// **Warum die Werte hier liegen und nicht in tokens.ts:** tokens.ts haelt
// sie als KONSTANTEN, die beim Start feststehen (`SPACING.lg`,
// `ACCENT_ORANGE`). Das laesst sich zur Laufzeit nicht umschalten. Hier
// stehen dieselben Werte als DATEN je Look; `tokens.ts` bedient sich beim
// aktiven Look, siehe `setzeDesign()` dort.

/** Flaechen- und Textfarben - dieselbe Form, die `getTheme()` liefert. */
export type Theme = {
  dark: boolean;
  pageBg: string;
  bg: string;
  cardBg: string;
  border: string;
  text: string;
  sub: string;
  pathBoxBg: string;
  modeBg: string;
  buyBg: string;
  dividerColor: string;
  subtleFill: string;
};

export type Gewicht = '400' | '500' | '600' | '700' | '800';

export type Design = {
  id: DesignId;
  /** Steht im Design-Labor als Knopfbeschriftung. */
  name: string;
  /** Ein Satz darunter - was den Look ausmacht. */
  kurz: string;
  farben: (dark: boolean) => Theme;
  /** Markenfarbe als FLAECHE (Knopf, Fuellung). */
  akzent: string;
  /** Untere Druckkante derselben Flaeche. */
  akzentKante: string;
  /**
   * Markenfarbe als TEXT auf dem Seitengrund. Eigener Wert, weil eine
   * Flaechenfarbe als Text oft zu blass ist - `ACCENT_ORANGE` kommt auf
   * Weiss nur auf rund 2,9:1 (siehe `aktionsFarbe()` in
   * profile/ListenBausteine.tsx, wo dieselbe Unterscheidung schon steht).
   */
  akzentText: (dark: boolean) => string;
  /**
   * Farbe des gefuellten Lesezeichens ("gemerkt").
   *
   * Eigener Wert statt `akzent`, weil der heutige Look dafuer BLAU nimmt,
   * nicht sein Orange. Haengte das Lesezeichen an `akzent`, saehe Design A
   * nach der Umstellung anders aus als vorher - und genau das darf nicht
   * passieren.
   */
  gemerkt: string;
  /**
   * Grundflaeche hinter dem Pfad auf Start.
   *
   * Eigener Wert, weil dieser Ton NICHT aus `getTheme()` kommt: er stand
   * als feste Off-White-Konstante in PathBackdrop.tsx und deckt den halben
   * Startscreen. In einem dunklen Look blieb der Bereich dadurch hell und
   * die weisse Schrift darauf unlesbar - beim ersten Durchspielen von
   * "Nacht" sofort sichtbar.
   */
  pfadGrund: string;
  radius: { sm: number; md: number; lg: number; xl: number; pill: number };
  abstand: { xs: number; sm: number; md: number; lg: number; xl: number; xxl: number; xxxl: number };
  schrift: (gewicht: Gewicht) => { fontFamily: string; fontWeight: Gewicht };
  /**
   * Rahmen und Schatten einer Satzkarte in einer Liste.
   *
   * Bei A ist das der "Floating"-Look aus tokens.ts
   * (`FLOATING_BORDER` + `FLOATING_SHADOW`), NICHT `karte()` - genau den
   * traegt die Satzliste heute, und A muss Wert fuer Wert so bleiben.
   */
  kartenFlaeche: (dark: boolean) => Record<string, unknown>;
};

export type DesignId = 'aktuell' | 'klar' | 'nacht';

// ---------------------------------------------------------------------------
// A - der heutige Stand
// ---------------------------------------------------------------------------
const NUNITO: Record<Gewicht, string> = {
  '400': 'Nunito_400Regular',
  '500': 'Nunito_500Medium',
  '600': 'Nunito_600SemiBold',
  '700': 'Nunito_700Bold',
  '800': 'Nunito_800ExtraBold',
};

const MANROPE: Record<Gewicht, string> = {
  '400': 'Manrope_400Regular',
  '500': 'Manrope_500Medium',
  '600': 'Manrope_600SemiBold',
  '700': 'Manrope_700Bold',
  '800': 'Manrope_800ExtraBold',
};

const STANDARD_ABSTAND = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 48 };

const aktuell: Design = {
  id: 'aktuell',
  name: 'Aktuell',
  kurz: 'Weiss, Nunito, Orange - das Stil-Rezept 70% Babbel / 30% Duolingo.',
  farben: (dark) => ({
    dark,
    pageBg: dark ? '#0F0F0E' : '#FFFFFF',
    bg: dark ? '#171715' : '#FAFAF9',
    cardBg: dark ? '#1D1D1B' : '#FFFFFF',
    border: dark ? '#33322E' : '#E6E4E0',
    text: dark ? '#F5F4F1' : '#1A1A18',
    sub: dark ? '#A3A099' : '#6B6862',
    pathBoxBg: dark ? '#1A1A18' : '#FFFFFF',
    modeBg: dark ? '#1F2A3E' : '#EDF2FC',
    buyBg: dark ? '#16261C' : '#EAF6EE',
    dividerColor: dark ? '#4A4842' : '#D8D5CF',
    subtleFill: dark ? '#232320' : '#F5F4F1',
  }),
  akzent: '#E0793E',
  akzentKante: '#B75F2C',
  akzentText: (dark) => (dark ? '#E0793E' : '#B75F2C'),
  gemerkt: '#3E6FD1',
  pfadGrund: '#FAF9F6',
  radius: { sm: 8, md: 12, lg: 16, xl: 24, pill: 100 },
  abstand: STANDARD_ABSTAND,
  schrift: (g) => ({ fontFamily: NUNITO[g], fontWeight: g }),
  kartenFlaeche: () => ({
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 3,
  }),
};

// ---------------------------------------------------------------------------
// B - "Klar": hell, ruhig, editorial
// ---------------------------------------------------------------------------
// Gegenentwurf zum verspielten Karten-Stil: kein Schatten, keine Druckkante,
// harte Ecken, eine einzige kraeftige Farbe als Punktion statt als Flaeche.
// Die Abstaende sind grosszuegiger - der Weissraum traegt die Gliederung,
// nicht der Rahmen.
const klar: Design = {
  id: 'klar',
  name: 'Klar',
  kurz: 'Weiss, Manrope, Kobaltblau. Kein Schatten, harte Ecken, viel Luft.',
  farben: (dark) => ({
    dark,
    pageBg: dark ? '#111113' : '#FFFFFF',
    bg: dark ? '#191A1D' : '#F7F7F6',
    cardBg: dark ? '#191A1D' : '#FFFFFF',
    border: dark ? '#2E2F33' : '#E3E3E0',
    text: dark ? '#F2F2F1' : '#111111',
    sub: dark ? '#9B9B9B' : '#6B6B6B',
    pathBoxBg: dark ? '#111113' : '#FFFFFF',
    modeBg: dark ? '#141C2E' : '#EEF2FE',
    buyBg: dark ? '#13211A' : '#EDF7F0',
    dividerColor: dark ? '#35363A' : '#DDDDDA',
    subtleFill: dark ? '#1E1F22' : '#F2F2F0',
  }),
  akzent: '#2F5BEA',
  akzentKante: '#2246BE',
  akzentText: (dark) => (dark ? '#7D9BFF' : '#2246BE'),
  gemerkt: '#2F5BEA',
  pfadGrund: '#FFFFFF',
  radius: { sm: 4, md: 6, lg: 8, xl: 12, pill: 10 },
  abstand: { xs: 4, sm: 8, md: 14, lg: 20, xl: 28, xxl: 40, xxxl: 56 },
  schrift: (g) => ({ fontFamily: MANROPE[g], fontWeight: g }),
  // Kein Schatten - die Kontur allein traegt die Karte. Genau das ist der
  // Unterschied zum heutigen Look, der auf jeder Karte schwebt.
  kartenFlaeche: (dark) => ({
    borderWidth: 1,
    borderColor: dark ? '#2E2F33' : '#E3E3E0',
  }),
};

// ---------------------------------------------------------------------------
// C - "Nacht": dunkel, reduziert, eine leuchtende Farbe
// ---------------------------------------------------------------------------
// **Nacht ist in BEIDEN Modi dunkel**, und das ist kein Fehler: der dunkle
// Grund IST der Look. Der Darkmode-Schalter aendert hier deshalb fast
// nichts - wer Hell will, nimmt einen anderen Look.
const nacht: Design = {
  id: 'nacht',
  name: 'Nacht',
  kurz: 'Fast schwarz, Manrope, Neon-Limette. Immer dunkel, flach, praezise.',
  farben: () => ({
    dark: true,
    pageBg: '#0F0F14',
    bg: '#141419',
    cardBg: '#17171D',
    border: '#2A2A33',
    text: '#F4F4F5',
    sub: '#A0A0AB',
    pathBoxBg: '#0F0F14',
    modeBg: '#181B26',
    buyBg: '#14201A',
    dividerColor: '#2A2A33',
    subtleFill: '#1B1B21',
  }),
  akzent: '#C6F432',
  akzentKante: '#9CC021',
  akzentText: () => '#C6F432',
  gemerkt: '#C6F432',
  pfadGrund: '#0F0F14',
  radius: { sm: 6, md: 8, lg: 8, xl: 12, pill: 8 },
  abstand: STANDARD_ABSTAND,
  schrift: (g) => ({ fontFamily: MANROPE[g], fontWeight: g }),
  kartenFlaeche: () => ({
    borderWidth: 1,
    borderColor: '#2A2A33',
  }),
};

export const DESIGNS: Record<DesignId, Design> = { aktuell, klar, nacht };

/** Reihenfolge im Design-Labor - A steht zuerst. */
export const DESIGN_REIHENFOLGE: DesignId[] = ['aktuell', 'klar', 'nacht'];

export function designVon(id: string | null | undefined): Design {
  return DESIGNS[(id as DesignId) ?? 'aktuell'] ?? DESIGNS.aktuell;
}
