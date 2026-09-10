import type { Card } from 'ts-fsrs';

/**
 * Wie zwei Geraetestaende zusammengefuehrt werden (2026-08-22).
 *
 * Reine Funktionen ohne Netz, Speicher oder React - aus demselben Grund wie
 * bei `lockscreenRotation`: die Regeln, nach denen Lernfortschritt gewinnt
 * oder verliert, sind der heikelste Teil des Abgleichs und muessen ohne
 * laufende App pruefbar sein.
 *
 * **Es gibt bewusst NICHT eine Regel fuer alles.** "Der neuere Stand gewinnt"
 * ist bei Coins richtig und bei Zaehlern falsch: wer auf dem Handy 40 Saetze
 * geschafft hat und auf dem iPad 5, hat 40 - nicht 5, nur weil das iPad
 * spaeter zuletzt geschrieben hat. Jedes Feld bekommt deshalb die Regel, die
 * zu seiner Bedeutung passt:
 *
 *   monoton wachsend  -> das Groessere gewinnt   (Zaehler)
 *   einmalige Marken  -> Vereinigung             (vergebene Geschenke, Kaeufe)
 *   ersetzbarer Wert  -> der juengere gewinnt    (Coins, Einstellungen)
 *   verdichtete Sicht -> die juengere Bewertung  (FSRS-Karten)
 */

/** Zaehler, die nur steigen: das Maximum ist immer der wahre Stand. */
export function mergeZaehler<T extends Record<string, number>>(lokal: T, fern: Partial<T>): T {
  const raus: Record<string, number> = { ...lokal };
  for (const [k, v] of Object.entries(fern)) {
    if (typeof v === 'number') raus[k] = Math.max(raus[k] ?? 0, v);
  }
  return raus as T;
}

/**
 * Einmalige Marken - vergebene Geschenke, freigeschaltete Kategorien.
 *
 * Vereinigung, nie Abzug: dass ein Geraet eine Marke nicht kennt, heisst
 * nicht, dass sie zurueckgenommen wurde - es war nur offline. Wegnehmen darf
 * hier grundsaetzlich niemand; ein abgelaufenes Abo entfernt die Zeile
 * serverseitig, nicht der Abgleich.
 */
export function mergeMarken(
  lokal: Record<string, boolean>,
  fern: Record<string, boolean>,
): Record<string, boolean> {
  const raus = { ...lokal };
  for (const [k, v] of Object.entries(fern)) if (v) raus[k] = true;
  return raus;
}

/**
 * Ersetzbare Werte: der juengere Schreibvorgang gewinnt.
 *
 * Fuer Coins die einzig haltbare Regel, sobald man sie AUSGEBEN kann - ein
 * "das Groessere gewinnt" wuerde jede Ausgabe rueckgaengig machen, sobald
 * ein zweites Geraet mit altem Stand auftaucht. Heute gibt es noch nichts zu
 * kaufen (siehe CLAUDE.md, Coins), aber die Regel jetzt richtig zu haben
 * kostet nichts und spaeter viel.
 */
export function mergeJuengeres<T>(
  lokal: T,
  lokalAm: number,
  fern: T,
  fernAm: number,
): T {
  return fernAm > lokalAm ? fern : lokal;
}

/** Was eine Karte zum Vergleich braucht - schlanker als der volle Zustand. */
export type KartenStand = { zustand: Card; zuletztBewertet: number };

/**
 * FSRS-Karten zusammenfuehren: je Karte gewinnt die JUENGERE Bewertung.
 *
 * Das ist nicht willkuerlich, sondern folgt daraus, wie FSRS arbeitet: eine
 * Karte verdichtet ihre GESAMTE Review-Historie in Stabilitaet und
 * Schwierigkeit (der Grund, warum wir FSRS statt SM-2 nehmen, siehe
 * CLAUDE.md). Die spaeter bewertete Fassung kennt damit alles, was die
 * fruehere kannte, plus einen Schritt. Sie zu nehmen verliert nichts.
 *
 * Karten, die nur EINE Seite kennt, kommen unveraendert mit - der Fall "auf
 * dem Handy gelernt, das iPad war zwei Wochen aus" darf nichts loeschen.
 */
export function mergeKarten(
  lokal: Record<string, KartenStand>,
  fern: Record<string, KartenStand>,
): Record<string, KartenStand> {
  const raus: Record<string, KartenStand> = { ...lokal };
  for (const [schluessel, fernKarte] of Object.entries(fern)) {
    const lokalKarte = raus[schluessel];
    if (!lokalKarte || fernKarte.zuletztBewertet > lokalKarte.zuletztBewertet) {
      raus[schluessel] = fernKarte;
    }
  }
  return raus;
}

/**
 * Welche Karten muessen hochgeladen werden?
 *
 * Nur die, die lokal juenger sind als auf dem Server - alles andere waere
 * ein Schreibvorgang ohne Aenderung. Bei mehreren hundert Karten ist das der
 * Unterschied zwischen einem kurzen Abgleich und einem, der bei jedem Start
 * die ganze Tabelle neu schreibt.
 */
export function zuSchicken(
  lokal: Record<string, KartenStand>,
  fern: Record<string, KartenStand>,
): string[] {
  return Object.keys(lokal).filter((k) => {
    const f = fern[k];
    return !f || lokal[k].zuletztBewertet > f.zuletztBewertet;
  });
}
