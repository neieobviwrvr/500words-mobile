import { GRUNDWORTSCHATZ_ID } from './categories';

/**
 * Was jemand OHNE Konto zu sehen bekommt (2026-08-22, berichtigt 2026-08-23).
 *
 * Nutzer-Entscheidung (Simon): "Leute ohne Account sollen nur die
 * 'Demo-Version' der App sehen [...] Man muss sich anmelden und registriert
 * haben um mit Freunden in Gruppen zu kommen, deren Fortschritt zu sehen oder
 * irgendetwas zu kaufen."
 *
 * Damit hat sich die Bedeutung des Gastmodus umgedreht. Bis heute stand in
 * CLAUDE.md "Gast-Modus = nur lokale Speicherung, App bleibt voll nutzbar" -
 * der Unterschied war rein technisch (kein Abgleich). Jetzt ist er
 * INHALTLICH: der Gast sieht weniger.
 *
 * ============================================================ Zwei Achsen
 *
 * Nicht verwechseln - es gibt zwei voneinander unabhaengige Beschraenkungen:
 *
 *   KONTO?        entscheidet ueber den DEMO-Umfang (diese Datei)
 *   LAUNCH-PHASE? entscheidet ueber das Teaser-Modell (Preismodell in
 *                 CLAUDE.md: erste 6 Monate alles frei, ab Monat 7 nur noch
 *                 2-3 Grundlagen-Kategorien fuer neue Nutzer)
 *
 * Ein registrierter Nutzer in der Launch-Phase bekommt also alles; ein Gast
 * in derselben Phase bekommt die Demo. Wer die beiden vermischt, baut
 * entweder eine Demo, die sich nach sechs Monaten heimlich aendert, oder ein
 * Teaser-Modell, das Gaeste nicht erreicht.
 *
 * ============================================================ Berichtigt 2026-08-23
 *
 * **Kategorien werden NICHT mehr aus Pfad/Lektionen gefiltert.** Der erste
 * Entwurf entfernte Kategorien ausserhalb der Demo-Liste komplett aus der
 * Anzeige - Simon fand beim Testen mit Chinesisch nur 4 von 14 Kategorien
 * vor, der Rest war spurlos weg, nicht einmal als gesperrter Knoten. Das
 * widersprach dem AELTEREN, weiterhin gueltigen Grundsatz aus CLAUDE.md:
 * "Auch gesperrte Kategorien faechern auf - der Pfad soll zeigen, was es zu
 * holen gibt" und "der Katalog soll bewerben, nicht verstecken". Kategorien
 * ausblenden ist das Gegenteil von bewerben.
 *
 * Die Demo-Grenze wirkt seitdem nur noch auf SITUATIONEN, und zwar nur
 * innerhalb der Kategorien in `DEMO_KATEGORIEN` - jede andere gesperrte
 * Kategorie zeigt weiterhin ALLE ihre Situationen als Werbung, genau wie vor
 * der Demo-Grenze. `sichtbareKategorien`/`zeigtKategorie` sind damit
 * entfallen; die Bildschirme zeigen `CATEGORIES` direkt.
 */

/**
 * **VORLAEUFIG - der genaue Umfang ist noch offen.**
 *
 * Simon: "zum Beispiel nur zwei Kategorien und davon zwei Situationen oder so
 * aehnlich (sprechen wir nochmal durch)". Sein Beispiel stand hier als
 * Startwert; seit der Berichtigung 2026-08-23 ist es nur noch EINE Kategorie,
 * weil Kategorien nicht mehr gefiltert werden (siehe oben) - `DEMO_KATEGORIEN`
 * bestimmt jetzt nur noch, welche gesperrte Kategorie eine Situations-
 * Kostprobe statt der vollen Werbeliste zeigt.
 *
 * `grundwortschatz` steht bewusst NICHT (mehr) hier: er ist keine Kaufkategorie,
 * sondern der immer-freie Grundwortschatz - ihn zu kappen waere keine
 * Kostprobe, sondern eine Kuerzung von etwas, das laut CLAUDE.md "dauerhaft
 * gratis" ist. Siehe `sichtbareSituationen` fuer die explizite Ausnahme.
 *
 * Offen und beim Durchsprechen zu klaeren:
 *   - Soll es ueberhaupt eine Situations-Kostprobe geben, oder reicht die
 *     jetzt wiederhergestellte volle Kategorie-Sichtbarkeit als Demo?
 *   - Sollen es feste Kategorien sein oder die zum Onboarding passenden?
 *   - Duerfen Gaeste den gefuehrten Kurs sehen? Der haengt an keiner
 *     Kategorie und ist heute komplett offen.
 */
export const DEMO_KATEGORIEN = ['club_nightlife'];

/** Wie viele Situationen je Kategorie im Demo-Umfang sichtbar sind. */
export const DEMO_SITUATIONEN_JE_KATEGORIE = 2;

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

/** Ist diese Kategorie eine der wenigen mit Situations-Kostprobe? */
export function imDemoUmfang(categoryId: string): boolean {
  return DEMO_KATEGORIEN.includes(categoryId);
}

/**
 * Sichtbare Situationen einer Kategorie - fuer Gaeste ggf. auf eine
 * Kostprobe gekuerzt (berichtigt 2026-08-23, siehe Kopfkommentar der Datei).
 *
 * Reihenfolge der Ausnahmen, jede davon gibt die VOLLE Liste zurueck:
 *   1. Mit Konto gilt keine Grenze.
 *   2. Gekaufte Kategorien sind gekauft - eine Demo wuerde hier etwas
 *      WEGNEHMEN statt anzupreisen.
 *   3. Der Grundwortschatz ist keine Kaufkategorie, sondern laut CLAUDE.md
 *      "dauerhaft gratis" - ihn zu kappen waere keine Kostprobe, sondern
 *      eine Kuerzung von etwas, das jedem gehoert.
 *   4. Jede Kategorie AUSSERHALB von `DEMO_KATEGORIEN` zeigt ebenfalls alles:
 *      sie ist reiner Katalog/Werbung ("was gibt es zu kaufen"), keine
 *      Kostprobe. Nur die Kategorien IN `DEMO_KATEGORIEN` bekommen die
 *      Kuerzung - aktuell nur Club + Nightlife.
 */
export function sichtbareSituationen<T>(
  situationen: T[],
  hatKonto: boolean,
  categoryId?: string,
  purchased: Record<string, boolean> = {},
): T[] {
  if (hatKonto) return situationen;
  if (categoryId && purchased[categoryId]) return situationen;
  if (categoryId === GRUNDWORTSCHATZ_ID) return situationen;
  if (!categoryId || !imDemoUmfang(categoryId)) return situationen;
  return situationen.slice(0, DEMO_SITUATIONEN_JE_KATEGORIE);
}
