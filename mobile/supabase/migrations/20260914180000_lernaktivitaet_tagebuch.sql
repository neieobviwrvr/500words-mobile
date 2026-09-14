-- Lern-Tagebuch auf dem Server (2026-09-14, Simon: "Bau jetzt den
-- Tagebuch-Abgleich mit dem Server").
--
-- Das Tagebuch zaehlt auf dem Geraet je Tag, Sprache und Lernweg die
-- Antworten (richtig / ueberlebt / nicht verstanden) und die fertigen
-- Lektionen (src/features/srs/lerntagebuch.ts). Hier bekommt es seinen Platz
-- auf dem Server, damit ein zweites Geraet denselben Verlauf sieht - und
-- spaeter Streak und Rangliste etwas zum Zaehlen haben.
--
-- `lernaktivitaet` gibt es seit 2026-08-22 (tag, karten, richtig), die App hat
-- aber nie hineingeschrieben. Vor dem Umbau geprueft: 0 Zeilen. Deshalb darf
-- der Schluessel ohne Datenuebernahme wechseln.

-- ============================================================ Tabelle

alter table public.lernaktivitaet drop constraint if exists lernaktivitaet_pkey;
alter table public.lernaktivitaet drop column if exists karten;

alter table public.lernaktivitaet
  add column if not exists sprache text not null
    constraint lernaktivitaet_sprache_gueltig check (sprache ~ '^[a-z]{2,3}$'),
  add column if not exists weg text not null
    constraint lernaktivitaet_weg_gueltig check (weg in ('speedrun', 'gefuehrt')),
  add column if not exists ueberlebt integer not null default 0,
  add column if not exists nicht_verstanden integer not null default 0,
  add column if not exists lektionen integer not null default 0,
  add column if not exists aktualisiert_am timestamptz not null default now();

-- `karten` bleibt als Spalte erhalten, weil die Rangliste sie so plant - aber
-- GERECHNET, nicht gespeichert: sonst koennte sie der Summe widersprechen.
alter table public.lernaktivitaet
  add column karten integer generated always as (richtig + ueberlebt + nicht_verstanden) stored;

alter table public.lernaktivitaet
  add constraint lernaktivitaet_pkey primary key (nutzer_id, tag, sprache, weg);

-- Obergrenzen gegen Unsinn, nicht gegen Fleiss: 5000 Antworten an einem Tag
-- waeren rund 14 Stunden am Stueck.
alter table public.lernaktivitaet
  add constraint lernaktivitaet_zaehler_gueltig check (
    richtig between 0 and 5000
    and ueberlebt between 0 and 5000
    and nicht_verstanden between 0 and 5000
    and lektionen between 0 and 500
  );

-- ============================================================ Rechte

-- Bisher durfte der Nutzer seine Zeilen frei schreiben (`aktivitaet_eigene`,
-- for all) - und die Standard-Grants gaben anon und authenticated sogar
-- TRUNCATE. Jetzt wie bei coin_buchung: lesen ueber RLS, schreiben NUR ueber
-- `tagebuch_abgleichen`. Der Grund ist die Verschmelzungsregel: ein Geraet,
-- das zwei Wochen offline war, darf mit seinem alten Stand nichts verkleinern.
-- Ein freies Upsert koennte genau das.
drop policy if exists aktivitaet_eigene on public.lernaktivitaet;
create policy "lernaktivitaet eigene lesen" on public.lernaktivitaet
  for select to authenticated using (nutzer_id = auth.uid());

-- `aktivitaet_gruppe` (Mitglieder einer gemeinsamen Gruppe lesen einander)
-- bleibt unveraendert stehen - sie ist die Grundlage der Rangliste.

revoke insert, update, delete, truncate, references, trigger on public.lernaktivitaet from anon, authenticated;
revoke select on public.lernaktivitaet from anon;

-- ============================================================ Abgleich

-- Nimmt die Zeilen des Geraets und behaelt je Zaehler den GROESSEREN Wert.
-- Dieselbe Regel wie fuer alle Zaehler im Abgleich (src/lib/merge.ts):
-- wer auf dem Handy 40 Antworten gab und auf dem iPad 5, hat 40.
--
-- Die Nutzer-ID kommt aus der Anmeldung, nie aus dem Aufruf. Ungueltige
-- Zeilen (Sprache, Weg, Tag in der Zukunft) fallen stumm heraus, statt den
-- ganzen Abgleich scheitern zu lassen; Zaehler werden auf die Obergrenzen
-- gekappt. "Zukunft" ist erst uebermorgen: der Server rechnet in UTC, ein
-- Geraet in Neuseeland ist ihm einen Tag voraus.
--
-- Doppelte Zeilen im selben Aufruf werden vorher zusammengefasst, sonst
-- bricht ON CONFLICT mit "cannot affect row a second time" ab.
create or replace function public.tagebuch_abgleichen(p_zeilen jsonb)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_nutzer uuid := auth.uid();
  v_anzahl integer;
begin
  if v_nutzer is null then
    raise exception 'kein_konto' using errcode = '42501';
  end if;
  if p_zeilen is null or jsonb_typeof(p_zeilen) <> 'array' or jsonb_array_length(p_zeilen) > 500 then
    raise exception 'ungueltige_zeilen' using errcode = '22023';
  end if;

  insert into public.lernaktivitaet as a
    (nutzer_id, tag, sprache, weg, richtig, ueberlebt, nicht_verstanden, lektionen, aktualisiert_am)
  select
    v_nutzer,
    z.tag,
    z.sprache,
    z.weg,
    least(greatest(coalesce(max(z.richtig), 0), 0), 5000),
    least(greatest(coalesce(max(z.ueberlebt), 0), 0), 5000),
    least(greatest(coalesce(max(z.nicht_verstanden), 0), 0), 5000),
    least(greatest(coalesce(max(z.lektionen), 0), 0), 500),
    now()
  from jsonb_to_recordset(p_zeilen) as z(
    tag date, sprache text, weg text,
    richtig integer, ueberlebt integer, nicht_verstanden integer, lektionen integer
  )
  where z.tag is not null
    and z.tag <= current_date + 1
    and z.sprache ~ '^[a-z]{2,3}$'
    and z.weg in ('speedrun', 'gefuehrt')
  group by z.tag, z.sprache, z.weg
  on conflict (nutzer_id, tag, sprache, weg) do update set
    richtig = greatest(a.richtig, excluded.richtig),
    ueberlebt = greatest(a.ueberlebt, excluded.ueberlebt),
    nicht_verstanden = greatest(a.nicht_verstanden, excluded.nicht_verstanden),
    lektionen = greatest(a.lektionen, excluded.lektionen),
    aktualisiert_am = now()
  -- Nur anfassen, was wirklich groesser wird - sonst zoege jeder Abgleich
  -- `aktualisiert_am` aller Zeilen hoch.
  where excluded.richtig > a.richtig
     or excluded.ueberlebt > a.ueberlebt
     or excluded.nicht_verstanden > a.nicht_verstanden
     or excluded.lektionen > a.lektionen;

  get diagnostics v_anzahl = row_count;
  return v_anzahl;
end;
$$;

revoke execute on function public.tagebuch_abgleichen(jsonb) from public, anon;
grant execute on function public.tagebuch_abgleichen(jsonb) to authenticated;
