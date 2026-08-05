import { WORD_COLORS, WordType } from '../theme/tokens';

// Cheat-Sheet-Survival Inhalte, 1:1 aus dem Claude-Design-Prototyp uebernommen.
// Bewusst nur EIN echter Beispielsatz + 5 Platzhalter pro Thema: die 4
// Kategorien ohne Lehrbuch-Basis (Dating/Club/Smalltalk/Finding-Friends)
// haben laut CLAUDE.md-Backlog noch 0 cross-referenzierte Saetze - das ist
// also kein UI-Bug, sondern spiegelt den echten Content-Stand wider, bis die
// Cross-Referenzierung (Reiseforen/Blogs) gemacht wurde.

export type Token = { t: string; c: WordType | null };

export type CheatGroupDef = {
  id: string;
  title: string;
  themes: string[];
};

export const CHEAT_GROUP_DEFS: CheatGroupDef[] = [
  { id: 'grundwortschatz', title: 'Grundwortschatz', themes: ['Begrüßung', 'Vorstellung', 'Zahlen', 'Uhrzeit', 'Verabschiedung', 'Termine'] },
  { id: 'club_nightlife', title: 'Club + Nightlife', themes: ['Leute ansprechen', 'Anmachsprüche', 'An der Bar', 'Tanzen', 'Nummer geben', 'Einlass'] },
  { id: 'health_emergency', title: 'Health + Emergency', themes: ['Arzt', 'Apotheke', 'Notruf', 'Symptome', 'Unfall', 'Versicherung'] },
];

export function findCheatGroup(id: string | undefined): CheatGroupDef {
  return CHEAT_GROUP_DEFS.find((g) => g.id === id) ?? CHEAT_GROUP_DEFS[1];
}

const REAL_TOKENS: Token[] = [
  { t: '¡Hola,', c: null },
  { t: 'eres', c: 'v' },
  { t: 'muy', c: null },
  { t: 'guapa!', c: 'a' },
];

export type Phrase = {
  id: string;
  real: boolean;
  placeholder: boolean;
  context: string;
  tokens?: { t: string; color: string }[];
  phon?: string;
  de?: string;
};

export function buildPhrases(themeScope: string, contextLabel: string, textColor: string, showColors: boolean): Phrase[] {
  const resolvedRealTokens = REAL_TOKENS.map((t) => ({ t: t.t, color: showColors && t.c ? WORD_COLORS[t.c] : textColor }));
  const raw = [
    { real: true, placeholder: false, tokens: resolvedRealTokens, phon: 'ola, eres muy guapa', de: 'Hallo, du bist sehr hübsch!' },
    ...[1, 2, 3, 4, 5].map(() => ({ real: false, placeholder: true, tokens: undefined, phon: undefined, de: undefined })),
  ];
  return raw.map((p, i) => ({
    id: 'ph_' + themeScope + '_' + i,
    real: p.real,
    placeholder: p.placeholder,
    context: contextLabel,
    tokens: p.tokens,
    phon: p.phon,
    de: p.de,
  }));
}
