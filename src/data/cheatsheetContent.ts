import { CATEGORY_BY_ID } from './categories';
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
};

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
  };
}

// Anzeigenamen fuer die `scenario`-Spalte - nur bei Kategorien mit MEHREREN
// unterschiedlichen Szenarien sinnvoll als Unterauswahl (aktuell nur
// grundwortschatz und travel_transportation, siehe CategoryScenarioGroup
// unten - der Rest hat genau 1 Szenario pro Kategorie, redundant zum
// Kategorienamen selbst, deshalb dort keine Unterauswahl noetig).
const SCENARIO_LABELS: Record<string, string> = {
  begruessung: 'Begrüßung',
  vorstellung: 'Vorstellung',
  abschied: 'Verabschiedung',
  uhrzeit: 'Uhrzeit',
  termin: 'Termine',
  zahlen: 'Zahlen',
  hotel: 'Hotel',
  reisen: 'Reisen',
  wegbeschreibung: 'Wegbeschreibung',
  gesundheit: 'Gesundheit',
  restaurant: 'Restaurant',
  einkaufen: 'Einkaufen',
  smalltalk: 'Smalltalk',
  wohnen: 'Wohnen',
  uni: 'Uni',
  kultur: 'Kultur',
};

export type CheatsheetScenarioGroup = { key: string; label: string; sentences: ExerciseSentence[] };

export type CheatsheetCategoryGroup = {
  categoryId: string;
  title: string;
  // Nur gefuellt, wenn die Kategorie >1 unterschiedliche Szenarien hat -
  // sonst bleibt die Liste leer und die Kategorie wird als Ganzes gezeigt
  // (kein kuenstliches Aufsplitten in eine einzelne, redundante Box).
  scenarios: CheatsheetScenarioGroup[];
  allSentences: ExerciseSentence[];
};

export async function loadCheatsheetGroups(
  languageId: string,
  purchasedCategoryIds: string[]
): Promise<{ groups: CheatsheetCategoryGroup[]; fromCache: boolean }> {
  const categoryIds = [...purchasedCategoryIds, 'grundwortschatz'];
  const { sentences, fromCache } = await loadExerciseSentences(languageId, categoryIds);

  const byCategory = new Map<string, ExerciseSentence[]>();
  for (const s of sentences) {
    if (!byCategory.has(s.category)) byCategory.set(s.category, []);
    byCategory.get(s.category)!.push(s);
  }

  const groups: CheatsheetCategoryGroup[] = categoryIds.map((catId) => {
    const catSentences = byCategory.get(catId) ?? [];
    const title = catId === 'grundwortschatz' ? 'Grundwortschatz' : (CATEGORY_BY_ID[catId]?.name ?? catId);
    const distinctScenarios = Array.from(new Set(catSentences.map((s) => s.scenario)));
    const scenarios: CheatsheetScenarioGroup[] =
      distinctScenarios.length > 1
        ? distinctScenarios.map((sc) => ({
            key: sc,
            label: SCENARIO_LABELS[sc] ?? sc,
            sentences: catSentences.filter((s) => s.scenario === sc),
          }))
        : [];
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
