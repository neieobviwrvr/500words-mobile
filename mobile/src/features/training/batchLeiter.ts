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
    const wert = Number(raw);
    if (Number.isFinite(wert)) result[key] = wert;
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
  await AsyncStorage.setItem(zaehlerKey(praefix, languageId, key), String(neu));
  return neu;
}

/** Setzt einen Zaehler direkt (fuer die sanfte Ruecksetzung auf schwelle-1 statt 0). */
export async function setzeZaehler(
  praefix: string,
  languageId: string,
  key: string,
  wert: number
): Promise<void> {
  await AsyncStorage.setItem(zaehlerKey(praefix, languageId, key), String(wert));
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
  await AsyncStorage.setItem(zaehlerKey(praefix, languageId, key), '1');
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
