import AsyncStorage from '@react-native-async-storage/async-storage';

// Generische "Netzwerk zuerst, bei Fehler letzter gespeicherter Stand"-
// Cache-Schicht fuer alle Supabase-Abfragen. Wichtig fuer die Zielgruppe
// (Backpacker/Austauschstudenten mit oft wackeligem Auslandsdatentarif,
// siehe CLAUDE.md "Zielgruppe") - einmal geladener Content bleibt offline
// nutzbar, statt bei jedem Verbindungsaussetzer einen Fehler zu zeigen.
//
// Bewusst kein TTL/Versionierung - Phrasebook-Content aendert sich selten,
// der Cache wird einfach bei jedem erfolgreichen Netzwerk-Fetch ueberschrieben.
// Kein Ablaufdatum noetig, solange "letzter erfolgreicher Stand" gut genug ist.

const PREFIX = 'offline_cache_v1:';

export async function cachedFetch<T>(cacheKey: string, fetcher: () => Promise<T>): Promise<{ data: T; fromCache: boolean }> {
  const storageKey = PREFIX + cacheKey;
  try {
    const data = await fetcher();
    // Best-effort - ein Schreibfehler soll die frisch geladenen Daten nicht
    // wegwerfen, nur den Cache fuer's naechste Mal nicht aktualisieren.
    AsyncStorage.setItem(storageKey, JSON.stringify(data)).catch(() => {});
    return { data, fromCache: false };
  } catch (networkError) {
    const cached = await AsyncStorage.getItem(storageKey);
    if (cached != null) {
      try {
        return { data: JSON.parse(cached) as T, fromCache: true };
      } catch {
        // Kaputter Cache-Eintrag - wie kein Cache behandeln.
      }
    }
    throw networkError;
  }
}
