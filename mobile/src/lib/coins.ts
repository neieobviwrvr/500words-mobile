import { supabase } from './supabase';
import { HERAUSFORDERUNGEN } from '../data/herausforderungen';
import { FEEDBACK_BELOHNUNG, FEEDBACK_BELOHNUNG_SCHLUESSEL } from '../data/rueckmeldung';
import type { Fortschritt } from '../state/AppState';

/**
 * Coins gegen den Server (2026-09-13, Simon: "mach, dass das mit den Coins
 * funktioniert und nicht gecheatet werden kann auf Supabase").
 *
 * Der Kontostand eines Kontos ist die Summe seiner Zeilen in `coin_buchung`
 * (Migration 20260913180000). Die App darf dort nur LESEN; gebucht wird
 * ausschliesslich ueber `coin_abholen(grund)`, und die Datenbank prueft
 * selbst, ob die Bedingung erfuellt ist und ob es den Grund schon gab.
 *
 * Die App nennt dabei nur den GRUND, nie den Betrag - den legt der Server
 * fest (`coin_belohnung`). Die Betraege hier sind nur fuer die Anzeige,
 * solange eine Gutschrift noch nicht bestaetigt ist.
 */

export type AbholErgebnis = 'vergeben' | 'schon_vergeben' | 'bedingung_fehlt' | 'unbekannt' | 'kein_konto';

export const ONBOARDING_COIN_GRUND = 'onboarding_lektion';

/** Was jeder Grund einbringt - Spiegel von `coin_belohnung`, nur zur Anzeige. */
export const COIN_BETRAEGE: Record<string, number> = {
  [ONBOARDING_COIN_GRUND]: 1,
  [FEEDBACK_BELOHNUNG_SCHLUESSEL]: FEEDBACK_BELOHNUNG,
  ...Object.fromEntries(HERAUSFORDERUNGEN.filter((h) => h.quelle).map((h) => [h.id, h.coins])),
};

/**
 * Ob das Geraet die Bedingung SELBST fuer erfuellt haelt.
 *
 * Entscheidet, was mit einer abgelehnten Gutschrift passiert: lehnt der
 * Server eine Herausforderung ab, obwohl der Zaehler hier reicht, hat er den
 * Zaehler nur noch nicht - der Abgleich schiebt ihn beim naechsten Mal hoch,
 * die Gutschrift bleibt also stehen. Reicht er auch hier nicht, war sie nie
 * berechtigt und faellt weg.
 */
export function lokalErfuellt(grund: string, fortschritt: Fortschritt): boolean {
  const h = HERAUSFORDERUNGEN.find((x) => x.id === grund);
  return !!h?.quelle && fortschritt[h.quelle] >= h.ziel;
}

/** Eine Gutschrift anfordern. `null` = nicht erreichbar, spaeter erneut versuchen. */
export async function coinAbholen(grund: string): Promise<AbholErgebnis | null> {
  const { data, error } = await supabase.rpc('coin_abholen', { p_grund: grund });
  if (error || typeof data !== 'string') return null;
  return data as AbholErgebnis;
}

/**
 * Alle Buchungen des angemeldeten Kontos, als Grund -> Betrag.
 * `null` = nicht erreichbar; dann gilt weiter der zuletzt geladene Stand.
 */
export async function ladeCoinBuchungen(nutzerId: string): Promise<Record<string, number> | null> {
  const { data, error } = await supabase
    .from('coin_buchung')
    .select('grund, betrag')
    .eq('nutzer_id', nutzerId);
  if (error || !data) return null;
  const buchungen: Record<string, number> = {};
  for (const z of data) buchungen[z.grund as string] = z.betrag as number;
  return buchungen;
}
