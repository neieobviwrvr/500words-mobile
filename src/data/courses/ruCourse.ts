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
          "lerntext": "ja [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde"
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig"
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend"
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "быть",
            "lerntext": "byt",
            "de": "sein"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я [Slot]",
          "lerntext": "ja [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit"
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
          "lerntext": "my [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student"
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege"
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei"
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund"
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau"
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
          "lerntext": "my [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind"
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
          "lerntext": "on ótschen [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön"
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach"
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung"
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
          "lerntext": "on ótschen [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt"
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich"
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
          "lerntext": "on ótschen [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
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
          "lerntext": "ja [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
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
          "lerntext": "on ótschen [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
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
          "lerntext": "ja [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche"
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür"
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter"
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester"
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
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
            "de": "das"
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder"
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch"
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett"
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon"
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche"
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus"
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer"
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster"
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas"
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel"
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
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
          "lerntext": "u menjá jest [Slot]"
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie"
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter"
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung"
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand"
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
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
            "de": "mich"
          },
          {
            "schrift": "есть",
            "lerntext": "jest",
            "de": "essen"
          }
        ],
        "id": "2.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "у меня есть [Slot]",
          "lerntext": "u menjá jest [Slot]"
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn"
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper"
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund"
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
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
          "lerntext": "u menjá jest [Slot]"
        },
        "frameDe": "ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto"
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein"
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
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
          "lerntext": "eto majá [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "мой",
            "lerntext": "moj",
            "de": "mein"
          },
          {
            "schrift": "твой",
            "lerntext": "twoj",
            "de": "dein"
          },
          {
            "schrift": "наш",
            "lerntext": "nasch",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater"
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau"
            },
            {
              "schrift": "коллега",
              "lerntext": "kalljéga",
              "de": "Kollege"
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
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
            "de": "das"
          }
        ],
        "id": "2.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot] дом",
          "lerntext": "eto [Slot] dom"
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "мой",
            "lerntext": "moj",
            "de": "mein"
          },
          {
            "schrift": "твой",
            "lerntext": "twoj",
            "de": "dein"
          },
          {
            "schrift": "наш",
            "lerntext": "nasch",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn"
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "я",
              "lerntext": "ja",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "ты",
              "lerntext": "ty",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "мы",
              "lerntext": "my",
              "de": "wir",
              "wieder": true
            },
            {
              "schrift": "она",
              "lerntext": "aná",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "меня",
              "lerntext": "menjá",
              "de": "mich",
              "wieder": true
            },
            {
              "schrift": "он",
              "lerntext": "on",
              "de": "er",
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
            "de": "das"
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
              "de": "alle"
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn",
              "wieder": true
            },
            {
              "schrift": "мой",
              "lerntext": "moj",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "твой",
              "lerntext": "twoj",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "наш",
              "lerntext": "nasch",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "я",
              "lerntext": "ja",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "ты",
              "lerntext": "ty",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "мы",
              "lerntext": "my",
              "de": "wir",
              "wieder": true
            },
            {
              "schrift": "она",
              "lerntext": "aná",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "меня",
              "lerntext": "menjá",
              "de": "mich",
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
            "de": "das"
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
              "de": "dieser"
            },
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn"
            },
            {
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch"
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle",
              "wieder": true
            },
            {
              "schrift": "мой",
              "lerntext": "moj",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "твой",
              "lerntext": "twoj",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "наш",
              "lerntext": "nasch",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "я",
              "lerntext": "ja",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "ты",
              "lerntext": "ty",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "мы",
              "lerntext": "my",
              "de": "wir",
              "wieder": true
            },
            {
              "schrift": "она",
              "lerntext": "aná",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "меня",
              "lerntext": "menjá",
              "de": "mich",
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
          "lerntext": "eto majá [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "мой",
            "lerntext": "moj",
            "de": "mein"
          },
          {
            "schrift": "твой",
            "lerntext": "twoj",
            "de": "dein"
          },
          {
            "schrift": "наш",
            "lerntext": "nasch",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas",
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
              "wieder": true
            },
            {
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch",
              "wieder": true
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser"
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee"
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee"
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier"
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein"
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
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
            "de": "wollen"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen"
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot"
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse"
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch"
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker"
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
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
          "lerntext": "mnje núshen [Slot]"
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe"
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit"
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld"
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz"
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
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
            "de": "brauchen"
          },
          {
            "schrift": "мне",
            "lerntext": "mnje",
            "de": "mir"
          }
        ],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу [Slot], пожалуйста",
          "lerntext": "ja chatschú [Slot], pashálusta"
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück"
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen"
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen"
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst"
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
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
          "lerntext": "ja jem [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch"
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch"
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse"
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "wieder": true
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
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
            "de": "essen"
          },
          {
            "schrift": "пить",
            "lerntext": "pit",
            "de": "trinken"
          }
        ],
        "id": "3.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я ем [Slot]",
          "lerntext": "ja jem [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
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
          "lerntext": "ja jem [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
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
          "schrift": "ты [Slot]?",
          "lerntext": "ty [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt"
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu"
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
              "de": "wichtig"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
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
              "wieder": true
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
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
              "de": "welcher"
            },
            {
              "schrift": "что-то",
              "lerntext": "schtó-ta",
              "de": "etwas"
            },
            {
              "schrift": "весь",
              "lerntext": "wjes",
              "de": "ganz"
            },
            {
              "schrift": "мне",
              "lerntext": "mnje",
              "de": "mir",
              "wieder": true
            },
            {
              "schrift": "этот",
              "lerntext": "état",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch",
              "wieder": true
            },
            {
              "schrift": "наш",
              "lerntext": "nasch",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle",
              "wieder": true
            },
            {
              "schrift": "мой",
              "lerntext": "moj",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "твой",
              "lerntext": "twoj",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn",
              "wieder": true
            },
            {
              "schrift": "она",
              "lerntext": "aná",
              "de": "sie",
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
            "de": "das"
          }
        ],
        "id": "4.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ты [Slot]?",
          "lerntext": "ty [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
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
              "wieder": true
            },
            {
              "schrift": "что-то",
              "lerntext": "schtó-ta",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "весь",
              "lerntext": "wjes",
              "de": "ganz",
              "wieder": true
            },
            {
              "schrift": "мне",
              "lerntext": "mnje",
              "de": "mir",
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
          "lerntext": "ty [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
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
              "wieder": true
            },
            {
              "schrift": "что-то",
              "lerntext": "schtó-ta",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "весь",
              "lerntext": "wjes",
              "de": "ganz",
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
              "de": "Toilette"
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule"
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße"
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
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
              "de": "Bahnhof"
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen"
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
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
              "de": "Geschäft"
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant"
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
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
          "lerntext": "sdes jest [Slot]?"
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
              "de": "Universität"
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
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
          "lerntext": "sdes jest [Slot]?"
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
              "de": "Krankenhaus"
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "магазин",
              "lerntext": "magasín",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
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
              "de": "Stadt"
            },
            {
              "schrift": "дорога",
              "lerntext": "daróga",
              "de": "Weg"
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald"
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "магазин",
              "lerntext": "magasín",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
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
            "de": "das"
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
              "wieder": true
            },
            {
              "schrift": "дорога",
              "lerntext": "daróga",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "wieder": true
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
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
              "wieder": true
            },
            {
              "schrift": "дорога",
              "lerntext": "daróga",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
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
              "de": "teuer"
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig"
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß"
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein"
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang"
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden",
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
            "de": "das"
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
              "de": "kurz"
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch"
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig"
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer"
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht"
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
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
          "lerntext": "ja magú [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen"
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren"
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben"
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "есть",
              "lerntext": "jest",
              "de": "essen",
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
            "de": "können"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я могу [Slot]",
          "lerntext": "ja magú [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen"
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen"
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "есть",
              "lerntext": "jest",
              "de": "essen",
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
          "lerntext": "ja dólshen [Slot]"
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten"
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen"
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
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
            "de": "müssen"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen"
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen"
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen"
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
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
          "lerntext": "ja nje magú [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen"
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
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
            "de": "bekommen"
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
          "lerntext": "ja nje magú [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen"
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
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
          "lerntext": "ja nje magú [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
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
          "schrift": "я не могу [Slot]",
          "lerntext": "ja nje magú [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
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
          "schrift": "я иду в [Slot]",
          "lerntext": "ja idú w [Slot]"
        },
        "frameDe": "ich gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "магазин",
              "lerntext": "magasín",
              "de": "Geschäft"
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "еда",
              "lerntext": "jedá",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
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
            "de": "gehen"
          },
          {
            "schrift": "приходить",
            "lerntext": "prichadít",
            "de": "kommen"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я еду на [Slot]",
          "lerntext": "ja jédu na [Slot]"
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus"
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug"
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto"
            },
            {
              "schrift": "дорога",
              "lerntext": "daróga",
              "de": "Weg"
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
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
            "de": "reisen"
          }
        ],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу [Slot] сейчас",
          "lerntext": "ja chatschú [Slot] sitschás"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen"
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen"
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen"
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben"
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
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
          "lerntext": "ja chatschú [Slot] sitschás"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
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
          "lerntext": "ja chatschú [Slot] sitschás"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
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
              "de": "Abend"
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht"
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag"
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche"
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
            "de": "auch"
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
              "de": "Stunde"
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute"
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
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
            "de": "das"
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
              "de": "Urlaub"
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch",
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
              "wieder": true
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
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
          "lerntext": "ja ljubljú [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne"
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen"
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee"
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter"
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg"
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
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
            "de": "lieben"
          },
          {
            "schrift": "любить",
            "lerntext": "ljubít",
            "de": "lieben"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я люблю [Slot]",
          "lerntext": "ja ljubljú [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer"
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
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
          "lerntext": "ja wíshu [Slot]"
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "меня",
              "lerntext": "menjá",
              "de": "mich"
            },
            {
              "schrift": "тебя",
              "lerntext": "tjebjá",
              "de": "dich"
            },
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn"
            },
            {
              "schrift": "нас",
              "lerntext": "nas",
              "de": "uns"
            },
            {
              "schrift": "этот",
              "lerntext": "état",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "который",
              "lerntext": "katóryj",
              "de": "welcher",
              "wieder": true
            },
            {
              "schrift": "что-то",
              "lerntext": "schtó-ta",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "весь",
              "lerntext": "wjes",
              "de": "ganz",
              "wieder": true
            },
            {
              "schrift": "мне",
              "lerntext": "mnje",
              "de": "mir",
              "wieder": true
            },
            {
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch",
              "wieder": true
            },
            {
              "schrift": "наш",
              "lerntext": "nasch",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle",
              "wieder": true
            },
            {
              "schrift": "мой",
              "lerntext": "moj",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "твой",
              "lerntext": "twoj",
              "de": "dein",
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
            "de": "finden"
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
              "de": "rot"
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau"
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb"
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün"
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz"
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
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
              "de": "weiß"
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun"
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau"
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
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
          "lerntext": "jedá [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb"
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm"
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt"
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber"
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig"
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
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
            "de": "Essen"
          }
        ],
        "id": "10.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "еда [Slot]",
          "lerntext": "jedá [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "wieder": true
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
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
          "lerntext": "ja ljubljú [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
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
          "lerntext": "jedá [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "wieder": true
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
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
          "lerntext": "wtscherá ja byl [Slot]"
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank"
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden"
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
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
          "lerntext": "sáwtra ja búdu [Slot]"
        },
        "frameDe": "ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben"
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen"
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden"
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
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
            "de": "werden"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу много [Slot]",
          "lerntext": "ja chatschú mnóga [Slot]"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen"
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken"
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
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
          "lerntext": "ja stanawljús [Slot]"
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen"
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen"
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich"
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
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
            "de": "werden"
          }
        ],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я хочу много [Slot]",
          "lerntext": "ja chatschú mnóga [Slot]"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
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
          "lerntext": "ja stanawljús [Slot]"
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
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
          "lerntext": "ja chatschú mnóga [Slot]"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
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
          "schrift": "я становлюсь [Slot]",
          "lerntext": "ja stanawljús [Slot]"
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
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
          "lerntext": "ja ustál [Slot] rabótaju"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "и",
            "lerntext": "i",
            "de": "und"
          },
          {
            "schrift": "но",
            "lerntext": "no",
            "de": "aber"
          },
          {
            "schrift": "или",
            "lerntext": "íli",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil"
            },
            {
              "schrift": "над",
              "lerntext": "nad",
              "de": "über"
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während"
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl"
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
            "de": "und"
          },
          {
            "schrift": "но",
            "lerntext": "no",
            "de": "aber"
          },
          {
            "schrift": "или",
            "lerntext": "íli",
            "de": "oder"
          },
          {
            "schrift": "значит",
            "lerntext": "snátschit",
            "de": "also"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я устал [Slot] работаю",
          "lerntext": "ja ustál [Slot] rabótaju"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "и",
            "lerntext": "i",
            "de": "und"
          },
          {
            "schrift": "но",
            "lerntext": "no",
            "de": "aber"
          },
          {
            "schrift": "или",
            "lerntext": "íli",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "чтобы",
              "lerntext": "schtóby",
              "de": "damit"
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
              "wieder": true
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl",
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
          "lerntext": "chatschú [Slot] no nje magú"
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen"
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
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
          "lerntext": "eto [Slot] no nitschewó"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig"
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht"
            },
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant"
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch"
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
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
            "de": "das"
          },
          {
            "schrift": "ничего",
            "lerntext": "nitschewó",
            "de": "nichts"
          }
        ],
        "id": "12.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это [Slot] но ничего",
          "lerntext": "eto [Slot] no nitschewó"
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
          "lerntext": "ja chatschú tebjá [Slot]"
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
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
          "lerntext": "eto [Slot] no nitschewó"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
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
          "lerntext": "ja ustál [Slot] rabótaju"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "и",
            "lerntext": "i",
            "de": "und"
          },
          {
            "schrift": "но",
            "lerntext": "no",
            "de": "aber"
          },
          {
            "schrift": "или",
            "lerntext": "íli",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "чтобы",
              "lerntext": "schtóby",
              "de": "damit",
              "wieder": true
            },
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl",
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
          "lerntext": "eto [Slot] no nitschewó"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
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
          "lerntext": "ja chatschú tebjá [Slot]"
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
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
          "lerntext": "u menjá balít [Slot]"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "мой",
            "lerntext": "moj",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf"
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge"
            },
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche",
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
          "lerntext": "u menjá bol w [Slot]"
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein"
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
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
            "de": "Schmerz"
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
          "lerntext": "sdes jest [Slot]"
        },
        "frameDe": "Hier gibt es einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller"
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
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
          "lerntext": "ja pakupáju [Slot]"
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid"
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "стакан",
              "lerntext": "stakán",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer",
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
          "lerntext": "u menjá jest [Slot]"
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung"
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name"
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
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
          "lerntext": "eto majá [Slot]"
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit"
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
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
          "lerntext": "ja shdu [Slot]"
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort"
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung"
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie",
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
          "lerntext": "ja palutschíl charóschi [Slot]"
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus"
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer"
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch"
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
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
            "de": "gut"
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
              "de": "Ehefrau"
            },
            {
              "schrift": "аптека",
              "lerntext": "aptjéka",
              "de": "Apotheke"
            },
            {
              "schrift": "билет",
              "lerntext": "biljét",
              "de": "Fahrkarte"
            },
            {
              "schrift": "счёт",
              "lerntext": "schtschot",
              "de": "Rechnung"
            },
            {
              "schrift": "карта",
              "lerntext": "kárta",
              "de": "Karte"
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
              "de": "Vorlesung"
            },
            {
              "schrift": "язык",
              "lerntext": "jasýk",
              "de": "Sprache"
            },
            {
              "schrift": "вопрос",
              "lerntext": "wapróss",
              "de": "Frage"
            },
            {
              "schrift": "вещь",
              "lerntext": "weschtsch",
              "de": "Sache"
            },
            {
              "schrift": "меню",
              "lerntext": "menjú",
              "de": "Speisekarte"
            },
            {
              "schrift": "жена",
              "lerntext": "shená",
              "de": "Ehefrau",
              "wieder": true
            },
            {
              "schrift": "аптека",
              "lerntext": "aptjéka",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "билет",
              "lerntext": "biljét",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "счёт",
              "lerntext": "schtschot",
              "de": "Rechnung",
              "wieder": true
            },
            {
              "schrift": "карта",
              "lerntext": "kárta",
              "de": "Karte",
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
              "de": "Flasche"
            },
            {
              "schrift": "номер",
              "lerntext": "nómer",
              "de": "Nummer"
            },
            {
              "schrift": "музыка",
              "lerntext": "músyka",
              "de": "Musik"
            },
            {
              "schrift": "мир",
              "lerntext": "mir",
              "de": "Welt"
            },
            {
              "schrift": "воздух",
              "lerntext": "wósduch",
              "de": "Luft"
            },
            {
              "schrift": "лекция",
              "lerntext": "ljékzija",
              "de": "Vorlesung",
              "wieder": true
            },
            {
              "schrift": "язык",
              "lerntext": "jasýk",
              "de": "Sprache",
              "wieder": true
            },
            {
              "schrift": "вопрос",
              "lerntext": "wapróss",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "вещь",
              "lerntext": "weschtsch",
              "de": "Sache",
              "wieder": true
            },
            {
              "schrift": "меню",
              "lerntext": "menjú",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "жена",
              "lerntext": "shená",
              "de": "Ehefrau",
              "wieder": true
            },
            {
              "schrift": "аптека",
              "lerntext": "aptjéka",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "билет",
              "lerntext": "biljét",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "счёт",
              "lerntext": "schtschot",
              "de": "Rechnung",
              "wieder": true
            },
            {
              "schrift": "карта",
              "lerntext": "kárta",
              "de": "Karte",
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
              "de": "Katze"
            },
            {
              "schrift": "любовь",
              "lerntext": "ljubów",
              "de": "Liebe"
            },
            {
              "schrift": "способ",
              "lerntext": "spóssab",
              "de": "Art"
            },
            {
              "schrift": "идея",
              "lerntext": "idjéja",
              "de": "Idee"
            },
            {
              "schrift": "история",
              "lerntext": "istórija",
              "de": "Geschichte"
            },
            {
              "schrift": "бутылка",
              "lerntext": "butýlka",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "номер",
              "lerntext": "nómer",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "музыка",
              "lerntext": "músyka",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "мир",
              "lerntext": "mir",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "воздух",
              "lerntext": "wósduch",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "лекция",
              "lerntext": "ljékzija",
              "de": "Vorlesung",
              "wieder": true
            },
            {
              "schrift": "язык",
              "lerntext": "jasýk",
              "de": "Sprache",
              "wieder": true
            },
            {
              "schrift": "вопрос",
              "lerntext": "wapróss",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "вещь",
              "lerntext": "weschtsch",
              "de": "Sache",
              "wieder": true
            },
            {
              "schrift": "меню",
              "lerntext": "menjú",
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
              "de": "Angst"
            },
            {
              "schrift": "смена",
              "lerntext": "smjéna",
              "de": "Schicht"
            },
            {
              "schrift": "перерыв",
              "lerntext": "pererýw",
              "de": "Pause"
            },
            {
              "schrift": "размер",
              "lerntext": "rasmjér",
              "de": "Grösse"
            },
            {
              "schrift": "кошка",
              "lerntext": "kóschka",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "любовь",
              "lerntext": "ljubów",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "способ",
              "lerntext": "spóssab",
              "de": "Art",
              "wieder": true
            },
            {
              "schrift": "идея",
              "lerntext": "idjéja",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "история",
              "lerntext": "istórija",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "бутылка",
              "lerntext": "butýlka",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "номер",
              "lerntext": "nómer",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "музыка",
              "lerntext": "músyka",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "мир",
              "lerntext": "mir",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "воздух",
              "lerntext": "wósduch",
              "de": "Luft",
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
              "de": "Mann"
            },
            {
              "schrift": "парень",
              "lerntext": "párjen",
              "de": "Junge"
            },
            {
              "schrift": "муж",
              "lerntext": "mush",
              "de": "Ehemann"
            },
            {
              "schrift": "месяц",
              "lerntext": "méssjaz",
              "de": "Monat"
            },
            {
              "schrift": "утро",
              "lerntext": "útra",
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
              "de": "Markt"
            },
            {
              "schrift": "паспорт",
              "lerntext": "páspart",
              "de": "Pass"
            },
            {
              "schrift": "цена",
              "lerntext": "zená",
              "de": "Preis"
            },
            {
              "schrift": "врач",
              "lerntext": "wratsch",
              "de": "Arzt"
            },
            {
              "schrift": "фильм",
              "lerntext": "film",
              "de": "Film"
            },
            {
              "schrift": "мужчина",
              "lerntext": "muschtschína",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "парень",
              "lerntext": "párjen",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "муж",
              "lerntext": "mush",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "месяц",
              "lerntext": "méssjaz",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "утро",
              "lerntext": "útra",
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
              "de": "Hund"
            },
            {
              "schrift": "часть",
              "lerntext": "tschast",
              "de": "Teil"
            },
            {
              "schrift": "начало",
              "lerntext": "natschála",
              "de": "Anfang"
            },
            {
              "schrift": "причина",
              "lerntext": "pritschína",
              "de": "Grund"
            },
            {
              "schrift": "голод",
              "lerntext": "gólad",
              "de": "Hunger"
            },
            {
              "schrift": "рынок",
              "lerntext": "rýnak",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "паспорт",
              "lerntext": "páspart",
              "de": "Pass",
              "wieder": true
            },
            {
              "schrift": "цена",
              "lerntext": "zená",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "врач",
              "lerntext": "wratsch",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "фильм",
              "lerntext": "film",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "мужчина",
              "lerntext": "muschtschína",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "парень",
              "lerntext": "párjen",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "муж",
              "lerntext": "mush",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "месяц",
              "lerntext": "méssjaz",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "утро",
              "lerntext": "útra",
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
              "de": "Schlaf"
            },
            {
              "schrift": "скидка",
              "lerntext": "skídka",
              "de": "Rabatt"
            },
            {
              "schrift": "вход",
              "lerntext": "wchod",
              "de": "Eingang"
            },
            {
              "schrift": "выход",
              "lerntext": "wýchad",
              "de": "Ausgang"
            },
            {
              "schrift": "клиент",
              "lerntext": "klijént",
              "de": "Kunde"
            },
            {
              "schrift": "собака",
              "lerntext": "ssabáka",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "часть",
              "lerntext": "tschast",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "начало",
              "lerntext": "natschála",
              "de": "Anfang",
              "wieder": true
            },
            {
              "schrift": "причина",
              "lerntext": "pritschína",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "голод",
              "lerntext": "gólad",
              "de": "Hunger",
              "wieder": true
            },
            {
              "schrift": "рынок",
              "lerntext": "rýnak",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "паспорт",
              "lerntext": "páspart",
              "de": "Pass",
              "wieder": true
            },
            {
              "schrift": "цена",
              "lerntext": "zená",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "врач",
              "lerntext": "wratsch",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "фильм",
              "lerntext": "film",
              "de": "Film",
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
              "de": "Lohn"
            },
            {
              "schrift": "договор",
              "lerntext": "dagawór",
              "de": "Vertrag"
            },
            {
              "schrift": "сон",
              "lerntext": "son",
              "de": "Schlaf",
              "wieder": true
            },
            {
              "schrift": "скидка",
              "lerntext": "skídka",
              "de": "Rabatt",
              "wieder": true
            },
            {
              "schrift": "вход",
              "lerntext": "wchod",
              "de": "Eingang",
              "wieder": true
            },
            {
              "schrift": "выход",
              "lerntext": "wýchad",
              "de": "Ausgang",
              "wieder": true
            },
            {
              "schrift": "клиент",
              "lerntext": "klijént",
              "de": "Kunde",
              "wieder": true
            },
            {
              "schrift": "собака",
              "lerntext": "ssabáka",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "часть",
              "lerntext": "tschast",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "начало",
              "lerntext": "natschála",
              "de": "Anfang",
              "wieder": true
            },
            {
              "schrift": "причина",
              "lerntext": "pritschína",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "голод",
              "lerntext": "gólad",
              "de": "Hunger",
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
              "de": "Jahr"
            },
            {
              "schrift": "выходные",
              "lerntext": "wychadnýje",
              "de": "Wochenende"
            },
            {
              "schrift": "страна",
              "lerntext": "straná",
              "de": "Land"
            },
            {
              "schrift": "кафе",
              "lerntext": "kafé",
              "de": "Cafe"
            },
            {
              "schrift": "слово",
              "lerntext": "slówa",
              "de": "Wort"
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
              "de": "Problem"
            },
            {
              "schrift": "девушка",
              "lerntext": "djéwuschka",
              "de": "Mädchen"
            },
            {
              "schrift": "багаж",
              "lerntext": "bagásh",
              "de": "Gepäck"
            },
            {
              "schrift": "лекарство",
              "lerntext": "lekárstwa",
              "de": "Medikament"
            },
            {
              "schrift": "температура",
              "lerntext": "temperatúra",
              "de": "Fieber"
            },
            {
              "schrift": "год",
              "lerntext": "god",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "выходные",
              "lerntext": "wychadnýje",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "страна",
              "lerntext": "straná",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "кафе",
              "lerntext": "kafé",
              "de": "Cafe",
              "wieder": true
            },
            {
              "schrift": "слово",
              "lerntext": "slówa",
              "de": "Wort",
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
              "de": "Fest"
            },
            {
              "schrift": "жизнь",
              "lerntext": "shysn",
              "de": "Leben"
            },
            {
              "schrift": "подарок",
              "lerntext": "padárak",
              "de": "Geschenk"
            },
            {
              "schrift": "конец",
              "lerntext": "kanjéz",
              "de": "Ende"
            },
            {
              "schrift": "пример",
              "lerntext": "primjér",
              "de": "Beispiel"
            },
            {
              "schrift": "проблема",
              "lerntext": "prabljéma",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "девушка",
              "lerntext": "djéwuschka",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "багаж",
              "lerntext": "bagásh",
              "de": "Gepäck",
              "wieder": true
            },
            {
              "schrift": "лекарство",
              "lerntext": "lekárstwa",
              "de": "Medikament",
              "wieder": true
            },
            {
              "schrift": "температура",
              "lerntext": "temperatúra",
              "de": "Fieber",
              "wieder": true
            },
            {
              "schrift": "год",
              "lerntext": "god",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "выходные",
              "lerntext": "wychadnýje",
              "de": "Wochenende",
              "wieder": true
            },
            {
              "schrift": "страна",
              "lerntext": "straná",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "кафе",
              "lerntext": "kafé",
              "de": "Cafe",
              "wieder": true
            },
            {
              "schrift": "слово",
              "lerntext": "slówa",
              "de": "Wort",
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
              "de": "Treffen"
            },
            {
              "schrift": "праздник",
              "lerntext": "prásnik",
              "de": "Fest",
              "wieder": true
            },
            {
              "schrift": "жизнь",
              "lerntext": "shysn",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "подарок",
              "lerntext": "padárak",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "конец",
              "lerntext": "kanjéz",
              "de": "Ende",
              "wieder": true
            },
            {
              "schrift": "пример",
              "lerntext": "primjér",
              "de": "Beispiel",
              "wieder": true
            },
            {
              "schrift": "проблема",
              "lerntext": "prabljéma",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "девушка",
              "lerntext": "djéwuschka",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "багаж",
              "lerntext": "bagásh",
              "de": "Gepäck",
              "wieder": true
            },
            {
              "schrift": "лекарство",
              "lerntext": "lekárstwa",
              "de": "Medikament",
              "wieder": true
            },
            {
              "schrift": "температура",
              "lerntext": "temperatúra",
              "de": "Fieber",
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
              "de": "Leute"
            },
            {
              "schrift": "волосы",
              "lerntext": "wólassy",
              "de": "Haare"
            },
            {
              "schrift": "обувь",
              "lerntext": "óbuw",
              "de": "Schuhe"
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
              "wieder": true
            },
            {
              "schrift": "смена",
              "lerntext": "smjéna",
              "de": "Schicht",
              "wieder": true
            },
            {
              "schrift": "перерыв",
              "lerntext": "pererýw",
              "de": "Pause",
              "wieder": true
            },
            {
              "schrift": "размер",
              "lerntext": "rasmjér",
              "de": "Grösse",
              "wieder": true
            },
            {
              "schrift": "люди",
              "lerntext": "ljúdi",
              "de": "Leute",
              "wieder": true
            },
            {
              "schrift": "волосы",
              "lerntext": "wólassy",
              "de": "Haare",
              "wieder": true
            },
            {
              "schrift": "обувь",
              "lerntext": "óbuw",
              "de": "Schuhe",
              "wieder": true
            },
            {
              "schrift": "кошка",
              "lerntext": "kóschka",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "любовь",
              "lerntext": "ljubów",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "способ",
              "lerntext": "spóssab",
              "de": "Art",
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
              "wieder": true
            },
            {
              "schrift": "история",
              "lerntext": "istórija",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "страх",
              "lerntext": "strach",
              "de": "Angst",
              "wieder": true
            },
            {
              "schrift": "смена",
              "lerntext": "smjéna",
              "de": "Schicht",
              "wieder": true
            },
            {
              "schrift": "перерыв",
              "lerntext": "pererýw",
              "de": "Pause",
              "wieder": true
            },
            {
              "schrift": "размер",
              "lerntext": "rasmjér",
              "de": "Grösse",
              "wieder": true
            },
            {
              "schrift": "люди",
              "lerntext": "ljúdi",
              "de": "Leute",
              "wieder": true
            },
            {
              "schrift": "волосы",
              "lerntext": "wólassy",
              "de": "Haare",
              "wieder": true
            },
            {
              "schrift": "обувь",
              "lerntext": "óbuw",
              "de": "Schuhe",
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
              "wieder": true
            },
            {
              "schrift": "договор",
              "lerntext": "dagawór",
              "de": "Vertrag",
              "wieder": true
            },
            {
              "schrift": "сон",
              "lerntext": "son",
              "de": "Schlaf",
              "wieder": true
            },
            {
              "schrift": "скидка",
              "lerntext": "skídka",
              "de": "Rabatt",
              "wieder": true
            },
            {
              "schrift": "вход",
              "lerntext": "wchod",
              "de": "Eingang",
              "wieder": true
            },
            {
              "schrift": "выход",
              "lerntext": "wýchad",
              "de": "Ausgang",
              "wieder": true
            },
            {
              "schrift": "клиент",
              "lerntext": "klijént",
              "de": "Kunde",
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
              "wieder": true
            },
            {
              "schrift": "праздник",
              "lerntext": "prásnik",
              "de": "Fest",
              "wieder": true
            },
            {
              "schrift": "жизнь",
              "lerntext": "shysn",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "подарок",
              "lerntext": "padárak",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "конец",
              "lerntext": "kanjéz",
              "de": "Ende",
              "wieder": true
            },
            {
              "schrift": "пример",
              "lerntext": "primjér",
              "de": "Beispiel",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "убирать",
              "lerntext": "ubirát",
              "de": "aufräumen"
            },
            {
              "schrift": "класть",
              "lerntext": "klast",
              "de": "legen"
            },
            {
              "schrift": "выходить",
              "lerntext": "wychadít",
              "de": "hinausgehen"
            },
            {
              "schrift": "учиться",
              "lerntext": "utschítsa",
              "de": "lernen"
            },
            {
              "schrift": "кончать",
              "lerntext": "kantschát",
              "de": "beenden"
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "бегать",
              "lerntext": "bjégat",
              "de": "rennen"
            },
            {
              "schrift": "жениться",
              "lerntext": "shenítsa",
              "de": "heiraten"
            },
            {
              "schrift": "казаться",
              "lerntext": "kasátsa",
              "de": "scheinen"
            },
            {
              "schrift": "заказывать",
              "lerntext": "sakásywat",
              "de": "bestellen"
            },
            {
              "schrift": "держать",
              "lerntext": "dershát",
              "de": "halten"
            },
            {
              "schrift": "убирать",
              "lerntext": "ubirát",
              "de": "aufräumen",
              "wieder": true
            },
            {
              "schrift": "класть",
              "lerntext": "klast",
              "de": "legen",
              "wieder": true
            },
            {
              "schrift": "выходить",
              "lerntext": "wychadít",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "учиться",
              "lerntext": "utschítsa",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "кончать",
              "lerntext": "kantschát",
              "de": "beenden",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "звать",
              "lerntext": "swat",
              "de": "rufen"
            },
            {
              "schrift": "стоить",
              "lerntext": "stóit",
              "de": "kosten"
            },
            {
              "schrift": "уезжать",
              "lerntext": "ujeshát",
              "de": "abfahren"
            },
            {
              "schrift": "приезжать",
              "lerntext": "prijeshát",
              "de": "ankommen"
            },
            {
              "schrift": "входить",
              "lerntext": "wchadít",
              "de": "hineingehen"
            },
            {
              "schrift": "бегать",
              "lerntext": "bjégat",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "жениться",
              "lerntext": "shenítsa",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "казаться",
              "lerntext": "kasátsa",
              "de": "scheinen",
              "wieder": true
            },
            {
              "schrift": "заказывать",
              "lerntext": "sakásywat",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "держать",
              "lerntext": "dershát",
              "de": "halten",
              "wieder": true
            },
            {
              "schrift": "убирать",
              "lerntext": "ubirát",
              "de": "aufräumen",
              "wieder": true
            },
            {
              "schrift": "класть",
              "lerntext": "klast",
              "de": "legen",
              "wieder": true
            },
            {
              "schrift": "выходить",
              "lerntext": "wychadít",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "учиться",
              "lerntext": "utschítsa",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "кончать",
              "lerntext": "kantschát",
              "de": "beenden",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "носить",
              "lerntext": "nassít",
              "de": "tragen"
            },
            {
              "schrift": "нравиться",
              "lerntext": "nráwitsa",
              "de": "gefallen"
            },
            {
              "schrift": "изучать",
              "lerntext": "isutschát",
              "de": "studieren"
            },
            {
              "schrift": "преподавать",
              "lerntext": "prepadawát",
              "de": "unterrichten"
            },
            {
              "schrift": "помнить",
              "lerntext": "pómnit",
              "de": "sich erinnern"
            },
            {
              "schrift": "звать",
              "lerntext": "swat",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "стоить",
              "lerntext": "stóit",
              "de": "kosten",
              "wieder": true
            },
            {
              "schrift": "уезжать",
              "lerntext": "ujeshát",
              "de": "abfahren",
              "wieder": true
            },
            {
              "schrift": "приезжать",
              "lerntext": "prijeshát",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "входить",
              "lerntext": "wchadít",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "бегать",
              "lerntext": "bjégat",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "жениться",
              "lerntext": "shenítsa",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "казаться",
              "lerntext": "kasátsa",
              "de": "scheinen",
              "wieder": true
            },
            {
              "schrift": "заказывать",
              "lerntext": "sakásywat",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "держать",
              "lerntext": "dershát",
              "de": "halten",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "начинать",
              "lerntext": "natschinát",
              "de": "anfangen"
            },
            {
              "schrift": "пробовать",
              "lerntext": "próbawat",
              "de": "versuchen"
            },
            {
              "schrift": "петь",
              "lerntext": "pjet",
              "de": "singen"
            },
            {
              "schrift": "водить",
              "lerntext": "wadít",
              "de": "fahren"
            },
            {
              "schrift": "посещать",
              "lerntext": "passeschtschát",
              "de": "besuchen"
            },
            {
              "schrift": "носить",
              "lerntext": "nassít",
              "de": "tragen",
              "wieder": true
            },
            {
              "schrift": "нравиться",
              "lerntext": "nráwitsa",
              "de": "gefallen",
              "wieder": true
            },
            {
              "schrift": "изучать",
              "lerntext": "isutschát",
              "de": "studieren",
              "wieder": true
            },
            {
              "schrift": "преподавать",
              "lerntext": "prepadawát",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "помнить",
              "lerntext": "pómnit",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "звать",
              "lerntext": "swat",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "стоить",
              "lerntext": "stóit",
              "de": "kosten",
              "wieder": true
            },
            {
              "schrift": "уезжать",
              "lerntext": "ujeshát",
              "de": "abfahren",
              "wieder": true
            },
            {
              "schrift": "приезжать",
              "lerntext": "prijeshát",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "входить",
              "lerntext": "wchadít",
              "de": "hineingehen",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "встречать",
              "lerntext": "wstretschát",
              "de": "treffen"
            },
            {
              "schrift": "знакомиться",
              "lerntext": "snakómitsa",
              "de": "kennenlernen"
            },
            {
              "schrift": "родиться",
              "lerntext": "radítsa",
              "de": "geboren werden"
            },
            {
              "schrift": "случаться",
              "lerntext": "slutschátsa",
              "de": "geschehen"
            },
            {
              "schrift": "бронировать",
              "lerntext": "branírawat",
              "de": "reservieren"
            },
            {
              "schrift": "начинать",
              "lerntext": "natschinát",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "пробовать",
              "lerntext": "próbawat",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "петь",
              "lerntext": "pjet",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "водить",
              "lerntext": "wadít",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "посещать",
              "lerntext": "passeschtschát",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "носить",
              "lerntext": "nassít",
              "de": "tragen",
              "wieder": true
            },
            {
              "schrift": "нравиться",
              "lerntext": "nráwitsa",
              "de": "gefallen",
              "wieder": true
            },
            {
              "schrift": "изучать",
              "lerntext": "isutschát",
              "de": "studieren",
              "wieder": true
            },
            {
              "schrift": "преподавать",
              "lerntext": "prepadawát",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "помнить",
              "lerntext": "pómnit",
              "de": "sich erinnern",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "снимать",
              "lerntext": "snimát",
              "de": "mieten"
            },
            {
              "schrift": "подписывать",
              "lerntext": "padpíssywat",
              "de": "unterschreiben"
            },
            {
              "schrift": "готовить",
              "lerntext": "gatówit",
              "de": "kochen"
            },
            {
              "schrift": "возвращаться",
              "lerntext": "woswraschtschátsa",
              "de": "zurückkehren"
            },
            {
              "schrift": "извинять",
              "lerntext": "iswinját",
              "de": "entschuldigen"
            },
            {
              "schrift": "встречать",
              "lerntext": "wstretschát",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "знакомиться",
              "lerntext": "snakómitsa",
              "de": "kennenlernen",
              "wieder": true
            },
            {
              "schrift": "родиться",
              "lerntext": "radítsa",
              "de": "geboren werden",
              "wieder": true
            },
            {
              "schrift": "случаться",
              "lerntext": "slutschátsa",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "бронировать",
              "lerntext": "branírawat",
              "de": "reservieren",
              "wieder": true
            },
            {
              "schrift": "начинать",
              "lerntext": "natschinát",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "пробовать",
              "lerntext": "próbawat",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "петь",
              "lerntext": "pjet",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "водить",
              "lerntext": "wadít",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "посещать",
              "lerntext": "passeschtschát",
              "de": "besuchen",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "благодарить",
              "lerntext": "blagadarít",
              "de": "danken"
            },
            {
              "schrift": "останавливаться",
              "lerntext": "astanáwliwatsa",
              "de": "anhalten"
            },
            {
              "schrift": "рассказывать",
              "lerntext": "rasskásywat",
              "de": "erzählen"
            },
            {
              "schrift": "здороваться",
              "lerntext": "sdarówatsa",
              "de": "grüßen"
            },
            {
              "schrift": "снимать",
              "lerntext": "snimát",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "подписывать",
              "lerntext": "padpíssywat",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "готовить",
              "lerntext": "gatówit",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "возвращаться",
              "lerntext": "woswraschtschátsa",
              "de": "zurückkehren",
              "wieder": true
            },
            {
              "schrift": "извинять",
              "lerntext": "iswinját",
              "de": "entschuldigen",
              "wieder": true
            },
            {
              "schrift": "встречать",
              "lerntext": "wstretschát",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "знакомиться",
              "lerntext": "snakómitsa",
              "de": "kennenlernen",
              "wieder": true
            },
            {
              "schrift": "родиться",
              "lerntext": "radítsa",
              "de": "geboren werden",
              "wieder": true
            },
            {
              "schrift": "случаться",
              "lerntext": "slutschátsa",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "бронировать",
              "lerntext": "branírawat",
              "de": "reservieren",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "благодарить",
              "lerntext": "blagadarít",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "останавливаться",
              "lerntext": "astanáwliwatsa",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "рассказывать",
              "lerntext": "rasskásywat",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "здороваться",
              "lerntext": "sdarówatsa",
              "de": "grüßen",
              "wieder": true
            },
            {
              "schrift": "снимать",
              "lerntext": "snimát",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "подписывать",
              "lerntext": "padpíssywat",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "готовить",
              "lerntext": "gatówit",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "возвращаться",
              "lerntext": "woswraschtschátsa",
              "de": "zurückkehren",
              "wieder": true
            },
            {
              "schrift": "извинять",
              "lerntext": "iswinját",
              "de": "entschuldigen",
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
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "благодарить",
              "lerntext": "blagadarít",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "останавливаться",
              "lerntext": "astanáwliwatsa",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "рассказывать",
              "lerntext": "rasskásywat",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "здороваться",
              "lerntext": "sdarówatsa",
              "de": "grüßen",
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
              "de": "schlecht"
            },
            {
              "schrift": "настоящий",
              "lerntext": "nastajáschtschij",
              "de": "echt"
            },
            {
              "schrift": "бесплатный",
              "lerntext": "besplátnyj",
              "de": "kostenlos"
            },
            {
              "schrift": "полный",
              "lerntext": "pólnyj",
              "de": "voll"
            },
            {
              "schrift": "пустой",
              "lerntext": "pustój",
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
              "de": "frei"
            },
            {
              "schrift": "занятый",
              "lerntext": "sanjátyj",
              "de": "besetzt"
            },
            {
              "schrift": "здоровый",
              "lerntext": "sdarówyj",
              "de": "gesund"
            },
            {
              "schrift": "быстрый",
              "lerntext": "býstryj",
              "de": "schnell"
            },
            {
              "schrift": "медленный",
              "lerntext": "mjédlennyj",
              "de": "langsam"
            },
            {
              "schrift": "плохой",
              "lerntext": "plachój",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "настоящий",
              "lerntext": "nastajáschtschij",
              "de": "echt",
              "wieder": true
            },
            {
              "schrift": "бесплатный",
              "lerntext": "besplátnyj",
              "de": "kostenlos",
              "wieder": true
            },
            {
              "schrift": "полный",
              "lerntext": "pólnyj",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "пустой",
              "lerntext": "pustój",
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
              "de": "frisch"
            },
            {
              "schrift": "солёный",
              "lerntext": "saljónyj",
              "de": "salzig"
            },
            {
              "schrift": "острый",
              "lerntext": "óstryj",
              "de": "scharf"
            },
            {
              "schrift": "вкусный",
              "lerntext": "wkúsnyj",
              "de": "lecker"
            },
            {
              "schrift": "русский",
              "lerntext": "rússkij",
              "de": "russisch"
            },
            {
              "schrift": "свободный",
              "lerntext": "swabódnyj",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "занятый",
              "lerntext": "sanjátyj",
              "de": "besetzt",
              "wieder": true
            },
            {
              "schrift": "здоровый",
              "lerntext": "sdarówyj",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "быстрый",
              "lerntext": "býstryj",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "медленный",
              "lerntext": "mjédlennyj",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "плохой",
              "lerntext": "plachój",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "настоящий",
              "lerntext": "nastajáschtschij",
              "de": "echt",
              "wieder": true
            },
            {
              "schrift": "бесплатный",
              "lerntext": "besplátnyj",
              "de": "kostenlos",
              "wieder": true
            },
            {
              "schrift": "полный",
              "lerntext": "pólnyj",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "пустой",
              "lerntext": "pustój",
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
              "de": "deutsch"
            },
            {
              "schrift": "английский",
              "lerntext": "anglíjskij",
              "de": "englisch"
            },
            {
              "schrift": "прошлый",
              "lerntext": "próschlyj",
              "de": "vergangener"
            },
            {
              "schrift": "горячий",
              "lerntext": "garjátschij",
              "de": "heiß"
            },
            {
              "schrift": "возможный",
              "lerntext": "wasmóshnyj",
              "de": "möglich"
            },
            {
              "schrift": "свежий",
              "lerntext": "swjéshij",
              "de": "frisch",
              "wieder": true
            },
            {
              "schrift": "солёный",
              "lerntext": "saljónyj",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "острый",
              "lerntext": "óstryj",
              "de": "scharf",
              "wieder": true
            },
            {
              "schrift": "вкусный",
              "lerntext": "wkúsnyj",
              "de": "lecker",
              "wieder": true
            },
            {
              "schrift": "русский",
              "lerntext": "rússkij",
              "de": "russisch",
              "wieder": true
            },
            {
              "schrift": "свободный",
              "lerntext": "swabódnyj",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "занятый",
              "lerntext": "sanjátyj",
              "de": "besetzt",
              "wieder": true
            },
            {
              "schrift": "здоровый",
              "lerntext": "sdarówyj",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "быстрый",
              "lerntext": "býstryj",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "медленный",
              "lerntext": "mjédlennyj",
              "de": "langsam",
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
              "de": "gut"
            },
            {
              "schrift": "сладкий",
              "lerntext": "slátkij",
              "de": "süß"
            },
            {
              "schrift": "иностранный",
              "lerntext": "inastránnyj",
              "de": "ausländisch"
            },
            {
              "schrift": "следующий",
              "lerntext": "slédujuschtschij",
              "de": "nächster"
            },
            {
              "schrift": "обычный",
              "lerntext": "abýtschnyj",
              "de": "üblich"
            },
            {
              "schrift": "немецкий",
              "lerntext": "nemjézkij",
              "de": "deutsch",
              "wieder": true
            },
            {
              "schrift": "английский",
              "lerntext": "anglíjskij",
              "de": "englisch",
              "wieder": true
            },
            {
              "schrift": "прошлый",
              "lerntext": "próschlyj",
              "de": "vergangener",
              "wieder": true
            },
            {
              "schrift": "горячий",
              "lerntext": "garjátschij",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "возможный",
              "lerntext": "wasmóshnyj",
              "de": "möglich",
              "wieder": true
            },
            {
              "schrift": "свежий",
              "lerntext": "swjéshij",
              "de": "frisch",
              "wieder": true
            },
            {
              "schrift": "солёный",
              "lerntext": "saljónyj",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "острый",
              "lerntext": "óstryj",
              "de": "scharf",
              "wieder": true
            },
            {
              "schrift": "вкусный",
              "lerntext": "wkúsnyj",
              "de": "lecker",
              "wieder": true
            },
            {
              "schrift": "русский",
              "lerntext": "rússkij",
              "de": "russisch",
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
              "de": "nötig"
            },
            {
              "schrift": "весёлый",
              "lerntext": "wessjólyj",
              "de": "fröhlich"
            },
            {
              "schrift": "добрый",
              "lerntext": "dóbryj",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "сладкий",
              "lerntext": "slátkij",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "иностранный",
              "lerntext": "inastránnyj",
              "de": "ausländisch",
              "wieder": true
            },
            {
              "schrift": "следующий",
              "lerntext": "slédujuschtschij",
              "de": "nächster",
              "wieder": true
            },
            {
              "schrift": "обычный",
              "lerntext": "abýtschnyj",
              "de": "üblich",
              "wieder": true
            },
            {
              "schrift": "немецкий",
              "lerntext": "nemjézkij",
              "de": "deutsch",
              "wieder": true
            },
            {
              "schrift": "английский",
              "lerntext": "anglíjskij",
              "de": "englisch",
              "wieder": true
            },
            {
              "schrift": "прошлый",
              "lerntext": "próschlyj",
              "de": "vergangener",
              "wieder": true
            },
            {
              "schrift": "горячий",
              "lerntext": "garjátschij",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "возможный",
              "lerntext": "wasmóshnyj",
              "de": "möglich",
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
              "wieder": true
            },
            {
              "schrift": "весёлый",
              "lerntext": "wessjólyj",
              "de": "fröhlich",
              "wieder": true
            },
            {
              "schrift": "добрый",
              "lerntext": "dóbryj",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "сладкий",
              "lerntext": "slátkij",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "иностранный",
              "lerntext": "inastránnyj",
              "de": "ausländisch",
              "wieder": true
            },
            {
              "schrift": "следующий",
              "lerntext": "slédujuschtschij",
              "de": "nächster",
              "wieder": true
            },
            {
              "schrift": "обычный",
              "lerntext": "abýtschnyj",
              "de": "üblich",
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
          "lerntext": "ja délaju eto [Slot]"
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
          "lerntext": "ja délaju eto [Slot]"
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
          "lerntext": "ja délaju eto [Slot]"
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
          "lerntext": "ja délaju eto [Slot]"
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
          "lerntext": "ja délaju eto [Slot]"
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
          "lerntext": "ja délaju eto [Slot]"
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
              "de": "es"
            },
            {
              "schrift": "тебе",
              "lerntext": "tjebjé",
              "de": "dir"
            },
            {
              "schrift": "её",
              "lerntext": "jejó",
              "de": "sie"
            },
            {
              "schrift": "им",
              "lerntext": "im",
              "de": "ihnen"
            },
            {
              "schrift": "ваш",
              "lerntext": "wasch",
              "de": "euer"
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
              "de": "sein eigener"
            },
            {
              "schrift": "тот",
              "lerntext": "tot",
              "de": "jener"
            },
            {
              "schrift": "всё",
              "lerntext": "wsjo",
              "de": "alles"
            },
            {
              "schrift": "кто-то",
              "lerntext": "któ-ta",
              "de": "jemand"
            },
            {
              "schrift": "никто",
              "lerntext": "niktó",
              "de": "niemand"
            },
            {
              "schrift": "оно",
              "lerntext": "anó",
              "de": "es",
              "wieder": true
            },
            {
              "schrift": "тебе",
              "lerntext": "tjebjé",
              "de": "dir",
              "wieder": true
            },
            {
              "schrift": "её",
              "lerntext": "jejó",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "им",
              "lerntext": "im",
              "de": "ihnen",
              "wieder": true
            },
            {
              "schrift": "ваш",
              "lerntext": "wasch",
              "de": "euer",
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
              "de": "anderer"
            },
            {
              "schrift": "каждый",
              "lerntext": "káshdyj",
              "de": "jeder"
            },
            {
              "schrift": "сам",
              "lerntext": "sam",
              "de": "selbst"
            },
            {
              "schrift": "оба",
              "lerntext": "óba",
              "de": "beide"
            },
            {
              "schrift": "друг друга",
              "lerntext": "drug drúga",
              "de": "einander"
            },
            {
              "schrift": "свой",
              "lerntext": "swoj",
              "de": "sein eigener",
              "wieder": true
            },
            {
              "schrift": "тот",
              "lerntext": "tot",
              "de": "jener",
              "wieder": true
            },
            {
              "schrift": "всё",
              "lerntext": "wsjo",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "кто-то",
              "lerntext": "któ-ta",
              "de": "jemand",
              "wieder": true
            },
            {
              "schrift": "никто",
              "lerntext": "niktó",
              "de": "niemand",
              "wieder": true
            },
            {
              "schrift": "оно",
              "lerntext": "anó",
              "de": "es",
              "wieder": true
            },
            {
              "schrift": "тебе",
              "lerntext": "tjebjé",
              "de": "dir",
              "wieder": true
            },
            {
              "schrift": "её",
              "lerntext": "jejó",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "им",
              "lerntext": "im",
              "de": "ihnen",
              "wieder": true
            },
            {
              "schrift": "ваш",
              "lerntext": "wasch",
              "de": "euer",
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
              "wieder": true
            },
            {
              "schrift": "каждый",
              "lerntext": "káshdyj",
              "de": "jeder",
              "wieder": true
            },
            {
              "schrift": "сам",
              "lerntext": "sam",
              "de": "selbst",
              "wieder": true
            },
            {
              "schrift": "оба",
              "lerntext": "óba",
              "de": "beide",
              "wieder": true
            },
            {
              "schrift": "друг друга",
              "lerntext": "drug drúga",
              "de": "einander",
              "wieder": true
            },
            {
              "schrift": "свой",
              "lerntext": "swoj",
              "de": "sein eigener",
              "wieder": true
            },
            {
              "schrift": "тот",
              "lerntext": "tot",
              "de": "jener",
              "wieder": true
            },
            {
              "schrift": "всё",
              "lerntext": "wsjo",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "кто-то",
              "lerntext": "któ-ta",
              "de": "jemand",
              "wieder": true
            },
            {
              "schrift": "никто",
              "lerntext": "niktó",
              "de": "niemand",
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
              "wieder": true
            },
            {
              "schrift": "каждый",
              "lerntext": "káshdyj",
              "de": "jeder",
              "wieder": true
            },
            {
              "schrift": "сам",
              "lerntext": "sam",
              "de": "selbst",
              "wieder": true
            },
            {
              "schrift": "оба",
              "lerntext": "óba",
              "de": "beide",
              "wieder": true
            },
            {
              "schrift": "друг друга",
              "lerntext": "drug drúga",
              "de": "einander",
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
          "lerntext": "ja pridú [Slot] magú"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "а",
              "lerntext": "a",
              "de": "und"
            },
            {
              "schrift": "поэтому",
              "lerntext": "paétamu",
              "de": "deshalb"
            },
            {
              "schrift": "также",
              "lerntext": "tákshe",
              "de": "ebenfalls"
            },
            {
              "schrift": "зато",
              "lerntext": "sató",
              "de": "dafür aber"
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
          "lerntext": "ja pridú [Slot] magú"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "а",
              "lerntext": "a",
              "de": "und",
              "wieder": true
            },
            {
              "schrift": "поэтому",
              "lerntext": "paétamu",
              "de": "deshalb",
              "wieder": true
            },
            {
              "schrift": "также",
              "lerntext": "tákshe",
              "de": "ebenfalls",
              "wieder": true
            },
            {
              "schrift": "зато",
              "lerntext": "sató",
              "de": "dafür aber",
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
          "lerntext": "ja pridú [Slot] magú"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "а",
              "lerntext": "a",
              "de": "und",
              "wieder": true
            },
            {
              "schrift": "поэтому",
              "lerntext": "paétamu",
              "de": "deshalb",
              "wieder": true
            },
            {
              "schrift": "также",
              "lerntext": "tákshe",
              "de": "ebenfalls",
              "wieder": true
            },
            {
              "schrift": "зато",
              "lerntext": "sató",
              "de": "dafür aber",
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
          "lerntext": "ja chatjél [Slot]"
        },
        "frameDe": "ich wollte [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen"
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen"
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden"
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
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
          "lerntext": "ja chatjél [Slot]"
        },
        "frameDe": "ich wollte [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen"
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen"
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben"
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören"
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren"
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
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
          "lerntext": "wtscherá ja chatjél [Slot]"
        },
        "frameDe": "Gestern wollte ich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten"
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
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
          "lerntext": "wtscherá ja chatjél [Slot]"
        },
        "frameDe": "Gestern wollte ich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten"
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen"
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
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
          "lerntext": "ja usché mog [Slot]"
        },
        "frameDe": "Ich konnte schon [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
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
          "lerntext": "ja usché mog [Slot]"
        },
        "frameDe": "Ich konnte schon [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen"
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen"
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
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
          "lerntext": "ty móschesch [Slot]"
        },
        "frameDe": "Du kannst [Slot].",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen"
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen"
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden"
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
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
          "lerntext": "ty móschesch [Slot]"
        },
        "frameDe": "Du kannst [Slot].",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen"
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen"
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben"
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
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
          "lerntext": "on móschet [Slot]"
        },
        "frameDe": "Er kann [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten"
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
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
          "lerntext": "on móschet [Slot]"
        },
        "frameDe": "Er kann [Slot].",
        "pronouns": [
          {
            "schrift": "он",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
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
          "lerntext": "my móschem [Slot]"
        },
        "frameDe": "Wir können [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
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
          "lerntext": "my móschem [Slot]"
        },
        "frameDe": "Wir können [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
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
          "lerntext": "aní mógut [Slot]"
        },
        "frameDe": "Sie können [Slot].",
        "pronouns": [
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
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
            "de": "sie (Mehrzahl)"
          }
        ],
        "id": "25.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "они могут [Slot]",
          "lerntext": "aní mógut [Slot]"
        },
        "frameDe": "Sie können [Slot].",
        "pronouns": [
          {
            "schrift": "она",
            "lerntext": "aná",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
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
          "lerntext": "éta bóleje [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant"
            },
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig"
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig"
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich"
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer"
            },
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
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
          "lerntext": "éta bóleje [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "грязный",
              "lerntext": "grjásnyj",
              "de": "schmutzig"
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde"
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig"
            },
            {
              "schrift": "интересный",
              "lerntext": "interjésnyj",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "опасный",
              "lerntext": "apásnyj",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
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
          "lerntext": "takój sche [Slot], kak ty"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß"
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein"
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt"
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung"
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer"
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
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
            "de": "solcher"
          }
        ],
        "id": "26.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "такой же [Slot], как ты",
          "lerntext": "takój sche [Slot], kak ty"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön"
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm"
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt"
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark"
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
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
          "lerntext": "ja tschúwstwuju sebjá [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank"
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach"
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
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
            "de": "sich"
          }
        ],
        "id": "27.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я чувствую себя [Slot]",
          "lerntext": "ja tschúwstwuju sebjá [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit"
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung"
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt"
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend"
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
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
          "lerntext": "my wstretschájemsja [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
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
          "lerntext": "my wstretschájemsja [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
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
          "lerntext": "ja astajús sdjes, [Slot] ja ustál"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil"
            },
            {
              "schrift": "если",
              "lerntext": "jésli",
              "de": "wenn"
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl"
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während"
            },
            {
              "schrift": "но",
              "lerntext": "no",
              "de": "aber"
            },
            {
              "schrift": "или",
              "lerntext": "íli",
              "de": "oder",
              "wieder": true
            },
            {
              "schrift": "и",
              "lerntext": "i",
              "de": "und",
              "wieder": true
            },
            {
              "schrift": "значит",
              "lerntext": "snátschit",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "чтобы",
              "lerntext": "schtóby",
              "de": "damit",
              "wieder": true
            },
            {
              "schrift": "тоже",
              "lerntext": "tósche",
              "de": "auch",
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
          "lerntext": "ja astajús sdjes, [Slot] ja ustál"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "или",
              "lerntext": "íli",
              "de": "oder"
            },
            {
              "schrift": "и",
              "lerntext": "i",
              "de": "und"
            },
            {
              "schrift": "если",
              "lerntext": "jésli",
              "de": "wenn",
              "wieder": true
            },
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "но",
              "lerntext": "no",
              "de": "aber",
              "wieder": true
            },
            {
              "schrift": "значит",
              "lerntext": "snátschit",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "чтобы",
              "lerntext": "schtóby",
              "de": "damit",
              "wieder": true
            },
            {
              "schrift": "тоже",
              "lerntext": "tósche",
              "de": "auch",
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
          "lerntext": "ja dúmaju, schto éta [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank"
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz"
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang"
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
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
          "lerntext": "ja dúmaju, schto éta [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach"
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz"
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb"
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
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
          "lerntext": "jésli jest wrémja, ja chatschú [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
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
          "lerntext": "jésli jest wrémja, ja chatschú [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
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
          "lerntext": "ty móschesch [Slot], paschálusta?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten"
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
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
          "lerntext": "ty móschesch [Slot], paschálusta?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten"
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen"
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
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
          "lerntext": "ty dólschen [Slot]"
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
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
          "lerntext": "ty dólschen [Slot]"
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "ты",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
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
          "lerntext": "ja dajú knígu [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund"
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater"
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind"
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
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
          "lerntext": "ja dajú knígu [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau"
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder"
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
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
          "lerntext": "ja pokázywaju górad [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund"
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter"
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater"
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind"
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
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
          "lerntext": "ja pokázywaju górad [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "женщина",
              "lerntext": "shénschtschina",
              "de": "Frau"
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder"
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "отец",
              "lerntext": "atjéz",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
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
          "lerntext": "ja chatschú stakán [Slot]"
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser"
            },
            {
              "schrift": "пиво",
              "lerntext": "píwa",
              "de": "Bier"
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch"
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee"
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
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
            "de": "Glas"
          }
        ],
        "id": "31.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "у нас достаточно [Slot]",
          "lerntext": "u nas dastátatschna [Slot]"
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld"
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit"
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot"
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst"
            },
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch"
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
              "wieder": true
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett",
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
          "lerntext": "u nas dastátatschna [Slot]"
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch"
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker"
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch"
            },
            {
              "schrift": "деньги",
              "lerntext": "djéngi",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette",
              "wieder": true
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter",
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
          "lerntext": "ja schdu usché [Slot]"
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde"
            },
            {
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute"
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche"
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht"
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "экзамен",
              "lerntext": "ekzámen",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe",
              "wieder": true
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung",
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
          "lerntext": "ja schdu usché [Slot]"
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag"
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend"
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "боль",
              "lerntext": "bol",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
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
          "lerntext": "[Slot] ja idú damój"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
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
          "lerntext": "[Slot] ja idú damój"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
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
          "lerntext": "ja chatjél by [Slot]"
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
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
          "lerntext": "ja chatjél by [Slot]"
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
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
          "lerntext": "wy móschete dat mnje [Slot]?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser"
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot"
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel"
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch"
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche"
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "соль",
              "lerntext": "sol",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "глаз",
              "lerntext": "glas",
              "de": "Auge",
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
          "lerntext": "wy móschete dat mnje [Slot]?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "сахар",
              "lerntext": "sáchar",
              "de": "Zucker"
            },
            {
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee"
            },
            {
              "schrift": "молоко",
              "lerntext": "malakó",
              "de": "Milch"
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "вода",
              "lerntext": "wadá",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen",
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
          "lerntext": "ja dúmaju, éta [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß"
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein"
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt"
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung"
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer"
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "правильный",
              "lerntext": "práwilnyj",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "коричневый",
              "lerntext": "karítschnewyj",
              "de": "braun",
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
          "lerntext": "ja dúmaju, éta [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön"
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm"
            },
            {
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt"
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark"
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "молодой",
              "lerntext": "maladój",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer",
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
          "lerntext": "ja nachaschú éta ótschen [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch"
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank"
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz"
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang"
            },
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb",
              "wieder": true
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "белый",
              "lerntext": "bjélyj",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "хороший",
              "lerntext": "charóschij",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen",
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
          "lerntext": "ja nachaschú éta ótschen [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "чистый",
              "lerntext": "tschístyj",
              "de": "sauber"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach"
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz"
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb"
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend"
            },
            {
              "schrift": "неправильный",
              "lerntext": "neprávilnyj",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "больной",
              "lerntext": "balnój",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "закрытый",
              "lerntext": "sakrýtyj",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau",
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
          "lerntext": "záwtra ja búdu [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen"
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen"
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden"
            },
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
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
          "lerntext": "záwtra ja búdu [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen"
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen"
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben"
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
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
          "schrift": "я хочу скоро [Slot]",
          "lerntext": "ja chatschú skóra [Slot]"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten"
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
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
          "lerntext": "ja chatschú skóra [Slot]"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
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
          "lerntext": "éta tschelawék, katóryj chótschet [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot] will.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen"
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
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
            "de": "Mensch"
          }
        ],
        "id": "36.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "это человек, который хочет [Slot]",
          "lerntext": "éta tschelawék, katóryj chótschet [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot] will.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben"
            },
            {
              "schrift": "надеяться",
              "lerntext": "nadjéjatsa",
              "de": "hoffen"
            },
            {
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken",
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
          "lerntext": "ja ischú mésta, gdje móschna [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten"
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen",
              "wieder": true
            },
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören",
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
            "de": "Platz"
          }
        ],
        "id": "36.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "я ищу место, где можно [Slot]",
          "lerntext": "ja ischú mésta, gdje móschna [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "любить",
              "lerntext": "ljubít",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen",
              "wieder": true
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren",
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
          "lerntext": "wtscherá ja byl w [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant"
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel"
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule"
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität"
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus"
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "человек",
              "lerntext": "tschelawjék",
              "de": "Mensch",
              "wieder": true
            },
            {
              "schrift": "место",
              "lerntext": "mjésta",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "голова",
              "lerntext": "galawá",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "солнце",
              "lerntext": "sónze",
              "de": "Sonne",
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
          "lerntext": "wtscherá ja byl w [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof"
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen"
            },
            {
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt"
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "школа",
              "lerntext": "schkóla",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "человек",
              "lerntext": "tschelawjék",
              "de": "Mensch",
              "wieder": true
            },
            {
              "schrift": "место",
              "lerntext": "mjésta",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "чай",
              "lerntext": "tschaj",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "работа",
              "lerntext": "rabóta",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "лес",
              "lerntext": "ljes",
              "de": "Wald",
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
          "lerntext": "ja chatschú [Slot], patamú schto jest wrémja"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen"
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen"
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen",
              "wieder": true
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen",
              "wieder": true
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "продолжать",
              "lerntext": "pradalshát",
              "de": "fortsetzen",
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
          "lerntext": "ja chatschú [Slot], patamú schto jest wrémja"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "я",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen"
            },
            {
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "забывать",
              "lerntext": "sabywát",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen",
              "wieder": true
            },
            {
              "schrift": "должен",
              "lerntext": "dólshen",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen",
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
