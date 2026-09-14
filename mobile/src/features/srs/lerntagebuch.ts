import AsyncStorage from '@react-native-async-storage/async-storage';
import { mergeTagebuch } from '../../lib/merge';
import type { Tier } from '../evaluation/evaluateConcepts';
import type { LearningMode } from '../../state/AppState';

// Lern-Tagebuch (2026-09-14, Simon: "bau zuerst das Tagebuch ein").
//
// Zaehlt je Tag, Sprache und Lernweg, wie viele Antworten richtig, ueberlebt
// und nicht verstanden waren, und wie viele Lektionen fertig wurden. Mehr
// nicht - keine Saetze, keine Aufnahmen, keine Uhrzeiten.
//
// **Warum es das braucht:** eine FSRS-Karte kennt nur ihren aktuellen Stand
// und ihre LETZTE Bewertung. Wie viel an welchem Tag gelernt wurde, laesst
// sich daraus nicht zurueckrechnen - und auch die Stufe einer Antwort steht
// nirgends, sie wird nur in die Karte umgerechnet. Verlauf, Lerntage und das
// eigene Tempo auf der Statistikseite haengen deshalb allein hieran.
//
// **Es kann nichts nachholen.** Gezaehlt wird ab dem Build, der diese Datei
// enthaelt. Deshalb kam es VOR der Statistikseite.
//
// **Gezaehlt wird, was in die Wiederholung geht** - also genau die Antworten,
// die eine Karte schreiben (siehe `bewerteUndSpeichere` in bewerten.ts). Der
// Teaser im Kurs, die Stufen 1 und 2 der Saetze-Wiederholung und deren
// Kategorie-Modus schreiben keine Karte und zaehlen darum auch hier nicht.
//
// Eigener Schluessel neben `app_state_v1`, aus demselben Grund wie
// `coins_v1`: ein Eintrag hier soll `geaendertAm` des App-Zustands nicht
// hochziehen.

const SCHLUESSEL = 'lerntagebuch_v1';

export type Lernweg = LearningMode;

export type TagesZaehler = {
  richtig: number;
  ueberlebt: number;
  nichtVerstanden: number;
  /** Bis zum Ergebnis durchgespielte Lektionen des Kurses. Wiederholungen zaehlen nicht. */
  lektionen: number;
};

/** Tag (`2026-09-14`, Ortszeit) -> `sprache:weg` (`no:gefuehrt`) -> Zaehler. */
export type Tagebuch = Record<string, Record<string, TagesZaehler>>;

export const ZAEHLER_LEER: TagesZaehler = { richtig: 0, ueberlebt: 0, nichtVerstanden: 0, lektionen: 0 };

/**
 * Der Tag in ORTSZEIT, nicht UTC. Ein Lerntag ist der Tag, wie ihn der
 * Nutzer erlebt - wer um 00:30 in Oslo uebt, hat das am neuen Tag getan,
 * auch wenn es in UTC noch der alte ist.
 */
export function tagSchluessel(zeit: Date = new Date()): string {
  const j = zeit.getFullYear();
  const m = String(zeit.getMonth() + 1).padStart(2, '0');
  const t = String(zeit.getDate()).padStart(2, '0');
  return `${j}-${m}-${t}`;
}

export function eintragSchluessel(sprache: string, weg: Lernweg): string {
  return `${sprache}:${weg}`;
}

// Ein Speicherstand im Arbeitsspeicher plus eine Kette, die jeden
// Schreibvorgang hinter den vorigen stellt. Ohne die Kette lesen zwei schnell
// aufeinanderfolgende Antworten denselben alten Stand, und die zweite
// ueberschreibt die erste - die Saetze-Wiederholung schreibt ihre Karte
// asynchron und kann genau das ausloesen.
let stand: Tagebuch | null = null;
let kette: Promise<unknown> = Promise.resolve();

async function ladeRoh(): Promise<Tagebuch> {
  try {
    const roh = await AsyncStorage.getItem(SCHLUESSEL);
    if (!roh) return {};
    const gelesen = JSON.parse(roh);
    return gelesen && typeof gelesen === 'object' ? (gelesen as Tagebuch) : {};
  } catch {
    // Kaputter Eintrag: lieber mit leerem Tagebuch weiterzaehlen, als jede
    // weitere Antwort an einem Lesefehler scheitern zu lassen.
    return {};
  }
}

function aendere(aenderung: (buch: Tagebuch) => void): Promise<void> {
  const naechster = kette.then(async () => {
    if (!stand) stand = await ladeRoh();
    aenderung(stand);
    await AsyncStorage.setItem(SCHLUESSEL, JSON.stringify(stand));
  });
  // Ein Fehler darf die Kette nicht fuer alle folgenden Eintraege sperren.
  kette = naechster.catch(() => undefined);
  return naechster;
}

function zaehlerVon(buch: Tagebuch, tag: string, eintrag: string): TagesZaehler {
  const tagesEintraege = (buch[tag] ??= {});
  return (tagesEintraege[eintrag] ??= { ...ZAEHLER_LEER });
}

/** Eine bewertete Antwort eintragen. Wirft nie - ein Fehler kostet hoechstens diesen einen Eintrag. */
export function merkeAntwort(sprache: string, weg: Lernweg, stufe: Tier, zeit: Date = new Date()): Promise<void> {
  return aendere((buch) => {
    const z = zaehlerVon(buch, tagSchluessel(zeit), eintragSchluessel(sprache, weg));
    if (stufe === 'richtig') z.richtig += 1;
    else if (stufe === 'ueberlebt') z.ueberlebt += 1;
    else z.nichtVerstanden += 1;
  }).catch(() => undefined);
}

/** Eine bis zum Ergebnis gespielte Kurs-Lektion eintragen. */
export function merkeLektion(sprache: string, zeit: Date = new Date()): Promise<void> {
  return aendere((buch) => {
    zaehlerVon(buch, tagSchluessel(zeit), eintragSchluessel(sprache, 'gefuehrt')).lektionen += 1;
  }).catch(() => undefined);
}

/**
 * Den Stand vom Server hineinnehmen (2026-09-14, siehe `tagebuchAbgleichen`
 * in lib/sync.ts). Je Zaehler das Groessere, weggenommen wird nichts.
 *
 * Laeuft hinter der Schreibkette und verschmilzt mit dem Stand, der DANN gilt
 * - wer waehrend der Netzwerk-Wartezeit weiterlernt, verliert diese
 * Antworten nicht an einen vorher gelesenen Stand.
 */
export function uebernehmeFern(fern: Tagebuch): Promise<void> {
  return aendere((buch) => {
    const neu = mergeTagebuch(buch, fern);
    for (const tag of Object.keys(neu)) buch[tag] = neu[tag];
  });
}

/**
 * Das ganze Tagebuch, fuer die Statistikseite und den Abgleich.
 *
 * Laeuft hinter der Schreibkette: wer direkt nach einer Antwort liest, sieht
 * sie schon.
 */
export function ladeTagebuch(): Promise<Tagebuch> {
  const lesen = kette.then(async () => {
    if (!stand) stand = await ladeRoh();
    return JSON.parse(JSON.stringify(stand)) as Tagebuch;
  });
  kette = lesen.catch(() => undefined);
  return lesen;
}

/** Beim Abmelden (2026-09-14): leert Speicher UND den Stand im Arbeitsspeicher. */
export function vergissTagebuch(): Promise<void> {
  const loeschen = kette.then(async () => {
    stand = {};
    await AsyncStorage.removeItem(SCHLUESSEL);
  });
  kette = loeschen.catch(() => undefined);
  return loeschen;
}
