-- Gemerkte Saetze mit abgleichen (2026-08-22).
--
-- `nutzer_zustand` hatte Spalten fuer Coins, Geschenke, Zaehler und
-- Einstellungen - aber nicht fuer die gemerkten Saetze. Die gehoeren
-- zweifellos dazu: das Survival-Nachschlagewerk ist genau die Liste, die man
-- auf einem neuen Geraet als Erstes vermisst.
--
-- Eigene Spalte statt eines Schluessels in `einstellungen`, aus zwei Gruenden:
--
--   1. Es sind Daten, keine Einstellung. Wer `einstellungen` liest, erwartet
--      Darkmode und Zielsprache, nicht hundert Saetze.
--   2. Der Inhalt ist deutlich groesser als alles andere in der Zeile
--      (`savedMeta` haelt den ganzen Satz mit Pinyin und Kulturhinweis, damit
--      die Favoriten offline funktionieren, ohne neu zu laden). Getrennt
--      laesst er sich spaeter einzeln nachladen, ohne den Rest anzufassen.
--
-- Form: { "saved": { "<id>": true }, "savedMeta": { "<id>": {...} } } - genau
-- die zwei Felder aus AppState, damit der Abgleich nichts umrechnen muss.

alter table nutzer_zustand
  add column if not exists gemerkt jsonb not null default '{}'::jsonb;
