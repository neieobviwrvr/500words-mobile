# -*- coding: utf-8 -*-
"""Shopping + Haggling auf Chinesisch (2026-08-22).

Uebersetzung der 15 vorhandenen deutschen Saetze. Chinesisch hatte NULL.

**Beim Uebersetzen faellt auf, was der Kategorie fehlt:** sie heisst
"Haggling" und hat keine einzige Handel-Situation. "Das ist zu teuer" ist
der einzige Satz, der in die Richtung geht. `shop_handeln` kommt beim
Ausbau dazu (siehe scenarios.ts).

**Zwei Saetze bekommen einen angepassten Gloss:**
- Bargeld. In China ist es umgekehrt zu Europa: bezahlt wird per App, und
  "nur Bargeld" hoert man fast nie - dafuer oft "keine Karte".
- Die Tuete. Seit 2021 kosten Plastiktueten ueberall Geld, man fragt also
  nicht ob es eine gibt, sondern sagt, dass man eine braucht.
"""

UEBERSETZUNG = True

SAETZE = [
# ---------------------------------------------------------- Suchen und stöbern
 dict(sz='shop_suchen', de='Ich schaue mich nur um.', zh='我看看。', py='wǒ kànkan.',
      hinweis='Die Verdopplung 看看 macht aus „sehen" ein „mal kurz schauen". Das ist die höfliche Abwehr, wenn jemand fragt, ob er helfen kann.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('schauen', ['看'])]),
 dict(sz='shop_suchen', de='Können Sie mir helfen?', zh='可以帮我吗？', py='kěyǐ bāng wǒ ma?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('helfen', ['帮'])]),
 dict(sz='shop_suchen', de='Ich suche ein Geschenk für meine Mutter.', zh='我想给妈妈买个礼物。',
      py='wǒ xiǎng gěi māma mǎi ge lǐwù.',
      hinweis=None, neu=['礼物'], lookup=False, ansprache=None,
      konzepte=[('suchen', ['找']), ('geschenk', ['礼物'])]),
 dict(sz='shop_suchen', de='Wann schließt das Geschäft?', zh='几点关门？', py='jǐ diǎn guānmén?',
      hinweis=None, neu=['关门'], lookup=False, ansprache=None,
      konzepte=[('wann', ['几点']), ('schliessen', ['关门'])]),
 dict(sz='shop_suchen', de='Ich habe gestern ein neues Kleid gekauft.', zh='我昨天买了新衣服。',
      py='wǒ zuótiān mǎi le xīn yīfu.',
      hinweis=None, neu=['衣服'], lookup=False, ansprache=None,
      konzepte=[('gekauft', ['买']), ('kleidung', ['衣服'])]),

# ---------------------------------------------------------- Anprobieren
 dict(sz='shop_anprobieren', de='Kann ich das anprobieren?', zh='可以试试吗？',
      py='kěyǐ shìshi ma?',
      hinweis=None, neu=['试'], lookup=False, ansprache=None,
      konzepte=[('probieren', ['试'])]),
 dict(sz='shop_anprobieren', de='Wo ist die Umkleidekabine?', zh='在哪里试衣服？',
      py='zài nǎli shì yīfu?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('wo', ['哪里']), ('kleidung', ['衣服'])]),
 dict(sz='shop_anprobieren', de='Haben Sie das auch in Größe M?', zh='有中号吗？',
      py='yǒu zhōng hào ma?',
      hinweis='Größen heißen 小号 / 中号 / 大号 — klein, mittel, groß. Achtung: chinesische Größen fallen deutlich kleiner aus als europäische.',
      neu=['中号'], lookup=False, ansprache=None,
      konzepte=[('haben', ['有']), ('groesse_m', ['中号'])]),
 dict(sz='shop_anprobieren', de='Haben Sie das in einer anderen Farbe?', zh='有别的颜色吗？',
      py='yǒu bié de yánsè ma?',
      hinweis=None, neu=['别的', '颜色'], lookup=False, ansprache=None,
      konzepte=[('andere', ['别的']), ('farbe', ['颜色'])]),

# ---------------------------------------------------------- Preis und Bezahlen
 dict(sz='shop_bezahlen', de='Das ist zu teuer.', zh='太贵了。', py='tài guì le.',
      hinweis='Der Anfang jedes Handels. Wer ihn sagt und sich zum Gehen wendet, bekommt fast immer ein zweites Angebot.',
      neu=['贵'], lookup=False, ansprache=None,
      konzepte=[('teuer', ['贵'])]),
 dict(sz='shop_bezahlen', de='Gibt es einen Rabatt?', zh='可以便宜点吗？',
      py='kěyǐ piányi diǎn ma?',
      hinweis='Wörtlich „geht es ein bisschen billiger?". Auf Märkten die Standardfrage, in Kaufhäusern zwecklos.',
      neu=['便宜'], lookup=False, ansprache=None,
      konzepte=[('billig', ['便宜'])]),
 dict(sz='shop_bezahlen', de='Kann ich mit Karte bezahlen?', zh='可以用卡吗？',
      py='kěyǐ yòng kǎ ma?',
      hinweis=None, neu=['卡'], lookup=False, ansprache=None,
      konzepte=[('benutzen', ['用']), ('karte', ['卡'])]),
 dict(sz='shop_bezahlen', de='Karte geht nicht, nur Handy.', de_alt='Nur Bargeld, bitte.',
      zh='不能用卡，只能手机。', py='bù néng yòng kǎ, zhǐ néng shǒujī.',
      hinweis='In China umgekehrt zu Europa: bezahlt wird per App. „Nur Bargeld" hört man fast nie — „keine Karte" dafür ständig, und gemeint ist: zahl mit WeChat oder Alipay.',
      neu=['能', '只'], lookup=False, ansprache=None,
      konzepte=[('nicht_koennen', ['不能']), ('handy', ['手机'])]),
 dict(sz='shop_bezahlen', de='Ich brauche eine Tüte.', de_alt='Haben Sie eine Tüte?',
      zh='我要一个袋子。', py='wǒ yào yí ge dàizi.',
      hinweis='Tüten kosten seit 2021 überall Geld und werden nicht mehr ungefragt gegeben. Man fragt also nicht, ob es welche gibt, sondern sagt, dass man eine will.',
      neu=['袋子'], lookup=False, ansprache=None,
      konzepte=[('wollen', ['要']), ('tuete', ['袋子'])]),

# ---------------------------------------------------------- Umtauschen
 dict(sz='shop_reklamieren', de='Ich möchte das zurückgeben.', zh='我想退。', py='wǒ xiǎng tuì.',
      hinweis='Umtauschen ist in kleinen Läden unüblich — ohne Bon und ohne Originalverpackung meist aussichtslos.',
      neu=['退'], lookup=False, ansprache=None,
      konzepte=[('zurueckgeben', ['退'])]),
]
