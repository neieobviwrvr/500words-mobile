import { supabase } from '../lib/supabase';
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
  accepted_concepts: AcceptedConcepts;
};

export async function loadExerciseSentences(languageId: string, categoryId: string): Promise<ExerciseSentence[]> {
  const lang = getLanguage(languageId);
  if (!lang.table) return [];

  const textColumn = lang.id === 'de' ? 'german' : 'target_text';
  const columns =
    lang.id === 'de'
      ? 'id, german, scenario, accepted_concepts'
      : 'id, target_text, german, scenario, accepted_concepts, verb_cluster';

  let query = supabase.from(lang.table).select(columns);
  if (categoryId && categoryId !== 'alle') {
    query = query.eq('category', categoryId);
  }
  const { data, error } = await query;
  if (error) throw error;

  return (data ?? []).map((row: any) => {
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
      accepted_concepts,
    };
  });
}

export async function loadAnswerClusters(): Promise<Record<string, string[]>> {
  const { data, error } = await supabase.from('answer_clusters').select('cluster_id, forms');
  if (error) throw error;
  const lookup: Record<string, string[]> = {};
  for (const row of data ?? []) {
    lookup[row.cluster_id] = row.forms as string[];
  }
  return lookup;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export { shuffle };
