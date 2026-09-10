# -*- coding: utf-8 -*-
"""Club + Nightlife auf Englisch - die groesste Kategorie (138 Saetze).

**SECHS SAETZE FALLEN RAUS, fuenf davon ersetzt (`neu=True`):**

  Bist du aus China?          Zielland im Satz.
  Mein Chinesisch ist nicht   Zielsprache im Satz.
  so gut.
  Lass uns WeChat             Im Club tauscht man Instagram - nicht die
  austauschen.                Nummer, das wirkt zu direkt.
  Soll ich dich scannen?      Der QR-Scan ist eine WeChat-Geste.
                              Instagram hat sie zwar auch, benutzt sie
                              aber kaum - das Gegenstueck ist "folge ich
                              dir?".
  Ich zahle mit WeChat.       Bezahlt wird kontaktlos mit Karte oder
                              Handy.

  Du hast eine sehr helle     **Ersatzlos ausgelassen.** In China ein
  Haut.                       echtes Kompliment; im englischsprachigen
                              Raum waere die Bemerkung ueber den Hautton
                              einer Fremden im besten Fall seltsam, im
                              schlechteren uebergriffig. **Simon sollte
                              das gegenlesen** - im Chinesischen war die
                              Aufnahme ausdruecklich seine Entscheidung.

**132 uebersetzt, 6 ausgelassen, 5 neu.**

**Die Pub-Kultur ist der eigentliche Unterschied** zum chinesischen
Original: bestellt und bezahlt wird an der Theke, nicht am Tisch, und
Runden werden reihum gezahlt. Wo ein Satz davon beruehrt ist, steht es
im Hinweis.

**Nicht von Muttersprachlern geprueft.** Bei Anmach- und
Sicherheitssaetzen faellt das besonders ins Gewicht.
"""

KATEGORIEN = ['club_nightlife']

SAETZE = [

# --------------------------------------------------------- club_ansprechen
 dict(de='Wie heißt du?', en="What's your name?",
      k=[('wie_heisst', ["what's your name", 'your name'])]),
 dict(de='Gefällt es dir hier auch?', en='Are you enjoying it here?',
      k=[('gefaellt', ['enjoying it', 'enjoying', 'do you like it'])]),
 dict(de='Ich sehe dir gern beim Tanzen zu.', en='I like watching you dance.',
      k=[('tanzen_zusehen', ['watching you dance', 'watching you', 'dance'])]),
 dict(de='Du bist sehr hübsch.', en="You're really pretty.",
      k=[('huebsch', ['really pretty', 'pretty', 'beautiful'])]),
 dict(de='Du siehst gut aus.', en='You look good.',
      k=[('gut_aussehen', ['you look good', 'look good', 'handsome'])]),
 dict(de='Bist du Single?', en='Are you single?',
      k=[('single', ['single'])]),
 dict(de='Ist dein Freund auch hier?', en='Is your boyfriend here too?',
      k=[('freund_hier', ['your boyfriend', 'boyfriend'])]),
 dict(de='Ist deine Freundin auch hier?', en='Is your girlfriend here too?',
      k=[('freundin_hier', ['your girlfriend', 'girlfriend'])]),
 dict(de='Wollen wir zusammen tanzen?', en='Shall we dance?',
      k=[('tanzen', ['shall we dance', 'dance', 'want to dance'])]),
 dict(de='Hier ist es zu laut. Gehen wir nach draußen?', en="It's too loud in here. Shall we go outside?",
      k=[('zu_laut', ['too loud', 'loud']),
         ('nach_draussen', ['go outside', 'outside'])]),
 dict(de='Die Musik hier ist gut, oder?', en='The music is good, isn\'t it?',
      k=[('musik_gut', ['music is good', 'good music', 'music'])]),
 dict(de='Kommst du oft hierher?', en='Do you come here often?',
      k=[('oft_hier', ['come here often', 'often'])]),
 dict(de='Bist du von hier?', en='Are you from around here?',
      k=[('von_hier', ['from around here', 'from here'])]),
 dict(de='Bist du aus England?', en='Are you English?',
      neu=True, sz='club_ansprechen',
      k=[('aus_land', ['english', 'from england', 'british'])]),
 dict(de='Mein Englisch ist nicht so gut.', en="My English isn't very good.",
      neu=True, sz='club_ansprechen',
      k=[('sprache_nicht_gut', ["my english isn't", 'not very good', 'english'])]),
 dict(de='Lass uns Instagram austauschen.', en='Shall we swap Instagram?',
      neu=True, sz='club_ansprechen',
      k=[('kontakt_tauschen', ['swap instagram', 'instagram'])],
      h='Im Club tauscht man Instagram, nicht die Telefonnummer — nach der '
        'Nummer zu fragen wirkt schnell zu direkt.'),
 dict(de='Soll ich dir folgen?', en='Shall I follow you?',
      neu=True, sz='club_ansprechen',
      k=[('folgen', ['follow you', 'follow'])]),

# ---------------------------------------------------------------- club_bar
 dict(de='Zwei Bier, bitte.', en='Two beers, please.',
      k=[('zwei_bier', ['two beers', 'two pints', 'beers'])],
      h='Bestellt und bezahlt wird an der Theke, nicht am Tisch — und der '
        'Kellner kommt nicht zu dir. Wer sitzenbleibt und wartet, wartet '
        'ewig.'),
 dict(de='Hier ist es zu laut.', en="It's too loud in here.",
      k=[('zu_laut', ['too loud', 'loud'])]),
 dict(de='Es ist laut, sag es bitte nochmal.', en="It's loud, could you say that again?",
      k=[('nochmal', ['say that again', 'again', 'repeat'])]),
 dict(de='Was möchtest du trinken?', en='What would you like to drink?',
      k=[('trinken_frage', ['what would you like to drink', 'to drink', 'drink'])]),
 dict(de='Haben Sie Wasser?', en='Do you have water?',
      k=[('wasser', ['water'])]),
 dict(de='Das ist zu teuer.', en="That's too expensive.",
      k=[('zu_teuer', ['too expensive'])]),
 dict(de='Noch eins, bitte.', en='Another one, please.',
      k=[('noch_eins', ['another one', 'another'])]),
 dict(de='Das bezahle ich.', en="I'll get this one.",
      k=[('ich_zahle', ["i'll get this", "it's on me", "i'll pay"])],
      h='Im Pub zahlt reihum einer für alle („a round"). Wer sich davor '
        'drückt, fällt auf — mitzumachen ist wichtiger als der Betrag.'),
 dict(de='Wo kann ich bezahlen?', en='Where do I pay?',
      k=[('wo_bezahlen', ['where do i pay', 'pay'])]),
 dict(de='Ich nehme das Gleiche.', en="I'll have the same.",
      k=[('gleiche', ['the same', 'same'])]),
 dict(de='Was möchten Sie?', en='What can I get you?',
      k=[('was_moechten', ['what can i get you', 'what would you like'])]),
 dict(de='Ich zahle kontaktlos.', en="I'll pay contactless.",
      neu=True, sz='club_bar',
      k=[('kontaktlos_zahlen', ['contactless', 'card', 'tap'])],
      h='Bargeld ist in britischen Clubs kaum noch nötig — kontaktlos zahlen '
        'ist der Normalfall, auch für einzelne Getränke.'),

# ------------------------------------------------------------ club_einlass
 dict(de='Was kostet der Eintritt?', en="How much is it to get in?",
      k=[('eintritt', ['to get in', 'entry', 'cover charge'])]),
 dict(de='Ich möchte ein Ticket kaufen.', en="I'd like to buy a ticket.",
      k=[('ticket', ['ticket'])]),
 dict(de='Wir sind zu zweit.', en="There are two of us.",
      k=[('zu_zweit', ['two of us', 'two'])]),
 dict(de='Das ist mein Pass.', en="This is my passport.",
      k=[('pass', ['passport', 'id'])],
      h='Am Einlass gilt „Challenge 25": wer jünger als 25 aussieht, muss '
        'sich ausweisen. Ein deutscher Personalausweis wird nicht immer '
        'akzeptiert — der Pass funktioniert immer.'),
 dict(de='Habt ihr heute offen?', en='Are you open tonight?',
      k=[('offen', ['open', 'open tonight'])]),
 dict(de='Bis wann habt ihr heute offen?', en='What time do you close tonight?',
      k=[('bis_wann', ['what time do you close', 'close', 'closing time'])],
      h='Britische Clubs schließen oft schon um zwei oder drei — die Nacht '
        'beginnt entsprechend früher als in Südeuropa.'),
 dict(de='Ich bin mit Freunden hier.', en="I'm here with friends.",
      k=[('mit_freunden', ['with friends', 'friends'])]),
 dict(de='Kann ich hier bezahlen?', en='Can I pay here?',
      k=[('hier_bezahlen', ['pay here', 'can i pay'])]),
 dict(de='Wo ist die Toilette?', en='Where are the toilets?',
      k=[('toilette', ['toilets', 'toilet', 'loo'])]),
 dict(de='Meine Freunde kommen später.', en='My friends are coming later.',
      k=[('freunde_spaeter', ['coming later', 'later', 'friends'])]),
 dict(de='Ich bin nicht von hier.', en="I'm not from around here.",
      k=[('nicht_von_hier', ['not from around here', 'not from here'])]),

# -------------------------------------------------------- club_komplimente
 dict(de='Du siehst heute toll aus.', en='You look amazing tonight.',
      k=[('toll_aussehen', ['look amazing', 'amazing', 'look great'])]),
 dict(de='Dein Outfit gefällt mir.', en='I like your outfit.',
      k=[('outfit', ['your outfit', 'outfit'])]),
 dict(de='Deine Haare sind schön.', en='You have lovely hair.',
      k=[('haare', ['lovely hair', 'nice hair', 'hair'])]),
 dict(de='Sind deine Haare neu?', en='Have you done something with your hair?',
      k=[('haare_neu', ['done something with your hair', 'your hair', 'hair'])]),
 dict(de='Du bist sehr süß.', en="You're really sweet.",
      k=[('suess', ['really sweet', 'sweet', 'cute'])],
      h='„Sweet" lobt das Wesen, „cute" das Aussehen — beides ist freundlich, '
        '„cute" aber deutlicher als Anmache lesbar.'),
 dict(de='Du bist groß.', en="You're tall.",
      k=[('gross', ['tall'])]),
 dict(de='Du bist schlank.', en="You're slim.",
      k=[('schlank', ['slim', 'slender'])],
      h='In China ein Standardkompliment. Im englischsprachigen Raum sind '
        'Bemerkungen über den Körper einer Fremden heikel — „you look great" '
        'ist die sichere Variante und sagt dasselbe.'),
 dict(de='Deine Augen sind schön.', en='You have beautiful eyes.',
      k=[('augen', ['beautiful eyes', 'eyes'])]),
 dict(de='Du hast Klasse.', en='You have real style.',
      k=[('klasse', ['real style', 'style', 'class'])],
      h='Ein Kompliment über Stil und Auftreten statt über den Körper — das '
        'sicherste, das es gibt.'),
 dict(de='Deine Freundin hat Klasse.', en='Your friend has real style.',
      k=[('freundin_klasse', ['your friend', 'style'])]),
 dict(de='Ich mag deine Stimme.', en='I like your voice.',
      k=[('stimme', ['your voice', 'voice'])]),
 dict(de='Deine Stimme ist sehr schön.', en='You have a lovely voice.',
      k=[('stimme_schoen', ['lovely voice', 'voice'])]),
 dict(de='Du tanzt wirklich gut.', en="You're a really good dancer.",
      k=[('tanzt_gut', ['good dancer', 'you dance well', 'dancer'])]),
 dict(de='Ach wo! (bescheidene Antwort auf ein Lob)', en='Oh, stop it!',
      k=[('bescheiden', ['stop it', 'oh stop', 'get away'])],
      h='Komplimente werden im englischsprachigen Raum meistens ANGENOMMEN — '
        '„thank you" ist die normale Antwort. Die spielerische Abwehr gibt '
        'es, ist aber keine Pflicht wie im Chinesischen.'),
 dict(de='Nein, nein. (auf ein Lob)', en='No, no.',
      k=[('abwehr', ['no no', 'not at all'])]),
 dict(de='Danke, du aber auch.', en='Thanks, you too.',
      k=[('danke_auch', ['thanks you too', 'you too'])]),
 dict(de='Du hast ein süßes Lächeln.', en='You have a lovely smile.',
      k=[('laecheln', ['lovely smile', 'nice smile', 'smile'])]),
 dict(de='Deine Frisur ist sehr schön.', en='That haircut really suits you.',
      k=[('frisur', ['haircut', 'suits you', 'hairstyle'])]),

# ---------------------------------------------------------------- club_ktv
 dict(de='Wollen wir Karaoke singen?', en='Shall we do karaoke?',
      k=[('karaoke', ['karaoke'])],
      h='Karaoke läuft in britischen Pubs offen vor allen, nicht im '
        'Privatraum — meist an einem festen Abend der Woche.'),
 dict(de='Ich kann nicht singen.', en="I can't sing.",
      k=[("nicht_singen", ["can't sing", 'cannot sing'])]),
 dict(de='Sing du zuerst.', en='You go first.',
      k=[('du_zuerst', ['you go first', 'you first'])]),
 dict(de='Welches Lied singst du?', en='Which song are you doing?',
      k=[('welches_lied', ['which song', 'what song', 'song'])]),
 dict(de='Dieses Lied kenne ich!', en='I know this song!',
      k=[('kenne_lied', ['i know this song', 'know this song'])]),
 dict(de='Ein Zimmer für vier Personen.', en='A room for four people.',
      k=[('zimmer_vier', ['room for four', 'for four', 'four'])],
      h='Private Karaoke-Räume gibt es in Großbritannien nur vereinzelt, '
        'meist in asiatisch geprägten Vierteln der großen Städte.'),
 dict(de='Wie viel kostet das Zimmer?', en='How much is the room?',
      k=[('zimmer_preis', ['how much is the room', 'room'])]),
 dict(de='Wir bleiben zwei Stunden.', en="We'll stay two hours.",
      k=[('zwei_stunden', ['two hours'])]),
 dict(de='Du singst sehr gut!', en="You're a great singer!",
      k=[('singst_gut', ['great singer', 'you sing well', 'singer'])]),
 dict(de='Wir singen zusammen.', en="Let's sing together.",
      k=[('zusammen_singen', ['sing together', 'together'])]),
 dict(de='Sing noch eins!', en='Do another one!',
      k=[('noch_eins', ['another one', 'one more'])]),

# ------------------------------------------------------- club_nachtlogistik
 dict(de='Können wir zu dir?', en='Can we go to yours?',
      k=[('zu_dir', ['to yours', 'your place'])],
      h='„Yours" allein heißt „bei dir zu Hause" — „go to yours" ist die '
        'gängige Kurzform.'),
 dict(de='In meinem Hotel geht das nicht.', en="That's not allowed at my hotel.",
      k=[('hotel_nicht', ['not allowed', 'at my hotel', 'hotel'])]),
 dict(de='Nehmen wir ein Zimmer.', en="Let's get a room.",
      k=[('zimmer_nehmen', ['get a room', 'room'])]),
 dict(de='Das Zimmer bezahle ich.', en="I'll pay for the room.",
      k=[('zimmer_zahlen', ["i'll pay for the room", 'pay for the room'])]),
 dict(de='Das Hotel will meinen Pass sehen.', en='The hotel wants to see my passport.',
      k=[('pass_hotel', ['see my passport', 'passport'])]),
 dict(de='Ich rufe ein Taxi.', en="I'll get a taxi.",
      k=[('taxi', ['taxi', 'cab', 'uber'])],
      h='Nachts nimmt man Uber oder ein „black cab" — in ein nicht '
        'gekennzeichnetes Auto zu steigen gilt als unsicher und ist in '
        'London auch illegal.'),
 dict(de='Zuerst zu dir, dann zu mir.', en='First to yours, then to mine.',
      k=[('zuerst_dann', ['first to yours', 'then to mine'])]),
 dict(de='Wo wohnst du?', en='Where do you live?',
      k=[('wo_wohnst', ['where do you live', 'live'])]),
 dict(de='Ist das weit?', en='Is that far?',
      k=[('weit', ['far'])]),
 dict(de='Mein Hotel ist nicht weit.', en="My hotel isn't far.",
      k=[('hotel_nah', ["isn't far", 'not far', 'hotel'])]),
 dict(de='Ich fahre nach Hause.', en="I'm going home.",
      k=[('nach_hause', ['going home', 'home'])]),

# ------------------------------------------------------- club_naeherkommen
 dict(de='Ich finde dich sehr nett.', en='I think you\'re really lovely.',
      k=[('nett_finden', ['really lovely', 'lovely', 'nice'])]),
 dict(de='Ich mag dich.', en='I like you.',
      k=[('mag_dich', ['i like you', 'like you'])]),
 dict(de='Ist das okay für dich?', en='Is that okay with you?',
      k=[('okay', ['okay with you', 'okay', 'alright'])]),
 dict(de='Gehen wir woanders hin?', en='Shall we go somewhere else?',
      k=[('woanders', ['somewhere else', 'elsewhere'])]),
 dict(de='Ich kenne einen guten Ort.', en='I know a good place.',
      k=[('guter_ort', ['a good place', 'good place'])]),
 dict(de='Zu dir oder zu mir?', en='Your place or mine?',
      k=[('zu_dir_zu_mir', ['your place or mine', 'your place', 'mine'])]),
 dict(de='Bier oder Wasser?', en='Beer or water?',
      k=[('bier_wasser', ['beer', 'water'])]),
 dict(de='Ich reise morgen weiter.', en="I'm moving on tomorrow.",
      k=[('weiterreisen', ['moving on tomorrow', 'moving on', 'leaving tomorrow'])]),
 dict(de='Gehen wir kurz nach draußen.', en="Let's step outside for a bit.",
      k=[('nach_draussen', ['step outside', 'outside'])]),
 dict(de='Du gefällst mir sehr.', en='I really fancy you.',
      k=[('gefaellst_mir', ['fancy you', 'really like you'])],
      h='„To fancy someone" ist das britische Wort dafür, jemanden attraktiv '
        'zu finden — direkter als „I like you", aber nicht plump.'),
 dict(de='Du bist sehr cool.', en="You're really cool.",
      k=[('cool', ['really cool', 'cool'])]),
 dict(de='Ich suche gerade nichts Festes — ich reise bald weiter.',
      en="I'm not looking for anything serious, I'm moving on soon.",
      k=[('nichts_festes', ['anything serious', 'not looking for']),
         ('weiterreisen', ['moving on soon', 'moving on'])]),
 dict(de='Darf ich mich hierhin setzen?', en='Can I sit here?',
      k=[('setzen', ['can i sit here', 'sit here'])]),
 dict(de='Deine Hände sind ganz kalt.', en='Your hands are freezing.',
      k=[('haende_kalt', ['hands are freezing', 'cold hands', 'hands'])]),
 dict(de='Ich bringe dich nach Hause.', en="I'll walk you home.",
      k=[('nach_hause_bringen', ['walk you home', 'take you home'])],
      h='„Walk you home" ist die übliche Formel. Entscheidend bleibt die '
        'FRAGE (nächster Satz) statt der Ansage.'),
 dict(de='Soll ich dich nach Hause bringen?', en='Shall I walk you home?',
      k=[('nach_hause_frage', ['shall i walk you home', 'walk you home'])]),
 dict(de='Wir lassen es langsam angehen.', en="Let's take it slow.",
      k=[('langsam', ['take it slow', 'slow'])]),
 dict(de='Ich finde dich sehr attraktiv.', en='I find you very attractive.',
      k=[('attraktiv', ['very attractive', 'attractive'])]),
 dict(de='Mit dir zu reden macht Spaß.', en="You're fun to talk to.",
      k=[('reden_spass', ['fun to talk to', 'talk to you'])]),

# -------------------------------------------------------- club_sicherheit
 dict(de='Ich gehe jetzt.', en="I'm going now.",
      k=[('gehe_jetzt', ["i'm going now", 'going now'])]),
 dict(de='Mir geht es nicht gut.', en="I don't feel well.",
      k=[('nicht_gut', ["don't feel well", 'not well'])]),
 dict(de='Ich möchte nach Hause.', en='I want to go home.',
      k=[('nach_hause', ['go home', 'home'])]),
 dict(de='Kannst du mir helfen?', en='Can you help me?',
      k=[('helfen', ['help me', 'help'])]),
 dict(de='Mein Freund wartet draußen auf mich.', en='My boyfriend is waiting outside.',
      k=[('freund_wartet', ['my boyfriend', 'waiting outside', 'boyfriend'])]),
 dict(de='Meine Freundin wartet draußen auf mich.', en='My girlfriend is waiting outside.',
      k=[('freundin_wartet', ['my girlfriend', 'waiting outside', 'girlfriend'])]),
 dict(de='Lass mich in Ruhe.', en='Leave me alone.',
      k=[('in_ruhe', ['leave me alone', 'alone'])]),
 dict(de='Ich habe kein Interesse. Geh bitte weg.', en="I'm not interested. Please go away.",
      k=[('kein_interesse', ['not interested', 'no interest']),
         ('weggehen', ['go away', 'leave'])]),
 dict(de='Die Person dort lässt mich nicht in Ruhe.', en="That person won't leave me alone.",
      k=[('person_stoert', ["won't leave me alone", 'that person', 'bothering me'])],
      h='In britischen Bars gibt es die „Ask for Angela"-Initiative: wer an '
        'der Theke nach „Angela" fragt, signalisiert dem Personal, dass er '
        'sich unwohl fühlt und Hilfe braucht. Das Personal ist darauf '
        'geschult.'),
 dict(de='Bitte tu so, als würden wir uns kennen.', en='Please pretend you know me.',
      k=[('so_tun', ['pretend']),
         ('kennen', ['you know me', 'know me'])]),
 dict(de='Bitte pass kurz auf mein Glas auf.', en='Could you watch my drink?',
      k=[('glas_aufpassen', ['watch my drink', 'my drink', 'drink'])]),
 dict(de='Bitte rufen Sie die Polizei.', en='Please call the police.',
      k=[('polizei', ['police'])]),
 dict(de='Entschuldigung, ich wusste nicht, dass ihr zusammen seid.',
      en="Sorry, I didn't know you two were together.",
      k=[('nicht_gewusst', ["didn't know", 'sorry']),
         ('zusammen', ['together', 'were together'])]),

# ------------------------------------------------------- club_trinkkultur
 dict(de='Prost!', en='Cheers!',
      k=[('prost', ['cheers'])],
      h='„Cheers" heißt in Großbritannien auch danke und tschüss — eines der '
        'meistgebrauchten Wörter überhaupt.'),
 dict(de='Immer mit der Ruhe - trink so viel du magst.', en='Take it easy, drink as much as you like.',
      k=[('ruhe', ['take it easy', 'easy']),
         ('so_viel', ['as much as you like', 'as much as you want'])]),
 dict(de='Ich trinke langsam.', en="I'm drinking slowly.",
      k=[('langsam_trinken', ['drinking slowly', 'slowly'])]),
 dict(de='Ich kann nicht mehr trinken.', en="I can't drink any more.",
      k=[('nicht_mehr', ["can't drink any more", 'no more'])]),
 dict(de='Ich muss morgen arbeiten.', en="I've got work tomorrow.",
      k=[('morgen_arbeiten', ['work tomorrow', 'got work'])]),
 dict(de='Ich trinke nur ein bisschen.', en="I'm only having a little.",
      k=[('nur_bisschen', ['only having a little', 'just a little'])]),
 dict(de='Was trinkst du?', en='What are you drinking?',
      k=[('was_trinkst', ['what are you drinking', 'drinking'])]),
 dict(de='Ich möchte noch ein Bier.', en="I'd like another beer.",
      k=[('noch_bier', ['another beer', 'another pint', 'beer'])]),
 dict(de='Trinken wir zusammen!', en="Let's have a drink together!",
      k=[('zusammen_trinken', ['drink together', 'together'])]),
 dict(de='Ich trinke keinen Alkohol.', en="I don't drink alcohol.",
      k=[('kein_alkohol', ["don't drink alcohol", "don't drink"])],
      h='Das wird akzeptiert, aber im Pub oft hinterfragt — „I\'m driving" '
        'oder „I\'m on antibiotics" beendet die Nachfragen zuverlässig.'),
 dict(de='Was kostet das?', en='How much is that?',
      k=[('kosten', ['how much'])]),
 dict(de='Ich lade dich ein.', en="This one's on me.",
      k=[('einladen', ["this one's on me", "it's on me", "i'll get it"])]),

# ---------------------------------------------------------- club_verloren
 dict(de='Ich finde meine Freunde nicht.', en="I can't find my friends.",
      k=[('freunde_weg', ["can't find my friends", 'find my friends', 'friends'])]),
 dict(de='Hast du meinen Freund gesehen?', en='Have you seen my friend?',
      k=[('gesehen', ['have you seen', 'seen my friend'])]),
 dict(de='Wo bist du?', en='Where are you?',
      k=[('wo_bist', ['where are you'])]),
 dict(de='Ich warte hier auf dich.', en="I'll wait for you here.",
      k=[('warte_hier', ['wait for you here', 'wait here'])]),
 dict(de='Mein Handy hat keinen Strom mehr.', en="My phone's dead.",
      k=[('handy_leer', ["phone's dead", 'phone is dead', 'out of battery'])],
      h='„My phone is dead" ist die feste Wendung für einen leeren Akku — '
        'nicht, dass es kaputt ist.'),
 dict(de='Wo kann ich mein Handy laden?', en='Where can I charge my phone?',
      k=[('handy_laden', ['charge my phone', 'charge'])]),
 dict(de='Ich muss mein Handy laden.', en='I need to charge my phone.',
      k=[('handy_laden', ['need to charge', 'charge my phone'])]),
 dict(de='Kann ich dein Handy benutzen?', en='Can I borrow your phone?',
      k=[('handy_benutzen', ['borrow your phone', 'your phone'])]),
 dict(de='Ich rufe dich an.', en="I'll call you.",
      k=[('anrufen', ["i'll call you", 'call you'])]),
 dict(de='Wir treffen uns draußen.', en="Let's meet outside.",
      k=[('treffen_draussen', ['meet outside', 'outside'])]),
 dict(de='Bis morgen!', en='See you tomorrow!',
      k=[('bis_morgen', ['see you tomorrow', 'tomorrow'])]),
 dict(de='Ich nehme ein Taxi nach Hause.', en="I'll get a taxi home.",
      k=[('taxi_heim', ['taxi home', 'taxi', 'cab home'])]),
 dict(de='Entschuldigung, ich habe meine Freunde verloren und mein Handy ist leer. Können Sie mir helfen?',
      en="Sorry, I've lost my friends and my phone is dead. Could you help me?",
      k=[('freunde_verloren', ['lost my friends', 'lost my mates']),
         ('handy_leer', ['phone is dead', 'dead']),
         ('helfen', ['could you help me', 'help me'])]),
]

AUSGELASSEN = [
    # Zielland bzw. Zielsprache steht im Satz - ersetzt (neu=True oben).
    'Bist du aus China?',
    'Mein Chinesisch ist nicht so gut.',
    # WeChat gibt es hier nicht - ersetzt durch Instagram bzw. kontaktlos.
    'Lass uns WeChat austauschen.',
    'Ich zahle mit WeChat.',
    'Soll ich dich scannen?',
    # ERSATZLOS ausgelassen: helle Haut ist in China ein Kompliment, im
    # englischsprachigen Raum waere die Bemerkung ueber den Hautton einer
    # Fremden seltsam bis uebergriffig. Simon sollte das gegenlesen.
    'Du hast eine sehr helle Haut.',
]
