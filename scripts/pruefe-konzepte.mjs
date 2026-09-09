// Prueft, ob die Antwort-Bewertung in einer Sprache ueberhaupt funktioniert.
//
//   npm run pruefe:konzepte            (alle Sprachen mit Inhalt)
//   npm run pruefe:konzepte -- en sv   (nur diese)
//
// Warum ueberhaupt ein Test: die Dreistufigkeit (nicht_verstanden /
// ueberlebt / richtig) traegt Stufe 3 bei Saetzen UND Woertern, den
// FSRS-Anschluss und die Herausforderung "10 Saetze ohne Fehler". Ob sie
// wirklich drei Stufen liefert, haengt aber nicht am Code, sondern an DATEN
// (accepted_concepts + answer_clusters). Die kann man nur nachrechnen, nicht
// ansehen - eine Sprache ohne Cluster sieht im Code genauso aus wie eine mit.
//
// Laeuft gegen die echte Datenbank und den echten Bewerter aus
// evaluateConcepts.ts - KEIN Nachbau. Ein Nachbau wuerde mit der Zeit
// auseinanderlaufen und genau dann gruen bleiben, wenn die App falsch wertet.
//
// Entwicklerwerkzeug, laeuft nie auf dem Geraet: liest den Service-Key aus
// Sprachlisten/.env (nicht im Repo, siehe .gitignore).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluateConcepts } from '../src/features/evaluation/evaluateConcepts.ts';
import { bewerteWort } from '../src/features/evaluation/evaluateWord.ts';

const HIER = path.dirname(fileURLToPath(import.meta.url));
const ENV = path.join(HIER, '..', 'Sprachlisten', '.env');

// Zielsprache -> Tabelle.
//
// Deutsch ist NICHT ueber Stufe 3 erreichbar (es ist die Ausgangssprache,
// `germanGloss` ist dort null - siehe `kannAbfragen` in
// SentenceReviewScreen.tsx), steht hier aber trotzdem: im Speed-Run kann
// man Deutsch als Zielsprache lernen, und dann laeuft dieselbe Bewertung.
// Ohne diese Zeile aendert man `normalize()` fuer elf Sprachen und misst
// die zwoelfte nie.
//
// Zwei Eigenheiten von phrasebook_master, deshalb der Sonderfall unten:
// der Satztext steht in `german` statt `target_text`, und der Cluster liegt
// verschachtelt in `accepted_concepts` statt in einer eigenen Spalte.
const TABELLE = {
  de: 'phrasebook_master',
  sv: 'schwedisch_phrasebook',
  en: 'englisch_phrasebook',
  zh: 'chinesisch_phrasebook',
  es: 'spanisch_phrasebook',
  fr: 'franz_phrasebook',
  it: 'italienisch_phrasebook',
  no: 'norwegisch_phrasebook',
  ru: 'russisch_phrasebook',
  vi: 'vietnamesisch_phrasebook',
  pl: 'polnisch_phrasebook',
};

function liesEnv(name) {
  for (const zeile of fs.readFileSync(ENV, 'utf-8').split('\n')) {
    if (zeile.startsWith(name + '=')) return zeile.slice(name.length + 1).trim().replace(/^"|"$/g, '');
  }
  throw new Error(`${name} fehlt in ${ENV}`);
}

const URL_ = liesEnv('SUPABASE_URL');
const KEY = liesEnv('SUPABASE_SERVICE_ROLE_KEY');

async function rest(pfad) {
  // PostgREST liefert hoechstens 1000 Zeilen je Anfrage - blaettern, sonst
  // fehlen bei 584 Saetzen zwar keine, aber bei der naechsten Sprache schon.
  const aus = [];
  for (let off = 0; ; off += 1000) {
    const trenn = pfad.includes('?') ? '&' : '?';
    const r = await fetch(`${URL_}/rest/v1/${pfad}${trenn}limit=1000&offset=${off}`, {
      headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
    });
    if (!r.ok) throw new Error(`${r.status} ${await r.text()}`);
    const teil = await r.json();
    aus.push(...teil);
    if (teil.length < 1000) return aus;
  }
}

/** Genau die Vereinheitlichung, die loadExerciseSentences() auch macht. */
function konzepteVon(zeile) {
  const ac = zeile.accepted_concepts ?? { required: [], optional: [] };
  if (zeile.verb_cluster) ac.verb_cluster = zeile.verb_cluster;
  return ac;
}

/**
 * Welchen Cluster traegt diese Zeile?
 *
 * Die Zielsprachen haben dafuer eine eigene Spalte, `phrasebook_master` hat
 * ihn verschachtelt in `accepted_concepts`. Ohne diese eine Stelle zaehlt
 * der Bericht fuer Deutsch null Cluster, obwohl 60 Saetze einen haben.
 */
function clusterVon(zeile) {
  return zeile.verb_cluster ?? zeile.accepted_concepts?.verb_cluster ?? null;
}

const clusterZeilen = await rest('answer_clusters?select=cluster_id,forms');
const CLUSTER = Object.fromEntries(clusterZeilen.map((z) => [z.cluster_id, z.forms]));

// --vorschlag: gegen einen NOCH NICHT eingespielten Stand pruefen.
//
// `bauen.py spiel_ein <sprache>` legt im Probelauf eine Datei unter
// Sprachlisten/bewertung/vorschlag/ ab. Mit diesem Schalter wird sie hier
// ueber die Datenbankwerte gelegt - und zwar bevor irgendetwas geschrieben
// ist. Der Grund: `answer_clusters` ist live. Eine bereits ausgelieferte App
// laedt die Tabelle bei jedem Start neu, ein Einspielen aendert also sofort,
// wie sie bewertet. Erst pruefen, dann schreiben.
const VORSCHLAG = process.argv.includes('--vorschlag');
const vorschlagOrdner = path.join(HIER, '..', 'Sprachlisten', 'bewertung', 'vorschlag');

function ladeVorschlag(sprache) {
  if (!VORSCHLAG) return null;
  const datei = path.join(vorschlagOrdner, `${sprache}.json`);
  if (!fs.existsSync(datei)) return null;
  const roh = JSON.parse(fs.readFileSync(datei, 'utf-8'));
  Object.assign(CLUSTER, roh.cluster);
  return roh.zuordnung;
}

// ---------------------------------------------------------------------------
// Stichproben: was passiert mit einer ECHTEN Antwort?
//
// Die Zaehlungen weiter unten sagen nur, ob eine Mittelstufe erreichbar
// WAERE. Diese Liste sagt, ob sie das Richtige tut. Jede Zeile ist eine
// Antwort, die ein Lernender wirklich geben koennte, mit der Stufe, die sie
// verdient:
//
//   richtig          der Satz, so wie er gemeint war
//   ueberlebt        die Botschaft kommt an, aber mit einem anderen
//                    Schluesselwort - oder nur halb
//   nicht_verstanden der falsche Satz, oder das Schluesselwort fehlt
//
// Die Saetze sind ueber ihren deutschen Gloss angegeben, nicht ueber ihre
// id: ids verschieben sich beim Neuaufbau einer Tabelle, der deutsche Satz
// ist der stabile Schluessel (dieselbe Entscheidung wie in der
// Uebersetzungs-Pipeline, siehe werkzeug.py).
const STICHPROBEN = {
  en: [
    ['Auf Wiedersehen!', 'goodbye', 'richtig'],
    ['Auf Wiedersehen!', 'see you later', 'ueberlebt'],       // anderer Abschied
    ['Auf Wiedersehen!', 'i am very hungry', 'nicht_verstanden'],
    ['Ich möchte einen Mietwagen buchen.', "i'd like to hire a car", 'richtig'],
    ['Ich möchte einen Mietwagen buchen.', 'i want a car', 'ueberlebt'],  // Sache ja, Prinzip nein
    ['Ich möchte einen Mietwagen buchen.', 'where is the station', 'nicht_verstanden'],
    ['Danke!', 'thank you', 'richtig'],
    ['Danke!', 'cheers', 'ueberlebt'],                        // dieselbe Absicht, anderes Wort
  ],
  sv: [
    ['Bis später!', 'vi ses senare', 'richtig'],
    ['Bis später!', 'hej då', 'ueberlebt'],
    ['Bis später!', 'jag vill ha en öl', 'nicht_verstanden'],
    ['Ich verstehe das nicht.', 'jag förstår inte', 'richtig'],
    ['Ich verstehe das nicht.', 'jag fattar inte', 'nicht_verstanden'], // anderes Verb, nicht gelehrt
    ['Wie viel kostet das?', 'hur mycket kostar det', 'richtig'],
  ],
  // Die sieben, deren Familien ABGELEITET sind (siehe ableiten.py) - hier
  // zeigt sich, ob die Ableitung inhaltlich taugt oder nur Zeilen erzeugt.
  de: [
    ['Auf Wiedersehen!', 'auf wiedersehen', 'richtig'],
    ['Auf Wiedersehen!', 'tschüss', 'ueberlebt'],
    ['Auf Wiedersehen!', 'ich habe hunger', 'nicht_verstanden'],
  ],
  es: [
    ['Ja.', 'sí', 'richtig'],
    ['Ja.', 'claro', 'ueberlebt'],
    ['Ja.', 'no', 'nicht_verstanden'],
    ['Auf Wiedersehen!', 'adiós', 'richtig'],
    ['Auf Wiedersehen!', 'chao', 'ueberlebt'],
  ],
  fr: [
    ['Ja.', 'oui', 'richtig'],
    ['Ja.', 'bien sûr', 'ueberlebt'],
    ['Ja.', 'non', 'nicht_verstanden'],
  ],
  it: [
    ['Auf Wiedersehen!', 'arrivederci', 'richtig'],
    ['Auf Wiedersehen!', 'a domani', 'ueberlebt'],
    ['Auf Wiedersehen!', 'ho fame', 'nicht_verstanden'],
  ],
  no: [
    ['Nein.', 'nei', 'richtig'],
    ['Nein.', 'aldri i livet', 'ueberlebt'],
    ['Nein.', 'takk', 'nicht_verstanden'],
  ],
  ru: [
    ['Ja.', 'да', 'richtig'],
    ['Ja.', 'конечно', 'ueberlebt'],
    ['Ja.', 'нет', 'nicht_verstanden'],
  ],
  vi: [
    ['Ja.', 'vâng', 'richtig'],
    // Die Familie traegt, was die Tabelle lehrt: "Na klar!" heisst dort
    // "Tất nhiên rồi!". Das nackte "tất nhiên" ist eine Verkuerzung, die
    // in unseren Daten nicht steht - mehrwortige Formen verlangen alle
    // ihre Woerter, sonst wuerde jede Teilphrase alles anziehen.
    ['Ja.', 'tất nhiên rồi', 'ueberlebt'],
    ['Ja.', 'không', 'nicht_verstanden'],
  ],
  pl: [
    ['Ja.', 'tak', 'richtig'],
    ['Ja.', 'oczywiście', 'ueberlebt'],
    ['Ja.', 'nie', 'nicht_verstanden'],
  ],
  zh: [
    ['Prost!', '干杯', 'richtig'],
    ['Prost!', '随意', 'ueberlebt'],                          // die andere Trinkformel
    ['Prost!', '我要一杯水', 'nicht_verstanden'],
    ['Du bist sehr hübsch.', '你很漂亮', 'richtig'],
    ['Du bist sehr hübsch.', '你很好看', 'ueberlebt'],         // dasselbe Kompliment, anderes Wort
    ['Du bist sehr hübsch.', '我很累', 'nicht_verstanden'],
  ],
};

// ---------------------------------------------------------------------------
// Stichproben fuer die WORT-Bewertung (Woerter-Wiederholung, Stufe 3).
//
// Dieselben drei Stufen, dieselben Familien - nur dass hier ein einzelnes
// Wort in eine Luecke gehoert statt eines ganzen Satzes. Bis zum 2026-09-04
// kannte diese Stufe nur richtig/falsch.
//
// Aufbau: [Zielwort, Antwort, erwartete Stufe, optional die gebeugten
// Formen des Zielworts - die zaehlen voll, siehe bewerteWort()].
const WORT_STICHPROBEN = {
  en: [
    ['goodbye', 'goodbye', 'richtig'],
    ['goodbye', 'bye', 'ueberlebt'],            // andere Verabschiedung
    ['goodbye', 'beer', 'nicht_verstanden'],
    // Andere Zeitform DESSELBEN Worts: voller Erfolg, wenn die Formen
    // mitgegeben werden - "Konjugation egal" ist die alte Regel des
    // Projekts. Ohne Formen bleibt es bei der milden Mittelstufe.
    ['buy', 'bought', 'richtig', ['buys', 'bought', 'buying']],
    ['buy', 'bought', 'ueberlebt'],
    ['expensive', 'pricey', 'ueberlebt'],
    ['expensive', 'cheap', 'nicht_verstanden'], // Gegenteil, nicht Verwandtes
  ],
  sv: [
    ['hej', 'hej', 'richtig'],
    ['hej', 'hejsan', 'ueberlebt'],
    ['hej', 'öl', 'nicht_verstanden'],
    ['köpa', 'köpte', 'richtig', ['köper', 'köpte', 'köpt']],
    ['leta', 'söker', 'ueberlebt'],             // dieselbe Familie `suchen`
  ],
  zh: [
    ['漂亮', '漂亮', 'richtig'],
    ['漂亮', '好看', 'ueberlebt'],
    ['漂亮', '累', 'nicht_verstanden'],
    ['想', '要', 'ueberlebt'],                   // beide in zh_wollen
    ['吃', '喝', 'nicht_verstanden'],            // essen ist nicht trinken
  ],
};

// Homophon-Falter fuer die Stichprobe unten. In der App reicht der Screen
// `normalisiereHanzi` aus lessonEvaluation.ts herein; hier steht eine
// Miniatur davon, damit dieser Test NICHT an einer Datei haengt, die zum
// Kurs gehoert und dort ihr eigenes Leben fuehrt.
const HOMOPHON_PROBE = (s) => s.replace(/做/g, '坐');

const gewuenscht = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const sprachen = gewuenscht.length ? gewuenscht : Object.keys(TABELLE);

let fehlerGesamt = 0;

for (const sprache of sprachen) {
  const tabelle = TABELLE[sprache];
  if (!tabelle) {
    console.log(`\n?? ${sprache}: unbekannt - bekannt sind ${Object.keys(TABELLE).join(', ')}`);
    continue;
  }
  const spalten = sprache === 'de'
    ? 'id,german,accepted_concepts'
    : 'id,german,target_text,accepted_concepts,verb_cluster';
  const vorschlag = ladeVorschlag(sprache);
  const zeilen = (await rest(`${tabelle}?select=${spalten}`))
    .map((z) => (sprache === 'de' ? { ...z, target_text: z.german } : z))
    .map((z) => (vorschlag ? { ...z, verb_cluster: vorschlag[String(z.id)] ?? null } : z));

  // --- Pruefung 1: der Zielsatz selbst muss "richtig" ergeben ------------
  //
  // Die wichtigste Zusicherung ueberhaupt. Wer den Satz genau so sagt, wie
  // er dasteht, muss die volle Wertung bekommen - sonst bestraft die App
  // eine fehlerfreie Antwort. Faellt hier etwas durch, sind die
  // accepted_concepts oder der Cluster kaputt, nicht die Aussprache.
  const durchgefallen = [];
  for (const z of zeilen) {
    const ergebnis = evaluateConcepts(z.target_text, konzepteVon(z), CLUSTER, z.target_text);
    if (ergebnis.tier !== 'richtig') durchgefallen.push({ z, ergebnis });
  }

  // --- Pruefung 2: ist die MITTLERE Stufe ueberhaupt erreichbar? ---------
  //
  // Zwei Wege fuehren zu "ueberlebt":
  //   (a) mehrere Pflicht-Konzepte, eines davon verfehlt   -> Botschaft halb
  //   (b) ein Schluessel-Cluster, der nicht getroffen wird  -> anderes Prinzip
  // Fehlen beide, ist die Bewertung fuer diesen Satz zweiwertig: entweder
  // richtig oder Schwachsinn, nichts dazwischen. Bei "Ja." ist das ehrlich,
  // bei einem Satz aus acht Woertern nicht.
  const zweiwertig = zeilen.filter(
    (z) => (z.accepted_concepts?.required ?? []).length < 2 && !clusterVon(z),
  );
  // Laenge misst, ob es dazwischen ueberhaupt etwas geben KANN. Chinesisch
  // hat keine Leerzeichen - dort zaehlen Zeichen, und 4 Zeichen sind
  // ungefaehr so viel Satz wie 3 Woerter.
  const lang = (z) =>
    sprache === 'zh'
      ? [...z.target_text.replace(/[\s，。？！、]/g, '')].length >= 4
      : z.target_text.trim().split(/\s+/).length >= 4;
  const zweiwertigLang = zweiwertig.filter(lang);

  const mitCluster = zeilen.filter((z) => clusterVon(z)).length;
  const fehlendeCluster = [
    ...new Set(zeilen.map(clusterVon).filter((c) => c && !CLUSTER[c])),
  ];

  console.log(`\n=== ${sprache} (${tabelle}) — ${zeilen.length} Saetze`);
  console.log(`  Zielsatz ergibt "richtig"      ${zeilen.length - durchgefallen.length}/${zeilen.length}`);
  console.log(`  mit Schluessel-Cluster         ${mitCluster}`);
  console.log(`  zweiwertig (keine Mittelstufe) ${zweiwertig.length}  davon >=4 Woerter: ${zweiwertigLang.length}`);

  if (fehlendeCluster.length) {
    console.log(`  X Cluster referenziert, aber nicht in answer_clusters: ${fehlendeCluster.join(', ')}`);
    fehlerGesamt += fehlendeCluster.length;
  }
  for (const { z, ergebnis } of durchgefallen.slice(0, 12)) {
    console.log(`  X [${z.id}] ${JSON.stringify(z.target_text)} -> ${ergebnis.tier}`);
    console.log(`      verfehlt: ${ergebnis.missed.join(', ') || '-'}   Cluster: ${clusterVon(z) ?? '-'} (${ergebnis.verbClusterMatched})`);
  }
  if (durchgefallen.length > 12) console.log(`  ... und ${durchgefallen.length - 12} weitere`);
  fehlerGesamt += durchgefallen.length;

  // --- Pruefung 3: tut die Bewertung bei echten Antworten das Richtige? --
  const proben = STICHPROBEN[sprache] ?? [];
  if (proben.length) {
    const nachGloss = new Map(zeilen.map((z) => [z.german, z]));
    console.log('  Stichproben:');
    for (const [gloss, antwort, erwartet] of proben) {
      const z = nachGloss.get(gloss);
      if (!z) {
        console.log(`  X Satz nicht gefunden: ${JSON.stringify(gloss)}`);
        fehlerGesamt += 1;
        continue;
      }
      const ist = evaluateConcepts(antwort, konzepteVon(z), CLUSTER, z.target_text).tier;
      const ok = ist === erwartet;
      if (!ok) fehlerGesamt += 1;
      console.log(`    ${ok ? 'ok' : 'X '} ${JSON.stringify(antwort).padEnd(28)}`
        + ` -> ${ist}${ok ? '' : `   erwartet: ${erwartet}   (${z.target_text})`}`);
    }
  }

  // --- Pruefung 4: dieselbe Logik auf EIN Wort angewandt ----------------
  const wortProben = WORT_STICHPROBEN[sprache] ?? [];
  if (wortProben.length) {
    console.log('  Wort-Stichproben (Stufe 3):');
    for (const [ziel, antwort, erwartet, formen] of wortProben) {
      const ist = bewerteWort(antwort, ziel, CLUSTER, sprache, undefined, formen).tier;
      const ok = ist === erwartet;
      if (!ok) fehlerGesamt += 1;
      console.log(`    ${ok ? 'ok' : 'X '} ${ziel} <- ${JSON.stringify(antwort).padEnd(12)}`
        + `${formen ? ' (mit Formen)' : ''.padEnd(13)} -> ${ist}`
        + `${ok ? '' : `   erwartet: ${erwartet}`}`);
    }
    if (sprache === 'zh') {
      // Der Homophon-Weg muss durchgereicht werden koennen: wer 做 sagt, wo
      // 坐 erwartet war, hat RICHTIG ausgesprochen - nur der Kontext hat
      // anders entschieden (siehe CLAUDE.md, acht echte Homophone).
      const mit = bewerteWort('做', '坐', CLUSTER, 'zh', HOMOPHON_PROBE).tier;
      const ok = mit === 'richtig';
      if (!ok) fehlerGesamt += 1;
      console.log(`    ${ok ? 'ok' : 'X '} 坐 <- "做" mit Homophon-Falter -> ${mit}`);
    }
  }

  if (process.argv.includes('--zweiwertig')) {
    for (const z of zweiwertigLang.slice(0, 40)) {
      console.log(`  .  [${z.id}] ${z.target_text}   (${z.german})`);
    }
  }
}

console.log(fehlerGesamt === 0 ? '\nAlles in Ordnung.' : `\n${fehlerGesamt} Beanstandungen.`);
process.exit(fehlerGesamt === 0 ? 0 : 1);
