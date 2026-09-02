import AsyncStorage from '@react-native-async-storage/async-storage';

// "Wo war ich zuletzt?" - eigener, sehr kleiner Merker (2026-08-31, Simons
// Wunsch: der Kasten auf S1 soll sich nach JEDER beantworteten Karte
// aktualisieren, nicht erst am Sitzungsende).
//
// **Bewusst getrennt von FSRS.** Der Kasten leitete die Stelle bisher aus
// dem juengsten `last_review` ab - und genau das kann er im Kategorie-Modus
// nicht: dort werden absichtlich KEINE FSRS-Karten geschrieben (Simons
// Vorgabe 2026-08-27, "komplett unabhaengig" von der Faelligkeit fuer das
// taegliche Wiederholen). Den Kategorie-Modus dafuer FSRS schreiben zu
// lassen haette diese Trennung aufgeweicht, nur um eine Anzeige zu fuellen.
//
// Fachlich sind es ohnehin zwei Dinge: FSRS beantwortet "was ist faellig",
// dieser Merker "wo war ich". Das eine ist Lernplanung, das andere
// Wegmarkierung.

const SCHLUESSEL = 'zuletzt_besucht_v1';

export type ZuletztBesucht = {
  languageId: string;
  categoryId: string;
  scenario: string | null;
  /** Zeitstempel in Millisekunden - fuer den Fall, dass spaeter mehrere
   *  Eintraege verglichen werden muessen. */
  at: number;
};

/**
 * Schreibt die aktuelle Stelle. Wird nach jeder bewerteten Antwort
 * aufgerufen und ist bewusst "feuern und vergessen": schlaegt das Schreiben
 * fehl, fehlt hoechstens eine Wegmarkierung - der Lernstand haengt nicht
 * daran.
 */
export async function merkeBesuch(eintrag: Omit<ZuletztBesucht, 'at'>): Promise<void> {
  try {
    await AsyncStorage.setItem(SCHLUESSEL, JSON.stringify({ ...eintrag, at: Date.now() }));
  } catch {
    // Absichtlich still.
  }
}

/** Liest die zuletzt besuchte Stelle; `null`, wenn es noch keine gibt. */
export async function ladeBesuch(): Promise<ZuletztBesucht | null> {
  try {
    const roh = await AsyncStorage.getItem(SCHLUESSEL);
    if (!roh) return null;
    const wert = JSON.parse(roh) as ZuletztBesucht;
    return wert?.categoryId ? wert : null;
  } catch {
    return null;
  }
}
