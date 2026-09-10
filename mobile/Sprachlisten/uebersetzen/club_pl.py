# -*- coding: utf-8 -*-
"""Club + Nightlife auf Polnisch - die groesste Kategorie (138 Saetze).

**SECHS SAETZE FALLEN RAUS, fuenf davon ersetzt (`neu=True`):**

  Bist du aus China?          Zielland im Satz.
  Mein Chinesisch ist nicht   Zielsprache im Satz.
  so gut.
  Lass uns WeChat             In Polen laeuft alles ueber Messenger
  austauschen.                (Facebook) und Instagram - WhatsApp ist
                              schwaecher als in Deutschland.
  Soll ich dich scannen?      QR-Scan ist keine gaengige Geste - das
                              Gegenstueck ist "folge ich dir?".
  Ich zahle mit WeChat.       Bezahlt wird mit BLIK oder Karte.

  Du hast eine sehr helle     **Ersatzlos ausgelassen.** In China ein
  Haut.                       echtes Kompliment; in Polen keins - der
                              Hautton einer Fremden ist kein Thema.
                              **Simon sollte das gegenlesen.**

**132 uebersetzt, 6 ausgelassen, 5 neu.**

**Vergangenheitsformen tragen das Geschlecht des Sprechers** - wo ein
Satz in der Vergangenheit steht, nennt der Hinweis beide Formen.

**Nicht von Muttersprachlern geprueft.** Bei Anmach- und
Sicherheitssaetzen faellt das besonders ins Gewicht.
"""

KATEGORIEN = ['club_nightlife']

SAETZE = [

# --------------------------------------------------------- club_ansprechen
 dict(de='Wie heißt du?', pl='Jak masz na imię?',
      k=[('wie_heisst', ['jak masz na imię', 'na imię'])]),
 dict(de='Gefällt es dir hier auch?', pl='Podoba ci się tutaj?',
      k=[('gefaellt', ['podoba ci się', 'podoba się'])]),
 dict(de='Ich sehe dir gern beim Tanzen zu.', pl='Lubię patrzeć, jak tańczysz.',
      k=[('tanzen_zusehen', ['patrzeć jak tańczysz', 'jak tańczysz', 'tańczysz'])]),
 dict(de='Du bist sehr hübsch.', pl='Jesteś bardzo ładna.',
      k=[('huebsch', ['bardzo ładna', 'ładna', 'piękna'])]),
 dict(de='Du siehst gut aus.', pl='Dobrze wyglądasz.',
      k=[('gut_aussehen', ['dobrze wyglądasz', 'wyglądasz'])]),
 dict(de='Bist du Single?', pl='Jesteś singlem?',
      k=[('single', ['singlem', 'singielką', 'wolny'])]),
 dict(de='Ist dein Freund auch hier?', pl='Twój chłopak też tu jest?',
      k=[('freund_hier', ['twój chłopak', 'chłopak'])]),
 dict(de='Ist deine Freundin auch hier?', pl='Twoja dziewczyna też tu jest?',
      k=[('freundin_hier', ['twoja dziewczyna', 'dziewczyna'])]),
 dict(de='Wollen wir zusammen tanzen?', pl='Zatańczymy?',
      k=[('tanzen', ['zatańczymy', 'tańczyć'])]),
 dict(de='Hier ist es zu laut. Gehen wir nach draußen?', pl='Tu jest za głośno. Wyjdziemy na zewnątrz?',
      k=[('zu_laut', ['za głośno', 'głośno']),
         ('nach_draussen', ['na zewnątrz', 'wyjdziemy'])]),
 dict(de='Die Musik hier ist gut, oder?', pl='Fajna muzyka, prawda?',
      k=[('musik_gut', ['fajna muzyka', 'muzyka'])]),
 dict(de='Kommst du oft hierher?', pl='Często tu przychodzisz?',
      k=[('oft_hier', ['często tu przychodzisz', 'często'])]),
 dict(de='Bist du von hier?', pl='Jesteś stąd?',
      k=[('von_hier', ['jesteś stąd', 'stąd'])]),
 dict(de='Bist du aus Polen?', pl='Jesteś z Polski?',
      neu=True, sz='club_ansprechen',
      k=[('aus_land', ['z polski', 'polska', 'polką'])]),
 dict(de='Mein Polnisch ist nicht so gut.', pl='Mój polski nie jest zbyt dobry.',
      neu=True, sz='club_ansprechen',
      k=[('sprache_nicht_gut', ['mój polski', 'nie jest dobry', 'polski'])]),
 dict(de='Lass uns Instagram austauschen.', pl='Wymienimy się Instagramem?',
      neu=True, sz='club_ansprechen',
      k=[('kontakt_tauschen', ['instagramem', 'instagram', 'wymienimy się'])],
      h='Instagram und Messenger sind in Polen die üblichen Kanäle — '
        'WhatsApp ist dort deutlich schwächer als in Deutschland.'),
 dict(de='Soll ich dir folgen?', pl='Mam cię zaobserwować?',
      neu=True, sz='club_ansprechen',
      k=[('folgen', ['zaobserwować', 'obserwować'])]),

# ---------------------------------------------------------------- club_bar
 dict(de='Zwei Bier, bitte.', pl='Poproszę dwa piwa.',
      k=[('zwei_bier', ['dwa piwa', 'piwa', 'piwo'])]),
 dict(de='Hier ist es zu laut.', pl='Tu jest za głośno.',
      k=[('zu_laut', ['za głośno', 'głośno'])]),
 dict(de='Es ist laut, sag es bitte nochmal.', pl='Głośno, powtórz proszę.',
      k=[('nochmal', ['powtórz', 'jeszcze raz'])]),
 dict(de='Was möchtest du trinken?', pl='Co chcesz do picia?',
      k=[('trinken_frage', ['co chcesz do picia', 'do picia'])]),
 dict(de='Haben Sie Wasser?', pl='Czy jest woda?',
      k=[('wasser', ['woda', 'wodę'])]),
 dict(de='Das ist zu teuer.', pl='To za drogo.',
      k=[('zu_teuer', ['za drogo', 'drogo'])]),
 dict(de='Noch eins, bitte.', pl='Jeszcze jedno, proszę.',
      k=[('noch_eins', ['jeszcze jedno', 'jeszcze'])]),
 dict(de='Das bezahle ich.', pl='Ja stawiam.',
      k=[('ich_zahle', ['ja stawiam', 'stawiam', 'ja płacę'])]),
 dict(de='Wo kann ich bezahlen?', pl='Gdzie mogę zapłacić?',
      k=[('wo_bezahlen', ['gdzie zapłacić', 'zapłacić'])]),
 dict(de='Ich nehme das Gleiche.', pl='Poproszę to samo.',
      k=[('gleiche', ['to samo', 'samo'])]),
 dict(de='Was möchten Sie?', pl='Co podać?',
      k=[('was_moechten', ['co podać', 'co dla pana'])]),
 dict(de='Ich zahle mit BLIK.', pl='Zapłacę BLIKiem.',
      neu=True, sz='club_bar',
      k=[('blik_zahlen', ['blikiem', 'blik', 'kartą'])],
      h='„BLIK" ist das polnische Handy-Zahlsystem und praktisch überall '
        'verfügbar — man tippt einen sechsstelligen Code aus der Bank-App '
        'ein. Vergleichbar mit Vipps in Norwegen.'),

# ------------------------------------------------------------ club_einlass
 dict(de='Was kostet der Eintritt?', pl='Ile kosztuje wejście?',
      k=[('eintritt', ['wejście', 'wstęp'])]),
 dict(de='Ich möchte ein Ticket kaufen.', pl='Chcę kupić bilet.',
      k=[('ticket', ['bilet'])]),
 dict(de='Wir sind zu zweit.', pl='Jest nas dwoje.',
      k=[('zu_zweit', ['jest nas dwoje', 'dwoje', 'we dwoje'])]),
 dict(de='Das ist mein Pass.', pl='To mój paszport.',
      k=[('pass', ['paszport', 'dowód'])],
      h='Der Personalausweis heißt „dowód osobisty" und wird am Einlass '
        'genauso akzeptiert wie der Pass.'),
 dict(de='Habt ihr heute offen?', pl='Czy jest dzisiaj otwarte?',
      k=[('offen', ['otwarte', 'czynne'])]),
 dict(de='Bis wann habt ihr heute offen?', pl='Do której jest dzisiaj otwarte?',
      k=[('bis_wann', ['do której', 'do kiedy'])]),
 dict(de='Ich bin mit Freunden hier.', pl='Jestem tu ze znajomymi.',
      k=[('mit_freunden', ['ze znajomymi', 'znajomymi', 'z przyjaciółmi'])]),
 dict(de='Kann ich hier bezahlen?', pl='Czy mogę tu zapłacić?',
      k=[('hier_bezahlen', ['tu zapłacić', 'zapłacić'])]),
 dict(de='Wo ist die Toilette?', pl='Gdzie jest toaleta?',
      k=[('toilette', ['toaleta', 'łazienka'])]),
 dict(de='Meine Freunde kommen später.', pl='Moi znajomi przyjdą później.',
      k=[('freunde_spaeter', ['przyjdą później', 'później', 'znajomi'])]),
 dict(de='Ich bin nicht von hier.', pl='Nie jestem stąd.',
      k=[('nicht_von_hier', ['nie jestem stąd', 'nie stąd'])]),

# -------------------------------------------------------- club_komplimente
 dict(de='Du siehst heute toll aus.', pl='Świetnie dziś wyglądasz.',
      k=[('toll_aussehen', ['świetnie wyglądasz', 'wyglądasz'])]),
 dict(de='Dein Outfit gefällt mir.', pl='Podoba mi się twój strój.',
      k=[('outfit', ['twój strój', 'strój'])]),
 dict(de='Deine Haare sind schön.', pl='Masz ładne włosy.',
      k=[('haare', ['ładne włosy', 'włosy'])]),
 dict(de='Sind deine Haare neu?', pl='Zmieniłaś fryzurę?',
      k=[('haare_neu', ['zmieniłaś fryzurę', 'fryzurę', 'włosy'])]),
 dict(de='Du bist sehr süß.', pl='Jesteś bardzo słodka.',
      k=[('suess', ['bardzo słodka', 'słodka', 'słodki'])]),
 dict(de='Du bist groß.', pl='Jesteś wysoki.',
      k=[('gross', ['wysoki', 'wysoka'])]),
 dict(de='Du bist schlank.', pl='Jesteś szczupła.',
      k=[('schlank', ['szczupła', 'szczupły'])],
      h='In China ein Standardkompliment. In Polen wird es zwar positiv '
        'verstanden, Bemerkungen über den Körper einer Fremden gelten aber '
        'als zu direkt — „świetnie wyglądasz" ist die sichere Variante.'),
 dict(de='Deine Augen sind schön.', pl='Masz piękne oczy.',
      k=[('augen', ['piękne oczy', 'oczy'])]),
 dict(de='Du hast Klasse.', pl='Masz styl.',
      k=[('klasse', ['masz styl', 'styl', 'klasę'])]),
 dict(de='Deine Freundin hat Klasse.', pl='Twoja koleżanka ma styl.',
      k=[('freundin_klasse', ['twoja koleżanka', 'koleżanka', 'styl'])]),
 dict(de='Ich mag deine Stimme.', pl='Podoba mi się twój głos.',
      k=[('stimme', ['twój głos', 'głos'])]),
 dict(de='Deine Stimme ist sehr schön.', pl='Masz bardzo ładny głos.',
      k=[('stimme_schoen', ['ładny głos', 'głos'])]),
 dict(de='Du tanzt wirklich gut.', pl='Naprawdę dobrze tańczysz.',
      k=[('tanzt_gut', ['dobrze tańczysz', 'tańczysz'])]),
 dict(de='Ach wo! (bescheidene Antwort auf ein Lob)', pl='Daj spokój!',
      k=[('bescheiden', ['daj spokój', 'przestań', 'ale gdzie tam'])],
      h='Polen wehren Komplimente oft erst einmal ab, statt sie glatt '
        'anzunehmen — „daj spokój" ist die freundliche Standardabwehr.'),
 dict(de='Nein, nein. (auf ein Lob)', pl='Nie, nie.',
      k=[('abwehr', ['nie nie', 'ale skąd'])]),
 dict(de='Danke, du aber auch.', pl='Dzięki, ty też.',
      k=[('danke_auch', ['dzięki ty też', 'ty też'])]),
 dict(de='Du hast ein süßes Lächeln.', pl='Masz ładny uśmiech.',
      k=[('laecheln', ['ładny uśmiech', 'uśmiech'])]),
 dict(de='Deine Frisur ist sehr schön.', pl='Ta fryzura bardzo ci pasuje.',
      k=[('frisur', ['fryzura', 'ci pasuje'])]),

# ---------------------------------------------------------------- club_ktv
 dict(de='Wollen wir Karaoke singen?', pl='Pójdziemy na karaoke?',
      k=[('karaoke', ['karaoke'])]),
 dict(de='Ich kann nicht singen.', pl='Nie umiem śpiewać.',
      k=[('nicht_singen', ['nie umiem śpiewać', 'śpiewać'])]),
 dict(de='Sing du zuerst.', pl='Ty zaśpiewaj pierwszy.',
      k=[('du_zuerst', ['ty pierwszy', 'pierwszy', 'zaśpiewaj'])]),
 dict(de='Welches Lied singst du?', pl='Jaką piosenkę zaśpiewasz?',
      k=[('welches_lied', ['jaką piosenkę', 'piosenkę'])]),
 dict(de='Dieses Lied kenne ich!', pl='Znam tę piosenkę!',
      k=[('kenne_lied', ['znam tę piosenkę', 'znam', 'piosenkę'])]),
 dict(de='Ein Zimmer für vier Personen.', pl='Pokój dla czterech osób.',
      k=[('zimmer_vier', ['dla czterech osób', 'czterech', 'pokój'])],
      h='Private Karaoke-Räume gibt es in Polen inzwischen in größeren '
        'Städten — verbreiteter ist aber Karaoke offen in der Bar.'),
 dict(de='Wie viel kostet das Zimmer?', pl='Ile kosztuje pokój?',
      k=[('zimmer_preis', ['ile kosztuje pokój', 'pokój'])]),
 dict(de='Wir bleiben zwei Stunden.', pl='Zostaniemy dwie godziny.',
      k=[('zwei_stunden', ['dwie godziny'])]),
 dict(de='Du singst sehr gut!', pl='Świetnie śpiewasz!',
      k=[('singst_gut', ['świetnie śpiewasz', 'śpiewasz'])]),
 dict(de='Wir singen zusammen.', pl='Zaśpiewamy razem.',
      k=[('zusammen_singen', ['zaśpiewamy razem', 'razem'])]),
 dict(de='Sing noch eins!', pl='Zaśpiewaj jeszcze jedną!',
      k=[('noch_eins', ['jeszcze jedną', 'jeszcze'])]),

# ------------------------------------------------------- club_nachtlogistik
 dict(de='Können wir zu dir?', pl='Możemy iść do ciebie?',
      k=[('zu_dir', ['do ciebie'])]),
 dict(de='In meinem Hotel geht das nicht.', pl='W moim hotelu tak nie można.',
      k=[('hotel_nicht', ['tak nie można', 'w moim hotelu', 'hotelu'])]),
 dict(de='Nehmen wir ein Zimmer.', pl='Weźmiemy pokój.',
      k=[('zimmer_nehmen', ['weźmiemy pokój', 'pokój'])]),
 dict(de='Das Zimmer bezahle ich.', pl='Za pokój ja zapłacę.',
      k=[('zimmer_zahlen', ['ja zapłacę', 'za pokój'])]),
 dict(de='Das Hotel will meinen Pass sehen.', pl='Hotel chce zobaczyć mój paszport.',
      k=[('pass_hotel', ['zobaczyć paszport', 'paszport'])]),
 dict(de='Ich rufe ein Taxi.', pl='Zamówię taksówkę.',
      k=[('taxi', ['taksówkę', 'taksówka', 'ubera'])],
      h='Bolt und Uber sind in polnischen Städten deutlich billiger als '
        'Straßentaxis und die übliche Wahl.'),
 dict(de='Zuerst zu dir, dann zu mir.', pl='Najpierw do ciebie, potem do mnie.',
      k=[('zuerst_dann', ['najpierw do ciebie', 'potem do mnie'])]),
 dict(de='Wo wohnst du?', pl='Gdzie mieszkasz?',
      k=[('wo_wohnst', ['gdzie mieszkasz', 'mieszkasz'])]),
 dict(de='Ist das weit?', pl='Czy to daleko?',
      k=[('weit', ['daleko'])]),
 dict(de='Mein Hotel ist nicht weit.', pl='Mój hotel jest niedaleko.',
      k=[('hotel_nah', ['niedaleko', 'hotel'])]),
 dict(de='Ich fahre nach Hause.', pl='Jadę do domu.',
      k=[('nach_hause', ['do domu', 'jadę do domu'])]),

# ------------------------------------------------------- club_naeherkommen
 dict(de='Ich finde dich sehr nett.', pl='Jesteś bardzo sympatyczna.',
      k=[('nett_finden', ['sympatyczna', 'sympatyczny', 'miła'])]),
 dict(de='Ich mag dich.', pl='Lubię cię.',
      k=[('mag_dich', ['lubię cię'])]),
 dict(de='Ist das okay für dich?', pl='Czy tak ci pasuje?',
      k=[('okay', ['tak ci pasuje', 'pasuje', 'w porządku'])]),
 dict(de='Gehen wir woanders hin?', pl='Pójdziemy gdzie indziej?',
      k=[('woanders', ['gdzie indziej', 'indziej'])]),
 dict(de='Ich kenne einen guten Ort.', pl='Znam fajne miejsce.',
      k=[('guter_ort', ['fajne miejsce', 'miejsce'])]),
 dict(de='Zu dir oder zu mir?', pl='Do ciebie czy do mnie?',
      k=[('zu_dir_zu_mir', ['do ciebie czy do mnie', 'do ciebie', 'do mnie'])]),
 dict(de='Bier oder Wasser?', pl='Piwo czy woda?',
      k=[('bier_wasser', ['piwo', 'woda'])]),
 dict(de='Ich reise morgen weiter.', pl='Jutro jadę dalej.',
      k=[('weiterreisen', ['jutro jadę dalej', 'jadę dalej'])]),
 dict(de='Gehen wir kurz nach draußen.', pl='Wyjdźmy na chwilę na zewnątrz.',
      k=[('nach_draussen', ['na zewnątrz', 'wyjdźmy'])]),
 dict(de='Du gefällst mir sehr.', pl='Bardzo mi się podobasz.',
      k=[('gefaellst_mir', ['bardzo mi się podobasz', 'podobasz mi się'])]),
 dict(de='Du bist sehr cool.', pl='Jesteś bardzo fajny.',
      k=[('cool', ['fajny', 'fajna', 'spoko'])]),
 dict(de='Ich suche gerade nichts Festes — ich reise bald weiter.',
      pl='Nie szukam nic poważnego, niedługo jadę dalej.',
      k=[('nichts_festes', ['nic poważnego', 'nie szukam']),
         ('weiterreisen', ['niedługo jadę dalej', 'jadę dalej'])]),
 dict(de='Darf ich mich hierhin setzen?', pl='Czy mogę tu usiąść?',
      k=[('setzen', ['mogę usiąść', 'usiąść'])]),
 dict(de='Deine Hände sind ganz kalt.', pl='Masz zimne ręce.',
      k=[('haende_kalt', ['zimne ręce', 'ręce'])]),
 dict(de='Ich bringe dich nach Hause.', pl='Odprowadzę cię do domu.',
      k=[('nach_hause_bringen', ['odprowadzę cię', 'odprowadzę', 'do domu'])],
      h='„Odprowadzić" heißt begleiten — jemanden nach Hause zu bringen gilt '
        'als selbstverständliche Höflichkeit. Entscheidend bleibt trotzdem '
        'die FRAGE (nächster Satz).'),
 dict(de='Soll ich dich nach Hause bringen?', pl='Odprowadzić cię do domu?',
      k=[('nach_hause_frage', ['odprowadzić cię do domu', 'odprowadzić'])]),
 dict(de='Wir lassen es langsam angehen.', pl='Nie spieszmy się.',
      k=[('langsam', ['nie spieszmy się', 'spokojnie', 'powoli'])]),
 dict(de='Ich finde dich sehr attraktiv.', pl='Jesteś bardzo atrakcyjna.',
      k=[('attraktiv', ['atrakcyjna', 'atrakcyjny'])]),
 dict(de='Mit dir zu reden macht Spaß.', pl='Fajnie się z tobą rozmawia.',
      k=[('reden_spass', ['fajnie się rozmawia', 'z tobą rozmawia'])]),

# -------------------------------------------------------- club_sicherheit
 dict(de='Ich gehe jetzt.', pl='Już idę.',
      k=[('gehe_jetzt', ['już idę', 'idę'])]),
 dict(de='Mir geht es nicht gut.', pl='Źle się czuję.',
      k=[('nicht_gut', ['źle się czuję', 'źle'])]),
 dict(de='Ich möchte nach Hause.', pl='Chcę do domu.',
      k=[('nach_hause', ['chcę do domu', 'do domu'])]),
 dict(de='Kannst du mir helfen?', pl='Możesz mi pomóc?',
      k=[('helfen', ['możesz mi pomóc', 'pomóc'])]),
 dict(de='Mein Freund wartet draußen auf mich.', pl='Mój chłopak czeka na zewnątrz.',
      k=[('freund_wartet', ['mój chłopak', 'czeka na zewnątrz', 'chłopak'])]),
 dict(de='Meine Freundin wartet draußen auf mich.', pl='Moja dziewczyna czeka na zewnątrz.',
      k=[('freundin_wartet', ['moja dziewczyna', 'czeka na zewnątrz', 'dziewczyna'])]),
 dict(de='Lass mich in Ruhe.', pl='Zostaw mnie w spokoju.',
      k=[('in_ruhe', ['zostaw mnie w spokoju', 'w spokoju'])]),
 dict(de='Ich habe kein Interesse. Geh bitte weg.', pl='Nie jestem zainteresowana. Odejdź, proszę.',
      k=[('kein_interesse', ['nie jestem zainteresowana', 'nie zainteresowany']),
         ('weggehen', ['odejdź', 'idź sobie'])]),
 dict(de='Die Person dort lässt mich nicht in Ruhe.', pl='Ta osoba się mnie czepia.',
      k=[('person_stoert', ['się mnie czepia', 'ta osoba', 'nie daje spokoju'])],
      h='In polnischen Clubs gibt es „ochrona" (Security) im Inneren — sie '
        'anzusprechen ist der übliche Weg.'),
 dict(de='Bitte tu so, als würden wir uns kennen.', pl='Udawaj, że się znamy, proszę.',
      k=[('so_tun', ['udawaj', 'udaj']),
         ('kennen', ['że się znamy', 'znamy się'])]),
 dict(de='Bitte pass kurz auf mein Glas auf.', pl='Popilnujesz mojego drinka?',
      k=[('glas_aufpassen', ['popilnujesz drinka', 'mojego drinka', 'drinka'])]),
 dict(de='Bitte rufen Sie die Polizei.', pl='Proszę wezwać policję.',
      k=[('polizei', ['policję', 'policja'])]),
 dict(de='Entschuldigung, ich wusste nicht, dass ihr zusammen seid.',
      pl='Przepraszam, nie wiedziałem, że jesteście razem.',
      k=[('nicht_gewusst', ['nie wiedziałem', 'nie wiedziałam', 'przepraszam']),
         ('zusammen', ['jesteście razem', 'razem'])]),

# ------------------------------------------------------- club_trinkkultur
 dict(de='Prost!', pl='Na zdrowie!',
      k=[('prost', ['na zdrowie', 'zdrowie'])],
      h='„Na zdrowie" ist der Trinkspruch UND das, was man nach dem Niesen '
        'sagt — dasselbe Wort für beides. Beim Anstoßen schaut man sich in '
        'die Augen.'),
 dict(de='Immer mit der Ruhe - trink so viel du magst.', pl='Spokojnie, pij ile chcesz.',
      k=[('ruhe', ['spokojnie']),
         ('so_viel', ['ile chcesz'])]),
 dict(de='Ich trinke langsam.', pl='Piję powoli.',
      k=[('langsam_trinken', ['piję powoli', 'powoli'])]),
 dict(de='Ich kann nicht mehr trinken.', pl='Nie mogę już pić.',
      k=[('nicht_mehr', ['nie mogę już pić', 'już nie'])]),
 dict(de='Ich muss morgen arbeiten.', pl='Jutro muszę do pracy.',
      k=[('morgen_arbeiten', ['jutro do pracy', 'muszę do pracy'])]),
 dict(de='Ich trinke nur ein bisschen.', pl='Piję tylko trochę.',
      k=[('nur_bisschen', ['tylko trochę', 'trochę'])]),
 dict(de='Was trinkst du?', pl='Co pijesz?',
      k=[('was_trinkst', ['co pijesz', 'pijesz'])]),
 dict(de='Ich möchte noch ein Bier.', pl='Poproszę jeszcze jedno piwo.',
      k=[('noch_bier', ['jeszcze jedno piwo', 'piwo'])]),
 dict(de='Trinken wir zusammen!', pl='Napijmy się razem!',
      k=[('zusammen_trinken', ['napijmy się', 'razem'])]),
 dict(de='Ich trinke keinen Alkohol.', pl='Nie piję alkoholu.',
      k=[('kein_alkohol', ['nie piję alkoholu', 'nie piję'])],
      h='Das wird akzeptiert, aber gern hinterfragt — „prowadzę" (ich fahre) '
        'beendet die Nachfragen zuverlässig.'),
 dict(de='Was kostet das?', pl='Ile to kosztuje?',
      k=[('kosten', ['ile kosztuje'])]),
 dict(de='Ich lade dich ein.', pl='Ja stawiam.',
      k=[('einladen', ['ja stawiam', 'stawiam'])]),

# ---------------------------------------------------------- club_verloren
 dict(de='Ich finde meine Freunde nicht.', pl='Nie mogę znaleźć moich znajomych.',
      k=[('freunde_weg', ['nie mogę znaleźć', 'znajomych', 'znajomi'])]),
 dict(de='Hast du meinen Freund gesehen?', pl='Widziałeś mojego kolegę?',
      k=[('gesehen', ['widziałeś', 'mojego kolegę'])]),
 dict(de='Wo bist du?', pl='Gdzie jesteś?',
      k=[('wo_bist', ['gdzie jesteś'])]),
 dict(de='Ich warte hier auf dich.', pl='Czekam tu na ciebie.',
      k=[('warte_hier', ['czekam tu', 'czekam na ciebie'])]),
 dict(de='Mein Handy hat keinen Strom mehr.', pl='Padła mi bateria.',
      k=[('handy_leer', ['padła mi bateria', 'bateria', 'telefon się rozładował'])],
      h='„Padła bateria" ist die feste Wendung — wörtlich „die Batterie ist '
        'gefallen".'),
 dict(de='Wo kann ich mein Handy laden?', pl='Gdzie mogę naładować telefon?',
      k=[('handy_laden', ['naładować telefon', 'naładować'])]),
 dict(de='Ich muss mein Handy laden.', pl='Muszę naładować telefon.',
      k=[('handy_laden', ['muszę naładować', 'naładować telefon'])]),
 dict(de='Kann ich dein Handy benutzen?', pl='Czy mogę pożyczyć twój telefon?',
      k=[('handy_benutzen', ['pożyczyć telefon', 'twój telefon'])]),
 dict(de='Ich rufe dich an.', pl='Zadzwonię do ciebie.',
      k=[('anrufen', ['zadzwonię', 'zadzwonię do ciebie'])]),
 dict(de='Wir treffen uns draußen.', pl='Spotkajmy się na zewnątrz.',
      k=[('treffen_draussen', ['spotkajmy się na zewnątrz', 'na zewnątrz'])]),
 dict(de='Bis morgen!', pl='Do jutra!',
      k=[('bis_morgen', ['do jutra', 'jutra'])]),
 dict(de='Ich nehme ein Taxi nach Hause.', pl='Wezmę taksówkę do domu.',
      k=[('taxi_heim', ['taksówkę do domu', 'taksówkę', 'do domu'])]),
 dict(de='Entschuldigung, ich habe meine Freunde verloren und mein Handy ist leer. Können Sie mir helfen?',
      pl='Przepraszam, zgubiłem znajomych i padła mi bateria. Czy może mi pan pomóc?',
      k=[('freunde_verloren', ['zgubiłem znajomych', 'zgubiłam znajomych', 'znajomych']),
         ('handy_leer', ['padła bateria', 'bateria']),
         ('helfen', ['może mi pan pomóc', 'pomóc'])]),
]

AUSGELASSEN = [
    # Zielland bzw. Zielsprache steht im Satz - ersetzt (neu=True oben).
    'Bist du aus China?',
    'Mein Chinesisch ist nicht so gut.',
    # WeChat gibt es in Polen nicht - ersetzt durch Instagram bzw. BLIK.
    'Lass uns WeChat austauschen.',
    'Ich zahle mit WeChat.',
    'Soll ich dich scannen?',
    # ERSATZLOS ausgelassen: helle Haut ist in China ein Kompliment, in
    # Polen keins. Simon sollte das gegenlesen.
    'Du hast eine sehr helle Haut.',
]
