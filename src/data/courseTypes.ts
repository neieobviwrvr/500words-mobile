// Datentypen des gefuehrten Kurses - fuer ALLE Sprachen dieselben.
//
// Die Felder hiessen bis zum 2026-09-04 `hanzi` und `pinyin`, weil es den
// Kurs nur fuer Chinesisch gab. Mit Schwedisch und Englisch daneben war das
// nicht mehr haltbar: `hanzi: "är"` erzaehlt die falsche Geschichte, und
// wer die Datei liest, sucht nach Zeichen, die es nicht gibt.
//
// Die zwei Felder tragen keine Schriftart, sondern zwei ROLLEN:
//
//   schrift    was VORGELESEN wird. Bei Chinesisch die Zeichen (Pinyin
//              wuerde die Sprachausgabe als lateinischen Text lesen), bei
//              Schwedisch und Englisch das Wort selbst.
//   lerntext   was auf dem Bildschirm STEHT und abgefragt wird. Bei
//              Chinesisch das Pinyin (gelernt wird ueber die Lautschrift,
//              nicht ueber die Zeichen), sonst wieder das Wort selbst.
//
// Bei Sprachen in lateinischer Schrift sind beide gleich. Das ist keine
// Redundanz, sondern der Grund, warum derselbe Uebungs-Screen alle Sprachen
// abspielen kann.

export type CourseWord = {
  /** Wird vorgelesen. Chinesisch: Zeichen. */
  schrift: string;
  /** Steht auf dem Bildschirm und wird abgefragt. Chinesisch: Pinyin. */
  lerntext: string;
  /** Bedeutung in der Sprache des Nutzers. */
  de: string;
};

/** Satzrahmen - dieselbe Rollenteilung wie bei CourseWord. */
export type CourseFrame = {
  schrift: string;
  lerntext: string;
};

export type CourseLessonData = {
  /** "1.1", "1.2", ... - vom Generator vergeben, nicht von Hand. */
  id: string;
  /**
   * `frame`    Satzrahmen mit neuen Slots.
   * `series`   geschlossene Reihe (Zahlen) - bewusst mehr als 5 auf einmal,
   *            weil sie als Abfolge gelernt wird und nicht als Einzelwoerter.
   * `finisher` fuehrt KEINE neuen Vokabeln ein, sondern kombiniert das Modul.
   */
  kind: 'frame' | 'series' | 'finisher';
  /** Satzmuster mit [P]- und [Slot]-Platzhaltern. */
  frame: CourseFrame;
  /** Deutsches Gegenstueck mit denselben Platzhaltern. `null` beim Finisher. */
  frameDe: string | null;
  /** Welche Pronomen diese Lektion als Chips traegt. */
  pronouns: CourseWord[];
  /** Eine Gruppe je Platzhalter im Rahmen. */
  slotGroups: CourseWord[][];
  /** Wie viele Slots in dieser Lektion zum ersten Mal vorkommen. */
  newCount: number;
  /** Nur beim Finisher: die Situation auf Deutsch. */
  task: string | null;
  /** Woerter des Rahmens selbst, die hier zum ersten Mal vorkommen. */
  newFrameWords: CourseWord[];
};

export type CourseModuleData = {
  number: number;
  title: string;
  lessons: CourseLessonData[];
};
