import type { Card } from 'ts-fsrs';
import type { Tier } from '../evaluation/evaluateConcepts';

// Richtig, fast, daneben - je Karte (2026-09-27).
//
// **Warum das noetig war:** eine FSRS-Karte kennt ihren Zustand, nicht ihre
// Geschichte. `reps` sagt, wie oft geantwortet wurde, `lapses`, wie oft die
// Karte aus der Wiederholung heraus vergessen wurde - die STUFE einer Antwort
// (richtig / ueberlebt / nicht verstanden) wird nur in Stabilitaet und
// Schwierigkeit umgerechnet und danach weggeworfen. "Wie oft war es richtig,
// wie oft daneben?" liess sich daraus nicht beantworten, auch nicht
// nachtraeglich.
//
// Genau dieselbe Lage wie beim Lern-Tagebuch, und dieselbe Folge: **gezaehlt
// wird ab dem Build, der diese Datei enthaelt.** Fuer eine Karte, die es
// vorher schon gab, bleibt `reps` die einzige Wahrheit ueber die
// Vergangenheit - `vorZaehlung()` sagt, wie viele Antworten ohne
// Aufschluesselung dastehen, damit die Anzeige nicht behaupten muss, es seien
// keine gewesen.
//
// **Liegt IM Kartenobjekt**, nicht in einem zweiten Speicher. Das ist die
// billigste richtige Stelle: `saveCard` schreibt die Karte als JSON, der
// Abgleich legt sie unveraendert in die `zustand`-Spalte (jsonb) und holt sie
// genauso zurueck - die Zaehler reisen also ohne eine einzige Zeile in
// sync.ts oder eine Migration mit.
//
// **Die Grenze, die dabei bleibt:** beim Abgleich gewinnt je Karte die
// juengere Bewertung als GANZES (siehe `mergeKarten`). Wer auf zwei Geraeten
// offline lernt, verliert die Zaehler des aelteren Stands - genau wie heute
// schon dessen `reps`. Summieren waere eine andere Regel als die, nach der
// die Karte selbst verschmolzen wird, und zwei Regeln fuer ein Objekt laufen
// auseinander.

export type Bilanz = {
  richtig: number;
  /** "Fast" - die Botschaft kam an, nur anders gesagt (Ueberlebensmodus). */
  ueberlebt: number;
  /** "Daneben". */
  nichtVerstanden: number;
  /** Die zuletzt gegebene Bewertung - fuer "letzte Antwort" auf der Karte. */
  letzte: Tier;
  /** Ab wann gezaehlt wird (ms seit Epoche). */
  seit: number;
};

/** Eine gespeicherte Karte - FSRS-Zustand plus unsere Zaehler. */
export type GespeicherteKarte = Card & { bilanz?: Bilanz };

/** Die Bilanz nach einer weiteren Antwort. Legt sie an, wenn es noch keine gab. */
export function bilanzNach(vorher: Bilanz | undefined, stufe: Tier, jetzt: Date): Bilanz {
  const basis: Bilanz =
    vorher ?? { richtig: 0, ueberlebt: 0, nichtVerstanden: 0, letzte: stufe, seit: jetzt.getTime() };
  return {
    ...basis,
    letzte: stufe,
    richtig: basis.richtig + (stufe === 'richtig' ? 1 : 0),
    ueberlebt: basis.ueberlebt + (stufe === 'ueberlebt' ? 1 : 0),
    nichtVerstanden: basis.nichtVerstanden + (stufe === 'nicht_verstanden' ? 1 : 0),
  };
}

/** Wie viele Antworten die Bilanz kennt. */
export function bilanzSumme(b: Bilanz | undefined): number {
  return b ? b.richtig + b.ueberlebt + b.nichtVerstanden : 0;
}

/**
 * Antworten, die es vor dem Zaehler gab - `reps` minus dem, was die Bilanz
 * kennt.
 *
 * Nie negativ: der Abgleich kann eine Karte von einem Geraet bringen, deren
 * `reps` kleiner ist als die hiesige Bilanz. Lieber 0 als eine Zahl, die
 * behauptet, es fehle etwas.
 */
export function vorZaehlung(karte: GespeicherteKarte): number {
  return Math.max(0, karte.reps - bilanzSumme(karte.bilanz));
}
