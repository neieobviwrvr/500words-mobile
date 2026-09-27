import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { CATEGORIES, CATEGORY_BY_ID, GRUNDWORTSCHATZ_ID, GRUNDWORTSCHATZ_NAME } from '../../data/categories';
import { courseFor } from '../../data/courses';
import type { CourseLessonData, CourseModuleData, CourseWord } from '../../data/courseTypes';
import { getLanguage } from '../../data/languages';
import { loadExerciseSentences } from '../../data/phrasebookContent';
import { scenarioLabel } from '../../data/scenarios';
import { KURS_RAHMEN, KURS_WORT, loadAllCards, zerlegeKartenSchluessel } from '../srs/srsStorage';
import type { GespeicherteKarte } from '../srs/bilanz';
import { ladeZaehler, leiterStufe, SATZ_SCHWELLE, TRAINING_PRAEFIXE } from '../training/batchLeiter';

// Was der Nutzer in dieser Sprache schon gelernt hat - Satz fuer Satz, Wort
// fuer Wort (2026-09-27, Simons Auftrag fuer den Lektionen-Tab: "eine
// Uebersicht mit allen bereits gelernten Saetzen und Worten - beides
// separiert - bei dem man auch sieht wie oft man beides schon gesehen hat und
// auf welcher Stufe man ist/wie oft richtig/falsch").
//
// **Die Liste ist die Kartenliste, nicht der Inhaltskatalog.** Gezeigt wird,
// wozu eine FSRS-Karte mit mindestens einer Antwort existiert - genau das
// heisst in dieser App "schon gesehen" (siehe useFaelligeKarten.ts, das
// dieselbe Grenze zieht). Der Katalog dessen, was es noch zu holen gibt,
// steht auf S1; hier steht nur, was man angefasst hat.
//
// **Woher die drei Kartenarten kommen** (die Namensraeume aus srsStorage.ts):
//
//   <sprache>:<satztabelle>:<id>   Speed-Run-Satz     -> Saetze
//   <sprache>:course-rahmen:<id>   Satzmuster im Kurs -> Saetze
//   <sprache>:course-wort:<wort>   Wort im Kurs       -> Woerter
//
// Die Kurs-Rahmen stehen bewusst bei den Saetzen: sie sind Satzkarten, und
// ohne sie waere die Satzliste fuer jemanden, der nur den gefuehrten Kurs
// spielt, leer, obwohl er dutzende Saetze geuebt hat. Sie tragen dafuer ihre
// Luecke sichtbar mit ("wǒ xiǎng ___") statt eine Vollstaendigkeit zu
// behaupten, die das Muster nicht hat.
//
// **Die Woerter-Wiederholung liefert hier nichts**, und das ist kein
// Versehen: sie schreibt ueberhaupt keine FSRS-Karten (siehe
// lerntagebuch.ts), und ihre Stufen-Zaehler schluesseln ueber die Vokabel
// (`hanzi` oder Vokabel-ID), nicht ueber die Wortform des Kurses. Beides
// zusammenzufuehren braeuchte einen Rueckweg von der Satzform zum
// Woerterbucheintrag, den die Kursdaten nicht enthalten (dieselbe Grenze wie
// bei "96 Woerter von 609" auf der Statistikseite).

export type GelerntArt = 'satz' | 'wort';

/** Auf welcher der drei Stufen der Satz-Uebung ein Satz gerade steht. */
export type LeiterStand = {
  stufe: 1 | 2 | 3;
  /** Wie viele richtige Antworten noch bis zur naechsten Stufe fehlen. 0 auf Stufe 3. */
  bisZurNaechsten: number;
};

export type Gelerntes = {
  /** Der Kartenschluessel - eindeutig und damit der Listen-Key. */
  key: string;
  art: GelerntArt;
  /** Zusatzkennzeichnung fuer Kurs-Satzmuster, sonst `null`. */
  sorte: 'rahmen' | null;
  /** Was auf dem Schirm steht: Lautschrift, wo es eine gibt, sonst der Text selbst. */
  lerntext: string;
  /** Die eigene Schrift, wenn sie sich vom Lerntext unterscheidet - sonst `null`. */
  schrift: string | null;
  /** Bedeutung auf Deutsch. `null`, wenn der Eintrag selbst deutsch ist. */
  bedeutung: string | null;
  /** Woher es kommt: "Grundwortschatz · Höflich sein" oder "Modul 3 · Lektion 3.1". */
  herkunft: string;
  /** Vorgerenderte Aufnahme, falls vorhanden. */
  audioUrl: string | null;
  /** Was vorgelesen wird - bei eigener Schrift die Schrift. `null` = nicht vorlesbar. */
  sprechText: string | null;
  karte: GespeicherteKarte;
  /** Stufe in Kategorie/Situation - der Weg, den S1 nimmt. `null` bei Wörtern und Deutsch. */
  leiterSituation: LeiterStand | null;
  /** Stufe in der globalen Sätze-Wiederholung. `null` bei Wörtern und Deutsch. */
  leiterWiederholung: LeiterStand | null;
  /** Alles Durchsuchbare in Kleinbuchstaben, damit die Suche nicht je Tastendruck rechnet. */
  suchtext: string;
};

export type GelerntesErgebnis = {
  loading: boolean;
  saetze: Gelerntes[];
  woerter: Gelerntes[];
  offline: boolean;
};

const LEER: GelerntesErgebnis = { loading: true, saetze: [], woerter: [], offline: false };

function standVon(key: string, s1: Record<string, number>, s2: Record<string, number>): LeiterStand {
  const stufe = leiterStufe(key, s1, s2, SATZ_SCHWELLE);
  const bisZurNaechsten =
    stufe === 1
      ? SATZ_SCHWELLE.stufe1 - (s1[key] ?? 0)
      : stufe === 2
        ? SATZ_SCHWELLE.stufe2 - (s2[key] ?? 0)
        : 0;
  return { stufe, bisZurNaechsten: Math.max(0, bisZurNaechsten) };
}

type KursIndex = {
  woerter: Map<string, { wort: CourseWord; modul: CourseModuleData }>;
  rahmen: Map<string, { lektion: CourseLessonData; modul: CourseModuleData }>;
};

/**
 * Wort- und Rahmen-Karten ihrer Lektion zuordnen.
 *
 * Bei Woertern gewinnt das ERSTE Auftreten: dort wurde das Wort eingefuehrt,
 * und das ist die Herkunft, die man wiedererkennt. Dieselbe Regel wie in
 * `kursWoerter()` auf der Statistikseite.
 */
function kursIndex(kurs: CourseModuleData[]): KursIndex {
  const woerter: KursIndex['woerter'] = new Map();
  const rahmen: KursIndex['rahmen'] = new Map();
  for (const modul of kurs) {
    for (const lektion of modul.lessons) {
      rahmen.set(lektion.id, { lektion, modul });
      for (const wort of [...lektion.newFrameWords, ...lektion.slotGroups.flat()]) {
        if (!woerter.has(wort.schrift)) woerter.set(wort.schrift, { wort, modul });
      }
    }
  }
  return { woerter, rahmen };
}

/**
 * Das Satzmuster einer Lektion als lesbare Zeile.
 *
 * `[P]` bekommt das erste Pronomen der Lektion - genau das, was die Uebung
 * dort auch zeigt, wenn nur eines danebensteht. `[Slot]` bleibt eine LUECKE:
 * ein Wort hineinzusetzen waere geraten, und die Karte gilt fuer alle Woerter,
 * die dort gestanden haben.
 *
 * Nicht `fuelleRahmen()` aus lessonEvaluation.ts: das ersetzt genau EINEN
 * Platzhalter durch ein bekanntes Wort - hier sind es beliebig viele, und es
 * gibt kein Wort einzusetzen.
 */
function rahmenZeile(lektion: CourseLessonData, feld: 'lerntext' | 'schrift'): string {
  const pronomen = lektion.pronouns[0]?.[feld] ?? '';
  return lektion.frame[feld]
    .replace(/\[P\]/g, pronomen)
    .replace(/\[[^\]]*\]/g, '___')
    .replace(/\s+/g, ' ')
    .trim();
}

function kategorieName(id: string): string {
  return id === GRUNDWORTSCHATZ_ID ? GRUNDWORTSCHATZ_NAME : CATEGORY_BY_ID[id]?.name ?? id;
}

export function useGelerntes(languageId: string): GelerntesErgebnis {
  const [stand, setStand] = useState<GelerntesErgebnis>(LEER);

  // `useFocusEffect` statt `useEffect`: nach einer Uebung soll die Liste die
  // neuen Zahlen zeigen, ohne dass man die Sprache wechselt.
  useFocusEffect(
    useCallback(() => {
      let abgebrochen = false;

      (async () => {
        const lang = getLanguage(languageId);
        const kurs = courseFor(languageId);
        const alleIds = [GRUNDWORTSCHATZ_ID, ...CATEGORIES.map((c) => c.id)];
        // Stufe 2 und 3 setzen voraus, dass die Zielsprache nicht die
        // Ausgangssprache ist - sonst uebersetzte sich der Satz selbst
        // (dieselbe Ausnahme wie `kannAbfragen` in der Uebung).
        const mitLeiter = languageId !== 'de';

        try {
          const [karten, satzDaten, katS1, katS2, wiedS1, wiedS2] = await Promise.all([
            loadAllCards(),
            lang.table
              ? loadExerciseSentences(languageId, alleIds)
              : Promise.resolve({ sentences: [], fromCache: false }),
            mitLeiter ? ladeZaehler(TRAINING_PRAEFIXE.katStufe1, languageId) : Promise.resolve({}),
            mitLeiter ? ladeZaehler(TRAINING_PRAEFIXE.katStufe2, languageId) : Promise.resolve({}),
            mitLeiter ? ladeZaehler(TRAINING_PRAEFIXE.satzStufe1, languageId) : Promise.resolve({}),
            mitLeiter ? ladeZaehler(TRAINING_PRAEFIXE.satzStufe2, languageId) : Promise.resolve({}),
          ]);
          if (abgebrochen) return;

          const nachId = new Map(satzDaten.sentences.map((s) => [String(s.id), s]));
          const index = kurs ? kursIndex(kurs) : null;

          const saetze: Gelerntes[] = [];
          const woerter: Gelerntes[] = [];

          for (const [key, karte] of Object.entries(karten)) {
            const teile = zerlegeKartenSchluessel(key);
            if (!teile || teile.sprache !== languageId) continue;
            // Eine Karte ohne Antwort ist keine gelernte Karte. Entstehen kann
            // sie durch den Abgleich - lokal legt sie erst die erste Bewertung
            // an.
            if (karte.reps < 1) continue;

            if (lang.table && teile.namensraum === lang.table) {
              const satz = nachId.get(teile.id);
              // Satz aus der Datenbank verschwunden oder Kategorie abgewaehlt:
              // die Karte bleibt, die Zeile laesst sich aber nicht beschriften.
              if (!satz) continue;
              const lerntext = satz.pinyin ?? satz.text;
              saetze.push({
                key,
                art: 'satz',
                sorte: null,
                lerntext,
                schrift: satz.pinyin ? satz.text : null,
                bedeutung: satz.germanGloss,
                herkunft: `${kategorieName(satz.category)} · ${scenarioLabel(satz.scenario)}`,
                audioUrl: satz.audioUrl,
                sprechText: satz.text,
                karte,
                leiterSituation: mitLeiter ? standVon(teile.id, katS1, katS2) : null,
                leiterWiederholung: mitLeiter ? standVon(teile.id, wiedS1, wiedS2) : null,
                suchtext: `${lerntext} ${satz.text} ${satz.germanGloss ?? ''}`.toLowerCase(),
              });
              continue;
            }

            if (teile.namensraum === KURS_RAHMEN) {
              const treffer = index?.rahmen.get(teile.id);
              if (!treffer) continue;
              const lerntext = rahmenZeile(treffer.lektion, 'lerntext');
              const schrift = rahmenZeile(treffer.lektion, 'schrift');
              saetze.push({
                key,
                art: 'satz',
                sorte: 'rahmen',
                lerntext,
                schrift: schrift !== lerntext ? schrift : null,
                bedeutung: treffer.lektion.frameDe
                  ? treffer.lektion.frameDe.replace(/\[P\]/g, '').replace(/\[[^\]]*\]/g, '___').replace(/\s+/g, ' ').trim()
                  : treffer.lektion.task,
                herkunft: `Modul ${treffer.modul.number} · Lektion ${treffer.lektion.id}`,
                audioUrl: null,
                // Ein Muster mit Luecke laesst sich nicht vorlesen - die
                // Sprachausgabe wuerde die Unterstriche mitsprechen.
                sprechText: null,
                karte,
                leiterSituation: null,
                leiterWiederholung: null,
                suchtext: `${lerntext} ${schrift} ${treffer.lektion.frameDe ?? ''}`.toLowerCase(),
              });
              continue;
            }

            if (teile.namensraum === KURS_WORT) {
              const treffer = index?.woerter.get(teile.id);
              // Ohne Kurseintrag bleibt die Wortform selbst - besser als die
              // Karte zu verschweigen, denn geuebt wurde sie.
              const wort = treffer?.wort;
              const lerntext = wort?.lerntext ?? teile.id;
              woerter.push({
                key,
                art: 'wort',
                sorte: null,
                lerntext,
                schrift: wort && wort.schrift !== wort.lerntext ? wort.schrift : null,
                bedeutung: wort?.de ?? null,
                herkunft: treffer ? `Modul ${treffer.modul.number} · ${treffer.modul.title}` : 'Geführtes Lernen',
                audioUrl: null,
                sprechText: wort?.schrift ?? teile.id,
                karte,
                leiterSituation: null,
                leiterWiederholung: null,
                suchtext: `${lerntext} ${wort?.schrift ?? ''} ${wort?.de ?? ''}`.toLowerCase(),
              });
            }
          }

          setStand({ loading: false, saetze, woerter, offline: satzDaten.fromCache });
        } catch {
          // Lieber eine leere Uebersicht als ein Absturz - dieselbe Haltung
          // wie in useCategorySituations.
          if (!abgebrochen) setStand({ ...LEER, loading: false });
        }
      })();

      return () => {
        abgebrochen = true;
      };
    }, [languageId])
  );

  return stand;
}
