# -*- coding: utf-8 -*-
"""Essen und Trinken auf Englisch - 92 Saetze (drinking_dining).

**Nichts ausgelassen.**

Die Kategorie stammt aus dem chinesischen Ausbau und traegt das sichtbar
(Schuesseln Reis, Strassenessen, Schaerfe-Verhandlung). Alle Saetze
funktionieren auch im englischsprachigen Raum, sie sind nur unterschiedlich
haeufig. Uebersetzt ist vollstaendig und woertlich; wo die PRAXIS abweicht,
steht ein Hinweis am Satz.

**Britisch, wo es auseinandergeht** - `starter` statt `appetizer`,
`bill` statt `check`, `takeaway` statt `to go`. Die amerikanische Form
steht jeweils als Synonym in `k`.

Was anders laeuft und deshalb kommentiert ist:

  Trinkgeld     In Grossbritannien sind 10-12,5% ueblich und stehen oft
                schon als `service charge` auf der Rechnung - dann gibt
                man nichts mehr dazu. In den USA sind 18-20% dagegen
                Pflicht, weil das Personal davon lebt. Der Unterschied
                ist gross genug, dass er am Satz steht.
  Leitungswasser `tap water` ist kostenlos und muss auf Nachfrage
                ausgeschenkt werden - man muss aber danach fragen.
  Runden        In der Pub-Kultur zahlt reihum EINER fuer alle
                (`a round`). Wer sich davor drueckt, faellt auf.
"""

KATEGORIEN = ['drinking_dining']

SAETZE = [

# ---------------------------------------------------------- essen_bestellen
 dict(de='Die Speisekarte, bitte.', en='The menu, please.',
      k=[('speisekarte', ['menu'])]),
 dict(de='Was empfehlen Sie?', en='What do you recommend?',
      k=[('empfehlung', ['what do you recommend', 'recommend'])]),
 dict(de='Ich hätte gern ein Wasser, bitte.', en="I'd like a water, please.",
      k=[('wasser', ['water'])],
      h='„Tap water" ist kostenlos und muss auf Nachfrage ausgeschenkt '
        'werden — sonst bekommst du Flaschenwasser und zahlst dafür.'),
 dict(de='Was möchten Sie trinken?', en='What would you like to drink?',
      k=[('trinken_frage', ['to drink', 'drink'])]),
 dict(de='Ich möchte etwas bestellen.', en="I'd like to order.",
      k=[('bestellen', ['order'])]),
 dict(de='Einen Moment, bitte.', en='One moment, please.',
      k=[('moment', ['one moment', 'just a moment', 'a second'])]),
 dict(de='Das ist alles, danke.', en="That's all, thanks.",
      k=[('alles', ["that's all", 'all'])]),
 dict(de='Was ist in diesem Gericht?', en="What's in this dish?",
      k=[('was_drin', ["what's in this dish", 'dish', 'in this'])]),
 dict(de='Haben Sie eine Karte mit Bildern?', en='Do you have a menu with pictures?',
      k=[('bilder', ['with pictures', 'pictures', 'photos'])]),
 dict(de='Ich möchte etwas Warmes.', en="I'd like something hot.",
      k=[('warm', ['something hot', 'hot', 'warm'])]),
 dict(de='Zeigen Sie mir das mal.', en='Could you show me that?',
      k=[('zeigen', ['show me', 'show'])]),
 dict(de='Diese hier, bitte.', en='This one, please.',
      k=[('diese', ['this one', 'this'])]),
 dict(de='Wie lange dauert es?', en='How long will it take?',
      k=[('wie_lange', ['how long', 'take'])]),
 dict(de='Gibt es davon ein Bild?', en='Is there a picture of it?',
      k=[('bild', ['picture', 'photo'])]),
 dict(de='Was gibt es gutes zu Essen?', en="What's good to eat here?",
      k=[('gutes_essen', ["what's good", 'good to eat', 'good'])]),

# ----------------------------------------------------------- essen_bezahlen
 dict(de='Können wir bitte zahlen?', en='Could we have the bill, please?',
      k=[('zahlen', ['the bill', 'bill', 'check'])],
      h='„Bill" in Großbritannien, „check" in den USA. Der Kellner bringt sie '
        'meist erst auf Nachfrage.'),
 dict(de='Ist das im Preis inbegriffen?', en='Is that included in the price?',
      k=[('im_preis', ['included in the price', 'included'])],
      h='Achte auf „service charge" auf der Rechnung — sind 12,5% schon drauf, '
        'gibt man nichts mehr dazu.'),
 dict(de='Das habe ich nicht bestellt.', en="I didn't order this.",
      k=[('nicht_bestellt', ["didn't order", 'not order'])]),
 dict(de='Können Sie mir die Rechnung getrennt bringen?', en='Could we pay separately?',
      k=[('rechnung_getrennt', ['pay separately', 'separately', 'split the bill'])],
      h='„Split the bill" ist die gängige Wendung — in Großbritannien meist '
        'kein Problem, in vollen Pubs aber unbeliebt.'),
 dict(de='Zusammen, bitte.', en='All together, please.',
      k=[('zusammen', ['all together', 'together'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', en='Can I pay with my phone?',
      k=[('handy', ['phone', 'contactless']),
         ('bezahlen', ['pay'])]),
 dict(de='Stimmt so.', en='Keep the change.',
      k=[('stimmt_so', ['keep the change', 'change'])],
      h='In Großbritannien 10-12,5% Trinkgeld, sofern kein „service charge" '
        'auf der Rechnung steht. In den USA sind 18-20% erwartet, weil das '
        'Personal davon lebt — dort ist Nichtgeben ein echter Affront.'),
 dict(de='Wie viel macht das?', en='How much is that?',
      k=[('wieviel', ['how much'])]),
 dict(de='Können wir das einpacken?', en='Could we get a takeaway box?',
      k=[('einpacken', ['takeaway box', 'to go', 'box it up'])]),

# ---------------------------------------------------------- essen_geschmack
 dict(de='Guten Appetit!', en='Enjoy your meal!',
      k=[('guten_appetit', ['enjoy your meal', 'enjoy', 'bon appetit'])],
      h='Englisch hat keine eigene Formel dafür — der Kellner sagt „enjoy", '
        'unter Freunden sagt man oft gar nichts. „Bon appétit" ist entlehnt '
        'und klingt gewollt.'),
 dict(de='Das Essen schmeckt sehr gut.', en='The food is very good.',
      k=[('schmeckt_gut', ['very good', 'delicious', 'lovely'])]),
 dict(de='Gestern habe ich in einem Restaurant gegessen.', en='Yesterday I ate at a restaurant.',
      k=[('restaurant', ['restaurant'])]),
 dict(de='Das war sehr lecker.', en='That was delicious.',
      k=[('war_lecker', ['delicious', 'lovely', 'really good'])]),
 dict(de='Das mag ich sehr.', en='I really like this.',
      k=[('moegen', ['really like', 'like'])]),
 dict(de='Das mag ich nicht.', en="I don't like this.",
      k=[('nicht_moegen', ["don't like"])]),
 dict(de='Was ist das für ein Fleisch?', en='What kind of meat is this?',
      k=[('fleisch', ['meat'])]),
 dict(de='Das ist mir zu salzig.', en="That's too salty for me.",
      k=[('salzig', ['too salty', 'salty'])]),
 dict(de='Nicht zu salzig, bitte.', en='Not too salty, please.',
      k=[('salzig', ['not too salty', 'salty'])]),
 dict(de='Dieses Restaurant ist sehr gut.', en='This restaurant is very good.',
      k=[('restaurant_gut', ['restaurant', 'very good'])]),

# ---------------------------------------------------------- essen_getraenke
 dict(de='Was haben Sie zu trinken?', en='What do you have to drink?',
      k=[('trinken', ['to drink', 'drink', 'drinks'])]),
 dict(de='Kaltes Wasser, bitte.', en='Cold water, please.',
      k=[('kalt', ['cold']),
         ('wasser', ['water'])]),
 dict(de='Heißes Wasser, bitte.', en='Hot water, please.',
      k=[('heiss', ['hot']),
         ('wasser', ['water'])]),
 dict(de='Ohne Eis, bitte.', en='No ice, please.',
      k=[('ohne_eis', ['no ice', 'without ice', 'ice'])]),
 dict(de='Ein Bier, bitte.', en='A beer, please.',
      k=[('bier', ['beer', 'pint'])],
      h='Im Pub bestellt man „a pint" (0,57 l) oder „a half". Bezahlt wird '
        'an der Theke, nicht am Tisch — und der Kellner kommt nicht zu dir.'),
 dict(de='Einen Tee, bitte.', en='A tea, please.',
      k=[('tee', ['tea'])],
      h='„Tea" kommt in Großbritannien standardmäßig mit Milch. Wer das nicht '
        'will, sagt „black tea, no milk" — sonst wird nicht gefragt.'),
 dict(de='Ohne Zucker, bitte.', en='No sugar, please.',
      k=[('ohne_zucker', ['no sugar', 'without sugar', 'sugar'])]),
 dict(de='Noch eins, bitte.', en='Another one, please.',
      k=[('noch_eins', ['another one', 'another'])]),
 dict(de='Zwei Flaschen, bitte.', en='Two bottles, please.',
      k=[('zwei', ['two']),
         ('flaschen', ['bottles'])]),
 dict(de='Mit Eis, bitte.', en='With ice, please.',
      k=[('eis', ['with ice', 'ice'])]),
 dict(de='Ein bisschen Zucker, bitte.', en='A little sugar, please.',
      k=[('zucker', ['sugar']),
         ('bisschen', ['a little', 'a bit'])]),
 dict(de='Trinkst du Kaffee oder Tee?', en='Do you drink coffee or tea?',
      k=[('kaffee_tee', ['coffee', 'tea'])]),

# -------------------------------------------------------------- essen_platz
 dict(de='Ich hätte gern einen Tisch für zwei Personen.', en="I'd like a table for two.",
      k=[('tisch', ['table']),
         ('anzahl_zwei', ['for two', 'two'])]),
 dict(de='Haben Sie einen Tisch frei?', en='Do you have a free table?',
      k=[('tisch_frei', ['free table', 'table available', 'table'])]),
 dict(de='Ich möchte einen Tisch für morgen Abend reservieren.', en="I'd like to book a table for tomorrow evening.",
      k=[('reservieren', ['book a table', 'book', 'reserve']),
         ('morgen_abend', ['tomorrow evening', 'tomorrow night'])],
      h='„Book" ist britisch, „make a reservation" amerikanisch.'),
 dict(de='Ist dieser Tisch schon reserviert?', en='Is this table already booked?',
      k=[('schon_reserviert', ['already booked', 'booked', 'reserved'])]),
 dict(de='Für wie viele Personen?', en='For how many people?',
      k=[('wie_viele', ['how many people', 'how many'])]),
 dict(de='Können wir draußen sitzen?', en='Can we sit outside?',
      k=[('draussen', ['outside', 'sit outside'])]),
 dict(de='Wir warten.', en="We'll wait.",
      k=[('warten', ["we'll wait", 'wait'])]),
 dict(de='Wie lange müssen wir warten?', en='How long is the wait?',
      k=[('wie_lange', ['how long']),
         ('warten', ['wait'])]),
 dict(de='Zwei Personen.', en='Two people.',
      k=[('zwei', ['two']),
         ('personen', ['people'])]),

# ----------------------------------------------------------- essen_schaerfe
 dict(de='Ist das scharf?', en='Is this spicy?',
      k=[('scharf', ['spicy', 'hot'])],
      h='„Hot" heißt heiß UND scharf — beim Essen entscheidet der Kontext. '
        '„Spicy" ist eindeutig.'),
 dict(de='Nicht scharf, bitte.', en='Not spicy, please.',
      k=[('nicht_scharf', ['not spicy', 'spicy', 'mild'])]),
 dict(de='Ein bisschen scharf ist okay.', en='A little spicy is fine.',
      k=[('bisschen', ['a little', 'a bit'])]),
 dict(de='Ich kann nicht scharf essen.', en="I can't eat spicy food.",
      k=[('nicht_koennen', ["can't eat", "can't"]),
         ('scharf', ['spicy', 'spicy food'])]),
 dict(de='Das ist zu scharf!', en="That's too spicy!",
      k=[('zu_scharf', ['too spicy', 'too hot'])]),
 dict(de='Haben Sie etwas ohne Chili?', en='Do you have anything without chilli?',
      k=[('ohne_scharf', ['without chilli', 'without chili', 'no chilli'])]),
 dict(de='Wasser, schnell!', en='Water, quickly!',
      k=[('wasser', ['water'])]),
 dict(de='Kannst du scharf essen?', en='Can you handle spicy food?',
      k=[('koennen', ['can you handle', 'can you']),
         ('scharf', ['spicy', 'spicy food'])]),

# ------------------------------------------------------ essen_strassenessen
 dict(de='Was ist das?', en="What's this?",
      k=[('was', ["what's this", 'what is this'])]),
 dict(de='Ich nehme das.', en="I'll take this one.",
      k=[('nehmen', ["i'll take", 'take'])]),
 dict(de='Eine Portion, bitte.', en='One portion, please.',
      k=[('portion', ['portion', 'serving'])]),
 dict(de='Zwei davon, bitte.', en='Two of those, please.',
      k=[('zwei', ['two'])]),
 dict(de='Wie viel kostet eine Portion?', en='How much is one portion?',
      k=[('wieviel', ['how much'])]),
 dict(de='Zum Mitnehmen, bitte.', en='Takeaway, please.',
      k=[('mitnehmen', ['takeaway', 'to go', 'take away'])],
      h='„Takeaway" in Großbritannien, „to go" oder „takeout" in den USA. Die '
        'Frage im Laden lautet „eat in or takeaway?"'),
 dict(de='Ich esse hier.', en="I'll eat in.",
      k=[('hier', ['eat in', 'here']),
         ('essen', ['eat'])]),
 dict(de='Ist das frisch?', en='Is this fresh?',
      k=[('frisch', ['fresh'])]),
 dict(de='Was essen die anderen?', en='What are the others eating?',
      k=[('andere', ['the others', 'others'])]),
 dict(de='Das Gleiche, bitte.', en='The same, please.',
      k=[('gleiche', ['the same', 'same'])]),
 dict(de='Zwei Portionen, bitte.', en='Two portions, please.',
      k=[('zwei', ['two']),
         ('portionen', ['portions'])]),
 dict(de='Das ist sehr frisch.', en="This is very fresh.",
      k=[('frisch', ['very fresh', 'fresh'])]),
 dict(de='Ich möchte das Gleiche.', en="I'd like the same.",
      k=[('gleiche', ['the same', 'same'])]),

# ------------------------------------------------------------- essen_teilen
 dict(de='Wir essen zusammen.', en="We're eating together.",
      k=[('zusammen', ['together', 'eating together'])]),
 dict(de='Noch eine Schüssel Reis, bitte.', en='Another bowl of rice, please.',
      k=[('reis', ['rice']),
         ('noch', ['another', 'one more'])]),
 dict(de='Iss mehr!', en='Have some more!',
      k=[('mehr_essen', ['have some more', 'more', 'eat more'])]),
 dict(de='Ich bin satt.', en="I'm full.",
      k=[('satt', ['full', "i'm full"])]),
 dict(de='Nimm doch!', en='Help yourself!',
      k=[('nimm', ['help yourself', 'go ahead'])]),
 dict(de='Sollen wir noch etwas bestellen?', en='Shall we order something else?',
      k=[('bestellen', ['order']),
         ('noch', ['something else', 'more'])]),
 dict(de='Ich lade dich ein.', en="It's on me.",
      k=[('einladen', ["it's on me", 'my treat', "i'll get this"])],
      h='„It’s on me" oder „my treat". Im Pub läuft es anders: dort zahlt '
        'reihum einer für alle („a round"), und wer sich davor drückt, fällt '
        'auf.'),
 dict(de='Danke fürs Einladen!', en='Thanks for treating me!',
      k=[('danke', ['thanks for', 'thank you', 'thanks'])]),
 dict(de='Das ist für alle.', en="This is for everyone.",
      k=[('alle', ['for everyone', 'everyone'])]),
 dict(de='Bist du satt?', en='Are you full?',
      k=[('satt', ['full'])]),
 dict(de='Noch eine Schüssel, bitte.', en='Another bowl, please.',
      k=[('schuessel', ['bowl']),
         ('noch', ['another', 'one more'])]),
 dict(de='Heute lade ich ein.', en="Today it's on me.",
      k=[('heute', ['today']),
         ('einladen', ["it's on me", 'my treat'])]),
 dict(de='Alle zusammen!', en='All together!',
      k=[('alle', ['all']),
         ('zusammen', ['together'])]),
 dict(de='Die anderen essen schon.', en='The others are already eating.',
      k=[('andere', ['the others', 'others']),
         ('essen', ['eating'])]),

# ------------------------------------------------------ essen_unvertraeglich
 dict(de='Ich bin Vegetarier.', en="I'm vegetarian.",
      k=[('vegetarier', ['vegetarian'])]),
 dict(de='Ich habe eine Allergie gegen Nüsse.', en="I'm allergic to nuts.",
      k=[('allergie', ['allergic', 'allergy']),
         ('nuesse', ['nuts'])],
      h='In Großbritannien müssen Allergene auf jeder Speisekarte '
        'ausgewiesen sein — die Frage danach ist völlig normal und wird '
        'ernst genommen.'),
]

AUSGELASSEN = []
