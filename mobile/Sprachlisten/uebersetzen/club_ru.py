# -*- coding: utf-8 -*-
"""Club + Nightlife auf Russisch - 138 Saetze, die letzte Kategorie.

Diese Kategorie wurde urspruenglich FUER Chinesisch geschrieben und ist
deshalb die einzige, in der viel nicht mechanisch uebertragbar ist.

**Lautschrift-Regeln** stehen im Kopf von `grundwortschatz_ru.py`.

**SECHS SAETZE FALLEN RAUS, fuenf davon ersetzt (`neu=True`):**

  Bist du aus China?          Zielland im Satz.
  Mein Chinesisch ist nicht   Zielsprache im Satz.
  so gut.
  Lass uns WeChat             In Russland laeuft alles ueber Telegram -
  austauschen.                nicht ueber WhatsApp und nicht ueber
                              Instagram.
  Soll ich dich scannen?      Telegram hat einen QR-Code, die Geste
                              existiert also wirklich - hier als "gib mir
                              deinen Telegram" formuliert, weil das die
                              haeufigere Variante ist.
  Ich zahle mit WeChat.       Bezahlt wird mit Karte bzw. ueber das
                              Schnellzahlsystem `СБП`.

  Du hast eine sehr helle     **Ersatzlos ausgelassen.** In China ein
  Haut.                       echtes Kompliment; in Russland kein
                              gebraeuchliches. Wie bei der Notrufnummer
                              gilt: lieber kein Satz als einer, der
                              danebengeht. **Simon sollte das
                              gegenlesen** - im Chinesischen war die
                              Aufnahme ausdruecklich seine Entscheidung.

**132 uebersetzt, 6 ausgelassen, 5 neu.**

**Das KTV-Szenario passt hier BESSER als in Italien oder Norwegen.**
Karaoke ist in Russland riesig, samt Privatzimmern - alle elf Saetze sind
dort alltagstauglich, anders als in den beiden anderen Sprachen, wo ein
Hinweis noetig war.

**Die Trinkkultur ist die zweite Stelle, an der Russland naeher an China
liegt als an Westeuropa:** man trinkt nicht wortlos, sondern mit
Trinkspruch, und das Ablehnen von Alkohol braucht eine Begruendung. Beides
steht als Hinweis am Satz. Und "за здоровье" ist NICHT der uebliche
Trinkspruch, auch wenn Auslaender das glauben - dazu ebenfalls ein
Hinweis.

**Nicht von Muttersprachlern geprueft.** Bei Anmach- und
Sicherheitssaetzen faellt das besonders ins Gewicht, und die Lautschrift
ist eine zusaetzliche Fehlerquelle.
"""

KATEGORIEN = ['club_nightlife']

SAETZE = [

# --------------------------------------------------------- club_ansprechen
 dict(de='Wie heißt du?', ru='Как тебя зовут?', py='Kak tjebjá sawút?',
      k=[('wie_heisst', ['как тебя зовут', 'зовут'])]),
 dict(de='Gefällt es dir hier auch?', ru='Тебе здесь нравится?', py='Tjebjé sdjes nráwitsa?',
      k=[('gefaellt', ['тебе нравится', 'нравится'])]),
 dict(de='Ich sehe dir gern beim Tanzen zu.', ru='Мне нравится смотреть, как ты танцуешь.',
      py='Mnje nráwitsa smatrjét, kak ty tanzújesch.',
      k=[('tanzen_zusehen', ['как ты танцуешь', 'танцуешь', 'смотреть'])]),
 dict(de='Du bist sehr hübsch.', ru='Ты очень красивая.', py='Ty ótschen krassívaja.',
      k=[('huebsch', ['очень красивая', 'красивая'])]),
 dict(de='Du siehst gut aus.', ru='Ты хорошо выглядишь.', py='Ty charaschó wýgljadisch.',
      k=[('gut_aussehen', ['хорошо выглядишь', 'выглядишь'])]),
 dict(de='Bist du Single?', ru='Ты свободна?', py='Ty swabódna?',
      k=[('single', ['свободна', 'свободен', 'один'])],
      h='Wörtlich „bist du frei" — die übliche Umschreibung. Als Mann '
        'gefragt: „свободен".'),
 dict(de='Ist dein Freund auch hier?', ru='Твой парень тоже здесь?', py='Twoj párjen tósche sdjes?',
      k=[('freund_hier', ['твой парень', 'парень'])]),
 dict(de='Ist deine Freundin auch hier?', ru='Твоя девушка тоже здесь?', py='Twajá djéwuschka tósche sdjes?',
      k=[('freundin_hier', ['твоя девушка', 'девушка'])]),
 dict(de='Wollen wir zusammen tanzen?', ru='Потанцуем вместе?', py='Patanzújem wmjéstje?',
      k=[('tanzen', ['потанцуем', 'танцевать', 'вместе'])]),
 dict(de='Hier ist es zu laut. Gehen wir nach draußen?', ru='Здесь слишком громко. Выйдем на улицу?',
      py='Sdjes slíschkam grómka. Wýjdem na úlizu?',
      k=[('zu_laut', ['слишком громко', 'громко']),
         ('nach_draussen', ['выйдем', 'на улицу'])]),
 dict(de='Die Musik hier ist gut, oder?', ru='Хорошая музыка, правда?', py='Charóschaja músyka, práwda?',
      k=[('musik_gut', ['хорошая музыка', 'музыка'])]),
 dict(de='Kommst du oft hierher?', ru='Ты часто сюда ходишь?', py='Ty tschásta sjudá chódisch?',
      k=[('oft_hier', ['часто сюда', 'часто'])]),
 dict(de='Bist du von hier?', ru='Ты местный?', py='Ty méstnyj?',
      k=[('von_hier', ['местный', 'местная', 'отсюда'])]),
 dict(de='Bist du aus Russland?', ru='Ты из России?', py='Ty is Rassíi?',
      neu=True, sz='club_ansprechen',
      k=[('aus_land', ['из россии', 'россии', 'русская'])]),
 dict(de='Mein Russisch ist nicht so gut.', ru='Мой русский не очень хороший.',
      py='Moj rússkij nje ótschen charóschij.',
      neu=True, sz='club_ansprechen',
      k=[('sprache_nicht_gut', ['мой русский', 'не очень хороший', 'русский'])]),
 dict(de='Lass uns Telegram austauschen.', ru='Давай обменяемся телеграмом?',
      py='Dawáj abmenjájemsja telegrámam?',
      neu=True, sz='club_ansprechen',
      k=[('kontakt_tauschen', ['телеграм', 'телеграмом', 'обменяемся'])],
      h='Telegram ist in Russland der Standardkanal — nicht WhatsApp und '
        'nicht Instagram. Man tauscht den @-Namen, nicht die Nummer.'),
 dict(de='Gibst du mir deinen Telegram?', ru='Дашь свой телеграм?', py='Dasch swoj telegrám?',
      neu=True, sz='club_ansprechen',
      k=[('telegram_geben', ['дашь свой телеграм', 'телеграм'])]),

# ---------------------------------------------------------------- club_bar
 dict(de='Zwei Bier, bitte.', ru='Два пива, пожалуйста.', py='Dwa píwa, pashálusta.',
      k=[('zwei_bier', ['два пива', 'пиво'])]),
 dict(de='Hier ist es zu laut.', ru='Здесь слишком громко.', py='Sdjes slíschkam grómka.',
      k=[('zu_laut', ['слишком громко', 'громко'])]),
 dict(de='Es ist laut, sag es bitte nochmal.', ru='Громко, повтори, пожалуйста.',
      py='Grómka, pawtarí, pashálusta.',
      k=[('nochmal', ['повтори', 'ещё раз'])]),
 dict(de='Was möchtest du trinken?', ru='Что будешь пить?', py='Schto búdjesch pit?',
      k=[('trinken_frage', ['что будешь пить', 'пить'])]),
 dict(de='Haben Sie Wasser?', ru='У вас есть вода?', py='U was jest wadá?',
      k=[('wasser', ['вода', 'воды'])]),
 dict(de='Das ist zu teuer.', ru='Это слишком дорого.', py='Éta slíschkam dóraga.',
      k=[('zu_teuer', ['слишком дорого', 'дорого'])]),
 dict(de='Noch eins, bitte.', ru='Ещё одно, пожалуйста.', py='Jeschtschó adnó, pashálusta.',
      k=[('noch_eins', ['ещё одно', 'ещё'])]),
 dict(de='Das bezahle ich.', ru='Я плачу.', py='Ja platschú.',
      k=[('ich_zahle', ['я плачу', 'я угощаю', 'плачу'])]),
 dict(de='Wo kann ich bezahlen?', ru='Где можно оплатить?', py='Gdje móshna aplatít?',
      k=[('wo_bezahlen', ['где можно оплатить', 'оплатить'])]),
 dict(de='Ich nehme das Gleiche.', ru='Мне то же самое.', py='Mnje to she sámaje.',
      k=[('gleiche', ['то же самое', 'то же'])]),
 dict(de='Was möchten Sie?', ru='Что будете?', py='Schto búdjetje?',
      k=[('was_moechten', ['что будете', 'что желаете'])]),
 dict(de='Ich zahle mit Karte.', ru='Я оплачу картой.', py='Ja aplatschú kártaj.',
      neu=True, sz='club_bar',
      k=[('karte_zahlen', ['картой', 'карта', 'сбп'])],
      h='Neben der Karte ist „СБП" (das Schnellzahlsystem per QR-Code) '
        'weit verbreitet — an der Bar hältst du dafür einfach das Handy '
        'an den Code.'),

# ------------------------------------------------------------ club_einlass
 dict(de='Was kostet der Eintritt?', ru='Сколько стоит вход?', py='Skólka stóit wchod?',
      k=[('eintritt', ['вход'])]),
 dict(de='Ich möchte ein Ticket kaufen.', ru='Я хочу купить билет.', py='Ja chatschú kupít biljét.',
      k=[('ticket', ['билет'])]),
 dict(de='Wir sind zu zweit.', ru='Нас двое.', py='Nas dwóje.',
      k=[('zu_zweit', ['нас двое', 'двое'])]),
 dict(de='Das ist mein Pass.', ru='Это мой паспорт.', py='Éta moj páspart.',
      k=[('pass', ['паспорт'])],
      h='Ausweiskontrolle am Einlass ist Standard, und manche Clubs machen '
        '„фейсконтроль" — eine Auswahl nach Aussehen und Auftreten. Das ist '
        'dort verbreiteter als in Deutschland.'),
 dict(de='Habt ihr heute offen?', ru='Вы сегодня работаете?', py='Wy sewódnja rabótajetje?',
      k=[('offen', ['работаете', 'открыты'])]),
 dict(de='Bis wann habt ihr heute offen?', ru='До скольки вы работаете?', py='Da skalkí wy rabótajetje?',
      k=[('bis_wann', ['до скольки', 'до какого часа'])]),
 dict(de='Ich bin mit Freunden hier.', ru='Я здесь с друзьями.', py='Ja sdjes s drusjámi.',
      k=[('mit_freunden', ['с друзьями', 'друзья'])]),
 dict(de='Kann ich hier bezahlen?', ru='Здесь можно оплатить?', py='Sdjes móshna aplatít?',
      k=[('hier_bezahlen', ['здесь можно оплатить', 'оплатить'])]),
 dict(de='Wo ist die Toilette?', ru='Где туалет?', py='Gdje tualjét?',
      k=[('toilette', ['туалет'])]),
 dict(de='Meine Freunde kommen später.', ru='Мои друзья придут позже.', py='Maí drusjá pridút pósche.',
      k=[('freunde_spaeter', ['придут позже', 'позже', 'друзья'])]),
 dict(de='Ich bin nicht von hier.', ru='Я не местный.', py='Ja nje méstnyj.',
      k=[('nicht_von_hier', ['не местный', 'не местная', 'не отсюда'])]),

# -------------------------------------------------------- club_komplimente
 dict(de='Du siehst heute toll aus.', ru='Ты сегодня отлично выглядишь.',
      py='Ty sewódnja atlítschna wýgljadisch.',
      k=[('toll_aussehen', ['отлично выглядишь', 'выглядишь'])]),
 dict(de='Dein Outfit gefällt mir.', ru='Мне нравится твой образ.', py='Mnje nráwitsa twoj óbras.',
      k=[('outfit', ['твой образ', 'образ', 'наряд'])]),
 dict(de='Deine Haare sind schön.', ru='У тебя красивые волосы.', py='U tjebjá krassívyje wólassy.',
      k=[('haare', ['красивые волосы', 'волосы'])]),
 dict(de='Sind deine Haare neu?', ru='Ты что-то сделала с волосами?',
      py='Ty schto-ta sdjélala s walassámi?',
      k=[('haare_neu', ['сделала с волосами', 'волосами', 'волосы'])]),
 dict(de='Du bist sehr süß.', ru='Ты очень милая.', py='Ty ótschen mílaja.',
      k=[('suess', ['очень милая', 'милая', 'милый'])]),
 dict(de='Du bist groß.', ru='Ты высокий.', py='Ty wyssókij.',
      k=[('gross', ['высокий'])]),
 dict(de='Du bist schlank.', ru='Ты стройная.', py='Ty strójnaja.',
      k=[('schlank', ['стройная', 'стройный'])],
      h='„Стройная" (schlank, gut gebaut) ist in Russland ein echtes '
        'Kompliment und deutlich weniger heikel als in Norwegen — aber '
        '„худая" (dünn) wäre keins, das klingt nach ungesund.'),
 dict(de='Deine Augen sind schön.', ru='У тебя красивые глаза.', py='U tjebjá krassívyje glasá.',
      k=[('augen', ['красивые глаза', 'глаза'])]),
 dict(de='Du hast Klasse.', ru='В тебе есть стиль.', py='W tjebjé jest stil.',
      k=[('klasse', ['стиль', 'есть стиль'])]),
 dict(de='Deine Freundin hat Klasse.', ru='У твоей подруги есть стиль.',
      py='U twajéj padrúgi jest stil.',
      k=[('freundin_klasse', ['твоей подруги', 'подруга', 'стиль'])]),
 dict(de='Ich mag deine Stimme.', ru='Мне нравится твой голос.', py='Mnje nráwitsa twoj gólas.',
      k=[('stimme', ['твой голос', 'голос'])]),
 dict(de='Deine Stimme ist sehr schön.', ru='У тебя очень красивый голос.',
      py='U tjebjá ótschen krassívyj gólas.',
      k=[('stimme_schoen', ['красивый голос', 'голос'])]),
 dict(de='Du tanzt wirklich gut.', ru='Ты правда классно танцуешь.',
      py='Ty práwda klássna tanzújesch.',
      k=[('tanzt_gut', ['классно танцуешь', 'танцуешь'])]),
 dict(de='Ach wo! (bescheidene Antwort auf ein Lob)', ru='Да ну, брось!', py='Da nu, bros!',
      k=[('bescheiden', ['да ну', 'брось', 'да ладно'])],
      h='Russinnen und Russen wehren Komplimente oft erst einmal ab, statt '
        'sie glatt anzunehmen — ein knappes „спасибо" wirkt fast schon '
        'selbstbewusst. Ähnlich wie im Chinesischen, anders als in '
        'Italien.'),
 dict(de='Nein, nein. (auf ein Lob)', ru='Нет-нет.', py='Njet-njet.',
      k=[('abwehr', ['нет-нет', 'нет'])]),
 dict(de='Danke, du aber auch.', ru='Спасибо, ты тоже.', py='Spassíba, ty tósche.',
      k=[('danke_auch', ['спасибо ты тоже', 'ты тоже'])]),
 dict(de='Du hast ein süßes Lächeln.', ru='У тебя милая улыбка.', py='U tjebjá mílaja ulýpka.',
      k=[('laecheln', ['милая улыбка', 'улыбка'])]),
 dict(de='Deine Frisur ist sehr schön.', ru='Тебе очень идёт эта причёска.',
      py='Tjebjé ótschen idjót éta pritschóska.',
      k=[('frisur', ['причёска', 'тебе идёт'])]),

# ---------------------------------------------------------------- club_ktv
 dict(de='Wollen wir Karaoke singen?', ru='Пойдём в караоке?', py='Pajdjóm w karaóke?',
      k=[('karaoke', ['караоке'])],
      h='Karaoke ist in Russland riesig — mit Privatzimmern, wie im '
        'chinesischen KTV. Anders als in Italien oder Norwegen passen '
        'diese Sätze hier eins zu eins.'),
 dict(de='Ich kann nicht singen.', ru='Я не умею петь.', py='Ja nje uméju pjet.',
      k=[('nicht_singen', ['не умею петь', 'петь'])]),
 dict(de='Sing du zuerst.', ru='Спой ты первым.', py='Spoj ty pjérwym.',
      k=[('du_zuerst', ['ты первым', 'первый', 'спой ты'])]),
 dict(de='Welches Lied singst du?', ru='Какую песню будешь петь?', py='Kakúju pjésnju búdjesch pjet?',
      k=[('welches_lied', ['какую песню', 'песню'])]),
 dict(de='Dieses Lied kenne ich!', ru='Эту песню я знаю!', py='Étu pjésnju ja snáju!',
      k=[('kenne_lied', ['эту песню я знаю', 'знаю', 'песню'])]),
 dict(de='Ein Zimmer für vier Personen.', ru='Комнату на четверых.', py='Kómnatu na tschetwerých.',
      k=[('zimmer_vier', ['на четверых', 'четверых', 'комнату'])]),
 dict(de='Wie viel kostet das Zimmer?', ru='Сколько стоит комната?', py='Skólka stóit kómnata?',
      k=[('zimmer_preis', ['сколько стоит комната', 'комната'])]),
 dict(de='Wir bleiben zwei Stunden.', ru='Мы останемся на два часа.', py='My astánemsja na dwa tschassá.',
      k=[('zwei_stunden', ['на два часа', 'два часа'])]),
 dict(de='Du singst sehr gut!', ru='Ты очень хорошо поёшь!', py='Ty ótschen charaschó pajósch!',
      k=[('singst_gut', ['хорошо поёшь', 'поёшь'])]),
 dict(de='Wir singen zusammen.', ru='Споём вместе.', py='Spajóm wmjéstje.',
      k=[('zusammen_singen', ['споём вместе', 'вместе'])]),
 dict(de='Sing noch eins!', ru='Спой ещё одну!', py='Spoj jeschtschó adnú!',
      k=[('noch_eins', ['спой ещё', 'ещё одну'])]),

# ------------------------------------------------------- club_nachtlogistik
 dict(de='Können wir zu dir?', ru='Можем поехать к тебе?', py='Móshem pajéchat k tjebjé?',
      k=[('zu_dir', ['к тебе', 'поехать к тебе'])]),
 dict(de='In meinem Hotel geht das nicht.', ru='В моём отеле так нельзя.',
      py='W majóm atéle tak neljsjá.',
      k=[('hotel_nicht', ['так нельзя', 'в моём отеле', 'отеле'])],
      h='Russische Hotels melden ihre Gäste bei der Migrationsbehörde — '
        'Besuch, der nicht registriert ist, kommt oft schlicht nicht mit '
        'aufs Zimmer.'),
 dict(de='Nehmen wir ein Zimmer.', ru='Давай снимем номер.', py='Dawáj snímem nómer.',
      k=[('zimmer_nehmen', ['снимем номер', 'номер'])]),
 dict(de='Das Zimmer bezahle ich.', ru='За номер плачу я.', py='Sa nómer platschú ja.',
      k=[('zimmer_zahlen', ['за номер плачу я', 'плачу я', 'номер'])]),
 dict(de='Das Hotel will meinen Pass sehen.', ru='Отель хочет посмотреть мой паспорт.',
      py='Atél chótschet pasmatrjét moj páspart.',
      k=[('pass_hotel', ['посмотреть паспорт', 'паспорт'])]),
 dict(de='Ich rufe ein Taxi.', ru='Я вызову такси.', py='Ja wýsawu taksí.',
      k=[('taxi', ['такси', 'вызову такси'])],
      h='Taxi bestellt man per App (Яндекс Go); ein Wagen von der Straße '
        'ist teurer und gilt als weniger sicher.'),
 dict(de='Zuerst zu dir, dann zu mir.', ru='Сначала к тебе, потом ко мне.',
      py='Snatschála k tjebjé, patóm ka mnje.',
      k=[('zuerst_dann', ['сначала к тебе', 'потом ко мне'])]),
 dict(de='Wo wohnst du?', ru='Где ты живёшь?', py='Gdje ty shywjósch?',
      k=[('wo_wohnst', ['где ты живёшь', 'живёшь'])]),
 dict(de='Ist das weit?', ru='Это далеко?', py='Éta daljekó?',
      k=[('weit', ['далеко'])]),
 dict(de='Mein Hotel ist nicht weit.', ru='Мой отель недалеко.', py='Moj atél nedaljekó.',
      k=[('hotel_nah', ['недалеко', 'отель недалеко'])]),
 dict(de='Ich fahre nach Hause.', ru='Я поеду домой.', py='Ja pajédu damój.',
      k=[('nach_hause', ['поеду домой', 'домой'])]),

# ------------------------------------------------------- club_naeherkommen
 dict(de='Ich finde dich sehr nett.', ru='Ты мне очень симпатична.',
      py='Ty mnje ótschen simpatítschna.',
      k=[('nett_finden', ['симпатична', 'симпатичен', 'нравишься'])]),
 dict(de='Ich mag dich.', ru='Ты мне нравишься.', py='Ty mnje nráwischsja.',
      k=[('mag_dich', ['ты мне нравишься', 'нравишься'])]),
 dict(de='Ist das okay für dich?', ru='Тебе так нормально?', py='Tjebjé tak narmálna?',
      k=[('okay', ['нормально', 'так нормально'])]),
 dict(de='Gehen wir woanders hin?', ru='Пойдём в другое место?', py='Pajdjóm w drugóje mjésta?',
      k=[('woanders', ['в другое место', 'другое место'])]),
 dict(de='Ich kenne einen guten Ort.', ru='Я знаю одно хорошее место.',
      py='Ja snáju adnó charóscheje mjésta.',
      k=[('guter_ort', ['хорошее место', 'знаю место'])]),
 dict(de='Zu dir oder zu mir?', ru='К тебе или ко мне?', py='K tjebjé íli ka mnje?',
      k=[('zu_dir_zu_mir', ['к тебе или ко мне', 'к тебе', 'ко мне'])]),
 dict(de='Bier oder Wasser?', ru='Пиво или вода?', py='Píwa íli wadá?',
      k=[('bier_wasser', ['пиво', 'вода'])]),
 dict(de='Ich reise morgen weiter.', ru='Завтра я еду дальше.', py='Sáwtra ja jédu dálsche.',
      k=[('weiterreisen', ['еду дальше', 'дальше'])]),
 dict(de='Gehen wir kurz nach draußen.', ru='Выйдем ненадолго на улицу.',
      py='Wýjdem nenadólga na úlizu.',
      k=[('nach_draussen', ['выйдем', 'на улицу'])]),
 dict(de='Du gefällst mir sehr.', ru='Ты мне очень нравишься.', py='Ty mnje ótschen nráwischsja.',
      k=[('gefaellst_mir', ['очень нравишься', 'нравишься'])]),
 dict(de='Du bist sehr cool.', ru='Ты очень крутой.', py='Ty ótschen krutój.',
      k=[('cool', ['крутой', 'крутая', 'классный'])]),
 dict(de='Ich suche gerade nichts Festes — ich reise bald weiter.',
      ru='Я не ищу ничего серьёзного, скоро уезжаю.',
      py='Ja nje ischtschú nitschewó serjósnawa, skóra ujesháju.',
      k=[('nichts_festes', ['ничего серьёзного', 'не ищу']),
         ('weiterreisen', ['скоро уезжаю', 'уезжаю'])]),
 dict(de='Darf ich mich hierhin setzen?', ru='Можно сесть здесь?', py='Móshna sjest sdjes?',
      k=[('setzen', ['можно сесть', 'сесть'])]),
 dict(de='Deine Hände sind ganz kalt.', ru='У тебя совсем холодные руки.',
      py='U tjebjá safsjém chalódnyje rúki.',
      k=[('haende_kalt', ['холодные руки', 'руки'])]),
 dict(de='Ich bringe dich nach Hause.', ru='Я провожу тебя домой.', py='Ja prawashú tjebjá damój.',
      k=[('nach_hause_bringen', ['провожу тебя домой', 'провожу'])],
      h='Jemanden nach Hause zu begleiten gilt in Russland als '
        'selbstverständliche Höflichkeit, gerade nachts. Entscheidend '
        'bleibt trotzdem die FRAGE (nächster Satz) statt der Ansage.'),
 dict(de='Soll ich dich nach Hause bringen?', ru='Проводить тебя домой?',
      py='Prawadít tjebjá damój?',
      k=[('nach_hause_frage', ['проводить тебя домой', 'проводить'])]),
 dict(de='Wir lassen es langsam angehen.', ru='Давай не будем спешить.',
      py='Dawáj nje búdjem speschýt.',
      k=[('langsam', ['не будем спешить', 'не спешить', 'медленно'])]),
 dict(de='Ich finde dich sehr attraktiv.', ru='Ты очень привлекательная.',
      py='Ty ótschen priwlekátjelnaja.',
      k=[('attraktiv', ['привлекательная', 'привлекательный'])]),
 dict(de='Mit dir zu reden macht Spaß.', ru='С тобой интересно разговаривать.',
      py='S tabój interjésna rasgawáriwat.',
      k=[('reden_spass', ['с тобой интересно', 'интересно разговаривать'])]),

# -------------------------------------------------------- club_sicherheit
 dict(de='Ich gehe jetzt.', ru='Я пойду.', py='Ja pajdú.',
      k=[('gehe_jetzt', ['я пойду', 'пойду'])]),
 dict(de='Mir geht es nicht gut.', ru='Мне нехорошо.', py='Mnje necharaschó.',
      k=[('nicht_gut', ['нехорошо', 'плохо'])]),
 dict(de='Ich möchte nach Hause.', ru='Я хочу домой.', py='Ja chatschú damój.',
      k=[('nach_hause', ['хочу домой', 'домой'])]),
 dict(de='Kannst du mir helfen?', ru='Ты можешь мне помочь?', py='Ty móshesch mnje pamótsch?',
      k=[('helfen', ['мне помочь', 'помочь', 'помоги'])]),
 dict(de='Mein Freund wartet draußen auf mich.', ru='Мой парень ждёт меня на улице.',
      py='Moj párjen shdjot menjá na úlize.',
      k=[('freund_wartet', ['мой парень', 'ждёт меня', 'на улице'])]),
 dict(de='Meine Freundin wartet draußen auf mich.', ru='Моя девушка ждёт меня на улице.',
      py='Majá djéwuschka shdjot menjá na úlize.',
      k=[('freundin_wartet', ['моя девушка', 'ждёт меня', 'на улице'])]),
 dict(de='Lass mich in Ruhe.', ru='Оставь меня в покое.', py='Astáw menjá w pakóje.',
      k=[('in_ruhe', ['оставь меня в покое', 'в покое'])]),
 dict(de='Ich habe kein Interesse. Geh bitte weg.', ru='Мне неинтересно. Уйди, пожалуйста.',
      py='Mnje neinterjésna. Ujdí, pashálusta.',
      k=[('kein_interesse', ['неинтересно', 'не интересно']),
         ('weggehen', ['уйди', 'отойди'])]),
 dict(de='Die Person dort lässt mich nicht in Ruhe.', ru='Тот человек ко мне пристаёт.',
      py='Tot tschelawjék ka mnje pristajót.',
      k=[('person_stoert', ['пристаёт', 'тот человек', 'не оставляет в покое'])],
      h='„Пристаёт" ist das klare Wort für Belästigung und wird vom '
        'Personal sofort verstanden. In russischen Clubs gibt es fast '
        'immer „охрана" (Security) im Inneren.'),
 dict(de='Bitte tu so, als würden wir uns kennen.', ru='Пожалуйста, сделай вид, что мы знакомы.',
      py='Pashálusta, sdjélaj wid, schto my snakómy.',
      k=[('so_tun', ['сделай вид', 'вид']),
         ('kennen', ['мы знакомы', 'знакомы'])]),
 dict(de='Bitte pass kurz auf mein Glas auf.', ru='Присмотри за моим бокалом, пожалуйста.',
      py='Prismatrí sa maím bakálam, pashálusta.',
      k=[('glas_aufpassen', ['присмотри за бокалом', 'бокалом', 'стакан'])]),
 dict(de='Bitte rufen Sie die Polizei.', ru='Вызовите полицию, пожалуйста.',
      py='Wýsawitje políziju, pashálusta.',
      k=[('polizei', ['полицию', 'полиция'])]),
 dict(de='Entschuldigung, ich wusste nicht, dass ihr zusammen seid.',
      ru='Извините, я не знал, что вы вместе.',
      py='Iswinítje, ja nje snal, schto wy wmjéstje.',
      k=[('nicht_gewusst', ['не знал', 'не знала', 'извините']),
         ('zusammen', ['вы вместе', 'вместе'])]),

# ------------------------------------------------------- club_trinkkultur
 dict(de='Prost!', ru='Будем!', py='Búdjem!',
      k=[('prost', ['будем', 'за встречу', 'давай'])],
      h='„За здоровье" ist NICHT der übliche Trinkspruch, auch wenn '
        'Ausländer das glauben — man sagt „будем!" oder nennt einen Anlass: '
        '„за встречу!" (auf das Treffen). Wortlos anzustoßen gilt als '
        'unhöflich.'),
 dict(de='Immer mit der Ruhe - trink so viel du magst.', ru='Не спеши, пей сколько хочешь.',
      py='Nje speschí, pjej skólka chótschesch.',
      k=[('ruhe', ['не спеши', 'спокойно']),
         ('so_viel', ['сколько хочешь', 'сколько'])]),
 dict(de='Ich trinke langsam.', ru='Я пью медленно.', py='Ja pju mjédlenna.',
      k=[('langsam_trinken', ['пью медленно', 'медленно'])]),
 dict(de='Ich kann nicht mehr trinken.', ru='Я больше не могу пить.', py='Ja bólsche nje magú pit.',
      k=[('nicht_mehr', ['больше не могу', 'не могу пить'])]),
 dict(de='Ich muss morgen arbeiten.', ru='Мне завтра на работу.', py='Mnje sáwtra na rabótu.',
      k=[('morgen_arbeiten', ['завтра на работу', 'на работу'])],
      h='Alkohol abzulehnen braucht in Russland meist einen Grund — '
        '„завтра на работу" oder „я за рулём" (ich fahre) sind die '
        'akzeptierten. Ein blankes „nein danke" wird gern überhört.'),
 dict(de='Ich trinke nur ein bisschen.', ru='Я выпью совсем немного.', py='Ja wýpju safsjém nemnóga.',
      k=[('nur_bisschen', ['совсем немного', 'немного'])]),
 dict(de='Was trinkst du?', ru='Что ты пьёшь?', py='Schto ty pjosch?',
      k=[('was_trinkst', ['что ты пьёшь', 'пьёшь'])]),
 dict(de='Ich möchte noch ein Bier.', ru='Я хочу ещё пива.', py='Ja chatschú jeschtschó píwa.',
      k=[('noch_bier', ['ещё пива', 'пива'])]),
 dict(de='Trinken wir zusammen!', ru='Выпьем вместе!', py='Wýpjem wmjéstje!',
      k=[('zusammen_trinken', ['выпьем вместе', 'вместе'])]),
 dict(de='Ich trinke keinen Alkohol.', ru='Я не пью алкоголь.', py='Ja nje pju alkagól.',
      k=[('kein_alkohol', ['не пью алкоголь', 'не пью'])]),
 dict(de='Was kostet das?', ru='Сколько это стоит?', py='Skólka éta stóit?',
      k=[('kosten', ['сколько это стоит', 'сколько стоит'])]),
 dict(de='Ich lade dich ein.', ru='Я угощаю.', py='Ja ugaschtscháju.',
      k=[('einladen', ['я угощаю', 'угощаю'])]),

# ---------------------------------------------------------- club_verloren
 dict(de='Ich finde meine Freunde nicht.', ru='Я не могу найти своих друзей.',
      py='Ja nje magú najtí swaích drusjéj.',
      k=[('freunde_weg', ['не могу найти друзей', 'друзей', 'не могу найти'])]),
 dict(de='Hast du meinen Freund gesehen?', ru='Ты видел моего друга?', py='Ty wídjel majewó drúga?',
      k=[('gesehen', ['ты видел', 'моего друга'])]),
 dict(de='Wo bist du?', ru='Ты где?', py='Ty gdje?',
      k=[('wo_bist', ['ты где', 'где ты'])]),
 dict(de='Ich warte hier auf dich.', ru='Я жду тебя здесь.', py='Ja shdu tjebjá sdjes.',
      k=[('warte_hier', ['жду тебя здесь', 'жду тебя'])]),
 dict(de='Mein Handy hat keinen Strom mehr.', ru='У меня телефон сел.', py='U menjá teljefón sjel.',
      k=[('handy_leer', ['телефон сел', 'сел', 'разрядился'])],
      h='„Телефон сел" — wörtlich „das Telefon hat sich gesetzt". Das ist '
        'die normale Wendung für einen leeren Akku.'),
 dict(de='Wo kann ich mein Handy laden?', ru='Где можно зарядить телефон?',
      py='Gdje móshna sarjadít teljefón?',
      k=[('handy_laden', ['зарядить телефон', 'зарядить'])]),
 dict(de='Ich muss mein Handy laden.', ru='Мне нужно зарядить телефон.',
      py='Mnje núshna sarjadít teljefón.',
      k=[('handy_laden', ['нужно зарядить', 'зарядить телефон'])]),
 dict(de='Kann ich dein Handy benutzen?', ru='Можно воспользоваться твоим телефоном?',
      py='Móshna waspólsawatsa twaím teljefónam?',
      k=[('handy_benutzen', ['воспользоваться телефоном', 'твоим телефоном'])]),
 dict(de='Ich rufe dich an.', ru='Я тебе позвоню.', py='Ja tjebjé pasvanjú.',
      k=[('anrufen', ['я тебе позвоню', 'позвоню'])]),
 dict(de='Wir treffen uns draußen.', ru='Встретимся на улице.', py='Wstrjétimsja na úlize.',
      k=[('treffen_draussen', ['встретимся на улице', 'на улице'])]),
 dict(de='Bis morgen!', ru='До завтра!', py='Da sáwtra!',
      k=[('bis_morgen', ['до завтра', 'завтра'])]),
 dict(de='Ich nehme ein Taxi nach Hause.', ru='Я поеду домой на такси.',
      py='Ja pajédu damój na taksí.',
      k=[('taxi_heim', ['домой на такси', 'такси', 'домой'])]),
 dict(de='Entschuldigung, ich habe meine Freunde verloren und mein Handy ist leer. Können Sie mir helfen?',
      ru='Извините, я потерял друзей, и телефон сел. Вы можете мне помочь?',
      py='Iswinítje, ja patjerjál drusjéj, i teljefón sjel. Wy móshetje mnje pamótsch?',
      k=[('freunde_verloren', ['потерял друзей', 'потеряла друзей', 'друзей']),
         ('handy_leer', ['телефон сел', 'сел']),
         ('helfen', ['можете мне помочь', 'помочь'])]),
]

AUSGELASSEN = [
    # Zielland bzw. Zielsprache steht im Satz - ersetzt durch die
    # russischen Fassungen (neu=True oben).
    'Bist du aus China?',
    'Mein Chinesisch ist nicht so gut.',
    # WeChat gibt es in Russland nicht - ersetzt durch Telegram bzw. Karte.
    'Lass uns WeChat austauschen.',
    'Ich zahle mit WeChat.',
    'Soll ich dich scannen?',
    # ERSATZLOS ausgelassen: helle Haut ist in China ein Kompliment, in
    # Russland kein gebraeuchliches. Siehe Kopfkommentar; Simon sollte das
    # gegenlesen.
    'Du hast eine sehr helle Haut.',
]
