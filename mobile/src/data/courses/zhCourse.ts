// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_zh.py
// Neu bauen: python bauplan.py zh --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 29 Module, 233 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const CHINESE_COURSE_V2: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "niveau": null,
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
              "de": "Student"
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
              "de": "Kellner"
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
              "de": "Mensch"
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
        "frameDe": "Genitiv- / Sie (höflich) / wer ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "的",
            "lerntext": "de",
            "de": "Genitiv-"
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
            "de": "Genitiv-"
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
        "frameDe": "Genitiv- / Sie (höflich) / wer ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "的",
            "lerntext": "de",
            "de": "Genitiv-"
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
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner",
              "wieder": true
            },
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr",
              "wieder": true
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "wieder": true
            },
            {
              "schrift": "人",
              "lerntext": "rén",
              "de": "Mensch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "1.7"
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
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "1.8"
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
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner",
              "wieder": true
            },
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr",
              "wieder": true
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "wieder": true
            },
            {
              "schrift": "人",
              "lerntext": "rén",
              "de": "Mensch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "1.9"
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
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "1.10"
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
        "id": "1.11"
      }
    ]
  },
  {
    "number": 2,
    "title": "Das ist, ich habe",
    "niveau": null,
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
            "de": "dies"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r)"
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
              "de": "Becher"
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy"
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund",
              "wieder": true
            },
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "wieder": true
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester",
              "wieder": true
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder",
              "wieder": true
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "这",
            "lerntext": "zhè",
            "de": "dies"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r)"
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
            "de": "dies"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r)"
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
              "de": "Ding"
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
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher",
              "wieder": true
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy",
              "wieder": true
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund",
              "wieder": true
            },
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "wieder": true
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
              "de": "Frage"
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause"
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer"
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer",
              "wieder": true
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung",
              "wieder": true
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester",
              "wieder": true
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
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause",
              "wieder": true
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer",
              "wieder": true
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.4"
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
              "de": "arbeiten"
            },
            {
              "schrift": "是",
              "lerntext": "shì",
              "de": "sein",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.5"
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
              "de": "Ticket"
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür"
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg"
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "wieder": true
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe",
              "wieder": true
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause",
              "wieder": true
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy",
              "wieder": true
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.6"
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
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "wieder": true
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.7"
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
            "de": "dies"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r)"
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
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.8"
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
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.9"
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
        "id": "2.10"
      }
    ]
  },
  {
    "number": 3,
    "title": "Ich will, ich brauche",
    "niveau": null,
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
              "de": "sehen"
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen"
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "有",
              "lerntext": "yǒu",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "是",
              "lerntext": "shì",
              "de": "sein",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "想",
            "lerntext": "xiǎng",
            "de": "möchten"
          },
          {
            "schrift": "要",
            "lerntext": "yào",
            "de": "wollen"
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
              "de": "gehen"
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen"
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen"
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
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "有",
              "lerntext": "yǒu",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "是",
              "lerntext": "shì",
              "de": "sein",
              "wieder": true
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
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher",
              "wieder": true
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr",
              "wieder": true
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "wieder": true
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
              "de": "Gericht"
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
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "wieder": true
            },
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe",
              "wieder": true
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name",
              "wieder": true
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
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei",
              "wieder": true
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel",
              "wieder": true
            },
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis",
              "wieder": true
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "wieder": true
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
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "3.6"
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
              "de": "Medizin",
              "wieder": true
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "wieder": true
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone",
              "wieder": true
            },
            {
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei",
              "wieder": true
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel",
              "wieder": true
            },
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "3.7"
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
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "3.8"
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
              "de": "Medizin",
              "wieder": true
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "wieder": true
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "3.9"
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
        "id": "3.10"
      }
    ]
  },
  {
    "number": 4,
    "title": "Nicht und Frage",
    "niveau": null,
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
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch"
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
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
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "去",
              "lerntext": "qù",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "4.2"
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
              "de": "arbeiten"
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
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "喜欢",
              "lerntext": "xǐhuan",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "会",
              "lerntext": "huì",
              "de": "können (erlernt)",
              "wieder": true
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "想",
              "lerntext": "xiǎng",
              "de": "möchten",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "wieder": true
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
        "id": "4.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "这 是 什么 [Slot]?",
          "lerntext": "zhè shì shénme [Slot]?"
        },
        "frameDe": "Was für [Slot] ist das?",
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
              "de": "Bedeutung"
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "wieder": true
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
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
        "id": "4.4"
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
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "wieder": true
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "喜欢",
              "lerntext": "xǐhuan",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "会",
              "lerntext": "huì",
              "de": "können (erlernt)",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "4.5"
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
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "wieder": true
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "4.6"
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
        "id": "4.7"
      }
    ]
  },
  {
    "number": 5,
    "title": "Wo ist das?",
    "niveau": null,
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
            "de": "sein (Ort)"
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
              "de": "Geschäft"
            },
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung",
              "wieder": true
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht",
              "wieder": true
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "wieder": true
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester",
              "wieder": true
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy",
              "wieder": true
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "在",
            "lerntext": "zài",
            "de": "sein (Ort)"
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
            "de": "sein (Ort)"
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
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "wieder": true
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung",
              "wieder": true
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "wieder": true
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin",
              "wieder": true
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
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt"
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "wieder": true
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
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
              "schrift": "呢",
              "lerntext": "ne",
              "de": "und du? (Rückfragepartikel)",
              "wieder": true
            },
            {
              "schrift": "吧",
              "lerntext": "ba",
              "de": "Vorschlagspartikel",
              "wieder": true
            },
            {
              "schrift": "吗",
              "lerntext": "ma",
              "de": "Fragepartikel",
              "wieder": true
            },
            {
              "schrift": "为什么",
              "lerntext": "wèishénme",
              "de": "warum",
              "wieder": true
            },
            {
              "schrift": "请",
              "lerntext": "qǐng",
              "de": "bitte",
              "wieder": true
            },
            {
              "schrift": "别",
              "lerntext": "bié",
              "de": "nicht (Aufforderung)",
              "wieder": true
            },
            {
              "schrift": "没",
              "lerntext": "méi",
              "de": "nicht (Vergangenheit)",
              "wieder": true
            },
            {
              "schrift": "很",
              "lerntext": "hěn",
              "de": "sehr",
              "wieder": true
            },
            {
              "schrift": "哪里",
              "lerntext": "nǎli",
              "de": "wo",
              "wieder": true
            },
            {
              "schrift": "不",
              "lerntext": "bù",
              "de": "nicht",
              "wieder": true
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
              "de": "in"
            },
            {
              "schrift": "上",
              "lerntext": "shàng",
              "de": "auf"
            },
            {
              "schrift": "下",
              "lerntext": "xià",
              "de": "unter"
            },
            {
              "schrift": "外",
              "lerntext": "wài",
              "de": "außen"
            },
            {
              "schrift": "前面",
              "lerntext": "qiánmiàn",
              "de": "vorne",
              "wieder": true
            },
            {
              "schrift": "后面",
              "lerntext": "hòumiàn",
              "de": "hinten",
              "wieder": true
            },
            {
              "schrift": "旁边",
              "lerntext": "pángbiān",
              "de": "daneben",
              "wieder": true
            },
            {
              "schrift": "左边",
              "lerntext": "zuǒbiān",
              "de": "links",
              "wieder": true
            },
            {
              "schrift": "右边",
              "lerntext": "yòubiān",
              "de": "rechts",
              "wieder": true
            },
            {
              "schrift": "呢",
              "lerntext": "ne",
              "de": "und du? (Rückfragepartikel)",
              "wieder": true
            },
            {
              "schrift": "吧",
              "lerntext": "ba",
              "de": "Vorschlagspartikel",
              "wieder": true
            },
            {
              "schrift": "吗",
              "lerntext": "ma",
              "de": "Fragepartikel",
              "wieder": true
            },
            {
              "schrift": "为什么",
              "lerntext": "wèishénme",
              "de": "warum",
              "wieder": true
            },
            {
              "schrift": "请",
              "lerntext": "qǐng",
              "de": "bitte",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "5.5"
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
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "wieder": true
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
        "id": "5.6"
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
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "里",
              "lerntext": "lǐ",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "上",
              "lerntext": "shàng",
              "de": "auf",
              "wieder": true
            },
            {
              "schrift": "下",
              "lerntext": "xià",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "外",
              "lerntext": "wài",
              "de": "außen",
              "wieder": true
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "5.7"
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
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "5.8"
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
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "前面",
              "lerntext": "qiánmiàn",
              "de": "vorne",
              "wieder": true
            },
            {
              "schrift": "后面",
              "lerntext": "hòumiàn",
              "de": "hinten",
              "wieder": true
            },
            {
              "schrift": "旁边",
              "lerntext": "pángbiān",
              "de": "daneben",
              "wieder": true
            },
            {
              "schrift": "左边",
              "lerntext": "zuǒbiān",
              "de": "links",
              "wieder": true
            },
            {
              "schrift": "右边",
              "lerntext": "yòubiān",
              "de": "rechts",
              "wieder": true
            },
            {
              "schrift": "呢",
              "lerntext": "ne",
              "de": "und du? (Rückfragepartikel)",
              "wieder": true
            },
            {
              "schrift": "吧",
              "lerntext": "ba",
              "de": "Vorschlagspartikel",
              "wieder": true
            },
            {
              "schrift": "里",
              "lerntext": "lǐ",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "上",
              "lerntext": "shàng",
              "de": "auf",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "5.9"
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
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "5.10"
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
        "id": "5.11"
      }
    ]
  },
  {
    "number": 6,
    "title": "Zahlen und Preise",
    "niveau": null,
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
              "schrift": "八",
              "lerntext": "bā",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "六",
              "lerntext": "liù",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "三",
              "lerntext": "sān",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "一",
              "lerntext": "yī",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "九",
              "lerntext": "jiǔ",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "二",
              "lerntext": "èr",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "七",
              "lerntext": "qī",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "零",
              "lerntext": "líng",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "十",
              "lerntext": "shí",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "四",
              "lerntext": "sì",
              "de": "vier",
              "wieder": true
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
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "6.3"
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
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket"
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "6.4"
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
            "de": "zu"
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
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "太",
            "lerntext": "tài",
            "de": "zu"
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
        "id": "6.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "五",
              "lerntext": "wǔ",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "百",
              "lerntext": "bǎi",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "千",
              "lerntext": "qiān",
              "de": "tausend",
              "wieder": true
            },
            {
              "schrift": "零",
              "lerntext": "líng",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "一",
              "lerntext": "yī",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "二",
              "lerntext": "èr",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "三",
              "lerntext": "sān",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "四",
              "lerntext": "sì",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "六",
              "lerntext": "liù",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "七",
              "lerntext": "qī",
              "de": "sieben",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.6"
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
              "de": "wie viele",
              "wieder": true
            },
            {
              "schrift": "多少",
              "lerntext": "duōshao",
              "de": "wie viel",
              "wieder": true
            },
            {
              "schrift": "多",
              "lerntext": "duō",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "少",
              "lerntext": "shǎo",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "些",
              "lerntext": "xiē",
              "de": "einige",
              "wieder": true
            },
            {
              "schrift": "八",
              "lerntext": "bā",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "九",
              "lerntext": "jiǔ",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "十",
              "lerntext": "shí",
              "de": "zehn",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.7"
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
            "de": "zu"
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
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.8"
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
              "de": "wie viele",
              "wieder": true
            },
            {
              "schrift": "多少",
              "lerntext": "duōshao",
              "de": "wie viel",
              "wieder": true
            },
            {
              "schrift": "多",
              "lerntext": "duō",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "少",
              "lerntext": "shǎo",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "些",
              "lerntext": "xiē",
              "de": "einige",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.9"
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
        "id": "6.10"
      }
    ]
  },
  {
    "number": 7,
    "title": "Ich kann, ich muss",
    "niveau": null,
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
              "de": "sprechen"
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
              "de": "machen"
            },
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "wieder": true
            },
            {
              "schrift": "喜欢",
              "lerntext": "xǐhuan",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "wieder": true
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
            "de": "können"
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
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "wieder": true
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
              "de": "anfangen"
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
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "可以",
              "lerntext": "kěyǐ",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "wieder": true
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
              "de": "öffnen"
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
              "de": "anziehen"
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "wieder": true
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "7.4"
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
              "de": "eintreten",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "wieder": true
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "7.5"
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
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "7.6"
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
              "de": "eintreten",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "7.7"
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
        "id": "7.8"
      }
    ]
  },
  {
    "number": 8,
    "title": "Ich gehe, ich komme",
    "niveau": null,
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
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung"
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "wieder": true
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "wieder": true
            },
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel",
              "wieder": true
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund",
              "wieder": true
            },
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "8.1"
      },
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
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "wieder": true
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "8.2"
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
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China",
              "wieder": true
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "wieder": true
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)",
              "wieder": true
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag",
              "wieder": true
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone",
              "wieder": true
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "8.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 家",
          "lerntext": "[Slot] jiā"
        },
        "frameDe": "[Slot] Hause.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "从",
              "lerntext": "cóng",
              "de": "von"
            },
            {
              "schrift": "非常",
              "lerntext": "fēicháng",
              "de": "außerordentlich",
              "wieder": true
            },
            {
              "schrift": "最",
              "lerntext": "zuì",
              "de": "am meisten",
              "wieder": true
            },
            {
              "schrift": "更",
              "lerntext": "gèng",
              "de": "noch (mehr)",
              "wieder": true
            },
            {
              "schrift": "怎么",
              "lerntext": "zěnme",
              "de": "wie",
              "wieder": true
            },
            {
              "schrift": "下",
              "lerntext": "xià",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "外",
              "lerntext": "wài",
              "de": "außen",
              "wieder": true
            },
            {
              "schrift": "千",
              "lerntext": "qiān",
              "de": "tausend",
              "wieder": true
            },
            {
              "schrift": "怎么样",
              "lerntext": "zěnmeyàng",
              "de": "wie ist es?",
              "wieder": true
            },
            {
              "schrift": "五",
              "lerntext": "wǔ",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "两",
              "lerntext": "liǎng",
              "de": "zwei (vor Zählwort)",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "8.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 家",
          "lerntext": "[Slot] jiā"
        },
        "frameDe": "[Slot] Hause.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen"
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "8.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "正在 / 已经 在 [Slot]",
          "lerntext": "zhèngzài / yǐjīng zài [Slot]"
        },
        "frameDe": "gerade dabei sein zu / schon bin am [Slot].",
        "pronouns": [
          {
            "schrift": "正在",
            "lerntext": "zhèngzài",
            "de": "gerade dabei sein zu"
          },
          {
            "schrift": "已经",
            "lerntext": "yǐjīng",
            "de": "schon"
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
              "de": "spielen"
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen"
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "可以",
              "lerntext": "kěyǐ",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "wieder": true
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
            "de": "schon"
          },
          {
            "schrift": "还",
            "lerntext": "hái",
            "de": "noch"
          },
          {
            "schrift": "就",
            "lerntext": "jiù",
            "de": "dann"
          },
          {
            "schrift": "再",
            "lerntext": "zài",
            "de": "nochmal"
          }
        ],
        "id": "8.6"
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
              "de": "Taxi",
              "wieder": true
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug",
              "wieder": true
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China",
              "wieder": true
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 家",
          "lerntext": "[Slot] jiā"
        },
        "frameDe": "[Slot] Hause.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "从",
              "lerntext": "cóng",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "非常",
              "lerntext": "fēicháng",
              "de": "außerordentlich",
              "wieder": true
            },
            {
              "schrift": "最",
              "lerntext": "zuì",
              "de": "am meisten",
              "wieder": true
            },
            {
              "schrift": "更",
              "lerntext": "gèng",
              "de": "noch (mehr)",
              "wieder": true
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "正在 / 已经 在 [Slot]",
          "lerntext": "zhèngzài / yǐjīng zài [Slot]"
        },
        "frameDe": "gerade dabei sein zu / schon bin am [Slot].",
        "pronouns": [
          {
            "schrift": "正在",
            "lerntext": "zhèngzài",
            "de": "gerade dabei sein zu"
          },
          {
            "schrift": "已经",
            "lerntext": "yǐjīng",
            "de": "schon"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 家",
          "lerntext": "[Slot] jiā"
        },
        "frameDe": "[Slot] Hause.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "从",
              "lerntext": "cóng",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "非常",
              "lerntext": "fēicháng",
              "de": "außerordentlich",
              "wieder": true
            },
            {
              "schrift": "最",
              "lerntext": "zuì",
              "de": "am meisten",
              "wieder": true
            },
            {
              "schrift": "更",
              "lerntext": "gèng",
              "de": "noch (mehr)",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.10"
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
        "id": "8.11"
      }
    ]
  },
  {
    "number": 9,
    "title": "Zeit",
    "niveau": null,
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
              "de": "alle"
            },
            {
              "schrift": "一起",
              "lerntext": "yìqǐ",
              "de": "zusammen"
            },
            {
              "schrift": "就",
              "lerntext": "jiù",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "今天",
              "lerntext": "jīntiān",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "再",
              "lerntext": "zài",
              "de": "nochmal",
              "wieder": true
            },
            {
              "schrift": "还",
              "lerntext": "hái",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "早上",
              "lerntext": "zǎoshang",
              "de": "morgens",
              "wieder": true
            },
            {
              "schrift": "下午",
              "lerntext": "xiàwǔ",
              "de": "nachmittags",
              "wieder": true
            },
            {
              "schrift": "现在",
              "lerntext": "xiànzài",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "明天",
              "lerntext": "míngtiān",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "昨天",
              "lerntext": "zuótiān",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "中午",
              "lerntext": "zhōngwǔ",
              "de": "mittags",
              "wieder": true
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
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi",
              "wieder": true
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug",
              "wieder": true
            },
            {
              "schrift": "时候",
              "lerntext": "shíhou",
              "de": "Zeitpunkt",
              "wieder": true
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "wieder": true
            },
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China",
              "wieder": true
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)",
              "wieder": true
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "wieder": true
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
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi",
              "wieder": true
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug",
              "wieder": true
            },
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "9.4"
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
              "schrift": "过",
              "lerntext": "guo",
              "de": "Erfahrungspartikel"
            },
            {
              "schrift": "也",
              "lerntext": "yě",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "一起",
              "lerntext": "yìqǐ",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "就",
              "lerntext": "jiù",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "都",
              "lerntext": "dōu",
              "de": "alle",
              "wieder": true
            },
            {
              "schrift": "从不",
              "lerntext": "cóngbù",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "晚上",
              "lerntext": "wǎnshang",
              "de": "abends",
              "wieder": true
            },
            {
              "schrift": "今天",
              "lerntext": "jīntiān",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "再",
              "lerntext": "zài",
              "de": "nochmal",
              "wieder": true
            },
            {
              "schrift": "上午",
              "lerntext": "shàngwǔ",
              "de": "vormittags",
              "wieder": true
            },
            {
              "schrift": "还",
              "lerntext": "hái",
              "de": "noch",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "9.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "一 [Slot]",
          "lerntext": "yī [Slot]"
        },
        "frameDe": "Ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "次",
              "lerntext": "cì",
              "de": "Mal (Zählwort)"
            },
            {
              "schrift": "过",
              "lerntext": "guo",
              "de": "Erfahrungspartikel",
              "wieder": true
            },
            {
              "schrift": "总是",
              "lerntext": "zǒngshì",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "早上",
              "lerntext": "zǎoshang",
              "de": "morgens",
              "wieder": true
            },
            {
              "schrift": "也",
              "lerntext": "yě",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "下午",
              "lerntext": "xiàwǔ",
              "de": "nachmittags",
              "wieder": true
            },
            {
              "schrift": "什么时候",
              "lerntext": "shénme shíhou",
              "de": "wann",
              "wieder": true
            },
            {
              "schrift": "现在",
              "lerntext": "xiànzài",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "明天",
              "lerntext": "míngtiān",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "一起",
              "lerntext": "yìqǐ",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "就",
              "lerntext": "jiù",
              "de": "dann",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "9.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 吃 [Slot]",
          "lerntext": "wǒ chī [Slot]"
        },
        "frameDe": "Ich esse [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig"
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "9.7"
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
              "de": "Tag (Datum)",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "wieder": true
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "过",
              "lerntext": "guo",
              "de": "Erfahrungspartikel",
              "wieder": true
            },
            {
              "schrift": "都",
              "lerntext": "dōu",
              "de": "alle",
              "wieder": true
            },
            {
              "schrift": "从不",
              "lerntext": "cóngbù",
              "de": "nie",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "9.8"
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
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "昨天",
              "lerntext": "zuótiān",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "中午",
              "lerntext": "zhōngwǔ",
              "de": "mittags",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "9.9"
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
              "de": "Tag (Datum)",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "wieder": true
            },
            {
              "schrift": "晚上",
              "lerntext": "wǎnshang",
              "de": "abends",
              "wieder": true
            },
            {
              "schrift": "今天",
              "lerntext": "jīntiān",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "再",
              "lerntext": "zài",
              "de": "nochmal",
              "wieder": true
            },
            {
              "schrift": "上午",
              "lerntext": "shàngwǔ",
              "de": "vormittags",
              "wieder": true
            },
            {
              "schrift": "还",
              "lerntext": "hái",
              "de": "noch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "9.10"
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
        "id": "9.11"
      }
    ]
  },
  {
    "number": 10,
    "title": "Ich mag, ich liebe",
    "niveau": null,
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
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "wieder": true
            },
            {
              "schrift": "号",
              "lerntext": "hào",
              "de": "Tag (Datum)",
              "wieder": true
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "时候",
              "lerntext": "shíhou",
              "de": "Zeitpunkt",
              "wieder": true
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner",
              "wieder": true
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
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder",
              "wieder": true
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis",
              "wieder": true
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "wieder": true
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
              "de": "toll"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön"
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "wieder": true
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
              "de": "klar"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.4"
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
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.5"
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
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch",
              "wieder": true
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "wieder": true
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.6"
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
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.7"
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
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch",
              "wieder": true
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.8"
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
        "id": "10.9"
      }
    ]
  },
  {
    "number": 11,
    "title": "Gestern und morgen",
    "niveau": null,
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
              "de": "sehen"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen"
            },
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen"
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "wieder": true
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "wieder": true
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
              "de": "gehen"
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
              "de": "spielen"
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen"
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "wieder": true
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "wieder": true
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
              "de": "mitteilen"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten"
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen"
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
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "wieder": true
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "wieder": true
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
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "wieder": true
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "wieder": true
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "11.4"
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
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden"
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
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "11.5"
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
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "11.6"
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
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "11.7"
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
        "id": "11.8"
      }
    ]
  },
  {
    "number": 12,
    "title": "Sätze verbinden",
    "niveau": null,
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
            }
          ]
        ],
        "newCount": 2,
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
          "schrift": "我 [Slot] 累",
          "lerntext": "wǒ [Slot] lèi"
        },
        "frameDe": "Ich bin [Slot] müde.",
        "pronouns": [],
        "slotGroups": [
          [
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
              "schrift": "次",
              "lerntext": "cì",
              "de": "Mal (Zählwort)",
              "wieder": true
            },
            {
              "schrift": "正在",
              "lerntext": "zhèngzài",
              "de": "gerade dabei sein zu",
              "wieder": true
            },
            {
              "schrift": "已经",
              "lerntext": "yǐjīng",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "百",
              "lerntext": "bǎi",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "早上",
              "lerntext": "zǎoshang",
              "de": "morgens",
              "wieder": true
            },
            {
              "schrift": "也",
              "lerntext": "yě",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "下午",
              "lerntext": "xiàwǔ",
              "de": "nachmittags",
              "wieder": true
            },
            {
              "schrift": "呢",
              "lerntext": "ne",
              "de": "und du? (Rückfragepartikel)",
              "wieder": true
            },
            {
              "schrift": "右边",
              "lerntext": "yòubiān",
              "de": "rechts",
              "wieder": true
            },
            {
              "schrift": "前面",
              "lerntext": "qiánmiàn",
              "de": "vorne",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "12.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 你 高",
          "lerntext": "wǒ [Slot] nǐ gāo"
        },
        "frameDe": "Ich bin größer als du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "比",
              "lerntext": "bǐ",
              "de": "vergleichen mit"
            },
            {
              "schrift": "真",
              "lerntext": "zhēn",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "可能",
              "lerntext": "kěnéng",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "次",
              "lerntext": "cì",
              "de": "Mal (Zählwort)",
              "wieder": true
            },
            {
              "schrift": "怎么",
              "lerntext": "zěnme",
              "de": "wie",
              "wieder": true
            },
            {
              "schrift": "什么时候",
              "lerntext": "shénme shíhou",
              "de": "wann",
              "wieder": true
            },
            {
              "schrift": "现在",
              "lerntext": "xiànzài",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "明天",
              "lerntext": "míngtiān",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "一起",
              "lerntext": "yìqǐ",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "非常",
              "lerntext": "fēicháng",
              "de": "außerordentlich",
              "wieder": true
            },
            {
              "schrift": "就",
              "lerntext": "jiù",
              "de": "dann",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "12.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 有 时间",
          "lerntext": "wǒ [Slot] yǒu shíjiān"
        },
        "frameDe": "Ich habe [Slot] Zeit.",
        "pronouns": [
          {
            "schrift": "没有",
            "lerntext": "méiyǒu",
            "de": "ohne"
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
              "schrift": "比",
              "lerntext": "bǐ",
              "de": "vergleichen mit",
              "wieder": true
            },
            {
              "schrift": "真",
              "lerntext": "zhēn",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "可能",
              "lerntext": "kěnéng",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "太",
              "lerntext": "tài",
              "de": "zu",
              "wieder": true
            },
            {
              "schrift": "正在",
              "lerntext": "zhèngzài",
              "de": "gerade dabei sein zu",
              "wieder": true
            },
            {
              "schrift": "几",
              "lerntext": "jǐ",
              "de": "wie viele",
              "wieder": true
            },
            {
              "schrift": "最",
              "lerntext": "zuì",
              "de": "am meisten",
              "wieder": true
            },
            {
              "schrift": "八",
              "lerntext": "bā",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "六",
              "lerntext": "liù",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "都",
              "lerntext": "dōu",
              "de": "alle",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "没有",
            "lerntext": "méiyǒu",
            "de": "ohne"
          }
        ],
        "id": "12.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "今天 我 [Slot]",
          "lerntext": "jīntiān wǒ [Slot]"
        },
        "frameDe": "Heute [Slot] ich.",
        "pronouns": [],
        "slotGroups": [
          [
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
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "12.5"
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
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)"
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch",
              "wieder": true
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "wieder": true
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "12.6"
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
              "schrift": "今天晚上",
              "lerntext": "jīntiān wǎnshang",
              "de": "heute Abend",
              "wieder": true
            },
            {
              "schrift": "比",
              "lerntext": "bǐ",
              "de": "vergleichen mit",
              "wieder": true
            },
            {
              "schrift": "没有",
              "lerntext": "méiyǒu",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "真",
              "lerntext": "zhēn",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "里",
              "lerntext": "lǐ",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "三",
              "lerntext": "sān",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "可能",
              "lerntext": "kěnéng",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "从不",
              "lerntext": "cóngbù",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "旁边",
              "lerntext": "pángbiān",
              "de": "daneben",
              "wieder": true
            },
            {
              "schrift": "九",
              "lerntext": "jiǔ",
              "de": "neun",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "12.7"
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
              "schrift": "谢谢",
              "lerntext": "xièxie",
              "de": "danke"
            },
            {
              "schrift": "再见",
              "lerntext": "zàijiàn",
              "de": "auf Wiedersehen",
              "wieder": true
            },
            {
              "schrift": "不客气",
              "lerntext": "bú kèqi",
              "de": "gern geschehen",
              "wieder": true
            },
            {
              "schrift": "喂",
              "lerntext": "wéi",
              "de": "hallo (am Telefon)",
              "wieder": true
            },
            {
              "schrift": "对不起",
              "lerntext": "duìbuqǐ",
              "de": "Entschuldigung",
              "wieder": true
            },
            {
              "schrift": "没关系",
              "lerntext": "méi guānxi",
              "de": "macht nichts",
              "wieder": true
            },
            {
              "schrift": "今天晚上",
              "lerntext": "jīntiān wǎnshang",
              "de": "heute Abend",
              "wieder": true
            },
            {
              "schrift": "比",
              "lerntext": "bǐ",
              "de": "vergleichen mit",
              "wieder": true
            },
            {
              "schrift": "二",
              "lerntext": "èr",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "下",
              "lerntext": "xià",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "七",
              "lerntext": "qī",
              "de": "sieben",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "12.8"
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
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen"
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen"
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "12.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 十 [Slot]",
          "lerntext": "wǒ shí [Slot]"
        },
        "frameDe": "Ich bin zehn [Slot] alt.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)"
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "wieder": true
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr",
              "wieder": true
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "12.10"
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
              "schrift": "谢谢",
              "lerntext": "xièxie",
              "de": "danke",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "wieder": true
            },
            {
              "schrift": "再见",
              "lerntext": "zàijiàn",
              "de": "auf Wiedersehen",
              "wieder": true
            },
            {
              "schrift": "不客气",
              "lerntext": "bú kèqi",
              "de": "gern geschehen",
              "wieder": true
            },
            {
              "schrift": "喂",
              "lerntext": "wéi",
              "de": "hallo (am Telefon)",
              "wieder": true
            },
            {
              "schrift": "对不起",
              "lerntext": "duìbuqǐ",
              "de": "Entschuldigung",
              "wieder": true
            },
            {
              "schrift": "没关系",
              "lerntext": "méi guānxi",
              "de": "macht nichts",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.11"
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
              "schrift": "谢谢",
              "lerntext": "xièxie",
              "de": "danke",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.12"
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
        "id": "12.13"
      }
    ]
  },
  {
    "number": 13,
    "title": "Körper und Gesundheit",
    "niveau": null,
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
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "wieder": true
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi",
              "wieder": true
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "疼",
            "lerntext": "téng",
            "de": "schmerzen"
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
              "de": "unwohl"
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl"
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "wieder": true
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
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
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "wieder": true
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase",
              "wieder": true
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "wieder": true
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "wieder": true
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "wieder": true
            },
            {
              "schrift": "号",
              "lerntext": "hào",
              "de": "Tag (Datum)",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "13.3"
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
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein"
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "wieder": true
            },
            {
              "schrift": "可以",
              "lerntext": "kěyǐ",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "想",
              "lerntext": "xiǎng",
              "de": "möchten",
              "wieder": true
            },
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "13.4"
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
              "de": "Erkältung",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "wieder": true
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "wieder": true
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "13.5"
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
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "13.6"
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
              "de": "Erkältung",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "13.7"
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
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "13.8"
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
        "id": "13.9"
      }
    ]
  },
  {
    "number": 14,
    "title": "Menschen beschreiben",
    "niveau": null,
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
              "de": "cool"
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
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "wieder": true
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "wieder": true
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
              "de": "praktisch"
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz"
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "wieder": true
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
              "de": "Student"
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "wieder": true
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "wieder": true
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "感冒",
              "lerntext": "gǎnmào",
              "de": "Erkältung",
              "wieder": true
            },
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "wieder": true
            },
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper",
              "wieder": true
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
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.4"
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
              "de": "Land"
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai"
            },
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "wieder": true
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "14.5"
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
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.6"
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
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe"
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai",
              "wieder": true
            },
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland",
              "wieder": true
            },
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.7"
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
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "wieder": true
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai",
              "wieder": true
            },
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.8"
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
        "id": "14.9"
      }
    ]
  },
  {
    "number": 15,
    "title": "Alltag und Freizeit",
    "niveau": null,
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
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk"
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai",
              "wieder": true
            },
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland",
              "wieder": true
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
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
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen"
            },
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
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "wieder": true
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
          "schrift": "我 喜欢 [Slot]",
          "lerntext": "wǒ xǐhuan [Slot]"
        },
        "frameDe": "Ich mag [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen"
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
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
            "de": "kurz"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen"
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
              "de": "schlagen"
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "一下",
            "lerntext": "yíxià",
            "de": "kurz"
          }
        ],
        "id": "15.4"
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
            "de": "kurz"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen"
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
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.5"
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
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm"
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "wieder": true
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai",
              "wieder": true
            },
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag",
              "wieder": true
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
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
        "id": "15.6"
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
              "schrift": "们",
              "lerntext": "men",
              "de": "Pluralpartikel (bei Personen: wir, ihr, sie)",
              "wieder": true
            },
            {
              "schrift": "中午",
              "lerntext": "zhōngwǔ",
              "de": "mittags",
              "wieder": true
            },
            {
              "schrift": "零",
              "lerntext": "líng",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "多少",
              "lerntext": "duōshao",
              "de": "wie viel",
              "wieder": true
            },
            {
              "schrift": "多",
              "lerntext": "duō",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "从",
              "lerntext": "cóng",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "对不起",
              "lerntext": "duìbuqǐ",
              "de": "Entschuldigung",
              "wieder": true
            },
            {
              "schrift": "些",
              "lerntext": "xiē",
              "de": "einige",
              "wieder": true
            },
            {
              "schrift": "四",
              "lerntext": "sì",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "千",
              "lerntext": "qiān",
              "de": "tausend",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "15.7"
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
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben"
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "15.8"
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
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station"
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "wieder": true
            },
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "wieder": true
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "时候",
              "lerntext": "shíhou",
              "de": "Zeitpunkt",
              "wieder": true
            },
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis",
              "wieder": true
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "15.9"
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
              "schrift": "遍",
              "lerntext": "biàn",
              "de": "einmal (Zählwort, ganzer Vorgang von Anfang bis Ende)",
              "wieder": true
            },
            {
              "schrift": "第一次",
              "lerntext": "dì-yī cì",
              "de": "zum ersten Mal",
              "wieder": true
            },
            {
              "schrift": "两",
              "lerntext": "liǎng",
              "de": "zwei (vor Zählwort)",
              "wieder": true
            },
            {
              "schrift": "不客气",
              "lerntext": "bú kèqi",
              "de": "gern geschehen",
              "wieder": true
            },
            {
              "schrift": "再见",
              "lerntext": "zàijiàn",
              "de": "auf Wiedersehen",
              "wieder": true
            },
            {
              "schrift": "次",
              "lerntext": "cì",
              "de": "Mal (Zählwort)",
              "wieder": true
            },
            {
              "schrift": "没关系",
              "lerntext": "méi guānxi",
              "de": "macht nichts",
              "wieder": true
            },
            {
              "schrift": "怎么样",
              "lerntext": "zěnmeyàng",
              "de": "wie ist es?",
              "wieder": true
            },
            {
              "schrift": "百",
              "lerntext": "bǎi",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "们",
              "lerntext": "men",
              "de": "Pluralpartikel (bei Personen: wir, ihr, sie)",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "15.10"
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
              "de": "U-Bahn-Station",
              "wieder": true
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "wieder": true
            },
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "wieder": true
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.11"
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
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln",
              "wieder": true
            },
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station",
              "wieder": true
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "wieder": true
            },
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "你好",
            "lerntext": "nǐhǎo",
            "de": "hallo"
          }
        ],
        "id": "15.12"
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
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "15.13"
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
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool"
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "应该",
            "lerntext": "yīnggāi",
            "de": "sollen"
          }
        ],
        "id": "15.14"
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
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur"
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "wieder": true
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag",
              "wieder": true
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln",
              "wieder": true
            },
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station",
              "wieder": true
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "wieder": true
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "15.15"
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
              "de": "daten"
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen"
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern"
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "15.16"
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
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "wieder": true
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "wieder": true
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.17"
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
              "de": "drinnen",
              "wieder": true
            },
            {
              "schrift": "外面",
              "lerntext": "wàimiàn",
              "de": "draußen",
              "wieder": true
            },
            {
              "schrift": "上面",
              "lerntext": "shàngmiàn",
              "de": "oben",
              "wieder": true
            },
            {
              "schrift": "下面",
              "lerntext": "xiàmiàn",
              "de": "unten",
              "wieder": true
            },
            {
              "schrift": "遍",
              "lerntext": "biàn",
              "de": "einmal (Zählwort, ganzer Vorgang von Anfang bis Ende)",
              "wieder": true
            },
            {
              "schrift": "第一次",
              "lerntext": "dì-yī cì",
              "de": "zum ersten Mal",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.18"
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
              "de": "drinnen",
              "wieder": true
            },
            {
              "schrift": "外面",
              "lerntext": "wàimiàn",
              "de": "draußen",
              "wieder": true
            },
            {
              "schrift": "上面",
              "lerntext": "shàngmiàn",
              "de": "oben",
              "wieder": true
            },
            {
              "schrift": "下面",
              "lerntext": "xiàmiàn",
              "de": "unten",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.19"
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
        "id": "15.20"
      }
    ]
  },
  {
    "number": 16,
    "title": "Was hast du gemacht?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 了",
          "lerntext": "wǒ [Slot] le"
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen"
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen"
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "wieder": true
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 了",
          "lerntext": "wǒ [Slot] le"
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen"
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben"
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören"
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "wieder": true
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "16.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "昨天 我 [Slot] 了",
          "lerntext": "zuótiān wǒ [Slot] le"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten"
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "wieder": true
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "昨天 我 [Slot] 了",
          "lerntext": "zuótiān wǒ [Slot] le"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten"
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen"
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "16.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 已经 [Slot] 过",
          "lerntext": "wǒ yǐjīng [Slot] guo"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar"
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 已经 [Slot] 过",
          "lerntext": "wǒ yǐjīng [Slot] guo"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen"
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben"
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen"
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen"
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "16.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 已经 [Slot] 过",
          "lerntext": "wǒ yǐjīng [Slot] guo"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen"
            },
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.7"
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
        "id": "16.8"
      }
    ]
  },
  {
    "number": 17,
    "title": "Du, ihr, sie",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "你 [Slot]",
          "lerntext": "nǐ [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen"
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen"
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "wieder": true
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "应该",
              "lerntext": "yīnggāi",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "你 [Slot]",
          "lerntext": "nǐ [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen"
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "他 [Slot]",
          "lerntext": "tā [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten"
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "他 [Slot]",
          "lerntext": "tā [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "可以",
              "lerntext": "kěyǐ",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我们 [Slot]",
          "lerntext": "wǒmen [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar"
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我们 [Slot]",
          "lerntext": "wǒmen [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen"
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben"
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen"
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "她 [Slot]",
          "lerntext": "tā [Slot]"
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben"
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen"
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "wieder": true
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.7"
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
        "task": "Frag jemanden, was er macht - und antworte.",
        "newFrameWords": [],
        "id": "17.8"
      }
    ]
  },
  {
    "number": 18,
    "title": "Größer, besser, lieber",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "这个 更 [Slot]",
          "lerntext": "zhège gèng [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant"
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig"
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich"
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer"
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde"
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "18.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "这个 更 [Slot]",
          "lerntext": "zhège gèng [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig"
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "18.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 跟 你 一样 [Slot]",
          "lerntext": "wǒ gēn nǐ yīyàng [Slot]"
        },
        "frameDe": "Ich bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein"
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
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "wieder": true
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "比",
            "lerntext": "bǐ",
            "de": "vergleichen mit"
          },
          {
            "schrift": "一样",
            "lerntext": "yíyàng",
            "de": "gleich"
          }
        ],
        "id": "18.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 跟 你 一样 [Slot]",
          "lerntext": "wǒ gēn nǐ yīyàng [Slot]"
        },
        "frameDe": "Ich bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön"
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm"
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt"
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "18.4"
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
        "task": "Vergleich zwei Dinge miteinander.",
        "newFrameWords": [],
        "id": "18.5"
      }
    ]
  },
  {
    "number": 19,
    "title": "Ich fühle mich",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 觉得 [Slot]",
          "lerntext": "wǒ juéde [Slot]"
        },
        "frameDe": "Ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
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
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig"
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit"
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung"
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt"
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "wieder": true
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 觉得 [Slot]",
          "lerntext": "wǒ juéde [Slot]"
        },
        "frameDe": "Ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön"
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我们 [Slot] 见面",
          "lerntext": "wǒmen [Slot] jiànmiàn"
        },
        "frameDe": "Wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
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
              "schrift": "现在",
              "lerntext": "xiànzài",
              "de": "jetzt"
            },
            {
              "schrift": "昨天",
              "lerntext": "zuótiān",
              "de": "gestern"
            },
            {
              "schrift": "常",
              "lerntext": "cháng",
              "de": "oft"
            },
            {
              "schrift": "总是",
              "lerntext": "zǒngshì",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "从不",
              "lerntext": "cóngbù",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "一样",
              "lerntext": "yíyàng",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "你好",
              "lerntext": "nǐhǎo",
              "de": "hallo",
              "wieder": true
            },
            {
              "schrift": "上面",
              "lerntext": "shàngmiàn",
              "de": "oben",
              "wieder": true
            },
            {
              "schrift": "外面",
              "lerntext": "wàimiàn",
              "de": "draußen",
              "wieder": true
            },
            {
              "schrift": "遍",
              "lerntext": "biàn",
              "de": "einmal (Zählwort, ganzer Vorgang von Anfang bis Ende)",
              "wieder": true
            },
            {
              "schrift": "左边",
              "lerntext": "zuǒbiān",
              "de": "links",
              "wieder": true
            },
            {
              "schrift": "后面",
              "lerntext": "hòumiàn",
              "de": "hinten",
              "wieder": true
            },
            {
              "schrift": "晚上",
              "lerntext": "wǎnshang",
              "de": "abends",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "见",
            "lerntext": "jiàn",
            "de": "sich treffen"
          }
        ],
        "id": "19.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我们 [Slot] 见面",
          "lerntext": "wǒmen [Slot] jiànmiàn"
        },
        "frameDe": "Wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "从不",
              "lerntext": "cóngbù",
              "de": "nie"
            },
            {
              "schrift": "总是",
              "lerntext": "zǒngshì",
              "de": "immer"
            },
            {
              "schrift": "常",
              "lerntext": "cháng",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "明天",
              "lerntext": "míngtiān",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "现在",
              "lerntext": "xiànzài",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "今天",
              "lerntext": "jīntiān",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "昨天",
              "lerntext": "zuótiān",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "没有",
              "lerntext": "méiyǒu",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "谢谢",
              "lerntext": "xièxie",
              "de": "danke",
              "wieder": true
            },
            {
              "schrift": "上",
              "lerntext": "shàng",
              "de": "auf",
              "wieder": true
            },
            {
              "schrift": "上午",
              "lerntext": "shàngwǔ",
              "de": "vormittags",
              "wieder": true
            },
            {
              "schrift": "还",
              "lerntext": "hái",
              "de": "noch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.4"
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
        "task": "Sag, wie du dich fühlst und warum.",
        "newFrameWords": [],
        "id": "19.5"
      }
    ]
  },
  {
    "number": 20,
    "title": "Weil, wenn, obwohl",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 在 这里 [Slot] 我 很 累",
          "lerntext": "wǒ zài zhèlǐ [Slot] wǒ hěn lèi"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "因为",
              "lerntext": "yīnwèi",
              "de": "weil"
            },
            {
              "schrift": "但是",
              "lerntext": "dànshì",
              "de": "aber"
            },
            {
              "schrift": "还是",
              "lerntext": "háishi",
              "de": "oder (in Fragen)"
            },
            {
              "schrift": "和",
              "lerntext": "hé",
              "de": "und"
            },
            {
              "schrift": "所以",
              "lerntext": "suǒyǐ",
              "de": "deshalb",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "20.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 在 这里 [Slot] 我 很 累",
          "lerntext": "wǒ zài zhèlǐ [Slot] wǒ hěn lèi"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "比",
              "lerntext": "bǐ",
              "de": "vergleichen mit"
            },
            {
              "schrift": "常",
              "lerntext": "cháng",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "少",
              "lerntext": "shǎo",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "第一次",
              "lerntext": "dì-yī cì",
              "de": "zum ersten Mal",
              "wieder": true
            },
            {
              "schrift": "下面",
              "lerntext": "xiàmiàn",
              "de": "unten",
              "wieder": true
            },
            {
              "schrift": "今天晚上",
              "lerntext": "jīntiān wǎnshang",
              "de": "heute Abend",
              "wieder": true
            },
            {
              "schrift": "里面",
              "lerntext": "lǐmiàn",
              "de": "drinnen",
              "wieder": true
            },
            {
              "schrift": "吧",
              "lerntext": "ba",
              "de": "Vorschlagspartikel",
              "wieder": true
            },
            {
              "schrift": "外",
              "lerntext": "wài",
              "de": "außen",
              "wieder": true
            },
            {
              "schrift": "喂",
              "lerntext": "wéi",
              "de": "hallo (am Telefon)",
              "wieder": true
            },
            {
              "schrift": "五",
              "lerntext": "wǔ",
              "de": "fünf",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "20.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 这 是 [Slot]",
          "lerntext": "wǒ xiǎng zhè shì [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach"
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch"
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber"
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz"
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "20.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 这 是 [Slot]",
          "lerntext": "wǒ xiǎng zhè shì [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß"
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "20.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 这 是 [Slot]",
          "lerntext": "wǒ xiǎng zhè shì [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "一下",
              "lerntext": "yíxià",
              "de": "kurz"
            },
            {
              "schrift": "再",
              "lerntext": "zài",
              "de": "nochmal",
              "wieder": true
            },
            {
              "schrift": "常",
              "lerntext": "cháng",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "也",
              "lerntext": "yě",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "正在",
              "lerntext": "zhèngzài",
              "de": "gerade dabei sein zu",
              "wieder": true
            },
            {
              "schrift": "一样",
              "lerntext": "yíyàng",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "最",
              "lerntext": "zuì",
              "de": "am meisten",
              "wieder": true
            },
            {
              "schrift": "真",
              "lerntext": "zhēn",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "旁边",
              "lerntext": "pángbiān",
              "de": "daneben",
              "wieder": true
            },
            {
              "schrift": "九",
              "lerntext": "jiǔ",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "七",
              "lerntext": "qī",
              "de": "sieben",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "20.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "有 时间 我 想 [Slot]",
          "lerntext": "yǒu shíjiān wǒ xiǎng [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben"
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen"
            },
            {
              "schrift": "见",
              "lerntext": "jiàn",
              "de": "sich treffen",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "20.6"
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
        "task": "Sag etwas über dich mit „weil\".",
        "newFrameWords": [],
        "id": "20.7"
      }
    ]
  },
  {
    "number": 21,
    "title": "Bitten und auffordern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "你 可以 [Slot] 吗?",
          "lerntext": "nǐ kěyǐ [Slot] ma?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten"
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "见",
              "lerntext": "jiàn",
              "de": "sich treffen",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "wieder": true
            },
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "请",
            "lerntext": "qǐng",
            "de": "bitte"
          }
        ],
        "id": "21.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "你 可以 [Slot] 吗?",
          "lerntext": "nǐ kěyǐ [Slot] ma?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten"
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen"
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "见",
              "lerntext": "jiàn",
              "de": "sich treffen",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "wieder": true
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "21.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "你 必须 [Slot]",
          "lerntext": "nǐ bìxū [Slot]"
        },
        "frameDe": "Du musst [Slot].",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "21.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "你 必须 [Slot]",
          "lerntext": "nǐ bìxū [Slot]"
        },
        "frameDe": "Du musst [Slot].",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen"
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben"
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen"
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "21.4"
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
        "task": "Bitte jemanden höflich um etwas.",
        "newFrameWords": [],
        "id": "21.5"
      }
    ]
  },
  {
    "number": 22,
    "title": "Wem gebe ich was?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 给 [Slot] 书",
          "lerntext": "wǒ gěi [Slot] shū"
        },
        "frameDe": "Ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund"
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter"
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind"
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student"
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "wieder": true
            },
            {
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur",
              "wieder": true
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "wieder": true
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln",
              "wieder": true
            },
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "22.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 给 [Slot] 书",
          "lerntext": "wǒ gěi [Slot] shū"
        },
        "frameDe": "Ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur",
              "wieder": true
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "wieder": true
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "22.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 给 [Slot] 看 城市",
          "lerntext": "wǒ gěi [Slot] kàn chéngshì"
        },
        "frameDe": "Ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund"
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter"
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind"
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student"
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)",
              "wieder": true
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht",
              "wieder": true
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester",
              "wieder": true
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking",
              "wieder": true
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "22.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 给 [Slot] 看 城市",
          "lerntext": "wǒ gěi [Slot] kàn chéngshì"
        },
        "frameDe": "Ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin",
              "wieder": true
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "22.4"
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
        "task": "Sag, wem du etwas gibst.",
        "newFrameWords": [],
        "id": "22.5"
      }
    ]
  },
  {
    "number": 23,
    "title": "Ein Glas, genug, zu viel",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 要 一 杯 [Slot]",
          "lerntext": "wǒ xiǎng yào yī bēi [Slot]"
        },
        "frameDe": "Ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
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
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee"
            },
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland",
              "wieder": true
            },
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei",
              "wieder": true
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "感冒",
              "lerntext": "gǎnmào",
              "de": "Erkältung",
              "wieder": true
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "杯子",
            "lerntext": "bēizi",
            "de": "Becher"
          },
          {
            "schrift": "杯",
            "lerntext": "bēi",
            "de": "Glas"
          }
        ],
        "id": "23.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我们 有 很多 [Slot]",
          "lerntext": "wǒmen yǒu hěnduō [Slot]"
        },
        "frameDe": "Wir haben genug [Slot].",
        "pronouns": [
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
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot"
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst"
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch"
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase",
              "wieder": true
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung",
              "wieder": true
            },
            {
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur",
              "wieder": true
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug",
              "wieder": true
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung",
              "wieder": true
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "够",
            "lerntext": "gòu",
            "de": "genug"
          }
        ],
        "id": "23.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我们 有 很多 [Slot]",
          "lerntext": "wǒmen yǒu hěnduō [Slot]"
        },
        "frameDe": "Wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch"
            },
            {
              "schrift": "糖",
              "lerntext": "táng",
              "de": "Zucker"
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch"
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "人",
              "lerntext": "rén",
              "de": "Mensch",
              "wieder": true
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund",
              "wieder": true
            },
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln",
              "wieder": true
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner",
              "wieder": true
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "23.3"
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
        "task": "Bestell etwas mit einer Menge.",
        "newFrameWords": [],
        "id": "23.4"
      }
    ]
  },
  {
    "number": 24,
    "title": "Seit, vor, in einer Stunde",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 等 了 一 [Slot]",
          "lerntext": "wǒ děng le yī [Slot]"
        },
        "frameDe": "Ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde"
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute"
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche"
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht"
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "wieder": true
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "24.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 等 了 一 [Slot]",
          "lerntext": "wǒ děng le yī [Slot]"
        },
        "frameDe": "Ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "号",
              "lerntext": "hào",
              "de": "Tag (Datum)"
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "糖",
              "lerntext": "táng",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "wieder": true
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "24.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 我 回家",
          "lerntext": "[Slot] wǒ huí jiā"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
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
              "schrift": "现在",
              "lerntext": "xiànzài",
              "de": "jetzt"
            },
            {
              "schrift": "昨天",
              "lerntext": "zuótiān",
              "de": "gestern"
            },
            {
              "schrift": "常",
              "lerntext": "cháng",
              "de": "oft"
            },
            {
              "schrift": "总是",
              "lerntext": "zǒngshì",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "从不",
              "lerntext": "cóngbù",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "杯",
              "lerntext": "bēi",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "中午",
              "lerntext": "zhōngwǔ",
              "de": "mittags",
              "wieder": true
            },
            {
              "schrift": "零",
              "lerntext": "líng",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "多少",
              "lerntext": "duōshao",
              "de": "wie viel",
              "wieder": true
            },
            {
              "schrift": "从",
              "lerntext": "cóng",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "你好",
              "lerntext": "nǐhǎo",
              "de": "hallo",
              "wieder": true
            },
            {
              "schrift": "对不起",
              "lerntext": "duìbuqǐ",
              "de": "Entschuldigung",
              "wieder": true
            },
            {
              "schrift": "些",
              "lerntext": "xiē",
              "de": "einige",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "24.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] 我 回家",
          "lerntext": "[Slot] wǒ huí jiā"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "从不",
              "lerntext": "cóngbù",
              "de": "nie"
            },
            {
              "schrift": "总是",
              "lerntext": "zǒngshì",
              "de": "immer"
            },
            {
              "schrift": "常",
              "lerntext": "cháng",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "明天",
              "lerntext": "míngtiān",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "现在",
              "lerntext": "xiànzài",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "今天",
              "lerntext": "jīntiān",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "昨天",
              "lerntext": "zuótiān",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "杯",
              "lerntext": "bēi",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "四",
              "lerntext": "sì",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "千",
              "lerntext": "qiān",
              "de": "tausend",
              "wieder": true
            },
            {
              "schrift": "那里",
              "lerntext": "nàlǐ",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "为什么",
              "lerntext": "wèishénme",
              "de": "warum",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "24.4"
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
        "task": "Sag, wann du etwas machst.",
        "newFrameWords": [],
        "id": "24.5"
      }
    ]
  },
  {
    "number": 25,
    "title": "Ich hätte gern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 [Slot]",
          "lerntext": "wǒ xiǎng [Slot]"
        },
        "frameDe": "Ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben"
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen"
            },
            {
              "schrift": "应该",
              "lerntext": "yīnggāi",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "25.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "你 可以 给 我 [Slot] 吗?",
          "lerntext": "nǐ kěyǐ gěi wǒ [Slot] ma?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
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
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot"
            },
            {
              "schrift": "钥匙",
              "lerntext": "yàoshi",
              "de": "Schlüssel"
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch"
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche"
            },
            {
              "schrift": "糖",
              "lerntext": "táng",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "wieder": true
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "wieder": true
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "25.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "你 可以 给 我 [Slot] 吗?",
          "lerntext": "nǐ kěyǐ gěi wǒ [Slot] ma?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "糖",
              "lerntext": "táng",
              "de": "Zucker"
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee"
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch"
            },
            {
              "schrift": "钥匙",
              "lerntext": "yàoshi",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "wieder": true
            },
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "25.3"
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
        "task": "Bitte höflich um etwas.",
        "newFrameWords": [],
        "id": "25.4"
      }
    ]
  },
  {
    "number": 26,
    "title": "Ich glaube, dass",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 觉得 这 很 [Slot]",
          "lerntext": "wǒ juéde zhè hěn [Slot]"
        },
        "frameDe": "Ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein"
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
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer"
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "wieder": true
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "26.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 觉得 这 很 [Slot]",
          "lerntext": "wǒ juéde zhè hěn [Slot]"
        },
        "frameDe": "Ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön"
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm"
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt"
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "26.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 觉得 这 非常 [Slot]",
          "lerntext": "wǒ juéde zhè fēicháng [Slot]"
        },
        "frameDe": "Ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach"
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch"
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber"
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz"
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "26.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 觉得 这 非常 [Slot]",
          "lerntext": "wǒ juéde zhè fēicháng [Slot]"
        },
        "frameDe": "Ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß"
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "26.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 觉得 这 非常 [Slot]",
          "lerntext": "wǒ juéde zhè fēicháng [Slot]"
        },
        "frameDe": "Ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "一下",
              "lerntext": "yíxià",
              "de": "kurz"
            },
            {
              "schrift": "杯",
              "lerntext": "bēi",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "两",
              "lerntext": "liǎng",
              "de": "zwei (vor Zählwort)",
              "wieder": true
            },
            {
              "schrift": "以后",
              "lerntext": "yǐhòu",
              "de": "später",
              "wieder": true
            },
            {
              "schrift": "呢",
              "lerntext": "ne",
              "de": "und du? (Rückfragepartikel)",
              "wieder": true
            },
            {
              "schrift": "前面",
              "lerntext": "qiánmiàn",
              "de": "vorne",
              "wieder": true
            },
            {
              "schrift": "上面",
              "lerntext": "shàngmiàn",
              "de": "oben",
              "wieder": true
            },
            {
              "schrift": "外面",
              "lerntext": "wàimiàn",
              "de": "draußen",
              "wieder": true
            },
            {
              "schrift": "一起",
              "lerntext": "yìqǐ",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "就",
              "lerntext": "jiù",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "八",
              "lerntext": "bā",
              "de": "acht",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "26.5"
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
        "task": "Sag deine Meinung zu etwas.",
        "newFrameWords": [],
        "id": "26.6"
      }
    ]
  },
  {
    "number": 27,
    "title": "Was ich vorhabe",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "明天 我 要 [Slot]",
          "lerntext": "míngtiān wǒ yào [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen"
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen"
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "27.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "明天 我 要 [Slot]",
          "lerntext": "míngtiān wǒ yào [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen"
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "27.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 快 [Slot]",
          "lerntext": "wǒ xiǎng kuài [Slot]"
        },
        "frameDe": "Ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten"
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "wieder": true
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "见",
              "lerntext": "jiàn",
              "de": "sich treffen",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "27.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 快 [Slot]",
          "lerntext": "wǒ xiǎng kuài [Slot]"
        },
        "frameDe": "Ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "27.4"
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
        "task": "Erzähl, was du morgen machst.",
        "newFrameWords": [],
        "id": "27.5"
      }
    ]
  },
  {
    "number": 28,
    "title": "Der Mann, der dort steht",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "这 是 [Slot] 的 人",
          "lerntext": "zhè shì [Slot] de rén"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben"
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen"
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "28.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 找 可以 [Slot] 的 地方",
          "lerntext": "wǒ zhǎo kěyǐ [Slot] de dìfang"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "wieder": true
            },
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "wieder": true
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "哪里",
            "lerntext": "nǎli",
            "de": "wo"
          },
          {
            "schrift": "地方",
            "lerntext": "dìfang",
            "de": "Ort"
          }
        ],
        "id": "28.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 找 可以 [Slot] 的 地方",
          "lerntext": "wǒ zhǎo kěyǐ [Slot] de dìfang"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "28.3"
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
        "task": "Beschreib jemanden mit einem Nebensatz.",
        "newFrameWords": [],
        "id": "28.4"
      }
    ]
  },
  {
    "number": 29,
    "title": "Alles zusammen",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "昨天 我 在 [Slot]",
          "lerntext": "zuótiān wǒ zài [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant"
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel"
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule"
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus"
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof"
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "钥匙",
              "lerntext": "yàoshi",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "地方",
              "lerntext": "dìfang",
              "de": "Ort",
              "wieder": true
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "wieder": true
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "wieder": true
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "29.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "昨天 我 在 [Slot]",
          "lerntext": "zuótiān wǒ zài [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen"
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt"
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "钥匙",
              "lerntext": "yàoshi",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "地方",
              "lerntext": "dìfang",
              "de": "Ort",
              "wieder": true
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "wieder": true
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "29.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 [Slot] 因为 我 有 时间",
          "lerntext": "wǒ xiǎng [Slot] yīnwèi wǒ yǒu shíjiān"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar"
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "29.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 [Slot] 因为 我 有 时间",
          "lerntext": "wǒ xiǎng [Slot] yīnwèi wǒ yǒu shíjiān"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen"
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben"
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen"
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "应该",
              "lerntext": "yīnggāi",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "29.4"
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
        "task": "Erzähl von deinem Tag in drei Sätzen.",
        "newFrameWords": [],
        "id": "29.5"
      }
    ]
  }
];
