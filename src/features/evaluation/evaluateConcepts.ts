export type ConceptGroup = {
  concept: string;
  synonyms: string[];
};

export type AcceptedConcepts = {
  required: ConceptGroup[];
  optional: ConceptGroup[];
  // Verweist auf einen Cluster in clusters.ts (Konjugationen + Synonym-Verben
  // einer Verbfamilie, z.B. "moegen_lieben"). Wenn gesetzt: nur wenn der
  // Nutzertext irgendeine Form aus diesem Cluster enthaelt, wird von
  // Ueberlebensmodus auf Richtig-Niveau hochgestuft. Wenn nicht gesetzt,
  // reicht das Treffen der Pflicht-Konzepte direkt fuer Richtig-Niveau.
  verb_cluster?: string | null;
};

export type Tier = 'nicht_verstanden' | 'ueberlebt' | 'richtig';

export type EvaluationResult = {
  tier: Tier;
  passed: boolean; // = tier !== 'nicht_verstanden' (Ueberlebensmodus oder besser)
  matched: string[];
  missed: string[];
  verbClusterMatched: boolean | null; // null = kein Cluster fuer diesen Satz definiert
};

function normalize(text: string): string {
  return text
    .normalize('NFC') // Supabase-Text und Whisper-Transkript koennen aus
    // unterschiedlichen Unicode-Normalisierungsformen kommen (z.B. "ö" als
    // ein Zeichen vs. "o" + Combining-Diaeresis) - ohne diese Angleichung
    // sehen optisch identische Strings fuer den Vergleich unterschiedlich
    // aus (beobachteter Bug: "Wann öffnet das Museum?" == Transkript, aber
    // als falsch bewertet).
    .toLowerCase()
    .replace(/[.,!?;:"'`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text: string): string[] {
  return normalize(text).split(' ').filter(Boolean);
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

// Toleranz waechst mit der Wortlaenge - bei kurzen Woertern (<=4 Zeichen)
// gar keine Toleranz (zu riskant, viele unverwandte kurze Woerter liegen
// nah beieinander), sonst 1-2 Zeichen Unterschied erlaubt. Deckt reale
// Whisper-Verhoerer ab, z.B. "heizung" -> "heutzung" oder "kaution" ->
// "kaudzion" (beide Editierdistanz 2).
function wordsAreClose(a: string, b: string): boolean {
  if (a === b) return true;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen <= 4) return false;
  const threshold = maxLen <= 7 ? 1 : 2;
  return levenshtein(a, b) <= threshold;
}

function synonymMatches(userTokens: string[], synonym: string): boolean {
  const synonymTokens = tokenize(synonym);
  return synonymTokens.every((synToken) => userTokens.some((userToken) => wordsAreClose(userToken, synToken)));
}

function clusterMatches(userTokens: string[], clusterForms: string[]): boolean {
  return clusterForms.some((form) => userTokens.some((userToken) => wordsAreClose(userToken, normalize(form))));
}

// clusters: Lookup-Tabelle cluster_id -> Wortformen, kommt aus Supabase
// (answer_clusters), einmal geladen und an jeden evaluateConcepts()-Aufruf
// durchgereicht statt bei jedem Aufruf neu zu laden.
export function evaluateConcepts(
  userText: string,
  accepted: AcceptedConcepts,
  clusters: Record<string, string[]>,
): EvaluationResult {
  const userTokens = tokenize(userText);
  const matched: string[] = [];
  const missed: string[] = [];

  for (const group of accepted.required) {
    const hit = group.synonyms.some((syn) => synonymMatches(userTokens, syn));
    if (hit) {
      matched.push(group.concept);
    } else {
      missed.push(group.concept);
    }
  }

  const survived = missed.length === 0;

  let verbClusterMatched: boolean | null = null;
  if (accepted.verb_cluster) {
    const forms = clusters[accepted.verb_cluster] ?? [];
    verbClusterMatched = clusterMatches(userTokens, forms);
  }

  let tier: Tier = 'nicht_verstanden';
  if (survived) {
    tier = verbClusterMatched === false ? 'ueberlebt' : 'richtig';
  }

  return { tier, passed: survived, matched, missed, verbClusterMatched };
}
