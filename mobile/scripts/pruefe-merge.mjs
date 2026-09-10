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

import { mergeZaehler, mergeMarken, mergeJuengeres, mergeKarten, zuSchicken } from '../src/lib/merge.ts';

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

console.log(fehler ? `\n${fehler} Fehler` : '\nAlle Regeln greifen wie beschrieben.');
process.exit(fehler ? 1 : 0);
