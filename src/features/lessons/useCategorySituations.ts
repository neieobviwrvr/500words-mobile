import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { loadExerciseSentences } from '../../data/phrasebookContent';
import { getLanguage } from '../../data/languages';
import { CATEGORIES, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { cardKey, loadAllCards } from '../srs/srsStorage';

// Situationen pro Kategorie fuer den Lektionen-Screen.
//
// Unterschied zu `useUnlockedProgress` (S1): der laedt NUR freigeschaltete
// Kategorien, weil er einen Fortschritt daraus bildet. Hier werden bewusst
// ALLE Kategorien geladen - der Lektionen-Screen ist ein Katalog und soll
// auch bei gesperrten Kategorien zeigen, welche Situationen darin stecken.
// Genau so macht es die Vorlage: gesperrte Lektionen tragen ihren Namen und
// ein Schloss, statt sich zu verstecken.
//
// "Situation" ist der `scenario`-Wert aus der Datenbank. Zum erwartbaren
// Ergebnis (Stand 2026-08-18): nur `travel_transportation` (2) und
// `grundwortschatz` (6) haben mehrere; acht Kategorien haben genau eine, vier
// haben ueberhaupt keine Saetze. Der Screen macht diese Luecke sichtbar -
// das ist gewollt, nicht kaputt.

export type Situation = {
  scenario: string;
  total: number;
  /** Saetze mit FSRS-Zustand, also mindestens einmal bewertet. */
  seen: number;
};

export type CategorySituations = {
  loading: boolean;
  /** Kategorie-ID -> Situationen, absteigend nach Satzanzahl. */
  byCategory: Record<string, Situation[]>;
  /**
   * Kategorien nach zuletzt gelernt, juengste zuerst - aus dem `last_review`
   * der Karten. Leer, solange nichts geuebt wurde.
   *
   * Bewusst HIER und nicht in `useUnlockedProgress`: der laedt nur die
   * freigeschalteten Kategorien, weshalb dort jede andere Kategorie nie
   * gewinnen konnte - "Du bist hier" blieb dann auf dem Grundwortschatz
   * stehen, obwohl anderswo gelernt wurde. Dieser Hook sieht alle.
   *
   * Eine Liste statt nur der einen juengsten, weil der Aufrufer sie
   * verwerfen koennen muss: in einer gesperrten Kategorie laesst sich nicht
   * weiterlernen, "Du bist hier" soll dort also nicht stehen. Mit der Liste
   * faellt S1 dann auf die naechstjuengere zurueck statt ganz an den Anfang.
   * Nicht theoretisch - im Abo lassen sich Kategorien abwaehlen.
   */
  recentCategoryIds: string[];
  offline: boolean;
};

const EMPTY: CategorySituations = {
  loading: true,
  byCategory: {},
  recentCategoryIds: [],
  offline: false,
};

export function useCategorySituations(languageId: string): CategorySituations {
  const [state, setState] = useState<CategorySituations>(EMPTY);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      (async () => {
        const lang = getLanguage(languageId);
        if (!lang.table) {
          if (!cancelled) setState({ ...EMPTY, loading: false });
          return;
        }

        const allIds = [GRUNDWORTSCHATZ_ID, ...CATEGORIES.map((c) => c.id)];

        try {
          const [{ sentences, fromCache }, cards] = await Promise.all([
            loadExerciseSentences(languageId, allIds),
            loadAllCards(),
          ]);
          if (cancelled) return;

          const byCategory: Record<string, Situation[]> = {};
          const index: Record<string, Record<string, Situation>> = {};
          // Kategorie -> juengste Bewertung darin.
          const lastReviewPerCategory: Record<string, number> = {};

          for (const sentence of sentences) {
            const perCat = (index[sentence.category] ??= {});
            const sit = (perCat[sentence.scenario] ??= {
              scenario: sentence.scenario,
              total: 0,
              seen: 0,
            });
            sit.total += 1;
            const card = cards[cardKey(languageId, lang.table as string, sentence.id)];
            if (card) {
              sit.seen += 1;
              // Karten ohne `last_review` wurden angelegt, aber nie
              // beantwortet - die zaehlen hier nicht mit.
              const at = card.last_review ? new Date(card.last_review).getTime() : 0;
              if (at > (lastReviewPerCategory[sentence.category] ?? 0)) {
                lastReviewPerCategory[sentence.category] = at;
              }
            }
          }

          for (const [categoryId, perScenario] of Object.entries(index)) {
            byCategory[categoryId] = Object.values(perScenario).sort((a, b) => b.total - a.total);
          }

          const recentCategoryIds = Object.entries(lastReviewPerCategory)
            .sort((a, b) => b[1] - a[1])
            .map(([categoryId]) => categoryId);

          setState({ loading: false, byCategory, recentCategoryIds, offline: fromCache });
        } catch {
          // Ein leerer Katalog ist besser als ein Screen, der abstuerzt - der
          // Nutzer sieht dann die Kategorien ohne Situationen.
          if (!cancelled) setState({ ...EMPTY, loading: false });
        }
      })();

      return () => {
        cancelled = true;
      };
    }, [languageId])
  );

  return state;
}
