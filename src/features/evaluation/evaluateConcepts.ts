export type ConceptGroup = {
  concept: string;
  synonyms: string[];
};

export type AcceptedConcepts = {
  required: ConceptGroup[];
  optional: ConceptGroup[];
};

export type EvaluationResult = {
  passed: boolean;
  matched: string[];
  missed: string[];
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

export function evaluateConcepts(userText: string, accepted: AcceptedConcepts): EvaluationResult {
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

  return { passed: missed.length === 0, matched, missed };
}
