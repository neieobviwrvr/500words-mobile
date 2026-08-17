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
// Schrift
// ---------------------------------------------------------------------------
// Babbels staerkstes Erkennungsmerkmal ist die Serifen-Headline gegen einen
// serifenlosen Rest. Vorerst die SYSTEM-Serifenschrift (Georgia auf iOS,
// "serif" auf Android) - kein Download, kein expo-font, kein Ladezustand
// beim Start. Sobald eine echte Marken-Schrift feststeht, wird sie hier an
// dieser einen Stelle eingetragen; alle Screens ziehen nach.
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
// Nomen = blau, Verben = rot, Adjektive = gelb, Pronomen = violett.
export type WordType = 'v' | 'n' | 'a' | 'p';
export const WORD_COLORS: Record<WordType, string> = {
  v: '#D9564F',
  n: '#3E6FD1',
  a: '#C99A2E',
  p: '#8B5FD6',
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

// Fuellfarben fuer die Pfad-Pillen im Zickzack-Layout (S1).
export const PILL_FILL_BLUE = '#EAF1FC';
export const PILL_FILL_ORANGE = '#FDEEE3';
export const PILL_FILL_GRAY = '#F1EFE9';
