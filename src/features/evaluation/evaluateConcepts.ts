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
    // Chinesische Satzzeichen sind eigene Unicode-Zeichen (Vollbreite) und
    // wuerden sonst am Wort kleben bleiben.
    .replace(/[.,!?;:"'`。，！？；：、“”（）]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text: string): string[] {
  return normalize(text).split(' ').filter(Boolean);
}

// Chinesisch bricht die Grundannahme dieser Datei (2026-08-21).
//
// Alles hier drunter zerlegt Text an LEERZEICHEN und vergleicht Wort gegen
// Wort. Chinesisch hat keine Wortgrenzen: Speechmatics liefert 我要一杯水 als
// eine einzige Kette. Ein Konzept "水" faende darin nie ein passendes "Wort",
// und der Umweg fuzzyContainsMerged() greift nur bei mehrwortigen Synonymen.
// Ohne diese Weiche waere jede chinesische Antwort "nicht verstanden".
//
// Das richtige Mass ist deshalb ENTHALTEN statt Wort-fuer-Wort - und zwar
// EXAKT, ohne die Levenshtein-Toleranz von wordsAreClose(): in lateinischer
// Schrift ist ein abweichender Buchstabe meist ein Verhoerer, in chinesischer
// Schrift ist ein abweichendes Zeichen ein anderes Wort. Toleranz waere hier
// keine Nachsicht, sondern Falschbewertung.
const CJK = /[一-鿿㐀-䶿]/;

function hatCJK(text: string): boolean {
  return CJK.test(text);
}

/** Normalisiert und entfernt alle Leerzeichen - die Vergleichsform fuer CJK. */
function cjkForm(text: string): string {
  return normalize(text).replace(/\s+/g, '');
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

// Toleranz waechst mit der Wortlaenge - bei sehr kurzen Woertern (<=2
// Zeichen) gar keine Toleranz (z.B. "ja"/"en"/"på" - zu ambig, ein Buchstabe
// Unterschied ist oft ein komplett anderes Wort), sonst 1-2 Zeichen
// Unterschied erlaubt. Deckt reale Whisper-Verhoerer ab, z.B. "heizung" ->
// "heutzung" oder "kaution" -> "kaudzion" (beide Editierdistanz 2).
//
// Korrektur (2026-08-08, echter Nutzerfall): vorher lag die Grenze bei <=4
// Zeichen ohne jede Toleranz - traf damit genau kurze Zahl-/Preisw√∂rter wie
// schwedisch "tio" (10) oder "euro" hart, die bei On-Device-Whisper (Modell
// "base") besonders anfaellig fuer einen einzelnen falsch erkannten
// Buchstaben sind. Bei Saetzen mit nur einem Pflicht-Konzept (z.B. reine
// Preisaussagen) kippte ein einzelner Whisper-Verhoerer dadurch sofort auf
// die haerteste Stufe "nicht_verstanden" trotz erkennbar richtig
// gesprochenem Satz - widerspricht dem "SRS soll nicht schlecht gelaunt
// machen"-Prinzip (siehe CLAUDE.md), FSRS resettet bei dieser Stufe hart.
// Grenze deshalb auf <=2 Zeichen gesenkt, 3-4-Zeichen-Woerter bekommen jetzt
// dieselbe Ein-Zeichen-Toleranz wie 5-7-Zeichen-Woerter.
function wordsAreClose(a: string, b: string): boolean {
  if (a === b) return true;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen <= 2) return false;
  const threshold = maxLen <= 7 ? 1 : 2;
  return levenshtein(a, b) <= threshold;
}

// Toleranz-Stufen wie wordsAreClose, aber fuer eine ganze (leerzeichenfreie)
// Zeichenkette statt einem Einzelwort - siehe fuzzyContainsMerged() unten.
function mergedTolerance(len: number): number {
  if (len <= 2) return 0;
  return len <= 7 ? 1 : 2;
}

// Sucht `needle` (typischerweise ein mehrwortiges Synonym OHNE Leerzeichen,
// z.B. "interent" aus "inte rent") als ungefaehre Teilzeichenkette in
// `haystack` (der ganze Nutzertext, auch ohne Leerzeichen) - per
// Schiebefenster + Levenshtein statt fixer Position.
//
// Grund (2026-08-08, echter Nutzerfall): Whisper hat "Mitt rum är inte
// rent" (Google-Translate-TTS, sauber ausgesprochen!) zu "Myt rum är
// intränt" transkribiert - "inte" und "rent" wurden zu EINEM Kunstwort
// "intränt" verschmolzen. Das normale Wort-fuer-Wort-Matching (synonymMatches
// unten) kann das strukturell nicht erkennen, weil kein einzelnes erkanntes
// Wort nah genug an "inte" ODER "rent" liegt (Editierdistanz 4 zu beiden) -
// das Problem ist nicht ein falscher Buchstabe in einem Wort, sondern eine
// falsche Wortgrenze zwischen zwei Woertern. Diese Funktion ist ein
// Fallback NUR fuer mehrwortige Synonyme (das strikte Pro-Wort-Matching
// bleibt fuer alles andere unveraendert bestehen, kein Genauigkeitsverlust
// bei Ein-Wort-Konzepten).
function fuzzyContainsMerged(haystack: string, needle: string): boolean {
  const threshold = mergedTolerance(needle.length);
  for (let len = needle.length - 2; len <= needle.length + 2; len++) {
    if (len <= 0) continue;
    for (let i = 0; i + len <= haystack.length; i++) {
      if (levenshtein(haystack.substr(i, len), needle) <= threshold) return true;
    }
  }
  return false;
}

function synonymMatches(userTokens: string[], userTextConcat: string, synonym: string): boolean {
  // Chinesisch: enthalten oder nicht, siehe Kommentar bei hatCJK().
  if (hatCJK(synonym)) return userTextConcat.includes(cjkForm(synonym));

  const synonymTokens = tokenize(synonym);
  const strictMatch = synonymTokens.every((synToken) => userTokens.some((userToken) => wordsAreClose(userToken, synToken)));
  if (strictMatch) return true;
  // Fallback nur bei mehrwortigen Synonymen - bei Einzelwoertern wuerde das
  // nur unnoetig Kollisionsrisiko einfuehren, ohne einen Wortgrenzen-Fehler
  // geben zu koennen (es gibt ja nur ein Wort, keine Grenze zu verschieben).
  if (synonymTokens.length < 2) return false;
  return fuzzyContainsMerged(userTextConcat, synonymTokens.join(''));
}

function clusterMatches(userTokens: string[], userTextConcat: string, clusterForms: string[]): boolean {
  return clusterForms.some((form) =>
    hatCJK(form)
      ? userTextConcat.includes(cjkForm(form))
      : userTokens.some((userToken) => wordsAreClose(userToken, normalize(form))),
  );
}

// clusters: Lookup-Tabelle cluster_id -> Wortformen, kommt aus Supabase
// (answer_clusters), einmal geladen und an jeden evaluateConcepts()-Aufruf
// durchgereicht statt bei jedem Aufruf neu zu laden.
// targetText: der eigentliche Zielsatz (optional, fuer die Rausch-Pruefung
// unten) - siehe Kommentar bei "unexplainedRatio".
export function evaluateConcepts(
  userText: string,
  accepted: AcceptedConcepts,
  clusters: Record<string, string[]>,
  targetText?: string,
): EvaluationResult {
  const userTokens = tokenize(userText);
  const userTextConcat = userTokens.join('');
  const matched: string[] = [];
  const missed: string[] = [];

  for (const group of accepted.required) {
    const hit = group.synonyms.some((syn) => synonymMatches(userTokens, userTextConcat, syn));
    if (hit) {
      matched.push(group.concept);
    } else {
      missed.push(group.concept);
    }
  }

  const survived = missed.length === 0;
  // Teilkredit (2026-08-08, Nutzer-Wunsch: "brutal schlechte Aussprache"
  // soll trotzdem etwas zaehlen): bei Saetzen mit MEHREREN Pflicht-
  // Konzepten reisst bisher ein einzelnes verpasstes Konzept die ganze
  // Bewertung auf "nicht_verstanden", selbst wenn die Mehrheit erkannt
  // wurde (z.B. "Berlin" richtig, "naechster Zug" komplett danebenge-
  // sprochen). Ab jetzt reicht "mindestens die Haelfte der Pflicht-
  // Konzepte getroffen" fuer "ueberlebt" statt "nicht_verstanden" - bei
  // Saetzen mit nur EINEM Pflicht-Konzept aendert sich dadurch nichts
  // (es gibt keine "Haelfte" von einem Konzept, matched muss weiterhin
  // >= missed sein, also bei 0 von 1 weiterhin nicht_verstanden).
  const majorityMatched = matched.length > 0 && matched.length >= missed.length;

  let verbClusterMatched: boolean | null = null;
  if (accepted.verb_cluster) {
    const forms = clusters[accepted.verb_cluster] ?? [];
    verbClusterMatched = clusterMatches(userTokens, userTextConcat, forms);
  }

  let tier: Tier = 'nicht_verstanden';
  if (survived) {
    tier = verbClusterMatched === false ? 'ueberlebt' : 'richtig';
  } else if (majorityMatched) {
    tier = 'ueberlebt';
  }

  // Rausch-Pruefung (2026-08-08, echter Nutzerfall): "Quisiera pedir algo"
  // wurde als "kisi e ra pedira algoh" transkribiert - 3 von 5 erkannten
  // Woertern ("kisi","e","ra") haben NICHTS mit dem Zielsatz zu tun, nur
  // "pedira"/"algoh" lagen zufaellig nah genug an "pedir"/"algo", um die
  // normale Toleranz zu triggern. Wurde trotzdem als "richtig" gewertet,
  // weil die Pflicht-Konzepte rein technisch erfuellt waren - obwohl der
  // Grossteil der Aeusserung reines Kauderwelsch war. Zusaetzliche, vom
  // Konzept-Matching UNABHAENGIGE Pruefung: wie viele der erkannten Woerter
  // haben ueberhaupt einen erkennbaren Bezug zum tatsaechlichen Zielsatz
  // (nicht nur zu den Pflicht-Konzepten - "quisiera" z.B. ist kein
  // Pflicht-Konzept, aber ein legitimer Teil des Zielsatzes, zaehlt also
  // nicht als Rauschen)? Ist die Mehrheit der erkannten Woerter reines
  // Rauschen, wird "richtig" auf "ueberlebt" abgestuft (nie strenger als
  // das - die eigentliche Konzept-Pruefung oben bleibt die Grundlage, das
  // hier ist nur eine zusaetzliche Bremse gegen Zufallstreffer). Nur aktiv,
  // wenn targetText mitgegeben wurde (optional, siehe Aufrufer).
  if (tier === 'richtig' && targetText) {
    let unexplainedRatio = 0;

    if (hatCJK(targetText)) {
      // Chinesisch hat keine Woerter zum Zaehlen - also je ZEICHEN pruefen.
      // Dieselbe Frage wie unten: wie viel von dem, was der Nutzer gesagt
      // hat, kommt im Zielsatz ueberhaupt vor?
      const zielZeichen = new Set([...cjkForm(targetText)]);
      const gesagt = [...cjkForm(userText)];
      const fremd = gesagt.filter((z) => !zielZeichen.has(z));
      unexplainedRatio = gesagt.length > 0 ? fremd.length / gesagt.length : 0;
    } else {
      const targetTokens = tokenize(targetText);
      const unexplained = userTokens.filter(
        (userToken) => !targetTokens.some((targetToken) => wordsAreClose(userToken, targetToken)),
      );
      unexplainedRatio = userTokens.length > 0 ? unexplained.length / userTokens.length : 0;
    }

    if (unexplainedRatio > 0.5) {
      tier = 'ueberlebt';
    }
  }

  return { tier, passed: tier !== 'nicht_verstanden', matched, missed, verbClusterMatched };
}
