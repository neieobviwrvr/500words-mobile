# -*- coding: utf-8 -*-
"""Grundwortschatz auf Russisch - die ersten Saetze der Sprache.

Italienisch, Norwegisch und Russisch kamen am 2026-09-03 zusammen dazu
(Simons Auftrag). Das hier ist der freie Teil, den jeder Nutzer bekommt.

**Russisch ist die einzige neue Sprache mit eigener Schrift** und damit die
einzige, die eine Lautschrift braucht (`py=`, landet in
`russisch_phrasebook.lautschrift`). Dieselbe Rolle wie Pinyin bei
Chinesisch: Kyrillisch ist Infrastruktur (TTS braucht es, Speechmatics gibt
es zurueck), GELERNT wird ueber die Lautschrift. Ohne sie staende ein
Anfaenger bei jedem Satz vor "Извините, где туалет?".

**Die Lautschrift ist deutsch gelesen, nicht wissenschaftlich.** Kein ISO 9,
kein englisches BGN/PCGN - der Nutzer ist Deutscher und soll die Zeile laut
vorlesen koennen und dabei verstanden werden. Also ш=sch, ч=tsch, ж=sh,
х=ch, в=w, з=s, ц=z, ы=y, я=ja, ю=ju.

Zwei Dinge, die eine reine Buchstaben-Umschrift NICHT leisten wuerde und
die hier bewusst mit drin sind:

  **Betonung** steht als Akzent (spassíba). Russisch hat freie Betonung,
  und die falsche Silbe macht ein Wort schwerer verstaendlich als ein
  falscher Laut.

  **Vokalreduktion ist mitgeschrieben.** Unbetontes о klingt wie a, deshalb
  steht "spassíba" und nicht "spassibo", "charaschó" und nicht "choroscho".
  Wer die Schrift-zu-Buchstabe-Umschrift liest, klingt sofort nach
  Lehrbuch; wer das hier liest, klingt naeher am Gesprochenen.

  Ein paar Woerter schreiben sich zusaetzlich anders, als sie klingen -
  что="schto", конечно="kanjéschna", сегодня="sewódnja", ничего="nitschewó"
  (г wird zu w). Das ist keine Nachlaessigkeit in der Umschrift, das ist die
  richtige Aussprache; wo es auffaellt, steht ein Hinweis am Satz.

**Zwei Saetze fallen raus**, dieselben zwei wie in jeder anderen Sprache:
"Ich spreche ein bisschen Deutsch." und "Wie sagt man das auf Deutsch?"
tragen die ZIELSPRACHE im Satz und sind woertlich uebersetzt nutzlos -
ersetzt durch die russische Fassung (`neu=True`).

**Du und Sie gibt es wie im Deutschen** (ты/вы) und die Grenze liegt
aehnlich - das ist die eine Stelle, an der Russisch fuer Deutsche
einfacher ist als Norwegisch (das gar nicht siezt). Grundlinie hier: **ты**
unter Gleichaltrigen, **вы** gegenueber Fremden und Personal.

`verb_cluster` bleibt leer - `answer_clusters` hat keine russischen Cluster.

**Nicht von Muttersprachlern geprueft.** Bei Russisch faellt das staerker
ins Gewicht als bei den lateinschriftlichen Sprachen: die Lautschrift ist
eine zusaetzliche Fehlerquelle, die niemand gegenlesen hat.
"""

SAETZE = [

# ---------------------------------------------------------------- Begrüßung
 dict(de='Hallo!', ru='Привет!', py='Priwjét!',
      k=[('hallo', ['привет', 'приветик'])],
      h='„Привет" ist das Du-Hallo unter Gleichaltrigen. Gegenüber Fremden, '
        'Personal oder Älteren sagt man „здравствуйте" (sdrástwujtje) — '
        'sperrig, aber die sichere Wahl.'),
 dict(de='Guten Morgen!', ru='Доброе утро!', py='Dóbraje útra!',
      k=[('morgen_gruss', ['доброе утро'])]),
 dict(de='Guten Tag!', ru='Добрый день!', py='Dóbryj djen!',
      k=[('tag_gruss', ['добрый день'])]),
 dict(de='Guten Abend!', ru='Добрый вечер!', py='Dóbryj wétscher!',
      k=[('abend_gruss', ['добрый вечер'])]),
 dict(de='Wie geht es dir?', ru='Как дела?', py='Kak djelá?',
      k=[('wie_gehts', ['как дела', 'как ты', 'как жизнь'])]),
 dict(de='Mir geht es gut, danke.', ru='Хорошо, спасибо.', py='Charaschó, spassíba.',
      k=[('gut_danke', ['хорошо', 'хорошо спасибо', 'нормально'])],
      h='„Нормально" (narmálna) heißt wörtlich „normal" und ist die '
        'häufigste ehrliche Antwort — kein Understatement, sondern schlicht '
        '„passt schon".'),
 dict(de='Auf Wiedersehen!', ru='До свидания!', py='Da swidánija!',
      k=[('wiedersehen', ['до свидания'])]),
 dict(de='Bis später!', ru='До скорого!', py='Da skórawa!',
      k=[('bis_spaeter', ['до скорого', 'до встречи', 'увидимся'])]),
 dict(de='Tschüss!', ru='Пока!', py='Paká!',
      k=[('tschuess', ['пока'])]),

# --------------------------------------------------------------- Höflichkeit
 dict(de='Danke!', ru='Спасибо!', py='Spassíba!',
      k=[('danke', ['спасибо'])]),
 dict(de='Vielen Dank!', ru='Большое спасибо!', py='Balschóje spassíba!',
      k=[('danke', ['большое спасибо', 'огромное спасибо'])]),
 dict(de='Gern geschehen.', ru='Пожалуйста.', py='Pashálusta.',
      k=[('gern_geschehen', ['пожалуйста', 'не за что'])],
      h='Dasselbe Wort heißt „bitte" (beim Bitten) UND „gern geschehen" '
        '(als Antwort auf danke) — man muss es nur einmal lernen. Gesprochen '
        'fallen Silben weg: „pashálusta", nicht „poshalujsta".'),
 dict(de='Entschuldigung!', ru='Извините!', py='Iswinítje!',
      k=[('entschuldigung', ['извините', 'простите', 'извини'])],
      h='„Извините" ist das Sie, „извини" das Du.'),
 dict(de='Es tut mir leid.', ru='Мне очень жаль.', py='Mnje ótschen shal.',
      k=[('leid', ['мне жаль', 'очень жаль', 'жаль'])]),
 dict(de='Kein Problem.', ru='Ничего страшного.', py='Nitschewó stráschnawa.',
      k=[('kein_problem', ['ничего страшного', 'без проблем'])],
      h='„Ничего" wird „nitschewó" gesprochen — das г klingt hier wie ein w. '
        'Gleiche Eigenheit wie bei „сегодня" (sewódnja).'),
 dict(de='Ja.', ru='Да.', py='Da.',
      k=[('ja', ['да'])]),
 dict(de='Nein.', ru='Нет.', py='Njet.',
      k=[('nein', ['нет'])]),
 dict(de='Ich weiß nicht.', ru='Я не знаю.', py='Ja nje snáju.',
      k=[('nicht_wissen', ['не знаю', 'я не знаю'])]),

# ------------------------------------------------------------------ Kommentar
 dict(de='Wirklich?', ru='Правда?', py='Práwda?',
      k=[('wirklich', ['правда', 'серьёзно', 'неужели'])]),
 dict(de='Cool!', ru='Круто!', py='Krúta!',
      k=[('cool', ['круто', 'классно', 'клёво'])]),
 dict(de='Macht nichts.', ru='Не важно.', py='Nje wáshna.',
      k=[('macht_nichts', ['не важно', 'ничего', 'ладно'])]),
 dict(de='Genau!', ru='Именно!', py='Ímenna!',
      k=[('genau', ['именно', 'точно'])]),
 dict(de='Stimmt.', ru='Верно.', py='Wjérna.',
      k=[('stimmt', ['верно', 'точно', 'это правда'])]),
 dict(de='Schade!', ru='Жаль!', py='Shal!',
      k=[('schade', ['жаль', 'как жаль'])]),
 dict(de='Na klar!', ru='Конечно!', py='Kanjéschna!',
      k=[('na_klar', ['конечно', 'разумеется'])],
      h='Geschrieben steht ein ч, gesprochen wird ein sch: „kanjéschna". '
        'Eines der wenigen Wörter, bei denen die Schrift bewusst lügt.'),
 dict(de='Auf keinen Fall!', ru='Ни в коем случае!', py='Ni w kójem slútschaje!',
      k=[('auf_keinen_fall', ['ни в коем случае', 'ни за что'])]),

# -------------------------------------------------------------------- Notlage
 dict(de='Wo ist die Toilette?', ru='Где туалет?', py='Gdje tualjét?',
      k=[('toilette', ['туалет'])]),
 dict(de='Hilfe!', ru='Помогите!', py='Pamagítje!',
      k=[('hilfe', ['помогите', 'на помощь'])]),
 dict(de='Ich brauche Hilfe.', ru='Мне нужна помощь.', py='Mnje nushná pómasch.',
      k=[('brauchen', ['мне нужна', 'нужна']),
         ('hilfe', ['помощь'])]),
 dict(de='Wo ist der Ausgang?', ru='Где выход?', py='Gdje wýchad?',
      k=[('ausgang', ['выход']),
         ('wo', ['где'])]),
 dict(de='Ich habe mein Handy verloren.', ru='Я потерял телефон.', py='Ja patjerjál teljefón.',
      k=[('handy', ['телефон', 'мобильный']),
         ('verloren', ['потерял', 'потеряла'])],
      h='Als Frau sagst du „потеряла" (patjerjála) — die Vergangenheitsform '
        'richtet sich im Russischen nach dem Geschlecht des Sprechers, nicht '
        'nach dem Gegenüber. Betrifft jeden Satz in der Vergangenheit.'),
 dict(de='Ich habe meinen Pass verloren.', ru='Я потерял паспорт.', py='Ja patjerjál páspart.',
      k=[('pass', ['паспорт']),
         ('verloren', ['потерял', 'потеряла'])]),
 dict(de='Entschuldigung, wo ist die Toilette?', ru='Извините, где туалет?', py='Iswinítje, gdje tualjét?',
      k=[('entschuldigung', ['извините', 'простите']),
         ('toilette', ['туалет'])]),

# --------------------------------------------------------------------- Termin
 dict(de='Wann hast du Zeit?', ru='Когда у тебя есть время?', py='Kagdá u tjebjá jest wrjémja?',
      k=[('wann_zeit', ['когда у тебя есть время', 'когда ты свободен', 'когда можешь'])]),
 dict(de='Ich habe morgen keine Zeit.', ru='Завтра у меня нет времени.', py='Sáwtra u menjá njet wrjémeni.',
      k=[('keine_zeit', ['нет времени', 'не могу'])]),
 dict(de='Können wir uns nächste Woche treffen?', ru='Можем встретиться на следующей неделе?',
      py='Móshem wstrjétitsa na slédujuschtschej nedjélje?',
      k=[('treffen', ['встретиться', 'встретимся'])]),
 dict(de='Ich habe einen Termin um 10 Uhr.', ru='У меня встреча в десять часов.',
      py='U menjá wstrjétscha w djésjat tschassów.',
      k=[('termin', ['встреча']),
         ('zehn_uhr', ['в десять', 'десять часов'])]),
 dict(de='Wann hast du Geburtstag?', ru='Когда у тебя день рождения?', py='Kagdá u tjebjá djen roshdjénija?',
      k=[('geburtstag_frage', ['когда у тебя день рождения', 'день рождения'])]),
 dict(de='Mein Geburtstag ist im März.', ru='Мой день рождения в марте.', py='Moj djen roshdjénija w mártje.',
      k=[('geburtstag', ['день рождения']),
         ('maerz', ['в марте', 'марте', 'март'])]),

# -------------------------------------------------------------------- Uhrzeit
 dict(de='Wie spät ist es?', ru='Сколько времени?', py='Skólka wrjémeni?',
      k=[('wie_spaet', ['сколько времени', 'который час'])]),
 dict(de='Es ist drei Uhr.', ru='Сейчас три часа.', py='Sitschás tri tschassá.',
      k=[('uhrzeit', ['три часа', 'сейчас три'])]),
 dict(de='Um wie viel Uhr beginnt der Film?', ru='Во сколько начинается фильм?',
      py='Wa skólka natschinájetsa film?',
      k=[('beginn_frage', ['во сколько начинается', 'когда начинается']),
         ('film', ['фильм'])]),
 dict(de='Welcher Tag ist heute?', ru='Какой сегодня день?', py='Kakój sewódnja djen?',
      k=[('welcher_tag', ['какой сегодня день', 'какой день'])],
      h='„Сегодня" wird „sewódnja" gesprochen — wieder das г, das wie ein w '
        'klingt.'),
 dict(de='Heute ist Montag.', ru='Сегодня понедельник.', py='Sewódnja panedjélnik.',
      k=[('tag', ['понедельник'])]),
 dict(de='Wir bleiben fünf Minuten.', ru='Мы останемся на пять минут.', py='My astánemsja na pjat minút.',
      k=[('bleiben', ['останемся', 'остаёмся']),
         ('fuenf_minuten', ['пять минут'])]),

# --------------------------------------------------------------- Verständigen
 dict(de='Sprichst du Englisch?', ru='Ты говоришь по-английски?', py='Ty gawarísch pa-anglíjski?',
      k=[('sprache_frage', ['говоришь по-английски', 'по-английски'])],
      h='Außerhalb von Moskau und Petersburg trifft man mit Englisch oft ins '
        'Leere — mehr noch als in Italien. Die paar Brocken Russisch sind hier '
        'kein Höflichkeitsbonus, sondern der Unterschied zwischen Gespräch '
        'und keinem Gespräch.'),
 dict(de='Kannst du bitte langsamer sprechen?', ru='Можешь говорить медленнее?', py='Móshesch gawarít mjédlenneje?',
      k=[('langsamer', ['медленнее', 'помедленнее'])]),
 dict(de='Ich verstehe das nicht.', ru='Я не понимаю.', py='Ja nje panimáju.',
      k=[('nicht_verstehen', ['не понимаю', 'я не понимаю'])]),
 dict(de='Kannst du das bitte wiederholen?', ru='Можешь повторить?', py='Móshesch pawtarít?',
      k=[('wiederholen', ['повторить', 'повтори', 'ещё раз'])]),
 dict(de='Was heißt das?', ru='Что это значит?', py='Schto éta snátschit?',
      k=[('heissen', ['что это значит', 'что значит'])],
      h='„Что" wird „schto" gesprochen, nicht „tschto" — eines der ersten '
        'Wörter, an dem man Anfänger erkennt.'),
 dict(de='Können Sie das bitte aufschreiben?', ru='Можете записать это?', py='Móshetje sapissát éta?',
      k=[('aufschreiben', ['записать', 'напишите', 'запишите'])]),
 dict(de='Bitte sag es noch einmal.', ru='Скажи ещё раз, пожалуйста.', py='Skashí jeschtschó ras, pashálusta.',
      k=[('noch_einmal', ['ещё раз', 'повтори'])]),
 dict(de='Ich spreche ein bisschen Russisch.', ru='Я немного говорю по-русски.',
      py='Ja nemnóga gawarjú pa-rússki.',
      neu=True, sz='verstaendigen',
      k=[('bisschen_sprache', ['немного по-русски', 'немного говорю', 'немного'])]),
 dict(de='Wie sagt man das auf Russisch?', ru='Как это будет по-русски?', py='Kak éta búdjet pa-rússki?',
      neu=True, sz='verstaendigen',
      k=[('wie_sagt_man', ['как это будет', 'как сказать']),
         ('sprache', ['по-русски', 'русски'])]),

# ---------------------------------------------------------------- Vorstellung
 dict(de='Wie heißt du?', ru='Как тебя зовут?', py='Kak tjebjá sawút?',
      k=[('wie_heisst', ['как тебя зовут', 'как вас зовут'])],
      h='Wörtlich „wie nennen sie dich" — einen Satz mit „ich heiße" gibt es '
        'im Russischen nicht, es läuft immer über diese Wendung.'),
 dict(de='Ich heiße Anna.', ru='Меня зовут Анна.', py='Menjá sawút Ánna.',
      k=[('heisse_x', ['меня зовут'])]),
 dict(de='Woher kommst du?', ru='Откуда ты?', py='Atkúda ty?',
      k=[('woher', ['откуда ты', 'откуда вы', 'откуда'])]),
 dict(de='Ich komme aus Deutschland.', ru='Я из Германии.', py='Ja is Germánii.',
      k=[('komme_aus', ['из германии', 'германии'])]),
 dict(de='Wie alt bist du?', ru='Сколько тебе лет?', py='Skólka tjebjé ljet?',
      k=[('wie_alt', ['сколько тебе лет', 'сколько вам лет'])]),
 dict(de='Ich bin 25 Jahre alt.', ru='Мне двадцать пять лет.', py='Mnje dwádzat pjat ljet.',
      k=[('alter', ['двадцать пять', '25 лет'])],
      h='Wörtlich „mir sind 25 Jahre" — das Alter steht im Dativ, ein „ich '
        'bin" gibt es hier nicht.'),
 dict(de='Freut mich, dich kennenzulernen.', ru='Приятно познакомиться.', py='Prijátna pasnakómitsa.',
      k=[('freut_mich', ['приятно познакомиться', 'очень приятно'])]),
 dict(de='Das ist mein Freund.', ru='Это мой друг.', py='Éta moj drug.',
      k=[('freund', ['мой друг', 'друг'])],
      h='„Друг" ist der Freund im Sinne von Kumpel. Der feste Freund heißt '
        '„парень", die feste Freundin „девушка" — wer „друг" sagt, sagt '
        'ausdrücklich, dass da nichts läuft.'),
 dict(de='Ich bin zum ersten Mal hier.', ru='Я здесь первый раз.', py='Ja sdjes pjérwyj ras.',
      k=[('erstes_mal', ['первый раз', 'впервые'])]),
 dict(de='Seid ihr Studenten?', ru='Вы студенты?', py='Wy studjénty?',
      k=[('studenten_frage', ['вы студенты', 'студенты'])]),

# ---------------------------------------------------------------------- Zahlen
 dict(de='Wie viel kostet das?', ru='Сколько это стоит?', py='Skólka éta stóit?',
      k=[('kosten_frage', ['сколько это стоит', 'сколько стоит'])]),
 dict(de='Das kostet zehn Euro.', ru='Это стоит десять евро.', py='Éta stóit djésjat jéwra.',
      k=[('preis', ['десять евро'])],
      h='Gezahlt wird in Rubel („рубль", rubl) — Euro versteht man, nehmen '
        'tut sie außerhalb von Wechselstuben niemand.'),
 dict(de='Ich hätte gern die Rechnung.', ru='Счёт, пожалуйста.', py='Schtschot, pashálusta.',
      k=[('rechnung', ['счёт', 'счет'])]),
 dict(de='Eins, zwei, drei.', ru='Один, два, три.', py='Adín, dwa, tri.',
      k=[('zaehlen', ['один два три', 'один', 'два', 'три'])]),
 dict(de='Wie viele?', ru='Сколько?', py='Skólka?',
      k=[('wie_viele', ['сколько'])]),
 dict(de='Zwei Stück, bitte.', ru='Два, пожалуйста.', py='Dwa, pashálusta.',
      k=[('zwei', ['два']),
         ('bitte', ['пожалуйста'])]),
 dict(de='Nur eins, bitte.', ru='Только один, пожалуйста.', py='Tólka adín, pashálusta.',
      k=[('eins', ['только один', 'один'])]),
 dict(de='Das ist genug.', ru='Этого достаточно.', py='Étawa dastátatschna.',
      k=[('genug', ['достаточно', 'хватит'])]),
 dict(de='Wie viel ist das zusammen?', ru='Сколько всего?', py='Skólka wsewó?',
      k=[('zusammen', ['всего', 'в общем']),
         ('wieviel', ['сколько'])]),
 dict(de='Wir sind vier Personen.', ru='Нас четверо.', py='Nas tschétwera.',
      k=[('vier', ['четверо', 'четыре']),
         ('personen', ['нас четверо', 'нас', 'человека'])],
      h='„Нас четверо" heißt wörtlich „unser sind vier" — die übliche Form, '
        'wenn man im Restaurant sagt, zu wievielt man ist.'),
 dict(de='Ich habe nur eins.', ru='У меня только один.', py='U menjá tólka adín.',
      k=[('nur_eins', ['только один', 'один'])]),
]

AUSGELASSEN = [
    # Zielsprache steht im Satz - ersetzt durch die russischen Fassungen.
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
