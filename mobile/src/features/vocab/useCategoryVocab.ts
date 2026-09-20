import { useEffect, useState } from 'react';
import { CATEGORY_VOCAB } from '../../data/categoryVocab';
import { loadExerciseSentences } from '../../data/phrasebookContent';
import { loadVocabWords, VocabWord } from '../../data/vocabContent';
import { leihgeberVon, saetzeFuer } from '../../data/geliehen';
import { getLanguage } from '../../data/languages';
import type { WordType } from '../../theme/tokens';

// Die Wortliste einer Kategorie (2026-08-21, auf alle Sprachen erweitert
// 2026-09-20).
//
// ALLE Woerter, die in den Saetzen der Kategorie vorkommen - mit Bedeutung.
// Nutzer-Vorgabe: nicht nach "kennt er schon" filtern, denn wir wissen
// nicht, ob jemand den gefuehrten Kurs ueberhaupt angefasst hat oder direkt
// in die Saetze gesprungen ist.
//
// Auch NICHT nach Haeufigkeit filtern, obwohl das naheliegt: 干杯 ist das
// praegendste Wort der Kategorie und kommt in genau EINEM Satz vor - weil es
// selbst ein ganzer Satz ist. Haeufigkeit misst, wie oft ein Wort als
// Baustein dient, nicht wie wichtig es ist. INNERHALB einer Gruppe sortiert
// sie dagegen gut.
//
// ====================================================== Alle Sprachen
//
// Hier stand bis zum 2026-09-20: "Nur fuer Chinesisch. Die Zerlegung
// braucht eine Wortliste, gegen die sie abgleichen kann; fuer Sprachen mit
// Leerzeichen kaeme dabei nur eine Sammlung gebeugter Formen heraus."
//
// Der zweite Halbsatz stimmte und stimmt - "hotellet", "vennene", "amigos",
// "sjunger" stehen in keiner Vokabelliste. Der erste ist ueberholt: seit
// dem 2026-09-03 traegt JEDER Satz `word_tags`, also seine Woerter einzeln
// mit Wortart. Die Zerlegung muss niemand mehr raten.
//
// Was die Sache kippt, ist Simons Zuschnitt (2026-09-20): gefragt sind
// **Personenwoerter, Verben, Adjektive und Nomen** - und genau die vier
// tragen ein Tag (Praepositionen, Partikeln und Artikel bleiben nach dem
// Farb-Rezept bewusst ungetaggt). Die gebeugten Formen, an denen der alte
// Kommentar scheiterte, sind zum grossen Teil Funktionswoerter. Gemessen
// ueber den ganzen Satzbestand, Woerter mit Bedeutung / Woerter gesamt:
//
//   en 100%  no 98%  vi 98%  it 97%  pl 97%  ru 96%  es 87%  sv 85%  fr 83%
//
// Der Rest sind Nomen-Flexionen (Plural, bestimmte Form), die `forms` nicht
// abdeckt - dort steht fast nur die Verbbeugung. Ein Wort ohne Bedeutung
// waere eine leere Zeile, deshalb faellt es heraus; der Screen nennt die
// Zahl, damit die Kuerzung nicht still passiert.
//
// ====================================================== Zwei Wege, mit Grund
//
// **Chinesisch bleibt bei der Laengster-Treffer-Zerlegung**, alle anderen
// nehmen `word_tags`. Das ist kein versehentlicher Doppelweg, sondern
// nachgemessen: ueber die Tags kaeme Chinesisch auf 50%, ueber die
// Zerlegung gegen `chinesisch_vocab` auf 100% (161 von 161 Woertern, kein
// ungedecktes Zeichen). Der Grund ist die fehlende Wortgrenze - die Tags
// liegen dort auf dem Pinyin, das im Satz anders segmentiert ist als im
// Woerterbuch.
//
// **Russisch braucht eine Bruecke.** Seine Tags liegen auf der UMSCHRIFT
// (siehe wortarten_auto.py, FREMDSCHRIFT), die `forms`-Spalte ist
// kyrillisch - konjugierte Verben trafen deshalb nie. Jetzt wird zusaetzlich
// ueber das kyrillische Wort an DERSELBEN STELLE im Satz nachgeschlagen;
// Tag-Anzahl und Wortanzahl stimmen bei 399 von 400 Saetzen ueberein. Das
// hebt Russisch von 63% auf 96%, die Verben von 16/78 auf 57/57.

export type VokabelEintrag = {
  /**
   * Was VORGELESEN wird. Bei Chinesisch das Hanzi, bei Russisch das
   * Kyrillische, sonst gleich `lerntext`.
   *
   * Dieselbe Rollen-Aufteilung wie `CourseWord` (courseTypes.ts): die
   * Felder heissen nach ihrer Aufgabe, nicht nach einer Schrift -
   * `hanzi: "jag"` erzaehlte die falsche Geschichte.
   */
  schrift: string;
  /** Was auf dem SCHIRM steht: Pinyin, Umschrift, sonst das Wort selbst. */
  lerntext: string;
  /** Deutsche Bedeutung. */
  de: string;
  /** true = bringt die Kategorie selbst mit, steht in keiner Kurslektion. */
  neu: boolean;
  /** In wie vielen Saetzen der Kategorie das Wort vorkommt. */
  anzahl: number;
  gruppe: Gruppe;
};

/**
 * Die Reihenfolge ist Simons (2026-09-20): "Personenwoerter, Verben,
 * Adjektive und Nomen".
 *
 * `weitere` faengt auf, was keine dieser vier ist (Konjunktionen, bei
 * Chinesisch die Partikeln). Es steht hinten statt zu verschwinden - eine
 * Wortliste, die Woerter stillschweigend weglaesst, ist genau der Fehler,
 * der uns am selben Tag schon zweimal begegnet ist.
 */
export type Gruppe =
  | 'person'
  | 'verb'
  | 'adjektiv'
  | 'nomen'
  | 'frage'
  | 'partikel'
  | 'weitere';

export const REIHENFOLGE: Gruppe[] = [
  'person',
  'verb',
  'adjektiv',
  'nomen',
  'frage',
  'partikel',
  'weitere',
];

export const GRUPPEN_TITEL: Record<Gruppe, string> = {
  person: 'Personenwörter',
  verb: 'Verben',
  adjektiv: 'Adjektive',
  nomen: 'Nomen',
  frage: 'Fragewörter',
  partikel: 'Satzpartikeln',
  weitere: 'Weitere Wörter',
};

/**
 * Wer unter "Personenwoerter" steht (Simons Eingrenzung 2026-09-20).
 *
 * Das Wortart-Tag `p` und die chinesische `wortart`-Spalte meinen PRONOMEN,
 * und das ist mehr als gefragt: unter der Ueberschrift standen auch "noe"
 * (etwas), "samme" (selbe), "hverandre" (einander). Grammatisch richtig,
 * aber keine Personenwoerter. Simon: "Ja, mach das genau so" - eingrenzen
 * auf ich/du/er/wir, der Rest nach "Weitere Woerter".
 *
 * **Entschieden wird ueber die DEUTSCHE Bedeutung, nicht ueber eine Liste
 * je Sprache.** Jede Vokabel traegt ihre Bedeutung ohnehin; elf Listen
 * waeren elf Stellen, die auseinanderlaufen koennen - und fuer Sprachen mit
 * eigener Schrift muesste man sie zusaetzlich in zwei Schreibweisen fuehren.
 *
 * Possessivbegleiter bleiben drin ("mein", "dein"): sie benennen eine
 * Person, nur in anderer Rolle. Draussen bleibt, was auf Sachen oder
 * Unbestimmtes zeigt - das, dies, jener, etwas, nichts, einander, selbe.
 */
const PERSONEN_BEDEUTUNG = new Set([
  // Nominativ
  'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'man',
  // Akkusativ und Dativ
  'mich', 'dich', 'ihn', 'uns', 'euch', 'mir', 'dir', 'ihm', 'ihnen',
  // Possessiv
  'mein', 'dein', 'sein', 'unser', 'euer', 'eure',
  // Hoeflichkeitsform
  'Sie', 'Ihnen', 'Ihr',
]);

/**
 * Ist die Bedeutung eine Person? Geprueft wird jeder Teil EINZELN und
 * VOLLSTAENDIG, nicht als Teilstueck: "sein eigener" ist kein "sein",
 * "das, dies" kein Personenwort. Klammerzusaetze fallen vorher weg.
 */
function bedeutungsteile(german: string): string[] {
  return german
    .split(/[,/]/)
    .map((teil) => teil.replace(/\(.*?\)/g, '').trim())
    .filter(Boolean);
}

function istPersonenwort(german: string): boolean {
  return bedeutungsteile(german).some(
    (teil) => PERSONEN_BEDEUTUNG.has(teil) || PERSONEN_BEDEUTUNG.has(teil.toLowerCase()),
  );
}

/**
 * Satzpartikeln und Fragewoerter (Simons Auftrag 2026-09-20: "die Woerter
 * am Satzende wie le oder ma [...] fuer Chinesisch und fuer welche Sprachen
 * das sonst noch in Frage kommt").
 *
 * **Sie fehlten bei Chinesisch nie** - 了/吗/吧/的 standen laengst in der
 * Liste, nur zwischen vierzig anderen unter "Weitere Woerter". Jetzt haben
 * sie eine eigene Ueberschrift, damit man sie findet.
 *
 * **Welche Sprachen es betrifft, sagen die Daten, nicht die Vermutung:** in
 * den Vokabeltabellen traegt genau dort eine Bedeutung das Wort "Partikel"
 * - Chinesisch 8 (吗 ne 了 过 吧 的 得 们), Vietnamesisch 2 (không, nhé),
 * Polnisch 1 (czy). Russisch, Norwegisch, Englisch und die romanischen
 * Sprachen haben keine; sie markieren Frage und Aspekt ueber Wortstellung
 * und Beugung. Eine leere Gruppe erscheint nicht.
 *
 * **Zur Bedeutung von 了:** Simon nannte es "fuer Vergangenheit". Die
 * Vokabeltabelle sagt "Zustandspartikel", und das ist genauer - Chinesisch
 * hat kein Tempus. 了 markiert eine abgeschlossene Handlung oder einen
 * Zustandswechsel, was oft, aber nicht immer in der Vergangenheit liegt.
 * Der Text aus der Tabelle wird unveraendert angezeigt.
 */
function istPartikel(german: string): boolean {
  return /partikel/i.test(german);
}

/**
 * Fragewoerter. Die meisten Vokabeltabellen fuehren dafuer eine eigene
 * Wortart, Chinesisch nicht (什么 steht als Pronomen, 哪里 als Sonstiges) -
 * deshalb zusaetzlich ueber die deutsche Bedeutung, wie bei den
 * Personenwoertern.
 */
const FRAGE_BEDEUTUNG = new Set([
  'was', 'wo', 'wer', 'wie', 'wann', 'warum', 'wieso', 'weshalb',
  'wohin', 'woher', 'welche', 'welcher', 'welches', 'wie viel', 'wie viele',
]);

function istFragewort(german: string): boolean {
  return bedeutungsteile(german).some((teil) => FRAGE_BEDEUTUNG.has(teil.toLowerCase()));
}

/** Tag-Buchstabe -> Gruppe. `k` ist die fuenfte Farbe (Konjunktionen). */
const VON_TAG: Record<WordType, Gruppe> = {
  p: 'person',
  v: 'verb',
  a: 'adjektiv',
  n: 'nomen',
  k: 'weitere',
};

/**
 * Wortart aus der Vokabeltabelle -> Gruppe (Chinesisch, `wortart`-Spalte).
 *
 * Seit 2026-09-07 ist die Spalte vollstaendig (175 Nomen, 123 Sonstiges,
 * 117 Verben, 56 Adjektive, 13 Pronomen, 6 Konjunktionen). Damit entfaellt
 * die alte Herleitung aus der deutschen Bedeutung ("Infinitiv auf -en")
 * samt ihrer Ausnahmeliste - die fing "schoen", "morgen", "zusammen" und
 * "draussen" faelschlich als Verben.
 */
const VON_WORTART: Record<string, Gruppe> = {
  Pronomen: 'person',
  Verb: 'verb',
  Adjektiv: 'adjektiv',
  Nomen: 'nomen',
  Fragewort: 'frage',
  // Alles Uebrige sammelt `weitere` ein: Adverb, Praeposition (beide
  // Schreibweisen kommen in den Tabellen vor), Konjunktion, Zahlwort,
  // Artikel, und bei Chinesisch "Sonstiges".
};

export type Wortliste = {
  loading: boolean;
  woerter: VokabelEintrag[];
  /** Wie viele Woerter mangels Bedeutung weggelassen wurden. */
  ohneBedeutung: number;
  /** Gesetzt, wenn es fuer diese Sprache keine Wortliste geben kann. */
  unavailable: string | null;
};

/** Satzzeichen an den Raendern weg, klein - fuer den Abgleich, nicht fuers Auge. */
function schluessel(wort: string): string {
  return wort.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '').toLowerCase();
}

/**
 * Nachschlagewerk: jede Schreibweise eines Worts zeigt auf seinen Eintrag.
 *
 * Grundform, die Varianten eines Genus-Paars ("cansado / cansada") und ALLE
 * gebeugten Formen - ohne die faende "hotellet" sein "hotell" nie.
 */
function vokabelIndex(words: VocabWord[]): Map<string, VocabWord> {
  const idx = new Map<string, VocabWord>();
  const merke = (k: string | null | undefined, w: VocabWord) => {
    const s = schluessel(k ?? '');
    if (s && !idx.has(s)) idx.set(s, w);
  };
  for (const w of words) {
    for (const teil of w.word.split('/')) merke(teil, w);
    if (w.hanzi) for (const teil of w.hanzi.split('/')) merke(teil, w);
    for (const form of w.alleFormen) merke(form, w);
  }
  return idx;
}

/**
 * Die Gruppe, nachdem "Personenwoerter" auf echte Personen eingegrenzt ist.
 *
 * Ohne bekannte Bedeutung bleibt es bei `person` - das Wort faellt ohnehin
 * gleich aus der Liste (kein Woerterbuch-Eintrag, siehe `ohneBedeutung`).
 */
function gruppeVon(roh: Gruppe, german: string | undefined): Gruppe {
  if (!german) return roh;
  // Die Bedeutung schlaegt die Wortart: 吗 steht als "Sonstiges" in der
  // Tabelle und 什么 als Pronomen - beide waeren ohne diese zwei Zeilen in
  // der falschen Gruppe.
  if (istPartikel(german)) return 'partikel';
  if (istFragewort(german)) return 'frage';
  if (roh === 'person') return istPersonenwort(german) ? 'person' : 'weitere';
  return roh;
}

/** Laengster Treffer - nur fuer Sprachen ohne Wortgrenzen (Chinesisch). */
function zerlege(text: string, bekannt: Map<string, VocabWord>, maxLen: number): string[] {
  const out: string[] = [];
  let i = 0;
  while (i < text.length) {
    let gefunden = false;
    for (let len = Math.min(maxLen, text.length - i); len > 0; len -= 1) {
      const teil = text.slice(i, i + len);
      if (bekannt.has(teil)) {
        out.push(teil);
        i += len;
        gefunden = true;
        break;
      }
    }
    if (!gefunden) i += 1; // unbekanntes Zeichen: ueberspringen statt raten
  }
  return out;
}

export function useCategoryVocab(languageId: string, categoryId: string): Wortliste {
  const [state, setState] = useState<Wortliste>({
    loading: true,
    woerter: [],
    ohneBedeutung: 0,
    unavailable: null,
  });

  useEffect(() => {
    let abgebrochen = false;
    const lang = getLanguage(languageId);

    // Deutsch ist die AUSGANGSsprache und hat als einzige keine
    // Vokabeltabelle - es gaebe nichts nachzuschlagen, die Woerter stuenden
    // mit sich selbst als Bedeutung da.
    if (!lang.vocabTable) {
      setState({
        loading: false,
        woerter: [],
        ohneBedeutung: 0,
        unavailable: `Für ${lang.label} gibt es keine Wortliste — es ist deine Ausgangssprache.`,
      });
      return;
    }

    (async () => {
      // Geliehene Situationen gehoeren dazu, wie in der Satzliste
      // (2026-09-20) - sonst zeigt die Wortliste weniger Woerter, als die
      // Kategorie auf dem Lektionen-Screen Saetze anbietet.
      const [{ sentences }, { words }] = await Promise.all([
        loadExerciseSentences(languageId, [categoryId, ...leihgeberVon([categoryId])]),
        loadVocabWords(languageId),
      ]);
      if (abgebrochen) return;

      const meine = saetzeFuer(categoryId, sentences);
      const idx = vokabelIndex(words);
      const eigeneSet = new Set((CATEGORY_VOCAB[categoryId] ?? []).map((w) => w.hanzi));

      // Gezaehlt wird je VOKABEL, nicht je Wortform (berichtigt beim ersten
      // Durchspielen). Norwegisch fuehrte sonst "betale" und "betaler" als
      // zwei Eintraege mit derselben Bedeutung, "er" und "være" ebenso -
      // eine Wortliste listet Woerter, keine Flexionsformen. Wo kein
      // Eintrag gefunden wird, bleibt die Wortform der Schluessel, damit
      // sich die Weggelassenen ueberhaupt zaehlen lassen.
      const zaehler = new Map<
        string,
        { treffer: VocabWord | null; anzahl: number; gruppe: Gruppe }
      >();
      const zaehle = (key: string, treffer: VocabWord | null, gruppe: Gruppe) => {
        const id = treffer ? `v${treffer.id}` : `?${key}`;
        const da = zaehler.get(id);
        if (da) da.anzahl += 1;
        else zaehler.set(id, { treffer, anzahl: 1, gruppe });
      };

      if (languageId === 'zh') {
        const maxLen = Math.max(1, ...[...idx.keys()].map((k) => k.length));
        for (const s of meine) {
          // Je Satz nur EINMAL zaehlen - gesucht ist "in wie vielen
          // Saetzen", nicht "wie oft insgesamt".
          for (const hanzi of new Set(zerlege(s.text, idx, maxLen))) {
            const w = idx.get(hanzi)!;
            zaehle(hanzi, w, gruppeVon(VON_WORTART[w.wordClass] ?? 'weitere', w.german));
          }
        }
      } else {
        for (const s of meine) {
          const tags = s.wordTags ?? [];
          // Russisch: die Tags tragen die Umschrift, die Vokabelformen sind
          // kyrillisch. Ueber die Position im Satz kommen wir an das
          // kyrillische Wort - siehe Kopfkommentar.
          const inSchrift = lang.lautschriftSpalte ? s.text.trim().split(/\s+/) : null;
          const passt = inSchrift !== null && inSchrift.length === tags.length;
          const gesehen = new Set<string>();
          tags.forEach((tag, i) => {
            const key = schluessel(tag.w);
            if (!key || gesehen.has(key)) return;
            gesehen.add(key);
            const ueberSchrift = passt ? idx.get(schluessel(inSchrift![i])) : undefined;
            const treffer = idx.get(key) ?? ueberSchrift ?? null;
            // UNGETAGGTE Woerter kommen seit 2026-09-20 mit - aber nur,
            // wenn die Vokabeltabelle sie kennt (2026-09-20, Simons Frage
            // nach den Satzpartikeln).
            //
            // Gefaerbt werden nur Nomen, Verb, Adjektiv, Pronomen und
            // Konjunktion; Fragewoerter, Adverbien, Praepositionen,
            // Zahlwoerter, Artikel und Partikeln tragen deshalb kein Tag
            // und fehlten in jeder Sprache ausser Chinesisch - dort findet
            // die Zerlegung sie, weil sie gegen die ganze Vokabelliste
            // laeuft. Das waren 29 bis 44 Woerter je Sprache, darunter
            // "wo", "wann", "wie viel". Ihre Wortart steht in der
            // Vokabeltabelle, geraten wird nichts.
            //
            // Ohne Eintrag faellt ein ungetaggtes Wort still weg statt in
            // `ohneBedeutung` zu zaehlen: es ist kein Lueckenbefund,
            // sondern ein Wort, das gar nicht zum Wortschatz gehoert.
            if (!tag.c && !treffer) return;
            const roh = tag.c ? VON_TAG[tag.c] : (VON_WORTART[treffer!.wordClass] ?? 'weitere');
            zaehle(key, treffer, gruppeVon(roh, treffer?.german));
          });
        }
      }

      let ohneBedeutung = 0;
      const woerter: VokabelEintrag[] = [];
      for (const { treffer, anzahl, gruppe } of zaehler.values()) {
        if (!treffer) {
          ohneBedeutung += 1;
          continue;
        }
        woerter.push({
          // Bei eigener Schrift haelt `hanzi` die Schrift und `word` den
          // Lerntext (Pinyin, Umschrift); sonst sind beide dasselbe Wort.
          schrift: treffer.hanzi ?? treffer.word,
          lerntext: treffer.word,
          de: treffer.german,
          neu: eigeneSet.has(treffer.hanzi ?? treffer.word),
          anzahl,
          gruppe,
        });
      }

      woerter.sort((a, b) => {
        const g = REIHENFOLGE.indexOf(a.gruppe) - REIHENFOLGE.indexOf(b.gruppe);
        if (g !== 0) return g;
        // INNERHALB einer Gruppe nach Haeufigkeit: ein Verb, das acht Saetze
        // traegt, ist das tragende. Hier ist Haeufigkeit ein gutes Mass -
        // anders als bei der Frage, welche Woerter ueberhaupt in die Liste
        // gehoeren (siehe 干杯 oben).
        if (a.anzahl !== b.anzahl) return b.anzahl - a.anzahl;
        return a.lerntext.localeCompare(b.lerntext);
      });

      setState({ loading: false, woerter, ohneBedeutung, unavailable: null });
    })().catch(() => {
      if (!abgebrochen) {
        setState({
          loading: false,
          woerter: [],
          ohneBedeutung: 0,
          unavailable: 'Die Wortliste ließ sich nicht laden.',
        });
      }
    });

    return () => {
      abgebrochen = true;
    };
  }, [languageId, categoryId]);

  return state;
}
