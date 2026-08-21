import { CATEGORIES, CATEGORY_BY_ID } from './categories';
import { SCENARIO_LABELS } from './scenarios';
import { ExerciseSentence, loadExerciseSentences } from './phrasebookContent';

// S6 Cheat-Sheet-Survival - seit 2026-08-07 auf echtem Supabase-Content
// statt der fruehren Platzhalter-Struktur (1 Beispielsatz + 5 Fake-Karten
// pro Thema). Nutzer-Anforderung: Saetze aus allen gekauften Kategorien
// sollen dauerhaft offline einsehbar sein UND per Freitextsuche
// (z.B. "Arzt suchen") auffindbar sein - beides jetzt umgesetzt.

export type Phrase = {
  id: string; // eindeutiger Schluessel: sprache:tabelle:satzId (kollisionsfrei ueber Sprachen hinweg)
  context: string; // Kategorie- oder Szenario-Label fuer die Anzeige
  text: string; // Zielsprachen-Satz
  gloss: string | null; // deutsche Uebersetzung, nur gesetzt wenn Zielsprache != Deutsch
  placeholder: boolean; // true nur bei den (noch) leeren Kategorien (siehe unten)
  /** Vorgerenderte Aufnahme, falls vorhanden - heute ueberall leer. */
  audioUrl?: string | null;
  /**
   * Lautschrift unter dem Satz (fuer Chinesisch das Pinyin).
   *
   * Noch nirgends gefuellt: keine Phrasebook-Tabelle hat eine
   * Umschrift-Spalte, und fuer Chinesisch gibt es ueberhaupt kein
   * Phrasebook. Die Zeile erscheint nur, wenn wirklich etwas da ist.
   */
  phonetic?: string | null;
};

/**
 * Aus welcher Sprache stammt ein gespeicherter Satz?
 *
 * Die ID ist `sprache:tabelle:satzId` - die Sprache laesst sich also
 * zurueckgewinnen. Gebraucht bei den Favoriten: die zeigen Saetze aus ALLEN
 * Sprachen, in denen der Nutzer je etwas gemerkt hat. Ohne diese Angabe
 * bekaeme ein schwedischer Satz die deutsche Stimme vorgelesen (echter
 * Fehler, gefunden 2026-08-21).
 */
export function phraseLanguageId(phraseIdValue: string): string {
  return phraseIdValue.split(':')[0] || 'de';
}

export function phraseId(languageId: string, table: string, sentenceId: number): string {
  return `${languageId}:${table}:${sentenceId}`;
}

export function toPhrase(languageId: string, table: string, context: string, s: ExerciseSentence): Phrase {
  return {
    id: phraseId(languageId, table, s.id),
    context,
    text: s.text,
    gloss: s.germanGloss,
    placeholder: false,
    audioUrl: s.audioUrl,
  };
}

// Anzeigenamen kommen aus data/scenarios.ts - EINE Quelle fuer alle
// Screens. Hier stand bis 2026-08-21 eine zweite, eigene Liste; sie kannte
// die neuen Club-Situationen nicht und widersprach der anderen bei zwoelf
// Eintraegen ("Wegbeschreibung" gegen "Nach dem Weg fragen") - Survival
// und Lektionen-Screen nannten dieselbe Situation verschieden.

export type CheatsheetScenarioGroup = { key: string; label: string; sentences: ExerciseSentence[] };

export type CheatsheetCategoryGroup = {
  categoryId: string;
  title: string;
  // Alle Situationen der Kategorie, auch wenn es nur eine ist - sie sind die
  // waehlbaren Marken fuer die Suche. Leer heisst: die Kategorie hat
  // ueberhaupt keine Saetze.
  scenarios: CheatsheetScenarioGroup[];
  allSentences: ExerciseSentence[];
};

export async function loadCheatsheetGroups(
  languageId: string,
  purchasedCategoryIds: string[]
): Promise<{ groups: CheatsheetCategoryGroup[]; fromCache: boolean }> {
  // Grundwortschatz ZUERST (Nutzer-Entscheidung 2026-08-21): er ist die
  // Grundlage und fuer jeden freigeschaltet, gehoert also nach oben und
  // nicht ans Ende hinter die gekauften Kategorien.
  const freigeschaltet = ['grundwortschatz', ...purchasedCategoryIds];

  // ALLE Kategorien laden, auch die gesperrten - und zwar einschliesslich
  // der Nachschlage-Saetze (2026-08-21, Nutzer-Entscheidung "Survival
  // immer").
  //
  // Grund: die Sicherheitssaetze ("Bitte rufen Sie die Polizei", "Tu so, als
  // wuerden wir uns kennen") liegen in Kaufkategorien. Waeren sie erst nach
  // dem Kauf sichtbar, fehlten sie genau in dem Moment, fuer den sie
  // gedacht sind. Aus einer GESPERRTEN Kategorie kommen deshalb nur die
  // Nachschlage-Saetze durch, der Rest bleibt hinter dem Kauf - nebenbei
  // ein ehrlicher Werbeeffekt: man sieht, was die Kategorie kann.
  const alleIds = CATEGORIES.map((c) => c.id);
  const categoryIds = [
    'grundwortschatz',
    ...purchasedCategoryIds,
    ...alleIds.filter((id) => !freigeschaltet.includes(id)),
  ];
  const { sentences, fromCache } = await loadExerciseSentences(languageId, categoryIds, {
    mitNachschlage: true,
  });

  const byCategory = new Map<string, ExerciseSentence[]>();
  for (const s of sentences) {
    const offen = freigeschaltet.includes(s.category);
    if (!offen && !s.lookupOnly) continue;
    if (!byCategory.has(s.category)) byCategory.set(s.category, []);
    byCategory.get(s.category)!.push(s);
  }

  // Gesperrte Kategorien ohne einen einzigen Nachschlage-Satz tauchen gar
  // nicht auf - eine leere Ueberschrift waere nur Rauschen.
  const sichtbar = categoryIds.filter(
    (id) => freigeschaltet.includes(id) || (byCategory.get(id)?.length ?? 0) > 0,
  );

  const groups: CheatsheetCategoryGroup[] = sichtbar.map((catId) => {
    const catSentences = byCategory.get(catId) ?? [];
    const title = catId === 'grundwortschatz' ? 'Grundwortschatz' : (CATEGORY_BY_ID[catId]?.name ?? catId);
    const distinctScenarios = Array.from(new Set(catSentences.map((s) => s.scenario)));
    // ALLE Situationen auflisten, auch wenn es nur eine gibt
    // (Nutzer-Entscheidung 2026-08-21). Frueher wurden einzelne Situationen
    // unterdrueckt, um keine redundante Box zu erzeugen - dadurch hatten
    // diese Kategorien aber gar nichts zum Auswaehlen und die Suche kam nie
    // an ihre Saetze heran.
    const scenarios: CheatsheetScenarioGroup[] = distinctScenarios.map((sc) => ({
      key: sc,
      label: SCENARIO_LABELS[sc] ?? sc,
      sentences: catSentences.filter((s) => s.scenario === sc),
    }));
    return { categoryId: catId, title, scenarios, allSentences: catSentences };
  });

  return { groups, fromCache };
}

// Freitextsuche (z.B. "Arzt suchen", "Leute ansprechen") - kein Server/KI
// noetig (siehe CLAUDE.md "keine Laufzeitkosten"), reines Token-Matching:
// JEDES Token des Suchbegriffs wird einzeln gegen Satztext/Uebersetzung/
// Szenario/Kategorie geprueft (ODER-Verknuepfung zwischen Treffern,
// sortiert nach Anzahl passender Tokens) - bewusst grosszuegig statt
// strikt, weil es dafuer noch keine dedizierten Such-Tags pro Satz gibt
// (siehe CLAUDE.md-Backlog "S6-Suchfeld: braucht eigentlich einen
// abgleichbaren Such-/Tag-Text pro Satz" - das hier ist die MVP-Variante
// ohne neue Datenbank-Spalte).
export function searchCheatsheetSentences(groups: CheatsheetCategoryGroup[], query: string): ExerciseSentence[] {
  const tokens = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  if (tokens.length === 0) return [];

  const scored: { sentence: ExerciseSentence; score: number }[] = [];
  for (const group of groups) {
    for (const s of group.allSentences) {
      const haystack = [s.text, s.germanGloss ?? '', s.scenario, s.category].join(' ').toLowerCase();
      const score = tokens.filter((t) => haystack.includes(t)).length;
      if (score > 0) scored.push({ sentence: s, score });
    }
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.sentence);
}
