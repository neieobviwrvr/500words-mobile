// Welcher Inhalt gerade auf dem Sperrbildschirm steht (Nutzer-Wunsch
// 2026-08-20): alle 5 Stunden ein neues Wort oder ein neuer Satz.
//
// Bewusst reine Rechnung ohne Laden, Speichern oder React - aus zwei Gruenden:
//
// 1. Sie muss DETERMINISTISCH sein. Ein Widget rechnet seinen Inhalt
//    mehrfach aus (bei jedem Timeline-Aufbau, nach jedem Neustart), und die
//    App zeigt in der Vorschau denselben Wert. Wuerde hier gewuerfelt,
//    zeigten Vorschau und Sperrbildschirm verschiedene Dinge, und das Wort
//    spraenge bei jeder Aktualisierung um. Gleicher Zeitpunkt + gleicher
//    Vorrat = gleiches Ergebnis, immer.
// 2. Genau diese Funktionen liefern spaeter die Widget-Timeline: WidgetKit
//    will keine Rueckfrage "was gilt jetzt?", sondern eine Liste kommender
//    Eintraege mit Zeitstempeln (siehe `buildTimeline`).
//
// Der Zeitraster laeuft an der Unix-Epoche entlang, nicht ab Installation -
// zwei Geraete mit demselben Vorrat zeigen dadurch dasselbe, und es gibt
// keinen Startzeitpunkt, den irgendjemand speichern muesste.

/** Wie lange ein Eintrag stehen bleibt. */
export const SLOT_HOURS = 5;
export const SLOT_MS = SLOT_HOURS * 60 * 60 * 1000;

/** Laufende Nummer des 5-Stunden-Fensters, in dem `at` liegt. */
export function slotFor(at: number): number {
  return Math.floor(at / SLOT_MS);
}

/** Zeitpunkt, an dem das naechste Fenster beginnt - also der Inhalt wechselt. */
export function nextSlotAt(at: number): number {
  return (slotFor(at) + 1) * SLOT_MS;
}

// Kleiner, schneller Zufallsgenerator mit Startwert (mulberry32). Nur dafuer
// da, aus einer Zahl eine reproduzierbare Reihenfolge zu machen - keine
// kryptografische Absicht.
function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * EINE feste, gemischte Reihenfolge fuer einen Vorrat der Groesse `n`.
 *
 * Gemischt, weil der Sperrbildschirm sonst alphabetisch bzw. nach ID
 * sortiert daherkaeme. Aber bewusst NICHT pro Durchgang neu gemischt - der
 * erste Entwurf tat das und hatte damit einen Fehler, den ein Test gefunden
 * hat: an der Nahtstelle zweier Durchgaenge konnte der letzte Eintrag des
 * einen zugleich der erste des naechsten sein, das Wort kam also schon nach
 * 5 Stunden wieder. Mit einer festen Reihenfolge enthaelt JEDES Fenster aus
 * `n` aufeinanderfolgenden Zeitscheiben jeden Eintrag genau einmal - der
 * Mindestabstand zwischen zwei Wiederholungen ist damit garantiert ein
 * voller Durchgang, egal wann man hinschaut.
 *
 * Preis dafuer: nach einer vollen Runde laeuft dieselbe Abfolge erneut. Bei
 * 500 Woertern sind das gut 100 Tage - kein Nachteil, der jemandem auffaellt.
 */
function shuffledOrder(n: number): number[] {
  const idx = Array.from({ length: n }, (_, i) => i);
  const rnd = seededRandom(n * 2654435761);
  // Fisher-Yates - nachweislich eine echte Permutation, jeder Eintrag genau
  // einmal. Bei 500 Woertern ein Wimpernschlag.
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

/**
 * Der Eintrag, der im Fenster `slot` gilt. `null` bei leerem Vorrat.
 *
 * Der Vorrat wird vollstaendig durchlaufen, bevor sich etwas wiederholt -
 * bei 500 Woertern und 5 Stunden je Eintrag sind das gut 100 Tage.
 */
export function pickForSlot<T>(pool: T[], slot: number): T | null {
  const n = pool.length;
  if (n === 0) return null;
  if (n === 1) return pool[0];

  // In JS ist % bei negativen Zahlen negativ - Zeitpunkte vor 1970 sind zwar
  // abwegig, ein Absturz dafuer aber unnoetig.
  const position = ((slot % n) + n) % n;
  return pool[shuffledOrder(n)[position]];
}

/** Was gerade gilt, plus wann es wechselt. */
export function currentPick<T>(pool: T[], at: number): { item: T | null; changesAt: number } {
  return { item: pickForSlot(pool, slotFor(at)), changesAt: nextSlotAt(at) };
}

/**
 * Die naechsten `count` Eintraege mit ihren Startzeitpunkten.
 *
 * Heute nur von den Tests benutzt - das ist die Form, die eine WidgetKit-
 * Timeline braucht, sobald die Extension existiert (siehe CLAUDE.md,
 * Sperrbildschirm-Widget). Bewusst hier und nicht im Widget, damit Vorschau
 * und Sperrbildschirm garantiert dieselbe Rechnung benutzen.
 */
export function buildTimeline<T>(
  pool: T[],
  at: number,
  count: number
): { at: number; item: T | null }[] {
  const first = slotFor(at);
  return Array.from({ length: count }, (_, i) => ({
    at: (first + i) * SLOT_MS,
    item: pickForSlot(pool, first + i),
  }));
}

/** "in 3 Std. 12 Min." - fuer die Vorschau in den Einstellungen. */
export function formatCountdown(msRemaining: number): string {
  const total = Math.max(0, Math.ceil(msRemaining / 60000));
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  if (hours === 0) return `in ${minutes} Min.`;
  if (minutes === 0) return `in ${hours} Std.`;
  return `in ${hours} Std. ${minutes} Min.`;
}
