// Die Trainingsarten aus Simons Lektionen-Vorlage (2026-08-20,
// Reihenfolge und Titel ueberarbeitet am selben Tag).
//
// Die Reihenfolge in dieser Liste ist die Reihenfolge auf dem Screen:
// Woerter, Saetze, Konversation - von der kleinsten Einheit zur groessten.
//
// Jede ist ein eigener Uebungs-Modus mit eigenem Screen. Der Lektionen-
// Screen zeigt alle drei, damit sichtbar ist, wohin die App geht - fuer
// Modi ohne echten Screen oeffnet sich ehrlich ein Platzhalter.
//
// **"Wörter" hat seit 2026-08-24 einen echten Screen**
// (`features/training/WordReviewScreen.tsx`, Route `/training/woerter`) -
// ein Zuordnungsspiel mit Wortart-Filter (Verb/Nomen/Adjektiv/... je nach
// Sprache), noch ohne Lernkategorie-Filter und noch ohne FSRS-Anbindung
// (siehe Kommentar im Screen). "Sätze" und "Konversation" laufen weiterhin
// ueber den generischen Platzhalter in `[mode].tsx`.
//
// Verhaeltnis zum vorhandenen Uebungs-Screen: der prueft heute gesprochene
// Antworten gegen `accepted_concepts` (siehe features/evaluation). Das kommt
// der "Satz-Wiederholung" am naechsten, ist aber nicht dasselbe - deshalb
// verweist hier nichts darauf, solange nicht entschieden ist, ob der Modus
// den bestehenden Screen wiederverwendet oder ein eigener wird.

export type TrainingMode = {
  id: string;
  title: string;
  /** Was der Modus abfragt - in Nutzer-Sprache, nicht in Fachbegriffen. */
  description: string;
};

export const TRAINING_MODES: TrainingMode[] = [
  {
    id: 'woerter',
    title: 'Wörter-Wiederholung',
    description: 'Ordne Wörtern ihre Bedeutung zu.',
  },
  {
    id: 'saetze',
    title: 'Satz-Wiederholung',
    description: 'Übersetze ganze Sätze in die Zielsprache.',
  },
  {
    id: 'konversation',
    title: 'Konversationstraining',
    description: 'Antworte sinnvoll auf wechselnde Fragen.',
  },
];

export const TRAINING_MODE_BY_ID: Record<string, TrainingMode> = Object.fromEntries(
  TRAINING_MODES.map((m) => [m.id, m])
);
