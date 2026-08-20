import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { loadExerciseSentences } from '../../data/phrasebookContent';
import { getLanguage } from '../../data/languages';
import { cardKey, loadAllCards } from '../srs/srsStorage';

// Echter Lernfortschritt ueber die freigeschalteten Inhalte.
//
// Bezugsgroesse ist bewusst NICHT die ganze Sprache, sondern Grundwortschatz
// plus gekaufte Kategorien (Entscheidung 2026-08-18) - der Balken soll
// beantworten "wie weit bin ich mit dem, was ich habe", nicht "wie viel vom
// Gesamtkatalog besitze ich".
//
// Als "angefangen" zaehlt ein Satz, sobald er einen FSRS-Zustand hat, also
// mindestens einmal bewertet wurde. Das ist die einzige Fortschrittsangabe,
// die heute ohne neues Tracking ehrlich zu haben ist: gelernt/nicht gelernt
// steht nirgends, aber jede beantwortete Karte hinterlaesst einen Zustand
// (siehe features/srs/srsStorage.ts).
//
// Nebeneffekt, der beim Testen nicht als Fehler durchgehen darf: ein Kauf
// vergroessert den Nenner, der Prozentwert faellt also nach einem Kauf. Das
// ist bei dieser Bezugsgroesse richtig so.
//
// Neu geladen wird bei jedem Betreten des Screens (`useFocusEffect`) - nach
// einer Uebung soll der Balken den neuen Stand zeigen und nicht den von vor
// der Session.

export type CategoryProgress = { total: number; seen: number; ratio: number };

export type UnlockedProgress = {
  loading: boolean;
  /** Ueber alle freigeschalteten Kategorien zusammen. */
  ratio: number;
  seen: number;
  total: number;
  byCategory: Record<string, CategoryProgress>;
  /**
   * Kategorie, in der zuletzt gelernt wurde - aus dem juengsten
   * `last_review` aller Karten. Null, solange nichts geuebt wurde.
   *
   * Kein neues Tracking noetig: FSRS schreibt den Zeitpunkt ohnehin bei
   * jeder Bewertung mit.
   */
  lastLearnedCategoryId: string | null;
  /** true, wenn gerade der letzte gespeicherte Stand statt frischer Daten laeuft. */
  offline: boolean;
};

const EMPTY: UnlockedProgress = {
  loading: true,
  ratio: 0,
  seen: 0,
  total: 0,
  byCategory: {},
  lastLearnedCategoryId: null,
  offline: false,
};

export function useUnlockedProgress(
  languageId: string,
  unlockedCategoryIds: string[]
): UnlockedProgress {
  const [state, setState] = useState<UnlockedProgress>(EMPTY);

  // Als String, damit der Effekt nicht bei jedem Render neu laeuft - ein
  // frisch gebautes Array ist bei jedem Durchlauf eine neue Referenz.
  const idsKey = [...unlockedCategoryIds].sort().join(',');

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      (async () => {
        const lang = getLanguage(languageId);
        const ids = idsKey ? idsKey.split(',') : [];

        // Sprachen ohne Tabelle (aktuell Franzoesisch) haben keinen Inhalt,
        // ueber den sich ein Fortschritt bilden liesse.
        if (!lang.table || ids.length === 0) {
          if (!cancelled) setState({ ...EMPTY, loading: false });
          return;
        }

        try {
          const [{ sentences, fromCache }, cards] = await Promise.all([
            loadExerciseSentences(languageId, ids),
            loadAllCards(),
          ]);
          if (cancelled) return;

          const byCategory: Record<string, CategoryProgress> = {};
          let seen = 0;
          let lastLearnedCategoryId: string | null = null;
          let lastReviewedAt = 0;

          for (const sentence of sentences) {
            const bucket = (byCategory[sentence.category] ??= { total: 0, seen: 0, ratio: 0 });
            bucket.total += 1;
            const card = cards[cardKey(languageId, lang.table as string, sentence.id)];
            if (card) {
              bucket.seen += 1;
              seen += 1;
              // Juengste Bewertung gewinnt. `last_review` fehlt bei Karten,
              // die anlegt, aber nie beantwortet wurden - dann zaehlt sie
              // hier nicht mit.
              const at = card.last_review ? new Date(card.last_review).getTime() : 0;
              if (at > lastReviewedAt) {
                lastReviewedAt = at;
                lastLearnedCategoryId = sentence.category;
              }
            }
          }
          for (const bucket of Object.values(byCategory)) {
            bucket.ratio = bucket.total > 0 ? bucket.seen / bucket.total : 0;
          }

          setState({
            loading: false,
            ratio: sentences.length > 0 ? seen / sentences.length : 0,
            seen,
            total: sentences.length,
            byCategory,
            lastLearnedCategoryId,
            offline: fromCache,
          });
        } catch {
          // Ein Fortschrittsbalken ist kein Grund, den Startscreen scheitern
          // zu lassen - im Zweifel steht er auf 0 und der Pfad bleibt nutzbar.
          if (!cancelled) setState({ ...EMPTY, loading: false });
        }
      })();

      return () => {
        cancelled = true;
      };
    }, [languageId, idsKey])
  );

  return state;
}
