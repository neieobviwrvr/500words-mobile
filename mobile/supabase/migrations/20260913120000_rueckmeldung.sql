-- Rueckmeldungen aus der App: "Satz melden", "Wort melden" und Feedback
-- (2026-09-13, Simons Auftrag: "Satz-Melden hat noch keine Funktion,
-- Feedback leitet immer noch auf Geschenke, soll aber ein Textfeld oeffnen
-- und in der Lektion bleiben").
--
-- Bis hierher gab es dafuer KEINEN Ort: der Melden-Eintrag im Uebungs-Menue
-- zeigte "kommt bald", und das Feedback-Feld auf der Geschenke-Seite hat
-- einen deaktivierten Absenden-Knopf.
--
-- EINE Tabelle fuer alle drei, weil sie dieselbe Frage beantworten ("was
-- stimmt aus Sicht des Nutzers nicht?") und gemeinsam gesichtet werden.
-- `art` trennt sie.
--
-- ---------------------------------------------------------------------------
-- Zugriff: nur EINREICHEN.
--
-- Die App traegt den oeffentlichen anon-Key (siehe 20260910120000). Wer ihn
-- hat, darf hier eine Zeile anlegen - mehr nicht: es gibt keine Policy fuer
-- SELECT, UPDATE oder DELETE, und ohne Policy lehnt RLS ab. Gelesen wird im
-- Dashboard bzw. mit dem Service-Role-Key.
--
-- `nutzer_id` fuellt die Datenbank selbst aus der Sitzung (`auth.uid()`),
-- Gaeste bleiben NULL. Die Policy verbietet, eine fremde ID mitzuschicken.
--
-- Die Laengengrenzen sind der Schutz gegen Missbrauch mit dem oeffentlichen
-- Key: keine Megabyte-Texte. Gegen massenhaftes Einreichen schuetzt das
-- nicht - falls das je vorkommt, braucht es eine Edge Function mit Drossel.
-- ---------------------------------------------------------------------------

create table if not exists public.rueckmeldung (
  id           bigint generated always as identity primary key,
  erstellt_am  timestamptz not null default now(),
  art          text not null check (art in ('satz_melden', 'wort_melden', 'feedback')),
  -- Gewaehlter Grund beim Melden ("Übersetzung falsch" ...), frei bei Feedback.
  grund        text check (grund is null or char_length(grund) <= 80),
  text         text check (text is null or char_length(text) <= 2000),
  -- Wo es herkam: Zielsprache, Tabelle bzw. "kurs", ID und Wortlaut dessen,
  -- was auf dem Schirm stand - damit eine Meldung ohne Rueckfrage
  -- nachvollziehbar ist.
  sprache      text check (sprache is null or char_length(sprache) <= 10),
  quelle       text check (quelle is null or char_length(quelle) <= 60),
  inhalt_id    text check (inhalt_id is null or char_length(inhalt_id) <= 80),
  inhalt_text  text check (inhalt_text is null or char_length(inhalt_text) <= 500),
  screen       text check (screen is null or char_length(screen) <= 60),
  nutzer_id    uuid default auth.uid() references auth.users (id) on delete set null,
  -- Feedback ohne Text waere eine leere Zeile.
  constraint rueckmeldung_feedback_mit_text
    check (art <> 'feedback' or char_length(coalesce(text, '')) > 0)
);

alter table public.rueckmeldung enable row level security;

create policy "rueckmeldung einreichen" on public.rueckmeldung
  for insert to anon, authenticated
  with check (nutzer_id is null or nutzer_id = auth.uid());

-- Ausdruecklich NUR insert. Beim Anlegen vergibt Supabase den API-Rollen
-- automatisch ALLE Rechte; RLS filtert dann zwar alles weg (nachgemessen:
-- SELECT lieferte [], UPDATE/DELETE "204" ohne Wirkung), aber ein spaeter
-- versehentlich dazugeschriebenes `for select using (true)` machte sofort
-- jede Rueckmeldung fuer jeden lesbar. Ohne das Recht bleibt es zu, egal
-- welche Policy dazukommt.
grant insert on public.rueckmeldung to anon, authenticated;
revoke select, update, delete, truncate on public.rueckmeldung from anon, authenticated;
