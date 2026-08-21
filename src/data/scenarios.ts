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
  // Club + Nightlife (2026-08-21). Neun Situationen geplant, drei befuellt -
  // die uebrigen sechs stehen schon hier, damit die Namen an EINER Stelle
  // festgelegt sind, wenn Welle 2 kommt.
  club_einlass: 'Reinkommen',
  club_bar: 'An der Bar',
  club_trinkkultur: 'Trinken und Anstoßen',
  club_ktv: 'Karaoke',
  club_ansprechen: 'Jemanden ansprechen',
  club_komplimente: 'Komplimente',
  club_naeherkommen: 'Näher kommen',
  club_nachtlogistik: 'Wo schlafen wir',
  club_sicherheit: 'Grenzen und Hilfe',
  club_verloren: 'Freunde verloren',
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
