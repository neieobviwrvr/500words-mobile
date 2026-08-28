# -*- coding: utf-8 -*-
"""Hotel + Accommodation auf Chinesisch (2026-08-22).

Uebersetzung der 14 vorhandenen deutschen Saetze. Chinesisch hatte NULL.

**Der deutsche Bestand ist auf Hotels zugeschnitten, die Zielgruppe schlaeft
im Hostel.** Beim Uebersetzen faellt das auf: "Ich moechte ein
Einzelzimmer" ist fuer einen Backpacker der seltenere Fall. Die Saetze
bleiben trotzdem wie sie sind - umgeschrieben wird beim Ausbau, wo die
Situationen `hotel_hostel`, `hotel_gepaeck`, `hotel_wlan`,
`hotel_waesche` und `hotel_registrierung` dazukommen (siehe scenarios.ts).

**Ein Satz bekommt einen angepassten Gloss:** die Klimaanlage. In China ist
空调 im Sommer keine Bequemlichkeit, sondern der Grund, warum man das Zimmer
gewaehlt hat - und "funktioniert nicht" heisst dort 坏了 ("kaputt"), was
haerter klingt und genau richtig ist.
"""

UEBERSETZUNG = True

SAETZE = [
# ---------------------------------------------------------- Einchecken
 dict(sz='hotel_einchecken', de='Ich habe eine Reservierung.', zh='我订了房间。',
      py='wǒ dìng le fángjiān.',
      hinweis=None, neu=['房间', '订'], lookup=False, ansprache=None,
      konzepte=[('reserviert', ['订']), ('zimmer', ['房间'])]),
 dict(sz='hotel_einchecken', de='Haben Sie noch ein Zimmer frei?', zh='有房间吗？',
      py='yǒu fángjiān ma?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('haben', ['有']), ('zimmer', ['房间'])]),
 dict(sz='hotel_einchecken', de='Wie viel kostet die Nacht?', zh='一天多少钱？',
      py='yì tiān duōshao qián?',
      hinweis='Gezählt wird in 天 („Tagen"), nicht in Nächten. „Eine Nacht" wörtlich zu übersetzen versteht man zwar, es klingt aber fremd.',
      neu=['天'], lookup=False, ansprache=None,
      konzepte=[('tag', ['天']), ('wieviel', ['多少'])]),
 dict(sz='hotel_einchecken', de='Wann ist der Check-in?', zh='几点可以住？',
      py='jǐ diǎn kěyǐ zhù?',
      hinweis=None, neu=['住'], lookup=False, ansprache=None,
      konzepte=[('wann', ['几点']), ('wohnen', ['住'])]),
 dict(sz='hotel_einchecken', de='Ich möchte ein Einzelzimmer, bitte.', zh='我要一个人的房间。',
      py='wǒ yào yí ge rén de fángjiān.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('einzeln', ['一个人']), ('zimmer', ['房间'])]),

# ---------------------------------------------------------- Im Zimmer
 dict(sz='hotel_zimmer', de='Ist das Frühstück inklusive?', zh='有早饭吗？',
      py='yǒu zǎofàn ma?',
      hinweis=None, neu=['早饭'], lookup=False, ansprache=None,
      konzepte=[('haben', ['有']), ('fruehstueck', ['早饭'])]),
 dict(sz='hotel_zimmer', de='Gibt es hier WLAN?', zh='有网吗？', py='yǒu wǎng ma?',
      hinweis='网 („Netz") reicht. Wer WiFi sagt, wird auch verstanden — das englische Wort ist überall geläufig.',
      neu=['网'], lookup=False, ansprache=None,
      konzepte=[('haben', ['有']), ('netz', ['网'])]),
 dict(sz='hotel_zimmer', de='Wie ist das Passwort für das WLAN?', zh='网的密码是什么？',
      py='wǎng de mìmǎ shì shénme?',
      hinweis=None, neu=['密码'], lookup=False, ansprache=None,
      konzepte=[('passwort', ['密码']), ('was', ['什么'])]),
 dict(sz='hotel_zimmer', de='Wo ist der Aufzug?', zh='电梯在哪里？', py='diàntī zài nǎli?',
      hinweis=None, neu=['电梯'], lookup=False, ansprache=None,
      konzepte=[('aufzug', ['电梯']), ('wo', ['哪里'])]),

# ---------------------------------------------------------- Wenn etwas fehlt
 dict(sz='hotel_probleme', de='Mein Zimmer ist nicht sauber.', zh='房间不干净。',
      py='fángjiān bù gānjìng.',
      hinweis=None, neu=['干净'], lookup=False, ansprache=None,
      konzepte=[('zimmer', ['房间']), ('nicht_sauber', ['不干净'])]),
 dict(sz='hotel_probleme', de='Die Klimaanlage ist kaputt.', de_alt='Die Klimaanlage funktioniert nicht.',
      zh='空调坏了。', py='kōngtiáo huài le.',
      hinweis='空调 ist im Sommer kein Komfort, sondern der Grund, warum man dieses Zimmer genommen hat. 坏了 heißt „kaputt" — härter als „funktioniert nicht" und genau richtig.',
      neu=['空调', '坏'], lookup=False, ansprache=None,
      konzepte=[('klimaanlage', ['空调']), ('kaputt', ['坏'])]),
 dict(sz='hotel_probleme', de='Ich habe meinen Schlüssel verloren.', zh='我的钥匙丢了。',
      py='wǒ de yàoshi diū le.',
      hinweis=None, neu=['钥匙'], lookup=False, ansprache=None,
      konzepte=[('schluessel', ['钥匙']), ('verloren', ['丢'])]),

# ---------------------------------------------------------- Abreise
 dict(sz='hotel_abreise', de='Ich möchte auschecken.', zh='我要退房。', py='wǒ yào tuìfáng.',
      hinweis='Wörtlich „ich gehe jetzt". An der Rezeption reicht das; 退房 („auschecken") ist das Fachwort und wird ebenso verstanden.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('gehen', ['走'])]),
 dict(sz='hotel_abreise', de='Können Sie mir ein Taxi rufen?', zh='可以叫车吗？',
      py='kěyǐ jiào chē ma?',
      hinweis='叫车 heißt heute meist: per App bestellen. Wer selbst am Straßenrand winkt, kommt in großen Städten oft nicht weit — Taxis nehmen ungern Fahrgäste ohne App-Buchung.',
      neu=['车'], lookup=False, ansprache=None,
      konzepte=[('rufen', ['叫']), ('auto', ['车'])]),
]
