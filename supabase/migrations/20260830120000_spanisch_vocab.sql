-- Spanische Vokabelliste (2026-08-30, Simons Auftrag) - Struktur identisch
-- zu franz_vocab, das die bewaehrte, einfachere Variante von
-- schwedisch_vocab ist (keine Konjugationstabellen/`forms`-Spalte - siehe
-- vocabContent.ts-Kommentar "Nur Schwedisch hat eine forms-Spalte").
-- Bis dahin existierte fuer Spanisch trotz vollstaendig uebersetztem
-- Phrasebook KEINE einzige Vokabeltabelle - Woerter-Wiederholung
-- (Zuordnungsspiel, Personen-Zuordnung) lief fuer Spanisch deshalb ins Leere.

create table if not exists spanisch_vocab (
  id serial primary key,
  spanish text not null,
  german text not null,
  category text not null,       -- Artikel, Pronomen, Fragewort, Praeposition,
                                 -- Konjunktion, Zahlwort, Adverb, Verb, Nomen,
                                 -- Adjektiv - gleiches Set wie schwedisch_vocab
  genus text,                   -- 'm' oder 'f' (nur Nomen)
  frequency_rank integer,
  accepted_answers text[],      -- weitere gueltige deutsche Antworten
  audio_urls jsonb default '[]'::jsonb,
  grammar_note text,
  status text default 'Neu'
);

create index if not exists idx_spanisch_vocab_category on spanisch_vocab(category);
create unique index if not exists idx_spanisch_vocab_spanish on spanisch_vocab(spanish);
