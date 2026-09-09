import { useMemo } from 'react';
import { getLanguage } from '../../data/languages';
import { courseFor } from '../../data/courses';

// Der gefuehrte Kurs auf S1 (Nutzer-Wunsch 2026-08-20) - ein Weg durch die
// Grundwoerter, gegliedert in Module und Lektionen, mit Satzmustern,
// Uebersetzung und Nachsprechen.
//
// Aufbau: 12-15 kommunikativ begruendete Module, je Lektion hoechstens 5
// NEUE Woerter plus wiederverwendete aus frueheren Lektionen, am Modulende
// ein Finisher ohne neue Vokabeln.
//
// Gelernt wird ueber PINYIN, nicht ueber Zeichen (Nutzer-Vorgabe). Die
// Zeichen laufen passiv mit, siehe data/chineseCourse.ts.
//
// Im Pfad wird ein MODUL zur Pille und seine drei Lektionen werden die
// auffaecherbare Ebene darunter - dieselbe Mechanik wie Kategorie und
// Situation im Speed-Run, deshalb musste die Pfad-Box dafuer nicht
// angefasst werden.
//
// Seit 2026-09-04 gibt es den Kurs fuer ZEHN Sprachen - alle ausser Deutsch,
// das die Ausgangssprache ist und keine Wortliste hat, aus der sich einer
// bauen liesse. Alle sind ERZEUGT aus Sprachlisten/kurs/: Lehrplan je
// Sprache, gemeinsamer Generator, gemeinsame Pruefregeln (ENTWURF.md).
//
// WELCHE Sprachen einen Kurs haben, steht an genau EINER Stelle -
// `data/courses/index.ts`. Diese Datei fuehrte bis zum 2026-09-07 ihre
// eigene, kuerzere Liste (sv/en/zh), und das war nicht bloss doppelt
// gemoppelt: der Uebungs-Screen, die Wiederholung, der Fortschritt und die
// Wort-Aufgaben fragten laengst `courseFor()` und kannten alle zehn - nur
// der PFAD kannte drei. Fuer sieben Sprachen existierte der Kurs
// vollstaendig und war trotzdem unerreichbar, weil kein Weg hinfuehrte.
//
// Eine weitere Sprache kostet deshalb einen Lehrplan `kurs_<code>.py` und
// eine Zeile in `courses/index.ts` - hier ist nichts mehr nachzutragen.

export type CourseLesson = {
  id: string;
  /** Was im Pfad auf der Pille steht. */
  label: string;
  /** Lektionen des Moduls - im Pfad die auffaecherbare Ebene. */
  themes: { id: string; label: string }[];
  /**
   * Sprachniveau des Moduls, `null` fuer die A1-Stufe. Der Abschnitts-Kopf
   * nennt es neben dem Lernweg, damit der Nutzer sieht, wo eine neue Stufe
   * anfaengt - der Pfad ist sonst eine flache Liste aus 38 Pillen.
   */
  niveau: 'A2' | null;
};

export type GuidedCourse = {
  loading: boolean;
  lessons: CourseLesson[];
  /**
   * Warum gerade kein Kurs da ist - im Klartext fuer die Oberflaeche.
   * `null`, sobald es einen gibt.
   */
  unavailable: string | null;
};

export function useGuidedCourse(languageId: string): GuidedCourse {
  // `useMemo` ist hier kein Feinschliff, sondern noetig: der Aufrufer haengt
  // Effekte und ein eigenes `useMemo` an `lessons`. Ein bei jedem Render neu
  // gebautes Array waere jedes Mal eine neue Referenz - der Effekt liefe
  // endlos, das Memo waere wirkungslos.
  return useMemo(() => {
    const lang = getLanguage(languageId);
    const course = courseFor(languageId);

    if (!course) {
      // Zwei verschiedene Gruende, und der Nutzer soll den richtigen lesen.
      // Ohne Wortliste KANN es keinen Kurs geben - das trifft heute nur
      // Deutsch, die Ausgangssprache. Alles andere waere schlicht noch nicht
      // gebaut, und dann soll dort auch das stehen.
      return {
        loading: false,
        lessons: [],
        unavailable: lang.vocabTable
          ? `Den geführten Kurs für ${lang.label} gibt es noch nicht.`
          : `${lang.label} ist die Sprache, aus der du lernst — dafür gibt es keinen Kurs. Wähle oben eine Lernsprache.`,
      };
    }

    return {
      loading: false,
      lessons: course.map((modul) => ({
        id: `modul-${modul.number}`,
        label: modul.title,
        niveau: modul.niveau ?? null,
        themes: modul.lessons.map((lektion) => ({
          id: lektion.id,
          // Der Finisher heisst anders, weil er sich anders anfuehlt: keine
          // neuen Vokabeln, nur Kombinieren.
          label: lektion.kind === 'finisher' ? `${lektion.id} Finisher` : `Lektion ${lektion.id}`,
        })),
      })),
      unavailable: null,
    };
  }, [languageId]);
}
