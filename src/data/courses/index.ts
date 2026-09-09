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
//
// LAZY statt statischer Imports (2026-09-09, Absturz-Untersuchung auf einem
// frisch installierten Geraet). Bis dahin importierte diese Datei alle zehn
// Kursdateien mit `import ... from` am Kopf - das laedt ein Modul nicht nur
// in den Bundle, es FUEHRT dessen Top-Level-Code beim allerersten Zugriff
// auf IRGENDEINEN Export dieser Datei aus. Da `useGuidedCourse`/
// `useGuidedProgress`/`useFaelligeKarten` schon auf S1 (dem allerersten
// Bildschirm nach dem Onboarding) laufen, wurden damit bei JEDEM App-Start
// alle zehn Sprachkurse auf einmal konstruiert - ueber 212.000 Zeilen
// verschachtelter Objekt-Literale, obwohl hoechstens einer davon (die
// gewaehlte Zielsprache) tatsaechlich gebraucht wird. `require()` wertet ein
// Modul dagegen erst bei seinem ERSTEN tatsaechlichen Aufruf aus - der
// Sprung von "immer alle zehn" auf "hoechstens einer" ist der Sinn dieses
// Umbaus, nicht Stilkosmetik.
import { CourseModuleData } from '../courseTypes';

type CourseLoader = () => CourseModuleData[];

const LOADERS: Record<string, CourseLoader> = {
  sv: () => require('./svCourse').SWEDISH_COURSE,
  en: () => require('./enCourse').ENGLISH_COURSE,
  zh: () => require('./zhCourse').CHINESE_COURSE_V2,
  es: () => require('./esCourse').SPANISH_COURSE,
  fr: () => require('./frCourse').FRENCH_COURSE,
  it: () => require('./itCourse').ITALIAN_COURSE,
  no: () => require('./noCourse').NORWEGIAN_COURSE,
  ru: () => require('./ruCourse').RUSSIAN_COURSE,
  vi: () => require('./viCourse').VIETNAMESE_COURSE,
  pl: () => require('./plCourse').POLISH_COURSE,
};

// Cache je Sprache - `require()` wertet ein Modul zwar ohnehin nur einmal
// aus (Node-/Metro-Modulcache), aber ohne eigenen Cache waere `courseFor()`
// bei jedem Aufruf ein neuer Objektzugriff durch den Loader. Reine
// Fleissarbeit-Ersparnis, kein Korrektheitsgewinn.
const geladen: Record<string, CourseModuleData[]> = {};

export function courseFor(languageId: string): CourseModuleData[] | null {
  if (geladen[languageId]) return geladen[languageId];
  const laden = LOADERS[languageId];
  if (!laden) return null;
  const kurs = laden();
  geladen[languageId] = kurs;
  return kurs;
}
