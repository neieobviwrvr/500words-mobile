import { ExerciseSentence } from './phrasebookContent';

// Geliehene Situationen (2026-08-21, Nutzer-Wunsch).
//
// Eine Kategorie kann Situationen aus dem Grundwortschatz mit anzeigen.
// Grund: "falls der User nicht den Standardwortschatz und die Standardsätze
// zuerst anschaut, sondern direkt in die Kategorien will".
//
// **Geliehen, nicht kopiert.** Der Satz behaelt seine eigene Kategorie und
// damit seine EINE FSRS-Karte. Zweimal in der Datenbank stehen hiesse zwei
// IDs, zwei Karten und doppelte Zaehlung im Fortschritt - man wuerde "Hallo!"
// zweimal lernen.
//
// ============================================================ Die Regel
//
// Geliehen wird NUR, was man braucht, um die eigenen Situationen der
// Kategorie zu Ende zu bringen - nicht alles, was allgemein nuetzlich ist.
// Wuerde jede Kategorie alles leihen, staende in jeder Reihe dasselbe, und
// der Lektionen-Screen waere sechsmal dieselbe Liste.
//
// Pruefung je Fall: Kommt man durch diese Kategorie, OHNE das zu koennen?
//
//   Einkaufen ohne Zahlen        nein  -> leihen
//   Reisen ohne Uhrzeit          nein  -> leihen
//   Beim Arzt ohne Vorstellung   ja    -> nicht leihen
//   Im Hotel ohne Smalltalk      ja    -> nicht leihen
//
// ============================================================ Was NICHT geliehen wird
//
// `vorstellung` geht nur an die geselligen Kategorien. Man stellt sich
// niemandem in der Apotheke vor.
//
// `zahlen` geht nicht an Health: die Preisfragen dort stehen schon in der
// eigenen Situation "Versicherung und Bezahlen".
//
// `begruessung` geht nicht an Hotel, Shopping, Travel. Grussformeln lernt
// jeder in den ersten Tagen ohnehin, und sie wuerden in acht Reihen dasselbe
// anzeigen. (`abschied` gibt es seit dem 2026-08-22 nicht mehr - drei Saetze
// waren zu wenig fuer eine eigene Box, sie stehen jetzt in `begruessung`.)
//
// `hoeflichkeit` geht NUR an Smalltalk und Finding Friends, obwohl "Danke"
// und "Entschuldigung" ueberall gebraucht werden - eben deshalb stehen sie
// im freien Grundwortschatz, den jeder Nutzer hat. In dreizehn Kategorien
// dieselben neun Saetze zu zeigen, machte den Katalog unleserlich. Die zwei
// Ausnahmen folgen einer ausdruecklichen Vorgabe (Simon, 2026-08-21): wer
// direkt in Smalltalk springt, soll Gruessen UND Bedanken dort vorfinden.
//
// `notlage` wird gar nicht verliehen: Health + Emergency deckt Notfaelle mit
// eigenen Situationen ab, und "Wo ist die Toilette?" braucht keine Kategorie
// zweimal.
//
// Club + Nightlife leiht GAR NICHTS: die Kategorie bringt eigene Saetze fuer
// Reinkommen, Bezahlen, Ansprechen und Verabschieden mit - dort waere jede
// Leihgabe eine Doppelung.

type Leihe = { category: string; scenarios: string[] };

/**
 * Eigene Namen fuer geliehene Situationen (Nutzer-Wunsch 2026-08-21).
 *
 * Dieselben sechs Verstaendigungs-Saetze stehen in elf Kategorien. Hiessen
 * sie ueberall gleich, begaenne jede Kategorie mit derselben Karte - und bei
 * Sprachen ohne eigenen Content waere sie sogar die einzige. Der Nutzer
 * bekaeme "wie gleich hier alles ist" direkt ins Gesicht gedrueckt.
 *
 * **Der Name aendert sich, der Satz nicht.** Das ist Rahmung, keine
 * Verschleierung: wer beide Kategorien oeffnet, sieht dieselben Saetze - und
 * soll das auch, denn es ist DIESELBE Karte, die er nur einmal lernen muss.
 * Deshalb sagt es der Shop vor dem Kauf ausdruecklich (siehe ShopScreen).
 *
 * Schluessel: `kategorie:situation`.
 */
export const LEIH_NAMEN: Record<string, string> = {
  // Sich verstaendigen - je nach Lage anders gerahmt
  'travel_transportation:verstaendigen': 'Wenn du nicht weiterkommst',
  'health_emergency:verstaendigen': 'Wenn es schnell gehen muss',
  'shopping_haggling:verstaendigen': 'Nachfragen im Laden',
  'drinking_dining:verstaendigen': 'Nachfragen beim Bestellen',
  'hotel_accommodation:verstaendigen': 'An der Rezeption nachfragen',
  'moving_settling:verstaendigen': 'Auf dem Amt nachfragen',
  'university_studying:verstaendigen': 'In der Vorlesung nachfragen',
  'culture_immersion:verstaendigen': 'Unterwegs nachfragen',
  'dating_romance:verstaendigen': 'Wenn du etwas nicht verstehst',
  'love_relationship:verstaendigen': 'Wenn du etwas nicht verstehst',
  'finding_friends:verstaendigen': 'Wenn du etwas nicht verstehst',

  // Zahlen und Uhrzeit
  'shopping_haggling:zahlen': 'Preise verstehen',
  'drinking_dining:zahlen': 'Preise verstehen',
  'travel_transportation:zahlen': 'Preise und Nummern',
  'hotel_accommodation:zahlen': 'Preise und Zimmernummern',
  'moving_settling:zahlen': 'Miete und Zahlen',
  'travel_transportation:uhrzeit': 'Abfahrtszeiten',
  'university_studying:uhrzeit': 'Wann was stattfindet',
  'culture_immersion:uhrzeit': 'Öffnungszeiten',

  // Termine
  'hotel_accommodation:termin': 'Anreise und Abreise',
  'moving_settling:termin': 'Behördentermine',
  'university_studying:termin': 'Fristen und Termine',
  'finding_friends:termin': 'Sich verabreden',
  'dating_romance:termin': 'Sich verabreden',

  // Aus Kultur geliehen - im Smalltalk anders gerahmt
  'smalltalk_socialising:kultur_wetter': 'Über das Wetter reden',
  'smalltalk_socialising:kultur_freizeit': 'Was man gern macht',
  'smalltalk_socialising:kultur_wochenende': 'Pläne fürs Wochenende',

  // Gruessen und Vorstellen im Smalltalk
  'smalltalk_socialising:begruessung': 'Ins Gespräch kommen',
  'finding_friends:begruessung': 'Den ersten Schritt machen',
  'finding_friends:vorstellung': 'Sich bekannt machen',

  // Hoeflichkeit in den zwei geselligen Kategorien
  'smalltalk_socialising:hoeflichkeit': 'Danke und Entschuldigung',
  'finding_friends:hoeflichkeit': 'Nicht ins Fettnäpfchen treten',
};

/** Wie heisst diese Situation in dieser Kategorie? `null` = Standardname. */
export function leihName(categoryId: string, scenario: string): string | null {
  return LEIH_NAMEN[`${categoryId}:${scenario}`] ?? null;
}

/** Ueberall dabei: ohne das bricht jede Kategorie beim ersten Missverstaendnis ab. */
const VERSTAENDIGEN: Leihe = { category: 'grundwortschatz', scenarios: ['verstaendigen'] };

const GESELLIG: Leihe = {
  category: 'grundwortschatz',
  scenarios: ['begruessung', 'vorstellung'],
};

/** Danke, Entschuldigung, Ja, Nein - siehe Kopfkommentar, warum nur hier. */
const HOEFLICH: Leihe = { category: 'grundwortschatz', scenarios: ['hoeflichkeit'] };

/**
 * Wetter, Freizeit und Wochenende liegen in Culture + Immersion, sind aber
 * inhaltlich reiner Smalltalk (2026-08-22). Statt sie neu zu schreiben,
 * leiht Smalltalk sie - zwoelf Saetze, die dort ohnehin hingehoeren.
 */
const KULTUR_GESPRAECH: Leihe = {
  category: 'culture_immersion',
  scenarios: ['kultur_wetter', 'kultur_freizeit', 'kultur_wochenende'],
};

const ZAHLEN: Leihe = { category: 'grundwortschatz', scenarios: ['zahlen'] };
const ZEIT: Leihe = { category: 'grundwortschatz', scenarios: ['uhrzeit'] };
const TERMINE: Leihe = { category: 'grundwortschatz', scenarios: ['termin'] };

export const GELIEHEN: Record<string, Leihe[]> = {
  // --- Gesellige Kategorien: Gruessen, Vorstellen, Verabschieden
  smalltalk_socialising: [GESELLIG, HOEFLICH, VERSTAENDIGEN, KULTUR_GESPRAECH],
  finding_friends: [GESELLIG, HOEFLICH, TERMINE, VERSTAENDIGEN],
  dating_romance: [TERMINE, VERSTAENDIGEN],
  love_relationship: [VERSTAENDIGEN],

  // --- Transaktion: ohne Zahlen kommt man nicht durch
  shopping_haggling: [ZAHLEN, VERSTAENDIGEN],
  drinking_dining: [ZAHLEN, VERSTAENDIGEN],

  // --- Unterwegs: Zahlen fuer Preise, Uhrzeit fuer Abfahrten
  travel_transportation: [ZAHLEN, ZEIT, VERSTAENDIGEN],
  hotel_accommodation: [ZAHLEN, TERMINE, VERSTAENDIGEN],

  // --- Laenger bleiben: Termine fuer Behoerden und Besichtigungen
  moving_settling: [ZAHLEN, TERMINE, VERSTAENDIGEN],
  university_studying: [TERMINE, ZEIT, VERSTAENDIGEN],
  culture_immersion: [ZEIT, VERSTAENDIGEN],

  // --- Beim Arzt: nur die Verstaendigung, der Rest steht in eigenen Situationen
  health_emergency: [VERSTAENDIGEN],

  // club_nightlife leiht bewusst nichts - siehe Kopfkommentar.
};

/** Welche fremden Kategorien muessen mitgeladen werden? */
export function leihgeberVon(categoryIds: string[]): string[] {
  const extra = new Set<string>();
  for (const id of categoryIds) {
    for (const leihe of GELIEHEN[id] ?? []) {
      if (!categoryIds.includes(leihe.category)) extra.add(leihe.category);
    }
  }
  return [...extra];
}

/** Leiht sich `categoryId` diesen Satz aus einer anderen Kategorie? */
export function istGeliehen(categoryId: string, s: { category: string; scenario: string }): boolean {
  if (s.category === categoryId) return false;
  return (GELIEHEN[categoryId] ?? []).some(
    (leihe) => leihe.category === s.category && leihe.scenarios.includes(s.scenario)
  );
}

/**
 * Alle Saetze, die zu `categoryId` gehoeren - eigene UND geliehene.
 *
 * Bewusst eine eigene Funktion statt eines Filters an jeder Aufrufstelle:
 * Uebungs-Screen, Lektionen-Screen und Wortliste muessen dieselbe Antwort
 * geben, sonst zeigt die eine Stelle Saetze, die die andere nicht kennt.
 */
export function saetzeFuer(categoryId: string, alle: ExerciseSentence[]): ExerciseSentence[] {
  return alle.filter((s) => s.category === categoryId || istGeliehen(categoryId, s));
}
