// Prueft die Verschmelzungsregeln aus src/lib/merge.ts.
//
// Das Projekt hat keinen Test-Runner, und fuer eine Datei lohnt keiner. Dies
// hier laeuft mit dem, was ohnehin da ist:
//
//   npm run pruefe:merge
//
// Warum ueberhaupt ein Test: das sind die Regeln, nach denen beim Abgleich
// zwischen zwei Geraeten Lernfortschritt gewinnt oder verlorengeht. Ein
// Vorzeichenfehler faellt in der App erst auf, wenn jemand seine Karten los
// ist - und dann ist es zu spaet.

import { mergeZaehler, mergeMarken, mergeJuengeres, mergeKarten, zuSchicken, mergeTagebuch, tagebuchZuSchicken, mergeTraining, trainingGleich, mergeProfil } from '../src/lib/merge.ts';

let fehler = 0;
const pruefe = (name, ist, soll) => {
  const a = JSON.stringify(ist), b = JSON.stringify(soll);
  if (a !== b) { console.log(`  X ${name}\n      ist:  ${a}\n      soll: ${b}`); fehler++; }
  else console.log(`  OK ${name}`);
};

// --- Zaehler: das Groessere gewinnt, egal wer zuletzt schrieb
pruefe('Handy 40, iPad 5 -> 40',
  mergeZaehler({ perfekteSaetze: 40, perfekteLektionen: 2 }, { perfekteSaetze: 5, perfekteLektionen: 7 }),
  { perfekteSaetze: 40, perfekteLektionen: 7 });
pruefe('unbekannter Zaehler vom Server wird uebernommen',
  mergeZaehler({ a: 1 }, { b: 9 }), { a: 1, b: 9 });

// --- Marken: Vereinigung, nie Abzug
pruefe('Geschenke vereinigen',
  mergeMarken({ onboarding: true }, { saetze_perfekt_10: true }),
  { onboarding: true, saetze_perfekt_10: true });
pruefe('fehlende Marke loescht nichts',
  mergeMarken({ onboarding: true }, {}), { onboarding: true });
pruefe('false vom Server nimmt nichts weg',
  mergeMarken({ onboarding: true }, { onboarding: false }), { onboarding: true });

// --- Ersetzbar: juengerer gewinnt, in BEIDE Richtungen
pruefe('Server juenger -> Server', mergeJuengeres(3, 100, 8, 200), 8);
pruefe('lokal juenger  -> lokal',  mergeJuengeres(3, 300, 8, 200), 3);
pruefe('gleich alt -> lokal',      mergeJuengeres(3, 200, 8, 200), 3);

// --- FSRS-Karten
const k = (s, t) => ({ zustand: { stability: s }, zuletztBewertet: t });
pruefe('juengere Bewertung gewinnt',
  mergeKarten({ a: k(1, 100) }, { a: k(9, 200) }), { a: k(9, 200) });
pruefe('aeltere Bewertung verliert',
  mergeKarten({ a: k(1, 300) }, { a: k(9, 200) }), { a: k(1, 300) });
pruefe('nur lokal bekannte Karte bleibt',
  mergeKarten({ a: k(1, 100) }, {}), { a: k(1, 100) });
pruefe('nur fern bekannte Karte kommt dazu',
  mergeKarten({}, { b: k(2, 50) }), { b: k(2, 50) });

// --- Was hochgeladen werden muss
pruefe('nur lokal juengere hochladen',
  zuSchicken({ a: k(1, 300), b: k(1, 100), c: k(1, 50) }, { a: k(1, 200), b: k(1, 100) }).sort(),
  ['a', 'c']);
pruefe('nichts zu tun, wenn alles gleich',
  zuSchicken({ a: k(1, 100) }, { a: k(1, 100) }), []);

// --- Lern-Tagebuch: je Zaehler das Groessere, nie die Summe
const z = (richtig, ueberlebt, nichtVerstanden, lektionen) => ({ richtig, ueberlebt, nichtVerstanden, lektionen });
pruefe('Handy 40, iPad 5 an einem Tag -> 40, nicht 45',
  mergeTagebuch({ '2026-09-14': { 'no:speedrun': z(40, 2, 1, 0) } }, { '2026-09-14': { 'no:speedrun': z(5, 6, 0, 0) } }),
  { '2026-09-14': { 'no:speedrun': z(40, 6, 1, 0) } });
pruefe('Tag und Eintrag, die nur eine Seite kennt, kommen dazu',
  mergeTagebuch({ '2026-09-14': { 'no:gefuehrt': z(1, 0, 0, 1) } }, { '2026-09-13': { 'sv:speedrun': z(3, 0, 0, 0) }, '2026-09-14': { 'no:speedrun': z(2, 0, 0, 0) } }),
  { '2026-09-14': { 'no:gefuehrt': z(1, 0, 0, 1), 'no:speedrun': z(2, 0, 0, 0) }, '2026-09-13': { 'sv:speedrun': z(3, 0, 0, 0) } });
pruefe('leerer Server nimmt nichts weg',
  mergeTagebuch({ '2026-09-14': { 'no:speedrun': z(4, 0, 0, 0) } }, {}),
  { '2026-09-14': { 'no:speedrun': z(4, 0, 0, 0) } });
pruefe('schicken: nur was fehlt oder irgendwo groesser ist',
  tagebuchZuSchicken(
    { '2026-09-14': { 'no:speedrun': z(4, 0, 0, 0), 'no:gefuehrt': z(1, 1, 0, 1), 'sv:speedrun': z(2, 0, 0, 0) } },
    { '2026-09-14': { 'no:speedrun': z(4, 0, 0, 0), 'no:gefuehrt': z(9, 0, 0, 1) } }),
  [{ tag: '2026-09-14', sprache: 'no', weg: 'gefuehrt', ...z(1, 1, 0, 1) }, { tag: '2026-09-14', sprache: 'sv', weg: 'speedrun', ...z(2, 0, 0, 0) }]);
pruefe('schicken: aelter als das geholte Fenster bleibt hier',
  tagebuchZuSchicken({ '2025-01-01': { 'no:speedrun': z(1, 0, 0, 0) }, '2026-09-14': { 'no:speedrun': z(1, 0, 0, 0) } }, {}, '2025-08-10'),
  [{ tag: '2026-09-14', sprache: 'no', weg: 'speedrun', ...z(1, 0, 0, 0) }]);

// --- Trainingsstand: juengere Aenderung je Eintrag, auch wenn sie KLEINER ist
pruefe('Rueckstufung auf dem Handy bleibt, obwohl der Server mehr kennt',
  mergeTraining({ 'satz_stufe2_v1:no:12': [1, 300] }, { 'satz_stufe2_v1:no:12': [3, 200] }),
  { 'satz_stufe2_v1:no:12': [1, 300] });
pruefe('juengerer Serverstand kommt aufs Geraet',
  mergeTraining({ 'satz_stufe2_v1:no:12': [1, 100] }, { 'satz_stufe2_v1:no:12': [2, 200], 'graduierung_v1:zh:水': [3, 50] }),
  { 'satz_stufe2_v1:no:12': [2, 200], 'graduierung_v1:zh:水': [3, 50] });
pruefe('gleich alt (alte Eintraege, Einweg-Marken) -> groesserer Wert',
  mergeTraining({ 'je_graduiert_v1:zh:水': [0, 0] }, { 'je_graduiert_v1:zh:水': [1, 0] }),
  { 'je_graduiert_v1:zh:水': [1, 0] });
pruefe('nur lokal bekannter Eintrag bleibt',
  mergeTraining({ 'kat_stufe1_v1:sv:4': [1, 10] }, {}), { 'kat_stufe1_v1:sv:4': [1, 10] });
pruefe('gleicher Stand -> nichts hochladen',
  trainingGleich({ a: [1, 5] }, { a: [1, 5] }), true);
pruefe('abweichender Zeitpunkt -> hochladen',
  trainingGleich({ a: [1, 5] }, { a: [1, 6] }), false);

// --- Profil: erledigtes Onboarding schlaegt unerledigtes, sonst das juengere
const profil = (name, completed, geaendertAm) => ({ name, completed, geaendertAm });
pruefe('neues Geraet mitten im Onboarding bekommt das Konto-Profil zurueck',
  mergeProfil(profil('Si', false, 900), profil('Simon', true, 100)).name, 'Simon');
pruefe('frisches Geraet (leer, Zeitpunkt 0) ueberschreibt nichts',
  mergeProfil(profil('', false, 0), profil('Simon', true, 100)).name, 'Simon');
pruefe('beide erledigt -> juengere Aenderung',
  mergeProfil(profil('Simon', true, 300), profil('Simo', true, 200)).name, 'Simon');
pruefe('beide erledigt, Server juenger -> Server',
  mergeProfil(profil('Simon', true, 100), profil('Simo', true, 200)).name, 'Simo');
pruefe('leeres Serverprofil nimmt nichts weg',
  mergeProfil(profil('Simon', true, 0), {}).name, 'Simon');

console.log(fehler ? `\n${fehler} Fehler` : '\nAlle Regeln greifen wie beschrieben.');
process.exit(fehler ? 1 : 0);
