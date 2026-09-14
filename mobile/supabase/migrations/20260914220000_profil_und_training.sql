-- Profil und Trainingsstand am Konto (2026-09-14, Simon: "Kannst du machen,
-- dass wirklich alles gelernte gespeichert ist und der User ein Profil
-- erstellen kann das gespeichert wird").
--
-- Bis hierher glich der Abgleich Einstellungen, Fortschrittszaehler, gemerkte
-- Saetze, Freischaltungen, FSRS-Karten, Coins und das Lern-Tagebuch ab. Zwei
-- Dinge lagen trotzdem nur auf dem Geraet:
--
--   * die Angaben aus dem Onboarding - Name, Anrede, Alter, Anlaesse, Ziele,
--     Begleitfigur, ob das Onboarding erledigt ist. Ein neues Geraet begann
--     deshalb wieder bei "Was moechtest du lernen?".
--   * die Stufen-Zaehler der Woerter- und Saetze-Wiederholung
--     (training/batchLeiter.ts) - wie weit ein Wort oder Satz auf der Leiter
--     ist, welche Bloecke freigeschaltet sind.
--
-- Beides kommt als jsonb in dieselbe Zeile wie die Einstellungen. Die Regeln,
-- nach denen verschmolzen wird, stehen in src/lib/merge.ts.

alter table public.nutzer_zustand
  -- { name, gender, addressing, ageBracket, occasions, goals, referralSource,
  --   mascotId, sourceLanguageId, completed, geaendertAm }
  add column if not exists profil jsonb not null default '{}'::jsonb,
  -- { "<praefix><sprache>:<schluessel>": [wert, geaendertAmMs] }
  add column if not exists training jsonb not null default '{}'::jsonb;

-- Obergrenzen gegen Unsinn: ein Trainingsstand ueber alle Sprachen hat einige
-- tausend Eintraege (~150 KB); ein Profil ein paar hundert Byte.
alter table public.nutzer_zustand
  add constraint nutzer_zustand_profil_groesse check (octet_length(profil::text) <= 20000),
  add constraint nutzer_zustand_training_groesse check (octet_length(training::text) <= 2000000);

-- Rechte: die Zeile gehoert dem angemeldeten Konto (Policy `zustand_eigener`).
-- Ein Gast hat keine Zeile und braucht die Tabelle nicht; die Standard-Grants
-- gaben anon trotzdem alles, sogar TRUNCATE. RLS filterte die Zeilen, aber
-- filtern ist nicht ablehnen.
revoke all on public.nutzer_zustand from anon;
revoke truncate, references, trigger on public.nutzer_zustand from authenticated;
