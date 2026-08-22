// Lesbare Namen fuer die `scenario`-Werte aus der Datenbank.
//
// In Supabase stehen technische Kuerzel ('wegbeschreibung', 'uni'), die so
// nicht auf eine Karte gehoeren. Diese Zuordnung ist reine Anzeige-Logik -
// die Datenbank bleibt unberuehrt.
//
// Stand 2026-08-22: 68 Szenarien. Kommt ein neues dazu, ohne hier
// eingetragen zu werden, zeigt `scenarioLabel()` den Rohwert mit grossem
// Anfangsbuchstaben - unschoen, aber niemals leer.

export const SCENARIO_LABELS: Record<string, string> = {
  // Grundwortschatz - acht Boxen, keine unter fuenf Saetzen (2026-08-22).
  // Die Zahl ist die Untergrenze, ab der eine Karte sich lohnt: darunter
  // tippt der Nutzer sich durch drei Saetze und steht wieder am Anfang.
  // Deshalb ging 'abschied' (3 Saetze) in 'begruessung' auf - Gruss und
  // Abschied sind die zwei Enden desselben Gespraechs, kein eigenes Thema.
  // Der Wert existiert in keiner Tabelle mehr.
  begruessung: 'Begrüßen und Verabschieden',
  vorstellung: 'Sich vorstellen',
  // Neu 2026-08-22: "Danke", "Entschuldigung", "Ja", "Nein" gab es bis dahin
  // NICHT als eigene Saetze - "Danke" nur eingebettet in "Mir geht es gut,
  // danke", "Entschuldigung" nur hinter der Bezahlschranke.
  hoeflichkeit: 'Höflich sein',
  uhrzeit: 'Zeit sagen',
  termin: 'Sich verabreden',
  // Hiess bis 2026-08-22 nur "Zahlen" und enthielt Preisfragen, aber keine
  // Zahl. Jetzt beides.
  zahlen: 'Zahlen und Preise',
  // Neu 2026-08-22: "Hilfe!" lag in health_emergency, "Wo ist die Toilette?"
  // in drinking_dining. Ein Notruf hinter der Bezahlschranke ist der Fall,
  // den man am wenigsten will - beide sind zurueck im freien Teil.
  notlage: 'Wenn’s drauf ankommt',
  // Neu 2026-08-21: lag vorher als Teil von "Small Talk" in einer
  // Kaufkategorie. Wer "Kannst du das wiederholen?" nicht kann, scheitert
  // ueberall - das gehoert in den Grundwortschatz und wird von dort geliehen
  // (siehe data/geliehen.ts).
  verstaendigen: 'Sich verständigen',
  // Feinere Situationen (2026-08-21). Bis dahin lag jede Kategorie unter
  // EINER Sammel-Situation ("gesundheit", "einkaufen", "restaurant") - der
  // Grund, warum das Coin-Modell keine Ware hatte: ein Thema freikaufen
  // waere dasselbe gewesen wie die ganze Kategorie freikaufen. Der Inhalt
  // existierte, er stand nur zu grob sortiert da.
  //
  // Health + Emergency
  health_symptome: 'Was mir fehlt',
  health_krankenhaus: 'Im Krankenhaus',
  health_notfall: 'Notfall',
  health_allergie: 'Allergien',
  health_bezahlen: 'Versicherung und Bezahlen',
  // Shopping + Haggling
  shop_suchen: 'Suchen und stöbern',
  shop_anprobieren: 'Anprobieren',
  shop_bezahlen: 'Preis und Bezahlen',
  shop_reklamieren: 'Umtauschen',
  // Drinking + Dining
  essen_platz: 'Einen Tisch bekommen',
  essen_bestellen: 'Bestellen',
  essen_unvertraeglich: 'Was ich nicht esse',
  essen_bezahlen: 'Rechnung',
  essen_geschmack: 'Über das Essen reden',
  // Hotel + Accommodation
  hotel_einchecken: 'Einchecken',
  hotel_zimmer: 'Im Zimmer',
  hotel_probleme: 'Wenn etwas fehlt',
  hotel_abreise: 'Abreise',
  // Moving + Settling
  wohnen_suchen: 'Wohnung suchen',
  wohnen_vertrag: 'Mietvertrag',
  wohnen_behoerden: 'Behörden',
  wohnen_alltag: 'Im Haus',
  // University + Studying
  uni_orientierung: 'Sich zurechtfinden',
  uni_organisation: 'Studium organisieren',
  uni_pruefung: 'Prüfungen',
  uni_zusammen: 'Zusammen lernen',
  // Culture + Immersion
  kultur_wetter: 'Wetter',
  kultur_ausgehen: 'Ausgehen',
  kultur_freizeit: 'Freizeit und Sport',
  kultur_wochenende: 'Wochenende',
  // Smalltalk + Socialising
  smalltalk_person: 'Über sich erzählen',
  smalltalk_familie: 'Familie und Status',
  smalltalk_hobbys: 'Hobbys',
  // Travel + Transportation
  reise_ticket: 'Fahrkarte kaufen',
  reise_zug: 'Mit dem Zug',
  reise_bus: 'Mit dem Bus',
  reise_flug: 'Am Flughafen',
  reise_plaene: 'Reisepläne',
  weg_fragen: 'Nach dem Weg fragen',
  weg_beschreiben: 'Eine Wegbeschreibung verstehen',

  // Club + Nightlife (2026-08-21). Zehn Situationen, alle befuellt - mit 130
  // Saetzen die groesste Kategorie der App.
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
};

// Entfallen am 2026-08-22: die zehn Sammel-Namen 'hotel', 'reisen',
// 'wegbeschreibung', 'gesundheit', 'wohnen', 'smalltalk', 'einkaufen',
// 'restaurant', 'kultur', 'uni'. Sie stammen aus der Zeit, als jede Kategorie
// unter EINER Situation lag; seit der Aufteilung vom 2026-08-21 traegt sie
// keine Zeile mehr in keiner der vier Sprachtabellen. Geprueft, nicht
// vermutet - abgeglichen wurden alle benutzten `scenario`-Werte gegen diese
// Liste.

export function scenarioLabel(scenario: string): string {
  return SCENARIO_LABELS[scenario] ?? scenario.charAt(0).toUpperCase() + scenario.slice(1);
}
