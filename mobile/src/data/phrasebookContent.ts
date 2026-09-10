import { supabase } from '../lib/supabase';
import { cachedFetch } from '../lib/offlineCache';
import { AcceptedConcepts } from '../features/evaluation/evaluateConcepts';
import { getLanguage } from './languages';
import { WordType } from '../theme/tokens';

/** Ein Wort-Tag aus der `word_tags`-Spalte, siehe TaggedTokens in components/ColoredTokens.tsx. */
export type WordTag = { w: string; c: WordType | null };

// Laedt echte Uebungssaetze aus Supabase (phrasebook_master fuer Deutsch,
// schwedisch_phrasebook fuer Schwedisch) statt der Platzhalter aus
// mockExercise.ts. Beide Tabellen haben eine leicht andere Spalte fuer den
// eigentlichen Satztext: phrasebook_master nutzt `german` direkt (Deutsch
// IST hier die Zielsprache), schwedisch_phrasebook nutzt `target_text`
// (Schwedisch) mit `german` nur als Uebersetzungshilfe.
//
// Verb-Cluster-Speicherort unterscheidet sich ebenfalls zwischen den
// Tabellen: bei phrasebook_master steckt er verschachtelt in
// accepted_concepts.verb_cluster, bei schwedisch_phrasebook ist es eine
// EIGENE Spalte `verb_cluster` (2026-08-06 befuellt, siehe
// Sprachlisten/schwedisch_clusters_master.py). Wird hier beim Laden in
// accepted_concepts.verb_cluster gemerged, damit evaluateConcepts() nicht
// zwischen den beiden Schemas unterscheiden muss.

export type ExerciseSentence = {
  id: number;
  text: string;
  germanGloss: string | null; // nur bei Nicht-Deutsch-Zielsprachen gesetzt
  scenario: string;
  category: string;
  accepted_concepts: AcceptedConcepts;
  /**
   * Vorgerenderte Aufnahme des Satzes, falls vorhanden.
   *
   * Stand 2026-08-21 ueberall LEER: `phrasebook_master` hat gar keine
   * Audio-Spalte, `schwedisch_phrasebook` hat `audio_url`, aber 0 von 189
   * Zeilen sind gefuellt (ElevenLabs-Vertonung ist zurueckgestellt, siehe
   * CLAUDE.md). Das Feld wird trotzdem durchgereicht, damit die Wiedergabe
   * von selbst umschaltet, sobald aufgenommen wurde - `speakSentence`
   * bevorzugt die Datei und faellt sonst auf die Systemstimme zurueck.
   */
  audioUrl: string | null;
  /**
   * Lautschrift - gesetzt bei Sprachen mit eigener Schrift (Chinesisch:
   * Pinyin, Russisch: Transliteration), sonst `null`.
   *
   * Wo sie da ist, ist DAS der Lerntext; `text` traegt die Schrift, die
   * passiv mitlaeuft (TTS braucht sie, und Speechmatics gibt fuer Mandarin
   * Zeichen zurueck). Siehe CLAUDE.md, "Gelernt wird ueber PINYIN".
   *
   * Heisst weiterhin `pinyin`, obwohl seit 2026-09-03 auch Russisch sie
   * fuellt: die Anzeige-Ebene nennt sie ohnehin neutral `phonetic`
   * (cheatsheetContent.ts), und ein Umbenennen haette den chinesischen
   * Kurs-Code mitgerissen, wo `pinyin` sachlich richtig ist. WELCHE
   * DB-Spalte gelesen wird, entscheidet `Language.lautschriftSpalte`.
   */
  pinyin: string | null;
  /**
   * true = nur im Survival-Nachschlagewerk, nie im Lernpfad.
   *
   * Fuer Saetze, die man sofort und unter Stress braucht, statt sie ueber
   * Wochen zu wiederholen ("Bitte rufen Sie die Polizei"). Sie duerfen
   * deshalb auch Vokabeln benutzen, die der Kurs nicht lehrt.
   */
  lookupOnly: boolean;
  /**
   * null = fuer alle. Sonst 'frauen' / 'maenner': zeigt die Variante nur,
   * wenn der Nutzer im Onboarding angegeben hat, wen er ansprechen koennen
   * will (OnboardingState.addressing).
   */
  addressing: string | null;
  /**
   * Kurzer deutscher Hinweis, warum die Aeusserung in der Zielkultur anders
   * funktioniert als bei uns - z.B. dass „du bist schlank" in China ein
   * Kompliment ist.
   *
   * Wo dieser Hinweis steht, ist der Satz kulturspezifisch. Deshalb gibt es
   * KEIN zusaetzliches Kennzeichen dafuer: ein zweites Feld koennte dem
   * ersten nur widersprechen. Wer die Kategorie spaeter in eine andere
   * Sprache uebertraegt, sieht hier, was sich nicht mechanisch uebersetzen
   * laesst.
   */
  cultureNote: string | null;
  /**
   * Wort-fuer-Wort-Wortart, in Lesereihenfolge - null bei noch nicht
   * getaggten Saetzen (die grosse Mehrheit, siehe
   * Sprachlisten/uebersetzen/pruefe_wortarten.py fuer den Stand). Ein Satz
   * ohne Tags rendert einfach ungefaerbt weiter, siehe TaggedTokens.
   */
  wordTags: WordTag[] | null;
};

// categoryIds: explizite Liste statt eines "alle"-Sentinels, der frueher
// den Filter komplett wegliess - das haette (fuer den SRS-Pool, siehe
// srsEngine.ts) auch Saetze aus NICHT gekauften Kategorien mitgeladen.
// Aufrufer muessen jetzt bewusst die passende Liste uebergeben (z.B. eine
// einzelne Kategorie fuer S2, oder alle gekauften + "grundwortschatz" fuer
// den SRS-Pool von S5) - siehe CLAUDE.md "EIN gemeinsamer Wiederholungs-Pool
// ... ueber ALLE freigeschalteten Kategorien".
//
// Offline-Cache (2026-08-07): Netzwerk zuerst, bei Fehler automatisch der
// zuletzt geladene Stand aus AsyncStorage (siehe lib/offlineCache.ts) -
// wichtig fuer die Zielgruppe (Backpacker mit wackeligem Auslandsdatentarif,
// siehe CLAUDE.md). `fromCache` im Rueckgabewert, damit der Screen ehrlich
// anzeigen kann, dass gerade der letzte gespeicherte Stand genutzt wird.
export async function loadExerciseSentences(
  languageId: string,
  categoryIds: string[]
): Promise<{ sentences: ExerciseSentence[]; fromCache: boolean }> {
  const lang = getLanguage(languageId);
  if (!lang.table) return { sentences: [], fromCache: false };

  const textColumn = lang.id === 'de' ? 'german' : 'target_text';
  // `audio_url` gibt es NUR in den Nicht-Deutsch-Tabellen - phrasebook_master
  // hat die Spalte nicht, ein Select darauf wuerde dort scheitern.
  // Ausgeschrieben statt aus Bausteinen zusammengesetzt: Supabase leitet den
  // Ergebnistyp AUS DIESEM STRING ab, und ein Template-Literal sprengt dabei
  // den Typpruefer ("union type too complex"). Etwas Wiederholung ist der
  // Preis dafuer, dass die Typen stimmen.
  // Die Lautschrift-Spalte heisst je Sprache anders (`pinyin` bei Chinesisch,
  // `lautschrift` bei Russisch) und fehlt bei den lateinisch schreibenden
  // Sprachen ganz - ein Select auf eine nicht vorhandene Spalte scheitert.
  // Welche es ist, steht in languages.ts, nicht hier: eine vierte Sprache mit
  // eigener Schrift soll keinen weiteren Zweig kosten.
  const columns =
    lang.id === 'de'
      ? 'id, german, scenario, category, accepted_concepts, lookup_only, addressing, culture_note, word_tags'
      : lang.lautschriftSpalte
        ? `id, target_text, ${lang.lautschriftSpalte}, german, scenario, category, accepted_concepts, lookup_only, addressing, culture_note, verb_cluster, audio_url, word_tags`
        : 'id, target_text, german, scenario, category, accepted_concepts, lookup_only, addressing, culture_note, verb_cluster, audio_url, word_tags';

  const cacheKey = `sentences:${lang.id}:${[...categoryIds].sort().join(',')}`;
  const { data: sentences, fromCache } = await cachedFetch(cacheKey, async () => {
    // `as string` auf dem Ergebnis: Supabase baut den Zeilentyp aus dem
    // Select-String zusammen, und bei zwoelf Spalten mal drei Sprachzweigen
    // gibt der Typpruefer auf ("union type too complex"). Der Zeilentyp
    // bringt uns hier ohnehin nichts - die Zuordnung unten laeuft ueber
    // `row: any`, weil die Spalten je Sprache verschieden heissen.
    let query = supabase.from(lang.table as string).select(columns as string);
    if (categoryIds.length > 0) {
      query = query.in('category', categoryIds);
    }
    const { data, error } = await query;
    if (error) throw error;

    return (data ?? []).map((row: any): ExerciseSentence => {
      const accepted_concepts: AcceptedConcepts = row.accepted_concepts;
      // Bei Nicht-Deutsch liegt der Cluster in einer eigenen Spalte statt
      // verschachtelt - hier vereinheitlichen (siehe Kommentar oben).
      if (lang.id !== 'de' && row.verb_cluster) {
        accepted_concepts.verb_cluster = row.verb_cluster;
      }
      return {
        id: row.id,
        text: row[textColumn],
        germanGloss: lang.id === 'de' ? null : row.german ?? null,
        scenario: row.scenario,
        category: row.category,
        accepted_concepts,
        audioUrl: row.audio_url ?? null,
        pinyin: (lang.lautschriftSpalte ? row[lang.lautschriftSpalte] : null) ?? null,
        lookupOnly: row.lookup_only === true,
        addressing: row.addressing ?? null,
        cultureNote: row.culture_note ?? null,
        wordTags: row.word_tags ?? null,
      };
    });
  });

  // Nachschlage-Saetze kommen UEBERALL mit (Nutzer-Entscheidung 2026-08-21).
  //
  // Kurz zuvor filterte diese Funktion sie aus jeder Uebung heraus - die
  // sichere Richtung, dachte ich: ein Satz wie "Bitte rufen Sie die Polizei"
  // muss niemand auswendig koennen. Simons Einwand schlaegt das: wer einen
  // Satz beim Lernen NIE sieht, kann ihn auch nicht merken, und genau das
  // soll man spaeter koennen (markieren -> landet in "Gespeicherte Saetze").
  //
  // `lookupOnly` bleibt als Angabe bestehen und traegt weiterhin zwei
  // Aufgaben: es macht Sicherheitssaetze im Survival auch bei GESPERRTER
  // Kategorie sichtbar (siehe cheatsheetContent.ts), und es kennzeichnet
  // Saetze, die bewusst Vokabeln ausserhalb des gelehrten Wortschatzes
  // benutzen duerfen.
  return { sentences, fromCache };
}

export async function loadAnswerClusters(): Promise<Record<string, string[]>> {
  const { data } = await cachedFetch('answer_clusters', async () => {
    const { data, error } = await supabase.from('answer_clusters').select('cluster_id, forms');
    if (error) throw error;
    const lookup: Record<string, string[]> = {};
    for (const row of data ?? []) {
      lookup[row.cluster_id] = row.forms as string[];
    }
    return lookup;
  });
  return data;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export { shuffle };

/**
 * Teil-Lösung fürs Hilfe-Muster (2026-08-26) - schneidet einen Text an
 * Wortgrenzen ab statt mitten im Wort, nach `anteil` (0..1) der Wörter,
 * mindestens eins. Von zwei Screens genutzt, mit bewusst unterschiedlichem
 * `anteil`: `SentenceReviewScreen.tsx`s Stufe 3 (0.4, Simons Vorgabe dort)
 * und `ExerciseScreen.tsx`s Hilfe-Knopf bei FSRS-`state` Learning/
 * Relearning (0.5, eigene, spätere Vorgabe - siehe Kommentar dort). EINE
 * Funktion statt zwei fast identischer Kopien, der Anteil bleibt pro
 * Aufrufer verschieden.
 */
export function hilfeText(text: string, anteil: number): string {
  const woerter = text.trim().split(/\s+/).filter(Boolean);
  const anzahl = Math.max(1, Math.ceil(woerter.length * anteil));
  return woerter.slice(0, anzahl).join(' ');
}
