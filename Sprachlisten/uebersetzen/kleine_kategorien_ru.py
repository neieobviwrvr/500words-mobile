# -*- coding: utf-8 -*-
"""Die sechs kleinsten Kategorien auf Russisch, in einer Datei.

Zusammen 76 Saetze - culture_immersion (20), moving_settling (18),
shopping_haggling (16), smalltalk_socialising (12), love_relationship (8),
dating_romance (2). Aufbau wie `kleine_kategorien_it.py`.

**Lautschrift wie im Grundwortschatz**: deutsch gelesen, mit Betonung und
mitgeschriebener Vokalreduktion. Die Regeln und ihre Begruendung stehen
ausfuehrlich im Kopf von `grundwortschatz_ru.py` - hier nur die Kurzform:
ш=sch, ч=tsch, ж=sh, х=ch, в=w, з=s, ц=z, ы=y; unbetontes о wird a;
что=schto, сегодня=sewódnja, ничего=nitschewó.

**Nichts ausgelassen** - alle 76 lassen sich abbilden.

Zwei Stellen mit eigener russischer Wirklichkeit statt woertlicher
Uebersetzung:

  Einwohnermeldeamt     Der Vorgang heisst `регистрация` (frueher und im
                        Volksmund weiter `прописка`), zustaendig ist das
                        Migrationsamt bzw. `МФЦ` als Buergerbuero. Ohne
                        Registrierung geht fuer Auslaender wenig.
  Kaution               `залог` ist das Wort; ueblich ist eine Monatsmiete
                        plus Maklerprovision, die in Russland fast immer
                        der Mieter zahlt.

**Kosenamen sind die interessanteste Stelle dieser Datei.** Russisch
verkleinert nicht nur reichlich, es hat einen ganzen eigenen Formenapparat
dafuer (-ик, -очка, -енька), und die verbreitetsten Kosenamen sind Tiere
und Himmelskoerper: солнышко (Sonnchen), зайка (Haeschen), рыбка
(Fischchen). Woertliche Uebersetzungen aus dem Deutschen waeren zwar
verstaendlich, aber keiner wuerde sie sagen - deshalb stehen hier die
echten Entsprechungen, mit Hinweis.

**Du und Sie** wie im Deutschen (ты/вы), Grundlinie: ты unter
Gleichaltrigen, вы gegenueber Personal und Aemtern.

**Nicht von Muttersprachlern geprueft** - bei Russisch faellt das staerker
ins Gewicht, weil die Lautschrift eine zusaetzliche Fehlerquelle ist.
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
 dict(kat='culture_immersion', de='Wo findet das Konzert statt?', ru='Где будет концерт?',
      py='Gdje búdjet kanzért?',
      k=[('konzert', ['концерт'])]),
 dict(kat='culture_immersion', de='Wie viel kostet der Eintritt?', ru='Сколько стоит билет?',
      py='Skólka stóit biljét?',
      k=[('eintritt', ['билет', 'вход'])]),
 dict(kat='culture_immersion', de='Wann öffnet das Museum?', ru='Когда открывается музей?',
      py='Kagdá atkrywájetsa musjéj?',
      k=[('museum_oeffnet', ['открывается музей', 'музей', 'открывается'])]),
 dict(kat='culture_immersion', de='Das war ein tolles Konzert.', ru='Это был отличный концерт.',
      py='Éta byl atlítschnyj kanzért.',
      k=[('tolles_konzert', ['отличный концерт', 'классный концерт', 'концерт'])]),
 dict(kat='culture_immersion', de='Ich gehe gerne ins Kino.', ru='Я люблю ходить в кино.',
      py='Ja ljubljú chadít w kinó.',
      k=[('kino', ['кино'])]),
 dict(kat='culture_immersion', de='Ich interessiere mich für Geschichte.', ru='Я интересуюсь историей.',
      py='Ja interessújus istórijej.',
      k=[('interessiere_geschichte', ['интересуюсь историей', 'история', 'историей'])]),
 dict(kat='culture_immersion', de='Treibst du Sport?', ru='Ты занимаешься спортом?',
      py='Ty sanimájeschsja spórtam?',
      k=[('sport_frage', ['занимаешься спортом', 'спорт', 'спортом'])]),
 dict(kat='culture_immersion', de='Ich spiele gerne Fußball.', ru='Я люблю играть в футбол.',
      py='Ja ljubljú igrát w futból.',
      k=[('fussball', ['футбол'])]),
 dict(kat='culture_immersion', de='Berlin ist sehr schön.', ru='Берлин очень красивый.',
      py='Berlín ótschen krassívyj.',
      k=[('berlin_schoen', ['берлин', 'красивый'])]),
 dict(kat='culture_immersion', de='Wir spielen Fußball.', ru='Мы играем в футбол.',
      py='My igrájem w futból.',
      k=[('spielen_fussball', ['играем в футбол', 'футбол'])]),
 dict(kat='culture_immersion', de='Wo ist die Kirche?', ru='Где церковь?',
      py='Gdje zérkaw?',
      k=[('kirche', ['церковь'])]),
 dict(kat='culture_immersion', de='Er ist gesprungen.', ru='Он прыгнул.',
      py='On prýgnul.',
      k=[('gesprungen', ['он прыгнул', 'прыгнул'])]),
 dict(kat='culture_immersion', de='Wie ist das Wetter heute?', ru='Какая сегодня погода?',
      py='Kakája sewódnja pagóda?',
      k=[('wetter_frage', ['какая погода', 'погода'])]),
 dict(kat='culture_immersion', de='Es regnet.', ru='Идёт дождь.',
      py='Idjót doshd.',
      k=[('regnet', ['идёт дождь', 'дождь'])],
      h='Wörtlich „der Regen geht" — Wetter läuft im Russischen fast immer '
        'über Bewegungsverben: „идёт дождь", „идёт снег".'),
 dict(kat='culture_immersion', de='Die Sonne scheint.', ru='Светит солнце.',
      py='Swjétit sónze.',
      k=[('sonne_scheint', ['светит солнце', 'солнце'])],
      h='„Солнце" wird „sónze" gesprochen — das л fällt komplett weg.'),
 dict(kat='culture_immersion', de='Es ist sehr kalt heute.', ru='Сегодня очень холодно.',
      py='Sewódnja ótschen chóladna.',
      k=[('kalt', ['холодно', 'очень холодно'])]),
 dict(kat='culture_immersion', de='Was machst du am Wochenende?', ru='Что ты делаешь на выходных?',
      py='Schto ty djélajesch na wychadných?',
      k=[('wochenende_frage', ['на выходных', 'выходные', 'что делаешь'])]),
 dict(kat='culture_immersion', de='Möchtest du mitkommen?', ru='Хочешь пойти со мной?',
      py='Chótschesch pajtí sa mnoj?',
      k=[('mitkommen', ['пойти со мной', 'хочешь пойти', 'со мной'])]),
 dict(kat='culture_immersion', de='Letztes Wochenende war ich am Strand.', ru='В прошлые выходные я был на пляже.',
      py='W próschlyje wychadnýje ja byl na pljásche.',
      k=[('strand', ['на пляже', 'пляж'])]),
 dict(kat='culture_immersion', de='Nächstes Wochenende gehe ich wandern.', ru='В следующие выходные я пойду в поход.',
      py='W slédujuschtschije wychadnýje ja pajdú w pachód.',
      k=[('wandern', ['в поход', 'поход'])],
      h='„Поход" ist mehr als eine Wanderung — es meint die mehrtägige Tour '
        'mit Zelt und Lagerfeuer und hat in Russland einen fast '
        'romantischen Klang.'),

# ============================================================ dating_romance
 dict(kat='dating_romance', de='Hast du einen festen Freund oder eine feste Freundin?',
      ru='У тебя есть парень или девушка?',
      py='U tjebjá jest párjen íli djéwuschka?',
      k=[('fester_partner', ['парень', 'девушка'])],
      h='„Парень" heißt wörtlich Junge, „девушка" Mädchen — und beides ist '
        'zugleich das normale Wort für den festen Freund bzw. die feste '
        'Freundin. „Друг" wäre nur der Kumpel.'),
 dict(kat='dating_romance', de='Wir sind gerade zusammen.', ru='Мы сейчас вместе.',
      py='My sitschás wmjéstje.',
      k=[('zusammen_sein', ['мы вместе', 'вместе'])]),

# ========================================================== love_relationship
 dict(kat='love_relationship', de='Wie soll ich dich nennen?', ru='Как мне тебя называть?',
      py='Kak mnje tjebjá nasywát?',
      k=[('wie', ['как']),
         ('nennen', ['называть', 'звать'])]),
 dict(kat='love_relationship', de='Ich nenne dich Schatz.', ru='Я называю тебя солнышком.',
      py='Ja nasywáju tjebjá sólnyschkam.',
      k=[('nennen', ['называю', 'зову']),
         ('schatz', ['солнышко', 'солнышком'])],
      h='Der häufigste russische Kosename ist nicht „Schatz", sondern '
        '„солнышко" — Sönnchen. Wörtliche Schatz-Übersetzungen („сокровище") '
        'gibt es, sagt aber praktisch niemand.'),
 dict(kat='love_relationship', de='Kann ich dich Schatzi nennen?', ru='Можно я буду звать тебя зайкой?',
      py='Móshna ja búdu swat tjebjá sájkaj?',
      k=[('koennen', ['можно', 'можно я']),
         ('schatzi', ['зайка', 'зайкой'])],
      h='„Зайка" (Häschen) ist die verbreitetste zärtliche Steigerung. '
        'Russisch verkleinert reichlich und mit eigenen Endungen '
        '(-ик, -очка, -енька) — dieselbe Geste wie das deutsche „-i" bei '
        '„Schatzi".'),
 dict(kat='love_relationship', de='Er nennt mich Bärchen.', ru='Он называет меня медвежонком.',
      py='On nasywájet menjá medweshónkam.',
      k=[('nennen', ['называет меня', 'называет']),
         ('baerchen', ['медвежонок', 'медвежонком'])]),
 dict(kat='love_relationship', de='Sie nennt mich Süße.', ru='Она называет меня милой.',
      py='Aná nasywájet menjá mílaj.',
      k=[('nennen', ['называет меня', 'называет']),
         ('suesse', ['милая', 'милой', 'сладкая'])]),
 dict(kat='love_relationship', de='Das ist mein Kosename für dich.', ru='Это моё ласковое имя для тебя.',
      py='Éta majó láskawaje ímja dlja tjebjá.',
      k=[('kosename', ['ласковое имя', 'ласковое'])]),
 dict(kat='love_relationship', de='Ich mag diesen Spitznamen nicht so gern.', ru='Мне не очень нравится это прозвище.',
      py='Mnje nje ótschen nráwitsa éta próswischtsche.',
      k=[('nicht_gern', ['не нравится', 'не очень нравится']),
         ('spitzname', ['прозвище'])]),
 dict(kat='love_relationship', de='Nenn mich bitte nicht so!', ru='Пожалуйста, не называй меня так!',
      py='Pashálusta, nje nasywáj menjá tak!',
      k=[('nennen', ['не называй', 'называй']),
         ('nicht_so', ['так'])]),

# ============================================================ moving_settling
 dict(kat='moving_settling', de='Wo finde ich einen Handwerker?', ru='Где найти мастера?',
      py='Gdje najtí mástera?',
      k=[('handwerker', ['мастера', 'мастер', 'сантехник'])],
      h='„Мастер" ist der Allrounder-Begriff für den Handwerker. Für '
        'Konkretes nennt man das Fach: „сантехник" (Klempner), '
        '„электрик" (Elektriker).'),
 dict(kat='moving_settling', de='Die Heizung funktioniert nicht.', ru='Отопление не работает.',
      py='Ataplénije nje rabótajet.',
      k=[('heizung_kaputt', ['отопление не работает', 'отопление', 'не работает'])],
      h='In vielen russischen Städten wird die Heizung zentral für ganze '
        'Viertel an- und abgestellt, mit festen Terminen im Herbst und '
        'Frühjahr — eine eigene Regelung in der Wohnung gibt es oft gar '
        'nicht.'),
 dict(kat='moving_settling', de='Meine Nachbarn sind sehr nett.', ru='Мои соседи очень хорошие.',
      py='Maí ssasjédi ótschen charóschije.',
      k=[('nachbarn_nett', ['соседи', 'хорошие'])]),
 dict(kat='moving_settling', de='Das Buch liegt auf dem Tisch.', ru='Книга лежит на столе.',
      py='Kníga leshýt na staljé.',
      k=[('buch_tisch', ['книга', 'на столе'])]),
 dict(kat='moving_settling', de='Hier ist es sehr praktisch.', ru='Здесь очень удобно.',
      py='Sdjes ótschen udóbna.',
      k=[('praktisch', ['удобно'])]),
 dict(kat='moving_settling', de='Ich muss den Strom anmelden.', ru='Мне нужно оформить электричество.',
      py='Mnje núshna afórmit elektrítschestwa.',
      k=[('strom_anmelden', ['оформить электричество', 'электричество', 'свет'])]),
 dict(kat='moving_settling', de='Wie melde ich mich beim Einwohnermeldeamt an?', ru='Как мне сделать регистрацию?',
      py='Kak mnje sdjélat registráziju?',
      k=[('einwohnermeldeamt', ['регистрацию', 'регистрация', 'прописка'])],
      h='Der Vorgang heißt „регистрация", im Volksmund weiter „прописка" '
        '(der Sowjetbegriff). Für Ausländer läuft er über das Migrationsamt '
        'oder ein „МФЦ"-Bürgerbüro und ist Pflicht — ohne Registrierung wird '
        'es bei Kontrollen unangenehm.'),
 dict(kat='moving_settling', de='Ich brauche eine Bestätigung meiner Adresse.', ru='Мне нужна справка о регистрации.',
      py='Mnje nushná spráwka a registrázii.',
      k=[('adressbestaetigung', ['справка о регистрации', 'справка'])],
      h='„Справка" ist eines der meistgebrauchten Wörter im russischen '
        'Behördenalltag — die amtliche Bescheinigung, die man für fast '
        'alles braucht.'),
 dict(kat='moving_settling', de='Das kann ich erledigen.', ru='Я могу это сделать.',
      py='Ja magú éta sdjélat.',
      k=[('erledigen', ['могу это сделать', 'сделать', 'решу'])]),
 dict(kat='moving_settling', de='Ich bezahle mit dem Handy.', ru='Я плачу телефоном.',
      py='Ja platschú teljefónam.',
      k=[('handy_bezahlen', ['телефоном', 'телефон', 'по телефону'])]),
 dict(kat='moving_settling', de='Ich suche eine Wohnung.', ru='Я ищу квартиру.',
      py='Ja ischtschú kwartíru.',
      k=[('wohnung_suchen', ['ищу квартиру', 'квартиру', 'квартира'])]),
 dict(kat='moving_settling', de='Wie hoch ist die Miete?', ru='Сколько стоит аренда?',
      py='Skólka stóit arjénda?',
      k=[('miete', ['аренда', 'аренду', 'квартплата'])]),
 dict(kat='moving_settling', de='Ist die Kaution im Preis enthalten?', ru='Залог входит в цену?',
      py='Salóg wchódit w zénu?',
      k=[('kaution', ['залог'])],
      h='Üblich ist eine Monatsmiete als „залог" plus Maklerprovision — und '
        'die zahlt in Russland fast immer der Mieter, nicht der Vermieter.'),
 dict(kat='moving_settling', de='Wann kann ich einziehen?', ru='Когда я могу заехать?',
      py='Kagdá ja magú sajéchat?',
      k=[('einziehen', ['заехать', 'въехать'])]),
 dict(kat='moving_settling', de='Gibt es einen Aufzug im Haus?', ru='В доме есть лифт?',
      py='W dómje jest lift?',
      k=[('aufzug', ['лифт'])]),
 dict(kat='moving_settling', de='Gibt es hier einen Waschraum?', ru='Здесь есть прачечная?',
      py='Sdjes jest prátschetschnaja?',
      k=[('waschraum', ['прачечная', 'стиральная машина'])]),
 dict(kat='moving_settling', de='Ich möchte den Mietvertrag unterschreiben.', ru='Я хочу подписать договор аренды.',
      py='Ja chatschú padpissát dagawór arjéndy.',
      k=[('mietvertrag', ['договор аренды', 'договор']),
         ('unterschreiben', ['подписать'])]),
 dict(kat='moving_settling', de='Ich bin letzte Woche umgezogen.', ru='Я переехал на прошлой неделе.',
      py='Ja perejéchal na próschlaj nedjélje.',
      k=[('umgezogen', ['переехал', 'переехала'])],
      h='Als Frau: „переехала" (perejéchala). Die Vergangenheit richtet sich '
        'nach dem Geschlecht des Sprechers — gilt für jeden Satz in dieser '
        'Zeit.'),

# ========================================================== shopping_haggling
 dict(kat='shopping_haggling', de='Kann ich das anprobieren?', ru='Можно это примерить?',
      py='Móshna éta primérit?',
      k=[('anprobieren', ['примерить'])]),
 dict(kat='shopping_haggling', de='Wo ist die Umkleidekabine?', ru='Где примерочная?',
      py='Gdje primérotschnaja?',
      k=[('umkleidekabine', ['примерочная'])]),
 dict(kat='shopping_haggling', de='Haben Sie das auch in Größe M?', ru='У вас есть размер M?',
      py='U was jest rasmjér M?',
      k=[('groesse', ['размер'])]),
 dict(kat='shopping_haggling', de='Haben Sie das in einer anderen Farbe?', ru='У вас есть другой цвет?',
      py='U was jest drugój zwjet?',
      k=[('andere_farbe', ['другой цвет', 'цвет'])]),
 dict(kat='shopping_haggling', de='Kann ich mit Karte bezahlen?', ru='Можно оплатить картой?',
      py='Móshna aplatít kártaj?',
      k=[('karte_zahlen', ['картой', 'карта'])]),
 dict(kat='shopping_haggling', de='Nur Bargeld, bitte.', ru='Только наличные, пожалуйста.',
      py='Tólka nalítschnyje, pashálusta.',
      k=[('bargeld', ['наличные', 'наличными'])]),
 dict(kat='shopping_haggling', de='Das ist zu teuer.', ru='Это слишком дорого.',
      py='Éta slíschkam dóraga.',
      k=[('zu_teuer', ['слишком дорого', 'дорого'])]),
 dict(kat='shopping_haggling', de='Gibt es einen Rabatt?', ru='Есть скидка?',
      py='Jest skídka?',
      k=[('rabatt', ['скидка'])],
      h='Auf Märkten („рынок") wird gehandelt und die Frage gehört dazu; im '
        'Laden ist sie unüblich. „Скидка" steht aber überall auf '
        'Preisschildern — Rabattaktionen sind Dauerzustand.'),
 dict(kat='shopping_haggling', de='Haben Sie eine Tüte?', ru='У вас есть пакет?',
      py='U was jest pakjét?',
      k=[('tuete', ['пакет'])]),
 dict(kat='shopping_haggling', de='Das gilt nicht als teuer.', ru='Это не считается дорогим.',
      py='Éta nje sschitájetsa daragím.',
      k=[('nicht_teuer', ['не считается дорогим', 'не дорого'])]),
 dict(kat='shopping_haggling', de='Ich möchte das zurückgeben.', ru='Я хочу это вернуть.',
      py='Ja chatschú éta wernút.',
      k=[('zurueckgeben', ['вернуть', 'возврат'])]),
 dict(kat='shopping_haggling', de='Ich suche ein Geschenk für meine Mutter.', ru='Я ищу подарок для мамы.',
      py='Ja ischtschú padárak dlja mámy.',
      k=[('geschenk', ['подарок'])]),
 dict(kat='shopping_haggling', de='Wann schließt das Geschäft?', ru='Когда закрывается магазин?',
      py='Kagdá sakrywájetsa magasín?',
      k=[('schliesst', ['закрывается', 'закрывается магазин'])]),
 dict(kat='shopping_haggling', de='Ich schaue mich nur um.', ru='Я просто смотрю.',
      py='Ja prósta smatrjú.',
      k=[('nur_umschauen', ['просто смотрю', 'смотрю'])]),
 dict(kat='shopping_haggling', de='Können Sie mir helfen?', ru='Вы можете мне помочь?',
      py='Wy móshetje mnje pamótsch?',
      k=[('helfen', ['помочь', 'мне помочь'])]),
 dict(kat='shopping_haggling', de='Ich habe gestern ein neues Kleid gekauft.', ru='Вчера я купила новое платье.',
      py='Wtscherá ja kupíla nówaje plátje.',
      k=[('gekauft', ['купила', 'купил']),
         ('kleid', ['платье'])],
      h='Hier steht die weibliche Form „купила", weil ein Kleid gekauft '
        'wurde — als Mann sagst du „купил" (kupíl).'),

# ===================================================== smalltalk_socialising
 dict(kat='smalltalk_socialising', de='Bist du verheiratet?', ru='Ты женат?',
      py='Ty shenát?',
      k=[('verheiratet', ['женат', 'замужем'])],
      h='Männer und Frauen benutzen verschiedene Wörter: ein Mann ist '
        '„женат", eine Frau ist „замужем" (wörtlich „hinter dem Mann"). '
        'Eine gemeinsame Form gibt es nicht.'),
 dict(kat='smalltalk_socialising', de='Hast du Geschwister?', ru='У тебя есть братья или сёстры?',
      py='U tjebjá jest brátja íli sjóstry?',
      k=[('geschwister', ['братья или сёстры', 'братья', 'сёстры'])],
      h='Ein Sammelwort für Geschwister gibt es im Russischen nicht — man '
        'zählt beide auf.'),
 dict(kat='smalltalk_socialising', de='Ich habe eine Schwester.', ru='У меня есть сестра.',
      py='U menjá jest sestrá.',
      k=[('schwester', ['сестра'])]),
 dict(kat='smalltalk_socialising', de='Noch nicht.', ru='Ещё нет.',
      py='Jeschtschó njet.',
      k=[('noch_nicht', ['ещё нет'])]),
 dict(kat='smalltalk_socialising', de='Was sind deine Hobbys?', ru='Какие у тебя хобби?',
      py='Kakíje u tjebjá chóbbi?',
      k=[('hobbys_frage', ['хобби', 'какие хобби'])]),
 dict(kat='smalltalk_socialising', de='Ich lese gerne Bücher.', ru='Я люблю читать книги.',
      py='Ja ljubljú tschitát knígi.',
      k=[('lesen', ['читать', 'книги'])]),
 dict(kat='smalltalk_socialising', de='Mein Hobby ist Sport.', ru='Моё хобби — спорт.',
      py='Majó chóbbi — sport.',
      k=[('hobby_sport', ['спорт'])]),
 dict(kat='smalltalk_socialising', de='Was machst du beruflich?', ru='Кем ты работаешь?',
      py='Kjem ty rabótajesch?',
      k=[('beruf_frage', ['кем ты работаешь', 'работаешь'])],
      h='Wörtlich „als wer arbeitest du" — nach dem Beruf fragt man im '
        'Russischen über die Person, nicht über die Tätigkeit.'),
 dict(kat='smalltalk_socialising', de='Ich bin Student.', ru='Я студент.',
      py='Ja studjént.',
      k=[('student', ['студент', 'студентка'])]),
 dict(kat='smalltalk_socialising', de='Ich arbeite als Lehrer.', ru='Я работаю учителем.',
      py='Ja rabótaju utschítelem.',
      k=[('beruf', ['учителем', 'учитель'])]),
 dict(kat='smalltalk_socialising', de='Wo wohnst du?', ru='Где ты живёшь?',
      py='Gdje ty shywjósch?',
      k=[('wo_wohnst', ['где ты живёшь', 'живёшь'])]),
 dict(kat='smalltalk_socialising', de='Ich wohne in Berlin.', ru='Я живу в Берлине.',
      py='Ja shywú w Berlínje.',
      k=[('wohne_in', ['живу в берлине', 'берлин', 'берлине'])]),
]

AUSGELASSEN = []
