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
 * 13 Grundschritte seit 2026-08-18: der Coin-Screen hinter der Beispiel-
 * lektion (o9b, Schritt 10) ist fest dazugekommen, Konto/Benachrichtigungen/
 * Willkommen sind entsprechend auf 11/12/13 gerutscht.
 */
export const ONBOARDING_TOTAL_STEPS = MASCOT_ENABLED ? 14 : 13;

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
