-- Chinesisches Phrasebook + zwei Spalten fuer Club + Nightlife (2026-08-21).
--
-- ============================================================ chinesisch_phrasebook
--
-- Aufbau wie schwedisch_phrasebook, mit EINER zusaetzlichen Spalte: pinyin.
-- Fuer Chinesisch ist Pinyin der eigentliche Lerntext, die Zeichen laufen
-- passiv mit (siehe CLAUDE.md, "Gelernt wird ueber PINYIN"). `target_text`
-- traegt trotzdem die Zeichen: TTS braucht sie, um ueberhaupt Chinesisch zu
-- sprechen, und Speechmatics gibt fuer Mandarin Zeichen zurueck - der
-- Vergleich laeuft also darueber.

create table if not exists chinesisch_phrasebook (
  id                serial primary key,
  target_text       text not null,          -- Hanzi: fuer TTS und Bewertung
  pinyin            text not null,          -- der eigentliche Lerntext
  german            text not null,          -- Bedeutung
  scenario          text not null,
  tense             text,
  difficulty        text,
  accepted_concepts jsonb not null,
  audio_url         text,
  status            text default 'Neu',
  category          text not null,
  verb_cluster      text,

  -- ---------------------------------------------------------------- lookup_only
  -- true = erscheint NUR im Survival-Nachschlagewerk, nie im Lernpfad und nie
  -- in der Wiederholung.
  --
  -- Fuer Saetze, die man SOFORT und unter Stress braucht statt nach vier
  -- Wochen Wiederholung: "Bitte rufen Sie die Polizei", "Tu so, als wuerden
  -- wir uns kennen". Man schlaegt sie nach oder haelt jemandem den
  -- Bildschirm hin - dafuer muss man sie nicht auswendig koennen.
  --
  -- Nebeneffekt, der die Regel erst brauchbar macht: solche Saetze duerfen
  -- Vokabeln benutzen, die der Kurs gar nicht lehrt (警察, 假装). Geuebt
  -- wird nur, was aus dem gelehrten Wortschatz sagbar ist.
  lookup_only       boolean not null default false,

  -- ---------------------------------------------------------------- addressing
  -- null = fuer alle. 'frauen' / 'maenner' = nur zeigen, wenn der Nutzer im
  -- Onboarding angegeben hat, wen er ansprechen koennen will
  -- (OnboardingState.addressing, siehe app/onboarding/o6-ansprache.tsx).
  --
  -- Gefiltert wird nach dem WUNSCH, nicht nach dem eigenen Geschlecht: wer
  -- Frauen ansprechen will, braucht 漂亮 ("huebsch"), wer Maenner ansprechen
  -- will, braucht 帅 ("gutaussehend") - im Chinesischen zwei verschiedene
  -- Woerter, keine Uebersetzungsfrage.
  addressing        text
);

create index if not exists idx_chin_phrase_category on chinesisch_phrasebook(category);
create index if not exists idx_chin_phrase_scenario on chinesisch_phrasebook(scenario);

alter table chinesisch_phrasebook enable row level security;

drop policy if exists "chinesisch_phrasebook lesen" on chinesisch_phrasebook;
create policy "chinesisch_phrasebook lesen"
  on chinesisch_phrasebook for select
  using (true);

-- ============================================================ bestehende Tabellen
--
-- Dieselben zwei Spalten dort nachziehen, damit die Lade-Schicht fuer alle
-- Sprachen dieselbe Abfrage stellen kann. Bestehende 567 Saetze bekommen
-- lookup_only = false und addressing = null, aendern sich also nicht.

alter table phrasebook_master      add column if not exists lookup_only boolean not null default false;
alter table phrasebook_master      add column if not exists addressing  text;

alter table schwedisch_phrasebook  add column if not exists lookup_only boolean not null default false;
alter table schwedisch_phrasebook  add column if not exists addressing  text;

alter table spanisch_phrasebook    add column if not exists lookup_only boolean not null default false;
alter table spanisch_phrasebook    add column if not exists addressing  text;
