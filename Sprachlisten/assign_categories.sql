-- Ordnet die 189 phrasebook_master-Saetze den 13 offiziellen Zusatzkategorien
-- aus CLAUDE.md zu (Slug-Form), bzw. "grundwortschatz" fuer die allgemeinen
-- Saetze ohne Kategorie-Bezug. Kann gefahrlos mehrfach ausgefuehrt werden.

update phrasebook_master set category = 'hotel_accommodation' where scenario = 'hotel';
update phrasebook_master set category = 'travel_transportation' where scenario in ('reisen', 'wegbeschreibung');
update phrasebook_master set category = 'health_emergency' where scenario = 'gesundheit';
update phrasebook_master set category = 'moving_settling' where scenario = 'wohnen';
update phrasebook_master set category = 'smalltalk_socialising' where scenario = 'smalltalk';
update phrasebook_master set category = 'shopping_haggling' where scenario = 'einkaufen';
update phrasebook_master set category = 'drinking_dining' where scenario = 'restaurant';
update phrasebook_master set category = 'culture_immersion' where scenario = 'kultur';
update phrasebook_master set category = 'university_studying' where scenario = 'uni';
update phrasebook_master set category = 'grundwortschatz'
  where scenario in ('begruessung', 'vorstellung', 'abschied', 'uhrzeit', 'termin', 'zahlen');
