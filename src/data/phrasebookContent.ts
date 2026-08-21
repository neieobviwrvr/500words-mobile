import { supabase } from '../lib/supabase';
import { cachedFetch } from '../lib/offlineCache';
import { AcceptedConcepts } from '../features/evaluation/evaluateConcepts';
import { getLanguage } from './languages';

// Laedt echte Uebungssaetze aus Supabase (phrasebook_master fuer Deutsch,
// schwedisch_phrasebook fuer Schwedisch) statt der Platzhalter aus
// mockExercise.ts. Beide Tabellen haben eine leicht andere Spalte fuer den
// eigentlichen Satztext: phrasebook_master nutzt `german` direkt (Deutsch
// IST hier die Zielsprache), schwedisch_phrasebook nutzt `target_text`
// (Schwedisch) mit `german` nur als Uebersetzungshilfe.
//
// Verb-Cluster-Speicherort unterscheidet sich ebenfalls zwischen den
// Tabellen: bei phrasebook_master steckt er verschachtelt in
// accepted_concepts.verb_cluster, bei schwedisch_phrasebook ist es eine
// EIGENE Spalte `verb_cluster` (2026-08-06 befuellt, siehe
// Sprachlisten/schwedisch_clusters_master.py). Wird hier beim Laden in
// accepted_concepts.verb_cluster gemerged, damit evaluateConcepts() nicht
// zwischen den beiden Schemas unterscheiden muss.

export type ExerciseSentence = {
  id: number;
  text: string;
  germanGloss: string | null; // nur bei Nicht-Deutsch-Zielsprachen gesetzt
  scenario: string;
  category: string;
  accepted_concepts: AcceptedConcepts;
  /**
   * Vorgerenderte Aufnahme des Satzes, falls vorhanden.
   *
   * Stand 2026-08-21 ueberall LEER: `phrasebook_master` hat gar keine
   * Audio-Spalte, `schwedisch_phrasebook` hat `audio_url`, aber 0 von 189
   * Zeilen sind gefuellt (ElevenLabs-Vertonung ist zurueckgestellt, siehe
   * CLAUDE.md). Das Feld wird trotzdem durchgereicht, damit die Wiedergabe
   * von selbst umschaltet, sobald aufgenommen wurde - `speakSentence`
   * bevorzugt die Datei und faellt sonst auf die Systemstimme zurueck.
   */
  audioUrl: string | null;
};

// categoryIds: explizite Liste statt eines "alle"-Sentinels, der frueher
// den Filter komplett wegliess - das haette (fuer den SRS-Pool, siehe
// srsEngine.ts) auch Saetze aus NICHT gekauften Kategorien mitgeladen.
// Aufrufer muessen jetzt bewusst die passende Liste uebergeben (z.B. eine
// einzelne Kategorie fuer S2, oder alle gekauften + "grundwortschatz" fuer
// den SRS-Pool von S5) - siehe CLAUDE.md "EIN gemeinsamer Wiederholungs-Pool
// ... ueber ALLE freigeschalteten Kategorien".
//
// Offline-Cache (2026-08-07): Netzwerk zuerst, bei Fehler automatisch der
// zuletzt geladene Stand aus AsyncStorage (siehe lib/offlineCache.ts) -
// wichtig fuer die Zielgruppe (Backpacker mit wackeligem Auslandsdatentarif,
// siehe CLAUDE.md). `fromCache` im Rueckgabewert, damit der Screen ehrlich
// anzeigen kann, dass gerade der letzte gespeicherte Stand genutzt wird.
export async function loadExerciseSentences(
  languageId: string,
  categoryIds: string[]
): Promise<{ sentences: ExerciseSentence[]; fromCache: boolean }> {
  const lang = getLanguage(languageId);
  if (!lang.table) return { sentences: [], fromCache: false };

  const textColumn = lang.id === 'de' ? 'german' : 'target_text';
  // `audio_url` gibt es NUR in den Nicht-Deutsch-Tabellen - phrasebook_master
  // hat die Spalte nicht, ein Select darauf wuerde dort scheitern.
  const columns =
    lang.id === 'de'
      ? 'id, german, scenario, category, accepted_concepts'
      : 'id, target_text, german, scenario, category, accepted_concepts, verb_cluster, audio_url';

  const cacheKey = `sentences:${lang.id}:${[...categoryIds].sort().join(',')}`;
  const { data: sentences, fromCache } = await cachedFetch(cacheKey, async () => {
    let query = supabase.from(lang.table as string).select(columns);
    if (categoryIds.length > 0) {
      query = query.in('category', categoryIds);
    }
    const { data, error } = await query;
    if (error) throw error;

    return (data ?? []).map((row: any): ExerciseSentence => {
      const accepted_concepts: AcceptedConcepts = row.accepted_concepts;
      // Bei Nicht-Deutsch liegt der Cluster in einer eigenen Spalte statt
      // verschachtelt - hier vereinheitlichen (siehe Kommentar oben).
      if (lang.id !== 'de' && row.verb_cluster) {
        accepted_concepts.verb_cluster = row.verb_cluster;
      }
      return {
        id: row.id,
        text: row[textColumn],
        germanGloss: lang.id === 'de' ? null : row.german ?? null,
        scenario: row.scenario,
        category: row.category,
        accepted_concepts,
        audioUrl: row.audio_url ?? null,
      };
    });
  });

  return { sentences, fromCache };
}

export async function loadAnswerClusters(): Promise<Record<string, string[]>> {
  const { data } = await cachedFetch('answer_clusters', async () => {
    const { data, error } = await supabase.from('answer_clusters').select('cluster_id, forms');
    if (error) throw error;
    const lookup: Record<string, string[]> = {};
    for (const row of data ?? []) {
      lookup[row.cluster_id] = row.forms as string[];
    }
    return lookup;
  });
  return data;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export { shuffle };
