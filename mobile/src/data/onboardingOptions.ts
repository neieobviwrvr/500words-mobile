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
//
// Erweitert 2026-08-30 (Simon) um drei Anlaesse, die bisher fehlten:
// - `work_travel` schliesst die Luecke zur 14. Kategorie `job_work`. Der
//   Zuschnitt ist derselbe wie dort: Work & Travel, Saison- und Nebenjob,
//   NICHT Karriere im Buero (siehe CLAUDE.md).
// - `feiern` war bisher nur als ZIEL vorhanden ("Unbeschreibliche Nächte
//   erleben"), nicht als Reisegrund - dabei ist genau das der Anlass der
//   Backpacker-Persona.
// - `auffrischen` ist der einzige Eintrag, der KEINE Reise beschreibt,
//   sondern einen Kenntnisstand. Er stand vorher nur hinter "Einfach so",
//   was Vorkenntnisse mit Ziellosigkeit verwechselte.
//
// `person` heisst seit 2026-08-30 "Eine bestimmte Person finden" (Simons
// Wortlaut) - vorher "Eine bestimmte Person".
export const OCCASIONS: Occasion[] = [
  { id: 'backpacking', label: 'Backpacking / längere Reise', icon: 'map' },
  { id: 'auslandssemester', label: 'Auslandssemester', icon: 'book-open' },
  { id: 'work_travel', label: 'Work & Travel / Jobben', icon: 'briefcase' },
  { id: 'umzug', label: 'Umzug für längere Zeit', icon: 'package' },
  { id: 'feiern', label: 'Feiern und Leute kennenlernen', icon: 'music' },
  { id: 'person', label: 'Eine bestimmte Person finden', icon: 'heart' },
  { id: 'urlaub', label: 'Urlaub, aber richtig', icon: 'sun' },
  { id: 'auffrischen', label: 'Auffrischen und verbessern', icon: 'refresh-cw' },
  // Bleibt bewusst der LETZTE Eintrag: der Auffangposten fuer alle, auf die
  // nichts darueber zutrifft.
  { id: 'einfach_so', label: 'Einfach so', icon: 'star' },
];

export type Goal = {
  id: string;
  label: string;
  icon: FeatherIconName;
  /** Slug der Kategorie aus data/categories.ts, die dieses Ziel bedient. */
  categoryId: string;
  /**
   * Auf welcher der beiden Auswahlseiten das Ziel steht (2026-08-30).
   * Zwoelf Zeilen am Stueck waren eine Liste, durch die man scrollt statt
   * sie zu lesen - Simons Wunsch war deshalb, sie zu teilen.
   */
  seite: 1 | 2;
};

// O2b - die konkreten Ziele. Dreizehn Stueck, jedes zeigt auf genau eine
// der vierzehn Kaufkategorien. Ohne Ziel bleibt allein `love_relationship` -
// die haengt stattdessen am ANLASS "Eine bestimmte Person finden" (O2a).
//
// "Behörden und Papierkram überleben" war am 2026-08-30 kurz entfernt und
// ist noch am selben Tag zurueckgeholt worden: es ist die EINZIGE Verbindung
// zur Kategorie `moving_settling`, die sonst als einzige Kaufkategorie ohne
// jedes Onboarding-Signal dagestanden haette. Wer es erneut streichen will,
// braucht vorher einen anderen Weg zu dieser Kategorie.
//
// Die Teilung in zwei Seiten ist THEMATISCH, nicht in der Mitte
// durchgeschnitten: Seite 1 sind Ziele rund um Menschen, Seite 2 der
// praktische Alltag. Wer ein Ziel ergaenzt, ordnet es der passenden Seite
// zu - die Seiten muessen nicht gleich lang bleiben (aktuell 6 und 7).
export const GOALS: Goal[] = [
  // Seite 1 - unter Leute kommen.
  { id: 'freunde', label: 'Freunde und neue Leute finden', icon: 'users', categoryId: 'finding_friends', seite: 1 },
  { id: 'naechte', label: 'Unbeschreibliche Nächte erleben', icon: 'moon', categoryId: 'club_nightlife', seite: 1 },
  { id: 'flirten', label: 'Flirten und Daten', icon: 'heart', categoryId: 'dating_romance', seite: 1 },
  { id: 'smalltalk', label: 'Smalltalk führen und die Locals kennenlernen', icon: 'message-circle', categoryId: 'smalltalk_socialising', seite: 1 },
  { id: 'kultur', label: 'Die Kultur verstehen', icon: 'globe', categoryId: 'culture_immersion', seite: 1 },
  { id: 'uni', label: 'Im Uni-Alltag klarkommen', icon: 'edit-3', categoryId: 'university_studying', seite: 1 },
  // Seite 2 - der Alltag drumherum.
  { id: 'wege', label: 'Von A nach B kommen', icon: 'navigation', categoryId: 'travel_transportation', seite: 2 },
  { id: 'unterkunft', label: 'Eine Unterkunft klarmachen', icon: 'home', categoryId: 'hotel_accommodation', seite: 2 },
  { id: 'essen', label: 'Essen bestellen', icon: 'coffee', categoryId: 'drinking_dining', seite: 2 },
  { id: 'einkaufen', label: 'Einkaufen und Handeln', icon: 'shopping-bag', categoryId: 'shopping_haggling', seite: 2 },
  { id: 'probleme', label: 'Mit Problemen umgehen können', icon: 'alert-circle', categoryId: 'health_emergency', seite: 2 },
  { id: 'behoerden', label: 'Behörden und Papierkram überleben', icon: 'file-text', categoryId: 'moving_settling', seite: 2 },
  { id: 'job', label: 'Im Job zurechtkommen', icon: 'briefcase', categoryId: 'job_work', seite: 2 },
];

/** Überschriftenzusatz je Ziel-Seite. */
export const GOAL_SEITEN_UNTERTITEL: Record<1 | 2, string> = {
  1: 'Erst mal: unter Leute kommen.',
  2: 'Und der Alltag drumherum.',
};

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
