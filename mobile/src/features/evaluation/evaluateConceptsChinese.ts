import { AcceptedConcepts, EvaluationResult, Tier } from './evaluateConcepts';

// Chinesisches Gegenstueck zu evaluateConcepts.ts (2026-08-08, Planungsstand
// - noch nicht an echten Content/eine echte Sprachauswahl angebunden, siehe
// CLAUDE.md). Zwei Grundannahmen des deutschen/schwedischen Templates
// passen nicht auf Mandarin:
// 1. Keine Leerzeichen zwischen Woertern - Wort-Tokenisierung (tokenize())
//    ist unmoeglich ohne echte Segmentierung. Loesung hier: Teilstring-Suche
//    statt Tokenisierung - "kommt dieses Schriftzeichen/diese Zeichenfolge
//    irgendwo im (leerzeichenbereinigten) Satz vor". Braucht keine
//    Segmentierungs-Bibliothek, ist fuer kurze A1/A2-Konzeptw√∂rter robust
//    genug (Kollisionsrisiko waechst erst bei sehr kurzen 1-Zeichen-
//    Konzepten in langen Saetzen - siehe Hinweis unten).
// 2. Keine Verb-Konjugation - der "Cluster"-Mechanismus ist bei genauerem
//    Hinsehen aber nicht wirklich "Konjugations-Toleranz", sondern
//    "Synonym-Familien-Toleranz" (z.B. deutsch "moegen/lieben"). Diese Idee
//    ueberlebt 1:1: ein chinesischer Cluster ist einfach eine flache Liste
//    von Synonym-Woertern OHNE Formen (z.B. "yao_xiang": ["要","想要","想"]
//    fuer "wollen/moechten") - kein Levenshtein noetig, Hanzi-Tippfehler-
//    Toleranz ergibt bei Einzelzeichen ohnehin wenig Sinn (ein falsches
//    Zeichen ist meist ein komplett anderes Wort, nicht wie bei
//    lateinischer Schrift ein "Verhoerer" mit aehnlicher Buchstabenfolge).
//
// WICHTIG: `accepted.required`/`optional`-Synonyme UND Cluster-Formen
// muessen in HANZI (vereinfacht) hinterlegt sein, nicht in Pinyin - Whisper
// transkribiert gesprochenes Chinesisch als Hanzi, nicht als Pinyin. Pinyin
// ist bei uns nur eine Lesehilfe/Anzeige fuer den Nutzer (siehe CLAUDE.md
// "vereinfacht + Pinyin"-Entscheidung), kein Ziel fuer die STT-Bewertung.
//
// Gleiche Ausgabe-Form wie evaluateConcepts() (EvaluationResult/Tier aus
// evaluateConcepts.ts wiederverwendet) - der Rest der App (Uebungs-Screen,
// FSRS-Einstufung) braucht dadurch keine Sonderbehandlung fuer Chinesisch,
// nur die Auswahl WELCHE evaluate-Funktion aufgerufen wird haengt von der
// Zielsprache ab.

function stripPunctuationAndSpaces(text: string): string {
  // Chinesische UND lateinische Satzzeichen sowie jegliche Leerzeichen
  // entfernen - kein Gross-/Kleinschreibungs-Thema bei Hanzi, kein NFC-
  // Normalisierungsproblem wie bei Umlauten.
  return text.replace(/[，。！？、；：""''（）,.!?;:"'()\s]/g, '');
}

function containsPhrase(haystack: string, phrase: string): boolean {
  const cleanPhrase = stripPunctuationAndSpaces(phrase);
  if (!cleanPhrase) return false;
  return haystack.includes(cleanPhrase);
}

export function evaluateConceptsChinese(
  userText: string,
  accepted: AcceptedConcepts,
  clusters: Record<string, string[]>,
): EvaluationResult {
  const haystack = stripPunctuationAndSpaces(userText);
  const matched: string[] = [];
  const missed: string[] = [];

  for (const group of accepted.required) {
    const hit = group.synonyms.some((syn) => containsPhrase(haystack, syn));
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
    verbClusterMatched = forms.some((form) => containsPhrase(haystack, form));
  }

  let tier: Tier = 'nicht_verstanden';
  if (survived) {
    tier = verbClusterMatched === false ? 'ueberlebt' : 'richtig';
  }

  return { tier, passed: survived, matched, missed, verbClusterMatched };
}
