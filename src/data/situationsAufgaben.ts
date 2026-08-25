import { supabase } from '../lib/supabase';
import { cachedFetch } from '../lib/offlineCache';
import { loadVocabWords } from './vocabContent';

// "Situations-Auswahl" (2026-08-24, Simons Vorlage) - dritter Rundentyp fuer
// Woerter-Wiederholung: eine Alltagssituation als Frage, mehrere Woerter zur
// Auswahl, das passende vervollstaendigt einen echten Satz.
//
// KEIN NEU GESCHRIEBENER CONTENT (Simons ausdrueckliche Vorgabe: "basierend
// und ausschliesslich auf den Saetzen die wir ohnehin in unseren Wortlisten
// gespeichert haben"). Alles hier wird aus bereits vorhandenen Saetzen
// ABGELEITET, nichts wird von Hand neu formuliert:
//
//   - Die Frage ist die deutsche Bedeutung des Satzes, in einen generischen
//     Rahmen gegossen ("Wie sagst du: ..."), NICHT individuell getextet.
//   - Das richtige Wort UND drei falsche Optionen kommen direkt aus
//     `chinesisch_vocab`, geladen ueber dasselbe `loadVocabWords()` wie das
//     Zuordnungsspiel - dieselbe Wortart-Herleitung, derselbe Offline-Cache,
//     kein zweiter Weg an dieselben Daten.
//   - Der Luecken-Satz kommt aus `chinesisch_phrasebook.accepted_concepts`:
//     jedes `required`-Konzept traegt sein Hanzi als `synonyms` - genau die
//     Zuordnung "dieser Satz braucht dieses Wort", die frueher fuer die
//     Sprachbewertung gebaut wurde (siehe evaluateConcepts.ts) und hier
//     ein zweites Mal nuetzlich ist.
//
// GENERISCH nach Wortart (Simons zweiter Teil: "auch fuer Nomen und die
// anderen Wortkategorien") - eine einzige Funktion mit `wordClass` als
// Parameter statt einer Kopie pro Wortart. Getestet (Python-Prototyp vor dem
// Bauen): 739 baubare Aufgaben ueber alle Wortarten, davon 94 verschiedene
// Verben, 135 Nomen, 91 "Sonstiges" - jeweils mit mindestens einem echten
// Satz. 26 Saetze scheitern am Luecken-Zuschnitt (Pinyin des Worts taucht
// nicht identisch im Satz-Pinyin auf, meist wegen Lautwandel an der
// Wortgrenze) und werden übersprungen statt falsch angezeigt.
//
// NUR CHINESISCH heute: `accepted_concepts.synonyms` sind dort einzelne
// Hanzi, exakt matchbar. Bei Schwedisch/Franzoesisch sind es oft mehrwortige
// Phrasen in Kleinschreibung - dieselbe Idee liesse sich uebertragen, ist
// hier aber noch nicht gebaut.

export type VokabelOption = { hanzi: string; pinyin: string; german: string };

export type SituationsAufgabe = {
  id: string;
  frage: string;
  frameVorher: string;
  frameNachher: string;
  richtig: VokabelOption;
  optionen: VokabelOption[];
};

type PhraseZeile = { pinyin: string | null; german: string; accepted_concepts: any };

function mischen<T>(arr: T[]): T[] {
  const kopie = [...arr];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

export async function ladeSituationsAufgaben(
  languageId: string,
  wordClass: string
): Promise<{ aufgaben: SituationsAufgabe[]; fromCache: boolean }> {
  if (languageId !== 'zh') return { aufgaben: [], fromCache: false };

  const [{ words: vocab }, { data: phraseRows, fromCache }] = await Promise.all([
    loadVocabWords('zh'),
    cachedFetch('situationsaufgaben-saetze:zh', async () => {
      const { data, error } = await supabase
        .from('chinesisch_phrasebook')
        .select('pinyin, german, accepted_concepts');
      if (error) throw error;
      return (data ?? []) as PhraseZeile[];
    }),
  ]);

  const vokabelByHanzi = new Map(vocab.map((v) => [v.hanzi ?? '', v]));
  const wortartPool = vocab
    .filter((v) => v.wordClass === wordClass)
    .map((v): VokabelOption => ({ hanzi: v.hanzi ?? '', pinyin: v.word, german: v.german }));

  const aufgaben: SituationsAufgabe[] = [];
  let laufendeNr = 0;
  for (const p of phraseRows) {
    const required = p.accepted_concepts?.required ?? [];
    for (const konzept of required) {
      for (const hz of konzept.synonyms ?? []) {
        const wort = vokabelByHanzi.get(hz);
        if (!wort || wort.wordClass !== wordClass || !wort.hanzi) continue;
        if (!p.pinyin || !p.pinyin.includes(wort.word)) continue; // Luecke nicht sauber schneidbar

        const idx = p.pinyin.indexOf(wort.word);
        const richtig: VokabelOption = { hanzi: wort.hanzi, pinyin: wort.word, german: wort.german };
        const ablenker = mischen(wortartPool.filter((v) => v.hanzi !== wort.hanzi)).slice(0, 3);
        if (ablenker.length < 3) continue; // zu wenig Ablenker dieser Wortart - kein 4er-MC moeglich

        aufgaben.push({
          id: `${laufendeNr++}-${wort.hanzi}`,
          frage: `Wie sagst du: „${p.german}"?`,
          frameVorher: p.pinyin.slice(0, idx).trim(),
          frameNachher: p.pinyin.slice(idx + wort.word.length).trim(),
          richtig,
          optionen: mischen([richtig, ...ablenker]),
        });
      }
    }
  }

  return { aufgaben, fromCache };
}
