# -*- coding: utf-8 -*-
"""Entwurf Welle 3: Komplimente und Naeherkommen ausgebaut.

Noch NICHT in der Datenbank - Simon liest gegen.

Nutzer-Wunsch 2026-08-21: "Koennen wir noch weiter drauf eingehen auf so was
wie Attraktivitaet, auf koerperliche Eigenschaften, die in China gern gesehen
sind ... Was das Naeherkommen angeht?"

Dazu eine ZEHNTE Situation `club_komplimente`, und vier Saetze mehr fuer
`club_naeherkommen`.

WAS IN CHINA ANDERS GELOBT WIRD - der Grund, warum das eigene Saetze braucht
statt uebersetzter europaeischer:

  瘦 (duenn)      Ein Kompliment, kein Fettnaepfchen. "Du bist schlank" sagt
                  man offen; im Westen waere das heikel.
  高 (gross)      Bei Maennern das Kompliment schlechthin.
  可爱 (suess)     Bei Frauen deutlich positiver besetzt als "cute" im
                  Deutschen, kein Verniedlichen.
  气质 (Ausstrah- Hat kein deutsches Gegenstueck: Klasse, Haltung, Aura.
  lung)           Gilt als das hoechste Kompliment ueberhaupt - und ist
                  zugleich das SICHERSTE, weil es nicht den Koerper meint.
  好看 (schoen     Das Allzweck-Kompliment. Geht fuer Menschen, Kleidung,
  anzusehen)      Haare, alles.

  UND, das Wichtigste: man nimmt Komplimente NICHT mit "danke" an. Wer
  哪里哪里 ("ach wo") oder 没有没有 sagt, wehrt bescheiden ab - genau das
  wird erwartet. Ein blosses 谢谢 klingt selbstgefaellig. Als sichtbarer
  Auslaender wird man dauernd gelobt, deshalb ist das kein Nebenschauplatz.

GESCHLECHTSVARIANTEN nach Simons Vorgabe vom 2026-08-07 ("ein Mann lobt im
Club eher die Haare einer Frau, eine Frau eher die Muskeln eines Mannes"):
头发 und 可爱 gehen an Frauen, 高 und 帅 an Maenner. Der Rest ist neutral.
"""

SAETZE = [
# ---------------------------------------------------------------- Komplimente
 dict(sz='club_komplimente', de='Du siehst heute toll aus.', zh='你今天很好看。', hinweis=None, py='nǐ jīntiān hěn hǎokàn.',
      neu=['好看'], lookup=False, ansprache=None,
      konzepte=[('heute', ['今天']), ('schoen', ['好看'])]),
 dict(sz='club_komplimente', de='Dein Outfit gefällt mir.', zh='你的衣服很好看。', hinweis=None, py='nǐ de yīfu hěn hǎokàn.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('kleidung', ['衣服']), ('schoen', ['好看'])]),
 dict(sz='club_komplimente', de='Deine Haare sind schön.', zh='你的头发很漂亮。', hinweis=None, py='nǐ de tóufa hěn piàoliang.',
      neu=['头发'], lookup=False, ansprache='frauen',
      konzepte=[('haare', ['头发']), ('huebsch', ['漂亮'])]),
 dict(sz='club_komplimente', de='Sind deine Haare neu?', zh='你换发型了吗？', hinweis='Eine Veränderung zu bemerken zählt mehr als ein allgemeines Lob — hier wie überall.', py='nǐ huàn fàxíng le ma?',
      neu=[], lookup=False, ansprache='frauen',
      konzepte=[('haare', ['头发']), ('neu', ['新'])]),
 dict(sz='club_komplimente', de='Du bist sehr süß.', zh='你很可爱。', hinweis='Deutlich positiver besetzt als „süß" im Deutschen — kein Verniedlichen, sondern echtes Lob.', py='nǐ hěn kě\'ài.',
      neu=[], lookup=False, ansprache='frauen',
      konzepte=[('suess', ['可爱'])]),
 dict(sz='club_komplimente', de='Du bist groß.', zh='你很高。', hinweis='Bei Männern das Kompliment schlechthin. Größe zählt in China mehr als im Westen.', py='nǐ hěn gāo.',
      neu=[], lookup=False, ansprache='maenner',
      konzepte=[('gross', ['高'])]),
 dict(sz='club_komplimente', de='Du bist schlank.', zh='你很瘦。', hinweis='In China ein klares Kompliment, das man offen ausspricht — anders als im Deutschen.', py='nǐ hěn shòu.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('duenn', ['瘦'])]),
 dict(sz='club_komplimente', de='Du hast eine sehr helle Haut.', zh='你很白。', hinweis='Helle Haut gilt in China traditionell als schön — das Kompliment ist gängig und wird ganz anders gehört als bei uns. 白 heißt hier „hell", nicht „blass".', py='nǐ hěn bái.',
      neu=[], lookup=False, ansprache='frauen',
      konzepte=[('hell', ['白'])]),
 dict(sz='club_komplimente', de='Deine Augen sind schön.', zh='你的眼睛很漂亮。', hinweis='Große Augen gelten als schön. Das Kompliment ist völlig gängig und wird nicht als aufdringlich gehört.', py='nǐ de yǎnjing hěn piàoliang.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('auge', ['眼睛']), ('huebsch', ['漂亮'])]),
 dict(sz='club_komplimente', de='Du hast Klasse.', zh='你很有气质。', hinweis='气质 hat kein deutsches Gegenstück: Klasse, Haltung, Ausstrahlung. Gilt als höchstes Kompliment — und als sicherstes, weil es nicht den Körper meint.', py='nǐ hěn yǒu qìzhì.',
      neu=['气质'], lookup=False, ansprache=None,
      konzepte=[('haben', ['有']), ('ausstrahlung', ['气质'])]),
 dict(sz='club_komplimente', de='Deine Freundin hat Klasse.', zh='你朋友很有气质。', hinweis='气质 lobt Haltung statt Körper und geht deshalb immer, auch bei Fremden.', py='nǐ péngyou hěn yǒu qìzhì.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('freund', ['朋友']), ('ausstrahlung', ['气质'])]),
 dict(sz='club_komplimente', de='Ich mag deine Stimme.', zh='我喜欢你的声音。', hinweis=None, py='wǒ xǐhuan nǐ de shēngyīn.',
      neu=['声音'], lookup=False, ansprache=None,
      konzepte=[('moegen', ['喜欢']), ('stimme', ['声音'])]),
 dict(sz='club_komplimente', de='Deine Stimme ist sehr schön.', zh='你的声音很好。', hinweis=None, py='nǐ de shēngyīn hěn hǎo.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('stimme', ['声音']), ('gut', ['好'])]),
 dict(sz='club_komplimente', de='Du tanzt wirklich gut.', zh='你跳舞跳得真好。', hinweis=None, py='nǐ tiàowǔ tiào de zhēn hǎo.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('tanzen', ['跳舞']), ('wirklich', ['真'])]),
 # --- Komplimente ANNEHMEN. Der Teil, den kein Lehrbuch bringt.
 dict(sz='club_komplimente', de='Ach wo! (bescheidene Antwort auf ein Lob)', zh='哪里哪里。', hinweis='Komplimente nimmt man in China nicht mit „danke" an, sondern wehrt bescheiden ab. Ein bloßes 谢谢 klingt selbstgefällig.', py='nǎli nǎli.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('ach_wo', ['哪里'])]),
 dict(sz='club_komplimente', de='Nein, nein. (auf ein Lob)', zh='没有没有。', hinweis='Zweite gängige Abwehr eines Kompliments, etwas lockerer als 哪里哪里.', py='méiyǒu méiyǒu.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('nicht_haben', ['没有'])]),
 dict(sz='club_komplimente', de='Danke, du aber auch.', zh='谢谢，你也是。', hinweis=None, py='xièxie, nǐ yě shì.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('danke', ['谢谢']), ('auch', ['也'])]),

# ------------------------------------------------- Näher kommen (Ergänzung)
 dict(sz='club_naeherkommen', de='Darf ich mich hierhin setzen?', zh='我可以坐这里吗？', hinweis=None, py='wǒ kěyǐ zuò zhèlǐ ma?',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('duerfen', ['可以']), ('sitzen', ['坐'])]),
 dict(sz='club_naeherkommen', de='Deine Hände sind ganz kalt.', zh='你的手很冷。', hinweis=None, py='nǐ de shǒu hěn lěng.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('hand', ['手']), ('kalt', ['冷'])]),
 dict(sz='club_naeherkommen', de='Ich bringe dich nach Hause.', zh='我送你回家。', hinweis='Jemanden nach Hause zu bringen ist in China ein normaler, unaufdringlicher Schritt — kein Vorstoß.', py='wǒ sòng nǐ huí jiā.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('bringen', ['送']), ('nach_hause', ['回家'])]),
 dict(sz='club_naeherkommen', de='Soll ich dich nach Hause bringen?', zh='我送你回家好吗？', hinweis='Als Frage gestellt noch zurückhaltender. Ein Nein lässt dem anderen das Gesicht.', py='wǒ sòng nǐ huí jiā hǎo ma?',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('bringen', ['送']), ('nach_hause', ['回家'])]),
 dict(sz='club_naeherkommen', de='Wir lassen es langsam angehen.', zh='我们慢慢来。', hinweis=None, py='wǒmen mànman lái.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('langsam', ['慢']), ('kommen', ['来'])]),
 dict(sz='club_naeherkommen', de='Ich finde dich sehr attraktiv.', zh='我觉得你非常好看。', hinweis=None, py='wǒ juéde nǐ fēicháng hǎokàn.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('finden', ['觉得']), ('sehr', ['非常']), ('schoen', ['好看'])]),
]
