// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_vi.py
// Neu bauen: python bauplan.py vi --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 23 Module, 141 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const VIETNAMESE_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó rất [Slot]",
          "lerntext": "tôi / bạn / nó rất [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) bin [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mệt",
              "lerntext": "mệt",
              "de": "müde"
            },
            {
              "schrift": "buồn",
              "lerntext": "buồn",
              "de": "traurig"
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend"
            },
            {
              "schrift": "đói",
              "lerntext": "đói",
              "de": "hungrig"
            },
            {
              "schrift": "khát",
              "lerntext": "khát",
              "de": "durstig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "là",
            "lerntext": "là",
            "de": "sein"
          },
          {
            "schrift": "rất",
            "lerntext": "rất",
            "de": "sehr"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó rất [Slot]",
          "lerntext": "tôi / bạn / nó rất [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) bin [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank"
            },
            {
              "schrift": "sẵn sàng",
              "lerntext": "sẵn sàng",
              "de": "bereit"
            },
            {
              "schrift": "cứ",
              "lerntext": "cứ",
              "de": "ruhig, einfach"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "1.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "mình / các bạn / nó là [Slot]",
          "lerntext": "mình / các bạn / nó là [Slot]"
        },
        "frameDe": "ich, wir (vertraut) / ihr / er, sie, es (vertraut) bin [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          },
          {
            "schrift": "các bạn",
            "lerntext": "các bạn",
            "de": "ihr"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sinh viên",
              "lerntext": "sinh viên",
              "de": "Student"
            },
            {
              "schrift": "giáo viên",
              "lerntext": "giáo viên",
              "de": "Lehrer"
            },
            {
              "schrift": "đồng nghiệp",
              "lerntext": "đồng nghiệp",
              "de": "Kollege"
            },
            {
              "schrift": "công an",
              "lerntext": "công an",
              "de": "Polizei"
            },
            {
              "schrift": "bạn",
              "lerntext": "bạn",
              "de": "du (Gleichaltrige), Freund"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "1.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "mình / các bạn / nó là [Slot]",
          "lerntext": "mình / các bạn / nó là [Slot]"
        },
        "frameDe": "ich, wir (vertraut) / ihr / er, sie, es (vertraut) bin [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          },
          {
            "schrift": "các bạn",
            "lerntext": "các bạn",
            "de": "ihr"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau), Frau"
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern), Kind"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "1.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "er, sie, es (vertraut) ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön"
            },
            {
              "schrift": "buồn cười",
              "lerntext": "buồn cười",
              "de": "lustig"
            },
            {
              "schrift": "chán",
              "lerntext": "chán",
              "de": "langweilig"
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund, stark"
            },
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "rất",
            "lerntext": "rất",
            "de": "sehr"
          }
        ],
        "id": "1.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "er, sie, es (vertraut) ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung"
            },
            {
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)"
            }
          ]
        ],
        "newCount": 2,
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sách",
              "lerntext": "sách",
              "de": "Buch"
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche, Tüte"
            },
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl"
            },
            {
              "schrift": "giường",
              "lerntext": "giường",
              "de": "Bett"
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel"
            },
            {
              "schrift": "mình",
              "lerntext": "mình",
              "de": "ich, wir (vertraut)"
            },
            {
              "schrift": "các bạn",
              "lerntext": "các bạn",
              "de": "ihr"
            },
            {
              "schrift": "tôi",
              "lerntext": "tôi",
              "de": "ich (neutral)"
            },
            {
              "schrift": "buồn",
              "lerntext": "buồn",
              "de": "traurig"
            },
            {
              "schrift": "buồn cười",
              "lerntext": "buồn cười",
              "de": "lustig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đây",
            "lerntext": "đây",
            "de": "hier"
          }
        ],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cửa",
              "lerntext": "cửa",
              "de": "Tür"
            },
            {
              "schrift": "điện thoại",
              "lerntext": "điện thoại",
              "de": "Telefon, Handy"
            },
            {
              "schrift": "mẹ",
              "lerntext": "mẹ",
              "de": "Mutter"
            },
            {
              "schrift": "bố",
              "lerntext": "bố",
              "de": "Vater"
            },
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl"
            },
            {
              "schrift": "cứ",
              "lerntext": "cứ",
              "de": "ruhig, einfach"
            },
            {
              "schrift": "đồng nghiệp",
              "lerntext": "đồng nghiệp",
              "de": "Kollege"
            },
            {
              "schrift": "đói",
              "lerntext": "đói",
              "de": "hungrig"
            },
            {
              "schrift": "chán",
              "lerntext": "chán",
              "de": "langweilig"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ở đây có [Slot]",
          "lerntext": "ở đây có [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nhà",
              "lerntext": "nhà",
              "de": "Haus, Zuhause"
            },
            {
              "schrift": "phòng",
              "lerntext": "phòng",
              "de": "Zimmer"
            },
            {
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche"
            },
            {
              "schrift": "bàn",
              "lerntext": "bàn",
              "de": "Tisch"
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster"
            },
            {
              "schrift": "mẹ",
              "lerntext": "mẹ",
              "de": "Mutter"
            },
            {
              "schrift": "điện thoại",
              "lerntext": "điện thoại",
              "de": "Telefon, Handy"
            },
            {
              "schrift": "giáo viên",
              "lerntext": "giáo viên",
              "de": "Lehrer"
            },
            {
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau), Frau"
            },
            {
              "schrift": "mệt",
              "lerntext": "mệt",
              "de": "müde"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in, an, bei"
          },
          {
            "schrift": "đây",
            "lerntext": "đây",
            "de": "hier"
          },
          {
            "schrift": "có",
            "lerntext": "có",
            "de": "ja, haben, es gibt"
          }
        ],
        "id": "2.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ở đây có [Slot]",
          "lerntext": "ở đây có [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "giấy",
              "lerntext": "giấy",
              "de": "Papier, Dokument"
            },
            {
              "schrift": "ly",
              "lerntext": "ly",
              "de": "Glas"
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel"
            },
            {
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche"
            },
            {
              "schrift": "công an",
              "lerntext": "công an",
              "de": "Polizei"
            },
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön"
            },
            {
              "schrift": "mình",
              "lerntext": "mình",
              "de": "ich, wir (vertraut)"
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "2.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó / mình có [Slot]",
          "lerntext": "tôi / bạn / nó / mình có [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) / ich, wir (vertraut) habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gia đình",
              "lerntext": "gia đình",
              "de": "Familie"
            },
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen, Tochter"
            },
            {
              "schrift": "con trai",
              "lerntext": "con trai",
              "de": "Junge, Sohn"
            },
            {
              "schrift": "ô tô",
              "lerntext": "ô tô",
              "de": "Auto"
            },
            {
              "schrift": "tay",
              "lerntext": "tay",
              "de": "Hand, Arm"
            },
            {
              "schrift": "nhà",
              "lerntext": "nhà",
              "de": "Haus, Zuhause"
            },
            {
              "schrift": "ly",
              "lerntext": "ly",
              "de": "Glas"
            },
            {
              "schrift": "cửa",
              "lerntext": "cửa",
              "de": "Tür"
            },
            {
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)"
            },
            {
              "schrift": "giường",
              "lerntext": "giường",
              "de": "Bett"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "có",
            "lerntext": "có",
            "de": "ja, haben, es gibt"
          }
        ],
        "id": "2.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó / mình có [Slot]",
          "lerntext": "tôi / bạn / nó / mình có [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) / ich, wir (vertraut) habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chân",
              "lerntext": "chân",
              "de": "Bein, Fuß"
            },
            {
              "schrift": "miệng",
              "lerntext": "miệng",
              "de": "Mund"
            },
            {
              "schrift": "gia đình",
              "lerntext": "gia đình",
              "de": "Familie"
            },
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen, Tochter"
            },
            {
              "schrift": "con trai",
              "lerntext": "con trai",
              "de": "Junge, Sohn"
            },
            {
              "schrift": "bàn",
              "lerntext": "bàn",
              "de": "Tisch"
            },
            {
              "schrift": "giấy",
              "lerntext": "giấy",
              "de": "Papier, Dokument"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot] của tôi",
          "lerntext": "đây là [Slot] của tôi"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mẹ",
              "lerntext": "mẹ",
              "de": "Mutter"
            },
            {
              "schrift": "bố",
              "lerntext": "bố",
              "de": "Vater"
            },
            {
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau), Frau"
            },
            {
              "schrift": "đồng nghiệp",
              "lerntext": "đồng nghiệp",
              "de": "Kollege"
            },
            {
              "schrift": "miệng",
              "lerntext": "miệng",
              "de": "Mund"
            },
            {
              "schrift": "các bạn",
              "lerntext": "các bạn",
              "de": "ihr"
            },
            {
              "schrift": "sinh viên",
              "lerntext": "sinh viên",
              "de": "Student"
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern), Kind"
            },
            {
              "schrift": "phòng",
              "lerntext": "phòng",
              "de": "Zimmer"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đây",
            "lerntext": "đây",
            "de": "hier"
          },
          {
            "schrift": "của",
            "lerntext": "của",
            "de": "von (Besitz)"
          }
        ],
        "id": "2.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là nhà của [Slot]",
          "lerntext": "đây là nhà của [Slot]"
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "là",
              "lerntext": "là",
              "de": "sein"
            },
            {
              "schrift": "chân",
              "lerntext": "chân",
              "de": "Bein, Fuß"
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche, Tüte"
            },
            {
              "schrift": "sách",
              "lerntext": "sách",
              "de": "Buch"
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend"
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đây",
            "lerntext": "đây",
            "de": "hier"
          },
          {
            "schrift": "của",
            "lerntext": "của",
            "de": "von (Besitz)"
          }
        ],
        "id": "2.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là sách của [Slot]",
          "lerntext": "đây là sách của [Slot]"
        },
        "frameDe": "Das sind [Slot] Bücher.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tất cả",
              "lerntext": "tất cả",
              "de": "alles, alle"
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank"
            },
            {
              "schrift": "ô tô",
              "lerntext": "ô tô",
              "de": "Auto"
            },
            {
              "schrift": "sẵn sàng",
              "lerntext": "sẵn sàng",
              "de": "bereit"
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund, stark"
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đây",
            "lerntext": "đây",
            "de": "hier"
          },
          {
            "schrift": "của",
            "lerntext": "của",
            "de": "von (Besitz)"
          }
        ],
        "id": "2.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] ở đây",
          "lerntext": "[Slot] ở đây"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "này",
              "lerntext": "này",
              "de": "dieser"
            },
            {
              "schrift": "là",
              "lerntext": "là",
              "de": "sein"
            },
            {
              "schrift": "tất cả",
              "lerntext": "tất cả",
              "de": "alles, alle"
            },
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach"
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel"
            },
            {
              "schrift": "tay",
              "lerntext": "tay",
              "de": "Hand, Arm"
            },
            {
              "schrift": "khát",
              "lerntext": "khát",
              "de": "durstig"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đây",
            "lerntext": "đây",
            "de": "hier"
          },
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in, an, bei"
          }
        ],
        "id": "2.10"
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
        "id": "2.11"
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
          "schrift": "tôi / bạn / mình muốn [Slot]",
          "lerntext": "tôi / bạn / mình muốn [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / ich, wir (vertraut) möchte [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser, Land"
            },
            {
              "schrift": "cà phê",
              "lerntext": "cà phê",
              "de": "Kaffee"
            },
            {
              "schrift": "trà",
              "lerntext": "trà",
              "de": "Tee"
            },
            {
              "schrift": "bia",
              "lerntext": "bia",
              "de": "Bier"
            },
            {
              "schrift": "ăn",
              "lerntext": "ăn",
              "de": "essen"
            },
            {
              "schrift": "này",
              "lerntext": "này",
              "de": "dieser"
            },
            {
              "schrift": "buồn",
              "lerntext": "buồn",
              "de": "traurig"
            },
            {
              "schrift": "buồn cười",
              "lerntext": "buồn cười",
              "de": "lustig"
            },
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl"
            },
            {
              "schrift": "cứ",
              "lerntext": "cứ",
              "de": "ruhig, einfach"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "muốn",
            "lerntext": "muốn",
            "de": "wollen"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / mình muốn [Slot]",
          "lerntext": "tôi / bạn / mình muốn [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / ich, wir (vertraut) möchte [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot, Bagütte-Sandwich"
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch"
            },
            {
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße, Zucker"
            },
            {
              "schrift": "bia",
              "lerntext": "bia",
              "de": "Bier"
            },
            {
              "schrift": "ăn",
              "lerntext": "ăn",
              "de": "essen"
            },
            {
              "schrift": "trà",
              "lerntext": "trà",
              "de": "Tee"
            },
            {
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser, Land"
            },
            {
              "schrift": "cà phê",
              "lerntext": "cà phê",
              "de": "Kaffee"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "3.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó cần [Slot]",
          "lerntext": "tôi / bạn / nó cần [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) brauche [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "thời gian",
              "lerntext": "thời gian",
              "de": "Zeit"
            },
            {
              "schrift": "tiền",
              "lerntext": "tiền",
              "de": "Geld"
            },
            {
              "schrift": "muối",
              "lerntext": "muối",
              "de": "Salz"
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch"
            },
            {
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße, Zucker"
            },
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot, Bagütte-Sandwich"
            },
            {
              "schrift": "bia",
              "lerntext": "bia",
              "de": "Bier"
            },
            {
              "schrift": "đói",
              "lerntext": "đói",
              "de": "hungrig"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "cần",
            "lerntext": "cần",
            "de": "brauchen"
          }
        ],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "ich (neutral) möchte einen [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bữa sáng",
              "lerntext": "bữa sáng",
              "de": "Frühstück"
            },
            {
              "schrift": "bữa trưa",
              "lerntext": "bữa trưa",
              "de": "Mittagessen"
            },
            {
              "schrift": "bữa tối",
              "lerntext": "bữa tối",
              "de": "Abendessen"
            },
            {
              "schrift": "đá",
              "lerntext": "đá",
              "de": "Eis, Stein"
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst"
            },
            {
              "schrift": "tiền",
              "lerntext": "tiền",
              "de": "Geld"
            },
            {
              "schrift": "thời gian",
              "lerntext": "thời gian",
              "de": "Zeit"
            },
            {
              "schrift": "muối",
              "lerntext": "muối",
              "de": "Salz"
            },
            {
              "schrift": "gia đình",
              "lerntext": "gia đình",
              "de": "Familie"
            },
            {
              "schrift": "ăn",
              "lerntext": "ăn",
              "de": "essen"
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
          "schrift": "tôi / mình ăn [Slot]",
          "lerntext": "tôi / mình ăn [Slot]"
        },
        "frameDe": "ich (neutral) / ich, wir (vertraut) esse [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch"
            },
            {
              "schrift": "cá",
              "lerntext": "cá",
              "de": "Fisch"
            },
            {
              "schrift": "rau",
              "lerntext": "rau",
              "de": "Gemüse, Kräuter"
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst"
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken"
            },
            {
              "schrift": "bữa trưa",
              "lerntext": "bữa trưa",
              "de": "Mittagessen"
            },
            {
              "schrift": "đá",
              "lerntext": "đá",
              "de": "Eis, Stein"
            },
            {
              "schrift": "bữa tối",
              "lerntext": "bữa tối",
              "de": "Abendessen"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ăn",
            "lerntext": "ăn",
            "de": "essen"
          },
          {
            "schrift": "uống",
            "lerntext": "uống",
            "de": "trinken"
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
          "schrift": "tôi / bạn / nó không [Slot]",
          "lerntext": "tôi / bạn / nó không [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chắc chắn",
              "lerntext": "chắc chắn",
              "de": "sicher"
            },
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch"
            },
            {
              "schrift": "rau",
              "lerntext": "rau",
              "de": "Gemüse, Kräuter"
            },
            {
              "schrift": "cá",
              "lerntext": "cá",
              "de": "Fisch"
            },
            {
              "schrift": "bữa sáng",
              "lerntext": "bữa sáng",
              "de": "Frühstück"
            },
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen, Tochter"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "không",
            "lerntext": "không",
            "de": "nicht (Fragepartikel)"
          },
          {
            "schrift": "có",
            "lerntext": "có",
            "de": "ja, haben, es gibt"
          }
        ],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "bạn [Slot] không?",
          "lerntext": "bạn [Slot] không?"
        },
        "frameDe": "Bist du (Gleichaltrige), Freund / er, sie, es (vertraut) / ihr [Slot]?",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          },
          {
            "schrift": "các bạn",
            "lerntext": "các bạn",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)"
            },
            {
              "schrift": "mới",
              "lerntext": "mới",
              "de": "gerade erst, neu"
            },
            {
              "schrift": "hay",
              "lerntext": "hay",
              "de": "oder (in Fragen), gut"
            },
            {
              "schrift": "dở",
              "lerntext": "dở",
              "de": "schlecht"
            },
            {
              "schrift": "quan trọng",
              "lerntext": "quan trọng",
              "de": "wichtig"
            },
            {
              "schrift": "chắc chắn",
              "lerntext": "chắc chắn",
              "de": "sicher"
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch"
            },
            {
              "schrift": "tiền",
              "lerntext": "tiền",
              "de": "Geld"
            },
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch"
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern), Kind"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "4.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] đây?",
          "lerntext": "[Slot] đây?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "cái gì",
            "lerntext": "cái gì",
            "de": "etwas, was"
          },
          {
            "schrift": "ai",
            "lerntext": "ai",
            "de": "wer, jemand"
          },
          {
            "schrift": "thế nào",
            "lerntext": "thế nào",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nào",
              "lerntext": "nào",
              "de": "welcher"
            },
            {
              "schrift": "cái gì",
              "lerntext": "cái gì",
              "de": "etwas, was"
            },
            {
              "schrift": "tất cả",
              "lerntext": "tất cả",
              "de": "alles, alle"
            },
            {
              "schrift": "hay",
              "lerntext": "hay",
              "de": "oder (in Fragen), gut"
            },
            {
              "schrift": "quan trọng",
              "lerntext": "quan trọng",
              "de": "wichtig"
            },
            {
              "schrift": "dở",
              "lerntext": "dở",
              "de": "schlecht"
            },
            {
              "schrift": "tại sao",
              "lerntext": "tại sao",
              "de": "warum"
            },
            {
              "schrift": "mới",
              "lerntext": "mới",
              "de": "gerade erst, neu"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "cái gì",
            "lerntext": "cái gì",
            "de": "etwas, was"
          },
          {
            "schrift": "ai",
            "lerntext": "ai",
            "de": "wer, jemand"
          },
          {
            "schrift": "thế nào",
            "lerntext": "thế nào",
            "de": "wie"
          },
          {
            "schrift": "tại sao",
            "lerntext": "tại sao",
            "de": "warum"
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
          "schrift": "[Slot] ở đâu?",
          "lerntext": "[Slot] ở đâu?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "đâu",
            "lerntext": "đâu",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cửa hàng",
              "lerntext": "cửa hàng",
              "de": "Laden"
            },
            {
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant"
            },
            {
              "schrift": "nhà vệ sinh",
              "lerntext": "nhà vệ sinh",
              "de": "Toilette"
            },
            {
              "schrift": "ga tàu",
              "lerntext": "ga tàu",
              "de": "Bahnhof"
            },
            {
              "schrift": "sân bay",
              "lerntext": "sân bay",
              "de": "Flughafen"
            },
            {
              "schrift": "nào",
              "lerntext": "nào",
              "de": "welcher"
            },
            {
              "schrift": "hay",
              "lerntext": "hay",
              "de": "oder (in Fragen), gut"
            },
            {
              "schrift": "quan trọng",
              "lerntext": "quan trọng",
              "de": "wichtig"
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel"
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đâu",
            "lerntext": "đâu",
            "de": "wo"
          },
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in, an, bei"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] ở đâu?",
          "lerntext": "[Slot] ở đâu?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "đâu",
            "lerntext": "đâu",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule"
            },
            {
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße, Zucker"
            },
            {
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant"
            },
            {
              "schrift": "nhà vệ sinh",
              "lerntext": "nhà vệ sinh",
              "de": "Toilette"
            },
            {
              "schrift": "sân bay",
              "lerntext": "sân bay",
              "de": "Flughafen"
            },
            {
              "schrift": "ga tàu",
              "lerntext": "ga tàu",
              "de": "Bahnhof"
            },
            {
              "schrift": "cửa hàng",
              "lerntext": "cửa hàng",
              "de": "Laden"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "5.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ở đây có [Slot] không?",
          "lerntext": "ở đây có [Slot] không?"
        },
        "frameDe": "Gibt es hier ein [Slot]?",
        "pronouns": [
          {
            "schrift": "đâu",
            "lerntext": "đâu",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bệnh viện",
              "lerntext": "bệnh viện",
              "de": "Krankenhaus"
            },
            {
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität"
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule"
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster"
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel"
            },
            {
              "schrift": "rau",
              "lerntext": "rau",
              "de": "Gemüse, Kräuter"
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in, an, bei"
          }
        ],
        "id": "5.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] ở đây",
          "lerntext": "[Slot] ở đây"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "đây",
            "lerntext": "đây",
            "de": "hier"
          },
          {
            "schrift": "kìa",
            "lerntext": "kìa",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "thành phố",
              "lerntext": "thành phố",
              "de": "Stadt"
            },
            {
              "schrift": "cầu",
              "lerntext": "cầu",
              "de": "Brücke"
            },
            {
              "schrift": "rừng",
              "lerntext": "rừng",
              "de": "Wald"
            },
            {
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität"
            },
            {
              "schrift": "bệnh viện",
              "lerntext": "bệnh viện",
              "de": "Krankenhaus"
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule"
            },
            {
              "schrift": "dở",
              "lerntext": "dở",
              "de": "schlecht"
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "kìa",
            "lerntext": "kìa",
            "de": "dort"
          },
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in, an, bei"
          }
        ],
        "id": "5.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó ở [Slot] nhà",
          "lerntext": "nó ở [Slot] nhà"
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in, an, bei"
          },
          {
            "schrift": "trên",
            "lerntext": "trên",
            "de": "auf, über"
          },
          {
            "schrift": "quá",
            "lerntext": "quá",
            "de": "zu, sehr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter"
            },
            {
              "schrift": "trên",
              "lerntext": "trên",
              "de": "auf, über"
            },
            {
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen"
            },
            {
              "schrift": "sau",
              "lerntext": "sau",
              "de": "nach, hinter"
            },
            {
              "schrift": "trước",
              "lerntext": "trước",
              "de": "vor"
            },
            {
              "schrift": "rừng",
              "lerntext": "rừng",
              "de": "Wald"
            },
            {
              "schrift": "cầu",
              "lerntext": "cầu",
              "de": "Brücke"
            },
            {
              "schrift": "với",
              "lerntext": "với",
              "de": "mit"
            },
            {
              "schrift": "thành phố",
              "lerntext": "thành phố",
              "de": "Stadt"
            },
            {
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in, an, bei"
          },
          {
            "schrift": "trên",
            "lerntext": "trên",
            "de": "auf, über"
          },
          {
            "schrift": "quá",
            "lerntext": "quá",
            "de": "zu, sehr"
          },
          {
            "schrift": "của",
            "lerntext": "của",
            "de": "von (Besitz)"
          },
          {
            "schrift": "với",
            "lerntext": "với",
            "de": "mit"
          },
          {
            "schrift": "trên",
            "lerntext": "trên",
            "de": "auf, über"
          },
          {
            "schrift": "của",
            "lerntext": "của",
            "de": "von (Besitz)"
          },
          {
            "schrift": "sau",
            "lerntext": "sau",
            "de": "nach, hinter"
          }
        ],
        "id": "5.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó ở [Slot] nhà",
          "lerntext": "nó ở [Slot] nhà"
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in, an, bei"
          },
          {
            "schrift": "trên",
            "lerntext": "trên",
            "de": "auf, über"
          },
          {
            "schrift": "quá",
            "lerntext": "quá",
            "de": "zu, sehr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bên cạnh",
              "lerntext": "bên cạnh",
              "de": "neben"
            },
            {
              "schrift": "qua",
              "lerntext": "qua",
              "de": "durch, vorbei"
            },
            {
              "schrift": "ở",
              "lerntext": "ở",
              "de": "in, an, bei"
            },
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter"
            },
            {
              "schrift": "trước",
              "lerntext": "trước",
              "de": "vor"
            },
            {
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen"
            },
            {
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant"
            },
            {
              "schrift": "giáo viên",
              "lerntext": "giáo viên",
              "de": "Lehrer"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.6"
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
        "id": "5.7"
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
              "schrift": "không (số)",
              "lerntext": "không (số)",
              "de": "null"
            },
            {
              "schrift": "một",
              "lerntext": "một",
              "de": "eins"
            },
            {
              "schrift": "hai",
              "lerntext": "hai",
              "de": "zwei"
            },
            {
              "schrift": "ba",
              "lerntext": "ba",
              "de": "drei"
            },
            {
              "schrift": "bốn",
              "lerntext": "bốn",
              "de": "vier"
            },
            {
              "schrift": "năm",
              "lerntext": "năm",
              "de": "fünf, Jahr"
            },
            {
              "schrift": "sáu",
              "lerntext": "sáu",
              "de": "sechs"
            },
            {
              "schrift": "bảy",
              "lerntext": "bảy",
              "de": "sieben"
            },
            {
              "schrift": "tám",
              "lerntext": "tám",
              "de": "acht"
            },
            {
              "schrift": "chín",
              "lerntext": "chín",
              "de": "neun"
            },
            {
              "schrift": "mười",
              "lerntext": "mười",
              "de": "zehn"
            }
          ]
        ],
        "newCount": 11,
        "task": null,
        "newFrameWords": [],
        "id": "6.1"
      },
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
              "schrift": "mười một",
              "lerntext": "mười một",
              "de": "elf"
            },
            {
              "schrift": "mười hai",
              "lerntext": "mười hai",
              "de": "zwölf"
            },
            {
              "schrift": "mười ba",
              "lerntext": "mười ba",
              "de": "dreizehn"
            },
            {
              "schrift": "mười bốn",
              "lerntext": "mười bốn",
              "de": "vierzehn"
            },
            {
              "schrift": "mười lăm",
              "lerntext": "mười lăm",
              "de": "fünfzehn"
            },
            {
              "schrift": "mười sáu",
              "lerntext": "mười sáu",
              "de": "sechzehn"
            },
            {
              "schrift": "mười bảy",
              "lerntext": "mười bảy",
              "de": "siebzehn"
            },
            {
              "schrift": "mười tám",
              "lerntext": "mười tám",
              "de": "achtzehn"
            },
            {
              "schrift": "mười chín",
              "lerntext": "mười chín",
              "de": "neunzehn"
            },
            {
              "schrift": "hai mươi",
              "lerntext": "hai mươi",
              "de": "zwanzig"
            }
          ]
        ],
        "newCount": 10,
        "task": null,
        "newFrameWords": [],
        "id": "6.2"
      },
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
              "schrift": "bốn mươi",
              "lerntext": "bốn mươi",
              "de": "vierzig"
            },
            {
              "schrift": "năm mươi",
              "lerntext": "năm mươi",
              "de": "fünfzig"
            },
            {
              "schrift": "sáu mươi",
              "lerntext": "sáu mươi",
              "de": "sechzig"
            },
            {
              "schrift": "bảy mươi",
              "lerntext": "bảy mươi",
              "de": "siebzig"
            },
            {
              "schrift": "tám mươi",
              "lerntext": "tám mươi",
              "de": "achtzig"
            },
            {
              "schrift": "chín mươi",
              "lerntext": "chín mươi",
              "de": "neunzig"
            },
            {
              "schrift": "một trăm",
              "lerntext": "một trăm",
              "de": "hundert"
            },
            {
              "schrift": "một nghìn",
              "lerntext": "một nghìn",
              "de": "tausend"
            }
          ]
        ],
        "newCount": 8,
        "task": null,
        "newFrameWords": [],
        "id": "6.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] bao nhiêu tiền?",
          "lerntext": "[Slot] bao nhiêu tiền?"
        },
        "frameDe": "Wie viel kostet ein [Slot]?",
        "pronouns": [
          {
            "schrift": "bao nhiêu",
            "lerntext": "bao nhiêu",
            "de": "wie viel"
          },
          {
            "schrift": "mấy",
            "lerntext": "mấy",
            "de": "wie viele (kleine Zahl)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vé",
              "lerntext": "vé",
              "de": "Fahrkarte, Ticket"
            },
            {
              "schrift": "bản đồ",
              "lerntext": "bản đồ",
              "de": "Landkarte"
            },
            {
              "schrift": "ít",
              "lerntext": "ít",
              "de": "wenig"
            },
            {
              "schrift": "năm mươi",
              "lerntext": "năm mươi",
              "de": "fünfzig"
            },
            {
              "schrift": "chín",
              "lerntext": "chín",
              "de": "neun"
            },
            {
              "schrift": "mười lăm",
              "lerntext": "mười lăm",
              "de": "fünfzehn"
            },
            {
              "schrift": "cái",
              "lerntext": "cái",
              "de": "Stück (Zählwort)"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "bao nhiêu",
            "lerntext": "bao nhiêu",
            "de": "wie viel"
          },
          {
            "schrift": "mấy",
            "lerntext": "mấy",
            "de": "wie viele (kleine Zahl)"
          },
          {
            "schrift": "rất",
            "lerntext": "rất",
            "de": "sehr"
          },
          {
            "schrift": "ít",
            "lerntext": "ít",
            "de": "wenig"
          },
          {
            "schrift": "cái",
            "lerntext": "cái",
            "de": "Stück (Zählwort)"
          }
        ],
        "id": "6.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "cái này quá [Slot]",
          "lerntext": "cái này quá [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer"
            },
            {
              "schrift": "rẻ",
              "lerntext": "rẻ",
              "de": "billig"
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "groß"
            },
            {
              "schrift": "nhỏ",
              "lerntext": "nhỏ",
              "de": "klein"
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang"
            },
            {
              "schrift": "mười hai",
              "lerntext": "mười hai",
              "de": "zwölf"
            },
            {
              "schrift": "bảy mươi",
              "lerntext": "bảy mươi",
              "de": "siebzig"
            },
            {
              "schrift": "mười bảy",
              "lerntext": "mười bảy",
              "de": "siebzehn"
            },
            {
              "schrift": "hai mươi",
              "lerntext": "hai mươi",
              "de": "zwanzig"
            },
            {
              "schrift": "cho",
              "lerntext": "cho",
              "de": "für, geben"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "cho",
            "lerntext": "cho",
            "de": "für, geben"
          }
        ],
        "id": "6.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "cái này quá [Slot]",
          "lerntext": "cái này quá [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz"
            },
            {
              "schrift": "cao",
              "lerntext": "cao",
              "de": "hoch, groß"
            },
            {
              "schrift": "thấp",
              "lerntext": "thấp",
              "de": "niedrig, klein"
            },
            {
              "schrift": "nặng",
              "lerntext": "nặng",
              "de": "schwer"
            },
            {
              "schrift": "nhẹ",
              "lerntext": "nhẹ",
              "de": "leicht"
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "groß"
            },
            {
              "schrift": "sáu mươi",
              "lerntext": "sáu mươi",
              "de": "sechzig"
            },
            {
              "schrift": "nhỏ",
              "lerntext": "nhỏ",
              "de": "klein"
            },
            {
              "schrift": "mười một",
              "lerntext": "mười một",
              "de": "elf"
            },
            {
              "schrift": "rẻ",
              "lerntext": "rẻ",
              "de": "billig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "6.6"
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
        "id": "6.7"
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
          "schrift": "tôi / bạn / mình / nó có thể [Slot]",
          "lerntext": "tôi / bạn / mình / nó có thể [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / ich, wir (vertraut) / er, sie, es (vertraut) kann [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen, springen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen"
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen, fahren"
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben"
            },
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen"
            },
            {
              "schrift": "được",
              "lerntext": "được",
              "de": "können, dürfen, bekommen"
            },
            {
              "schrift": "cao",
              "lerntext": "cao",
              "de": "hoch, groß"
            },
            {
              "schrift": "nặng",
              "lerntext": "nặng",
              "de": "schwer"
            },
            {
              "schrift": "một nghìn",
              "lerntext": "một nghìn",
              "de": "tausend"
            },
            {
              "schrift": "mười tám",
              "lerntext": "mười tám",
              "de": "achtzehn"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "được",
            "lerntext": "được",
            "de": "können, dürfen, bekommen"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / mình / nó có thể [Slot]",
          "lerntext": "tôi / bạn / mình / nó có thể [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / ich, wir (vertraut) / er, sie, es (vertraut) kann [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "giúp",
              "lerntext": "giúp",
              "de": "helfen"
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen, arbeiten"
            },
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen, sagen"
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen"
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen, springen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen"
            },
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen"
            },
            {
              "schrift": "không (số)",
              "lerntext": "không (số)",
              "de": "null"
            },
            {
              "schrift": "sáu",
              "lerntext": "sáu",
              "de": "sechs"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / mình phải [Slot]",
          "lerntext": "tôi / bạn / mình phải [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / ich, wir (vertraut) muss [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen, arbeiten"
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen"
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten"
            },
            {
              "schrift": "trả",
              "lerntext": "trả",
              "de": "bezahlen, zurückgeben"
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen"
            },
            {
              "schrift": "bốn",
              "lerntext": "bốn",
              "de": "vier"
            },
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz"
            },
            {
              "schrift": "một trăm",
              "lerntext": "một trăm",
              "de": "hundert"
            },
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer"
            },
            {
              "schrift": "ba",
              "lerntext": "ba",
              "de": "drei"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "phải",
            "lerntext": "phải",
            "de": "müssen"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó muốn [Slot]",
          "lerntext": "tôi / bạn / nó muốn [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) will [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen"
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen"
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen"
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten"
            },
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen, sagen"
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen"
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen"
            },
            {
              "schrift": "thấp",
              "lerntext": "thấp",
              "de": "niedrig, klein"
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen"
            },
            {
              "schrift": "hai",
              "lerntext": "hai",
              "de": "zwei"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó muốn [Slot]",
          "lerntext": "tôi / bạn / nó muốn [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) will [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nghe",
              "lerntext": "nghe",
              "de": "hören"
            },
            {
              "schrift": "thấy",
              "lerntext": "thấy",
              "de": "sehen"
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen"
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten"
            },
            {
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen"
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen"
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "7.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn không thể [Slot]",
          "lerntext": "tôi / bạn không thể [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "quên",
              "lerntext": "quên",
              "de": "vergessen"
            },
            {
              "schrift": "mất",
              "lerntext": "mất",
              "de": "verlieren, dauern"
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen"
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen, lächeln"
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben"
            },
            {
              "schrift": "nghe",
              "lerntext": "nghe",
              "de": "hören"
            },
            {
              "schrift": "bốn mươi",
              "lerntext": "bốn mươi",
              "de": "vierzig"
            },
            {
              "schrift": "trả",
              "lerntext": "trả",
              "de": "bezahlen, zurückgeben"
            },
            {
              "schrift": "bằng",
              "lerntext": "bằng",
              "de": "mit (Mittel), gleich"
            },
            {
              "schrift": "tám mươi",
              "lerntext": "tám mươi",
              "de": "achtzig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "nhận",
            "lerntext": "nhận",
            "de": "bekommen, annehmen"
          },
          {
            "schrift": "bằng",
            "lerntext": "bằng",
            "de": "mit (Mittel), gleich"
          }
        ],
        "id": "7.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn không thể [Slot]",
          "lerntext": "tôi / bạn không thể [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen"
            },
            {
              "schrift": "đóng",
              "lerntext": "đóng",
              "de": "schließen"
            },
            {
              "schrift": "thắng",
              "lerntext": "thắng",
              "de": "gewinnen"
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen"
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen, lächeln"
            },
            {
              "schrift": "mất",
              "lerntext": "mất",
              "de": "verlieren, dauern"
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben"
            },
            {
              "schrift": "mười bốn",
              "lerntext": "mười bốn",
              "de": "vierzehn"
            }
          ]
        ],
        "newCount": 4,
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
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / mình đi bằng [Slot]",
          "lerntext": "tôi / mình đi bằng [Slot]"
        },
        "frameDe": "ich (neutral) / ich, wir (vertraut) fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "xe buýt",
              "lerntext": "xe buýt",
              "de": "Bus"
            },
            {
              "schrift": "tàu",
              "lerntext": "tàu",
              "de": "Zug, Schiff"
            },
            {
              "schrift": "ô tô",
              "lerntext": "ô tô",
              "de": "Auto"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen"
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen"
            },
            {
              "schrift": "thắng",
              "lerntext": "thắng",
              "de": "gewinnen"
            },
            {
              "schrift": "quên",
              "lerntext": "quên",
              "de": "vergessen"
            },
            {
              "schrift": "bảy",
              "lerntext": "bảy",
              "de": "sieben"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "du lịch",
            "lerntext": "du lịch",
            "de": "reisen"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / nó [Slot] bây giờ",
          "lerntext": "tôi / nó [Slot] bây giờ"
        },
        "frameDe": "ich (neutral) / er, sie, es (vertraut) [Slot] jetzt.",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen"
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen"
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen"
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen, übertragen"
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben"
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen"
            },
            {
              "schrift": "tàu",
              "lerntext": "tàu",
              "de": "Zug, Schiff"
            },
            {
              "schrift": "xe buýt",
              "lerntext": "xe buýt",
              "de": "Bus"
            },
            {
              "schrift": "lại",
              "lerntext": "lại",
              "de": "wieder"
            },
            {
              "schrift": "về",
              "lerntext": "về",
              "de": "über, zurück"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "về",
            "lerntext": "về",
            "de": "über, zurück"
          },
          {
            "schrift": "lại",
            "lerntext": "lại",
            "de": "wieder"
          },
          {
            "schrift": "vào",
            "lerntext": "vào",
            "de": "hineingehen"
          },
          {
            "schrift": "giờ",
            "lerntext": "giờ",
            "de": "Stunde, Uhr"
          }
        ],
        "id": "8.2"
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
        "id": "8.3"
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
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute"
            },
            {
              "schrift": "hôm qua",
              "lerntext": "hôm qua",
              "de": "gestern"
            },
            {
              "schrift": "ngày mai",
              "lerntext": "ngày mai",
              "de": "morgen"
            },
            {
              "schrift": "bây giờ",
              "lerntext": "bây giờ",
              "de": "jetzt"
            },
            {
              "schrift": "sớm",
              "lerntext": "sớm",
              "de": "früh, bald"
            },
            {
              "schrift": "luôn luôn",
              "lerntext": "luôn luôn",
              "de": "immer"
            },
            {
              "schrift": "không bao giờ",
              "lerntext": "không bao giờ",
              "de": "nie"
            },
            {
              "schrift": "thường",
              "lerntext": "thường",
              "de": "oft"
            },
            {
              "schrift": "đôi khi",
              "lerntext": "đôi khi",
              "de": "manchmal"
            },
            {
              "schrift": "rồi",
              "lerntext": "rồi",
              "de": "dann, schon"
            },
            {
              "schrift": "thì",
              "lerntext": "thì",
              "de": "dann (Satzverbinder)"
            },
            {
              "schrift": "ngay",
              "lerntext": "ngay",
              "de": "sofort"
            },
            {
              "schrift": "chung",
              "lerntext": "chung",
              "de": "zusammen"
            }
          ]
        ],
        "newCount": 13,
        "task": null,
        "newFrameWords": [],
        "id": "9.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "hẹn gặp lại vào [Slot]",
          "lerntext": "hẹn gặp lại vào [Slot]"
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "khi nào",
            "lerntext": "khi nào",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ngày mai",
              "lerntext": "ngày mai",
              "de": "morgen"
            },
            {
              "schrift": "tối",
              "lerntext": "tối",
              "de": "Abend"
            },
            {
              "schrift": "đêm",
              "lerntext": "đêm",
              "de": "Nacht"
            },
            {
              "schrift": "ngày",
              "lerntext": "ngày",
              "de": "Tag"
            },
            {
              "schrift": "tuần",
              "lerntext": "tuần",
              "de": "Woche"
            },
            {
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute"
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen"
            },
            {
              "schrift": "cũng",
              "lerntext": "cũng",
              "de": "auch"
            },
            {
              "schrift": "thì",
              "lerntext": "thì",
              "de": "dann (Satzverbinder)"
            },
            {
              "schrift": "hôm qua",
              "lerntext": "hôm qua",
              "de": "gestern"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "khi nào",
            "lerntext": "khi nào",
            "de": "wann"
          },
          {
            "schrift": "cũng",
            "lerntext": "cũng",
            "de": "auch"
          },
          {
            "schrift": "chỉ",
            "lerntext": "chỉ",
            "de": "nur"
          }
        ],
        "id": "9.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "mất một [Slot]",
          "lerntext": "mất một [Slot]"
        },
        "frameDe": "Es dauert eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "giờ",
              "lerntext": "giờ",
              "de": "Stunde, Uhr"
            },
            {
              "schrift": "phút",
              "lerntext": "phút",
              "de": "Minute"
            },
            {
              "schrift": "tối",
              "lerntext": "tối",
              "de": "Abend"
            },
            {
              "schrift": "đêm",
              "lerntext": "đêm",
              "de": "Nacht"
            },
            {
              "schrift": "tuần",
              "lerntext": "tuần",
              "de": "Woche"
            },
            {
              "schrift": "đôi khi",
              "lerntext": "đôi khi",
              "de": "manchmal"
            },
            {
              "schrift": "chung",
              "lerntext": "chung",
              "de": "zusammen"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "9.3"
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
        "id": "9.4"
      }
    ]
  },
  {
    "number": 10,
    "title": "Ich mag, mir gefällt",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó / mình thích [Slot]",
          "lerntext": "tôi / bạn / nó / mình thích [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) / ich, wir (vertraut) mag [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mặt trời",
              "lerntext": "mặt trời",
              "de": "Sonne"
            },
            {
              "schrift": "mưa",
              "lerntext": "mưa",
              "de": "Regen"
            },
            {
              "schrift": "gió",
              "lerntext": "gió",
              "de": "Wind"
            },
            {
              "schrift": "thời tiết",
              "lerntext": "thời tiết",
              "de": "Wetter"
            },
            {
              "schrift": "núi",
              "lerntext": "núi",
              "de": "Berg"
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben"
            },
            {
              "schrift": "luôn luôn",
              "lerntext": "luôn luôn",
              "de": "immer"
            },
            {
              "schrift": "bây giờ",
              "lerntext": "bây giờ",
              "de": "jetzt"
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen, übertragen"
            },
            {
              "schrift": "rồi",
              "lerntext": "rồi",
              "de": "dann, schon"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "thích",
            "lerntext": "thích",
            "de": "mögen"
          },
          {
            "schrift": "yêu",
            "lerntext": "yêu",
            "de": "lieben"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó / mình thích [Slot]",
          "lerntext": "tôi / bạn / nó / mình thích [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) / ich, wir (vertraut) mag [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "biển",
              "lerntext": "biển",
              "de": "Meer"
            },
            {
              "schrift": "mặt trời",
              "lerntext": "mặt trời",
              "de": "Sonne"
            },
            {
              "schrift": "thời tiết",
              "lerntext": "thời tiết",
              "de": "Wetter"
            },
            {
              "schrift": "mưa",
              "lerntext": "mưa",
              "de": "Regen"
            },
            {
              "schrift": "núi",
              "lerntext": "núi",
              "de": "Berg"
            },
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "10.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / nó thấy [Slot]",
          "lerntext": "tôi / nó thấy [Slot]"
        },
        "frameDe": "ich (neutral) / er, sie, es (vertraut) sehe [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nó",
              "lerntext": "nó",
              "de": "er, sie, es (vertraut)"
            },
            {
              "schrift": "biển",
              "lerntext": "biển",
              "de": "Meer"
            },
            {
              "schrift": "ngay",
              "lerntext": "ngay",
              "de": "sofort"
            },
            {
              "schrift": "thường",
              "lerntext": "thường",
              "de": "oft"
            },
            {
              "schrift": "gió",
              "lerntext": "gió",
              "de": "Wind"
            },
            {
              "schrift": "đóng",
              "lerntext": "đóng",
              "de": "schließen"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó màu [Slot]",
          "lerntext": "nó màu [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "đỏ",
              "lerntext": "đỏ",
              "de": "rot"
            },
            {
              "schrift": "xanh",
              "lerntext": "xanh",
              "de": "blau, grün"
            },
            {
              "schrift": "vàng",
              "lerntext": "vàng",
              "de": "gelb, golden"
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz"
            },
            {
              "schrift": "trắng",
              "lerntext": "trắng",
              "de": "weiß"
            },
            {
              "schrift": "mười sáu",
              "lerntext": "mười sáu",
              "de": "sechzehn"
            },
            {
              "schrift": "sớm",
              "lerntext": "sớm",
              "de": "früh, bald"
            },
            {
              "schrift": "phút",
              "lerntext": "phút",
              "de": "Minute"
            },
            {
              "schrift": "bên cạnh",
              "lerntext": "bên cạnh",
              "de": "neben"
            },
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben"
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
          "schrift": "nó màu [Slot]",
          "lerntext": "nó màu [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nâu",
              "lerntext": "nâu",
              "de": "braun"
            },
            {
              "schrift": "xám",
              "lerntext": "xám",
              "de": "grau"
            },
            {
              "schrift": "đỏ",
              "lerntext": "đỏ",
              "de": "rot"
            },
            {
              "schrift": "trắng",
              "lerntext": "trắng",
              "de": "weiß"
            },
            {
              "schrift": "xanh",
              "lerntext": "xanh",
              "de": "blau, grün"
            },
            {
              "schrift": "vàng",
              "lerntext": "vàng",
              "de": "gelb, golden"
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "10.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "món ăn rất [Slot]",
          "lerntext": "món ăn rất [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)"
            },
            {
              "schrift": "chua",
              "lerntext": "chua",
              "de": "sauer"
            },
            {
              "schrift": "ấm",
              "lerntext": "ấm",
              "de": "warm"
            },
            {
              "schrift": "lạnh",
              "lerntext": "lạnh",
              "de": "kalt"
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber"
            },
            {
              "schrift": "sẽ",
              "lerntext": "sẽ",
              "de": "wird (Zukunft)"
            },
            {
              "schrift": "nâu",
              "lerntext": "nâu",
              "de": "braun"
            },
            {
              "schrift": "xám",
              "lerntext": "xám",
              "de": "grau"
            },
            {
              "schrift": "mười",
              "lerntext": "mười",
              "de": "zehn"
            },
            {
              "schrift": "không bao giờ",
              "lerntext": "không bao giờ",
              "de": "nie"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "sẽ",
            "lerntext": "sẽ",
            "de": "wird (Zukunft)"
          }
        ],
        "id": "10.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "món ăn rất [Slot]",
          "lerntext": "món ăn rất [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bẩn",
              "lerntext": "bẩn",
              "de": "schmutzig"
            },
            {
              "schrift": "chua",
              "lerntext": "chua",
              "de": "sauer"
            },
            {
              "schrift": "ấm",
              "lerntext": "ấm",
              "de": "warm"
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)"
            },
            {
              "schrift": "lạnh",
              "lerntext": "lạnh",
              "de": "kalt"
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "10.7"
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
        "id": "10.8"
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
          "schrift": "hôm qua tôi / bạn / nó / mình [Slot]",
          "lerntext": "hôm qua tôi / bạn / nó / mình [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / er, sie, es (vertraut) / ich, wir (vertraut) war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mệt",
              "lerntext": "mệt",
              "de": "müde"
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank"
            },
            {
              "schrift": "nhiều",
              "lerntext": "nhiều",
              "de": "viel"
            },
            {
              "schrift": "bẩn",
              "lerntext": "bẩn",
              "de": "schmutzig"
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang"
            },
            {
              "schrift": "chín mươi",
              "lerntext": "chín mươi",
              "de": "neunzig"
            },
            {
              "schrift": "nhẹ",
              "lerntext": "nhẹ",
              "de": "leicht"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "nhiều",
            "lerntext": "nhiều",
            "de": "viel"
          }
        ],
        "id": "11.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ngày mai tôi / bạn / mình sẽ [Slot]",
          "lerntext": "ngày mai tôi / bạn / mình sẽ [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund / ich, wir (vertraut) werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich, wir (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen"
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen"
            },
            {
              "schrift": "cho",
              "lerntext": "cho",
              "de": "für, geben"
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen, holen"
            },
            {
              "schrift": "nên",
              "lerntext": "nên",
              "de": "also, sollte"
            },
            {
              "schrift": "trở thành",
              "lerntext": "trở thành",
              "de": "werden"
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben"
            },
            {
              "schrift": "bản đồ",
              "lerntext": "bản đồ",
              "de": "Landkarte"
            },
            {
              "schrift": "chỉ",
              "lerntext": "chỉ",
              "de": "nur"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "trở thành",
            "lerntext": "trở thành",
            "de": "werden"
          },
          {
            "schrift": "nên",
            "lerntext": "nên",
            "de": "also, sollte"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn [Slot] nhiều",
          "lerntext": "tôi / bạn [Slot] nhiều"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige), Freund [Slot] viel.",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige), Freund"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen"
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen, kennen"
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben"
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken"
            },
            {
              "schrift": "việc",
              "lerntext": "việc",
              "de": "Arbeit, Sache"
            },
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen"
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen, holen"
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen"
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "việc",
            "lerntext": "việc",
            "de": "Arbeit, Sache"
          }
        ],
        "id": "11.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / nó trở nên [Slot]",
          "lerntext": "tôi / nó trở nên [Slot]"
        },
        "frameDe": "ich (neutral) / er, sie, es (vertraut) werde [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er, sie, es (vertraut)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chắc chắn",
              "lerntext": "chắc chắn",
              "de": "sicher"
            },
            {
              "schrift": "nguy hiểm",
              "lerntext": "nguy hiểm",
              "de": "gefährlich"
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken"
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben"
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen, kennen"
            },
            {
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen"
            },
            {
              "schrift": "mười chín",
              "lerntext": "mười chín",
              "de": "neunzehn"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "trở thành",
            "lerntext": "trở thành",
            "de": "werden"
          }
        ],
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
          "schrift": "tôi mệt [Slot] tôi làm việc",
          "lerntext": "tôi mệt [Slot] tôi làm việc"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "và",
            "lerntext": "và",
            "de": "und"
          },
          {
            "schrift": "nhưng",
            "lerntext": "nhưng",
            "de": "aber"
          },
          {
            "schrift": "hoặc",
            "lerntext": "hoặc",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vì",
              "lerntext": "vì",
              "de": "weil"
            },
            {
              "schrift": "trên",
              "lerntext": "trên",
              "de": "auf, über"
            },
            {
              "schrift": "trong khi",
              "lerntext": "trong khi",
              "de": "während"
            },
            {
              "schrift": "mặc dù",
              "lerntext": "mặc dù",
              "de": "obwohl"
            },
            {
              "schrift": "đến",
              "lerntext": "đến",
              "de": "bis, ankommen"
            },
            {
              "schrift": "nguy hiểm",
              "lerntext": "nguy hiểm",
              "de": "gefährlich"
            },
            {
              "schrift": "năm",
              "lerntext": "năm",
              "de": "fünf, Jahr"
            },
            {
              "schrift": "tám",
              "lerntext": "tám",
              "de": "acht"
            },
            {
              "schrift": "mười ba",
              "lerntext": "mười ba",
              "de": "dreizehn"
            },
            {
              "schrift": "giúp",
              "lerntext": "giúp",
              "de": "helfen"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "và",
            "lerntext": "và",
            "de": "und"
          },
          {
            "schrift": "nhưng",
            "lerntext": "nhưng",
            "de": "aber"
          },
          {
            "schrift": "hoặc",
            "lerntext": "hoặc",
            "de": "oder"
          },
          {
            "schrift": "nên",
            "lerntext": "nên",
            "de": "also, sollte"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi mệt [Slot] tôi làm việc",
          "lerntext": "tôi mệt [Slot] tôi làm việc"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "và",
            "lerntext": "và",
            "de": "und"
          },
          {
            "schrift": "nhưng",
            "lerntext": "nhưng",
            "de": "aber"
          },
          {
            "schrift": "hoặc",
            "lerntext": "hoặc",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trước",
              "lerntext": "trước",
              "de": "vor"
            },
            {
              "schrift": "có lẽ",
              "lerntext": "có lẽ",
              "de": "vielleicht"
            },
            {
              "schrift": "trong khi",
              "lerntext": "trong khi",
              "de": "während"
            },
            {
              "schrift": "đến",
              "lerntext": "đến",
              "de": "bis, ankommen"
            },
            {
              "schrift": "vì",
              "lerntext": "vì",
              "de": "weil"
            },
            {
              "schrift": "mặc dù",
              "lerntext": "mặc dù",
              "de": "obwohl"
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen, annehmen"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "12.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot] nhưng không thể",
          "lerntext": "tôi muốn [Slot] nhưng không thể"
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen"
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen"
            },
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen"
            },
            {
              "schrift": "có lẽ",
              "lerntext": "có lẽ",
              "de": "vielleicht"
            },
            {
              "schrift": "vé",
              "lerntext": "vé",
              "de": "Fahrkarte, Ticket"
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben"
            },
            {
              "schrift": "ít",
              "lerntext": "ít",
              "de": "wenig"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "12.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó [Slot] nhưng được",
          "lerntext": "nó [Slot] nhưng được"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "khó",
              "lerntext": "khó",
              "de": "schwierig"
            },
            {
              "schrift": "cứ",
              "lerntext": "cứ",
              "de": "ruhig, einfach"
            },
            {
              "schrift": "thú vị",
              "lerntext": "thú vị",
              "de": "interessant"
            },
            {
              "schrift": "đúng",
              "lerntext": "đúng",
              "de": "genau, richtig"
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch"
            },
            {
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen"
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen"
            },
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen"
            },
            {
              "schrift": "năm mươi",
              "lerntext": "năm mươi",
              "de": "fünfzig"
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "12.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó [Slot] nhưng được",
          "lerntext": "nó [Slot] nhưng được"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nhanh",
              "lerntext": "nhanh",
              "de": "schnell"
            },
            {
              "schrift": "chậm",
              "lerntext": "chậm",
              "de": "langsam"
            },
            {
              "schrift": "xấu",
              "lerntext": "xấu",
              "de": "hässlich, schlecht"
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch"
            },
            {
              "schrift": "thú vị",
              "lerntext": "thú vị",
              "de": "interessant"
            },
            {
              "schrift": "khó",
              "lerntext": "khó",
              "de": "schwierig"
            },
            {
              "schrift": "đúng",
              "lerntext": "đúng",
              "de": "genau, richtig"
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "12.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi [Slot] bạn",
          "lerntext": "tôi [Slot] bạn"
        },
        "frameDe": "Ich [Slot] dich.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern, vermissen"
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken, abgeben"
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln, tauschen"
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen, lächeln"
            },
            {
              "schrift": "xấu",
              "lerntext": "xấu",
              "de": "hässlich, schlecht"
            },
            {
              "schrift": "chậm",
              "lerntext": "chậm",
              "de": "langsam"
            },
            {
              "schrift": "nhanh",
              "lerntext": "nhanh",
              "de": "schnell"
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen, springen"
            },
            {
              "schrift": "trong khi",
              "lerntext": "trong khi",
              "de": "während"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "12.6"
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
        "id": "12.7"
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
          "schrift": "[Slot] của tôi đau",
          "lerntext": "[Slot] của tôi đau"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "đầu",
              "lerntext": "đầu",
              "de": "Kopf"
            },
            {
              "schrift": "mắt",
              "lerntext": "mắt",
              "de": "Auge"
            },
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern, vermissen"
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken, abgeben"
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln, tauschen"
            },
            {
              "schrift": "xấu",
              "lerntext": "xấu",
              "de": "hässlich, schlecht"
            },
            {
              "schrift": "nguy hiểm",
              "lerntext": "nguy hiểm",
              "de": "gefährlich"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "13.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đau [Slot]",
          "lerntext": "tôi đau [Slot]"
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "da",
              "lerntext": "da",
              "de": "Haut"
            },
            {
              "schrift": "chân",
              "lerntext": "chân",
              "de": "Bein, Fuß"
            },
            {
              "schrift": "mắt",
              "lerntext": "mắt",
              "de": "Auge"
            },
            {
              "schrift": "đầu",
              "lerntext": "đầu",
              "de": "Kopf"
            },
            {
              "schrift": "mặt trời",
              "lerntext": "mặt trời",
              "de": "Sonne"
            },
            {
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute"
            },
            {
              "schrift": "chín",
              "lerntext": "chín",
              "de": "neun"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "13.2"
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
        "task": "Sag einem Arzt, was dir weh tut.",
        "newFrameWords": [],
        "id": "13.3"
      }
    ]
  },
  {
    "number": 14,
    "title": "Zuhause, Kleidung und Arbeit",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi mua [Slot]",
          "lerntext": "tôi mua [Slot]"
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "áo",
              "lerntext": "áo",
              "de": "Oberteil, Hemd"
            },
            {
              "schrift": "giày",
              "lerntext": "giày",
              "de": "Schuh"
            },
            {
              "schrift": "da",
              "lerntext": "da",
              "de": "Haut"
            },
            {
              "schrift": "mười lăm",
              "lerntext": "mười lăm",
              "de": "fünfzehn"
            },
            {
              "schrift": "tối",
              "lerntext": "tối",
              "de": "Abend"
            },
            {
              "schrift": "tàu",
              "lerntext": "tàu",
              "de": "Zug, Schiff"
            },
            {
              "schrift": "mười hai",
              "lerntext": "mười hai",
              "de": "zwölf"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "14.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi có [Slot]",
          "lerntext": "tôi có [Slot]"
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "quần áo",
              "lerntext": "quần áo",
              "de": "Kleidung"
            },
            {
              "schrift": "tên",
              "lerntext": "tên",
              "de": "Name"
            },
            {
              "schrift": "áo",
              "lerntext": "áo",
              "de": "Oberteil, Hemd"
            },
            {
              "schrift": "tốt",
              "lerntext": "tốt",
              "de": "gut"
            },
            {
              "schrift": "giày",
              "lerntext": "giày",
              "de": "Schuh"
            },
            {
              "schrift": "bảy mươi",
              "lerntext": "bảy mươi",
              "de": "siebzig"
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "tốt",
            "lerntext": "tốt",
            "de": "gut"
          }
        ],
        "id": "14.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot] của tôi",
          "lerntext": "đây là [Slot] của tôi"
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "việc",
              "lerntext": "việc",
              "de": "Arbeit, Sache"
            },
            {
              "schrift": "quần áo",
              "lerntext": "quần áo",
              "de": "Kleidung"
            },
            {
              "schrift": "tên",
              "lerntext": "tên",
              "de": "Name"
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch"
            },
            {
              "schrift": "mười bảy",
              "lerntext": "mười bảy",
              "de": "siebzehn"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đợi [Slot]",
          "lerntext": "tôi đợi [Slot]"
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bài",
              "lerntext": "bài",
              "de": "Lektion, Aufgabe"
            },
            {
              "schrift": "kỳ thi",
              "lerntext": "kỳ thi",
              "de": "Prüfung"
            },
            {
              "schrift": "xe buýt",
              "lerntext": "xe buýt",
              "de": "Bus"
            },
            {
              "schrift": "đỏ",
              "lerntext": "đỏ",
              "de": "rot"
            },
            {
              "schrift": "chua",
              "lerntext": "chua",
              "de": "sauer"
            },
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen"
            },
            {
              "schrift": "hai mươi",
              "lerntext": "hai mươi",
              "de": "zwanzig"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "14.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ngày mai có [Slot]",
          "lerntext": "ngày mai có [Slot]"
        },
        "frameDe": "Morgen gibt es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "đá",
              "lerntext": "đá",
              "de": "Eis, Stein"
            },
            {
              "schrift": "kỳ thi",
              "lerntext": "kỳ thi",
              "de": "Prüfung"
            },
            {
              "schrift": "bài",
              "lerntext": "bài",
              "de": "Lektion, Aufgabe"
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen"
            },
            {
              "schrift": "cũng",
              "lerntext": "cũng",
              "de": "auch"
            },
            {
              "schrift": "đến",
              "lerntext": "đến",
              "de": "bis, ankommen"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi được [Slot] tốt",
          "lerntext": "tôi được [Slot] tốt"
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nhà",
              "lerntext": "nhà",
              "de": "Haus, Zuhause"
            },
            {
              "schrift": "phòng",
              "lerntext": "phòng",
              "de": "Zimmer"
            },
            {
              "schrift": "bàn",
              "lerntext": "bàn",
              "de": "Tisch"
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten"
            },
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter"
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "groß"
            },
            {
              "schrift": "đêm",
              "lerntext": "đêm",
              "de": "Nacht"
            },
            {
              "schrift": "vì",
              "lerntext": "vì",
              "de": "weil"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.6"
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
        "task": "Beschreib deine Wohnung und was du anhast.",
        "newFrameWords": [],
        "id": "14.7"
      }
    ]
  },
  {
    "number": 15,
    "title": "Weitere Nomen",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "người Việt",
              "lerntext": "người Việt",
              "de": "Vietnamese"
            },
            {
              "schrift": "đàn ông",
              "lerntext": "đàn ông",
              "de": "Mann"
            },
            {
              "schrift": "phụ nữ",
              "lerntext": "phụ nữ",
              "de": "Frau"
            },
            {
              "schrift": "trẻ con",
              "lerntext": "trẻ con",
              "de": "Kind"
            },
            {
              "schrift": "bạn bè",
              "lerntext": "bạn bè",
              "de": "Freunde"
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "người yêu",
              "lerntext": "người yêu",
              "de": "fester Freund, feste Freundin"
            },
            {
              "schrift": "chồng",
              "lerntext": "chồng",
              "de": "Ehemann"
            },
            {
              "schrift": "vợ",
              "lerntext": "vợ",
              "de": "Ehefrau"
            },
            {
              "schrift": "anh trai",
              "lerntext": "anh trai",
              "de": "älterer Bruder"
            },
            {
              "schrift": "em trai",
              "lerntext": "em trai",
              "de": "jüngerer Bruder"
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chị gái",
              "lerntext": "chị gái",
              "de": "ältere Schwester"
            },
            {
              "schrift": "em gái",
              "lerntext": "em gái",
              "de": "jüngere Schwester"
            },
            {
              "schrift": "tuổi",
              "lerntext": "tuổi",
              "de": "Alter, Jahre alt"
            },
            {
              "schrift": "tháng",
              "lerntext": "tháng",
              "de": "Monat"
            },
            {
              "schrift": "tiếng",
              "lerntext": "tiếng",
              "de": "Stunde (Dauer), Sprache"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sáng",
              "lerntext": "sáng",
              "de": "Morgen"
            },
            {
              "schrift": "trưa",
              "lerntext": "trưa",
              "de": "Mittag"
            },
            {
              "schrift": "chiều",
              "lerntext": "chiều",
              "de": "Nachmittag"
            },
            {
              "schrift": "cuối tuần",
              "lerntext": "cuối tuần",
              "de": "Wochenende"
            },
            {
              "schrift": "chỗ",
              "lerntext": "chỗ",
              "de": "Platz, Ort"
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chợ",
              "lerntext": "chợ",
              "de": "Markt"
            },
            {
              "schrift": "nhà thuốc",
              "lerntext": "nhà thuốc",
              "de": "Apotheke"
            },
            {
              "schrift": "xe máy",
              "lerntext": "xe máy",
              "de": "Motorroller"
            },
            {
              "schrift": "hộ chiếu",
              "lerntext": "hộ chiếu",
              "de": "Pass"
            },
            {
              "schrift": "giá",
              "lerntext": "giá",
              "de": "Preis"
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hóa đơn",
              "lerntext": "hóa đơn",
              "de": "Rechnung"
            },
            {
              "schrift": "thẻ",
              "lerntext": "thẻ",
              "de": "Karte"
            },
            {
              "schrift": "chữ",
              "lerntext": "chữ",
              "de": "Wort, Schriftzeichen"
            },
            {
              "schrift": "câu",
              "lerntext": "câu",
              "de": "Satz"
            },
            {
              "schrift": "câu hỏi",
              "lerntext": "câu hỏi",
              "de": "Frage"
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vấn đề",
              "lerntext": "vấn đề",
              "de": "Problem"
            },
            {
              "schrift": "thứ",
              "lerntext": "thứ",
              "de": "Ding, Sache"
            },
            {
              "schrift": "rượu",
              "lerntext": "rượu",
              "de": "Alkohol, Schnaps"
            },
            {
              "schrift": "cơm",
              "lerntext": "cơm",
              "de": "Reis (gekocht), Mahlzeit"
            },
            {
              "schrift": "phở",
              "lerntext": "phở",
              "de": "Nudelsuppe"
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nước mắm",
              "lerntext": "nước mắm",
              "de": "Fischsauce"
            },
            {
              "schrift": "đồ ăn",
              "lerntext": "đồ ăn",
              "de": "Essen"
            },
            {
              "schrift": "thực đơn",
              "lerntext": "thực đơn",
              "de": "Speisekarte"
            },
            {
              "schrift": "chai",
              "lerntext": "chai",
              "de": "Flasche"
            },
            {
              "schrift": "tóc",
              "lerntext": "tóc",
              "de": "Haare"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "người bệnh",
              "lerntext": "người bệnh",
              "de": "Patient"
            },
            {
              "schrift": "bác sĩ",
              "lerntext": "bác sĩ",
              "de": "Arzt"
            },
            {
              "schrift": "thuốc",
              "lerntext": "thuốc",
              "de": "Medikament"
            },
            {
              "schrift": "số",
              "lerntext": "số",
              "de": "Nummer, Zahl"
            },
            {
              "schrift": "hành lý",
              "lerntext": "hành lý",
              "de": "Gepäck"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bát",
              "lerntext": "bát",
              "de": "Schüssel"
            },
            {
              "schrift": "đũa",
              "lerntext": "đũa",
              "de": "Essstäbchen"
            },
            {
              "schrift": "nhạc",
              "lerntext": "nhạc",
              "de": "Musik"
            },
            {
              "schrift": "phim",
              "lerntext": "phim",
              "de": "Film"
            },
            {
              "schrift": "tiệc",
              "lerntext": "tiệc",
              "de": "Party, Fest"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cuộc sống",
              "lerntext": "cuộc sống",
              "de": "Leben"
            },
            {
              "schrift": "thế giới",
              "lerntext": "thế giới",
              "de": "Welt"
            },
            {
              "schrift": "chó",
              "lerntext": "chó",
              "de": "Hund"
            },
            {
              "schrift": "mèo",
              "lerntext": "mèo",
              "de": "Katze"
            },
            {
              "schrift": "quà",
              "lerntext": "quà",
              "de": "Geschenk"
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tình yêu",
              "lerntext": "tình yêu",
              "de": "Liebe"
            },
            {
              "schrift": "phần",
              "lerntext": "phần",
              "de": "Teil, Portion"
            },
            {
              "schrift": "lý do",
              "lerntext": "lý do",
              "de": "Grund"
            },
            {
              "schrift": "ví dụ",
              "lerntext": "ví dụ",
              "de": "Beispiel"
            },
            {
              "schrift": "ý tưởng",
              "lerntext": "ý tưởng",
              "de": "Idee"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chuyện",
              "lerntext": "chuyện",
              "de": "Geschichte, Angelegenheit"
            },
            {
              "schrift": "ca",
              "lerntext": "ca",
              "de": "Schicht"
            },
            {
              "schrift": "khách",
              "lerntext": "khách",
              "de": "Kunde, Gast"
            },
            {
              "schrift": "lương",
              "lerntext": "lương",
              "de": "Lohn"
            },
            {
              "schrift": "hợp đồng",
              "lerntext": "hợp đồng",
              "de": "Vertrag"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.13"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lửa",
              "lerntext": "lửa",
              "de": "Feuer"
            },
            {
              "schrift": "xe ôm",
              "lerntext": "xe ôm",
              "de": "Motorradtaxi"
            },
            {
              "schrift": "ngã tư",
              "lerntext": "ngã tư",
              "de": "Kreuzung"
            },
            {
              "schrift": "chuyến bay",
              "lerntext": "chuyến bay",
              "de": "Flug"
            },
            {
              "schrift": "hàng xóm",
              "lerntext": "hàng xóm",
              "de": "Nachbar"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.14"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sở thích",
              "lerntext": "sở thích",
              "de": "Hobby"
            },
            {
              "schrift": "quán",
              "lerntext": "quán",
              "de": "Garküche, Lokal"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "15.15"
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "15.16"
      }
    ]
  },
  {
    "number": 16,
    "title": "Weitere Verben",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gọi",
              "lerntext": "gọi",
              "de": "rufen, bestellen"
            },
            {
              "schrift": "mang",
              "lerntext": "mang",
              "de": "bringen, tragen"
            },
            {
              "schrift": "học",
              "lerntext": "học",
              "de": "lernen, studieren"
            },
            {
              "schrift": "dạy",
              "lerntext": "dạy",
              "de": "unterrichten"
            },
            {
              "schrift": "bắt đầu",
              "lerntext": "bắt đầu",
              "de": "anfangen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "16.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "kết thúc",
              "lerntext": "kết thúc",
              "de": "beenden"
            },
            {
              "schrift": "thử",
              "lerntext": "thử",
              "de": "versuchen, probieren"
            },
            {
              "schrift": "hát",
              "lerntext": "hát",
              "de": "singen"
            },
            {
              "schrift": "chạy",
              "lerntext": "chạy",
              "de": "rennen"
            },
            {
              "schrift": "lái",
              "lerntext": "lái",
              "de": "fahren (lenken)"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "16.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "thăm",
              "lerntext": "thăm",
              "de": "besuchen"
            },
            {
              "schrift": "quen",
              "lerntext": "quen",
              "de": "kennenlernen, gewohnt sein"
            },
            {
              "schrift": "cưới",
              "lerntext": "cưới",
              "de": "heiraten"
            },
            {
              "schrift": "xảy ra",
              "lerntext": "xảy ra",
              "de": "geschehen"
            },
            {
              "schrift": "đặt",
              "lerntext": "đặt",
              "de": "bestellen, reservieren"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "16.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "thuê",
              "lerntext": "thuê",
              "de": "mieten"
            },
            {
              "schrift": "ký",
              "lerntext": "ký",
              "de": "unterschreiben"
            },
            {
              "schrift": "nấu",
              "lerntext": "nấu",
              "de": "kochen"
            },
            {
              "schrift": "cảm ơn",
              "lerntext": "cảm ơn",
              "de": "danken"
            },
            {
              "schrift": "xin lỗi",
              "lerntext": "xin lỗi",
              "de": "sich entschuldigen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "16.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chỉ đường",
              "lerntext": "chỉ đường",
              "de": "den Weg zeigen"
            },
            {
              "schrift": "giữ",
              "lerntext": "giữ",
              "de": "halten, behalten"
            },
            {
              "schrift": "dừng",
              "lerntext": "dừng",
              "de": "anhalten"
            },
            {
              "schrift": "mặc",
              "lerntext": "mặc",
              "de": "anziehen (Kleidung)"
            },
            {
              "schrift": "mời",
              "lerntext": "mời",
              "de": "einladen, bitten"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "16.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "đưa",
              "lerntext": "đưa",
              "de": "geben, bringen"
            },
            {
              "schrift": "về nhà",
              "lerntext": "về nhà",
              "de": "nach Hause gehen"
            },
            {
              "schrift": "ra",
              "lerntext": "ra",
              "de": "hinausgehen"
            },
            {
              "schrift": "lên",
              "lerntext": "lên",
              "de": "hinaufgehen, einsteigen"
            },
            {
              "schrift": "xuống",
              "lerntext": "xuống",
              "de": "hinuntergehen, aussteigen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "16.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bị",
              "lerntext": "bị",
              "de": "erleiden (Passiv, negativ)"
            },
            {
              "schrift": "sạc",
              "lerntext": "sạc",
              "de": "aufladen"
            },
            {
              "schrift": "tính tiền",
              "lerntext": "tính tiền",
              "de": "abrechnen"
            },
            {
              "schrift": "đăng ký",
              "lerntext": "đăng ký",
              "de": "sich anmelden"
            },
            {
              "schrift": "khám",
              "lerntext": "khám",
              "de": "untersuchen (Arzt)"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "16.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nghỉ",
              "lerntext": "nghỉ",
              "de": "ausruhen, freihaben"
            },
            {
              "schrift": "sinh",
              "lerntext": "sinh",
              "de": "geboren werden, gebären"
            },
            {
              "schrift": "dọn",
              "lerntext": "dọn",
              "de": "aufräumen"
            },
            {
              "schrift": "chào",
              "lerntext": "chào",
              "de": "grüßen"
            },
            {
              "schrift": "kể",
              "lerntext": "kể",
              "de": "erzählen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "16.8"
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "16.9"
      }
    ]
  },
  {
    "number": 17,
    "title": "Weitere Adjektive",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "già",
              "lerntext": "già",
              "de": "alt (Person)"
            },
            {
              "schrift": "dễ",
              "lerntext": "dễ",
              "de": "einfach"
            },
            {
              "schrift": "miễn phí",
              "lerntext": "miễn phí",
              "de": "kostenlos"
            },
            {
              "schrift": "đầy",
              "lerntext": "đầy",
              "de": "voll"
            },
            {
              "schrift": "trống",
              "lerntext": "trống",
              "de": "leer, frei"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "17.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tử tế",
              "lerntext": "tử tế",
              "de": "freundlich"
            },
            {
              "schrift": "mạnh",
              "lerntext": "mạnh",
              "de": "stark"
            },
            {
              "schrift": "tươi",
              "lerntext": "tươi",
              "de": "frisch"
            },
            {
              "schrift": "mặn",
              "lerntext": "mặn",
              "de": "salzig"
            },
            {
              "schrift": "cay",
              "lerntext": "cay",
              "de": "scharf"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "17.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ngon",
              "lerntext": "ngon",
              "de": "lecker"
            },
            {
              "schrift": "mới mẻ",
              "lerntext": "mới mẻ",
              "de": "neu, frisch"
            },
            {
              "schrift": "an toàn",
              "lerntext": "an toàn",
              "de": "sicher"
            },
            {
              "schrift": "ồn",
              "lerntext": "ồn",
              "de": "laut"
            },
            {
              "schrift": "yên tĩnh",
              "lerntext": "yên tĩnh",
              "de": "ruhig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "17.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rảnh",
              "lerntext": "rảnh",
              "de": "frei (Zeit)"
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "satt"
            },
            {
              "schrift": "ngầu",
              "lerntext": "ngầu",
              "de": "cool"
            },
            {
              "schrift": "thật thà",
              "lerntext": "thật thà",
              "de": "ehrlich"
            },
            {
              "schrift": "xinh",
              "lerntext": "xinh",
              "de": "hübsch"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "17.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lớn",
              "lerntext": "lớn",
              "de": "groß, erwachsen"
            },
            {
              "schrift": "nóng",
              "lerntext": "nóng",
              "de": "heiß"
            },
            {
              "schrift": "bận",
              "lerntext": "bận",
              "de": "beschäftigt"
            },
            {
              "schrift": "vui",
              "lerntext": "vui",
              "de": "fröhlich"
            },
            {
              "schrift": "tiếp theo",
              "lerntext": "tiếp theo",
              "de": "nächster"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "17.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "giống",
              "lerntext": "giống",
              "de": "gleich, ähnlich"
            },
            {
              "schrift": "bình thường",
              "lerntext": "bình thường",
              "de": "normal, üblich"
            },
            {
              "schrift": "đông",
              "lerntext": "đông",
              "de": "voll, überfüllt"
            },
            {
              "schrift": "giỏi",
              "lerntext": "giỏi",
              "de": "tüchtig, gut in"
            },
            {
              "schrift": "trắng trẻo",
              "lerntext": "trắng trẻo",
              "de": "hellhäutig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "17.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dễ thương",
              "lerntext": "dễ thương",
              "de": "süß, niedlich"
            }
          ]
        ],
        "newCount": 1,
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "17.8"
      }
    ]
  },
  {
    "number": 18,
    "title": "Weitere Pronomen",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "cái này cho [Slot]",
          "lerntext": "cái này cho [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ông",
              "lerntext": "ông",
              "de": "du (alter Mann), Herr"
            },
            {
              "schrift": "cô",
              "lerntext": "cô",
              "de": "du (Frau mittleren Alters), Lehrerin"
            },
            {
              "schrift": "chú",
              "lerntext": "chú",
              "de": "du (Mann mittleren Alters)"
            },
            {
              "schrift": "họ",
              "lerntext": "họ",
              "de": "sie (Mehrzahl)"
            },
            {
              "schrift": "chúng tôi",
              "lerntext": "chúng tôi",
              "de": "wir (ohne dich)"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "18.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "cái này cho [Slot]",
          "lerntext": "cái này cho [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chúng ta",
              "lerntext": "chúng ta",
              "de": "wir (mit dir)"
            },
            {
              "schrift": "kia",
              "lerntext": "kia",
              "de": "jener"
            },
            {
              "schrift": "đó",
              "lerntext": "đó",
              "de": "das, jenes"
            },
            {
              "schrift": "mọi người",
              "lerntext": "mọi người",
              "de": "alle Leute"
            },
            {
              "schrift": "ai đó",
              "lerntext": "ai đó",
              "de": "irgendjemand"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "18.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "cái này cho [Slot]",
          "lerntext": "cái này cho [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "không ai",
              "lerntext": "không ai",
              "de": "niemand"
            },
            {
              "schrift": "khác",
              "lerntext": "khác",
              "de": "anderer"
            },
            {
              "schrift": "mỗi",
              "lerntext": "mỗi",
              "de": "jeder"
            },
            {
              "schrift": "cả hai",
              "lerntext": "cả hai",
              "de": "beide"
            },
            {
              "schrift": "nhau",
              "lerntext": "nhau",
              "de": "einander"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "18.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "cái này cho [Slot]",
          "lerntext": "cái này cho [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chính mình",
              "lerntext": "chính mình",
              "de": "selbst"
            },
            {
              "schrift": "chị",
              "lerntext": "chị",
              "de": "du/ich (ältere Frau)"
            },
            {
              "schrift": "em",
              "lerntext": "em",
              "de": "du/ich (jüngere Person)"
            },
            {
              "schrift": "cháu",
              "lerntext": "cháu",
              "de": "ich (zu viel Älteren), Enkel"
            },
            {
              "schrift": "anh",
              "lerntext": "anh",
              "de": "du/ich (älterer Mann)"
            }
          ]
        ],
        "newCount": 5,
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "18.5"
      }
    ]
  },
  {
    "number": 19,
    "title": "Weitere Adverbien",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi làm [Slot]",
          "lerntext": "tôi làm [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vâng",
              "lerntext": "vâng",
              "de": "ja (höflich, Norden)"
            },
            {
              "schrift": "dạ",
              "lerntext": "dạ",
              "de": "ja (höflich, Süden)"
            },
            {
              "schrift": "một chút",
              "lerntext": "một chút",
              "de": "ein bisschen"
            },
            {
              "schrift": "hiếm khi",
              "lerntext": "hiếm khi",
              "de": "selten"
            },
            {
              "schrift": "còn",
              "lerntext": "còn",
              "de": "noch"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "19.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi làm [Slot]",
          "lerntext": "tôi làm [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "đã",
              "lerntext": "đã",
              "de": "schon (Vergangenheit)"
            },
            {
              "schrift": "đang",
              "lerntext": "đang",
              "de": "gerade (Verlaufsform)"
            },
            {
              "schrift": "thật",
              "lerntext": "thật",
              "de": "wirklich"
            },
            {
              "schrift": "vậy",
              "lerntext": "vậy",
              "de": "so"
            },
            {
              "schrift": "đủ",
              "lerntext": "đủ",
              "de": "genug"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "19.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi làm [Slot]",
          "lerntext": "tôi làm [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gần như",
              "lerntext": "gần như",
              "de": "fast"
            },
            {
              "schrift": "nữa",
              "lerntext": "nữa",
              "de": "noch mehr"
            },
            {
              "schrift": "cuối cùng",
              "lerntext": "cuối cùng",
              "de": "endlich"
            },
            {
              "schrift": "tiếc là",
              "lerntext": "tiếc là",
              "de": "leider"
            },
            {
              "schrift": "thẳng",
              "lerntext": "thẳng",
              "de": "geradeaus"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "19.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi làm [Slot]",
          "lerntext": "tôi làm [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hết",
              "lerntext": "hết",
              "de": "aufgebraucht, ganz"
            },
            {
              "schrift": "thôi",
              "lerntext": "thôi",
              "de": "nur, genug"
            },
            {
              "schrift": "nhé",
              "lerntext": "nhé",
              "de": "ja? (freundliche Partikel)"
            },
            {
              "schrift": "muộn",
              "lerntext": "muộn",
              "de": "spät"
            },
            {
              "schrift": "từ từ",
              "lerntext": "từ từ",
              "de": "langsam, gemächlich"
            }
          ]
        ],
        "newCount": 5,
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "19.5"
      }
    ]
  },
  {
    "number": 20,
    "title": "Weitere Zahlen",
    "lessons": [
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
              "schrift": "ba mươi",
              "lerntext": "ba mươi",
              "de": "dreissig"
            },
            {
              "schrift": "triệu",
              "lerntext": "triệu",
              "de": "Million"
            },
            {
              "schrift": "thứ nhất",
              "lerntext": "thứ nhất",
              "de": "erster"
            },
            {
              "schrift": "thứ hai",
              "lerntext": "thứ hai",
              "de": "zweiter, Montag"
            },
            {
              "schrift": "thứ ba",
              "lerntext": "thứ ba",
              "de": "dritter, Dienstag"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "20.1"
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
              "schrift": "cuối",
              "lerntext": "cuối",
              "de": "letzter"
            },
            {
              "schrift": "nửa",
              "lerntext": "nửa",
              "de": "halb"
            },
            {
              "schrift": "đôi",
              "lerntext": "đôi",
              "de": "Paar"
            },
            {
              "schrift": "tờ",
              "lerntext": "tờ",
              "de": "Stück (Blätter, Papiere)"
            },
            {
              "schrift": "người",
              "lerntext": "người",
              "de": "Person (Zählwort), Mensch"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "20.2"
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
              "schrift": "quyển",
              "lerntext": "quyển",
              "de": "Stück (Bücher)"
            },
            {
              "schrift": "chiếc",
              "lerntext": "chiếc",
              "de": "Stück (Fahrzeuge, Einzelstücke)"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "20.3"
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "20.4"
      }
    ]
  },
  {
    "number": 21,
    "title": "Weitere Präpositionen",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó ở [Slot] nhà",
          "lerntext": "nó ở [Slot] nhà"
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "trong",
              "lerntext": "trong",
              "de": "in, innerhalb"
            },
            {
              "schrift": "từ",
              "lerntext": "từ",
              "de": "von, aus"
            },
            {
              "schrift": "quanh",
              "lerntext": "quanh",
              "de": "um herum"
            },
            {
              "schrift": "gần",
              "lerntext": "gần",
              "de": "nahe"
            },
            {
              "schrift": "xa",
              "lerntext": "xa",
              "de": "weit"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "21.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó ở [Slot] nhà",
          "lerntext": "nó ở [Slot] nhà"
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cùng",
              "lerntext": "cùng",
              "de": "zusammen mit"
            },
            {
              "schrift": "thay vì",
              "lerntext": "thay vì",
              "de": "anstatt"
            },
            {
              "schrift": "ngoài",
              "lerntext": "ngoài",
              "de": "außerhalb, draußen"
            },
            {
              "schrift": "theo",
              "lerntext": "theo",
              "de": "gemäss, folgen"
            },
            {
              "schrift": "đối với",
              "lerntext": "đối với",
              "de": "für, gegenüber"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "21.2"
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "21.3"
      }
    ]
  },
  {
    "number": 22,
    "title": "Weitere Bindewörter",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đến [Slot] tôi có thể",
          "lerntext": "tôi đến [Slot] tôi có thể"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nếu",
              "lerntext": "nếu",
              "de": "wenn, falls"
            },
            {
              "schrift": "mà",
              "lerntext": "mà",
              "de": "aber, welcher"
            },
            {
              "schrift": "khi",
              "lerntext": "khi",
              "de": "als, wenn"
            },
            {
              "schrift": "hơn",
              "lerntext": "hơn",
              "de": "als (Vergleich), mehr"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "22.1"
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "22.2"
      }
    ]
  },
  {
    "number": 23,
    "title": "Weitere Fragewörter",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] vậy?",
          "lerntext": "[Slot] vậy?"
        },
        "frameDe": "[Slot] ist es?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gì",
              "lerntext": "gì",
              "de": "was"
            },
            {
              "schrift": "chưa",
              "lerntext": "chưa",
              "de": "schon?, noch nicht"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "23.1"
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "23.2"
      }
    ]
  }
];
