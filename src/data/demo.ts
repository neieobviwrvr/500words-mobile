/**
 * Was jemand OHNE Konto zu sehen bekommt (2026-08-22).
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
 */

/**
 * **VORLAEUFIG - der genaue Umfang ist noch offen.**
 *
 * Simon: "zum Beispiel nur zwei Kategorien und davon zwei Situationen oder so
 * aehnlich (sprechen wir nochmal durch)". Sein Beispiel steht hier als
 * Startwert, damit nichts blockiert ist; die endgueltige Zahl ist EIN Edit an
 * dieser Stelle, weil sonst nirgends eine Zahl steht.
 *
 * Offen und beim Durchsprechen zu klaeren:
 *   - Zaehlt der Grundwortschatz als eine der beiden Kategorien, oder kommt
 *     er obendrauf? (Er ist heute fuer jeden frei.)
 *   - Sollen es feste Kategorien sein oder die zum Onboarding passenden?
 *   - Duerfen Gaeste den gefuehrten Kurs sehen? Der haengt an keiner
 *     Kategorie und ist heute komplett offen.
 */
export const DEMO_KATEGORIEN = ['grundwortschatz', 'club_nightlife'];

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

/** Ist diese Kategorie im Demo-Umfang enthalten? */
export function imDemoUmfang(categoryId: string): boolean {
  return DEMO_KATEGORIEN.includes(categoryId);
}

/**
 * Filtert eine Kategorienliste auf das, was der Nutzer sehen darf.
 *
 * `hatKonto` true gibt alles durch - die Demo-Grenze gilt ausschliesslich
 * fuer Gaeste. Bewusst hier und nicht in den Screens: die Regel ist eine,
 * und sie soll an einer Stelle stehen.
 */
export function sichtbareKategorien<T extends { id: string }>(
  kategorien: T[],
  hatKonto: boolean,
): T[] {
  if (hatKonto) return kategorien;
  return kategorien.filter((k) => imDemoUmfang(k.id));
}

/** Genauso fuer Situationen innerhalb einer Kategorie. */
export function sichtbareSituationen<T>(situationen: T[], hatKonto: boolean): T[] {
  if (hatKonto) return situationen;
  return situationen.slice(0, DEMO_SITUATIONEN_JE_KATEGORIE);
}
