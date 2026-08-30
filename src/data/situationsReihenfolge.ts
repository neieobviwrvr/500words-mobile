// Feste Reihenfolge der Situationen im Lektionen-Screen, je Kategorie
// (2026-08-29, Simons Vorgabe anhand von fuenf Screenshots).
//
// Bis dahin sortierte useCategorySituations.ts ausschliesslich nach
// Satzanzahl (eigene Situationen zuerst, dann geliehene, je absteigend) -
// das ergab eine Reihenfolge, die niemand geplant hatte, nur die Groesse
// der Situationen zufaellig spiegelte. Hier steht stattdessen eine bewusst
// chronologische Vorgabe: so, wie ein Gespraech/eine Situation tatsaechlich
// ablaeuft (z.B. bei Club + Nightlife erst Reinkommen, dann An der Bar,
// nicht umgekehrt).
//
// **Scenario-Werte, keine Anzeigenamen** - geliehene Situationen (z.B.
// `zahlen` in Drinking + Dining, dort als "Preise verstehen" angezeigt)
// stehen hier unter ihrem echten `scenario`-Wert, die Umbenennung passiert
// weiterhin ueber data/geliehen.ts (LEIH_NAMEN), unveraendert.
//
// **Was hier NICHT steht, verschwindet nicht.** useCategorySituations.ts
// haengt jede Situation, die zur Kategorie gehoert (eigen ODER geliehen)
// aber in keiner Liste hier auftaucht, hinten an - in der bisherigen
// Reihenfolge (eigene zuerst, dann groesste zuerst). Neuer Content braucht
// also NIE eine Aenderung hier, um sichtbar zu bleiben; nur wer ihn an eine
// bestimmte Position ruecken will, traegt ihn ein.
//
// Nur die fuenf Kategorien, fuer die eine Vorgabe existiert. Alle anderen
// bleiben bei der bisherigen Groessen-Sortierung.
export const SITUATIONS_REIHENFOLGE: Record<string, string[]> = {
  grundwortschatz: [
    'begruessung',
    'hoeflichkeit',
    'verstaendigen',
    'vorstellung',
    'zahlen',
    'uhrzeit',
    'termin',
    'notlage',
    // Neu 2026-08-29, ohne vorgegebene Position - ans Ende gesetzt.
    'kommentar',
  ],

  club_nightlife: [
    'club_einlass',
    'club_bar',
    'club_trinkkultur',
    'club_sicherheit',
    'club_verloren',
    'club_ansprechen',
    'club_komplimente',
    'club_naeherkommen',
    'club_nachtlogistik',
    'club_ktv',
  ],

  // Fast alle Positionen sind geliehene Situationen aus Grundwortschatz/
  // Health, mit fuer Drinking + Dining eigenen Namen (siehe LEIH_NAMEN in
  // geliehen.ts) - `health_allergie` und `zahlen`/`verstaendigen` sind daher
  // absichtlich hier drin, nicht vergessen.
  drinking_dining: [
    'essen_platz',
    'health_allergie',
    'essen_unvertraeglich',
    'zahlen',
    'verstaendigen',
    'essen_schaerfe',
    'essen_getraenke',
    'essen_bestellen',
    'essen_strassenessen',
    'essen_teilen',
    'essen_geschmack',
    'essen_bezahlen',
  ],

  university_studying: [
    'uni_orientierung',
    // Neu 2026-08-29 - stand von Anfang an an dieser Position in der
    // Vorgabe, war bis dahin nur noch nicht gebaut.
    'uni_freunde',
    'uhrzeit',
    'uni_organisation',
    'uni_kurswahl',
    'termin',
    'verstaendigen',
    'uni_bibliothek',
    'uni_zusammen',
    'uni_pruefung',
  ],

  // job_work (2026-08-29): die urspruengliche Bild-Vorgabe bestand fast nur
  // aus geliehenen Grundwortschatz-Situationen, die inhaltlich mit den
  // eigenen job_work-Szenarien kollidierten (siehe geliehen.ts). Simons
  // Entscheidung: die Leihgaben raus, stattdessen die 7 eigenen Szenarien -
  // in der Reihenfolge, in der sie im echten Leben aufeinander folgen
  // (Suche -> Gespraech -> Arbeitsalltag -> Probleme -> Bezahlung).
  job_work: [
    'job_suchen',
    'job_gespraech',
    'job_schicht',
    'job_kollegen',
    'job_kunden',
    'job_abwesend',
    'job_lohn',
  ],
};
