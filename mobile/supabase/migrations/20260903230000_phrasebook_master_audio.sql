-- phrasebook_master bekommt eine audio_url-Spalte.
--
-- Angewendet am 2026-09-03 auf Simons Entscheidung: "Deutsch vertonen wir
-- auch gleich vollstaendig (abgeglichen mit anderen Sprachen)". Ohne diese
-- Spalte gaebe es keinen Ort fuer die 584 deutschen Audio-URLs.
--
-- Warum das ueberhaupt auffiel: `vertone_azure.py plan` meldet
-- "phrasebook_master UEBERSPRUNGEN - Spalte 'audio_url' fehlt". Alle
-- ZEHN anderen Phrasebook-Tabellen haben die Spalte, nur die deutsche
-- nicht - sie ist die aelteste und entstand, bevor es Vertonung gab.
--
-- Deutsch ist in `languages.ts` sowohl die Ausgangssprache ALS AUCH eine
-- waehlbare Zielsprache (`hasContent: true`). Wer Deutsch lernt, braucht
-- also deutsches Audio wie jeder andere auch. Ohne diese Spalte bleiben
-- 584 Saetze stumm - rund 14.400 Azure-Zeichen, also knapp 3% des
-- Monatskontingents.
--
-- Gegenargument, das Simon abwaegen mag: die Zielgruppe sind Deutsche im
-- Ausland. Ob wir Deutsch als LERNSPRACHE wirklich anbieten wollen, ist
-- eine Produktfrage, keine technische - deshalb liegt die Migration hier
-- und wurde nicht einfach eingespielt.

alter table public.phrasebook_master
  add column if not exists audio_url text;

comment on column public.phrasebook_master.audio_url is
  'Oeffentliche URL der vertonten Satz-Audiodatei im Bucket vocab_audio. '
  'Gleiche Bedeutung wie in allen uebrigen *_phrasebook-Tabellen.';
