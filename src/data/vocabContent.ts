import { supabase } from '../lib/supabase';
import { cachedFetch } from '../lib/offlineCache';
import { getLanguage } from './languages';

// Laedt die 500 haeufigsten Woerter einer Sprache (schwedisch_vocab,
// franz_vocab). Gegenstueck zu phrasebookContent.ts, das die Saetze laedt.
//
// ACHTUNG, die wichtigste Eigenheit dieser Tabellen: ihre `category`-Spalte
// ist die WORTART (Nomen, Verb, Adjektiv, Pronomen, Zahlwort, Adverb,
// Praeposition, Konjunktion, Fragewort) - NICHT die Lernkategorie, nach der
// im Shop freigeschaltet wird. Ein Wort laesst sich deshalb nicht auf
// "hotel_accommodation" filtern; die 500 Woerter sind der Grundwortschatz und
// damit ohnehin fuer jeden freigeschaltet (siehe CLAUDE.md, freies Tier).
// Wer hier nach Lernkategorien filtern will, braucht erst eine neue Spalte.
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
};

export async function loadVocabWords(
  languageId: string
): Promise<{ words: VocabWord[]; fromCache: boolean }> {
  const lang = getLanguage(languageId);
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
      })
    );
  });

  return { words, fromCache };
}
