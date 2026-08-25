import { supabase } from '../lib/supabase';
import { cachedFetch } from '../lib/offlineCache';
import { getLanguage } from './languages';

// Laedt die 500 haeufigsten Woerter einer Sprache (schwedisch_vocab,
// franz_vocab, seit 2026-08-24 auch chinesisch_vocab). Gegenstueck zu
// phrasebookContent.ts, das die Saetze laedt.
//
// ACHTUNG, die wichtigste Eigenheit von schwedisch_vocab/franz_vocab: ihre
// `category`-Spalte ist die WORTART (Nomen, Verb, Adjektiv, Pronomen,
// Zahlwort, Adverb, Praeposition, Konjunktion, Fragewort) - NICHT die
// Lernkategorie, nach der im Shop freigeschaltet wird. Ein Wort laesst sich
// deshalb nicht auf "hotel_accommodation" filtern; die 500 Woerter sind der
// Grundwortschatz und damit ohnehin fuer jeden freigeschaltet (siehe
// CLAUDE.md, freies Tier). Wer hier nach Lernkategorien filtern will,
// braucht erst eine neue Spalte.
//
// `chinesisch_vocab` ist ANDERS gebaut: seine `category`-Spalte meint dort
// tatsaechlich die Lernkategorie (club_nightlife etc., seit 2026-08-21 fuer
// die Wortliste je Kategorie eingefuehrt - siehe useCategoryVocab.ts), eine
// eigene Wortart-Spalte gibt es gar nicht. Die Wortart wird deshalb wie in
// useCategoryVocab.ts aus der deutschen Bedeutung ABGELEITET (siehe
// wortartAusDeutsch unten) - eine eigene, absichtlich einfachere Herleitung,
// weil hier keine Kategorie-Grenze vorgegeben ist. Angezeigtes Wort ist das
// PINYIN, nicht das Hanzi (Kernprinzip: gelernt wird ueber Pinyin).
//
// Wie bei den Saetzen: Netzwerk zuerst, bei Fehler der zuletzt gespeicherte
// Stand (lib/offlineCache.ts) - die Zielgruppe ist oft offline unterwegs.

export type VocabWord = {
  id: number;
  /** Das Wort in der Zielsprache. */
  word: string;
  /** Deutsche Bedeutung. Kann mehrere durch Komma getrennte Angaben halten. */
  german: string;
  /** Wortart - siehe Warnung oben, NICHT die Lernkategorie. */
  wordClass: string;
  /** Nur bei Nomen gesetzt: "en"/"ett" (Schwedisch) bzw. "m"/"f" (Franzoesisch). */
  genus: string | null;
  /**
   * Nur bei Chinesisch gesetzt: das Hanzi zum angezeigten Pinyin.
   *
   * NICHT zum Anzeigen (das bleibt Pinyin), sondern fuer die
   * Sprachausgabe: Speech-Engines brauchen fuer Mandarin echte Zeichen,
   * Pinyin-Text mit Tonzeichen wird sonst falsch oder gar nicht
   * ausgesprochen (siehe CLAUDE.md "Die Zeichen sind die Infrastruktur").
   */
  hanzi: string | null;
  /**
   * Praesensform, NUR wo die Sprache das grammatisch braucht - heute nur
   * Schwedisch (`forms.present` in schwedisch_vocab, z.B. "har" statt dem
   * Infinitiv "ha"). Schwedisch konjugiert nicht nach Person (nur nach
   * Zeit), diese EINE Form gilt also fuer "ich/du/er/wir" gleichermassen -
   * anders als der rohe Infinitiv waere sie im Satz tatsaechlich richtig.
   * Chinesisch braucht das nicht (keine Konjugation ueberhaupt, das Pinyin
   * IST schon die richtige Form), Franzoesisch hat keine `forms`-Spalte.
   */
  presentForm: string | null;
};

/**
 * Was die Infinitiv-Regel unten falsch einsortiert.
 *
 * Fehlfall gemeldet 2026-08-25: die Pronomen-Runde zeigte "十 (zehn)" als
 * Verb, weil "zehn" zufaellig auf "n" endet. Dieselbe Regel-Schwaeche wie
 * in useCategoryVocab.ts, hier aber gegen den GESAMTEN chinesisch_vocab-
 * Bestand geprueft statt nur gegen eine Kategorie - deshalb eine laengere
 * Liste. Drei Gruppen faellt die Regel zum Opfer: Zahlwoerter (sieben/neun/
 * zehn), Adjektive/Orts-/Zeitwoerter, die zufaellig auf "n" enden (schön,
 * morgen, drinnen, ...), und ein paar Nomen-Phrasen, deren erstes Wort
 * klein geschrieben ist ("feste Freundin" - "feste" ist ein Adjektiv vor
 * dem eigentlichen Nomen, die Grossschreibungs-Regel greift dort nicht).
 * Wer ein weiteres falsch einsortiertes Wort findet, traegt es hier ein.
 */
const WORTART_AUSNAHMEN: Record<string, string> = {
  // Zahlwoerter, zufaellig auf "-n" endend
  sieben: 'Sonstiges',
  neun: 'Sonstiges',
  zehn: 'Sonstiges',
  // Adjektive, zufaellig auf "-n" endend
  'schön / hübsch': 'Sonstiges',
  klein: 'Sonstiges',
  dünn: 'Sonstiges',
  'schön anzusehen': 'Sonstiges',
  // Orts-/Zeit-/sonstige Woerter, zufaellig auf "-n" endend
  morgen: 'Sonstiges',
  hinten: 'Sonstiges',
  drinnen: 'Sonstiges',
  draußen: 'Sonstiges',
  oben: 'Sonstiges',
  unten: 'Sonstiges',
  daneben: 'Sonstiges',
  gestern: 'Sonstiges',
  'von / ab': 'Sonstiges',
  'in / drinnen': 'Sonstiges',
  außen: 'Sonstiges',
  'am meisten': 'Sonstiges',
  zusammen: 'Sonstiges',
  'schon / bereits': 'Sonstiges',
  'dann / gleich': 'Sonstiges',
  'am nächsten (örtlich)': 'Sonstiges',
  'zusammen, insgesamt': 'Sonstiges',
  wann: 'Sonstiges',
  'auf Wiedersehen': 'Sonstiges',
  willkommen: 'Sonstiges',
  // Nomen-Phrasen mit kleingeschriebenem Adjektiv davor
  'feste Freundin': 'Nomen',
  'fester Freund oder feste Freundin': 'Nomen',
  'westliche Medizin': 'Nomen',
  'die anderen, andere Leute': 'Nomen',
};

/**
 * Wortart aus der deutschen Bedeutung raten - nur fuer Chinesisch gebraucht,
 * das keine eigene Wortart-Spalte hat.
 *
 * Bewusst nur DREI Eimer statt der neun echten Wortarten: Grossschreibung
 * ist eine verlaessliche deutsche Regel fuer Nomen ("Musik", "Handy"), der
 * Infinitiv-Verdacht auf "-en"/"-n" trifft Verben meistens (dieselbe Regel
 * wie in useCategoryVocab.ts). Adjektive, Pronomen, Zahlwoerter & Co.
 * liessen sich aus reinem Fliesstext NICHT verlaesslich auseinanderhalten,
 * ohne Woerter falsch zu behaupten - sie fallen deshalb ehrlich zusammen
 * in "Sonstiges", statt mit falscher Praezision als "Adjektiv" zu
 * erscheinen. Bekannte Fehltreffer der Regel stehen in WORTART_AUSNAHMEN
 * oben, gegen den gesamten Bestand geprueft (nicht nur stichprobenartig).
 */
export function wortartAusDeutsch(german: string): string {
  if (WORTART_AUSNAHMEN[german]) return WORTART_AUSNAHMEN[german];
  const erste = german.split(/[,/(]/)[0].trim();
  if (/^[A-ZÄÖÜ]/.test(erste)) return 'Nomen';
  const letztes = erste.split(' ').pop() ?? '';
  if (/[a-zäöüß]en$/.test(letztes) || /[a-zäöüß]n$/.test(letztes)) return 'Verb';
  return 'Sonstiges';
}

export async function loadVocabWords(
  languageId: string
): Promise<{ words: VocabWord[]; fromCache: boolean }> {
  const lang = getLanguage(languageId);

  if (languageId === 'zh') {
    const { data: words, fromCache } = await cachedFetch('vocab:zh', async () => {
      const { data, error } = await supabase.from('chinesisch_vocab').select('id, hanzi, pinyin, german');
      if (error) throw error;
      return (data ?? []).map(
        (row: any): VocabWord => ({
          id: row.id,
          word: row.pinyin,
          german: row.german,
          wordClass: wortartAusDeutsch(row.german),
          genus: null,
          hanzi: row.hanzi,
          presentForm: null,
        })
      );
    });
    return { words, fromCache };
  }

  if (!lang.vocabTable || !lang.vocabColumn) return { words: [], fromCache: false };

  const wordColumn = lang.vocabColumn;
  const cacheKey = `vocab:${lang.id}`;
  // Nur Schwedisch hat eine `forms`-Spalte - franz_vocab hat keine, die
  // waere ein 400er beim Anfragen einer nicht existierenden Spalte.
  const hatFormen = languageId === 'sv';

  const { data: words, fromCache } = await cachedFetch(cacheKey, async () => {
    const { data, error } = await supabase
      .from(lang.vocabTable as string)
      .select(`id, ${wordColumn}, german, category, genus${hatFormen ? ', forms' : ''}`);
    if (error) throw error;

    return (data ?? []).map(
      (row: any): VocabWord => ({
        id: row.id,
        word: row[wordColumn],
        german: row.german,
        wordClass: row.category,
        genus: row.genus ?? null,
        hanzi: null,
        presentForm: row.forms?.present ?? null,
      })
    );
  });

  return { words, fromCache };
}
