import type { FeatherIconName } from '../components/onboarding';

// Auswahlmoeglichkeiten der Onboarding-Strecke.
//
// Die Texte stammen 1:1 aus Simons Vorlage (2026-08-17) und sind bewusst
// als ZIELE/BEFAEHIGUNGEN formuliert, nicht als Kategorienamen: Der Nutzer
// waehlt "Flirten und Daten", nicht "Dating + Romance". Die Verbindung zur
// verkaufbaren Kategorie steht in `categoryId` und bleibt unsichtbar.

export type Occasion = {
  id: string;
  label: string;
  icon: FeatherIconName;
};

// O2a - "Was fuehrt dich hin?". Deckt sich weitgehend mit den in CLAUDE.md
// angedachten thematischen Buendeln (Auslandssemester ~ Uni + Behoerden +
// Smalltalk, Backpacking ~ Reise + Unterkunft + Nachtleben).
export const OCCASIONS: Occasion[] = [
  { id: 'backpacking', label: 'Backpacking / längere Reise', icon: 'map' },
  { id: 'auslandssemester', label: 'Auslandssemester', icon: 'book-open' },
  { id: 'umzug', label: 'Umzug für längere Zeit', icon: 'package' },
  { id: 'person', label: 'Eine bestimmte Person', icon: 'heart' },
  { id: 'urlaub', label: 'Urlaub, aber richtig', icon: 'sun' },
  { id: 'einfach_so', label: 'Einfach so', icon: 'star' },
];

export type Goal = {
  id: string;
  label: string;
  icon: FeatherIconName;
  /** Slug der Kategorie aus data/categories.ts, die dieses Ziel bedient. */
  categoryId: string;
};

// O2b - die konkreten Ziele. Zwoelf davon zeigen auf eine bestehende
// Kategorie; "Im Job zurechtkommen" zeigt auf `job_work`, das es in
// categories.ts noch NICHT gibt (Inhalt folgt, siehe CLAUDE.md). Der
// Eintrag steht bewusst schon hier, damit die Verknuepfung spaeter nur noch
// eine Kategorie braucht und keine Textaenderung.
export const GOALS: Goal[] = [
  { id: 'freunde', label: 'Freunde und neue Leute finden', icon: 'users', categoryId: 'finding_friends' },
  { id: 'naechte', label: 'Unbeschreibliche Nächte erleben', icon: 'moon', categoryId: 'club_nightlife' },
  { id: 'flirten', label: 'Flirten und Daten', icon: 'heart', categoryId: 'dating_romance' },
  { id: 'wege', label: 'Von A nach B kommen', icon: 'navigation', categoryId: 'travel_transportation' },
  { id: 'smalltalk', label: 'Smalltalk führen und die Locals kennenlernen', icon: 'message-circle', categoryId: 'smalltalk_socialising' },
  { id: 'kultur', label: 'Die Kultur verstehen', icon: 'globe', categoryId: 'culture_immersion' },
  { id: 'essen', label: 'Essen bestellen', icon: 'coffee', categoryId: 'drinking_dining' },
  { id: 'unterkunft', label: 'Eine Unterkunft klarmachen', icon: 'home', categoryId: 'hotel_accommodation' },
  { id: 'probleme', label: 'Mit Problemen umgehen können', icon: 'alert-circle', categoryId: 'health_emergency' },
  { id: 'behoerden', label: 'Behörden und Papierkram überleben', icon: 'file-text', categoryId: 'moving_settling' },
  { id: 'einkaufen', label: 'Einkaufen und Handeln', icon: 'shopping-bag', categoryId: 'shopping_haggling' },
  { id: 'uni', label: 'Im Uni-Alltag klarkommen', icon: 'edit-3', categoryId: 'university_studying' },
  { id: 'job', label: 'Im Job zurechtkommen', icon: 'briefcase', categoryId: 'job_work' },
];

// O7 - Altersgruppen zum Antippen statt Zifferneingabe. Ohne Tastatur
// bleibt der Zustimmungssatz zu AGB/Datenschutz sichtbar (bei Duolingo
// verdeckt ihn der Ziffernblock).
export const AGE_BRACKETS = [
  { id: 'unter18', label: 'Unter 18' },
  { id: '18-24', label: '18 bis 24' },
  { id: '25-29', label: '25 bis 29' },
  { id: '30-39', label: '30 bis 39' },
  { id: '40plus', label: '40 oder älter' },
] as const;

export const GENDERS = [
  { id: 'weiblich', label: 'Weiblich' },
  { id: 'maennlich', label: 'Männlich' },
  { id: 'divers', label: 'Divers' },
  { id: 'keine_angabe', label: 'Sag ich lieber nicht' },
] as const;

// O6 - steuert, welche Anmach-/Komplimentvarianten gezeigt werden.
export const ADDRESSING_OPTIONS = [
  { id: 'frauen', label: 'Frauen', icon: 'user' as FeatherIconName },
  { id: 'maenner', label: 'Männer', icon: 'user' as FeatherIconName },
  { id: 'alle', label: 'Alle', icon: 'users' as FeatherIconName },
  { id: 'spaeter', label: 'Sag ich später', icon: 'clock' as FeatherIconName },
];

// O8 - reine Marketing-Frage, ueberspringbar.
export const REFERRAL_SOURCES = [
  { id: 'tiktok', label: 'TikTok', icon: 'video' as FeatherIconName },
  { id: 'instagram', label: 'Instagram', icon: 'instagram' as FeatherIconName },
  { id: 'youtube', label: 'YouTube', icon: 'youtube' as FeatherIconName },
  { id: 'freunde', label: 'Freunde oder Familie', icon: 'users' as FeatherIconName },
  { id: 'store', label: 'App Store / Play Store', icon: 'smartphone' as FeatherIconName },
  { id: 'sonstiges', label: 'Woanders', icon: 'more-horizontal' as FeatherIconName },
];

// Schrittzahlen kommen aus der Maskottchen-Konfiguration, weil der
// Auswahl-Screen die Strecke um einen Schritt verlaengert - und wieder
// verkuerzt, sobald das Maskottchen abgeschaltet wird. Hier nur
// weitergereicht, damit die Screens alles aus einer Quelle beziehen.
// (config.ts importiert selbst nichts, deshalb entsteht kein Ring.)
export { ONBOARDING_TOTAL_STEPS, stepNumber } from '../features/mascot/config';
