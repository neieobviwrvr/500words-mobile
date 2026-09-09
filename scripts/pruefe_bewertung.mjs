// Prueffaelle fuer die sprachabhaengige Bewertung (2026-09-04).
//
// Aufruf:  node scripts/pruefe_bewertung.mjs
//
// Jeder Fall unten ist ein Verhalten, das die Bewertung haben MUSS - die
// meisten sind Fehler, die die vorherige, fuer Chinesisch geschriebene
// Fassung tatsaechlich gemacht hat. Wer das Profil einer Sprache aendert,
// laesst das hier laufen.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

// TypeScript nach JS bringen - ohne Testlaeufer, damit das Skript ueberall
// laeuft, wo Node und tsc da sind.
// Pfad ohne URL-Kodierung: der Projektordner heisst "500 words" mit
// Leerzeichen, und %20 findet tsc nicht.
const tmp = decodeURIComponent(
  new URL('../.pruef-bewertung/', import.meta.url).pathname.slice(1));
rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });
execSync(
  `npx tsc src/features/course/lessonEvaluation.ts src/features/course/sprachProfil.ts ` +
  `--outDir "${tmp}" --module es2022 --target es2022 --moduleResolution bundler ` +
  `--skipLibCheck --ignoreConfig`,
  { stdio: 'inherit' }
);
// `--moduleResolution bundler` laesst die Endung im Import weg; Node
// braucht sie. Also nachtragen, statt die Quelle danach auszurichten.
for (const datei of ['lessonEvaluation.js', 'sprachProfil.js']) {
  const pfad = `${tmp}/${datei}`;
  writeFileSync(pfad, readFileSync(pfad, 'utf8')
    .replace(/from '(\.\/[^']+?)'/g, (_, ziel) => `from '${ziel}.js'`));
}
const mod = await import(pathToFileURL(`${tmp}/lessonEvaluation.js`).href);
const { bewerteAntwort } = mod;
const profil = await import(pathToFileURL(`${tmp}/sprachProfil.js`).href);

const FAELLE = [
  // --- Chinesisch: unveraendertes Verhalten -----------------------------
  ['zh gesprochen richtig', 'zh', 'sprache', '我是学生', '我是学生', 'wǒ shì xuésheng',
   '学生', 'xuésheng', 'richtig'],
  ['zh Homophon 做/坐 gilt', 'zh', 'sprache', '我做', '我坐', 'wǒ zuò', '坐', 'zuò', 'richtig'],
  ['zh falsche Reihenfolge faellt durch', 'zh', 'sprache', '学生是我', '我是学生',
   'wǒ shì xuésheng', '学生', 'xuésheng', 'nicht_verstanden'],
  ['zh Pinyin getippt ohne Toene', 'zh', 'text', 'wo shi xuesheng', '我是学生',
   'wǒ shì xuésheng', '学生', 'xuésheng', 'ueberlebt'],

  // --- Russisch: war vorher komplett kaputt -----------------------------
  // `[^a-z]` filtern loeschte Kyrillisch restlos -> jede Antwort leer.
  ['ru gesprochen richtig', 'ru', 'sprache', 'я студент', 'я студент', 'ja studént',
   'студент', 'studént', 'richtig'],
  ['ru Umschrift getippt', 'ru', 'text', 'ja student', 'я студент', 'ja studént',
   'студент', 'studént', 'ueberlebt'],
  // Faelle statt Wortstellung: umstellen ist korrektes Russisch.
  ['ru umgestellt gilt als ueberlebt', 'ru', 'sprache', 'студент я', 'я студент',
   'ja studént', 'студент', 'studént', 'ueberlebt'],

  // --- Schwedisch: ä/ö sind Buchstaben, keine Verzierung ----------------
  ['sv richtig', 'sv', 'sprache', 'jag är trött', 'jag är trött', 'jag är trött',
   'trött', 'trött', 'richtig'],
  ['sv har ist NICHT här', 'sv', 'text', 'jag ar trott', 'jag är trött', 'jag är trött',
   'trött', 'trött', 'nicht_verstanden'],

  // --- Vietnamesisch: Tonzeichen tragen die Bedeutung -------------------
  ['vi richtig', 'vi', 'sprache', 'tôi mệt', 'tôi mệt', 'tôi mệt', 'mệt', 'mệt', 'richtig'],
  ['vi ohne Toene ist ein anderes Wort', 'vi', 'text', 'toi met', 'tôi mệt', 'tôi mệt',
   'mệt', 'mệt', 'nicht_verstanden'],

  // --- Polnisch: freie Wortstellung, eigene Buchstaben ------------------
  ['pl richtig', 'pl', 'sprache', 'jestem zmęczony', 'jestem zmęczony', 'jestem zmęczony',
   'zmęczony', 'zmęczony', 'richtig'],
  ['pl umgestellt gilt', 'pl', 'sprache', 'zmęczony jestem', 'jestem zmęczony',
   'jestem zmęczony', 'zmęczony', 'zmęczony', 'ueberlebt'],

  // --- Spanisch/Franzoesisch: Akzente beim TIPPEN nachsichtig -----------
  ['es Akzent fehlt beim Tippen - ok', 'es', 'text', 'estoy cansado', 'estoy cansado',
   'estoy cansado', 'cansado', 'cansado', 'ueberlebt'],
  ['fr Akzent fehlt beim Tippen - ok', 'fr', 'text', 'je suis fatigue',
   'je suis fatigué', 'je suis fatigué', 'fatigué', 'fatigué', 'ueberlebt'],

  // --- Englisch: Wortweise, nicht buchstabenweise -----------------------
  ['en richtig', 'en', 'sprache', 'I am tired', 'I am tired', 'I am tired',
   'tired', 'tired', 'richtig'],
  ['en Grossschreibung egal', 'en', 'sprache', 'i am TIRED', 'I am tired', 'I am tired',
   'tired', 'tired', 'richtig'],
  ['en fremdes Wort faellt durch', 'en', 'sprache', 'I am tired banana', 'I am tired',
   'I am tired', 'tired', 'tired', 'nicht_verstanden'],
  ['en Slot fehlt', 'en', 'sprache', 'I am happy', 'I am tired', 'I am tired',
   'tired', 'tired', 'nicht_verstanden'],
];

// --- Tipp-Hinweis und Platzhalter -------------------------------------
// Bis 2026-09-04 stand ueber JEDEM Tippfeld "TIPPEN (PINYIN, OHNE TÖNE)",
// auch bei Schwedisch, und der Platzhalter filterte mit [^a-zA-Z ] -
// aus `trött` wurde `trtt`, Kyrillisch verschwand ganz.
const HINWEISE = [
  ['zh nennt Pinyin', 'zh', true, 'TIPPEN (PINYIN, OHNE TÖNE)'],
  ['ru nennt die Umschrift', 'ru', true, 'TIPPEN (UMSCHRIFT)'],
  ['sv nennt die Sonderzeichen', 'sv', false, 'TIPPEN (MIT SONDERZEICHEN)'],
  ['vi nennt die Sonderzeichen', 'vi', false, 'TIPPEN (MIT SONDERZEICHEN)'],
  ['en schlicht TIPPEN', 'en', false, 'TIPPEN'],
  ['es schlicht TIPPEN', 'es', false, 'TIPPEN'],
];
const PLATZHALTER = [
  ['zh streift Toene ab', 'wǒ shì', 'zh', 'wo shi'],
  ['sv behaelt ö', 'trött', 'sv', 'trött'],
  ['vi behaelt Toene', 'tôi mệt', 'vi', 'tôi mệt'],
  ['pl behaelt ę', 'zmęczony', 'pl', 'zmęczony'],
  ['fr streift Akzente ab', 'fatigué', 'fr', 'fatigue'],
];

let fehler = 0;
for (const [name, sprache, laut, soll] of HINWEISE) {
  const ist = profil.tippHinweis(sprache, laut);
  const ok = ist === soll;
  if (!ok) fehler += 1;
  console.log(`${ok ? '  ok ' : '  X  '} ${name.padEnd(42)} -> ${ist}${ok ? '' : `  (erwartet ${soll})`}`);
}
for (const [name, text, sprache, soll] of PLATZHALTER) {
  const ist = profil.tippPlatzhalter(text, sprache);
  const ok = ist === soll;
  if (!ok) fehler += 1;
  console.log(`${ok ? '  ok ' : '  X  '} ${name.padEnd(42)} -> ${ist}${ok ? '' : `  (erwartet ${soll})`}`);
}

for (const [name, sprache, quelle, antwort, schrift, lerntext, slotS, slotL, soll] of FAELLE) {
  const b = bewerteAntwort({
    antwort, erwartetSchrift: schrift, erwartetLerntext: lerntext,
    slotSchrift: slotS, slotLerntext: slotL, quelle, sprache,
  });
  const ok = b.tier === soll;
  if (!ok) fehler += 1;
  console.log(`${ok ? '  ok ' : '  X  '} ${name.padEnd(42)} -> ${b.tier}${ok ? '' : `  (erwartet ${soll})`}`);
}

rmSync(tmp, { recursive: true, force: true });
console.log();
console.log(fehler === 0
  ? `Alle ${FAELLE.length + HINWEISE.length + PLATZHALTER.length} Faelle korrekt.`
  : `${fehler} Faelle falsch.`);
process.exit(fehler === 0 ? 0 : 1);
