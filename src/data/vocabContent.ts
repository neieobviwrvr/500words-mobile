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
};

/**
 * Wortart aus der deutschen Bedeutung raten - nur fuer Chinesisch gebraucht,
 * das keine eigene Wortart-Spalte hat.
 *
 * Bewusst nur DREI Eimer statt der neun echten Wortarten: Grossschreibung
 * ist eine verlaessliche deutsche Regel fuer Nomen ("Musik", "Handy"), der
 * Infinitiv-Verdacht auf "-en"/"-n" trifft Verben meistens (dieselbe Regel
 * wie in useCategoryVocab.ts, mit derselben bekannten Schwaeche - "schön",
 * "fein" enden zufaellig auch auf "n" und landen faelschlich bei Verb).
 * Adjektive, Pronomen, Zahlwoerter & Co. liessen sich aus reinem Fliesstext
 * NICHT verlaesslich auseinanderhalten, ohne Woerter falsch zu behaupten -
 * sie fallen deshalb ehrlich zusammen in "Sonstiges", statt mit falscher
 * Praezision als "Adjektiv" zu erscheinen.
 */
export function wortartAusDeutsch(german: string): string {
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
        })
      );
    });
    return { words, fromCache };
  }

  if (!lang.vocabTable || !lang.vocabColumn) return { words: [], fromCache: false };

  const wordColumn = lang.vocabColumn;
  const cacheKey = `vocab:${lang.id}`;

  const { data: words, fromCache } = await cachedFetch(cacheKey, async () => {
    const { data, error } = await supabase
      .from(lang.vocabTable as string)
      .select(`id, ${wordColumn}, german, category, genus`);
    if (error) throw error;

    return (data ?? []).map(
      (row: any): VocabWord => ({
        id: row.id,
        word: row[wordColumn],
        german: row.german,
        wordClass: row.category,
        genus: row.genus ?? null,
        hanzi: null,
      })
    );
  });

  return { words, fromCache };
}
