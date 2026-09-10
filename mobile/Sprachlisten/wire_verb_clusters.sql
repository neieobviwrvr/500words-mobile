-- verb_cluster liegt verschachtelt in accepted_concepts (jsonb), nicht als
-- eigene Spalte - daher jsonb_set statt direktem Spalten-Update.

update phrasebook_master set accepted_concepts = jsonb_set(accepted_concepts, '{verb_cluster}', '"fahren_reisen"') where german = 'Nächstes Jahr fahre ich nach Italien.';
update phrasebook_master set accepted_concepts = jsonb_set(accepted_concepts, '{verb_cluster}', '"gehen_wegbeschreibung"') where german = 'Gehen Sie geradeaus.';
update phrasebook_master set accepted_concepts = jsonb_set(accepted_concepts, '{verb_cluster}', '"gehen_freizeitweg"') where german = 'Ich gehe gerne ins Kino.';
update phrasebook_master set accepted_concepts = jsonb_set(accepted_concepts, '{verb_cluster}', '"gehen"') where german = 'Nächstes Wochenende gehe ich wandern.';

update phrasebook_master set accepted_concepts = jsonb_set(accepted_concepts, '{verb_cluster}', '"kosten"') where german in (
  'Wie viel kostet das?',
  'Das kostet zehn Euro.',
  'Wie viel kostet die Nacht?',
  'Wie viel kostet die Fahrt zum Flughafen?',
  'Wie viel kostet der Eintritt?'
);

update phrasebook_master set accepted_concepts = jsonb_set(accepted_concepts, '{verb_cluster}', '"sein"') where german in (
  'Ich bin 25 Jahre alt.',
  'Ich bin Student.',
  'Ich bin Vegetarier.',
  'Ich bin allergisch gegen Penizillin.',
  'Ich war letztes Jahr in Frankreich.',
  'Letztes Wochenende war ich am Strand.'
);

update phrasebook_master set accepted_concepts = jsonb_set(accepted_concepts, '{verb_cluster}', '"haben"') where german in (
  'Ich habe eine Schwester.',
  'Ich habe morgen keine Zeit.',
  'Ich habe einen Termin um 10 Uhr.',
  'Ich habe eine Reservierung.',
  'Ich habe eine Allergie gegen Nüsse.',
  'Ich habe Kopfschmerzen.',
  'Ich habe Fieber.',
  'Ich habe morgen eine Prüfung.'
);
