// Der Schalter, an dem das gesamte Maskottchen haengt.
//
// Hintergrund (2026-08-17): Die Figuren sollen zunaechst mit
// Platzhalter-Grafik laufen und spaeter durch echte Bilder ersetzt werden.
// Findet sich nichts Passendes, wird die Idee komplett gestrichen. Deshalb
// muss sie sich an EINER Stelle abschalten lassen, ohne dass irgendwo eine
// Luecke oder ein sinnloser Text zurueckbleibt.
//
// Was `false` bewirkt:
// - Der Auswahl-Screen wird uebersprungen (o3-mikrofon geht direkt zu o4)
// - <Mascot /> rendert nichts
// - Die Strecke hat einen Schritt weniger
//
// Diese Datei importiert absichtlich NICHTS - so kann sie von Daten- wie
// von Feature-Modulen gelesen werden, ohne Ringabhaengigkeiten zu erzeugen.

export const MASCOT_ENABLED = true;

/**
 * Schritte der Onboarding-Strecke - mit Maskottchen einer mehr.
 *
 * 11 Grundschritte seit 2026-08-22. Vorher 13: Geschlecht (O5) und Ansprache
 * (O6) sind aus der Strecke geflogen und werden jetzt erst gefragt, wenn es
 * darauf ankommt - nach dem Kauf einer Kategorie mit geschlechtsspezifischen
 * Satzvarianten (siehe data/anrede.ts). Nutzer-Entscheidung: im Onboarding
 * "einen Tick zu aufdringlich".
 *
 * Alles ab O7 ist dadurch um zwei nach vorn gerueckt: Alter 5, Bekanntheit 6,
 * Beispiellektion 7, Coin 8, Konto 9, Benachrichtigungen 10, Willkommen 11.
 */
export const ONBOARDING_TOTAL_STEPS = MASCOT_ENABLED ? 12 : 11;

/**
 * Rechnet die Schrittnummer eines Screens um.
 *
 * Die Screens kennen ihre Position OHNE Maskottchen (O1 = 1 ... O12 = 13).
 * Der Auswahl-Screen sitzt zwischen Schritt 3 und 4; alles ab Schritt 4
 * rutscht dadurch um eins nach hinten - aber nur, wenn es ihn gibt.
 */
export function stepNumber(baseStep: number): number {
  return MASCOT_ENABLED && baseStep >= 4 ? baseStep + 1 : baseStep;
}

/** Fester Platz des Auswahl-Screens in der Strecke. */
export const MASCOT_STEP = 4;
