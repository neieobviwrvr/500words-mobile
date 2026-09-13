-- Freunde per Code hinzufuegen (2026-09-14).
--
-- Simons Auftrag: "Aendere die Freundeseite wieder zu etwas mit Freunden und
-- Leute hinzufuegen". Vorher besprochen (2026-09-13): jedes Konto bekommt
-- EINEN festen, kurzen Code; wer ihn eingibt, ist direkt befreundet. Geteilt
-- wird er ueber das Teilen-Menue (WhatsApp & Co.), eingegeben in der App.
--
-- ============================================================ Grundsaetze
--
-- 1. DER CODE ENTSTEHT AUF DEM SERVER. Eindeutig und nicht waehlbar - sonst
--    liesse sich ein fremder Wunschcode besetzen.
--
-- 2. BEFREUNDEN GEHT NUR UEBER DIE FUNKTION. Die Tabelle `freundschaft` war
--    fuer den Nutzer frei beschreibbar (Policy `freundschaft_eigene` for all):
--    wer eine fremde Nutzer-ID kannte, konnte sich selbst als bestaetigten
--    Freund eintragen und damit dessen Profil lesen. Insert und Update sind
--    deshalb entzogen; `freund_hinzufuegen` legt beide Richtungen an, und
--    zwar nur mit einem echten Code.
--
-- 3. RATEN WIRD GEBREMST. 31 Zeichen hoch 6 sind rund 887 Millionen Codes,
--    aber ohne Bremse liesse sich trotzdem durchprobieren. Mehr als zehn
--    Fehlversuche in zehn Minuten sperren fuer den Rest der zehn Minuten.

-- ============================================================ Code

create table if not exists public.freundescode (
  nutzer_id   uuid primary key references auth.users (id) on delete cascade,
  -- Ohne verwechselbare Zeichen: kein 0/O, 1/I/L. Wer den Code von einem
  -- Bildschirm abtippt oder vorgelesen bekommt, soll nicht raten muessen.
  code        text not null unique check (code ~ '^[A-HJKMNP-Z2-9]{6}$'),
  erstellt_am timestamptz not null default now()
);

alter table public.freundescode enable row level security;

create policy "freundescode eigenen lesen" on public.freundescode
  for select to authenticated using (nutzer_id = auth.uid());

revoke insert, update, delete, truncate on public.freundescode from anon, authenticated;
revoke select on public.freundescode from anon;

-- Fehlversuche fuer die Bremse. Nur die Funktion schreibt hierher.
create table if not exists public.freundescode_versuch (
  id        bigint generated always as identity primary key,
  nutzer_id uuid not null references auth.users (id) on delete cascade,
  zeit      timestamptz not null default now()
);
create index if not exists idx_freundescode_versuch on public.freundescode_versuch (nutzer_id, zeit);

alter table public.freundescode_versuch enable row level security;
revoke all on public.freundescode_versuch from anon, authenticated;

-- Anzeigename: der Name, unter dem Freunde einen sehen. Getrennt vom
-- Onboarding-Namen (siehe 20260822120000) - der bleibt privat auf dem Geraet.
alter table public.profil
  drop constraint if exists profil_anzeigename_laenge;
alter table public.profil
  add constraint profil_anzeigename_laenge
  check (anzeigename is null or char_length(anzeigename) between 1 and 30);

-- ============================================================ Freundschaft dicht

revoke insert, update on public.freundschaft from anon, authenticated;

-- ============================================================ Funktionen

-- Den eigenen Code holen - beim ersten Aufruf wird er angelegt.
create or replace function public.mein_freundescode()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  zeichen constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  neu text;
  vorhanden text;
begin
  if uid is null then
    return null;
  end if;

  select code into vorhanden from public.freundescode where nutzer_id = uid;
  if found then
    return vorhanden;
  end if;

  -- Zufaellig, bis ein freier Code dabei ist. Bei 887 Millionen
  -- Moeglichkeiten reicht fast immer der erste Versuch.
  for versuch in 1..20 loop
    select string_agg(substr(zeichen, 1 + floor(random() * length(zeichen))::int, 1), '')
      into neu
      from generate_series(1, 6);
    begin
      insert into public.freundescode (nutzer_id, code) values (uid, neu);
      return neu;
    exception
      when unique_violation then
        -- Entweder der Code ist vergeben (neuer Versuch), oder ein zweiter
        -- Aufruf desselben Kontos war schneller (dann gilt dessen Code).
        select code into vorhanden from public.freundescode where nutzer_id = uid;
        if found then
          return vorhanden;
        end if;
    end;
  end loop;

  raise exception 'Kein freier Freundescode gefunden';
end;
$$;

revoke execute on function public.mein_freundescode() from public, anon;
grant execute on function public.mein_freundescode() to authenticated;

-- Einen Code einloesen.
--
-- Rueckgabe als jsonb: { "ergebnis": ..., "name": ... }
--   'befreundet'        neu befreundet
--   'schon_befreundet'  gab es schon
--   'eigener_code'      der eigene Code
--   'unbekannt'         kein Konto mit diesem Code
--   'zu_viele_versuche' Bremse greift
--   'kein_konto'        nicht angemeldet
-- `name` ist der Anzeigename des Freundes, sofern gesetzt.
create or replace function public.freund_hinzufuegen(p_code text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  sauber text;
  freund uuid;
  freund_name text;
  gab_es boolean;
begin
  if uid is null then
    return jsonb_build_object('ergebnis', 'kein_konto');
  end if;

  if (select count(*) from public.freundescode_versuch
       where nutzer_id = uid and zeit > now() - interval '10 minutes') >= 10 then
    return jsonb_build_object('ergebnis', 'zu_viele_versuche');
  end if;

  -- Gross, ohne Leer- und Trennzeichen: "k7q 4mx" und "K7Q-4MX" sind derselbe Code.
  sauber := upper(regexp_replace(coalesce(p_code, ''), '[^A-Za-z0-9]', '', 'g'));

  select nutzer_id into freund from public.freundescode where code = sauber;
  if not found then
    insert into public.freundescode_versuch (nutzer_id) values (uid);
    return jsonb_build_object('ergebnis', 'unbekannt');
  end if;

  if freund = uid then
    return jsonb_build_object('ergebnis', 'eigener_code');
  end if;

  select p.anzeigename into freund_name from public.profil p where p.id = freund;

  select exists (
    select 1 from public.freundschaft
     where nutzer_id = uid and freund_id = freund and status = 'bestaetigt'
  ) into gab_es;

  -- Beide Richtungen: jede Seite sieht die andere in ihrer eigenen Liste.
  insert into public.freundschaft (nutzer_id, freund_id, status)
    values (uid, freund, 'bestaetigt'), (freund, uid, 'bestaetigt')
    on conflict (nutzer_id, freund_id) do update set status = 'bestaetigt';

  return jsonb_build_object(
    'ergebnis', case when gab_es then 'schon_befreundet' else 'befreundet' end,
    'name', freund_name
  );
end;
$$;

revoke execute on function public.freund_hinzufuegen(text) from public, anon;
grant execute on function public.freund_hinzufuegen(text) to authenticated;

-- Die eigenen Freunde mit Namen. Laeuft mit den Rechten des Aufrufers: RLS
-- laesst ihn genau die eigenen Freundschaften und die Profile bestaetigter
-- Freunde lesen (Policy `profil_freund`), mehr nicht.
create or replace function public.meine_freunde()
returns table (freund_id uuid, name text, seit timestamptz)
language sql
stable
security invoker
set search_path = public
as $$
  select f.freund_id, p.anzeigename, f.erstellt_am
    from public.freundschaft f
    left join public.profil p on p.id = f.freund_id
   where f.nutzer_id = auth.uid() and f.status = 'bestaetigt'
   order by f.erstellt_am desc;
$$;

revoke execute on function public.meine_freunde() from public, anon;
grant execute on function public.meine_freunde() to authenticated;
