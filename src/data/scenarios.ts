// Lesbare Namen fuer die `scenario`-Werte aus der Datenbank.
//
// In Supabase stehen technische Kuerzel ('wegbeschreibung', 'uni'), die so
// nicht auf eine Karte gehoeren. Diese Zuordnung ist reine Anzeige-Logik -
// die Datenbank bleibt unberuehrt.
//
// Stand 2026-08-18: 16 Szenarien, alle aus `Sprachlisten/assign_categories.sql`
// bzw. `phrasebook_master.py`. Kommt ein neues dazu, ohne hier eingetragen zu
// werden, zeigt `scenarioLabel()` den Rohwert mit grossem Anfangsbuchstaben -
// unschoen, aber niemals leer.

export const SCENARIO_LABELS: Record<string, string> = {
  // Grundwortschatz
  begruessung: 'Begrüßen',
  vorstellung: 'Sich vorstellen',
  abschied: 'Verabschieden',
  uhrzeit: 'Uhrzeit',
  termin: 'Termine',
  zahlen: 'Zahlen',
  // Kaufkategorien
  hotel: 'Im Hotel',
  reisen: 'Unterwegs',
  wegbeschreibung: 'Nach dem Weg fragen',
  gesundheit: 'Beim Arzt',
  wohnen: 'Wohnen & Behörden',
  smalltalk: 'Small Talk',
  einkaufen: 'Einkaufen',
  restaurant: 'Im Restaurant',
  kultur: 'Kultur & Bräuche',
  uni: 'Uni-Alltag',
};

export function scenarioLabel(scenario: string): string {
  return SCENARIO_LABELS[scenario] ?? scenario.charAt(0).toUpperCase() + scenario.slice(1);
}
