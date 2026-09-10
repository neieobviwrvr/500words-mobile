import { useEffect, useState } from 'react';
import { CHINESE_COURSE } from '../../data/chineseCourse';
import { CATEGORY_VOCAB, CategoryWord } from '../../data/categoryVocab';
import { loadExerciseSentences } from '../../data/phrasebookContent';

// Die Wortliste einer Kategorie (2026-08-21).
//
// ALLE Woerter, die in den Saetzen der Kategorie vorkommen - mit Pinyin und
// Uebersetzung. Nutzer-Vorgabe: nicht nach "kennt er schon" filtern, denn wir
// wissen nicht, ob jemand den gefuehrten Kurs ueberhaupt angefasst hat oder
// direkt in die Saetze gesprungen ist.
//
// Auch NICHT nach Haeufigkeit filtern, obwohl das naheliegt: 干杯 ist das
// praegendste Wort der Kategorie und kommt in genau EINEM Satz vor - weil es
// selbst ein ganzer Satz ist. Haeufigkeit misst, wie oft ein Wort als
// Baustein dient, nicht wie wichtig es ist.
//
// **Nur fuer Chinesisch.** Die Zerlegung braucht eine Wortliste, gegen die
// sie abgleichen kann; fuer Sprachen mit Leerzeichen kaeme dabei nur eine
// Sammlung gebeugter Formen heraus ("brauche", "einen"), was als Wortliste
// wenig taugt. Andere Sprachen bekommen deshalb eine ehrliche Meldung.

export type VokabelEintrag = CategoryWord & {
  /** true = bringt die Kategorie selbst mit, steht in keiner Kurslektion. */
  neu: boolean;
  /** In wie vielen Saetzen der Kategorie das Wort vorkommt. */
  anzahl: number;
  /** Fuer die Reihenfolge und die Zwischenueberschriften. */
  gruppe: Gruppe;
};

/**
 * Reihenfolge nach Wichtigkeit (Nutzer-Vorgabe 2026-08-21): erst Personen,
 * dann die tragenden Verben, dann die uebrigen Inhaltswoerter, zuletzt die
 * Grammatik. Das bildet ab, wie ein Satz entsteht - wer, tut was, womit.
 *
 * **Die Wortart steht nirgends in den Daten.** Weder chineseCourse.ts noch
 * chinesisch_vocab kennen Nomen/Verb/Adjektiv, es gibt nur die deutsche
 * Bedeutung. Sie wird deshalb abgeleitet: Personen ueber eine feste Liste,
 * Verben ueber den deutschen Infinitiv auf "-en". Das trifft meistens,
 * aber nicht immer - "Wasser" und "warten" trennt die Regel, "Essen" als
 * Nomen und "essen" als Verb nicht. Wer hier etwas falsch einsortiert
 * findet, traegt es unten in AUSNAHMEN ein.
 */
export type Gruppe = 'person' | 'verb' | 'inhalt' | 'grammatik';

export const GRUPPEN_TITEL: Record<Gruppe, string> = {
  person: 'Personen',
  verb: 'Verben',
  inhalt: 'Weitere Wörter',
  grammatik: 'Grammatik',
};

const PERSONEN = new Set([
  '我', '你', '他', '她', '我们', '你们', '他们', '人', '朋友', '男朋友', '女朋友',
  '学生', '老师', '同事', '先生', '谁', '男女朋友',
]);

/**
 * Grammatik-Woerter: Partikeln, Zaehlmarken, Verneinung, Zahlen. Sie kommen
 * in fast jedem Satz vor und stehen als Vokabel niemandem zur Verfuegung -
 * deshalb ans Ende statt dazwischen.
 */
const GRAMMATIK = new Set([
  '的', '吗', '了', '吧', '很', '不', '也', '个', '们', '太', '再', '还', '和',
  '在', '是', '这', '那', '这个', '那个', '这里', '什么', '一', '两', '四', '别',
  '就', '没', '有', '多少', '几', '哪里', '可以', '能', '会',
]);

/**
 * Was die Infinitiv-Regel falsch einsortiert.
 *
 * Sie prueft auf einen deutschen Infinitiv, faengt damit aber jedes Wort auf
 * "-n": "schoen", "duenn", "morgen", "zusammen", "draussen". Eine strengere
 * Regel wuerde dafuer echte Verben verlieren. Bei dieser Menge ist die
 * Ausnahmeliste ehrlicher als eine klueger klingende Heuristik - wer ein
 * falsch einsortiertes Wort findet, traegt es hier ein.
 */
const AUSNAHMEN: Record<string, Gruppe> = {
  // Von der "-n"-Regel faelschlich als Verb gelesen
  '漂亮': 'inhalt',   // schön
  '瘦': 'inhalt',     // dünn
  '好看': 'inhalt',   // schön anzusehen
  '明天': 'inhalt',   // morgen
  '一起': 'inhalt',   // zusammen
  '外面': 'inhalt',   // draußen
  '今天': 'inhalt',
  '晚上': 'inhalt',
  '声音': 'inhalt',   // "Stimme" - kein Verb
  '气质': 'inhalt',
  '头发': 'inhalt',
  '地方': 'inhalt',
  '护照': 'inhalt',
  '酒店': 'inhalt',
  '房间': 'inhalt',
  '眼睛': 'inhalt',
  '手机': 'inhalt',
  '微信': 'inhalt',
  '单身': 'inhalt',
  '兴趣': 'inhalt',
  '名字': 'inhalt',
};

function gruppeVon(w: CategoryWord): Gruppe {
  if (PERSONEN.has(w.hanzi)) return 'person';
  if (GRAMMATIK.has(w.hanzi)) return 'grammatik';
  if (AUSNAHMEN[w.hanzi]) return AUSNAHMEN[w.hanzi];
  // Deutscher Infinitiv: "trinken", "nach Hause gehen", "sich treffen, sehen".
  // Nur der ERSTE Bedeutungsteil zaehlt - "wollen, brauchen" ist ein Verb,
  // "Klasse, Haltung" nicht.
  const erste = w.de.split(/[,/(]/)[0].trim();
  const letztes = erste.split(' ').pop() ?? '';
  if (/[a-zäöüß]en$/.test(letztes) || /[a-zäöüß]n$/.test(letztes)) return 'verb';
  return 'inhalt';
}

const REIHENFOLGE: Gruppe[] = ['person', 'verb', 'inhalt', 'grammatik'];

export type Wortliste = {
  loading: boolean;
  woerter: VokabelEintrag[];
  /** Gesetzt, wenn es fuer diese Sprache keine Wortliste geben kann. */
  unavailable: string | null;
};

const SATZZEICHEN = new Set([...'。，！？、：；“”（）,.!?;:']);

/** Alle Kurswoerter als Nachschlagetabelle, einmal aufgebaut. */
function kurswoerter(): Map<string, CategoryWord> {
  const m = new Map<string, CategoryWord>();
  for (const modul of CHINESE_COURSE) {
    for (const lektion of modul.lessons) {
      for (const w of [...lektion.newFrameWords, ...lektion.slotGroups.flat(), ...(lektion.pronouns ?? [])]) {
        if (!m.has(w.hanzi)) m.set(w.hanzi, { hanzi: w.hanzi, pinyin: w.pinyin, de: w.de });
      }
    }
  }
  return m;
}

/**
 * Laengster Treffer, wie im Kurs-Generator: an jeder Stelle das laengste
 * bekannte Wort nehmen. Ohne das zerfiele 学生 in 学 + 生.
 */
function zerlege(text: string, bekannt: Map<string, CategoryWord>, maxLen: number): string[] {
  const out: string[] = [];
  let i = 0;
  while (i < text.length) {
    const z = text[i];
    if (SATZZEICHEN.has(z) || z.trim() === '') {
      i += 1;
      continue;
    }
    let gefunden = false;
    for (let len = Math.min(maxLen, text.length - i); len > 0; len -= 1) {
      const teil = text.slice(i, i + len);
      if (bekannt.has(teil)) {
        out.push(teil);
        i += len;
        gefunden = true;
        break;
      }
    }
    if (!gefunden) i += 1; // unbekanntes Zeichen: ueberspringen statt raten
  }
  return out;
}

export function useCategoryVocab(languageId: string, categoryId: string): Wortliste {
  const [state, setState] = useState<Wortliste>({ loading: true, woerter: [], unavailable: null });

  useEffect(() => {
    let abgebrochen = false;

    if (languageId !== 'zh') {
      setState({
        loading: false,
        woerter: [],
        unavailable: 'Die Wortliste gibt es bisher nur für Chinesisch.',
      });
      return;
    }

    (async () => {
      const eigene = CATEGORY_VOCAB[categoryId] ?? [];
      const bekannt = kurswoerter();
      for (const w of eigene) bekannt.set(w.hanzi, w);
      const maxLen = Math.max(...[...bekannt.keys()].map((k) => k.length));
      const eigeneSet = new Set(eigene.map((w) => w.hanzi));

      const { sentences } = await loadExerciseSentences(languageId, [categoryId]);
      if (abgebrochen) return;

      const zaehler = new Map<string, number>();
      for (const s of sentences) {
        // Je Satz nur EINMAL zaehlen - gesucht ist "in wie vielen Saetzen",
        // nicht "wie oft insgesamt".
        for (const w of new Set(zerlege(s.text, bekannt, maxLen))) {
          zaehler.set(w, (zaehler.get(w) ?? 0) + 1);
        }
      }

      const woerter: VokabelEintrag[] = [...zaehler.entries()]
        .map(([hanzi, anzahl]) => {
          const eintrag = bekannt.get(hanzi)!;
          return { ...eintrag, neu: eigeneSet.has(hanzi), anzahl, gruppe: gruppeVon(eintrag) };
        })
        .sort((a, b) => {
          const g = REIHENFOLGE.indexOf(a.gruppe) - REIHENFOLGE.indexOf(b.gruppe);
          if (g !== 0) return g;
          // INNERHALB einer Gruppe nach Haeufigkeit: ein Verb, das acht
          // Saetze traegt, ist das tragende. Hier ist Haeufigkeit ein gutes
          // Mass - anders als bei der Frage, welche Woerter ueberhaupt in
          // die Liste gehoeren (siehe 干杯 oben).
          if (a.anzahl !== b.anzahl) return b.anzahl - a.anzahl;
          return a.pinyin.localeCompare(b.pinyin);
        });

      setState({ loading: false, woerter, unavailable: null });
    })().catch(() => {
      if (!abgebrochen) {
        setState({ loading: false, woerter: [], unavailable: 'Die Wortliste ließ sich nicht laden.' });
      }
    });

    return () => {
      abgebrochen = true;
    };
  }, [languageId, categoryId]);

  return state;
}
