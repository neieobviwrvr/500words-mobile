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
    .toLowerCase()
    .replace(/[.,!?;:"'`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text: string): string[] {
  return normalize(text).split(' ').filter(Boolean);
}

// Wort-basiertes Matching statt zusammenhaengender Substring-Suche: alle
// Woerter einer Synonym-Phrase muessen im Nutzertext vorkommen, aber egal
// in welcher Reihenfolge und egal ob dazwischen andere Woerter stehen
// (z.B. "schmeckt gut" matcht auch bei "schmeckt SEHR gut"). Reine
// Tippfehler-/Aussprache-Toleranz gibt es hier bewusst noch nicht - das
// eigentliche Problem in der Praxis war Wortstellung/eingeschobene Woerter,
// nicht Tippfehler (Whisper transkribiert erkannte Woerter meist korrekt
// buchstabiert).
function synonymMatches(userTokens: string[], synonym: string): boolean {
  const synonymTokens = tokenize(synonym);
  return synonymTokens.every((token) => userTokens.includes(token));
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
