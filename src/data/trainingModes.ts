// Die Trainingsarten aus Simons Lektionen-Vorlage (2026-08-20,
// Reihenfolge und Titel ueberarbeitet am selben Tag).
//
// Die Reihenfolge in dieser Liste ist die Reihenfolge auf dem Screen:
// Woerter, Saetze, Konversation - von der kleinsten Einheit zur groessten.
//
// Jede ist ein eigener Uebungs-Modus mit eigenem Screen. **Noch keiner davon
// ist gebaut** - der Lektionen-Screen zeigt sie trotzdem, damit sichtbar ist,
// wohin die App geht, und die Screens sagen es beim Oeffnen ehrlich.
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
