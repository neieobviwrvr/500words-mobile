import type { Fortschritt } from '../state/AppState';

/**
 * Herausforderungen: kleine Ziele, die Coins einbringen (2026-08-22).
 *
 * Nutzer-Vorgabe (Simon): "ein kleiner Extratab auf der Profilseite bezueglich
 * Achievements und Herausforderungen die anstehen (zb 5 Leute einladen, 3
 * Lektionen/10 Saetze perfekt beantworten etc um Kisten oder Coins zu
 * bekommen)".
 *
 * **Warum "ohne Fehler" und nicht "98 Prozent":** CLAUDE.md haelt fest, dass
 * die Bewertung drei Stufen liefert (nicht_verstanden / ueberlebt / richtig)
 * und keinen Prozentwert - eine 98%-Schwelle braeuchte erst eine Punktzahl je
 * Lektion. "Jede Aufgabe richtig" ist dagegen aus den vorhandenen Daten
 * bestimmbar. Damit ist die Luecke umgangen statt vertagt.
 *
 * **Was hier NICHT steht, steht mit Absicht nicht hier:** eine Herausforderung
 * ohne messbaren Fortschritt waere Dekoration. `gesperrt` sagt offen, was
 * noch nicht zaehlbar ist, statt einen Balken bei null einzufrieren und den
 * Nutzer raten zu lassen.
 */

export type Herausforderung = {
  /** Zugleich der `grantId` fuer die Coin-Gutschrift - einmal pro Schluessel. */
  id: string;
  titel: string;
  text: string;
  ziel: number;
  coins: number;
  /** Woraus der Fortschritt kommt. `null` = noch nicht messbar. */
  quelle: keyof Fortschritt | null;
  /** Warum es noch nicht zaehlt - nur gesetzt, wenn `quelle` null ist. */
  gesperrt?: string;
};

export const HERAUSFORDERUNGEN: Herausforderung[] = [
  {
    id: 'saetze_perfekt_10',
    titel: '10 Sätze ohne Fehler',
    text: 'Antworte zehnmal auf Richtig-Niveau. Überlebensmodus zählt nicht mit.',
    ziel: 10,
    coins: 1,
    quelle: 'perfekteSaetze',
  },
  {
    id: 'lektionen_perfekt_3',
    titel: '3 Lektionen am Stück sauber',
    text: 'Drei Lektionen, in denen jede einzelne Aufgabe richtig war.',
    ziel: 3,
    coins: 2,
    quelle: 'perfekteLektionen',
  },
  {
    id: 'saetze_perfekt_50',
    titel: '50 Sätze ohne Fehler',
    text: 'Das gleiche noch einmal, nur fünfmal so weit.',
    ziel: 50,
    coins: 3,
    quelle: 'perfekteSaetze',
  },
  {
    id: 'freunde_5',
    titel: '5 Freunde einladen',
    text: 'Wenn fünf Geworbene ein Konto anlegen.',
    ziel: 5,
    coins: 3,
    quelle: null,
    // Ehrlich statt eingefroren: es gibt noch keine Konten, also kann niemand
    // "ein Konto anlegen". Sobald die Nutzerdaten serverseitig liegen, wird
    // hier eine echte Quelle eingetragen und der Hinweis faellt weg.
    gesperrt: 'Sobald es Konten gibt',
  },
];

/** Wie weit ist diese Herausforderung? */
export function standVon(h: Herausforderung, fortschritt: Fortschritt): number {
  return h.quelle ? fortschritt[h.quelle] : 0;
}

/**
 * Reihenfolge auf dem Screen: erst was abzuholen ist, dann was laeuft, dann
 * Erledigtes, dann Gesperrtes.
 *
 * Der Sinn: die eine Zeile, auf die man tippen SOLL, steht immer oben. Sonst
 * verschwindet sie zwischen abgehakten Zeilen, sobald ein paar erledigt sind.
 */
export function sortiere(
  liste: Herausforderung[],
  fortschritt: Fortschritt,
  abgeholt: Record<string, boolean>,
): Herausforderung[] {
  const rang = (h: Herausforderung) => {
    if (h.quelle === null) return 3;
    const fertig = standVon(h, fortschritt) >= h.ziel;
    if (fertig && !abgeholt[h.id]) return 0;
    if (fertig) return 2;
    return 1;
  };
  return [...liste].sort((a, b) => rang(a) - rang(b) || a.ziel - b.ziel);
}
