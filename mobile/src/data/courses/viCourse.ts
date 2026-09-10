// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_vi.py
// Neu bauen: python bauplan.py vi --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 37 Module, 274 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const VIETNAMESE_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó rất [Slot]",
          "lerntext": "tôi / bạn / nó rất [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er bin [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er bin [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
            }
          ]
        ],
        "newCount": 2,
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
        "frameDe": "ich / ihr / er sind [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          },
          {
            "schrift": "các bạn",
            "lerntext": "các bạn",
            "de": "ihr"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "de": "du (Gleichaltrige)"
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
        "frameDe": "ich / ihr / er sind [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          },
          {
            "schrift": "các bạn",
            "lerntext": "các bạn",
            "de": "ihr"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau)"
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern)"
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
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "de": "gesund"
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
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó rất [Slot]",
          "lerntext": "tôi / bạn / nó rất [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er bin [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mệt",
              "lerntext": "mệt",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "buồn",
              "lerntext": "buồn",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "đói",
              "lerntext": "đói",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "khát",
              "lerntext": "khát",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "sẵn sàng",
              "lerntext": "sẵn sàng",
              "de": "bereit",
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
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "buồn cười",
              "lerntext": "buồn cười",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "chán",
              "lerntext": "chán",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)",
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
          "schrift": "tôi / bạn / nó rất [Slot]",
          "lerntext": "tôi / bạn / nó rất [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er bin [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mệt",
              "lerntext": "mệt",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "buồn",
              "lerntext": "buồn",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "đói",
              "lerntext": "đói",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "khát",
              "lerntext": "khát",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "sẵn sàng",
              "lerntext": "sẵn sàng",
              "de": "bereit",
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
          "schrift": "nó rất [Slot]",
          "lerntext": "nó rất [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "buồn cười",
              "lerntext": "buồn cười",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "chán",
              "lerntext": "chán",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)",
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche"
            },
            {
              "schrift": "cửa",
              "lerntext": "cửa",
              "de": "Tür"
            },
            {
              "schrift": "mẹ",
              "lerntext": "mẹ",
              "de": "Mutter"
            },
            {
              "schrift": "công an",
              "lerntext": "công an",
              "de": "Polizei",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl"
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel"
            },
            {
              "schrift": "bố",
              "lerntext": "bố",
              "de": "Vater"
            },
            {
              "schrift": "sinh viên",
              "lerntext": "sinh viên",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "đồng nghiệp",
              "lerntext": "đồng nghiệp",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "giáo viên",
              "lerntext": "giáo viên",
              "de": "Lehrer",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "2.2"
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
            "de": "er"
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
              "schrift": "giường",
              "lerntext": "giường",
              "de": "Bett"
            },
            {
              "schrift": "điện thoại",
              "lerntext": "điện thoại",
              "de": "Telefon"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "2.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ở đây có [Slot]",
          "lerntext": "ở đây có [Slot]"
        },
        "frameDe": "Hier ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche"
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "mẹ",
              "lerntext": "mẹ",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "cửa",
              "lerntext": "cửa",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "công an",
              "lerntext": "công an",
              "de": "Polizei",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in"
          },
          {
            "schrift": "đây",
            "lerntext": "đây",
            "de": "hier"
          },
          {
            "schrift": "có",
            "lerntext": "có",
            "de": "ja"
          }
        ],
        "id": "2.4"
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bàn",
              "lerntext": "bàn",
              "de": "Tisch"
            },
            {
              "schrift": "bố",
              "lerntext": "bố",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "sinh viên",
              "lerntext": "sinh viên",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "đồng nghiệp",
              "lerntext": "đồng nghiệp",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "giáo viên",
              "lerntext": "giáo viên",
              "de": "Lehrer",
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
          "schrift": "ở đây có [Slot]",
          "lerntext": "ở đây có [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nhà",
              "lerntext": "nhà",
              "de": "Haus"
            },
            {
              "schrift": "phòng",
              "lerntext": "phòng",
              "de": "Zimmer"
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster"
            },
            {
              "schrift": "giấy",
              "lerntext": "giấy",
              "de": "Papier"
            },
            {
              "schrift": "ly",
              "lerntext": "ly",
              "de": "Glas"
            },
            {
              "schrift": "sách",
              "lerntext": "sách",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "điện thoại",
              "lerntext": "điện thoại",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "giường",
              "lerntext": "giường",
              "de": "Bett",
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
          "schrift": "ở đây có [Slot]",
          "lerntext": "ở đây có [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel"
            },
            {
              "schrift": "nhà",
              "lerntext": "nhà",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "phòng",
              "lerntext": "phòng",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "giấy",
              "lerntext": "giấy",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "ly",
              "lerntext": "ly",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "sách",
              "lerntext": "sách",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "điện thoại",
              "lerntext": "điện thoại",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "giường",
              "lerntext": "giường",
              "de": "Bett",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó / mình có [Slot]",
          "lerntext": "tôi / bạn / nó / mình có [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er / ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
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
              "schrift": "tay",
              "lerntext": "tay",
              "de": "Hand"
            },
            {
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "mẹ",
              "lerntext": "mẹ",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "cửa",
              "lerntext": "cửa",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "công an",
              "lerntext": "công an",
              "de": "Polizei",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "có",
            "lerntext": "có",
            "de": "ja"
          }
        ],
        "id": "2.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó / mình có [Slot]",
          "lerntext": "tôi / bạn / nó / mình có [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er / ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "con trai",
              "lerntext": "con trai",
              "de": "Junge"
            },
            {
              "schrift": "miệng",
              "lerntext": "miệng",
              "de": "Mund"
            },
            {
              "schrift": "bàn",
              "lerntext": "bàn",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "bố",
              "lerntext": "bố",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "sinh viên",
              "lerntext": "sinh viên",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "đồng nghiệp",
              "lerntext": "đồng nghiệp",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "giáo viên",
              "lerntext": "giáo viên",
              "de": "Lehrer",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó / mình có [Slot]",
          "lerntext": "tôi / bạn / nó / mình có [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er / ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen"
            },
            {
              "schrift": "ô tô",
              "lerntext": "ô tô",
              "de": "Auto"
            },
            {
              "schrift": "chân",
              "lerntext": "chân",
              "de": "Bein"
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "nhà",
              "lerntext": "nhà",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "phòng",
              "lerntext": "phòng",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "giấy",
              "lerntext": "giấy",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "ly",
              "lerntext": "ly",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "sách",
              "lerntext": "sách",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "điện thoại",
              "lerntext": "điện thoại",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "giường",
              "lerntext": "giường",
              "de": "Bett",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "2.10"
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
              "schrift": "đồng nghiệp",
              "lerntext": "đồng nghiệp",
              "de": "Kollege"
            },
            {
              "schrift": "ô tô",
              "lerntext": "ô tô",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "con trai",
              "lerntext": "con trai",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "tay",
              "lerntext": "tay",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "chân",
              "lerntext": "chân",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "miệng",
              "lerntext": "miệng",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "gia đình",
              "lerntext": "gia đình",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "bàn",
              "lerntext": "bàn",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel",
              "wieder": true
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
        "id": "2.11"
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
              "de": "alles"
            },
            {
              "schrift": "các bạn",
              "lerntext": "các bạn",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern)",
              "wieder": true
            },
            {
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau)",
              "wieder": true
            },
            {
              "schrift": "mình",
              "lerntext": "mình",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "tôi",
              "lerntext": "tôi",
              "de": "ich (neutral)",
              "wieder": true
            },
            {
              "schrift": "bạn",
              "lerntext": "bạn",
              "de": "du (Gleichaltrige)",
              "wieder": true
            },
            {
              "schrift": "nó",
              "lerntext": "nó",
              "de": "er",
              "wieder": true
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
        "id": "2.12"
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
              "schrift": "các bạn",
              "lerntext": "các bạn",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "tất cả",
              "lerntext": "tất cả",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern)",
              "wieder": true
            },
            {
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau)",
              "wieder": true
            },
            {
              "schrift": "mình",
              "lerntext": "mình",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "tôi",
              "lerntext": "tôi",
              "de": "ich (neutral)",
              "wieder": true
            },
            {
              "schrift": "bạn",
              "lerntext": "bạn",
              "de": "du (Gleichaltrige)",
              "wieder": true
            },
            {
              "schrift": "của",
              "lerntext": "của",
              "de": "von (Besitz)",
              "wieder": true
            },
            {
              "schrift": "nó",
              "lerntext": "nó",
              "de": "er",
              "wieder": true
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
            "de": "in"
          }
        ],
        "id": "2.13"
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
              "schrift": "ô tô",
              "lerntext": "ô tô",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "con trai",
              "lerntext": "con trai",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "tay",
              "lerntext": "tay",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "chân",
              "lerntext": "chân",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "miệng",
              "lerntext": "miệng",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "gia đình",
              "lerntext": "gia đình",
              "de": "Familie",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.14"
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
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "các bạn",
              "lerntext": "các bạn",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "tất cả",
              "lerntext": "tất cả",
              "de": "alles",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.15"
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
        "id": "2.16"
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
          "schrift": "tôi / bạn / mình muốn [Slot]",
          "lerntext": "tôi / bạn / mình muốn [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser"
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
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "bàn",
              "lerntext": "bàn",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "ô tô",
              "lerntext": "ô tô",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "con trai",
              "lerntext": "con trai",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "phòng",
              "lerntext": "phòng",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "giấy",
              "lerntext": "giấy",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "ly",
              "lerntext": "ly",
              "de": "Glas",
              "wieder": true
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) / ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot"
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch"
            },
            {
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße"
            },
            {
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "cà phê",
              "lerntext": "cà phê",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "trà",
              "lerntext": "trà",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "bia",
              "lerntext": "bia",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "tay",
              "lerntext": "tay",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "chân",
              "lerntext": "chân",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "miệng",
              "lerntext": "miệng",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "gia đình",
              "lerntext": "gia đình",
              "de": "Familie",
              "wieder": true
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er brauche [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "cà phê",
              "lerntext": "cà phê",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "trà",
              "lerntext": "trà",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "bia",
              "lerntext": "bia",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "cửa",
              "lerntext": "cửa",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche",
              "wieder": true
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
        "frameDe": "ich (neutral) möchte ein [Slot], bitte.",
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
              "de": "Eis"
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst"
            },
            {
              "schrift": "muối",
              "lerntext": "muối",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "tiền",
              "lerntext": "tiền",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "bia",
              "lerntext": "bia",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "ô tô",
              "lerntext": "ô tô",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "nhà",
              "lerntext": "nhà",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "phòng",
              "lerntext": "phòng",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "điện thoại",
              "lerntext": "điện thoại",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel",
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
          "schrift": "tôi / mình ăn [Slot]",
          "lerntext": "tôi / mình ăn [Slot]"
        },
        "frameDe": "ich (neutral) / ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
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
              "de": "Gemüse"
            },
            {
              "schrift": "đá",
              "lerntext": "đá",
              "de": "Eis",
              "wieder": true
            },
            {
              "schrift": "thời gian",
              "lerntext": "thời gian",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "bữa sáng",
              "lerntext": "bữa sáng",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "bữa trưa",
              "lerntext": "bữa trưa",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "bữa tối",
              "lerntext": "bữa tối",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "muối",
              "lerntext": "muối",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "tiền",
              "lerntext": "tiền",
              "de": "Geld",
              "wieder": true
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
        "kind": "frame",
        "frame": {
          "schrift": "tôi / mình ăn [Slot]",
          "lerntext": "tôi / mình ăn [Slot]"
        },
        "frameDe": "ich (neutral) / ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "cá",
              "lerntext": "cá",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "rau",
              "lerntext": "rau",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "đá",
              "lerntext": "đá",
              "de": "Eis",
              "wieder": true
            },
            {
              "schrift": "thời gian",
              "lerntext": "thời gian",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "bữa sáng",
              "lerntext": "bữa sáng",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "bữa trưa",
              "lerntext": "bữa trưa",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "bữa tối",
              "lerntext": "bữa tối",
              "de": "Abendessen",
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
          "schrift": "tôi / mình ăn [Slot]",
          "lerntext": "tôi / mình ăn [Slot]"
        },
        "frameDe": "ich (neutral) / ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "cá",
              "lerntext": "cá",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "rau",
              "lerntext": "rau",
              "de": "Gemüse",
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
        "id": "3.8"
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
          "schrift": "tôi / bạn / nó không [Slot]",
          "lerntext": "tôi / bạn / nó không [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "schrift": "rất",
              "lerntext": "rất",
              "de": "sehr",
              "wieder": true
            },
            {
              "schrift": "đây",
              "lerntext": "đây",
              "de": "hier",
              "wieder": true
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
            "de": "ja"
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
        "frameDe": "Bist du (Gleichaltrige) / er / ihr [Slot]?",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "de": "gerade erst"
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
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "khát",
              "lerntext": "khát",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "mệt",
              "lerntext": "mệt",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "chán",
              "lerntext": "chán",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "sẵn sàng",
              "lerntext": "sẵn sàng",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "buồn cười",
              "lerntext": "buồn cười",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
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
            "de": "etwas"
          },
          {
            "schrift": "ai",
            "lerntext": "ai",
            "de": "wer"
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
              "schrift": "tất cả",
              "lerntext": "tất cả",
              "de": "alles"
            },
            {
              "schrift": "không",
              "lerntext": "không",
              "de": "nicht (Fragepartikel)",
              "wieder": true
            },
            {
              "schrift": "này",
              "lerntext": "này",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern)",
              "wieder": true
            },
            {
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau)",
              "wieder": true
            },
            {
              "schrift": "các bạn",
              "lerntext": "các bạn",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "mình",
              "lerntext": "mình",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "của",
              "lerntext": "của",
              "de": "von (Besitz)",
              "wieder": true
            },
            {
              "schrift": "tôi",
              "lerntext": "tôi",
              "de": "ich (neutral)",
              "wieder": true
            },
            {
              "schrift": "bạn",
              "lerntext": "bạn",
              "de": "du (Gleichaltrige)",
              "wieder": true
            },
            {
              "schrift": "nó",
              "lerntext": "nó",
              "de": "er",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "cái gì",
            "lerntext": "cái gì",
            "de": "etwas"
          },
          {
            "schrift": "ai",
            "lerntext": "ai",
            "de": "wer"
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
        "kind": "frame",
        "frame": {
          "schrift": "bạn [Slot] không?",
          "lerntext": "bạn [Slot] không?"
        },
        "frameDe": "Bist du (Gleichaltrige) / er / ihr [Slot]?",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "schrift": "mới",
              "lerntext": "mới",
              "de": "gerade erst",
              "wieder": true
            },
            {
              "schrift": "dở",
              "lerntext": "dở",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "quan trọng",
              "lerntext": "quan trọng",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "chắc chắn",
              "lerntext": "chắc chắn",
              "de": "sicher",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "4.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "bạn [Slot] không?",
          "lerntext": "bạn [Slot] không?"
        },
        "frameDe": "Bist du (Gleichaltrige) / er / ihr [Slot]?",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "schrift": "mới",
              "lerntext": "mới",
              "de": "gerade erst",
              "wieder": true
            },
            {
              "schrift": "dở",
              "lerntext": "dở",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "quan trọng",
              "lerntext": "quan trọng",
              "de": "wichtig",
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
        "id": "4.6"
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
          "schrift": "[Slot] ở đâu?",
          "lerntext": "[Slot] ở đâu?"
        },
        "frameDe": "Wo gibt es eine [Slot]?",
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
              "schrift": "nhà vệ sinh",
              "lerntext": "nhà vệ sinh",
              "de": "Toilette"
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule"
            },
            {
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße"
            },
            {
              "schrift": "thời gian",
              "lerntext": "thời gian",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "công an",
              "lerntext": "công an",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "cửa",
              "lerntext": "cửa",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "tay",
              "lerntext": "tay",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "gia đình",
              "lerntext": "gia đình",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "mẹ",
              "lerntext": "mẹ",
              "de": "Mutter",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
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
            "de": "in"
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
              "schrift": "cửa hàng",
              "lerntext": "cửa hàng",
              "de": "Laden"
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
              "schrift": "cá",
              "lerntext": "cá",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "cà phê",
              "lerntext": "cà phê",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "trà",
              "lerntext": "trà",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "sinh viên",
              "lerntext": "sinh viên",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "miệng",
              "lerntext": "miệng",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "bàn",
              "lerntext": "bàn",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "con trai",
              "lerntext": "con trai",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "giáo viên",
              "lerntext": "giáo viên",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "5.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] ở đâu?",
          "lerntext": "[Slot] ở đâu?"
        },
        "frameDe": "Wo gibt es ein [Slot]?",
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
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant"
            },
            {
              "schrift": "bữa trưa",
              "lerntext": "bữa trưa",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "đá",
              "lerntext": "đá",
              "de": "Eis",
              "wieder": true
            },
            {
              "schrift": "bữa sáng",
              "lerntext": "bữa sáng",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "rau",
              "lerntext": "rau",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "tiền",
              "lerntext": "tiền",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "muối",
              "lerntext": "muối",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "bữa tối",
              "lerntext": "bữa tối",
              "de": "Abendessen",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "5.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ở đây có [Slot] không?",
          "lerntext": "ở đây có [Slot] không?"
        },
        "frameDe": "Gibt es hier eine [Slot]?",
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
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität"
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "nhà vệ sinh",
              "lerntext": "nhà vệ sinh",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "thời gian",
              "lerntext": "thời gian",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "công an",
              "lerntext": "công an",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "cửa",
              "lerntext": "cửa",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "tay",
              "lerntext": "tay",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "gia đình",
              "lerntext": "gia đình",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "bếp",
              "lerntext": "bếp",
              "de": "Küche",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in"
          }
        ],
        "id": "5.4"
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
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "bữa trưa",
              "lerntext": "bữa trưa",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "đá",
              "lerntext": "đá",
              "de": "Eis",
              "wieder": true
            },
            {
              "schrift": "bữa sáng",
              "lerntext": "bữa sáng",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "rau",
              "lerntext": "rau",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "ly",
              "lerntext": "ly",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "tiền",
              "lerntext": "tiền",
              "de": "Geld",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "5.5"
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
              "schrift": "sân bay",
              "lerntext": "sân bay",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "cửa hàng",
              "lerntext": "cửa hàng",
              "de": "Laden",
              "wieder": true
            },
            {
              "schrift": "bệnh viện",
              "lerntext": "bệnh viện",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "ga tàu",
              "lerntext": "ga tàu",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "nhà vệ sinh",
              "lerntext": "nhà vệ sinh",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "giường",
              "lerntext": "giường",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "giấy",
              "lerntext": "giấy",
              "de": "Papier",
              "wieder": true
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
            "de": "in"
          }
        ],
        "id": "5.6"
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
            "de": "in"
          },
          {
            "schrift": "trên",
            "lerntext": "trên",
            "de": "auf"
          },
          {
            "schrift": "quá",
            "lerntext": "quá",
            "de": "zu"
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
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen"
            },
            {
              "schrift": "trước",
              "lerntext": "trước",
              "de": "vor"
            },
            {
              "schrift": "bên cạnh",
              "lerntext": "bên cạnh",
              "de": "neben"
            },
            {
              "schrift": "qua",
              "lerntext": "qua",
              "de": "durch"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in"
          },
          {
            "schrift": "trên",
            "lerntext": "trên",
            "de": "auf"
          },
          {
            "schrift": "quá",
            "lerntext": "quá",
            "de": "zu"
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
            "de": "auf"
          },
          {
            "schrift": "của",
            "lerntext": "của",
            "de": "von (Besitz)"
          },
          {
            "schrift": "sau",
            "lerntext": "sau",
            "de": "nach"
          }
        ],
        "id": "5.7"
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
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "cầu",
              "lerntext": "cầu",
              "de": "Brücke",
              "wieder": true
            },
            {
              "schrift": "rừng",
              "lerntext": "rừng",
              "de": "Wald",
              "wieder": true
            },
            {
              "schrift": "sân bay",
              "lerntext": "sân bay",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "cửa hàng",
              "lerntext": "cửa hàng",
              "de": "Laden",
              "wieder": true
            },
            {
              "schrift": "bệnh viện",
              "lerntext": "bệnh viện",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "ga tàu",
              "lerntext": "ga tàu",
              "de": "Bahnhof",
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
          "schrift": "nó ở [Slot] nhà",
          "lerntext": "nó ở [Slot] nhà"
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "ở",
            "lerntext": "ở",
            "de": "in"
          },
          {
            "schrift": "trên",
            "lerntext": "trên",
            "de": "auf"
          },
          {
            "schrift": "quá",
            "lerntext": "quá",
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "trước",
              "lerntext": "trước",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "bên cạnh",
              "lerntext": "bên cạnh",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "qua",
              "lerntext": "qua",
              "de": "durch",
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
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "cầu",
              "lerntext": "cầu",
              "de": "Brücke",
              "wieder": true
            },
            {
              "schrift": "rừng",
              "lerntext": "rừng",
              "de": "Wald",
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
            "de": "in"
          },
          {
            "schrift": "trên",
            "lerntext": "trên",
            "de": "auf"
          },
          {
            "schrift": "quá",
            "lerntext": "quá",
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "trước",
              "lerntext": "trước",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "bên cạnh",
              "lerntext": "bên cạnh",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "qua",
              "lerntext": "qua",
              "de": "durch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "5.11"
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
        "id": "5.12"
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
              "de": "fünf"
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
        "frameDe": "Wie viel kostet eine [Slot]?",
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
              "de": "Fahrkarte"
            },
            {
              "schrift": "bản đồ",
              "lerntext": "bản đồ",
              "de": "Landkarte"
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "nhà vệ sinh",
              "lerntext": "nhà vệ sinh",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "cầu",
              "lerntext": "cầu",
              "de": "Brücke",
              "wieder": true
            },
            {
              "schrift": "thành phố",
              "lerntext": "thành phố",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "thời gian",
              "lerntext": "thời gian",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "công an",
              "lerntext": "công an",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "cửa",
              "lerntext": "cửa",
              "de": "Tür",
              "wieder": true
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
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "quan trọng",
              "lerntext": "quan trọng",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "đói",
              "lerntext": "đói",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "buồn",
              "lerntext": "buồn",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "khát",
              "lerntext": "khát",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "mệt",
              "lerntext": "mệt",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "chán",
              "lerntext": "chán",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "cho",
            "lerntext": "cho",
            "de": "für"
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
              "de": "hoch"
            },
            {
              "schrift": "thấp",
              "lerntext": "thấp",
              "de": "niedrig"
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
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "rẻ",
              "lerntext": "rẻ",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "nhỏ",
              "lerntext": "nhỏ",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "sẵn sàng",
              "lerntext": "sẵn sàng",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "buồn cười",
              "lerntext": "buồn cười",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "6.6"
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
              "schrift": "không (số)",
              "lerntext": "không (số)",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "một",
              "lerntext": "một",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "hai",
              "lerntext": "hai",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "ba",
              "lerntext": "ba",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "bốn",
              "lerntext": "bốn",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "năm",
              "lerntext": "năm",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "sáu",
              "lerntext": "sáu",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "bảy",
              "lerntext": "bảy",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "tám",
              "lerntext": "tám",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "chín",
              "lerntext": "chín",
              "de": "neun",
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
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mười",
              "lerntext": "mười",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "mười một",
              "lerntext": "mười một",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "mười hai",
              "lerntext": "mười hai",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "mười ba",
              "lerntext": "mười ba",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "mười bốn",
              "lerntext": "mười bốn",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "mười lăm",
              "lerntext": "mười lăm",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "mười sáu",
              "lerntext": "mười sáu",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "mười bảy",
              "lerntext": "mười bảy",
              "de": "siebzehn",
              "wieder": true
            },
            {
              "schrift": "mười tám",
              "lerntext": "mười tám",
              "de": "achtzehn",
              "wieder": true
            },
            {
              "schrift": "mười chín",
              "lerntext": "mười chín",
              "de": "neunzehn",
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
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hai mươi",
              "lerntext": "hai mươi",
              "de": "zwanzig",
              "wieder": true
            },
            {
              "schrift": "bốn mươi",
              "lerntext": "bốn mươi",
              "de": "vierzig",
              "wieder": true
            },
            {
              "schrift": "năm mươi",
              "lerntext": "năm mươi",
              "de": "fünfzig",
              "wieder": true
            },
            {
              "schrift": "sáu mươi",
              "lerntext": "sáu mươi",
              "de": "sechzig",
              "wieder": true
            },
            {
              "schrift": "bảy mươi",
              "lerntext": "bảy mươi",
              "de": "siebzig",
              "wieder": true
            },
            {
              "schrift": "tám mươi",
              "lerntext": "tám mươi",
              "de": "achtzig",
              "wieder": true
            },
            {
              "schrift": "chín mươi",
              "lerntext": "chín mươi",
              "de": "neunzig",
              "wieder": true
            },
            {
              "schrift": "một trăm",
              "lerntext": "một trăm",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "một nghìn",
              "lerntext": "một nghìn",
              "de": "tausend",
              "wieder": true
            },
            {
              "schrift": "không (số)",
              "lerntext": "không (số)",
              "de": "null",
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
              "schrift": "một",
              "lerntext": "một",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "hai",
              "lerntext": "hai",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "ba",
              "lerntext": "ba",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "bốn",
              "lerntext": "bốn",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "năm",
              "lerntext": "năm",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "sáu",
              "lerntext": "sáu",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "bảy",
              "lerntext": "bảy",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "tám",
              "lerntext": "tám",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "chín",
              "lerntext": "chín",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "mười",
              "lerntext": "mười",
              "de": "zehn",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.10"
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
        "id": "6.11"
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
          "schrift": "tôi / bạn / mình / nó có thể [Slot]",
          "lerntext": "tôi / bạn / mình / nó có thể [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / ich / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen"
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen"
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
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "muốn",
              "lerntext": "muốn",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "ăn",
              "lerntext": "ăn",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "là",
              "lerntext": "là",
              "de": "sein",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "được",
            "lerntext": "được",
            "de": "können"
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) / ich / er kann [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "de": "machen"
            },
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen"
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen"
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "muốn",
              "lerntext": "muốn",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "ăn",
              "lerntext": "ăn",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "là",
              "lerntext": "là",
              "de": "sein",
              "wieder": true
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) / ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen"
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
              "de": "bezahlen"
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen"
            },
            {
              "schrift": "được",
              "lerntext": "được",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "giúp",
              "lerntext": "giúp",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben",
              "wieder": true
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er will [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "de": "sprechen"
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "phải",
              "lerntext": "phải",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "trả",
              "lerntext": "trả",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "được",
              "lerntext": "được",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "giúp",
              "lerntext": "giúp",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen",
              "wieder": true
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er will [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "phải",
              "lerntext": "phải",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "trả",
              "lerntext": "trả",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen",
              "wieder": true
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
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
              "de": "verlieren"
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen"
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen"
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben"
            },
            {
              "schrift": "nghe",
              "lerntext": "nghe",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "thấy",
              "lerntext": "thấy",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "được",
              "lerntext": "được",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "giúp",
              "lerntext": "giúp",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "nhận",
            "lerntext": "nhận",
            "de": "bekommen"
          },
          {
            "schrift": "bằng",
            "lerntext": "bằng",
            "de": "mit (Mittel)"
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
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
              "schrift": "quên",
              "lerntext": "quên",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "mất",
              "lerntext": "mất",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "nghe",
              "lerntext": "nghe",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "thấy",
              "lerntext": "thấy",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn không thể [Slot]",
          "lerntext": "tôi / bạn không thể [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "đóng",
              "lerntext": "đóng",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "thắng",
              "lerntext": "thắng",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "quên",
              "lerntext": "quên",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "mất",
              "lerntext": "mất",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "7.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn không thể [Slot]",
          "lerntext": "tôi / bạn không thể [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "đóng",
              "lerntext": "đóng",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "thắng",
              "lerntext": "thắng",
              "de": "gewinnen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "7.9"
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
        "id": "7.10"
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
          "schrift": "tôi / mình đi bằng [Slot]",
          "lerntext": "tôi / mình đi bằng [Slot]"
        },
        "frameDe": "ich (neutral) / ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
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
              "de": "Zug"
            },
            {
              "schrift": "ô tô",
              "lerntext": "ô tô",
              "de": "Auto"
            },
            {
              "schrift": "bản đồ",
              "lerntext": "bản đồ",
              "de": "Landkarte",
              "wieder": true
            },
            {
              "schrift": "vé",
              "lerntext": "vé",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "sân bay",
              "lerntext": "sân bay",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "cửa hàng",
              "lerntext": "cửa hàng",
              "de": "Laden",
              "wieder": true
            },
            {
              "schrift": "bệnh viện",
              "lerntext": "bệnh viện",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "rừng",
              "lerntext": "rừng",
              "de": "Wald",
              "wieder": true
            },
            {
              "schrift": "ga tàu",
              "lerntext": "ga tàu",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität",
              "wieder": true
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
        "frameDe": "ich (neutral) / er [Slot] jetzt.",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "de": "umziehen"
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben"
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "nghe",
              "lerntext": "nghe",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "đóng",
              "lerntext": "đóng",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "quên",
              "lerntext": "quên",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "về",
            "lerntext": "về",
            "de": "über"
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
            "de": "Stunde"
          }
        ],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / nó [Slot] bây giờ",
          "lerntext": "tôi / nó [Slot] bây giờ"
        },
        "frameDe": "ich (neutral) / er [Slot] jetzt.",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / mình đi bằng [Slot]",
          "lerntext": "tôi / mình đi bằng [Slot]"
        },
        "frameDe": "ich (neutral) / ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "xe buýt",
              "lerntext": "xe buýt",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "tàu",
              "lerntext": "tàu",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "bản đồ",
              "lerntext": "bản đồ",
              "de": "Landkarte",
              "wieder": true
            },
            {
              "schrift": "vé",
              "lerntext": "vé",
              "de": "Fahrkarte",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / nó [Slot] bây giờ",
          "lerntext": "tôi / nó [Slot] bây giờ"
        },
        "frameDe": "ich (neutral) / er [Slot] jetzt.",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.5"
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
        "id": "8.6"
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
              "de": "früh"
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
              "de": "dann"
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
              "schrift": "giờ",
              "lerntext": "giờ",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "tàu",
              "lerntext": "tàu",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "xe buýt",
              "lerntext": "xe buýt",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "bản đồ",
              "lerntext": "bản đồ",
              "de": "Landkarte",
              "wieder": true
            },
            {
              "schrift": "vé",
              "lerntext": "vé",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "sân bay",
              "lerntext": "sân bay",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "nhà vệ sinh",
              "lerntext": "nhà vệ sinh",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "cửa hàng",
              "lerntext": "cửa hàng",
              "de": "Laden",
              "wieder": true
            },
            {
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser",
              "wieder": true
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
              "de": "Stunde"
            },
            {
              "schrift": "phút",
              "lerntext": "phút",
              "de": "Minute"
            },
            {
              "schrift": "tuần",
              "lerntext": "tuần",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "đêm",
              "lerntext": "đêm",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "bản đồ",
              "lerntext": "bản đồ",
              "de": "Landkarte",
              "wieder": true
            },
            {
              "schrift": "cầu",
              "lerntext": "cầu",
              "de": "Brücke",
              "wieder": true
            },
            {
              "schrift": "vé",
              "lerntext": "vé",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "thành phố",
              "lerntext": "thành phố",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "nhà vệ sinh",
              "lerntext": "nhà vệ sinh",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "tay",
              "lerntext": "tay",
              "de": "Hand",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "9.3"
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
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "hôm qua",
              "lerntext": "hôm qua",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "ngày mai",
              "lerntext": "ngày mai",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "bây giờ",
              "lerntext": "bây giờ",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "sớm",
              "lerntext": "sớm",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "luôn luôn",
              "lerntext": "luôn luôn",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "không bao giờ",
              "lerntext": "không bao giờ",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "thường",
              "lerntext": "thường",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "đôi khi",
              "lerntext": "đôi khi",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "rồi",
              "lerntext": "rồi",
              "de": "dann",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "9.4"
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
              "schrift": "tối",
              "lerntext": "tối",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "ngày",
              "lerntext": "ngày",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "đêm",
              "lerntext": "đêm",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "tuần",
              "lerntext": "tuần",
              "de": "Woche",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "9.5"
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
              "schrift": "thì",
              "lerntext": "thì",
              "de": "dann (Satzverbinder)",
              "wieder": true
            },
            {
              "schrift": "ngay",
              "lerntext": "ngay",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "chung",
              "lerntext": "chung",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "hôm qua",
              "lerntext": "hôm qua",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "ngày mai",
              "lerntext": "ngày mai",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "bây giờ",
              "lerntext": "bây giờ",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "sớm",
              "lerntext": "sớm",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "luôn luôn",
              "lerntext": "luôn luôn",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "không bao giờ",
              "lerntext": "không bao giờ",
              "de": "nie",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "9.6"
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
              "schrift": "thường",
              "lerntext": "thường",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "đôi khi",
              "lerntext": "đôi khi",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "rồi",
              "lerntext": "rồi",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "thì",
              "lerntext": "thì",
              "de": "dann (Satzverbinder)",
              "wieder": true
            },
            {
              "schrift": "ngay",
              "lerntext": "ngay",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "chung",
              "lerntext": "chung",
              "de": "zusammen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "9.7"
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
        "id": "9.8"
      }
    ]
  },
  {
    "number": 10,
    "title": "Ich mag, mir gefällt",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó / mình thích [Slot]",
          "lerntext": "tôi / bạn / nó / mình thích [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er / ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
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
              "schrift": "phút",
              "lerntext": "phút",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "ngày",
              "lerntext": "ngày",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "tối",
              "lerntext": "tối",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "tuần",
              "lerntext": "tuần",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "tàu",
              "lerntext": "tàu",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "xe buýt",
              "lerntext": "xe buýt",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "đêm",
              "lerntext": "đêm",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "bệnh viện",
              "lerntext": "bệnh viện",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "bia",
              "lerntext": "bia",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "muối",
              "lerntext": "muối",
              "de": "Salz",
              "wieder": true
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er / ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
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
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "mưa",
              "lerntext": "mưa",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "gió",
              "lerntext": "gió",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "thời tiết",
              "lerntext": "thời tiết",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "núi",
              "lerntext": "núi",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "phút",
              "lerntext": "phút",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "ngày",
              "lerntext": "ngày",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "tối",
              "lerntext": "tối",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "tuần",
              "lerntext": "tuần",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "tàu",
              "lerntext": "tàu",
              "de": "Zug",
              "wieder": true
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
              "de": "blau"
            },
            {
              "schrift": "vàng",
              "lerntext": "vàng",
              "de": "gelb"
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
              "schrift": "thấp",
              "lerntext": "thấp",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "cao",
              "lerntext": "cao",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "nặng",
              "lerntext": "nặng",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "nhẹ",
              "lerntext": "nhẹ",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "nhỏ",
              "lerntext": "nhỏ",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "rẻ",
              "lerntext": "rẻ",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "groß",
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
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "xanh",
              "lerntext": "xanh",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "vàng",
              "lerntext": "vàng",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "trắng",
              "lerntext": "trắng",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "thấp",
              "lerntext": "thấp",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "cao",
              "lerntext": "cao",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "nặng",
              "lerntext": "nặng",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "nhẹ",
              "lerntext": "nhẹ",
              "de": "leicht",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "10.4"
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
              "schrift": "nâu",
              "lerntext": "nâu",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "xám",
              "lerntext": "xám",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "đỏ",
              "lerntext": "đỏ",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "vàng",
              "lerntext": "vàng",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "trắng",
              "lerntext": "trắng",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "xanh",
              "lerntext": "xanh",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "thấp",
              "lerntext": "thấp",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "nhỏ",
              "lerntext": "nhỏ",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "cao",
              "lerntext": "cao",
              "de": "hoch",
              "wieder": true
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
              "schrift": "bẩn",
              "lerntext": "bẩn",
              "de": "schmutzig"
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)",
              "wieder": true
            },
            {
              "schrift": "chua",
              "lerntext": "chua",
              "de": "sauer",
              "wieder": true
            },
            {
              "schrift": "ấm",
              "lerntext": "ấm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "lạnh",
              "lerntext": "lạnh",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "nâu",
              "lerntext": "nâu",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "xám",
              "lerntext": "xám",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "đỏ",
              "lerntext": "đỏ",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "nặng",
              "lerntext": "nặng",
              "de": "schwer",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "10.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn / nó / mình thích [Slot]",
          "lerntext": "tôi / bạn / nó / mình thích [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er / ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "biển",
              "lerntext": "biển",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "mặt trời",
              "lerntext": "mặt trời",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "mưa",
              "lerntext": "mưa",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "gió",
              "lerntext": "gió",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "thời tiết",
              "lerntext": "thời tiết",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "núi",
              "lerntext": "núi",
              "de": "Berg",
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
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)",
              "wieder": true
            },
            {
              "schrift": "chua",
              "lerntext": "chua",
              "de": "sauer",
              "wieder": true
            },
            {
              "schrift": "ấm",
              "lerntext": "ấm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "lạnh",
              "lerntext": "lạnh",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber",
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
          "schrift": "hôm qua tôi / bạn / nó / mình [Slot]",
          "lerntext": "hôm qua tôi / bạn / nó / mình [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / er / ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
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
              "schrift": "bẩn",
              "lerntext": "bẩn",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)",
              "wieder": true
            },
            {
              "schrift": "ấm",
              "lerntext": "ấm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "chua",
              "lerntext": "chua",
              "de": "sauer",
              "wieder": true
            },
            {
              "schrift": "nâu",
              "lerntext": "nâu",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "vàng",
              "lerntext": "vàng",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "trắng",
              "lerntext": "trắng",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber",
              "wieder": true
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) / ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
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
              "de": "für"
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen"
            },
            {
              "schrift": "sau",
              "lerntext": "sau",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "với",
              "lerntext": "với",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "về",
              "lerntext": "về",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "bằng",
              "lerntext": "bằng",
              "de": "mit (Mittel)",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
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
            "de": "also"
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
        "frameDe": "ich (neutral) / du (Gleichaltrige) [Slot] viel.",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
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
              "de": "wissen"
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
              "schrift": "trở thành",
              "lerntext": "trở thành",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "thích",
              "lerntext": "thích",
              "de": "mögen",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "việc",
            "lerntext": "việc",
            "de": "Arbeit"
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
        "frameDe": "ich (neutral) / er werde [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "schrift": "ít",
              "lerntext": "ít",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "chỉ",
              "lerntext": "chỉ",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "nhiều",
              "lerntext": "nhiều",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "lại",
              "lerntext": "lại",
              "de": "wieder",
              "wieder": true
            },
            {
              "schrift": "sẽ",
              "lerntext": "sẽ",
              "de": "wird (Zukunft)",
              "wieder": true
            },
            {
              "schrift": "kìa",
              "lerntext": "kìa",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "bây giờ",
              "lerntext": "bây giờ",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "chung",
              "lerntext": "chung",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "dở",
              "lerntext": "dở",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "thường",
              "lerntext": "thường",
              "de": "oft",
              "wieder": true
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
        "kind": "frame",
        "frame": {
          "schrift": "tôi / bạn [Slot] nhiều",
          "lerntext": "tôi / bạn [Slot] nhiều"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) [Slot] viel.",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "11.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi / nó trở nên [Slot]",
          "lerntext": "tôi / nó trở nên [Slot]"
        },
        "frameDe": "ich (neutral) / er werde [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nguy hiểm",
              "lerntext": "nguy hiểm",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "ít",
              "lerntext": "ít",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "chỉ",
              "lerntext": "chỉ",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "nhiều",
              "lerntext": "nhiều",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "lại",
              "lerntext": "lại",
              "de": "wieder",
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
          "schrift": "tôi / bạn [Slot] nhiều",
          "lerntext": "tôi / bạn [Slot] nhiều"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) [Slot] viel.",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken",
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
        "kind": "frame",
        "frame": {
          "schrift": "ngày mai tôi / bạn / mình sẽ [Slot]",
          "lerntext": "ngày mai tôi / bạn / mình sẽ [Slot]"
        },
        "frameDe": "ich (neutral) / du (Gleichaltrige) / ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "tôi",
            "lerntext": "tôi",
            "de": "ich (neutral)"
          },
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          },
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sau",
              "lerntext": "sau",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "với",
              "lerntext": "với",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "về",
              "lerntext": "về",
              "de": "über",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "11.8"
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
        "id": "11.9"
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
              "de": "auf"
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
              "de": "bis"
            },
            {
              "schrift": "trước",
              "lerntext": "trước",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "cũng",
              "lerntext": "cũng",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "sau",
              "lerntext": "sau",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "với",
              "lerntext": "với",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "về",
              "lerntext": "về",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "bằng",
              "lerntext": "bằng",
              "de": "mit (Mittel)",
              "wieder": true
            },
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "thì",
              "lerntext": "thì",
              "de": "dann (Satzverbinder)",
              "wieder": true
            },
            {
              "schrift": "rồi",
              "lerntext": "rồi",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "bên cạnh",
              "lerntext": "bên cạnh",
              "de": "neben",
              "wieder": true
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
            "de": "also"
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
              "schrift": "đến",
              "lerntext": "đến",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "trên",
              "lerntext": "trên",
              "de": "auf",
              "wieder": true
            },
            {
              "schrift": "sau",
              "lerntext": "sau",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "với",
              "lerntext": "với",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "về",
              "lerntext": "về",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "bằng",
              "lerntext": "bằng",
              "de": "mit (Mittel)",
              "wieder": true
            },
            {
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "qua",
              "lerntext": "qua",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "bên cạnh",
              "lerntext": "bên cạnh",
              "de": "neben",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
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
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "phải",
              "lerntext": "phải",
              "de": "müssen",
              "wieder": true
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
              "de": "ruhig"
            },
            {
              "schrift": "thú vị",
              "lerntext": "thú vị",
              "de": "interessant"
            },
            {
              "schrift": "đúng",
              "lerntext": "đúng",
              "de": "genau"
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch"
            },
            {
              "schrift": "nguy hiểm",
              "lerntext": "nguy hiểm",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "ít",
              "lerntext": "ít",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "chỉ",
              "lerntext": "chỉ",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "ngay",
              "lerntext": "ngay",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "sớm",
              "lerntext": "sớm",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "đôi khi",
              "lerntext": "đôi khi",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "không bao giờ",
              "lerntext": "không bao giờ",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "bẩn",
              "lerntext": "bẩn",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "ngày mai",
              "lerntext": "ngày mai",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "nhiều",
              "lerntext": "nhiều",
              "de": "viel",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
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
              "de": "hässlich"
            },
            {
              "schrift": "khó",
              "lerntext": "khó",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "cứ",
              "lerntext": "cứ",
              "de": "ruhig",
              "wieder": true
            },
            {
              "schrift": "thú vị",
              "lerntext": "thú vị",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "đúng",
              "lerntext": "đúng",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "nguy hiểm",
              "lerntext": "nguy hiểm",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "sẽ",
              "lerntext": "sẽ",
              "de": "wird (Zukunft)",
              "wieder": true
            },
            {
              "schrift": "luôn luôn",
              "lerntext": "luôn luôn",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "xanh",
              "lerntext": "xanh",
              "de": "blau",
              "wieder": true
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
              "de": "sich erinnern"
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken"
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln"
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen"
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "trả",
              "lerntext": "trả",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "thắng",
              "lerntext": "thắng",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "12.6"
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
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "chậm",
              "lerntext": "chậm",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "xấu",
              "lerntext": "xấu",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "khó",
              "lerntext": "khó",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "cứ",
              "lerntext": "cứ",
              "de": "ruhig",
              "wieder": true
            },
            {
              "schrift": "thú vị",
              "lerntext": "thú vị",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "đúng",
              "lerntext": "đúng",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.7"
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
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
              "wieder": true
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.8"
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
              "schrift": "vì",
              "lerntext": "vì",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "trong khi",
              "lerntext": "trong khi",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "mặc dù",
              "lerntext": "mặc dù",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "cũng",
              "lerntext": "cũng",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "đến",
              "lerntext": "đến",
              "de": "bis",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.9"
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
              "schrift": "vì",
              "lerntext": "vì",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "trong khi",
              "lerntext": "trong khi",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "mặc dù",
              "lerntext": "mặc dù",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "cũng",
              "lerntext": "cũng",
              "de": "auch",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.10"
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
        "id": "12.11"
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
              "schrift": "việc",
              "lerntext": "việc",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "biển",
              "lerntext": "biển",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "mặt trời",
              "lerntext": "mặt trời",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "mưa",
              "lerntext": "mưa",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "núi",
              "lerntext": "núi",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "thời tiết",
              "lerntext": "thời tiết",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "phút",
              "lerntext": "phút",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "gió",
              "lerntext": "gió",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "tối",
              "lerntext": "tối",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "cá",
              "lerntext": "cá",
              "de": "Fisch",
              "wieder": true
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
              "de": "Bein"
            },
            {
              "schrift": "mắt",
              "lerntext": "mắt",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "đầu",
              "lerntext": "đầu",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "việc",
              "lerntext": "việc",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "biển",
              "lerntext": "biển",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "mặt trời",
              "lerntext": "mặt trời",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "mưa",
              "lerntext": "mưa",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "núi",
              "lerntext": "núi",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "thời tiết",
              "lerntext": "thời tiết",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "phút",
              "lerntext": "phút",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "rừng",
              "lerntext": "rừng",
              "de": "Wald",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "13.2"
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
              "de": "Haut",
              "wieder": true
            },
            {
              "schrift": "mắt",
              "lerntext": "mắt",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "đầu",
              "lerntext": "đầu",
              "de": "Kopf",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
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
        "task": "Sag einem Arzt, was dir weh tut.",
        "newFrameWords": [],
        "id": "13.4"
      }
    ]
  },
  {
    "number": 14,
    "title": "Zuhause, Kleidung und Arbeit",
    "niveau": null,
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
              "schrift": "giày",
              "lerntext": "giày",
              "de": "Schuh"
            },
            {
              "schrift": "đầu",
              "lerntext": "đầu",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "xe buýt",
              "lerntext": "xe buýt",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "cà phê",
              "lerntext": "cà phê",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "trà",
              "lerntext": "trà",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "ga tàu",
              "lerntext": "ga tàu",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "gió",
              "lerntext": "gió",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "sinh viên",
              "lerntext": "sinh viên",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "miệng",
              "lerntext": "miệng",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "ngày",
              "lerntext": "ngày",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "sân bay",
              "lerntext": "sân bay",
              "de": "Flughafen",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi mua [Slot]",
          "lerntext": "tôi mua [Slot]"
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "áo",
              "lerntext": "áo",
              "de": "Oberteil"
            },
            {
              "schrift": "mắt",
              "lerntext": "mắt",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "bữa tối",
              "lerntext": "bữa tối",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "sách",
              "lerntext": "sách",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "bữa trưa",
              "lerntext": "bữa trưa",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "đá",
              "lerntext": "đá",
              "de": "Eis",
              "wieder": true
            },
            {
              "schrift": "bữa sáng",
              "lerntext": "bữa sáng",
              "de": "Frühstück",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.2"
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
              "schrift": "giày",
              "lerntext": "giày",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "áo",
              "lerntext": "áo",
              "de": "Oberteil",
              "wieder": true
            },
            {
              "schrift": "da",
              "lerntext": "da",
              "de": "Haut",
              "wieder": true
            },
            {
              "schrift": "mắt",
              "lerntext": "mắt",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "việc",
              "lerntext": "việc",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "biển",
              "lerntext": "biển",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "đầu",
              "lerntext": "đầu",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "đêm",
              "lerntext": "đêm",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "mặt trời",
              "lerntext": "mặt trời",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "mưa",
              "lerntext": "mưa",
              "de": "Regen",
              "wieder": true
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
        "id": "14.3"
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
              "de": "Arbeit"
            },
            {
              "schrift": "quần áo",
              "lerntext": "quần áo",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "tên",
              "lerntext": "tên",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "giày",
              "lerntext": "giày",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "áo",
              "lerntext": "áo",
              "de": "Oberteil",
              "wieder": true
            },
            {
              "schrift": "da",
              "lerntext": "da",
              "de": "Haut",
              "wieder": true
            },
            {
              "schrift": "mắt",
              "lerntext": "mắt",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "phòng",
              "lerntext": "phòng",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "núi",
              "lerntext": "núi",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "rau",
              "lerntext": "rau",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "thời tiết",
              "lerntext": "thời tiết",
              "de": "Wetter",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.4"
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
              "de": "Lektion"
            },
            {
              "schrift": "kỳ thi",
              "lerntext": "kỳ thi",
              "de": "Prüfung"
            },
            {
              "schrift": "quần áo",
              "lerntext": "quần áo",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "tên",
              "lerntext": "tên",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "giày",
              "lerntext": "giày",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "áo",
              "lerntext": "áo",
              "de": "Oberteil",
              "wieder": true
            },
            {
              "schrift": "da",
              "lerntext": "da",
              "de": "Haut",
              "wieder": true
            },
            {
              "schrift": "ly",
              "lerntext": "ly",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "biển",
              "lerntext": "biển",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "tuần",
              "lerntext": "tuần",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "bàn",
              "lerntext": "bàn",
              "de": "Tisch",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "14.5"
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
              "de": "Eis"
            },
            {
              "schrift": "kỳ thi",
              "lerntext": "kỳ thi",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "bài",
              "lerntext": "bài",
              "de": "Lektion",
              "wieder": true
            },
            {
              "schrift": "quần áo",
              "lerntext": "quần áo",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "tên",
              "lerntext": "tên",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "giày",
              "lerntext": "giày",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "áo",
              "lerntext": "áo",
              "de": "Oberteil",
              "wieder": true
            },
            {
              "schrift": "bản đồ",
              "lerntext": "bản đồ",
              "de": "Landkarte",
              "wieder": true
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "con trai",
              "lerntext": "con trai",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "tối",
              "lerntext": "tối",
              "de": "Abend",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.6"
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
              "de": "Haus"
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
              "schrift": "kỳ thi",
              "lerntext": "kỳ thi",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "bài",
              "lerntext": "bài",
              "de": "Lektion",
              "wieder": true
            },
            {
              "schrift": "quần áo",
              "lerntext": "quần áo",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "tên",
              "lerntext": "tên",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "giày",
              "lerntext": "giày",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "tàu",
              "lerntext": "tàu",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "đầu",
              "lerntext": "đầu",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "điện thoại",
              "lerntext": "điện thoại",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "giường",
              "lerntext": "giường",
              "de": "Bett",
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
        "id": "14.8"
      }
    ]
  },
  {
    "number": 15,
    "title": "Weitere Nomen",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "phụ nữ",
              "lerntext": "phụ nữ",
              "de": "Frau"
            },
            {
              "schrift": "vợ",
              "lerntext": "vợ",
              "de": "Ehefrau"
            },
            {
              "schrift": "tiếng",
              "lerntext": "tiếng",
              "de": "Stunde (Dauer)"
            },
            {
              "schrift": "nhà thuốc",
              "lerntext": "nhà thuốc",
              "de": "Apotheke"
            },
            {
              "schrift": "hóa đơn",
              "lerntext": "hóa đơn",
              "de": "Rechnung"
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
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "thẻ",
              "lerntext": "thẻ",
              "de": "Karte"
            },
            {
              "schrift": "câu hỏi",
              "lerntext": "câu hỏi",
              "de": "Frage"
            },
            {
              "schrift": "phở",
              "lerntext": "phở",
              "de": "Nudelsuppe"
            },
            {
              "schrift": "nước mắm",
              "lerntext": "nước mắm",
              "de": "Fischsauce"
            },
            {
              "schrift": "thực đơn",
              "lerntext": "thực đơn",
              "de": "Speisekarte"
            },
            {
              "schrift": "phụ nữ",
              "lerntext": "phụ nữ",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "vợ",
              "lerntext": "vợ",
              "de": "Ehefrau",
              "wieder": true
            },
            {
              "schrift": "tiếng",
              "lerntext": "tiếng",
              "de": "Stunde (Dauer)",
              "wieder": true
            },
            {
              "schrift": "nhà thuốc",
              "lerntext": "nhà thuốc",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "hóa đơn",
              "lerntext": "hóa đơn",
              "de": "Rechnung",
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chai",
              "lerntext": "chai",
              "de": "Flasche"
            },
            {
              "schrift": "số",
              "lerntext": "số",
              "de": "Nummer"
            },
            {
              "schrift": "bát",
              "lerntext": "bát",
              "de": "Schüssel"
            },
            {
              "schrift": "nhạc",
              "lerntext": "nhạc",
              "de": "Musik"
            },
            {
              "schrift": "tiệc",
              "lerntext": "tiệc",
              "de": "Party"
            },
            {
              "schrift": "thẻ",
              "lerntext": "thẻ",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "câu hỏi",
              "lerntext": "câu hỏi",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "phở",
              "lerntext": "phở",
              "de": "Nudelsuppe",
              "wieder": true
            },
            {
              "schrift": "nước mắm",
              "lerntext": "nước mắm",
              "de": "Fischsauce",
              "wieder": true
            },
            {
              "schrift": "thực đơn",
              "lerntext": "thực đơn",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "phụ nữ",
              "lerntext": "phụ nữ",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "vợ",
              "lerntext": "vợ",
              "de": "Ehefrau",
              "wieder": true
            },
            {
              "schrift": "tiếng",
              "lerntext": "tiếng",
              "de": "Stunde (Dauer)",
              "wieder": true
            },
            {
              "schrift": "nhà thuốc",
              "lerntext": "nhà thuốc",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "hóa đơn",
              "lerntext": "hóa đơn",
              "de": "Rechnung",
              "wieder": true
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
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "thế giới",
              "lerntext": "thế giới",
              "de": "Welt"
            },
            {
              "schrift": "mèo",
              "lerntext": "mèo",
              "de": "Katze"
            },
            {
              "schrift": "tình yêu",
              "lerntext": "tình yêu",
              "de": "Liebe"
            },
            {
              "schrift": "ý tưởng",
              "lerntext": "ý tưởng",
              "de": "Idee"
            },
            {
              "schrift": "chuyện",
              "lerntext": "chuyện",
              "de": "Geschichte"
            },
            {
              "schrift": "chai",
              "lerntext": "chai",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "số",
              "lerntext": "số",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "bát",
              "lerntext": "bát",
              "de": "Schüssel",
              "wieder": true
            },
            {
              "schrift": "nhạc",
              "lerntext": "nhạc",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "tiệc",
              "lerntext": "tiệc",
              "de": "Party",
              "wieder": true
            },
            {
              "schrift": "thẻ",
              "lerntext": "thẻ",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "câu hỏi",
              "lerntext": "câu hỏi",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "phở",
              "lerntext": "phở",
              "de": "Nudelsuppe",
              "wieder": true
            },
            {
              "schrift": "nước mắm",
              "lerntext": "nước mắm",
              "de": "Fischsauce",
              "wieder": true
            },
            {
              "schrift": "thực đơn",
              "lerntext": "thực đơn",
              "de": "Speisekarte",
              "wieder": true
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
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ca",
              "lerntext": "ca",
              "de": "Schicht"
            },
            {
              "schrift": "ngã tư",
              "lerntext": "ngã tư",
              "de": "Kreuzung"
            },
            {
              "schrift": "quán",
              "lerntext": "quán",
              "de": "Garküche"
            },
            {
              "schrift": "thế giới",
              "lerntext": "thế giới",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "mèo",
              "lerntext": "mèo",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "tình yêu",
              "lerntext": "tình yêu",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "ý tưởng",
              "lerntext": "ý tưởng",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "chuyện",
              "lerntext": "chuyện",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "chai",
              "lerntext": "chai",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "số",
              "lerntext": "số",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "bát",
              "lerntext": "bát",
              "de": "Schüssel",
              "wieder": true
            },
            {
              "schrift": "nhạc",
              "lerntext": "nhạc",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "tiệc",
              "lerntext": "tiệc",
              "de": "Party",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
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
              "schrift": "chồng",
              "lerntext": "chồng",
              "de": "Ehemann"
            },
            {
              "schrift": "tháng",
              "lerntext": "tháng",
              "de": "Monat"
            },
            {
              "schrift": "sáng",
              "lerntext": "sáng",
              "de": "Morgen"
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
              "schrift": "chợ",
              "lerntext": "chợ",
              "de": "Markt"
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
              "schrift": "người Việt",
              "lerntext": "người Việt",
              "de": "Vietnamese",
              "wieder": true
            },
            {
              "schrift": "đàn ông",
              "lerntext": "đàn ông",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "chồng",
              "lerntext": "chồng",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "tháng",
              "lerntext": "tháng",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "sáng",
              "lerntext": "sáng",
              "de": "Morgen",
              "wieder": true
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
              "schrift": "giá",
              "lerntext": "giá",
              "de": "Preis"
            },
            {
              "schrift": "câu",
              "lerntext": "câu",
              "de": "Satz"
            },
            {
              "schrift": "rượu",
              "lerntext": "rượu",
              "de": "Alkohol"
            },
            {
              "schrift": "cơm",
              "lerntext": "cơm",
              "de": "Reis (gekocht)"
            },
            {
              "schrift": "người bệnh",
              "lerntext": "người bệnh",
              "de": "Patient"
            },
            {
              "schrift": "trưa",
              "lerntext": "trưa",
              "de": "Mittag",
              "wieder": true
            },
            {
              "schrift": "chiều",
              "lerntext": "chiều",
              "de": "Nachmittag",
              "wieder": true
            },
            {
              "schrift": "chợ",
              "lerntext": "chợ",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "xe máy",
              "lerntext": "xe máy",
              "de": "Motorroller",
              "wieder": true
            },
            {
              "schrift": "hộ chiếu",
              "lerntext": "hộ chiếu",
              "de": "Pass",
              "wieder": true
            },
            {
              "schrift": "người Việt",
              "lerntext": "người Việt",
              "de": "Vietnamese",
              "wieder": true
            },
            {
              "schrift": "đàn ông",
              "lerntext": "đàn ông",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "chồng",
              "lerntext": "chồng",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "tháng",
              "lerntext": "tháng",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "sáng",
              "lerntext": "sáng",
              "de": "Morgen",
              "wieder": true
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
              "schrift": "bác sĩ",
              "lerntext": "bác sĩ",
              "de": "Arzt"
            },
            {
              "schrift": "phim",
              "lerntext": "phim",
              "de": "Film"
            },
            {
              "schrift": "chó",
              "lerntext": "chó",
              "de": "Hund"
            },
            {
              "schrift": "phần",
              "lerntext": "phần",
              "de": "Teil"
            },
            {
              "schrift": "lý do",
              "lerntext": "lý do",
              "de": "Grund"
            },
            {
              "schrift": "giá",
              "lerntext": "giá",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "câu",
              "lerntext": "câu",
              "de": "Satz",
              "wieder": true
            },
            {
              "schrift": "rượu",
              "lerntext": "rượu",
              "de": "Alkohol",
              "wieder": true
            },
            {
              "schrift": "cơm",
              "lerntext": "cơm",
              "de": "Reis (gekocht)",
              "wieder": true
            },
            {
              "schrift": "người bệnh",
              "lerntext": "người bệnh",
              "de": "Patient",
              "wieder": true
            },
            {
              "schrift": "trưa",
              "lerntext": "trưa",
              "de": "Mittag",
              "wieder": true
            },
            {
              "schrift": "chiều",
              "lerntext": "chiều",
              "de": "Nachmittag",
              "wieder": true
            },
            {
              "schrift": "chợ",
              "lerntext": "chợ",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "xe máy",
              "lerntext": "xe máy",
              "de": "Motorroller",
              "wieder": true
            },
            {
              "schrift": "hộ chiếu",
              "lerntext": "hộ chiếu",
              "de": "Pass",
              "wieder": true
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
              "schrift": "khách",
              "lerntext": "khách",
              "de": "Kunde"
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
            },
            {
              "schrift": "bác sĩ",
              "lerntext": "bác sĩ",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "phim",
              "lerntext": "phim",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "chó",
              "lerntext": "chó",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "phần",
              "lerntext": "phần",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "lý do",
              "lerntext": "lý do",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "giá",
              "lerntext": "giá",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "câu",
              "lerntext": "câu",
              "de": "Satz",
              "wieder": true
            },
            {
              "schrift": "rượu",
              "lerntext": "rượu",
              "de": "Alkohol",
              "wieder": true
            },
            {
              "schrift": "cơm",
              "lerntext": "cơm",
              "de": "Reis (gekocht)",
              "wieder": true
            },
            {
              "schrift": "người bệnh",
              "lerntext": "người bệnh",
              "de": "Patient",
              "wieder": true
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
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "trẻ con",
              "lerntext": "trẻ con",
              "de": "Kind"
            },
            {
              "schrift": "tuổi",
              "lerntext": "tuổi",
              "de": "Alter"
            },
            {
              "schrift": "cuối tuần",
              "lerntext": "cuối tuần",
              "de": "Wochenende"
            },
            {
              "schrift": "chữ",
              "lerntext": "chữ",
              "de": "Wort"
            },
            {
              "schrift": "vấn đề",
              "lerntext": "vấn đề",
              "de": "Problem"
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
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "thứ",
              "lerntext": "thứ",
              "de": "Ding"
            },
            {
              "schrift": "đồ ăn",
              "lerntext": "đồ ăn",
              "de": "Essen"
            },
            {
              "schrift": "thuốc",
              "lerntext": "thuốc",
              "de": "Medikament"
            },
            {
              "schrift": "hành lý",
              "lerntext": "hành lý",
              "de": "Gepäck"
            },
            {
              "schrift": "cuộc sống",
              "lerntext": "cuộc sống",
              "de": "Leben"
            },
            {
              "schrift": "trẻ con",
              "lerntext": "trẻ con",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "tuổi",
              "lerntext": "tuổi",
              "de": "Alter",
              "wieder": true
            },
            {
              "schrift": "cuối tuần",
              "lerntext": "cuối tuần",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "chữ",
              "lerntext": "chữ",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "vấn đề",
              "lerntext": "vấn đề",
              "de": "Problem",
              "wieder": true
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
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "quà",
              "lerntext": "quà",
              "de": "Geschenk"
            },
            {
              "schrift": "ví dụ",
              "lerntext": "ví dụ",
              "de": "Beispiel"
            },
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
              "schrift": "sở thích",
              "lerntext": "sở thích",
              "de": "Hobby"
            },
            {
              "schrift": "thứ",
              "lerntext": "thứ",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "đồ ăn",
              "lerntext": "đồ ăn",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "thuốc",
              "lerntext": "thuốc",
              "de": "Medikament",
              "wieder": true
            },
            {
              "schrift": "hành lý",
              "lerntext": "hành lý",
              "de": "Gepäck",
              "wieder": true
            },
            {
              "schrift": "cuộc sống",
              "lerntext": "cuộc sống",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "trẻ con",
              "lerntext": "trẻ con",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "tuổi",
              "lerntext": "tuổi",
              "de": "Alter",
              "wieder": true
            },
            {
              "schrift": "cuối tuần",
              "lerntext": "cuối tuần",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "chữ",
              "lerntext": "chữ",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "vấn đề",
              "lerntext": "vấn đề",
              "de": "Problem",
              "wieder": true
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
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bạn bè",
              "lerntext": "bạn bè",
              "de": "Freunde"
            },
            {
              "schrift": "tóc",
              "lerntext": "tóc",
              "de": "Haare"
            },
            {
              "schrift": "đũa",
              "lerntext": "đũa",
              "de": "Essstäbchen"
            }
          ]
        ],
        "newCount": 3,
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
              "schrift": "người yêu",
              "lerntext": "người yêu",
              "de": "fester Freund"
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
            },
            {
              "schrift": "chị gái",
              "lerntext": "chị gái",
              "de": "ältere Schwester"
            },
            {
              "schrift": "em gái",
              "lerntext": "em gái",
              "de": "jüngere Schwester"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.15"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ca",
              "lerntext": "ca",
              "de": "Schicht",
              "wieder": true
            },
            {
              "schrift": "ngã tư",
              "lerntext": "ngã tư",
              "de": "Kreuzung",
              "wieder": true
            },
            {
              "schrift": "quán",
              "lerntext": "quán",
              "de": "Garküche",
              "wieder": true
            },
            {
              "schrift": "bạn bè",
              "lerntext": "bạn bè",
              "de": "Freunde",
              "wieder": true
            },
            {
              "schrift": "tóc",
              "lerntext": "tóc",
              "de": "Haare",
              "wieder": true
            },
            {
              "schrift": "đũa",
              "lerntext": "đũa",
              "de": "Essstäbchen",
              "wieder": true
            },
            {
              "schrift": "thế giới",
              "lerntext": "thế giới",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "mèo",
              "lerntext": "mèo",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "tình yêu",
              "lerntext": "tình yêu",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "ý tưởng",
              "lerntext": "ý tưởng",
              "de": "Idee",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.16"
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
              "schrift": "khách",
              "lerntext": "khách",
              "de": "Kunde",
              "wieder": true
            },
            {
              "schrift": "lương",
              "lerntext": "lương",
              "de": "Lohn",
              "wieder": true
            },
            {
              "schrift": "hợp đồng",
              "lerntext": "hợp đồng",
              "de": "Vertrag",
              "wieder": true
            },
            {
              "schrift": "chuyến bay",
              "lerntext": "chuyến bay",
              "de": "Flug",
              "wieder": true
            },
            {
              "schrift": "hàng xóm",
              "lerntext": "hàng xóm",
              "de": "Nachbar",
              "wieder": true
            },
            {
              "schrift": "người yêu",
              "lerntext": "người yêu",
              "de": "fester Freund",
              "wieder": true
            },
            {
              "schrift": "anh trai",
              "lerntext": "anh trai",
              "de": "älterer Bruder",
              "wieder": true
            },
            {
              "schrift": "em trai",
              "lerntext": "em trai",
              "de": "jüngerer Bruder",
              "wieder": true
            },
            {
              "schrift": "chị gái",
              "lerntext": "chị gái",
              "de": "ältere Schwester",
              "wieder": true
            },
            {
              "schrift": "em gái",
              "lerntext": "em gái",
              "de": "jüngere Schwester",
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bác sĩ",
              "lerntext": "bác sĩ",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "phim",
              "lerntext": "phim",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "chó",
              "lerntext": "chó",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "phần",
              "lerntext": "phần",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "lý do",
              "lerntext": "lý do",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "khách",
              "lerntext": "khách",
              "de": "Kunde",
              "wieder": true
            },
            {
              "schrift": "lương",
              "lerntext": "lương",
              "de": "Lohn",
              "wieder": true
            },
            {
              "schrift": "hợp đồng",
              "lerntext": "hợp đồng",
              "de": "Vertrag",
              "wieder": true
            },
            {
              "schrift": "chuyến bay",
              "lerntext": "chuyến bay",
              "de": "Flug",
              "wieder": true
            },
            {
              "schrift": "hàng xóm",
              "lerntext": "hàng xóm",
              "de": "Nachbar",
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
          "schrift": "đây là [Slot]",
          "lerntext": "đây là [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "quà",
              "lerntext": "quà",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "ví dụ",
              "lerntext": "ví dụ",
              "de": "Beispiel",
              "wieder": true
            },
            {
              "schrift": "lửa",
              "lerntext": "lửa",
              "de": "Feuer",
              "wieder": true
            },
            {
              "schrift": "xe ôm",
              "lerntext": "xe ôm",
              "de": "Motorradtaxi",
              "wieder": true
            },
            {
              "schrift": "sở thích",
              "lerntext": "sở thích",
              "de": "Hobby",
              "wieder": true
            },
            {
              "schrift": "thứ",
              "lerntext": "thứ",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "đồ ăn",
              "lerntext": "đồ ăn",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "thuốc",
              "lerntext": "thuốc",
              "de": "Medikament",
              "wieder": true
            },
            {
              "schrift": "hành lý",
              "lerntext": "hành lý",
              "de": "Gepäck",
              "wieder": true
            },
            {
              "schrift": "cuộc sống",
              "lerntext": "cuộc sống",
              "de": "Leben",
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "15.20"
      }
    ]
  },
  {
    "number": 16,
    "title": "Weitere Verben",
    "niveau": null,
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
              "de": "rufen"
            },
            {
              "schrift": "mang",
              "lerntext": "mang",
              "de": "bringen"
            },
            {
              "schrift": "học",
              "lerntext": "học",
              "de": "lernen"
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
              "de": "versuchen"
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
            },
            {
              "schrift": "gọi",
              "lerntext": "gọi",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "mang",
              "lerntext": "mang",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "học",
              "lerntext": "học",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "dạy",
              "lerntext": "dạy",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "bắt đầu",
              "lerntext": "bắt đầu",
              "de": "anfangen",
              "wieder": true
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
              "de": "kennenlernen"
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
              "de": "bestellen"
            },
            {
              "schrift": "kết thúc",
              "lerntext": "kết thúc",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "thử",
              "lerntext": "thử",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "hát",
              "lerntext": "hát",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "chạy",
              "lerntext": "chạy",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "lái",
              "lerntext": "lái",
              "de": "fahren (lenken)",
              "wieder": true
            },
            {
              "schrift": "gọi",
              "lerntext": "gọi",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "mang",
              "lerntext": "mang",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "học",
              "lerntext": "học",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "dạy",
              "lerntext": "dạy",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "bắt đầu",
              "lerntext": "bắt đầu",
              "de": "anfangen",
              "wieder": true
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
            },
            {
              "schrift": "thăm",
              "lerntext": "thăm",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "quen",
              "lerntext": "quen",
              "de": "kennenlernen",
              "wieder": true
            },
            {
              "schrift": "cưới",
              "lerntext": "cưới",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "xảy ra",
              "lerntext": "xảy ra",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "đặt",
              "lerntext": "đặt",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "kết thúc",
              "lerntext": "kết thúc",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "thử",
              "lerntext": "thử",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "hát",
              "lerntext": "hát",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "chạy",
              "lerntext": "chạy",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "lái",
              "lerntext": "lái",
              "de": "fahren (lenken)",
              "wieder": true
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
              "de": "halten"
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
              "de": "einladen"
            },
            {
              "schrift": "thuê",
              "lerntext": "thuê",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "ký",
              "lerntext": "ký",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "nấu",
              "lerntext": "nấu",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "cảm ơn",
              "lerntext": "cảm ơn",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "xin lỗi",
              "lerntext": "xin lỗi",
              "de": "sich entschuldigen",
              "wieder": true
            },
            {
              "schrift": "thăm",
              "lerntext": "thăm",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "quen",
              "lerntext": "quen",
              "de": "kennenlernen",
              "wieder": true
            },
            {
              "schrift": "cưới",
              "lerntext": "cưới",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "xảy ra",
              "lerntext": "xảy ra",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "đặt",
              "lerntext": "đặt",
              "de": "bestellen",
              "wieder": true
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
              "de": "hinaufgehen"
            },
            {
              "schrift": "xuống",
              "lerntext": "xuống",
              "de": "hinuntergehen"
            },
            {
              "schrift": "bị",
              "lerntext": "bị",
              "de": "erleiden (Passiv, negativ)"
            },
            {
              "schrift": "chỉ đường",
              "lerntext": "chỉ đường",
              "de": "den Weg zeigen",
              "wieder": true
            },
            {
              "schrift": "giữ",
              "lerntext": "giữ",
              "de": "halten",
              "wieder": true
            },
            {
              "schrift": "dừng",
              "lerntext": "dừng",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "mặc",
              "lerntext": "mặc",
              "de": "anziehen (Kleidung)",
              "wieder": true
            },
            {
              "schrift": "mời",
              "lerntext": "mời",
              "de": "einladen",
              "wieder": true
            },
            {
              "schrift": "thuê",
              "lerntext": "thuê",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "ký",
              "lerntext": "ký",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "nấu",
              "lerntext": "nấu",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "cảm ơn",
              "lerntext": "cảm ơn",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "xin lỗi",
              "lerntext": "xin lỗi",
              "de": "sich entschuldigen",
              "wieder": true
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
            },
            {
              "schrift": "nghỉ",
              "lerntext": "nghỉ",
              "de": "ausruhen"
            },
            {
              "schrift": "về nhà",
              "lerntext": "về nhà",
              "de": "nach Hause gehen",
              "wieder": true
            },
            {
              "schrift": "ra",
              "lerntext": "ra",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "lên",
              "lerntext": "lên",
              "de": "hinaufgehen",
              "wieder": true
            },
            {
              "schrift": "xuống",
              "lerntext": "xuống",
              "de": "hinuntergehen",
              "wieder": true
            },
            {
              "schrift": "bị",
              "lerntext": "bị",
              "de": "erleiden (Passiv, negativ)",
              "wieder": true
            },
            {
              "schrift": "chỉ đường",
              "lerntext": "chỉ đường",
              "de": "den Weg zeigen",
              "wieder": true
            },
            {
              "schrift": "giữ",
              "lerntext": "giữ",
              "de": "halten",
              "wieder": true
            },
            {
              "schrift": "dừng",
              "lerntext": "dừng",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "mặc",
              "lerntext": "mặc",
              "de": "anziehen (Kleidung)",
              "wieder": true
            },
            {
              "schrift": "mời",
              "lerntext": "mời",
              "de": "einladen",
              "wieder": true
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
              "schrift": "sinh",
              "lerntext": "sinh",
              "de": "geboren werden"
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
            },
            {
              "schrift": "sạc",
              "lerntext": "sạc",
              "de": "aufladen",
              "wieder": true
            },
            {
              "schrift": "tính tiền",
              "lerntext": "tính tiền",
              "de": "abrechnen",
              "wieder": true
            },
            {
              "schrift": "đăng ký",
              "lerntext": "đăng ký",
              "de": "sich anmelden",
              "wieder": true
            },
            {
              "schrift": "khám",
              "lerntext": "khám",
              "de": "untersuchen (Arzt)",
              "wieder": true
            },
            {
              "schrift": "nghỉ",
              "lerntext": "nghỉ",
              "de": "ausruhen",
              "wieder": true
            },
            {
              "schrift": "về nhà",
              "lerntext": "về nhà",
              "de": "nach Hause gehen",
              "wieder": true
            },
            {
              "schrift": "ra",
              "lerntext": "ra",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "lên",
              "lerntext": "lên",
              "de": "hinaufgehen",
              "wieder": true
            },
            {
              "schrift": "xuống",
              "lerntext": "xuống",
              "de": "hinuntergehen",
              "wieder": true
            },
            {
              "schrift": "bị",
              "lerntext": "bị",
              "de": "erleiden (Passiv, negativ)",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "16.8"
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
              "schrift": "sinh",
              "lerntext": "sinh",
              "de": "geboren werden",
              "wieder": true
            },
            {
              "schrift": "dọn",
              "lerntext": "dọn",
              "de": "aufräumen",
              "wieder": true
            },
            {
              "schrift": "chào",
              "lerntext": "chào",
              "de": "grüßen",
              "wieder": true
            },
            {
              "schrift": "kể",
              "lerntext": "kể",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "sạc",
              "lerntext": "sạc",
              "de": "aufladen",
              "wieder": true
            },
            {
              "schrift": "tính tiền",
              "lerntext": "tính tiền",
              "de": "abrechnen",
              "wieder": true
            },
            {
              "schrift": "đăng ký",
              "lerntext": "đăng ký",
              "de": "sich anmelden",
              "wieder": true
            },
            {
              "schrift": "khám",
              "lerntext": "khám",
              "de": "untersuchen (Arzt)",
              "wieder": true
            },
            {
              "schrift": "nghỉ",
              "lerntext": "nghỉ",
              "de": "ausruhen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.9"
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
              "schrift": "sinh",
              "lerntext": "sinh",
              "de": "geboren werden",
              "wieder": true
            },
            {
              "schrift": "dọn",
              "lerntext": "dọn",
              "de": "aufräumen",
              "wieder": true
            },
            {
              "schrift": "chào",
              "lerntext": "chào",
              "de": "grüßen",
              "wieder": true
            },
            {
              "schrift": "kể",
              "lerntext": "kể",
              "de": "erzählen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "16.10"
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
        "id": "16.11"
      }
    ]
  },
  {
    "number": 17,
    "title": "Weitere Adjektive",
    "niveau": null,
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
              "de": "leer"
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
            },
            {
              "schrift": "già",
              "lerntext": "già",
              "de": "alt (Person)",
              "wieder": true
            },
            {
              "schrift": "dễ",
              "lerntext": "dễ",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "miễn phí",
              "lerntext": "miễn phí",
              "de": "kostenlos",
              "wieder": true
            },
            {
              "schrift": "đầy",
              "lerntext": "đầy",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "trống",
              "lerntext": "trống",
              "de": "leer",
              "wieder": true
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
              "de": "neu"
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
            },
            {
              "schrift": "tử tế",
              "lerntext": "tử tế",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "mạnh",
              "lerntext": "mạnh",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "tươi",
              "lerntext": "tươi",
              "de": "frisch",
              "wieder": true
            },
            {
              "schrift": "mặn",
              "lerntext": "mặn",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "cay",
              "lerntext": "cay",
              "de": "scharf",
              "wieder": true
            },
            {
              "schrift": "già",
              "lerntext": "già",
              "de": "alt (Person)",
              "wieder": true
            },
            {
              "schrift": "dễ",
              "lerntext": "dễ",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "miễn phí",
              "lerntext": "miễn phí",
              "de": "kostenlos",
              "wieder": true
            },
            {
              "schrift": "đầy",
              "lerntext": "đầy",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "trống",
              "lerntext": "trống",
              "de": "leer",
              "wieder": true
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
            },
            {
              "schrift": "ngon",
              "lerntext": "ngon",
              "de": "lecker",
              "wieder": true
            },
            {
              "schrift": "mới mẻ",
              "lerntext": "mới mẻ",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "an toàn",
              "lerntext": "an toàn",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "ồn",
              "lerntext": "ồn",
              "de": "laut",
              "wieder": true
            },
            {
              "schrift": "yên tĩnh",
              "lerntext": "yên tĩnh",
              "de": "ruhig",
              "wieder": true
            },
            {
              "schrift": "tử tế",
              "lerntext": "tử tế",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "mạnh",
              "lerntext": "mạnh",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "tươi",
              "lerntext": "tươi",
              "de": "frisch",
              "wieder": true
            },
            {
              "schrift": "mặn",
              "lerntext": "mặn",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "cay",
              "lerntext": "cay",
              "de": "scharf",
              "wieder": true
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
              "de": "groß"
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
            },
            {
              "schrift": "rảnh",
              "lerntext": "rảnh",
              "de": "frei (Zeit)",
              "wieder": true
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "satt",
              "wieder": true
            },
            {
              "schrift": "ngầu",
              "lerntext": "ngầu",
              "de": "cool",
              "wieder": true
            },
            {
              "schrift": "thật thà",
              "lerntext": "thật thà",
              "de": "ehrlich",
              "wieder": true
            },
            {
              "schrift": "xinh",
              "lerntext": "xinh",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "ngon",
              "lerntext": "ngon",
              "de": "lecker",
              "wieder": true
            },
            {
              "schrift": "mới mẻ",
              "lerntext": "mới mẻ",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "an toàn",
              "lerntext": "an toàn",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "ồn",
              "lerntext": "ồn",
              "de": "laut",
              "wieder": true
            },
            {
              "schrift": "yên tĩnh",
              "lerntext": "yên tĩnh",
              "de": "ruhig",
              "wieder": true
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
              "de": "gleich"
            },
            {
              "schrift": "bình thường",
              "lerntext": "bình thường",
              "de": "normal"
            },
            {
              "schrift": "đông",
              "lerntext": "đông",
              "de": "voll"
            },
            {
              "schrift": "giỏi",
              "lerntext": "giỏi",
              "de": "tüchtig"
            },
            {
              "schrift": "trắng trẻo",
              "lerntext": "trắng trẻo",
              "de": "hellhäutig"
            },
            {
              "schrift": "lớn",
              "lerntext": "lớn",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "nóng",
              "lerntext": "nóng",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "bận",
              "lerntext": "bận",
              "de": "beschäftigt",
              "wieder": true
            },
            {
              "schrift": "vui",
              "lerntext": "vui",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "tiếp theo",
              "lerntext": "tiếp theo",
              "de": "nächster",
              "wieder": true
            },
            {
              "schrift": "rảnh",
              "lerntext": "rảnh",
              "de": "frei (Zeit)",
              "wieder": true
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "satt",
              "wieder": true
            },
            {
              "schrift": "ngầu",
              "lerntext": "ngầu",
              "de": "cool",
              "wieder": true
            },
            {
              "schrift": "thật thà",
              "lerntext": "thật thà",
              "de": "ehrlich",
              "wieder": true
            },
            {
              "schrift": "xinh",
              "lerntext": "xinh",
              "de": "hübsch",
              "wieder": true
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
              "de": "süß"
            },
            {
              "schrift": "giống",
              "lerntext": "giống",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "bình thường",
              "lerntext": "bình thường",
              "de": "normal",
              "wieder": true
            },
            {
              "schrift": "đông",
              "lerntext": "đông",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "giỏi",
              "lerntext": "giỏi",
              "de": "tüchtig",
              "wieder": true
            },
            {
              "schrift": "trắng trẻo",
              "lerntext": "trắng trẻo",
              "de": "hellhäutig",
              "wieder": true
            },
            {
              "schrift": "lớn",
              "lerntext": "lớn",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "nóng",
              "lerntext": "nóng",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "bận",
              "lerntext": "bận",
              "de": "beschäftigt",
              "wieder": true
            },
            {
              "schrift": "vui",
              "lerntext": "vui",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "tiếp theo",
              "lerntext": "tiếp theo",
              "de": "nächster",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "17.7"
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
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "giống",
              "lerntext": "giống",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "bình thường",
              "lerntext": "bình thường",
              "de": "normal",
              "wieder": true
            },
            {
              "schrift": "đông",
              "lerntext": "đông",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "giỏi",
              "lerntext": "giỏi",
              "de": "tüchtig",
              "wieder": true
            },
            {
              "schrift": "trắng trẻo",
              "lerntext": "trắng trẻo",
              "de": "hellhäutig",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "17.8"
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
        "id": "17.9"
      }
    ]
  },
  {
    "number": 18,
    "title": "Weitere Pronomen",
    "niveau": null,
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
              "de": "du (alter Mann)"
            },
            {
              "schrift": "cô",
              "lerntext": "cô",
              "de": "du (Frau mittleren Alters)"
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
              "de": "das"
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
            },
            {
              "schrift": "ông",
              "lerntext": "ông",
              "de": "du (alter Mann)",
              "wieder": true
            },
            {
              "schrift": "cô",
              "lerntext": "cô",
              "de": "du (Frau mittleren Alters)",
              "wieder": true
            },
            {
              "schrift": "chú",
              "lerntext": "chú",
              "de": "du (Mann mittleren Alters)",
              "wieder": true
            },
            {
              "schrift": "họ",
              "lerntext": "họ",
              "de": "sie (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "chúng tôi",
              "lerntext": "chúng tôi",
              "de": "wir (ohne dich)",
              "wieder": true
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
              "schrift": "chính mình",
              "lerntext": "chính mình",
              "de": "selbst"
            },
            {
              "schrift": "chúng ta",
              "lerntext": "chúng ta",
              "de": "wir (mit dir)",
              "wieder": true
            },
            {
              "schrift": "kia",
              "lerntext": "kia",
              "de": "jener",
              "wieder": true
            },
            {
              "schrift": "đó",
              "lerntext": "đó",
              "de": "das",
              "wieder": true
            },
            {
              "schrift": "mọi người",
              "lerntext": "mọi người",
              "de": "alle Leute",
              "wieder": true
            },
            {
              "schrift": "ai đó",
              "lerntext": "ai đó",
              "de": "irgendjemand",
              "wieder": true
            },
            {
              "schrift": "ông",
              "lerntext": "ông",
              "de": "du (alter Mann)",
              "wieder": true
            },
            {
              "schrift": "cô",
              "lerntext": "cô",
              "de": "du (Frau mittleren Alters)",
              "wieder": true
            },
            {
              "schrift": "chú",
              "lerntext": "chú",
              "de": "du (Mann mittleren Alters)",
              "wieder": true
            },
            {
              "schrift": "họ",
              "lerntext": "họ",
              "de": "sie (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "chúng tôi",
              "lerntext": "chúng tôi",
              "de": "wir (ohne dich)",
              "wieder": true
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
              "schrift": "chị",
              "lerntext": "chị",
              "de": "du"
            },
            {
              "schrift": "em",
              "lerntext": "em",
              "de": "du"
            },
            {
              "schrift": "cháu",
              "lerntext": "cháu",
              "de": "ich (zu viel Älteren)"
            },
            {
              "schrift": "anh",
              "lerntext": "anh",
              "de": "du"
            },
            {
              "schrift": "không ai",
              "lerntext": "không ai",
              "de": "niemand",
              "wieder": true
            },
            {
              "schrift": "khác",
              "lerntext": "khác",
              "de": "anderer",
              "wieder": true
            },
            {
              "schrift": "mỗi",
              "lerntext": "mỗi",
              "de": "jeder",
              "wieder": true
            },
            {
              "schrift": "cả hai",
              "lerntext": "cả hai",
              "de": "beide",
              "wieder": true
            },
            {
              "schrift": "chính mình",
              "lerntext": "chính mình",
              "de": "selbst",
              "wieder": true
            },
            {
              "schrift": "chúng ta",
              "lerntext": "chúng ta",
              "de": "wir (mit dir)",
              "wieder": true
            },
            {
              "schrift": "kia",
              "lerntext": "kia",
              "de": "jener",
              "wieder": true
            },
            {
              "schrift": "đó",
              "lerntext": "đó",
              "de": "das",
              "wieder": true
            },
            {
              "schrift": "mọi người",
              "lerntext": "mọi người",
              "de": "alle Leute",
              "wieder": true
            },
            {
              "schrift": "ai đó",
              "lerntext": "ai đó",
              "de": "irgendjemand",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "18.4"
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
              "schrift": "chị",
              "lerntext": "chị",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "em",
              "lerntext": "em",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "cháu",
              "lerntext": "cháu",
              "de": "ich (zu viel Älteren)",
              "wieder": true
            },
            {
              "schrift": "anh",
              "lerntext": "anh",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "không ai",
              "lerntext": "không ai",
              "de": "niemand",
              "wieder": true
            },
            {
              "schrift": "khác",
              "lerntext": "khác",
              "de": "anderer",
              "wieder": true
            },
            {
              "schrift": "mỗi",
              "lerntext": "mỗi",
              "de": "jeder",
              "wieder": true
            },
            {
              "schrift": "cả hai",
              "lerntext": "cả hai",
              "de": "beide",
              "wieder": true
            },
            {
              "schrift": "chính mình",
              "lerntext": "chính mình",
              "de": "selbst",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "18.5"
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
              "schrift": "chị",
              "lerntext": "chị",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "em",
              "lerntext": "em",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "cháu",
              "lerntext": "cháu",
              "de": "ich (zu viel Älteren)",
              "wieder": true
            },
            {
              "schrift": "anh",
              "lerntext": "anh",
              "de": "du",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "18.6"
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
        "id": "18.7"
      }
    ]
  },
  {
    "number": 19,
    "title": "Weitere Adverbien",
    "niveau": null,
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
              "schrift": "đang",
              "lerntext": "đang",
              "de": "gerade (Verlaufsform)"
            },
            {
              "schrift": "có lẽ",
              "lerntext": "có lẽ",
              "de": "vielleicht"
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
              "schrift": "gần như",
              "lerntext": "gần như",
              "de": "fast"
            },
            {
              "schrift": "vâng",
              "lerntext": "vâng",
              "de": "ja (höflich, Norden)",
              "wieder": true
            },
            {
              "schrift": "dạ",
              "lerntext": "dạ",
              "de": "ja (höflich, Süden)",
              "wieder": true
            },
            {
              "schrift": "một chút",
              "lerntext": "một chút",
              "de": "ein bisschen",
              "wieder": true
            },
            {
              "schrift": "hiếm khi",
              "lerntext": "hiếm khi",
              "de": "selten",
              "wieder": true
            },
            {
              "schrift": "còn",
              "lerntext": "còn",
              "de": "noch",
              "wieder": true
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
            },
            {
              "schrift": "hết",
              "lerntext": "hết",
              "de": "aufgebraucht"
            },
            {
              "schrift": "đang",
              "lerntext": "đang",
              "de": "gerade (Verlaufsform)",
              "wieder": true
            },
            {
              "schrift": "có lẽ",
              "lerntext": "có lẽ",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "thật",
              "lerntext": "thật",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "vậy",
              "lerntext": "vậy",
              "de": "so",
              "wieder": true
            },
            {
              "schrift": "gần như",
              "lerntext": "gần như",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "vâng",
              "lerntext": "vâng",
              "de": "ja (höflich, Norden)",
              "wieder": true
            },
            {
              "schrift": "dạ",
              "lerntext": "dạ",
              "de": "ja (höflich, Süden)",
              "wieder": true
            },
            {
              "schrift": "một chút",
              "lerntext": "một chút",
              "de": "ein bisschen",
              "wieder": true
            },
            {
              "schrift": "hiếm khi",
              "lerntext": "hiếm khi",
              "de": "selten",
              "wieder": true
            },
            {
              "schrift": "còn",
              "lerntext": "còn",
              "de": "noch",
              "wieder": true
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
              "schrift": "thôi",
              "lerntext": "thôi",
              "de": "nur"
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
              "de": "langsam"
            },
            {
              "schrift": "nữa",
              "lerntext": "nữa",
              "de": "noch mehr",
              "wieder": true
            },
            {
              "schrift": "cuối cùng",
              "lerntext": "cuối cùng",
              "de": "endlich",
              "wieder": true
            },
            {
              "schrift": "tiếc là",
              "lerntext": "tiếc là",
              "de": "leider",
              "wieder": true
            },
            {
              "schrift": "thẳng",
              "lerntext": "thẳng",
              "de": "geradeaus",
              "wieder": true
            },
            {
              "schrift": "hết",
              "lerntext": "hết",
              "de": "aufgebraucht",
              "wieder": true
            },
            {
              "schrift": "đang",
              "lerntext": "đang",
              "de": "gerade (Verlaufsform)",
              "wieder": true
            },
            {
              "schrift": "có lẽ",
              "lerntext": "có lẽ",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "thật",
              "lerntext": "thật",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "vậy",
              "lerntext": "vậy",
              "de": "so",
              "wieder": true
            },
            {
              "schrift": "gần như",
              "lerntext": "gần như",
              "de": "fast",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "19.4"
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
              "schrift": "thôi",
              "lerntext": "thôi",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "nhé",
              "lerntext": "nhé",
              "de": "ja? (freundliche Partikel)",
              "wieder": true
            },
            {
              "schrift": "muộn",
              "lerntext": "muộn",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "từ từ",
              "lerntext": "từ từ",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "nữa",
              "lerntext": "nữa",
              "de": "noch mehr",
              "wieder": true
            },
            {
              "schrift": "cuối cùng",
              "lerntext": "cuối cùng",
              "de": "endlich",
              "wieder": true
            },
            {
              "schrift": "tiếc là",
              "lerntext": "tiếc là",
              "de": "leider",
              "wieder": true
            },
            {
              "schrift": "thẳng",
              "lerntext": "thẳng",
              "de": "geradeaus",
              "wieder": true
            },
            {
              "schrift": "hết",
              "lerntext": "hết",
              "de": "aufgebraucht",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.5"
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
              "schrift": "thôi",
              "lerntext": "thôi",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "nhé",
              "lerntext": "nhé",
              "de": "ja? (freundliche Partikel)",
              "wieder": true
            },
            {
              "schrift": "muộn",
              "lerntext": "muộn",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "từ từ",
              "lerntext": "từ từ",
              "de": "langsam",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.6"
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
        "id": "19.7"
      }
    ]
  },
  {
    "number": 20,
    "title": "Weitere Zahlen",
    "niveau": null,
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
              "de": "zweiter"
            },
            {
              "schrift": "thứ ba",
              "lerntext": "thứ ba",
              "de": "dritter"
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
              "schrift": "quyển",
              "lerntext": "quyển",
              "de": "Stück (Bücher)"
            },
            {
              "schrift": "ba mươi",
              "lerntext": "ba mươi",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "triệu",
              "lerntext": "triệu",
              "de": "Million",
              "wieder": true
            },
            {
              "schrift": "thứ nhất",
              "lerntext": "thứ nhất",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "thứ hai",
              "lerntext": "thứ hai",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "thứ ba",
              "lerntext": "thứ ba",
              "de": "dritter",
              "wieder": true
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
              "schrift": "chiếc",
              "lerntext": "chiếc",
              "de": "Stück (Fahrzeuge, Einzelstücke)"
            },
            {
              "schrift": "cuối",
              "lerntext": "cuối",
              "de": "letzter",
              "wieder": true
            },
            {
              "schrift": "nửa",
              "lerntext": "nửa",
              "de": "halb",
              "wieder": true
            },
            {
              "schrift": "đôi",
              "lerntext": "đôi",
              "de": "Paar",
              "wieder": true
            },
            {
              "schrift": "tờ",
              "lerntext": "tờ",
              "de": "Stück (Blätter, Papiere)",
              "wieder": true
            },
            {
              "schrift": "quyển",
              "lerntext": "quyển",
              "de": "Stück (Bücher)",
              "wieder": true
            },
            {
              "schrift": "ba mươi",
              "lerntext": "ba mươi",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "triệu",
              "lerntext": "triệu",
              "de": "Million",
              "wieder": true
            },
            {
              "schrift": "thứ nhất",
              "lerntext": "thứ nhất",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "thứ hai",
              "lerntext": "thứ hai",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "thứ ba",
              "lerntext": "thứ ba",
              "de": "dritter",
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
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chiếc",
              "lerntext": "chiếc",
              "de": "Stück (Fahrzeuge, Einzelstücke)",
              "wieder": true
            },
            {
              "schrift": "cuối",
              "lerntext": "cuối",
              "de": "letzter",
              "wieder": true
            },
            {
              "schrift": "nửa",
              "lerntext": "nửa",
              "de": "halb",
              "wieder": true
            },
            {
              "schrift": "đôi",
              "lerntext": "đôi",
              "de": "Paar",
              "wieder": true
            },
            {
              "schrift": "tờ",
              "lerntext": "tờ",
              "de": "Stück (Blätter, Papiere)",
              "wieder": true
            },
            {
              "schrift": "quyển",
              "lerntext": "quyển",
              "de": "Stück (Bücher)",
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
        "id": "20.5"
      }
    ]
  },
  {
    "number": 21,
    "title": "Weitere Präpositionen",
    "niveau": null,
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
              "de": "in"
            },
            {
              "schrift": "từ",
              "lerntext": "từ",
              "de": "von"
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
              "de": "außerhalb"
            },
            {
              "schrift": "theo",
              "lerntext": "theo",
              "de": "gemäss"
            },
            {
              "schrift": "đối với",
              "lerntext": "đối với",
              "de": "für"
            },
            {
              "schrift": "trong",
              "lerntext": "trong",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "từ",
              "lerntext": "từ",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "quanh",
              "lerntext": "quanh",
              "de": "um herum",
              "wieder": true
            },
            {
              "schrift": "gần",
              "lerntext": "gần",
              "de": "nahe",
              "wieder": true
            },
            {
              "schrift": "xa",
              "lerntext": "xa",
              "de": "weit",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "21.2"
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
              "de": "zusammen mit",
              "wieder": true
            },
            {
              "schrift": "thay vì",
              "lerntext": "thay vì",
              "de": "anstatt",
              "wieder": true
            },
            {
              "schrift": "ngoài",
              "lerntext": "ngoài",
              "de": "außerhalb",
              "wieder": true
            },
            {
              "schrift": "theo",
              "lerntext": "theo",
              "de": "gemäss",
              "wieder": true
            },
            {
              "schrift": "đối với",
              "lerntext": "đối với",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "trong",
              "lerntext": "trong",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "từ",
              "lerntext": "từ",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "quanh",
              "lerntext": "quanh",
              "de": "um herum",
              "wieder": true
            },
            {
              "schrift": "gần",
              "lerntext": "gần",
              "de": "nahe",
              "wieder": true
            },
            {
              "schrift": "xa",
              "lerntext": "xa",
              "de": "weit",
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
              "de": "zusammen mit",
              "wieder": true
            },
            {
              "schrift": "thay vì",
              "lerntext": "thay vì",
              "de": "anstatt",
              "wieder": true
            },
            {
              "schrift": "ngoài",
              "lerntext": "ngoài",
              "de": "außerhalb",
              "wieder": true
            },
            {
              "schrift": "theo",
              "lerntext": "theo",
              "de": "gemäss",
              "wieder": true
            },
            {
              "schrift": "đối với",
              "lerntext": "đối với",
              "de": "für",
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "21.5"
      }
    ]
  },
  {
    "number": 22,
    "title": "Weitere Fragewörter",
    "niveau": null,
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
              "de": "schon?"
            }
          ]
        ],
        "newCount": 2,
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
    "title": "Weitere Bindewörter",
    "niveau": null,
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
              "schrift": "hay",
              "lerntext": "hay",
              "de": "oder (in Fragen)"
            },
            {
              "schrift": "mà",
              "lerntext": "mà",
              "de": "aber"
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
  },
  {
    "number": 24,
    "title": "Was hast du gemacht?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đã [Slot]",
          "lerntext": "tôi đã [Slot]"
        },
        "frameDe": "ich (neutral) habe [Slot].",
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
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen"
            },
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen"
            },
            {
              "schrift": "thấy",
              "lerntext": "thấy",
              "de": "sehen"
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen"
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen"
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "nghe",
              "lerntext": "nghe",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "mất",
              "lerntext": "mất",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
              "wieder": true
            },
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đã",
            "lerntext": "đã",
            "de": "schon (Vergangenheit)"
          }
        ],
        "id": "24.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đã [Slot]",
          "lerntext": "tôi đã [Slot]"
        },
        "frameDe": "ich (neutral) habe [Slot].",
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
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen"
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben"
            },
            {
              "schrift": "nghe",
              "lerntext": "nghe",
              "de": "hören"
            },
            {
              "schrift": "mất",
              "lerntext": "mất",
              "de": "verlieren"
            },
            {
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "thấy",
              "lerntext": "thấy",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
              "wieder": true
            },
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen",
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
          "schrift": "hôm qua tôi đã [Slot]",
          "lerntext": "hôm qua tôi đã [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
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
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen"
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen"
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
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "giúp",
              "lerntext": "giúp",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "trả",
              "lerntext": "trả",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
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
          "schrift": "hôm qua tôi đã [Slot]",
          "lerntext": "hôm qua tôi đã [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
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
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen"
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
              "schrift": "giúp",
              "lerntext": "giúp",
              "de": "helfen"
            },
            {
              "schrift": "trả",
              "lerntext": "trả",
              "de": "bezahlen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen",
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
        "kind": "frame",
        "frame": {
          "schrift": "tôi đã [Slot] rồi",
          "lerntext": "tôi đã [Slot] rồi"
        },
        "frameDe": "Ich habe schon [Slot].",
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
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen"
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen"
            },
            {
              "schrift": "cho",
              "lerntext": "cho",
              "de": "für"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "đóng",
              "lerntext": "đóng",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "đến",
              "lerntext": "đến",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "sau",
              "lerntext": "sau",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "với",
              "lerntext": "với",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "24.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đã [Slot] rồi",
          "lerntext": "tôi đã [Slot] rồi"
        },
        "frameDe": "Ich habe schon [Slot].",
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
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen"
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
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen"
            },
            {
              "schrift": "thắng",
              "lerntext": "thắng",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "quên",
              "lerntext": "quên",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "24.6"
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
        "id": "24.7"
      }
    ]
  },
  {
    "number": 25,
    "title": "Du, ihr, sie",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "bạn [Slot]",
          "lerntext": "bạn [Slot]"
        },
        "frameDe": "du (Gleichaltrige) [Slot].",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
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
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen"
            },
            {
              "schrift": "thấy",
              "lerntext": "thấy",
              "de": "sehen"
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen"
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen"
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "trở thành",
              "lerntext": "trở thành",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "thích",
              "lerntext": "thích",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "phải",
              "lerntext": "phải",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern",
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
          "schrift": "bạn [Slot]",
          "lerntext": "bạn [Slot]"
        },
        "frameDe": "du (Gleichaltrige) [Slot].",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen"
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben"
            },
            {
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "thấy",
              "lerntext": "thấy",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "25.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó [Slot]",
          "lerntext": "nó [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen"
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen"
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
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben",
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
        "kind": "frame",
        "frame": {
          "schrift": "nó [Slot]",
          "lerntext": "nó [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
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
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "25.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "mình [Slot]",
          "lerntext": "mình [Slot]"
        },
        "frameDe": "ich [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
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
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen"
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen"
            },
            {
              "schrift": "cho",
              "lerntext": "cho",
              "de": "für"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "đến",
              "lerntext": "đến",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "về",
              "lerntext": "về",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "sau",
              "lerntext": "sau",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "bằng",
              "lerntext": "bằng",
              "de": "mit (Mittel)",
              "wieder": true
            },
            {
              "schrift": "với",
              "lerntext": "với",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "25.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "mình [Slot]",
          "lerntext": "mình [Slot]"
        },
        "frameDe": "ich [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen"
            },
            {
              "schrift": "thắng",
              "lerntext": "thắng",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "quên",
              "lerntext": "quên",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "trở thành",
              "lerntext": "trở thành",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "thích",
              "lerntext": "thích",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "phải",
              "lerntext": "phải",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "25.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó [Slot]",
          "lerntext": "nó [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben"
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen"
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen"
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
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "25.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nó [Slot]",
          "lerntext": "nó [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "nó",
            "lerntext": "nó",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen"
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen"
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "25.8"
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
        "id": "25.9"
      }
    ]
  },
  {
    "number": 26,
    "title": "Größer, besser, lieber",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "cái này [Slot] hơn",
          "lerntext": "cái này [Slot] hơn"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
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
              "schrift": "quan trọng",
              "lerntext": "quan trọng",
              "de": "wichtig"
            },
            {
              "schrift": "nguy hiểm",
              "lerntext": "nguy hiểm",
              "de": "gefährlich"
            },
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer"
            },
            {
              "schrift": "bẩn",
              "lerntext": "bẩn",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "buồn",
              "lerntext": "buồn",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "mệt",
              "lerntext": "mệt",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "xấu",
              "lerntext": "xấu",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "xám",
              "lerntext": "xám",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "rẻ",
              "lerntext": "rẻ",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "lạnh",
              "lerntext": "lạnh",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "nhẹ",
              "lerntext": "nhẹ",
              "de": "leicht",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "hơn",
            "lerntext": "hơn",
            "de": "als (Vergleich)"
          }
        ],
        "id": "26.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "cái này [Slot] hơn",
          "lerntext": "cái này [Slot] hơn"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bẩn",
              "lerntext": "bẩn",
              "de": "schmutzig"
            },
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
              "schrift": "thú vị",
              "lerntext": "thú vị",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "khó",
              "lerntext": "khó",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "quan trọng",
              "lerntext": "quan trọng",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "nguy hiểm",
              "lerntext": "nguy hiểm",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "xấu",
              "lerntext": "xấu",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)",
              "wieder": true
            },
            {
              "schrift": "thấp",
              "lerntext": "thấp",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "ấm",
              "lerntext": "ấm",
              "de": "warm",
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
          "schrift": "[Slot] như bạn",
          "lerntext": "[Slot] như bạn"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
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
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)"
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung"
            },
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer"
            },
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "lạnh",
              "lerntext": "lạnh",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "ấm",
              "lerntext": "ấm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "cao",
              "lerntext": "cao",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "chua",
              "lerntext": "chua",
              "de": "sauer",
              "wieder": true
            },
            {
              "schrift": "nâu",
              "lerntext": "nâu",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "đỏ",
              "lerntext": "đỏ",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "nặng",
              "lerntext": "nặng",
              "de": "schwer",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "khi",
            "lerntext": "khi",
            "de": "als"
          }
        ],
        "id": "26.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] như bạn",
          "lerntext": "[Slot] như bạn"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön"
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
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund"
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "nhỏ",
              "lerntext": "nhỏ",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)",
              "wieder": true
            },
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "vàng",
              "lerntext": "vàng",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "trắng",
              "lerntext": "trắng",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "xấu",
              "lerntext": "xấu",
              "de": "hässlich",
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
        "id": "26.5"
      }
    ]
  },
  {
    "number": 27,
    "title": "Ich fühle mich",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi cảm thấy [Slot]",
          "lerntext": "tôi cảm thấy [Slot]"
        },
        "frameDe": "ich (neutral) fühle mich [Slot].",
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
              "schrift": "buồn",
              "lerntext": "buồn",
              "de": "traurig"
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund"
            },
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach"
            },
            {
              "schrift": "sẵn sàng",
              "lerntext": "sẵn sàng",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)",
              "wieder": true
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "xanh",
              "lerntext": "xanh",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "xám",
              "lerntext": "xám",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "rẻ",
              "lerntext": "rẻ",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz",
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
          "schrift": "tôi cảm thấy [Slot]",
          "lerntext": "tôi cảm thấy [Slot]"
        },
        "frameDe": "ich (neutral) fühle mich [Slot].",
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
              "schrift": "sẵn sàng",
              "lerntext": "sẵn sàng",
              "de": "bereit"
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung"
            },
            {
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)"
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend"
            },
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön"
            },
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "buồn",
              "lerntext": "buồn",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "mệt",
              "lerntext": "mệt",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "đói",
              "lerntext": "đói",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "nhẹ",
              "lerntext": "nhẹ",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)",
              "wieder": true
            },
            {
              "schrift": "khát",
              "lerntext": "khát",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "thấp",
              "lerntext": "thấp",
              "de": "niedrig",
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
          "schrift": "mình gặp nhau [Slot]",
          "lerntext": "mình gặp nhau [Slot]"
        },
        "frameDe": "ich treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute"
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
              "de": "früh"
            },
            {
              "schrift": "hôm qua",
              "lerntext": "hôm qua",
              "de": "gestern"
            },
            {
              "schrift": "thường",
              "lerntext": "thường",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "không bao giờ",
              "lerntext": "không bao giờ",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "luôn luôn",
              "lerntext": "luôn luôn",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "tốt",
              "lerntext": "tốt",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "chậm",
              "lerntext": "chậm",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "nhanh",
              "lerntext": "nhanh",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "cứ",
              "lerntext": "cứ",
              "de": "ruhig",
              "wieder": true
            },
            {
              "schrift": "đúng",
              "lerntext": "đúng",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "lại",
              "lerntext": "lại",
              "de": "wieder",
              "wieder": true
            },
            {
              "schrift": "kìa",
              "lerntext": "kìa",
              "de": "dort",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "nhau",
            "lerntext": "nhau",
            "de": "einander"
          }
        ],
        "id": "27.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "mình gặp nhau [Slot]",
          "lerntext": "mình gặp nhau [Slot]"
        },
        "frameDe": "ich treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "thường",
              "lerntext": "thường",
              "de": "oft"
            },
            {
              "schrift": "không bao giờ",
              "lerntext": "không bao giờ",
              "de": "nie"
            },
            {
              "schrift": "luôn luôn",
              "lerntext": "luôn luôn",
              "de": "immer"
            },
            {
              "schrift": "hôm qua",
              "lerntext": "hôm qua",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "ngày mai",
              "lerntext": "ngày mai",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "bây giờ",
              "lerntext": "bây giờ",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "sớm",
              "lerntext": "sớm",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "tốt",
              "lerntext": "tốt",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "chậm",
              "lerntext": "chậm",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "nhanh",
              "lerntext": "nhanh",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "mới",
              "lerntext": "mới",
              "de": "gerade erst",
              "wieder": true
            },
            {
              "schrift": "ít",
              "lerntext": "ít",
              "de": "wenig",
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
        "task": "Sag, wie du dich fühlst und warum.",
        "newFrameWords": [],
        "id": "27.5"
      }
    ]
  },
  {
    "number": 28,
    "title": "Weil, wenn, obwohl",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi ở lại đây [Slot] tôi mệt",
          "lerntext": "tôi ở lại đây [Slot] tôi mệt"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vì",
              "lerntext": "vì",
              "de": "weil"
            },
            {
              "schrift": "nếu",
              "lerntext": "nếu",
              "de": "wenn"
            },
            {
              "schrift": "mặc dù",
              "lerntext": "mặc dù",
              "de": "obwohl"
            },
            {
              "schrift": "trong khi",
              "lerntext": "trong khi",
              "de": "während"
            },
            {
              "schrift": "khi",
              "lerntext": "khi",
              "de": "als"
            },
            {
              "schrift": "hoặc",
              "lerntext": "hoặc",
              "de": "oder",
              "wieder": true
            },
            {
              "schrift": "và",
              "lerntext": "và",
              "de": "und",
              "wieder": true
            },
            {
              "schrift": "nhưng",
              "lerntext": "nhưng",
              "de": "aber",
              "wieder": true
            },
            {
              "schrift": "cũng",
              "lerntext": "cũng",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "hơn",
              "lerntext": "hơn",
              "de": "als (Vergleich)",
              "wieder": true
            },
            {
              "schrift": "thì",
              "lerntext": "thì",
              "de": "dann (Satzverbinder)",
              "wieder": true
            },
            {
              "schrift": "nên",
              "lerntext": "nên",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "rồi",
              "lerntext": "rồi",
              "de": "dann",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "28.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi ở lại đây [Slot] tôi mệt",
          "lerntext": "tôi ở lại đây [Slot] tôi mệt"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
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
              "schrift": "và",
              "lerntext": "và",
              "de": "und"
            },
            {
              "schrift": "nếu",
              "lerntext": "nếu",
              "de": "wenn",
              "wieder": true
            },
            {
              "schrift": "khi",
              "lerntext": "khi",
              "de": "als",
              "wieder": true
            },
            {
              "schrift": "vì",
              "lerntext": "vì",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "mặc dù",
              "lerntext": "mặc dù",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "trong khi",
              "lerntext": "trong khi",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "cũng",
              "lerntext": "cũng",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "hơn",
              "lerntext": "hơn",
              "de": "als (Vergleich)",
              "wieder": true
            },
            {
              "schrift": "thì",
              "lerntext": "thì",
              "de": "dann (Satzverbinder)",
              "wieder": true
            },
            {
              "schrift": "nên",
              "lerntext": "nên",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "rồi",
              "lerntext": "rồi",
              "de": "dann",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "28.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi nghĩ rằng nó [Slot]",
          "lerntext": "tôi nghĩ rằng nó [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch"
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank"
            },
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz"
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang"
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber"
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)",
              "wieder": true
            },
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "cao",
              "lerntext": "cao",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "chua",
              "lerntext": "chua",
              "de": "sauer",
              "wieder": true
            },
            {
              "schrift": "nâu",
              "lerntext": "nâu",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "chán",
              "lerntext": "chán",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "đỏ",
              "lerntext": "đỏ",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "nặng",
              "lerntext": "nặng",
              "de": "schwer",
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
        "kind": "frame",
        "frame": {
          "schrift": "tôi nghĩ rằng nó [Slot]",
          "lerntext": "tôi nghĩ rằng nó [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach"
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz"
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)"
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend"
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "buồn cười",
              "lerntext": "buồn cười",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "vàng",
              "lerntext": "vàng",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "trắng",
              "lerntext": "trắng",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "xấu",
              "lerntext": "xấu",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "xanh",
              "lerntext": "xanh",
              "de": "blau",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "28.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nếu có thời gian, tôi muốn [Slot]",
          "lerntext": "nếu có thời gian, tôi muốn [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben"
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen"
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen"
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
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "trở thành",
              "lerntext": "trở thành",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "thích",
              "lerntext": "thích",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "phải",
              "lerntext": "phải",
              "de": "müssen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "28.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nếu có thời gian, tôi muốn [Slot]",
          "lerntext": "nếu có thời gian, tôi muốn [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen"
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen"
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "28.6"
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
        "id": "28.7"
      }
    ]
  },
  {
    "number": 29,
    "title": "Bitten und auffordern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "bạn có thể [Slot] không?",
          "lerntext": "bạn có thể [Slot] không?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen"
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen"
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
              "schrift": "giúp",
              "lerntext": "giúp",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "trả",
              "lerntext": "trả",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "được",
              "lerntext": "được",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
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
          "schrift": "bạn có thể [Slot] không?",
          "lerntext": "bạn có thể [Slot] không?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
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
              "schrift": "giúp",
              "lerntext": "giúp",
              "de": "helfen"
            },
            {
              "schrift": "trả",
              "lerntext": "trả",
              "de": "bezahlen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen",
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
          "schrift": "bạn phải [Slot]",
          "lerntext": "bạn phải [Slot]"
        },
        "frameDe": "du (Gleichaltrige) musst [Slot].",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          }
        ],
        "slotGroups": [
          [
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
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen"
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen"
            },
            {
              "schrift": "cho",
              "lerntext": "cho",
              "de": "für"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "bên cạnh",
              "lerntext": "bên cạnh",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "đến",
              "lerntext": "đến",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "về",
              "lerntext": "về",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "sau",
              "lerntext": "sau",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "bằng",
              "lerntext": "bằng",
              "de": "mit (Mittel)",
              "wieder": true
            },
            {
              "schrift": "với",
              "lerntext": "với",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter",
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
          "schrift": "bạn phải [Slot]",
          "lerntext": "bạn phải [Slot]"
        },
        "frameDe": "du (Gleichaltrige) musst [Slot].",
        "pronouns": [
          {
            "schrift": "bạn",
            "lerntext": "bạn",
            "de": "du (Gleichaltrige)"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen"
            },
            {
              "schrift": "thắng",
              "lerntext": "thắng",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "quên",
              "lerntext": "quên",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "trở thành",
              "lerntext": "trở thành",
              "de": "werden",
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
        "task": "Bitte jemanden höflich um etwas.",
        "newFrameWords": [],
        "id": "29.5"
      }
    ]
  },
  {
    "number": 30,
    "title": "Wem gebe ich was?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đưa sách cho [Slot]",
          "lerntext": "tôi đưa sách cho [Slot]"
        },
        "frameDe": "ich (neutral) gebe [Slot] das Buch.",
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
              "schrift": "bạn",
              "lerntext": "bạn",
              "de": "du (Gleichaltrige)"
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
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern)"
            },
            {
              "schrift": "sinh viên",
              "lerntext": "sinh viên",
              "de": "Student"
            },
            {
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau)",
              "wieder": true
            },
            {
              "schrift": "cái gì",
              "lerntext": "cái gì",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "ai",
              "lerntext": "ai",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "kỳ thi",
              "lerntext": "kỳ thi",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "bài",
              "lerntext": "bài",
              "de": "Lektion",
              "wieder": true
            },
            {
              "schrift": "nhau",
              "lerntext": "nhau",
              "de": "einander",
              "wieder": true
            },
            {
              "schrift": "quần áo",
              "lerntext": "quần áo",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "tên",
              "lerntext": "tên",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "các bạn",
              "lerntext": "các bạn",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "cửa hàng",
              "lerntext": "cửa hàng",
              "de": "Laden",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đưa",
            "lerntext": "đưa",
            "de": "geben"
          }
        ],
        "id": "30.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đưa sách cho [Slot]",
          "lerntext": "tôi đưa sách cho [Slot]"
        },
        "frameDe": "ich (neutral) gebe [Slot] das Buch.",
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
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau)"
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern)",
              "wieder": true
            },
            {
              "schrift": "bạn",
              "lerntext": "bạn",
              "de": "du (Gleichaltrige)",
              "wieder": true
            },
            {
              "schrift": "cái gì",
              "lerntext": "cái gì",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "ai",
              "lerntext": "ai",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "nhau",
              "lerntext": "nhau",
              "de": "einander",
              "wieder": true
            },
            {
              "schrift": "các bạn",
              "lerntext": "các bạn",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "này",
              "lerntext": "này",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "tất cả",
              "lerntext": "tất cả",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "của",
              "lerntext": "của",
              "de": "von (Besitz)",
              "wieder": true
            },
            {
              "schrift": "mình",
              "lerntext": "mình",
              "de": "ich",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "30.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi chỉ thành phố cho [Slot]",
          "lerntext": "tôi chỉ thành phố cho [Slot]"
        },
        "frameDe": "ich (neutral) zeige [Slot] die Stadt.",
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
              "schrift": "bạn",
              "lerntext": "bạn",
              "de": "du (Gleichaltrige)"
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
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern)"
            },
            {
              "schrift": "sinh viên",
              "lerntext": "sinh viên",
              "de": "Student"
            },
            {
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau)",
              "wieder": true
            },
            {
              "schrift": "kỳ thi",
              "lerntext": "kỳ thi",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "bài",
              "lerntext": "bài",
              "de": "Lektion",
              "wieder": true
            },
            {
              "schrift": "cái gì",
              "lerntext": "cái gì",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "ai",
              "lerntext": "ai",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "nhau",
              "lerntext": "nhau",
              "de": "einander",
              "wieder": true
            },
            {
              "schrift": "giấy",
              "lerntext": "giấy",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "áo",
              "lerntext": "áo",
              "de": "Oberteil",
              "wieder": true
            },
            {
              "schrift": "cầu",
              "lerntext": "cầu",
              "de": "Brücke",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "30.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi chỉ thành phố cho [Slot]",
          "lerntext": "tôi chỉ thành phố cho [Slot]"
        },
        "frameDe": "ich (neutral) zeige [Slot] die Stadt.",
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
              "schrift": "bà",
              "lerntext": "bà",
              "de": "du (alte Frau)"
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "ich (zu den Eltern)",
              "wieder": true
            },
            {
              "schrift": "bạn",
              "lerntext": "bạn",
              "de": "du (Gleichaltrige)",
              "wieder": true
            },
            {
              "schrift": "cái gì",
              "lerntext": "cái gì",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "ai",
              "lerntext": "ai",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "nhau",
              "lerntext": "nhau",
              "de": "einander",
              "wieder": true
            },
            {
              "schrift": "các bạn",
              "lerntext": "các bạn",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "này",
              "lerntext": "này",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "tất cả",
              "lerntext": "tất cả",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "của",
              "lerntext": "của",
              "de": "von (Besitz)",
              "wieder": true
            },
            {
              "schrift": "mình",
              "lerntext": "mình",
              "de": "ich",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "30.4"
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
        "id": "30.5"
      }
    ]
  },
  {
    "number": 31,
    "title": "Ein Glas, genug, zu viel",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn một ly [Slot]",
          "lerntext": "tôi muốn một ly [Slot]"
        },
        "frameDe": "ich (neutral) möchte ein Glas [Slot].",
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
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser"
            },
            {
              "schrift": "bia",
              "lerntext": "bia",
              "de": "Bier"
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch"
            },
            {
              "schrift": "cà phê",
              "lerntext": "cà phê",
              "de": "Kaffee"
            },
            {
              "schrift": "kỳ thi",
              "lerntext": "kỳ thi",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "bài",
              "lerntext": "bài",
              "de": "Lektion",
              "wieder": true
            },
            {
              "schrift": "bệnh viện",
              "lerntext": "bệnh viện",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "phút",
              "lerntext": "phút",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "muối",
              "lerntext": "muối",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "cá",
              "lerntext": "cá",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "vé",
              "lerntext": "vé",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "da",
              "lerntext": "da",
              "de": "Haut",
              "wieder": true
            },
            {
              "schrift": "rừng",
              "lerntext": "rừng",
              "de": "Wald",
              "wieder": true
            },
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ly",
            "lerntext": "ly",
            "de": "Glas"
          }
        ],
        "id": "31.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "mình có đủ [Slot]",
          "lerntext": "mình có đủ [Slot]"
        },
        "frameDe": "ich haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
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
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot"
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst"
            },
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch"
            },
            {
              "schrift": "cá",
              "lerntext": "cá",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "xe buýt",
              "lerntext": "xe buýt",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "đêm",
              "lerntext": "đêm",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "giáo viên",
              "lerntext": "giáo viên",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "trà",
              "lerntext": "trà",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "thành phố",
              "lerntext": "thành phố",
              "de": "Stadt",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đủ",
            "lerntext": "đủ",
            "de": "genug"
          }
        ],
        "id": "31.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "mình có đủ [Slot]",
          "lerntext": "mình có đủ [Slot]"
        },
        "frameDe": "ich haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "mình",
            "lerntext": "mình",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cá",
              "lerntext": "cá",
              "de": "Fisch"
            },
            {
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße"
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch"
            },
            {
              "schrift": "tiền",
              "lerntext": "tiền",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "thời gian",
              "lerntext": "thời gian",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "trái cây",
              "lerntext": "trái cây",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "thịt",
              "lerntext": "thịt",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "ga tàu",
              "lerntext": "ga tàu",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "gió",
              "lerntext": "gió",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "bữa tối",
              "lerntext": "bữa tối",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "mắt",
              "lerntext": "mắt",
              "de": "Auge",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "31.3"
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
        "id": "31.4"
      }
    ]
  },
  {
    "number": 32,
    "title": "Seit, vor, in einer Stunde",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đợi một [Slot] rồi",
          "lerntext": "tôi đợi một [Slot] rồi"
        },
        "frameDe": "ich (neutral) warte seit einer [Slot].",
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
              "schrift": "giờ",
              "lerntext": "giờ",
              "de": "Stunde"
            },
            {
              "schrift": "phút",
              "lerntext": "phút",
              "de": "Minute"
            },
            {
              "schrift": "tuần",
              "lerntext": "tuần",
              "de": "Woche"
            },
            {
              "schrift": "đêm",
              "lerntext": "đêm",
              "de": "Nacht"
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "kỳ thi",
              "lerntext": "kỳ thi",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "quần áo",
              "lerntext": "quần áo",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "bản đồ",
              "lerntext": "bản đồ",
              "de": "Landkarte",
              "wieder": true
            },
            {
              "schrift": "nhà vệ sinh",
              "lerntext": "nhà vệ sinh",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "cầu",
              "lerntext": "cầu",
              "de": "Brücke",
              "wieder": true
            },
            {
              "schrift": "gia đình",
              "lerntext": "gia đình",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "vé",
              "lerntext": "vé",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "da",
              "lerntext": "da",
              "de": "Haut",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "32.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi đợi một [Slot] rồi",
          "lerntext": "tôi đợi một [Slot] rồi"
        },
        "frameDe": "ich (neutral) warte seit einem [Slot].",
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
              "schrift": "ngày",
              "lerntext": "ngày",
              "de": "Tag"
            },
            {
              "schrift": "tối",
              "lerntext": "tối",
              "de": "Abend"
            },
            {
              "schrift": "miệng",
              "lerntext": "miệng",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "sân bay",
              "lerntext": "sân bay",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "ghế",
              "lerntext": "ghế",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "giày",
              "lerntext": "giày",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "con trai",
              "lerntext": "con trai",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "tàu",
              "lerntext": "tàu",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "đầu",
              "lerntext": "đầu",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "cửa hàng",
              "lerntext": "cửa hàng",
              "de": "Laden",
              "wieder": true
            },
            {
              "schrift": "rừng",
              "lerntext": "rừng",
              "de": "Wald",
              "wieder": true
            },
            {
              "schrift": "xe buýt",
              "lerntext": "xe buýt",
              "de": "Bus",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "32.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] tôi về nhà",
          "lerntext": "[Slot] tôi về nhà"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
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
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute"
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
              "de": "früh"
            },
            {
              "schrift": "hôm qua",
              "lerntext": "hôm qua",
              "de": "gestern"
            },
            {
              "schrift": "thường",
              "lerntext": "thường",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "không bao giờ",
              "lerntext": "không bao giờ",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "luôn luôn",
              "lerntext": "luôn luôn",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "tốt",
              "lerntext": "tốt",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "đủ",
              "lerntext": "đủ",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "cứ",
              "lerntext": "cứ",
              "de": "ruhig",
              "wieder": true
            },
            {
              "schrift": "chung",
              "lerntext": "chung",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "dở",
              "lerntext": "dở",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "chậm",
              "lerntext": "chậm",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "ngay",
              "lerntext": "ngay",
              "de": "sofort",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "32.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] tôi về nhà",
          "lerntext": "[Slot] tôi về nhà"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
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
              "schrift": "thường",
              "lerntext": "thường",
              "de": "oft"
            },
            {
              "schrift": "không bao giờ",
              "lerntext": "không bao giờ",
              "de": "nie"
            },
            {
              "schrift": "luôn luôn",
              "lerntext": "luôn luôn",
              "de": "immer"
            },
            {
              "schrift": "hôm qua",
              "lerntext": "hôm qua",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "hôm nay",
              "lerntext": "hôm nay",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "ngày mai",
              "lerntext": "ngày mai",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "bây giờ",
              "lerntext": "bây giờ",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "sớm",
              "lerntext": "sớm",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "tốt",
              "lerntext": "tốt",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "đúng",
              "lerntext": "đúng",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "đôi khi",
              "lerntext": "đôi khi",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "nhiều",
              "lerntext": "nhiều",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "quá",
              "lerntext": "quá",
              "de": "zu",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "32.4"
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
        "id": "32.5"
      }
    ]
  },
  {
    "number": 33,
    "title": "Ich hätte gern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "ich (neutral) hätte gern [Slot].",
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
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben"
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen"
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen"
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
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "đưa",
              "lerntext": "đưa",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "thích",
              "lerntext": "thích",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "33.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot]",
          "lerntext": "tôi muốn [Slot]"
        },
        "frameDe": "ich (neutral) hätte gern [Slot].",
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
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen"
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen"
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "đưa",
              "lerntext": "đưa",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "được",
              "lerntext": "được",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "33.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "bạn cho tôi [Slot] được không?",
          "lerntext": "bạn cho tôi [Slot] được không?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
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
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser"
            },
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot"
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel"
            },
            {
              "schrift": "sách",
              "lerntext": "sách",
              "de": "Buch"
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche"
            },
            {
              "schrift": "cà phê",
              "lerntext": "cà phê",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "bữa trưa",
              "lerntext": "bữa trưa",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "cửa sổ",
              "lerntext": "cửa sổ",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "bữa sáng",
              "lerntext": "bữa sáng",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "mặt trời",
              "lerntext": "mặt trời",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "mưa",
              "lerntext": "mưa",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "núi",
              "lerntext": "núi",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "rau",
              "lerntext": "rau",
              "de": "Gemüse",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "33.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "bạn cho tôi [Slot] được không?",
          "lerntext": "bạn cho tôi [Slot] được không?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
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
              "schrift": "đường",
              "lerntext": "đường",
              "de": "Straße"
            },
            {
              "schrift": "cà phê",
              "lerntext": "cà phê",
              "de": "Kaffee"
            },
            {
              "schrift": "sữa",
              "lerntext": "sữa",
              "de": "Milch"
            },
            {
              "schrift": "chìa khóa",
              "lerntext": "chìa khóa",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "túi",
              "lerntext": "túi",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "sách",
              "lerntext": "sách",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "nước",
              "lerntext": "nước",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "bánh mì",
              "lerntext": "bánh mì",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "thời tiết",
              "lerntext": "thời tiết",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "tên",
              "lerntext": "tên",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "bài",
              "lerntext": "bài",
              "de": "Lektion",
              "wieder": true
            },
            {
              "schrift": "biển",
              "lerntext": "biển",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "33.4"
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
        "id": "33.5"
      }
    ]
  },
  {
    "number": 34,
    "title": "Ich glaube, dass",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi nghĩ cái này [Slot]",
          "lerntext": "tôi nghĩ cái này [Slot]"
        },
        "frameDe": "ich (neutral) denke, das ist [Slot].",
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
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)"
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung"
            },
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer"
            },
            {
              "schrift": "lạnh",
              "lerntext": "lạnh",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "ấm",
              "lerntext": "ấm",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "xám",
              "lerntext": "xám",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "rẻ",
              "lerntext": "rẻ",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "đói",
              "lerntext": "đói",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "nhẹ",
              "lerntext": "nhẹ",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "khát",
              "lerntext": "khát",
              "de": "durstig",
              "wieder": true
            },
            {
              "schrift": "thấp",
              "lerntext": "thấp",
              "de": "niedrig",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "34.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi nghĩ cái này [Slot]",
          "lerntext": "tôi nghĩ cái này [Slot]"
        },
        "frameDe": "ich (neutral) denke, das ist [Slot].",
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
              "schrift": "đẹp",
              "lerntext": "đẹp",
              "de": "schön"
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
              "schrift": "khỏe",
              "lerntext": "khỏe",
              "de": "gesund"
            },
            {
              "schrift": "to",
              "lerntext": "to",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "nhỏ",
              "lerntext": "nhỏ",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "đắt",
              "lerntext": "đắt",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "trẻ",
              "lerntext": "trẻ",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "cũ",
              "lerntext": "cũ",
              "de": "alt (Sache)",
              "wieder": true
            },
            {
              "schrift": "cao",
              "lerntext": "cao",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "chua",
              "lerntext": "chua",
              "de": "sauer",
              "wieder": true
            },
            {
              "schrift": "nâu",
              "lerntext": "nâu",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "chán",
              "lerntext": "chán",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "đỏ",
              "lerntext": "đỏ",
              "de": "rot",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "34.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi thấy cái này rất [Slot]",
          "lerntext": "tôi thấy cái này rất [Slot]"
        },
        "frameDe": "ich (neutral) finde das sehr [Slot].",
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
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch"
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank"
            },
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz"
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang"
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber"
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)",
              "wieder": true
            },
            {
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "nặng",
              "lerntext": "nặng",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "buồn cười",
              "lerntext": "buồn cười",
              "de": "lustig",
              "wieder": true
            },
            {
              "schrift": "vàng",
              "lerntext": "vàng",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "trắng",
              "lerntext": "trắng",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "xấu",
              "lerntext": "xấu",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "xanh",
              "lerntext": "xanh",
              "de": "blau",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "34.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi thấy cái này rất [Slot]",
          "lerntext": "tôi thấy cái này rất [Slot]"
        },
        "frameDe": "ich (neutral) finde das sehr [Slot].",
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
              "schrift": "yếu",
              "lerntext": "yếu",
              "de": "schwach"
            },
            {
              "schrift": "đen",
              "lerntext": "đen",
              "de": "schwarz"
            },
            {
              "schrift": "ngọt",
              "lerntext": "ngọt",
              "de": "süß (Geschmack)"
            },
            {
              "schrift": "giận",
              "lerntext": "giận",
              "de": "wütend"
            },
            {
              "schrift": "sai",
              "lerntext": "sai",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "ngắn",
              "lerntext": "ngắn",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "dài",
              "lerntext": "dài",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "sạch",
              "lerntext": "sạch",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "ốm",
              "lerntext": "ốm",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "xám",
              "lerntext": "xám",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "rẻ",
              "lerntext": "rẻ",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "đói",
              "lerntext": "đói",
              "de": "hungrig",
              "wieder": true
            },
            {
              "schrift": "nhẹ",
              "lerntext": "nhẹ",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "khát",
              "lerntext": "khát",
              "de": "durstig",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "34.4"
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
        "id": "34.5"
      }
    ]
  },
  {
    "number": 35,
    "title": "Was ich vorhabe",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "ngày mai tôi sẽ [Slot]",
          "lerntext": "ngày mai tôi sẽ [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
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
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen"
            },
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen"
            },
            {
              "schrift": "thấy",
              "lerntext": "thấy",
              "de": "sehen"
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen"
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen"
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "đưa",
              "lerntext": "đưa",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "35.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ngày mai tôi sẽ [Slot]",
          "lerntext": "ngày mai tôi sẽ [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
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
              "schrift": "đọc",
              "lerntext": "đọc",
              "de": "lesen"
            },
            {
              "schrift": "viết",
              "lerntext": "viết",
              "de": "schreiben"
            },
            {
              "schrift": "nhìn",
              "lerntext": "nhìn",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "lấy",
              "lerntext": "lấy",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "mua",
              "lerntext": "mua",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "thấy",
              "lerntext": "thấy",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "đưa",
              "lerntext": "đưa",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "trở thành",
              "lerntext": "trở thành",
              "de": "werden",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "35.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot] sớm",
          "lerntext": "tôi muốn [Slot] sớm"
        },
        "frameDe": "ich (neutral) will bald [Slot].",
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
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen"
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen"
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
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "đưa",
              "lerntext": "đưa",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "thích",
              "lerntext": "thích",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "35.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot] sớm",
          "lerntext": "tôi muốn [Slot] sớm"
        },
        "frameDe": "ich (neutral) will bald [Slot].",
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
              "schrift": "tìm",
              "lerntext": "tìm",
              "de": "suchen"
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
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "đưa",
              "lerntext": "đưa",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "35.4"
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
        "id": "35.5"
      }
    ]
  },
  {
    "number": 36,
    "title": "Der Mann, der dort steht",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là người [Slot]",
          "lerntext": "đây là người [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben"
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen"
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen"
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
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "dùng",
              "lerntext": "dùng",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "nghe",
              "lerntext": "nghe",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "đưa",
              "lerntext": "đưa",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "vào",
              "lerntext": "vào",
              "de": "hineingehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "người",
            "lerntext": "người",
            "de": "Person (Zählwort)"
          }
        ],
        "id": "36.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "đây là người [Slot]",
          "lerntext": "đây là người [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hy vọng",
              "lerntext": "hy vọng",
              "de": "hoffen"
            },
            {
              "schrift": "cần",
              "lerntext": "cần",
              "de": "brauchen"
            },
            {
              "schrift": "ở lại",
              "lerntext": "ở lại",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "khóc",
              "lerntext": "khóc",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "tin",
              "lerntext": "tin",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "cười",
              "lerntext": "cười",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "nghĩ",
              "lerntext": "nghĩ",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "biết",
              "lerntext": "biết",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "nhận",
              "lerntext": "nhận",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "đóng",
              "lerntext": "đóng",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "sống",
              "lerntext": "sống",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "yêu",
              "lerntext": "yêu",
              "de": "lieben",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "36.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi tìm chỗ có thể [Slot]",
          "lerntext": "tôi tìm chỗ có thể [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen"
            },
            {
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen"
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen"
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
              "schrift": "hỏi",
              "lerntext": "hỏi",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "trả lời",
              "lerntext": "trả lời",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "ăn",
              "lerntext": "ăn",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "trở thành",
              "lerntext": "trở thành",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "thích",
              "lerntext": "thích",
              "de": "mögen",
              "wieder": true
            },
            {
              "schrift": "phải",
              "lerntext": "phải",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "đi",
              "lerntext": "đi",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "du lịch",
              "lerntext": "du lịch",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "bán",
              "lerntext": "bán",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "mất",
              "lerntext": "mất",
              "de": "verlieren",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "đâu",
            "lerntext": "đâu",
            "de": "wo"
          },
          {
            "schrift": "chỗ",
            "lerntext": "chỗ",
            "de": "Platz"
          }
        ],
        "id": "36.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi tìm chỗ có thể [Slot]",
          "lerntext": "tôi tìm chỗ có thể [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
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
              "schrift": "chơi",
              "lerntext": "chơi",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "nhảy",
              "lerntext": "nhảy",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ngủ",
              "lerntext": "ngủ",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "đợi",
              "lerntext": "đợi",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "làm",
              "lerntext": "làm",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "nhớ",
              "lerntext": "nhớ",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "chuyển",
              "lerntext": "chuyển",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "tiếp tục",
              "lerntext": "tiếp tục",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "nằm",
              "lerntext": "nằm",
              "de": "liegen",
              "wieder": true
            },
            {
              "schrift": "ngồi",
              "lerntext": "ngồi",
              "de": "sitzen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "36.4"
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
        "id": "36.5"
      }
    ]
  },
  {
    "number": 37,
    "title": "Alles zusammen",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "hôm qua tôi ở [Slot]",
          "lerntext": "hôm qua tôi ở [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
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
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant"
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel"
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule"
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
              "schrift": "ga tàu",
              "lerntext": "ga tàu",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "thành phố",
              "lerntext": "thành phố",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "sân bay",
              "lerntext": "sân bay",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "chỗ",
              "lerntext": "chỗ",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "điện thoại",
              "lerntext": "điện thoại",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "giường",
              "lerntext": "giường",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "giấy",
              "lerntext": "giấy",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "áo",
              "lerntext": "áo",
              "de": "Oberteil",
              "wieder": true
            },
            {
              "schrift": "muối",
              "lerntext": "muối",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "giáo viên",
              "lerntext": "giáo viên",
              "de": "Lehrer",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "37.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "hôm qua tôi ở [Slot]",
          "lerntext": "hôm qua tôi ở [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
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
              "schrift": "thành phố",
              "lerntext": "thành phố",
              "de": "Stadt"
            },
            {
              "schrift": "khách sạn",
              "lerntext": "khách sạn",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "bệnh viện",
              "lerntext": "bệnh viện",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "nhà hàng",
              "lerntext": "nhà hàng",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "trường",
              "lerntext": "trường",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "đại học",
              "lerntext": "đại học",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "chỗ",
              "lerntext": "chỗ",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "trà",
              "lerntext": "trà",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "con gái",
              "lerntext": "con gái",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "gió",
              "lerntext": "gió",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "bữa tối",
              "lerntext": "bữa tối",
              "de": "Abendessen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "37.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot] vì tôi có thời gian",
          "lerntext": "tôi muốn [Slot] vì tôi có thời gian"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
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
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen"
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen"
            },
            {
              "schrift": "cho",
              "lerntext": "cho",
              "de": "für"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "bên cạnh",
              "lerntext": "bên cạnh",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "đến",
              "lerntext": "đến",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "sau",
              "lerntext": "sau",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "bằng",
              "lerntext": "bằng",
              "de": "mit (Mittel)",
              "wieder": true
            },
            {
              "schrift": "với",
              "lerntext": "với",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "giữa",
              "lerntext": "giữa",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "dưới",
              "lerntext": "dưới",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "trước",
              "lerntext": "trước",
              "de": "vor",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "37.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tôi muốn [Slot] vì tôi có thời gian",
          "lerntext": "tôi muốn [Slot] vì tôi có thời gian"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
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
              "schrift": "nói",
              "lerntext": "nói",
              "de": "sprechen"
            },
            {
              "schrift": "mở",
              "lerntext": "mở",
              "de": "öffnen"
            },
            {
              "schrift": "thắng",
              "lerntext": "thắng",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "quên",
              "lerntext": "quên",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "hiểu",
              "lerntext": "hiểu",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "gặp",
              "lerntext": "gặp",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "gửi",
              "lerntext": "gửi",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "đổi",
              "lerntext": "đổi",
              "de": "wechseln",
              "wieder": true
            },
            {
              "schrift": "uống",
              "lerntext": "uống",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "rửa",
              "lerntext": "rửa",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "chết",
              "lerntext": "chết",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "đứng",
              "lerntext": "đứng",
              "de": "stehen",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "37.4"
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
        "id": "37.5"
      }
    ]
  }
];
