import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Card } from 'ts-fsrs';

// Lokaler Speicher fuer die FSRS-Karten-Zustaende - AsyncStorage statt
// Supabase, weil Supabase Auth noch nicht existiert (siehe CLAUDE.md-
// Backlog "Gast-Modus = nur lokale Geraete-Speicherung"). Passt zur
// bereits entschiedenen Architektur, statt darauf zu warten. Wenn spaeter
// Supabase Auth kommt, kann dieser Speicher 1:1 als Sync-Quelle fuer
// registrierte Nutzer dienen.

const STORAGE_KEY_PREFIX = 'srs_card_v1:';

// EIN gemeinsamer Pool ueber Woerter+Saetze+alle Kategorien (siehe
// CLAUDE.md Spaced-Repetition-Abschnitt) - der Key kodiert Sprache+Tabelle+
// Satz-ID, damit z.B. Deutsch-Satz-47 und Schwedisch-Satz-47 (unabhaengige
// Tabellen, siehe die id-Verwirrung in schwedisch_phrasebook) nicht
// kollidieren.
//
// Die ID darf auch ein STRING sein (2026-08-21). Der gefuehrte Kurs hat
// weder Tabelle noch numerische Satz-IDs - seine Saetze entstehen erst zur
// Laufzeit aus Rahmen plus Slot-Wort. Der `table`-Platz traegt fuer ihn
// deshalb einen Namensraum statt eines Tabellennamens:
//
//   zh:course-wort:学生     Wortkarte, Schluessel ist das Hanzi
//   zh:course-rahmen:1.1    Rahmenkarte, Schluessel ist die Lektions-ID
//
// Warum Hanzi und nicht die Supabase-ID aus chinesisch_vocab: die steht
// nicht in chineseCourse.ts, und der Kurs soll offline laufen. Hanzi ist in
// unseren Daten eindeutig (der Import nutzt es als on_conflict-Schluessel)
// und ueberlebt einen Neuimport.
//
// Zahlen bleiben unveraendert gueltig - bestehende Schluessel verschieben
// sich durch diese Erweiterung NICHT.
export function cardKey(languageId: string, table: string, id: string | number): string {
  return `${STORAGE_KEY_PREFIX}${languageId}:${table}:${id}`;
}

/** Namensraeume des gefuehrten Kurses - siehe `cardKey`. */
export const KURS_WORT = 'course-wort';
export const KURS_RAHMEN = 'course-rahmen';

function deserializeCard(raw: string): Card {
  const parsed = JSON.parse(raw);
  return {
    ...parsed,
    due: new Date(parsed.due),
    last_review: parsed.last_review ? new Date(parsed.last_review) : undefined,
  };
}

export async function loadCard(key: string): Promise<Card | undefined> {
  const raw = await AsyncStorage.getItem(key);
  if (!raw) return undefined;
  try {
    return deserializeCard(raw);
  } catch {
    return undefined;
  }
}

export async function saveCard(key: string, card: Card): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(card));
}

// Laedt alle gespeicherten Karten-Zustaende auf einmal, fuer die
// Faelligkeits-Filterung in SrsScreen/ExerciseScreen (source="srs").
// AsyncStorage hat kein "getAll mit Prefix" - erst alle Keys holen, dann
// filtern und per multiGet in einem Rutsch laden.
export async function loadAllCards(): Promise<Record<string, Card>> {
  const allKeys = await AsyncStorage.getAllKeys();
  const srsKeys = allKeys.filter((k) => k.startsWith(STORAGE_KEY_PREFIX));
  if (srsKeys.length === 0) return {};
  const pairs = await AsyncStorage.multiGet(srsKeys);
  const result: Record<string, Card> = {};
  for (const [key, raw] of pairs) {
    if (!raw) continue;
    try {
      result[key] = deserializeCard(raw);
    } catch {
      // Kaputter Eintrag - ignorieren statt die ganze Faelligkeits-Pruefung
      // abstuerzen zu lassen.
    }
  }
  return result;
}
