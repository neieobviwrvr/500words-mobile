// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_ru.py
// Neu bauen: python bauplan.py ru --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 23 Module, 137 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const RUSSIAN_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
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
              "de": "wütend, böse"
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
            "schrift": "его",
            "lerntext": "jewó",
            "de": "ihn, sein"
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
        "frameDe": "wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr, Sie"
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
        "frameDe": "wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "мы",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "вы",
            "lerntext": "wy",
            "de": "ihr, Sie"
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
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche"
            },
            {
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett"
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel"
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür"
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
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr, Sie"
            },
            {
              "schrift": "я",
              "lerntext": "ja",
              "de": "ich"
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
            "schrift": "это",
            "lerntext": "éta",
            "de": "das, dies"
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
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon, Handy"
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
              "schrift": "старый",
              "lerntext": "stáryj",
              "de": "alt"
            },
            {
              "schrift": "счастливый",
              "lerntext": "schtschastlívyj",
              "de": "glücklich"
            },
            {
              "schrift": "ты",
              "lerntext": "ty",
              "de": "du"
            },
            {
              "schrift": "грустный",
              "lerntext": "grúsnyj",
              "de": "traurig"
            },
            {
              "schrift": "мы",
              "lerntext": "my",
              "de": "wir"
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
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche"
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch"
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster"
            },
            {
              "schrift": "телефон",
              "lerntext": "teljefón",
              "de": "Telefon, Handy"
            },
            {
              "schrift": "книга",
              "lerntext": "kníga",
              "de": "Buch"
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig"
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür"
            },
            {
              "schrift": "вы",
              "lerntext": "wy",
              "de": "ihr, Sie"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "здесь",
            "lerntext": "sdjes",
            "de": "hier"
          }
        ],
        "id": "2.3"
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
              "schrift": "дом",
              "lerntext": "dom",
              "de": "Haus"
            },
            {
              "schrift": "стол",
              "lerntext": "stol",
              "de": "Tisch"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark"
            },
            {
              "schrift": "мать",
              "lerntext": "mat",
              "de": "Mutter"
            },
            {
              "schrift": "студент",
              "lerntext": "studjént",
              "de": "Student"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.4"
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
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn"
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung"
            },
            {
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto"
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
              "schrift": "кровать",
              "lerntext": "krawát",
              "de": "Bett"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder"
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
        "id": "2.5"
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
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand, Arm"
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein, Fuß"
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
              "schrift": "дочь",
              "lerntext": "dotsch",
              "de": "Tochter"
            },
            {
              "schrift": "сумка",
              "lerntext": "súmka",
              "de": "Tasche"
            },
            {
              "schrift": "комната",
              "lerntext": "kómnata",
              "de": "Zimmer"
            },
            {
              "schrift": "ключ",
              "lerntext": "kljutsch",
              "de": "Schlüssel"
            },
            {
              "schrift": "квартира",
              "lerntext": "kwartíra",
              "de": "Wohnung"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.6"
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
              "schrift": "твой",
              "lerntext": "twoj",
              "de": "dein"
            },
            {
              "schrift": "мой",
              "lerntext": "moj",
              "de": "mein"
            },
            {
              "schrift": "наш",
              "lerntext": "nasch",
              "de": "unser"
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund"
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das, dies"
          }
        ],
        "id": "2.7"
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
            },
            {
              "schrift": "его",
              "lerntext": "jewó",
              "de": "ihn, sein"
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand, Arm"
            },
            {
              "schrift": "усталый",
              "lerntext": "ustályj",
              "de": "müde"
            },
            {
              "schrift": "красивый",
              "lerntext": "krassívyj",
              "de": "schön"
            },
            {
              "schrift": "полиция",
              "lerntext": "polízija",
              "de": "Polizei"
            },
            {
              "schrift": "окно",
              "lerntext": "aknó",
              "de": "Fenster"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das, dies"
          }
        ],
        "id": "2.8"
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
              "schrift": "ребёнок",
              "lerntext": "rebjónak",
              "de": "Kind"
            },
            {
              "schrift": "готовый",
              "lerntext": "gatówyj",
              "de": "bereit"
            },
            {
              "schrift": "злой",
              "lerntext": "slój",
              "de": "wütend, böse"
            },
            {
              "schrift": "слабый",
              "lerntext": "slábyj",
              "de": "schwach"
            },
            {
              "schrift": "кухня",
              "lerntext": "kúchnja",
              "de": "Küche"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das, dies"
          }
        ],
        "id": "2.9"
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
              "de": "ihn, sein"
            },
            {
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch, Sie"
            },
            {
              "schrift": "все",
              "lerntext": "wsje",
              "de": "alle"
            },
            {
              "schrift": "семья",
              "lerntext": "semjá",
              "de": "Familie"
            },
            {
              "schrift": "сын",
              "lerntext": "syn",
              "de": "Sohn"
            },
            {
              "schrift": "нога",
              "lerntext": "nagá",
              "de": "Bein, Fuß"
            },
            {
              "schrift": "сестра",
              "lerntext": "sestrá",
              "de": "Schwester"
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
              "schrift": "вас",
              "lerntext": "was",
              "de": "euch, Sie"
            },
            {
              "schrift": "этот",
              "lerntext": "état",
              "de": "dieser"
            },
            {
              "schrift": "хотеть",
              "lerntext": "chatjét",
              "de": "wollen"
            },
            {
              "schrift": "друг",
              "lerntext": "drug",
              "de": "Freund"
            },
            {
              "schrift": "довольный",
              "lerntext": "dawólnyj",
              "de": "zufrieden"
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
              "schrift": "есть",
              "lerntext": "jest",
              "de": "essen"
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
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein"
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
              "schrift": "машина",
              "lerntext": "maschýna",
              "de": "Auto"
            }
          ]
        ],
        "newCount": 4,
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
              "schrift": "нуждаться",
              "lerntext": "nushdátsa",
              "de": "brauchen"
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot"
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
              "de": "Wasser"
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
        "frameDe": "ich möchte einen [Slot], bitte.",
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
              "schrift": "время",
              "lerntext": "wrjémja",
              "de": "Zeit"
            },
            {
              "schrift": "помощь",
              "lerntext": "pómaschtsch",
              "de": "Hilfe"
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
              "schrift": "сыр",
              "lerntext": "syr",
              "de": "Käse"
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
              "schrift": "пить",
              "lerntext": "pit",
              "de": "trinken"
            },
            {
              "schrift": "фрукты",
              "lerntext": "frúkty",
              "de": "Obst"
            },
            {
              "schrift": "ужин",
              "lerntext": "úshyn",
              "de": "Abendessen"
            },
            {
              "schrift": "обед",
              "lerntext": "abjéd",
              "de": "Mittagessen"
            },
            {
              "schrift": "завтрак",
              "lerntext": "sáwtrak",
              "de": "Frühstück"
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
            "de": "ihr, Sie"
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
              "schrift": "мясо",
              "lerntext": "mjássa",
              "de": "Fleisch"
            },
            {
              "schrift": "овощи",
              "lerntext": "ówaschtschi",
              "de": "Gemüse"
            },
            {
              "schrift": "рыба",
              "lerntext": "rýba",
              "de": "Fisch"
            },
            {
              "schrift": "рот",
              "lerntext": "rot",
              "de": "Mund"
            },
            {
              "schrift": "меня",
              "lerntext": "menjá",
              "de": "mich"
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
              "de": "ganz, alles"
            },
            {
              "schrift": "хорошо",
              "lerntext": "charaschó",
              "de": "gut"
            },
            {
              "schrift": "важный",
              "lerntext": "wáshnyj",
              "de": "wichtig"
            },
            {
              "schrift": "почему",
              "lerntext": "patschemú",
              "de": "warum"
            },
            {
              "schrift": "новый",
              "lerntext": "nówyj",
              "de": "neu"
            },
            {
              "schrift": "плохо",
              "lerntext": "plócha",
              "de": "schlecht"
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
            "de": "das, dies"
          }
        ],
        "id": "4.2"
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
        "id": "4.3"
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
              "schrift": "туалет",
              "lerntext": "tualjét",
              "de": "Toilette"
            },
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
              "schrift": "куда",
              "lerntext": "kudá",
              "de": "wohin"
            },
            {
              "schrift": "который",
              "lerntext": "katóryj",
              "de": "welcher"
            },
            {
              "schrift": "весь",
              "lerntext": "wjes",
              "de": "ganz, alles"
            },
            {
              "schrift": "что-то",
              "lerntext": "schtó-ta",
              "de": "etwas"
            },
            {
              "schrift": "вино",
              "lerntext": "winó",
              "de": "Wein"
            }
          ]
        ],
        "newCount": 5,
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
              "schrift": "куда",
              "lerntext": "kudá",
              "de": "wohin"
            },
            {
              "schrift": "ресторан",
              "lerntext": "restarán",
              "de": "Restaurant"
            },
            {
              "schrift": "магазин",
              "lerntext": "magasín",
              "de": "Geschäft"
            },
            {
              "schrift": "аэропорт",
              "lerntext": "aerapórt",
              "de": "Flughafen"
            },
            {
              "schrift": "вокзал",
              "lerntext": "wagsál",
              "de": "Bahnhof"
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
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität"
            },
            {
              "schrift": "улица",
              "lerntext": "úliza",
              "de": "Straße"
            },
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
              "schrift": "кофе",
              "lerntext": "kófje",
              "de": "Kaffee"
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
        "id": "5.3"
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
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus"
            },
            {
              "schrift": "университет",
              "lerntext": "uniwersitjét",
              "de": "Universität"
            },
            {
              "schrift": "куда",
              "lerntext": "kudá",
              "de": "wohin"
            },
            {
              "schrift": "скучный",
              "lerntext": "skúschnyj",
              "de": "langweilig"
            },
            {
              "schrift": "дверь",
              "lerntext": "dwjer",
              "de": "Tür"
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
        "id": "5.4"
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
              "schrift": "над",
              "lerntext": "nad",
              "de": "über"
            },
            {
              "schrift": "между",
              "lerntext": "méshdu",
              "de": "zwischen"
            },
            {
              "schrift": "за",
              "lerntext": "sa",
              "de": "hinter, für"
            },
            {
              "schrift": "перед",
              "lerntext": "pjéred",
              "de": "vor"
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
              "schrift": "город",
              "lerntext": "górad",
              "de": "Stadt"
            },
            {
              "schrift": "после",
              "lerntext": "póslje",
              "de": "nach"
            },
            {
              "schrift": "с",
              "lerntext": "s",
              "de": "mit"
            }
          ]
        ],
        "newCount": 4,
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
            "de": "das, dies"
          },
          {
            "schrift": "дома",
            "lerntext": "dóma",
            "de": "zu Hause"
          }
        ],
        "id": "5.5"
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
              "schrift": "около",
              "lerntext": "ókala",
              "de": "neben, ungefähr"
            },
            {
              "schrift": "через",
              "lerntext": "tschéres",
              "de": "durch, in (Zeit)"
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
              "schrift": "перед",
              "lerntext": "pjéred",
              "de": "vor"
            },
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
              "de": "hinter, für"
            },
            {
              "schrift": "больница",
              "lerntext": "balníza",
              "de": "Krankenhaus"
            }
          ]
        ],
        "newCount": 3,
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
              "de": "teuer, lieb"
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
              "schrift": "три",
              "lerntext": "tri",
              "de": "drei"
            },
            {
              "schrift": "пятьдесят",
              "lerntext": "pjatdessját",
              "de": "fünfzig"
            },
            {
              "schrift": "семьдесят",
              "lerntext": "sjémdessjat",
              "de": "siebzig"
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
            "de": "das, dies"
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
              "de": "hoch, groß"
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
              "de": "leicht, einfach"
            },
            {
              "schrift": "маленький",
              "lerntext": "málenkij",
              "de": "klein"
            },
            {
              "schrift": "большой",
              "lerntext": "balschój",
              "de": "groß"
            },
            {
              "schrift": "шесть",
              "lerntext": "schest",
              "de": "sechs"
            },
            {
              "schrift": "девять",
              "lerntext": "djéwjat",
              "de": "neun"
            },
            {
              "schrift": "восемнадцать",
              "lerntext": "wossemnádzat",
              "de": "achtzehn"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "6.5"
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
        "id": "6.6"
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
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können"
            },
            {
              "schrift": "короткий",
              "lerntext": "karótkij",
              "de": "kurz"
            },
            {
              "schrift": "девяносто",
              "lerntext": "dewjanósta",
              "de": "neunzig"
            },
            {
              "schrift": "девятнадцать",
              "lerntext": "dewjatnádzat",
              "de": "neunzehn"
            },
            {
              "schrift": "лёгкий",
              "lerntext": "ljóchkij",
              "de": "leicht, einfach"
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
              "schrift": "сто",
              "lerntext": "sto",
              "de": "hundert"
            },
            {
              "schrift": "семнадцать",
              "lerntext": "semnádzat",
              "de": "siebzehn"
            },
            {
              "schrift": "высокий",
              "lerntext": "wyssókij",
              "de": "hoch, groß"
            },
            {
              "schrift": "восемьдесят",
              "lerntext": "wóssemdessjat",
              "de": "achtzig"
            },
            {
              "schrift": "для",
              "lerntext": "dlja",
              "de": "für"
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
              "schrift": "ехать",
              "lerntext": "jéchat",
              "de": "fahren"
            },
            {
              "schrift": "два",
              "lerntext": "dwa",
              "de": "zwei"
            },
            {
              "schrift": "дорогой",
              "lerntext": "daragój",
              "de": "teuer, lieb"
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
              "schrift": "встречать",
              "lerntext": "wstretschát",
              "de": "treffen"
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
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen"
            },
            {
              "schrift": "платить",
              "lerntext": "platít",
              "de": "bezahlen"
            },
            {
              "schrift": "работать",
              "lerntext": "rabótat",
              "de": "arbeiten"
            },
            {
              "schrift": "ждать",
              "lerntext": "shdat",
              "de": "warten"
            },
            {
              "schrift": "сорок",
              "lerntext": "sórak",
              "de": "vierzig"
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
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen"
            },
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
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen"
            },
            {
              "schrift": "двенадцать",
              "lerntext": "dwenádzat",
              "de": "zwölf"
            },
            {
              "schrift": "звонить",
              "lerntext": "swanít",
              "de": "anrufen"
            },
            {
              "schrift": "длинный",
              "lerntext": "dlínnyj",
              "de": "lang"
            },
            {
              "schrift": "тринадцать",
              "lerntext": "trinádzat",
              "de": "dreizehn"
            }
          ]
        ],
        "newCount": 3,
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
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören"
            },
            {
              "schrift": "говорить",
              "lerntext": "gawarít",
              "de": "sprechen"
            },
            {
              "schrift": "видеть",
              "lerntext": "wídjet",
              "de": "sehen"
            },
            {
              "schrift": "читать",
              "lerntext": "tschitát",
              "de": "lesen"
            },
            {
              "schrift": "против",
              "lerntext": "prótiw",
              "de": "gegen"
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
              "de": "vergessen"
            },
            {
              "schrift": "шестьдесят",
              "lerntext": "schesdessját",
              "de": "sechzig"
            },
            {
              "schrift": "пять",
              "lerntext": "pjat",
              "de": "fünf"
            },
            {
              "schrift": "получать",
              "lerntext": "palutschát",
              "de": "bekommen"
            },
            {
              "schrift": "плакать",
              "lerntext": "plákat",
              "de": "weinen"
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
              "schrift": "выигрывать",
              "lerntext": "wyígrywat",
              "de": "gewinnen"
            },
            {
              "schrift": "идти",
              "lerntext": "ittí",
              "de": "gehen"
            },
            {
              "schrift": "открывать",
              "lerntext": "atkrywát",
              "de": "öffnen"
            },
            {
              "schrift": "танцевать",
              "lerntext": "tanzewát",
              "de": "tanzen"
            },
            {
              "schrift": "без",
              "lerntext": "bes",
              "de": "ohne"
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
              "schrift": "использовать",
              "lerntext": "ispólsawat",
              "de": "benutzen"
            },
            {
              "schrift": "оставаться",
              "lerntext": "astawátsa",
              "de": "bleiben"
            },
            {
              "schrift": "один",
              "lerntext": "adín",
              "de": "eins"
            },
            {
              "schrift": "шестнадцать",
              "lerntext": "schesnádzat",
              "de": "sechzehn"
            },
            {
              "schrift": "тысяча",
              "lerntext": "týssjatscha",
              "de": "tausend"
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
              "de": "leben, wohnen"
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus"
            },
            {
              "schrift": "домой",
              "lerntext": "damój",
              "de": "nach Hause"
            },
            {
              "schrift": "поезд",
              "lerntext": "pójesd",
              "de": "Zug"
            },
            {
              "schrift": "около",
              "lerntext": "ókala",
              "de": "neben, ungefähr"
            },
            {
              "schrift": "умирать",
              "lerntext": "umirát",
              "de": "sterben"
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
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen"
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie"
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen"
            },
            {
              "schrift": "вместе",
              "lerntext": "wmjéstje",
              "de": "zusammen"
            },
            {
              "schrift": "уже",
              "lerntext": "ushé",
              "de": "schon"
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
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub"
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend"
            },
            {
              "schrift": "переезжать",
              "lerntext": "pereeshát",
              "de": "umziehen"
            },
            {
              "schrift": "жить",
              "lerntext": "shyt",
              "de": "leben, wohnen"
            },
            {
              "schrift": "часто",
              "lerntext": "tschásta",
              "de": "oft"
            },
            {
              "schrift": "через",
              "lerntext": "tschéres",
              "de": "durch, in (Zeit)"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das, dies"
          }
        ],
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
              "schrift": "минута",
              "lerntext": "minúta",
              "de": "Minute"
            },
            {
              "schrift": "отпуск",
              "lerntext": "ótpusk",
              "de": "Urlaub"
            },
            {
              "schrift": "двадцать",
              "lerntext": "dwádzat",
              "de": "zwanzig"
            },
            {
              "schrift": "отвечать",
              "lerntext": "atwetschát",
              "de": "antworten"
            },
            {
              "schrift": "мыть",
              "lerntext": "myt",
              "de": "waschen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "любить",
            "lerntext": "ljubít",
            "de": "lieben, mögen"
          },
          {
            "schrift": "любить",
            "lerntext": "ljubít",
            "de": "lieben, mögen"
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
              "de": "Sonne"
            },
            {
              "schrift": "погода",
              "lerntext": "pagóda",
              "de": "Wetter"
            },
            {
              "schrift": "снег",
              "lerntext": "snjeg",
              "de": "Schnee"
            },
            {
              "schrift": "вчера",
              "lerntext": "wtscherá",
              "de": "gestern"
            },
            {
              "schrift": "сразу",
              "lerntext": "srásu",
              "de": "sofort"
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
              "de": "ihn, sein"
            },
            {
              "schrift": "она",
              "lerntext": "aná",
              "de": "sie"
            },
            {
              "schrift": "нас",
              "lerntext": "nas",
              "de": "uns"
            },
            {
              "schrift": "море",
              "lerntext": "mórje",
              "de": "Meer"
            },
            {
              "schrift": "находить",
              "lerntext": "nachadít",
              "de": "finden"
            },
            {
              "schrift": "закрывать",
              "lerntext": "sakrywát",
              "de": "schließen"
            },
            {
              "schrift": "тоже",
              "lerntext": "tósche",
              "de": "auch"
            },
            {
              "schrift": "помогать",
              "lerntext": "pamagát",
              "de": "helfen"
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
              "schrift": "нас",
              "lerntext": "nas",
              "de": "uns"
            },
            {
              "schrift": "пятнадцать",
              "lerntext": "pjatnádzat",
              "de": "fünfzehn"
            },
            {
              "schrift": "смеяться",
              "lerntext": "smejátsa",
              "de": "lachen"
            },
            {
              "schrift": "играть",
              "lerntext": "igrát",
              "de": "spielen"
            },
            {
              "schrift": "неделя",
              "lerntext": "nedjélja",
              "de": "Woche"
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
              "schrift": "синий",
              "lerntext": "sínij",
              "de": "blau"
            },
            {
              "schrift": "чёрный",
              "lerntext": "tschórnyj",
              "de": "schwarz"
            },
            {
              "schrift": "красный",
              "lerntext": "krásnyj",
              "de": "rot"
            },
            {
              "schrift": "терять",
              "lerntext": "terját",
              "de": "verlieren"
            },
            {
              "schrift": "скоро",
              "lerntext": "skóra",
              "de": "bald"
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
              "de": "lieb, süß"
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
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau"
            },
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
              "schrift": "тебя",
              "lerntext": "tjebjá",
              "de": "dich"
            },
            {
              "schrift": "дождь",
              "lerntext": "doshd",
              "de": "Regen"
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
        "id": "10.7"
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
              "schrift": "холодный",
              "lerntext": "chalódnyj",
              "de": "kalt"
            },
            {
              "schrift": "милый",
              "lerntext": "mílyj",
              "de": "lieb, süß"
            },
            {
              "schrift": "тёплый",
              "lerntext": "tjóplyj",
              "de": "warm"
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
              "schrift": "становиться",
              "lerntext": "stanawítsa",
              "de": "werden"
            },
            {
              "schrift": "четыре",
              "lerntext": "tschetýrje",
              "de": "vier"
            },
            {
              "schrift": "ноль",
              "lerntext": "nol",
              "de": "null"
            },
            {
              "schrift": "сегодня",
              "lerntext": "sewódnja",
              "de": "heute"
            },
            {
              "schrift": "тяжёлый",
              "lerntext": "tjashólyj",
              "de": "schwer"
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
              "schrift": "брать",
              "lerntext": "brat",
              "de": "nehmen"
            },
            {
              "schrift": "покупать",
              "lerntext": "pakupát",
              "de": "kaufen"
            },
            {
              "schrift": "встречать",
              "lerntext": "wstretschát",
              "de": "treffen"
            },
            {
              "schrift": "всегда",
              "lerntext": "wsegdá",
              "de": "immer"
            },
            {
              "schrift": "гора",
              "lerntext": "gará",
              "de": "Berg"
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
              "schrift": "думать",
              "lerntext": "dúmat",
              "de": "denken"
            },
            {
              "schrift": "знать",
              "lerntext": "snat",
              "de": "wissen"
            },
            {
              "schrift": "давать",
              "lerntext": "dawát",
              "de": "geben"
            },
            {
              "schrift": "жёлтый",
              "lerntext": "shóltyj",
              "de": "gelb"
            },
            {
              "schrift": "путешествовать",
              "lerntext": "puteschéstwawat",
              "de": "reisen"
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
              "de": "während, tschüss"
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
              "schrift": "открытый",
              "lerntext": "atkrýtyj",
              "de": "offen"
            },
            {
              "schrift": "значит",
              "lerntext": "snátschit",
              "de": "also"
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
              "schrift": "десять",
              "lerntext": "djésjat",
              "de": "zehn"
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
              "schrift": "может быть",
              "lerntext": "móshet byt",
              "de": "vielleicht"
            },
            {
              "schrift": "пока",
              "lerntext": "paká",
              "de": "während, tschüss"
            },
            {
              "schrift": "до",
              "lerntext": "da",
              "de": "bis"
            },
            {
              "schrift": "потому что",
              "lerntext": "patamú schto",
              "de": "weil"
            },
            {
              "schrift": "только",
              "lerntext": "tólka",
              "de": "nur"
            },
            {
              "schrift": "ночь",
              "lerntext": "notsch",
              "de": "Nacht"
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
              "schrift": "может быть",
              "lerntext": "móshet byt",
              "de": "vielleicht"
            },
            {
              "schrift": "день",
              "lerntext": "djen",
              "de": "Tag"
            },
            {
              "schrift": "час",
              "lerntext": "tschas",
              "de": "Stunde"
            },
            {
              "schrift": "низкий",
              "lerntext": "nískij",
              "de": "niedrig"
            },
            {
              "schrift": "чтобы",
              "lerntext": "schtóby",
              "de": "damit"
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
              "de": "leicht, einfach"
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
              "schrift": "понимать",
              "lerntext": "panimát",
              "de": "verstehen"
            },
            {
              "schrift": "четырнадцать",
              "lerntext": "tschetýrnadzat",
              "de": "vierzehn"
            },
            {
              "schrift": "смотреть",
              "lerntext": "smatrjét",
              "de": "schauen"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "это",
            "lerntext": "éta",
            "de": "das, dies"
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
              "schrift": "трудный",
              "lerntext": "trúdnyj",
              "de": "schwierig"
            },
            {
              "schrift": "зелёный",
              "lerntext": "seljónyj",
              "de": "grün"
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
              "de": "ändern, wechseln"
            },
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
              "schrift": "дешёвый",
              "lerntext": "deschówyj",
              "de": "billig"
            },
            {
              "schrift": "писать",
              "lerntext": "pissát",
              "de": "schreiben"
            },
            {
              "schrift": "приходить",
              "lerntext": "prichadít",
              "de": "kommen"
            }
          ]
        ],
        "newCount": 1,
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
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern, wechseln"
            },
            {
              "schrift": "искать",
              "lerntext": "iskát",
              "de": "suchen"
            },
            {
              "schrift": "хотя",
              "lerntext": "chatjá",
              "de": "obwohl"
            },
            {
              "schrift": "сказать",
              "lerntext": "skasát",
              "de": "sagen"
            },
            {
              "schrift": "верить",
              "lerntext": "wjérit",
              "de": "glauben"
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
              "de": "Bein, Fuß"
            },
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
              "schrift": "одиннадцать",
              "lerntext": "adínnadzat",
              "de": "elf"
            },
            {
              "schrift": "три",
              "lerntext": "tri",
              "de": "drei"
            },
            {
              "schrift": "слышать",
              "lerntext": "slýschat",
              "de": "hören"
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
              "schrift": "показывать",
              "lerntext": "pakásywat",
              "de": "zeigen"
            },
            {
              "schrift": "сидеть",
              "lerntext": "ssidjét",
              "de": "sitzen"
            },
            {
              "schrift": "серый",
              "lerntext": "sséryj",
              "de": "grau"
            },
            {
              "schrift": "никогда",
              "lerntext": "nikagdá",
              "de": "nie"
            },
            {
              "schrift": "делать",
              "lerntext": "djélat",
              "de": "machen"
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
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "платье",
              "lerntext": "plátje",
              "de": "Kleid"
            },
            {
              "schrift": "тарелка",
              "lerntext": "taréljka",
              "de": "Teller"
            },
            {
              "schrift": "отель",
              "lerntext": "atél",
              "de": "Hotel"
            },
            {
              "schrift": "стоять",
              "lerntext": "stajat",
              "de": "stehen"
            },
            {
              "schrift": "автобус",
              "lerntext": "awtóbus",
              "de": "Bus"
            },
            {
              "schrift": "тело",
              "lerntext": "téla",
              "de": "Körper"
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
              "de": "Kleid"
            },
            {
              "schrift": "сильный",
              "lerntext": "sílnyj",
              "de": "stark"
            },
            {
              "schrift": "спрашивать",
              "lerntext": "spráschiwat",
              "de": "fragen"
            },
            {
              "schrift": "пятьдесят",
              "lerntext": "pjatdessját",
              "de": "fünfzig"
            },
            {
              "schrift": "семьдесят",
              "lerntext": "sjémdessjat",
              "de": "siebzig"
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
              "schrift": "имя",
              "lerntext": "ímja",
              "de": "Name"
            },
            {
              "schrift": "одежда",
              "lerntext": "adjéshda",
              "de": "Kleidung"
            },
            {
              "schrift": "мочь",
              "lerntext": "motsch",
              "de": "können"
            },
            {
              "schrift": "вечер",
              "lerntext": "wjétscher",
              "de": "Abend"
            },
            {
              "schrift": "много",
              "lerntext": "mnóga",
              "de": "viel"
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
              "de": "Arbeit"
            },
            {
              "schrift": "рука",
              "lerntext": "ruká",
              "de": "Hand, Arm"
            },
            {
              "schrift": "хлеб",
              "lerntext": "chljeb",
              "de": "Brot"
            },
            {
              "schrift": "брат",
              "lerntext": "brat",
              "de": "Bruder"
            },
            {
              "schrift": "дома",
              "lerntext": "dóma",
              "de": "zu Hause"
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
              "de": "Prüfung"
            },
            {
              "schrift": "ответ",
              "lerntext": "atwjét",
              "de": "Antwort"
            },
            {
              "schrift": "семь",
              "lerntext": "sjem",
              "de": "sieben"
            },
            {
              "schrift": "спать",
              "lerntext": "spat",
              "de": "schlafen"
            },
            {
              "schrift": "менять",
              "lerntext": "menját",
              "de": "ändern, wechseln"
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
    "lessons": [
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
              "schrift": "человек",
              "lerntext": "tschelawjék",
              "de": "Mensch"
            },
            {
              "schrift": "мужчина",
              "lerntext": "muschtschína",
              "de": "Mann"
            },
            {
              "schrift": "парень",
              "lerntext": "párjen",
              "de": "Junge, fester Freund"
            },
            {
              "schrift": "люди",
              "lerntext": "ljúdi",
              "de": "Leute"
            },
            {
              "schrift": "муж",
              "lerntext": "mush",
              "de": "Ehemann"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "жена",
              "lerntext": "shená",
              "de": "Ehefrau"
            },
            {
              "schrift": "год",
              "lerntext": "god",
              "de": "Jahr"
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
            },
            {
              "schrift": "выходные",
              "lerntext": "wychadnýje",
              "de": "Wochenende"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "страна",
              "lerntext": "straná",
              "de": "Land"
            },
            {
              "schrift": "место",
              "lerntext": "mjésta",
              "de": "Platz, Ort"
            },
            {
              "schrift": "рынок",
              "lerntext": "rýnak",
              "de": "Markt"
            },
            {
              "schrift": "кафе",
              "lerntext": "kafé",
              "de": "Cafe"
            },
            {
              "schrift": "аптека",
              "lerntext": "aptjéka",
              "de": "Apotheke"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "билет",
              "lerntext": "biljét",
              "de": "Fahrkarte"
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
        "id": "15.4"
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
              "schrift": "лекция",
              "lerntext": "ljékzija",
              "de": "Vorlesung"
            },
            {
              "schrift": "слово",
              "lerntext": "slówa",
              "de": "Wort"
            },
            {
              "schrift": "язык",
              "lerntext": "jasýk",
              "de": "Sprache, Zunge"
            },
            {
              "schrift": "вопрос",
              "lerntext": "wapróss",
              "de": "Frage"
            },
            {
              "schrift": "проблема",
              "lerntext": "prabljéma",
              "de": "Problem"
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "вещь",
              "lerntext": "weschtsch",
              "de": "Sache, Ding"
            },
            {
              "schrift": "девушка",
              "lerntext": "djéwuschka",
              "de": "Mädchen, feste Freundin"
            },
            {
              "schrift": "багаж",
              "lerntext": "bagásh",
              "de": "Gepäck"
            },
            {
              "schrift": "меню",
              "lerntext": "menjú",
              "de": "Speisekarte"
            },
            {
              "schrift": "бутылка",
              "lerntext": "butýlka",
              "de": "Flasche"
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
              "schrift": "волосы",
              "lerntext": "wólassy",
              "de": "Haare"
            },
            {
              "schrift": "врач",
              "lerntext": "wratsch",
              "de": "Arzt"
            },
            {
              "schrift": "лекарство",
              "lerntext": "lekárstwa",
              "de": "Medikament"
            },
            {
              "schrift": "температура",
              "lerntext": "temperatúra",
              "de": "Fieber, Temperatur"
            },
            {
              "schrift": "номер",
              "lerntext": "nómer",
              "de": "Nummer, Hotelzimmer"
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
              "schrift": "музыка",
              "lerntext": "músyka",
              "de": "Musik"
            },
            {
              "schrift": "фильм",
              "lerntext": "film",
              "de": "Film"
            },
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
              "schrift": "мир",
              "lerntext": "mir",
              "de": "Welt, Frieden"
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
              "schrift": "воздух",
              "lerntext": "wósduch",
              "de": "Luft"
            },
            {
              "schrift": "собака",
              "lerntext": "ssabáka",
              "de": "Hund"
            },
            {
              "schrift": "кошка",
              "lerntext": "kóschka",
              "de": "Katze"
            },
            {
              "schrift": "обувь",
              "lerntext": "óbuw",
              "de": "Schuhe"
            },
            {
              "schrift": "подарок",
              "lerntext": "padárak",
              "de": "Geschenk"
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
              "schrift": "любовь",
              "lerntext": "ljubów",
              "de": "Liebe"
            },
            {
              "schrift": "часть",
              "lerntext": "tschast",
              "de": "Teil"
            },
            {
              "schrift": "конец",
              "lerntext": "kanjéz",
              "de": "Ende"
            },
            {
              "schrift": "начало",
              "lerntext": "natschála",
              "de": "Anfang"
            },
            {
              "schrift": "способ",
              "lerntext": "spóssab",
              "de": "Art, Weise"
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "причина",
              "lerntext": "pritschína",
              "de": "Grund"
            },
            {
              "schrift": "пример",
              "lerntext": "primjér",
              "de": "Beispiel"
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
              "schrift": "страх",
              "lerntext": "strach",
              "de": "Angst"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "голод",
              "lerntext": "gólad",
              "de": "Hunger"
            },
            {
              "schrift": "сон",
              "lerntext": "son",
              "de": "Schlaf, Traum"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "смена",
              "lerntext": "smjéna",
              "de": "Schicht"
            },
            {
              "schrift": "клиент",
              "lerntext": "klijént",
              "de": "Kunde"
            },
            {
              "schrift": "зарплата",
              "lerntext": "sarpláta",
              "de": "Lohn"
            },
            {
              "schrift": "перерыв",
              "lerntext": "pererýw",
              "de": "Pause"
            },
            {
              "schrift": "договор",
              "lerntext": "dagawór",
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
          "schrift": "вот [Slot]",
          "lerntext": "wot [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "встреча",
              "lerntext": "wstrjétscha",
              "de": "Treffen, Termin"
            },
            {
              "schrift": "размер",
              "lerntext": "rasmjér",
              "de": "Grösse"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "15.14"
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
        "id": "15.15"
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
          "schrift": "я хочу [Slot]",
          "lerntext": "ja chatschú [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "быть",
              "lerntext": "byt",
              "de": "sein"
            },
            {
              "schrift": "класть",
              "lerntext": "klast",
              "de": "legen"
            },
            {
              "schrift": "звать",
              "lerntext": "swat",
              "de": "rufen, nennen"
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
              "schrift": "приезжать",
              "lerntext": "prijeshát",
              "de": "ankommen"
            },
            {
              "schrift": "выходить",
              "lerntext": "wychadít",
              "de": "hinausgehen"
            },
            {
              "schrift": "входить",
              "lerntext": "wchadít",
              "de": "hineingehen"
            },
            {
              "schrift": "носить",
              "lerntext": "nassít",
              "de": "tragen"
            },
            {
              "schrift": "нравиться",
              "lerntext": "nráwitsa",
              "de": "gefallen"
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
              "schrift": "учиться",
              "lerntext": "utschítsa",
              "de": "lernen, studieren"
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
              "schrift": "начинать",
              "lerntext": "natschinát",
              "de": "anfangen"
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
              "schrift": "кончать",
              "lerntext": "kantschát",
              "de": "beenden"
            },
            {
              "schrift": "пробовать",
              "lerntext": "próbawat",
              "de": "versuchen, probieren"
            },
            {
              "schrift": "петь",
              "lerntext": "pjet",
              "de": "singen"
            },
            {
              "schrift": "бегать",
              "lerntext": "bjégat",
              "de": "rennen"
            },
            {
              "schrift": "водить",
              "lerntext": "wadít",
              "de": "fahren, lenken"
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
              "schrift": "посещать",
              "lerntext": "passeschtschát",
              "de": "besuchen"
            },
            {
              "schrift": "знакомиться",
              "lerntext": "snakómitsa",
              "de": "kennenlernen"
            },
            {
              "schrift": "жениться",
              "lerntext": "shenítsa",
              "de": "heiraten"
            },
            {
              "schrift": "родиться",
              "lerntext": "radítsa",
              "de": "geboren werden"
            },
            {
              "schrift": "казаться",
              "lerntext": "kasátsa",
              "de": "scheinen"
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
              "schrift": "случаться",
              "lerntext": "slutschátsa",
              "de": "geschehen"
            },
            {
              "schrift": "заказывать",
              "lerntext": "sakásywat",
              "de": "bestellen"
            },
            {
              "schrift": "бронировать",
              "lerntext": "branírawat",
              "de": "reservieren"
            },
            {
              "schrift": "снимать",
              "lerntext": "snimát",
              "de": "mieten, abnehmen"
            },
            {
              "schrift": "подписывать",
              "lerntext": "padpíssywat",
              "de": "unterschreiben"
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
              "schrift": "готовить",
              "lerntext": "gatówit",
              "de": "kochen, vorbereiten"
            },
            {
              "schrift": "возвращаться",
              "lerntext": "woswraschtschátsa",
              "de": "zurückkehren"
            },
            {
              "schrift": "убирать",
              "lerntext": "ubirát",
              "de": "aufräumen"
            },
            {
              "schrift": "извинять",
              "lerntext": "iswinját",
              "de": "entschuldigen"
            },
            {
              "schrift": "благодарить",
              "lerntext": "blagadarít",
              "de": "danken"
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
              "schrift": "держать",
              "lerntext": "dershát",
              "de": "halten"
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
            }
          ]
        ],
        "newCount": 4,
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
              "de": "echt, wahr"
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
              "de": "gut, gütig"
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
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "17.6"
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
        "id": "17.7"
      }
    ]
  },
  {
    "number": 18,
    "title": "Weitere Adverbien",
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
              "schrift": "больше",
              "lerntext": "bólsche",
              "de": "mehr"
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
              "schrift": "меньше",
              "lerntext": "ménsche",
              "de": "weniger"
            },
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
              "schrift": "правда",
              "lerntext": "práwda",
              "de": "wirklich"
            },
            {
              "schrift": "так",
              "lerntext": "tak",
              "de": "so"
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
              "schrift": "достаточно",
              "lerntext": "dastátatschna",
              "de": "genug"
            },
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
              "schrift": "сюда",
              "lerntext": "sjudá",
              "de": "hierher"
            },
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
              "schrift": "конечно",
              "lerntext": "kanjéschna",
              "de": "natürlich"
            },
            {
              "schrift": "рядом",
              "lerntext": "rjádam",
              "de": "daneben, in der Nähe"
            },
            {
              "schrift": "поздно",
              "lerntext": "pósna",
              "de": "spät"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "18.5"
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
        "id": "18.6"
      }
    ]
  },
  {
    "number": 19,
    "title": "Weitere Pronomen",
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
              "schrift": "они",
              "lerntext": "aní",
              "de": "sie (Mehrzahl)"
            },
            {
              "schrift": "тебе",
              "lerntext": "tjebjé",
              "de": "dir"
            },
            {
              "schrift": "её",
              "lerntext": "jejó",
              "de": "sie, ihr"
            },
            {
              "schrift": "им",
              "lerntext": "im",
              "de": "ihnen"
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
              "schrift": "себя",
              "lerntext": "sebjá",
              "de": "sich"
            },
            {
              "schrift": "ваш",
              "lerntext": "wasch",
              "de": "euer, Ihr"
            },
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
              "schrift": "другой",
              "lerntext": "drugój",
              "de": "anderer"
            },
            {
              "schrift": "такой",
              "lerntext": "takój",
              "de": "solcher"
            },
            {
              "schrift": "каждый",
              "lerntext": "káshdyj",
              "de": "jeder"
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
            }
          ]
        ],
        "newCount": 3,
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
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "20.2"
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
        "id": "20.3"
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
              "de": "entlang, gemäss"
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
            }
          ]
        ],
        "newCount": 1,
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
          "schrift": "я приду [Slot] могу",
          "lerntext": "ja pridú [Slot] magú"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "если",
              "lerntext": "jésli",
              "de": "wenn, falls"
            },
            {
              "schrift": "а",
              "lerntext": "a",
              "de": "und, aber"
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
        "newCount": 5,
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
  }
];
