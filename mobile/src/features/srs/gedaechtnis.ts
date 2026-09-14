import { State, type Card } from 'ts-fsrs';

// Sitzt, im Aufbau, wackelt (2026-09-14). Eigene Datei, weil nicht nur die
// Statistikseite danach fragt: "Diese Saetze ueben" und "Diese Woerter
// ueben" waehlen die Karten mit derselben Grenze aus - zwei Fassungen
// wuerden auf der Seite etwas anderes zaehlen, als die Uebung dann zeigt.

export type Gedaechtnis = 'sitzt' | 'aufbau' | 'wackelt';

/**
 * Ab dieser Stabilitaet "sitzt" eine Karte: FSRS erwartet, dass sie auch nach
 * drei Wochen noch abrufbar ist. Dieselbe Grenze, ab der Anki eine Karte
 * "reif" nennt - von Simon so abgenommen.
 */
export const SITZT_AB_TAGEN = 21;

/** Wer eine Karte so oft aus der Wiederholung heraus vergessen hat, bei dem wackelt sie. */
export const WACKELT_AB_VERGESSEN = 2;

/**
 * Sitzt, im Aufbau, wackelt.
 *
 * Die Reihenfolge der Pruefungen ist Absicht: `lapses` sinkt nie wieder. Eine
 * Karte, die vor Monaten zweimal vergessen wurde und inzwischen seit Wochen
 * haelt, soll "sitzt" heissen und nicht fuer immer "wackelt". Deshalb gewinnt
 * "sitzt" vor dem Vergessens-Zaehler - nur ein AKTUELLES Vergessen
 * (Relearning) schlaegt alles.
 */
export function gedaechtnisVon(karte: Card): Gedaechtnis {
  if (karte.state === State.Relearning) return 'wackelt';
  if (karte.state === State.Review && karte.stability >= SITZT_AB_TAGEN) return 'sitzt';
  if (karte.lapses >= WACKELT_AB_VERGESSEN) return 'wackelt';
  return 'aufbau';
}

export type GedaechtnisZahlen = Record<Gedaechtnis, number>;

export function zaehleGedaechtnis(karten: Card[]): GedaechtnisZahlen {
  const zahlen: GedaechtnisZahlen = { sitzt: 0, aufbau: 0, wackelt: 0 };
  for (const k of karten) zahlen[gedaechtnisVon(k)] += 1;
  return zahlen;
}

/** Fuer "Wackelt gerade": am oeftesten vergessen zuerst, bei Gleichstand das zuletzt Geuebte. */
export function wackelndZuerst(a: Card, b: Card): number {
  return b.lapses - a.lapses || (b.last_review?.getTime() ?? 0) - (a.last_review?.getTime() ?? 0);
}
