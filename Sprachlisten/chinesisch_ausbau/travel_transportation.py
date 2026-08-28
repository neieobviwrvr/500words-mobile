# -*- coding: utf-8 -*-
"""Travel + Transportation auf Chinesisch (2026-08-22).

Uebersetzung der 32 vorhandenen deutschen Saetze - die groesste der sechs
Kategorien, die auf Chinesisch bei NULL standen.

**Vier Saetze bekommen einen angepassten Gloss** (`de_alt`): wo der deutsche
Satz eine europaeische Stadt nennt, waere die woertliche Uebersetzung fuer
jemanden in China sinnlos. Muenchen wird Peking, Berlin wird Shanghai. Die
Reise-Erinnerungssaetze ("Ich war letztes Jahr in Frankreich") bleiben, wie
sie sind - ueber Europa zu reden ist fuer einen Deutschen in China genau der
Fall, der vorkommt.

**Was beim Uebersetzen auffiel und in die Hinweise gewandert ist:**
- Der Bahnhof heisst 火车站 ("Feuerwagen-Station"), der Hochgeschwindigkeitszug
  faehrt aber vom 高铁站 - zwei verschiedene Bahnhoefe in derselben Stadt.
- Gleise heissen 站台, aber angesagt wird die Wartehalle (候车室) mit Nummer.
- "Ist dieser Platz frei?" ist derselbe Satz wie im Restaurant (有人吗？).
"""

UEBERSETZUNG = True

SAETZE = [
# ---------------------------------------------------------- Fahrkarte kaufen
 dict(sz='reise_ticket', de='Ich möchte eine Fahrkarte nach Peking, bitte.',
      de_alt='Ich möchte eine Fahrkarte nach München, bitte.',
      zh='我要一张去北京的票。', py='wǒ yào yì zhāng qù Běijīng de piào.',
      hinweis=None, neu=['张', '票', '北京'], lookup=False, ansprache=None,
      konzepte=[('ticket', ['票']), ('peking', ['北京'])]),
 dict(sz='reise_ticket', de='Wie viel kostet die Fahrt zum Flughafen?', zh='去机场多少钱？',
      py='qù jīchǎng duōshao qián?',
      hinweis=None, neu=['机场'], lookup=False, ansprache=None,
      konzepte=[('flughafen', ['机场']), ('wieviel', ['多少'])]),
 dict(sz='reise_ticket', de='Ich möchte ein Auto mieten.', de_alt='Ich möchte einen Mietwagen buchen.',
      zh='我想租车。', py='wǒ xiǎng zū chē.',
      hinweis='Als Ausländer braucht man dafür einen chinesischen Führerschein — der internationale gilt nicht. Für die meisten bleibt es beim Roller oder beim Fahrer.',
      neu=['租', '车'], lookup=False, ansprache=None,
      konzepte=[('mieten', ['租']), ('auto', ['车'])]),

# ---------------------------------------------------------- Mit dem Zug
 dict(sz='reise_zug', de='Wo ist der Bahnhof?', zh='火车站在哪里？', py='huǒchēzhàn zài nǎli?',
      hinweis='Achtung: der Schnellzug fährt oft vom 高铁站, einem ganz anderen Bahnhof derselben Stadt. Wer nur „Bahnhof" sagt, landet womöglich am falschen.',
      neu=['火车站'], lookup=False, ansprache=None,
      konzepte=[('bahnhof', ['火车站']), ('wo', ['哪里'])]),
 dict(sz='reise_zug', de='Wann fährt der nächste Zug nach Shanghai?',
      de_alt='Wann fährt der nächste Zug nach Berlin?',
      zh='去上海的车几点走？', py='qù Shànghǎi de chē jǐ diǎn zǒu?',
      hinweis=None, neu=['上海'], lookup=False, ansprache=None,
      konzepte=[('shanghai', ['上海']), ('wann', ['几点'])]),
 dict(sz='reise_zug', de='Der Zug hat Verspätung.', zh='车晚点了。', py='chē wǎndiǎn le.',
      hinweis=None, neu=['晚点'], lookup=False, ansprache=None,
      konzepte=[('verspaetung', ['晚点'])]),
 dict(sz='reise_zug', de='Von welchem Gleis fährt der Zug ab?', zh='在几号站台？',
      py='zài jǐ hào zhàntái?',
      hinweis='Angesagt wird meist die Wartehalle (候车室) mit Nummer, nicht das Gleis — man wartet drinnen und geht erst kurz vor Abfahrt hinaus.',
      neu=['站台'], lookup=False, ansprache=None,
      konzepte=[('gleis', ['站台']), ('welche_nummer', ['几号'])]),
 dict(sz='reise_zug', de='Muss ich umsteigen?', zh='要换车吗？', py='yào huàn chē ma?',
      hinweis=None, neu=['换'], lookup=False, ansprache=None,
      konzepte=[('wechseln', ['换']), ('auto', ['车'])]),
 dict(sz='reise_zug', de='Ist dieser Platz frei?', zh='这个位子有人吗？',
      py='zhège wèizi yǒu rén ma?',
      hinweis='Derselbe Satz wie im Restaurant. Wörtlich „hat dieser Platz einen Menschen?".',
      neu=['位子'], lookup=False, ansprache=None,
      konzepte=[('platz', ['位子']), ('besetzt', ['有人'])]),

# ---------------------------------------------------------- Mit dem Bus
 dict(sz='reise_bus', de='Wo ist die Bushaltestelle?', zh='公交车站在哪里？',
      py='gōngjiāochēzhàn zài nǎli?',
      hinweis=None, neu=['公交车站'], lookup=False, ansprache=None,
      konzepte=[('bus', ['公交车']), ('wo', ['哪里'])]),
 dict(sz='reise_bus', de='Welcher Bus fährt zum Flughafen?', zh='几路车去机场？',
      py='jǐ lù chē qù jīchǎng?',
      hinweis='Buslinien heißen 路 („Weg"), nicht Nummer: die 3 ist 三路车.',
      neu=['路'], lookup=False, ansprache=None,
      konzepte=[('welche_linie', ['几路']), ('flughafen', ['机场'])]),

# ---------------------------------------------------------- Am Flughafen
 dict(sz='reise_flug', de='Wo ist der Check-in-Schalter?', zh='在哪里办登机？',
      py='zài nǎli bàn dēngjī?',
      hinweis=None, neu=['办', '登机'], lookup=False, ansprache=None,
      konzepte=[('wo', ['哪里']), ('einchecken', ['登机'])]),
 dict(sz='reise_flug', de='Wo kann ich mein Gepäck aufgeben?', zh='行李在哪里放？',
      py='xíngli zài nǎli fàng?',
      hinweis=None, neu=['行李', '放'], lookup=False, ansprache=None,
      konzepte=[('gepaeck', ['行李']), ('wo', ['哪里'])]),
 dict(sz='reise_flug', de='Mein Gepäck ist nicht angekommen.', zh='我的行李没到。',
      py='wǒ de xíngli méi dào.',
      hinweis=None, neu=['到'], lookup=False, ansprache=None,
      konzepte=[('gepaeck', ['行李']), ('nicht_angekommen', ['没到'])]),
 dict(sz='reise_flug', de='Ich habe meinen Flug verpasst.', zh='我没赶上飞机。',
      py='wǒ méi gǎnshàng fēijī.',
      hinweis=None, neu=['赶上', '飞机'], lookup=False, ansprache=None,
      konzepte=[('verpasst', ['没赶上']), ('flugzeug', ['飞机'])]),

# ---------------------------------------------------------- Reisepläne
 dict(sz='reise_plaene', de='Nächstes Jahr fahre ich nach Italien.', zh='明年我去意大利。',
      py='míngnián wǒ qù Yìdàlì.',
      hinweis=None, neu=['明年', '意大利'], lookup=False, ansprache=None,
      konzepte=[('naechstes_jahr', ['明年']), ('italien', ['意大利'])]),
 dict(sz='reise_plaene', de='Ich war letztes Jahr in Frankreich.', zh='去年我去了法国。',
      py='qùnián wǒ qù le Fǎguó.',
      hinweis=None, neu=['去年', '法国'], lookup=False, ansprache=None,
      konzepte=[('letztes_jahr', ['去年']), ('frankreich', ['法国'])]),
 dict(sz='reise_plaene', de='Wie komme ich zum Hafen?', zh='怎么去码头？',
      py='zěnme qù mǎtóu?',
      hinweis=None, neu=['码头'], lookup=False, ansprache=None,
      konzepte=[('wie', ['怎么']), ('hafen', ['码头'])]),

# ---------------------------------------------------------- Nach dem Weg fragen
 dict(sz='weg_fragen', de='Entschuldigung, wie komme ich zum Bahnhof?', zh='请问，怎么去火车站？',
      py='qǐngwèn, zěnme qù huǒchēzhàn?',
      hinweis='请问 („darf ich fragen") ist die übliche Eröffnung, wenn man Fremde anspricht — höflicher als gleich loszufragen.',
      neu=['请问'], lookup=False, ansprache=None,
      konzepte=[('wie', ['怎么']), ('bahnhof', ['火车站'])]),
 dict(sz='weg_fragen', de='Ich habe mich verlaufen.', zh='我迷路了。', py='wǒ mílù le.',
      hinweis=None, neu=['迷路'], lookup=False, ansprache=None,
      konzepte=[('verlaufen', ['迷路'])]),
 dict(sz='weg_fragen', de='Ist das weit von hier?', zh='远吗？', py='yuǎn ma?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('weit', ['远'])]),
 dict(sz='weg_fragen', de='Ist das in der Nähe?', zh='近吗？', py='jìn ma?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('nah', ['近'])]),
 dict(sz='weg_fragen', de='Wie weit ist es zu Fuß?', zh='走路要多久？',
      py='zǒulù yào duōjiǔ?',
      hinweis=None, neu=['走路', '多久'], lookup=False, ansprache=None,
      konzepte=[('zu_fuss', ['走路']), ('wie_lange', ['多久'])]),
 dict(sz='weg_fragen', de='Wo ist der nächste Supermarkt?', zh='超市在哪里？',
      py='chāoshì zài nǎli?',
      hinweis=None, neu=['超市'], lookup=False, ansprache=None,
      konzepte=[('supermarkt', ['超市']), ('wo', ['哪里'])]),
 dict(sz='weg_fragen', de='Können Sie mir das auf der Karte zeigen?', zh='可以在地图上指给我看吗？',
      py='kěyǐ zài dìtú shàng zhǐ gěi wǒ kàn ma?',
      hinweis=None, neu=['地图', '指'], lookup=True, ansprache=None,
      konzepte=[('karte', ['地图']), ('zeigen', ['指'])]),
 dict(sz='weg_fragen', de='Können Sie mir den Weg zeigen?', zh='可以带我去吗？',
      py='kěyǐ dài wǒ qù ma?',
      hinweis='Wörtlich „kannst du mich hinbringen?" — in China oft die ehrlichere Bitte, weil Wegbeschreibungen schnell zu schnell werden.',
      neu=['带'], lookup=False, ansprache=None,
      konzepte=[('bringen', ['带'])]),

# ---------------------------------------------------------- Eine Wegbeschreibung verstehen
 dict(sz='weg_beschreiben', de='Gehen Sie geradeaus.', zh='一直走。', py='yìzhí zǒu.',
      hinweis=None, neu=['一直'], lookup=False, ansprache=None,
      konzepte=[('geradeaus', ['一直']), ('gehen', ['走'])]),
 dict(sz='weg_beschreiben', de='Biegen Sie links ab.', zh='左转。', py='zuǒ zhuǎn.',
      hinweis=None, neu=['左', '转'], lookup=False, ansprache=None,
      konzepte=[('links', ['左']), ('abbiegen', ['转'])]),
 dict(sz='weg_beschreiben', de='Biegen Sie rechts ab.', zh='右转。', py='yòu zhuǎn.',
      hinweis=None, neu=['右'], lookup=False, ansprache=None,
      konzepte=[('rechts', ['右']), ('abbiegen', ['转'])]),
 dict(sz='weg_beschreiben', de='Nehmen Sie die zweite Straße rechts.', zh='第二个路口右转。',
      py='dì èr ge lùkǒu yòu zhuǎn.',
      hinweis=None, neu=['第二', '路口'], lookup=True, ansprache=None,
      konzepte=[('zweite', ['第二']), ('rechts', ['右'])]),
 dict(sz='weg_beschreiben', de='Es ist gleich um die Ecke.', zh='就在前面。',
      py='jiù zài qiánmiàn.',
      hinweis=None, neu=['前面'], lookup=False, ansprache=None,
      konzepte=[('vorne', ['前面'])]),
 dict(sz='weg_beschreiben', de='Das Museum liegt gegenüber der Kirche.', zh='博物馆在教堂对面。',
      py='bówùguǎn zài jiàotáng duìmiàn.',
      hinweis=None, neu=['博物馆', '教堂', '对面'], lookup=True, ansprache=None,
      konzepte=[('museum', ['博物馆']), ('gegenueber', ['对面'])]),
]
