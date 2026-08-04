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

// Bewusst einfaches Substring-Matching statt echtem Fuzzy-Algorithmus fuer
// diesen ersten Test - Whisper transkribiert erkannte Woerter meist korrekt
// buchstabiert, das eigentliche Problem ist Wortlaut/Reihenfolge, nicht
// Tippfehler. Bei Bedarf spaeter um Levenshtein-Toleranz pro Wort erweitern.
export function evaluateConcepts(userText: string, accepted: AcceptedConcepts): EvaluationResult {
  const normalizedUser = normalize(userText);
  const matched: string[] = [];
  const missed: string[] = [];

  for (const group of accepted.required) {
    const hit = group.synonyms.some((syn) => normalizedUser.includes(normalize(syn)));
    if (hit) {
      matched.push(group.concept);
    } else {
      missed.push(group.concept);
    }
  }

  return { passed: missed.length === 0, matched, missed };
}
