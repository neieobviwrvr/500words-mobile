import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { CHINESE_COURSE, CourseWord } from '../../data/chineseCourse';
import { isDue } from '../srs/fsrsEngine';
import { cardKey, KURS_RAHMEN, KURS_WORT, loadAllCards } from '../srs/srsStorage';
import { fuelleRahmen } from './lessonEvaluation';

// Welche Karten des gefuehrten Kurses sind faellig? (2026-08-21)
//
// Zwei Kartenarten, jede von genau einem Lektionsschritt bewertet:
//   Wortkarte    zh:course-wort:<hanzi>      vom Schritt "abrufen"
//   Rahmenkarte  zh:course-rahmen:<id>       vom Schritt "satz bilden"
//
// NUR was der Nutzer schon gesehen hat: als gesehen gilt, wozu eine Karte
// existiert. Ohne diese Einschraenkung wuerde die Wiederholung Stoff
// abfragen, den es in seiner Welt noch gar nicht gab - und weil neue Karten
// per Definition faellig sind (siehe fsrsEngine.ts), waere sofort der ganze
// Kurs "dran".

export type FaelligeWortkarte = {
  art: 'wort';
  wort: CourseWord;
};

export type FaelligeRahmenkarte = {
  art: 'rahmen';
  lektionId: string;
  /** Ein bekanntes Wort aus der Lektion als Aufgabe fuer den Rahmen. */
  wort: CourseWord;
  hanzi: string;
  pinyin: string;
  /** Der Rahmen selbst, fuer die Anzeige ueber der Aufgabe. */
  rahmenPinyin: string;
};

export type Faellig = FaelligeWortkarte | FaelligeRahmenkarte;

export type FaelligeKarten = {
  loading: boolean;
  faellig: Faellig[];
  /** Wie viele Karten es insgesamt gibt, egal ob faellig. */
  bekannt: number;
  /**
   * true, wenn nichts wirklich faellig war und stattdessen ein paar Karten
   * vorgezogen wurden. Der Screen sagt das dann ehrlich.
   */
  vorgezogen: boolean;
  /**
   * true, wenn der Nutzer diese Kartenart noch NIE geuebt hat - anders als
   * `vorgezogen` (bekannte Karten, nur noch nicht faellig) kommt hier eine
   * kleine zufaellige Kostprobe aus dem Kurs, mit der noch nie eine Karte
   * existierte (2026-08-25, Simons Vorgabe: "damit der User direkt am
   * Anfang was zu sehen hat" statt vor einem leeren Screen zu stehen).
   * Eigenes Flag statt `vorgezogen` mitzubenutzen, weil der Hinweistext ein
   * anderer sein muss - "vorgezogen" behauptet faelschlich, es gaebe schon
   * eine Lernhistorie zum Auffrischen.
   */
  kostprobe: boolean;
};

const LEER: FaelligeKarten = { loading: true, faellig: [], bekannt: 0, vorgezogen: false, kostprobe: false };

/** Wie viele Karten vorgezogen bzw. als Kostprobe gezeigt werden. */
const VORZIEHEN = 5;

function mischen<T>(arr: T[]): T[] {
  const kopie = [...arr];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

/**
 * Auf welche Kartenart die Sitzung beschraenkt wird.
 *
 * Entspricht den beiden Modus-Knoepfen: "Woerter lernen" fragt nur einzelne
 * Vokabeln ab, "Saetze lernen" nur ganze Saetze. Ohne Angabe kommt alles.
 */
export type Kartenart = 'wort' | 'rahmen';

export function useFaelligeKarten(languageId: string, nur?: Kartenart): FaelligeKarten {
  const [state, setState] = useState<FaelligeKarten>(LEER);

  useFocusEffect(
    useCallback(() => {
      let abgebrochen = false;

      (async () => {
        if (languageId !== 'zh') {
          if (!abgebrochen) setState({ ...LEER, loading: false });
          return;
        }

        const karten = await loadAllCards();
        if (abgebrochen) return;

        const alle: Faellig[] = [];
        const nichtFaellig: Faellig[] = [];
        // ALLE moeglichen Karten, unabhaengig davon ob dazu je eine Karte
        // entstand - nur fuer die Kostprobe unten, wenn `alle`/`nichtFaellig`
        // beide leer sind (siehe dort).
        const moeglich: Faellig[] = [];

        for (const modul of CHINESE_COURSE) {
          for (const lektion of modul.lessons) {
            const woerter = [...lektion.newFrameWords, ...lektion.slotGroups.flat()];

            for (const wort of woerter) {
              moeglich.push({ art: 'wort', wort });
              const karte = karten[cardKey('zh', KURS_WORT, wort.hanzi)];
              if (!karte) continue; // noch nie geuebt - gehoert nicht in die Wiederholung
              (isDue(karte) ? alle : nichtFaellig).push({ art: 'wort', wort });
            }

            const ersteSlot = lektion.slotGroups.flat()[0];
            if (ersteSlot) {
              const eintrag: FaelligeRahmenkarte = {
                art: 'rahmen',
                lektionId: lektion.id,
                wort: ersteSlot,
                hanzi: fuelleRahmen(lektion.frame.hanzi, ersteSlot.hanzi),
                pinyin: fuelleRahmen(lektion.frame.pinyin, ersteSlot.pinyin),
                rahmenPinyin: lektion.frame.pinyin,
              };
              moeglich.push(eintrag);
              const rahmenKarte = karten[cardKey('zh', KURS_RAHMEN, lektion.id)];
              if (rahmenKarte) (isDue(rahmenKarte) ? alle : nichtFaellig).push(eintrag);
            }
          }
        }

        if (abgebrochen) return;

        // Nichts faellig? Ein paar vorziehen statt einer leeren Sitzung -
        // dasselbe Verhalten wie im Speed-Run (siehe ExerciseScreen).
        // Erst filtern, DANN ueber das Vorziehen entscheiden - sonst
        // zieht ein leerer Wort-Modus Satzkarten vor, die er gar nicht
        // zeigen darf.
        const passt = (x: Faellig) => !nur || x.art === nur;
        const gefiltert = alle.filter(passt);
        const restGefiltert = nichtFaellig.filter(passt);

        // Dritte Stufe (2026-08-25, Simons Vorgabe): gefiltert UND
        // restGefiltert leer heisst, es existiert noch KEINE einzige Karte
        // dieser Art - ein brandneuer Nutzer, der noch keine Lektion gemacht
        // hat. Vorziehen kann hier nichts vorziehen (nichts ist bekannt),
        // also kommt die Kostprobe aus `moeglich` - denselben Woertern, die
        // spaeter sowieso als Erstes in einer Lektion drankaemen.
        const kostprobe = gefiltert.length === 0 && restGefiltert.length === 0;
        const vorgezogen = !kostprobe && gefiltert.length === 0 && restGefiltert.length > 0;
        const liste = kostprobe
          ? mischen(moeglich.filter(passt)).slice(0, VORZIEHEN)
          : vorgezogen
            ? restGefiltert.slice(0, VORZIEHEN)
            : gefiltert;

        setState({
          loading: false,
          faellig: liste,
          bekannt: gefiltert.length + restGefiltert.length,
          vorgezogen,
          kostprobe,
        });
      })().catch(() => {
        if (!abgebrochen) setState({ ...LEER, loading: false });
      });

      return () => {
        abgebrochen = true;
      };
    }, [languageId, nur])
  );

  return state;
}
