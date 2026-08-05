import { Token } from './cheatsheetContent';

// Platzhalter-Uebungssaetze aus dem Claude-Design-Prototyp (Spanisch).
// TODO (Backlog): sobald der Uebungs-Screen an echten Supabase-Content
// angebunden wird (phrasebook_master / vokabular pro Sprache+Kategorie),
// ersetzt das die hartcodierten sentenceSets hier. Bis dahin nur fuers
// Durchklicken/Testen der Screen-Logik.

export type Tier = 'richtig' | 'ueberlebt' | 'nicht';

export type ExerciseSentence = {
  tokens: Token[];
  check: (answerLowerTrimmed: string) => Tier;
};

export const SENTENCE_SETS: Record<string, ExerciseSentence[]> = {
  default: [
    {
      tokens: [{ t: '¿Quieres', c: 'v' }, { t: 'ir', c: 'v' }, { t: 'a', c: null }, { t: 'bailar?', c: 'v' }],
      check: (a) => (a.includes('tanzen') && (a.includes('möchtest') || a.includes('willst')) ? 'richtig' : a.includes('tanzen') ? 'ueberlebt' : 'nicht'),
    },
    {
      tokens: [{ t: '¿Cómo', c: null }, { t: 'te', c: 'p' }, { t: 'llamas?', c: 'v' }],
      check: (a) => (a.includes('heiß') ? 'richtig' : a.includes('name') ? 'ueberlebt' : 'nicht'),
    },
    {
      tokens: [{ t: 'Te', c: 'p' }, { t: 'invito', c: 'v' }, { t: 'a', c: null }, { t: 'una', c: null }, { t: 'copa.', c: 'n' }],
      check: (a) => ((a.includes('lad') && (a.includes('drink') || a.includes('trinken'))) ? 'richtig' : (a.includes('lad') || a.includes('drink')) ? 'ueberlebt' : 'nicht'),
    },
  ],
};

export const FEEDBACK_MAP: Record<Tier, { msg: string; bg: string; color: string }> = {
  richtig: { msg: '✓ Richtig! Perfekt erkannt.', bg: '#DFF1E4', color: '#256B3F' },
  ueberlebt: { msg: '~ Überlebt! Kernaussage verstanden, nicht ganz exakt.', bg: '#FBE9D8', color: '#9A5A1E' },
  nicht: { msg: '✕ Nicht verstanden. Versuch es nochmal.', bg: '#F1EEE6', color: '#85807D' },
};
