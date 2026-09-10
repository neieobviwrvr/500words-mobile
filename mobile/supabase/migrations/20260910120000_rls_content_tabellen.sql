-- Content-Tabellen gegen Schreibzugriff mit dem oeffentlichen Key sichern
-- (2026-09-10)
--
-- BEFUND, gemessen und nicht vermutet: acht Tabellen im public-Schema hatten
-- kein Row Level Security. Ohne RLS greifen nur die Standard-Grants, und die
-- geben der Rolle `anon` vollen Zugriff - also auch INSERT, UPDATE, DELETE.
--
-- Warum das zaehlt: der anon-Key ist NICHT geheim und soll es nicht sein. Er
-- wird beim Build in das App-Bundle kompiliert (EXPO_PUBLIC_*) und steckt in
-- jeder ausgelieferten IPA; wer sie entpackt, hat ihn in Minuten. Der Schutz
-- soll von RLS kommen, nicht von der Geheimhaltung des Keys. Bei diesen acht
-- Tabellen kam er von gar nichts: jeder mit der App haette den gesamten
-- Lerninhalt ueberschreiben oder loeschen koennen, und weil die App den
-- Content live liest, saehen das alle Nutzer sofort.
--
-- Nachgewiesen mit einem INSERT ohne Pflichtfelder: kam 401/403 zurueck, hat
-- RLS abgelehnt; kam 400 zurueck, war das Schreiben erlaubt und nur die Daten
-- waren ungueltig. Ein UPDATE mit einer Bedingung, die keine Zeile trifft,
-- taugt dafuer NICHT - es meldet auch bei greifendem RLS Erfolg, weil RLS
-- filtert statt abzulehnen. Wer das hier nachprueft, nimmt den INSERT-Weg.
--
-- Es sind genau die aeltesten Tabellen des Projekts. Die seit September per
-- Migration angelegten (it/no/ru/vi/pl/en/zh) tragen RLS von Anfang an - die
-- acht hier stammen aus der Zeit, als Tabellen von Hand im Dashboard
-- entstanden. Kein Versaeumnis einer einzelnen Migration, sondern der
-- Unterschied zwischen "im Dashboard geklickt" und "per Migration angelegt".
--
-- WAS SICH FUER DIE APP AENDERT: nichts. Sie liest Content ausschliesslich.
-- Der einzige Schreibzugriff im ganzen Client geht auf `profil`
-- (src/lib/sync.ts), und das ist eine Nutzerdaten-Tabelle mit eigener Policy
-- seit 20260822120000.
--
-- WAS SICH FUER DIE PIPELINE AENDERT: nichts. Die Skripte unter
-- Sprachlisten/ benutzen den SERVICE_ROLE_KEY, und der umgeht RLS
-- grundsaetzlich. Genau deshalb liess sich am 2026-09-10 der Familien-Import
-- fahren, obwohl er hier gerade verboten wird.

-- ---------------------------------------------------------------------------
-- Lesen fuer alle, Schreiben fuer niemanden.
--
-- `for select using (true)` erlaubt das Lesen ausdruecklich. Fuer INSERT,
-- UPDATE und DELETE gibt es KEINE Policy - und ohne passende Policy lehnt RLS
-- ab. Das Verbot muss also nicht geschrieben werden, es entsteht aus dem
-- Fehlen der Erlaubnis. Wer hier spaeter Schreibrechte braucht, fuegt eine
-- eigene Policy hinzu, statt diese aufzuweichen.
-- ---------------------------------------------------------------------------

alter table phrasebook_master enable row level security;
create policy phrasebook_master_lesen on phrasebook_master
  for select using (true);

alter table schwedisch_phrasebook enable row level security;
create policy schwedisch_phrasebook_lesen on schwedisch_phrasebook
  for select using (true);

alter table spanisch_phrasebook enable row level security;
create policy spanisch_phrasebook_lesen on spanisch_phrasebook
  for select using (true);

alter table schwedisch_vocab enable row level security;
create policy schwedisch_vocab_lesen on schwedisch_vocab
  for select using (true);

alter table spanisch_vocab enable row level security;
create policy spanisch_vocab_lesen on spanisch_vocab
  for select using (true);

alter table franz_vocab enable row level security;
create policy franz_vocab_lesen on franz_vocab
  for select using (true);

-- `answer_clusters` ist der empfindlichste Eintrag dieser Liste. Die Tabelle
-- traegt seit dem 2026-09-10 alle 716 Antwort-Familien fuer elf Sprachen, die
-- App laedt sie bei JEDEM Start neu, und ein DELETE darauf haette die
-- Mittelstufe der Bewertung in allen Sprachen gleichzeitig entfernt - ohne
-- dass ein Update noetig gewesen waere.
alter table answer_clusters enable row level security;
create policy answer_clusters_lesen on answer_clusters
  for select using (true);

-- `verb_conjugations` wird von keiner Zeile im Code gelesen (geprueft ueber
-- src/ und Sprachlisten/) - offenbar ein Rest aus einem frueheren Anlauf.
-- Sie bekommt trotzdem RLS: eine unbenutzte offene Tabelle ist kein
-- geringeres Loch als eine benutzte, nur ein unauffaelligeres. Ob sie ganz
-- weg kann, ist eine eigene Entscheidung und gehoert nicht in eine
-- Sicherheits-Migration.
alter table verb_conjugations enable row level security;
create policy verb_conjugations_lesen on verb_conjugations
  for select using (true);
