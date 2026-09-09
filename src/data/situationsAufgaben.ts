import { supabase } from '../lib/supabase';
import { cachedFetch } from '../lib/offlineCache';
import { loadVocabWords, VocabWord } from './vocabContent';
import { courseFor } from './courses';
import { getLanguage } from './languages';
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

/**
 * Ein Wort, wie es in einer Aufgabe steht.
 *
 * Die Felder tragen ROLLEN, keine Schriften - genau wie `CourseWord` in
 * courseTypes.ts, und aus demselben Grund: sie hiessen bis zum 2026-09-07
 * `hanzi` und `pinyin`, weil es Wort-Aufgaben nur fuer Chinesisch gab.
 * `hanzi: "jag"` erzaehlt die falsche Geschichte.
 *
 *   schrift    was VORGELESEN wird - bei Chinesisch die Zeichen, sonst das
 *              Wort selbst.
 *   lerntext   was auf dem Bildschirm STEHT und abgefragt wird - bei
 *              Chinesisch das Pinyin, sonst wieder das Wort selbst.
 *
 * Bei lateinischer Schrift sind beide gleich. Das ist keine Redundanz,
 * sondern der Grund, warum dieselbe Aufgabe alle Sprachen abspielt.
 */
export type VokabelOption = {
  schrift: string;
  lerntext: string;
  german: string;
  /**
   * Andere Formen DESSELBEN Worts - "tycka" neben "tycker".
   *
   * Sie zaehlen bei der Bewertung voll, nicht bloss als Mittelstufe:
   * "richtiges Verb erkannt, Konjugation egal" ist die aeltere Regel dieses
   * Projekts (siehe clusters_master.py). Wer auf eine Verb-Luecke mit der
   * Woerterbuchform antwortet, hat das Wort gewusst - nur die Zeitform passt
   * nicht zum Satz, und Zeitformen prueft diese Uebung nicht.
   *
   * Leer, wo die Sprache nicht beugt oder wir die Formen nicht haben.
   */
  formen?: string[];
};

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
export type FrameWort = { schrift: string; lerntext: string; german: string | null };

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
  satzSchrift: string;
  satzLerntext: string;
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
 * Hat diese Sprache Wortgrenzen? (2026-09-07)
 *
 * Die eine Frage, an der die ganze Zerlegung haengt. Chinesisch schreibt
 * ohne Leerzeichen - dort muss geraten werden, wo ein Wort aufhoert, und
 * das kann schiefgehen. Alle anderen unterstuetzten Sprachen liefern die
 * Wortgrenzen mit; dort gibt es nichts zu raten und folglich auch nichts,
 * was misslingen koennte.
 *
 * Aus den DATEN abgeleitet statt als Liste von Sprach-IDs: eine Sprache
 * ohne Wortgrenzen ist genau eine, deren Vokabeln eine eigene Schrift neben
 * der Lautschrift fuehren UND keine Leerzeichen benutzen. Japanisch und
 * Thai braechten dieselbe Lage mit.
 */
function ohneWortgrenzen(languageId: string): boolean {
  return languageId === 'zh';
}

/**
 * Schreibt diese Sprache in einer eigenen Schrift neben der Lautschrift?
 *
 * ZWEITE, UNABHAENGIGE ACHSE - nicht zu verwechseln mit `ohneWortgrenzen`:
 *
 *   Chinesisch  eigene Schrift UND keine Wortgrenzen
 *   Russisch    eigene Schrift, aber ganz normale Wortgrenzen
 *   Schwedisch  weder noch
 *
 * Genau diese Verwechslung hat beim ersten Anlauf am 2026-09-07 zugeschlagen:
 * die Zuordnung fragte "ist es Chinesisch?", wo sie "hat es eine eigene
 * Schrift?" haette fragen muessen. Fuer Russisch wurde dadurch die UMSCHRIFT
 * gegen die kyrillische Vokabelspalte gehalten - 0 von 777 Slots trafen, die
 * Sprache haette gar keine Wort-Aufgaben bekommen. Gemessen, nicht bemerkt.
 *
 * `vocabContent.ts` legt es fuer beide Sprachen gleich ab: `word` traegt die
 * Lautschrift (das, was gelernt wird), `hanzi` die eigene Schrift (das, was
 * vorgelesen wird). Der Feldname stammt aus der Zeit, als es nur Chinesisch
 * gab - die Rolle stimmt fuer Kyrillisch genauso.
 */
function eigeneSchrift(languageId: string): boolean {
  return !!getLanguage(languageId).lautschriftSpalte;
}

/**
 * Zerlegt einen Textabschnitt in einzelne, anzeigbare Woerter.
 *
 * ZWEI WEGE, und der Unterschied ist kein Zufall:
 *
 * OHNE WORTGRENZEN (Chinesisch): Laengster-Treffer gegen die Vokabelliste,
 * dasselbe Prinzip wie `build_chinesisch_kurs.py` fuer die Kurs-Rahmen.
 * Findet sich fuer ein Zeichen kein Wort, ist `sauber` false und der
 * Aufrufer verwirft die ganze Aufgabe - sonst stuende dort ein rohes Hanzi
 * ohne Lautschrift, und gelernt wird ueber die Lautschrift.
 *
 * Urspruenglich (2026-08-25) scheiterten 11 von 467 Saetzen an einer
 * Luecke: zehn echte Vokabel-Luecken (inzwischen ergaenzt, Migration
 * `20260825120000_situationsauswahl_luecken.sql`), einer trug eine Zahl in
 * arabischen Ziffern ("请打120。") - deshalb der eigene Ziffern-Durchlass.
 *
 * MIT WORTGRENZEN (alle anderen): am Leerzeichen trennen, fertig. **Hier
 * kann die Zerlegung gar nicht misslingen**, denn das Wort steht schon als
 * Wort da - `sauber` ist deshalb immer true. Ein Wort ohne Vokabel-Treffer
 * wird trotzdem angezeigt, es ist bloss nicht antippbar (`german: null`).
 * Das ist der Unterschied, der die Verallgemeinerung ueberhaupt moeglich
 * macht: die Strenge oben ist ein Chinesisch-Problem, kein allgemeines.
 */
function tokenisiere(
  text: string,
  languageId: string,
  vokabelIndex: Map<string, VocabWord>
): { woerter: FrameWort[]; sauber: boolean } {
  if (!ohneWortgrenzen(languageId)) {
    return { woerter: tokenisiereMitGrenzen(text, languageId, vokabelIndex), sauber: true };
  }

  const woerter: FrameWort[] = [];
  let sauber = true;
  let i = 0;
  while (i < text.length) {
    let treffer: FrameWort | null = null;
    for (let laenge = Math.min(4, text.length - i); laenge >= 1; laenge--) {
      const stueck = text.slice(i, i + laenge);
      const wort = vokabelIndex.get(stueck.toLowerCase());
      if (wort) {
        treffer = { schrift: stueck, lerntext: wort.word, german: wort.german };
        break;
      }
    }
    if (treffer) {
      woerter.push(treffer);
      i += treffer.schrift.length;
      continue;
    }
    // Ziffernfolge ("120") als EIN Block durchlassen - keine Vokabel, keine
    // Uebersetzung noetig, aber auch keine Luecke: eine Zahl in westlicher
    // Schreibweise ist in jeder Sprache dieselbe Zahl.
    const ziffern = text.slice(i).match(/^[0-9]+/)?.[0];
    if (ziffern) {
      woerter.push({ schrift: ziffern, lerntext: ziffern, german: null });
      i += ziffern.length;
      continue;
    }
    const zeichen = text[i];
    if (SATZZEICHEN.test(zeichen)) {
      woerter.push({ schrift: zeichen, lerntext: zeichen, german: null });
    } else {
      sauber = false;
    }
    i += 1;
  }
  return { woerter, sauber };
}

/**
 * Der einfache Fall: an Leerzeichen trennen, Satzzeichen abtrennen.
 *
 * Satzzeichen bekommen ein eigenes Chip, damit sie nicht am Wort kleben und
 * die Vokabelsuche verderben ("hem." findet `hem` nicht). Ein Wort wird
 * kleingeschrieben nachgeschlagen, sonst faende "Jag" das `jag` nicht.
 *
 * Abgeschnitten wird ueber eine LISTE VON SATZZEICHEN, nicht ueber "alles,
 * was kein Buchstabe ist". Der Umweg ist Absicht: die Gegenrichtung
 * braeuchte `\p{L}`, und Unicode-Eigenschaften im regulaeren Ausdruck sind
 * auf Hermes nirgends sonst in dieser App erprobt. Ausserdem muesste die
 * Buchstabenliste Kyrillisch, vietnamesische Tonzeichen und polnische
 * Sonderzeichen alle treffen - ein Fehler dort loescht stillschweigend
 * Wortteile. Die Satzzeichen sind die kleinere, ueberschaubarere Menge.
 */
const RAND_SATZZEICHEN = /^([.,!?;:"'()\[\]«»„“”‘’¿¡…—–\-]*)(.*?)([.,!?;:"'()\[\]«»„“”‘’¿¡…—–\-]*)$/;

function tokenisiereMitGrenzen(
  text: string,
  languageId: string,
  vokabelIndex: Map<string, VocabWord>
): FrameWort[] {
  // Nur bei eigener Schrift wird der Anzeigetext ERSETZT (Kyrillisch ->
  // Umschrift). Bei lateinischer Schrift bleibt stehen, was dasteht - sonst
  // wuerde aus dem Rahmenwort "har" der Woerterbucheintrag "ha", und der
  // Satz waere plötzlich falsch.
  const ueberSchrift = eigeneSchrift(languageId);
  const woerter: FrameWort[] = [];
  for (const roh of text.split(/\s+/)) {
    if (!roh) continue;
    const treffer = roh.match(RAND_SATZZEICHEN);
    const [vorne, kern, hinten] = treffer ? [treffer[1], treffer[2], treffer[3]] : ['', roh, ''];
    if (vorne) woerter.push({ schrift: vorne, lerntext: vorne, german: null });
    if (kern) {
      const vokabel = vokabelIndex.get(kern.toLowerCase());
      woerter.push({
        schrift: kern,
        lerntext: ueberSchrift && vokabel ? vokabel.word : kern,
        german: vokabel?.german ?? null,
      });
    }
    if (hinten) woerter.push({ schrift: hinten, lerntext: hinten, german: null });
  }
  return woerter;
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
 * Ein Wort so nachschlagbar machen, wie es im Satz steht.
 *
 * Der Schluessel ist NICHT einfach das Vokabel-Wort: der Kurs setzt Verben
 * in der Satzform ein ("jag har", nicht "jag ha" - siehe ENTWURF.md, Regel
 * "Verben in der Satzform statt im Infinitiv"). Ohne die Praesensform im
 * Index findet der Rahmen sein eigenes Verb nicht wieder, und jede Aufgabe
 * mit einem Verb im Rahmen fiele weg.
 */
function baueVokabelIndex(vocab: VocabWord[], languageId: string): Map<string, VocabWord> {
  const index = new Map<string, VocabWord>();
  const ueberSchrift = eigeneSchrift(languageId);
  for (const v of vocab) {
    if (ueberSchrift) {
      // Ueber die SCHRIFT nachschlagen, nicht ueber die Lautschrift: Hanzi
      // ist in unseren Daten eindeutig (0 Kollisionen ueber alle 519
      // Eintraege geprueft), Pinyin nicht - "yao" ist 要 (wollen) UND 药
      // (Medizin). Fuer Kyrillisch gilt dasselbe.
      if (v.hanzi) index.set(v.hanzi.toLowerCase(), v);
      continue;
    }
    index.set(v.word.toLowerCase(), v);
    // ALLE Satzformen mit aufnehmen, sonst findet ein Rahmen sein eigenes
    // Verb nicht wieder ("jag har" gegen den Infinitiv "ha", "I have
    // finished" gegen "finish"). Bis zum 2026-09-08 stand hier nur die
    // Praesensform - das reichte, solange nur sv/no eine forms-Spalte
    // hatten und der Kurs nur Praesens baute.
    for (const f of v.alleFormen) index.set(f.toLowerCase(), v);
  }
  return index;
}

/**
 * Womit ein Wort in dieser Sprache angezeigt und vorgelesen wird.
 *
 * **Die Satzform gewinnt, nicht der Woerterbucheintrag** - bei Verben also
 * "tycker", nicht "tycka". Aufgefallen beim ersten schwedischen Testlauf am
 * 2026-09-07: die Aufgabe "Das mag ich sehr." fuellte die Luecke mit
 * "Det tycka jag mycket om", und das ist schlicht falsches Schwedisch. Bei
 * Chinesisch konnte der Fehler nie auftreten, weil dort nichts gebeugt wird -
 * ein Beispiel dafuer, wie eine Chinesisch-Annahme unbemerkt zur Regel wird.
 *
 * `presentForm` ist nur bei Verben gesetzt (siehe vocabContent.ts), fuer
 * alles andere aendert der Vorrang nichts.
 */
function optionVon(v: VocabWord, languageId: string): VokabelOption {
  if (eigeneSchrift(languageId)) {
    // Dort gibt es keine Beugung in den Daten - Schrift und Lautschrift
    // stehen fest.
    return { schrift: v.hanzi ?? v.word, lerntext: v.word, german: v.german };
  }
  const imSatz = v.presentForm ?? v.word;
  return { schrift: imSatz, lerntext: imSatz, german: v.german, formen: andereFormen(v) };
}

/** Die uebrigen Formen eines Worts - Grundform plus alles aus `forms`. */
function andereFormen(v: VocabWord): string[] {
  return [...new Set([v.word, ...v.alleFormen].filter((f): f is string => !!f))];
}

/** Unter welchem Schluessel ein Kurs-Wort im Vokabel-Index steht. */
function kursSchluessel(wort: { schrift: string; lerntext: string }, languageId: string): string {
  return (eigeneSchrift(languageId) ? wort.schrift : wort.lerntext).toLowerCase();
}

/**
 * Zweite Aufgabenquelle (2026-08-25): die Satzrahmen des gefuehrten Kurses.
 * Strukturell einfacher als der Phrasebook-Weg unten - welche Textstelle zu
 * welchem Slot gehoert, ist hier von vornherein bekannt (die Slot-Reihenfolge
 * im Rahmen), kein Zuschneiden per `indexOf()` ueber den ganzen Satz noetig.
 *
 * **Seit 2026-09-07 fuer ALLE Sprachen mit Kurs**, nicht mehr nur
 * Chinesisch. Das ist der Grund, warum die Wort-Uebung ueberhaupt in zehn
 * Sprachen existiert: die Kurse liegen seit dem 2026-09-04 generisch in
 * `data/courses/` (1.231 Lektionen), und ein Kurs-Rahmen ist bereits genau
 * das, was eine Luecken-Aufgabe braucht - Satz mit markierter Stelle plus
 * die Woerter, die dort hineinpassen. Es war nie ein inhaltliches Problem,
 * nur ein Zerlegungs-Problem (siehe `tokenisiere`).
 *
 * Deckt ausserdem Woerter ab, die zwar einen Kurs-Satzrahmen haben, aber in
 * keinem Phrasebook-Satz vorkommen.
 *
 * Mehrere Slots in einem Rahmen ([Slot 1]/[Slot 2]): NICHT die gefragte
 * Stelle wird mit dem ERSTEN Wort ihrer eigenen Gruppe gefuellt - dieselbe
 * Konvention wie beim Vorziehen in useFaelligeKarten.ts.
 */
function ladeKursAufgaben(
  languageId: string,
  wordClass: string,
  vokabelIndex: Map<string, VocabWord>,
  wortartPool: VokabelOption[]
): SituationsAufgabe[] {
  const kurs = courseFor(languageId);
  if (!kurs) return [];

  const aufgaben: SituationsAufgabe[] = [];
  let laufendeNr = 0;
  for (const modul of kurs) {
    for (const lektion of modul.lessons) {
      if ((lektion.kind !== 'frame' && lektion.kind !== 'series') || !lektion.frameDe) continue;
      // "jag / du / han aer [Slot]" -> "jag aer [Slot]" - was tatsaechlich
      // gesprochen/angezeigt wird (dieselbe Funktion, die der Kurs selbst
      // fuer den Teaser-Satz nutzt).
      const rahmenSchrift = ersteVariante(lektion.frame.schrift);
      const rahmenLerntext = ersteVariante(lektion.frame.lerntext);
      const defaultSchrift = lektion.slotGroups.map((g) => g[0]?.schrift ?? '');
      const defaultLerntext = lektion.slotGroups.map((g) => g[0]?.lerntext ?? '');
      const defaultDe = lektion.slotGroups.map((g) => g[0]?.de ?? '');

      lektion.slotGroups.forEach((gruppe, slotIndex) => {
        for (const wort of gruppe) {
          const vokabel = vokabelIndex.get(kursSchluessel(wort, languageId));
          if (!vokabel || vokabel.wordClass !== wordClass) continue;

          const deWerte = [...defaultDe];
          deWerte[slotIndex] = wort.de;
          const germanGloss = fuelleAlleSlots(lektion.frameDe as string, deWerte);
          const frage = `Wie sagst du: „${germanGloss}"?`;

          const geschnitten = fuelleAndereSlots(rahmenSchrift, slotIndex, defaultSchrift);
          const teile = geschnitten.split(/\[[^\]]*\]/);
          if (teile.length !== 2) continue; // strukturell nie - sicherheitshalber
          const vorher = tokenisiere(teile[0], languageId, vokabelIndex);
          const nachher = tokenisiere(teile[1], languageId, vokabelIndex);
          if (!vorher.sauber || !nachher.sauber) continue;

          // Die Loesung ist das Wort SO, WIE ES IM RAHMEN STEHT - der
          // Generator hat dort bereits die richtige Form eingesetzt (siehe
          // ENTWURF.md, "Verben in der Satzform statt im Infinitiv"). Der
          // Vokabeleintrag dient nur der Wortart-Auswahl und der Bedeutung.
          const richtig: VokabelOption = {
            schrift: wort.schrift,
            lerntext: wort.lerntext,
            german: wort.de || vokabel.german,
            formen: andereFormen(vokabel),
          };
          const ablenker = mischen(wortartPool.filter((v) => v.schrift !== richtig.schrift)).slice(0, 3);
          if (ablenker.length < 3) continue;

          // Voller Zielsatz fuers Speichern - derselbe Rahmen wie oben, aber
          // mit dem GETESTETEN Wort statt des Default-Worts an seinem Slot.
          const schriftWerte = [...defaultSchrift];
          schriftWerte[slotIndex] = wort.schrift;
          const satzSchrift = fuelleAlleSlots(rahmenSchrift, schriftWerte);
          const lerntextWerte = [...defaultLerntext];
          lerntextWerte[slotIndex] = wort.lerntext;
          const satzLerntext = fuelleAlleSlots(rahmenLerntext, lerntextWerte);

          aufgaben.push({
            id: `kurs-${languageId}-${lektion.id}-${laufendeNr++}-${richtig.schrift}`,
            frage,
            frameVorherWoerter: vorher.woerter,
            frameNachherWoerter: nachher.woerter,
            richtig,
            optionen: mischen([richtig, ...ablenker]),
            satzSchrift,
            satzLerntext,
            germanGloss,
            // Kurs-Saetze sind Teil des freien Grundangebots (der gefuehrte
            // Kurs ist kostenlos, siehe CLAUDE.md).
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

/**
 * Alle Luecken-Aufgaben einer Sprache fuer eine Wortart.
 *
 * ZWEI QUELLEN, bewusst gemischt:
 *   1. echte Phrasebook-Saetze  - alltagsnah, mit Situation und Kategorie
 *   2. Rahmen des gefuehrten Kurses - deckt Woerter ab, fuer die es (noch)
 *      keinen Phrasebook-Satz gibt
 *
 * **Seit 2026-09-07 fuer jede Sprache mit Vokabelliste**, vorher nur
 * Chinesisch. Die Sperre war nie inhaltlich begruendet, sondern lag an der
 * Zerlegung: der alte Tokenisierer riet Wortgrenzen ueber
 * Laengster-Treffer - noetig fuer Chinesisch, sinnlos fuer Sprachen, die
 * ihre Wortgrenzen mitliefern. Siehe `tokenisiere`.
 */
export async function ladeSituationsAufgaben(
  languageId: string,
  wordClass: string
): Promise<{ aufgaben: SituationsAufgabe[]; fromCache: boolean }> {
  const sprache = getLanguage(languageId);
  // Ohne Vokabelliste gibt es weder Loesungswort noch Ablenker - das
  // betrifft nur Deutsch, die Ausgangssprache.
  if (!sprache.vocabTable) return { aufgaben: [], fromCache: false };

  const satzTabelle = sprache.table;
  const lautschrift = sprache.lautschriftSpalte;

  const [{ words: vocab }, { data: phraseRows, fromCache }] = await Promise.all([
    loadVocabWords(languageId),
    cachedFetch(`situationsaufgaben-saetze:${languageId}`, async () => {
      if (!satzTabelle) return [] as PhraseZeile[];
      // Deutsch hat keine `target_text`-Spalte - es ist aber ohnehin schon
      // oben ausgeschlossen, weil ihm die Vokabelliste fehlt.
      const spalten = [
        'id', 'target_text', 'german', 'accepted_concepts',
        'scenario', 'category', 'culture_note',
      ];
      if (lautschrift) spalten.push(lautschrift);
      const { data, error } = await supabase.from(satzTabelle).select(spalten.join(', '));
      if (error) throw error;
      return (data ?? []).map((z: any) => ({
        ...z,
        pinyin: lautschrift ? (z[lautschrift] ?? null) : null,
      })) as PhraseZeile[];
    }),
  ]);

  const vokabelIndex = baueVokabelIndex(vocab, languageId);
  const wortartPool = vocab
    .filter((v) => v.wordClass === wordClass)
    .map((v) => optionVon(v, languageId));

  const aufgaben: SituationsAufgabe[] = [];
  let laufendeNr = 0;
  for (const p of phraseRows) {
    if (!p.target_text) continue;
    const required = p.accepted_concepts?.required ?? [];
    for (const konzept of required) {
      for (const synonym of konzept.synonyms ?? []) {
        // Nur EINZELNE Vokabeln taugen als Luecke. Mehrwortige Synonyme
        // ("hire a car") sind kein Wort, das man in eine Luecke setzt -
        // sie fallen hier von selbst heraus, weil der Index nur einzelne
        // Woerter kennt.
        const wort = vokabelIndex.get(synonym.toLowerCase());
        if (!wort || wort.wordClass !== wordClass) continue;

        const stelle = findeStelle(p.target_text, synonym, languageId);
        if (stelle < 0) continue; // Luecke nicht sauber schneidbar

        const vorher = tokenisiere(p.target_text.slice(0, stelle), languageId, vokabelIndex);
        const nachher = tokenisiere(
          p.target_text.slice(stelle + synonym.length), languageId, vokabelIndex);
        if (!vorher.sauber || !nachher.sauber) continue;

        // Auch hier gilt die Satzform: geschnitten wurde `synonym` aus dem
        // Satz, und genau das gehoert wieder in die Luecke. Bei eigener
        // Schrift bleibt die Lautschrift aus der Vokabelliste der Lerntext.
        const imSatz = p.target_text.slice(stelle, stelle + synonym.length);
        const richtig: VokabelOption = eigeneSchrift(languageId)
          ? { schrift: imSatz, lerntext: wort.word, german: wort.german }
          : { schrift: imSatz, lerntext: imSatz, german: wort.german,
              formen: andereFormen(wort) };
        const ablenker = mischen(wortartPool.filter((v) => v.schrift !== richtig.schrift)).slice(0, 3);
        if (ablenker.length < 3) continue; // zu wenig Ablenker dieser Wortart

        aufgaben.push({
          id: `${languageId}-${laufendeNr++}-${richtig.schrift}`,
          frage: `Wie sagst du: „${p.german}"?`,
          frameVorherWoerter: vorher.woerter,
          frameNachherWoerter: nachher.woerter,
          richtig,
          optionen: mischen([richtig, ...ablenker]),
          satzSchrift: p.target_text,
          satzLerntext: p.pinyin ?? p.target_text,
          germanGloss: p.german,
          scenario: p.scenario,
          category: p.category,
          cultureNote: p.culture_note,
          // Echte Phrasebook-Zeile - Speichern muss auf DENSELBEN
          // Phrase-Schluessel treffen wie Speed-Run/Saetze-Wiederholung.
          sourceId: p.id,
          sourceTable: satzTabelle,
        });
      }
    }
  }

  const kursAufgaben = ladeKursAufgaben(languageId, wordClass, vokabelIndex, wortartPool);
  return { aufgaben: [...aufgaben, ...kursAufgaben], fromCache };
}

/**
 * Wo im Satz steht das Wort - und steht es dort als eigenstaendiges Wort?
 *
 * Bei Wortgrenzen reicht `indexOf` NICHT: "es" faende sich in "besser",
 * "ha" in "haben". Der Treffer muss links und rechts von etwas begrenzt
 * sein, das kein Buchstabe ist. Ohne Wortgrenzen (Chinesisch) ist `indexOf`
 * dagegen genau richtig - dort gibt es keine Grenzen, an denen man
 * scheitern koennte.
 *
 * -1 heisst "nicht sauber schneidbar", der Aufrufer ueberspringt dann.
 */
function findeStelle(satz: string, wort: string, languageId: string): number {
  if (ohneWortgrenzen(languageId)) return satz.indexOf(wort);

  const klein = satz.toLowerCase();
  const gesucht = wort.toLowerCase();
  let ab = 0;
  for (;;) {
    const stelle = klein.indexOf(gesucht, ab);
    if (stelle < 0) return -1;
    const davor = stelle === 0 ? '' : klein[stelle - 1];
    const danach = klein[stelle + gesucht.length] ?? '';
    if (!istWortzeichen(davor) && !istWortzeichen(danach)) return stelle;
    ab = stelle + 1;
  }
}

/**
 * Ist das ein Zeichen, das zu einem Wort gehoert?
 *
 * Ueber eine Liste von TRENNERN statt ueber `\p{L}` - dieselbe Ueberlegung
 * wie bei RAND_SATZZEICHEN: die Buchstabenmenge muesste Kyrillisch,
 * vietnamesische Tonzeichen und polnische Sonderzeichen treffen, die
 * Trennermenge ist klein und vollstaendig aufzaehlbar.
 */
function istWortzeichen(zeichen: string): boolean {
  if (!zeichen) return false;
  return !/[\s.,!?;:"'()\[\]«»„“”‘’¿¡…—–\-]/.test(zeichen);
}
