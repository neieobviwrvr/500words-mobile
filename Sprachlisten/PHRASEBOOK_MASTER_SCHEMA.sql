-- Sprachneutrale Master-Tabelle fuer Phrasebook-Saetze (Referenzsprache Deutsch).
-- Dient als Basis, aus der pro Zielsprache die <sprache>_phrasebook-Tabelle
-- befuellt wird (target_text = Uebersetzung, restliche Spalten uebernommen).
-- Kann gefahrlos mehrfach ausgefuehrt werden.

create table if not exists phrasebook_master (
  id serial primary key,
  german text not null,
  scenario text not null,
  tense text default 'present',
  difficulty text default 'A1',
  accepted_concepts jsonb not null,
  status text default 'Neu'
);

create index if not exists idx_phrasebook_master_scenario on phrasebook_master(scenario);
