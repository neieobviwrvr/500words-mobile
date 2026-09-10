-- Wortarten-Farbcodierung durchgehend (2026-08-29, Simons Entscheidung):
-- alle 5 Wortkategorien (Nomen/Verb/Adjektiv/Pronomen/Konjunktion) sollen
-- durchgehend eingefaerbt werden, auch innerhalb ganzer Saetze. Siehe Plan
-- "Wortart-Farbcodierung durchgaengig" fuer den vollen Kontext.

-- Chinesisch hat als einzige Sprache KEINE echte Wortart-Spalte fuer seine
-- Vokabeln (bisher nur aus der deutschen Uebersetzung geraten, siehe
-- wortartAusDeutsch() in vocabContent.ts - trifft zuverlaessig nur Nomen/
-- Verb/Sonstiges). Nullable: unklassifizierte Zeilen fallen weiterhin auf
-- die Heuristik zurueck, nichts bricht.
alter table chinesisch_vocab add column if not exists wortart text;
-- Werte: 'Nomen' | 'Verb' | 'Adjektiv' | 'Pronomen' | 'Konjunktion' |
--        'Sonstiges' | null (nicht klassifiziert)

-- Wort-fuer-Wort-Tagging fuer ganze Saetze - existiert bisher fuer KEINE
-- Sprache, nur Satz-Ebene. Format: jsonb-Array in Lesereihenfolge,
-- [{"w": "Ich", "c": "p"}, {"w": "heisse", "c": "v"}, {"w": "Anna.", "c": null}].
-- Tokenisierungs-Quelle ist die bestehende Textspalte (target_text/german,
-- bei Chinesisch das schon wortweise getrennte pinyin) - Leerzeichen-Split.
-- Nullable: ungetaggte Zeilen rendern weiterhin schlicht, ohne Farbe.
alter table phrasebook_master add column if not exists word_tags jsonb;
alter table schwedisch_phrasebook add column if not exists word_tags jsonb;
alter table spanisch_phrasebook add column if not exists word_tags jsonb;
alter table franz_phrasebook add column if not exists word_tags jsonb;
alter table chinesisch_phrasebook add column if not exists word_tags jsonb;
