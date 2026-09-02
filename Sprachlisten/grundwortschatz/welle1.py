# -*- coding: utf-8 -*-
"""Grundwortschatz: die fehlenden Grundlagen, deutsch und chinesisch.

Der Grundwortschatz hatte 36 Saetze in sieben Situationen - und drei Loecher,
die beim Durchsehen am 2026-08-22 auffielen:

  1. "Danke", "Bitte", "Entschuldigung", "Ja", "Nein" gab es NICHT als eigene
     Saetze. "Danke" kam nur eingebettet vor ("Mir geht es gut, danke"),
     "Entschuldigung" nur in einer Kaufkategorie.
  2. "Hilfe!" lag in health_emergency, "Wo ist die Toilette?" in
     drinking_dining - beide hinter der Bezahlschranke, obwohl jeder sie
     braucht.
  3. Die Situation "zahlen" enthielt Preisfragen, aber keine Zahlen.

Das Auswahlkriterium fuer den Grundwortschatz (Nutzer-Entscheidung):
**ein Satz gehoert hierher, wenn man ihn braucht, egal was man gekauft hat.**
Strenger als "nuetzlich" - "Wie viel kostet die Nacht?" braucht nur, wer im
Hotel steht; "Danke" braucht jeder am ersten Tag.

Der Grundwortschatz ist seit dem 2026-08-21 ausserdem der VERLEIHER fuer
sechs Kategorien (siehe mobile/src/data/geliehen.ts). Was hier fehlt, fehlt
in sechs Kategorien gleichzeitig.
"""

UEBERSETZUNG = False   # neue Saetze, keine Uebersetzung eines festen Bestands

GRUNDLAGE = True     # siehe ist_grundlage() im Pruefer

SAETZE = [
# ============================================================ Höflich sein
 dict(sz='hoeflichkeit', de='Danke!', zh='谢谢！', py='xièxie!',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('danke', ['danke', 'dankeschön'])],
      konzepte=[('danke', ['谢谢'])]),
 dict(sz='hoeflichkeit', de='Vielen Dank!', zh='太谢谢了！', py='tài xièxie le!',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('danke', ['vielen dank', 'danke'])],
      konzepte=[('danke', ['谢谢'])]),
 dict(sz='hoeflichkeit', de='Gern geschehen.', zh='不客气。', py='bú kèqi.',
      hinweis='Die Standardantwort auf 谢谢. Wörtlich „nicht so höflich" — man wehrt den Dank leicht ab, statt ihn anzunehmen.',
      neu=[], lookup=False, ansprache=None,
      de_konzepte=[('gern_geschehen', ['gern geschehen', 'bitte'])],
      konzepte=[('gern_geschehen', ['不客气'])]),
 dict(sz='hoeflichkeit', de='Entschuldigung!', zh='对不起！', py='duìbuqǐ!',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('entschuldigung', ['entschuldigung', 'entschuldige'])],
      konzepte=[('entschuldigung', ['对不起'])]),
 dict(sz='hoeflichkeit', de='Es tut mir leid.', zh='真对不起。', py='zhēn duìbuqǐ.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('leid', ['tut mir leid', 'leid'])],
      konzepte=[('entschuldigung', ['对不起'])]),
 dict(sz='hoeflichkeit', de='Kein Problem.', zh='没关系。', py='méi guānxi.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('kein_problem', ['kein problem', 'macht nichts'])],
      konzepte=[('macht_nichts', ['没关系'])]),
 # `de_zh` ueberschreibt den deutschen Text NUR auf der chinesischen Zeile
 # (Simon, 2026-09-01): 对 heisst woertlich "korrekt". Es als "Ja." zu
 # beschriften lehrt eine Gleichsetzung, die es nicht gibt - besonders in
 # einer Zuordnungsuebung. Die deutsche/schwedische/spanische Zeile "Ja."
 # bleibt unberuehrt, dort stimmt sie.
 # Bewusst in Kauf genommen: fuer Chinesisch deckt der Grundwortschatz
 # damit kein "ja" mehr ab. Der Kulturhinweis sagt genau das.
 dict(sz='hoeflichkeit', de='Ja.', de_zh='Korrekt.', zh='对。', py='duì.',
      hinweis='Chinesisch hat kein allgemeines „ja". Man bestätigt mit 对 („richtig") oder wiederholt das Verb der Frage.',
      neu=['对'], lookup=False, ansprache=None,
      de_konzepte=[('ja', ['ja'])],
      konzepte=[('ja', ['对', '是'])]),
 dict(sz='hoeflichkeit', de='Nein.', zh='不是。', py='bú shì.',
      hinweis='Ebenso: kein allgemeines „nein". 不是 verneint eine Aussage, bei Verben verneint man das Verb selbst — 我不去 statt „nein".',
      neu=[], lookup=False, ansprache=None,
      de_konzepte=[('nein', ['nein'])],
      konzepte=[('nein', ['不是', '不'])]),
 dict(sz='hoeflichkeit', de='Ich weiß nicht.', zh='我不知道。', py='wǒ bù zhīdào.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('nicht_wissen', ['weiß nicht', 'keine ahnung'])],
      konzepte=[('nicht', ['不']), ('wissen', ['知道'])]),

# ============================================================ Zahlen und Preise
 dict(sz='zahlen', de='Eins, zwei, drei.', zh='一、二、三。', py='yī, èr, sān.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('zaehlen', ['eins zwei drei', 'eins'])],
      konzepte=[('eins', ['一']), ('zwei', ['二']), ('drei', ['三'])]),
 dict(sz='zahlen', de='Wie viele?', zh='几个？', py='jǐ ge?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('wie_viele', ['wie viele', 'wieviele'])],
      konzepte=[('wie_viele', ['几'])]),
 dict(sz='zahlen', de='Zwei Stück, bitte.', zh='请给我两个。', py='qǐng gěi wǒ liǎng ge.',
      hinweis='Vor Zählwörtern heißt zwei 两, nicht 二 — 二 gilt nur beim reinen Zählen und bei Zahlen ab zwanzig.',
      neu=[], lookup=False, ansprache=None,
      de_konzepte=[('zwei', ['zwei']), ('bitte', ['bitte'])],
      konzepte=[('zwei', ['两']), ('geben', ['给'])]),
 dict(sz='zahlen', de='Nur eins, bitte.', zh='我要一个。', py='wǒ yào yí ge.',
      hinweis=None, neu=['要'], lookup=False, ansprache=None,
      de_konzepte=[('eins', ['eins', 'nur eins'])],
      konzepte=[('wollen', ['要']), ('eins', ['一个'])]),
 dict(sz='zahlen', de='Das ist genug.', zh='够了。', py='gòu le.',
      hinweis=None, neu=['够'], lookup=False, ansprache=None,
      de_konzepte=[('genug', ['genug', 'reicht'])],
      konzepte=[('genug', ['够'])]),
 dict(sz='zahlen', de='Wie viel ist das zusammen?', zh='一共多少钱？', py='yígòng duōshao qián?',
      hinweis=None, neu=['一共'], lookup=False, ansprache=None,
      de_konzepte=[('zusammen', ['zusammen', 'insgesamt']), ('wieviel', ['wie viel'])],
      konzepte=[('zusammen', ['一共']), ('wieviel', ['多少'])]),
 dict(sz='zahlen', de='Wir sind vier Personen.', zh='我们一共四个人。', py='wǒmen yígòng sì ge rén.',
      hinweis='Der erste Satz an jeder Restauranttür — gefragt wird 几位？ („wie viele Personen?"), noch bevor man Guten Tag sagt.',
      neu=[], lookup=False, ansprache=None,
      de_konzepte=[('vier', ['vier']), ('personen', ['personen', 'leute'])],
      konzepte=[('zusammen', ['一共']), ('vier_personen', ['四个人', '四个'])]),

# ============================================================ Wenn's drauf ankommt
 dict(sz='notlage', de='Ich brauche Hilfe.', zh='我要帮助。', py='wǒ yào bāngzhù.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('brauchen', ['brauche']), ('hilfe', ['hilfe'])],
      konzepte=[('wollen', ['要']), ('hilfe', ['帮助', '帮'])]),
 dict(sz='notlage', de='Ich habe meinen Pass verloren.', zh='我的护照丢了。', py='wǒ de hùzhào diū le.',
      hinweis='Der Satz, den man am wenigsten üben will und am dringendsten braucht. Als Ausländer ist der Pass zugleich der Ausweis — ohne ihn kommt man in kein Hotel.',
      neu=['护照'], lookup=False, ansprache=None,
      de_konzepte=[('pass', ['pass', 'reisepass']), ('verloren', ['verloren'])],
      konzepte=[('pass', ['护照']), ('verloren', ['丢'])]),
 dict(sz='notlage', de='Wo ist der Ausgang?', zh='出口在哪里？', py='chūkǒu zài nǎli?',
      hinweis=None, neu=['出口'], lookup=False, ansprache=None,
      de_konzepte=[('ausgang', ['ausgang']), ('wo', ['wo'])],
      konzepte=[('ausgang', ['出口']), ('wo', ['哪里'])]),
 dict(sz='notlage', de='Ich habe mein Handy verloren.', zh='我的手机丢了。', py='wǒ de shǒujī diū le.',
      hinweis=None, neu=['丢'], lookup=False, ansprache=None,
      de_konzepte=[('handy', ['handy']), ('verloren', ['verloren'])],
      konzepte=[('handy', ['手机']), ('verloren', ['丢'])]),

# ============================================================ Sich vorstellen
 dict(sz='vorstellung', de='Das ist mein Freund.', zh='这是我朋友。', py='zhè shì wǒ péngyou.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      de_konzepte=[('freund', ['freund'])],
      konzepte=[('freund', ['朋友'])]),
 dict(sz='vorstellung', de='Ich bin zum ersten Mal hier.', zh='我第一次来这里。', py='wǒ dì yī cì lái zhèlǐ.',
      hinweis=None, neu=['第一次'], lookup=False, ansprache=None,
      de_konzepte=[('erstes_mal', ['erste mal', 'ersten mal'])],
      konzepte=[('erstes_mal', ['第一次']), ('hier', ['这里'])]),

# ============================================================ Sich verständigen
 dict(sz='verstaendigen', de='Was heißt das?', zh='这是什么意思？', py='zhè shì shénme yìsi?',
      hinweis=None, neu=['意思'], lookup=False, ansprache=None,
      de_konzepte=[('heissen', ['heißt', 'bedeutet'])],
      konzepte=[('bedeutung', ['意思']), ('was', ['什么'])]),
 dict(sz='verstaendigen', de='Können Sie das bitte aufschreiben?', zh='请您写下来。', py='qǐng nín xiě xiàlái.',
      hinweis='Im Zweifel der nützlichste Satz überhaupt: geschriebene Zeichen versteht man mit einer Übersetzungs-App, gesprochenes Chinesisch nicht.',
      neu=[], lookup=False, ansprache=None,
      de_konzepte=[('aufschreiben', ['aufschreiben', 'schreiben'])],
      konzepte=[('schreiben', ['写'])]),
]
