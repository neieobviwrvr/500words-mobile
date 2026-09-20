/**
 * Was jemand OHNE Konto zu sehen bekommt (2026-08-22, Grenze zweimal neu
 * gezogen - 2026-08-23 und 2026-09-20).
 *
 * Nutzer-Entscheidung (Simon): "Leute ohne Account sollen nur die
 * 'Demo-Version' der App sehen [...] Man muss sich anmelden und registriert
 * haben um mit Freunden in Gruppen zu kommen, deren Fortschritt zu sehen oder
 * irgendetwas zu kaufen."
 *
 * ============================================================ Zwei Achsen
 *
 * Nicht verwechseln - es gibt zwei voneinander unabhaengige Beschraenkungen:
 *
 *   KONTO?        entscheidet ueber Kaufen, Freunde, Gruppen, Abgleich
 *                 (diese Datei)
 *   LAUNCH-PHASE? entscheidet ueber das Teaser-Modell (Preismodell in
 *                 CLAUDE.md: erste 6 Monate alles frei, ab Monat 7 nur noch
 *                 2-3 Grundlagen-Kategorien fuer neue Nutzer)
 *
 * Wer die beiden vermischt, baut entweder eine Demo, die sich nach sechs
 * Monaten heimlich aendert, oder ein Teaser-Modell, das Gaeste nicht
 * erreicht.
 *
 * ============================================================ Die Grenze
 *                                                              liegt NICHT
 *                                                              im Content
 *
 * Ein Gast sieht heute JEDE Kategorie mit ALLEN ihren Situationen - genau
 * dasselbe wie jemand mit Konto. Das Konto entscheidet nur darueber, was
 * man TUN kann: kaufen, Freunde haben, in Gruppen lernen, den Stand auf ein
 * zweites Geraet bekommen (siehe `KONTO_NOETIG` unten).
 *
 * Diese Datei hatte bis zum 2026-09-20 zwei Stellschrauben dafuer, beide
 * sind ersatzlos entfallen:
 *
 * 1. `sichtbareKategorien` (weg am 2026-08-23) entfernte Kategorien
 *    ausserhalb der Demo-Liste komplett aus der Anzeige. Simon fand beim
 *    Testen mit Chinesisch nur 4 von 14 Kategorien vor, der Rest war
 *    spurlos weg, nicht einmal als gesperrter Knoten.
 *
 * 2. `sichtbareSituationen` (weg am 2026-09-20) kappte innerhalb von Club +
 *    Nightlife und Travel + Transportation auf die ersten zwei Situationen.
 *    Simon beim Test: "auf dem Lernpfad [...] nur noch zwei Situationen
 *    sichtbar - was soll ich damit anfangen???"
 *
 * **Beide Male derselbe Denkfehler, und er ist der Grund, warum hier keine
 * dritte Stellschraube hingehoert:** die betroffenen Kategorien sind fuer
 * einen Gast ohnehin GESPERRT. Jede ihrer Situationen fuehrt in den Shop,
 * keine ist spielbar. Wegzulassen schuetzt also gar nichts - es nimmt nur
 * Schaufenster weg. Club hat zehn Situationen und 130 Saetze; sichtbar
 * waren zwei. Das wirkt nicht wie eine Kostprobe, sondern wie eine leere
 * Kategorie, und genau so hat es sich beim Testen auch angefuehlt.
 *
 * Es gilt damit wieder ungeteilt der aeltere Grundsatz aus CLAUDE.md:
 * "Auch gesperrte Kategorien faechern auf - der Pfad soll zeigen, was es zu
 * holen gibt", "der Katalog soll bewerben, nicht verstecken".
 *
 * **Ein Nebenfehler ist damit mitverschwunden:** `LessonsScreen` rechnete
 * seine Satzzahl (`gesamt`, Beschriftung von "Alle N" und der Wortliste)
 * aus der GEKUERZTEN Liste. Gaeste sahen dort nicht 130, sondern die Summe
 * der zwei sichtbaren Situationen - die Anzeige-Grenze war zur vermeintlichen
 * Wahrheit ueber den Content geworden. Wer je wieder eine Sichtbarkeits-
 * Grenze einzieht, filtert sie erst NACH solchen Rechnungen ein.
 */

/**
 * Was ein Konto voraussetzt - je Fall ein eigener Satz fuer die Oberflaeche.
 *
 * Beisammen statt an den Screens verteilt, damit die Begruendung ueberall
 * gleich klingt und beim Aendern nichts uebrig bleibt.
 */
export const KONTO_NOETIG = {
  kaufen: {
    titel: 'Zum Kaufen brauchst du ein Konto',
    text: 'Käufe hängen an deinem Konto, nicht am Gerät — sonst wären sie weg, sobald du das Handy wechselst.',
  },
  freunde: {
    titel: 'Freunde brauchen ein Konto',
    text: 'Damit ihr euren Fortschritt gegenseitig seht, müssen beide Seiten dieselben Daten sehen können. Das geht nur mit Konto.',
  },
  gruppen: {
    titel: 'Gruppen brauchen ein Konto',
    text: 'Eine Gruppe lebt davon, dass mehrere Geräte denselben Stand sehen.',
  },
  abgleich: {
    titel: 'Ohne Konto bleibt alles auf diesem Gerät',
    text: 'Dein Lernstand, deine Coins und deine gemerkten Sätze liegen nur hier. Mit Konto sind sie auf jedem Gerät da.',
  },
} as const;

export type KontoGrund = keyof typeof KONTO_NOETIG;
