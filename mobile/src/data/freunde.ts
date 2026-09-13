import { supabase } from '../lib/supabase';

// Freunde per Code (2026-09-14, Migration 20260914120000).
//
// Jedes Konto hat EINEN festen Code, den der Server vergibt. Wer ihn
// eingibt, ist sofort mit dem anderen befreundet - in beide Richtungen.
// Befreunden geht ausschliesslich ueber `freund_hinzufuegen`; die App darf
// die Tabelle `freundschaft` nur lesen.

export type Freund = {
  id: string;
  /** Anzeigename des Freundes - `null`, solange er keinen gesetzt hat. */
  name: string | null;
  seit: Date;
};

export type HinzufuegenErgebnis =
  | 'befreundet'
  | 'schon_befreundet'
  | 'eigener_code'
  | 'unbekannt'
  | 'zu_viele_versuche'
  | 'kein_konto';

/** Codes haben sechs Zeichen, siehe Migration. */
export const CODE_LAENGE = 6;

/** Wie der Server: gross, ohne Leer- und Trennzeichen. */
export function normalisiereCode(eingabe: string): string {
  return eingabe.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}

/** Der eigene Code. Beim ersten Aufruf legt der Server ihn an. `null` = nicht erreichbar. */
export async function ladeFreundescode(): Promise<string | null> {
  const { data, error } = await supabase.rpc('mein_freundescode');
  if (error || typeof data !== 'string') return null;
  return data;
}

/** Einen Code einloesen. Wirft bei Netz- oder Serverfehler. */
export async function freundHinzufuegen(
  code: string
): Promise<{ ergebnis: HinzufuegenErgebnis; name: string | null }> {
  const { data, error } = await supabase.rpc('freund_hinzufuegen', { p_code: normalisiereCode(code) });
  if (error || !data) throw new Error(error?.message ?? 'Keine Antwort');
  const antwort = data as { ergebnis: HinzufuegenErgebnis; name?: string | null };
  return { ergebnis: antwort.ergebnis, name: antwort.name ?? null };
}

/** Die eigenen Freunde, juengste zuerst. `null` = nicht erreichbar. */
export async function ladeFreunde(): Promise<Freund[] | null> {
  const { data, error } = await supabase.rpc('meine_freunde');
  if (error || !Array.isArray(data)) return null;
  return data.map((z: { freund_id: string; name: string | null; seit: string }) => ({
    id: z.freund_id,
    name: z.name,
    seit: new Date(z.seit),
  }));
}

/** Der eigene Anzeigename - der Name, unter dem Freunde einen sehen. */
export async function ladeAnzeigename(nutzerId: string): Promise<string | null> {
  const { data } = await supabase.from('profil').select('anzeigename').eq('id', nutzerId).maybeSingle();
  return (data?.anzeigename as string | null | undefined) ?? null;
}

/** Hoechstens 30 Zeichen, siehe Migration. Wirft bei Fehler. */
export const NAME_MAX = 30;

export async function speichereAnzeigename(nutzerId: string, name: string): Promise<void> {
  const sauber = name.trim().slice(0, NAME_MAX);
  // `upsert`, nicht `update`: die Profilzeile legt sonst erst der Abgleich an,
  // und ein Update auf eine fehlende Zeile saehe erfolgreich aus.
  const { error } = await supabase
    .from('profil')
    .upsert({ id: nutzerId, anzeigename: sauber || null }, { onConflict: 'id' });
  if (error) throw new Error(error.message);
}
