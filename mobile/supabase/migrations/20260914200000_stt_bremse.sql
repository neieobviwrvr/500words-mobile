-- Bremse fuer die Spracherkennung (2026-09-14, Simon: "mach das in der Edge
-- Function").
--
-- `speechmatics-transcribe` ist mit dem oeffentlichen anon-Key aufrufbar -
-- Gaeste nutzen die Spracherkennung auch, und der Key steckt in jeder IPA.
-- Ohne Bremse koennte jeder beliebig oft Audio ueber unser
-- Speechmatics-Konto transkribieren lassen. Diese Tabelle zaehlt die
-- Aufrufe je Konto bzw. je Gast-IP; die Edge Function fragt vor jedem Job
-- `stt_bremse`.
--
-- **Datenschutz:** eine IP steht hier nur als Hash (siehe Edge Function),
-- und jede Zeile ist nach einem Tag weg.

create table if not exists public.stt_aufruf (
  id          bigint generated always as identity primary key,
  -- 'konto:<uuid>' oder 'ip:<sha256, gekuerzt>'
  schluessel  text not null check (char_length(schluessel) <= 80),
  erstellt_am timestamptz not null default now()
);

create index if not exists stt_aufruf_schluessel_zeit on public.stt_aufruf (schluessel, erstellt_am desc);
create index if not exists stt_aufruf_zeit on public.stt_aufruf (erstellt_am);

-- Niemand aus der App liest oder schreibt hier. RLS ohne Policy UND ohne
-- Grants: dicht, auch wenn spaeter jemand eine Policy dazuschreibt.
alter table public.stt_aufruf enable row level security;
revoke all on public.stt_aufruf from anon, authenticated;

-- Zaehlt einen Aufruf und sagt, ob er durchgehen darf.
--
-- Abgewiesene Aufrufe zaehlen NICHT mit - wer an der Grenze steht, soll
-- nach einer Minute wieder durchkommen, statt sich mit jedem weiteren
-- Versuch tiefer hineinzubremsen.
--
-- Zwei gleichzeitige Aufrufe koennen die Grenze um einen ueberschreiten; fuer
-- eine Kostenbremse ist das egal, eine Sperre waere hier teurer als der Fehler.
create or replace function public.stt_bremse(p_schluessel text, p_je_minute integer, p_je_tag integer)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_minute integer;
  v_tag integer;
begin
  -- Aufraeumen: die eigenen alten Zeilen immer, alle anderen gelegentlich -
  -- sonst blieben Schluessel liegen, die nie wieder aufrufen.
  delete from public.stt_aufruf where schluessel = p_schluessel and erstellt_am < now() - interval '1 day';
  if random() < 0.02 then
    delete from public.stt_aufruf where erstellt_am < now() - interval '1 day';
  end if;

  select
    count(*) filter (where erstellt_am > now() - interval '1 minute'),
    count(*)
  into v_minute, v_tag
  from public.stt_aufruf
  where schluessel = p_schluessel;

  if v_minute >= p_je_minute or v_tag >= p_je_tag then
    return false;
  end if;

  insert into public.stt_aufruf (schluessel) values (p_schluessel);
  return true;
end;
$$;

-- Nur die Edge Function (Service-Rolle) - sonst koennte jemand fremde
-- Schluessel vollzaehlen und damit andere aussperren.
revoke execute on function public.stt_bremse(text, integer, integer) from public, anon, authenticated;
grant execute on function public.stt_bremse(text, integer, integer) to service_role;
