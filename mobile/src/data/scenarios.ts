// Lesbare Namen fuer die `scenario`-Werte aus der Datenbank.
//
// In Supabase stehen technische Kuerzel ('wegbeschreibung', 'uni'), die so
// nicht auf eine Karte gehoeren. Diese Zuordnung ist reine Anzeige-Logik -
// die Datenbank bleibt unberuehrt.
//
// Stand 2026-08-22: 101 Szenarien - 68 davon mit Saetzen, der Rest ist der
// beschlossene Zuschnitt fuer den Chinesisch-Ausbau. Kommt ein neues dazu, ohne hier
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
  // Neu 2026-08-29 (Simons Auftrag): kurze reaktive Aeusserungen, die ein
  // Gespraech am Laufen halten ("Wirklich?", "Stimmt.") - bewusst getrennt
  // von hoeflichkeit (Hoeflichkeitsformeln) und verstaendigen (Reparatur
  // eines Missverstaendnisses).
  kommentar: 'Kommentarsätze',
  // Neu 2026-08-26: Speichern aus der Situations-Auswahl (Wörter-
  // Wiederholung) - dort gibt es zwei Quellen, echte Phrasebook-Sätze
  // (behalten ihr echtes Szenario) und Kurs-Rahmen ohne Supabase-Zeile
  // (siehe situationsAufgaben.ts, ladeKursAufgaben). Category
  // 'grundwortschatz', weil der gefuehrte Kurs kostenlos ist.
  kurs: 'Aus dem geführten Kurs',
  // Feinere Situationen (2026-08-21). Bis dahin lag jede Kategorie unter
  // EINER Sammel-Situation ("gesundheit", "einkaufen", "restaurant") - der
  // Grund, warum das Coin-Modell keine Ware hatte: ein Thema freikaufen
  // waere dasselbe gewesen wie die ganze Kategorie freikaufen. Der Inhalt
  // existierte, er stand nur zu grob sortiert da.
  //
  // ---------------------------------------------------------------------
  // Ausbau 2026-08-22: Chinesisch soll durchgehend tragfaehig werden.
  //
  // Die Namen stehen hier VOLLSTAENDIG, bevor ein einziger Satz geschrieben
  // ist - so ist der Zuschnitt einmal entschieden und nicht Welle fuer Welle
  // neu. Situationen ohne Saetze zeigt der Katalog gar nicht an, leere
  // Eintraege kosten also nichts.
  //
  // Zieltiefe gestaffelt statt ueberall gleich (Nutzer-Entscheidung): wo die
  // Zielgruppe lebt (Travel, Drinking, Hotel, Shopping) rund 80-100 Saetze,
  // bei University und Love rund 35 - gleiche Tiefe zu erzwingen haette dort
  // Fuellmaterial ergeben.
  // ---------------------------------------------------------------------

  // Health + Emergency
  health_symptome: 'Was mir fehlt',
  health_krankenhaus: 'Im Krankenhaus',
  health_notfall: 'Notfall',
  health_allergie: 'Allergien',
  health_bezahlen: 'Versicherung und Bezahlen',
  // Shopping + Haggling
  shop_handeln: 'Handeln',
  shop_groesse: 'Größe und Farbe',
  shop_markt: 'Auf dem Markt',
  shop_supermarkt: 'Im Supermarkt',
  shop_suchen: 'Suchen und stöbern',
  shop_anprobieren: 'Anprobieren',
  shop_bezahlen: 'Preis und Bezahlen',
  shop_reklamieren: 'Umtauschen',
  // Drinking + Dining
  essen_strassenessen: 'An der Garküche',
  essen_schaerfe: 'Wie scharf?',
  essen_teilen: 'Gemeinsam essen',
  essen_getraenke: 'Getränke',
  essen_platz: 'Einen Tisch bekommen',
  essen_bestellen: 'Bestellen',
  essen_unvertraeglich: 'Was ich nicht esse',
  essen_bezahlen: 'Rechnung',
  essen_geschmack: 'Über das Essen reden',
  // Hotel + Accommodation. Die Zielgruppe schlaeft im Hostel, nicht im Hotel.
  hotel_hostel: 'Im Hostel',
  hotel_gepaeck: 'Gepäck abstellen',
  hotel_wlan: 'WLAN und Strom',
  hotel_waesche: 'Wäsche waschen',
  hotel_registrierung: 'Anmeldung bei der Polizei',
  hotel_einchecken: 'Einchecken',
  hotel_zimmer: 'Im Zimmer',
  hotel_probleme: 'Wenn etwas fehlt',
  hotel_abreise: 'Abreise',
  // Moving + Settling
  wohnen_sim: 'SIM-Karte und Nummer',
  wohnen_bezahlapp: 'Bezahl-App einrichten',
  wohnen_bank: 'Bei der Bank',
  wohnen_mitbewohner: 'Mitbewohner',
  wohnen_paket: 'Pakete und Nachbarn',
  wohnen_suchen: 'Wohnung suchen',
  wohnen_vertrag: 'Mietvertrag',
  wohnen_behoerden: 'Behörden',
  wohnen_alltag: 'Im Haus',
  // University + Studying
  uni_kurswahl: 'Kurse wählen',
  uni_campus: 'Auf dem Campus',
  uni_bibliothek: 'In der Bibliothek',
  uni_orientierung: 'Sich zurechtfinden',
  uni_organisation: 'Studium organisieren',
  uni_pruefung: 'Prüfungen',
  uni_zusammen: 'Zusammen lernen',
  // Neu 2026-08-29 (Simons Auftrag) - bewusst getrennt von uni_zusammen:
  // hier der rein soziale Einstieg (dazusetzen, sich vorstellen), dort die
  // akademische Zusammenarbeit (gemeinsam lernen, Buch ausleihen).
  uni_freunde: 'Freunde finden',
  // Culture + Immersion
  kultur_wetter: 'Wetter',
  kultur_ausgehen: 'Ausgehen',
  kultur_freizeit: 'Freizeit und Sport',
  kultur_wochenende: 'Wochenende',
  // Finding Friends. Was Smalltalk NICHT hat: der Schritt vom Reden zum
  // Wiedersehen. "Gibst du mir dein WeChat?" ist kein Smalltalk - und in
  // China der Satz, an dem alles haengt.
  freunde_kontakt: 'Kontakt tauschen',
  freunde_zusammen: 'Kommst du mit?',
  freunde_kontakthalten: 'In Kontakt bleiben',

  // Dating + Romance. Beginnt NACH dem Kontakttausch - davor ist es Club
  // oder Finding Friends (Kategoriengrenze aus CLAUDE.md).
  dating_verabreden: 'Ein Date ausmachen',
  dating_beimdate: 'Beim Date',
  dating_grenzen: 'Absagen und Grenzen',
  dating_klaeren: 'Sind wir zusammen?',

  // Love + Relationship. Trennt sich von Dating ueber die ZEIT, nicht ueber
  // das Thema: Dating sind die ersten Wochen, Love ist danach.
  liebe_gefuehle: 'Gefühle zeigen',
  liebe_fern: 'Fernbeziehung',
  liebe_familie: 'Die Familie treffen',
  // Neu 2026-08-29 (Simons Auftrag) - erster Content ueberhaupt fuer
  // love_relationship (stand vorher bei 0 Saetzen).
  liebe_spitznamen: 'Spitznamen/Rufwörter',

  // Job + Arbeit (Kategorie angelegt 2026-08-22)
  job_suchen: 'Nach Arbeit fragen',
  job_gespraech: 'Vorstellungsgespräch',
  job_schicht: 'Dienstplan und Schichten',
  job_kollegen: 'Mit Kolleg:innen',
  job_kunden: 'Kundschaft bedienen',
  job_abwesend: 'Krankmelden',
  job_lohn: 'Bezahlung',

  // Smalltalk + Socialising
  smalltalk_person: 'Über sich erzählen',
  smalltalk_familie: 'Familie und Status',
  smalltalk_hobbys: 'Hobbys',
  // Travel + Transportation
  reise_taxi: 'Taxi und DiDi',
  reise_ubahn: 'Mit der U-Bahn',
  reise_gepaeck: 'Gepäck unterwegs',
  reise_probleme: 'Wenn etwas schiefgeht',
  reise_grenze: 'Einreise und Visum',
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
