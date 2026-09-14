import type { Card } from 'ts-fsrs';
import type { CourseModuleData, CourseWord } from '../../data/courseTypes';
import { schritteFuerLektion } from '../course/LessonScreen';
import type { LektionsStand } from '../home/useGuidedProgress';
import { eintragSchluessel, tagSchluessel, type Lernweg, type Tagebuch } from '../srs/lerntagebuch';

// Rechnungen der Statistikseite (2026-09-14) - bewusst reine Funktionen ohne
// Laden und ohne React, damit jede Grenze an EINER Stelle steht.

export {
  gedaechtnisVon,
  SITZT_AB_TAGEN,
  WACKELT_AB_VERGESSEN,
  wackelndZuerst,
  zaehleGedaechtnis,
  type Gedaechtnis,
  type GedaechtnisZahlen,
} from '../srs/gedaechtnis';

// ------------------------------------------------------------ Faellig

export type FaelligTag = { datum: Date; anzahl: number };

function tagesBeginn(jetzt: Date, versatzTage: number): number {
  return new Date(jetzt.getFullYear(), jetzt.getMonth(), jetzt.getDate() + versatzTage).getTime();
}

/**
 * Faellige Karten fuer heute und die naechsten Tage, in Ortszeit.
 *
 * "Heute" heisst: faellig bis heute Abend - also auch alles, was schon
 * ueberfaellig ist. Die Folgetage zaehlen nur, was an genau diesem Tag dazukommt.
 */
export function faelligJeTag(karten: Card[], jetzt: Date = new Date(), tage = 7): FaelligTag[] {
  const liste: FaelligTag[] = Array.from({ length: tage }, (_, i) => ({
    datum: new Date(tagesBeginn(jetzt, i)),
    anzahl: 0,
  }));
  for (const k of karten) {
    const faellig = k.due.getTime();
    for (let i = 0; i < tage; i++) {
      if (faellig < tagesBeginn(jetzt, i + 1)) {
        liste[i].anzahl += 1;
        break;
      }
    }
  }
  return liste;
}

// ------------------------------------------------------------ Verlauf

export type VerlaufTag = {
  datum: Date;
  antworten: number;
  verstanden: number;
  lektionen: number;
  /** Vor dem ersten Tagebuch-Eintrag - unbekannt, nicht null. */
  vorBeginn: boolean;
};

/** Der frueheste Tag, an dem das Tagebuch ueberhaupt etwas gezaehlt hat. */
export function tagebuchBeginn(buch: Tagebuch): string | null {
  const tage = Object.keys(buch).sort();
  return tage[0] ?? null;
}

/**
 * Die letzten Tage bis heute fuer einen Lernweg.
 *
 * Tage vor dem ersten Eintrag heissen `vorBeginn`: dort wurde nicht "nichts
 * gelernt", dort wurde nur noch nicht gezaehlt. Die Seite zeigt sie deshalb
 * nicht als leere Saeule.
 */
export function letzteTage(
  buch: Tagebuch,
  sprache: string,
  weg: Lernweg,
  jetzt: Date = new Date(),
  tage = 7
): VerlaufTag[] {
  const beginn = tagebuchBeginn(buch);
  const eintrag = eintragSchluessel(sprache, weg);
  return Array.from({ length: tage }, (_, i) => {
    const datum = new Date(tagesBeginn(jetzt, i - (tage - 1)));
    const schluessel = tagSchluessel(datum);
    const z = buch[schluessel]?.[eintrag];
    const antworten = z ? z.richtig + z.ueberlebt + z.nichtVerstanden : 0;
    return {
      datum,
      antworten,
      verstanden: z ? z.richtig + z.ueberlebt : 0,
      lektionen: z?.lektionen ?? 0,
      vorBeginn: beginn === null || schluessel < beginn,
    };
  });
}

export function lerntage(tage: VerlaufTag[]): number {
  return tage.filter((t) => t.antworten > 0 || t.lektionen > 0).length;
}

// ------------------------------------------------------------ Tempo und Restzeit

/** Ueber so viele Tage wird das eigene Tempo gemittelt. */
export const TEMPO_FENSTER_TAGE = 14;
/** Darunter ist ein Tempo mehr Zufall als Aussage - dann keine Wochen-Schaetzung. */
export const TEMPO_MIN_LEKTIONEN = 3;

/**
 * Lektionen je Tag in der Sprache, gemittelt ueber die letzten zwei Wochen.
 *
 * Gezaehlt wird ab dem ersten Tagebuch-Tag, nicht ab vierzehn Tagen zurueck:
 * sonst halbierte ein Tagebuch, das erst eine Woche alt ist, jedes Tempo.
 */
export function lektionenJeTag(buch: Tagebuch, sprache: string, jetzt: Date = new Date()): number | null {
  const beginn = tagebuchBeginn(buch);
  if (!beginn) return null;
  const tage = letzteTage(buch, sprache, 'gefuehrt', jetzt, TEMPO_FENSTER_TAGE).filter((t) => !t.vorBeginn);
  const summe = tage.reduce((s, t) => s + t.lektionen, 0);
  if (tage.length === 0 || summe < TEMPO_MIN_LEKTIONEN) return null;
  return summe / tage.length;
}

/**
 * Sekunden je Uebungsschritt. Gemessen am 2026-09-07: Median 16 bis 20
 * Schritte je Lektion bei 2,5 bis 3,3 Minuten - rund zehn Sekunden.
 */
export const SEKUNDEN_JE_SCHRITT = 10;

export type Restweg = {
  /** Die naechste Stufe - `ende`, wenn schon in A2 gelernt wird. */
  ziel: 'A2' | 'ende';
  /** Offene Uebungs-Lektionen bis dorthin. */
  lektionen: number;
  /** Geschaetzte Lernzeit in Minuten, aus der echten Schrittzahl jeder Lektion. */
  minuten: number;
  /** Anteil der aktuellen Stufe, der schon geschafft ist. */
  anteilStufe: number;
};

export function restweg(kurs: CourseModuleData[], stand: Record<string, LektionsStand>): Restweg | null {
  const stufe = (m: CourseModuleData) => (m.niveau === 'A2' ? 'A2' : 'A1');
  const offenIn = (s: 'A1' | 'A2') =>
    kurs.some((m) => stufe(m) === s && m.lessons.some((l) => l.kind !== 'finisher' && stand[l.id] !== 'done'));

  const aktuelleStufe = offenIn('A1') ? 'A1' : offenIn('A2') ? 'A2' : null;
  if (!aktuelleStufe) return null;

  let lektionen = 0;
  let gesamt = 0;
  let schritte = 0;
  for (const modul of kurs) {
    if (stufe(modul) !== aktuelleStufe) continue;
    const uebungen = modul.lessons.filter((l) => l.kind !== 'finisher');
    const offen = uebungen.filter((l) => stand[l.id] !== 'done');
    gesamt += uebungen.length;
    lektionen += offen.length;
    for (const l of offen) schritte += schritteFuerLektion(l).length - 1;
    // Der Finisher gehoert dazu, solange sein Modul nicht fertig ist.
    if (offen.length > 0) {
      for (const l of modul.lessons) if (l.kind === 'finisher') schritte += schritteFuerLektion(l).length - 1;
    }
  }

  return {
    ziel: aktuelleStufe === 'A1' ? 'A2' : 'ende',
    lektionen,
    minuten: (schritte * SEKUNDEN_JE_SCHRITT) / 60,
    anteilStufe: gesamt > 0 ? (gesamt - lektionen) / gesamt : 0,
  };
}

// ------------------------------------------------------------ Kurswoerter

/**
 * Alle Woerter, fuer die der Kurs eine Wortkarte schreiben kann - je
 * Schreibweise einmal, in der Reihenfolge ihres ersten Auftretens.
 *
 * Die Wortkarte haengt an der SATZFORM (`er`, `var`), deshalb zaehlt hier
 * jede Form fuer sich. Ein Rueckweg zum Grundwort steht nicht in den
 * Kursdaten; Norwegisch hat so 609 Eintraege bei 500 Woertern der Liste.
 */
export function kursWoerter(kurs: CourseModuleData[]): Map<string, CourseWord> {
  const woerter = new Map<string, CourseWord>();
  for (const modul of kurs) {
    for (const l of modul.lessons) {
      for (const w of [...l.newFrameWords, ...l.slotGroups.flat()]) {
        if (!woerter.has(w.schrift)) woerter.set(w.schrift, w);
      }
    }
  }
  return woerter;
}

// ------------------------------------------------------------ Texte

const WOCHENTAGE = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

export function wochentagKurz(datum: Date): string {
  return WOCHENTAGE[datum.getDay()];
}

const MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

/**
 * `2026-09-14` -> `14. September`. Ausgeschrieben, weil es im Satz steht -
 * eine Abkuerzung mit Punkt ergaebe am Satzende zwei Punkte.
 */
export function datumLang(tag: string): string {
  const [, m, t] = tag.split('-').map(Number);
  return `${t}. ${MONATE[m - 1]}`;
}

/** Lernzeit ungefaehr: unter einer Stunde in Fuenf-Minuten-Schritten, darueber in halben Stunden. */
export function dauerText(minuten: number): string {
  if (minuten < 60) return `${Math.max(5, Math.round(minuten / 5) * 5)} Minuten`;
  const halbe = Math.round(minuten / 30) / 2;
  const ganz = Math.floor(halbe);
  const text = `${ganz}${halbe > ganz ? '½' : ''}`;
  return `${text} ${halbe === 1 ? 'Stunde' : 'Stunden'}`;
}

/** Bis zum Ziel bei einem Tempo: bis knapp zwei Wochen in Tagen, darueber in Wochen. */
export function zeitraumText(lektionen: number, jeTag: number): string {
  const tage = Math.max(1, Math.ceil(lektionen / jeTag));
  if (tage < 14) return tage === 1 ? '1 Tag' : `${tage} Tage`;
  return `${Math.round(tage / 7)} Wochen`;
}

/** Eine Nachkommastelle, deutsches Komma. Von Hand statt `toLocaleString`, das nicht jede Hermes-Fassung kann. */
export function zahlText(zahl: number): string {
  return String(Math.round(zahl * 10) / 10).replace('.', ',');
}
