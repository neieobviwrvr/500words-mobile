import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { loadExerciseSentences } from '../../data/phrasebookContent';
import { loadVocabWords } from '../../data/vocabContent';
import { CATEGORIES, CATEGORY_BY_ID, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { getLanguage } from '../../data/languages';
import { LockscreenContent, useAppState } from '../../state/AppState';
import { currentPick, SLOT_HOURS } from './lockscreenRotation';

// Was gerade auf dem Sperrbildschirm stuende - fuer die Vorschau im Profil.
//
// Solange die Widget-Extension nicht existiert (sie braucht ein bezahltes
// Apple-Entwicklerkonto, siehe CLAUDE.md), ist diese Vorschau der einzige
// Ort, an dem die Einstellung sichtbar wirkt. Sobald das Widget kommt,
// benutzt es dieselbe Rechnung aus lockscreenRotation.ts - die Vorschau
// bleibt dann garantiert deckungsgleich mit dem Sperrbildschirm.
//
// Die WOERTER-Auswahl kann NICHT nach freigeschalteten Kategorien filtern:
// die Vokabeltabellen kennen nur Wortarten, keine Lernkategorien (siehe
// data/vocabContent.ts). Das ist inhaltlich kein Widerspruch - die 500
// Woerter sind der Grundwortschatz und damit fuer jeden freigeschaltet.

/** Wie oft die Vorschau nachrechnet - fuer den Countdown reicht das gut. */
const TICK_MS = 30000;

export type LockscreenItem = {
  /** Der Text in der Zielsprache - die grosse Zeile. */
  primary: string;
  /** Deutsche Bedeutung, falls die Zielsprache nicht Deutsch ist. */
  secondary: string | null;
  /** Herkunft: Kategorie beim Satz, Wortart beim Wort. */
  note: string | null;
};

export type LockscreenPick = {
  loading: boolean;
  kind: LockscreenContent;
  item: LockscreenItem | null;
  /** Groesse des Vorrats, aus dem gezogen wird. */
  poolSize: number;
  /** Zeitpunkt des naechsten Wechsels. */
  changesAt: number;
  /**
   * Warum gerade nichts angezeigt werden kann - im Klartext fuer die
   * Oberflaeche. `null`, wenn alles in Ordnung ist.
   */
  unavailable: string | null;
  offline: boolean;
};

export function useLockscreenPick(): LockscreenPick {
  const { targetLanguageId, purchased, lockscreenContent } = useAppState();
  const [pool, setPool] = useState<LockscreenItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);
  const [unavailable, setUnavailable] = useState<string | null>(null);
  const [now, setNow] = useState(() => Date.now());

  // Ein Takt fuer beides: den Countdown und den Wechsel selbst. Der Wechsel
  // faellt dadurch bis zu einen halben Takt spaet aus - fuer eine Vorschau
  // auf einen 5-Stunden-Rhythmus voellig ausreichend, und billiger als ein
  // eigener Zeitgeber auf die Sekunde genau.
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), TICK_MS);
    return () => clearInterval(timer);
  }, []);

  const unlockedIds = [
    GRUNDWORTSCHATZ_ID,
    ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id),
  ];
  const unlockedKey = unlockedIds.join(',');

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      const lang = getLanguage(targetLanguageId);

      (async () => {
        setLoading(true);
        try {
          if (lockscreenContent === 'woerter') {
            if (!lang.vocabTable) {
              if (!cancelled) {
                setPool([]);
                setUnavailable(`Für ${lang.label} gibt es noch keine Wortliste.`);
              }
              return;
            }
            const { words, fromCache } = await loadVocabWords(targetLanguageId);
            if (cancelled) return;
            setPool(
              words.map((w) => ({
                primary: w.word,
                secondary: w.german,
                // Genus gehoert beim Nomen untrennbar zum Wort - "en bil"
                // lernt man, nicht "bil".
                note: w.genus ? `${w.wordClass} · ${w.genus}` : w.wordClass,
              }))
            );
            setOffline(fromCache);
            setUnavailable(null);
            return;
          }

          if (!lang.table) {
            if (!cancelled) {
              setPool([]);
              setUnavailable(`Für ${lang.label} gibt es noch keine Sätze.`);
            }
            return;
          }
          const { sentences, fromCache } = await loadExerciseSentences(
            targetLanguageId,
            unlockedKey.split(',')
          );
          if (cancelled) return;
          setPool(
            sentences.map((s) => ({
              primary: s.text,
              secondary: s.germanGloss,
              note: CATEGORY_BY_ID[s.category]?.name ?? null,
            }))
          );
          setOffline(fromCache);
          setUnavailable(null);
        } catch {
          // Kein Netz und kein gespeicherter Stand - die Vorschau bleibt
          // leer statt den Screen scheitern zu lassen.
          if (!cancelled) {
            setPool([]);
            setUnavailable('Inhalte konnten nicht geladen werden.');
          }
        } finally {
          if (!cancelled) setLoading(false);
        }
      })();

      return () => {
        cancelled = true;
      };
    }, [targetLanguageId, unlockedKey, lockscreenContent])
  );

  const { item, changesAt } = currentPick(pool, now);

  return {
    loading,
    kind: lockscreenContent,
    item,
    poolSize: pool.length,
    changesAt,
    unavailable,
    offline,
  };
}

export { SLOT_HOURS };
