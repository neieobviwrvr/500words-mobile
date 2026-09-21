// Prueft die Survival-Freitextsuche gegen den ECHTEN Satzbestand.
//
//   npm run pruefe:suche                      (Deutsch, alle Kategorien)
//   npm run pruefe:suche -- no                (andere Zielsprache)
//   npm run pruefe:suche -- --frisch          (Konto ohne Kaeufe)
//   npm run pruefe:suche -- --zeigen          (jeden Treffer auflisten)
//   npm run pruefe:suche -- --vorher HEAD     (alter Stand daneben)
//
// Warum ueberhaupt ein Test: Simons Fehlerbericht war "es hat einfach
// schlampig funktioniert" - das laesst sich nur mit Zahlen beantworten. Ob
// eine Suche die richtigen Saetze liefert, steht naemlich nicht im Code: es
// entsteht erst aus dem Zusammenspiel von Suchwort und Satzbestand, und
// derselbe Code kann bei 161 Saetzen sauber und bei 584 unbrauchbar sein.
// Genau das war der Fall - mit einem frischen Konto fielen drei der Fehler
// gar nicht auf.
//
// Jeder Fall ist ein Verhalten, das die Suche haben MUSS, kein Abbild des
// heutigen Ergebnisses: `muss` nennt Saetze, die kommen muessen, `nicht`
// solche, die frueher faelschlich kamen. Zahlen allein wuerden bei jeder
// Content-Ergaenzung anschlagen, ohne dass etwas kaputt ist.
//
// Laeuft gegen die echte Datenbank und die echte Suchfunktion aus
// cheatsheetContent.ts - KEIN Nachbau (siehe pruefe-konzepte.mjs zur
// Begruendung). Ersetzt werden nur die zwei React-Native-Bausteine, die es
// in Node nicht gibt: der Supabase-Client (hier ohne AsyncStorage) und der
// Offline-Cache (hier durchreichend).
//
// Liest den oeffentlichen anon-Key aus mobile/.env - genau die Sicht, die
// auch die App auf den Content hat.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { registerHooks } from 'node:module';
import { createClient } from '@supabase/supabase-js';
import ts from 'typescript';

const HIER = path.dirname(fileURLToPath(import.meta.url));
const WURZEL = path.join(HIER, '..');
const DATEN = path.join(WURZEL, 'src', 'data');

for (const zeile of fs.readFileSync(path.join(WURZEL, '.env'), 'utf-8').split('\n')) {
  const t = zeile.trim();
  if (!t || t.startsWith('#')) continue;
  const i = t.indexOf('=');
  if (i > 0) process.env[t.slice(0, i)] = t.slice(i + 1).replace(/^"|"$/g, '');
}

globalThis.__db = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } },
);

const STUMMEL = {
  supabase: 'data:text/javascript,export const supabase = globalThis.__db;',
  cache: 'data:text/javascript,export async function cachedFetch(_k, f) { return { data: await f(), fromCache: false }; }',
};

registerHooks({
  // TypeScript uebersetzt selbst, statt Nodes `--experimental-strip-types`
  // zu nehmen: nur der echte Uebersetzer weiss, welcher Import ein TYP ist
  // und deshalb wegfallen muss. Ohne das scheitert jede Datei, die Typ und
  // Wert in derselben Zeile importiert - in dieser App der Normalfall.
  load(url, ctx, next) {
    if (!url.endsWith('.ts')) return next(url, ctx);
    const { outputText } = ts.transpileModule(fs.readFileSync(fileURLToPath(url), 'utf-8'), {
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
      fileName: url,
    });
    return { format: 'module', source: outputText, shortCircuit: true };
  },
  resolve(spec, ctx, next) {
    if (!spec.startsWith('.')) return next(spec, ctx);
    // Eine aus Git geholte Altfassung liegt ausserhalb von src/data, ihre
    // Nachbarn aber nicht - sie werden gegen das echte Verzeichnis aufgeloest.
    const basis = ctx.parentURL?.includes('/alt-cheatsheet')
      ? pathToFileURL(path.join(DATEN, 'x')).href
      : ctx.parentURL;
    const ziel = new URL(spec, basis);
    if (ziel.pathname.endsWith('/lib/supabase')) return { url: STUMMEL.supabase, shortCircuit: true };
    if (ziel.pathname.endsWith('/lib/offlineCache')) return { url: STUMMEL.cache, shortCircuit: true };
    // Metro will keine Dateiendung, Node verlangt sie.
    const alsTs = fileURLToPath(ziel.href) + '.ts';
    if (!path.extname(ziel.pathname) && fs.existsSync(alsTs)) {
      return next(ziel.href + '.ts', { ...ctx, parentURL: basis });
    }
    return next(ziel.href, { ...ctx, parentURL: basis });
  },
});

const args = process.argv.slice(2);
const vorherIdx = args.indexOf('--vorher');
const vorherRef = vorherIdx >= 0 ? args[vorherIdx + 1] : null;
if (vorherIdx >= 0) args.splice(vorherIdx, 2);
const zeigen = args.includes('--zeigen');
// Vorgabe ist das VOLLE Konto (alles gekauft). Der grosse Bestand ist der
// harte Fall - im frischen Konto sind nur Grundwortschatz und Health
// durchsuchbar, und die Haelfte der Fehler kommt dort gar nicht vor.
const frisch = args.includes('--frisch');
const sprache = args.find((a) => !a.startsWith('--')) ?? 'de';

/**
 * Jeder Fall: was muss kommen, was darf nicht kommen.
 *
 * Die `nicht`-Saetze sind keine ausgedachten Gegenbeispiele - es sind genau
 * die Treffer, die Simon beim Test vom 2026-09-21 beanstandet hat, plus die
 * drei Fehler, die beim Nachmessen dazukamen ("Woche" fuer "wo", "Preis"
 * fuer "Eis", der Situationsname, der eine ganze Situation anzog).
 *
 * `braucht` nennt die Kategorien, aus denen die erwarteten Saetze stammen.
 * Ohne Kauf ist eine solche Kategorie gar nicht durchsuchbar, der Fall waere
 * mit `--frisch` also zwangslaeufig leer - und ein Testwerkzeug, das im
 * Normalbetrieb rot leuchtet, liest bald niemand mehr.
 */
const FAELLE = [
  {
    anfrage: 'Arzt',
    muss: ['Ich brauche einen Arzt.', 'Ich möchte zum Arzt.', 'Ich habe einen Arzttermin.'],
    braucht: ['job_work'],
    hoechstens: 4,
  },
  {
    anfrage: 'Ich brauche einen Arzt',
    muss: ['Ich brauche einen Arzt.'],
    // Teilten sich mit der Anfrage nur das Wort "brauche".
    nicht: ['Ich brauche die Quittung für meine Versicherung.', 'Ich brauche Hilfe.'],
    hoechstens: 4,
  },
  {
    anfrage: 'bezahlen',
    muss: ['Wo kann ich bezahlen?', 'Kann ich mit Karte bezahlen?'],
    // Standen nur in der Situation "Versicherung und Bezahlen".
    nicht: ['Reicht das?', 'Hier ist meine Karte.', 'Ich habe eine Versicherung.'],
    braucht: ['shopping_haggling'],
    hoechstens: 12,
  },
  {
    anfrage: 'Wo ist die Toilette',
    muss: ['Wo ist die Toilette?'],
    // "wo" als Wortanfang von "Woher" und "Woche".
    nicht: ['Woher kommst du?', 'Können wir uns nächste Woche treffen?', 'Wo ist der Ausgang?'],
    hoechstens: 4,
  },
  {
    anfrage: 'Eis',
    muss: ['Mit Eis, bitte.', 'Ohne Eis, bitte.'],
    // Teilstring-Suche traf frueher jedes Wort mit "eis" darin.
    nicht: ['Ist Bettwäsche im Preis inbegriffen?', 'Gute Reise!'],
    braucht: ['drinking_dining'],
    hoechstens: 3,
  },
  {
    // Kein einziger Satz dieser Situation enthaelt das Wort "ansprechen" -
    // gefunden wird sie ueber ihren NAMEN. Genau dafuer ist der Rueckfall da.
    anfrage: 'jemanden ansprechen',
    braucht: ['club_nightlife'],
    mindestens: 10,
    nurAus: 'club_ansprechen',
  },
  {
    anfrage: 'Zug nach Berlin',
    braucht: ['travel_transportation'],
    muss: ['Wann fährt der nächste Zug nach Berlin?'],
    hoechstens: 3,
  },
  {
    anfrage: 'Wlan Passwort',
    braucht: ['hotel_accommodation'],
    muss: ['Wie ist das Passwort für das WLAN?'],
    hoechstens: 3,
  },
  {
    anfrage: 'Hilfe',
    muss: ['Hilfe!', 'Ich brauche Hilfe.'],
    hoechstens: 8,
  },
  {
    anfrage: 'Preis',
    // Kein Satz sagt "Preis", gefunden wird ueber die Synonyme.
    muss: ['Wie viel kostet das?', 'Das ist zu teuer.'],
    nicht: ['Ich habe nur eins.', 'Wie viele?'],
  },
];

async function ladeSuche(ref) {
  if (!ref) return import(pathToFileURL(path.join(DATEN, 'cheatsheetContent.ts')).href);
  const inhalt = execFileSync('git', ['show', `${ref}:mobile/src/data/cheatsheetContent.ts`], {
    cwd: path.join(WURZEL, '..'),
    encoding: 'utf-8',
    maxBuffer: 20 * 1024 * 1024,
  });
  const datei = path.join(WURZEL, 'node_modules', '.cache', `alt-cheatsheet-${ref.replace(/\W/g, '')}.ts`);
  fs.mkdirSync(path.dirname(datei), { recursive: true });
  fs.writeFileSync(datei, inhalt);
  return import(pathToFileURL(datei).href);
}

const neu = await ladeSuche(null);
const alt = vorherRef ? await ladeSuche(vorherRef) : null;
const { CATEGORIES } = await import(pathToFileURL(path.join(DATEN, 'categories.ts')).href);

// Genau die Kategorien, die SearchResultsScreen laedt bzw. durchsucht.
// health_emergency steht absichtlich in BEIDEN Listen - stand es doppelt in
// der Ladeliste, baute loadCheatsheetGroups zwei Gruppen daraus und jeder
// Gesundheitssatz kam doppelt. Der `new Set` hier bildet die Stelle nach,
// an der das im Screen abgefangen wird.
const gekauft = frisch ? [] : CATEGORIES.map((c) => c.id);
const ladeAlsOffen = [...new Set(['health_emergency', ...gekauft])];
const durchsuchbar = new Set(['grundwortschatz', 'health_emergency', ...gekauft]);

const { groups } = await neu.loadCheatsheetGroups(sprache, ladeAlsOffen);
const bestand = new Set(groups.flatMap((g) => g.allSentences.map((s) => s.id))).size;
console.log(
  `Sprache ${sprache}, ${frisch ? 'frisches Konto' : 'alles gekauft'}: ` +
    `${groups.length} Gruppen, ${bestand} verschiedene Saetze\n`,
);

// Gesucht wird auf Deutsch; bei anderen Zielsprachen traegt der Satz die
// deutsche Bedeutung als Uebersetzungshilfe, und genau darueber findet die
// Suche ihn. Verglichen wird deshalb gegen die deutsche Fassung.
const deutsch = (s) => (sprache === 'de' ? s.text : (s.germanGloss ?? s.text));

let fehler = 0;
let uebersprungen = 0;
for (const fall of FAELLE) {
  const fehlend = (fall.braucht ?? []).filter((c) => !durchsuchbar.has(c));
  if (fehlend.length > 0) {
    console.log(`--   „${fall.anfrage}" uebersprungen (${fehlend.join(', ')} nicht gekauft)`);
    uebersprungen += 1;
    continue;
  }
  const treffer = neu.searchCheatsheetSentences(groups, fall.anfrage, durchsuchbar);
  const texte = treffer.map(deutsch);
  const meldungen = [];

  const doppelt = treffer.length - new Set(treffer.map((s) => s.id)).size;
  if (doppelt > 0) meldungen.push(`${doppelt} Satz/Saetze doppelt in der Liste`);
  for (const m of fall.muss ?? []) if (!texte.includes(m)) meldungen.push(`fehlt: „${m}"`);
  for (const n of fall.nicht ?? []) if (texte.includes(n)) meldungen.push(`darf nicht kommen: „${n}"`);
  if (fall.hoechstens && treffer.length > fall.hoechstens) {
    meldungen.push(`${treffer.length} Treffer, hoechstens ${fall.hoechstens} erwartet`);
  }
  if (fall.mindestens && treffer.length < fall.mindestens) {
    meldungen.push(`${treffer.length} Treffer, mindestens ${fall.mindestens} erwartet`);
  }
  if (fall.nurAus) {
    const fremd = treffer.filter((s) => s.scenario !== fall.nurAus);
    if (fremd.length > 0) {
      meldungen.push(`${fremd.length} Treffer ausserhalb von ${fall.nurAus}: ${fremd.slice(0, 3).map(deutsch).join(' / ')}`);
    }
  }

  const altTreffer = alt ? alt.searchCheatsheetSentences(groups, fall.anfrage, durchsuchbar) : null;
  const vergleich = altTreffer ? `  (vorher ${altTreffer.length})` : '';
  const zeichen = meldungen.length === 0 ? 'OK  ' : 'FEHL';
  console.log(`${zeichen} „${fall.anfrage}" -> ${treffer.length} Treffer${vergleich}`);
  for (const m of meldungen) console.log(`       ${m}`);
  if (zeigen) for (const s of treffer) console.log(`       ${s.category}/${s.scenario}  ${deutsch(s)}`);
  fehler += meldungen.length > 0 ? 1 : 0;
}

const geprueft = FAELLE.length - uebersprungen;
console.log(
  `\n${geprueft - fehler} von ${geprueft} geprueften Faellen in Ordnung` +
    (uebersprungen > 0 ? `, ${uebersprungen} uebersprungen.` : '.'),
);
// `exitCode` statt `process.exit()`: der Supabase-Client haelt noch eine
// Verbindung offen, und ein harter Abbruch mittendrin laesst Node unter
// Windows mit einer libuv-Meldung abstuerzen.
process.exitCode = fehler > 0 ? 1 : 0;
