// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/Chinesisch HSK1 und HSK2/build_chinesisch_kurs.py
// Neu bauen: python "build_chinesisch_kurs.py"
//
// Das 12-Modul-Curriculum fuer Chinesisch (HSK1/HSK2) nach Simons Vorgabe
// vom 2026-08-20. Aufbau je Modul: drei Lektionen.
//   Satzrahmen mit je 4-5 Vokabel-Slots, am Modulende ein Finisher ohne
//   neue Vokabeln. Module 1, 3 und 4 haben deshalb VIER Lektionen statt
//   drei - siehe Generator-Skript fuer die Begruendung.
//
// Geuebt wird ueber PINYIN und Sprache, nicht ueber Zeichen (Nutzer-Vorgabe:
// "fuer das Lernen brauchen wir keine Zeichen"). `hanzi` laeuft passiv mit
// und ist nie der abgefragte Teil - passt zum Kernprinzip der App, dass
// Lesen und Schreiben nicht trainiert werden.
//
// Umfang: 12 Module, 113 Lektionen, 350 Slot-Vokabeln
// (Wortliste insgesamt: 351 Eintraege - der Rest sind Rahmen- und
// Funktionswoerter, die in den Satzmustern stecken statt in Slots).

export type CourseWord = {
  /** Laeuft passiv mit - wird nie abgefragt. */
  hanzi: string;
  /** Der eigentliche Lerntext. */
  pinyin: string;
  /** Bedeutung in der Sprache des Nutzers. */
  de: string;
};

export type CourseLessonData = {
  /** "1.1", "1.2", "1.3" ... */
  id: string;
  /**
   * `frame`    Satzrahmen mit 4-5 neuen Slots.
   * `series`   geschlossene Reihe (Zahlen) - bewusst mehr als 5 auf einmal,
   *            weil sie als Abfolge gelernt wird und nicht als Einzelwoerter.
   * `finisher` fuehrt KEINE neuen Vokabeln ein, sondern kombiniert die
   *            Rahmen des Moduls.
   */
  kind: 'frame' | 'series' | 'finisher';
  /** Satzmuster mit Platzhaltern, in Pinyin und passiv in Zeichen. */
  frame: { pinyin: string; hanzi: string };
  /**
   * Deutsches Rahmen-Template mit denselben [Slot]/[Zahl]-Platzhaltern wie
   * `frame.hanzi` (2026-08-25) - bei `kind: 'frame'` und `'series'`
   * gesetzt, bei `'finisher'` `null` (der hat schon sein eigenes `task`).
   * Fuers "Wie sagst du: ...?" der Situations-Auswahl in der
   * Wörter-Wiederholung, siehe data/situationsAufgaben.ts.
   */
  frameDe: string | null;
  /** Welche Pronomen diese Lektion traegt. */
  pronouns: CourseWord[];
  /** Eine Gruppe je Platzhalter im Rahmen. */
  slotGroups: CourseWord[][];
  /** Wie viele der Slots in dieser Lektion zum ersten Mal vorkommen. */
  newCount: number;
  /**
   * Nur beim Finisher: die Situation auf Deutsch. Der Uebungs-Screen zeigt
   * dann NICHTS ausser diesem Satz - kein Satzmuster, keine Woerter. Das ist
   * der Moment, in dem sich zeigt, ob wirklich etwas haengengeblieben ist.
   */
  task: string | null;
  /**
   * Woerter des Satzrahmens, die in dieser Lektion zum ersten Mal vorkommen.
   *
   * Der Teaser-Satz am Lektionsanfang fuehrt sie ein - vorher wurden sie
   * ueberhaupt nicht unterrichtet, sie standen nur stumm in den Saetzen.
   */
  newFrameWords: CourseWord[];
};

export type CourseModuleData = {
  number: number;
  title: string;
  lessons: CourseLessonData[];
};

export const CHINESE_COURSE: CourseModuleData[] =
[
  {
    number: 1,
    title: "Identität, Pronomen & Personen",
    lessons: [
      {
        id: "1.1",
        kind: "frame",
        frame: {
          pinyin: "wǒ / tā / tā shì [Slot]",
          hanzi: "我 / 他 / 她 是 [Slot]"
        },
        frameDe: "Ich bin [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          },
          {
            hanzi: "她",
            pinyin: "tā",
            de: "sie"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "学生",
              pinyin: "xuésheng",
              de: "Student / Schüler"
            },
            {
              hanzi: "单身",
              pinyin: "dānshēn",
              de: "single"
            },
            {
              hanzi: "朋友",
              pinyin: "péngyou",
              de: "Freund"
            },
            {
              hanzi: "同事",
              pinyin: "tóngshì",
              de: "Kollege"
            },
            {
              hanzi: "老师",
              pinyin: "lǎoshī",
              de: "Lehrer"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "是",
            pinyin: "shì",
            de: "sein"
          }
        ]
      },
      {
        id: "1.2",
        kind: "frame",
        frame: {
          pinyin: "tā / tā hěn [Slot]",
          hanzi: "他 / 她 很 [Slot]"
        },
        frameDe: "Er ist sehr [Slot].",
        pronouns: [
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          },
          {
            hanzi: "她",
            pinyin: "tā",
            de: "sie"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "帅",
              pinyin: "shuài",
              de: "cool / gutaussehend"
            },
            {
              hanzi: "漂亮",
              pinyin: "piàoliang",
              de: "schön / hübsch"
            },
            {
              hanzi: "高",
              pinyin: "gāo",
              de: "groß (Körpergröße)"
            },
            {
              hanzi: "有趣",
              pinyin: "yǒuqù",
              de: "interessant"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: [
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          },
          {
            hanzi: "很",
            pinyin: "hěn",
            de: "sehr"
          }
        ]
      },
      {
        id: "1.3",
        kind: "frame",
        frame: {
          pinyin: "zhè shì wǒ de [Slot]，tā / tā hěn shuài",
          hanzi: "这是 我的 [Slot]，他 / 她 很 帅"
        },
        frameDe: "Das ist mein [Slot], er sieht gut aus.",
        pronouns: [
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          },
          {
            hanzi: "她",
            pinyin: "tā",
            de: "sie"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "朋友",
              pinyin: "péngyou",
              de: "Freund"
            },
            {
              hanzi: "男朋友",
              pinyin: "nán péngyou",
              de: "fester Freund"
            },
            {
              hanzi: "女朋友",
              pinyin: "nǚ péngyou",
              de: "feste Freundin"
            },
            {
              hanzi: "微信",
              pinyin: "wēixìn",
              de: "WeChat"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: [
          {
            hanzi: "这",
            pinyin: "zhè",
            de: "dies / das"
          },
          {
            hanzi: "的",
            pinyin: "de",
            de: "Genitiv- / Attributpartikel"
          }
        ]
      },
      {
        id: "1.4",
        kind: "frame",
        frame: {
          pinyin: "zhè shì wǒ de [Slot]",
          hanzi: "这是 我的 [Slot]"
        },
        frameDe: "Das ist mein [Slot].",
        pronouns: [
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          },
          {
            hanzi: "她",
            pinyin: "tā",
            de: "sie"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "爸爸",
              pinyin: "bàba",
              de: "Vater"
            },
            {
              hanzi: "妈妈",
              pinyin: "māma",
              de: "Mutter"
            },
            {
              hanzi: "哥哥",
              pinyin: "gēge",
              de: "älterer Bruder"
            },
            {
              hanzi: "姐姐",
              pinyin: "jiějie",
              de: "ältere Schwester"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "1.5",
        kind: "frame",
        frame: {
          pinyin: "zhè shì wǒ de [Slot]",
          hanzi: "这是 我的 [Slot]"
        },
        frameDe: "Das ist mein [Slot].",
        pronouns: [
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          },
          {
            hanzi: "她",
            pinyin: "tā",
            de: "sie"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "弟弟",
              pinyin: "dìdi",
              de: "jüngerer Bruder"
            },
            {
              hanzi: "妹妹",
              pinyin: "mèimei",
              de: "jüngere Schwester"
            },
            {
              hanzi: "儿子",
              pinyin: "érzi",
              de: "Sohn"
            },
            {
              hanzi: "女儿",
              pinyin: "nǚ'ér",
              de: "Tochter"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "1.6",
        kind: "frame",
        frame: {
          pinyin: "nǐ jiào shénme [Slot 1]？wǒ [Zahl] [Slot 2]",
          hanzi: "你 叫 什么 [Slot 1]？我 [Zahl] [Slot 2]"
        },
        frameDe: "Wie ist dein [Slot 1]? Ich bin [Zahl] [Slot 2] alt.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "名字",
              pinyin: "míngzi",
              de: "Name"
            }
          ],
          [
            {
              hanzi: "岁",
              pinyin: "suì",
              de: "Jahre (alt)"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          },
          {
            hanzi: "叫",
            pinyin: "jiào",
            de: "rufen / heißen"
          },
          {
            hanzi: "什么",
            pinyin: "shénme",
            de: "was"
          }
        ]
      },
      {
        id: "1.7",
        kind: "frame",
        frame: {
          pinyin: "[Slot] shì nǐ de péngyou？",
          hanzi: "[Slot] 是 你的 朋友？"
        },
        frameDe: "Ist [Slot] dein Freund?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "谁",
              pinyin: "shéi",
              de: "wer"
            },
            {
              hanzi: "先生",
              pinyin: "xiānsheng",
              de: "Herr"
            },
            {
              hanzi: "小姐",
              pinyin: "xiǎojiě",
              de: "Frau (Anrede)"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "1.8",
        kind: "finisher",
        frame: {
          pinyin: "wǒ shì [Name]，zhè shì wǒ de [Slot 1]，tā / tā hěn [Slot 2]",
          hanzi: "我是 [Name]，这是 我的 [Slot 1]，他 / 她 很 [Slot 2]"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Stell dich vor, zeig auf jemanden neben dir und sag, wie er ist.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 2,
    title: "Wünsche, Fragen & Bitten",
    lessons: [
      {
        id: "2.1",
        kind: "frame",
        frame: {
          pinyin: "wǒ xiǎng / yào [Slot]",
          hanzi: "我 想 / 要 [Slot]"
        },
        frameDe: "Ich möchte [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "吃",
              pinyin: "chī",
              de: "essen"
            },
            {
              hanzi: "喝",
              pinyin: "hē",
              de: "trinken"
            },
            {
              hanzi: "买",
              pinyin: "mǎi",
              de: "kaufen"
            },
            {
              hanzi: "看",
              pinyin: "kàn",
              de: "sehen / schauen"
            },
            {
              hanzi: "休息",
              pinyin: "xiūxi",
              de: "ausruhen"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: [
          {
            hanzi: "想",
            pinyin: "xiǎng",
            de: "möchten / wollen"
          },
          {
            hanzi: "要",
            pinyin: "yào",
            de: "wollen / brauchen"
          }
        ]
      },
      {
        id: "2.2",
        kind: "frame",
        frame: {
          pinyin: "nǐ kěyǐ [Slot] ma？",
          hanzi: "你 可以 [Slot] 吗？"
        },
        frameDe: "Kannst du [Slot]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "坐",
              pinyin: "zuò",
              de: "sitzen"
            },
            {
              hanzi: "进",
              pinyin: "jìn",
              de: "eintreten"
            },
            {
              hanzi: "帮助",
              pinyin: "bāngzhù",
              de: "helfen"
            },
            {
              hanzi: "等",
              pinyin: "děng",
              de: "warten"
            },
            {
              hanzi: "叫",
              pinyin: "jiào",
              de: "rufen / heißen"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: [
          {
            hanzi: "可以",
            pinyin: "kěyǐ",
            de: "können / dürfen"
          },
          {
            hanzi: "吗",
            pinyin: "ma",
            de: "Fragepartikel"
          }
        ]
      },
      {
        id: "2.3",
        kind: "frame",
        frame: {
          pinyin: "wǒ xiǎng [Slot]",
          hanzi: "我 想 [Slot]"
        },
        frameDe: "Ich möchte [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "说",
              pinyin: "shuō",
              de: "sagen / sprechen"
            },
            {
              hanzi: "写",
              pinyin: "xiě",
              de: "schreiben"
            },
            {
              hanzi: "读",
              pinyin: "dú",
              de: "lesen"
            },
            {
              hanzi: "听",
              pinyin: "tīng",
              de: "hören"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "2.4",
        kind: "frame",
        frame: {
          pinyin: "nǐ kěyǐ [Slot] ma？",
          hanzi: "你 可以 [Slot] 吗？"
        },
        frameDe: "Kannst du [Slot]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "问",
              pinyin: "wèn",
              de: "fragen"
            },
            {
              hanzi: "做",
              pinyin: "zuò",
              de: "machen / tun"
            },
            {
              hanzi: "开",
              pinyin: "kāi",
              de: "öffnen / fahren"
            },
            {
              hanzi: "关",
              pinyin: "guān",
              de: "schließen"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "2.5",
        kind: "frame",
        frame: {
          pinyin: "wǒ xiǎng [Slot] zhè gè",
          hanzi: "我 想 [Slot] 这个"
        },
        frameDe: "Ich möchte das [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "用",
              pinyin: "yòng",
              de: "benutzen"
            },
            {
              hanzi: "送",
              pinyin: "sòng",
              de: "bringen / schenken"
            },
            {
              hanzi: "回答",
              pinyin: "huídá",
              de: "antworten"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: [
          {
            hanzi: "个",
            pinyin: "gè",
            de: "Zählmarke (allgemein)"
          }
        ]
      },
      {
        id: "2.6",
        kind: "frame",
        frame: {
          pinyin: "wǒ [Slot 1] nǐ，wǒ [Slot 2] zhè gè hěn hǎo",
          hanzi: "我 [Slot 1] 你，我 [Slot 2] 这个 很 好"
        },
        frameDe: "Ich [Slot 1] dir, ich [Slot 2] das gut.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "告诉",
              pinyin: "gàosu",
              de: "mitteilen / sagen"
            }
          ],
          [
            {
              hanzi: "知道",
              pinyin: "zhīdào",
              de: "wissen"
            },
            {
              hanzi: "觉得",
              pinyin: "juéde",
              de: "finden / meinen"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: [
          {
            hanzi: "好",
            pinyin: "hǎo",
            de: "gut"
          }
        ]
      },
      {
        id: "2.7",
        kind: "frame",
        frame: {
          pinyin: "wǒ bù [Slot 1] zhè gè [Slot 2]",
          hanzi: "我 不 [Slot 1] 这个 [Slot 2]"
        },
        frameDe: "Ich [Slot 1] [Slot 2] nicht.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "懂",
              pinyin: "dǒng",
              de: "verstehen"
            }
          ],
          [
            {
              hanzi: "意思",
              pinyin: "yìsi",
              de: "Bedeutung / Sinn"
            },
            {
              hanzi: "问题",
              pinyin: "wèntí",
              de: "Frage / Problem"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: [
          {
            hanzi: "不",
            pinyin: "bù",
            de: "nicht"
          }
        ]
      },
      {
        id: "2.8",
        kind: "frame",
        frame: {
          pinyin: "wǒ xiǎng [Slot 1] yīfu，zhè gè shì [Slot 2] de",
          hanzi: "我 想 [Slot 1] 衣服，这个 是 [Slot 2] 的"
        },
        frameDe: "Ich möchte die Kleidung [Slot 1]. Die ist [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "洗",
              pinyin: "xǐ",
              de: "waschen"
            },
            {
              hanzi: "穿",
              pinyin: "chuān",
              de: "anziehen / tragen"
            }
          ],
          [
            {
              hanzi: "错",
              pinyin: "cuò",
              de: "falsch"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: [
          {
            hanzi: "衣服",
            pinyin: "yīfu",
            de: "Kleidung"
          }
        ]
      },
      {
        id: "2.9",
        kind: "frame",
        frame: {
          pinyin: "qǐng [Slot 1] wǒ jìn，wǒ chī [Slot 2] le",
          hanzi: "请 [Slot 1] 我 进，我 吃 [Slot 2] 了"
        },
        frameDe: "Bitte [Slot 1] mich rein, ich bin [Slot 2] mit dem Essen.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "让",
              pinyin: "ràng",
              de: "lassen"
            }
          ],
          [
            {
              hanzi: "完",
              pinyin: "wán",
              de: "fertig / zu Ende"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: [
          {
            hanzi: "请",
            pinyin: "qǐng",
            de: "bitte"
          },
          {
            hanzi: "了",
            pinyin: "le",
            de: "Zustandspartikel"
          }
        ]
      },
      {
        id: "2.10",
        kind: "frame",
        frame: {
          pinyin: "wǒ xiǎng [Slot]",
          hanzi: "我 想 [Slot]"
        },
        frameDe: "Ich möchte [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "说话",
              pinyin: "shuōhuà",
              de: "sprechen / reden"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "2.11",
        kind: "finisher",
        frame: {
          pinyin: "wǒ xiǎng [Slot 1]，nǐ kěyǐ [Slot 2] ma？",
          hanzi: "我 想 [Slot 1]，你 可以 [Slot 2] 吗？"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Sag, was du möchtest, und bitte jemanden um etwas.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 3,
    title: "Mengen, Besitz & Shopping",
    lessons: [
      {
        id: "3.1",
        kind: "frame",
        frame: {
          pinyin: "wǒ / wǒmen yǒu [Slot]",
          hanzi: "我 / 我们 有 [Slot]"
        },
        frameDe: "Ich habe [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "苹果",
              pinyin: "píngguǒ",
              de: "Apfel"
            },
            {
              hanzi: "电脑",
              pinyin: "diànnǎo",
              de: "Computer"
            },
            {
              hanzi: "手机",
              pinyin: "shǒujī",
              de: "Handy"
            },
            {
              hanzi: "衣服",
              pinyin: "yīfu",
              de: "Kleidung"
            },
            {
              hanzi: "票",
              pinyin: "piào",
              de: "Ticket / Karte"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: [
          {
            hanzi: "有",
            pinyin: "yǒu",
            de: "haben"
          }
        ]
      },
      {
        id: "3.2",
        kind: "series",
        frame: {
          pinyin: "wǒ / wǒmen yǒu [Zahl] gè píngguǒ",
          hanzi: "我 / 我们 有 [Zahl] 个 苹果"
        },
        frameDe: "Ich habe [Zahl] Äpfel.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "零",
              pinyin: "líng",
              de: "null"
            },
            {
              hanzi: "一",
              pinyin: "yī",
              de: "eins"
            },
            {
              hanzi: "二",
              pinyin: "èr",
              de: "zwei"
            },
            {
              hanzi: "两",
              pinyin: "liǎng",
              de: "zwei (vor Zählwort)"
            },
            {
              hanzi: "三",
              pinyin: "sān",
              de: "drei"
            },
            {
              hanzi: "四",
              pinyin: "sì",
              de: "vier"
            },
            {
              hanzi: "五",
              pinyin: "wǔ",
              de: "fünf"
            },
            {
              hanzi: "六",
              pinyin: "liù",
              de: "sechs"
            },
            {
              hanzi: "七",
              pinyin: "qī",
              de: "sieben"
            },
            {
              hanzi: "八",
              pinyin: "bā",
              de: "acht"
            },
            {
              hanzi: "九",
              pinyin: "jiǔ",
              de: "neun"
            },
            {
              hanzi: "十",
              pinyin: "shí",
              de: "zehn"
            },
            {
              hanzi: "百",
              pinyin: "bǎi",
              de: "hundert"
            },
            {
              hanzi: "千",
              pinyin: "qiān",
              de: "tausend"
            }
          ]
        ],
        newCount: 14,
        task: null,
        newFrameWords: []
      },
      {
        id: "3.3",
        kind: "frame",
        frame: {
          pinyin: "zhè gè tài [Slot] le",
          hanzi: "这个 太 [Slot] 了"
        },
        frameDe: "Das ist zu [Slot].",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "贵",
              pinyin: "guì",
              de: "teuer"
            },
            {
              hanzi: "便宜",
              pinyin: "piányi",
              de: "günstig"
            },
            {
              hanzi: "大",
              pinyin: "dà",
              de: "groß"
            },
            {
              hanzi: "小",
              pinyin: "xiǎo",
              de: "klein"
            },
            {
              hanzi: "新",
              pinyin: "xīn",
              de: "neu"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: [
          {
            hanzi: "太",
            pinyin: "tài",
            de: "zu / allzu"
          }
        ]
      },
      {
        id: "3.4",
        kind: "frame",
        frame: {
          pinyin: "wǒ yǒu [Slot]",
          hanzi: "我 有 [Slot]"
        },
        frameDe: "Ich habe [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "书",
              pinyin: "shū",
              de: "Buch"
            },
            {
              hanzi: "报纸",
              pinyin: "bàozhǐ",
              de: "Zeitung"
            },
            {
              hanzi: "东西",
              pinyin: "dōngxi",
              de: "Ding / Sache"
            },
            {
              hanzi: "杯子",
              pinyin: "bēizi",
              de: "Becher / Glas"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "3.5",
        kind: "frame",
        frame: {
          pinyin: "zhè gè duōshao [Slot 1]？wǒ yǒu [Zahl] [Slot 2]",
          hanzi: "这个 多少 [Slot 1]？我 有 [Zahl] [Slot 2]"
        },
        frameDe: "Wie viel [Slot 1] kostet das? Ich habe [Zahl] [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "钱",
              pinyin: "qián",
              de: "Geld"
            }
          ],
          [
            {
              hanzi: "块",
              pinyin: "kuài",
              de: "Yuan (Geldeinheit)"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: [
          {
            hanzi: "多少",
            pinyin: "duōshao",
            de: "wie viel"
          }
        ]
      },
      {
        id: "3.6",
        kind: "frame",
        frame: {
          pinyin: "nǐ yǒu [Slot] gè píngguǒ？",
          hanzi: "你 有 [Slot] 个 苹果？"
        },
        frameDe: "[Slot] Äpfel hast du?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "几",
              pinyin: "jǐ",
              de: "wie viele"
            },
            {
              hanzi: "多少",
              pinyin: "duōshao",
              de: "wie viel"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "3.7",
        kind: "frame",
        frame: {
          pinyin: "zhè gè tài [Slot] le",
          hanzi: "这个 太 [Slot] 了"
        },
        frameDe: "Das ist zu [Slot].",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "多",
              pinyin: "duō",
              de: "viel"
            },
            {
              hanzi: "少",
              pinyin: "shǎo",
              de: "wenig"
            },
            {
              hanzi: "长",
              pinyin: "cháng",
              de: "lang"
            },
            {
              hanzi: "短",
              pinyin: "duǎn",
              de: "kurz"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "3.8",
        kind: "frame",
        frame: {
          pinyin: "wǒ xiǎng [Slot 1] zhè gè [Slot 2]",
          hanzi: "我 想 [Slot 1] 这个 [Slot 2]"
        },
        frameDe: "Ich möchte diesen [Slot 2] [Slot 1].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "卖",
              pinyin: "mài",
              de: "verkaufen"
            }
          ],
          [
            {
              hanzi: "桌子",
              pinyin: "zhuōzi",
              de: "Tisch"
            },
            {
              hanzi: "椅子",
              pinyin: "yǐzi",
              de: "Stuhl"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "3.9",
        kind: "frame",
        frame: {
          pinyin: "wǒ xiǎng mǎi [Slot 1] dōngxi，zhè gè [Zahl] [Slot 2]",
          hanzi: "我 想 买 [Slot 1] 东西，这个 [Zahl] [Slot 2]"
        },
        frameDe: "Ich möchte [Slot 1] Dinge kaufen, das kostet [Zahl] [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "些",
              pinyin: "xiē",
              de: "einige"
            }
          ],
          [
            {
              hanzi: "元",
              pinyin: "yuán",
              de: "Yuan (Währung)"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "3.10",
        kind: "frame",
        frame: {
          pinyin: "wǒmen [Slot 1] xǐhuan zhè gè，zhè gè [Slot 2] guì",
          hanzi: "我们 [Slot 1] 喜欢 这个，这个 [Slot 2] 贵"
        },
        frameDe: "Wir [Slot 1] mögen das, das ist [Slot 2] teuer.",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "都",
              pinyin: "dōu",
              de: "alle / beide"
            }
          ],
          [
            {
              hanzi: "最",
              pinyin: "zuì",
              de: "am meisten"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          },
          {
            hanzi: "喜欢",
            pinyin: "xǐhuan",
            de: "mögen"
          }
        ]
      },
      {
        id: "3.11",
        kind: "frame",
        frame: {
          pinyin: "wǒ mǎi píngguǒ [Slot] chá",
          hanzi: "我 买 苹果 [Slot] 茶"
        },
        frameDe: "Ich kaufe Äpfel [Slot] Tee.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "和",
              pinyin: "hé",
              de: "und"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: [
          {
            hanzi: "茶",
            pinyin: "chá",
            de: "Tee"
          }
        ]
      },
      {
        id: "3.12",
        kind: "frame",
        frame: {
          pinyin: "wǒ qù guo yī [Slot]",
          hanzi: "我 去 过 一 [Slot]"
        },
        frameDe: "Ich war ein [Slot] dort.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "次",
              pinyin: "cì",
              de: "Mal (Zählwort)"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: [
          {
            hanzi: "去",
            pinyin: "qù",
            de: "gehen / fahren"
          },
          {
            hanzi: "过",
            pinyin: "guo",
            de: "Erfahrungspartikel"
          }
        ]
      },
      {
        id: "3.13",
        kind: "frame",
        frame: {
          pinyin: "[Slot] gè shì wǒ de",
          hanzi: "[Slot] 个 是 我的"
        },
        frameDe: "[Slot] gehört mir.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "那",
              pinyin: "nà",
              de: "jene(r) / das da"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "3.14",
        kind: "finisher",
        frame: {
          pinyin: "wǒmen yǒu [Zahl] gè，zhè gè tài [Slot] le",
          hanzi: "我们 有 [Zahl] 个，这个 太 [Slot] 了"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Sag, wie viele du davon hast — und was du vom Preis hältst.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 4,
    title: "Zeit, Pläne & Abläufe",
    lessons: [
      {
        id: "4.1",
        kind: "frame",
        frame: {
          pinyin: "wǒmen qù [Aktion]",
          hanzi: "我们 去 [Aktion]"
        },
        frameDe: "Wir gehen [Aktion].",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "吃饭",
              pinyin: "chīfàn",
              de: "essen"
            },
            {
              hanzi: "睡觉",
              pinyin: "shuìjiào",
              de: "schlafen"
            },
            {
              hanzi: "工作",
              pinyin: "gōngzuò",
              de: "arbeiten / Arbeit"
            },
            {
              hanzi: "旅游",
              pinyin: "lǚyóu",
              de: "reisen"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "4.2",
        kind: "frame",
        frame: {
          pinyin: "wǒmen [Zeit] qù chīfàn",
          hanzi: "我们 [Zeit] 去 吃饭"
        },
        frameDe: "Wir gehen [Zeit] essen.",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "今天",
              pinyin: "jīntiān",
              de: "heute"
            },
            {
              hanzi: "明天",
              pinyin: "míngtiān",
              de: "morgen"
            },
            {
              hanzi: "现在",
              pinyin: "xiànzài",
              de: "jetzt"
            },
            {
              hanzi: "晚上",
              pinyin: "wǎnshang",
              de: "abends"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "4.3",
        kind: "frame",
        frame: {
          pinyin: "nǐ shénme shíhou [Slot]？",
          hanzi: "你 什么时候 [Slot]？"
        },
        frameDe: "Wann [Slot] du?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "开始",
              pinyin: "kāishǐ",
              de: "anfangen / beginnen"
            },
            {
              hanzi: "休息",
              pinyin: "xiūxi",
              de: "ausruhen"
            },
            {
              hanzi: "回家",
              pinyin: "huíjiā",
              de: "nach Hause gehen"
            },
            {
              hanzi: "考试",
              pinyin: "kǎoshì",
              de: "Prüfung"
            },
            {
              hanzi: "工作",
              pinyin: "gōngzuò",
              de: "arbeiten / Arbeit"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: [
          {
            hanzi: "什么时候",
            pinyin: "shénme shíhou",
            de: "wann"
          }
        ]
      },
      {
        id: "4.4",
        kind: "frame",
        frame: {
          pinyin: "wǒmen [Zeit] qù chīfàn",
          hanzi: "我们 [Zeit] 去 吃饭"
        },
        frameDe: "Wir gehen [Zeit] essen.",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "昨天",
              pinyin: "zuótiān",
              de: "gestern"
            },
            {
              hanzi: "早上",
              pinyin: "zǎoshang",
              de: "morgens"
            },
            {
              hanzi: "上午",
              pinyin: "shàngwǔ",
              de: "vormittags"
            },
            {
              hanzi: "中午",
              pinyin: "zhōngwǔ",
              de: "mittags"
            },
            {
              hanzi: "下午",
              pinyin: "xiàwǔ",
              de: "nachmittags"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: []
      },
      {
        id: "4.5",
        kind: "frame",
        frame: {
          pinyin: "jīntiān shì [Zahl] [Slot]",
          hanzi: "今天 是 [Zahl] [Slot]"
        },
        frameDe: "Heute ist [Zahl] [Slot].",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "年",
              pinyin: "nián",
              de: "Jahr"
            },
            {
              hanzi: "月",
              pinyin: "yuè",
              de: "Monat"
            },
            {
              hanzi: "号",
              pinyin: "hào",
              de: "Tag (Datum)"
            },
            {
              hanzi: "星期",
              pinyin: "xīngqī",
              de: "Woche"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "4.6",
        kind: "frame",
        frame: {
          pinyin: "xiànzài [Zahl] [Slot]",
          hanzi: "现在 [Zahl] [Slot]"
        },
        frameDe: "Jetzt ist es [Zahl] [Slot].",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "点",
              pinyin: "diǎn",
              de: "Uhr (Zeitangabe)"
            },
            {
              hanzi: "分",
              pinyin: "fēn",
              de: "Minute"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "4.7",
        kind: "frame",
        frame: {
          pinyin: "wǒ zǎoshang [Slot 1]，wǒ de [Slot 2] shì wǔ yuè",
          hanzi: "我 早上 [Slot 1]，我的 [Slot 2] 是 五 月"
        },
        frameDe: "Ich [Slot 1] morgens, mein [Slot 2] ist im Mai.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "起床",
              pinyin: "qǐchuáng",
              de: "aufstehen"
            }
          ],
          [
            {
              hanzi: "生日",
              pinyin: "shēngrì",
              de: "Geburtstag"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "4.8",
        kind: "frame",
        frame: {
          pinyin: "zhè gè [Slot] wǒ zài xuéxiào",
          hanzi: "这个 [Slot] 我 在 学校"
        },
        frameDe: "Zu dieser [Slot] war ich in der Schule.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "时候",
              pinyin: "shíhou",
              de: "Zeitpunkt"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: [
          {
            hanzi: "在",
            pinyin: "zài",
            de: "sein (Ort) / in"
          },
          {
            hanzi: "学校",
            pinyin: "xuéxiào",
            de: "Schule"
          }
        ]
      },
      {
        id: "4.9",
        kind: "frame",
        frame: {
          pinyin: "hái yǒu [Zahl] [Slot]",
          hanzi: "还 有 [Zahl] [Slot]"
        },
        frameDe: "Es sind noch [Zahl] [Slot].",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "分钟",
              pinyin: "fēnzhōng",
              de: "Minute"
            },
            {
              hanzi: "小时",
              pinyin: "xiǎoshí",
              de: "Stunde"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: [
          {
            hanzi: "还",
            pinyin: "hái",
            de: "noch"
          }
        ]
      },
      {
        id: "4.10",
        kind: "frame",
        frame: {
          pinyin: "wǒ méi yǒu [Slot 1]，wǒmen [Slot 2] qù",
          hanzi: "我 没 有 [Slot 1]，我们 [Slot 2] 去"
        },
        frameDe: "Ich habe keine [Slot 1], wir gehen [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "时间",
              pinyin: "shíjiān",
              de: "Zeit"
            }
          ],
          [
            {
              hanzi: "再",
              pinyin: "zài",
              de: "nochmal / wieder"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: [
          {
            hanzi: "没",
            pinyin: "méi",
            de: "nicht (Vergangenheit)"
          }
        ]
      },
      {
        id: "4.11",
        kind: "finisher",
        frame: {
          pinyin: "nǐ shénme shíhou [Slot 1]？wǒmen [Zeit] qù",
          hanzi: "你 什么时候 [Slot 1]？我们 [Zeit] 去"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Frag, wann jemand Zeit hat, und sag, wann ihr losgeht.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 5,
    title: "Orte, Orientierung & Treffpunkte",
    lessons: [
      {
        id: "5.1",
        kind: "frame",
        frame: {
          pinyin: "nǐ zài nǎli？ / [Slot] zài nǎli？",
          hanzi: "你 在 哪里？ / [Slot] 在 哪里？"
        },
        frameDe: "Wo ist [Slot]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "洗手间",
              pinyin: "xǐshǒujiān",
              de: "Toilette"
            },
            {
              hanzi: "饭店",
              pinyin: "fàndiàn",
              de: "Restaurant"
            },
            {
              hanzi: "商店",
              pinyin: "shāngdiàn",
              de: "Geschäft / Laden"
            },
            {
              hanzi: "医院",
              pinyin: "yīyuàn",
              de: "Krankenhaus"
            },
            {
              hanzi: "地铁站",
              pinyin: "dìtiězhàn",
              de: "U-Bahn-Station"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: [
          {
            hanzi: "哪里",
            pinyin: "nǎli",
            de: "wo"
          }
        ]
      },
      {
        id: "5.2",
        kind: "frame",
        frame: {
          pinyin: "wǒmen zěnme qù [Slot]？",
          hanzi: "我们 怎么 去 [Slot]？"
        },
        frameDe: "Wie kommen wir zu [Slot]?",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "机场",
              pinyin: "jīchǎng",
              de: "Flughafen"
            },
            {
              hanzi: "火车站",
              pinyin: "huǒchēzhàn",
              de: "Bahnhof"
            },
            {
              hanzi: "这里",
              pinyin: "zhèlǐ",
              de: "hier"
            },
            {
              hanzi: "那里",
              pinyin: "nàlǐ",
              de: "dort"
            },
            {
              hanzi: "酒店",
              pinyin: "jiǔdiàn",
              de: "Hotel"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: [
          {
            hanzi: "怎么",
            pinyin: "zěnme",
            de: "wie"
          }
        ]
      },
      {
        id: "5.3",
        kind: "frame",
        frame: {
          pinyin: "[Slot] zài nǎli？",
          hanzi: "[Slot] 在 哪里？"
        },
        frameDe: "Wo ist [Slot]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "学校",
              pinyin: "xuéxiào",
              de: "Schule"
            },
            {
              hanzi: "教室",
              pinyin: "jiàoshì",
              de: "Klassenzimmer"
            },
            {
              hanzi: "公司",
              pinyin: "gōngsī",
              de: "Firma"
            },
            {
              hanzi: "房间",
              pinyin: "fángjiān",
              de: "Zimmer"
            },
            {
              hanzi: "家",
              pinyin: "jiā",
              de: "Zuhause / Familie"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.4",
        kind: "frame",
        frame: {
          pinyin: "wǒ zài [Slot]",
          hanzi: "我 在 [Slot]"
        },
        frameDe: "Ich bin [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "前面",
              pinyin: "qiánmiàn",
              de: "vorne"
            },
            {
              hanzi: "后面",
              pinyin: "hòumiàn",
              de: "hinten"
            },
            {
              hanzi: "里面",
              pinyin: "lǐmiàn",
              de: "drinnen"
            },
            {
              hanzi: "外面",
              pinyin: "wàimiàn",
              de: "draußen"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.5",
        kind: "frame",
        frame: {
          pinyin: "wǒ zài [Slot]",
          hanzi: "我 在 [Slot]"
        },
        frameDe: "Ich bin [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "上面",
              pinyin: "shàngmiàn",
              de: "oben"
            },
            {
              hanzi: "下面",
              pinyin: "xiàmiàn",
              de: "unten"
            },
            {
              hanzi: "旁边",
              pinyin: "pángbiān",
              de: "daneben"
            },
            {
              hanzi: "左边",
              pinyin: "zuǒbiān",
              de: "links"
            },
            {
              hanzi: "右边",
              pinyin: "yòubiān",
              de: "rechts"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.6",
        kind: "frame",
        frame: {
          pinyin: "wǒmen zěnme [Slot]？",
          hanzi: "我们 怎么 [Slot]？"
        },
        frameDe: "Wie können wir [Slot]?",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "走",
              pinyin: "zǒu",
              de: "gehen / laufen"
            },
            {
              hanzi: "到",
              pinyin: "dào",
              de: "ankommen"
            },
            {
              hanzi: "回",
              pinyin: "huí",
              de: "zurückkehren"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.7",
        kind: "frame",
        frame: {
          pinyin: "zhèlǐ tài [Slot] le",
          hanzi: "这里 太 [Slot] 了"
        },
        frameDe: "Hier ist es zu [Slot].",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "远",
              pinyin: "yuǎn",
              de: "weit"
            },
            {
              hanzi: "近",
              pinyin: "jìn",
              de: "nah"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.8",
        kind: "frame",
        frame: {
          pinyin: "zài zhuōzi [Slot]",
          hanzi: "在 桌子 [Slot]"
        },
        frameDe: "[Slot] dem Tisch.",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "上",
              pinyin: "shàng",
              de: "auf / oben"
            },
            {
              hanzi: "下",
              pinyin: "xià",
              de: "unter / unten"
            },
            {
              hanzi: "里",
              pinyin: "lǐ",
              de: "in / drinnen"
            },
            {
              hanzi: "外",
              pinyin: "wài",
              de: "außen"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.9",
        kind: "frame",
        frame: {
          pinyin: "wǒmen zuò [Slot] qù jīchǎng",
          hanzi: "我们 坐 [Slot] 去 机场"
        },
        frameDe: "Wir fahren mit [Slot] zum Flughafen.",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "出租车",
              pinyin: "chūzūchē",
              de: "Taxi"
            },
            {
              hanzi: "飞机",
              pinyin: "fēijī",
              de: "Flugzeug"
            },
            {
              hanzi: "公共汽车",
              pinyin: "gōnggòng qìchē",
              de: "Bus"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.10",
        kind: "frame",
        frame: {
          pinyin: "[Slot] zài nǎli？",
          hanzi: "[Slot] 在 哪里？"
        },
        frameDe: "Wo ist [Slot]?",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "路",
              pinyin: "lù",
              de: "Weg / Straße"
            },
            {
              hanzi: "门",
              pinyin: "mén",
              de: "Tür"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.11",
        kind: "frame",
        frame: {
          pinyin: "[Slot] gè shì nǐ de？",
          hanzi: "[Slot] 个 是 你的？"
        },
        frameDe: "[Slot] gehört dir?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "哪",
              pinyin: "nǎ",
              de: "welche(r)"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.12",
        kind: "frame",
        frame: {
          pinyin: "wǒ [Slot] zài zhèlǐ",
          hanzi: "我 [Slot] 在 这里"
        },
        frameDe: "Ich möchte hier [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "住",
              pinyin: "zhù",
              de: "wohnen"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "5.13",
        kind: "finisher",
        frame: {
          pinyin: "nǐ zài nǎli？wǒmen zěnme qù [Slot]？",
          hanzi: "你 在 哪里？我们 怎么 去 [Slot]？"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Frag, wo jemand steckt, und wie ihr dorthin kommt.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 6,
    title: "Essen, Trinken & Bestellen",
    lessons: [
      {
        id: "6.1",
        kind: "frame",
        frame: {
          pinyin: "qǐng gěi wǒ / wǒmen [Slot]",
          hanzi: "请 给 我 / 我们 [Slot]"
        },
        frameDe: "Bitte geben Sie mir [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "水",
              pinyin: "shuǐ",
              de: "Wasser"
            },
            {
              hanzi: "啤酒",
              pinyin: "píjiǔ",
              de: "Bier"
            },
            {
              hanzi: "咖啡",
              pinyin: "kāfēi",
              de: "Kaffee"
            },
            {
              hanzi: "茶",
              pinyin: "chá",
              de: "Tee"
            },
            {
              hanzi: "菜单",
              pinyin: "càidān",
              de: "Speisekarte"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: [
          {
            hanzi: "给",
            pinyin: "gěi",
            de: "geben"
          }
        ]
      },
      {
        id: "6.2",
        kind: "frame",
        frame: {
          pinyin: "nǐ xǐhuan zhè gè [Slot 1] ma？ / zhè gè fēicháng [Slot 2]",
          hanzi: "你 喜欢 这个 [Slot 1] 吗？ / 这个 非常 [Slot 2]"
        },
        frameDe: "Magst du [Slot 1]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "菜",
              pinyin: "cài",
              de: "Gericht / Essen"
            },
            {
              hanzi: "咖啡",
              pinyin: "kāfēi",
              de: "Kaffee"
            },
            {
              hanzi: "啤酒",
              pinyin: "píjiǔ",
              de: "Bier"
            }
          ],
          [
            {
              hanzi: "好吃",
              pinyin: "hǎochī",
              de: "lecker (Essen)"
            },
            {
              hanzi: "好喝",
              pinyin: "hǎohē",
              de: "lecker (Getränk)"
            },
            {
              hanzi: "甜",
              pinyin: "tián",
              de: "süß"
            },
            {
              hanzi: "棒",
              pinyin: "bàng",
              de: "toll / super"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: [
          {
            hanzi: "非常",
            pinyin: "fēicháng",
            de: "außerordentlich"
          }
        ]
      },
      {
        id: "6.3",
        kind: "frame",
        frame: {
          pinyin: "qǐng gěi wǒmen [Slot]",
          hanzi: "请 给 我们 [Slot]"
        },
        frameDe: "Bitte geben Sie uns [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "米饭",
              pinyin: "mǐfàn",
              de: "Reis"
            },
            {
              hanzi: "面条",
              pinyin: "miàntiáo",
              de: "Nudeln"
            },
            {
              hanzi: "鸡蛋",
              pinyin: "jīdàn",
              de: "Ei"
            },
            {
              hanzi: "牛奶",
              pinyin: "niúnǎi",
              de: "Milch"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "6.4",
        kind: "frame",
        frame: {
          pinyin: "qǐng gěi wǒmen [Slot]",
          hanzi: "请 给 我们 [Slot]"
        },
        frameDe: "Bitte geben Sie uns [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "面包",
              pinyin: "miànbāo",
              de: "Brot"
            },
            {
              hanzi: "水果",
              pinyin: "shuǐguǒ",
              de: "Obst"
            },
            {
              hanzi: "西瓜",
              pinyin: "xīguā",
              de: "Wassermelone"
            },
            {
              hanzi: "鱼",
              pinyin: "yú",
              de: "Fisch"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "6.5",
        kind: "frame",
        frame: {
          pinyin: "wǒ hěn [Slot]",
          hanzi: "我 很 [Slot]"
        },
        frameDe: "Ich bin sehr [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "饿",
              pinyin: "è",
              de: "hungrig"
            },
            {
              hanzi: "渴",
              pinyin: "kě",
              de: "durstig"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "6.6",
        kind: "frame",
        frame: {
          pinyin: "[Slot 1]，qǐng gěi wǒmen càidān。wǒ [Slot 2] le",
          hanzi: "[Slot 1]，请 给 我们 菜单。我 [Slot 2] 了"
        },
        frameDe: "[Slot 1], bitte geben Sie uns die Speisekarte. Ich bin [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "服务员",
              pinyin: "fúwùyuán",
              de: "Kellner / Bedienung"
            }
          ],
          [
            {
              hanzi: "吃饱",
              pinyin: "chībǎo",
              de: "satt sein"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "6.7",
        kind: "finisher",
        frame: {
          pinyin: "wǒmen xǐhuan zhè gè [Slot 1]，qǐng gěi wǒmen [Slot 2]",
          hanzi: "我们 喜欢 这个 [Slot 1]，请 给 我们 [Slot 2]"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Sag, dass es euch schmeckt, und bestell etwas dazu.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 7,
    title: "Beschreibungen, Vergleiche & Komplimente",
    lessons: [
      {
        id: "7.1",
        kind: "frame",
        frame: {
          pinyin: "tā / tā bǐ wǒ gèng [Slot]",
          hanzi: "他 / 她 比 我 更 [Slot]"
        },
        frameDe: "Er ist [Slot] als ich.",
        pronouns: [
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          },
          {
            hanzi: "她",
            pinyin: "tā",
            de: "sie"
          },
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "高",
              pinyin: "gāo",
              de: "groß (Körpergröße)"
            },
            {
              hanzi: "帅",
              pinyin: "shuài",
              de: "cool / gutaussehend"
            },
            {
              hanzi: "忙",
              pinyin: "máng",
              de: "beschäftigt"
            },
            {
              hanzi: "快",
              pinyin: "kuài",
              de: "schnell"
            },
            {
              hanzi: "好",
              pinyin: "hǎo",
              de: "gut"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: [
          {
            hanzi: "比",
            pinyin: "bǐ",
            de: "vergleichen mit / als"
          },
          {
            hanzi: "更",
            pinyin: "gèng",
            de: "noch (mehr)"
          }
        ]
      },
      {
        id: "7.2",
        kind: "frame",
        frame: {
          pinyin: "nǐ de [Slot 1] hěn [Slot 2]",
          hanzi: "你 的 [Slot 1] 很 [Slot 2]"
        },
        frameDe: "Dein [Slot 1] ist sehr [Slot 2].",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "衣服",
              pinyin: "yīfu",
              de: "Kleidung"
            },
            {
              hanzi: "手机",
              pinyin: "shǒujī",
              de: "Handy"
            },
            {
              hanzi: "微信",
              pinyin: "wēixìn",
              de: "WeChat"
            }
          ],
          [
            {
              hanzi: "漂亮",
              pinyin: "piàoliang",
              de: "schön / hübsch"
            },
            {
              hanzi: "新",
              pinyin: "xīn",
              de: "neu"
            },
            {
              hanzi: "棒",
              pinyin: "bàng",
              de: "toll / super"
            }
          ]
        ],
        newCount: 0,
        task: null,
        newFrameWords: []
      },
      {
        id: "7.3",
        kind: "frame",
        frame: {
          pinyin: "tā / tā bǐ wǒ gèng [Slot]",
          hanzi: "他 / 她 比 我 更 [Slot]"
        },
        frameDe: "Er ist [Slot] als ich.",
        pronouns: [
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          },
          {
            hanzi: "她",
            pinyin: "tā",
            de: "sie"
          },
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "慢",
              pinyin: "màn",
              de: "langsam"
            },
            {
              hanzi: "胖",
              pinyin: "pàng",
              de: "dick"
            },
            {
              hanzi: "瘦",
              pinyin: "shòu",
              de: "dünn"
            },
            {
              hanzi: "老",
              pinyin: "lǎo",
              de: "alt"
            },
            {
              hanzi: "年轻",
              pinyin: "niánqīng",
              de: "jung"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: []
      },
      {
        id: "7.4",
        kind: "frame",
        frame: {
          pinyin: "wǒ hěn [Slot]",
          hanzi: "我 很 [Slot]"
        },
        frameDe: "Ich bin sehr [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "高兴",
              pinyin: "gāoxìng",
              de: "froh"
            },
            {
              hanzi: "快乐",
              pinyin: "kuàilè",
              de: "fröhlich"
            },
            {
              hanzi: "聪明",
              pinyin: "cōngming",
              de: "klug"
            },
            {
              hanzi: "可爱",
              pinyin: "kě'ài",
              de: "niedlich"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "7.5",
        kind: "frame",
        frame: {
          pinyin: "nǐ de yīfu shì [Slot] de",
          hanzi: "你 的 衣服 是 [Slot] 的"
        },
        frameDe: "Deine Kleidung ist [Slot].",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "白",
              pinyin: "bái",
              de: "weiß"
            },
            {
              hanzi: "黑",
              pinyin: "hēi",
              de: "schwarz"
            },
            {
              hanzi: "红",
              pinyin: "hóng",
              de: "rot"
            },
            {
              hanzi: "蓝",
              pinyin: "lán",
              de: "blau"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "7.6",
        kind: "frame",
        frame: {
          pinyin: "zhè gè [Slot] hěn piàoliang",
          hanzi: "这个 [Slot] 很 漂亮"
        },
        frameDe: "Diese [Slot] ist sehr schön.",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "颜色",
              pinyin: "yánsè",
              de: "Farbe"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "7.7",
        kind: "frame",
        frame: {
          pinyin: "nǐ [Slot] piàoliang",
          hanzi: "你 [Slot] 漂亮"
        },
        frameDe: "Du bist [Slot] hübsch.",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "真",
              pinyin: "zhēn",
              de: "wirklich"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "7.8",
        kind: "finisher",
        frame: {
          pinyin: "nǐ de [Slot 1] hěn [Slot 2]，bǐ wǒ de gèng [Slot 3]",
          hanzi: "你 的 [Slot 1] 很 [Slot 2]，比 我的 更 [Slot 3]"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Mach jemandem ein Kompliment und vergleich es mit deinem.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 8,
    title: "Logik, Begründung & Aktivitäten",
    lessons: [
      {
        id: "8.1",
        kind: "frame",
        frame: {
          pinyin: "yīnwèi wǒ / tā [Slot 1]，suǒyǐ [Slot 2]",
          hanzi: "因为 我 / 他 [Slot 1]，所以 [Slot 2]"
        },
        frameDe: "Weil ich [Slot 1] bin, [Slot 2] ich.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "生病",
              pinyin: "shēngbìng",
              de: "krank sein"
            },
            {
              hanzi: "忙",
              pinyin: "máng",
              de: "beschäftigt"
            },
            {
              hanzi: "累",
              pinyin: "lèi",
              de: "müde"
            }
          ],
          [
            {
              hanzi: "不去",
              pinyin: "bú qù",
              de: "nicht gehen"
            },
            {
              hanzi: "休息",
              pinyin: "xiūxi",
              de: "ausruhen"
            },
            {
              hanzi: "睡觉",
              pinyin: "shuìjiào",
              de: "schlafen"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: [
          {
            hanzi: "因为",
            pinyin: "yīnwèi",
            de: "weil"
          },
          {
            hanzi: "所以",
            pinyin: "suǒyǐ",
            de: "deshalb"
          }
        ]
      },
      {
        id: "8.2",
        kind: "frame",
        frame: {
          pinyin: "wǒmen / tā zhèngzài [Slot]",
          hanzi: "我们 / 他 正在 [Slot]"
        },
        frameDe: "Wir sind gerade am [Slot].",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "工作",
              pinyin: "gōngzuò",
              de: "arbeiten / Arbeit"
            },
            {
              hanzi: "学习",
              pinyin: "xuéxí",
              de: "lernen"
            },
            {
              hanzi: "准备",
              pinyin: "zhǔnbèi",
              de: "vorbereiten"
            },
            {
              hanzi: "吃饭",
              pinyin: "chīfàn",
              de: "essen"
            },
            {
              hanzi: "打电话",
              pinyin: "dǎ diànhuà",
              de: "telefonieren"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: [
          {
            hanzi: "正在",
            pinyin: "zhèngzài",
            de: "gerade dabei sein zu"
          }
        ]
      },
      {
        id: "8.3",
        kind: "frame",
        frame: {
          pinyin: "wǒmen zhèngzài [Slot]",
          hanzi: "我们 正在 [Slot]"
        },
        frameDe: "Wir sind gerade am [Slot].",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "看书",
              pinyin: "kànshū",
              de: "lesen (Buch)"
            },
            {
              hanzi: "上网",
              pinyin: "shàngwǎng",
              de: "surfen"
            },
            {
              hanzi: "运动",
              pinyin: "yùndòng",
              de: "Sport treiben"
            },
            {
              hanzi: "跑步",
              pinyin: "pǎobù",
              de: "joggen"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "8.4",
        kind: "frame",
        frame: {
          pinyin: "wǒmen zhèngzài [Slot]",
          hanzi: "我们 正在 [Slot]"
        },
        frameDe: "Wir sind gerade am [Slot].",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "游泳",
              pinyin: "yóuyǒng",
              de: "schwimmen"
            },
            {
              hanzi: "唱歌",
              pinyin: "chànggē",
              de: "singen"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "8.5",
        kind: "frame",
        frame: {
          pinyin: "wǒmen zhèngzài tīng [Slot]",
          hanzi: "我们 正在 听 [Slot]"
        },
        frameDe: "Wir hören gerade [Slot].",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "音乐",
              pinyin: "yīnyuè",
              de: "Musik"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "8.6",
        kind: "frame",
        frame: {
          pinyin: "wǒ [Slot] qù",
          hanzi: "我 [Slot] 去"
        },
        frameDe: "Ich gehe [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "也",
              pinyin: "yě",
              de: "auch"
            },
            {
              hanzi: "就",
              pinyin: "jiù",
              de: "dann / gleich"
            },
            {
              hanzi: "已经",
              pinyin: "yǐjīng",
              de: "schon / bereits"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "8.7",
        kind: "frame",
        frame: {
          pinyin: "wǒ xiǎng qù，[Slot] wǒ hěn máng",
          hanzi: "我 想 去，[Slot] 我 很 忙"
        },
        frameDe: "Ich möchte gehen, [Slot] ich bin sehr beschäftigt.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "但是",
              pinyin: "dànshì",
              de: "aber"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "8.8",
        kind: "frame",
        frame: {
          pinyin: "wǒ [Slot] qù",
          hanzi: "我 [Slot] 去"
        },
        frameDe: "Ich [Slot] gehen.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "会",
              pinyin: "huì",
              de: "können (erlernt)"
            },
            {
              hanzi: "可能",
              pinyin: "kěnéng",
              de: "vielleicht"
            },
            {
              hanzi: "应该",
              pinyin: "yīnggāi",
              de: "sollen"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "8.9",
        kind: "finisher",
        frame: {
          pinyin: "yīnwèi wǒmen zhèngzài [Slot 1]，suǒyǐ bù néng [Slot 2]",
          hanzi: "因为 我们 正在 [Slot 1]，所以 不能 [Slot 2]"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Erklär, was ihr gerade tut und warum ihr deshalb nicht könnt.",
        newFrameWords: [
          {
            hanzi: "能",
            pinyin: "néng",
            de: "können"
          }
        ]
      }
    ]
  },
  {
    number: 9,
    title: "Erfahrungen & Hilfegesuche",
    lessons: [
      {
        id: "9.1",
        kind: "frame",
        frame: {
          pinyin: "wǒ / tā [Slot 1] guo [Slot 2]",
          hanzi: "我 / 他 [Slot 1] 过 [Slot 2]"
        },
        frameDe: "Ich habe [Slot 1] [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "去",
              pinyin: "qù",
              de: "gehen / fahren"
            },
            {
              hanzi: "吃",
              pinyin: "chī",
              de: "essen"
            },
            {
              hanzi: "看",
              pinyin: "kàn",
              de: "sehen / schauen"
            }
          ],
          [
            {
              hanzi: "中国",
              pinyin: "Zhōngguó",
              de: "China"
            },
            {
              hanzi: "北京",
              pinyin: "Běijīng",
              de: "Peking"
            },
            {
              hanzi: "羊肉",
              pinyin: "yángròu",
              de: "Lammfleisch"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "9.2",
        kind: "frame",
        frame: {
          pinyin: "nǐ kěyǐ bāngzhù wǒ [Slot] ma？",
          hanzi: "你 可以 帮助 我 [Slot] 吗？"
        },
        frameDe: "Kannst du mir helfen, [Slot]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          },
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "找",
              pinyin: "zhǎo",
              de: "suchen"
            },
            {
              hanzi: "翻译",
              pinyin: "fānyì",
              de: "übersetzen"
            },
            {
              hanzi: "叫",
              pinyin: "jiào",
              de: "rufen / heißen"
            },
            {
              hanzi: "拿",
              pinyin: "ná",
              de: "nehmen / holen"
            },
            {
              hanzi: "解释",
              pinyin: "jiěshì",
              de: "erklären"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "9.3",
        kind: "frame",
        frame: {
          pinyin: "wǒ shuō [Slot]",
          hanzi: "我 说 [Slot]"
        },
        frameDe: "Ich spreche [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "汉语",
              pinyin: "Hànyǔ",
              de: "Chinesisch (Sprache)"
            },
            {
              hanzi: "英语",
              pinyin: "Yīngyǔ",
              de: "Englisch"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "9.4",
        kind: "frame",
        frame: {
          pinyin: "wǒ qù guo [Slot 1]，Zhōngguó shì yī gè [Slot 2]",
          hanzi: "我 去 过 [Slot 1]，中国 是 一 个 [Slot 2]"
        },
        frameDe: "Ich war schon in [Slot 1], China ist ein [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "上海",
              pinyin: "Shànghǎi",
              de: "Shanghai"
            },
            {
              hanzi: "德国",
              pinyin: "Déguó",
              de: "Deutschland"
            }
          ],
          [
            {
              hanzi: "国家",
              pinyin: "guójiā",
              de: "Land / Staat"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "9.5",
        kind: "frame",
        frame: {
          pinyin: "wǒ [Slot 1] qù Zhōngguó，zhè shì wǒ de [Slot 2]",
          hanzi: "我 [Slot 1] 去 中国，这 是 我的 [Slot 2]"
        },
        frameDe: "Ich gehe [Slot 1] nach China, das ist mein [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "以前",
              pinyin: "yǐqián",
              de: "früher"
            },
            {
              hanzi: "以后",
              pinyin: "yǐhòu",
              de: "später"
            }
          ],
          [
            {
              hanzi: "第一次",
              pinyin: "dì-yī cì",
              de: "zum ersten Mal"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "9.6",
        kind: "frame",
        frame: {
          pinyin: "wǒ [Slot] Déguó lái",
          hanzi: "我 [Slot] 德国 来"
        },
        frameDe: "Ich komme [Slot] Deutschland.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "从",
              pinyin: "cóng",
              de: "von / ab"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: [
          {
            hanzi: "来",
            pinyin: "lái",
            de: "kommen"
          }
        ]
      },
      {
        id: "9.7",
        kind: "frame",
        frame: {
          pinyin: "wǒ shì Déguó [Slot]",
          hanzi: "我 是 德国 [Slot]"
        },
        frameDe: "Ich bin ein deutscher [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "人",
              pinyin: "rén",
              de: "Mensch / Person"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "9.8",
        kind: "finisher",
        frame: {
          pinyin: "wǒ méi [Slot 1] guo，nǐ kěyǐ bāngzhù wǒ [Slot 2] ma？",
          hanzi: "我 没 [Slot 1] 过，你 可以 帮助 我 [Slot 2] 吗？"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Sag, dass du etwas noch nie gemacht hast, und bitte um Hilfe.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 10,
    title: "Gesundheit & Notfälle",
    lessons: [
      {
        id: "10.1",
        kind: "frame",
        frame: {
          pinyin: "wǒ / tā [Slot] le",
          hanzi: "我 / 他 [Slot] 了"
        },
        frameDe: "Ich bin [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "感冒",
              pinyin: "gǎnmào",
              de: "Erkältung"
            },
            {
              hanzi: "发烧",
              pinyin: "fāshāo",
              de: "Fieber haben"
            },
            {
              hanzi: "生病",
              pinyin: "shēngbìng",
              de: "krank sein"
            },
            {
              hanzi: "难受",
              pinyin: "nánshòu",
              de: "unwohl / schmerzhaft"
            },
            {
              hanzi: "累",
              pinyin: "lèi",
              de: "müde"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "10.2",
        kind: "frame",
        frame: {
          pinyin: "wǒ / tā de [Slot 1] hěn [Slot 2]",
          hanzi: "我 / 他 的 [Slot 1] 很 [Slot 2]"
        },
        frameDe: "Mein [Slot 1] ist sehr [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "头",
              pinyin: "tóu",
              de: "Kopf"
            },
            {
              hanzi: "肚子",
              pinyin: "dùzi",
              de: "Bauch"
            },
            {
              hanzi: "腿",
              pinyin: "tuǐ",
              de: "Bein"
            }
          ],
          [
            {
              hanzi: "疼",
              pinyin: "téng",
              de: "schmerzen / wehtun"
            },
            {
              hanzi: "难受",
              pinyin: "nánshòu",
              de: "unwohl / schmerzhaft"
            },
            {
              hanzi: "冷",
              pinyin: "lěng",
              de: "kalt"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: []
      },
      {
        id: "10.3",
        kind: "frame",
        frame: {
          pinyin: "wǒ / tā de [Slot] hěn téng",
          hanzi: "我 / 他 的 [Slot] 很 疼"
        },
        frameDe: "Mein [Slot] tut sehr weh.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "手",
              pinyin: "shǒu",
              de: "Hand"
            },
            {
              hanzi: "眼睛",
              pinyin: "yǎnjing",
              de: "Auge"
            },
            {
              hanzi: "耳朵",
              pinyin: "ěrduo",
              de: "Ohr"
            },
            {
              hanzi: "鼻子",
              pinyin: "bízi",
              de: "Nase"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "10.4",
        kind: "frame",
        frame: {
          pinyin: "wǒ / tā de [Slot 1] hěn [Slot 2]",
          hanzi: "我 / 他 的 [Slot 1] 很 [Slot 2]"
        },
        frameDe: "Mein [Slot 1] ist sehr [Slot 2].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "他",
            pinyin: "tā",
            de: "er"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "嘴",
              pinyin: "zuǐ",
              de: "Mund"
            },
            {
              hanzi: "身体",
              pinyin: "shēntǐ",
              de: "Körper"
            }
          ],
          [
            {
              hanzi: "热",
              pinyin: "rè",
              de: "heiß"
            },
            {
              hanzi: "舒服",
              pinyin: "shūfu",
              de: "wohl / angenehm"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "10.5",
        kind: "frame",
        frame: {
          pinyin: "wǒ zhǎo [Slot]",
          hanzi: "我 找 [Slot]"
        },
        frameDe: "Ich suche [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "医生",
              pinyin: "yīshēng",
              de: "Arzt"
            },
            {
              hanzi: "药",
              pinyin: "yào",
              de: "Medizin"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "10.6",
        kind: "finisher",
        frame: {
          pinyin: "tā [Slot 1] le，tā de [Slot 2] hěn téng",
          hanzi: "他 [Slot 1] 了，他 的 [Slot 2] 很 疼"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Sag, was jemandem fehlt und wo es wehtut.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 11,
    title: "Smalltalk, Pläne & Austausch",
    lessons: [
      {
        id: "11.1",
        kind: "frame",
        frame: {
          pinyin: "nǐ [Zeit] yǒu shénme [Plan]？",
          hanzi: "你 [Zeit] 有 什么 [Plan]？"
        },
        frameDe: "Was hast du [Zeit] für [Plan]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "周末",
              pinyin: "zhōumò",
              de: "Wochenende"
            },
            {
              hanzi: "今天晚上",
              pinyin: "jīntiān wǎnshang",
              de: "heute Abend"
            }
          ],
          [
            {
              hanzi: "打算",
              pinyin: "dǎsuàn",
              de: "vorhaben / Plan"
            },
            {
              hanzi: "安排",
              pinyin: "ānpái",
              de: "Programm / Ablauf"
            },
            {
              hanzi: "兴趣",
              pinyin: "xìngqù",
              de: "Interesse"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: []
      },
      {
        id: "11.2",
        kind: "frame",
        frame: {
          pinyin: "wǒmen hái bù tài [Slot] zhèlǐ",
          hanzi: "我们 还 不 太 [Slot] 这里"
        },
        frameDe: "Wir sind hier noch nicht so [Slot].",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "习惯",
              pinyin: "xíguàn",
              de: "gewöhnt sein"
            },
            {
              hanzi: "了解",
              pinyin: "liǎojiě",
              de: "vertraut sein"
            },
            {
              hanzi: "认识",
              pinyin: "rènshi",
              de: "kennen"
            },
            {
              hanzi: "清楚",
              pinyin: "qīngchu",
              de: "klar / verstehen"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "11.3",
        kind: "frame",
        frame: {
          pinyin: "jīntiān [Slot]",
          hanzi: "今天 [Slot]"
        },
        frameDe: "Heute [Slot].",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "下雨",
              pinyin: "xiàyǔ",
              de: "regnen"
            },
            {
              hanzi: "下雪",
              pinyin: "xiàxuě",
              de: "schneien"
            },
            {
              hanzi: "晴天",
              pinyin: "qíngtiān",
              de: "sonniger Tag"
            },
            {
              hanzi: "阴天",
              pinyin: "yīntiān",
              de: "bewölkter Tag"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "11.4",
        kind: "frame",
        frame: {
          pinyin: "jīntiān [Slot] hěn hǎo",
          hanzi: "今天 [Slot] 很 好"
        },
        frameDe: "Heute ist das [Slot] sehr gut.",
        pronouns: [],
        slotGroups: [
          [
            {
              hanzi: "天气",
              pinyin: "tiānqì",
              de: "Wetter"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "11.5",
        kind: "frame",
        frame: {
          pinyin: "wǒ xǐhuan [Slot 1]，wǒ de [Slot 2] shì lǚxíng",
          hanzi: "我 喜欢 [Slot 1]，我的 [Slot 2] 是 旅行"
        },
        frameDe: "Ich mag [Slot 1], mein [Slot 2] ist Reisen.",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          },
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "电影",
              pinyin: "diànyǐng",
              de: "Film"
            }
          ],
          [
            {
              hanzi: "爱好",
              pinyin: "àihào",
              de: "Hobby"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: [
          {
            hanzi: "旅行",
            pinyin: "lǚxíng",
            de: "reisen"
          }
        ]
      },
      {
        id: "11.6",
        kind: "frame",
        frame: {
          pinyin: "wǒ yǒu yī gè [Slot]",
          hanzi: "我 有 一 个 [Slot]"
        },
        frameDe: "Ich habe einen [Slot].",
        pronouns: [
          {
            hanzi: "我",
            pinyin: "wǒ",
            de: "ich"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "猫",
              pinyin: "māo",
              de: "Katze"
            },
            {
              hanzi: "狗",
              pinyin: "gǒu",
              de: "Hund"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "11.7",
        kind: "frame",
        frame: {
          pinyin: "wǒmen yìqǐ qù [Slot] ba",
          hanzi: "我们 一起 去 [Slot] 吧"
        },
        frameDe: "Lass uns zusammen [Slot].",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "旅行",
              pinyin: "lǚxíng",
              de: "reisen"
            }
          ]
        ],
        newCount: 0,
        task: null,
        newFrameWords: [
          {
            hanzi: "一起",
            pinyin: "yìqǐ",
            de: "zusammen"
          },
          {
            hanzi: "吧",
            pinyin: "ba",
            de: "Vorschlagspartikel"
          }
        ]
      },
      {
        id: "11.8",
        kind: "frame",
        frame: {
          pinyin: "jīntiān tiānqì [Slot 1]？wǒ hěn hǎo，nǐ [Slot 2]？",
          hanzi: "今天 天气 [Slot 1]？我 很 好，你 [Slot 2]？"
        },
        frameDe: "Wie ist das Wetter heute, [Slot 1]? Mir geht's gut, dir [Slot 2]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "怎么样",
              pinyin: "zěnmeyàng",
              de: "wie ist es?"
            }
          ],
          [
            {
              hanzi: "呢",
              pinyin: "ne",
              de: "und du? (Rückfragepartikel)"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "11.9",
        kind: "finisher",
        frame: {
          pinyin: "wǒmen hái bù tài [Slot 1]，nǐ zhōumò yǒu shénme [Slot 2]？",
          hanzi: "我们 还 不 太 [Slot 1]，你 周末 有 什么 [Slot 2]？"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Sag, dass ihr euch hier noch nicht auskennt, und frag nach den Wochenendplänen.",
        newFrameWords: []
      }
    ]
  },
  {
    number: 12,
    title: "Socialising & Freundschaften",
    lessons: [
      {
        id: "12.1",
        kind: "frame",
        frame: {
          pinyin: "wǒmen yìqǐ qù [Slot] ba",
          hanzi: "我们 一起 去 [Slot] 吧"
        },
        frameDe: "Lass uns zusammen [Slot].",
        pronouns: [
          {
            hanzi: "我们",
            pinyin: "wǒmen",
            de: "wir"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "聊天",
              pinyin: "liáotiān",
              de: "quatschen"
            },
            {
              hanzi: "跳舞",
              pinyin: "tiàowǔ",
              de: "tanzen"
            },
            {
              hanzi: "玩",
              pinyin: "wán",
              de: "spielen / abhängen"
            },
            {
              hanzi: "喝一杯",
              pinyin: "hē yī bēi",
              de: "etwas trinken gehen"
            },
            {
              hanzi: "逛街",
              pinyin: "guàngjiē",
              de: "shoppen"
            }
          ]
        ],
        newCount: 5,
        task: null,
        newFrameWords: []
      },
      {
        id: "12.2",
        kind: "frame",
        frame: {
          pinyin: "nǐ kěyǐ [Slot 1] wǒ [Slot 2] ma？",
          hanzi: "你 可以 [Slot 1] 我 [Slot 2] 吗？"
        },
        frameDe: "Kannst du mich [Slot 1] [Slot 2]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "介绍",
              pinyin: "jièshào",
              de: "vorstellen"
            },
            {
              hanzi: "帮忙",
              pinyin: "bāngmáng",
              de: "helfen"
            },
            {
              hanzi: "照顾",
              pinyin: "zhàogù",
              de: "kümmern / aufpassen"
            },
            {
              hanzi: "加",
              pinyin: "jiā",
              de: "hinzufügen"
            }
          ],
          [
            {
              hanzi: "微信",
              pinyin: "wēixìn",
              de: "WeChat"
            },
            {
              hanzi: "朋友",
              pinyin: "péngyou",
              de: "Freund"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "12.3",
        kind: "frame",
        frame: {
          pinyin: "[Slot]！",
          hanzi: "[Slot]！"
        },
        frameDe: "[Slot]!",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "你好",
              pinyin: "nǐhǎo",
              de: "hallo"
            },
            {
              hanzi: "再见",
              pinyin: "zàijiàn",
              de: "auf Wiedersehen"
            },
            {
              hanzi: "谢谢",
              pinyin: "xièxie",
              de: "danke"
            },
            {
              hanzi: "对不起",
              pinyin: "duìbuqǐ",
              de: "Entschuldigung"
            }
          ]
        ],
        newCount: 4,
        task: null,
        newFrameWords: []
      },
      {
        id: "12.4",
        kind: "frame",
        frame: {
          pinyin: "[Slot]！",
          hanzi: "[Slot]！"
        },
        frameDe: "[Slot]!",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "不客气",
              pinyin: "bú kèqi",
              de: "gern geschehen"
            },
            {
              hanzi: "没关系",
              pinyin: "méi guānxi",
              de: "macht nichts"
            },
            {
              hanzi: "欢迎",
              pinyin: "huānyíng",
              de: "willkommen"
            }
          ]
        ],
        newCount: 3,
        task: null,
        newFrameWords: []
      },
      {
        id: "12.5",
        kind: "frame",
        frame: {
          pinyin: "nǐ kěyǐ [Slot 1] wǒ [Slot 2] ma？",
          hanzi: "你 可以 [Slot 1] 我 [Slot 2] 吗？"
        },
        frameDe: "Kannst du mir [Slot 1] [Slot 2]?",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "帮",
              pinyin: "bāng",
              de: "helfen"
            }
          ],
          [
            {
              hanzi: "一下",
              pinyin: "yíxià",
              de: "kurz / mal"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "12.6",
        kind: "frame",
        frame: {
          pinyin: "zhè shì nǐ de [Slot]",
          hanzi: "这 是 你的 [Slot]"
        },
        frameDe: "Das ist dein [Slot].",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "礼物",
              pinyin: "lǐwù",
              de: "Geschenk"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "12.7",
        kind: "frame",
        frame: {
          pinyin: "[Slot] hǎo！",
          hanzi: "[Slot] 好！"
        },
        frameDe: "[Slot], hallo!",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "您",
              pinyin: "nín",
              de: "Sie (höflich)"
            }
          ]
        ],
        newCount: 1,
        task: null,
        newFrameWords: []
      },
      {
        id: "12.8",
        kind: "frame",
        frame: {
          pinyin: "[Slot 1]？nǐ hǎo！[Slot 2] zǒu！",
          hanzi: "[Slot 1]？你 好！[Slot 2] 走！"
        },
        frameDe: "[Slot 1]? Hallo! [Slot 2] weggehen!",
        pronouns: [
          {
            hanzi: "你",
            pinyin: "nǐ",
            de: "du"
          }
        ],
        slotGroups: [
          [
            {
              hanzi: "喂",
              pinyin: "wéi",
              de: "hallo (am Telefon)"
            }
          ],
          [
            {
              hanzi: "别",
              pinyin: "bié",
              de: "nicht (Aufforderung)"
            }
          ]
        ],
        newCount: 2,
        task: null,
        newFrameWords: []
      },
      {
        id: "12.9",
        kind: "finisher",
        frame: {
          pinyin: "nǐ kěyǐ jiā wǒ [Slot 1] ma？wǒmen yìqǐ qù [Slot 2] ba",
          hanzi: "你 可以 加 我 [Slot 1] 吗？我们 一起 去 [Slot 2] 吧"
        },
        frameDe: null,
        pronouns: [],
        slotGroups: [],
        newCount: 0,
        task: "Frag nach dem Kontakt und schlag etwas Gemeinsames vor.",
        newFrameWords: []
      }
    ]
  }
];
