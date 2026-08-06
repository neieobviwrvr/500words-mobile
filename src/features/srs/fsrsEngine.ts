import { fsrs, generatorParameters, createEmptyCard, Rating, type Card, type Grade } from 'ts-fsrs';
import { Tier } from '../evaluation/evaluateConcepts';

// FSRS (Free Spaced Repetition Scheduler) statt SM-2 - Entscheidung vom
// 2026-08-06/07-Gespraech: robuster gegen einzelne Zufallstreffer, weil es
// die GESAMTE Review-Historie pro Karte gewichtet statt nur die letzte
// Antwort (SM-2s Schwaeche). Nutzt die etablierte ts-fsrs-Bibliothek statt
// den Algorithmus selbst nachzubauen - die Gewichte sind empirisch aus
// grossen Datensaetzen kalibriert, das will man nicht selbst schaetzen.
// Komplett lokal/on-device, keine Laufzeitkosten.
//
// Ziel-Erinnerungsquote bewusst auf 85% statt FSRS-Standard 90% gesetzt -
// Nutzer-Entscheidung: etwas grosszuegigeres Wiederholungstempo, kostet ein
// bisschen reine Lern-Effizienz, fuehlt sich aber entspannter an (siehe
// CLAUDE.md "SRS soll nicht schlecht gelaunt machen").
const params = generatorParameters({ request_retention: 0.85 });
const scheduler = fsrs(params);

// Tier-zu-Grade-Mapping - ebenfalls Nutzer-Entscheidung: "Ueberlebensmodus"
// zaehlt als milder Erfolg (Rating.Hard: Intervall waechst trotzdem leicht),
// NICHT als Fehler/Reset. Nur "nicht_verstanden" reset hart auf Rating.Again.
export function tierToGrade(tier: Tier): Grade {
  switch (tier) {
    case 'nicht_verstanden':
      return Rating.Again;
    case 'ueberlebt':
      return Rating.Hard;
    case 'richtig':
      return Rating.Good;
  }
}

export function newCard(now: Date = new Date()): Card {
  return createEmptyCard(now);
}

export function reviewCard(card: Card, tier: Tier, now: Date = new Date()): Card {
  const grade = tierToGrade(tier);
  const { card: nextCard } = scheduler.next(card, now, grade);
  return nextCard;
}

// Eine Karte ohne gespeicherten Zustand (noch nie geuebt) gilt als sofort
// faellig - so werden neue Karten natuerlich in den Wiederholungs-Pool
// eingefuehrt, statt erst nach einer ersten "kuenstlichen" Review faellig
// zu werden.
export function isDue(card: Card | undefined, now: Date = new Date()): boolean {
  if (!card) return true;
  return card.due.getTime() <= now.getTime();
}
