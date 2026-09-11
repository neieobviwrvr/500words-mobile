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

import type { WordType } from '../theme/tokens';

export type CourseWord = {
  /** Wird vorgelesen. Chinesisch: Zeichen. */
  schrift: string;
  /** Steht auf dem Bildschirm und wird abgefragt. Chinesisch: Pinyin. */
  lerntext: string;
  /** Bedeutung in der Sprache des Nutzers. */
  de: string;
  /**
   * Wortart fuer die Farben (2026-09-11), vom Generator aus der
   * Vokabeltabelle geschrieben - dieselben Kuerzel wie `word_tags` der
   * Phrasebook-Saetze. Fehlt bei Wortarten, die ungefaerbt bleiben (Adverb,
   * Praeposition, ...), und in aelteren Kursdateien.
   */
  c?: WordType;
  /**
   * Ein WIEDERHOLTES Wort, keins, das diese Lektion einfuehrt (2026-09-07).
   *
   * Jede Lektion mischt ein paar schon gelernte Woerter in ihre Slots, damit
   * sie einen zweiten Zusammenhang bekommen (R3 in ENTWURF.md). Bis dahin
   * behandelte der Uebungs-Screen sie wie neue: Teaser-Satz, Nachsprechen,
   * Abrufen, Satz - vier Schritte fuer ein Wort, das man schon kennt.
   *
   * Das hatte zwei Folgen. Die Lektionen waren mit 33 bis 41 Schritten
   * doppelt so lang wie geplant (ENTWURF.md rechnet mit ~19), und weil
   * Wiederholung so teuer war, bekam sie fast kein Wort oft genug.
   *
   * Ein wiederholtes Wort braucht nur den SATZ-Schritt: es im neuen Rahmen
   * selbst produzieren. Genau das ist der zweite Zusammenhang, um den es
   * geht - alles andere hat die Einfuehrungslektion schon geleistet.
   *
   * Fehlt das Feld, gilt das Wort als neu. So bleiben aeltere Kursdateien
   * lesbar.
   */
  wieder?: boolean;
};

/** Satzrahmen - dieselbe Rollenteilung wie bei CourseWord. */
export type CourseFrame = {
  schrift: string;
  lerntext: string;
  /**
   * Wortarten der FESTEN Rahmenwoerter (2026-09-11): Wort, wie es im
   * Lerntext steht (mit Satzzeichen) -> Farb-Kuerzel. Die Luecke faerbt
   * sich nach dem Slot-Wort (`CourseWord.c`). Siehe satzTokens() in
   * lessonEvaluation.ts und ergaenze_wortarten() in bauplan.py.
   */
  wortarten?: Record<string, WordType>;
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
  /**
   * Sprachniveau des Moduls - `"A2"` oder `null` fuer die A1-Stufe
   * (2026-09-09).
   *
   * Der Pfad ist eine flache Modul-Liste; ohne diese Angabe saehe der
   * Nutzer nach Modul 24 einfach weitere Pillen und wuesste nicht, dass
   * dort eine neue Stufe anfaengt. Der Abschnitts-Kopf auf S1 nennt sie
   * deshalb neben dem Lernweg ("GEFÜHRTES LERNEN · A2").
   *
   * Optional, damit aeltere Kursdateien lesbar bleiben - dasselbe Muster
   * wie `wieder?: boolean` bei CourseWord.
   */
  niveau: 'A2' | null;
  lessons: CourseLessonData[];
};
