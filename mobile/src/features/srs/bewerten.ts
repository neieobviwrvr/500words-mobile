import type { Tier } from '../evaluation/evaluateConcepts';
import { bilanzNach, type GespeicherteKarte } from './bilanz';
import { newCard, reviewCard } from './fsrsEngine';
import { saveCard, zerlegeKartenSchluessel, KURS_RAHMEN, KURS_WORT } from './srsStorage';
import { merkeAntwort } from './lerntagebuch';

/**
 * Eine Antwort in die Wiederholung schreiben - der EINE Weg dafuer
 * (2026-09-14).
 *
 * Bis dahin stand an drei Stellen dasselbe Paar aus `reviewCard` und
 * `saveCard` (LessonScreen, ExerciseScreen, SentenceReviewScreen). Mit dem
 * Lern-Tagebuch kam ein dritter Schritt dazu, und drei Kopien davon laufen
 * beim naechsten Umbau auseinander: eine Stelle vergisst den Eintrag, und die
 * Statistik zeigt still zu wenig.
 *
 * Gibt die neue Karte SOFORT zurueck - die Lektion braucht sie fuer ihren
 * Zwischenspeicher. Speichern und Tagebuch laufen hinterher und werfen nie:
 * ein Speicherfehler soll die laufende Uebung nicht unterbrechen, hoechstens
 * verhindern, dass diese eine Karte richtig eingeplant wird.
 *
 * Sprache und Lernweg stehen schon im Schluessel: die Namensraeume des Kurses
 * gehoeren zum gefuehrten Lernen, jede Satztabelle zum Speed-Run.
 *
 * `zaehlen: false`, wenn EINE Antwort mehrere Karten schreibt - im Kurs
 * bewertet der Satz-Schritt bei einem wiederholten Wort Rahmen- und Wortkarte
 * zugleich. Im Tagebuch ist das eine Antwort, nicht zwei.
 *
 * **Die Karte fuehrt ausserdem ihre eigene Bilanz mit** (2026-09-27, siehe
 * bilanz.ts): FSRS rechnet die Stufe in Stabilitaet um und vergisst sie
 * danach. Hier ist die einzige Stelle, an der sie noch bekannt ist - deshalb
 * gehoert das Mitzaehlen hierher und nicht in einen der Uebungs-Screens. Die
 * Angabe `zaehlen` betrifft sie NICHT: sie haengt an der Karte, und jede
 * Karte bekommt genau eine Bewertung. Doppelt gezaehlt wuerde nur im
 * Tagebuch, wo eine Antwort eine Antwort ist.
 */
export function bewerteUndSpeichere(
  key: string,
  bisherige: GespeicherteKarte | undefined,
  stufe: Tier,
  { zaehlen = true }: { zaehlen?: boolean } = {}
): GespeicherteKarte {
  const jetzt = new Date();
  // `reviewCard` gibt eine frische Karte des Planers zurueck und kennt unsere
  // Zaehler nicht - die Bilanz muss deshalb danach wieder dran.
  const aktualisiert: GespeicherteKarte = {
    ...reviewCard(bisherige ?? newCard(jetzt), stufe, jetzt),
    bilanz: bilanzNach(bisherige?.bilanz, stufe, jetzt),
  };

  saveCard(key, aktualisiert).catch(() => undefined);

  if (zaehlen) {
    const teile = zerlegeKartenSchluessel(key);
    if (teile) {
      const kurs = teile.namensraum === KURS_WORT || teile.namensraum === KURS_RAHMEN;
      void merkeAntwort(teile.sprache, kurs ? 'gefuehrt' : 'speedrun', stufe, jetzt);
    }
  }

  return aktualisiert;
}
