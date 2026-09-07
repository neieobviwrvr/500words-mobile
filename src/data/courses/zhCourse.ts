// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_zh.py
// Neu bauen: python bauplan.py zh --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 15 Module, 82 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const CHINESE_COURSE_V2: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 / 她 是 [Slot]",
          "lerntext": "wǒ / nǐ / tā / tā shì [Slot]"
        },
        "frameDe": "ich / du / er / sie bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student / Schüler"
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer"
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund"
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt"
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner / Bedienung"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "是",
            "lerntext": "shì",
            "de": "sein"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 / 她 是 [Slot]",
          "lerntext": "wǒ / nǐ / tā / tā shì [Slot]"
        },
        "frameDe": "ich / du / er / sie bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind"
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr"
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)"
            },
            {
              "schrift": "人",
              "lerntext": "rén",
              "de": "Mensch / Person"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "1.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 / 我们 很 [Slot]",
          "lerntext": "wǒ / nǐ / tā / wǒmen hěn [Slot]"
        },
        "frameDe": "ich / du / er / wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde"
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh"
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt"
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig"
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "很",
            "lerntext": "hěn",
            "de": "sehr"
          }
        ],
        "id": "1.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 / 我们 很 [Slot]",
          "lerntext": "wǒ / nǐ / tā / wǒmen hěn [Slot]"
        },
        "frameDe": "ich / du / er / wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut"
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein"
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)"
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "1.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "的 / 您 / 谁 是 我的 [Slot]",
          "lerntext": "de / nín / shéi shì wǒ de [Slot]"
        },
        "frameDe": "Genitiv- / Attributpartikel / Sie (höflich) / wer ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "的",
            "lerntext": "de",
            "de": "Genitiv- / Attributpartikel"
          },
          {
            "schrift": "您",
            "lerntext": "nín",
            "de": "Sie (höflich)"
          },
          {
            "schrift": "谁",
            "lerntext": "shéi",
            "de": "wer"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater"
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter"
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn"
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter"
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "的",
            "lerntext": "de",
            "de": "Genitiv- / Attributpartikel"
          }
        ],
        "id": "1.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "的 / 您 / 谁 是 我的 [Slot]",
          "lerntext": "de / nín / shéi shì wǒ de [Slot]"
        },
        "frameDe": "Genitiv- / Attributpartikel / Sie (höflich) / wer ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "的",
            "lerntext": "de",
            "de": "Genitiv- / Attributpartikel"
          },
          {
            "schrift": "您",
            "lerntext": "nín",
            "de": "Sie (höflich)"
          },
          {
            "schrift": "谁",
            "lerntext": "shéi",
            "de": "wer"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester"
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder"
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester"
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund"
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "1.6"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Sag, wer du bist und wie es dir geht.",
        "newFrameWords": [],
        "id": "1.7"
      }
    ]
  },
  {
    "number": 2,
    "title": "Das ist, ich habe",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "这 是 [Slot]",
          "lerntext": "zhè shì [Slot]"
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [
          {
            "schrift": "这",
            "lerntext": "zhè",
            "de": "dies / das"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r) / das da"
          },
          {
            "schrift": "哪",
            "lerntext": "nǎ",
            "de": "welche(r)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch"
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch"
            },
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl"
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher / Glas"
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy"
            },
            {
              "schrift": "谁",
              "lerntext": "shéi",
              "de": "wer"
            },
            {
              "schrift": "哪",
              "lerntext": "nǎ",
              "de": "welche(r)"
            },
            {
              "schrift": "您",
              "lerntext": "nín",
              "de": "Sie (höflich)"
            },
            {
              "schrift": "她",
              "lerntext": "tā",
              "de": "sie"
            },
            {
              "schrift": "我们",
              "lerntext": "wǒmen",
              "de": "wir"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "这",
            "lerntext": "zhè",
            "de": "dies / das"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r) / das da"
          }
        ],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "这 是 [Slot]",
          "lerntext": "zhè shì [Slot]"
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [
          {
            "schrift": "这",
            "lerntext": "zhè",
            "de": "dies / das"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r) / das da"
          },
          {
            "schrift": "哪",
            "lerntext": "nǎ",
            "de": "welche(r)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer"
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung"
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding / Sache"
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung"
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche"
            },
            {
              "schrift": "谁",
              "lerntext": "shéi",
              "de": "wer"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein"
            },
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester"
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester"
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 / 我们 有 [Slot]",
          "lerntext": "wǒ / nǐ / tā / wǒmen yǒu [Slot]"
        },
        "frameDe": "ich / du / er / wir habe [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld"
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit"
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage / Problem"
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause / Familie"
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer"
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut"
            },
            {
              "schrift": "哪",
              "lerntext": "nǎ",
              "de": "welche(r)"
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch"
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)"
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "有",
            "lerntext": "yǒu",
            "de": "haben"
          }
        ],
        "id": "2.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 / 我们 有 [Slot]",
          "lerntext": "wǒ / nǐ / tā / wǒmen yǒu [Slot]"
        },
        "frameDe": "ich / du / er / wir habe [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten / Arbeit"
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma"
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag"
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name"
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe"
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung"
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)"
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter"
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch"
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "这 是 [Slot] 的 书",
          "lerntext": "zhè shì [Slot] de shū"
        },
        "frameDe": "Das ist [Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze"
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund"
            },
            {
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket / Karte"
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür"
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg / Straße"
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe"
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit"
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy"
            },
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer"
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause / Familie"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.5"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Zeig auf drei Dinge und sag, was sie sind.",
        "newFrameWords": [],
        "id": "2.6"
      }
    ]
  },
  {
    "number": 3,
    "title": "Ich will, ich brauche",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 我们 想 [Slot]",
          "lerntext": "wǒ / nǐ / wǒmen xiǎng [Slot]"
        },
        "frameDe": "ich / du / wir möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen"
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken"
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen"
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen / schauen"
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen"
            },
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze"
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen / brauchen"
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name"
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde"
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student / Schüler"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "想",
            "lerntext": "xiǎng",
            "de": "möchten / wollen"
          },
          {
            "schrift": "要",
            "lerntext": "yào",
            "de": "wollen / brauchen"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 我们 想 [Slot]",
          "lerntext": "wǒ / nǐ / wǒmen xiǎng [Slot]"
        },
        "frameDe": "ich / du / wir möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "去",
              "lerntext": "qù",
              "de": "gehen / fahren"
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen"
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen / laufen"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen"
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen"
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen"
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen / schauen"
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn"
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund"
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "3.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 他 要 [Slot]",
          "lerntext": "wǒ / tā yào [Slot]"
        },
        "frameDe": "ich / er möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser"
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee"
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee"
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier"
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch"
            },
            {
              "schrift": "您",
              "lerntext": "nín",
              "de": "Sie (höflich)"
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer"
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma"
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen / laufen"
            },
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 他 要 [Slot]",
          "lerntext": "wǒ / tā yào [Slot]"
        },
        "frameDe": "ich / er möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis"
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht / Essen"
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst"
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel"
            },
            {
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei"
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche"
            },
            {
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket / Karte"
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee"
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "3.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "请 给 我 [Slot]",
          "lerntext": "qǐng gěi wǒ [Slot]"
        },
        "frameDe": "Bitte gib mir [Slot].",
        "pronouns": [
          {
            "schrift": "请",
            "lerntext": "qǐng",
            "de": "bitte"
          },
          {
            "schrift": "给",
            "lerntext": "gěi",
            "de": "geben"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin"
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch"
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch"
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone"
            },
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld"
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel"
            },
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis"
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch"
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht / Essen"
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "请",
            "lerntext": "qǐng",
            "de": "bitte"
          },
          {
            "schrift": "给",
            "lerntext": "gěi",
            "de": "geben"
          }
        ],
        "id": "3.5"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Bestell dir etwas zu essen und zu trinken.",
        "newFrameWords": [],
        "id": "3.6"
      }
    ]
  },
  {
    "number": 4,
    "title": "Nicht und Frage",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "不 / 没 / 别 不 [Slot]",
          "lerntext": "bù / méi / bié bù [Slot]"
        },
        "frameDe": "nicht / nicht (Vergangenheit) / nicht (Aufforderung) [Slot] nicht.",
        "pronouns": [
          {
            "schrift": "不",
            "lerntext": "bù",
            "de": "nicht"
          },
          {
            "schrift": "没",
            "lerntext": "méi",
            "de": "nicht (Vergangenheit)"
          },
          {
            "schrift": "别",
            "lerntext": "bié",
            "de": "nicht (Aufforderung)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen"
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen"
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen"
            },
            {
              "schrift": "喜欢",
              "lerntext": "xǐhuan",
              "de": "mögen"
            },
            {
              "schrift": "会",
              "lerntext": "huì",
              "de": "können (erlernt)"
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch"
            },
            {
              "schrift": "去",
              "lerntext": "qù",
              "de": "gehen / fahren"
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt"
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding / Sache"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "不",
            "lerntext": "bù",
            "de": "nicht"
          },
          {
            "schrift": "没",
            "lerntext": "méi",
            "de": "nicht (Vergangenheit)"
          },
          {
            "schrift": "别",
            "lerntext": "bié",
            "de": "nicht (Aufforderung)"
          }
        ],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "你 / 他 / 她 [Slot] 吗?",
          "lerntext": "nǐ / tā / tā [Slot] ma?"
        },
        "frameDe": "[Slot] du / er / sie?",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen"
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten / Arbeit"
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen"
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren"
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen"
            },
            {
              "schrift": "会",
              "lerntext": "huì",
              "de": "können (erlernt)"
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen"
            },
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann"
            },
            {
              "schrift": "人",
              "lerntext": "rén",
              "de": "Mensch / Person"
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg / Straße"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "吗",
            "lerntext": "ma",
            "de": "Fragepartikel"
          }
        ],
        "id": "4.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "这 是 [Slot]?",
          "lerntext": "zhè shì [Slot]?"
        },
        "frameDe": "Was ist das?",
        "pronouns": [
          {
            "schrift": "什么",
            "lerntext": "shénme",
            "de": "was"
          },
          {
            "schrift": "谁",
            "lerntext": "shéi",
            "de": "wer"
          },
          {
            "schrift": "为什么",
            "lerntext": "wèishénme",
            "de": "warum"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung / Sinn"
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch"
            },
            {
              "schrift": "对不起",
              "lerntext": "duìbuqǐ",
              "de": "Entschuldigung"
            },
            {
              "schrift": "没关系",
              "lerntext": "méi guānxi",
              "de": "macht nichts"
            },
            {
              "schrift": "谢谢",
              "lerntext": "xièxie",
              "de": "danke"
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen"
            },
            {
              "schrift": "吧",
              "lerntext": "ba",
              "de": "Vorschlagspartikel"
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen"
            },
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen"
            },
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "什么",
            "lerntext": "shénme",
            "de": "was"
          },
          {
            "schrift": "谁",
            "lerntext": "shéi",
            "de": "wer"
          },
          {
            "schrift": "为什么",
            "lerntext": "wèishénme",
            "de": "warum"
          },
          {
            "schrift": "呢",
            "lerntext": "ne",
            "de": "und du? (Rückfragepartikel)"
          },
          {
            "schrift": "吧",
            "lerntext": "ba",
            "de": "Vorschlagspartikel"
          }
        ],
        "id": "4.3"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Frag jemanden etwas und verneine eine Aussage.",
        "newFrameWords": [],
        "id": "4.4"
      }
    ]
  },
  {
    "number": 5,
    "title": "Wo ist das?",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 在 哪里?",
          "lerntext": "[Slot] zài nǎli?"
        },
        "frameDe": "Wo ist [Slot]?",
        "pronouns": [
          {
            "schrift": "在",
            "lerntext": "zài",
            "de": "sein (Ort) / in"
          },
          {
            "schrift": "哪里",
            "lerntext": "nǎli",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette"
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus"
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)"
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant"
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft / Laden"
            },
            {
              "schrift": "对不起",
              "lerntext": "duìbuqǐ",
              "de": "Entschuldigung"
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen"
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone"
            },
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung / Sinn"
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "在",
            "lerntext": "zài",
            "de": "sein (Ort) / in"
          },
          {
            "schrift": "哪里",
            "lerntext": "nǎli",
            "de": "wo"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 在 哪里?",
          "lerntext": "[Slot] zài nǎli?"
        },
        "frameDe": "Wo ist [Slot]?",
        "pronouns": [
          {
            "schrift": "在",
            "lerntext": "zài",
            "de": "sein (Ort) / in"
          },
          {
            "schrift": "哪里",
            "lerntext": "nǎli",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule"
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen"
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof"
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel"
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer"
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus"
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant"
            },
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen"
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren"
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "5.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "在 [Slot]",
          "lerntext": "zài [Slot]"
        },
        "frameDe": "Es ist [Slot].",
        "pronouns": [
          {
            "schrift": "这里",
            "lerntext": "zhèlǐ",
            "de": "hier"
          },
          {
            "schrift": "那里",
            "lerntext": "nàlǐ",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "前面",
              "lerntext": "qiánmiàn",
              "de": "vorne"
            },
            {
              "schrift": "后面",
              "lerntext": "hòumiàn",
              "de": "hinten"
            },
            {
              "schrift": "旁边",
              "lerntext": "pángbiān",
              "de": "daneben"
            },
            {
              "schrift": "左边",
              "lerntext": "zuǒbiān",
              "de": "links"
            },
            {
              "schrift": "右边",
              "lerntext": "yòubiān",
              "de": "rechts"
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer"
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen"
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel"
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen"
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "这里",
            "lerntext": "zhèlǐ",
            "de": "hier"
          },
          {
            "schrift": "那里",
            "lerntext": "nàlǐ",
            "de": "dort"
          }
        ],
        "id": "5.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "在 [Slot]",
          "lerntext": "zài [Slot]"
        },
        "frameDe": "Es ist [Slot].",
        "pronouns": [
          {
            "schrift": "这里",
            "lerntext": "zhèlǐ",
            "de": "hier"
          },
          {
            "schrift": "那里",
            "lerntext": "nàlǐ",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "里",
              "lerntext": "lǐ",
              "de": "in / drinnen"
            },
            {
              "schrift": "上",
              "lerntext": "shàng",
              "de": "auf / oben"
            },
            {
              "schrift": "下",
              "lerntext": "xià",
              "de": "unter / unten"
            },
            {
              "schrift": "外",
              "lerntext": "wài",
              "de": "außen"
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt"
            },
            {
              "schrift": "后面",
              "lerntext": "hòumiàn",
              "de": "hinten"
            },
            {
              "schrift": "左边",
              "lerntext": "zuǒbiān",
              "de": "links"
            },
            {
              "schrift": "前面",
              "lerntext": "qiánmiàn",
              "de": "vorne"
            },
            {
              "schrift": "旁边",
              "lerntext": "pángbiān",
              "de": "daneben"
            },
            {
              "schrift": "呢",
              "lerntext": "ne",
              "de": "und du? (Rückfragepartikel)"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "5.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 吗?",
          "lerntext": "[Slot] ma?"
        },
        "frameDe": "Ist es [Slot]?",
        "pronouns": [
          {
            "schrift": "怎么",
            "lerntext": "zěnme",
            "de": "wie"
          },
          {
            "schrift": "怎么样",
            "lerntext": "zěnmeyàng",
            "de": "wie ist es?"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit"
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah"
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell"
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam"
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu"
            },
            {
              "schrift": "上",
              "lerntext": "shàng",
              "de": "auf / oben"
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt"
            },
            {
              "schrift": "下",
              "lerntext": "xià",
              "de": "unter / unten"
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung"
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "怎么",
            "lerntext": "zěnme",
            "de": "wie"
          },
          {
            "schrift": "怎么样",
            "lerntext": "zěnmeyàng",
            "de": "wie ist es?"
          }
        ],
        "id": "5.5"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Frag nach dem Weg zu drei Orten.",
        "newFrameWords": [],
        "id": "5.6"
      }
    ]
  },
  {
    "number": 6,
    "title": "Zahlen und Preise",
    "lessons": [
      {
        "kind": "series",
        "frame": {
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "零",
              "lerntext": "líng",
              "de": "null"
            },
            {
              "schrift": "一",
              "lerntext": "yī",
              "de": "eins"
            },
            {
              "schrift": "二",
              "lerntext": "èr",
              "de": "zwei"
            },
            {
              "schrift": "三",
              "lerntext": "sān",
              "de": "drei"
            },
            {
              "schrift": "四",
              "lerntext": "sì",
              "de": "vier"
            },
            {
              "schrift": "五",
              "lerntext": "wǔ",
              "de": "fünf"
            },
            {
              "schrift": "六",
              "lerntext": "liù",
              "de": "sechs"
            },
            {
              "schrift": "七",
              "lerntext": "qī",
              "de": "sieben"
            },
            {
              "schrift": "八",
              "lerntext": "bā",
              "de": "acht"
            },
            {
              "schrift": "九",
              "lerntext": "jiǔ",
              "de": "neun"
            },
            {
              "schrift": "十",
              "lerntext": "shí",
              "de": "zehn"
            },
            {
              "schrift": "百",
              "lerntext": "bǎi",
              "de": "hundert"
            },
            {
              "schrift": "千",
              "lerntext": "qiān",
              "de": "tausend"
            }
          ]
        ],
        "newCount": 13,
        "task": null,
        "newFrameWords": [],
        "id": "6.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 个 人",
          "lerntext": "[Slot] ge rén"
        },
        "frameDe": "[Slot] Personen.",
        "pronouns": [
          {
            "schrift": "个",
            "lerntext": "gè",
            "de": "Zählmarke (allgemein)"
          },
          {
            "schrift": "两",
            "lerntext": "liǎng",
            "de": "zwei (vor Zählwort)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "几",
              "lerntext": "jǐ",
              "de": "wie viele"
            },
            {
              "schrift": "多少",
              "lerntext": "duōshao",
              "de": "wie viel"
            },
            {
              "schrift": "多",
              "lerntext": "duō",
              "de": "viel"
            },
            {
              "schrift": "少",
              "lerntext": "shǎo",
              "de": "wenig"
            },
            {
              "schrift": "些",
              "lerntext": "xiē",
              "de": "einige"
            },
            {
              "schrift": "四",
              "lerntext": "sì",
              "de": "vier"
            },
            {
              "schrift": "千",
              "lerntext": "qiān",
              "de": "tausend"
            },
            {
              "schrift": "零",
              "lerntext": "líng",
              "de": "null"
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit"
            },
            {
              "schrift": "三",
              "lerntext": "sān",
              "de": "drei"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "个",
            "lerntext": "gè",
            "de": "Zählmarke (allgemein)"
          },
          {
            "schrift": "两",
            "lerntext": "liǎng",
            "de": "zwei (vor Zählwort)"
          }
        ],
        "id": "6.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "这个 [Slot] 钱?",
          "lerntext": "zhège [Slot] qián?"
        },
        "frameDe": "Wie viel kostet das?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)"
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)"
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer"
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig"
            },
            {
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket / Karte"
            },
            {
              "schrift": "几",
              "lerntext": "jǐ",
              "de": "wie viele"
            },
            {
              "schrift": "些",
              "lerntext": "xiē",
              "de": "einige"
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell"
            },
            {
              "schrift": "六",
              "lerntext": "liù",
              "de": "sechs"
            },
            {
              "schrift": "一",
              "lerntext": "yī",
              "de": "eins"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "6.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "太 [Slot] 了",
          "lerntext": "tài [Slot] le"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [
          {
            "schrift": "太",
            "lerntext": "tài",
            "de": "zu / allzu"
          },
          {
            "schrift": "了",
            "lerntext": "le",
            "de": "Zustandspartikel"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß"
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt"
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm"
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig"
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach"
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)"
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)"
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer"
            },
            {
              "schrift": "百",
              "lerntext": "bǎi",
              "de": "hundert"
            },
            {
              "schrift": "十",
              "lerntext": "shí",
              "de": "zehn"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "太",
            "lerntext": "tài",
            "de": "zu / allzu"
          },
          {
            "schrift": "了",
            "lerntext": "le",
            "de": "Zustandspartikel"
          },
          {
            "schrift": "非常",
            "lerntext": "fēicháng",
            "de": "außerordentlich"
          },
          {
            "schrift": "最",
            "lerntext": "zuì",
            "de": "am meisten"
          },
          {
            "schrift": "更",
            "lerntext": "gèng",
            "de": "noch (mehr)"
          }
        ],
        "id": "6.4"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Frag nach dem Preis und nenne eine Zahl.",
        "newFrameWords": [],
        "id": "6.5"
      }
    ]
  },
  {
    "number": 7,
    "title": "Ich kann, ich muss",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 会 [Slot]",
          "lerntext": "wǒ / nǐ / tā huì [Slot]"
        },
        "frameDe": "ich / du / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen / reden"
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben"
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen"
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen / tun"
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig"
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm"
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß"
            },
            {
              "schrift": "二",
              "lerntext": "èr",
              "de": "zwei"
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "会",
            "lerntext": "huì",
            "de": "können (erlernt)"
          },
          {
            "schrift": "能",
            "lerntext": "néng",
            "de": "können"
          },
          {
            "schrift": "可以",
            "lerntext": "kěyǐ",
            "de": "können / dürfen"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 会 [Slot]",
          "lerntext": "wǒ / nǐ / tā huì [Slot]"
        },
        "frameDe": "ich / du / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen"
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen"
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen"
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben"
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben"
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen / tun"
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören"
            },
            {
              "schrift": "五",
              "lerntext": "wǔ",
              "de": "fünf"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "7.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 必须 [Slot]",
          "lerntext": "wǒ / nǐ bìxū [Slot]"
        },
        "frameDe": "ich / du muss [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten"
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten"
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen / beginnen"
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen"
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen"
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam"
            },
            {
              "schrift": "多少",
              "lerntext": "duōshao",
              "de": "wie viel"
            },
            {
              "schrift": "更",
              "lerntext": "gèng",
              "de": "noch (mehr)"
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "必须",
            "lerntext": "bìxū",
            "de": "müssen"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 我们 可以 [Slot] 吗?",
          "lerntext": "wǒ / wǒmen kěyǐ [Slot] ma?"
        },
        "frameDe": "Darf ich / wir [Slot]?",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen / fahren"
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen"
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren"
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen / tragen"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten"
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen"
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten"
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen"
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen / reden"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "7.4"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Sag, was du kannst und was du heute musst.",
        "newFrameWords": [],
        "id": "7.5"
      }
    ]
  },
  {
    "number": 8,
    "title": "Ich gehe, ich komme",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 我们 / 他 去 [Slot]",
          "lerntext": "wǒ / wǒmen / tā qù [Slot]"
        },
        "frameDe": "ich / wir / er gehe nach [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China"
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking"
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen"
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen"
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung"
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren"
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen"
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig"
            },
            {
              "schrift": "非常",
              "lerntext": "fēicháng",
              "de": "außerordentlich"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen / fahren"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 坐 [Slot]",
          "lerntext": "wǒ / nǐ zuò [Slot]"
        },
        "frameDe": "ich / du fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi"
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug"
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus"
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen"
            },
            {
              "schrift": "从",
              "lerntext": "cóng",
              "de": "von / ab"
            },
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China"
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung"
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen"
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking"
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "正在 / 已经 在 [Slot]",
          "lerntext": "zhèngzài / yǐjīng zài [Slot]"
        },
        "frameDe": "gerade dabei sein zu / schon / bereits bin am [Slot].",
        "pronouns": [
          {
            "schrift": "正在",
            "lerntext": "zhèngzài",
            "de": "gerade dabei sein zu"
          },
          {
            "schrift": "已经",
            "lerntext": "yǐjīng",
            "de": "schon / bereits"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen / abhängen"
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen / schauen"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen / holen"
            },
            {
              "schrift": "再",
              "lerntext": "zài",
              "de": "nochmal / wieder"
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug"
            },
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi"
            },
            {
              "schrift": "还",
              "lerntext": "hái",
              "de": "noch"
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "正在",
            "lerntext": "zhèngzài",
            "de": "gerade dabei sein zu"
          },
          {
            "schrift": "已经",
            "lerntext": "yǐjīng",
            "de": "schon / bereits"
          },
          {
            "schrift": "还",
            "lerntext": "hái",
            "de": "noch"
          },
          {
            "schrift": "就",
            "lerntext": "jiù",
            "de": "dann / gleich"
          },
          {
            "schrift": "再",
            "lerntext": "zài",
            "de": "nochmal / wieder"
          }
        ],
        "id": "8.3"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Sag, wohin du gehst und womit du fährst.",
        "newFrameWords": [],
        "id": "8.4"
      }
    ]
  },
  {
    "number": 9,
    "title": "Zeit",
    "lessons": [
      {
        "kind": "series",
        "frame": {
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "今天",
              "lerntext": "jīntiān",
              "de": "heute"
            },
            {
              "schrift": "明天",
              "lerntext": "míngtiān",
              "de": "morgen"
            },
            {
              "schrift": "昨天",
              "lerntext": "zuótiān",
              "de": "gestern"
            },
            {
              "schrift": "现在",
              "lerntext": "xiànzài",
              "de": "jetzt"
            },
            {
              "schrift": "早上",
              "lerntext": "zǎoshang",
              "de": "morgens"
            },
            {
              "schrift": "上午",
              "lerntext": "shàngwǔ",
              "de": "vormittags"
            },
            {
              "schrift": "中午",
              "lerntext": "zhōngwǔ",
              "de": "mittags"
            },
            {
              "schrift": "下午",
              "lerntext": "xiàwǔ",
              "de": "nachmittags"
            },
            {
              "schrift": "晚上",
              "lerntext": "wǎnshang",
              "de": "abends"
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht"
            }
          ]
        ],
        "newCount": 9,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "今天",
            "lerntext": "jīntiān",
            "de": "heute"
          }
        ],
        "id": "9.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 去",
          "lerntext": "wǒ [Slot] qù"
        },
        "frameDe": "Ich gehe [Slot].",
        "pronouns": [
          {
            "schrift": "什么时候",
            "lerntext": "shénme shíhou",
            "de": "wann"
          },
          {
            "schrift": "时候",
            "lerntext": "shíhou",
            "de": "Zeitpunkt"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "总是",
              "lerntext": "zǒngshì",
              "de": "immer"
            },
            {
              "schrift": "从不",
              "lerntext": "cóngbù",
              "de": "nie"
            },
            {
              "schrift": "也",
              "lerntext": "yě",
              "de": "auch"
            },
            {
              "schrift": "都",
              "lerntext": "dōu",
              "de": "alle / beide"
            },
            {
              "schrift": "一起",
              "lerntext": "yìqǐ",
              "de": "zusammen"
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen"
            },
            {
              "schrift": "上午",
              "lerntext": "shàngwǔ",
              "de": "vormittags"
            },
            {
              "schrift": "昨天",
              "lerntext": "zuótiān",
              "de": "gestern"
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht"
            },
            {
              "schrift": "早上",
              "lerntext": "zǎoshang",
              "de": "morgens"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "什么时候",
            "lerntext": "shénme shíhou",
            "de": "wann"
          },
          {
            "schrift": "时候",
            "lerntext": "shíhou",
            "de": "Zeitpunkt"
          }
        ],
        "id": "9.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "要 [Slot]",
          "lerntext": "yào [Slot]"
        },
        "frameDe": "Es dauert [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute"
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde"
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr"
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat"
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche"
            },
            {
              "schrift": "一起",
              "lerntext": "yìqǐ",
              "de": "zusammen"
            },
            {
              "schrift": "下午",
              "lerntext": "xiàwǔ",
              "de": "nachmittags"
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen"
            },
            {
              "schrift": "从不",
              "lerntext": "cóngbù",
              "de": "nie"
            },
            {
              "schrift": "中午",
              "lerntext": "zhōngwǔ",
              "de": "mittags"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "9.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "要 [Slot]",
          "lerntext": "yào [Slot]"
        },
        "frameDe": "Es dauert [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "号",
              "lerntext": "hào",
              "de": "Tag (Datum)"
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)"
            },
            {
              "schrift": "次",
              "lerntext": "cì",
              "de": "Mal (Zählwort)"
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig / zu Ende"
            },
            {
              "schrift": "过",
              "lerntext": "guo",
              "de": "Erfahrungspartikel"
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche"
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute"
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat"
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde"
            },
            {
              "schrift": "也",
              "lerntext": "yě",
              "de": "auch"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "9.4"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Verabrede dich für morgen.",
        "newFrameWords": [],
        "id": "9.5"
      }
    ]
  },
  {
    "number": 10,
    "title": "Ich mag, ich liebe",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 他 / 她 喜欢 [Slot]",
          "lerntext": "wǒ / tā / tā xǐhuan [Slot]"
        },
        "frameDe": "ich / er / sie mag [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film"
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter"
            },
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze"
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund"
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge"
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben"
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)"
            },
            {
              "schrift": "次",
              "lerntext": "cì",
              "de": "Mal (Zählwort)"
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig / zu Ende"
            },
            {
              "schrift": "过",
              "lerntext": "guo",
              "de": "Erfahrungspartikel"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "喜欢",
            "lerntext": "xǐhuan",
            "de": "mögen"
          },
          {
            "schrift": "爱",
            "lerntext": "ài",
            "de": "lieben"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 他 / 她 喜欢 [Slot]",
          "lerntext": "wǒ / tā / tā xǐhuan [Slot]"
        },
        "frameDe": "ich / er / sie mag [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper"
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf"
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch"
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein"
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat"
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge"
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter"
            },
            {
              "schrift": "就",
              "lerntext": "jiù",
              "de": "dann / gleich"
            },
            {
              "schrift": "多",
              "lerntext": "duō",
              "de": "viel"
            },
            {
              "schrift": "都",
              "lerntext": "dōu",
              "de": "alle / beide"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "这个 很 [Slot]",
          "lerntext": "zhège hěn [Slot]"
        },
        "frameDe": "Das ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)"
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)"
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß"
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll / super"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön / hübsch"
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch"
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein"
            },
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper"
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat"
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 的 衣服",
          "lerntext": "[Slot] de yīfu"
        },
        "frameDe": "[Slot] Kleidung.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß"
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz"
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot"
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich"
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar / verstehen"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön / hübsch"
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll / super"
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf"
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.4"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Sag, was du magst und was nicht.",
        "newFrameWords": [],
        "id": "10.5"
      }
    ]
  },
  {
    "number": 11,
    "title": "Gestern und morgen",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 昨天 [Slot] 了",
          "lerntext": "wǒ zuótiān [Slot] le"
        },
        "frameDe": "Ich habe gestern [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen"
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen"
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen / schauen"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen / tun"
            },
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen"
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot"
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar / verstehen"
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich"
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz"
            },
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "11.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 过",
          "lerntext": "wǒ [Slot] guo"
        },
        "frameDe": "Ich habe schon mal [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "去",
              "lerntext": "qù",
              "de": "gehen / fahren"
            },
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen"
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen / abhängen"
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen"
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen / holen"
            },
            {
              "schrift": "八",
              "lerntext": "bā",
              "de": "acht"
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film"
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "他 [Slot] 我",
          "lerntext": "tā [Slot] wǒ"
        },
        "frameDe": "Er [Slot] mir.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen / sagen"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten"
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen / schenken"
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen"
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen"
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen"
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen"
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage / Problem"
            },
            {
              "schrift": "九",
              "lerntext": "jiǔ",
              "de": "neun"
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "11.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 了",
          "lerntext": "wǒ [Slot] le"
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein"
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden / meinen"
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen"
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen"
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen / schenken"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten"
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen"
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen / sagen"
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner / Bedienung"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "11.4"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Erzähl, was du gestern gemacht hast.",
        "newFrameWords": [],
        "id": "11.5"
      }
    ]
  },
  {
    "number": 12,
    "title": "Sätze verbinden",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 很 累 [Slot] 我 工作",
          "lerntext": "wǒ hěn lèi [Slot] wǒ gōngzuò"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "和",
            "lerntext": "hé",
            "de": "und"
          },
          {
            "schrift": "但是",
            "lerntext": "dànshì",
            "de": "aber"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "因为",
              "lerntext": "yīnwèi",
              "de": "weil"
            },
            {
              "schrift": "所以",
              "lerntext": "suǒyǐ",
              "de": "deshalb"
            },
            {
              "schrift": "比",
              "lerntext": "bǐ",
              "de": "vergleichen mit / als"
            },
            {
              "schrift": "真",
              "lerntext": "zhēn",
              "de": "wirklich"
            },
            {
              "schrift": "可能",
              "lerntext": "kěnéng",
              "de": "vielleicht"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden / meinen"
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder"
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen"
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette"
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "和",
            "lerntext": "hé",
            "de": "und"
          },
          {
            "schrift": "但是",
            "lerntext": "dànshì",
            "de": "aber"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 去 [Slot] 我 没有 时间",
          "lerntext": "wǒ xiǎng qù [Slot] wǒ méiyǒu shíjiān"
        },
        "frameDe": "Ich will gehen, [Slot] ich habe keine Zeit.",
        "pronouns": [
          {
            "schrift": "没有",
            "lerntext": "méiyǒu",
            "de": "ohne / nicht haben"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "今天晚上",
              "lerntext": "jīntiān wǎnshang",
              "de": "heute Abend"
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen"
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen"
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen"
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)"
            },
            {
              "schrift": "可能",
              "lerntext": "kěnéng",
              "de": "vielleicht"
            },
            {
              "schrift": "真",
              "lerntext": "zhēn",
              "de": "wirklich"
            },
            {
              "schrift": "因为",
              "lerntext": "yīnwèi",
              "de": "weil"
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben"
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "没有",
            "lerntext": "méiyǒu",
            "de": "ohne / nicht haben"
          }
        ],
        "id": "12.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot]!",
          "lerntext": "[Slot]!"
        },
        "frameDe": "[Slot]!",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "再见",
              "lerntext": "zàijiàn",
              "de": "auf Wiedersehen"
            },
            {
              "schrift": "不客气",
              "lerntext": "bú kèqi",
              "de": "gern geschehen"
            },
            {
              "schrift": "喂",
              "lerntext": "wéi",
              "de": "hallo (am Telefon)"
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)"
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen"
            },
            {
              "schrift": "今天晚上",
              "lerntext": "jīntiān wǎnshang",
              "de": "heute Abend"
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen"
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen"
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen"
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "12.3"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Erzähl etwas über dich in drei zusammenhängenden Sätzen.",
        "newFrameWords": [],
        "id": "12.4"
      }
    ]
  },
  {
    "number": 13,
    "title": "Körper und Gesundheit",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我的 [Slot] 疼",
          "lerntext": "wǒ de [Slot] téng"
        },
        "frameDe": "Mein [Slot] tut weh.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand"
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr"
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase"
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund"
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf"
            },
            {
              "schrift": "再见",
              "lerntext": "zàijiàn",
              "de": "auf Wiedersehen"
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)"
            },
            {
              "schrift": "不客气",
              "lerntext": "bú kèqi",
              "de": "gern geschehen"
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen"
            },
            {
              "schrift": "号",
              "lerntext": "hào",
              "de": "Tag (Datum)"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "疼",
            "lerntext": "téng",
            "de": "schmerzen / wehtun"
          }
        ],
        "id": "13.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 很 [Slot]",
          "lerntext": "wǒ hěn [Slot]"
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig"
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig"
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl / schmerzhaft"
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl / angenehm"
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein"
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund"
            },
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand"
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr"
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen"
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "13.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 了",
          "lerntext": "wǒ [Slot] le"
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "感冒",
              "lerntext": "gǎnmào",
              "de": "Erkältung"
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben"
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen"
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken"
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen"
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl / schmerzhaft"
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen / tragen"
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein"
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch"
            },
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "13.3"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Sag einem Arzt, was dir fehlt.",
        "newFrameWords": [],
        "id": "13.4"
      }
    ]
  },
  {
    "number": 14,
    "title": "Menschen beschreiben",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "他 很 [Slot]",
          "lerntext": "tā hěn [Slot]"
        },
        "frameDe": "Er ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool / gutaussehend"
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick"
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn"
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt"
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung"
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken"
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben"
            },
            {
              "schrift": "外",
              "lerntext": "wài",
              "de": "außen"
            },
            {
              "schrift": "七",
              "lerntext": "qī",
              "de": "sieben"
            },
            {
              "schrift": "喂",
              "lerntext": "wéi",
              "de": "hallo (am Telefon)"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "他 很 [Slot]",
          "lerntext": "tā hěn [Slot]"
        },
        "frameDe": "Er ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug"
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich"
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant"
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch, bequem"
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz"
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung"
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen"
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür"
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig"
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl / angenehm"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "14.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "他 是 我的 [Slot]",
          "lerntext": "tā shì wǒ de [Slot]"
        },
        "frameDe": "Er ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "们",
            "lerntext": "men",
            "de": "Pluralpartikel (bei Personen: wir, ihr, sie)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege"
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund"
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer"
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt"
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student / Schüler"
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant"
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug"
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch, bequem"
            },
            {
              "schrift": "比",
              "lerntext": "bǐ",
              "de": "vergleichen mit / als"
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "们",
            "lerntext": "men",
            "de": "Pluralpartikel (bei Personen: wir, ihr, sie)"
          }
        ],
        "id": "14.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 是 [Slot]",
          "lerntext": "wǒ shì [Slot]"
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single"
            },
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland"
            },
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China"
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land / Staat"
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai"
            },
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege"
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt"
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz"
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt"
            },
            {
              "schrift": "谢谢",
              "lerntext": "xièxie",
              "de": "danke"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "14.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "这个 是 [Slot] 的",
          "lerntext": "zhège shì [Slot] de"
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau"
            },
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß"
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz"
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot"
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe"
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase"
            },
            {
              "schrift": "从",
              "lerntext": "cóng",
              "de": "von / ab"
            },
            {
              "schrift": "晚上",
              "lerntext": "wǎnshang",
              "de": "abends"
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah"
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool / gutaussehend"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.5"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Beschreib jemanden, den du kennst.",
        "newFrameWords": [],
        "id": "14.6"
      }
    ]
  },
  {
    "number": 15,
    "title": "Alltag und Freizeit",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 喜欢 [Slot]",
          "lerntext": "wǒ xǐhuan [Slot]"
        },
        "frameDe": "Ich mag [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik"
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby"
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse"
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen"
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk"
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau"
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß"
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein"
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single"
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 喜欢 [Slot]",
          "lerntext": "wǒ xǐhuan [Slot]"
        },
        "frameDe": "Ich mag [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)"
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein"
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen"
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen"
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen"
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk"
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse"
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik"
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen"
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 一下",
          "lerntext": "wǒ [Slot] yíxià"
        },
        "frameDe": "Ich [Slot] kurz.",
        "pronouns": [
          {
            "schrift": "一下",
            "lerntext": "yíxià",
            "de": "kurz / mal"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen / sprechen"
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen"
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen"
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen"
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen, anrufen"
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen"
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen"
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein"
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen"
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "一下",
            "lerntext": "yíxià",
            "de": "kurz / mal"
          }
        ],
        "id": "15.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 一下",
          "lerntext": "wǒ [Slot] yíxià"
        },
        "frameDe": "Ich [Slot] kurz.",
        "pronouns": [
          {
            "schrift": "一下",
            "lerntext": "yíxià",
            "de": "kurz / mal"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen / heißen"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben"
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen"
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären"
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen"
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen"
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen"
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen"
            },
            {
              "schrift": "右边",
              "lerntext": "yòubiān",
              "de": "rechts"
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 去",
          "lerntext": "wǒ [Slot] qù"
        },
        "frameDe": "Ich gehe [Slot].",
        "pronouns": [
          {
            "schrift": "以前",
            "lerntext": "yǐqián",
            "de": "früher"
          },
          {
            "schrift": "以后",
            "lerntext": "yǐhòu",
            "de": "später"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende"
            },
            {
              "schrift": "第一次",
              "lerntext": "dì-yī cì",
              "de": "zum ersten Mal"
            },
            {
              "schrift": "遍",
              "lerntext": "biàn",
              "de": "einmal (Zählwort, ganzer Vorgang von Anfang bis Ende)"
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben / Plan"
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm / Ablauf"
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben"
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen / heißen"
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen"
            },
            {
              "schrift": "总是",
              "lerntext": "zǒngshì",
              "de": "immer"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "以前",
            "lerntext": "yǐqián",
            "de": "früher"
          },
          {
            "schrift": "以后",
            "lerntext": "yǐhòu",
            "de": "später"
          }
        ],
        "id": "15.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "在 [Slot]",
          "lerntext": "zài [Slot]"
        },
        "frameDe": "Es ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "里面",
              "lerntext": "lǐmiàn",
              "de": "drinnen"
            },
            {
              "schrift": "外面",
              "lerntext": "wàimiàn",
              "de": "draußen"
            },
            {
              "schrift": "上面",
              "lerntext": "shàngmiàn",
              "de": "oben"
            },
            {
              "schrift": "下面",
              "lerntext": "xiàmiàn",
              "de": "unten"
            },
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station"
            },
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende"
            },
            {
              "schrift": "第一次",
              "lerntext": "dì-yī cì",
              "de": "zum ersten Mal"
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben / Plan"
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß"
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 要 [Slot]",
          "lerntext": "wǒ yào [Slot]"
        },
        "frameDe": "Ich möchte [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln"
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot"
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte"
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch"
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute"
            },
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station"
            },
            {
              "schrift": "上面",
              "lerntext": "shàngmiàn",
              "de": "oben"
            },
            {
              "schrift": "下面",
              "lerntext": "xiàmiàn",
              "de": "unten"
            },
            {
              "schrift": "外面",
              "lerntext": "wàimiàn",
              "de": "draußen"
            },
            {
              "schrift": "现在",
              "lerntext": "xiànzài",
              "de": "jetzt"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "今天 [Slot]",
          "lerntext": "jīntiān [Slot]"
        },
        "frameDe": "Heute [Slot].",
        "pronouns": [
          {
            "schrift": "你好",
            "lerntext": "nǐhǎo",
            "de": "hallo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien"
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag"
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag"
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein"
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein"
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot"
            },
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln"
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute"
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch"
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "你好",
            "lerntext": "nǐhǎo",
            "de": "hallo"
          }
        ],
        "id": "15.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 [Slot]",
          "lerntext": "wǒ xiǎng [Slot]"
        },
        "frameDe": "Ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "应该",
            "lerntext": "yīnggāi",
            "de": "sollen"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten, sich verlieben"
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen"
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern / aufpassen"
            },
            {
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur"
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool / gutaussehend"
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag"
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein"
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein"
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag"
            },
            {
              "schrift": "感冒",
              "lerntext": "gǎnmào",
              "de": "Erkältung"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "应该",
            "lerntext": "yīnggāi",
            "de": "sollen"
          }
        ],
        "id": "15.9"
      },
      {
        "kind": "finisher",
        "frame": {
          "schrift": "",
          "lerntext": ""
        },
        "frameDe": null,
        "pronouns": [],
        "slotGroups": [],
        "newCount": 0,
        "task": "Erzähl, was du am Wochenende machst.",
        "newFrameWords": [],
        "id": "15.10"
      }
    ]
  }
];
