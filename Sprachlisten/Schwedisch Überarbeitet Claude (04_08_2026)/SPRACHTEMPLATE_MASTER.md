# Sprachlern-App: Universelles Datenmodell (Template für jede Sprache)

Dieses Dokument beantwortet final, welche Tabellen/Spalten wir brauchen -
identisch aufgebaut für Französisch, Schwedisch und jede künftige Sprache.
Ersetze `<sprache>` durch den jeweiligen Tabellen-Präfix (`franz`, `schwedisch`, ...).

## Grundprinzip: genau 2 Tabellen pro Sprache

Keine Extra-Tabelle für "weitere Kategorien" - Nomen, Verben, Adjektive,
Präpositionen etc. leben alle in **einer** Tabelle, unterschieden über die
Spalte `category`. Das war deine Vermutung im ersten Teil deiner Frage -
zusätzliche Tabellen pro Wortart sind nicht nötig.

```
<sprache>_vocab        -> Grundwortschatz, ~500 Einzelwörter aller Kategorien
<sprache>_phrasebook   -> kuratierte, meistbenutzte Sätze/Situationen
```

---

## Tabelle 1: `<sprache>_vocab`

| Spalte | Typ | Für welche Kategorien | Zweck |
|---|---|---|---|
| `id` | serial | alle | Primärschlüssel |
| `<sprache>` (z.B. `french`) | text | alle | das Wort in der Zielsprache |
| `german` | text | alle | deutsche Übersetzung |
| `category` | text | alle | Nomen, Verb, Adjektiv, Pronomen, Zahlwort, Präposition, Konjunktion, Adverb, Fragewort |
| `genus` | text | Nomen | m/f (Französisch) bzw. en/ett (Schwedisch) - steuert Artikel- und Adjektiv-Angleichung |
| `plural_form` | text | Nomen | nur falls unregelmäßig |
| `forms` | jsonb | Verb, Adjektiv | siehe unten - **Text**, keine Audiodaten |
| `forms_audio` | jsonb | Verb, Adjektiv | vertonte Version von `forms` - gleiche Struktur, URLs statt Text |
| `grammar_note` | text | alle (optional) | Sonderfälle, z.B. épicène Wörter, unregelmäßige Aussprache |
| `audio_urls` | jsonb | alle | **ein** Audio pro Wort (Grundform), vorab via ElevenLabs erzeugt |
| `status` | text | alle | z.B. "Neu", für euren eigenen Workflow-Überblick |

### Was genau in `forms` steht (Verben)

```json
{
  "present": {"je": "mange", "tu": "manges", "il": "mange", "nous": "mangeons", "vous": "mangez", "ils": "mangent"},
  "preteritum_oder_passe_compose": {...gleiche Struktur, je nach Sprache...},
  "futur_einfach": {...gleiche Struktur, oder ein Hinweis wie bei Schwedisch "ska + Infinitiv"...}
}
```
→ **Gegenwart, einfache Vergangenheit UND einfache Zukunft sind hier alle drei enthalten** - dein Wunsch aus dem Prompt ist damit abgedeckt, nur eben als strukturierter Text statt als separate Spalten. Die genaue Unterstruktur ist pro Sprache leicht unterschiedlich (siehe `SPRACHFORMEN_UEBERSICHT.md` von vorhin: Französisch braucht 6 Personalformen pro Zeit, Schwedisch nur 1 Form pro Zeit).

### Was genau in `forms` steht (Adjektive)

```json
{"ms": "grand", "fs": "grande", "mp": "grands", "fp": "grandes"}
```
(bzw. sprachspezifisch angepasst, z.B. Schwedisch: `{"en_form": "stor", "ett_form": "stort", "plural_bestimmt": "stora"}`)

---

## Tabelle 2: `<sprache>_phrasebook`

| Spalte | Typ | Zweck |
|---|---|---|
| `id` | serial | Primärschlüssel |
| `target_text` | text | der Satz in der Zielsprache |
| `german` | text | Referenzübersetzung |
| `scenario` | text | z.B. "restaurant", "medizinischer_notfall", "wegbeschreibung" - **das ist die "Zuordnung zu einer Situation", die du im Prompt angesprochen hast** |
| `tense` | text | "present", "past" oder "future" - **so bekommst du Vergangenheits-/Zukunftsvarianten, ohne neue Spalten**: "Wo ist das Krankenhaus?" und "Wo war das Krankenhaus?" sind zwei Zeilen, beide mit derselben `scenario`, unterschiedlichem `tense` |
| `difficulty` | text | A1/A2/B1 |
| `accepted_concepts` | jsonb | Liste akzeptierter Konzept-Gruppen für die Bewertung (siehe unten) |
| `audio_url` | text | **ein** Audio pro Satz, vorab via ElevenLabs |
| `status` | text | Workflow-Status |

---

## Audio-Strategie (korrigierte Version)

| Was | Vertonung | Warum |
|---|---|---|
| Grundwort (`<sprache>_vocab.audio_urls`) | ElevenLabs, 1x vorab, gecacht | überschaubare Menge (~500) |
| **Alle Wortformen** (`<sprache>_vocab.forms_audio`) | **ElevenLabs, 1x vorab, gecacht** | endliche Menge (einige Tausend pro Sprache), kein Live-TTS nötig - klingt für JEDE Form nativ, siehe `generate-forms-audio.js` |
| Phrasebook-Satz (`<sprache>_phrasebook`) | ElevenLabs, 1x vorab, gecacht | überschaubare, kuratierte Menge |
| Zufalls-generierte Sätze (`sentence-engine.js`, optional) | Geräte-TTS, live | **einzige wirklich unendliche Menge** - lässt sich prinzipiell nicht vorab cachen |

`forms_audio` spiegelt die Struktur von `forms` 1:1, nur mit URLs statt Text:
```json
{"present": {"je": "https://.../12_present_je_mange.mp3", "tu": "https://.../12_present_tu_manges.mp3"}}
```

---

## Bewertungslogik: welche Funktion für welche Übung

| Übungstyp | Datenquelle | Funktion aus `answer-evaluation.js` | Prinzip |
|---|---|---|---|
| Wort übersetzen (Karteikarte) | `<sprache>_vocab` | `evaluateTranslation()` | möglichst alle Kernwörter treffen, Cluster erlaubt |
| Satz nachsprechen | `<sprache>_phrasebook` (oder Zufallsgenerator) | `evaluateRepeat()` | Wortlaut-Ähnlichkeit (STT vs. Soll-Satz) |
| Situations-Satz sinngemäß verstehen | `<sprache>_phrasebook` | `evaluateIntent()` | **mindestens eine** akzeptierte Konzeptgruppe aus `accepted_concepts` reicht - das ist deine "grobes Verständnis reicht"-Anforderung |

---

## Generisches SQL-Template (für jede neue Sprache kopierbar)

```sql
create table if not exists <sprache>_vocab (
  id serial primary key,
  <sprache_spalte> text not null,   -- z.B. "french", "swedish", "spanish"
  german text not null,
  category text not null,
  genus text,
  plural_form text,
  forms jsonb,
  forms_audio jsonb,
  grammar_note text,
  audio_urls jsonb,
  status text default 'Neu'
);
create index if not exists idx_<sprache>_vocab_category on <sprache>_vocab(category);

create table if not exists <sprache>_phrasebook (
  id serial primary key,
  target_text text not null,
  german text not null,
  scenario text not null,
  tense text default 'present',
  difficulty text default 'A1',
  accepted_concepts jsonb not null,
  audio_url text,
  status text default 'Neu'
);
create index if not exists idx_<sprache>_phrasebook_scenario on <sprache>_phrasebook(scenario);
```

---

## Checkliste: neue Sprache hinzufügen

1. Die zwei Tabellen mit obigem SQL-Template anlegen (Platzhalter ersetzen).
2. Grundwortschatz-Datei nach dem Muster von `swedish_top500.py` befüllen
   (Funktionswörter → Verben mit `forms` → Nomen mit Genus → Adjektive).
3. `import_to_supabase.py` zum Hochladen nutzen (funktioniert unverändert
   für jede Sprache, nur `TABLE_NAME` in der `.env` anpassen).
4. `generate-audio.js` für die Wort-Audios laufen lassen
   (`TABLE_NAME`, `TEXT_COLUMN`, passende `ELEVENLABS_VOICE_ID` in `.env`).
5. `generate-forms-audio.js` laufen lassen, um alle Konjugations-/
   Adjektivformen aus `forms` zu vertonen (landet in `forms_audio`).
6. Phrasebook nach dem Muster von `franz_phrasebook_data.py` befüllen
   (Szenarien + `accepted_concepts` pro Satz).
7. `generate-audio.js` erneut für die Phrasebook-Tabelle laufen lassen.
8. `clusters.json` um sprachneutrale deutsche Begriffe ergänzen, falls neue
   Themenfelder dazukommen (die Cluster sind ja auf Deutsch, funktionieren
   also automatisch für alle Zielsprachen mit).

Dieses Dokument + `CLAUDE_CODE_PROMPT.md` zusammen sind die vollständige
Spezifikation - Claude Code sollte beide Dateien lesen, bevor es loslegt.
