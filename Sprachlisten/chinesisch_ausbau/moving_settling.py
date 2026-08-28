# -*- coding: utf-8 -*-
"""Moving + Settling auf Chinesisch (2026-08-22).

Uebersetzung der 14 vorhandenen deutschen Saetze. Chinesisch hatte NULL.

**Der deutsche Bestand ist auf Deutschland zugeschnitten** - Einwohnermelde-
amt, Strom anmelden, Kaution. In China laeuft davon fast nichts gleich, und
zwei Saetze bekommen deshalb einen angepassten Gloss (`de_alt`):

- Die Anmeldung passiert beim 派出所 (Polizeiposten des Viertels), nicht beim
  Meldeamt, und Auslaender muessen sie binnen 24 Stunden nach der Ankunft
  erledigen. Wer im Hotel wohnt, dem nimmt es die Rezeption ab; wer privat
  wohnt, muss selbst hin.
- Strom, Wasser und Gas laufen ueber dieselbe Bezahl-App wie alles andere.
  "Anmelden" heisst hier: die Wohnung in der App hinterlegen.

**Was hier fehlt und beim Ausbau dazukommt** (siehe scenarios.ts): SIM-Karte,
Bezahl-App und Bank - fuer einen Austauschstudenten in China die ersten drei
Huerden ueberhaupt, und im deutschen Bestand kommt keine davon vor.
"""

UEBERSETZUNG = True

SAETZE = [
# ---------------------------------------------------------- Wohnung suchen
 dict(sz='wohnen_suchen', de='Ich suche eine Wohnung.', zh='我找房子。', py='wǒ zhǎo fángzi.',
      hinweis=None, neu=['房子'], lookup=False, ansprache=None,
      konzepte=[('suchen', ['找']), ('wohnung', ['房子'])]),
 dict(sz='wohnen_suchen', de='Wie hoch ist die Miete?', zh='房租多少钱？',
      py='fángzū duōshao qián?',
      hinweis=None, neu=['房租'], lookup=False, ansprache=None,
      konzepte=[('miete', ['房租']), ('wieviel', ['多少'])]),
 dict(sz='wohnen_suchen', de='Wann kann ich einziehen?', zh='几号可以住？',
      py='jǐ hào kěyǐ zhù?',
      hinweis=None, neu=['住'], lookup=False, ansprache=None,
      konzepte=[('wann', ['几号']), ('wohnen', ['住'])]),
 dict(sz='wohnen_suchen', de='Gibt es einen Aufzug im Haus?', zh='有电梯吗？',
      py='yǒu diàntī ma?',
      hinweis=None, neu=['电梯'], lookup=False, ansprache=None,
      konzepte=[('haben', ['有']), ('aufzug', ['电梯'])]),
 dict(sz='wohnen_suchen', de='Kann man hier Wäsche waschen?', de_alt='Gibt es hier einen Waschraum?',
      zh='可以洗衣服吗？', py='kěyǐ xǐ yīfu ma?',
      hinweis='Einen eigenen Waschraum gibt es selten. Die Maschine steht meist auf dem Balkon — Trockner so gut wie nie, gehängt wird draußen.',
      neu=['洗', '衣服'], lookup=False, ansprache=None,
      konzepte=[('waschen', ['洗']), ('kleidung', ['衣服'])]),
 dict(sz='wohnen_suchen', de='Ist die Kaution im Preis enthalten?', zh='押金也算吗？',
      py='yājīn yě suàn ma?',
      hinweis='Üblich sind ein Monat Kaution und drei Monate Miete im Voraus („押一付三") — deutlich mehr, als man aus Deutschland kennt.',
      neu=['押金', '算'], lookup=False, ansprache=None,
      konzepte=[('kaution', ['押金']), ('auch', ['也'])]),

# ---------------------------------------------------------- Mietvertrag
 dict(sz='wohnen_vertrag', de='Ich möchte den Mietvertrag unterschreiben.', zh='我想签合同。',
      py='wǒ xiǎng qiān hétong.',
      hinweis=None, neu=['签', '合同'], lookup=False, ansprache=None,
      konzepte=[('unterschreiben', ['签']), ('vertrag', ['合同'])]),
 dict(sz='wohnen_vertrag', de='Ich bin letzte Woche umgezogen.', zh='我上星期搬家了。',
      py='wǒ shàng xīngqī bānjiā le.',
      hinweis=None, neu=['上星期', '搬家'], lookup=False, ansprache=None,
      konzepte=[('letzte_woche', ['上星期']), ('umziehen', ['搬家'])]),

# ---------------------------------------------------------- Behörden
 dict(sz='wohnen_behoerden', de='Wie melde ich mich bei der Polizei an?',
      de_alt='Wie melde ich mich beim Einwohnermeldeamt an?',
      zh='怎么去派出所登记？', py='zěnme qù pàichūsuǒ dēngjì?',
      hinweis='Ausländer müssen sich binnen 24 Stunden nach der Ankunft beim 派出所 des Viertels melden. Im Hotel macht das die Rezeption — wer privat wohnt, muss selbst hin.',
      neu=['派出所', '登记'], lookup=True, ansprache=None,
      konzepte=[('polizeiposten', ['派出所']), ('anmelden', ['登记'])]),
 dict(sz='wohnen_behoerden', de='Ich brauche eine Bestätigung meiner Adresse.', zh='我要住址证明。',
      py='wǒ yào zhùzhǐ zhèngmíng.',
      hinweis='Das 住址证明 bekommt man beim 派出所 und braucht es für fast alles Weitere — Bank, Handyvertrag, Uni-Einschreibung.',
      neu=['住址', '证明'], lookup=True, ansprache=None,
      konzepte=[('adresse', ['住址']), ('bestaetigung', ['证明'])]),
 dict(sz='wohnen_behoerden', de='Wie bezahle ich den Strom?', de_alt='Ich muss den Strom anmelden.',
      zh='怎么付电费？', py='zěnme fù diànfèi?',
      hinweis='Strom, Wasser und Gas laufen über dieselbe Bezahl-App wie alles andere. Einen Vertrag mit einem Anbieter schließt man nicht.',
      neu=['付', '电费'], lookup=False, ansprache=None,
      konzepte=[('zahlen', ['付']), ('strom', ['电费', '电'])]),

# ---------------------------------------------------------- Im Haus
 dict(sz='wohnen_alltag', de='Meine Nachbarn sind sehr nett.', zh='我的邻居很好。',
      py='wǒ de línjū hěn hǎo.',
      hinweis=None, neu=['邻居'], lookup=False, ansprache=None,
      konzepte=[('nachbarn', ['邻居']), ('gut', ['好'])]),
 dict(sz='wohnen_alltag', de='Die Heizung funktioniert nicht.', zh='暖气坏了。',
      py='nuǎnqì huài le.',
      hinweis='Südlich des Huai-Flusses gibt es gar keine Heizung — auch in Shanghai nicht. Wer dort im Winter friert, kauft eine Klimaanlage mit Heizfunktion.',
      neu=['暖气', '坏'], lookup=False, ansprache=None,
      konzepte=[('heizung', ['暖气']), ('kaputt', ['坏'])]),
 dict(sz='wohnen_alltag', de='Wo finde ich einen Handwerker?', zh='哪里可以找师傅？',
      py='nǎli kěyǐ zhǎo shīfu?',
      hinweis='师傅 ist die höfliche Anrede für jeden Handwerker, Fahrer oder Koch — wörtlich „Meister".',
      neu=['师傅'], lookup=False, ansprache=None,
      konzepte=[('wo', ['哪里']), ('handwerker', ['师傅'])]),
]
