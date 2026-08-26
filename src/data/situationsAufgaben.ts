import { supabase } from '../lib/supabase';
import { cachedFetch } from '../lib/offlineCache';
import { loadVocabWords, VocabWord } from './vocabContent';
import { CHINESE_COURSE } from './chineseCourse';
import { ersteVariante } from '../features/course/lessonEvaluation';

// "Situations-Auswahl" (2026-08-24, Simons Vorlage) - dritter Rundentyp fuer
// Woerter-Wiederholung: eine Alltagssituation als Frage, mehrere Woerter zur
// Auswahl, das passende vervollstaendigt einen echten Satz.
//
// KEIN NEU GESCHRIEBENER CONTENT (Simons ausdrueckliche Vorgabe: "basierend
// und ausschliesslich auf den Saetzen die wir ohnehin in unseren Wortlisten
// gespeichert haben"). Alles hier wird aus bereits vorhandenen Saetzen
// ABGELEITET, nichts wird von Hand neu formuliert:
//
//   - Die Frage ist die deutsche Bedeutung des Satzes, in einen generischen
//     Rahmen gegossen ("Wie sagst du: ..."), NICHT individuell getextet.
//   - Das richtige Wort UND drei falsche Optionen kommen direkt aus
//     `chinesisch_vocab`, geladen ueber dasselbe `loadVocabWords()` wie das
//     Zuordnungsspiel - dieselbe Wortart-Herleitung, derselbe Offline-Cache,
//     kein zweiter Weg an dieselben Daten.
//   - Der Luecken-Satz kommt aus `chinesisch_phrasebook.accepted_concepts`:
//     jedes `required`-Konzept traegt sein Hanzi als `synonyms` - genau die
//     Zuordnung "dieser Satz braucht dieses Wort", die frueher fuer die
//     Sprachbewertung gebaut wurde (siehe evaluateConcepts.ts) und hier
//     ein zweites Mal nuetzlich ist.
//
// GENERISCH nach Wortart (Simons zweiter Teil: "auch fuer Nomen und die
// anderen Wortkategorien") - eine einzige Funktion mit `wordClass` als
// Parameter statt einer Kopie pro Wortart.
//
// NUR CHINESISCH heute: `accepted_concepts.synonyms` sind dort einzelne
// Hanzi, exakt matchbar. Bei Schwedisch/Franzoesisch sind es oft mehrwortige
// Phrasen in Kleinschreibung - dieselbe Idee liesse sich uebertragen, ist
// hier aber noch nicht gebaut.

export type VokabelOption = { hanzi: string; pinyin: string; german: string };

/**
 * Ein Wort im Rahmensatz, tippbar fuer eine Uebersetzung (Duolingo-Vorbild:
 * auf ein Wort im vorgegebenen Satz tippen zeigt seine Bedeutung), UND
 * Grundlage fuer den "Zeichen ein/aus"-Umschalter, der `hanzi` ueber `pinyin`
 * einblendet (2026-08-25, Simons Vorgabe).
 *
 * `hanzi`/`pinyin` kommen fuer erkannte Woerter beide aus `chinesisch_vocab`
 * (nicht aus dem Satz-Pinyin) - dadurch ist `german` fuer JEDES erkannte Wort
 * eindeutig, auch fuer mehrdeutiges Pinyin wie "yào" (要 wollen vs. 药
 * Medizin): das Hanzi im Satz sagt, welches der beiden gemeint ist, das
 * Pinyin allein kann das nicht. `german` ist nur noch `null` bei einzelnen
 * Satzzeichen (kein Vokabeleintrag noetig, bleibt nicht antippbar).
 */
export type FrameWort = { hanzi: string; pinyin: string; german: string | null };

export type SituationsAufgabe = {
  id: string;
  frage: string;
  frameVorherWoerter: FrameWort[];
  frameNachherWoerter: FrameWort[];
  richtig: VokabelOption;
  optionen: VokabelOption[];
  /**
   * Fuers Speichern nach Survival (2026-08-26, Simons Wunsch: "auf jedem
   * Satztemplate fuer egal welche Stufe ein Speicherbutton"). Der volle
   * Zielsatz in Zeichen (fuer `Phrase.text`/TTS) und die deutsche Bedeutung
   * OHNE den "Wie sagst du: ..."-Rahmen (fuer `Phrase.gloss`) - beides steht
   * an keiner anderen Stelle im Objekt in reiner Form.
   */
  satzHanzi: string;
  satzPinyin: string;
  germanGloss: string;
  scenario: string;
  category: string;
  cultureNote: string | null;
  /**
   * `sourceId`/`sourceTable` gesetzt NUR bei Phrasebook-Herkunft - dieselbe
   * Zeile existiert dann auch in Speed-Run/Sätze-Wiederholung, Speichern
   * muss auf DENSELBEN `Phrase.id`-Schluessel treffen (kein Zweiteintrag,
   * gleiches Prinzip wie bei SentenceReviewScreen.tsx). Kurs-Rahmen haben
   * keine Supabase-Zeile, bleiben `null` - der Aufrufer baut dort einen
   * eigenen `course-situation`-Schluessel.
   */
  sourceId: number | null;
  sourceTable: string | null;
};

type PhraseZeile = {
  id: number;
  target_text: string | null;
  pinyin: string | null;
  german: string;
  accepted_concepts: any;
  scenario: string;
  category: string;
  culture_note: string | null;
};

function mischen<T>(arr: T[]): T[] {
  const kopie = [...arr];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

// Satzzeichen, die im Rahmen stehen bleiben duerfen, ohne einen
// Vokabel-Treffer zu brauchen (chinesisch UND lateinisch, falls beides
// vorkommt).
const SATZZEICHEN = /^[，。？！、：；‘’“”…—～·.,!?;:\s]$/;

/**
 * Zerlegt einen Hanzi-Textabschnitt in Woerter, ueber Laengster-Treffer
 * gegen `chinesisch_vocab` - dasselbe Prinzip wie `build_chinesisch_kurs.py`
 * fuer die Kurs-Rahmen (siehe CLAUDE.md).
 *
 * Urspruenglich (2026-08-25) scheiterten 11 von 467 Saetzen an einer Luecke:
 * zehn davon waren echte Vokabel-Luecken (das Wort stand im Satz, aber noch
 * nicht in `chinesisch_vocab` - inzwischen ergaenzt, siehe Migration
 * `20260825120000_situationsauswahl_luecken.sql`), einer trug eine Zahl in
 * arabischen Ziffern ("请打120。") - die kann prinzipiell nie in einer
 * Hanzi-Tabelle stehen, deshalb der eigene Ziffern-Durchlass unten statt
 * eines weiteren Vokabel-Eintrags.
 *
 * `sauber: false`, sobald ein Zeichen weder ein Vokabel-Treffer noch
 * Satzzeichen noch Ziffer ist - dann wird die ganze Aufgabe verworfen
 * (siehe Aufrufer), statt eine Luecke im Rahmen als rohes Hanzi ohne Pinyin
 * anzuzeigen. Genau dasselbe "lieber ueberspringen als falsch anzeigen"-
 * Prinzip wie beim Luecken-Zuschnitt selbst.
 */
function tokenisiereHanzi(
  text: string,
  vokabelByHanzi: Map<string, { hanzi: string | null; word: string; german: string }>
): { woerter: FrameWort[]; sauber: boolean } {
  const woerter: FrameWort[] = [];
  let sauber = true;
  let i = 0;
  while (i < text.length) {
    let treffer: FrameWort | null = null;
    for (let laenge = Math.min(4, text.length - i); laenge >= 1; laenge--) {
      const stueck = text.slice(i, i + laenge);
      const wort = vokabelByHanzi.get(stueck);
      if (wort) {
        treffer = { hanzi: stueck, pinyin: wort.word, german: wort.german };
        break;
      }
    }
    if (treffer) {
      woerter.push(treffer);
      i += treffer.hanzi.length;
      continue;
    }
    // Ziffernfolge ("120") als EIN Block durchlassen - keine Vokabel, keine
    // Uebersetzung noetig, aber auch keine Luecke: eine Zahl in westlicher
    // Schreibweise ist in jeder Sprache dieselbe Zahl.
    const ziffern = text.slice(i).match(/^[0-9]+/)?.[0];
    if (ziffern) {
      woerter.push({ hanzi: ziffern, pinyin: ziffern, german: null });
      i += ziffern.length;
      continue;
    }
    const zeichen = text[i];
    if (SATZZEICHEN.test(zeichen)) {
      woerter.push({ hanzi: zeichen, pinyin: zeichen, german: null });
    } else {
      sauber = false;
    }
    i += 1;
  }
  return { woerter, sauber };
}

/**
 * Fuellt ALLE Platzhalter eines Rahmens der Reihe nach mit `werte` (ein Wert
 * je Slot-Gruppe, in Text-Reihenfolge - genauso wie der Python-Generator die
 * Slot-Gruppen in den Rahmen einsetzt, siehe build_chinesisch_kurs.py).
 */
function fuelleAlleSlots(rahmen: string, werte: string[]): string {
  let i = 0;
  return rahmen.replace(/\[[^\]]*\]/g, () => (i < werte.length ? werte[i++] : ''));
}

/**
 * Wie `fuelleAlleSlots`, laesst aber GENAU EINEN Platzhalter (`zielIndex`)
 * unangetastet stehen - fuer den Luecken-Zuschnitt braucht es eine
 * eindeutige, garantiert einzige Schnittstelle im Text. Ein `indexOf()` auf
 * das schon eingesetzte Zielwort waere unzuverlaessig: das Wort koennte
 * zufaellig auch in einem der ANDEREN, bereits gefuellten Slots vorkommen.
 */
function fuelleAndereSlots(rahmen: string, zielIndex: number, werte: string[]): string {
  let i = 0;
  return rahmen.replace(/\[[^\]]*\]/g, (treffer) => {
    const aktuell = i++;
    return aktuell === zielIndex ? treffer : (werte[aktuell] ?? '');
  });
}

/**
 * Zweite Aufgabenquelle (2026-08-25): die Satzrahmen des gefuehrten Kurses
 * (`chineseCourse.ts`, `frameDe`). Strukturell einfacher als der
 * Phrasebook-Weg oben - welche Textstelle zu welchem Slot gehoert, ist hier
 * von vornherein bekannt (die Slot-Reihenfolge im Rahmen), kein Zuschneiden
 * per `indexOf()` ueber den ganzen Satz noetig.
 *
 * Deckt Woerter ab, die zwar einen Kurs-Satzrahmen haben, aber (noch) in
 * keinem `chinesisch_phrasebook`-Satz vorkommen - 158 der urspruenglich 209
 * Woerter ohne jede Situations-Aufgabe, siehe CLAUDE.md/Plan zur
 * Graduierungs-Leiter.
 *
 * Mehrere Slots in einem Rahmen ([Slot 1]/[Slot 2]): NICHT die gefragte
 * Stelle wird mit dem ERSTEN Wort ihrer eigenen Gruppe gefuellt - dieselbe
 * Konvention wie beim Vorziehen in useFaelligeKarten.ts
 * (`ersteSlot = lektion.slotGroups.flat()[0]`).
 */
function ladeKursAufgaben(
  wordClass: string,
  vokabelByHanzi: Map<string, VocabWord>,
  wortartPool: VokabelOption[]
): SituationsAufgabe[] {
  const aufgaben: SituationsAufgabe[] = [];
  let laufendeNr = 0;
  for (const modul of CHINESE_COURSE) {
    for (const lektion of modul.lessons) {
      if ((lektion.kind !== 'frame' && lektion.kind !== 'series') || !lektion.frameDe) continue;
      // "我 / 他 / 她 ist [Slot]" -> "我 ist [Slot]" - was tatsaechlich
      // gesprochen/angezeigt wird (dieselbe Funktion, die der Kurs selbst
      // fuer den Teaser-Satz nutzt).
      const rahmenHanzi = ersteVariante(lektion.frame.hanzi);
      // Gleiche Aufloesung wie bei Hanzi (siehe oben) - fuers gespeicherte
      // Pinyin, nicht fuer die Aufgabe selbst (die zeigt eh nur Pinyin pro
      // Wort, kein Satz-Pinyin am Stueck).
      const rahmenPinyin = ersteVariante(lektion.frame.pinyin);
      const defaultHanzi = lektion.slotGroups.map((g) => g[0]?.hanzi ?? '');
      const defaultPinyin = lektion.slotGroups.map((g) => g[0]?.pinyin ?? '');
      const defaultDe = lektion.slotGroups.map((g) => g[0]?.de ?? '');

      lektion.slotGroups.forEach((gruppe, slotIndex) => {
        for (const wort of gruppe) {
          const vokabel = vokabelByHanzi.get(wort.hanzi);
          if (!vokabel || vokabel.wordClass !== wordClass || !vokabel.hanzi) continue;

          const deWerte = [...defaultDe];
          deWerte[slotIndex] = wort.de;
          const germanGloss = fuelleAlleSlots(lektion.frameDe as string, deWerte);
          const frage = `Wie sagst du: „${germanGloss}"?`;

          const geschnitten = fuelleAndereSlots(rahmenHanzi, slotIndex, defaultHanzi);
          const teile = geschnitten.split(/\[[^\]]*\]/);
          if (teile.length !== 2) continue; // sollte strukturell nie vorkommen - sicherheitshalber ueberspringen
          const vorher = tokenisiereHanzi(teile[0], vokabelByHanzi);
          const nachher = tokenisiereHanzi(teile[1], vokabelByHanzi);
          if (!vorher.sauber || !nachher.sauber) continue;

          const richtig: VokabelOption = { hanzi: vokabel.hanzi, pinyin: vokabel.word, german: vokabel.german };
          const ablenker = mischen(wortartPool.filter((v) => v.hanzi !== vokabel.hanzi)).slice(0, 3);
          if (ablenker.length < 3) continue;

          // Voller Zielsatz fuers Speichern - derselbe Rahmen wie oben, aber
          // mit dem GETESTETEN Wort statt des Default-Worts an seinem Slot,
          // sonst wuerde z.B. immer "看书" gespeichert statt des tatsaechlich
          // gefragten "上网".
          const hanziWerte = [...defaultHanzi];
          hanziWerte[slotIndex] = wort.hanzi;
          const satzHanzi = fuelleAlleSlots(rahmenHanzi, hanziWerte);
          const pinyinWerte = [...defaultPinyin];
          pinyinWerte[slotIndex] = wort.pinyin;
          const satzPinyin = fuelleAlleSlots(rahmenPinyin, pinyinWerte);

          aufgaben.push({
            id: `kurs-${lektion.id}-${laufendeNr++}-${vokabel.hanzi}`,
            frage,
            frameVorherWoerter: vorher.woerter,
            frameNachherWoerter: nachher.woerter,
            richtig,
            optionen: mischen([richtig, ...ablenker]),
            satzHanzi,
            satzPinyin,
            germanGloss,
            // Kurs-Saetze sind Teil des freien Grundangebots (der gefuehrte
            // Kurs ist kostenlos, siehe CLAUDE.md) - `kurs` als eigenes
            // Szenario darunter, siehe scenarios.ts.
            scenario: 'kurs',
            category: 'grundwortschatz',
            cultureNote: null,
            sourceId: null,
            sourceTable: null,
          });
        }
      });
    }
  }
  return aufgaben;
}

export async function ladeSituationsAufgaben(
  languageId: string,
  wordClass: string
): Promise<{ aufgaben: SituationsAufgabe[]; fromCache: boolean }> {
  if (languageId !== 'zh') return { aufgaben: [], fromCache: false };

  const [{ words: vocab }, { data: phraseRows, fromCache }] = await Promise.all([
    loadVocabWords('zh'),
    cachedFetch('situationsaufgaben-saetze:zh', async () => {
      // id/scenario/category/culture_note neu (2026-08-26) - nur fuers
      // Speichern gebraucht (siehe SituationsAufgabe.sourceId/-Table), die
      // eigentliche Aufgaben-Logik kam vorher ohne sie aus.
      const { data, error } = await supabase
        .from('chinesisch_phrasebook')
        .select('id, target_text, pinyin, german, accepted_concepts, scenario, category, culture_note');
      if (error) throw error;
      return (data ?? []) as PhraseZeile[];
    }),
  ]);

  // Hanzi ist in unseren Daten eindeutig (0 Kollisionen ueber alle 519
  // Eintraege geprueft) - anders als Pinyin, wo z.B. "yào" sowohl 要
  // (wollen) als auch 药 (Medizin) sein kann. Deshalb laeuft die ganze
  // Zerlegung ueber Hanzi, nicht ueber Pinyin.
  const vokabelByHanzi = new Map(vocab.filter((v) => v.hanzi).map((v) => [v.hanzi as string, v]));
  const wortartPool = vocab
    .filter((v) => v.wordClass === wordClass)
    .map((v): VokabelOption => ({ hanzi: v.hanzi ?? '', pinyin: v.word, german: v.german }));

  const aufgaben: SituationsAufgabe[] = [];
  let laufendeNr = 0;
  for (const p of phraseRows) {
    const required = p.accepted_concepts?.required ?? [];
    for (const konzept of required) {
      for (const hz of konzept.synonyms ?? []) {
        const wort = vokabelByHanzi.get(hz);
        if (!wort || wort.wordClass !== wordClass || !wort.hanzi) continue;
        if (!p.target_text || !p.target_text.includes(hz)) continue; // Luecke nicht sauber schneidbar

        const idx = p.target_text.indexOf(hz);
        const vorher = tokenisiereHanzi(p.target_text.slice(0, idx), vokabelByHanzi);
        const nachher = tokenisiereHanzi(p.target_text.slice(idx + hz.length), vokabelByHanzi);
        if (!vorher.sauber || !nachher.sauber) continue; // Rahmen enthaelt ein Wort ohne Vokabel-Treffer

        const richtig: VokabelOption = { hanzi: wort.hanzi, pinyin: wort.word, german: wort.german };
        const ablenker = mischen(wortartPool.filter((v) => v.hanzi !== wort.hanzi)).slice(0, 3);
        if (ablenker.length < 3) continue; // zu wenig Ablenker dieser Wortart - kein 4er-MC moeglich

        aufgaben.push({
          id: `${laufendeNr++}-${wort.hanzi}`,
          frage: `Wie sagst du: „${p.german}"?`,
          frameVorherWoerter: vorher.woerter,
          frameNachherWoerter: nachher.woerter,
          richtig,
          optionen: mischen([richtig, ...ablenker]),
          satzHanzi: p.target_text,
          satzPinyin: p.pinyin ?? p.target_text,
          germanGloss: p.german,
          scenario: p.scenario,
          category: p.category,
          cultureNote: p.culture_note,
          // Echte Phrasebook-Zeile - Speichern muss auf DENSELBEN
          // Phrase-Schluessel treffen wie Speed-Run/Sätze-Wiederholung fuer
          // dieselbe Zeile (kein Zweiteintrag).
          sourceId: p.id,
          sourceTable: 'chinesisch_phrasebook',
        });
      }
    }
  }

  // Zweite Quelle dazumischen (2026-08-25) - Kurs-Rahmen decken Woerter ab,
  // fuer die (noch) kein chinesisch_phrasebook-Satz existiert. Derselbe
  // Vokabel-/Ablenker-Pool, damit beide Quellen konsistent bewertet werden.
  const kursAufgaben = ladeKursAufgaben(wordClass, vokabelByHanzi, wortartPool);

  return { aufgaben: [...aufgaben, ...kursAufgaben], fromCache };
}
