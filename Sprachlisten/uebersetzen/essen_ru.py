# -*- coding: utf-8 -*-
"""Essen und Trinken auf Russisch - 92 Saetze (drinking_dining).

**Lautschrift-Regeln** stehen im Kopf von `grundwortschatz_ru.py`.

**Nichts ausgelassen.**

Die Kategorie stammt zu grossen Teilen aus dem chinesischen Ausbau. Alle
Saetze funktionieren auch in Russland; uebersetzt ist vollstaendig und
woertlich, und wo die PRAXIS abweicht, steht ein Hinweis am Satz.

Was in Russland anders laeuft:

  Einladen               Wer einlaedt, zahlt - und das ist kein Ringen wie
                         in Italien, sondern gesetzt. Getrennte Rechnungen
                         gibt es in Ketten, unter Freunden gelten sie als
                         kleinlich.
  Trinkspruch            Man trinkt selten wortlos. Ein `За встречу!` (auf
                         das Treffen) oder `Будем!` gehoert dazu - der
                         naechste Schritt nach `Guten Appetit`.
  Leitungswasser         Wird NICHT getrunken; bestellt wird Flaschenwasser
                         (`с газом` / `без газа`).
  Tee                    Ist das Grundgetraenk, nicht Kaffee - und wird
                         gern mit Marmelade oder Zitrone getrunken.
  Schaerfe               Russische Kueche ist mild; die Schaerfe-Saetze
                         braucht man eher im georgischen oder
                         zentralasiatischen Lokal.

**Du oder Sie:** `вы` gegenueber dem Personal, `ты` unter Freunden am
Tisch.

**Nicht von Muttersprachlern geprueft** - die Lautschrift ist eine
zusaetzliche Fehlerquelle.
"""

KATEGORIEN = ['drinking_dining']

SAETZE = [

# ---------------------------------------------------------- essen_bestellen
 dict(de='Die Speisekarte, bitte.', ru='Меню, пожалуйста.', py='Menjú, pashálusta.',
      k=[('speisekarte', ['меню'])]),
 dict(de='Was empfehlen Sie?', ru='Что вы посоветуете?', py='Schto wy passawjétujetje?',
      k=[('empfehlung', ['что вы посоветуете', 'посоветуете', 'совет'])]),
 dict(de='Ich hätte gern ein Wasser, bitte.', ru='Я хотел бы воды, пожалуйста.', py='Ja chatjél by wadý, pashálusta.',
      k=[('wasser', ['воды', 'вода'])],
      h='Leitungswasser trinkt man in Russland nicht — bestellt wird '
        'Flaschenwasser, und gefragt wird „с газом или без газа?" (mit '
        'oder ohne Kohlensäure).'),
 dict(de='Was möchten Sie trinken?', ru='Что будете пить?', py='Schto búdjetje pit?',
      k=[('trinken_frage', ['что будете пить', 'пить'])]),
 dict(de='Ich möchte etwas bestellen.', ru='Я хочу сделать заказ.', py='Ja chatschú sdjélat sakás.',
      k=[('bestellen', ['сделать заказ', 'заказать', 'заказ'])]),
 dict(de='Einen Moment, bitte.', ru='Минутку, пожалуйста.', py='Minútku, pashálusta.',
      k=[('moment', ['минутку', 'секунду'])]),
 dict(de='Das ist alles, danke.', ru='Это всё, спасибо.', py='Éta wsjo, spassíba.',
      k=[('alles', ['это всё', 'всё'])]),
 dict(de='Was ist in diesem Gericht?', ru='Что входит в это блюдо?', py='Schto wchódit w éta bljúda?',
      k=[('was_drin', ['что входит', 'блюдо', 'состав'])]),
 dict(de='Haben Sie eine Karte mit Bildern?', ru='У вас есть меню с фотографиями?',
      py='U was jest menjú s fatagráfijami?',
      k=[('bilder', ['с фотографиями', 'фотографиями', 'картинками'])]),
 dict(de='Ich möchte etwas Warmes.', ru='Я хочу что-нибудь горячее.', py='Ja chatschú schto-nibúd garjátscheje.',
      k=[('warm', ['горячее', 'что-нибудь горячее'])]),
 dict(de='Zeigen Sie mir das mal.', ru='Покажите мне это.', py='Pakashýtje mnje éta.',
      k=[('zeigen', ['покажите', 'показать'])]),
 dict(de='Diese hier, bitte.', ru='Вот это, пожалуйста.', py='Wot éta, pashálusta.',
      k=[('diese', ['вот это', 'это'])]),
 dict(de='Wie lange dauert es?', ru='Сколько это займёт?', py='Skólka éta sajmjót?',
      k=[('wie_lange', ['сколько займёт', 'займёт', 'сколько ждать'])]),
 dict(de='Gibt es davon ein Bild?', ru='Есть фотография этого блюда?', py='Jest fatagráfija étawa bljúda?',
      k=[('bild', ['фотография', 'фото', 'картинка'])]),
 dict(de='Was gibt es gutes zu Essen?', ru='Что здесь вкусного?', py='Schto sdjes wkúsnawa?',
      k=[('gutes_essen', ['что вкусного', 'вкусного', 'вкусно'])]),

# ----------------------------------------------------------- essen_bezahlen
 dict(de='Können wir bitte zahlen?', ru='Можно счёт, пожалуйста?', py='Móshna schtschot, pashálusta?',
      k=[('zahlen', ['счёт', 'счет', 'расплатиться'])]),
 dict(de='Ist das im Preis inbegriffen?', ru='Это входит в цену?', py='Éta wchódit w zénu?',
      k=[('im_preis', ['входит в цену', 'входит', 'включено'])]),
 dict(de='Das habe ich nicht bestellt.', ru='Я это не заказывал.', py='Ja éta nje sakásywal.',
      k=[('nicht_bestellt', ['не заказывал', 'не заказывала', 'не заказывал это'])]),
 dict(de='Können Sie mir die Rechnung getrennt bringen?', ru='Можно счёт отдельно?',
      py='Móshna schtschot atdjélna?',
      k=[('rechnung_getrennt', ['отдельно', 'раздельно', 'отдельный счёт'])],
      h='In Ketten und Cafés geht das problemlos. Unter Freunden gilt '
        'getrenntes Zahlen aber als kleinlich — dort lädt einer ein und '
        'beim nächsten Mal der andere.'),
 dict(de='Zusammen, bitte.', ru='Всё вместе, пожалуйста.', py='Wsjo wmjéstje, pashálusta.',
      k=[('zusammen', ['всё вместе', 'вместе'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', ru='Можно оплатить телефоном?', py='Móshna aplatít teljefónam?',
      k=[('handy', ['телефоном', 'телефон']),
         ('bezahlen', ['оплатить', 'платить'])]),
 dict(de='Stimmt so.', ru='Сдачи не надо.', py='Sdátschi nje náda.',
      k=[('stimmt_so', ['сдачи не надо', 'без сдачи', 'сдачи'])]),
 dict(de='Wie viel macht das?', ru='Сколько с меня?', py='Skólka s menjá?',
      k=[('wieviel', ['сколько с меня', 'сколько'])]),
 dict(de='Können wir das einpacken?', ru='Можно упаковать с собой?', py='Móshna upakawát s sabój?',
      k=[('einpacken', ['упаковать', 'с собой', 'завернуть'])]),

# ---------------------------------------------------------- essen_geschmack
 dict(de='Guten Appetit!', ru='Приятного аппетита!', py='Prijátnawa appetíta!',
      k=[('guten_appetit', ['приятного аппетита', 'аппетита'])],
      h='Danach kommt oft gleich der Trinkspruch — wortlos anzustoßen ist '
        'unüblich. „За встречу!" (auf das Treffen) passt fast immer.'),
 dict(de='Das Essen schmeckt sehr gut.', ru='Еда очень вкусная.', py='Jedá ótschen wkúsnaja.',
      k=[('schmeckt_gut', ['очень вкусная', 'вкусная', 'вкусно'])]),
 dict(de='Gestern habe ich in einem Restaurant gegessen.', ru='Вчера я ел в ресторане.',
      py='Wtscherá ja jel w restaránje.',
      k=[('restaurant', ['ресторане', 'ресторан'])]),
 dict(de='Das war sehr lecker.', ru='Это было очень вкусно.', py='Éta býla ótschen wkúsna.',
      k=[('war_lecker', ['было очень вкусно', 'вкусно'])]),
 dict(de='Das mag ich sehr.', ru='Мне это очень нравится.', py='Mnje éta ótschen nráwitsa.',
      k=[('moegen', ['мне нравится', 'нравится'])]),
 dict(de='Das mag ich nicht.', ru='Мне это не нравится.', py='Mnje éta nje nráwitsa.',
      k=[('nicht_moegen', ['не нравится'])]),
 dict(de='Was ist das für ein Fleisch?', ru='Что это за мясо?', py='Schto éta sa mjássa?',
      k=[('fleisch', ['мясо'])]),
 dict(de='Das ist mir zu salzig.', ru='Для меня это слишком солёно.', py='Dlja menjá éta slíschkam saljóna.',
      k=[('salzig', ['слишком солёно', 'солёно', 'солёное'])]),
 dict(de='Nicht zu salzig, bitte.', ru='Не очень солёно, пожалуйста.', py='Nje ótschen saljóna, pashálusta.',
      k=[('salzig', ['не очень солёно', 'солёно'])]),
 dict(de='Dieses Restaurant ist sehr gut.', ru='Этот ресторан очень хороший.',
      py='État restarán ótschen charóschij.',
      k=[('restaurant_gut', ['ресторан', 'хороший'])]),

# ---------------------------------------------------------- essen_getraenke
 dict(de='Was haben Sie zu trinken?', ru='Что у вас есть из напитков?', py='Schto u was jest is napítkaw?',
      k=[('trinken', ['напитков', 'напитки', 'пить'])]),
 dict(de='Kaltes Wasser, bitte.', ru='Холодную воду, пожалуйста.', py='Chalódnuju wódu, pashálusta.',
      k=[('kalt', ['холодную', 'холодная']),
         ('wasser', ['воду', 'вода'])]),
 dict(de='Heißes Wasser, bitte.', ru='Горячую воду, пожалуйста.', py='Garjátschuju wódu, pashálusta.',
      k=[('heiss', ['горячую', 'горячая']),
         ('wasser', ['воду', 'вода'])]),
 dict(de='Ohne Eis, bitte.', ru='Без льда, пожалуйста.', py='Bes ljda, pashálusta.',
      k=[('ohne_eis', ['без льда', 'льда', 'лёд'])]),
 dict(de='Ein Bier, bitte.', ru='Одно пиво, пожалуйста.', py='Adnó píwa, pashálusta.',
      k=[('bier', ['пиво'])]),
 dict(de='Einen Tee, bitte.', ru='Один чай, пожалуйста.', py='Adín tschaj, pashálusta.',
      k=[('tee', ['чай'])],
      h='Tee ist in Russland das Grundgetränk, nicht Kaffee — und wird '
        'gern mit Zitrone oder einem Löffel Marmelade („варенье") '
        'getrunken.'),
 dict(de='Ohne Zucker, bitte.', ru='Без сахара, пожалуйста.', py='Bes sáchara, pashálusta.',
      k=[('ohne_zucker', ['без сахара', 'сахара'])]),
 dict(de='Noch eins, bitte.', ru='Ещё одно, пожалуйста.', py='Jeschtschó adnó, pashálusta.',
      k=[('noch_eins', ['ещё одно', 'ещё'])]),
 dict(de='Zwei Flaschen, bitte.', ru='Две бутылки, пожалуйста.', py='Dwje butýlki, pashálusta.',
      k=[('zwei', ['две', 'два']),
         ('flaschen', ['бутылки', 'бутылок'])]),
 dict(de='Mit Eis, bitte.', ru='Со льдом, пожалуйста.', py='Sa ljdom, pashálusta.',
      k=[('eis', ['со льдом', 'лёд', 'льдом'])]),
 dict(de='Ein bisschen Zucker, bitte.', ru='Немного сахара, пожалуйста.', py='Nemnóga sáchara, pashálusta.',
      k=[('zucker', ['сахара', 'сахар']),
         ('bisschen', ['немного'])]),
 dict(de='Trinkst du Kaffee oder Tee?', ru='Ты пьёшь кофе или чай?', py='Ty pjosch kófje íli tschaj?',
      k=[('kaffee_tee', ['кофе', 'чай'])]),

# -------------------------------------------------------------- essen_platz
 dict(de='Ich hätte gern einen Tisch für zwei Personen.', ru='Столик на двоих, пожалуйста.',
      py='Stólik na dwaích, pashálusta.',
      k=[('tisch', ['столик', 'стол']),
         ('anzahl_zwei', ['на двоих', 'двоих', 'два'])]),
 dict(de='Haben Sie einen Tisch frei?', ru='У вас есть свободный столик?', py='U was jest swabódnyj stólik?',
      k=[('tisch_frei', ['свободный столик', 'свободный', 'столик'])]),
 dict(de='Ich möchte einen Tisch für morgen Abend reservieren.', ru='Я хочу забронировать столик на завтра вечером.',
      py='Ja chatschú sabranírawat stólik na sáwtra wétscheram.',
      k=[('reservieren', ['забронировать', 'бронь']),
         ('morgen_abend', ['завтра вечером', 'завтра'])]),
 dict(de='Ist dieser Tisch schon reserviert?', ru='Этот столик забронирован?', py='État stólik sabranírawan?',
      k=[('schon_reserviert', ['забронирован', 'занят'])]),
 dict(de='Für wie viele Personen?', ru='На сколько человек?', py='Na skólka tschelawjék?',
      k=[('wie_viele', ['на сколько человек', 'сколько человек'])]),
 dict(de='Können wir draußen sitzen?', ru='Можно сесть на улице?', py='Móshna sjest na úlize?',
      k=[('draussen', ['на улице', 'на террасе', 'улице'])]),
 dict(de='Wir warten.', ru='Мы подождём.', py='My padashdjóm.',
      k=[('warten', ['подождём', 'ждём'])]),
 dict(de='Wie lange müssen wir warten?', ru='Сколько нужно ждать?', py='Skólka núshna shdat?',
      k=[('wie_lange', ['сколько']),
         ('warten', ['ждать', 'нужно ждать'])]),
 dict(de='Zwei Personen.', ru='Два человека.', py='Dwa tschelawjéka.',
      k=[('zwei', ['два', 'двое']),
         ('personen', ['человека', 'человек'])]),

# ----------------------------------------------------------- essen_schaerfe
 dict(de='Ist das scharf?', ru='Это острое?', py='Éta óstraje?',
      k=[('scharf', ['острое', 'остро'])]),
 dict(de='Nicht scharf, bitte.', ru='Не острое, пожалуйста.', py='Nje óstraje, pashálusta.',
      k=[('nicht_scharf', ['не острое', 'острое'])]),
 dict(de='Ein bisschen scharf ist okay.', ru='Немного острого — нормально.', py='Nemnóga óstrawa — narmálna.',
      k=[('bisschen', ['немного'])]),
 dict(de='Ich kann nicht scharf essen.', ru='Я не могу есть острое.', py='Ja nje magú jest óstraje.',
      k=[('nicht_koennen', ['не могу']),
         ('scharf', ['острое'])]),
 dict(de='Das ist zu scharf!', ru='Это слишком остро!', py='Éta slíschkam óstra!',
      k=[('zu_scharf', ['слишком остро', 'остро'])]),
 dict(de='Haben Sie etwas ohne Chili?', ru='У вас есть что-нибудь без перца?',
      py='U was jest schto-nibúd bes pjérza?',
      k=[('ohne_scharf', ['без перца', 'перца', 'не острое'])],
      h='Die russische Küche selbst ist mild — diese Sätze brauchst du '
        'eher im georgischen, usbekischen oder koreanischen Lokal, und '
        'davon gibt es in russischen Städten viele.'),
 dict(de='Wasser, schnell!', ru='Воды, быстро!', py='Wadý, býstra!',
      k=[('wasser', ['воды', 'вода'])]),
 dict(de='Kannst du scharf essen?', ru='Ты можешь есть острое?', py='Ty móshesch jest óstraje?',
      k=[('koennen', ['можешь']),
         ('scharf', ['острое'])]),

# ------------------------------------------------------ essen_strassenessen
 dict(de='Was ist das?', ru='Что это?', py='Schto éta?',
      k=[('was', ['что это'])]),
 dict(de='Ich nehme das.', ru='Я возьму это.', py='Ja wasmú éta.',
      k=[('nehmen', ['возьму', 'взять'])]),
 dict(de='Eine Portion, bitte.', ru='Одну порцию, пожалуйста.', py='Adnú pórziju, pashálusta.',
      k=[('portion', ['порцию', 'порция'])]),
 dict(de='Zwei davon, bitte.', ru='Два таких, пожалуйста.', py='Dwa takích, pashálusta.',
      k=[('zwei', ['два'])]),
 dict(de='Wie viel kostet eine Portion?', ru='Сколько стоит порция?', py='Skólka stóit pórzija?',
      k=[('wieviel', ['сколько стоит', 'сколько'])]),
 dict(de='Zum Mitnehmen, bitte.', ru='С собой, пожалуйста.', py='S sabój, pashálusta.',
      k=[('mitnehmen', ['с собой', 'навынос'])]),
 dict(de='Ich esse hier.', ru='Я буду есть здесь.', py='Ja búdu jest sdjes.',
      k=[('hier', ['здесь']),
         ('essen', ['есть', 'буду есть'])]),
 dict(de='Ist das frisch?', ru='Это свежее?', py='Éta swjésheje?',
      k=[('frisch', ['свежее', 'свежий'])]),
 dict(de='Was essen die anderen?', ru='Что едят остальные?', py='Schto jedját astalnýje?',
      k=[('andere', ['остальные', 'другие'])]),
 dict(de='Das Gleiche, bitte.', ru='То же самое, пожалуйста.', py='To she sámaje, pashálusta.',
      k=[('gleiche', ['то же самое', 'то же'])]),
 dict(de='Zwei Portionen, bitte.', ru='Две порции, пожалуйста.', py='Dwje pórzii, pashálusta.',
      k=[('zwei', ['две', 'два']),
         ('portionen', ['порции', 'порций'])]),
 dict(de='Das ist sehr frisch.', ru='Это очень свежее.', py='Éta ótschen swjésheje.',
      k=[('frisch', ['свежее', 'очень свежее'])]),
 dict(de='Ich möchte das Gleiche.', ru='Я хочу то же самое.', py='Ja chatschú to she sámaje.',
      k=[('gleiche', ['то же самое', 'то же'])]),

# ------------------------------------------------------------- essen_teilen
 dict(de='Wir essen zusammen.', ru='Мы едим вместе.', py='My jedím wmjéstje.',
      k=[('zusammen', ['вместе', 'едим вместе'])]),
 dict(de='Noch eine Schüssel Reis, bitte.', ru='Ещё одну порцию риса, пожалуйста.',
      py='Jeschtschó adnú pórziju rísa, pashálusta.',
      k=[('reis', ['риса', 'рис']),
         ('noch', ['ещё', 'ещё одну'])]),
 dict(de='Iss mehr!', ru='Ешь ещё!', py='Jesch jeschtschó!',
      k=[('mehr_essen', ['ешь ещё', 'ешь', 'ещё'])],
      h='Zum Nachlegen aufgefordert zu werden gehört in Russland zur '
        'Gastfreundschaft — einmal abzulehnen wird oft nicht als '
        'endgültiges Nein verstanden.'),
 dict(de='Ich bin satt.', ru='Я наелся.', py='Ja najélsja.',
      k=[('satt', ['наелся', 'наелась', 'сыт'])]),
 dict(de='Nimm doch!', ru='Угощайся!', py='Ugaschtschájsja!',
      k=[('nimm', ['угощайся', 'бери'])]),
 dict(de='Sollen wir noch etwas bestellen?', ru='Закажем ещё что-нибудь?', py='Sakáshem jeschtschó schto-nibúd?',
      k=[('bestellen', ['закажем', 'заказать']),
         ('noch', ['ещё', 'что-нибудь ещё'])]),
 dict(de='Ich lade dich ein.', ru='Я угощаю.', py='Ja ugaschtscháju.',
      k=[('einladen', ['я угощаю', 'угощаю', 'плачу'])],
      h='Wer einlädt, zahlt — das ist gesetzt und wird nicht lange '
        'verhandelt. Beim nächsten Mal ist der andere dran.'),
 dict(de='Danke fürs Einladen!', ru='Спасибо, что угостил!', py='Spassíba, schto ugastíl!',
      k=[('danke', ['спасибо', 'спасибо что угостил'])]),
 dict(de='Das ist für alle.', ru='Это для всех.', py='Éta dlja wsjech.',
      k=[('alle', ['для всех', 'всех'])]),
 dict(de='Bist du satt?', ru='Ты наелся?', py='Ty najélsja?',
      k=[('satt', ['наелся', 'наелась', 'сыт'])]),
 dict(de='Noch eine Schüssel, bitte.', ru='Ещё одну тарелку, пожалуйста.',
      py='Jeschtschó adnú taréljku, pashálusta.',
      k=[('schuessel', ['тарелку', 'тарелка', 'порцию']),
         ('noch', ['ещё', 'ещё одну'])]),
 dict(de='Heute lade ich ein.', ru='Сегодня я угощаю.', py='Sewódnja ja ugaschtscháju.',
      k=[('heute', ['сегодня']),
         ('einladen', ['угощаю', 'плачу'])]),
 dict(de='Alle zusammen!', ru='Все вместе!', py='Wsje wmjéstje!',
      k=[('alle', ['все']),
         ('zusammen', ['вместе'])]),
 dict(de='Die anderen essen schon.', ru='Остальные уже едят.', py='Astalnýje ushé jedját.',
      k=[('andere', ['остальные', 'другие']),
         ('essen', ['едят'])]),

# ------------------------------------------------------ essen_unvertraeglich
 dict(de='Ich bin Vegetarier.', ru='Я вегетарианец.', py='Ja wegetariánez.',
      k=[('vegetarier', ['вегетарианец', 'вегетарианка'])],
      h='Als Frau: „вегетарианка". Fleischlos zu essen ist in Russland '
        'weniger selbstverständlich als bei uns — außer in der Fastenzeit, '
        'wo „постное" (fastentauglich) auf vielen Karten steht und '
        'praktisch vegan bedeutet.'),
 dict(de='Ich habe eine Allergie gegen Nüsse.', ru='У меня аллергия на орехи.',
      py='U menjá allergíja na aréchi.',
      k=[('allergie', ['аллергия']),
         ('nuesse', ['орехи'])]),
]

AUSGELASSEN = []
