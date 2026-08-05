// Zielsprachen, die die App aktuell anbietet. Nur "de"/"sv" haben echten
// Supabase-Content (phrasebook_master bzw. schwedisch_phrasebook, siehe
// CLAUDE.md) - "es"/"fr" sind bewusst als "(bald)" markiert, damit die
// Sprachauswahl auf S1 nicht etwas als aktiv bewirbt, fuer das es null
// Inhalte gibt.

export type Language = {
  id: string;
  label: string;
  table: string | null; // Supabase-Tabelle mit den Phrasebook-Saetzen dieser Sprache
  whisperLanguage: string; // Sprachcode fuer whisper.rn transcribe()
  hasContent: boolean;
};

export const LANGUAGES: Language[] = [
  { id: 'de', label: 'Deutsch', table: 'phrasebook_master', whisperLanguage: 'de', hasContent: true },
  { id: 'sv', label: 'Schwedisch', table: 'schwedisch_phrasebook', whisperLanguage: 'sv', hasContent: true },
  { id: 'es', label: 'Spanisch', table: null, whisperLanguage: 'es', hasContent: false },
  { id: 'fr', label: 'Französisch', table: null, whisperLanguage: 'fr', hasContent: false },
];

export const DEFAULT_LANGUAGE_ID = 'de';

export function getLanguage(id: string): Language {
  return LANGUAGES.find((l) => l.id === id) ?? LANGUAGES[0];
}
