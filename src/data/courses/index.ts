// Welche Sprachen einen gefuehrten Kurs haben - EINE Stelle.
//
// Alle Kursdateien sind ERZEUGT von Sprachlisten/kurs/bauplan.py aus je
// einem Lehrplan (`kurs_<code>.py`). Eine weitere Sprache kostet einen
// Lehrplan und eine Zeile hier; Uebungs-Screen, Wiederholung und
// Datentypen bleiben unberuehrt.
//
// Deutsch fehlt als einzige Zielsprache absichtlich: es hat keine
// Vokabeltabelle (es ist die Ausgangssprache), und ohne Wortliste gibt es
// nichts, woraus sich ein Kurs bauen liesse.
import { CourseModuleData } from '../courseTypes';
import { SWEDISH_COURSE } from './svCourse';
import { ENGLISH_COURSE } from './enCourse';
import { CHINESE_COURSE_V2 } from './zhCourse';
import { SPANISH_COURSE } from './esCourse';
import { FRENCH_COURSE } from './frCourse';
import { ITALIAN_COURSE } from './itCourse';
import { NORWEGIAN_COURSE } from './noCourse';
import { RUSSIAN_COURSE } from './ruCourse';
import { VIETNAMESE_COURSE } from './viCourse';
import { POLISH_COURSE } from './plCourse';

export const COURSES: Record<string, CourseModuleData[]> = {
  sv: SWEDISH_COURSE,
  en: ENGLISH_COURSE,
  zh: CHINESE_COURSE_V2,
  es: SPANISH_COURSE,
  fr: FRENCH_COURSE,
  it: ITALIAN_COURSE,
  no: NORWEGIAN_COURSE,
  ru: RUSSIAN_COURSE,
  vi: VIETNAMESE_COURSE,
  pl: POLISH_COURSE,
};

export function courseFor(languageId: string): CourseModuleData[] | null {
  return COURSES[languageId] ?? null;
}
