-- Im Supabase SQL-Editor ausführen: legt die Tabelle für schwedische Vokabeln an.
-- Struktur analog zu franz_vocab, plus schwedisch-spezifische Spalten.

create table if not exists schwedisch_vocab (
  id serial primary key,
  swedish text not null,
  german text not null,
  category text not null,       -- Pronomen, Zahlwort, Fragewort, Präposition,
                                 -- Konjunktion, Adverb, Verb, Nomen, Adjektiv
  genus text,                   -- 'en' oder 'ett' (nur Nomen)
  definite_singular text,       -- z.B. "bilen" (nur Nomen)
  plural_form text,             -- z.B. "bilar" (nur Nomen)
  definite_plural text,         -- z.B. "bilarna" (nur Nomen)
  forms jsonb,                  -- Verb-Konjugationen bzw. Adjektiv-Formen
  grammar_note text,            -- Sonderfälle, Unregelmäßigkeiten
  audio_urls jsonb,             -- analog zu franz_vocab, wird später befüllt
  status text default 'Neu'
);

create index if not exists idx_schwedisch_vocab_category on schwedisch_vocab(category);
