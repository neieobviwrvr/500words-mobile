# -*- coding: utf-8 -*-
"""Die sechs kleinsten Kategorien auf Italienisch, in einer Datei.

Zusammen 76 Saetze - culture_immersion (20), moving_settling (18),
shopping_haggling (16), smalltalk_socialising (12), love_relationship (8),
dating_romance (2). Sechs eigene Dateien mit je zwei bis zwanzig Zeilen
waeren mehr Verwaltung als Inhalt; `werkzeug.py` kann kategorieuebergreifende
Dateien ueber `KATEGORIEN` + `kat=` je Satz (siehe `kategorien_von`).

**Nichts ausgelassen** - alle 76 lassen sich abbilden.

Zwei Stellen, an denen NICHT woertlich uebersetzt wurde, weil der deutsche
Satz eine deutsche Behoerde bzw. eine deutsche Wohnrealitaet meint:

  Einwohnermeldeamt     In Italien ist das die `anagrafe` im `comune`, und
                        der Vorgang heisst `cambio di residenza`. Eine
                        woertliche Uebersetzung gaebe es zwar, sie fuehrte
                        aber am Amt vorbei.
  Handwerker            Italiener rufen keinen "Handwerker", sie rufen das
                        Gewerk (`idraulico`, `elettricista`). `tecnico` ist
                        der Oberbegriff, der im Zweifel verstanden wird -
                        der Hinweis am Satz sagt das.

**Du oder Sie:** in Laden- und Amtssituationen steht hier `Lei` (also
`ha`, `puo'`, `posso ...?`), im Smalltalk unter Gleichaltrigen `tu`.
Dieselbe Grundlinie wie im Grundwortschatz.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = [
    'culture_immersion',
    'dating_romance',
    'love_relationship',
    'moving_settling',
    'shopping_haggling',
    'smalltalk_socialising',
]

SAETZE = [

# ========================================================= culture_immersion
 dict(kat='culture_immersion', de='Wo findet das Konzert statt?', it='Dove si tiene il concerto?',
      k=[('konzert', ['concerto'])]),
 dict(kat='culture_immersion', de='Wie viel kostet der Eintritt?', it='Quanto costa l\'ingresso?',
      k=[('eintritt', ['ingresso', 'biglietto'])]),
 dict(kat='culture_immersion', de='Wann öffnet das Museum?', it='Quando apre il museo?',
      k=[('museum_oeffnet', ['apre il museo', 'quando apre', 'museo'])]),
 dict(kat='culture_immersion', de='Das war ein tolles Konzert.', it='È stato un concerto fantastico.',
      k=[('tolles_konzert', ['concerto fantastico', 'bel concerto', 'concerto bellissimo'])]),
 dict(kat='culture_immersion', de='Ich gehe gerne ins Kino.', it='Mi piace andare al cinema.',
      k=[('kino', ['cinema'])]),
 dict(kat='culture_immersion', de='Ich interessiere mich für Geschichte.', it='Mi interessa la storia.',
      k=[('interessiere_geschichte', ['mi interessa la storia', 'storia'])]),
 dict(kat='culture_immersion', de='Treibst du Sport?', it='Fai sport?',
      k=[('sport_frage', ['fai sport', 'sport'])]),
 dict(kat='culture_immersion', de='Ich spiele gerne Fußball.', it='Mi piace giocare a calcio.',
      k=[('fussball', ['calcio'])],
      h='Fußball heißt „calcio", nicht „football" — und ist in Italien ein '
        'zuverlässiger Gesprächsöffner. Die Frage nach der Lieblingsmannschaft '
        'kommt fast immer.'),
 dict(kat='culture_immersion', de='Berlin ist sehr schön.', it='Berlino è molto bella.',
      k=[('berlin_schoen', ['berlino', 'molto bella'])]),
 dict(kat='culture_immersion', de='Wir spielen Fußball.', it='Giochiamo a calcio.',
      k=[('spielen_fussball', ['giochiamo a calcio', 'calcio'])]),
 dict(kat='culture_immersion', de='Wo ist die Kirche?', it='Dov\'è la chiesa?',
      k=[('kirche', ['chiesa'])]),
 dict(kat='culture_immersion', de='Er ist gesprungen.', it='È saltato.',
      k=[('gesprungen', ['è saltato', 'saltato'])]),
 dict(kat='culture_immersion', de='Wie ist das Wetter heute?', it='Com\'è il tempo oggi?',
      k=[('wetter_frage', ['com\'è il tempo', 'che tempo fa'])]),
 dict(kat='culture_immersion', de='Es regnet.', it='Piove.',
      k=[('regnet', ['piove'])]),
 dict(kat='culture_immersion', de='Die Sonne scheint.', it='C\'è il sole.',
      k=[('sonne_scheint', ['c\'è il sole', 'splende il sole', 'sole'])]),
 dict(kat='culture_immersion', de='Es ist sehr kalt heute.', it='Fa molto freddo oggi.',
      k=[('kalt', ['fa freddo', 'freddo'])]),
 dict(kat='culture_immersion', de='Was machst du am Wochenende?', it='Cosa fai nel weekend?',
      k=[('wochenende_frage', ['cosa fai nel weekend', 'weekend', 'fine settimana'])]),
 dict(kat='culture_immersion', de='Möchtest du mitkommen?', it='Vuoi venire?',
      k=[('mitkommen', ['vuoi venire', 'vieni', 'venire con me'])]),
 dict(kat='culture_immersion', de='Letztes Wochenende war ich am Strand.', it='Il weekend scorso sono stato al mare.',
      k=[('strand', ['al mare', 'spiaggia', 'mare'])],
      h='Italiener fahren „al mare" (ans Meer), nicht „in spiaggia" (an den '
        'Strand) — der Strand ist der Ort, das Meer ist die Unternehmung.'),
 dict(kat='culture_immersion', de='Nächstes Wochenende gehe ich wandern.', it='Il prossimo weekend vado a fare trekking.',
      k=[('wandern', ['trekking', 'escursione', 'camminare in montagna'])]),

# ============================================================ dating_romance
 dict(kat='dating_romance', de='Hast du einen festen Freund oder eine feste Freundin?',
      it='Hai un ragazzo o una ragazza?',
      k=[('fester_partner', ['un ragazzo', 'una ragazza', 'fidanzato', 'fidanzata'])],
      h='„Ragazzo/ragazza" heißt wörtlich Junge/Mädchen und ist trotzdem das '
        'normale Wort für den festen Freund bzw. die feste Freundin. '
        '„Fidanzato" ist ernster und klingt Richtung Verlobung.'),
 dict(kat='dating_romance', de='Wir sind gerade zusammen.', it='Stiamo insieme.',
      k=[('zusammen_sein', ['stiamo insieme', 'insieme'])]),

# ========================================================== love_relationship
 dict(kat='love_relationship', de='Wie soll ich dich nennen?', it='Come ti devo chiamare?',
      k=[('wie', ['come']),
         ('nennen', ['chiamare', 'chiamarti'])]),
 dict(kat='love_relationship', de='Ich nenne dich Schatz.', it='Ti chiamo tesoro.',
      k=[('nennen', ['ti chiamo', 'chiamo']),
         ('schatz', ['tesoro'])],
      h='„Tesoro" (Schatz) ist der Standard-Kosename und funktioniert für '
        'alle Geschlechter unverändert — es wird nicht gebeugt.'),
 dict(kat='love_relationship', de='Kann ich dich Schatzi nennen?', it='Posso chiamarti tesorino?',
      k=[('koennen', ['posso']),
         ('schatzi', ['tesorino'])],
      h='Die Verkleinerungsform auf „-ino/-ina" ist im Italienischen die '
        'übliche Zärtlichkeitsgeste — aus „tesoro" wird „tesorino", aus '
        '„amore" wird „amorino".'),
 dict(kat='love_relationship', de='Er nennt mich Bärchen.', it='Mi chiama cucciolo.',
      k=[('nennen', ['mi chiama', 'chiama']),
         ('baerchen', ['cucciolo', 'orsetto'])],
      h='„Cucciolo" ist das Tierjunge (Welpe) und der gängigere Kosename; '
        '„orsetto" (Bärchen) gibt es, ist aber seltener als im Deutschen.'),
 dict(kat='love_relationship', de='Sie nennt mich Süße.', it='Mi chiama dolcezza.',
      k=[('nennen', ['mi chiama', 'chiama']),
         ('suesse', ['dolcezza', 'tesoro'])]),
 dict(kat='love_relationship', de='Das ist mein Kosename für dich.', it='È il mio nomignolo per te.',
      k=[('kosename', ['nomignolo', 'vezzeggiativo'])]),
 dict(kat='love_relationship', de='Ich mag diesen Spitznamen nicht so gern.', it='Non mi piace molto questo soprannome.',
      k=[('nicht_gern', ['non mi piace']),
         ('spitzname', ['soprannome', 'nomignolo'])]),
 dict(kat='love_relationship', de='Nenn mich bitte nicht so!', it='Non chiamarmi così, per favore!',
      k=[('nennen', ['non chiamarmi', 'chiamarmi']),
         ('nicht_so', ['così'])]),

# ============================================================ moving_settling
 dict(kat='moving_settling', de='Wo finde ich einen Handwerker?', it='Dove posso trovare un tecnico?',
      k=[('handwerker', ['tecnico', 'artigiano', 'idraulico'])],
      h='Ein Sammelwort wie „Handwerker" benutzt man in Italien selten — man '
        'ruft das Gewerk: „idraulico" (Klempner), „elettricista" '
        '(Elektriker), „fabbro" (Schlosser). „Tecnico" versteht jeder als '
        'Oberbegriff.'),
 dict(kat='moving_settling', de='Die Heizung funktioniert nicht.', it='Il riscaldamento non funziona.',
      k=[('heizung_kaputt', ['riscaldamento non funziona', 'riscaldamento', 'non funziona'])]),
 dict(kat='moving_settling', de='Meine Nachbarn sind sehr nett.', it='I miei vicini sono molto gentili.',
      k=[('nachbarn_nett', ['vicini', 'gentili'])]),
 dict(kat='moving_settling', de='Das Buch liegt auf dem Tisch.', it='Il libro è sul tavolo.',
      k=[('buch_tisch', ['libro', 'sul tavolo'])]),
 dict(kat='moving_settling', de='Hier ist es sehr praktisch.', it='Qui è molto comodo.',
      k=[('praktisch', ['comodo', 'pratico'])]),
 dict(kat='moving_settling', de='Ich muss den Strom anmelden.', it='Devo attivare la corrente.',
      k=[('strom_anmelden', ['attivare la corrente', 'allacciare la luce', 'corrente'])]),
 dict(kat='moving_settling', de='Wie melde ich mich beim Einwohnermeldeamt an?', it='Come mi iscrivo all\'anagrafe?',
      k=[('einwohnermeldeamt', ['anagrafe', 'residenza', 'comune'])],
      h='Das Gegenstück zum Einwohnermeldeamt ist die „anagrafe" im „comune" '
        '(Rathaus), der Vorgang heißt „cambio di residenza". Ohne Termin '
        'geht meist nichts, und es dauert.'),
 dict(kat='moving_settling', de='Ich brauche eine Bestätigung meiner Adresse.', it='Mi serve un certificato di residenza.',
      k=[('adressbestaetigung', ['certificato di residenza', 'residenza'])]),
 dict(kat='moving_settling', de='Das kann ich erledigen.', it='Posso occuparmene io.',
      k=[('erledigen', ['posso occuparmene', 'me ne occupo'])]),
 dict(kat='moving_settling', de='Ich bezahle mit dem Handy.', it='Pago con il telefono.',
      k=[('handy_bezahlen', ['con il telefono', 'col cellulare', 'telefono'])]),
 dict(kat='moving_settling', de='Ich suche eine Wohnung.', it='Cerco un appartamento.',
      k=[('wohnung_suchen', ['cerco un appartamento', 'appartamento'])]),
 dict(kat='moving_settling', de='Wie hoch ist die Miete?', it='Quant\'è l\'affitto?',
      k=[('miete', ['affitto'])]),
 dict(kat='moving_settling', de='Ist die Kaution im Preis enthalten?', it='La caparra è inclusa nel prezzo?',
      k=[('kaution', ['caparra', 'cauzione', 'deposito'])]),
 dict(kat='moving_settling', de='Wann kann ich einziehen?', it='Quando posso trasferirmi?',
      k=[('einziehen', ['trasferirmi', 'entrare'])]),
 dict(kat='moving_settling', de='Gibt es einen Aufzug im Haus?', it='C\'è l\'ascensore nel palazzo?',
      k=[('aufzug', ['ascensore'])],
      h='In italienischen Altbauten ist der Aufzug die Ausnahme, nicht die '
        'Regel — und „quarto piano" heißt im Zweifel fünf Treppen, weil das '
        'Erdgeschoss („piano terra") nicht mitzählt.'),
 dict(kat='moving_settling', de='Gibt es hier einen Waschraum?', it='C\'è una lavanderia qui?',
      k=[('waschraum', ['lavanderia', 'lavatrice'])]),
 dict(kat='moving_settling', de='Ich möchte den Mietvertrag unterschreiben.', it='Vorrei firmare il contratto d\'affitto.',
      k=[('mietvertrag', ['contratto d\'affitto', 'contratto']),
         ('unterschreiben', ['firmare'])]),
 dict(kat='moving_settling', de='Ich bin letzte Woche umgezogen.', it='Ho traslocato la settimana scorsa.',
      k=[('umgezogen', ['ho traslocato', 'traslocato', 'mi sono trasferito'])]),

# ========================================================== shopping_haggling
 dict(kat='shopping_haggling', de='Kann ich das anprobieren?', it='Posso provarlo?',
      k=[('anprobieren', ['provarlo', 'provare'])]),
 dict(kat='shopping_haggling', de='Wo ist die Umkleidekabine?', it='Dov\'è il camerino?',
      k=[('umkleidekabine', ['camerino'])]),
 dict(kat='shopping_haggling', de='Haben Sie das auch in Größe M?', it='Ce l\'ha anche in taglia M?',
      k=[('groesse', ['taglia'])],
      h='„Taglia" ist die Kleidergröße, „numero" die Schuhgröße — zwei '
        'verschiedene Wörter.'),
 dict(kat='shopping_haggling', de='Haben Sie das in einer anderen Farbe?', it='Ce l\'ha in un altro colore?',
      k=[('andere_farbe', ['altro colore', 'colore'])]),
 dict(kat='shopping_haggling', de='Kann ich mit Karte bezahlen?', it='Posso pagare con la carta?',
      k=[('karte_zahlen', ['con la carta', 'carta'])]),
 dict(kat='shopping_haggling', de='Nur Bargeld, bitte.', it='Solo contanti, per favore.',
      k=[('bargeld', ['contanti'])]),
 dict(kat='shopping_haggling', de='Das ist zu teuer.', it='È troppo caro.',
      k=[('zu_teuer', ['troppo caro'])]),
 dict(kat='shopping_haggling', de='Gibt es einen Rabatt?', it='C\'è uno sconto?',
      k=[('rabatt', ['sconto'])]),
 dict(kat='shopping_haggling', de='Haben Sie eine Tüte?', it='Ha un sacchetto?',
      k=[('tuete', ['sacchetto', 'busta'])],
      h='Tüten kosten in Italien immer etwas und stehen auf dem Kassenbon — '
        'das ist gesetzlich so, kein Trick des Ladens.'),
 dict(kat='shopping_haggling', de='Das gilt nicht als teuer.', it='Non è considerato caro.',
      k=[('nicht_teuer', ['non è caro', 'non è considerato caro'])]),
 dict(kat='shopping_haggling', de='Ich möchte das zurückgeben.', it='Vorrei restituirlo.',
      k=[('zurueckgeben', ['restituirlo', 'restituire', 'rendere'])]),
 dict(kat='shopping_haggling', de='Ich suche ein Geschenk für meine Mutter.', it='Cerco un regalo per mia madre.',
      k=[('geschenk', ['regalo'])]),
 dict(kat='shopping_haggling', de='Wann schließt das Geschäft?', it='A che ora chiude il negozio?',
      k=[('schliesst', ['chiude'])]),
 dict(kat='shopping_haggling', de='Ich schaue mich nur um.', it='Sto solo guardando.',
      k=[('nur_umschauen', ['sto solo guardando', 'solo un\'occhiata'])]),
 dict(kat='shopping_haggling', de='Können Sie mir helfen?', it='Può aiutarmi?',
      k=[('helfen', ['aiutarmi', 'aiutare'])]),
 dict(kat='shopping_haggling', de='Ich habe gestern ein neues Kleid gekauft.', it='Ieri ho comprato un vestito nuovo.',
      k=[('gekauft', ['ho comprato', 'comprato']),
         ('kleid', ['vestito', 'abito'])]),

# ===================================================== smalltalk_socialising
 dict(kat='smalltalk_socialising', de='Bist du verheiratet?', it='Sei sposato?',
      k=[('verheiratet', ['sposato', 'sposata'])]),
 dict(kat='smalltalk_socialising', de='Hast du Geschwister?', it='Hai fratelli?',
      k=[('geschwister', ['fratelli', 'fratelli o sorelle'])],
      h='„Fratelli" heißt Brüder UND Geschwister — die männliche Mehrzahl '
        'deckt die gemischte Gruppe mit ab. Ein eigenes Wort für '
        '„Geschwister" gibt es nicht.'),
 dict(kat='smalltalk_socialising', de='Ich habe eine Schwester.', it='Ho una sorella.',
      k=[('schwester', ['sorella'])]),
 dict(kat='smalltalk_socialising', de='Noch nicht.', it='Non ancora.',
      k=[('noch_nicht', ['non ancora'])]),
 dict(kat='smalltalk_socialising', de='Was sind deine Hobbys?', it='Quali sono i tuoi hobby?',
      k=[('hobbys_frage', ['i tuoi hobby', 'hobby'])]),
 dict(kat='smalltalk_socialising', de='Ich lese gerne Bücher.', it='Mi piace leggere.',
      k=[('lesen', ['leggere', 'libri'])]),
 dict(kat='smalltalk_socialising', de='Mein Hobby ist Sport.', it='Il mio hobby è lo sport.',
      k=[('hobby_sport', ['sport'])]),
 dict(kat='smalltalk_socialising', de='Was machst du beruflich?', it='Che lavoro fai?',
      k=[('beruf_frage', ['che lavoro fai', 'lavoro'])]),
 dict(kat='smalltalk_socialising', de='Ich bin Student.', it='Sono uno studente.',
      k=[('student', ['studente', 'studentessa'])]),
 dict(kat='smalltalk_socialising', de='Ich arbeite als Lehrer.', it='Faccio l\'insegnante.',
      k=[('beruf', ['insegnante', 'professore', 'maestro'])],
      h='Berufe stehen im Italienischen ohne Artikel nach „sono" („sono '
        'insegnante") oder mit Artikel nach „faccio" („faccio '
        'l\'insegnante") — beides ist richtig.'),
 dict(kat='smalltalk_socialising', de='Wo wohnst du?', it='Dove abiti?',
      k=[('wo_wohnst', ['dove abiti', 'dove vivi'])]),
 dict(kat='smalltalk_socialising', de='Ich wohne in Berlin.', it='Abito a Berlino.',
      k=[('wohne_in', ['abito a berlino', 'berlino'])]),
]

AUSGELASSEN = []
