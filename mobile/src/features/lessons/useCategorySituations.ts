import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { loadExerciseSentences } from '../../data/phrasebookContent';
import { getLanguage } from '../../data/languages';
import { CATEGORIES, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { cardKey, loadAllCards } from '../srs/srsStorage';
import { istGeliehen } from '../../data/geliehen';
import { situationsVergleich } from '../../data/situationsReihenfolge';

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
  /**
   * true = die Situation gehoert einer anderen Kategorie und wird hier nur
   * mit angezeigt (siehe data/geliehen.ts).
   *
   * Gebraucht fuer zwei Dinge: geliehene Karten stehen HINTEN in der Reihe,
   * und sie tragen einen eigenen, zur Kategorie passenden Namen. Sonst
   * beginnt jede Kategorie mit derselben Karte "Sich verstaendigen" - bei
   * Sprachen ohne eigenen Content ist das sogar die einzige, und dann sieht
   * jede Kategorie gleich aus.
   */
  geliehen: boolean;
  /**
   * Wie oft JEDER Satz dieser Situation mindestens beantwortet wurde - das
   * Minimum ueber die `reps` aller zugehoerigen FSRS-Karten (2026-09-26,
   * fuer den Start-Entwurf, siehe features/entwurf/).
   *
   * Das Minimum und nicht der Durchschnitt: "durchgelernt" heisst, dass
   * KEIN Satz mehr aussteht. Bei einem Mittelwert verstecken zehn leichte
   * Saetze einen, der nie drankam.
   *
   * **Nicht zu verwechseln mit Sitzungen:** gezaehlt werden Antworten je
   * Satz, egal woher sie kommen - aus der Situation selbst, aus dem
   * taeglichen Wiederholen oder aus dem Kategorie-Durchlauf. "2" heisst
   * also "jeder Satz hier wurde mindestens zweimal beantwortet", nicht
   * "zweimal am Stueck durchgespielt". Fuer eine Fortschrittsanzeige ist
   * das die ehrlichere Groesse, weil sie am INHALT haengt und nicht daran,
   * auf welchem Weg er drankam.
   *
   * 0, solange auch nur ein Satz noch keine Karte hat.
   */
  durchgaenge: number;
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
  /**
   * Zuletzt geuebte SITUATION, juengste zuerst - dieselbe Rechnung wie
   * `recentCategoryIds`, nur eine Ebene feiner. Der Startscreen zeigt damit
   * nicht nur die Kategorie, sondern die Stelle darin (Simons Wunsch
   * 2026-08-31: "wo man sich gerade befindet").
   */
  recentSituations: { categoryId: string; scenario: string }[];
  offline: boolean;
};

const EMPTY: CategorySituations = {
  loading: true,
  byCategory: {},
  recentCategoryIds: [],
  recentSituations: [],
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
          const lastReviewPerSituation: Record<string, number> = {};

          // Geliehene Situationen tauchen in BEIDEN Reihen auf - in ihrer
          // eigenen Kategorie und in der, die sie leiht. Derselbe Satz,
          // dieselbe Karte, zwei Wege dorthin (siehe data/geliehen.ts).
          const zielKategorien = (s: { category: string; scenario: string }) => [
            s.category,
            ...allIds.filter((id) => istGeliehen(id, s)),
          ];

          for (const sentence of sentences) {
          for (const zielKategorie of zielKategorien(sentence)) {
            const perCat = (index[zielKategorie] ??= {});
            const sit = (perCat[sentence.scenario] ??= {
              scenario: sentence.scenario,
              total: 0,
              seen: 0,
              geliehen: zielKategorie !== sentence.category,
              // Startet bei Unendlich, damit das Minimum ueber die Saetze
              // laufen kann - unten wird daraus eine Zahl.
              durchgaenge: Number.POSITIVE_INFINITY,
            });
            sit.total += 1;
            const card = cards[cardKey(languageId, lang.table as string, sentence.id)];
            // Ein Satz ohne Karte ist ein Satz mit null Antworten und zieht
            // das Minimum auf 0 - genau richtig, solange er aussteht.
            sit.durchgaenge = Math.min(sit.durchgaenge, card?.reps ?? 0);
            if (card) {
              sit.seen += 1;
              // Karten ohne `last_review` wurden angelegt, aber nie
              // beantwortet - die zaehlen hier nicht mit.
              const at = card.last_review ? new Date(card.last_review).getTime() : 0;
              if (at > (lastReviewPerCategory[zielKategorie] ?? 0)) {
                lastReviewPerCategory[zielKategorie] = at;
              }
              const sitKey = `${zielKategorie}:${sentence.scenario}`;
              if (at > (lastReviewPerSituation[sitKey] ?? 0)) {
                lastReviewPerSituation[sitKey] = at;
              }
            }
          }
          }

          for (const [categoryId, perScenario] of Object.entries(index)) {
            // Reihenfolge seit 2026-09-20 in situationsReihenfolge.ts, weil
            // die Satzliste dieselbe braucht - siehe `situationsVergleich`.
            byCategory[categoryId] = Object.values(perScenario)
              // Unendlich kann nur uebrigbleiben, wenn die Situation gar
              // keinen Satz hat - dann sind es null Durchgaenge.
              .map((sit) => ({
                ...sit,
                durchgaenge: Number.isFinite(sit.durchgaenge) ? sit.durchgaenge : 0,
              }))
              .sort(situationsVergleich<Situation>(categoryId));
          }

          const recentCategoryIds = Object.entries(lastReviewPerCategory)
            .sort((a, b) => b[1] - a[1])
            .map(([categoryId]) => categoryId);

          // Nur Eintraege mit echtem Zeitstempel: eine 0 hiesse "Karte
          // angelegt, nie beantwortet" und waere keine besuchte Stelle.
          const recentSituations = Object.entries(lastReviewPerSituation)
            .filter(([, at]) => at > 0)
            .sort((a, b) => b[1] - a[1])
            .map(([key]) => {
              const trenner = key.indexOf(':');
              return { categoryId: key.slice(0, trenner), scenario: key.slice(trenner + 1) };
            });

          setState({ loading: false, byCategory, recentCategoryIds, recentSituations, offline: fromCache });
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
