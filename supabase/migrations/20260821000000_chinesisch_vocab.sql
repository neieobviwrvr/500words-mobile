-- Vokabeltabelle fuer Chinesisch (2026-08-21).
--
-- Aufbau wie schwedisch_vocab / franz_vocab, mit EINER neuen Spalte: pinyin.
-- Dafuer hat keine bestehende Vokabeltabelle ein Gegenstueck, und fuer
-- Chinesisch ist sie der eigentliche Lerntext - Zeichen laufen nur passiv
-- mit (siehe CLAUDE.md, "Gelernt wird ueber PINYIN").
--
-- `hanzi` ist eindeutig: es ist zugleich der fachliche Schluessel, ueber den
-- der Generator beim erneuten Import abgleicht.
--
-- `audio_urls` ist das Zielfeld der spaeteren Vertonung, Format wie bei
-- franz_vocab: [{"url": "...", "text": "..."}]. Bleibt vorerst leer -
-- Nutzer-Entscheidung 2026-08-21: bis auf Weiteres die Systemstimme.

create table if not exists chinesisch_vocab (
  id           serial primary key,
  hanzi        text not null unique,
  pinyin       text not null,
  german       text not null,
  -- "HSK 1", "HSK 2", "HSK 3" oder "nicht in HSK 1+2" - Ergebnis des
  -- Abgleichs gegen zwei unabhaengige Quellen, siehe merge_wortliste.py.
  hsk_level    text,
  -- In welchen Kurslektionen das Wort als Slot vorkommt ("1.1", "3.2, 7.1").
  -- Leer heisst: steckt nur im Satzrahmen, wird nicht einzeln abgefragt.
  lesson       text,
  -- 'excel' = aus Simons Wortliste, 'erweiterung' = ergaenzt.
  source       text,
  audio_urls   jsonb,
  status       text default 'Neu'
);

create index if not exists idx_chinesisch_vocab_hsk    on chinesisch_vocab(hsk_level);
create index if not exists idx_chinesisch_vocab_lesson on chinesisch_vocab(lesson);

-- Lesen fuer alle, Schreiben nur mit Dienstschluessel: die App liest mit dem
-- anon-Key, soll aber nichts veraendern koennen.
alter table chinesisch_vocab enable row level security;

drop policy if exists "chinesisch_vocab lesen" on chinesisch_vocab;
create policy "chinesisch_vocab lesen"
  on chinesisch_vocab for select
  using (true);
