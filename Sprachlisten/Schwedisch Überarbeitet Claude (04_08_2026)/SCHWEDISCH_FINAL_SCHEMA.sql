-- FINALES, KONSOLIDIERTES SCHEMA FÜR SCHWEDISCH
-- Ersetzt: schwedisch_vocab_schema.sql (alte Version mit separaten
-- definite_singular/definite_plural Spalten - die wandern jetzt in "forms",
-- damit die Struktur 1:1 zum Französisch-Schema passt, siehe
-- SPRACHTEMPLATE_MASTER.md). Kann gefahrlos mehrfach ausgeführt werden.

-- ============================================================
-- TEIL A: schwedisch_vocab (Grundwortschatz)
-- ============================================================

create table if not exists schwedisch_vocab (
  id serial primary key,
  swedish text not null,
  german text not null,
  category text not null,
  status text default 'Neu'
);

alter table schwedisch_vocab add column if not exists genus text;         -- 'en' oder 'ett', nur Nomen
alter table schwedisch_vocab add column if not exists plural_form text;   -- Kurzreferenz, Details stehen in forms
alter table schwedisch_vocab add column if not exists forms jsonb;        -- siehe Struktur unten
alter table schwedisch_vocab add column if not exists forms_audio jsonb;  -- gleiche Struktur wie forms, URLs statt Text
alter table schwedisch_vocab add column if not exists grammar_note text;
alter table schwedisch_vocab add column if not exists audio_urls jsonb;   -- Grundwort-Audio

create index if not exists idx_schwedisch_vocab_category on schwedisch_vocab(category);

-- Falls die alte Version mit definite_singular/definite_plural schon existiert:
-- die Daten vor dem Droppen nach "forms" migrieren (nur falls noetig, manuell pruefen)
-- alter table schwedisch_vocab drop column if exists definite_singular;
-- alter table schwedisch_vocab drop column if exists definite_plural;

-- ============================================================
-- Struktur von "forms" pro Kategorie:
--
-- Nomen:
-- {"indef_sg": "bil", "def_sg": "bilen", "indef_pl": "bilar", "def_pl": "bilarna"}
--
-- Verb:
-- {"present": "går", "preteritum": "gick", "supinum": "gått"}
-- (Futur braucht keine eigene Form: "ska" + Infinitiv, siehe App-Logik)
--
-- Adjektiv:
-- {"en_form": "stor", "ett_form": "stort", "plural_bestimmt": "stora"}
-- ============================================================

-- ============================================================
-- TEIL B: schwedisch_phrasebook (kuratierte Alltagssaetze)
-- ============================================================

create table if not exists schwedisch_phrasebook (
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

create index if not exists idx_schwedisch_phrasebook_scenario on schwedisch_phrasebook(scenario);
