# -*- coding: utf-8 -*-
"""Wort-fuer-Wort-Tagging fuer chinesisch_phrasebook/grundwortschatz.

Getaggt wird NUR das Pinyin, nie die Hanzi (Simons Vorgabe 2026-08-30) -
passt zum Kernprinzip "Gelernt wird ueber Pinyin" (siehe CLAUDE.md).
Erzeugt aus _erzeuge_grundwortschatz_zh.py (Einmal-Helfer).

Adjektiv-Woerter im Chinesischen sind grammatisch oft eher Stativ-Verben
(z.B. hǎo/gut, kèqi/hoeflich) - hier trotzdem als Adjektiv getaggt, gleiche
Konvention wie bei den Chinesisch-Vokabeln in wortarten_zh.py (帅/漂亮/
有趣 etc.), passt besser zur Lernerintuition als die linguistisch strengere
Kategorie. Keine Konjunktion im Bestand.
"""

TAGS = [
    {"id": 197, "tags": [{"w": 'jiùmìng!', "c": 'v'}]},  # jiùmìng!
    {"id": 202, "tags": [{"w": 'nǐ', "c": None}, {"w": 'hǎo!', "c": 'a'}]},  # nǐ hǎo!
    {"id": 203, "tags": [{"w": 'zǎoshang', "c": 'n'}, {"w": 'hǎo!', "c": 'a'}]},  # zǎoshang hǎo!
    {"id": 204, "tags": [{"w": 'wǎnshang', "c": 'n'}, {"w": 'hǎo!', "c": 'a'}]},  # wǎnshang hǎo!
    {"id": 205, "tags": [{"w": 'nǐ', "c": None}, {"w": 'hǎo', "c": 'a'}, {"w": 'ma?', "c": None}]},  # nǐ hǎo ma?
    {"id": 206, "tags": [{"w": 'wǒ', "c": None}, {"w": 'hěn', "c": None}, {"w": 'hǎo,', "c": 'a'}, {"w": 'xièxie.', "c": 'v'}]},  # wǒ hěn hǎo, xièxie.
    {"id": 207, "tags": [{"w": 'nǐ', "c": None}, {"w": 'jiào', "c": 'v'}, {"w": 'shénme', "c": None}, {"w": 'míngzi?', "c": 'n'}]},  # nǐ jiào shénme míngzi?
    {"id": 208, "tags": [{"w": 'wǒ', "c": None}, {"w": 'jiào', "c": 'v'}, {"w": 'Ānnà.', "c": 'n'}]},  # wǒ jiào Ānnà.
    {"id": 209, "tags": [{"w": 'nǐ', "c": None}, {"w": 'shì', "c": 'v'}, {"w": 'nǎ', "c": None}, {"w": 'guó', "c": 'n'}, {"w": 'rén?', "c": 'n'}]},  # nǐ shì nǎ guó rén?
    {"id": 210, "tags": [{"w": 'wǒ', "c": None}, {"w": 'shì', "c": 'v'}, {"w": 'Déguó', "c": 'n'}, {"w": 'rén.', "c": 'n'}]},  # wǒ shì Déguó rén.
    {"id": 211, "tags": [{"w": 'nǐ', "c": None}, {"w": 'duō', "c": None}, {"w": 'dà?', "c": 'a'}]},  # nǐ duō dà?
    {"id": 212, "tags": [{"w": 'wǒ', "c": None}, {"w": 'èrshíwǔ', "c": None}, {"w": 'suì.', "c": 'n'}]},  # wǒ èrshíwǔ suì.
    {"id": 213, "tags": [{"w": 'rènshi', "c": 'v'}, {"w": 'nǐ', "c": None}, {"w": 'hěn', "c": None}, {"w": 'gāoxìng.', "c": 'a'}]},  # rènshi nǐ hěn gāoxìng.
    {"id": 214, "tags": [{"w": 'zàijiàn!', "c": 'v'}]},  # zàijiàn!
    {"id": 215, "tags": [{"w": 'báibái!', "c": None}]},  # báibái!
    {"id": 216, "tags": [{"w": 'yíhuìr', "c": 'n'}, {"w": 'jiàn!', "c": 'v'}]},  # yíhuìr jiàn!
    {"id": 217, "tags": [{"w": 'wǒ', "c": None}, {"w": 'huì', "c": 'v'}, {"w": 'shuō', "c": 'v'}, {"w": 'yìdiǎn', "c": None}, {"w": 'Hànyǔ.', "c": 'n'}]},  # wǒ huì shuō yìdiǎn Hànyǔ.
    {"id": 218, "tags": [{"w": 'qǐng', "c": 'v'}, {"w": 'nǐ', "c": None}, {"w": 'shuō', "c": 'v'}, {"w": 'màn', "c": 'a'}, {"w": 'yìdiǎn.', "c": None}]},  # qǐng nǐ shuō màn yìdiǎn.
    {"id": 219, "tags": [{"w": 'qǐng', "c": 'v'}, {"w": 'nǐ', "c": None}, {"w": 'zài', "c": None}, {"w": 'shuō', "c": 'v'}, {"w": 'yí', "c": None}, {"w": 'cì.', "c": 'n'}]},  # qǐng nǐ zài shuō yí cì.
    {"id": 220, "tags": [{"w": 'zhège', "c": None}, {"w": 'Hànyǔ', "c": 'n'}, {"w": 'zěnme', "c": None}, {"w": 'shuō?', "c": 'v'}]},  # zhège Hànyǔ zěnme shuō?
    {"id": 221, "tags": [{"w": 'nǐ', "c": None}, {"w": 'huì', "c": 'v'}, {"w": 'shuō', "c": 'v'}, {"w": 'Yīngyǔ', "c": 'n'}, {"w": 'ma?', "c": None}]},  # nǐ huì shuō Yīngyǔ ma?
    {"id": 222, "tags": [{"w": 'wǒ', "c": None}, {"w": 'bù', "c": None}, {"w": 'dǒng.', "c": 'v'}]},  # wǒ bù dǒng.
    {"id": 247, "tags": [{"w": 'xièxie!', "c": 'v'}]},  # xièxie!
    {"id": 248, "tags": [{"w": 'tài', "c": None}, {"w": 'xièxie', "c": 'v'}, {"w": 'le!', "c": None}]},  # tài xièxie le!
    {"id": 249, "tags": [{"w": 'bú', "c": None}, {"w": 'kèqi.', "c": 'a'}]},  # bú kèqi.
    {"id": 250, "tags": [{"w": 'duìbuqǐ!', "c": 'v'}]},  # duìbuqǐ!
    {"id": 251, "tags": [{"w": 'zhēn', "c": None}, {"w": 'duìbuqǐ.', "c": 'v'}]},  # zhēn duìbuqǐ.
    {"id": 252, "tags": [{"w": 'méi', "c": None}, {"w": 'guānxi.', "c": 'n'}]},  # méi guānxi.
    {"id": 253, "tags": [{"w": 'duì.', "c": 'a'}]},  # duì.
    {"id": 254, "tags": [{"w": 'bú', "c": None}, {"w": 'shì.', "c": 'v'}]},  # bú shì.
    {"id": 255, "tags": [{"w": 'wǒ', "c": None}, {"w": 'bù', "c": None}, {"w": 'zhīdào.', "c": 'v'}]},  # wǒ bù zhīdào.
    {"id": 256, "tags": [{"w": 'yī,', "c": None}, {"w": 'èr,', "c": None}, {"w": 'sān.', "c": None}]},  # yī, èr, sān.
    {"id": 257, "tags": [{"w": 'jǐ', "c": None}, {"w": 'ge?', "c": None}]},  # jǐ ge?
    {"id": 258, "tags": [{"w": 'qǐng', "c": 'v'}, {"w": 'gěi', "c": 'v'}, {"w": 'wǒ', "c": None}, {"w": 'liǎng', "c": None}, {"w": 'ge.', "c": None}]},  # qǐng gěi wǒ liǎng ge.
    {"id": 259, "tags": [{"w": 'wǒ', "c": None}, {"w": 'yào', "c": 'v'}, {"w": 'yí', "c": None}, {"w": 'ge.', "c": None}]},  # wǒ yào yí ge.
    {"id": 260, "tags": [{"w": 'gòu', "c": 'a'}, {"w": 'le.', "c": None}]},  # gòu le.
    {"id": 261, "tags": [{"w": 'yígòng', "c": None}, {"w": 'duōshao', "c": None}, {"w": 'qián?', "c": 'n'}]},  # yígòng duōshao qián?
    {"id": 262, "tags": [{"w": 'wǒ', "c": None}, {"w": 'yào', "c": 'v'}, {"w": 'bāngzhù.', "c": 'n'}]},  # wǒ yào bāngzhù.
    {"id": 263, "tags": [{"w": 'chūkǒu', "c": 'n'}, {"w": 'zài', "c": 'v'}, {"w": 'nǎli?', "c": None}]},  # chūkǒu zài nǎli?
    {"id": 264, "tags": [{"w": 'wǒ', "c": None}, {"w": 'de', "c": None}, {"w": 'shǒujī', "c": 'n'}, {"w": 'diū', "c": 'v'}, {"w": 'le.', "c": None}]},  # wǒ de shǒujī diū le.
    {"id": 265, "tags": [{"w": 'zhè', "c": None}, {"w": 'shì', "c": 'v'}, {"w": 'wǒ', "c": None}, {"w": 'péngyou.', "c": 'n'}]},  # zhè shì wǒ péngyou.
    {"id": 266, "tags": [{"w": 'wǒ', "c": None}, {"w": 'dì', "c": None}, {"w": 'yī', "c": None}, {"w": 'cì', "c": 'n'}, {"w": 'lái', "c": 'v'}, {"w": 'zhèlǐ.', "c": None}]},  # wǒ dì yī cì lái zhèlǐ.
    {"id": 267, "tags": [{"w": 'zhè', "c": None}, {"w": 'shì', "c": 'v'}, {"w": 'shénme', "c": None}, {"w": 'yìsi?', "c": 'n'}]},  # zhè shì shénme yìsi?
    {"id": 268, "tags": [{"w": 'qǐng', "c": 'v'}, {"w": 'nín', "c": None}, {"w": 'xiě', "c": 'v'}, {"w": 'xiàlái.', "c": None}]},  # qǐng nín xiě xiàlái.
    {"id": 269, "tags": [{"w": 'wǒmen', "c": None}, {"w": 'yígòng', "c": None}, {"w": 'sì', "c": None}, {"w": 'ge', "c": None}, {"w": 'rén.', "c": 'n'}]},  # wǒmen yígòng sì ge rén.
    {"id": 270, "tags": [{"w": 'wǒ', "c": None}, {"w": 'de', "c": None}, {"w": 'hùzhào', "c": 'n'}, {"w": 'diū', "c": 'v'}, {"w": 'le.', "c": None}]},  # wǒ de hùzhào diū le.
    {"id": 271, "tags": [{"w": 'xiànzài', "c": 'n'}, {"w": 'jǐ', "c": None}, {"w": 'diǎn?', "c": 'n'}]},  # xiànzài jǐ diǎn?
    {"id": 272, "tags": [{"w": 'xiànzài', "c": 'n'}, {"w": 'sān', "c": None}, {"w": 'diǎn.', "c": 'n'}]},  # xiànzài sān diǎn.
    {"id": 273, "tags": [{"w": 'diànyǐng', "c": 'n'}, {"w": 'jǐ', "c": None}, {"w": 'diǎn', "c": 'n'}, {"w": 'kāishǐ?', "c": 'v'}]},  # diànyǐng jǐ diǎn kāishǐ?
    {"id": 274, "tags": [{"w": 'jīntiān', "c": 'n'}, {"w": 'xīngqī', "c": 'n'}, {"w": 'jǐ?', "c": None}]},  # jīntiān xīngqī jǐ?
    {"id": 275, "tags": [{"w": 'jīntiān', "c": 'n'}, {"w": 'xīngqī', "c": 'n'}, {"w": 'yī.', "c": None}]},  # jīntiān xīngqī yī.
    {"id": 276, "tags": [{"w": 'nǐ', "c": None}, {"w": 'shénme', "c": None}, {"w": 'shíhou', "c": 'n'}, {"w": 'yǒu', "c": 'v'}, {"w": 'shíjiān?', "c": 'n'}]},  # nǐ shénme shíhou yǒu shíjiān?
    {"id": 277, "tags": [{"w": 'wǒmen', "c": None}, {"w": 'xià', "c": 'a'}, {"w": 'xīngqī', "c": 'n'}, {"w": 'jiàn,', "c": 'v'}, {"w": 'hǎo', "c": 'a'}, {"w": 'ma?', "c": None}]},  # wǒmen xià xīngqī jiàn, hǎo ma?
    {"id": 278, "tags": [{"w": 'nǐ', "c": None}, {"w": 'de', "c": None}, {"w": 'shēngrì', "c": 'n'}, {"w": 'shì', "c": 'v'}, {"w": 'shénme', "c": None}, {"w": 'shíhou?', "c": 'n'}]},  # nǐ de shēngrì shì shénme shíhou?
    {"id": 279, "tags": [{"w": 'wǒ', "c": None}, {"w": 'de', "c": None}, {"w": 'shēngrì', "c": 'n'}, {"w": 'zài', "c": 'v'}, {"w": 'sānyuè.', "c": 'n'}]},  # wǒ de shēngrì zài sānyuè.
    {"id": 280, "tags": [{"w": 'wǒ', "c": None}, {"w": 'míngtiān', "c": 'n'}, {"w": 'méiyǒu', "c": 'v'}, {"w": 'shíjiān.', "c": 'n'}]},  # wǒ míngtiān méiyǒu shíjiān.
    {"id": 281, "tags": [{"w": 'wǒ', "c": None}, {"w": 'shí', "c": None}, {"w": 'diǎn', "c": 'n'}, {"w": 'yǒu', "c": 'v'}, {"w": 'shì.', "c": 'n'}]},  # wǒ shí diǎn yǒu shì.
    {"id": 282, "tags": [{"w": 'zhège', "c": None}, {"w": 'duōshao', "c": None}, {"w": 'qián?', "c": 'n'}]},  # zhège duōshao qián?
    {"id": 283, "tags": [{"w": 'zhège', "c": None}, {"w": 'shí', "c": None}, {"w": 'kuài', "c": None}, {"w": 'qián.', "c": 'n'}]},  # zhège shí kuài qián.
    {"id": 284, "tags": [{"w": 'mǎidān!', "c": 'v'}]},  # mǎidān!
    {"id": 285, "tags": [{"w": 'xǐshǒujiān', "c": 'n'}, {"w": 'zài', "c": 'v'}, {"w": 'nǎli?', "c": None}]},  # xǐshǒujiān zài nǎli?
    {"id": 471, "tags": [{"w": 'nǐmen', "c": None}, {"w": 'shì', "c": 'v'}, {"w": 'xuésheng', "c": 'n'}, {"w": 'ma?', "c": None}]},  # nǐmen shì xuésheng ma?
    {"id": 480, "tags": [{"w": 'wǒ', "c": None}, {"w": 'zhǐ', "c": None}, {"w": 'yǒu', "c": 'v'}, {"w": 'yí', "c": None}, {"w": 'ge.', "c": None}]},  # wǒ zhǐ yǒu yí ge.
    {"id": 485, "tags": [{"w": 'qǐngwèn,', "c": 'v'}, {"w": 'xǐshǒujiān', "c": 'n'}, {"w": 'zài', "c": 'v'}, {"w": 'nǎli?', "c": None}]},  # qǐngwèn, xǐshǒujiān zài nǎli?
    {"id": 491, "tags": [{"w": 'wǒmen', "c": None}, {"w": 'dāi', "c": 'v'}, {"w": 'wǔ', "c": None}, {"w": 'fēnzhōng.', "c": 'n'}]},  # wǒmen dāi wǔ fēnzhōng.
    {"id": 492, "tags": [{"w": 'qǐng', "c": 'v'}, {"w": 'zài', "c": None}, {"w": 'shuō', "c": 'v'}, {"w": 'yí', "c": None}, {"w": 'biàn.', "c": 'n'}]},  # qǐng zài shuō yí biàn.
]
