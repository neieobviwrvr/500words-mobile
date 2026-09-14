import type { Card } from 'ts-fsrs';
import type { Tagebuch, TagesZaehler } from '../features/srs/lerntagebuch';
import type { Trainingsstand } from '../features/training/batchLeiter';
import type { ProfilAngaben } from '../state/OnboardingState';

/**
 * Wie zwei Geraetestaende zusammengefuehrt werden (2026-08-22).
 *
 * Reine Funktionen ohne Netz, Speicher oder React - aus demselben Grund wie
 * bei `lockscreenRotation`: die Regeln, nach denen Lernfortschritt gewinnt
 * oder verliert, sind der heikelste Teil des Abgleichs und muessen ohne
 * laufende App pruefbar sein.
 *
 * **Es gibt bewusst NICHT eine Regel fuer alles.** "Der neuere Stand gewinnt"
 * ist bei Coins richtig und bei Zaehlern falsch: wer auf dem Handy 40 Saetze
 * geschafft hat und auf dem iPad 5, hat 40 - nicht 5, nur weil das iPad
 * spaeter zuletzt geschrieben hat. Jedes Feld bekommt deshalb die Regel, die
 * zu seiner Bedeutung passt:
 *
 *   monoton wachsend  -> das Groessere gewinnt   (Zaehler)
 *   einmalige Marken  -> Vereinigung             (vergebene Geschenke, Kaeufe)
 *   ersetzbarer Wert  -> der juengere gewinnt    (Coins, Einstellungen)
 *   verdichtete Sicht -> die juengere Bewertung  (FSRS-Karten)
 */

/** Zaehler, die nur steigen: das Maximum ist immer der wahre Stand. */
export function mergeZaehler<T extends Record<string, number>>(lokal: T, fern: Partial<T>): T {
  const raus: Record<string, number> = { ...lokal };
  for (const [k, v] of Object.entries(fern)) {
    if (typeof v === 'number') raus[k] = Math.max(raus[k] ?? 0, v);
  }
  return raus as T;
}

/**
 * Einmalige Marken - vergebene Geschenke, freigeschaltete Kategorien.
 *
 * Vereinigung, nie Abzug: dass ein Geraet eine Marke nicht kennt, heisst
 * nicht, dass sie zurueckgenommen wurde - es war nur offline. Wegnehmen darf
 * hier grundsaetzlich niemand; ein abgelaufenes Abo entfernt die Zeile
 * serverseitig, nicht der Abgleich.
 */
export function mergeMarken(
  lokal: Record<string, boolean>,
  fern: Record<string, boolean>,
): Record<string, boolean> {
  const raus = { ...lokal };
  for (const [k, v] of Object.entries(fern)) if (v) raus[k] = true;
  return raus;
}

/**
 * Ersetzbare Werte: der juengere Schreibvorgang gewinnt.
 *
 * Fuer Coins die einzig haltbare Regel, sobald man sie AUSGEBEN kann - ein
 * "das Groessere gewinnt" wuerde jede Ausgabe rueckgaengig machen, sobald
 * ein zweites Geraet mit altem Stand auftaucht. Heute gibt es noch nichts zu
 * kaufen (siehe CLAUDE.md, Coins), aber die Regel jetzt richtig zu haben
 * kostet nichts und spaeter viel.
 */
export function mergeJuengeres<T>(
  lokal: T,
  lokalAm: number,
  fern: T,
  fernAm: number,
): T {
  return fernAm > lokalAm ? fern : lokal;
}

/** Was eine Karte zum Vergleich braucht - schlanker als der volle Zustand. */
export type KartenStand = { zustand: Card; zuletztBewertet: number };

/**
 * FSRS-Karten zusammenfuehren: je Karte gewinnt die JUENGERE Bewertung.
 *
 * Das ist nicht willkuerlich, sondern folgt daraus, wie FSRS arbeitet: eine
 * Karte verdichtet ihre GESAMTE Review-Historie in Stabilitaet und
 * Schwierigkeit (der Grund, warum wir FSRS statt SM-2 nehmen, siehe
 * CLAUDE.md). Die spaeter bewertete Fassung kennt damit alles, was die
 * fruehere kannte, plus einen Schritt. Sie zu nehmen verliert nichts.
 *
 * Karten, die nur EINE Seite kennt, kommen unveraendert mit - der Fall "auf
 * dem Handy gelernt, das iPad war zwei Wochen aus" darf nichts loeschen.
 */
export function mergeKarten(
  lokal: Record<string, KartenStand>,
  fern: Record<string, KartenStand>,
): Record<string, KartenStand> {
  const raus: Record<string, KartenStand> = { ...lokal };
  for (const [schluessel, fernKarte] of Object.entries(fern)) {
    const lokalKarte = raus[schluessel];
    if (!lokalKarte || fernKarte.zuletztBewertet > lokalKarte.zuletztBewertet) {
      raus[schluessel] = fernKarte;
    }
  }
  return raus;
}

/**
 * Welche Karten muessen hochgeladen werden?
 *
 * Nur die, die lokal juenger sind als auf dem Server - alles andere waere
 * ein Schreibvorgang ohne Aenderung. Bei mehreren hundert Karten ist das der
 * Unterschied zwischen einem kurzen Abgleich und einem, der bei jedem Start
 * die ganze Tabelle neu schreibt.
 */
export function zuSchicken(
  lokal: Record<string, KartenStand>,
  fern: Record<string, KartenStand>,
): string[] {
  return Object.keys(lokal).filter((k) => {
    const f = fern[k];
    return !f || lokal[k].zuletztBewertet > f.zuletztBewertet;
  });
}

/**
 * Lern-Tagebuch (2026-09-14): Tag -> `sprache:weg` -> Zaehler.
 *
 * Dieselbe Regel wie fuer alle Zaehler: je Zaehler das GROESSERE. Wer auf dem
 * Handy an einem Tag 40 Antworten gab und auf dem iPad 5, hat 40 - nicht 45,
 * denn welches Geraet welche Antworten schon kennt, weiss niemand. Ein Tag
 * oder Eintrag, den nur eine Seite kennt, kommt dazu; weggenommen wird nie
 * etwas. Auf dem Server erzwingt `tagebuch_abgleichen` dieselbe Regel.
 */
export function mergeTagebuch(lokal: Tagebuch, fern: Tagebuch): Tagebuch {
  const raus: Tagebuch = {};
  for (const buch of [lokal, fern]) {
    for (const [tag, eintraege] of Object.entries(buch)) {
      for (const [eintrag, z] of Object.entries(eintraege)) {
        const bisher = raus[tag]?.[eintrag];
        (raus[tag] ??= {})[eintrag] = bisher
          ? {
              richtig: Math.max(bisher.richtig, z.richtig),
              ueberlebt: Math.max(bisher.ueberlebt, z.ueberlebt),
              nichtVerstanden: Math.max(bisher.nichtVerstanden, z.nichtVerstanden),
              lektionen: Math.max(bisher.lektionen, z.lektionen),
            }
          : { ...z };
      }
    }
  }
  return raus;
}

export type TagebuchZeile = { tag: string; sprache: string; weg: string } & TagesZaehler;

/**
 * Welche Eintraege des Geraets der Server noch nicht (vollstaendig) hat - also
 * fehlen oder in mindestens einem Zaehler kleiner sind. Alles andere zu
 * schicken waere ein Schreibvorgang ohne Wirkung.
 *
 * `seit` (Tag, einschliesslich) begrenzt auf das Fenster, das der Abgleich
 * vom Server geholt hat: aeltere Eintraege kennt `fern` nicht und sie
 * gingen sonst bei JEDEM Abgleich erneut hinaus.
 */
export function tagebuchZuSchicken(lokal: Tagebuch, fern: Tagebuch, seit?: string): TagebuchZeile[] {
  const zeilen: TagebuchZeile[] = [];
  for (const [tag, eintraege] of Object.entries(lokal)) {
    if (seit && tag < seit) continue;
    for (const [eintrag, z] of Object.entries(eintraege)) {
      const f = fern[tag]?.[eintrag];
      const mehr =
        !f ||
        z.richtig > f.richtig ||
        z.ueberlebt > f.ueberlebt ||
        z.nichtVerstanden > f.nichtVerstanden ||
        z.lektionen > f.lektionen;
      if (!mehr) continue;
      const trenner = eintrag.indexOf(':');
      if (trenner <= 0) continue;
      zeilen.push({ tag, sprache: eintrag.slice(0, trenner), weg: eintrag.slice(trenner + 1), ...z });
    }
  }
  return zeilen;
}

/**
 * Stufen-Zaehler der Woerter- und Saetze-Wiederholung (2026-09-14).
 *
 * Je Eintrag die JUENGERE Aenderung, nicht der groessere Wert: die Zaehler
 * sinken bei einer falschen Antwort, und ein Server mit dem alten, hoeheren
 * Stand haette diese Rueckstufung sonst bei jedem Abgleich zurueckgedreht.
 * Gleich alt (etwa zwei Eintraege aus der Zeit vor den Zeitstempeln, oder
 * die Einweg-Marken mit Zeitpunkt 0): der groessere Wert.
 */
export function mergeTraining(lokal: Trainingsstand, fern: Trainingsstand): Trainingsstand {
  const raus: Trainingsstand = { ...lokal };
  for (const [k, f] of Object.entries(fern)) {
    if (!Array.isArray(f) || f.length < 2) continue;
    const l = raus[k];
    if (!l || f[1] > l[1] || (f[1] === l[1] && f[0] > l[0])) raus[k] = [f[0], f[1]];
  }
  return raus;
}

/** Ob zwei Trainingsstaende gleich sind - dann muss nichts hochgeladen werden. */
export function trainingGleich(a: Trainingsstand, b: Trainingsstand): boolean {
  const ka = Object.keys(a);
  if (ka.length !== Object.keys(b).length) return false;
  return ka.every((k) => b[k] && b[k][0] === a[k][0] && b[k][1] === a[k][1]);
}

/**
 * Angaben aus dem Onboarding (2026-09-14): Name, Anrede, Alter, Ziele ...
 *
 * Grundsaetzlich gewinnt die juengere Fassung als GANZES - es sind
 * zusammengehoerige Antworten, keine einzelnen Zaehler. Mit einer Ausnahme,
 * die vor dem Zeitstempel kommt: ein ERLEDIGTES Onboarding schlaegt ein
 * unerledigtes. Wer auf einem neuen Geraet die ersten Fragen beantwortet und
 * sich dann anmeldet, soll sein Profil zurueckbekommen, statt es mit den
 * halben Antworten von eben zu ueberschreiben.
 */
export function mergeProfil(lokal: ProfilAngaben, fern: Partial<ProfilAngaben> | null | undefined): ProfilAngaben {
  if (!fern || Object.keys(fern).length === 0) return lokal;
  const vollstaendig = { ...lokal, ...fern } as ProfilAngaben;
  if (fern.completed && !lokal.completed) return vollstaendig;
  if (lokal.completed && !fern.completed) return lokal;
  return (fern.geaendertAm ?? 0) > (lokal.geaendertAm ?? 0) ? vollstaendig : lokal;
}
