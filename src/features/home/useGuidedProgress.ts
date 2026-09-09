import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { courseFor } from '../../data/courses';
import { cardKey, KURS_RAHMEN, loadAllCards } from '../srs/srsStorage';

// Fortschritt im gefuehrten Pfad (2026-09-04).
//
// **Warum es das braucht.** Bis dahin stand im gefuehrten Zweig von
// PathScreen jeder Knoten fest auf `state: 'open'` und `currentIndex: 0`.
// Folge: keine erledigten Lektionen, keine aktuelle, kein Auto-Scroll -
// "Du bist hier" zeigte immer das erste Modul, egal wie weit jemand war.
// Der Speed-Run konnte das laengst; der Kurs war die Baustelle.
//
// **Woran der Fortschritt haengt.** An den FSRS-Karten, die die Lektion
// ohnehin schreibt - kein zweites Tracking. Der Schritt `satz` legt je
// Lektion eine RAHMENKARTE an (`zh:course-rahmen:1.1`). Existiert sie,
// wurde die Lektion mindestens einmal bis zum Satz-Schritt durchgespielt.
//
// Bewusst NICHT an der Bewertung festgemacht: eine Lektion gilt als
// gemacht, wenn man sie gemacht hat, nicht wenn man sie gut gemacht hat.
// Wer dreimal "ueberlebt" bekommt, soll weitergehen duerfen - alles andere
// widerspraeche dem Grundsatz "SRS soll nicht schlecht gelaunt machen".
// Die Qualitaet regelt FSRS ueber die Wiederholung, nicht der Pfad ueber
// eine Sperre.
//
// **Finisher zaehlen nicht als eigener Schritt**: sie schreiben keine
// Karte (mehrere gueltige Antworten, keiner einzelnen Karte zuzuordnen).
// Ein Modul gilt deshalb als fertig, wenn seine UEBUNGS-Lektionen fertig
// sind.

export type LektionsStand = 'done' | 'current' | 'open';

export type GuidedProgress = {
  loading: boolean;
  /** Lektions-ID -> Stand. Finisher erben den Stand ihres Moduls. */
  lektionen: Record<string, LektionsStand>;
  /** Modul-ID ("modul-3") -> Stand. */
  module: Record<string, LektionsStand>;
  /** Die Lektion, an der es weitergeht - fuer Auto-Scroll und "Du bist hier". */
  aktuelleLektion: string | null;
  aktuellesModul: string | null;
  /** Wie viele Uebungs-Lektionen erledigt sind, von wie vielen. */
  fertig: number;
  gesamt: number;
};

const LEER: GuidedProgress = {
  loading: true, lektionen: {}, module: {},
  aktuelleLektion: null, aktuellesModul: null, fertig: 0, gesamt: 0,
};

export function useGuidedProgress(languageId: string): GuidedProgress {
  const [stand, setStand] = useState<GuidedProgress>(LEER);

  useFocusEffect(
    // Bei JEDEM Betreten neu lesen, nicht nur beim ersten Aufbau: man kommt
    // aus einer gerade beendeten Lektion zurueck und will sie abgehakt
    // sehen. Dasselbe Muster wie useUnlockedProgress im Speed-Run.
    useCallback(() => {
      let abgebrochen = false;

      (async () => {
        const kurs = courseFor(languageId);
        if (!kurs) {
          if (!abgebrochen) setStand({ ...LEER, loading: false });
          return;
        }

        const karten = await loadAllCards();
        if (abgebrochen) return;

        const lektionen: Record<string, LektionsStand> = {};
        const module: Record<string, LektionsStand> = {};
        let aktuelleLektion: string | null = null;
        let aktuellesModul: string | null = null;
        let fertig = 0;
        let gesamt = 0;

        for (const modul of kurs) {
          const modulId = `modul-${modul.number}`;
          const uebungen = modul.lessons.filter((l) => l.kind !== 'finisher');
          let alleFertig = uebungen.length > 0;
          let modulAktuell = false;

          for (const lektion of modul.lessons) {
            const istUebung = lektion.kind !== 'finisher';
            if (istUebung) gesamt += 1;

            const gemacht = Boolean(karten[cardKey(languageId, KURS_RAHMEN, lektion.id)]);
            if (gemacht) {
              lektionen[lektion.id] = 'done';
              if (istUebung) fertig += 1;
              continue;
            }
            alleFertig = false;

            // Die erste nicht erledigte UEBUNG ist die aktuelle. Finisher
            // bleiben aussen vor: sie sind der Abschluss eines Moduls, kein
            // Ort, an dem man einsteigt.
            if (istUebung && !aktuelleLektion) {
              aktuelleLektion = lektion.id;
              aktuellesModul = modulId;
              lektionen[lektion.id] = 'current';
              modulAktuell = true;
            } else {
              lektionen[lektion.id] = 'open';
            }
          }

          module[modulId] = alleFertig ? 'done' : modulAktuell ? 'current' : 'open';
        }

        if (!abgebrochen) {
          setStand({
            loading: false, lektionen, module,
            aktuelleLektion, aktuellesModul, fertig, gesamt,
          });
        }
      })();

      return () => {
        abgebrochen = true;
      };
    }, [languageId])
  );

  return stand;
}
