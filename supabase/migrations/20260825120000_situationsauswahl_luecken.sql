-- Fehlende Vokabeln fuer 10 der 11 Saetze, die die Situations-Auswahl-Runde
-- (Woerter-Wiederholung) bisher wegen einer Zerlegungs-Luecke uebersprungen
-- hat (2026-08-25, Simons Auftrag nach Rueckfrage "Warum besteht ... diese
-- Zerlegung fuer 11 Saetze"). Der elfte Fall ("120" in "Bitte rufen Sie
-- 120 an.") sind arabische Ziffern, kein Hanzi - der bleibt strukturell eine
-- Luecke und wird stattdessen im Code (situationsAufgaben.ts) als
-- Durchlass-Zeichen behandelt, nicht hier ueber eine Vokabel geloest.
--
-- Zusammengesetzte Woerter als EIN Eintrag (nicht als Einzelzeichen), damit
-- die Laengster-Treffer-Zerlegung sie als Einheit erkennt - gleiches Muster
-- wie die schon vorhandenen Eintraege 跳舞/酒店/微信.
--
-- Nebenbefund beim Einfuegen: die id-Sequenz der Tabelle lag hinter dem
-- echten Maximalwert zurueck (vermutlich von einem fruehen CSV-Import ueber
-- feste ids ohne Sequenz-Fortschreibung) - `setval` synchronisiert sie,
-- bevor der Insert versucht wird, sonst schlaegt er mit einem
-- Primary-Key-Konflikt auf einer laengst belegten id fehl.
select setval('chinesisch_vocab_id_seq', (select max(id) from chinesisch_vocab));

insert into chinesisch_vocab (hanzi, pinyin, german, category) values
  ('报警', 'bàojǐng', 'die Polizei rufen', null),
  ('们', 'men', 'Pluralpartikel (bei Personen: wir, ihr, sie)', null),
  ('待', 'dāi', 'bleiben', null),
  ('遍', 'biàn', 'einmal (Zählwort, ganzer Vorgang von Anfang bis Ende)', null),
  ('支付', 'zhīfù', 'bezahlen', null),
  ('谈恋爱', 'tán liàn''ài', 'daten, sich verlieben', null),
  ('发型', 'fàxíng', 'Frisur', null),
  ('跳', 'tiào', 'springen', null),
  ('打', 'dǎ', 'schlagen, anrufen', null),
  ('退房', 'tuìfáng', 'auschecken', null),
  ('方便', 'fāngbiàn', 'praktisch, bequem', null)
on conflict (hanzi) do nothing;
