-- Coins serverseitig und nicht mehr vom Geraet beschreibbar (2026-09-13).
--
-- Simons Auftrag: "mach, dass das mit den Coins funktioniert und nicht
-- gecheatet werden kann auf Supabase".
--
-- Bis hierher lagen Coins im App-Zustand: `nutzer_zustand.coins` und
-- `coin_grants`, geschrieben von der App selbst (Policy `zustand_eigener`
-- erlaubt dem Nutzer ALLES auf seiner Zeile). Wer den oeffentlichen anon-Key
-- und sein eigenes Login hat, konnte `coins = 9999` hochschreiben, und der
-- Abgleich haette es auf jedes Geraet verteilt.
--
-- ============================================================ Grundsaetze
--
-- 1. DER KONTOSTAND IST EINE SUMME VON BUCHUNGEN, KEINE ZAHL. Jede Gutschrift
--    ist eine Zeile in `coin_buchung` mit Grund und Betrag; der Stand ist die
--    Summe. Eine Zahl kann man ueberschreiben, eine Buchung nur hinzufuegen -
--    und hinzufuegen darf die App nicht.
--
-- 2. DIE APP DARF NUR LESEN. Keine Insert-, Update- oder Delete-Rechte fuer
--    anon und authenticated. Gebucht wird ausschliesslich ueber die Funktion
--    `coin_abholen`, die selbst prueft, ob die Bedingung erfuellt ist.
--
-- 3. BETRAEGE STEHEN AUF DEM SERVER. `coin_belohnung` legt fest, was welcher
--    Grund einbringt. Die App nennt nur den Grund, nie den Betrag.
--
-- 4. JEDER GRUND GENAU EINMAL JE KONTO - als `unique`, nicht als Pruefung im
--    Code. Zwei gleichzeitige Aufrufe (zwei Geraete, Doppeltipp) koennen
--    dadurch nicht beide gutschreiben.
--
-- 5. COINS SIND NICHT UEBERTRAGBAR. Wer zehn Konten anlegt, hat zehn kleine
--    Kontostaende, keinen grossen. Neue Konten anzulegen lohnt sich also nicht.
--
-- ============================================================ Grenze
--
-- Was der Server NICHT pruefen kann: ob die Lernleistung hinter einer
-- Herausforderung echt ist. "10 Saetze ohne Fehler" wird auf dem Geraet
-- bewertet, der Zaehler kommt ueber `nutzer_zustand.fortschritt` - und den
-- schreibt die App. Wer ihn faelscht, kann jede Herausforderung EINMAL
-- abholen. Die Obergrenze dafuer ist die Summe aller Herausforderungen je
-- Konto (heute 6 Coins), nicht unbegrenzt. Ganz schliessen liesse sich das
-- nur mit einer Bewertung auf dem Server.

-- ============================================================ Katalog

create table if not exists public.coin_belohnung (
  grund       text primary key,
  betrag      integer not null check (betrag > 0),
  -- 'keine'       einmal je Konto, ohne Nachweis (Onboarding-Coin)
  -- 'feedback'    das Konto hat mindestens ein Feedback eingereicht
  -- 'fortschritt' ein Zaehler in nutzer_zustand.fortschritt erreicht `ziel`
  bedingung   text not null check (bedingung in ('keine', 'feedback', 'fortschritt')),
  fortschritt_schluessel text,
  ziel        integer,
  constraint coin_belohnung_fortschritt_vollstaendig check (
    bedingung <> 'fortschritt' or (fortschritt_schluessel is not null and ziel is not null)
  )
);

-- Dieselben Gruende und Betraege wie in der App (data/coinBelohnungen.ts,
-- data/herausforderungen.ts). Bei Abweichung gilt DIESE Tabelle - die App
-- zeigt den Betrag nur vorab an, gebucht wird, was hier steht.
--
-- `freunde_5` fehlt mit Absicht: dafuer gibt es noch keine Zaehlung. Ein
-- Eintrag ohne pruefbare Bedingung waere ein Coin fuer jeden, der fragt.
insert into public.coin_belohnung (grund, betrag, bedingung, fortschritt_schluessel, ziel) values
  ('onboarding_lektion',  1, 'keine',       null,                null),
  ('feedback_erstes',     1, 'feedback',    null,                null),
  ('saetze_perfekt_10',   1, 'fortschritt', 'perfekteSaetze',    10),
  ('lektionen_perfekt_3', 2, 'fortschritt', 'perfekteLektionen', 3),
  ('saetze_perfekt_50',   3, 'fortschritt', 'perfekteSaetze',    50)
on conflict (grund) do update
  set betrag = excluded.betrag,
      bedingung = excluded.bedingung,
      fortschritt_schluessel = excluded.fortschritt_schluessel,
      ziel = excluded.ziel;

alter table public.coin_belohnung enable row level security;

-- Der Katalog ist kein Geheimnis - lesen darf ihn jeder.
create policy "coin_belohnung lesen" on public.coin_belohnung
  for select to anon, authenticated using (true);

revoke insert, update, delete, truncate on public.coin_belohnung from anon, authenticated;

-- ============================================================ Buchungen

create table if not exists public.coin_buchung (
  id          bigint generated always as identity primary key,
  nutzer_id   uuid not null references auth.users (id) on delete cascade,
  -- Heute nur Gutschriften aus `coin_belohnung`. Kommt das Ausgeben dazu,
  -- wird es eine negative Buchung mit eigenem Grund (z.B.
  -- 'ausgabe:situation:club_bar') - dieselbe Eindeutigkeit verhindert dann,
  -- dass dieselbe Situation zweimal bezahlt wird.
  grund       text not null check (char_length(grund) <= 120),
  betrag      integer not null,
  erstellt_am timestamptz not null default now(),
  constraint coin_buchung_einmal_je_grund unique (nutzer_id, grund)
);

alter table public.coin_buchung enable row level security;

create policy "coin_buchung eigene lesen" on public.coin_buchung
  for select to authenticated using (nutzer_id = auth.uid());

-- Ausdruecklich entzogen: Supabase vergibt beim Anlegen einer Tabelle den
-- API-Rollen ALLE Rechte. RLS ohne Policy lehnt zwar ab - aber ein spaeter
-- versehentlich dazugeschriebenes `for all` machte sofort alles schreibbar.
-- Ohne Grant bleibt es dicht, egal welche Policy jemand ergaenzt.
revoke insert, update, delete, truncate on public.coin_buchung from anon, authenticated;
revoke select on public.coin_buchung from anon;

-- ============================================================ Funktionen

-- Die eigentliche Pruefung. INTERN: von der App nicht aufrufbar, weil sie
-- eine beliebige Nutzer-ID nimmt.
--
-- Rueckgabe:
--   'vergeben'        gebucht
--   'schon_vergeben'  gab es schon - kein Fehler, sondern der Normalfall
--                     beim zweiten Geraet
--   'bedingung_fehlt' Bedingung (noch) nicht erfuellt
--   'unbekannt'       kein solcher Grund im Katalog
create or replace function public.coin_vergeben(p_nutzer uuid, p_grund text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  b public.coin_belohnung%rowtype;
  roh text;
  stand bigint;
begin
  select * into b from public.coin_belohnung where grund = p_grund;
  if not found then
    return 'unbekannt';
  end if;

  if exists (select 1 from public.coin_buchung where nutzer_id = p_nutzer and grund = p_grund) then
    return 'schon_vergeben';
  end if;

  if b.bedingung = 'feedback' then
    if not exists (
      select 1 from public.rueckmeldung where nutzer_id = p_nutzer and art = 'feedback'
    ) then
      return 'bedingung_fehlt';
    end if;
  elsif b.bedingung = 'fortschritt' then
    select z.fortschritt ->> b.fortschritt_schluessel into roh
      from public.nutzer_zustand z where z.nutzer_id = p_nutzer;
    -- Der Zaehler kommt vom Geraet. Alles, was keine schlichte Zahl ist,
    -- zaehlt als 0, statt die Funktion mit einem Cast-Fehler abzubrechen.
    stand := case when roh ~ '^[0-9]{1,9}$' then roh::bigint else 0 end;
    if stand < b.ziel then
      return 'bedingung_fehlt';
    end if;
  end if;

  insert into public.coin_buchung (nutzer_id, grund, betrag)
    values (p_nutzer, p_grund, b.betrag)
    on conflict on constraint coin_buchung_einmal_je_grund do nothing;
  if not found then
    -- Ein zweiter Aufruf war zwischen Pruefung und Insert schneller.
    return 'schon_vergeben';
  end if;
  return 'vergeben';
end;
$$;

revoke execute on function public.coin_vergeben(uuid, text) from public, anon, authenticated;

-- Der EINE Weg, auf dem die App Coins bekommt. Nimmt keine Nutzer-ID
-- entgegen - es gilt immer das angemeldete Konto.
create or replace function public.coin_abholen(p_grund text)
returns text
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    return 'kein_konto';
  end if;
  return public.coin_vergeben(auth.uid(), p_grund);
end;
$$;

revoke execute on function public.coin_abholen(text) from public, anon;
grant execute on function public.coin_abholen(text) to authenticated;

-- ============================================================ Altbestand

-- Was die App bisher als vergeben notiert hat, wird UEBER DIESELBE PRUEFUNG
-- uebernommen - nicht blind. Ein Geschenk, dessen Bedingung auf dem Server
-- nicht nachvollziehbar ist, faellt dabei heraus.
do $$
declare
  z record;
  grund text;
begin
  for z in select nutzer_id, coin_grants from public.nutzer_zustand loop
    for grund in select key from jsonb_each(coalesce(z.coin_grants, '{}'::jsonb)) where value = 'true'::jsonb loop
      perform public.coin_vergeben(z.nutzer_id, grund);
    end loop;
  end loop;
end;
$$;

-- `nutzer_zustand.coins` und `coin_grants` bleiben als Spalten stehen, werden
-- aber nicht mehr gelesen. Entfernen erst, wenn keine aeltere App-Fassung
-- mehr im Umlauf ist: die schreibt beide Spalten beim Abgleich mit, und ein
-- fehlendes Feld liesse ihren ganzen Schreibvorgang scheitern.
comment on column public.nutzer_zustand.coins is
  'Veraltet seit 2026-09-13 - Kontostand ist die Summe aus coin_buchung.';
comment on column public.nutzer_zustand.coin_grants is
  'Veraltet seit 2026-09-13 - vergebene Geschenke stehen in coin_buchung.';
