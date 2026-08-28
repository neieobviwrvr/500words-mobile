-- Spanische Phrasebook-Tabelle, identisches Schema zu schwedisch_phrasebook
-- (target_text = Uebersetzung, restliche Spalten aus phrasebook_master
-- uebernommen). Kann gefahrlos mehrfach ausgefuehrt werden.

create table if not exists spanisch_phrasebook (
  id serial primary key,
  target_text text not null,
  german text not null,
  scenario text not null,
  tense text default 'present',
  difficulty text default 'A1',
  accepted_concepts jsonb not null,
  audio_url text,
  status text default 'Neu',
  category text,
  verb_cluster text
);

create index if not exists idx_spanisch_phrasebook_scenario on spanisch_phrasebook(scenario);
create index if not exists idx_spanisch_phrasebook_category on spanisch_phrasebook(category);
