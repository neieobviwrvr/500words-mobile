// Kleine, feste Wortsaetze fuer Uebungs-Vorlagen (2026-08-24) - der Ort
// fuer WEITERE solche Sammlungen, nicht nur Pronomen.
//
// Unterscheidung zur eigentlichen Vokabel-Uebersetzung: Verben/Nomen/Co.
// sind KEIN fester Wortsatz - es gibt hunderte davon, und sie stehen
// bereits mit deutscher Bedeutung in den Vokabeltabellen
// (chinesisch_vocab, schwedisch_vocab, ...). Was ihnen fehlt, sind echte
// Uebersetzungen ins Englische/Franzoesische/Spanische - eine andere,
// deutlich groessere Aufgabe (hunderte Woerter je Sprache statt eine
// Handvoll), noch nicht angegangen (Simons Entscheidung 2026-08-24: erst
// die Struktur hier generalisieren, die eigentliche Uebersetzung folgt
// spaeter als eigenes Vorhaben).
//
// Was HIER reingehoert: kleine, geschlossene Mengen von Woertern, die als
// UI-Geruest fuer eine Uebungs-Vorlage gebraucht werden - unabhaengig
// davon, welches konkrete Verb/Nomen/etc. gerade geuebt wird. Personal-
// pronomen sind das erste Beispiel (4 Woerter, immer dieselben, fuer die
// "Personen-Zuordnung"-Runde in WordReviewScreen.tsx). Weitere Vorlagen
// tragen sich als eigener Schluessel ein, z.B. Fragewoerter
// (wer/was/wann/wo/wie) fuer eine kuenftige "W-Frage"-Vorlage.
//
// Noch NICHT live verdrahtet: `sourceLanguageId` (O1, "Ich spreche...")
// liegt seit 2026-08-24 zwar in AppState (siehe state/AppState.tsx), aber
// die Oberflaeche ist weiterhin komplett Deutsch, unabhaengig davon - erst
// wenn beides zusammenkommt, ergibt ein Wechsel hier ueberhaupt einen
// sichtbaren Unterschied.
export const UI_WORT_TEMPLATES = {
  /** Reihenfolge immer [ich, du, er/sie, wir] - Grund siehe Verwendung. */
  personalpronomen: {
    de: ['Ich', 'Du', 'Er/Sie', 'Wir'],
    en: ['I', 'You', 'He/She', 'We'],
    fr: ['Je', 'Tu', 'Il/Elle', 'Nous'],
    es: ['Yo', 'Tú', 'Él/Ella', 'Nosotros'],
  },
} as const satisfies Record<string, Record<string, readonly [string, string, string, string]>>;
