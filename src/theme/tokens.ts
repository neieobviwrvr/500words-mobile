// Design-Tokens der App.
//
// Herkunft (2026-08-17): Die Farben stammten urspruenglich 1:1 aus dem
// Claude-Design-Prototyp "Sprachlern-App.dc.html" und waren warm-beige
// (#EFEBE1 / #FAF9F4). Mit der Entscheidung fuer das Stil-Rezept
// "70% Babbel / 30% Duolingo" ist die Grundflaeche jetzt WEISS - beide
// Vorbilder sind weiss, und das Beige war der groesste sichtbare Bruch
// zwischen unserer App und dem angestrebten Bild.
//
// Neu dazugekommen sind Abstaende, Radien und Schriftgroessen. Vorher gab es
// nur Farben, alle Abstaende waren in den einzelnen Screens von Hand
// eingetippt und entsprechend auseinandergedriftet.

import { Platform } from 'react-native';

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
  // Neu: dezente Fuellung fuer nicht ausgewaehlte Auswahlzeilen im
  // Onboarding (Babbel nutzt dort einen Hauch Grau statt reinem Weiss,
  // damit die Karte sich vom weissen Seitenhintergrund abhebt).
  subtleFill: string;
};

export function getTheme(dark: boolean): Theme {
  return {
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
  };
}

// ---------------------------------------------------------------------------
// Abstaende
// ---------------------------------------------------------------------------
// Eine Skala statt frei gewaehlter Zahlen. Wer einen Zwischenwert braucht,
// nimmt den naechstgelegenen Schritt - nicht eine neue Zahl erfinden.
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

// ---------------------------------------------------------------------------
// Radien
// ---------------------------------------------------------------------------
// Mittlere Rundungen nach Babbel-Vorbild - bewusst NICHT Duolingos sehr
// weiche, dicke Formen. `pill` ist fuer vollflaechige Knoepfe.
export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 100,
} as const;

// ---------------------------------------------------------------------------
// Erhebung (Schatten)
// ---------------------------------------------------------------------------
// Bis 2026-08-30 definierte jede Stelle ihre eigenen Schattenwerte
// (UebungsMenu, PathScreen, Tab-Leiste) - drei Mal dasselbe Muster mit drei
// verschiedenen Zahlen. Hier die gemeinsame Skala. Bestehende Stellen sind
// bewusst NICHT umgestellt (das waere ein eigener Umbau), koennen aber nach
// und nach hierher wandern.
//
// EINE Regel dahinter: der Schatten waechst mit der Hoehe, in die ein Element
// zu schweben vorgibt. Ein Chip liegt knapp ueber dem Papier, ein Menue
// deutlich darueber, die Tab-Leiste am hoechsten. Wer einem kleinen Element
// einen grossen Schatten gibt, laesst es schmutzig aussehen statt erhaben.
//
// Der Versatz geht IMMER nach unten (`height` positiv, `width` 0): das Licht
// kommt von oben, wie in jeder anderen App auch. Ein seitlicher Versatz
// wirkt sofort wie ein Fehler.
//
// Android braucht `elevation` (eigenes System, kennt shadow* nicht), iOS und
// Web brauchen shadow*. Deshalb immer beides.
export const ELEVATION = {
  /**
   * Chips und kleine Pillen. Bewusst sehr flach - die Abhebung soll man
   * spueren, nicht sehen. Zusammen mit einer leicht getoenten Fuellung
   * ersetzt sie den Rahmen: Rahmen UND Schatten waeren eine doppelte
   * Abgrenzung, die den Knopf schwer und billig wirken laesst.
   */
  chip: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 2,
  },
} as const;

/**
 * Im Darkmode traegt ein schwarzer Schatten auf dunklem Grund nichts bei -
 * sichtbar wird Hoehe dort ueber eine HELLERE Flaeche, nicht ueber einen
 * dunkleren Rand. Diese Funktion gibt deshalb im Darkmode keinen Schatten
 * zurueck; die Fuellfarbe uebernimmt die Aufgabe (siehe `chipFill`).
 */
export function elevation(dark: boolean, stufe: keyof typeof ELEVATION) {
  return dark ? null : ELEVATION[stufe];
}

// ---------------------------------------------------------------------------
// Schrift
// ---------------------------------------------------------------------------
// Babbels staerkstes Erkennungsmerkmal ist die Serifen-Headline gegen einen
// serifenlosen Rest. Vorerst die SYSTEM-Serifenschrift (Georgia auf iOS,
// "serif" auf Android) - kein Download, kein expo-font, kein Ladezustand
// beim Start. Sobald eine echte Marken-Schrift feststeht, wird sie hier an
// dieser einen Stelle eingetragen; alle Screens ziehen nach.
// ACHTUNG bei PINYIN (2026-08-20): `serif` ist auf iOS `Georgia`, und
// Georgia fehlen die Hatschek-Vokale des dritten Tons - ǎ (U+01CE) und
// ǒ (U+01D2). Der Renderer zerlegt sie dann sichtbar zu "a" + "ˇ".
// Pinyin gehoert deshalb in `sans` (Systemschrift), nie in `serif`.
// Betrifft nur den dritten Ton, weil die Makron-Vokale des ersten
// (ā ī ū) vorhanden sind - der Fehler faellt also erst spaet auf.
export const FONT_FAMILY = {
  serif: Platform.select({
    ios: 'Georgia',
    android: 'serif',
    default: 'Georgia, "Times New Roman", serif',
  }) as string,
  // Fliesstext bleibt die Systemschrift der Plattform (San Francisco /
  // Roboto) - `undefined` heisst in React Native genau das.
  sans: undefined as string | undefined,
} as const;

export const FONT_SIZE = {
  caption: 12,
  small: 13,
  body: 15,
  bodyLg: 17,
  title: 20,
  h2: 26,
  h1: 32,
} as const;

export const LINE_HEIGHT = {
  caption: 16,
  small: 18,
  body: 21,
  bodyLg: 24,
  title: 26,
  h2: 32,
  h1: 38,
} as const;

// ---------------------------------------------------------------------------
// Farben mit fester Bedeutung
// ---------------------------------------------------------------------------

// Wortarten-Farben (siehe CLAUDE.md "UI-Design-Entscheidung"):
// Nomen = blau, Verben = rot, Adjektive = gelb, Pronomen = violett,
// Verbindungswoerter/Konjunktion = petrol (2026-08-29, 5. Kategorie
// dazugekommen - Simons Entscheidung, durchgehend einzufaerben statt nur
// bei einzelnen Vokabeln).
//
// v/n/a teilen sich zufaellig dieselben Hex-Werte wie ACCENT_ERROR/
// ACCENT_BLUE/ACCENT_PREMIUM weiter unten - das ist Zufall, keine
// Verknuepfung. Bewusst NICHT zusammengelegt: "Fehler" an "Verb" zu
// koppeln waere ueberraschend, sobald sich eine der beiden Paletten
// unabhaengig aendert.
//
// Petrol fuer Konjunktion bewusst NICHT gruen (kollidiert mit ACCENT_GREEN,
// der einzigen Erfolgsfarbe der App - Simons Bestaetigung 2026-08-30, nachdem
// kurz Gruen erwogen wurde: Gruen bleibt "fertig/Erfolg" vorbehalten) und
// nicht orange (kollidiert mit der Zielwort-Hervorhebung ACCENT_ORANGE in
// LessonScreen.tsx).
export type WordType = 'v' | 'n' | 'a' | 'p' | 'k';
export const WORD_COLORS: Record<WordType, string> = {
  v: '#D9564F',
  n: '#3E6FD1',
  a: '#C99A2E',
  p: '#8B5FD6',
  k: '#2E8B84',
};

export const ACCENT_BLUE = '#3E6FD1';
// Akzentfarbe der Marke. Liegt praktisch auf Babbels Orange - deshalb bei
// der Umstellung auf das neue Stil-Rezept bewusst unveraendert geblieben.
export const ACCENT_ORANGE = '#E0793E';
// Gruen ist nach dem Stil-Rezept NUR fuer Erfolg/Fortschritt da, nicht als
// zweite Markenfarbe (das ist Duolingos Rolle, nicht unsere).
export const ACCENT_GREEN = '#3E9B5D';
export const ACCENT_GREEN_DARK = '#256B3F';
export const ACCENT_GREEN_BG = '#DFF1E4';
export const ACCENT_AMBER_BG = '#FBE9D8';
export const ACCENT_AMBER_TEXT = '#9A5A1E';
export const ACCENT_NEUTRAL_BG = '#F1EEE6';
export const ACCENT_NEUTRAL_TEXT = '#85807D';
export const ACCENT_PREMIUM = '#C99A2E';
// Fuellfarbe der Fortschrittsbalken (2026-08-18, Nutzer-Entscheidung).
// Bewusst ein eigener Ton und NICHT ACCENT_BLUE (#3E6FD1): Blau gehoert im
// Pfad dem Grundwortschatz, der Balken misst aber alle freigeschalteten
// Inhalte. Zwei verschiedene Blau nebeneinander waeren verwirrend, ein
// helleres unterscheidet die beiden Rollen.
export const PROGRESS_FILL = '#58AFDD';
export const NODE_LOCKED = '#B7B2A6';
// `NODE_DONE` (#4C9A6A) ist am 2026-08-18 weggefallen: eine zweite,
// leicht abweichende Gruenfassung neben ACCENT_GREEN, die nie irgendwo
// gerendert wurde. Der Pfad nutzt fuer fertige Knoten jetzt ACCENT_GREEN -
// nach dem Stil-Rezept ist das die eine Farbe fuer Erfolg.
export const ACCENT_ERROR = '#D9564F';

// Farbfamilien der Kategorie-Welten (2026-08-18, fuer den Lektionen-Screen).
//
// ACHTUNG - diese Toene sind AUSDRUECKLICH DEKORATIV und tragen KEINE
// Bedeutung. Sie ordnen die Kartenreihen optisch, damit der Katalog nicht als
// eine Wand gleicher Kacheln erscheint (Vorbild: Drops gruppiert nach Thema
// ueber die Farbe). Der Zustand einer Karte - freigeschaltet, fertig,
// gesperrt - laeuft weiterhin ausschliesslich ueber Rahmen, Symbol und
// Beschriftung, genau wie im Pfad. Wer hier eine Zustandsfarbe hineinliest,
// liest falsch.
//
// Bewusst gedeckt gehalten: das Vorbild ist gesättigt und dunkel, unser
// Rezept ist weiss und ruhig. Es sind Fuellungen fuer Karten, keine
// Markenfarben - ACCENT_BLUE, ACCENT_ORANGE und ACCENT_GREEN behalten ihre
// Rollen unangetastet.
export type WorldTint = { fill: string; fillDark: string; ink: string; inkDark: string };
export const WORLD_TINTS: Record<string, WorldTint> = {
  grundlagen: { fill: '#E8F0FC', fillDark: '#1B2537', ink: '#2F5AAE', inkDark: '#9CBCF0' },
  ankommen: { fill: '#FDEDE2', fillDark: '#33231A', ink: '#B75F2C', inkDark: '#E9A579' },
  essen: { fill: '#FAF0DC', fillDark: '#332B18', ink: '#8A6415', inkDark: '#DCBC6A' },
  leute: { fill: '#F2EAFB', fillDark: '#271E36', ink: '#6B45A8', inkDark: '#BFA0E8' },
  alltag: { fill: '#E4F1EC', fillDark: '#172A24', ink: '#2E6B57', inkDark: '#8FCBB5' },
};

// Fuellfarben fuer die Pfad-Pillen im Zickzack-Layout (S1).
export const PILL_FILL_BLUE = '#EAF1FC';
export const PILL_FILL_ORANGE = '#FDEEE3';
export const PILL_FILL_GRAY = '#F1EFE9';
