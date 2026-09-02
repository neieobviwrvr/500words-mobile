# -*- coding: utf-8 -*-
"""Die sechs kleinsten Kategorien auf Norwegisch (Bokmaal), in einer Datei.

Zusammen 76 Saetze - culture_immersion (20), moving_settling (18),
shopping_haggling (16), smalltalk_socialising (12), love_relationship (8),
dating_romance (2). Aufbau wie `kleine_kategorien_it.py`.

**Nichts ausgelassen** - alle 76 lassen sich abbilden.

Drei Stellen, an denen der deutsche Satz eine deutsche Wirklichkeit meint
und deshalb nicht woertlich uebersetzt ist:

  Einwohnermeldeamt     In Norwegen ist das `folkeregisteret`, gefuehrt von
                        der Steuerbehoerde `Skatteetaten` - man meldet sich
                        dort und bekommt eine Personennummer
                        (`fødselsnummer`), ohne die praktisch nichts geht.
  Handwerker            `håndverker` gibt es als Wort, aber gerufen wird
                        auch hier meist das Gewerk (`rørlegger`,
                        `elektriker`).
  Bargeld               "Nur Bargeld, bitte" ist in Norwegen fast
                        undenkbar - der Satz steht trotzdem drin, weil er im
                        Master steht; der Hinweis sagt, dass es real
                        andersherum laeuft.

**Kein Sie.** Norwegisch duzt durchgehend, auch Personal und Aemter - die
Lei/vous-Unterscheidung, die Italienisch und Franzoesisch hier brauchen,
faellt komplett weg. Steht ausfuehrlich im Grundwortschatz.

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
 dict(kat='culture_immersion', de='Wo findet das Konzert statt?', no='Hvor er konserten?',
      k=[('konzert', ['konserten', 'konsert'])]),
 dict(kat='culture_immersion', de='Wie viel kostet der Eintritt?', no='Hva koster billetten?',
      k=[('eintritt', ['billetten', 'billett', 'inngang'])]),
 dict(kat='culture_immersion', de='Wann öffnet das Museum?', no='Når åpner museet?',
      k=[('museum_oeffnet', ['når åpner museet', 'museet', 'åpner'])]),
 dict(kat='culture_immersion', de='Das war ein tolles Konzert.', no='Det var en fantastisk konsert.',
      k=[('tolles_konzert', ['fantastisk konsert', 'bra konsert', 'kjempebra konsert'])]),
 dict(kat='culture_immersion', de='Ich gehe gerne ins Kino.', no='Jeg liker å gå på kino.',
      k=[('kino', ['kino'])]),
 dict(kat='culture_immersion', de='Ich interessiere mich für Geschichte.', no='Jeg er interessert i historie.',
      k=[('interessiere_geschichte', ['interessert i historie', 'historie'])]),
 dict(kat='culture_immersion', de='Treibst du Sport?', no='Driver du med sport?',
      k=[('sport_frage', ['driver du med sport', 'sport', 'trener du'])]),
 dict(kat='culture_immersion', de='Ich spiele gerne Fußball.', no='Jeg liker å spille fotball.',
      k=[('fussball', ['fotball'])]),
 dict(kat='culture_immersion', de='Berlin ist sehr schön.', no='Berlin er veldig fin.',
      k=[('berlin_schoen', ['berlin', 'veldig fin', 'fin'])]),
 dict(kat='culture_immersion', de='Wir spielen Fußball.', no='Vi spiller fotball.',
      k=[('spielen_fussball', ['vi spiller fotball', 'fotball'])]),
 dict(kat='culture_immersion', de='Wo ist die Kirche?', no='Hvor er kirken?',
      k=[('kirche', ['kirken', 'kirke'])]),
 dict(kat='culture_immersion', de='Er ist gesprungen.', no='Han hoppet.',
      k=[('gesprungen', ['han hoppet', 'hoppet'])]),
 dict(kat='culture_immersion', de='Wie ist das Wetter heute?', no='Hvordan er været i dag?',
      k=[('wetter_frage', ['hvordan er været', 'været'])],
      h='Wetter ist in Norwegen kein Verlegenheitsthema, sondern echter '
        'Smalltalk — und die Antwort lautet oft „det finnes ikke dårlig vær, '
        'bare dårlige klær" (es gibt kein schlechtes Wetter, nur schlechte '
        'Kleidung).'),
 dict(kat='culture_immersion', de='Es regnet.', no='Det regner.',
      k=[('regnet', ['det regner', 'regner'])]),
 dict(kat='culture_immersion', de='Die Sonne scheint.', no='Sola skinner.',
      k=[('sonne_scheint', ['sola skinner', 'sol', 'solen skinner'])]),
 dict(kat='culture_immersion', de='Es ist sehr kalt heute.', no='Det er veldig kaldt i dag.',
      k=[('kalt', ['kaldt', 'veldig kaldt'])]),
 dict(kat='culture_immersion', de='Was machst du am Wochenende?', no='Hva gjør du i helga?',
      k=[('wochenende_frage', ['hva gjør du i helga', 'helga', 'helgen'])]),
 dict(kat='culture_immersion', de='Möchtest du mitkommen?', no='Vil du bli med?',
      k=[('mitkommen', ['vil du bli med', 'bli med'])]),
 dict(kat='culture_immersion', de='Letztes Wochenende war ich am Strand.', no='Forrige helg var jeg på stranda.',
      k=[('strand', ['stranda', 'strand'])]),
 dict(kat='culture_immersion', de='Nächstes Wochenende gehe ich wandern.', no='Neste helg skal jeg gå tur.',
      k=[('wandern', ['gå tur', 'fjelltur', 'tur'])],
      h='„Gå tur" ist mehr als Spazierengehen — Wandern ist in Norwegen '
        'Volkssport, und „tur" deckt vom Sonntagsspaziergang bis zur '
        'Bergtour alles ab. Wer „tur" sagt, wird verstanden.'),

# ============================================================ dating_romance
 dict(kat='dating_romance', de='Hast du einen festen Freund oder eine feste Freundin?',
      no='Har du kjæreste?',
      k=[('fester_partner', ['kjæreste', 'har du kjæreste'])],
      h='„Kjæreste" ist geschlechtsneutral — ein Wort für Freund UND '
        'Freundin. Die deutsche Doppelfrage („einen festen Freund oder eine '
        'feste Freundin") erübrigt sich dadurch komplett.'),
 dict(kat='dating_romance', de='Wir sind gerade zusammen.', no='Vi er sammen.',
      k=[('zusammen_sein', ['vi er sammen', 'sammen'])]),

# ========================================================== love_relationship
 dict(kat='love_relationship', de='Wie soll ich dich nennen?', no='Hva skal jeg kalle deg?',
      k=[('wie', ['hva', 'hvordan']),
         ('nennen', ['kalle', 'kalle deg'])]),
 dict(kat='love_relationship', de='Ich nenne dich Schatz.', no='Jeg kaller deg skatten min.',
      k=[('nennen', ['jeg kaller deg', 'kaller']),
         ('schatz', ['skatten min', 'skatten'])],
      h='„Skatten min" ist wörtlich „mein Schatz" — dasselbe Bild wie im '
        'Deutschen, und genauso verbreitet.'),
 dict(kat='love_relationship', de='Kann ich dich Schatzi nennen?', no='Kan jeg kalle deg pusen?',
      k=[('koennen', ['kan jeg']),
         ('schatzi', ['pusen', 'pus'])],
      h='Verkleinerungsformen wie „Schatzi" gibt es im Norwegischen nicht — '
        'stattdessen nimmt man ein anderes Kosewort. „Pusen" (Kätzchen) ist '
        'die verbreitetste zärtliche Steigerung.'),
 dict(kat='love_relationship', de='Er nennt mich Bärchen.', no='Han kaller meg bamsen.',
      k=[('nennen', ['han kaller meg', 'kaller meg']),
         ('baerchen', ['bamsen', 'bamse'])],
      h='„Bamse" ist der Teddybär — als Kosename genau so gemeint wie '
        '„Bärchen", wird aber auch für große, kräftige Männer gesagt.'),
 dict(kat='love_relationship', de='Sie nennt mich Süße.', no='Hun kaller meg søten.',
      k=[('nennen', ['hun kaller meg', 'kaller meg']),
         ('suesse', ['søten', 'søtnos'])]),
 dict(kat='love_relationship', de='Das ist mein Kosename für dich.', no='Det er kjælenavnet mitt på deg.',
      k=[('kosename', ['kjælenavn', 'kjælenavnet'])]),
 dict(kat='love_relationship', de='Ich mag diesen Spitznamen nicht so gern.', no='Jeg liker ikke det kallenavnet så godt.',
      k=[('nicht_gern', ['liker ikke']),
         ('spitzname', ['kallenavn', 'kallenavnet'])]),
 dict(kat='love_relationship', de='Nenn mich bitte nicht so!', no='Ikke kall meg det, er du snill!',
      k=[('nennen', ['ikke kall meg', 'kall meg']),
         ('nicht_so', ['det', 'sånn'])]),

# ============================================================ moving_settling
 dict(kat='moving_settling', de='Wo finde ich einen Handwerker?', no='Hvor finner jeg en håndverker?',
      k=[('handwerker', ['håndverker', 'rørlegger', 'elektriker'])],
      h='Wie überall ruft man in der Praxis das Gewerk: „rørlegger" '
        '(Klempner), „elektriker", „snekker" (Tischler). '
        'Handwerkerstunden sind in Norwegen teuer — viele machen deshalb '
        'erstaunlich viel selbst.'),
 dict(kat='moving_settling', de='Die Heizung funktioniert nicht.', no='Varmen virker ikke.',
      k=[('heizung_kaputt', ['varmen virker ikke', 'varmen', 'virker ikke'])]),
 dict(kat='moving_settling', de='Meine Nachbarn sind sehr nett.', no='Naboene mine er veldig hyggelige.',
      k=[('nachbarn_nett', ['naboene', 'naboer', 'hyggelige'])]),
 dict(kat='moving_settling', de='Das Buch liegt auf dem Tisch.', no='Boka ligger på bordet.',
      k=[('buch_tisch', ['boka', 'bordet', 'på bordet'])]),
 dict(kat='moving_settling', de='Hier ist es sehr praktisch.', no='Her er det veldig praktisk.',
      k=[('praktisch', ['praktisk'])]),
 dict(kat='moving_settling', de='Ich muss den Strom anmelden.', no='Jeg må registrere strømmen.',
      k=[('strom_anmelden', ['registrere strømmen', 'strøm', 'strømmen'])]),
 dict(kat='moving_settling', de='Wie melde ich mich beim Einwohnermeldeamt an?', no='Hvordan registrerer jeg meg i folkeregisteret?',
      k=[('einwohnermeldeamt', ['folkeregisteret', 'folkeregister', 'skatteetaten'])],
      h='Das „folkeregister" führt die Steuerbehörde „Skatteetaten". Dort '
        'bekommst du deine Personennummer („fødselsnummer") — ohne die '
        'kriegst du weder Bankkonto noch Handyvertrag noch Arzttermin. Das '
        'ist der erste Gang nach der Ankunft.'),
 dict(kat='moving_settling', de='Ich brauche eine Bestätigung meiner Adresse.', no='Jeg trenger en bostedsattest.',
      k=[('adressbestaetigung', ['bostedsattest', 'bekreftelse på adresse', 'adresse'])]),
 dict(kat='moving_settling', de='Das kann ich erledigen.', no='Det kan jeg ordne.',
      k=[('erledigen', ['kan jeg ordne', 'ordne', 'fikse'])]),
 dict(kat='moving_settling', de='Ich bezahle mit dem Handy.', no='Jeg betaler med mobilen.',
      k=[('handy_bezahlen', ['med mobilen', 'mobilen', 'vipps'])],
      h='In Norwegen läuft fast alles über „Vipps" — die App ist so '
        'selbstverständlich, dass „vipps meg" als Verb benutzt wird, wie bei '
        'uns „googeln".'),
 dict(kat='moving_settling', de='Ich suche eine Wohnung.', no='Jeg leter etter en leilighet.',
      k=[('wohnung_suchen', ['leter etter en leilighet', 'leilighet'])]),
 dict(kat='moving_settling', de='Wie hoch ist die Miete?', no='Hvor mye er husleia?',
      k=[('miete', ['husleia', 'husleie', 'leie'])]),
 dict(kat='moving_settling', de='Ist die Kaution im Preis enthalten?', no='Er depositumet inkludert i prisen?',
      k=[('kaution', ['depositum', 'depositumet'])],
      h='Die Kaution liegt in Norwegen üblicherweise bei drei Monatsmieten '
        'und muss auf ein gesperrtes „depositumskonto" — nicht aufs Konto '
        'des Vermieters. Wer das anders angeboten bekommt, sollte '
        'misstrauisch werden.'),
 dict(kat='moving_settling', de='Wann kann ich einziehen?', no='Når kan jeg flytte inn?',
      k=[('einziehen', ['flytte inn', 'flytte'])]),
 dict(kat='moving_settling', de='Gibt es einen Aufzug im Haus?', no='Er det heis i bygget?',
      k=[('aufzug', ['heis'])]),
 dict(kat='moving_settling', de='Gibt es hier einen Waschraum?', no='Er det vaskerom her?',
      k=[('waschraum', ['vaskerom', 'vaskemaskin'])]),
 dict(kat='moving_settling', de='Ich möchte den Mietvertrag unterschreiben.', no='Jeg vil gjerne signere leiekontrakten.',
      k=[('mietvertrag', ['leiekontrakten', 'leiekontrakt', 'kontrakt']),
         ('unterschreiben', ['signere', 'skrive under'])]),
 dict(kat='moving_settling', de='Ich bin letzte Woche umgezogen.', no='Jeg flyttet forrige uke.',
      k=[('umgezogen', ['jeg flyttet', 'flyttet'])]),

# ========================================================== shopping_haggling
 dict(kat='shopping_haggling', de='Kann ich das anprobieren?', no='Kan jeg prøve den?',
      k=[('anprobieren', ['prøve den', 'prøve'])]),
 dict(kat='shopping_haggling', de='Wo ist die Umkleidekabine?', no='Hvor er prøverommet?',
      k=[('umkleidekabine', ['prøverommet', 'prøverom'])]),
 dict(kat='shopping_haggling', de='Haben Sie das auch in Größe M?', no='Har dere den i størrelse M?',
      k=[('groesse', ['størrelse'])]),
 dict(kat='shopping_haggling', de='Haben Sie das in einer anderen Farbe?', no='Har dere den i en annen farge?',
      k=[('andere_farbe', ['annen farge', 'farge'])]),
 dict(kat='shopping_haggling', de='Kann ich mit Karte bezahlen?', no='Kan jeg betale med kort?',
      k=[('karte_zahlen', ['med kort', 'kort'])]),
 dict(kat='shopping_haggling', de='Nur Bargeld, bitte.', no='Bare kontanter, takk.',
      k=[('bargeld', ['kontanter'])],
      h='Diesen Satz wirst du in Norwegen kaum hören — eher das Gegenteil: '
        'viele Läden, Busse und Cafés nehmen gar kein Bargeld mehr. Karte '
        'oder Vipps sind der Normalfall.'),
 dict(kat='shopping_haggling', de='Das ist zu teuer.', no='Det er for dyrt.',
      k=[('zu_teuer', ['for dyrt', 'dyrt'])]),
 dict(kat='shopping_haggling', de='Gibt es einen Rabatt?', no='Er det noen rabatt?',
      k=[('rabatt', ['rabatt', 'avslag'])],
      h='Handeln ist in Norwegen unüblich und wirkt im Laden befremdlich — '
        'die Frage lohnt sich nur auf Flohmärkten („loppemarked") und bei '
        'Gebrauchtem über finn.no.'),
 dict(kat='shopping_haggling', de='Haben Sie eine Tüte?', no='Har dere en pose?',
      k=[('tuete', ['pose', 'bærepose'])]),
 dict(kat='shopping_haggling', de='Das gilt nicht als teuer.', no='Det regnes ikke som dyrt.',
      k=[('nicht_teuer', ['regnes ikke som dyrt', 'ikke dyrt'])]),
 dict(kat='shopping_haggling', de='Ich möchte das zurückgeben.', no='Jeg vil gjerne returnere dette.',
      k=[('zurueckgeben', ['returnere', 'levere tilbake', 'bytte'])]),
 dict(kat='shopping_haggling', de='Ich suche ein Geschenk für meine Mutter.', no='Jeg leter etter en gave til moren min.',
      k=[('geschenk', ['gave'])]),
 dict(kat='shopping_haggling', de='Wann schließt das Geschäft?', no='Når stenger butikken?',
      k=[('schliesst', ['stenger', 'stengetid'])],
      h='Sonntags haben in Norwegen fast alle Läden zu — nur kleine '
        '„nærbutikker" und Kioske dürfen öffnen. Wer sonntags einkaufen '
        'will, plant besser am Samstag.'),
 dict(kat='shopping_haggling', de='Ich schaue mich nur um.', no='Jeg bare ser meg litt rundt.',
      k=[('nur_umschauen', ['bare ser', 'ser meg rundt', 'bare titter'])]),
 dict(kat='shopping_haggling', de='Können Sie mir helfen?', no='Kan du hjelpe meg?',
      k=[('helfen', ['hjelpe meg', 'hjelpe'])]),
 dict(kat='shopping_haggling', de='Ich habe gestern ein neues Kleid gekauft.', no='I går kjøpte jeg en ny kjole.',
      k=[('gekauft', ['kjøpte', 'jeg kjøpte']),
         ('kleid', ['kjole'])]),

# ===================================================== smalltalk_socialising
 dict(kat='smalltalk_socialising', de='Bist du verheiratet?', no='Er du gift?',
      k=[('verheiratet', ['gift'])]),
 dict(kat='smalltalk_socialising', de='Hast du Geschwister?', no='Har du søsken?',
      k=[('geschwister', ['søsken'])],
      h='„Søsken" ist wie im Deutschen ein eigenes Wort für Geschwister — '
        'anders als im Italienischen, wo die männliche Mehrzahl herhalten '
        'muss.'),
 dict(kat='smalltalk_socialising', de='Ich habe eine Schwester.', no='Jeg har en søster.',
      k=[('schwester', ['søster'])]),
 dict(kat='smalltalk_socialising', de='Noch nicht.', no='Ikke ennå.',
      k=[('noch_nicht', ['ikke ennå', 'ennå ikke'])]),
 dict(kat='smalltalk_socialising', de='Was sind deine Hobbys?', no='Hva er hobbyene dine?',
      k=[('hobbys_frage', ['hobbyene dine', 'hobby', 'hobbyer'])]),
 dict(kat='smalltalk_socialising', de='Ich lese gerne Bücher.', no='Jeg liker å lese bøker.',
      k=[('lesen', ['lese', 'bøker'])]),
 dict(kat='smalltalk_socialising', de='Mein Hobby ist Sport.', no='Hobbyen min er sport.',
      k=[('hobby_sport', ['sport', 'trening'])]),
 dict(kat='smalltalk_socialising', de='Was machst du beruflich?', no='Hva jobber du med?',
      k=[('beruf_frage', ['hva jobber du med', 'jobber du med', 'jobb'])]),
 dict(kat='smalltalk_socialising', de='Ich bin Student.', no='Jeg er student.',
      k=[('student', ['student'])]),
 dict(kat='smalltalk_socialising', de='Ich arbeite als Lehrer.', no='Jeg jobber som lærer.',
      k=[('beruf', ['lærer'])]),
 dict(kat='smalltalk_socialising', de='Wo wohnst du?', no='Hvor bor du?',
      k=[('wo_wohnst', ['hvor bor du', 'bor du'])]),
 dict(kat='smalltalk_socialising', de='Ich wohne in Berlin.', no='Jeg bor i Berlin.',
      k=[('wohne_in', ['bor i berlin', 'berlin'])]),
]

AUSGELASSEN = []
