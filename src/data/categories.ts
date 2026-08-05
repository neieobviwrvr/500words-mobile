// Die 13 kostenpflichtigen Zusatzkategorien aus CLAUDE.md, inkl. der
// "beinhalten"/"befaehigt dich zu"-Texte aus dem Claude-Design-Prototyp.
// Laut App-Overlay-Spec.md liefert EIN Datenbank-Eintrag pro Paket BEIDE
// Texte - das ist hier als flaches Objekt pro Kategorie abgebildet, bis das
// wirklich aus Supabase kommt (siehe Backlog in CLAUDE.md: Datenbankstruktur
// fuer den Infotext ist noch offen).

export type Category = {
  id: string;
  name: string;
  initials: string;
  includes: string;
  enables: string;
};

export const CATEGORIES: Category[] = [
  { id: 'hotel_accommodation', name: 'Hotel + Accommodation', initials: 'H·A', includes: 'Check-in/-out, Zimmerwünsche, Reklamationen im Hotel.', enables: 'ein Zimmer buchen, Probleme melden und dich im Hotel zurechtfinden.' },
  { id: 'travel_transportation', name: 'Travel + Transportation', initials: 'T·T', includes: 'Tickets, Bahnhof/Flughafen, Wegbeschreibungen.', enables: 'Fahrkarten kaufen, nach dem Weg fragen und Anschlüsse verstehen.' },
  { id: 'health_emergency', name: 'Health + Emergency', initials: 'H·E', includes: 'Arztbesuch, Apotheke, Notrufsätze.', enables: 'im Notfall Hilfe holen und Symptome beschreiben.' },
  { id: 'moving_settling', name: 'Moving + Settling', initials: 'M·S', includes: 'Wohnungssuche, Behördengänge, Ummeldung.', enables: 'eine Wohnung finden und Behördentermine meistern.' },
  { id: 'finding_friends', name: 'Finding Friends', initials: 'F·F', includes: 'Kontakte knüpfen, gemeinsame Pläne machen.', enables: 'neue Leute ansprechen und Treffen ausmachen.' },
  { id: 'love_relationship', name: 'Love + Relationship', initials: 'L·R', includes: 'Gefühle ausdrücken, Beziehungsalltag.', enables: 'über Beziehungen sprechen und Nähe ausdrücken.' },
  { id: 'dating_romance', name: 'Dating + Romance', initials: 'D·R', includes: 'Flirten, Verabredungen, Komplimente.', enables: 'ein Date organisieren und charmant flirten.' },
  { id: 'smalltalk_socialising', name: 'Smalltalk + Socialising', initials: 'S·S', includes: 'Small Talk, Vorstellen, Alltagsfragen.', enables: 'lockere Gespräche führen und dich vorstellen.' },
  { id: 'club_nightlife', name: 'Club + Nightlife', initials: 'C·N', includes: 'Anmachsprüche, an der Bar, auf der Tanzfläche.', enables: 'im Nachtleben Kontakte knüpfen und dich verständigen.' },
  { id: 'shopping_haggling', name: 'Shopping + Haggling', initials: 'S·H', includes: 'Einkaufen, Preise, Verhandeln.', enables: 'einkaufen und über den Preis verhandeln.' },
  { id: 'drinking_dining', name: 'Drinking + Dining', initials: 'D·D', includes: 'Bestellen, Restaurant, Getränke.', enables: 'im Restaurant bestellen und Empfehlungen verstehen.' },
  { id: 'culture_immersion', name: 'Culture + Immersion', initials: 'C·I', includes: 'Bräuche, Feiertage, Alltagskultur.', enables: 'kulturelle Situationen einordnen und mitreden.' },
  { id: 'university_studying', name: 'University + Studying', initials: 'U·S', includes: 'Uni-Alltag, WG-Suche, Kurse.', enables: 'dich an der Uni und in der WG zurechtzufinden.' },
];

export const CATEGORY_BY_ID: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
);

// Grundwortschatz-Themen fuer den Pfad - Platzhalter, bis die echte
// Thema-Chunking-Logik aus Supabase-Content existiert (siehe CLAUDE.md,
// Abschnitt S1: Knotenanzahl ist dynamisch/konfigurierbar, nicht hart codiert).
export const GRUNDWORTSCHATZ_THEMEN = ['Vorstellung', 'Bestellen', 'Hotel'];

// Platzhalter-Themen pro Kategorie, bis echte Lektions-Chunks existieren.
export const DEFAULT_THEMEN_PRO_KATEGORIE = ['Leute ansprechen', 'Anmachsprüche', 'Auf der Tanzfläche'];
