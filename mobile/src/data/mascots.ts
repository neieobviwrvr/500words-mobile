import type { FeatherIconName } from '../components/onboarding';

// Die drei Begleitfiguren.
//
// Bewusst drei (Nutzer-Entscheidung): Zwei waere binaer und damit schnell
// verbissen, drei erzeugt Buendnisse, Aussenseiter und Comebacks - dieselbe
// Mechanik, die die Starter-Pokemon-Debatte am Leben haelt. Die Wahl wird ab
// Tag eins gespeichert, damit spaeter ein Lager-Wettbewerb darauf aufsetzen
// kann (siehe Plan; die Wettbewerbs-Mechanik selbst ist NICHT gebaut).
//
// Die Figuren unterscheiden sich im Aussehen, nicht im Wortlaut: Alle
// sprechen dasselbe Skript. Eigene Textvarianten pro Figur wuerden jeden
// kuenftigen Satz verdreifachen, und das Identifikationsmerkmal ist ohnehin
// die Figur selbst, nicht ihre Formulierung.

/** Gefuehlslagen, die eine Figur einnehmen kann. */
export type MascotState = 'neutral' | 'freut_sich' | 'feiert' | 'wartet' | 'schlaeft';

/**
 * Auftritt je nach Kategoriewelt (Sonnenbrille im Club, Rucksack beim
 * Reisen...). `standard` greift immer dann, wenn eine Kategorie keine
 * eigene Entsprechung hat - so entsteht nie eine Luecke.
 */
export type MascotOutfit = 'standard' | 'club' | 'reise' | 'uni' | 'gesundheit';

/**
 * Pfade zu echten Bildern. Solange `null`, zeichnet <Mascot /> den
 * Platzhalter. Kommt spaeter Grafik dazu, wird NUR diese Datei angefasst -
 * kein Screen aendert sich.
 */
export type MascotArt = Partial<Record<MascotState, number>>;

export type Mascot = {
  id: string;
  name: string;
  /** Ein Satz Charakter, wird auf dem Auswahl-Screen gezeigt. */
  blurb: string;
  /** Faerbt Platzhalter und Auswahl-Hervorhebung. */
  accentColor: string;
  placeholderIcon: FeatherIconName;
  art: MascotArt | null;
};

export const MASCOTS: Mascot[] = [
  {
    id: 'fizz',
    name: 'Fizz',
    blurb: 'Nachtaktiv und vorlaut — steht als Erste auf der Tanzfläche.',
    accentColor: '#D9564F',
    placeholderIcon: 'zap',
    art: null,
  },
  {
    id: 'nova',
    name: 'Nova',
    blurb: 'Neugierig und gründlich — will wissen, warum ein Satz so klingt.',
    accentColor: '#8B5FD6',
    placeholderIcon: 'compass',
    art: null,
  },
  {
    id: 'bruno',
    name: 'Bruno',
    blurb: 'Ruhig und geduldig — erklärt dir alles auch ein zweites Mal.',
    accentColor: '#3E9B5D',
    placeholderIcon: 'shield',
    art: null,
  },
];

export function getMascot(id: string | null): Mascot | null {
  if (!id) return null;
  return MASCOTS.find((m) => m.id === id) ?? null;
}

// Welche Kategorie welchen Auftritt ausloest. Alles, was hier nicht steht,
// bekommt `standard` - deshalb muss die Liste nie vollstaendig sein.
const OUTFIT_BY_CATEGORY: Record<string, MascotOutfit> = {
  club_nightlife: 'club',
  dating_romance: 'club',
  travel_transportation: 'reise',
  hotel_accommodation: 'reise',
  university_studying: 'uni',
  health_emergency: 'gesundheit',
};

export function outfitForCategory(categoryId: string | null | undefined): MascotOutfit {
  if (!categoryId) return 'standard';
  return OUTFIT_BY_CATEGORY[categoryId] ?? 'standard';
}
