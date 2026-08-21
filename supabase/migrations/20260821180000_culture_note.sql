-- Kulturhinweis pro Satz (2026-08-21, Nutzer-Wunsch).
--
-- Ein kurzer deutscher Satz, der erklaert, warum eine Aeusserung in China
-- anders funktioniert als bei uns. Zwei Zwecke in einem Feld:
--
--   1. UEBERSETZEN: wer die Kategorie spaeter fuer Schwedisch oder Spanisch
--      baut, sieht sofort, welche Saetze sich NICHT mechanisch uebertragen
--      lassen. 哪里哪里 hat kein schwedisches Gegenstueck, und "du bist
--      schlank" ist auf Deutsch kein Kompliment, sondern eine Bemerkung.
--
--   2. ANZEIGEN: der Nutzer erfaehrt, dass Schlankheit und grosse Augen in
--      China voellig gaengige Komplimente sind. Ohne den Hinweis traut er
--      sich einen Satz nicht zu benutzen, den er fuer seltsam haelt - der
--      Satz waere dann umsonst geschrieben.
--
-- Deshalb KEIN eigenes Kennzeichen "ist china-spezifisch": wo ein Hinweis
-- steht, ist der Satz es. Ein zweites Feld koennte nur widerspruechlich
-- werden.

alter table chinesisch_phrasebook add column if not exists culture_note text;
alter table phrasebook_master     add column if not exists culture_note text;
alter table schwedisch_phrasebook add column if not exists culture_note text;
alter table spanisch_phrasebook   add column if not exists culture_note text;
