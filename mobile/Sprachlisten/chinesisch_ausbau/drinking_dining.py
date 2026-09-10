# -*- coding: utf-8 -*-
"""Drinking + Dining auf Chinesisch (2026-08-22).

Uebersetzung der 19 deutschen Saetze, die es seit dem 2026-08-04 gibt.
Chinesisch hatte fuer diese Kategorie bisher NULL.

`UEBERSETZUNG = True`: der Quellsatz steht fest, man kann ihn nicht
umschreiben, damit weniger neue Woerter noetig sind. "baubar" ist deshalb
eine Messung, kein Urteil - verbindlich bleiben Satzlaenge und die
vollstaendige Deklaration neuer Vokabeln.

**Zwei Saetze bekommen einen angepassten deutschen Gloss** (`de_alt` haelt
fest, woraus sie hervorgehen). Dieselbe Regel wie beim Grundwortschatz: wo
der deutsche Satz eine Waehrung, eine Sprache oder eine europaeische
Gepflogenheit nennt, waere die woertliche Uebersetzung im Zielland sinnlos.

**Was in China anders laeuft** und deshalb im Kulturhinweis steht:
- Getrennt zahlen (AA制) ist unter jungen Leuten inzwischen normal, in
  aelteren Runden aber ein Affront - dort zahlt einer fuer alle.
- "Guten Appetit" gibt es nicht als feste Formel. Man sagt 慢慢吃
  ("iss langsam") oder fordert einfach zum Essen auf.
- Ungefragt servierter Tee oder Nuesse werden mancherorts berechnet -
  daher der Satz "Zaehlt das auch als Geld?".
"""

UEBERSETZUNG = True

SAETZE = [
# ---------------------------------------------------------- Einen Tisch bekommen
 dict(sz='essen_platz', de='Haben Sie noch einen freien Tisch?', zh='您有位子吗？', py='nín yǒu wèizi ma?',
      hinweis=None, neu=['位子'], lookup=False, ansprache=None,
      konzepte=[('haben', ['有']), ('platz', ['位子'])]),
 dict(sz='essen_platz', de='Ich hätte gern einen Tisch für zwei Personen.', zh='两个人。',
      py='liǎng ge rén.',
      hinweis='Mehr sagt man beim Reingehen nicht. Gefragt wird 几位？ („wie viele?"), die Antwort ist die blanke Zahl.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('zwei', ['两']), ('personen', ['人'])]),
 dict(sz='essen_platz', de='Ist dieser Tisch schon reserviert?', zh='这个位子有人吗？',
      py='zhège wèizi yǒu rén ma?',
      hinweis='Wörtlich „hat dieser Platz einen Menschen?" — dieselbe Frage stellt man auch im Zug und im Bus.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('platz', ['位子']), ('besetzt', ['有人'])]),
 dict(sz='essen_platz', de='Können Sie mir bitte einen Tisch für morgen reservieren?',
      zh='我想请您帮我订明天的位子。', py='wǒ xiǎng qǐng nín bāng wǒ dìng míngtiān de wèizi.',
      hinweis=None, neu=['订'], lookup=False, ansprache=None,
      konzepte=[('reservieren', ['订']), ('morgen', ['明天'])]),

# ---------------------------------------------------------- Bestellen
 dict(sz='essen_bestellen', de='Die Speisekarte, bitte.', zh='菜单，谢谢。', py='càidān, xièxie.',
      hinweis=None, neu=['菜单'], lookup=False, ansprache=None,
      konzepte=[('speisekarte', ['菜单'])]),
 dict(sz='essen_bestellen', de='Ich möchte etwas bestellen.', zh='我要点菜。', py='wǒ yào diǎn cài.',
      hinweis='点菜 ist der feste Ausdruck fürs Bestellen — wörtlich „Gerichte antippen", was in vielen Lokalen inzwischen stimmt: bestellt wird per Handy am Tisch.',
      neu=['点菜', '菜'], lookup=False, ansprache=None,
      konzepte=[('bestellen', ['点菜', '点'])]),
 dict(sz='essen_bestellen', de='Was empfehlen Sie?', zh='有什么好吃的？', py='yǒu shénme hǎochī de?',
      hinweis='Wörtlich „was gibt es Gutschmeckendes?" — die übliche Frage. Nach einer Empfehlung zu fragen wie im Deutschen wirkt umständlich.',
      neu=['好吃'], lookup=False, ansprache=None,
      konzepte=[('was', ['什么']), ('lecker', ['好吃'])]),
 dict(sz='essen_bestellen', de='Ich hätte gern ein Wasser, bitte.', zh='我要一杯水。',
      py='wǒ yào yì bēi shuǐ.',
      hinweis=None, neu=['杯'], lookup=False, ansprache=None,
      konzepte=[('wollen', ['要']), ('wasser', ['水'])]),
 dict(sz='essen_bestellen', de='Was möchten Sie trinken?', zh='您要喝什么？', py='nín yào hē shénme?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('trinken', ['喝']), ('was', ['什么'])]),

# ---------------------------------------------------------- Über das Essen reden
 dict(sz='essen_geschmack', de='Das Essen schmeckt sehr gut.', zh='很好吃。', py='hěn hǎochī.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('lecker', ['好吃'])]),
 dict(sz='essen_geschmack', de='Das war sehr lecker.', zh='太好吃了！', py='tài hǎochī le!',
      hinweis='太…了 ist die übliche Steigerung — „zu gut", im positiven Sinn. Klingt lebendiger als 很.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('lecker', ['好吃'])]),
 dict(sz='essen_geschmack', de='Gestern habe ich in einem Restaurant gegessen.',
      zh='我昨天在饭馆吃了。', py='wǒ zuótiān zài fànguǎn chī le.',
      hinweis=None, neu=['饭馆'], lookup=False, ansprache=None,
      konzepte=[('gestern', ['昨天']), ('essen', ['吃'])]),
 dict(sz='essen_geschmack', de='Lass es dir schmecken!', de_alt='Guten Appetit!',
      zh='慢慢吃！', py='mànmàn chī!',
      hinweis='„Guten Appetit" gibt es so nicht. 慢慢吃 heißt „iss langsam" und ist die freundliche Aufforderung, mit der man eine Runde eröffnet.',
      neu=['慢'], lookup=False, ansprache=None,
      konzepte=[('langsam', ['慢']), ('essen', ['吃'])]),

# ---------------------------------------------------------- Rechnung
 dict(sz='essen_bezahlen', de='Können wir bitte zahlen?', zh='买单！', py='mǎidān!',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('zahlen', ['买单', '买'])]),
 dict(sz='essen_bezahlen', de='Können wir getrennt zahlen?',
      de_alt='Können Sie mir die Rechnung getrennt bringen?',
      zh='我们分开付，好吗？', py='wǒmen fēnkāi fù, hǎo ma?',
      hinweis='Unter jungen Leuten normal — man sagt dazu auch „AA制". In älteren Runden ist es ein Affront: dort zahlt einer für alle, und man streitet höflich darum.',
      neu=['分开', '付'], lookup=False, ansprache=None,
      konzepte=[('getrennt', ['分开']), ('zahlen', ['付'])]),
 dict(sz='essen_bezahlen', de='Das habe ich nicht bestellt.', zh='这个我没点。',
      py='zhège wǒ méi diǎn.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('nicht', ['没']), ('bestellt', ['点'])]),
 dict(sz='essen_bezahlen', de='Ist das im Preis inbegriffen?', zh='这个也算钱吗？',
      py='zhège yě suàn qián ma?',
      hinweis='Wörtlich „zählt das auch als Geld?" — die praktische Frage bei Tee, Nüssen oder Servietten, die in manchen Lokalen ungefragt auf den Tisch kommen und berechnet werden.',
      neu=['算'], lookup=False, ansprache=None,
      konzepte=[('auch', ['也']), ('kosten', ['算钱', '钱'])]),

# ---------------------------------------------------------- Was ich nicht esse
# Bleibt vorerst hier. Ab dem Ausbau leiht Drinking + Dining die Situation
# `health_allergie` aus Health (siehe mobile/src/data/geliehen.ts) - der
# Allergiesatz steht dort ausfuehrlicher.
 dict(sz='essen_unvertraeglich', de='Ich bin Vegetarier.', zh='我不吃肉。', py='wǒ bù chī ròu.',
      hinweis='Wörtlich „ich esse kein Fleisch" — verlässlicher als 素食者 („Vegetarier"), weil in vielen Küchen Brühe und Schmalz nicht als Fleisch gelten.',
      neu=['肉'], lookup=False, ansprache=None,
      konzepte=[('nicht_essen', ['不吃']), ('fleisch', ['肉'])]),
]
