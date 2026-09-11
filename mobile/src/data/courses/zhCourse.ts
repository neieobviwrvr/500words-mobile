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
          "lerntext": "wǒ / nǐ / tā / tā shì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p"
          }
        },
        "frameDe": "ich / du / er / sie bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "c": "n"
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt",
              "c": "n"
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner",
              "c": "n"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "是",
            "lerntext": "shì",
            "de": "sein",
            "c": "v"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 / 她 是 [Slot]",
          "lerntext": "wǒ / nǐ / tā / tā shì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p"
          }
        },
        "frameDe": "ich / du / er / sie bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann",
              "c": "n"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr",
              "c": "n"
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "c": "n"
            },
            {
              "schrift": "人",
              "lerntext": "rén",
              "de": "Mensch",
              "c": "n"
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
          "lerntext": "wǒ / nǐ / tā / wǒmen hěn [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "wǒmen": "p"
          }
        },
        "frameDe": "ich / du / er / wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "c": "a"
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "c": "a"
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a"
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
          "lerntext": "wǒ / nǐ / tā / wǒmen hěn [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "wǒmen": "p"
          }
        },
        "frameDe": "ich / du / er / wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "c": "a"
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a"
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a"
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
          "lerntext": "de / nín / shéi shì wǒ de [Slot]",
          "wortarten": {
            "nín": "p",
            "shéi": "p",
            "wǒ": "p"
          }
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
            "de": "Sie (höflich)",
            "c": "p"
          },
          {
            "schrift": "谁",
            "lerntext": "shéi",
            "de": "wer",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn",
              "c": "n"
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter",
              "c": "n"
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "c": "n"
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
          "lerntext": "de / nín / shéi shì wǒ de [Slot]",
          "wortarten": {
            "nín": "p",
            "shéi": "p",
            "wǒ": "p"
          }
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
            "de": "Sie (höflich)",
            "c": "p"
          },
          {
            "schrift": "谁",
            "lerntext": "shéi",
            "de": "wer",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester",
              "c": "n"
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder",
              "c": "n"
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester",
              "c": "n"
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund",
              "c": "n"
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "c": "n"
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
          "lerntext": "wǒ / nǐ / tā / tā shì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p"
          }
        },
        "frameDe": "ich / du / er / sie bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "人",
              "lerntext": "rén",
              "de": "Mensch",
              "c": "n",
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
          "lerntext": "wǒ / nǐ / tā / wǒmen hěn [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "wǒmen": "p"
          }
        },
        "frameDe": "ich / du / er / wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a",
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
          "lerntext": "wǒ / nǐ / tā / tā shì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p"
          }
        },
        "frameDe": "ich / du / er / sie bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "人",
              "lerntext": "rén",
              "de": "Mensch",
              "c": "n",
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
          "lerntext": "wǒ / nǐ / tā / wǒmen hěn [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "wǒmen": "p"
          }
        },
        "frameDe": "ich / du / er / wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a",
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
          "lerntext": "zhè shì [Slot]",
          "wortarten": {
            "zhè": "p"
          }
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [
          {
            "schrift": "这",
            "lerntext": "zhè",
            "de": "dies",
            "c": "p"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r)",
            "c": "p"
          },
          {
            "schrift": "哪",
            "lerntext": "nǎ",
            "de": "welche(r)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl",
              "c": "n"
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher",
              "c": "n"
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy",
              "c": "n"
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "c": "n",
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
            "de": "dies",
            "c": "p"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r)",
            "c": "p"
          }
        ],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "这 是 [Slot]",
          "lerntext": "zhè shì [Slot]",
          "wortarten": {
            "zhè": "p"
          }
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [
          {
            "schrift": "这",
            "lerntext": "zhè",
            "de": "dies",
            "c": "p"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r)",
            "c": "p"
          },
          {
            "schrift": "哪",
            "lerntext": "nǎ",
            "de": "welche(r)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer",
              "c": "n"
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung",
              "c": "n"
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding",
              "c": "n"
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung",
              "c": "n"
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "c": "n",
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
          "lerntext": "wǒ / nǐ / tā / wǒmen yǒu [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "wǒmen": "p",
            "yǒu": "v"
          }
        },
        "frameDe": "ich / du / er / wir habe [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "c": "n"
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause",
              "c": "n"
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester",
              "c": "n",
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
            "de": "haben",
            "c": "v"
          }
        ],
        "id": "2.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 / 我们 有 [Slot]",
          "lerntext": "wǒ / nǐ / tā / wǒmen yǒu [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "wǒmen": "p",
            "yǒu": "v"
          }
        },
        "frameDe": "ich / du / er / wir habe [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "c": "n"
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag",
              "c": "n"
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name",
              "c": "n"
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe",
              "c": "n"
            },
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder",
              "c": "n",
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
          "lerntext": "wǒ / nǐ / tā / wǒmen yǒu [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "wǒmen": "p",
            "yǒu": "v"
          }
        },
        "frameDe": "ich / du / er / wir habe [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "是",
              "lerntext": "shì",
              "de": "sein",
              "c": "v",
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
          "lerntext": "zhè shì [Slot] de shū",
          "wortarten": {
            "zhè": "p",
            "shū": "n"
          }
        },
        "frameDe": "Das ist [Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze",
              "c": "n"
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "c": "n"
            },
            {
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket",
              "c": "n"
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "c": "n"
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn",
              "c": "n",
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
          "lerntext": "zhè shì [Slot] de shū",
          "wortarten": {
            "zhè": "p",
            "shū": "n"
          }
        },
        "frameDe": "Das ist [Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe",
              "c": "n",
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
          "lerntext": "zhè shì [Slot]",
          "wortarten": {
            "zhè": "p"
          }
        },
        "frameDe": "Das ist [Slot].",
        "pronouns": [
          {
            "schrift": "这",
            "lerntext": "zhè",
            "de": "dies",
            "c": "p"
          },
          {
            "schrift": "那",
            "lerntext": "nà",
            "de": "jene(r)",
            "c": "p"
          },
          {
            "schrift": "哪",
            "lerntext": "nǎ",
            "de": "welche(r)",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung",
              "c": "n",
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
          "lerntext": "zhè shì [Slot] de shū",
          "wortarten": {
            "zhè": "p",
            "shū": "n"
          }
        },
        "frameDe": "Das ist [Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg",
              "c": "n",
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
          "lerntext": "wǒ / nǐ / wǒmen xiǎng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "wǒmen": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "ich / du / wir möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen",
              "c": "v"
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken",
              "c": "v"
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "c": "v"
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "有",
              "lerntext": "yǒu",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "是",
              "lerntext": "shì",
              "de": "sein",
              "c": "v",
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
            "de": "möchten",
            "c": "v"
          },
          {
            "schrift": "要",
            "lerntext": "yào",
            "de": "wollen",
            "c": "v"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 我们 想 [Slot]",
          "lerntext": "wǒ / nǐ / wǒmen xiǎng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "wǒmen": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "ich / du / wir möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "去",
              "lerntext": "qù",
              "de": "gehen",
              "c": "v"
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "c": "v"
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "c": "v"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "有",
              "lerntext": "yǒu",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "是",
              "lerntext": "shì",
              "de": "sein",
              "c": "v",
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
          "lerntext": "wǒ / tā yào [Slot]",
          "wortarten": {
            "wǒ": "p",
            "tā": "p"
          }
        },
        "frameDe": "ich / er möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee",
              "c": "n"
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "家",
              "lerntext": "jiā",
              "de": "Zuhause",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "c": "n",
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
          "lerntext": "wǒ / tā yào [Slot]",
          "wortarten": {
            "wǒ": "p",
            "tā": "p"
          }
        },
        "frameDe": "ich / er möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis",
              "c": "n"
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht",
              "c": "n"
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel",
              "c": "n"
            },
            {
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei",
              "c": "n"
            },
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name",
              "c": "n",
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
          "lerntext": "qǐng gěi wǒ [Slot]",
          "wortarten": {
            "gěi": "v",
            "wǒ": "p"
          }
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
            "de": "geben",
            "c": "v"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin",
              "c": "n"
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "c": "n"
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone",
              "c": "n"
            },
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "c": "n",
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
            "de": "geben",
            "c": "v"
          }
        ],
        "id": "3.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 我们 想 [Slot]",
          "lerntext": "wǒ / nǐ / wǒmen xiǎng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "wǒmen": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "ich / du / wir möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "去",
              "lerntext": "qù",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "c": "v",
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
          "lerntext": "qǐng gěi wǒ [Slot]",
          "wortarten": {
            "gěi": "v",
            "wǒ": "p"
          }
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
            "de": "geben",
            "c": "v"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis",
              "c": "n",
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
          "lerntext": "wǒ / nǐ / wǒmen xiǎng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "wǒmen": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "ich / du / wir möchte [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "去",
              "lerntext": "qù",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v",
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
          "lerntext": "qǐng gěi wǒ [Slot]",
          "wortarten": {
            "gěi": "v",
            "wǒ": "p"
          }
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
            "de": "geben",
            "c": "v"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone",
              "c": "n",
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
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a",
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
              "de": "wissen",
              "c": "v"
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "c": "v"
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "喜欢",
              "lerntext": "xǐhuan",
              "de": "mögen",
              "c": "v"
            },
            {
              "schrift": "会",
              "lerntext": "huì",
              "de": "können (erlernt)",
              "c": "v"
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "去",
              "lerntext": "qù",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "c": "v",
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
          "lerntext": "nǐ / tā / tā [Slot] ma?",
          "wortarten": {
            "nǐ": "p",
            "tā": "p"
          }
        },
        "frameDe": "[Slot] du / er / sie?",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen",
              "c": "v"
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "c": "v"
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "c": "v"
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喜欢",
              "lerntext": "xǐhuan",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "会",
              "lerntext": "huì",
              "de": "können (erlernt)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "想",
              "lerntext": "xiǎng",
              "de": "möchten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "c": "v",
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
          "lerntext": "zhè shì shénme [Slot]?",
          "wortarten": {
            "zhè": "p",
            "shénme": "p"
          }
        },
        "frameDe": "Was für [Slot] ist das?",
        "pronouns": [
          {
            "schrift": "什么",
            "lerntext": "shénme",
            "de": "was",
            "c": "p"
          },
          {
            "schrift": "谁",
            "lerntext": "shéi",
            "de": "wer",
            "c": "p"
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
              "de": "Bedeutung",
              "c": "n"
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung",
              "c": "n",
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
            "de": "was",
            "c": "p"
          },
          {
            "schrift": "谁",
            "lerntext": "shéi",
            "de": "wer",
            "c": "p"
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
          "lerntext": "nǐ / tā / tā [Slot] ma?",
          "wortarten": {
            "nǐ": "p",
            "tā": "p"
          }
        },
        "frameDe": "[Slot] du / er / sie?",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喜欢",
              "lerntext": "xǐhuan",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "会",
              "lerntext": "huì",
              "de": "können (erlernt)",
              "c": "v",
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
          "lerntext": "nǐ / tā / tā [Slot] ma?",
          "wortarten": {
            "nǐ": "p",
            "tā": "p"
          }
        },
        "frameDe": "[Slot] du / er / sie?",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "c": "v",
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
          "lerntext": "[Slot] zài nǎli?",
          "wortarten": {
            "zài": "v"
          }
        },
        "frameDe": "Wo ist [Slot]?",
        "pronouns": [
          {
            "schrift": "在",
            "lerntext": "zài",
            "de": "sein (Ort)",
            "c": "v"
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
              "de": "Toilette",
              "c": "n"
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "c": "n"
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester",
              "c": "n",
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
            "de": "sein (Ort)",
            "c": "v"
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
          "lerntext": "[Slot] zài nǎli?",
          "wortarten": {
            "zài": "v"
          }
        },
        "frameDe": "Wo ist [Slot]?",
        "pronouns": [
          {
            "schrift": "在",
            "lerntext": "zài",
            "de": "sein (Ort)",
            "c": "v"
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
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "c": "n"
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin",
              "c": "n",
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
          "lerntext": "zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
              "c": "n"
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft",
              "c": "n",
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
          "lerntext": "zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
          "lerntext": "zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
              "de": "weit",
              "c": "a"
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "c": "a"
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "c": "a"
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "c": "a"
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "c": "a",
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
          "lerntext": "zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
              "c": "n",
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
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "c": "n",
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
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "c": "a",
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
          "lerntext": "zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
              "c": "n",
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
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a",
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
          "lerntext": "[Slot] ge rén",
          "wortarten": {
            "ge": "n",
            "rén": "n"
          }
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
          "lerntext": "zhège [Slot] qián?",
          "wortarten": {
            "qián?": "n"
          }
        },
        "frameDe": "Wie viel kostet das?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "c": "a"
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "c": "a",
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
          "lerntext": "zhège [Slot] qián?",
          "wortarten": {
            "qián?": "n"
          }
        },
        "frameDe": "Wie viel kostet das?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "c": "n"
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)",
              "c": "n"
            },
            {
              "schrift": "票",
              "lerntext": "piào",
              "de": "Ticket",
              "c": "n"
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung",
              "c": "n",
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
              "de": "heiß",
              "c": "a"
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a",
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
          "lerntext": "[Slot] ge rén",
          "wortarten": {
            "ge": "n",
            "rén": "n"
          }
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
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a",
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
          "lerntext": "[Slot] ge rén",
          "wortarten": {
            "ge": "n",
            "rén": "n"
          }
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
          "lerntext": "wǒ / nǐ / tā huì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "huì": "v"
          }
        },
        "frameDe": "ich / du / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喜欢",
              "lerntext": "xǐhuan",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "c": "v",
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
            "de": "können (erlernt)",
            "c": "v"
          },
          {
            "schrift": "能",
            "lerntext": "néng",
            "de": "können",
            "c": "v"
          },
          {
            "schrift": "可以",
            "lerntext": "kěyǐ",
            "de": "können",
            "c": "v"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 你 / 他 会 [Slot]",
          "lerntext": "wǒ / nǐ / tā huì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "huì": "v"
          }
        },
        "frameDe": "ich / du / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "c": "v"
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "c": "v"
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "c": "v"
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "c": "v",
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
          "lerntext": "wǒ / nǐ bìxū [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "bìxū": "v"
          }
        },
        "frameDe": "ich / du muss [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "c": "v"
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "c": "v"
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "c": "v"
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "可以",
              "lerntext": "kěyǐ",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "c": "v",
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
            "de": "müssen",
            "c": "v"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 我们 可以 [Slot] 吗?",
          "lerntext": "wǒ / wǒmen kěyǐ [Slot] ma?",
          "wortarten": {
            "wǒ": "p",
            "wǒmen": "p",
            "kěyǐ": "v"
          }
        },
        "frameDe": "Darf ich / wir [Slot]?",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "c": "v"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "c": "v"
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "c": "v"
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "c": "v",
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
          "lerntext": "wǒ / wǒmen kěyǐ [Slot] ma?",
          "wortarten": {
            "wǒ": "p",
            "wǒmen": "p",
            "kěyǐ": "v"
          }
        },
        "frameDe": "Darf ich / wir [Slot]?",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v",
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
          "lerntext": "wǒ / nǐ / tā huì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "tā": "p",
            "huì": "v"
          }
        },
        "frameDe": "ich / du / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "c": "v",
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
          "lerntext": "wǒ / wǒmen kěyǐ [Slot] ma?",
          "wortarten": {
            "wǒ": "p",
            "wǒmen": "p",
            "kěyǐ": "v"
          }
        },
        "frameDe": "Darf ich / wir [Slot]?",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "c": "v",
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
          "lerntext": "wǒ / wǒmen / tā qù [Slot]",
          "wortarten": {
            "wǒ": "p",
            "wǒmen": "p",
            "tā": "p",
            "qù": "v"
          }
        },
        "frameDe": "ich / wir / er gehe nach [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China",
              "c": "n"
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking",
              "c": "n"
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "c": "n"
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "c": "n",
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
          "lerntext": "wǒ / wǒmen / tā qù [Slot]",
          "wortarten": {
            "wǒ": "p",
            "wǒmen": "p",
            "tā": "p",
            "qù": "v"
          }
        },
        "frameDe": "ich / wir / er gehe nach [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "c": "v"
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "c": "v"
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v",
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
          "lerntext": "wǒ / nǐ zuò [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "zuò": "v"
          }
        },
        "frameDe": "ich / du fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi",
              "c": "n"
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug",
              "c": "n"
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus",
              "c": "n"
            },
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "c": "n",
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
              "de": "ankommen",
              "c": "v"
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "c": "v",
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
          "lerntext": "zhèngzài / yǐjīng zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
              "c": "v"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "可以",
              "lerntext": "kěyǐ",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "c": "v",
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
          "lerntext": "wǒ / nǐ zuò [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "zuò": "v"
          }
        },
        "frameDe": "ich / du fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "c": "n",
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
              "c": "v",
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
          "lerntext": "zhèngzài / yǐjīng zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v",
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
              "de": "Nacht",
              "c": "n"
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
          "lerntext": "wǒ [Slot] qù",
          "wortarten": {
            "wǒ": "p",
            "qù": "v"
          }
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
            "de": "Zeitpunkt",
            "c": "n"
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
            "de": "Zeitpunkt",
            "c": "n"
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
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr",
              "c": "n"
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "c": "n"
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "时候",
              "lerntext": "shíhou",
              "de": "Zeitpunkt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "c": "n",
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
              "de": "Tag (Datum)",
              "c": "n"
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "c": "n"
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer",
              "c": "n",
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
          "lerntext": "wǒ chī [Slot]",
          "wortarten": {
            "wǒ": "p",
            "chī": "v"
          }
        },
        "frameDe": "Ich esse [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "c": "a"
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "c": "a",
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
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "c": "n",
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
          "lerntext": "wǒ [Slot] qù",
          "wortarten": {
            "wǒ": "p",
            "qù": "v"
          }
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
            "de": "Zeitpunkt",
            "c": "n"
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
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "c": "n",
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
          "lerntext": "wǒ / tā / tā xǐhuan [Slot]",
          "wortarten": {
            "wǒ": "p",
            "tā": "p",
            "xǐhuan": "v"
          }
        },
        "frameDe": "ich / er / sie mag [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "c": "n"
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter",
              "c": "n"
            },
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze",
              "c": "n"
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "c": "n"
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge",
              "c": "n"
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "号",
              "lerntext": "hào",
              "de": "Tag (Datum)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "时候",
              "lerntext": "shíhou",
              "de": "Zeitpunkt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner",
              "c": "n",
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
            "de": "mögen",
            "c": "v"
          },
          {
            "schrift": "爱",
            "lerntext": "ài",
            "de": "lieben",
            "c": "v"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 / 他 / 她 喜欢 [Slot]",
          "lerntext": "wǒ / tā / tā xǐhuan [Slot]",
          "wortarten": {
            "wǒ": "p",
            "tā": "p",
            "xǐhuan": "v"
          }
        },
        "frameDe": "ich / er / sie mag [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper",
              "c": "n"
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf",
              "c": "n"
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch",
              "c": "n"
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein",
              "c": "n"
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "c": "n"
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "猫",
              "lerntext": "māo",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "狗",
              "lerntext": "gǒu",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "c": "n",
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
              "de": "lecker (Essen)",
              "c": "a"
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "c": "a"
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "c": "a"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "c": "a",
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
          "lerntext": "[Slot] de yīfu",
          "wortarten": {
            "yīfu": "n"
          }
        },
        "frameDe": "[Slot] Kleidung.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß",
              "c": "a"
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "c": "a"
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "c": "a"
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "c": "a"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "c": "a",
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
          "lerntext": "[Slot] de yīfu",
          "wortarten": {
            "yīfu": "n"
          }
        },
        "frameDe": "[Slot] Kleidung.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "c": "a",
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
          "lerntext": "wǒ / tā / tā xǐhuan [Slot]",
          "wortarten": {
            "wǒ": "p",
            "tā": "p",
            "xǐhuan": "v"
          }
        },
        "frameDe": "ich / er / sie mag [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge",
              "c": "n",
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
          "lerntext": "[Slot] de yīfu",
          "wortarten": {
            "yīfu": "n"
          }
        },
        "frameDe": "[Slot] Kleidung.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "c": "a",
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
          "lerntext": "wǒ / tā / tā xǐhuan [Slot]",
          "wortarten": {
            "wǒ": "p",
            "tā": "p",
            "xǐhuan": "v"
          }
        },
        "frameDe": "ich / er / sie mag [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "c": "n",
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
          "lerntext": "wǒ zuótiān [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich habe gestern [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "c": "v"
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "学习",
              "lerntext": "xuéxí",
              "de": "lernen",
              "c": "v"
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v",
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
          "lerntext": "wǒ [Slot] guo",
          "wortarten": {
            "wǒ": "p",
            "guo": "n"
          }
        },
        "frameDe": "Ich habe schon mal [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "去",
              "lerntext": "qù",
              "de": "gehen",
              "c": "v"
            },
            {
              "schrift": "吃",
              "lerntext": "chī",
              "de": "essen",
              "c": "v"
            },
            {
              "schrift": "喝",
              "lerntext": "hē",
              "de": "trinken",
              "c": "v"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "c": "v",
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
          "lerntext": "tā [Slot] wǒ",
          "wortarten": {
            "tā": "p",
            "wǒ": "p"
          }
        },
        "frameDe": "Er [Slot] mir.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "c": "v"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "c": "v"
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "c": "v"
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "c": "v",
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "c": "a",
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "c": "v"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "认识",
              "lerntext": "rènshi",
              "de": "kennen",
              "c": "v"
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "c": "v"
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "c": "v",
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v",
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "c": "v",
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
          "lerntext": "wǒ hěn lèi [Slot] wǒ gōngzuò",
          "wortarten": {
            "wǒ": "p",
            "lèi": "a",
            "gōngzuò": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "和",
            "lerntext": "hé",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "但是",
            "lerntext": "dànshì",
            "de": "aber",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "因为",
              "lerntext": "yīnwèi",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "所以",
              "lerntext": "suǒyǐ",
              "de": "deshalb",
              "c": "k"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "和",
            "lerntext": "hé",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "但是",
            "lerntext": "dànshì",
            "de": "aber",
            "c": "k"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 [Slot] 累",
          "lerntext": "wǒ [Slot] lèi",
          "wortarten": {
            "wǒ": "p",
            "lèi": "a"
          }
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
          "lerntext": "wǒ [Slot] nǐ gāo",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p",
            "gāo": "a"
          }
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
          "lerntext": "wǒ [Slot] yǒu shíjiān",
          "wortarten": {
            "wǒ": "p",
            "yǒu": "v",
            "shíjiān": "n"
          }
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
          "lerntext": "jīntiān wǒ [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Heute [Slot] ich.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "c": "v"
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "c": "v"
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "c": "v",
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
          "lerntext": "wǒ xǐhuan [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xǐhuan": "v"
          }
        },
        "frameDe": "Ich mag [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "c": "n"
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "杯子",
              "lerntext": "bēizi",
              "de": "Becher",
              "c": "n",
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
              "de": "hinzufügen",
              "c": "v"
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "c": "v"
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v",
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
          "lerntext": "wǒ shí [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin zehn [Slot] alt.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "c": "n"
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "先生",
              "lerntext": "xiānsheng",
              "de": "Herr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "c": "n",
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
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "c": "v",
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
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "c": "v",
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
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "c": "v",
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
          "lerntext": "wǒ de [Slot] téng",
          "wortarten": {
            "wǒ": "p",
            "téng": "v"
          }
        },
        "frameDe": "Mein [Slot] tut weh.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand",
              "c": "n"
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "c": "n"
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase",
              "c": "n"
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund",
              "c": "n"
            },
            {
              "schrift": "头",
              "lerntext": "tóu",
              "de": "Kopf",
              "c": "n"
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "出租车",
              "lerntext": "chūzūchē",
              "de": "Taxi",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "东西",
              "lerntext": "dōngxi",
              "de": "Ding",
              "c": "n",
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
            "de": "schmerzen",
            "c": "v"
          }
        ],
        "id": "13.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 很 [Slot]",
          "lerntext": "wǒ hěn [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "c": "a"
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "c": "a"
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "c": "a"
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "c": "a"
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß",
              "c": "a",
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "感冒",
              "lerntext": "gǎnmào",
              "de": "Erkältung",
              "c": "n"
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "颜色",
              "lerntext": "yánsè",
              "de": "Farbe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "号",
              "lerntext": "hào",
              "de": "Tag (Datum)",
              "c": "n",
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "c": "v"
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "c": "v"
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "c": "v"
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "c": "v"
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "可以",
              "lerntext": "kěyǐ",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "想",
              "lerntext": "xiǎng",
              "de": "möchten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "c": "v",
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "感冒",
              "lerntext": "gǎnmào",
              "de": "Erkältung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase",
              "c": "n",
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
          "lerntext": "wǒ hěn [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "c": "a",
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "感冒",
              "lerntext": "gǎnmào",
              "de": "Erkältung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "c": "v",
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
          "lerntext": "wǒ hěn [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "c": "a",
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
          "lerntext": "tā hěn [Slot]",
          "wortarten": {
            "tā": "p"
          }
        },
        "frameDe": "Er ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "c": "a"
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "c": "a"
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "c": "a"
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a",
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
          "lerntext": "tā hěn [Slot]",
          "wortarten": {
            "tā": "p"
          }
        },
        "frameDe": "Er ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "c": "a"
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "c": "a"
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "c": "a"
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a",
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
          "lerntext": "tā shì wǒ de [Slot]",
          "wortarten": {
            "tā": "p",
            "wǒ": "p"
          }
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
              "de": "Kollege",
              "c": "n"
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "老师",
              "lerntext": "lǎoshī",
              "de": "Lehrer",
              "c": "n"
            },
            {
              "schrift": "医生",
              "lerntext": "yīshēng",
              "de": "Arzt",
              "c": "n"
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "感冒",
              "lerntext": "gǎnmào",
              "de": "Erkältung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper",
              "c": "n",
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
          "lerntext": "wǒ shì [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "c": "a"
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a",
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
          "lerntext": "wǒ shì [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich bin [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland",
              "c": "n"
            },
            {
              "schrift": "中国",
              "lerntext": "Zhōngguó",
              "de": "China",
              "c": "n"
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "c": "n"
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai",
              "c": "n"
            },
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "c": "n",
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
              "de": "blau",
              "c": "a"
            },
            {
              "schrift": "白",
              "lerntext": "bái",
              "de": "weiß",
              "c": "a"
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "红",
              "lerntext": "hóng",
              "de": "rot",
              "c": "a"
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "c": "a",
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
              "de": "Farbe",
              "c": "n"
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "名字",
              "lerntext": "míngzi",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "手机",
              "lerntext": "shǒujī",
              "de": "Handy",
              "c": "n",
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
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland",
              "c": "n",
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
          "lerntext": "wǒ xǐhuan [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xǐhuan": "v"
          }
        },
        "frameDe": "Ich mag [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "c": "n"
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby",
              "c": "n"
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "c": "n"
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "c": "n"
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "苹果",
              "lerntext": "píngguǒ",
              "de": "Apfel",
              "c": "n",
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
          "lerntext": "wǒ xǐhuan [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xǐhuan": "v"
          }
        },
        "frameDe": "Ich mag [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "c": "v"
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "c": "v"
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "c": "v"
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "c": "v"
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "c": "v"
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "c": "v",
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
          "lerntext": "wǒ xǐhuan [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xǐhuan": "v"
          }
        },
        "frameDe": "Ich mag [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "c": "v"
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "c": "v",
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
          "lerntext": "wǒ [Slot] yíxià",
          "wortarten": {
            "wǒ": "p"
          }
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
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "c": "v"
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "c": "v"
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v",
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
          "lerntext": "wǒ [Slot] yíxià",
          "wortarten": {
            "wǒ": "p"
          }
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
              "de": "rufen",
              "c": "v"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "c": "v"
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "c": "v"
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "c": "v"
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "c": "v",
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
          "lerntext": "wǒ [Slot] qù",
          "wortarten": {
            "wǒ": "p",
            "qù": "v"
          }
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
              "de": "Wochenende",
              "c": "n"
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "c": "n"
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "上海",
              "lerntext": "Shànghǎi",
              "de": "Shanghai",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "同事",
              "lerntext": "tóngshì",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "生日",
              "lerntext": "shēngrì",
              "de": "Geburtstag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "西瓜",
              "lerntext": "xīguā",
              "de": "Wassermelone",
              "c": "n",
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
          "lerntext": "wǒ [Slot] qù",
          "wortarten": {
            "wǒ": "p",
            "qù": "v"
          }
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
          "lerntext": "wǒ [Slot] qù",
          "wortarten": {
            "wǒ": "p",
            "qù": "v"
          }
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
              "de": "vorhaben",
              "c": "v"
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "c": "v",
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
          "lerntext": "zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
        },
        "frameDe": "Es ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station",
              "c": "n"
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "时候",
              "lerntext": "shíhou",
              "de": "Zeitpunkt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "米饭",
              "lerntext": "mǐfàn",
              "de": "Reis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "肚子",
              "lerntext": "dùzi",
              "de": "Bauch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n",
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
          "lerntext": "zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
          "lerntext": "wǒ yào [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich möchte [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln",
              "c": "n"
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte",
              "c": "n"
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "c": "n"
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "嘴",
              "lerntext": "zuǐ",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "房间",
              "lerntext": "fángjiān",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "路",
              "lerntext": "lù",
              "de": "Weg",
              "c": "n",
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
              "de": "sonniger Tag",
              "c": "n"
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "c": "n"
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "c": "n",
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
              "de": "schneien",
              "c": "v"
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "c": "v"
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "c": "v"
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "c": "v",
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
          "lerntext": "wǒ xiǎng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "Ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "应该",
            "lerntext": "yīnggāi",
            "de": "sollen",
            "c": "v"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "c": "a"
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "c": "a",
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
            "de": "sollen",
            "c": "v"
          }
        ],
        "id": "15.14"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 想 [Slot]",
          "lerntext": "wǒ xiǎng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "Ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "应该",
            "lerntext": "yīnggāi",
            "de": "sollen",
            "c": "v"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur",
              "c": "n"
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爱好",
              "lerntext": "àihào",
              "de": "Hobby",
              "c": "n",
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
          "lerntext": "wǒ xiǎng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "Ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "应该",
            "lerntext": "yīnggāi",
            "de": "sollen",
            "c": "v"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "c": "v"
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "c": "v"
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "c": "v",
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
          "lerntext": "wǒ xiǎng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "Ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "应该",
            "lerntext": "yīnggāi",
            "de": "sollen",
            "c": "v"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "c": "v",
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
          "lerntext": "zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
          "lerntext": "zài [Slot]",
          "wortarten": {
            "zài": "v"
          }
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "c": "v",
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
          "lerntext": "wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "听",
              "lerntext": "tīng",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "c": "v",
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
          "lerntext": "zuótiān wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "c": "v",
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
          "lerntext": "zuótiān wǒ [Slot] le",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "c": "v",
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
          "lerntext": "wǒ yǐjīng [Slot] guo",
          "wortarten": {
            "wǒ": "p",
            "guo": "n"
          }
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "c": "a"
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "c": "a",
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
          "lerntext": "wǒ yǐjīng [Slot] guo",
          "wortarten": {
            "wǒ": "p",
            "guo": "n"
          }
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "c": "v",
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
          "lerntext": "wǒ yǐjīng [Slot] guo",
          "wortarten": {
            "wǒ": "p",
            "guo": "n"
          }
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "洗",
              "lerntext": "xǐ",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "关",
              "lerntext": "guān",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "c": "v",
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
          "lerntext": "nǐ [Slot]",
          "wortarten": {
            "nǐ": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "应该",
              "lerntext": "yīnggāi",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "c": "v",
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
          "lerntext": "nǐ [Slot]",
          "wortarten": {
            "nǐ": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "c": "v",
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
          "lerntext": "tā [Slot]",
          "wortarten": {
            "tā": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "c": "v",
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
          "lerntext": "tā [Slot]",
          "wortarten": {
            "tā": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "他",
            "lerntext": "tā",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "可以",
              "lerntext": "kěyǐ",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "c": "v",
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
          "lerntext": "wǒmen [Slot]",
          "wortarten": {
            "wǒmen": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "c": "a"
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "c": "a",
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
          "lerntext": "wǒmen [Slot]",
          "wortarten": {
            "wǒmen": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "回家",
              "lerntext": "huíjiā",
              "de": "nach Hause gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "c": "v",
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
          "lerntext": "tā [Slot]",
          "wortarten": {
            "tā": "p"
          }
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "她",
            "lerntext": "tā",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen",
              "c": "v"
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "c": "v",
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
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "c": "a"
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a",
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
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "有趣",
              "lerntext": "yǒuqù",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难",
              "lerntext": "nán",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a",
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
          "lerntext": "wǒ gēn nǐ yīyàng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p"
          }
        },
        "frameDe": "Ich bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "c": "a",
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
          "lerntext": "wǒ gēn nǐ yīyàng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "nǐ": "p"
          }
        },
        "frameDe": "Ich bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "c": "a",
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
          "lerntext": "wǒ juéde [Slot]",
          "wortarten": {
            "wǒ": "p",
            "juéde": "v"
          }
        },
        "frameDe": "Ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "c": "a",
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
          "lerntext": "wǒ juéde [Slot]",
          "wortarten": {
            "wǒ": "p",
            "juéde": "v"
          }
        },
        "frameDe": "Ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "准备好",
              "lerntext": "zhǔnbèi hǎo",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难过",
              "lerntext": "nánguò",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "累",
              "lerntext": "lèi",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a",
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
          "lerntext": "wǒmen [Slot] jiànmiàn",
          "wortarten": {
            "wǒmen": "p"
          }
        },
        "frameDe": "Wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
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
            "de": "sich treffen",
            "c": "v"
          }
        ],
        "id": "19.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我们 [Slot] 见面",
          "lerntext": "wǒmen [Slot] jiànmiàn",
          "wortarten": {
            "wǒmen": "p"
          }
        },
        "frameDe": "Wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
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
          "lerntext": "wǒ zài zhèlǐ [Slot] wǒ hěn lèi",
          "wortarten": {
            "wǒ": "p",
            "zài": "v",
            "lèi": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "因为",
              "lerntext": "yīnwèi",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "但是",
              "lerntext": "dànshì",
              "de": "aber",
              "c": "k"
            },
            {
              "schrift": "还是",
              "lerntext": "háishi",
              "de": "oder (in Fragen)",
              "c": "k"
            },
            {
              "schrift": "和",
              "lerntext": "hé",
              "de": "und",
              "c": "k"
            },
            {
              "schrift": "所以",
              "lerntext": "suǒyǐ",
              "de": "deshalb",
              "c": "k",
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
          "lerntext": "wǒ zài zhèlǐ [Slot] wǒ hěn lèi",
          "wortarten": {
            "wǒ": "p",
            "zài": "v",
            "lèi": "a"
          }
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
          "lerntext": "wǒ xiǎng zhè shì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v",
            "zhè": "p"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "c": "a",
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
          "lerntext": "wǒ xiǎng zhè shì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v",
            "zhè": "p"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "c": "a",
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
          "lerntext": "wǒ xiǎng zhè shì [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v",
            "zhè": "p"
          }
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
          "lerntext": "yǒu shíjiān wǒ xiǎng [Slot]",
          "wortarten": {
            "yǒu": "v",
            "shíjiān": "n",
            "wǒ": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen",
              "c": "v"
            },
            {
              "schrift": "见",
              "lerntext": "jiàn",
              "de": "sich treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "c": "v",
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
          "lerntext": "nǐ kěyǐ [Slot] ma?",
          "wortarten": {
            "nǐ": "p",
            "kěyǐ": "v"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "见",
              "lerntext": "jiàn",
              "de": "sich treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "必须",
              "lerntext": "bìxū",
              "de": "müssen",
              "c": "v",
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
          "lerntext": "nǐ kěyǐ [Slot] ma?",
          "wortarten": {
            "nǐ": "p",
            "kěyǐ": "v"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "帮助",
              "lerntext": "bāngzhù",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "付",
              "lerntext": "fù",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "见",
              "lerntext": "jiàn",
              "de": "sich treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "c": "v",
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
          "lerntext": "nǐ bìxū [Slot]",
          "wortarten": {
            "nǐ": "p",
            "bìxū": "v"
          }
        },
        "frameDe": "Du musst [Slot].",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "c": "a"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高兴",
              "lerntext": "gāoxìng",
              "de": "froh",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "聪明",
              "lerntext": "cōngming",
              "de": "klug",
              "c": "a",
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
          "lerntext": "nǐ bìxū [Slot]",
          "wortarten": {
            "nǐ": "p",
            "bìxū": "v"
          }
        },
        "frameDe": "Du musst [Slot].",
        "pronouns": [
          {
            "schrift": "你",
            "lerntext": "nǐ",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "c": "v",
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
          "lerntext": "wǒ gěi [Slot] shū",
          "wortarten": {
            "wǒ": "p",
            "gěi": "v",
            "shū": "n"
          }
        },
        "frameDe": "Ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "地铁站",
              "lerntext": "dìtiězhàn",
              "de": "U-Bahn-Station",
              "c": "n",
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
          "lerntext": "wǒ gěi [Slot] shū",
          "wortarten": {
            "wǒ": "p",
            "gěi": "v",
            "shū": "n"
          }
        },
        "frameDe": "Ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "c": "n"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "晴天",
              "lerntext": "qíngtiān",
              "de": "sonniger Tag",
              "c": "n",
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
          "lerntext": "wǒ gěi [Slot] kàn chéngshì",
          "wortarten": {
            "wǒ": "p",
            "gěi": "v",
            "kàn": "v",
            "chéngshì": "n"
          }
        },
        "frameDe": "Ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "元",
              "lerntext": "yuán",
              "de": "Yuan (Währung)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "菜",
              "lerntext": "cài",
              "de": "Gericht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妹妹",
              "lerntext": "mèimei",
              "de": "jüngere Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "儿子",
              "lerntext": "érzi",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "北京",
              "lerntext": "Běijīng",
              "de": "Peking",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "天气",
              "lerntext": "tiānqì",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "姐姐",
              "lerntext": "jiějie",
              "de": "ältere Schwester",
              "c": "n",
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
          "lerntext": "wǒ gěi [Slot] kàn chéngshì",
          "wortarten": {
            "wǒ": "p",
            "gěi": "v",
            "kàn": "v",
            "chéngshì": "n"
          }
        },
        "frameDe": "Ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "小姐",
              "lerntext": "xiǎojiě",
              "de": "Frau (Anrede)",
              "c": "n"
            },
            {
              "schrift": "孩子",
              "lerntext": "háizi",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "妈妈",
              "lerntext": "māma",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "爸爸",
              "lerntext": "bàba",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "学生",
              "lerntext": "xuésheng",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "朋友",
              "lerntext": "péngyou",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "眼睛",
              "lerntext": "yǎnjing",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "商店",
              "lerntext": "shāngdiàn",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "电脑",
              "lerntext": "diànnǎo",
              "de": "Computer",
              "c": "n",
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
          "lerntext": "wǒ xiǎng yào yī bēi [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "Ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "啤酒",
              "lerntext": "píjiǔ",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "德国",
              "lerntext": "Déguó",
              "de": "Deutschland",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "周末",
              "lerntext": "zhōumò",
              "de": "Wochenende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鸡蛋",
              "lerntext": "jīdàn",
              "de": "Ei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "腿",
              "lerntext": "tuǐ",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "椅子",
              "lerntext": "yǐzi",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "公共汽车",
              "lerntext": "gōnggòng qìchē",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "菜单",
              "lerntext": "càidān",
              "de": "Speisekarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "感冒",
              "lerntext": "gǎnmào",
              "de": "Erkältung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "茶",
              "lerntext": "chá",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "手",
              "lerntext": "shǒu",
              "de": "Hand",
              "c": "n",
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
            "de": "Becher",
            "c": "n"
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
          "lerntext": "wǒmen yǒu hěnduō [Slot]",
          "wortarten": {
            "wǒmen": "p",
            "yǒu": "v"
          }
        },
        "frameDe": "Wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "鼻子",
              "lerntext": "bízi",
              "de": "Nase",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "报纸",
              "lerntext": "bàozhǐ",
              "de": "Zeitung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "发型",
              "lerntext": "fàxíng",
              "de": "Frisur",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "飞机",
              "lerntext": "fēijī",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "女儿",
              "lerntext": "nǚ'ér",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "意思",
              "lerntext": "yìsi",
              "de": "Bedeutung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "男人",
              "lerntext": "nánrén",
              "de": "Mann",
              "c": "n",
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
            "de": "genug",
            "c": "a"
          }
        ],
        "id": "23.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我们 有 很多 [Slot]",
          "lerntext": "wǒmen yǒu hěnduō [Slot]",
          "wortarten": {
            "wǒmen": "p",
            "yǒu": "v"
          }
        },
        "frameDe": "Wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "我们",
            "lerntext": "wǒmen",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "鱼",
              "lerntext": "yú",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "糖",
              "lerntext": "táng",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "水果",
              "lerntext": "shuǐguǒ",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "时间",
              "lerntext": "shíjiān",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "钱",
              "lerntext": "qián",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "人",
              "lerntext": "rén",
              "de": "Mensch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "男朋友",
              "lerntext": "nán péngyou",
              "de": "fester Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面条",
              "lerntext": "miàntiáo",
              "de": "Nudeln",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "服务员",
              "lerntext": "fúwùyuán",
              "de": "Kellner",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "弟弟",
              "lerntext": "dìdi",
              "de": "jüngerer Bruder",
              "c": "n",
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
          "lerntext": "wǒ děng le yī [Slot]",
          "wortarten": {
            "wǒ": "p",
            "děng": "v"
          }
        },
        "frameDe": "Ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "问题",
              "lerntext": "wèntí",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "衣服",
              "lerntext": "yīfu",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "门",
              "lerntext": "mén",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "银行",
              "lerntext": "yínháng",
              "de": "Bank (Geldinstitut)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "分钟",
              "lerntext": "fēnzhōng",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "洗手间",
              "lerntext": "xǐshǒujiān",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "考试",
              "lerntext": "kǎoshì",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "音乐",
              "lerntext": "yīnyuè",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "药",
              "lerntext": "yào",
              "de": "Medizin",
              "c": "n",
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
          "lerntext": "wǒ děng le yī [Slot]",
          "wortarten": {
            "wǒ": "p",
            "děng": "v"
          }
        },
        "frameDe": "Ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "号",
              "lerntext": "hào",
              "de": "Tag (Datum)",
              "c": "n"
            },
            {
              "schrift": "小时",
              "lerntext": "xiǎoshí",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "分",
              "lerntext": "fēn",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "星期",
              "lerntext": "xīngqī",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "夜里",
              "lerntext": "yèli",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "糖",
              "lerntext": "táng",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "年",
              "lerntext": "nián",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "羊肉",
              "lerntext": "yángròu",
              "de": "Lammfleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "月",
              "lerntext": "yuè",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "块",
              "lerntext": "kuài",
              "de": "Yuan (Geldeinheit)",
              "c": "n",
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
          "lerntext": "[Slot] wǒ huí jiā",
          "wortarten": {
            "wǒ": "p",
            "huí": "v"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
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
          "lerntext": "[Slot] wǒ huí jiā",
          "wortarten": {
            "wǒ": "p",
            "huí": "v"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
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
          "lerntext": "wǒ xiǎng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "Ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen",
              "c": "v"
            },
            {
              "schrift": "应该",
              "lerntext": "yīnggāi",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "送",
              "lerntext": "sòng",
              "de": "bringen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "唱歌",
              "lerntext": "chànggē",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅行",
              "lerntext": "lǚxíng",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打电话",
              "lerntext": "dǎ diànhuà",
              "de": "telefonieren",
              "c": "v",
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
          "lerntext": "nǐ kěyǐ gěi wǒ [Slot] ma?",
          "wortarten": {
            "nǐ": "p",
            "kěyǐ": "v",
            "gěi": "v",
            "wǒ": "p"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "钥匙",
              "lerntext": "yàoshi",
              "de": "Schlüssel",
              "c": "n"
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "糖",
              "lerntext": "táng",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "哥哥",
              "lerntext": "gēge",
              "de": "älterer Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "国家",
              "lerntext": "guójiā",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "公司",
              "lerntext": "gōngsī",
              "de": "Firma",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "礼物",
              "lerntext": "lǐwù",
              "de": "Geschenk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "英语",
              "lerntext": "Yīngyǔ",
              "de": "Englisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "点",
              "lerntext": "diǎn",
              "de": "Uhr (Zeitangabe)",
              "c": "n",
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
          "lerntext": "nǐ kěyǐ gěi wǒ [Slot] ma?",
          "wortarten": {
            "nǐ": "p",
            "kěyǐ": "v",
            "gěi": "v",
            "wǒ": "p"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "糖",
              "lerntext": "táng",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "咖啡",
              "lerntext": "kāfēi",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "牛奶",
              "lerntext": "niúnǎi",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "钥匙",
              "lerntext": "yàoshi",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "包",
              "lerntext": "bāo",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "书",
              "lerntext": "shū",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "水",
              "lerntext": "shuǐ",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "面包",
              "lerntext": "miànbāo",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "肉",
              "lerntext": "ròu",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "教室",
              "lerntext": "jiàoshì",
              "de": "Klassenzimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "安排",
              "lerntext": "ānpái",
              "de": "Programm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "身体",
              "lerntext": "shēntǐ",
              "de": "Körper",
              "c": "n",
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
          "lerntext": "wǒ juéde zhè hěn [Slot]",
          "wortarten": {
            "wǒ": "p",
            "juéde": "v",
            "zhè": "p"
          }
        },
        "frameDe": "Ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "饿",
              "lerntext": "è",
              "de": "hungrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "棒",
              "lerntext": "bàng",
              "de": "toll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "蓝",
              "lerntext": "lán",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "胖",
              "lerntext": "pàng",
              "de": "dick",
              "c": "a",
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
          "lerntext": "wǒ juéde zhè hěn [Slot]",
          "wortarten": {
            "wǒ": "p",
            "juéde": "v",
            "zhè": "p"
          }
        },
        "frameDe": "Ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "漂亮",
              "lerntext": "piàoliang",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "暖和",
              "lerntext": "nuǎnhuo",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "冷",
              "lerntext": "lěng",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "新",
              "lerntext": "xīn",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "小",
              "lerntext": "xiǎo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "高",
              "lerntext": "gāo",
              "de": "groß (Körpergröße)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "贵",
              "lerntext": "guì",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "老",
              "lerntext": "lǎo",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "年轻",
              "lerntext": "niánqīng",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好喝",
              "lerntext": "hǎohē",
              "de": "lecker (Getränk)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "完",
              "lerntext": "wán",
              "de": "fertig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "瘦",
              "lerntext": "shòu",
              "de": "dünn",
              "c": "a",
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
          "lerntext": "wǒ juéde zhè fēicháng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "juéde": "v",
            "zhè": "p"
          }
        },
        "frameDe": "Ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快",
              "lerntext": "kuài",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "短",
              "lerntext": "duǎn",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "渴",
              "lerntext": "kě",
              "de": "durstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好",
              "lerntext": "hǎo",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "便宜",
              "lerntext": "piányi",
              "de": "günstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "好吃",
              "lerntext": "hǎochī",
              "de": "lecker (Essen)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "忙",
              "lerntext": "máng",
              "de": "beschäftigt",
              "c": "a",
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
          "lerntext": "wǒ juéde zhè fēicháng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "juéde": "v",
            "zhè": "p"
          }
        },
        "frameDe": "Ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "甜",
              "lerntext": "tián",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "生气",
              "lerntext": "shēngqì",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "干净",
              "lerntext": "gānjìng",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "容易",
              "lerntext": "róngyì",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "错",
              "lerntext": "cuò",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "长",
              "lerntext": "cháng",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "黑",
              "lerntext": "hēi",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "大",
              "lerntext": "dà",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "方便",
              "lerntext": "fāngbiàn",
              "de": "praktisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "危险",
              "lerntext": "wēixiǎn",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "近",
              "lerntext": "jìn",
              "de": "nah",
              "c": "a",
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
          "lerntext": "wǒ juéde zhè fēicháng [Slot]",
          "wortarten": {
            "wǒ": "p",
            "juéde": "v",
            "zhè": "p"
          }
        },
        "frameDe": "Ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
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
          "lerntext": "míngtiān wǒ yào [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "告诉",
              "lerntext": "gàosu",
              "de": "mitteilen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "退房",
              "lerntext": "tuìfáng",
              "de": "auschecken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "介绍",
              "lerntext": "jièshào",
              "de": "vorstellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打",
              "lerntext": "dǎ",
              "de": "schlagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "坐",
              "lerntext": "zuò",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "发烧",
              "lerntext": "fāshāo",
              "de": "Fieber haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮",
              "lerntext": "bāng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "习惯",
              "lerntext": "xíguàn",
              "de": "gewöhnt sein",
              "c": "v",
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
          "lerntext": "míngtiān wǒ yào [Slot]",
          "wortarten": {
            "wǒ": "p"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "读",
              "lerntext": "dú",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "写",
              "lerntext": "xiě",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "拿",
              "lerntext": "ná",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "买",
              "lerntext": "mǎi",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "做",
              "lerntext": "zuò",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "觉得",
              "lerntext": "juéde",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看",
              "lerntext": "kàn",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "照顾",
              "lerntext": "zhàogù",
              "de": "kümmern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "让",
              "lerntext": "ràng",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "懂",
              "lerntext": "dǒng",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雪",
              "lerntext": "xiàxuě",
              "de": "schneien",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跳",
              "lerntext": "tiào",
              "de": "springen",
              "c": "v",
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
          "lerntext": "wǒ xiǎng kuài [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "Ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "支付",
              "lerntext": "zhīfù",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "疼",
              "lerntext": "téng",
              "de": "schmerzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "穿",
              "lerntext": "chuān",
              "de": "anziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "不去",
              "lerntext": "bú qù",
              "de": "nicht gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "卖",
              "lerntext": "mài",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "见",
              "lerntext": "jiàn",
              "de": "sich treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "叫",
              "lerntext": "jiào",
              "de": "rufen",
              "c": "v",
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
          "lerntext": "wǒ xiǎng kuài [Slot]",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v"
          }
        },
        "frameDe": "Ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "找",
              "lerntext": "zhǎo",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "爱",
              "lerntext": "ài",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "加",
              "lerntext": "jiā",
              "de": "hinzufügen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "帮忙",
              "lerntext": "bāngmáng",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "生病",
              "lerntext": "shēngbìng",
              "de": "krank sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "开始",
              "lerntext": "kāishǐ",
              "de": "anfangen",
              "c": "v",
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
          "lerntext": "zhè shì [Slot] de rén",
          "wortarten": {
            "zhè": "p",
            "rén": "n"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "住",
              "lerntext": "zhù",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "待",
              "lerntext": "dāi",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "要",
              "lerntext": "yào",
              "de": "wollen",
              "c": "v"
            },
            {
              "schrift": "上网",
              "lerntext": "shàngwǎng",
              "de": "im Internet sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "运动",
              "lerntext": "yùndòng",
              "de": "Sport treiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "用",
              "lerntext": "yòng",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回",
              "lerntext": "huí",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "谈恋爱",
              "lerntext": "tán liàn'ài",
              "de": "daten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "翻译",
              "lerntext": "fānyì",
              "de": "übersetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "起床",
              "lerntext": "qǐchuáng",
              "de": "aufstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "休息",
              "lerntext": "xiūxi",
              "de": "ausruhen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饭",
              "lerntext": "chīfàn",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "报警",
              "lerntext": "bàojǐng",
              "de": "die Polizei rufen",
              "c": "v",
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
          "lerntext": "wǒ zhǎo kěyǐ [Slot] de dìfang",
          "wortarten": {
            "wǒ": "p",
            "zhǎo": "v",
            "kěyǐ": "v",
            "dìfang": "n"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "看书",
              "lerntext": "kànshū",
              "de": "lesen (Buch)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "进",
              "lerntext": "jìn",
              "de": "eintreten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "解释",
              "lerntext": "jiěshì",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "聊天",
              "lerntext": "liáotiān",
              "de": "quatschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "到",
              "lerntext": "dào",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "下雨",
              "lerntext": "xiàyǔ",
              "de": "regnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "旅游",
              "lerntext": "lǚyóu",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "来",
              "lerntext": "lái",
              "de": "kommen",
              "c": "v",
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
            "de": "Ort",
            "c": "n"
          }
        ],
        "id": "28.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "我 找 可以 [Slot] 的 地方",
          "lerntext": "wǒ zhǎo kěyǐ [Slot] de dìfang",
          "wortarten": {
            "wǒ": "p",
            "zhǎo": "v",
            "kěyǐ": "v",
            "dìfang": "n"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "问",
              "lerntext": "wèn",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "回答",
              "lerntext": "huídá",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "跳舞",
              "lerntext": "tiàowǔ",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "睡觉",
              "lerntext": "shuìjiào",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "玩",
              "lerntext": "wán",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "等",
              "lerntext": "děng",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "工作",
              "lerntext": "gōngzuò",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "打算",
              "lerntext": "dǎsuàn",
              "de": "vorhaben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "欢迎",
              "lerntext": "huānyíng",
              "de": "willkommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "能",
              "lerntext": "néng",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "逛街",
              "lerntext": "guàngjiē",
              "de": "shoppen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "跑步",
              "lerntext": "pǎobù",
              "de": "joggen",
              "c": "v",
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
          "lerntext": "zuótiān wǒ zài [Slot]",
          "wortarten": {
            "wǒ": "p",
            "zài": "v"
          }
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "钥匙",
              "lerntext": "yàoshi",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "地方",
              "lerntext": "dìfang",
              "de": "Ort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "阴天",
              "lerntext": "yīntiān",
              "de": "bewölkter Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "岁",
              "lerntext": "suì",
              "de": "Jahre (alt)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "女朋友",
              "lerntext": "nǚ péngyou",
              "de": "feste Freundin",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "耳朵",
              "lerntext": "ěrduo",
              "de": "Ohr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "微信",
              "lerntext": "wēixìn",
              "de": "WeChat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "兴趣",
              "lerntext": "xìngqù",
              "de": "Interesse",
              "c": "n",
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
          "lerntext": "zuótiān wǒ zài [Slot]",
          "wortarten": {
            "wǒ": "p",
            "zài": "v"
          }
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "机场",
              "lerntext": "jīchǎng",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "城市",
              "lerntext": "chéngshì",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "饭店",
              "lerntext": "fàndiàn",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "酒店",
              "lerntext": "jiǔdiàn",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "医院",
              "lerntext": "yīyuàn",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "火车站",
              "lerntext": "huǒchēzhàn",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "学校",
              "lerntext": "xuéxiào",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "钥匙",
              "lerntext": "yàoshi",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "地方",
              "lerntext": "dìfang",
              "de": "Ort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "汉语",
              "lerntext": "Hànyǔ",
              "de": "Chinesisch (Sprache)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "电影",
              "lerntext": "diànyǐng",
              "de": "Film",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "桌子",
              "lerntext": "zhuōzi",
              "de": "Tisch",
              "c": "n",
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
          "lerntext": "wǒ xiǎng [Slot] yīnwèi wǒ yǒu shíjiān",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v",
            "yīnwèi": "k",
            "yǒu": "v",
            "shíjiān": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "清楚",
              "lerntext": "qīngchu",
              "de": "klar",
              "c": "a"
            },
            {
              "schrift": "够",
              "lerntext": "gòu",
              "de": "genug",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "难受",
              "lerntext": "nánshòu",
              "de": "unwohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "单身",
              "lerntext": "dānshēn",
              "de": "single",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "可爱",
              "lerntext": "kě'ài",
              "de": "niedlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "快乐",
              "lerntext": "kuàilè",
              "de": "fröhlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "慢",
              "lerntext": "màn",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "帅",
              "lerntext": "shuài",
              "de": "cool",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "舒服",
              "lerntext": "shūfu",
              "de": "wohl",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "远",
              "lerntext": "yuǎn",
              "de": "weit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "热",
              "lerntext": "rè",
              "de": "heiß",
              "c": "a",
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
          "lerntext": "wǒ xiǎng [Slot] yīnwèi wǒ yǒu shíjiān",
          "wortarten": {
            "wǒ": "p",
            "xiǎng": "v",
            "yīnwèi": "k",
            "yǒu": "v",
            "shíjiān": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "我",
            "lerntext": "wǒ",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "忘",
              "lerntext": "wàng",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "给",
              "lerntext": "gěi",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "说",
              "lerntext": "shuō",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "开",
              "lerntext": "kāi",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "走",
              "lerntext": "zǒu",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "知道",
              "lerntext": "zhīdào",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "了解",
              "lerntext": "liǎojiě",
              "de": "vertraut sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "说话",
              "lerntext": "shuōhuà",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "应该",
              "lerntext": "yīnggāi",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "丢",
              "lerntext": "diū",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "喝一杯",
              "lerntext": "hē yī bēi",
              "de": "etwas trinken gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "准备",
              "lerntext": "zhǔnbèi",
              "de": "vorbereiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "吃饱",
              "lerntext": "chībǎo",
              "de": "satt sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "游泳",
              "lerntext": "yóuyǒng",
              "de": "schwimmen",
              "c": "v",
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
