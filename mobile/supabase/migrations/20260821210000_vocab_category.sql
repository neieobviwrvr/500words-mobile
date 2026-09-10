-- Lernkategorie an der Vokabel (2026-08-21).
--
-- Bisher hatte KEINE Vokabeltabelle eine Spalte fuer die Lernkategorie. Die
-- vorhandene `category` in schwedisch_vocab/franz_vocab meint die WORTART
-- (Nomen, Verb, ...), nicht Hotel oder Club - ein Wort liess sich also gar
-- nicht auf `club_nightlife` filtern (siehe CLAUDE.md, Widget-Abschnitt).
--
-- Gebraucht wird sie fuer zwei Dinge:
--   * die Wortliste je Kategorie (Nutzer-Wunsch 2026-08-21)
--   * die spaetere Vertonung: sie muss wissen, welche Woerter zu welchem
--     Paket gehoeren, um sie gebuendelt aufnehmen zu koennen
--
-- null heisst "gehoert zum gefuehrten Kurs, nicht zu einer Kaufkategorie" -
-- das sind die 350 Woerter, die schon drin sind.

alter table chinesisch_vocab add column if not exists category text;

create index if not exists idx_chinesisch_vocab_category on chinesisch_vocab(category);
