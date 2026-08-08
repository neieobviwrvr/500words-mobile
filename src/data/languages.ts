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
  // Kurzer, generischer Beispielsatz in der Zielsprache - wird Whisper als
  // "prompt" mitgegeben (2026-08-08, echter Nutzerfall: falsch ausgesprochenes
  // Schwedisch wurde als fluessiges Franzoesisch transkribiert). Das
  // erzwungene `language`-Flag verankert nur den allerersten Token - ein
  // gleichsprachiger Prompt-Kontext haelt den Decoder ueber den GANZEN Satz
  // hinweg staerker in der richtigen Sprache, statt nur am Anfang. Bewusst
  // ein generischer, inhaltlich unabhaengiger Satz (nicht der Zielsatz
  // selbst) - ein zu spezifischer Prompt kann Whisper dazu verleiten, den
  // Prompt-Inhalt einfach zu wiederholen statt das tatsaechlich Gesagte zu
  // transkribieren (bekanntes Whisper-Prompt-Risiko).
  whisperPrompt: string;
  hasContent: boolean;
};

export const LANGUAGES: Language[] = [
  { id: 'de', label: 'Deutsch', table: 'phrasebook_master', whisperLanguage: 'de', whisperPrompt: 'Das ist ein Beispielsatz auf Deutsch.', hasContent: true },
  { id: 'sv', label: 'Schwedisch', table: 'schwedisch_phrasebook', whisperLanguage: 'sv', whisperPrompt: 'Det här är en exempelmening på svenska.', hasContent: true },
  { id: 'es', label: 'Spanisch', table: 'spanisch_phrasebook', whisperLanguage: 'es', whisperPrompt: 'Esta es una frase de ejemplo en español.', hasContent: true },
  { id: 'fr', label: 'Französisch', table: null, whisperLanguage: 'fr', whisperPrompt: 'Voici une phrase d\'exemple en français.', hasContent: false },
];

export const DEFAULT_LANGUAGE_ID = 'de';

export function getLanguage(id: string): Language {
  return LANGUAGES.find((l) => l.id === id) ?? LANGUAGES[0];
}
