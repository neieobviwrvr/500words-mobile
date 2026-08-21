// Zielsprachen, die die App aktuell anbietet. Nur "de"/"sv" haben echten
// Supabase-Content (phrasebook_master bzw. schwedisch_phrasebook, siehe
// CLAUDE.md) - "es"/"fr" sind bewusst als "(bald)" markiert, damit die
// Sprachauswahl auf S1 nicht etwas als aktiv bewirbt, fuer das es null
// Inhalte gibt.

export type Language = {
  id: string;
  label: string;
  table: string | null; // Supabase-Tabelle mit den Phrasebook-Saetzen dieser Sprache
  sttLanguage: string; // Sprachcode fuer den STT-Aufruf (Speechmatics)
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
  sttPrompt: string;
  // Gebietsschema fuer die Sprachausgabe (IETF BCP 47, z.B. "sv-SE").
  // Getrennt von `sttLanguage`, weil die Spracherkennung mit dem kurzen Code
  // arbeitet, die Systemstimme aber ein vollstaendiges Gebietsschema braucht,
  // um die richtige Stimme zu waehlen.
  ttsLocale: string;
  hasContent: boolean;
  // Vokabeltabelle der 500 haeufigsten Woerter, plus die Spalte mit dem Wort
  // in der Zielsprache. Getrennt von `table`, weil das zwei verschiedene
  // Inhalte sind: `table` haelt Saetze mit einer Lern-`category`
  // (hotel_accommodation etc.), die Vokabeltabelle haelt Einzelwoerter, deren
  // `category`-Spalte die WORTART meint (Nomen, Verb, ...) - siehe
  // data/vocabContent.ts.
  //
  // Nicht jede Sprache hat beides: Deutsch hat nur Saetze, Franzoesisch nur
  // Woerter. `null` heisst schlicht "gibt es fuer diese Sprache nicht".
  vocabTable: string | null;
  vocabColumn: string | null;
};

export const LANGUAGES: Language[] = [
  { id: 'de', label: 'Deutsch', table: 'phrasebook_master', sttLanguage: 'de', sttPrompt: 'Das ist ein Beispielsatz auf Deutsch.', ttsLocale: 'de-DE', hasContent: true, vocabTable: null, vocabColumn: null },
  { id: 'sv', label: 'Schwedisch', table: 'schwedisch_phrasebook', sttLanguage: 'sv', sttPrompt: 'Det här är en exempelmening på svenska.', ttsLocale: 'sv-SE', hasContent: true, vocabTable: 'schwedisch_vocab', vocabColumn: 'swedish' },
  { id: 'es', label: 'Spanisch', table: 'spanisch_phrasebook', sttLanguage: 'es', sttPrompt: 'Esta es una frase de ejemplo en español.', ttsLocale: 'es-ES', hasContent: true, vocabTable: null, vocabColumn: null },
  // Chinesisch traegt bisher NUR den gefuehrten Kurs (12 Module, siehe
  // data/chineseCourse.ts) - kein Phrasebook, also `table: null`, und keine
  // Vokabeltabelle in Supabase, also `vocabTable: null`.
  //
  // `hasContent: true` trotzdem, sonst waere die Sprache in der Auswahl
  // ausgegraut und der Kurs gar nicht erreichbar. Das Onboarding schliesst
  // sie ueber die zusaetzliche Bedingung `table !== null` weiterhin aus -
  // dort geht es um Satz-Content, den es fuer Chinesisch nicht gibt.
  { id: 'zh', label: 'Chinesisch', table: null, sttLanguage: 'cmn', sttPrompt: '这是一个中文例句。', ttsLocale: 'zh-CN', hasContent: true, vocabTable: null, vocabColumn: null },
  { id: 'fr', label: 'Französisch', table: null, sttLanguage: 'fr', sttPrompt: 'Voici une phrase d\'exemple en français.', ttsLocale: 'fr-FR', hasContent: false, vocabTable: 'franz_vocab', vocabColumn: 'french' },
];

export const DEFAULT_LANGUAGE_ID = 'de';

export function getLanguage(id: string): Language {
  return LANGUAGES.find((l) => l.id === id) ?? LANGUAGES[0];
}
