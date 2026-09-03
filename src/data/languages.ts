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
  /**
   * Spalte mit der LAUTSCHRIFT, bei Sprachen mit eigener Schrift - `null`
   * bei allen, die lateinisch schreiben.
   *
   * Wo sie gesetzt ist, ist die Lautschrift der eigentliche Lerntext und
   * `target_text` (Hanzi, Kyrillisch) laeuft passiv mit: TTS braucht die
   * Schrift, um ueberhaupt richtig auszusprechen, und die Spracherkennung
   * gibt sie zurueck. Siehe CLAUDE.md, "Gelernt wird ueber PINYIN, nicht
   * ueber Zeichen" - und den Grundsatz darueber, dass Lesen und Schreiben
   * gar nicht trainiert werden sollen.
   *
   * Historisch hiess die Spalte bei Chinesisch `pinyin`; Russisch bekam
   * 2026-09-03 `lautschrift`, weil "Pinyin" ein chinesisches Eigenwort ist.
   * Deshalb steht hier der Spaltenname statt eines blossen Ja/Nein - eine
   * vierte Sprache mit eigener Schrift kostet dadurch keine Code-Aenderung
   * mehr, nur einen Eintrag.
   */
  lautschriftSpalte: string | null;
};

export const LANGUAGES: Language[] = [
  { id: 'de', label: 'Deutsch', table: 'phrasebook_master', sttLanguage: 'de', sttPrompt: 'Das ist ein Beispielsatz auf Deutsch.', ttsLocale: 'de-DE', hasContent: true, vocabTable: null, vocabColumn: null, lautschriftSpalte: null },
  { id: 'sv', label: 'Schwedisch', table: 'schwedisch_phrasebook', sttLanguage: 'sv', sttPrompt: 'Det här är en exempelmening på svenska.', ttsLocale: 'sv-SE', hasContent: true, vocabTable: 'schwedisch_vocab', vocabColumn: 'swedish', lautschriftSpalte: null },
  // vocabTable zeigt seit 2026-08-30 auf spanisch_vocab (500 Woerter) -
  // vorher gab es trotz vollstaendigem Phrasebook keine einzige spanische
  // Vokabel, Woerter-Wiederholung lief fuer Spanisch komplett leer.
  { id: 'es', label: 'Spanisch', table: 'spanisch_phrasebook', sttLanguage: 'es', sttPrompt: 'Esta es una frase de ejemplo en español.', ttsLocale: 'es-ES', hasContent: true, vocabTable: 'spanisch_vocab', vocabColumn: 'spanish', lautschriftSpalte: null },
  // Chinesisch hat KEIN Phrasebook (der gefuehrte Kurs deckt das ab, siehe
  // data/chineseCourse.ts), also `table: null` bleibt bestehen fuer die
  // Onboarding-Ausschlussbedingung `table !== null`.
  //
  // `vocabTable` zeigt seit 2026-08-24 auf `chinesisch_vocab` (520 Woerter) -
  // der fruehere Stand "keine Vokabeltabelle" war ueberholt. `vocabColumn`
  // bleibt trotzdem `null`: die Tabelle hat kein einzelnes "Wort"-Feld wie
  // `swedish`/`french`, sondern hanzi+pinyin getrennt und eine andersartige
  // `category`-Spalte (Lernkategorie statt Wortart) - `loadVocabWords()` hat
  // dafuer einen eigenen Zweig, keinen generischen Spaltennamen (siehe
  // data/vocabContent.ts).
  //
  // `hasContent: true` trotzdem, sonst waere die Sprache in der Auswahl
  // ausgegraut und der Kurs gar nicht erreichbar.
  { id: 'zh', label: 'Chinesisch', table: 'chinesisch_phrasebook', sttLanguage: 'cmn', sttPrompt: '这是一个中文例句。', ttsLocale: 'zh-CN', hasContent: true, vocabTable: 'chinesisch_vocab', vocabColumn: null, lautschriftSpalte: 'pinyin' },
  // Franzoesisch hat seit 2026-08-27 ein eigenes Phrasebook
  // (Migration 20260827120000_franz_phrasebook.sql) und damit erstmals
  // Saetze - bis dahin gab es nur `franz_vocab` mit Einzelwoertern, und die
  // Sprache war im Onboarding ausgegraut.
  //
  // `hasContent: true` schaltet sie frei. Vorsicht beim Lesen der Zahlen:
  // der Grundwortschatz ist vollstaendig (der freie Teil, den jeder
  // bekommt), die KAUFKATEGORIEN sind es noch nicht - dort zeigt der Pfad
  // vorerst leere Reihen, genau wie Chinesisch es lange bei den Saetzen tat.
  { id: 'fr', label: 'Französisch', table: 'franz_phrasebook', sttLanguage: 'fr', sttPrompt: 'Voici une phrase d\'exemple en français.', ttsLocale: 'fr-FR', hasContent: true, vocabTable: 'franz_vocab', vocabColumn: 'french', lautschriftSpalte: null },

  // Italienisch, Norwegisch, Russisch (2026-09-03, Simons Auftrag "alles
  // Chinesische uebersetzen"). Tabellen stehen seit Migration
  // 20260903120000_drei_neue_sprachen.sql, werden aber erst befuellt.
  //
  // `hasContent: true` seit dem Grundwortschatz-Import am 2026-09-03 (73-75
  // Saetze je Sprache, der freie Teil, den jeder Nutzer bekommt). Die
  // KAUFKATEGORIEN sind noch leer - dort zeigt der Pfad vorerst leere
  // Reihen, genau wie Franzoesisch es nach seinem Start tat.
  { id: 'it', label: 'Italienisch', table: 'italienisch_phrasebook', sttLanguage: 'it', sttPrompt: 'Questa è una frase di esempio in italiano.', ttsLocale: 'it-IT', hasContent: true, vocabTable: 'italienisch_vocab', vocabColumn: 'italian', lautschriftSpalte: null },
  // Bokmaal, nicht Nynorsk - siehe Kopfkommentar der Migration. Das
  // TTS-Gebietsschema sagt es ausdruecklich ("nb"), damit die Systemstimme
  // nicht auf Nynorsk ausweicht.
  { id: 'no', label: 'Norwegisch', table: 'norwegisch_phrasebook', sttLanguage: 'no', sttPrompt: 'Dette er en eksempelsetning på norsk.', ttsLocale: 'nb-NO', hasContent: true, vocabTable: 'norwegisch_vocab', vocabColumn: 'norwegian', lautschriftSpalte: null },
  // Einzige Sprache neben Chinesisch mit eigener Schrift: gelernt wird ueber
  // `lautschrift` (Transliteration), das Kyrillische laeuft passiv mit.
  { id: 'ru', label: 'Russisch', table: 'russisch_phrasebook', sttLanguage: 'ru', sttPrompt: 'Это пример предложения на русском языке.', ttsLocale: 'ru-RU', hasContent: true, vocabTable: 'russisch_vocab', vocabColumn: 'russian', lautschriftSpalte: 'lautschrift' },

  // Vietnamesisch, Polnisch, Englisch (2026-09-03, dritte Welle).
  // Migration 20260903210000.
  //
  // ALLE DREI OHNE `lautschriftSpalte`, obwohl Simon sie fuer Vietnamesisch
  // und Polnisch ausdruecklich angeboten hat: beide schreiben LATEINISCH.
  // Vietnamesisch nutzt `quoc ngu` (lateinische Buchstaben mit Ton- und
  // Vokalzeichen), Polnisch das lateinische Alphabet mit neun
  // Sonderzeichen. Es gibt dort keine zweite Schrift zu verbergen - anders
  // als bei Hanzi und Kyrillisch, die ein Anfaenger gar nicht lesen kann.
  // Eine Lautschrift waere hier nicht abgebildet, sondern erfunden.
  { id: 'vi', label: 'Vietnamesisch', table: 'vietnamesisch_phrasebook', sttLanguage: 'vi', sttPrompt: 'Đây là một câu ví dụ bằng tiếng Việt.', ttsLocale: 'vi-VN', hasContent: true, vocabTable: 'vietnamesisch_vocab', vocabColumn: 'vietnamese', lautschriftSpalte: null },
  { id: 'pl', label: 'Polnisch', table: 'polnisch_phrasebook', sttLanguage: 'pl', sttPrompt: 'To jest przykładowe zdanie po polsku.', ttsLocale: 'pl-PL', hasContent: true, vocabTable: 'polnisch_vocab', vocabColumn: 'polish', lautschriftSpalte: null },
  // Britisches Englisch, wo es auseinandergeht (toilet/mobile/bill statt
  // restroom/cell phone/check) - deshalb en-GB als Stimme. Beide Varianten
  // stehen in den accepted_concepts, die Bewertung weist also keine ab.
  { id: 'en', label: 'Englisch', table: 'englisch_phrasebook', sttLanguage: 'en', sttPrompt: 'This is an example sentence in English.', ttsLocale: 'en-GB', hasContent: true, vocabTable: 'englisch_vocab', vocabColumn: 'english', lautschriftSpalte: null },
];

export const DEFAULT_LANGUAGE_ID = 'de';

export function getLanguage(id: string): Language {
  return LANGUAGES.find((l) => l.id === id) ?? LANGUAGES[0];
}
