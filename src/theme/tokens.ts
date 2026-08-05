// Design-Tokens 1:1 aus dem Claude-Design-Prototyp "Sprachlern-App.dc.html"
// (Projekt "Speech app mobile prototype", importiert 2026-08-05) uebernommen.
// Die "Liquid Glass"-Blur-Effekte aus dem iOS-Frame-Mockup (ios-frame.jsx)
// sind bewusst NICHT mituebernommen - das ist reine Web-CSS-Praesentation
// des Prototyp-Devices, keine Design-Entscheidung fuer die echte App.

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
};

export function getTheme(dark: boolean): Theme {
  return {
    dark,
    pageBg: dark ? '#0c0b09' : '#EFEBE1',
    bg: dark ? '#171511' : '#FAF9F4',
    cardBg: dark ? '#221F1A' : '#FFFFFF',
    border: dark ? '#34302A' : '#E8E4DA',
    text: dark ? '#F4F1EA' : '#221F1A',
    sub: dark ? '#A39C8C' : '#85807D',
    pathBoxBg: dark ? '#1C1A16' : '#F3F1EA',
    modeBg: dark ? '#1F2A3E' : '#EDF2FC',
    buyBg: dark ? '#16261C' : '#EAF6EE',
  };
}

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
export const ACCENT_ORANGE = '#E0793E';
export const ACCENT_GREEN = '#3E9B5D';
export const ACCENT_GREEN_DARK = '#256B3F';
export const ACCENT_GREEN_BG = '#DFF1E4';
export const ACCENT_AMBER_BG = '#FBE9D8';
export const ACCENT_AMBER_TEXT = '#9A5A1E';
export const ACCENT_NEUTRAL_BG = '#F1EEE6';
export const ACCENT_NEUTRAL_TEXT = '#85807D';
export const ACCENT_PREMIUM = '#C99A2E';
export const NODE_LOCKED = '#B7B2A6';
export const NODE_DONE = '#4C9A6A';
