// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_ru.py
// Neu bauen: python bauplan.py ru --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 37 Module, 272 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const RUSSIAN_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "я [Slot]",
          "lerntext": "ja [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
              "c": "a"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "быть",
            "lerntext": "byt",
            "de": "sein",
            "c": "v"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я [Slot]",
          "lerntext": "ja [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
              "c": "a"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "1.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "мы [Slot]",
          "lerntext": "my [Slot]",
          "wortarten": {
            "my": "p"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege",
              "c": "n"
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "c": "n"
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "c": "n"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "1.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "мы [Slot]",
          "lerntext": "my [Slot]",
          "wortarten": {
            "my": "p"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "c": "n"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "1.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "он очень [Slot]",
          "lerntext": "on ótschen [Slot]",
          "wortarten": {
            "on": "p"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "c": "a"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "очень",
            "lerntext": "ótschen",
            "de": "sehr"
          }
        ],
        "id": "1.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "он очень [Slot]",
          "lerntext": "on ótschen [Slot]",
          "wortarten": {
            "on": "p"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "c": "a"
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
          "schrift": "он очень [Slot]",
          "lerntext": "on ótschen [Slot]",
          "wortarten": {
            "on": "p"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "c": "a",
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
          "schrift": "я [Slot]",
          "lerntext": "ja [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
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
          "schrift": "он очень [Slot]",
          "lerntext": "on ótschen [Slot]",
          "wortarten": {
            "on": "p"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "c": "a",
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
          "schrift": "я [Slot]",
          "lerntext": "ja [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
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
          "schrift": "это [Slot]",
          "lerntext": "eto [Slot]"
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "c": "n"
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das",
            "c": "p"
          }
        ],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot]",
          "lerntext": "eto [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "c": "n"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "c": "n",
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
          "schrift": "это [Slot]",
          "lerntext": "eto [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "c": "n"
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "c": "n"
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "c": "n",
              "wieder": true
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
          "schrift": "здесь [Slot]",
          "lerntext": "sdes [Slot]"
        },
        "frameDe": "Hier ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "c": "n"
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "здесь",
            "lerntext": "sdjes",
            "de": "hier"
          }
        ],
        "id": "2.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "здесь [Slot]",
          "lerntext": "sdes [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "c": "n",
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
          "schrift": "здесь [Slot]",
          "lerntext": "sdes [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "c": "n"
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas",
              "c": "n"
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
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
          "schrift": "у меня есть [Slot]",
          "lerntext": "u menjá jest [Slot]",
          "wortarten": {
            "menjá": "p",
            "jest": "v"
          }
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "c": "n"
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "c": "n"
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "c": "n"
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "c": "n"
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "у",
            "lerntext": "u",
            "de": "bei"
          },
          {
            "schrift": "меня",
            "lerntext": "menjá",
            "de": "mich",
            "c": "p"
          },
          {
            "schrift": "есть",
            "lerntext": "jest",
            "de": "essen",
            "c": "v"
          }
        ],
        "id": "2.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "у меня есть [Slot]",
          "lerntext": "u menjá jest [Slot]",
          "wortarten": {
            "menjá": "p",
            "jest": "v"
          }
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n"
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "c": "n"
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "c": "n"
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "2.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "у меня есть [Slot]",
          "lerntext": "u menjá jest [Slot]",
          "wortarten": {
            "menjá": "p",
            "jest": "v"
          }
        },
        "frameDe": "ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "c": "n"
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "c": "n",
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
          "schrift": "это моя [Slot]",
          "lerntext": "eto majá [Slot]",
          "wortarten": {
            "majá": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "мой",
            "lerntext": "moj",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "твой",
            "lerntext": "twoj",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "наш",
            "lerntext": "nasch",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege",
              "c": "n"
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das",
            "c": "p"
          }
        ],
        "id": "2.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot] дом",
          "lerntext": "eto [Slot] dom",
          "wortarten": {
            "dom": "n"
          }
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "мой",
            "lerntext": "moj",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "твой",
            "lerntext": "twoj",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "наш",
            "lerntext": "nasch",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn",
              "c": "p"
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "я",
              "lerntext": "ja",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ты",
              "lerntext": "ty",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "мы",
              "lerntext": "my",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "она",
              "lerntext": "aná",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "меня",
              "lerntext": "menjá",
              "de": "mich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "он",
              "lerntext": "on",
              "de": "er",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das",
            "c": "p"
          }
        ],
        "id": "2.11"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot] книги",
          "lerntext": "eto [Slot] knígi"
        },
        "frameDe": "Das sind [Slot] Bücher.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle",
              "c": "p"
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "мой",
              "lerntext": "moj",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "твой",
              "lerntext": "twoj",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "наш",
              "lerntext": "nasch",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "я",
              "lerntext": "ja",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ты",
              "lerntext": "ty",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "мы",
              "lerntext": "my",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "она",
              "lerntext": "aná",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "меня",
              "lerntext": "menjá",
              "de": "mich",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das",
            "c": "p"
          }
        ],
        "id": "2.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] здесь",
          "lerntext": "[Slot] sdes"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "этот",
              "lerntext": "état",
              "de": "dieser",
              "c": "p"
            },
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn",
              "c": "p"
            },
            {
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch",
              "c": "p"
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "мой",
              "lerntext": "moj",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "твой",
              "lerntext": "twoj",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "наш",
              "lerntext": "nasch",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "я",
              "lerntext": "ja",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ты",
              "lerntext": "ty",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "мы",
              "lerntext": "my",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "она",
              "lerntext": "aná",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "меня",
              "lerntext": "menjá",
              "de": "mich",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "здесь",
            "lerntext": "sdjes",
            "de": "hier"
          }
        ],
        "id": "2.13"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это моя [Slot]",
          "lerntext": "eto majá [Slot]",
          "wortarten": {
            "majá": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "мой",
            "lerntext": "moj",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "твой",
            "lerntext": "twoj",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "наш",
            "lerntext": "nasch",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "c": "n",
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
          "schrift": "здесь [Slot]",
          "lerntext": "sdes [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas",
              "c": "n",
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
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] здесь",
          "lerntext": "[Slot] sdes"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "этот",
              "lerntext": "état",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.16"
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
        "id": "2.17"
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "c": "n"
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "c": "n"
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "хотеть",
            "lerntext": "chatjét",
            "de": "wollen",
            "c": "v"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen",
              "c": "n"
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "c": "n"
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
              "c": "n",
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
          "schrift": "мне нужен [Slot]",
          "lerntext": "mnje núshen [Slot]",
          "wortarten": {
            "mnje": "p"
          }
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "c": "n"
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "c": "n"
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "нуждаться",
            "lerntext": "nushdátsa",
            "de": "brauchen",
            "c": "v"
          },
          {
            "schrift": "мне",
            "lerntext": "mnje",
            "de": "mir",
            "c": "p"
          }
        ],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу [Slot], пожалуйста",
          "lerntext": "ja chatschú [Slot], pashálusta",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "c": "n"
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "c": "n"
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "c": "n"
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "3.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я ем [Slot]",
          "lerntext": "ja jem [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "c": "n"
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "есть",
            "lerntext": "jest",
            "de": "essen",
            "c": "v"
          },
          {
            "schrift": "пить",
            "lerntext": "pit",
            "de": "trinken",
            "c": "v"
          }
        ],
        "id": "3.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я ем [Slot]",
          "lerntext": "ja jem [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "c": "n",
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
          "schrift": "я ем [Slot]",
          "lerntext": "ja jem [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
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
          "schrift": "ты [Slot]?",
          "lerntext": "ty [Slot]?",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "хорошо",
              "lerntext": "charaschó",
              "de": "gut"
            },
            {
              "schrift": "плохо",
              "lerntext": "plócha",
              "de": "schlecht"
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "очень",
              "lerntext": "ótschen",
              "de": "sehr",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] это?",
          "lerntext": "[Slot] eto?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "что",
            "lerntext": "schto",
            "de": "was"
          },
          {
            "schrift": "кто",
            "lerntext": "kto",
            "de": "wer"
          },
          {
            "schrift": "как",
            "lerntext": "kak",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "который",
              "lerntext": "katóryj",
              "de": "welcher",
              "c": "p"
            },
            {
              "schrift": "что-то",
              "lerntext": "schtó-ta",
              "de": "etwas",
              "c": "p"
            },
            {
              "schrift": "весь",
              "lerntext": "wjes",
              "de": "ganz",
              "c": "p"
            },
            {
              "schrift": "мне",
              "lerntext": "mnje",
              "de": "mir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "этот",
              "lerntext": "état",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "наш",
              "lerntext": "nasch",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "мой",
              "lerntext": "moj",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "твой",
              "lerntext": "twoj",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "она",
              "lerntext": "aná",
              "de": "sie",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "что",
            "lerntext": "schto",
            "de": "was"
          },
          {
            "schrift": "кто",
            "lerntext": "kto",
            "de": "wer"
          },
          {
            "schrift": "как",
            "lerntext": "kak",
            "de": "wie"
          },
          {
            "schrift": "почему",
            "lerntext": "patschemú",
            "de": "warum"
          },
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das",
            "c": "p"
          }
        ],
        "id": "4.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ты [Slot]?",
          "lerntext": "ty [Slot]?",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "хорошо",
              "lerntext": "charaschó",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "плохо",
              "lerntext": "plócha",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "4.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] это?",
          "lerntext": "[Slot] eto?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "что",
            "lerntext": "schto",
            "de": "was"
          },
          {
            "schrift": "кто",
            "lerntext": "kto",
            "de": "wer"
          },
          {
            "schrift": "как",
            "lerntext": "kak",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "который",
              "lerntext": "katóryj",
              "de": "welcher",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "что-то",
              "lerntext": "schtó-ta",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "весь",
              "lerntext": "wjes",
              "de": "ganz",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "мне",
              "lerntext": "mnje",
              "de": "mir",
              "c": "p",
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
          "schrift": "ты [Slot]?",
          "lerntext": "ty [Slot]?",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "хорошо",
              "lerntext": "charaschó",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "плохо",
              "lerntext": "plócha",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "c": "a",
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
          "schrift": "[Slot] это?",
          "lerntext": "[Slot] eto?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "что",
            "lerntext": "schto",
            "de": "was"
          },
          {
            "schrift": "кто",
            "lerntext": "kto",
            "de": "wer"
          },
          {
            "schrift": "как",
            "lerntext": "kak",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "который",
              "lerntext": "katóryj",
              "de": "welcher",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "что-то",
              "lerntext": "schtó-ta",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "весь",
              "lerntext": "wjes",
              "de": "ganz",
              "c": "p",
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
          "schrift": "где [Slot]?",
          "lerntext": "gdje [Slot]?"
        },
        "frameDe": "Wo gibt es eine [Slot]?",
        "pronouns": [
          {
            "schrift": "где",
            "lerntext": "gdje",
            "de": "wo"
          },
          {
            "schrift": "куда",
            "lerntext": "kudá",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "c": "n"
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "c": "n"
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "где",
            "lerntext": "gdje",
            "de": "wo"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "где [Slot]?",
          "lerntext": "gdje [Slot]?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "где",
            "lerntext": "gdje",
            "de": "wo"
          },
          {
            "schrift": "куда",
            "lerntext": "kudá",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "где [Slot]?",
          "lerntext": "gdje [Slot]?"
        },
        "frameDe": "Wo gibt es ein [Slot]?",
        "pronouns": [
          {
            "schrift": "где",
            "lerntext": "gdje",
            "de": "wo"
          },
          {
            "schrift": "куда",
            "lerntext": "kudá",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "магазин",
              "lerntext": "magasín",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "здесь есть [Slot]?",
          "lerntext": "sdes jest [Slot]?",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Gibt es hier eine [Slot]?",
        "pronouns": [
          {
            "schrift": "где",
            "lerntext": "gdje",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "5.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "здесь есть [Slot]?",
          "lerntext": "sdes jest [Slot]?",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Gibt es hier ein [Slot]?",
        "pronouns": [
          {
            "schrift": "где",
            "lerntext": "gdje",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "магазин",
              "lerntext": "magasín",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "c": "n",
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
          "schrift": "[Slot] здесь",
          "lerntext": "[Slot] sdes"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "здесь",
            "lerntext": "sdjes",
            "de": "hier"
          },
          {
            "schrift": "там",
            "lerntext": "tam",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "дорога",
              "lerntext": "daróga",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "c": "n"
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "магазин",
              "lerntext": "magasín",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "там",
            "lerntext": "tam",
            "de": "dort"
          },
          {
            "schrift": "у",
            "lerntext": "u",
            "de": "bei"
          }
        ],
        "id": "5.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot] дома",
          "lerntext": "eto [Slot] dóma"
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "в",
            "lerntext": "w",
            "de": "in"
          },
          {
            "schrift": "на",
            "lerntext": "na",
            "de": "auf"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "под",
              "lerntext": "pad",
              "de": "unter"
            },
            {
              "schrift": "между",
              "lerntext": "méshdu",
              "de": "zwischen"
            },
            {
              "schrift": "за",
              "lerntext": "sa",
              "de": "hinter"
            },
            {
              "schrift": "перед",
              "lerntext": "pjéred",
              "de": "vor"
            },
            {
              "schrift": "около",
              "lerntext": "ókala",
              "de": "neben"
            },
            {
              "schrift": "у",
              "lerntext": "u",
              "de": "bei",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "в",
            "lerntext": "w",
            "de": "in"
          },
          {
            "schrift": "на",
            "lerntext": "na",
            "de": "auf"
          },
          {
            "schrift": "от",
            "lerntext": "at",
            "de": "von"
          },
          {
            "schrift": "с",
            "lerntext": "s",
            "de": "mit"
          },
          {
            "schrift": "над",
            "lerntext": "nad",
            "de": "über"
          },
          {
            "schrift": "от",
            "lerntext": "at",
            "de": "von"
          },
          {
            "schrift": "после",
            "lerntext": "póslje",
            "de": "nach"
          },
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das",
            "c": "p"
          },
          {
            "schrift": "дома",
            "lerntext": "dóma",
            "de": "zu Hause"
          }
        ],
        "id": "5.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot] дома",
          "lerntext": "eto [Slot] dóma"
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "в",
            "lerntext": "w",
            "de": "in"
          },
          {
            "schrift": "на",
            "lerntext": "na",
            "de": "auf"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "через",
              "lerntext": "tschéres",
              "de": "durch"
            },
            {
              "schrift": "против",
              "lerntext": "prótiw",
              "de": "gegen"
            },
            {
              "schrift": "у",
              "lerntext": "u",
              "de": "bei"
            },
            {
              "schrift": "под",
              "lerntext": "pad",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "между",
              "lerntext": "méshdu",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "за",
              "lerntext": "sa",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "перед",
              "lerntext": "pjéred",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "около",
              "lerntext": "ókala",
              "de": "neben",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] здесь",
          "lerntext": "[Slot] sdes"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "здесь",
            "lerntext": "sdjes",
            "de": "hier"
          },
          {
            "schrift": "там",
            "lerntext": "tam",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дорога",
              "lerntext": "daróga",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "c": "n",
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
          "schrift": "это [Slot] дома",
          "lerntext": "eto [Slot] dóma"
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "в",
            "lerntext": "w",
            "de": "in"
          },
          {
            "schrift": "на",
            "lerntext": "na",
            "de": "auf"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "через",
              "lerntext": "tschéres",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "против",
              "lerntext": "prótiw",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "под",
              "lerntext": "pad",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "между",
              "lerntext": "méshdu",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "за",
              "lerntext": "sa",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "перед",
              "lerntext": "pjéred",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "около",
              "lerntext": "ókala",
              "de": "neben",
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
          "schrift": "[Slot] здесь",
          "lerntext": "[Slot] sdes"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "здесь",
            "lerntext": "sdjes",
            "de": "hier"
          },
          {
            "schrift": "там",
            "lerntext": "tam",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дорога",
              "lerntext": "daróga",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "c": "n",
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
              "schrift": "ноль",
              "lerntext": "nol",
              "de": "null"
            },
            {
              "schrift": "один",
              "lerntext": "adín",
              "de": "eins"
            },
            {
              "schrift": "два",
              "lerntext": "dwa",
              "de": "zwei"
            },
            {
              "schrift": "три",
              "lerntext": "tri",
              "de": "drei"
            },
            {
              "schrift": "четыре",
              "lerntext": "tschetýrje",
              "de": "vier"
            },
            {
              "schrift": "пять",
              "lerntext": "pjat",
              "de": "fünf"
            },
            {
              "schrift": "шесть",
              "lerntext": "schest",
              "de": "sechs"
            },
            {
              "schrift": "семь",
              "lerntext": "sjem",
              "de": "sieben"
            },
            {
              "schrift": "восемь",
              "lerntext": "wóssem",
              "de": "acht"
            },
            {
              "schrift": "девять",
              "lerntext": "djéwjat",
              "de": "neun"
            },
            {
              "schrift": "десять",
              "lerntext": "djésjat",
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
              "schrift": "одиннадцать",
              "lerntext": "adínnadzat",
              "de": "elf"
            },
            {
              "schrift": "двенадцать",
              "lerntext": "dwenádzat",
              "de": "zwölf"
            },
            {
              "schrift": "тринадцать",
              "lerntext": "trinádzat",
              "de": "dreizehn"
            },
            {
              "schrift": "четырнадцать",
              "lerntext": "tschetýrnadzat",
              "de": "vierzehn"
            },
            {
              "schrift": "пятнадцать",
              "lerntext": "pjatnádzat",
              "de": "fünfzehn"
            },
            {
              "schrift": "шестнадцать",
              "lerntext": "schesnádzat",
              "de": "sechzehn"
            },
            {
              "schrift": "семнадцать",
              "lerntext": "semnádzat",
              "de": "siebzehn"
            },
            {
              "schrift": "восемнадцать",
              "lerntext": "wossemnádzat",
              "de": "achtzehn"
            },
            {
              "schrift": "девятнадцать",
              "lerntext": "dewjatnádzat",
              "de": "neunzehn"
            },
            {
              "schrift": "двадцать",
              "lerntext": "dwádzat",
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
              "schrift": "сорок",
              "lerntext": "sórak",
              "de": "vierzig"
            },
            {
              "schrift": "пятьдесят",
              "lerntext": "pjatdessját",
              "de": "fünfzig"
            },
            {
              "schrift": "шестьдесят",
              "lerntext": "schesdessját",
              "de": "sechzig"
            },
            {
              "schrift": "семьдесят",
              "lerntext": "sjémdessjat",
              "de": "siebzig"
            },
            {
              "schrift": "восемьдесят",
              "lerntext": "wóssemdessjat",
              "de": "achtzig"
            },
            {
              "schrift": "девяносто",
              "lerntext": "dewjanósta",
              "de": "neunzig"
            },
            {
              "schrift": "сто",
              "lerntext": "sto",
              "de": "hundert"
            },
            {
              "schrift": "тысяча",
              "lerntext": "týssjatscha",
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
          "schrift": "это слишком [Slot]",
          "lerntext": "eto slíschkam [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "c": "a"
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "для",
            "lerntext": "dlja",
            "de": "für"
          },
          {
            "schrift": "без",
            "lerntext": "bes",
            "de": "ohne"
          },
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das",
            "c": "p"
          }
        ],
        "id": "6.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это слишком [Slot]",
          "lerntext": "eto slíschkam [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "c": "a"
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "c": "a"
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "c": "a"
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "c": "a"
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
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
              "schrift": "ноль",
              "lerntext": "nol",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "один",
              "lerntext": "adín",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "два",
              "lerntext": "dwa",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "три",
              "lerntext": "tri",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "четыре",
              "lerntext": "tschetýrje",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "пять",
              "lerntext": "pjat",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "шесть",
              "lerntext": "schest",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "семь",
              "lerntext": "sjem",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "восемь",
              "lerntext": "wóssem",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "девять",
              "lerntext": "djéwjat",
              "de": "neun",
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
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "десять",
              "lerntext": "djésjat",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "одиннадцать",
              "lerntext": "adínnadzat",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "двенадцать",
              "lerntext": "dwenádzat",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "тринадцать",
              "lerntext": "trinádzat",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "четырнадцать",
              "lerntext": "tschetýrnadzat",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "пятнадцать",
              "lerntext": "pjatnádzat",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "шестнадцать",
              "lerntext": "schesnádzat",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "семнадцать",
              "lerntext": "semnádzat",
              "de": "siebzehn",
              "wieder": true
            },
            {
              "schrift": "восемнадцать",
              "lerntext": "wossemnádzat",
              "de": "achtzehn",
              "wieder": true
            },
            {
              "schrift": "девятнадцать",
              "lerntext": "dewjatnádzat",
              "de": "neunzehn",
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
              "schrift": "двадцать",
              "lerntext": "dwádzat",
              "de": "zwanzig",
              "wieder": true
            },
            {
              "schrift": "сорок",
              "lerntext": "sórak",
              "de": "vierzig",
              "wieder": true
            },
            {
              "schrift": "пятьдесят",
              "lerntext": "pjatdessját",
              "de": "fünfzig",
              "wieder": true
            },
            {
              "schrift": "шестьдесят",
              "lerntext": "schesdessját",
              "de": "sechzig",
              "wieder": true
            },
            {
              "schrift": "семьдесят",
              "lerntext": "sjémdessjat",
              "de": "siebzig",
              "wieder": true
            },
            {
              "schrift": "восемьдесят",
              "lerntext": "wóssemdessjat",
              "de": "achtzig",
              "wieder": true
            },
            {
              "schrift": "девяносто",
              "lerntext": "dewjanósta",
              "de": "neunzig",
              "wieder": true
            },
            {
              "schrift": "сто",
              "lerntext": "sto",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "тысяча",
              "lerntext": "týssjatscha",
              "de": "tausend",
              "wieder": true
            },
            {
              "schrift": "ноль",
              "lerntext": "nol",
              "de": "null",
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
              "schrift": "один",
              "lerntext": "adín",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "два",
              "lerntext": "dwa",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "три",
              "lerntext": "tri",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "четыре",
              "lerntext": "tschetýrje",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "пять",
              "lerntext": "pjat",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "шесть",
              "lerntext": "schest",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "семь",
              "lerntext": "sjem",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "восемь",
              "lerntext": "wóssem",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "девять",
              "lerntext": "djéwjat",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "десять",
              "lerntext": "djésjat",
              "de": "zehn",
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
          "schrift": "я могу [Slot]",
          "lerntext": "ja magú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v"
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "есть",
              "lerntext": "jest",
              "de": "essen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "мочь",
            "lerntext": "motsch",
            "de": "können",
            "c": "v"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я могу [Slot]",
          "lerntext": "ja magú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "есть",
              "lerntext": "jest",
              "de": "essen",
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
          "schrift": "я должен [Slot]",
          "lerntext": "ja dólshen [Slot]",
          "wortarten": {
            "ja": "p",
            "dólshen": "v"
          }
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "должен",
            "lerntext": "dólshen",
            "de": "müssen",
            "c": "v"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v",
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
          "schrift": "я не могу [Slot]",
          "lerntext": "ja nje magú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "получать",
            "lerntext": "palutschát",
            "de": "bekommen",
            "c": "v"
          },
          {
            "schrift": "не",
            "lerntext": "nje",
            "de": "nicht"
          }
        ],
        "id": "7.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я не могу [Slot]",
          "lerntext": "ja nje magú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
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
          "schrift": "я не могу [Slot]",
          "lerntext": "ja nje magú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v",
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
          "schrift": "я не могу [Slot]",
          "lerntext": "ja nje magú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v",
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
          "schrift": "я иду в [Slot]",
          "lerntext": "ja idú w [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "магазин",
              "lerntext": "magasín",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "идти",
            "lerntext": "ittí",
            "de": "gehen",
            "c": "v"
          },
          {
            "schrift": "приходить",
            "lerntext": "prichadít",
            "de": "kommen",
            "c": "v"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я еду на [Slot]",
          "lerntext": "ja jédu na [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "c": "n"
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "c": "n"
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "дорога",
              "lerntext": "daróga",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "путешествовать",
            "lerntext": "puteschéstwawat",
            "de": "reisen",
            "c": "v"
          }
        ],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу [Slot] сейчас",
          "lerntext": "ja chatschú [Slot] sitschás",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v"
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v"
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v"
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "домой",
            "lerntext": "damój",
            "de": "nach Hause"
          },
          {
            "schrift": "сейчас",
            "lerntext": "sitschás",
            "de": "jetzt"
          }
        ],
        "id": "8.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу [Slot] сейчас",
          "lerntext": "ja chatschú [Slot] sitschás",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
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
          "schrift": "я хочу [Slot] сейчас",
          "lerntext": "ja chatschú [Slot] sitschás",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
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
              "schrift": "сегодня",
              "lerntext": "sewódnja",
              "de": "heute"
            },
            {
              "schrift": "вчера",
              "lerntext": "wtscherá",
              "de": "gestern"
            },
            {
              "schrift": "завтра",
              "lerntext": "sáwtra",
              "de": "morgen"
            },
            {
              "schrift": "сейчас",
              "lerntext": "sitschás",
              "de": "jetzt"
            },
            {
              "schrift": "скоро",
              "lerntext": "skóra",
              "de": "bald"
            },
            {
              "schrift": "всегда",
              "lerntext": "wsegdá",
              "de": "immer"
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie"
            },
            {
              "schrift": "часто",
              "lerntext": "tschásta",
              "de": "oft"
            },
            {
              "schrift": "уже",
              "lerntext": "ushé",
              "de": "schon"
            },
            {
              "schrift": "сразу",
              "lerntext": "srásu",
              "de": "sofort"
            },
            {
              "schrift": "вместе",
              "lerntext": "wmjéstje",
              "de": "zusammen"
            }
          ]
        ],
        "newCount": 10,
        "task": null,
        "newFrameWords": [],
        "id": "9.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "увидимся [Slot]",
          "lerntext": "uwídimsja [Slot]"
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "когда",
            "lerntext": "kagdá",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "завтра",
              "lerntext": "sáwtra",
              "de": "morgen"
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "домой",
              "lerntext": "damój",
              "de": "nach Hause",
              "wieder": true
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "всегда",
              "lerntext": "wsegdá",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "вместе",
              "lerntext": "wmjéstje",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "скоро",
              "lerntext": "skóra",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "часто",
              "lerntext": "tschásta",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "сегодня",
              "lerntext": "sewódnja",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "вчера",
              "lerntext": "wtscherá",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "когда",
            "lerntext": "kagdá",
            "de": "wann"
          },
          {
            "schrift": "тоже",
            "lerntext": "tósche",
            "de": "auch",
            "c": "k"
          },
          {
            "schrift": "только",
            "lerntext": "tólka",
            "de": "nur"
          }
        ],
        "id": "9.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это займёт [Slot]",
          "lerntext": "eto sajmjót [Slot]"
        },
        "frameDe": "Es dauert eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das",
            "c": "p"
          }
        ],
        "id": "9.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это займёт [Slot]",
          "lerntext": "eto sajmjót [Slot]"
        },
        "frameDe": "Es dauert einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "c": "n"
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "9.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "увидимся [Slot]",
          "lerntext": "uwídimsja [Slot]"
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "когда",
            "lerntext": "kagdá",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "домой",
              "lerntext": "damój",
              "de": "nach Hause",
              "wieder": true
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "всегда",
              "lerntext": "wsegdá",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "вместе",
              "lerntext": "wmjéstje",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "скоро",
              "lerntext": "skóra",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "часто",
              "lerntext": "tschásta",
              "de": "oft",
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
              "schrift": "уже",
              "lerntext": "ushé",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "сразу",
              "lerntext": "srásu",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "сегодня",
              "lerntext": "sewódnja",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "вчера",
              "lerntext": "wtscherá",
              "de": "gestern",
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
        "id": "9.7"
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
          "schrift": "я люблю [Slot]",
          "lerntext": "ja ljubljú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "c": "n"
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "c": "n"
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "c": "n"
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "c": "n"
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
              "c": "n"
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "любить",
            "lerntext": "ljubít",
            "de": "lieben",
            "c": "v"
          },
          {
            "schrift": "любить",
            "lerntext": "ljubít",
            "de": "lieben",
            "c": "v"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я люблю [Slot]",
          "lerntext": "ja ljubljú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "c": "n"
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "c": "n",
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
          "schrift": "я вижу [Slot]",
          "lerntext": "ja wíshu [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "меня",
              "lerntext": "menjá",
              "de": "mich",
              "c": "p"
            },
            {
              "schrift": "тебя",
              "lerntext": "tjebjá",
              "de": "dich",
              "c": "p"
            },
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn",
              "c": "p"
            },
            {
              "schrift": "нас",
              "lerntext": "nas",
              "de": "uns",
              "c": "p"
            },
            {
              "schrift": "этот",
              "lerntext": "état",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "который",
              "lerntext": "katóryj",
              "de": "welcher",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "что-то",
              "lerntext": "schtó-ta",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "весь",
              "lerntext": "wjes",
              "de": "ganz",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "мне",
              "lerntext": "mnje",
              "de": "mir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "наш",
              "lerntext": "nasch",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "мой",
              "lerntext": "moj",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "твой",
              "lerntext": "twoj",
              "de": "dein",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "находить",
            "lerntext": "nachadít",
            "de": "finden",
            "c": "v"
          }
        ],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot]",
          "lerntext": "eto [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "c": "a"
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "c": "a"
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "c": "a"
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "c": "a"
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
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
          "schrift": "это [Slot]",
          "lerntext": "eto [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "c": "a"
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "c": "a"
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "c": "a"
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "10.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "еда [Slot]",
          "lerntext": "jedá [Slot]",
          "wortarten": {
            "jedá": "n"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a"
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "еда",
            "lerntext": "jedá",
            "de": "Essen",
            "c": "n"
          }
        ],
        "id": "10.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "еда [Slot]",
          "lerntext": "jedá [Slot]",
          "wortarten": {
            "jedá": "n"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
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
          "schrift": "я люблю [Slot]",
          "lerntext": "ja ljubljú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
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
        "kind": "frame",
        "frame": {
          "schrift": "еда [Slot]",
          "lerntext": "jedá [Slot]",
          "wortarten": {
            "jedá": "n"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.9"
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
        "id": "10.10"
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
          "schrift": "вчера я был [Slot]",
          "lerntext": "wtscherá ja byl [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
              "c": "a"
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "11.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "завтра я буду [Slot]",
          "lerntext": "sáwtra ja búdu [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "становиться",
            "lerntext": "stanawítsa",
            "de": "werden",
            "c": "v"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу много [Slot]",
          "lerntext": "ja chatschú mnóga [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "много",
            "lerntext": "mnóga",
            "de": "viel"
          }
        ],
        "id": "11.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я становлюсь [Slot]",
          "lerntext": "ja stanawljús [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "c": "a"
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "c": "a"
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
              "c": "a"
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "становиться",
            "lerntext": "stanawítsa",
            "de": "werden",
            "c": "v"
          }
        ],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу много [Slot]",
          "lerntext": "ja chatschú mnóga [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v",
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
          "schrift": "я становлюсь [Slot]",
          "lerntext": "ja stanawljús [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
              "c": "a",
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
          "schrift": "я хочу много [Slot]",
          "lerntext": "ja chatschú mnóga [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
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
        "kind": "frame",
        "frame": {
          "schrift": "я становлюсь [Slot]",
          "lerntext": "ja stanawljús [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
              "c": "a",
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
          "schrift": "я устал [Slot] работаю",
          "lerntext": "ja ustál [Slot] rabótaju",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "и",
            "lerntext": "i",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "но",
            "lerntext": "no",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "или",
            "lerntext": "íli",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "над",
              "lerntext": "nad",
              "de": "über"
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während",
              "c": "k"
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "до",
              "lerntext": "da",
              "de": "bis"
            },
            {
              "schrift": "перед",
              "lerntext": "pjéred",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "тоже",
              "lerntext": "tósche",
              "de": "auch",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "с",
              "lerntext": "s",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "после",
              "lerntext": "póslje",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "для",
              "lerntext": "dlja",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "без",
              "lerntext": "bes",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "против",
              "lerntext": "prótiw",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "через",
              "lerntext": "tschéres",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "между",
              "lerntext": "méshdu",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "под",
              "lerntext": "pad",
              "de": "unter",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "и",
            "lerntext": "i",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "но",
            "lerntext": "no",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "или",
            "lerntext": "íli",
            "de": "oder",
            "c": "k"
          },
          {
            "schrift": "значит",
            "lerntext": "snátschit",
            "de": "also",
            "c": "k"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я устал [Slot] работаю",
          "lerntext": "ja ustál [Slot] rabótaju",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "и",
            "lerntext": "i",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "но",
            "lerntext": "no",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "или",
            "lerntext": "íli",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "чтобы",
              "lerntext": "schtóby",
              "de": "damit",
              "c": "k"
            },
            {
              "schrift": "перед",
              "lerntext": "pjéred",
              "de": "vor"
            },
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "до",
              "lerntext": "da",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "над",
              "lerntext": "nad",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "тоже",
              "lerntext": "tósche",
              "de": "auch",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "с",
              "lerntext": "s",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "после",
              "lerntext": "póslje",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "для",
              "lerntext": "dlja",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "без",
              "lerntext": "bes",
              "de": "ohne",
              "wieder": true
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
          "schrift": "хочу [Slot] но не могу",
          "lerntext": "chatschú [Slot] no nje magú",
          "wortarten": {
            "no": "k"
          }
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "не",
            "lerntext": "nje",
            "de": "nicht"
          }
        ],
        "id": "12.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot] но ничего",
          "lerntext": "eto [Slot] no nitschewó",
          "wortarten": {
            "no": "k",
            "nitschewó": "p"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "c": "a"
            },
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "c": "a"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das",
            "c": "p"
          },
          {
            "schrift": "ничего",
            "lerntext": "nitschewó",
            "de": "nichts",
            "c": "p"
          }
        ],
        "id": "12.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot] но ничего",
          "lerntext": "eto [Slot] no nitschewó",
          "wortarten": {
            "no": "k",
            "nitschewó": "p"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "быстро",
              "lerntext": "býstra",
              "de": "schnell"
            },
            {
              "schrift": "медленно",
              "lerntext": "mjédlenna",
              "de": "langsam"
            },
            {
              "schrift": "только",
              "lerntext": "tólka",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "много",
              "lerntext": "mnóga",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "домой",
              "lerntext": "damój",
              "de": "nach Hause",
              "wieder": true
            },
            {
              "schrift": "там",
              "lerntext": "tam",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "уже",
              "lerntext": "ushé",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "сразу",
              "lerntext": "srásu",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "хорошо",
              "lerntext": "charaschó",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "всегда",
              "lerntext": "wsegdá",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "дома",
              "lerntext": "dóma",
              "de": "zu Hause",
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
          "schrift": "я хочу тебя [Slot]",
          "lerntext": "ja chatschú tebjá [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v",
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
          "schrift": "это [Slot] но ничего",
          "lerntext": "eto [Slot] no nitschewó",
          "wortarten": {
            "no": "k",
            "nitschewó": "p"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "быстро",
              "lerntext": "býstra",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "медленно",
              "lerntext": "mjédlenna",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "только",
              "lerntext": "tólka",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "много",
              "lerntext": "mnóga",
              "de": "viel",
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
          "schrift": "я устал [Slot] работаю",
          "lerntext": "ja ustál [Slot] rabótaju",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "и",
            "lerntext": "i",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "но",
            "lerntext": "no",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "или",
            "lerntext": "íli",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "чтобы",
              "lerntext": "schtóby",
              "de": "damit",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "до",
              "lerntext": "da",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "тоже",
              "lerntext": "tósche",
              "de": "auch",
              "c": "k",
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
          "schrift": "это [Slot] но ничего",
          "lerntext": "eto [Slot] no nitschewó",
          "wortarten": {
            "no": "k",
            "nitschewó": "p"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "быстро",
              "lerntext": "býstra",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "медленно",
              "lerntext": "mjédlenna",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "только",
              "lerntext": "tólka",
              "de": "nur",
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
          "schrift": "я хочу тебя [Slot]",
          "lerntext": "ja chatschú tebjá [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v",
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
          "schrift": "у меня болит [Slot]",
          "lerntext": "u menjá balít [Slot]",
          "wortarten": {
            "menjá": "p"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "мой",
            "lerntext": "moj",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "c": "n"
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "c": "n"
            },
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
              "c": "n",
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
          "schrift": "у меня боль в [Slot]",
          "lerntext": "u menjá bol w [Slot]",
          "wortarten": {
            "menjá": "p",
            "bol": "n"
          }
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "c": "n"
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "боль",
            "lerntext": "bol",
            "de": "Schmerz",
            "c": "n"
          }
        ],
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
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "здесь есть [Slot]",
          "lerntext": "sdes jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier gibt es einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "c": "n"
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "c": "n",
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
          "schrift": "я покупаю [Slot]",
          "lerntext": "ja pakupáju [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "c": "n"
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
              "c": "n",
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
          "schrift": "у меня есть [Slot]",
          "lerntext": "u menjá jest [Slot]",
          "wortarten": {
            "menjá": "p",
            "jest": "v"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "c": "n"
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "c": "n"
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "14.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это моя [Slot]",
          "lerntext": "eto majá [Slot]",
          "wortarten": {
            "majá": "p"
          }
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "c": "n"
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "c": "n",
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
          "schrift": "я жду [Slot]",
          "lerntext": "ja shdu [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "c": "n"
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "c": "n"
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "c": "n",
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
          "schrift": "я получил хороший [Slot]",
          "lerntext": "ja palutschíl charóschi [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "хороший",
            "lerntext": "charóschij",
            "de": "gut",
            "c": "a"
          }
        ],
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
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "жена",
              "lerntext": "shená",
              "de": "Ehefrau",
              "c": "n"
            },
            {
              "schrift": "аптека",
              "lerntext": "aptjéka",
              "de": "Apotheke",
              "c": "n"
            },
            {
              "schrift": "билет",
              "lerntext": "biljét",
              "de": "Fahrkarte",
              "c": "n"
            },
            {
              "schrift": "счёт",
              "lerntext": "schtschot",
              "de": "Rechnung",
              "c": "n"
            },
            {
              "schrift": "карта",
              "lerntext": "kárta",
              "de": "Karte",
              "c": "n"
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "лекция",
              "lerntext": "ljékzija",
              "de": "Vorlesung",
              "c": "n"
            },
            {
              "schrift": "язык",
              "lerntext": "jasýk",
              "de": "Sprache",
              "c": "n"
            },
            {
              "schrift": "вопрос",
              "lerntext": "wapróss",
              "de": "Frage",
              "c": "n"
            },
            {
              "schrift": "вещь",
              "lerntext": "weschtsch",
              "de": "Sache",
              "c": "n"
            },
            {
              "schrift": "меню",
              "lerntext": "menjú",
              "de": "Speisekarte",
              "c": "n"
            },
            {
              "schrift": "жена",
              "lerntext": "shená",
              "de": "Ehefrau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "аптека",
              "lerntext": "aptjéka",
              "de": "Apotheke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "билет",
              "lerntext": "biljét",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "счёт",
              "lerntext": "schtschot",
              "de": "Rechnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "карта",
              "lerntext": "kárta",
              "de": "Karte",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "бутылка",
              "lerntext": "butýlka",
              "de": "Flasche",
              "c": "n"
            },
            {
              "schrift": "номер",
              "lerntext": "nómer",
              "de": "Nummer",
              "c": "n"
            },
            {
              "schrift": "музыка",
              "lerntext": "músyka",
              "de": "Musik",
              "c": "n"
            },
            {
              "schrift": "мир",
              "lerntext": "mir",
              "de": "Welt",
              "c": "n"
            },
            {
              "schrift": "воздух",
              "lerntext": "wósduch",
              "de": "Luft",
              "c": "n"
            },
            {
              "schrift": "лекция",
              "lerntext": "ljékzija",
              "de": "Vorlesung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "язык",
              "lerntext": "jasýk",
              "de": "Sprache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вопрос",
              "lerntext": "wapróss",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вещь",
              "lerntext": "weschtsch",
              "de": "Sache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "меню",
              "lerntext": "menjú",
              "de": "Speisekarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "жена",
              "lerntext": "shená",
              "de": "Ehefrau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "аптека",
              "lerntext": "aptjéka",
              "de": "Apotheke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "билет",
              "lerntext": "biljét",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "счёт",
              "lerntext": "schtschot",
              "de": "Rechnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "карта",
              "lerntext": "kárta",
              "de": "Karte",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "кошка",
              "lerntext": "kóschka",
              "de": "Katze",
              "c": "n"
            },
            {
              "schrift": "любовь",
              "lerntext": "ljubów",
              "de": "Liebe",
              "c": "n"
            },
            {
              "schrift": "способ",
              "lerntext": "spóssab",
              "de": "Art",
              "c": "n"
            },
            {
              "schrift": "идея",
              "lerntext": "idjéja",
              "de": "Idee",
              "c": "n"
            },
            {
              "schrift": "история",
              "lerntext": "istórija",
              "de": "Geschichte",
              "c": "n"
            },
            {
              "schrift": "бутылка",
              "lerntext": "butýlka",
              "de": "Flasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "номер",
              "lerntext": "nómer",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "музыка",
              "lerntext": "músyka",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мир",
              "lerntext": "mir",
              "de": "Welt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "воздух",
              "lerntext": "wósduch",
              "de": "Luft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "лекция",
              "lerntext": "ljékzija",
              "de": "Vorlesung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "язык",
              "lerntext": "jasýk",
              "de": "Sprache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вопрос",
              "lerntext": "wapróss",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вещь",
              "lerntext": "weschtsch",
              "de": "Sache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "меню",
              "lerntext": "menjú",
              "de": "Speisekarte",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "страх",
              "lerntext": "strach",
              "de": "Angst",
              "c": "n"
            },
            {
              "schrift": "смена",
              "lerntext": "smjéna",
              "de": "Schicht",
              "c": "n"
            },
            {
              "schrift": "перерыв",
              "lerntext": "pererýw",
              "de": "Pause",
              "c": "n"
            },
            {
              "schrift": "размер",
              "lerntext": "rasmjér",
              "de": "Grösse",
              "c": "n"
            },
            {
              "schrift": "кошка",
              "lerntext": "kóschka",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "любовь",
              "lerntext": "ljubów",
              "de": "Liebe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "способ",
              "lerntext": "spóssab",
              "de": "Art",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "идея",
              "lerntext": "idjéja",
              "de": "Idee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "история",
              "lerntext": "istórija",
              "de": "Geschichte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "бутылка",
              "lerntext": "butýlka",
              "de": "Flasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "номер",
              "lerntext": "nómer",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "музыка",
              "lerntext": "músyka",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мир",
              "lerntext": "mir",
              "de": "Welt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "воздух",
              "lerntext": "wósduch",
              "de": "Luft",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "15.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "мужчина",
              "lerntext": "muschtschína",
              "de": "Mann",
              "c": "n"
            },
            {
              "schrift": "парень",
              "lerntext": "párjen",
              "de": "Junge",
              "c": "n"
            },
            {
              "schrift": "муж",
              "lerntext": "mush",
              "de": "Ehemann",
              "c": "n"
            },
            {
              "schrift": "месяц",
              "lerntext": "méssjaz",
              "de": "Monat",
              "c": "n"
            },
            {
              "schrift": "утро",
              "lerntext": "útra",
              "de": "Morgen",
              "c": "n"
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "рынок",
              "lerntext": "rýnak",
              "de": "Markt",
              "c": "n"
            },
            {
              "schrift": "паспорт",
              "lerntext": "páspart",
              "de": "Pass",
              "c": "n"
            },
            {
              "schrift": "цена",
              "lerntext": "zená",
              "de": "Preis",
              "c": "n"
            },
            {
              "schrift": "врач",
              "lerntext": "wratsch",
              "de": "Arzt",
              "c": "n"
            },
            {
              "schrift": "фильм",
              "lerntext": "film",
              "de": "Film",
              "c": "n"
            },
            {
              "schrift": "мужчина",
              "lerntext": "muschtschína",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "парень",
              "lerntext": "párjen",
              "de": "Junge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "муж",
              "lerntext": "mush",
              "de": "Ehemann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "месяц",
              "lerntext": "méssjaz",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "утро",
              "lerntext": "útra",
              "de": "Morgen",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "собака",
              "lerntext": "ssabáka",
              "de": "Hund",
              "c": "n"
            },
            {
              "schrift": "часть",
              "lerntext": "tschast",
              "de": "Teil",
              "c": "n"
            },
            {
              "schrift": "начало",
              "lerntext": "natschála",
              "de": "Anfang",
              "c": "n"
            },
            {
              "schrift": "причина",
              "lerntext": "pritschína",
              "de": "Grund",
              "c": "n"
            },
            {
              "schrift": "голод",
              "lerntext": "gólad",
              "de": "Hunger",
              "c": "n"
            },
            {
              "schrift": "рынок",
              "lerntext": "rýnak",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "паспорт",
              "lerntext": "páspart",
              "de": "Pass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "цена",
              "lerntext": "zená",
              "de": "Preis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "врач",
              "lerntext": "wratsch",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "фильм",
              "lerntext": "film",
              "de": "Film",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мужчина",
              "lerntext": "muschtschína",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "парень",
              "lerntext": "párjen",
              "de": "Junge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "муж",
              "lerntext": "mush",
              "de": "Ehemann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "месяц",
              "lerntext": "méssjaz",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "утро",
              "lerntext": "útra",
              "de": "Morgen",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "сон",
              "lerntext": "son",
              "de": "Schlaf",
              "c": "n"
            },
            {
              "schrift": "скидка",
              "lerntext": "skídka",
              "de": "Rabatt",
              "c": "n"
            },
            {
              "schrift": "вход",
              "lerntext": "wchod",
              "de": "Eingang",
              "c": "n"
            },
            {
              "schrift": "выход",
              "lerntext": "wýchad",
              "de": "Ausgang",
              "c": "n"
            },
            {
              "schrift": "клиент",
              "lerntext": "klijént",
              "de": "Kunde",
              "c": "n"
            },
            {
              "schrift": "собака",
              "lerntext": "ssabáka",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "часть",
              "lerntext": "tschast",
              "de": "Teil",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "начало",
              "lerntext": "natschála",
              "de": "Anfang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "причина",
              "lerntext": "pritschína",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "голод",
              "lerntext": "gólad",
              "de": "Hunger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рынок",
              "lerntext": "rýnak",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "паспорт",
              "lerntext": "páspart",
              "de": "Pass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "цена",
              "lerntext": "zená",
              "de": "Preis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "врач",
              "lerntext": "wratsch",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "фильм",
              "lerntext": "film",
              "de": "Film",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "зарплата",
              "lerntext": "sarpláta",
              "de": "Lohn",
              "c": "n"
            },
            {
              "schrift": "договор",
              "lerntext": "dagawór",
              "de": "Vertrag",
              "c": "n"
            },
            {
              "schrift": "сон",
              "lerntext": "son",
              "de": "Schlaf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "скидка",
              "lerntext": "skídka",
              "de": "Rabatt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вход",
              "lerntext": "wchod",
              "de": "Eingang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "выход",
              "lerntext": "wýchad",
              "de": "Ausgang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "клиент",
              "lerntext": "klijént",
              "de": "Kunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "собака",
              "lerntext": "ssabáka",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "часть",
              "lerntext": "tschast",
              "de": "Teil",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "начало",
              "lerntext": "natschála",
              "de": "Anfang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "причина",
              "lerntext": "pritschína",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "голод",
              "lerntext": "gólad",
              "de": "Hunger",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "15.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "год",
              "lerntext": "god",
              "de": "Jahr",
              "c": "n"
            },
            {
              "schrift": "выходные",
              "lerntext": "wychadnýje",
              "de": "Wochenende",
              "c": "n"
            },
            {
              "schrift": "страна",
              "lerntext": "straná",
              "de": "Land",
              "c": "n"
            },
            {
              "schrift": "кафе",
              "lerntext": "kafé",
              "de": "Cafe",
              "c": "n"
            },
            {
              "schrift": "слово",
              "lerntext": "slówa",
              "de": "Wort",
              "c": "n"
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "проблема",
              "lerntext": "prabljéma",
              "de": "Problem",
              "c": "n"
            },
            {
              "schrift": "девушка",
              "lerntext": "djéwuschka",
              "de": "Mädchen",
              "c": "n"
            },
            {
              "schrift": "багаж",
              "lerntext": "bagásh",
              "de": "Gepäck",
              "c": "n"
            },
            {
              "schrift": "лекарство",
              "lerntext": "lekárstwa",
              "de": "Medikament",
              "c": "n"
            },
            {
              "schrift": "температура",
              "lerntext": "temperatúra",
              "de": "Fieber",
              "c": "n"
            },
            {
              "schrift": "год",
              "lerntext": "god",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "выходные",
              "lerntext": "wychadnýje",
              "de": "Wochenende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "страна",
              "lerntext": "straná",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кафе",
              "lerntext": "kafé",
              "de": "Cafe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "слово",
              "lerntext": "slówa",
              "de": "Wort",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "праздник",
              "lerntext": "prásnik",
              "de": "Fest",
              "c": "n"
            },
            {
              "schrift": "жизнь",
              "lerntext": "shysn",
              "de": "Leben",
              "c": "n"
            },
            {
              "schrift": "подарок",
              "lerntext": "padárak",
              "de": "Geschenk",
              "c": "n"
            },
            {
              "schrift": "конец",
              "lerntext": "kanjéz",
              "de": "Ende",
              "c": "n"
            },
            {
              "schrift": "пример",
              "lerntext": "primjér",
              "de": "Beispiel",
              "c": "n"
            },
            {
              "schrift": "проблема",
              "lerntext": "prabljéma",
              "de": "Problem",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "девушка",
              "lerntext": "djéwuschka",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "багаж",
              "lerntext": "bagásh",
              "de": "Gepäck",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "лекарство",
              "lerntext": "lekárstwa",
              "de": "Medikament",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "температура",
              "lerntext": "temperatúra",
              "de": "Fieber",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "год",
              "lerntext": "god",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "выходные",
              "lerntext": "wychadnýje",
              "de": "Wochenende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "страна",
              "lerntext": "straná",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кафе",
              "lerntext": "kafé",
              "de": "Cafe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "слово",
              "lerntext": "slówa",
              "de": "Wort",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "встреча",
              "lerntext": "wstrjétscha",
              "de": "Treffen",
              "c": "n"
            },
            {
              "schrift": "праздник",
              "lerntext": "prásnik",
              "de": "Fest",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "жизнь",
              "lerntext": "shysn",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "подарок",
              "lerntext": "padárak",
              "de": "Geschenk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "конец",
              "lerntext": "kanjéz",
              "de": "Ende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "пример",
              "lerntext": "primjér",
              "de": "Beispiel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "проблема",
              "lerntext": "prabljéma",
              "de": "Problem",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "девушка",
              "lerntext": "djéwuschka",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "багаж",
              "lerntext": "bagásh",
              "de": "Gepäck",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "лекарство",
              "lerntext": "lekárstwa",
              "de": "Medikament",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "температура",
              "lerntext": "temperatúra",
              "de": "Fieber",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "15.14"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "люди",
              "lerntext": "ljúdi",
              "de": "Leute",
              "c": "n"
            },
            {
              "schrift": "волосы",
              "lerntext": "wólassy",
              "de": "Haare",
              "c": "n"
            },
            {
              "schrift": "обувь",
              "lerntext": "óbuw",
              "de": "Schuhe",
              "c": "n"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "15.15"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "страх",
              "lerntext": "strach",
              "de": "Angst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "смена",
              "lerntext": "smjéna",
              "de": "Schicht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "перерыв",
              "lerntext": "pererýw",
              "de": "Pause",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "размер",
              "lerntext": "rasmjér",
              "de": "Grösse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "люди",
              "lerntext": "ljúdi",
              "de": "Leute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "волосы",
              "lerntext": "wólassy",
              "de": "Haare",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "обувь",
              "lerntext": "óbuw",
              "de": "Schuhe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кошка",
              "lerntext": "kóschka",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "любовь",
              "lerntext": "ljubów",
              "de": "Liebe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "способ",
              "lerntext": "spóssab",
              "de": "Art",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "идея",
              "lerntext": "idjéja",
              "de": "Idee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "история",
              "lerntext": "istórija",
              "de": "Geschichte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "страх",
              "lerntext": "strach",
              "de": "Angst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "смена",
              "lerntext": "smjéna",
              "de": "Schicht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "перерыв",
              "lerntext": "pererýw",
              "de": "Pause",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "размер",
              "lerntext": "rasmjér",
              "de": "Grösse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "люди",
              "lerntext": "ljúdi",
              "de": "Leute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "волосы",
              "lerntext": "wólassy",
              "de": "Haare",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "обувь",
              "lerntext": "óbuw",
              "de": "Schuhe",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "зарплата",
              "lerntext": "sarpláta",
              "de": "Lohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "договор",
              "lerntext": "dagawór",
              "de": "Vertrag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сон",
              "lerntext": "son",
              "de": "Schlaf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "скидка",
              "lerntext": "skídka",
              "de": "Rabatt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вход",
              "lerntext": "wchod",
              "de": "Eingang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "выход",
              "lerntext": "wýchad",
              "de": "Ausgang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "клиент",
              "lerntext": "klijént",
              "de": "Kunde",
              "c": "n",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "встреча",
              "lerntext": "wstrjétscha",
              "de": "Treffen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "праздник",
              "lerntext": "prásnik",
              "de": "Fest",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "жизнь",
              "lerntext": "shysn",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "подарок",
              "lerntext": "padárak",
              "de": "Geschenk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "конец",
              "lerntext": "kanjéz",
              "de": "Ende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "пример",
              "lerntext": "primjér",
              "de": "Beispiel",
              "c": "n",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "убирать",
              "lerntext": "ubirát",
              "de": "aufräumen",
              "c": "v"
            },
            {
              "schrift": "класть",
              "lerntext": "klast",
              "de": "legen",
              "c": "v"
            },
            {
              "schrift": "выходить",
              "lerntext": "wychadít",
              "de": "hinausgehen",
              "c": "v"
            },
            {
              "schrift": "учиться",
              "lerntext": "utschítsa",
              "de": "lernen",
              "c": "v"
            },
            {
              "schrift": "кончать",
              "lerntext": "kantschát",
              "de": "beenden",
              "c": "v"
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "бегать",
              "lerntext": "bjégat",
              "de": "rennen",
              "c": "v"
            },
            {
              "schrift": "жениться",
              "lerntext": "shenítsa",
              "de": "heiraten",
              "c": "v"
            },
            {
              "schrift": "казаться",
              "lerntext": "kasátsa",
              "de": "scheinen",
              "c": "v"
            },
            {
              "schrift": "заказывать",
              "lerntext": "sakásywat",
              "de": "bestellen",
              "c": "v"
            },
            {
              "schrift": "держать",
              "lerntext": "dershát",
              "de": "halten",
              "c": "v"
            },
            {
              "schrift": "убирать",
              "lerntext": "ubirát",
              "de": "aufräumen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "класть",
              "lerntext": "klast",
              "de": "legen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "выходить",
              "lerntext": "wychadít",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "учиться",
              "lerntext": "utschítsa",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "кончать",
              "lerntext": "kantschát",
              "de": "beenden",
              "c": "v",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "звать",
              "lerntext": "swat",
              "de": "rufen",
              "c": "v"
            },
            {
              "schrift": "стоить",
              "lerntext": "stóit",
              "de": "kosten",
              "c": "v"
            },
            {
              "schrift": "уезжать",
              "lerntext": "ujeshát",
              "de": "abfahren",
              "c": "v"
            },
            {
              "schrift": "приезжать",
              "lerntext": "prijeshát",
              "de": "ankommen",
              "c": "v"
            },
            {
              "schrift": "входить",
              "lerntext": "wchadít",
              "de": "hineingehen",
              "c": "v"
            },
            {
              "schrift": "бегать",
              "lerntext": "bjégat",
              "de": "rennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жениться",
              "lerntext": "shenítsa",
              "de": "heiraten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "казаться",
              "lerntext": "kasátsa",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "заказывать",
              "lerntext": "sakásywat",
              "de": "bestellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "держать",
              "lerntext": "dershát",
              "de": "halten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "убирать",
              "lerntext": "ubirát",
              "de": "aufräumen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "класть",
              "lerntext": "klast",
              "de": "legen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "выходить",
              "lerntext": "wychadít",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "учиться",
              "lerntext": "utschítsa",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "кончать",
              "lerntext": "kantschát",
              "de": "beenden",
              "c": "v",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "носить",
              "lerntext": "nassít",
              "de": "tragen",
              "c": "v"
            },
            {
              "schrift": "нравиться",
              "lerntext": "nráwitsa",
              "de": "gefallen",
              "c": "v"
            },
            {
              "schrift": "изучать",
              "lerntext": "isutschát",
              "de": "studieren",
              "c": "v"
            },
            {
              "schrift": "преподавать",
              "lerntext": "prepadawát",
              "de": "unterrichten",
              "c": "v"
            },
            {
              "schrift": "помнить",
              "lerntext": "pómnit",
              "de": "sich erinnern",
              "c": "v"
            },
            {
              "schrift": "звать",
              "lerntext": "swat",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоить",
              "lerntext": "stóit",
              "de": "kosten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "уезжать",
              "lerntext": "ujeshát",
              "de": "abfahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приезжать",
              "lerntext": "prijeshát",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "входить",
              "lerntext": "wchadít",
              "de": "hineingehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "бегать",
              "lerntext": "bjégat",
              "de": "rennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жениться",
              "lerntext": "shenítsa",
              "de": "heiraten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "казаться",
              "lerntext": "kasátsa",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "заказывать",
              "lerntext": "sakásywat",
              "de": "bestellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "держать",
              "lerntext": "dershát",
              "de": "halten",
              "c": "v",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "начинать",
              "lerntext": "natschinát",
              "de": "anfangen",
              "c": "v"
            },
            {
              "schrift": "пробовать",
              "lerntext": "próbawat",
              "de": "versuchen",
              "c": "v"
            },
            {
              "schrift": "петь",
              "lerntext": "pjet",
              "de": "singen",
              "c": "v"
            },
            {
              "schrift": "водить",
              "lerntext": "wadít",
              "de": "fahren",
              "c": "v"
            },
            {
              "schrift": "посещать",
              "lerntext": "passeschtschát",
              "de": "besuchen",
              "c": "v"
            },
            {
              "schrift": "носить",
              "lerntext": "nassít",
              "de": "tragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нравиться",
              "lerntext": "nráwitsa",
              "de": "gefallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "изучать",
              "lerntext": "isutschát",
              "de": "studieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "преподавать",
              "lerntext": "prepadawát",
              "de": "unterrichten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "помнить",
              "lerntext": "pómnit",
              "de": "sich erinnern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звать",
              "lerntext": "swat",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоить",
              "lerntext": "stóit",
              "de": "kosten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "уезжать",
              "lerntext": "ujeshát",
              "de": "abfahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приезжать",
              "lerntext": "prijeshát",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "входить",
              "lerntext": "wchadít",
              "de": "hineingehen",
              "c": "v",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "встречать",
              "lerntext": "wstretschát",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "знакомиться",
              "lerntext": "snakómitsa",
              "de": "kennenlernen",
              "c": "v"
            },
            {
              "schrift": "родиться",
              "lerntext": "radítsa",
              "de": "geboren werden",
              "c": "v"
            },
            {
              "schrift": "случаться",
              "lerntext": "slutschátsa",
              "de": "geschehen",
              "c": "v"
            },
            {
              "schrift": "бронировать",
              "lerntext": "branírawat",
              "de": "reservieren",
              "c": "v"
            },
            {
              "schrift": "начинать",
              "lerntext": "natschinát",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пробовать",
              "lerntext": "próbawat",
              "de": "versuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "петь",
              "lerntext": "pjet",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "водить",
              "lerntext": "wadít",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "посещать",
              "lerntext": "passeschtschát",
              "de": "besuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "носить",
              "lerntext": "nassít",
              "de": "tragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нравиться",
              "lerntext": "nráwitsa",
              "de": "gefallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "изучать",
              "lerntext": "isutschát",
              "de": "studieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "преподавать",
              "lerntext": "prepadawát",
              "de": "unterrichten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "помнить",
              "lerntext": "pómnit",
              "de": "sich erinnern",
              "c": "v",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "снимать",
              "lerntext": "snimát",
              "de": "mieten",
              "c": "v"
            },
            {
              "schrift": "подписывать",
              "lerntext": "padpíssywat",
              "de": "unterschreiben",
              "c": "v"
            },
            {
              "schrift": "готовить",
              "lerntext": "gatówit",
              "de": "kochen",
              "c": "v"
            },
            {
              "schrift": "возвращаться",
              "lerntext": "woswraschtschátsa",
              "de": "zurückkehren",
              "c": "v"
            },
            {
              "schrift": "извинять",
              "lerntext": "iswinját",
              "de": "entschuldigen",
              "c": "v"
            },
            {
              "schrift": "встречать",
              "lerntext": "wstretschát",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знакомиться",
              "lerntext": "snakómitsa",
              "de": "kennenlernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "родиться",
              "lerntext": "radítsa",
              "de": "geboren werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "случаться",
              "lerntext": "slutschátsa",
              "de": "geschehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "бронировать",
              "lerntext": "branírawat",
              "de": "reservieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "начинать",
              "lerntext": "natschinát",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пробовать",
              "lerntext": "próbawat",
              "de": "versuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "петь",
              "lerntext": "pjet",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "водить",
              "lerntext": "wadít",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "посещать",
              "lerntext": "passeschtschát",
              "de": "besuchen",
              "c": "v",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "благодарить",
              "lerntext": "blagadarít",
              "de": "danken",
              "c": "v"
            },
            {
              "schrift": "останавливаться",
              "lerntext": "astanáwliwatsa",
              "de": "anhalten",
              "c": "v"
            },
            {
              "schrift": "рассказывать",
              "lerntext": "rasskásywat",
              "de": "erzählen",
              "c": "v"
            },
            {
              "schrift": "здороваться",
              "lerntext": "sdarówatsa",
              "de": "grüßen",
              "c": "v"
            },
            {
              "schrift": "снимать",
              "lerntext": "snimát",
              "de": "mieten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "подписывать",
              "lerntext": "padpíssywat",
              "de": "unterschreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "готовить",
              "lerntext": "gatówit",
              "de": "kochen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "возвращаться",
              "lerntext": "woswraschtschátsa",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "извинять",
              "lerntext": "iswinját",
              "de": "entschuldigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "встречать",
              "lerntext": "wstretschát",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знакомиться",
              "lerntext": "snakómitsa",
              "de": "kennenlernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "родиться",
              "lerntext": "radítsa",
              "de": "geboren werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "случаться",
              "lerntext": "slutschátsa",
              "de": "geschehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "бронировать",
              "lerntext": "branírawat",
              "de": "reservieren",
              "c": "v",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "благодарить",
              "lerntext": "blagadarít",
              "de": "danken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "останавливаться",
              "lerntext": "astanáwliwatsa",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "рассказывать",
              "lerntext": "rasskásywat",
              "de": "erzählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "здороваться",
              "lerntext": "sdarówatsa",
              "de": "grüßen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "снимать",
              "lerntext": "snimát",
              "de": "mieten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "подписывать",
              "lerntext": "padpíssywat",
              "de": "unterschreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "готовить",
              "lerntext": "gatówit",
              "de": "kochen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "возвращаться",
              "lerntext": "woswraschtschátsa",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "извинять",
              "lerntext": "iswinját",
              "de": "entschuldigen",
              "c": "v",
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "благодарить",
              "lerntext": "blagadarít",
              "de": "danken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "останавливаться",
              "lerntext": "astanáwliwatsa",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "рассказывать",
              "lerntext": "rasskásywat",
              "de": "erzählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "здороваться",
              "lerntext": "sdarówatsa",
              "de": "grüßen",
              "c": "v",
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
          "schrift": "это очень [Slot]",
          "lerntext": "eto ótschen [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "плохой",
              "lerntext": "plachój",
              "de": "schlecht",
              "c": "a"
            },
            {
              "schrift": "настоящий",
              "lerntext": "nastajáschtschij",
              "de": "echt",
              "c": "a"
            },
            {
              "schrift": "бесплатный",
              "lerntext": "besplátnyj",
              "de": "kostenlos",
              "c": "a"
            },
            {
              "schrift": "полный",
              "lerntext": "pólnyj",
              "de": "voll",
              "c": "a"
            },
            {
              "schrift": "пустой",
              "lerntext": "pustój",
              "de": "leer",
              "c": "a"
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
          "schrift": "это очень [Slot]",
          "lerntext": "eto ótschen [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "свободный",
              "lerntext": "swabódnyj",
              "de": "frei",
              "c": "a"
            },
            {
              "schrift": "занятый",
              "lerntext": "sanjátyj",
              "de": "besetzt",
              "c": "a"
            },
            {
              "schrift": "здоровый",
              "lerntext": "sdarówyj",
              "de": "gesund",
              "c": "a"
            },
            {
              "schrift": "быстрый",
              "lerntext": "býstryj",
              "de": "schnell",
              "c": "a"
            },
            {
              "schrift": "медленный",
              "lerntext": "mjédlennyj",
              "de": "langsam",
              "c": "a"
            },
            {
              "schrift": "плохой",
              "lerntext": "plachój",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "настоящий",
              "lerntext": "nastajáschtschij",
              "de": "echt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "бесплатный",
              "lerntext": "besplátnyj",
              "de": "kostenlos",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "полный",
              "lerntext": "pólnyj",
              "de": "voll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "пустой",
              "lerntext": "pustój",
              "de": "leer",
              "c": "a",
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
          "schrift": "это очень [Slot]",
          "lerntext": "eto ótschen [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "свежий",
              "lerntext": "swjéshij",
              "de": "frisch",
              "c": "a"
            },
            {
              "schrift": "солёный",
              "lerntext": "saljónyj",
              "de": "salzig",
              "c": "a"
            },
            {
              "schrift": "острый",
              "lerntext": "óstryj",
              "de": "scharf",
              "c": "a"
            },
            {
              "schrift": "вкусный",
              "lerntext": "wkúsnyj",
              "de": "lecker",
              "c": "a"
            },
            {
              "schrift": "русский",
              "lerntext": "rússkij",
              "de": "russisch",
              "c": "a"
            },
            {
              "schrift": "свободный",
              "lerntext": "swabódnyj",
              "de": "frei",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "занятый",
              "lerntext": "sanjátyj",
              "de": "besetzt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "здоровый",
              "lerntext": "sdarówyj",
              "de": "gesund",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "быстрый",
              "lerntext": "býstryj",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "медленный",
              "lerntext": "mjédlennyj",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "плохой",
              "lerntext": "plachój",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "настоящий",
              "lerntext": "nastajáschtschij",
              "de": "echt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "бесплатный",
              "lerntext": "besplátnyj",
              "de": "kostenlos",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "полный",
              "lerntext": "pólnyj",
              "de": "voll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "пустой",
              "lerntext": "pustój",
              "de": "leer",
              "c": "a",
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
          "schrift": "это очень [Slot]",
          "lerntext": "eto ótschen [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "немецкий",
              "lerntext": "nemjézkij",
              "de": "deutsch",
              "c": "a"
            },
            {
              "schrift": "английский",
              "lerntext": "anglíjskij",
              "de": "englisch",
              "c": "a"
            },
            {
              "schrift": "прошлый",
              "lerntext": "próschlyj",
              "de": "vergangener",
              "c": "a"
            },
            {
              "schrift": "горячий",
              "lerntext": "garjátschij",
              "de": "heiß",
              "c": "a"
            },
            {
              "schrift": "возможный",
              "lerntext": "wasmóshnyj",
              "de": "möglich",
              "c": "a"
            },
            {
              "schrift": "свежий",
              "lerntext": "swjéshij",
              "de": "frisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "солёный",
              "lerntext": "saljónyj",
              "de": "salzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "острый",
              "lerntext": "óstryj",
              "de": "scharf",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "вкусный",
              "lerntext": "wkúsnyj",
              "de": "lecker",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "русский",
              "lerntext": "rússkij",
              "de": "russisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "свободный",
              "lerntext": "swabódnyj",
              "de": "frei",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "занятый",
              "lerntext": "sanjátyj",
              "de": "besetzt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "здоровый",
              "lerntext": "sdarówyj",
              "de": "gesund",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "быстрый",
              "lerntext": "býstryj",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "медленный",
              "lerntext": "mjédlennyj",
              "de": "langsam",
              "c": "a",
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
          "schrift": "это очень [Slot]",
          "lerntext": "eto ótschen [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "добрый",
              "lerntext": "dóbryj",
              "de": "gut",
              "c": "a"
            },
            {
              "schrift": "сладкий",
              "lerntext": "slátkij",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "иностранный",
              "lerntext": "inastránnyj",
              "de": "ausländisch",
              "c": "a"
            },
            {
              "schrift": "следующий",
              "lerntext": "slédujuschtschij",
              "de": "nächster",
              "c": "a"
            },
            {
              "schrift": "обычный",
              "lerntext": "abýtschnyj",
              "de": "üblich",
              "c": "a"
            },
            {
              "schrift": "немецкий",
              "lerntext": "nemjézkij",
              "de": "deutsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "английский",
              "lerntext": "anglíjskij",
              "de": "englisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "прошлый",
              "lerntext": "próschlyj",
              "de": "vergangener",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "горячий",
              "lerntext": "garjátschij",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "возможный",
              "lerntext": "wasmóshnyj",
              "de": "möglich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "свежий",
              "lerntext": "swjéshij",
              "de": "frisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "солёный",
              "lerntext": "saljónyj",
              "de": "salzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "острый",
              "lerntext": "óstryj",
              "de": "scharf",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "вкусный",
              "lerntext": "wkúsnyj",
              "de": "lecker",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "русский",
              "lerntext": "rússkij",
              "de": "russisch",
              "c": "a",
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
          "schrift": "это очень [Slot]",
          "lerntext": "eto ótschen [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "нужный",
              "lerntext": "núshnyj",
              "de": "nötig",
              "c": "a"
            },
            {
              "schrift": "весёлый",
              "lerntext": "wessjólyj",
              "de": "fröhlich",
              "c": "a"
            },
            {
              "schrift": "добрый",
              "lerntext": "dóbryj",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "сладкий",
              "lerntext": "slátkij",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "иностранный",
              "lerntext": "inastránnyj",
              "de": "ausländisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "следующий",
              "lerntext": "slédujuschtschij",
              "de": "nächster",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "обычный",
              "lerntext": "abýtschnyj",
              "de": "üblich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "немецкий",
              "lerntext": "nemjézkij",
              "de": "deutsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "английский",
              "lerntext": "anglíjskij",
              "de": "englisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "прошлый",
              "lerntext": "próschlyj",
              "de": "vergangener",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "горячий",
              "lerntext": "garjátschij",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "возможный",
              "lerntext": "wasmóshnyj",
              "de": "möglich",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "17.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это очень [Slot]",
          "lerntext": "eto ótschen [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "нужный",
              "lerntext": "núshnyj",
              "de": "nötig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "весёлый",
              "lerntext": "wessjólyj",
              "de": "fröhlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "добрый",
              "lerntext": "dóbryj",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "сладкий",
              "lerntext": "slátkij",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "иностранный",
              "lerntext": "inastránnyj",
              "de": "ausländisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "следующий",
              "lerntext": "slédujuschtschij",
              "de": "nächster",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "обычный",
              "lerntext": "abýtschnyj",
              "de": "üblich",
              "c": "a",
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "17.8"
      }
    ]
  },
  {
    "number": 18,
    "title": "Weitere Adverbien",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "я делаю это [Slot]",
          "lerntext": "ja délaju eto [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "да",
              "lerntext": "da",
              "de": "ja"
            },
            {
              "schrift": "нет",
              "lerntext": "njet",
              "de": "nein"
            },
            {
              "schrift": "мало",
              "lerntext": "mála",
              "de": "wenig"
            },
            {
              "schrift": "немного",
              "lerntext": "nemnóga",
              "de": "ein bisschen"
            },
            {
              "schrift": "меньше",
              "lerntext": "ménsche",
              "de": "weniger"
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
          "schrift": "я делаю это [Slot]",
          "lerntext": "ja délaju eto [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "редко",
              "lerntext": "rjétka",
              "de": "selten"
            },
            {
              "schrift": "ещё",
              "lerntext": "jeschtschó",
              "de": "noch"
            },
            {
              "schrift": "может быть",
              "lerntext": "móshet byt",
              "de": "vielleicht"
            },
            {
              "schrift": "правда",
              "lerntext": "práwda",
              "de": "wirklich"
            },
            {
              "schrift": "так",
              "lerntext": "tak",
              "de": "so"
            },
            {
              "schrift": "да",
              "lerntext": "da",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "нет",
              "lerntext": "njet",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "мало",
              "lerntext": "mála",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "немного",
              "lerntext": "nemnóga",
              "de": "ein bisschen",
              "wieder": true
            },
            {
              "schrift": "меньше",
              "lerntext": "ménsche",
              "de": "weniger",
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
          "schrift": "я делаю это [Slot]",
          "lerntext": "ja délaju eto [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "почти",
              "lerntext": "patschtí",
              "de": "fast"
            },
            {
              "schrift": "именно",
              "lerntext": "ímenna",
              "de": "genau"
            },
            {
              "schrift": "опять",
              "lerntext": "apját",
              "de": "wieder"
            },
            {
              "schrift": "снова",
              "lerntext": "snówa",
              "de": "erneut"
            },
            {
              "schrift": "сюда",
              "lerntext": "sjudá",
              "de": "hierher"
            },
            {
              "schrift": "редко",
              "lerntext": "rjétka",
              "de": "selten",
              "wieder": true
            },
            {
              "schrift": "ещё",
              "lerntext": "jeschtschó",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "может быть",
              "lerntext": "móshet byt",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "правда",
              "lerntext": "práwda",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "так",
              "lerntext": "tak",
              "de": "so",
              "wieder": true
            },
            {
              "schrift": "да",
              "lerntext": "da",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "нет",
              "lerntext": "njet",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "мало",
              "lerntext": "mála",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "немного",
              "lerntext": "nemnóga",
              "de": "ein bisschen",
              "wieder": true
            },
            {
              "schrift": "меньше",
              "lerntext": "ménsche",
              "de": "weniger",
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
          "schrift": "я делаю это [Slot]",
          "lerntext": "ja délaju eto [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "далеко",
              "lerntext": "daljekó",
              "de": "weit"
            },
            {
              "schrift": "близко",
              "lerntext": "blíska",
              "de": "nah"
            },
            {
              "schrift": "наконец",
              "lerntext": "nakanjéz",
              "de": "endlich"
            },
            {
              "schrift": "рано",
              "lerntext": "rána",
              "de": "früh"
            },
            {
              "schrift": "конечно",
              "lerntext": "kanjéschna",
              "de": "natürlich"
            },
            {
              "schrift": "почти",
              "lerntext": "patschtí",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "именно",
              "lerntext": "ímenna",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "опять",
              "lerntext": "apját",
              "de": "wieder",
              "wieder": true
            },
            {
              "schrift": "снова",
              "lerntext": "snówa",
              "de": "erneut",
              "wieder": true
            },
            {
              "schrift": "сюда",
              "lerntext": "sjudá",
              "de": "hierher",
              "wieder": true
            },
            {
              "schrift": "редко",
              "lerntext": "rjétka",
              "de": "selten",
              "wieder": true
            },
            {
              "schrift": "ещё",
              "lerntext": "jeschtschó",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "может быть",
              "lerntext": "móshet byt",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "правда",
              "lerntext": "práwda",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "так",
              "lerntext": "tak",
              "de": "so",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "18.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я делаю это [Slot]",
          "lerntext": "ja délaju eto [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "рядом",
              "lerntext": "rjádam",
              "de": "daneben"
            },
            {
              "schrift": "поздно",
              "lerntext": "pósna",
              "de": "spät"
            },
            {
              "schrift": "далеко",
              "lerntext": "daljekó",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "близко",
              "lerntext": "blíska",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "наконец",
              "lerntext": "nakanjéz",
              "de": "endlich",
              "wieder": true
            },
            {
              "schrift": "рано",
              "lerntext": "rána",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "конечно",
              "lerntext": "kanjéschna",
              "de": "natürlich",
              "wieder": true
            },
            {
              "schrift": "почти",
              "lerntext": "patschtí",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "именно",
              "lerntext": "ímenna",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "опять",
              "lerntext": "apját",
              "de": "wieder",
              "wieder": true
            },
            {
              "schrift": "снова",
              "lerntext": "snówa",
              "de": "erneut",
              "wieder": true
            },
            {
              "schrift": "сюда",
              "lerntext": "sjudá",
              "de": "hierher",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "18.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я делаю это [Slot]",
          "lerntext": "ja délaju eto [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "рядом",
              "lerntext": "rjádam",
              "de": "daneben",
              "wieder": true
            },
            {
              "schrift": "поздно",
              "lerntext": "pósna",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "далеко",
              "lerntext": "daljekó",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "близко",
              "lerntext": "blíska",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "наконец",
              "lerntext": "nakanjéz",
              "de": "endlich",
              "wieder": true
            },
            {
              "schrift": "рано",
              "lerntext": "rána",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "конечно",
              "lerntext": "kanjéschna",
              "de": "natürlich",
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
    "title": "Weitere Pronomen",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "это для [Slot]",
          "lerntext": "eto dlja [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "оно",
              "lerntext": "anó",
              "de": "es",
              "c": "p"
            },
            {
              "schrift": "тебе",
              "lerntext": "tjebjé",
              "de": "dir",
              "c": "p"
            },
            {
              "schrift": "её",
              "lerntext": "jejó",
              "de": "sie",
              "c": "p"
            },
            {
              "schrift": "им",
              "lerntext": "im",
              "de": "ihnen",
              "c": "p"
            },
            {
              "schrift": "ваш",
              "lerntext": "wasch",
              "de": "euer",
              "c": "p"
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
          "schrift": "это для [Slot]",
          "lerntext": "eto dlja [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "свой",
              "lerntext": "swoj",
              "de": "sein eigener",
              "c": "p"
            },
            {
              "schrift": "тот",
              "lerntext": "tot",
              "de": "jener",
              "c": "p"
            },
            {
              "schrift": "всё",
              "lerntext": "wsjo",
              "de": "alles",
              "c": "p"
            },
            {
              "schrift": "кто-то",
              "lerntext": "któ-ta",
              "de": "jemand",
              "c": "p"
            },
            {
              "schrift": "никто",
              "lerntext": "niktó",
              "de": "niemand",
              "c": "p"
            },
            {
              "schrift": "оно",
              "lerntext": "anó",
              "de": "es",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "тебе",
              "lerntext": "tjebjé",
              "de": "dir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "её",
              "lerntext": "jejó",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "им",
              "lerntext": "im",
              "de": "ihnen",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ваш",
              "lerntext": "wasch",
              "de": "euer",
              "c": "p",
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
          "schrift": "это для [Slot]",
          "lerntext": "eto dlja [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "другой",
              "lerntext": "drugój",
              "de": "anderer",
              "c": "p"
            },
            {
              "schrift": "каждый",
              "lerntext": "káshdyj",
              "de": "jeder",
              "c": "p"
            },
            {
              "schrift": "сам",
              "lerntext": "sam",
              "de": "selbst",
              "c": "p"
            },
            {
              "schrift": "оба",
              "lerntext": "óba",
              "de": "beide",
              "c": "p"
            },
            {
              "schrift": "друг друга",
              "lerntext": "drug drúga",
              "de": "einander",
              "c": "p"
            },
            {
              "schrift": "свой",
              "lerntext": "swoj",
              "de": "sein eigener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "тот",
              "lerntext": "tot",
              "de": "jener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "всё",
              "lerntext": "wsjo",
              "de": "alles",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "кто-то",
              "lerntext": "któ-ta",
              "de": "jemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "никто",
              "lerntext": "niktó",
              "de": "niemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "оно",
              "lerntext": "anó",
              "de": "es",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "тебе",
              "lerntext": "tjebjé",
              "de": "dir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "её",
              "lerntext": "jejó",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "им",
              "lerntext": "im",
              "de": "ihnen",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ваш",
              "lerntext": "wasch",
              "de": "euer",
              "c": "p",
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
          "schrift": "это для [Slot]",
          "lerntext": "eto dlja [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "другой",
              "lerntext": "drugój",
              "de": "anderer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "каждый",
              "lerntext": "káshdyj",
              "de": "jeder",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "сам",
              "lerntext": "sam",
              "de": "selbst",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "оба",
              "lerntext": "óba",
              "de": "beide",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "друг друга",
              "lerntext": "drug drúga",
              "de": "einander",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "свой",
              "lerntext": "swoj",
              "de": "sein eigener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "тот",
              "lerntext": "tot",
              "de": "jener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "всё",
              "lerntext": "wsjo",
              "de": "alles",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "кто-то",
              "lerntext": "któ-ta",
              "de": "jemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "никто",
              "lerntext": "niktó",
              "de": "niemand",
              "c": "p",
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
        "kind": "frame",
        "frame": {
          "schrift": "это для [Slot]",
          "lerntext": "eto dlja [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "другой",
              "lerntext": "drugój",
              "de": "anderer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "каждый",
              "lerntext": "káshdyj",
              "de": "jeder",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "сам",
              "lerntext": "sam",
              "de": "selbst",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "оба",
              "lerntext": "óba",
              "de": "beide",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "друг друга",
              "lerntext": "drug drúga",
              "de": "einander",
              "c": "p",
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
        "id": "19.6"
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
              "schrift": "тридцать",
              "lerntext": "trídzat",
              "de": "dreissig"
            },
            {
              "schrift": "первый",
              "lerntext": "pjérwyj",
              "de": "erster"
            },
            {
              "schrift": "второй",
              "lerntext": "wtarój",
              "de": "zweiter"
            },
            {
              "schrift": "третий",
              "lerntext": "trétij",
              "de": "dritter"
            },
            {
              "schrift": "последний",
              "lerntext": "paslédnij",
              "de": "letzter"
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
              "schrift": "двойной",
              "lerntext": "dwajnój",
              "de": "doppelt"
            },
            {
              "schrift": "пара",
              "lerntext": "pára",
              "de": "Paar"
            },
            {
              "schrift": "миллион",
              "lerntext": "millión",
              "de": "Million"
            },
            {
              "schrift": "половина",
              "lerntext": "palawína",
              "de": "Hälfte"
            },
            {
              "schrift": "тридцать",
              "lerntext": "trídzat",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "первый",
              "lerntext": "pjérwyj",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "второй",
              "lerntext": "wtarój",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "третий",
              "lerntext": "trétij",
              "de": "dritter",
              "wieder": true
            },
            {
              "schrift": "последний",
              "lerntext": "paslédnij",
              "de": "letzter",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
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
              "schrift": "двойной",
              "lerntext": "dwajnój",
              "de": "doppelt",
              "wieder": true
            },
            {
              "schrift": "пара",
              "lerntext": "pára",
              "de": "Paar",
              "wieder": true
            },
            {
              "schrift": "миллион",
              "lerntext": "millión",
              "de": "Million",
              "wieder": true
            },
            {
              "schrift": "половина",
              "lerntext": "palawína",
              "de": "Hälfte",
              "wieder": true
            },
            {
              "schrift": "тридцать",
              "lerntext": "trídzat",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "первый",
              "lerntext": "pjérwyj",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "второй",
              "lerntext": "wtarój",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "третий",
              "lerntext": "trétij",
              "de": "dritter",
              "wieder": true
            },
            {
              "schrift": "последний",
              "lerntext": "paslédnij",
              "de": "letzter",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
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
              "schrift": "двойной",
              "lerntext": "dwajnój",
              "de": "doppelt",
              "wieder": true
            },
            {
              "schrift": "пара",
              "lerntext": "pára",
              "de": "Paar",
              "wieder": true
            },
            {
              "schrift": "миллион",
              "lerntext": "millión",
              "de": "Million",
              "wieder": true
            },
            {
              "schrift": "половина",
              "lerntext": "palawína",
              "de": "Hälfte",
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
          "schrift": "это [Slot] дома",
          "lerntext": "eto [Slot] dóma"
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "из",
              "lerntext": "is",
              "de": "aus"
            },
            {
              "schrift": "вокруг",
              "lerntext": "wakrúg",
              "de": "um herum"
            },
            {
              "schrift": "вместо",
              "lerntext": "wmjésta",
              "de": "anstatt"
            },
            {
              "schrift": "по",
              "lerntext": "pa",
              "de": "entlang"
            },
            {
              "schrift": "про",
              "lerntext": "pra",
              "de": "über (Thema)"
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
          "schrift": "это [Slot] дома",
          "lerntext": "eto [Slot] dóma"
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "кроме",
              "lerntext": "krómje",
              "de": "außer"
            },
            {
              "schrift": "из",
              "lerntext": "is",
              "de": "aus",
              "wieder": true
            },
            {
              "schrift": "вокруг",
              "lerntext": "wakrúg",
              "de": "um herum",
              "wieder": true
            },
            {
              "schrift": "вместо",
              "lerntext": "wmjésta",
              "de": "anstatt",
              "wieder": true
            },
            {
              "schrift": "по",
              "lerntext": "pa",
              "de": "entlang",
              "wieder": true
            },
            {
              "schrift": "про",
              "lerntext": "pra",
              "de": "über (Thema)",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "21.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot] дома",
          "lerntext": "eto [Slot] dóma"
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "кроме",
              "lerntext": "krómje",
              "de": "außer",
              "wieder": true
            },
            {
              "schrift": "из",
              "lerntext": "is",
              "de": "aus",
              "wieder": true
            },
            {
              "schrift": "вокруг",
              "lerntext": "wakrúg",
              "de": "um herum",
              "wieder": true
            },
            {
              "schrift": "вместо",
              "lerntext": "wmjésta",
              "de": "anstatt",
              "wieder": true
            },
            {
              "schrift": "по",
              "lerntext": "pa",
              "de": "entlang",
              "wieder": true
            },
            {
              "schrift": "про",
              "lerntext": "pra",
              "de": "über (Thema)",
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
        "id": "21.4"
      }
    ]
  },
  {
    "number": 22,
    "title": "Weitere Bindewörter",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "я приду [Slot] могу",
          "lerntext": "ja pridú [Slot] magú",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "а",
              "lerntext": "a",
              "de": "und",
              "c": "k"
            },
            {
              "schrift": "поэтому",
              "lerntext": "paétamu",
              "de": "deshalb",
              "c": "k"
            },
            {
              "schrift": "также",
              "lerntext": "tákshe",
              "de": "ebenfalls",
              "c": "k"
            },
            {
              "schrift": "зато",
              "lerntext": "sató",
              "de": "dafür aber",
              "c": "k"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "22.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я приду [Slot] могу",
          "lerntext": "ja pridú [Slot] magú",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "а",
              "lerntext": "a",
              "de": "und",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "поэтому",
              "lerntext": "paétamu",
              "de": "deshalb",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "также",
              "lerntext": "tákshe",
              "de": "ebenfalls",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "зато",
              "lerntext": "sató",
              "de": "dafür aber",
              "c": "k",
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
          "schrift": "я приду [Slot] могу",
          "lerntext": "ja pridú [Slot] magú",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "а",
              "lerntext": "a",
              "de": "und",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "поэтому",
              "lerntext": "paétamu",
              "de": "deshalb",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "также",
              "lerntext": "tákshe",
              "de": "ebenfalls",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "зато",
              "lerntext": "sató",
              "de": "dafür aber",
              "c": "k",
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
        "id": "22.4"
      }
    ]
  },
  {
    "number": 23,
    "title": "Weitere Fragewörter",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] это?",
          "lerntext": "[Slot] eto?"
        },
        "frameDe": "[Slot] ist es?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "сколько",
              "lerntext": "skólka",
              "de": "wie viel"
            },
            {
              "schrift": "какой",
              "lerntext": "kakój",
              "de": "welcher"
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
          "schrift": "я хотел [Slot]",
          "lerntext": "ja chatjél [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich wollte [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "c": "v",
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
          "schrift": "я хотел [Slot]",
          "lerntext": "ja chatjél [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich wollte [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v",
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
          "schrift": "вчера я хотел [Slot]",
          "lerntext": "wtscherá ja chatjél [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Gestern wollte ich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "c": "v",
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
          "schrift": "вчера я хотел [Slot]",
          "lerntext": "wtscherá ja chatjél [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Gestern wollte ich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v",
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
          "schrift": "я уже мог [Slot]",
          "lerntext": "ja usché mog [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich konnte schon [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
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
          "schrift": "я уже мог [Slot]",
          "lerntext": "ja usché mog [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich konnte schon [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
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
          "schrift": "ты можешь [Slot]",
          "lerntext": "ty móschesch [Slot]",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "Du kannst [Slot].",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
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
          "schrift": "ты можешь [Slot]",
          "lerntext": "ty móschesch [Slot]",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "Du kannst [Slot].",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v",
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
          "schrift": "он может [Slot]",
          "lerntext": "on móschet [Slot]",
          "wortarten": {
            "on": "p"
          }
        },
        "frameDe": "Er kann [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v",
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
          "schrift": "он может [Slot]",
          "lerntext": "on móschet [Slot]",
          "wortarten": {
            "on": "p"
          }
        },
        "frameDe": "Er kann [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
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
          "schrift": "мы можем [Slot]",
          "lerntext": "my móschem [Slot]",
          "wortarten": {
            "my": "p"
          }
        },
        "frameDe": "Wir können [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v",
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
          "schrift": "мы можем [Slot]",
          "lerntext": "my móschem [Slot]",
          "wortarten": {
            "my": "p"
          }
        },
        "frameDe": "Wir können [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v",
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
          "schrift": "они могут [Slot]",
          "lerntext": "aní mógut [Slot]",
          "wortarten": {
            "aní": "p"
          }
        },
        "frameDe": "Sie können [Slot].",
        "pronouns": [
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
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
            "schrift": "они",
            "lerntext": "aní",
            "de": "sie (Mehrzahl)",
            "c": "p"
          }
        ],
        "id": "25.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "они могут [Slot]",
          "lerntext": "aní mógut [Slot]",
          "wortarten": {
            "aní": "p"
          }
        },
        "frameDe": "Sie können [Slot].",
        "pronouns": [
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
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
          "schrift": "это более [Slot]",
          "lerntext": "éta bóleje [Slot]",
          "wortarten": {
            "éta": "p"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
              "c": "a"
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "больше",
            "lerntext": "bólsche",
            "de": "mehr"
          }
        ],
        "id": "26.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это более [Slot]",
          "lerntext": "éta bóleje [Slot]",
          "wortarten": {
            "éta": "p"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
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
          "schrift": "такой же [Slot], как ты",
          "lerntext": "takój sche [Slot], kak ty",
          "wortarten": {
            "takój": "p",
            "ty": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "такой",
            "lerntext": "takój",
            "de": "solcher",
            "c": "p"
          }
        ],
        "id": "26.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "такой же [Slot], как ты",
          "lerntext": "takój sche [Slot], kak ty",
          "wortarten": {
            "takój": "p",
            "ty": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
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
          "schrift": "я чувствую себя [Slot]",
          "lerntext": "ja tschúwstwuju sebjá [Slot]",
          "wortarten": {
            "ja": "p",
            "sebjá": "p"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "себя",
            "lerntext": "sebjá",
            "de": "sich",
            "c": "p"
          }
        ],
        "id": "27.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я чувствую себя [Slot]",
          "lerntext": "ja tschúwstwuju sebjá [Slot]",
          "wortarten": {
            "ja": "p",
            "sebjá": "p"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a",
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
          "schrift": "мы встречаемся [Slot]",
          "lerntext": "my wstretschájemsja [Slot]",
          "wortarten": {
            "my": "p"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сегодня",
              "lerntext": "sewódnja",
              "de": "heute"
            },
            {
              "schrift": "завтра",
              "lerntext": "sáwtra",
              "de": "morgen"
            },
            {
              "schrift": "сейчас",
              "lerntext": "sitschás",
              "de": "jetzt"
            },
            {
              "schrift": "скоро",
              "lerntext": "skóra",
              "de": "bald"
            },
            {
              "schrift": "вчера",
              "lerntext": "wtscherá",
              "de": "gestern"
            },
            {
              "schrift": "часто",
              "lerntext": "tschásta",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "всегда",
              "lerntext": "wsegdá",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "больше",
              "lerntext": "bólsche",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "медленно",
              "lerntext": "mjédlenna",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "сразу",
              "lerntext": "srásu",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "вместе",
              "lerntext": "wmjéstje",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "плохо",
              "lerntext": "plócha",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "быстро",
              "lerntext": "býstra",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "домой",
              "lerntext": "damój",
              "de": "nach Hause",
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
          "schrift": "мы встречаемся [Slot]",
          "lerntext": "my wstretschájemsja [Slot]",
          "wortarten": {
            "my": "p"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "часто",
              "lerntext": "tschásta",
              "de": "oft"
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie"
            },
            {
              "schrift": "всегда",
              "lerntext": "wsegdá",
              "de": "immer"
            },
            {
              "schrift": "сегодня",
              "lerntext": "sewódnja",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "скоро",
              "lerntext": "skóra",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "сейчас",
              "lerntext": "sitschás",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "завтра",
              "lerntext": "sáwtra",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "вчера",
              "lerntext": "wtscherá",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "больше",
              "lerntext": "bólsche",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "там",
              "lerntext": "tam",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "много",
              "lerntext": "mnóga",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "только",
              "lerntext": "tólka",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "хорошо",
              "lerntext": "charaschó",
              "de": "gut",
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
          "schrift": "я остаюсь здесь, [Slot] я устал",
          "lerntext": "ja astajús sdjes, [Slot] ja ustál",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "если",
              "lerntext": "jésli",
              "de": "wenn",
              "c": "k"
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während",
              "c": "k"
            },
            {
              "schrift": "но",
              "lerntext": "no",
              "de": "aber",
              "c": "k"
            },
            {
              "schrift": "или",
              "lerntext": "íli",
              "de": "oder",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "и",
              "lerntext": "i",
              "de": "und",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "значит",
              "lerntext": "snátschit",
              "de": "also",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "чтобы",
              "lerntext": "schtóby",
              "de": "damit",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "тоже",
              "lerntext": "tósche",
              "de": "auch",
              "c": "k",
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
          "schrift": "я остаюсь здесь, [Slot] я устал",
          "lerntext": "ja astajús sdjes, [Slot] ja ustál",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "или",
              "lerntext": "íli",
              "de": "oder",
              "c": "k"
            },
            {
              "schrift": "и",
              "lerntext": "i",
              "de": "und",
              "c": "k"
            },
            {
              "schrift": "если",
              "lerntext": "jésli",
              "de": "wenn",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "но",
              "lerntext": "no",
              "de": "aber",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "значит",
              "lerntext": "snátschit",
              "de": "also",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "чтобы",
              "lerntext": "schtóby",
              "de": "damit",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "тоже",
              "lerntext": "tósche",
              "de": "auch",
              "c": "k",
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
          "schrift": "я думаю, что это [Slot]",
          "lerntext": "ja dúmaju, schto éta [Slot]",
          "wortarten": {
            "ja": "p",
            "éta": "p"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "c": "a"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "c": "a",
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
          "schrift": "я думаю, что это [Slot]",
          "lerntext": "ja dúmaju, schto éta [Slot]",
          "wortarten": {
            "ja": "p",
            "éta": "p"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a"
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "c": "a",
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
          "schrift": "если есть время, я хочу [Slot]",
          "lerntext": "jésli jest wrémja, ja chatschú [Slot]",
          "wortarten": {
            "jésli": "k",
            "jest": "v",
            "ja": "p"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
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
          "schrift": "если есть время, я хочу [Slot]",
          "lerntext": "jésli jest wrémja, ja chatschú [Slot]",
          "wortarten": {
            "jésli": "k",
            "jest": "v",
            "ja": "p"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "c": "v",
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
          "schrift": "ты можешь [Slot], пожалуйста?",
          "lerntext": "ty móschesch [Slot], paschálusta?",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
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
          "schrift": "ты можешь [Slot], пожалуйста?",
          "lerntext": "ty móschesch [Slot], paschálusta?",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "c": "v",
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
          "schrift": "ты должен [Slot]",
          "lerntext": "ty dólschen [Slot]",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
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
          "schrift": "ты должен [Slot]",
          "lerntext": "ty dólschen [Slot]",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
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
          "schrift": "я даю книгу [Slot]",
          "lerntext": "ja dajú knígu [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "30.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я даю книгу [Slot]",
          "lerntext": "ja dajú knígu [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "c": "n",
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
          "schrift": "я показываю город [Slot]",
          "lerntext": "ja pokázywaju górad [Slot]",
          "wortarten": {
            "ja": "p",
            "górad": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "c": "n",
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
          "schrift": "я показываю город [Slot]",
          "lerntext": "ja pokázywaju górad [Slot]",
          "wortarten": {
            "ja": "p",
            "górad": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "c": "n",
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
          "schrift": "я хочу стакан [Slot]",
          "lerntext": "ja chatschú stakán [Slot]",
          "wortarten": {
            "ja": "p",
            "stakán": "n"
          }
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "стакан",
            "lerntext": "stakán",
            "de": "Glas",
            "c": "n"
          }
        ],
        "id": "31.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "у нас достаточно [Slot]",
          "lerntext": "u nas dastátatschna [Slot]",
          "wortarten": {
            "nas": "p"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "достаточно",
            "lerntext": "dastátatschna",
            "de": "genug"
          }
        ],
        "id": "31.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "у нас достаточно [Slot]",
          "lerntext": "u nas dastátatschna [Slot]",
          "wortarten": {
            "nas": "p"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "c": "n",
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
          "schrift": "я жду уже [Slot]",
          "lerntext": "ja schdu usché [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "c": "n",
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
          "schrift": "я жду уже [Slot]",
          "lerntext": "ja schdu usché [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "c": "n",
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
          "schrift": "[Slot] я иду домой",
          "lerntext": "[Slot] ja idú damój",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сегодня",
              "lerntext": "sewódnja",
              "de": "heute"
            },
            {
              "schrift": "завтра",
              "lerntext": "sáwtra",
              "de": "morgen"
            },
            {
              "schrift": "сейчас",
              "lerntext": "sitschás",
              "de": "jetzt"
            },
            {
              "schrift": "скоро",
              "lerntext": "skóra",
              "de": "bald"
            },
            {
              "schrift": "вчера",
              "lerntext": "wtscherá",
              "de": "gestern"
            },
            {
              "schrift": "часто",
              "lerntext": "tschásta",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "всегда",
              "lerntext": "wsegdá",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "больше",
              "lerntext": "bólsche",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "достаточно",
              "lerntext": "dastátatschna",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "медленно",
              "lerntext": "mjédlenna",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "сразу",
              "lerntext": "srásu",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "вместе",
              "lerntext": "wmjéstje",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "плохо",
              "lerntext": "plócha",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "очень",
              "lerntext": "ótschen",
              "de": "sehr",
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
          "schrift": "[Slot] я иду домой",
          "lerntext": "[Slot] ja idú damój",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "часто",
              "lerntext": "tschásta",
              "de": "oft"
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie"
            },
            {
              "schrift": "всегда",
              "lerntext": "wsegdá",
              "de": "immer"
            },
            {
              "schrift": "сегодня",
              "lerntext": "sewódnja",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "скоро",
              "lerntext": "skóra",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "сейчас",
              "lerntext": "sitschás",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "завтра",
              "lerntext": "sáwtra",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "вчера",
              "lerntext": "wtscherá",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "больше",
              "lerntext": "bólsche",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "достаточно",
              "lerntext": "dastátatschna",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "быстро",
              "lerntext": "býstra",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "там",
              "lerntext": "tam",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "дома",
              "lerntext": "dóma",
              "de": "zu Hause",
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
          "schrift": "я хотел бы [Slot]",
          "lerntext": "ja chatjél by [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "c": "v",
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
          "schrift": "я хотел бы [Slot]",
          "lerntext": "ja chatjél by [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
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
          "schrift": "вы можете дать мне [Slot]?",
          "lerntext": "wy móschete dat mnje [Slot]?",
          "wortarten": {
            "wy": "p",
            "mnje": "p"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "c": "n"
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "c": "n",
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
          "schrift": "вы можете дать мне [Slot]?",
          "lerntext": "wy móschete dat mnje [Slot]?",
          "wortarten": {
            "wy": "p",
            "mnje": "p"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "c": "n",
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
          "schrift": "я думаю, это [Slot]",
          "lerntext": "ja dúmaju, éta [Slot]",
          "wortarten": {
            "ja": "p",
            "éta": "p"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "c": "a",
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
          "schrift": "я думаю, это [Slot]",
          "lerntext": "ja dúmaju, éta [Slot]",
          "wortarten": {
            "ja": "p",
            "éta": "p"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "c": "a",
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
          "schrift": "я нахожу это очень [Slot]",
          "lerntext": "ja nachaschú éta ótschen [Slot]",
          "wortarten": {
            "ja": "p",
            "éta": "p"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "c": "a"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "c": "a",
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
          "schrift": "я нахожу это очень [Slot]",
          "lerntext": "ja nachaschú éta ótschen [Slot]",
          "wortarten": {
            "ja": "p",
            "éta": "p"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "c": "a"
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "c": "a",
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
          "schrift": "завтра я буду [Slot]",
          "lerntext": "záwtra ja búdu [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
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
          "schrift": "завтра я буду [Slot]",
          "lerntext": "záwtra ja búdu [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "c": "v",
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
          "schrift": "я хочу скоро [Slot]",
          "lerntext": "ja chatschú skóra [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "c": "v",
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
          "schrift": "я хочу скоро [Slot]",
          "lerntext": "ja chatschú skóra [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
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
          "schrift": "это человек, который хочет [Slot]",
          "lerntext": "éta tschelawék, katóryj chótschet [Slot]",
          "wortarten": {
            "éta": "p",
            "katóryj": "p"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot] will.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "человек",
            "lerntext": "tschelawjék",
            "de": "Mensch",
            "c": "n"
          }
        ],
        "id": "36.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это человек, который хочет [Slot]",
          "lerntext": "éta tschelawék, katóryj chótschet [Slot]",
          "wortarten": {
            "éta": "p",
            "katóryj": "p"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot] will.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "c": "v",
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
          "schrift": "я ищу место, где можно [Slot]",
          "lerntext": "ja ischú mésta, gdje móschna [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "где",
            "lerntext": "gdje",
            "de": "wo"
          },
          {
            "schrift": "место",
            "lerntext": "mjésta",
            "de": "Platz",
            "c": "n"
          }
        ],
        "id": "36.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я ищу место, где можно [Slot]",
          "lerntext": "ja ischú mésta, gdje móschna [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "c": "v",
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
          "schrift": "вчера я был в [Slot]",
          "lerntext": "wtscherá ja byl w [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "человек",
              "lerntext": "tschelawjék",
              "de": "Mensch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "место",
              "lerntext": "mjésta",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "c": "n",
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
          "schrift": "вчера я был в [Slot]",
          "lerntext": "wtscherá ja byl w [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "человек",
              "lerntext": "tschelawjék",
              "de": "Mensch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "место",
              "lerntext": "mjésta",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "c": "n",
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
          "schrift": "я хочу [Slot], потому что есть время",
          "lerntext": "ja chatschú [Slot], patamú schto jest wrémja",
          "wortarten": {
            "ja": "p",
            "jest": "v"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "c": "v",
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
          "schrift": "я хочу [Slot], потому что есть время",
          "lerntext": "ja chatschú [Slot], patamú schto jest wrémja",
          "wortarten": {
            "ja": "p",
            "jest": "v"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "c": "v",
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
