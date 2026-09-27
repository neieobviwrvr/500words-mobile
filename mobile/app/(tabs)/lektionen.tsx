import { GelerntScreen } from '../../src/features/lessons/GelerntScreen';

// Tab 2 - Uebersicht ueber alles, was in dieser Sprache schon gelernt ist:
// Saetze und Woerter getrennt, je Eintrag eine Karte mit Anzahl, Stufe und
// Bilanz (2026-09-27, Simons Auftrag - siehe Kopf von GelerntScreen.tsx).
//
// Vorher stand hier `LessonsScreen` (Kategorie-Reihen mit waagerecht
// scrollenden Situations-Karten). Die Datei bleibt liegen: das Zurueckdrehen
// ist dieser eine Import, solange der neue Aufbau nicht auf dem Geraet
// bestaetigt ist - dieselbe Regel wie bei PathScreen und S1.
export default function Lektionen() {
  return <GelerntScreen />;
}
