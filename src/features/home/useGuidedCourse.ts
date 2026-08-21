import { useMemo } from 'react';
import { getLanguage } from '../../data/languages';
import { CHINESE_COURSE, CourseModuleData } from '../../data/chineseCourse';

// Der gefuehrte Kurs auf S1 (Nutzer-Wunsch 2026-08-20) - ein Weg durch die
// Grundwoerter, gegliedert in Module und Lektionen, mit Satzmustern,
// Uebersetzung und Nachsprechen.
//
// Aufbau nach Simons Vorgabe ("In-Context Micro-Batching"): je Modul drei
// Lektionen - X.1 Satzrahmen A mit 4-5 Slots, X.2 Satzrahmen B mit 4-5
// Slots, X.3 ein Finisher OHNE neue Vokabeln, der A und B kombiniert.
//
// Gelernt wird ueber PINYIN, nicht ueber Zeichen (Nutzer-Vorgabe). Die
// Zeichen laufen passiv mit, siehe data/chineseCourse.ts.
//
// Im Pfad wird ein MODUL zur Pille und seine drei Lektionen werden die
// auffaecherbare Ebene darunter - dieselbe Mechanik wie Kategorie und
// Situation im Speed-Run, deshalb musste die Pfad-Box dafuer nicht
// angefasst werden.
//
// Bisher gibt es den Kurs nur fuer Chinesisch (Simons Testsprache). Andere
// Sprachen bekommen eine leere Liste plus Klartextgrund, den der Pfad
// anzeigt - dort fehlt bisher sowohl das Lernschema als auch eine passende
// Wortliste.

/** Die Kurse, die es gibt. Weitere Sprachen kommen als eigene Datendatei. */
const COURSES: Record<string, CourseModuleData[]> = {
  zh: CHINESE_COURSE,
};

export type CourseLesson = {
  id: string;
  /** Was im Pfad auf der Pille steht. */
  label: string;
  /** Lektionen des Moduls - im Pfad die auffaecherbare Ebene. */
  themes: { id: string; label: string }[];
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
    const course = COURSES[languageId];

    if (!course) {
      return {
        loading: false,
        lessons: [],
        unavailable: `Der geführte Kurs gibt es bisher nur für Chinesisch — für ${lang.label} noch nicht.`,
      };
    }

    return {
      loading: false,
      lessons: course.map((modul) => ({
        id: `modul-${modul.number}`,
        label: modul.title,
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
