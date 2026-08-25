// Personalpronomen-Template fuer den "Personen-Zuordnung"-Rundentyp in
// Woerter-Wiederholung (siehe WordReviewScreen.tsx).
//
// GESICHERT FUER SPAETER (2026-08-24, Simons Auftrag): der Rundentyp zeigt
// die vier Pronomen bisher immer Deutsch, weil `sourceLanguageId` (O1,
// "Ich spreche...") bis heute NIRGENDS ausserhalb der Onboarding-Strecke
// gespeichert oder gelesen wird - siehe die Erklaerung im Chat vom
// 2026-08-24. Sobald sourceLanguageId einmal in AppState verankert ist UND
// die Oberflaeche generell mehrsprachig wird (nicht nur diese vier Woerter -
// heute ist buchstaeblich jeder App-Text hart Deutsch, unabhaengig von O1),
// zieht dieses Template die Pronomen-Chips nach: `PERSONALPRONOMEN_TEMPLATE[
// sourceLanguageId]` statt der heutigen festen deutschen Liste.
//
// Deckt vorerst die vier Sprachen ab, die Simon genannt hat. Weitere
// Sprachen sind ein Einzeiler - Reihenfolge ist immer
// [ich, du, er/sie, wir], damit sie 1:1 auf PERSONEN in
// WordReviewScreen.tsx abbildet.
export const PERSONALPRONOMEN_TEMPLATE: Record<string, readonly [string, string, string, string]> = {
  de: ['Ich', 'Du', 'Er/Sie', 'Wir'],
  en: ['I', 'You', 'He/She', 'We'],
  fr: ['Je', 'Tu', 'Il/Elle', 'Nous'],
  es: ['Yo', 'Tú', 'Él/Ella', 'Nosotros'],
};
