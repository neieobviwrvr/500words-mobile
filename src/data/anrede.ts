import type { Addressing } from '../state/OnboardingState';

/**
 * Wann die App nach Geschlecht und Ansprache fragt - und was die Antwort bewirkt.
 *
 * **Umgezogen am 2026-08-22 (Nutzer-Entscheidung).** Beide Fragen standen als
 * O5 und O6 mitten im Onboarding, also bevor der Nutzer die App ueberhaupt
 * gesehen hatte. Simon dazu: das sei "einen Tick zu aufdringlich", gefragt
 * werden solle erst, "wenn es auf das Geschlecht oder den Ansprachewunsch
 * ankommt".
 *
 * Der Screen O6 hatte diesen Weg uebrigens selbst schon vorgesehen ("wer hier
 * nichts angibt, wird spaeter beim ersten Oeffnen einer Dating- oder
 * Club-Kategorie gefragt, wo der Nutzen unmittelbar sichtbar ist") - gebaut
 * war er nie.
 */

/**
 * Kategorien, deren Saetze in geschlechtsspezifischen Varianten vorliegen.
 *
 * Gemeint sind Faelle, in denen dasselbe Anliegen je nach Gegenueber anders
 * formuliert wird - im Chinesischen etwa 漂亮 zu Frauen und 帅 zu Maennern.
 * Das ist keine Uebersetzungsfrage, es sind zwei verschiedene Saetze.
 *
 * Heute traegt nur `club_nightlife` solche Varianten (13 Zeilen mit gesetztem
 * `addressing`). Die drei anderen stehen schon hier, weil ihr Content genau
 * dieselbe Aufteilung bekommen soll, sobald er entsteht - so muss beim
 * Befuellen niemand daran denken.
 */
export const KATEGORIEN_MIT_VARIANTEN = [
  'club_nightlife',
  'dating_romance',
  'finding_friends',
  'smalltalk_socialising',
] as const;

/**
 * Sprachen, in denen das Geschlecht des SPRECHERS jeden Satz veraendert.
 *
 * Gibt es in der App noch nicht, die Regel steht aber schon: im Thailaendischen
 * haengt die Hoeflichkeitspartikel am Sprecher (ครับ bei Maennern, ค่ะ bei
 * Frauen) und steckt damit in praktisch jedem Satz - nicht nur in Flirtsaetzen.
 * Bei so einer Sprache darf die Frage NICHT bis zum Kauf einer Kategorie
 * warten, sie gehoert an die Sprachauswahl.
 *
 * Simons Beispiel, als er den Umzug angeordnet hat - deshalb steht es hier und
 * nicht in einem Kommentar, der beim Einbau von Thai niemandem auffiele.
 */
export const SPRACHEN_MIT_SPRECHERGESCHLECHT: readonly string[] = [];

/** Braucht diese Kategorie die Antwort, um die richtigen Saetze zu zeigen? */
export function kategorieBrauchtAnrede(categoryId: string): boolean {
  return (KATEGORIEN_MIT_VARIANTEN as readonly string[]).includes(categoryId);
}

/** Braucht diese Sprache die Antwort schon vor jeder Kategorie? */
export function spracheBrauchtGeschlecht(languageId: string): boolean {
  return SPRACHEN_MIT_SPRECHERGESCHLECHT.includes(languageId);
}

/**
 * Passt eine Satzvariante zum Ansprachewunsch des Nutzers?
 *
 * `addressing` am SATZ heisst: "diese Variante ist fuer jemanden, der Frauen
 * bzw. Maenner ansprechen will". `null` heisst: gilt fuer alle.
 *
 * Ohne Antwort (oder bei "alle"/"sag ich spaeter") bleiben BEIDE Varianten
 * stehen. Das ist bewusst die grosszuegige Richtung: lieber ein Satz zu viel
 * als der falsche - und wer nicht antworten wollte, soll daraus keinen
 * Nachteil haben.
 */
export function passtZurAnsprache(
  satzAddressing: string | null,
  nutzerAnsprache: Addressing | null,
): boolean {
  if (!satzAddressing) return true;
  if (!nutzerAnsprache || nutzerAnsprache === 'alle' || nutzerAnsprache === 'spaeter') return true;
  return satzAddressing === nutzerAnsprache;
}
