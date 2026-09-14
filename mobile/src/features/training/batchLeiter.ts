import AsyncStorage from '@react-native-async-storage/async-storage';

// Generalisierte Graduierungs-/Batch-Leiter (2026-08-26) - vorher lebte das
// alles wortspezifisch in graduierung.ts + WordReviewScreen.tsx
// (BATCH_GROESSE, aktiverBatchIndex, aktiverBatchPool, jeGraduiert). Simon
// wollte dasselbe Muster fuer die neue Saetze-Wiederholung wieder, und die
// Recherche ergab: die Logik selbst ist schon domaenenneutral (50er-Bloecke,
// 90%-Einweg-Freischaltung), nur die Storage-Funktionen hiessen hart
// `hanzi` statt generisch. Diese Datei ist die generalisierte Fassung,
// wiederverwendet von `WordReviewScreen.tsx` UND `SentenceReviewScreen.tsx`.
//
// `praefix` ersetzt den frueher fest verdrahteten Storage-Key-Anfang - fuer
// Woerter bleibt er WORTWOERTLICH `graduierung_v1:`/`je_graduiert_v1:`
// (keine Migration noetig, bestehende Daten bleiben lesbar), fuer Saetze
// bekommt jede der beiden Stufen ihren eigenen Praefix (siehe
// SentenceReviewScreen.tsx).
//
// `keyVon` ersetzt den frueher fest verdrahteten `w.hanzi`-Zugriff durch
// einen generischen Extraktor - Woerter schluesseln ueber Hanzi, Saetze
// ueber ihre Satz-ID.

function zaehlerKey(praefix: string, languageId: string, key: string): string {
  return `${praefix}${languageId}:${key}`;
}

/**
 * ALLE Praefixe, deren Zaehler zum Lernstand gehoeren (2026-09-14).
 *
 * Der Abgleich mit dem Konto (lib/sync.ts) nimmt genau diese - wer einen
 * neuen Zaehler anlegt, traegt ihn HIER ein und benutzt ihn von hier, sonst
 * bleibt er still nur auf dem Geraet. Die Werte sind die bisherigen
 * Schluessel-Anfaenge, unveraendert, damit bestehende Zaehler lesbar bleiben.
 */
export const TRAINING_PRAEFIXE = {
  wortStufe1: 'graduierung_v1:',
  wortStufe2: 'wort_stufe2_v1:',
  wortJeStufe3: 'je_graduiert_v1:',
  satzStufe1: 'satz_stufe1_v1:',
  satzStufe2: 'satz_stufe2_v1:',
  satzJeStufe3: 'satz_je_stufe3_v1:',
  katStufe1: 'kat_stufe1_v1:',
  katStufe2: 'kat_stufe2_v1:',
  katJeStufe3: 'kat_je_stufe3_v1:',
} as const;

const ALLE_PRAEFIXE: string[] = Object.values(TRAINING_PRAEFIXE);

/**
 * Ein Zaehler samt Zeitpunkt seiner letzten Aenderung (2026-09-14).
 *
 * Gespeichert als `"2@1789012345678"`. Der Zeitpunkt ist fuer den Abgleich
 * da: Zaehler duerfen hier auch SINKEN - eine falsche Antwort stuft zurueck.
 * Mit der Regel "das Groessere gewinnt" haette jeder Abgleich diese
 * Rueckstufung wieder aufgehoben, weil der Server noch den alten, hoeheren
 * Stand kennt. Deshalb gewinnt je Eintrag die JUENGERE Aenderung.
 *
 * Aeltere Eintraege ohne `@` (vor 2026-09-14) gelten als Zeitpunkt 0 und
 * verlieren damit gegen jede echte Aenderung; unter sich gewinnt der groessere
 * Wert.
 */
export type TrainingEintrag = [wert: number, geaendertAm: number];
export type Trainingsstand = Record<string, TrainingEintrag>;

function leseEintrag(roh: string): TrainingEintrag | null {
  const [w, am] = roh.split('@');
  const wert = Number(w);
  if (!Number.isFinite(wert)) return null;
  const zeit = Number(am);
  return [wert, Number.isFinite(zeit) ? zeit : 0];
}

function schreibWert(wert: number, geaendertAm: number = Date.now()): string {
  return `${wert}@${geaendertAm}`;
}

async function trainingsSchluessel(): Promise<string[]> {
  const alle = await AsyncStorage.getAllKeys();
  return alle.filter((k) => ALLE_PRAEFIXE.some((p) => k.startsWith(p)));
}

/** Der ganze Trainingsstand ueber alle Praefixe und Sprachen - fuer den Abgleich. */
export async function ladeTrainingsstand(): Promise<Trainingsstand> {
  const schluessel = await trainingsSchluessel();
  if (schluessel.length === 0) return {};
  const paare = await AsyncStorage.multiGet(schluessel);
  const stand: Trainingsstand = {};
  for (const [k, roh] of paare) {
    if (!roh) continue;
    const eintrag = leseEintrag(roh);
    if (eintrag) stand[k] = eintrag;
  }
  return stand;
}

/** Den verschmolzenen Stand zurueckschreiben. Nur uebergebene Schluessel, geloescht wird nichts. */
export async function schreibeTrainingsstand(stand: Trainingsstand): Promise<void> {
  const paare = Object.entries(stand)
    .filter(([k]) => ALLE_PRAEFIXE.some((p) => k.startsWith(p)))
    .map(([k, [wert, am]]) => [k, schreibWert(wert, am)] as [string, string]);
  if (paare.length > 0) await AsyncStorage.multiSet(paare);
}

/** Beim Abmelden: der Trainingsstand gehoert dem Konto, nicht dem Geraet. */
export async function loescheTrainingsstand(): Promise<void> {
  const schluessel = await trainingsSchluessel();
  if (schluessel.length > 0) await AsyncStorage.multiRemove(schluessel);
}

/** Alle bekannten Zaehler eines Praefixes/einer Sprache auf einmal. */
export async function ladeZaehler(praefix: string, languageId: string): Promise<Record<string, number>> {
  const allKeys = await AsyncStorage.getAllKeys();
  const vollpraefix = `${praefix}${languageId}:`;
  const eigeneKeys = allKeys.filter((k) => k.startsWith(vollpraefix));
  if (eigeneKeys.length === 0) return {};
  const pairs = await AsyncStorage.multiGet(eigeneKeys);
  const result: Record<string, number> = {};
  for (const [k, raw] of pairs) {
    if (!raw) continue;
    const key = k.slice(vollpraefix.length);
    const eintrag = leseEintrag(raw);
    if (eintrag) result[key] = eintrag[0];
  }
  return result;
}

/**
 * Zaehler aendern und speichern - gedeckelt auf [0, schwelle]. Gibt den
 * neuen Wert zurueck, damit der Aufrufer den lokalen State synchron
 * mitfuehren kann (ein Schreibvorgang ist async, die naechste Entscheidung
 * im selben Tick braucht den fertigen Wert sofort - siehe
 * `rundeAbschliessen` in WordReviewScreen.tsx fuer denselben Fall).
 */
export async function aendereZaehler(
  praefix: string,
  languageId: string,
  key: string,
  delta: number,
  schwelle: number,
  bisher: Record<string, number>
): Promise<number> {
  const alt = bisher[key] ?? 0;
  const neu = Math.max(0, Math.min(schwelle, alt + delta));
  await AsyncStorage.setItem(zaehlerKey(praefix, languageId, key), schreibWert(neu));
  return neu;
}

/** Setzt einen Zaehler direkt (fuer die sanfte Ruecksetzung auf schwelle-1 statt 0). */
export async function setzeZaehler(
  praefix: string,
  languageId: string,
  key: string,
  wert: number
): Promise<void> {
  await AsyncStorage.setItem(zaehlerKey(praefix, languageId, key), schreibWert(wert));
}

/**
 * "Je erreicht" - EINWEG-Markierung, unabhaengig vom aktuellen Zaehlerstand.
 * Ein Eintrag, der die Schwelle einmal erreicht hat, zaehlt fuer die
 * Batch-Freischaltung dauerhaft als geschafft - auch wenn der Zaehler
 * spaeter wieder faellt. Batch-Fortschritt kann dadurch nur wachsen, nie
 * schrumpfen (siehe Simons Einwand: sonst koennte ein einzelner
 * zurueckgefallener Eintrag bereits freigeschaltete SPAETERE Batches wieder
 * aus dem Pool werfen).
 */
export async function ladeJeErreicht(praefix: string, languageId: string): Promise<Set<string>> {
  const allKeys = await AsyncStorage.getAllKeys();
  const vollpraefix = `${praefix}${languageId}:`;
  const eigeneKeys = allKeys.filter((k) => k.startsWith(vollpraefix));
  return new Set(eigeneKeys.map((k) => k.slice(vollpraefix.length)));
}

/** Idempotent - erneutes Markieren eines schon markierten Eintrags ist harmlos. */
export async function markiereJeErreicht(praefix: string, languageId: string, key: string): Promise<void> {
  // Zeitpunkt 0 mit Absicht: eine Einweg-Marke hat keine "juengere" Fassung,
  // beim Abgleich soll sie einfach da sein (gleich alt -> groesserer Wert).
  await AsyncStorage.setItem(zaehlerKey(praefix, languageId, key), schreibWert(1, 0));
}

/**
 * 0-indexierter aktiver Batch: der erste `batchGroesse`-Block, der die
 * `freischaltAnteil`-Schwelle noch nicht erreicht hat (weiche statt harte
 * Freischaltung - ein einzelner hartnaeckiger Eintrag blockiert sonst den
 * Rest fuer immer). `sortiert` muss bereits nach `id` geordnet sein.
 */
export function aktiverBatchIndex<T extends { id: number }>(
  sortiert: T[],
  keyVon: (item: T) => string,
  jeErreichtSet: Set<string>,
  batchGroesse: number,
  freischaltAnteil: number
): number {
  let batchIndex = 0;
  for (; (batchIndex + 1) * batchGroesse < sortiert.length; batchIndex++) {
    const batch = sortiert.slice(batchIndex * batchGroesse, (batchIndex + 1) * batchGroesse);
    const erreicht = batch.filter((item) => jeErreichtSet.has(keyVon(item))).length;
    if (erreicht < Math.ceil(batch.length * freischaltAnteil)) break;
  }
  return batchIndex;
}

/**
 * Der aktive Batch-POOL: kumulativ alle Eintraege bis zum Ende des aktiven
 * Batches (inklusive). Fruehere Baetche bleiben mit drin - kosten nichts
 * (bereits erreichte Eintraege werden von den Aufrufern ohnehin
 * nachrangig behandelt), tragen aber dafuer, wenn einer davon zurueckfaellt
 * und erneut geuebt werden muss.
 */
export function aktiverBatchPool<T extends { id: number }>(
  pool: T[],
  keyVon: (item: T) => string,
  jeErreichtSet: Set<string>,
  batchGroesse: number,
  freischaltAnteil: number
): T[] {
  const sortiert = [...pool].sort((a, b) => a.id - b.id);
  const ende = (aktiverBatchIndex(sortiert, keyVon, jeErreichtSet, batchGroesse, freischaltAnteil) + 1) * batchGroesse;
  return sortiert.slice(0, Math.min(ende, sortiert.length));
}
