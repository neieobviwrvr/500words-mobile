// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_pl.py
// Neu bauen: python bauplan.py pl --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 23 Module, 136 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const POLISH_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja jestem [Slot]",
          "lerntext": "ja jestem [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde"
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig"
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend"
            },
            {
              "schrift": "zadowolony",
              "lerntext": "zadowolony",
              "de": "zufrieden"
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "jego",
            "lerntext": "jego",
            "de": "sein"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja jestem [Slot]",
          "lerntext": "ja jestem [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gotowy",
              "lerntext": "gotowy",
              "de": "bereit"
            },
            {
              "schrift": "spokojnie",
              "lerntext": "spokojnie",
              "de": "ruhig"
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
          "schrift": "my jestem [Slot]",
          "lerntext": "my jestem [Slot]"
        },
        "frameDe": "wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "wy",
            "lerntext": "wy",
            "de": "ihr"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student"
            },
            {
              "schrift": "policja",
              "lerntext": "policja",
              "de": "Polizei"
            },
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)"
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau"
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
              "de": "Kind"
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
          "schrift": "on jest bardzo [Slot]",
          "lerntext": "on jest bardzo [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "miły",
              "lerntext": "miły",
              "de": "nett"
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön"
            },
            {
              "schrift": "śmieszny",
              "lerntext": "śmieszny",
              "de": "lustig"
            },
            {
              "schrift": "nudny",
              "lerntext": "nudny",
              "de": "langweilig"
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "bardzo",
            "lerntext": "bardzo",
            "de": "sehr"
          }
        ],
        "id": "1.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "on jest bardzo [Slot]",
          "lerntext": "on jest bardzo [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach"
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung"
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt"
            },
            {
              "schrift": "szczęśliwy",
              "lerntext": "szczęśliwy",
              "de": "glücklich"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "1.5"
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
        "id": "1.6"
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
          "schrift": "to jest [Slot]",
          "lerntext": "to jest [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "książka",
              "lerntext": "książka",
              "de": "Buch"
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche"
            },
            {
              "schrift": "łóżko",
              "lerntext": "łóżko",
              "de": "Bett"
            },
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel"
            },
            {
              "schrift": "drzwi",
              "lerntext": "drzwi",
              "de": "Tür"
            },
            {
              "schrift": "wy",
              "lerntext": "wy",
              "de": "ihr"
            },
            {
              "schrift": "ty",
              "lerntext": "ty",
              "de": "du"
            },
            {
              "schrift": "ja",
              "lerntext": "ja",
              "de": "ich"
            },
            {
              "schrift": "my",
              "lerntext": "my",
              "de": "wir"
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot]",
          "lerntext": "to jest [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon, Handy"
            },
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter"
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater"
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester"
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder"
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt"
            },
            {
              "schrift": "szczęśliwy",
              "lerntext": "szczęśliwy",
              "de": "glücklich"
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche"
            },
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)"
            },
            {
              "schrift": "wy",
              "lerntext": "wy",
              "de": "ihr"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dom",
              "lerntext": "dom",
              "de": "Haus"
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer"
            },
            {
              "schrift": "kuchnia",
              "lerntext": "kuchnia",
              "de": "Küche"
            },
            {
              "schrift": "stół",
              "lerntext": "stół",
              "de": "Tisch"
            },
            {
              "schrift": "okno",
              "lerntext": "okno",
              "de": "Fenster"
            },
            {
              "schrift": "ty",
              "lerntext": "ty",
              "de": "du"
            },
            {
              "schrift": "ja",
              "lerntext": "ja",
              "de": "ich"
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark"
            },
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter"
            },
            {
              "schrift": "policja",
              "lerntext": "policja",
              "de": "Polizei"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "tutaj",
            "lerntext": "tutaj",
            "de": "hier"
          }
        ],
        "id": "2.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szklanka",
              "lerntext": "szklanka",
              "de": "Glas"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student"
            },
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon, Handy"
            },
            {
              "schrift": "nudny",
              "lerntext": "nudny",
              "de": "langweilig"
            },
            {
              "schrift": "miły",
              "lerntext": "miły",
              "de": "nett"
            },
            {
              "schrift": "książka",
              "lerntext": "książka",
              "de": "Buch"
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
          "schrift": "ja mam [Slot]",
          "lerntext": "ja mam [Slot]"
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "rodzina",
              "lerntext": "rodzina",
              "de": "Familie"
            },
            {
              "schrift": "córka",
              "lerntext": "córka",
              "de": "Tochter"
            },
            {
              "schrift": "syn",
              "lerntext": "syn",
              "de": "Sohn"
            },
            {
              "schrift": "mieszkanie",
              "lerntext": "mieszkanie",
              "de": "Wohnung"
            },
            {
              "schrift": "samochód",
              "lerntext": "samochód",
              "de": "Auto"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "szklanka",
              "lerntext": "szklanka",
              "de": "Glas"
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung"
            },
            {
              "schrift": "stół",
              "lerntext": "stół",
              "de": "Tisch"
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "mieć",
            "lerntext": "mieć",
            "de": "haben"
          }
        ],
        "id": "2.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja mam [Slot]",
          "lerntext": "ja mam [Slot]"
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ręka",
              "lerntext": "ręka",
              "de": "Hand, Arm"
            },
            {
              "schrift": "noga",
              "lerntext": "noga",
              "de": "Bein, Fuß"
            },
            {
              "schrift": "ciało",
              "lerntext": "ciało",
              "de": "Körper"
            },
            {
              "schrift": "usta",
              "lerntext": "usta",
              "de": "Mund"
            },
            {
              "schrift": "mieszkanie",
              "lerntext": "mieszkanie",
              "de": "Wohnung"
            },
            {
              "schrift": "córka",
              "lerntext": "córka",
              "de": "Tochter"
            },
            {
              "schrift": "syn",
              "lerntext": "syn",
              "de": "Sohn"
            },
            {
              "schrift": "samochód",
              "lerntext": "samochód",
              "de": "Auto"
            },
            {
              "schrift": "jego",
              "lerntext": "jego",
              "de": "sein"
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
          "schrift": "to jest moja [Slot]",
          "lerntext": "to jest moja [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mój",
            "lerntext": "mój",
            "de": "mein"
          },
          {
            "schrift": "twój",
            "lerntext": "twój",
            "de": "dein"
          },
          {
            "schrift": "nasz",
            "lerntext": "nasz",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter"
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater"
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau"
            },
            {
              "schrift": "mój",
              "lerntext": "mój",
              "de": "mein"
            },
            {
              "schrift": "nasz",
              "lerntext": "nasz",
              "de": "unser"
            },
            {
              "schrift": "twój",
              "lerntext": "twój",
              "de": "dein"
            },
            {
              "schrift": "usta",
              "lerntext": "usta",
              "de": "Mund"
            },
            {
              "schrift": "ręka",
              "lerntext": "ręka",
              "de": "Hand, Arm"
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
          "schrift": "to jest [Slot] dom",
          "lerntext": "to jest [Slot] dom"
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mój",
            "lerntext": "mój",
            "de": "mein"
          },
          {
            "schrift": "twój",
            "lerntext": "twój",
            "de": "dein"
          },
          {
            "schrift": "nasz",
            "lerntext": "nasz",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mój",
              "lerntext": "mój",
              "de": "mein"
            },
            {
              "schrift": "twój",
              "lerntext": "twój",
              "de": "dein"
            },
            {
              "schrift": "nasz",
              "lerntext": "nasz",
              "de": "unser"
            },
            {
              "schrift": "jego",
              "lerntext": "jego",
              "de": "sein"
            },
            {
              "schrift": "mieć",
              "lerntext": "mieć",
              "de": "haben"
            },
            {
              "schrift": "spokojnie",
              "lerntext": "spokojnie",
              "de": "ruhig"
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach"
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank"
            },
            {
              "schrift": "ciało",
              "lerntext": "ciało",
              "de": "Körper"
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
          "schrift": "to są [Slot] książki",
          "lerntext": "to są [Slot] książki"
        },
        "frameDe": "Das sind [Slot] Bücher.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "diese"
            },
            {
              "schrift": "wszyscy",
              "lerntext": "wszyscy",
              "de": "alle"
            },
            {
              "schrift": "noga",
              "lerntext": "noga",
              "de": "Bein, Fuß"
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder"
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
              "de": "Kind"
            },
            {
              "schrift": "zadowolony",
              "lerntext": "zadowolony",
              "de": "zufrieden"
            },
            {
              "schrift": "śmieszny",
              "lerntext": "śmieszny",
              "de": "lustig"
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
          "schrift": "[Slot] jest tutaj",
          "lerntext": "[Slot] jest tutaj"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ten",
              "lerntext": "ten",
              "de": "dieser"
            },
            {
              "schrift": "jego",
              "lerntext": "jego",
              "de": "sein"
            },
            {
              "schrift": "wam",
              "lerntext": "wam",
              "de": "euch"
            },
            {
              "schrift": "wszyscy",
              "lerntext": "wszyscy",
              "de": "alle"
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "diese"
            },
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel"
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer"
            },
            {
              "schrift": "kuchnia",
              "lerntext": "kuchnia",
              "de": "Küche"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "tutaj",
            "lerntext": "tutaj",
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
          "schrift": "ja chcę [Slot]",
          "lerntext": "ja chcę [Slot]"
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser"
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee"
            },
            {
              "schrift": "herbata",
              "lerntext": "herbata",
              "de": "Tee"
            },
            {
              "schrift": "piwo",
              "lerntext": "piwo",
              "de": "Bier"
            },
            {
              "schrift": "wino",
              "lerntext": "wino",
              "de": "Wein"
            },
            {
              "schrift": "ten",
              "lerntext": "ten",
              "de": "dieser"
            },
            {
              "schrift": "chcieć",
              "lerntext": "chcieć",
              "de": "wollen"
            },
            {
              "schrift": "wam",
              "lerntext": "wam",
              "de": "euch"
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön"
            },
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "chcieć",
            "lerntext": "chcieć",
            "de": "wollen"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę [Slot]",
          "lerntext": "ja chcę [Slot]"
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jeść",
              "lerntext": "jeść",
              "de": "essen"
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot"
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "Käse"
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch"
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker"
            },
            {
              "schrift": "wino",
              "lerntext": "wino",
              "de": "Wein"
            },
            {
              "schrift": "piwo",
              "lerntext": "piwo",
              "de": "Bier"
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee"
            },
            {
              "schrift": "herbata",
              "lerntext": "herbata",
              "de": "Tee"
            },
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser"
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
          "schrift": "ja potrzebuję [Slot]",
          "lerntext": "ja potrzebuję [Slot]"
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pomoc",
              "lerntext": "pomoc",
              "de": "Hilfe"
            },
            {
              "schrift": "czas",
              "lerntext": "czas",
              "de": "Zeit"
            },
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld"
            },
            {
              "schrift": "sól",
              "lerntext": "sól",
              "de": "Salz"
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker"
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot"
            },
            {
              "schrift": "potrzebować",
              "lerntext": "potrzebować",
              "de": "brauchen"
            },
            {
              "schrift": "jeść",
              "lerntext": "jeść",
              "de": "essen"
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "potrzebować",
            "lerntext": "potrzebować",
            "de": "brauchen"
          }
        ],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja poproszę [Slot]",
          "lerntext": "ja poproszę [Slot]"
        },
        "frameDe": "ich möchte einen [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "śniadanie",
              "lerntext": "śniadanie",
              "de": "Frühstück"
            },
            {
              "schrift": "obiad",
              "lerntext": "obiad",
              "de": "Mittagessen"
            },
            {
              "schrift": "kolacja",
              "lerntext": "kolacja",
              "de": "Abendessen"
            },
            {
              "schrift": "owoce",
              "lerntext": "owoce",
              "de": "Obst"
            },
            {
              "schrift": "rodzina",
              "lerntext": "rodzina",
              "de": "Familie"
            },
            {
              "schrift": "drzwi",
              "lerntext": "drzwi",
              "de": "Tür"
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend"
            },
            {
              "schrift": "gotowy",
              "lerntext": "gotowy",
              "de": "bereit"
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig"
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
          "schrift": "ja jem [Slot]",
          "lerntext": "ja jem [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mięso",
              "lerntext": "mięso",
              "de": "Fleisch"
            },
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch"
            },
            {
              "schrift": "warzywa",
              "lerntext": "warzywa",
              "de": "Gemüse"
            },
            {
              "schrift": "pić",
              "lerntext": "pić",
              "de": "trinken"
            },
            {
              "schrift": "sól",
              "lerntext": "sól",
              "de": "Salz"
            },
            {
              "schrift": "obiad",
              "lerntext": "obiad",
              "de": "Mittagessen"
            },
            {
              "schrift": "czas",
              "lerntext": "czas",
              "de": "Zeit"
            },
            {
              "schrift": "pomoc",
              "lerntext": "pomoc",
              "de": "Hilfe"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "jeść",
            "lerntext": "jeść",
            "de": "essen"
          },
          {
            "schrift": "pić",
            "lerntext": "pić",
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
          "schrift": "ja nie jestem [Slot]",
          "lerntext": "ja nie jestem [Slot]"
        },
        "frameDe": "ich bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pewnie",
              "lerntext": "pewnie",
              "de": "sicher"
            },
            {
              "schrift": "warzywa",
              "lerntext": "warzywa",
              "de": "Gemüse"
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "Käse"
            },
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld"
            },
            {
              "schrift": "śniadanie",
              "lerntext": "śniadanie",
              "de": "Frühstück"
            },
            {
              "schrift": "okno",
              "lerntext": "okno",
              "de": "Fenster"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "nie",
            "lerntext": "nie",
            "de": "nicht, nein"
          },
          {
            "schrift": "tak",
            "lerntext": "tak",
            "de": "ja, so"
          },
          {
            "schrift": "nie",
            "lerntext": "nie",
            "de": "nicht, nein"
          }
        ],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "czy jesteś [Slot]?",
          "lerntext": "czy jesteś [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          },
          {
            "schrift": "wy",
            "lerntext": "wy",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt"
            },
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu"
            },
            {
              "schrift": "dobrze",
              "lerntext": "dobrze",
              "de": "gut"
            },
            {
              "schrift": "źle",
              "lerntext": "źle",
              "de": "schlecht"
            },
            {
              "schrift": "ważny",
              "lerntext": "ważny",
              "de": "wichtig"
            },
            {
              "schrift": "tak",
              "lerntext": "tak",
              "de": "ja, so"
            },
            {
              "schrift": "pewnie",
              "lerntext": "pewnie",
              "de": "sicher"
            },
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch"
            },
            {
              "schrift": "owoce",
              "lerntext": "owoce",
              "de": "Obst"
            },
            {
              "schrift": "mięso",
              "lerntext": "mięso",
              "de": "Fleisch"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "czy",
            "lerntext": "czy",
            "de": "ob (Fragepartikel)"
          }
        ],
        "id": "4.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] to jest?",
          "lerntext": "[Slot] to jest?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "co",
            "lerntext": "co",
            "de": "was"
          },
          {
            "schrift": "kto",
            "lerntext": "kto",
            "de": "wer"
          },
          {
            "schrift": "jak",
            "lerntext": "jak",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "który",
              "lerntext": "który",
              "de": "welcher"
            },
            {
              "schrift": "coś",
              "lerntext": "coś",
              "de": "etwas"
            },
            {
              "schrift": "wszystko",
              "lerntext": "wszystko",
              "de": "alles"
            },
            {
              "schrift": "dlaczego",
              "lerntext": "dlaczego",
              "de": "warum"
            },
            {
              "schrift": "dobrze",
              "lerntext": "dobrze",
              "de": "gut"
            },
            {
              "schrift": "źle",
              "lerntext": "źle",
              "de": "schlecht"
            },
            {
              "schrift": "ważny",
              "lerntext": "ważny",
              "de": "wichtig"
            },
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "co",
            "lerntext": "co",
            "de": "was"
          },
          {
            "schrift": "kto",
            "lerntext": "kto",
            "de": "wer"
          },
          {
            "schrift": "jak",
            "lerntext": "jak",
            "de": "wie"
          },
          {
            "schrift": "dlaczego",
            "lerntext": "dlaczego",
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
          "schrift": "gdzie jest [Slot]?",
          "lerntext": "gdzie jest [Slot]?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "gdzie",
            "lerntext": "gdzie",
            "de": "wo"
          },
          {
            "schrift": "dokąd",
            "lerntext": "dokąd",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sklep",
              "lerntext": "sklep",
              "de": "Laden"
            },
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant"
            },
            {
              "schrift": "toaleta",
              "lerntext": "toaleta",
              "de": "Toilette"
            },
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof"
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen"
            },
            {
              "schrift": "dokąd",
              "lerntext": "dokąd",
              "de": "wohin"
            },
            {
              "schrift": "coś",
              "lerntext": "coś",
              "de": "etwas"
            },
            {
              "schrift": "który",
              "lerntext": "który",
              "de": "welcher"
            },
            {
              "schrift": "wszystko",
              "lerntext": "wszystko",
              "de": "alles"
            },
            {
              "schrift": "łóżko",
              "lerntext": "łóżko",
              "de": "Bett"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "gdzie",
            "lerntext": "gdzie",
            "de": "wo"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "gdzie jest [Slot]?",
          "lerntext": "gdzie jest [Slot]?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "gdzie",
            "lerntext": "gdzie",
            "de": "wo"
          },
          {
            "schrift": "dokąd",
            "lerntext": "dokąd",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule"
            },
            {
              "schrift": "ulica",
              "lerntext": "ulica",
              "de": "Straße"
            },
            {
              "schrift": "toaleta",
              "lerntext": "toaleta",
              "de": "Toilette"
            },
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof"
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen"
            },
            {
              "schrift": "sklep",
              "lerntext": "sklep",
              "de": "Laden"
            },
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant"
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
          "schrift": "czy tutaj jest [Slot]?",
          "lerntext": "czy tutaj jest [Slot]?"
        },
        "frameDe": "Gibt es hier ein [Slot]?",
        "pronouns": [
          {
            "schrift": "gdzie",
            "lerntext": "gdzie",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "rynek",
              "lerntext": "rynek",
              "de": "Markt, Marktplatz"
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität"
            },
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule"
            },
            {
              "schrift": "dokąd",
              "lerntext": "dokąd",
              "de": "wohin"
            },
            {
              "schrift": "ulica",
              "lerntext": "ulica",
              "de": "Straße"
            },
            {
              "schrift": "kolacja",
              "lerntext": "kolacja",
              "de": "Abendessen"
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "czy",
            "lerntext": "czy",
            "de": "ob (Fragepartikel)"
          }
        ],
        "id": "5.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] jest tutaj",
          "lerntext": "[Slot] jest tutaj"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "tutaj",
            "lerntext": "tutaj",
            "de": "hier"
          },
          {
            "schrift": "tam",
            "lerntext": "tam",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "miasto",
              "lerntext": "miasto",
              "de": "Stadt"
            },
            {
              "schrift": "droga",
              "lerntext": "droga",
              "de": "Weg"
            },
            {
              "schrift": "las",
              "lerntext": "las",
              "de": "Wald"
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität"
            },
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "przy",
              "lerntext": "przy",
              "de": "bei, an"
            },
            {
              "schrift": "rynek",
              "lerntext": "rynek",
              "de": "Markt, Marktplatz"
            },
            {
              "schrift": "wszyscy",
              "lerntext": "wszyscy",
              "de": "alle"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "tam",
            "lerntext": "tam",
            "de": "dort"
          },
          {
            "schrift": "przy",
            "lerntext": "przy",
            "de": "bei, an"
          }
        ],
        "id": "5.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem"
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "w",
            "lerntext": "w",
            "de": "in"
          },
          {
            "schrift": "na",
            "lerntext": "na",
            "de": "auf"
          },
          {
            "schrift": "do",
            "lerntext": "do",
            "de": "zu, nach"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pod",
              "lerntext": "pod",
              "de": "unter"
            },
            {
              "schrift": "o",
              "lerntext": "o",
              "de": "über, um"
            },
            {
              "schrift": "między",
              "lerntext": "między",
              "de": "zwischen"
            },
            {
              "schrift": "przed",
              "lerntext": "przed",
              "de": "vor"
            },
            {
              "schrift": "obok",
              "lerntext": "obok",
              "de": "neben"
            },
            {
              "schrift": "miasto",
              "lerntext": "miasto",
              "de": "Stadt"
            },
            {
              "schrift": "z",
              "lerntext": "z",
              "de": "mit, aus"
            },
            {
              "schrift": "las",
              "lerntext": "las",
              "de": "Wald"
            },
            {
              "schrift": "droga",
              "lerntext": "droga",
              "de": "Weg"
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "w",
            "lerntext": "w",
            "de": "in"
          },
          {
            "schrift": "na",
            "lerntext": "na",
            "de": "auf"
          },
          {
            "schrift": "do",
            "lerntext": "do",
            "de": "zu, nach"
          },
          {
            "schrift": "od",
            "lerntext": "od",
            "de": "von, seit"
          },
          {
            "schrift": "z",
            "lerntext": "z",
            "de": "mit, aus"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "über, um"
          },
          {
            "schrift": "od",
            "lerntext": "od",
            "de": "von, seit"
          },
          {
            "schrift": "do",
            "lerntext": "do",
            "de": "zu, nach"
          }
        ],
        "id": "5.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem"
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "w",
            "lerntext": "w",
            "de": "in"
          },
          {
            "schrift": "na",
            "lerntext": "na",
            "de": "auf"
          },
          {
            "schrift": "do",
            "lerntext": "do",
            "de": "zu, nach"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "przez",
              "lerntext": "przez",
              "de": "durch"
            },
            {
              "schrift": "przeciwko",
              "lerntext": "przeciwko",
              "de": "gegen"
            },
            {
              "schrift": "przy",
              "lerntext": "przy",
              "de": "bei, an"
            },
            {
              "schrift": "pod",
              "lerntext": "pod",
              "de": "unter"
            },
            {
              "schrift": "przed",
              "lerntext": "przed",
              "de": "vor"
            },
            {
              "schrift": "obok",
              "lerntext": "obok",
              "de": "neben"
            },
            {
              "schrift": "między",
              "lerntext": "między",
              "de": "zwischen"
            },
            {
              "schrift": "miasto",
              "lerntext": "miasto",
              "de": "Stadt"
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
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null"
            },
            {
              "schrift": "jeden",
              "lerntext": "jeden",
              "de": "eins"
            },
            {
              "schrift": "dwa",
              "lerntext": "dwa",
              "de": "zwei"
            },
            {
              "schrift": "trzy",
              "lerntext": "trzy",
              "de": "drei"
            },
            {
              "schrift": "cztery",
              "lerntext": "cztery",
              "de": "vier"
            },
            {
              "schrift": "pięć",
              "lerntext": "pięć",
              "de": "fünf"
            },
            {
              "schrift": "sześć",
              "lerntext": "sześć",
              "de": "sechs"
            },
            {
              "schrift": "siedem",
              "lerntext": "siedem",
              "de": "sieben"
            },
            {
              "schrift": "osiem",
              "lerntext": "osiem",
              "de": "acht"
            },
            {
              "schrift": "dziewięć",
              "lerntext": "dziewięć",
              "de": "neun"
            },
            {
              "schrift": "dziesięć",
              "lerntext": "dziesięć",
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
              "schrift": "jedenaście",
              "lerntext": "jedenaście",
              "de": "elf"
            },
            {
              "schrift": "dwanaście",
              "lerntext": "dwanaście",
              "de": "zwölf"
            },
            {
              "schrift": "trzynaście",
              "lerntext": "trzynaście",
              "de": "dreizehn"
            },
            {
              "schrift": "czternaście",
              "lerntext": "czternaście",
              "de": "vierzehn"
            },
            {
              "schrift": "piętnaście",
              "lerntext": "piętnaście",
              "de": "fünfzehn"
            },
            {
              "schrift": "szesnaście",
              "lerntext": "szesnaście",
              "de": "sechzehn"
            },
            {
              "schrift": "siedemnaście",
              "lerntext": "siedemnaście",
              "de": "siebzehn"
            },
            {
              "schrift": "osiemnaście",
              "lerntext": "osiemnaście",
              "de": "achtzehn"
            },
            {
              "schrift": "dziewiętnaście",
              "lerntext": "dziewiętnaście",
              "de": "neunzehn"
            },
            {
              "schrift": "dwadzieścia",
              "lerntext": "dwadzieścia",
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
              "schrift": "czterdzieści",
              "lerntext": "czterdzieści",
              "de": "vierzig"
            },
            {
              "schrift": "pięćdziesiąt",
              "lerntext": "pięćdziesiąt",
              "de": "fünfzig"
            },
            {
              "schrift": "sześćdziesiąt",
              "lerntext": "sześćdziesiąt",
              "de": "sechzig"
            },
            {
              "schrift": "siedemdziesiąt",
              "lerntext": "siedemdziesiąt",
              "de": "siebzig"
            },
            {
              "schrift": "osiemdziesiąt",
              "lerntext": "osiemdziesiąt",
              "de": "achtzig"
            },
            {
              "schrift": "dziewięćdziesiąt",
              "lerntext": "dziewięćdziesiąt",
              "de": "neunzig"
            },
            {
              "schrift": "sto",
              "lerntext": "sto",
              "de": "hundert"
            },
            {
              "schrift": "tysiąc",
              "lerntext": "tysiąc",
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
          "schrift": "to za [Slot]",
          "lerntext": "to za [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer, lieb"
            },
            {
              "schrift": "tani",
              "lerntext": "tani",
              "de": "billig"
            },
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß"
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein"
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang"
            },
            {
              "schrift": "trzynaście",
              "lerntext": "trzynaście",
              "de": "dreizehn"
            },
            {
              "schrift": "sto",
              "lerntext": "sto",
              "de": "hundert"
            },
            {
              "schrift": "bez",
              "lerntext": "bez",
              "de": "ohne"
            },
            {
              "schrift": "dziewięć",
              "lerntext": "dziewięć",
              "de": "neun"
            },
            {
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "dla",
            "lerntext": "dla",
            "de": "für"
          },
          {
            "schrift": "bez",
            "lerntext": "bez",
            "de": "ohne"
          }
        ],
        "id": "6.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to za [Slot]",
          "lerntext": "to za [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz"
            },
            {
              "schrift": "wysoki",
              "lerntext": "wysoki",
              "de": "hoch, groß"
            },
            {
              "schrift": "niski",
              "lerntext": "niski",
              "de": "niedrig, klein"
            },
            {
              "schrift": "ciężki",
              "lerntext": "ciężki",
              "de": "schwer"
            },
            {
              "schrift": "lekki",
              "lerntext": "lekki",
              "de": "leicht"
            },
            {
              "schrift": "czterdzieści",
              "lerntext": "czterdzieści",
              "de": "vierzig"
            },
            {
              "schrift": "dla",
              "lerntext": "dla",
              "de": "für"
            },
            {
              "schrift": "pięćdziesiąt",
              "lerntext": "pięćdziesiąt",
              "de": "fünfzig"
            },
            {
              "schrift": "dwa",
              "lerntext": "dwa",
              "de": "zwei"
            },
            {
              "schrift": "siedemnaście",
              "lerntext": "siedemnaście",
              "de": "siebzehn"
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
          "schrift": "ja mogę [Slot]",
          "lerntext": "ja mogę [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen"
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen"
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren"
            },
            {
              "schrift": "pisać",
              "lerntext": "pisać",
              "de": "schreiben"
            },
            {
              "schrift": "czytać",
              "lerntext": "czytać",
              "de": "lesen"
            },
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz"
            },
            {
              "schrift": "lekki",
              "lerntext": "lekki",
              "de": "leicht"
            },
            {
              "schrift": "dziewiętnaście",
              "lerntext": "dziewiętnaście",
              "de": "neunzehn"
            },
            {
              "schrift": "dwanaście",
              "lerntext": "dwanaście",
              "de": "zwölf"
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "móc",
            "lerntext": "móc",
            "de": "können"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja mogę [Slot]",
          "lerntext": "ja mogę [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pomagać",
              "lerntext": "pomagać",
              "de": "helfen"
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen"
            },
            {
              "schrift": "robić",
              "lerntext": "robić",
              "de": "machen"
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen, sagen"
            },
            {
              "schrift": "używać",
              "lerntext": "używać",
              "de": "benutzen"
            },
            {
              "schrift": "tysiąc",
              "lerntext": "tysiąc",
              "de": "tausend"
            },
            {
              "schrift": "osiemdziesiąt",
              "lerntext": "osiemdziesiąt",
              "de": "achtzig"
            },
            {
              "schrift": "przeciwko",
              "lerntext": "przeciwko",
              "de": "gegen"
            },
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß"
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren"
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
          "schrift": "ja muszę [Slot]",
          "lerntext": "ja muszę [Slot]"
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten"
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen"
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten"
            },
            {
              "schrift": "płacić",
              "lerntext": "płacić",
              "de": "bezahlen"
            },
            {
              "schrift": "myć",
              "lerntext": "myć",
              "de": "waschen"
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen, sagen"
            },
            {
              "schrift": "robić",
              "lerntext": "robić",
              "de": "machen"
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen"
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen"
            },
            {
              "schrift": "sześć",
              "lerntext": "sześć",
              "de": "sechs"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "musieć",
            "lerntext": "musieć",
            "de": "müssen"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę [Slot]",
          "lerntext": "ja chcę [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören"
            },
            {
              "schrift": "patrzeć",
              "lerntext": "patrzeć",
              "de": "schauen"
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen"
            },
            {
              "schrift": "dzwonić",
              "lerntext": "dzwonić",
              "de": "anrufen"
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen"
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen"
            },
            {
              "schrift": "myć",
              "lerntext": "myć",
              "de": "waschen"
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten"
            },
            {
              "schrift": "pięć",
              "lerntext": "pięć",
              "de": "fünf"
            },
            {
              "schrift": "pomagać",
              "lerntext": "pomagać",
              "de": "helfen"
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
          "schrift": "ja chcę [Slot]",
          "lerntext": "ja chcę [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten"
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen, sagen"
            },
            {
              "schrift": "słyszeć",
              "lerntext": "słyszeć",
              "de": "hören"
            },
            {
              "schrift": "widzieć",
              "lerntext": "widzieć",
              "de": "sehen"
            },
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören"
            },
            {
              "schrift": "dzwonić",
              "lerntext": "dzwonić",
              "de": "anrufen"
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen"
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen"
            },
            {
              "schrift": "patrzeć",
              "lerntext": "patrzeć",
              "de": "schauen"
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
          "schrift": "ja nie mogę [Slot]",
          "lerntext": "ja nie mogę [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen"
            },
            {
              "schrift": "tracić",
              "lerntext": "tracić",
              "de": "verlieren"
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen"
            },
            {
              "schrift": "śmiać się",
              "lerntext": "śmiać się",
              "de": "lachen"
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben"
            },
            {
              "schrift": "słyszeć",
              "lerntext": "słyszeć",
              "de": "hören"
            },
            {
              "schrift": "szesnaście",
              "lerntext": "szesnaście",
              "de": "sechzehn"
            },
            {
              "schrift": "trzy",
              "lerntext": "trzy",
              "de": "drei"
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein"
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "dostawać",
            "lerntext": "dostawać",
            "de": "bekommen"
          }
        ],
        "id": "7.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja nie mogę [Slot]",
          "lerntext": "ja nie mogę [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "umierać",
              "lerntext": "umierać",
              "de": "sterben"
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen"
            },
            {
              "schrift": "zamykać",
              "lerntext": "zamykać",
              "de": "schließen"
            },
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen"
            },
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen"
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen"
            },
            {
              "schrift": "osiemnaście",
              "lerntext": "osiemnaście",
              "de": "achtzehn"
            },
            {
              "schrift": "płacić",
              "lerntext": "płacić",
              "de": "bezahlen"
            },
            {
              "schrift": "móc",
              "lerntext": "móc",
              "de": "können"
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
          "schrift": "ja jadę [Slot]",
          "lerntext": "ja jadę [Slot]"
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus"
            },
            {
              "schrift": "pociąg",
              "lerntext": "pociąg",
              "de": "Zug"
            },
            {
              "schrift": "samochód",
              "lerntext": "samochód",
              "de": "Auto"
            },
            {
              "schrift": "droga",
              "lerntext": "droga",
              "de": "Weg"
            },
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen"
            },
            {
              "schrift": "umierać",
              "lerntext": "umierać",
              "de": "sterben"
            },
            {
              "schrift": "zamykać",
              "lerntext": "zamykać",
              "de": "schließen"
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen"
            },
            {
              "schrift": "ciężki",
              "lerntext": "ciężki",
              "de": "schwer"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "podróżować",
            "lerntext": "podróżować",
            "de": "reisen"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę [Slot] teraz",
          "lerntext": "ja chcę [Slot] teraz"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siedzieć",
              "lerntext": "siedzieć",
              "de": "sitzen"
            },
            {
              "schrift": "stać",
              "lerntext": "stać",
              "de": "stehen"
            },
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen"
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben"
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus"
            },
            {
              "schrift": "pociąg",
              "lerntext": "pociąg",
              "de": "Zug"
            },
            {
              "schrift": "siedemdziesiąt",
              "lerntext": "siedemdziesiąt",
              "de": "siebzig"
            },
            {
              "schrift": "śmiać się",
              "lerntext": "śmiać się",
              "de": "lachen"
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer, lieb"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "teraz",
            "lerntext": "teraz",
            "de": "jetzt"
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
              "schrift": "dzisiaj",
              "lerntext": "dzisiaj",
              "de": "heute"
            },
            {
              "schrift": "wczoraj",
              "lerntext": "wczoraj",
              "de": "gestern"
            },
            {
              "schrift": "jutro",
              "lerntext": "jutro",
              "de": "morgen"
            },
            {
              "schrift": "teraz",
              "lerntext": "teraz",
              "de": "jetzt"
            },
            {
              "schrift": "wkrótce",
              "lerntext": "wkrótce",
              "de": "bald"
            },
            {
              "schrift": "zawsze",
              "lerntext": "zawsze",
              "de": "immer"
            },
            {
              "schrift": "nigdy",
              "lerntext": "nigdy",
              "de": "nie"
            },
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft"
            },
            {
              "schrift": "czasami",
              "lerntext": "czasami",
              "de": "manchmal"
            },
            {
              "schrift": "już",
              "lerntext": "już",
              "de": "schon"
            },
            {
              "schrift": "zaraz",
              "lerntext": "zaraz",
              "de": "sofort"
            },
            {
              "schrift": "razem",
              "lerntext": "razem",
              "de": "zusammen"
            }
          ]
        ],
        "newCount": 11,
        "task": null,
        "newFrameWords": [],
        "id": "9.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "do zobaczenia w [Slot]",
          "lerntext": "do zobaczenia w [Slot]"
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "kiedy",
            "lerntext": "kiedy",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jutro",
              "lerntext": "jutro",
              "de": "morgen"
            },
            {
              "schrift": "wieczór",
              "lerntext": "wieczór",
              "de": "Abend"
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht"
            },
            {
              "schrift": "dzień",
              "lerntext": "dzień",
              "de": "Tag"
            },
            {
              "schrift": "tydzień",
              "lerntext": "tydzień",
              "de": "Woche"
            },
            {
              "schrift": "razem",
              "lerntext": "razem",
              "de": "zusammen"
            },
            {
              "schrift": "wkrótce",
              "lerntext": "wkrótce",
              "de": "bald"
            },
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen"
            },
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft"
            },
            {
              "schrift": "zaraz",
              "lerntext": "zaraz",
              "de": "sofort"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "kiedy",
            "lerntext": "kiedy",
            "de": "wann"
          },
          {
            "schrift": "też",
            "lerntext": "też",
            "de": "auch"
          },
          {
            "schrift": "tylko",
            "lerntext": "tylko",
            "de": "nur"
          }
        ],
        "id": "9.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to trwa [Slot]",
          "lerntext": "to trwa [Slot]"
        },
        "frameDe": "Es dauert eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "godzina",
              "lerntext": "godzina",
              "de": "Stunde"
            },
            {
              "schrift": "minuta",
              "lerntext": "minuta",
              "de": "Minute"
            },
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub"
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht"
            },
            {
              "schrift": "nigdy",
              "lerntext": "nigdy",
              "de": "nie"
            },
            {
              "schrift": "już",
              "lerntext": "już",
              "de": "schon"
            },
            {
              "schrift": "czasami",
              "lerntext": "czasami",
              "de": "manchmal"
            },
            {
              "schrift": "tylko",
              "lerntext": "tylko",
              "de": "nur"
            }
          ]
        ],
        "newCount": 3,
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
          "schrift": "ja lubię [Slot]",
          "lerntext": "ja lubię [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "słońce",
              "lerntext": "słońce",
              "de": "Sonne"
            },
            {
              "schrift": "deszcz",
              "lerntext": "deszcz",
              "de": "Regen"
            },
            {
              "schrift": "śnieg",
              "lerntext": "śnieg",
              "de": "Schnee"
            },
            {
              "schrift": "pogoda",
              "lerntext": "pogoda",
              "de": "Wetter"
            },
            {
              "schrift": "góra",
              "lerntext": "góra",
              "de": "Berg"
            },
            {
              "schrift": "godzina",
              "lerntext": "godzina",
              "de": "Stunde"
            },
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub"
            },
            {
              "schrift": "siedzieć",
              "lerntext": "siedzieć",
              "de": "sitzen"
            },
            {
              "schrift": "wieczór",
              "lerntext": "wieczór",
              "de": "Abend"
            },
            {
              "schrift": "zawsze",
              "lerntext": "zawsze",
              "de": "immer"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "lubić",
            "lerntext": "lubić",
            "de": "mögen"
          },
          {
            "schrift": "kochać",
            "lerntext": "kochać",
            "de": "lieben"
          },
          {
            "schrift": "jedzenie",
            "lerntext": "jedzenie",
            "de": "Essen"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja lubię [Slot]",
          "lerntext": "ja lubię [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morze",
              "lerntext": "morze",
              "de": "Meer"
            },
            {
              "schrift": "góra",
              "lerntext": "góra",
              "de": "Berg"
            },
            {
              "schrift": "słońce",
              "lerntext": "słońce",
              "de": "Sonne"
            },
            {
              "schrift": "pogoda",
              "lerntext": "pogoda",
              "de": "Wetter"
            },
            {
              "schrift": "jedenaście",
              "lerntext": "jedenaście",
              "de": "elf"
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen"
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
          "schrift": "ja widzę [Slot]",
          "lerntext": "ja widzę [Slot]"
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mnie",
              "lerntext": "mnie",
              "de": "mich, mir"
            },
            {
              "schrift": "ciebie",
              "lerntext": "ciebie",
              "de": "dich"
            },
            {
              "schrift": "go",
              "lerntext": "go",
              "de": "ihn"
            },
            {
              "schrift": "ona",
              "lerntext": "ona",
              "de": "sie"
            },
            {
              "schrift": "nas",
              "lerntext": "nas",
              "de": "uns"
            },
            {
              "schrift": "morze",
              "lerntext": "morze",
              "de": "Meer"
            },
            {
              "schrift": "znaleźć",
              "lerntext": "znaleźć",
              "de": "finden"
            },
            {
              "schrift": "widzieć",
              "lerntext": "widzieć",
              "de": "sehen"
            },
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten"
            },
            {
              "schrift": "pisać",
              "lerntext": "pisać",
              "de": "schreiben"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "znaleźć",
            "lerntext": "znaleźć",
            "de": "finden"
          }
        ],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot]",
          "lerntext": "to jest [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "czerwony",
              "lerntext": "czerwony",
              "de": "rot"
            },
            {
              "schrift": "niebieski",
              "lerntext": "niebieski",
              "de": "blau"
            },
            {
              "schrift": "żółty",
              "lerntext": "żółty",
              "de": "gelb"
            },
            {
              "schrift": "zielony",
              "lerntext": "zielony",
              "de": "grün"
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz"
            },
            {
              "schrift": "ciebie",
              "lerntext": "ciebie",
              "de": "dich"
            },
            {
              "schrift": "nas",
              "lerntext": "nas",
              "de": "uns"
            },
            {
              "schrift": "go",
              "lerntext": "go",
              "de": "ihn"
            },
            {
              "schrift": "mnie",
              "lerntext": "mnie",
              "de": "mich, mir"
            },
            {
              "schrift": "tydzień",
              "lerntext": "tydzień",
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
          "schrift": "to jest [Slot]",
          "lerntext": "to jest [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "biały",
              "lerntext": "biały",
              "de": "weiß"
            },
            {
              "schrift": "brązowy",
              "lerntext": "brązowy",
              "de": "braun"
            },
            {
              "schrift": "szary",
              "lerntext": "szary",
              "de": "grau"
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz"
            },
            {
              "schrift": "żółty",
              "lerntext": "żółty",
              "de": "gelb"
            },
            {
              "schrift": "czerwony",
              "lerntext": "czerwony",
              "de": "rot"
            },
            {
              "schrift": "zielony",
              "lerntext": "zielony",
              "de": "grün"
            },
            {
              "schrift": "lubić",
              "lerntext": "lubić",
              "de": "mögen"
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
          "schrift": "jedzenie jest [Slot]",
          "lerntext": "jedzenie jest [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß"
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm"
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt"
            },
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber"
            },
            {
              "schrift": "brudny",
              "lerntext": "brudny",
              "de": "schmutzig"
            },
            {
              "schrift": "szary",
              "lerntext": "szary",
              "de": "grau"
            },
            {
              "schrift": "dużo",
              "lerntext": "dużo",
              "de": "viel"
            },
            {
              "schrift": "biały",
              "lerntext": "biały",
              "de": "weiß"
            },
            {
              "schrift": "też",
              "lerntext": "też",
              "de": "auch"
            },
            {
              "schrift": "używać",
              "lerntext": "używać",
              "de": "benutzen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "dużo",
            "lerntext": "dużo",
            "de": "viel"
          }
        ],
        "id": "10.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jedzenie jest [Slot]",
          "lerntext": "jedzenie jest [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "zwykły",
              "lerntext": "zwykły",
              "de": "gewöhnlich"
            },
            {
              "schrift": "brudny",
              "lerntext": "brudny",
              "de": "schmutzig"
            },
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß"
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm"
            },
            {
              "schrift": "podróżować",
              "lerntext": "podróżować",
              "de": "reisen"
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt"
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
          "schrift": "wczoraj ja byłem [Slot]",
          "lerntext": "wczoraj ja byłem [Slot]"
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde"
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank"
            },
            {
              "schrift": "zadowolony",
              "lerntext": "zadowolony",
              "de": "zufrieden"
            },
            {
              "schrift": "się",
              "lerntext": "się",
              "de": "sich"
            },
            {
              "schrift": "zwykły",
              "lerntext": "zwykły",
              "de": "gewöhnlich"
            },
            {
              "schrift": "kochać",
              "lerntext": "kochać",
              "de": "lieben"
            },
            {
              "schrift": "przez",
              "lerntext": "przez",
              "de": "durch"
            },
            {
              "schrift": "dwadzieścia",
              "lerntext": "dwadzieścia",
              "de": "zwanzig"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "się",
            "lerntext": "się",
            "de": "sich"
          }
        ],
        "id": "11.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jutro będę [Slot]",
          "lerntext": "jutro będę [Slot]"
        },
        "frameDe": "ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kupować",
              "lerntext": "kupować",
              "de": "kaufen"
            },
            {
              "schrift": "dać",
              "lerntext": "dać",
              "de": "geben"
            },
            {
              "schrift": "brać",
              "lerntext": "brać",
              "de": "nehmen"
            },
            {
              "schrift": "znaleźć",
              "lerntext": "znaleźć",
              "de": "finden"
            },
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten"
            },
            {
              "schrift": "dzień",
              "lerntext": "dzień",
              "de": "Tag"
            },
            {
              "schrift": "stawać się",
              "lerntext": "stawać się",
              "de": "werden"
            },
            {
              "schrift": "cztery",
              "lerntext": "cztery",
              "de": "vier"
            },
            {
              "schrift": "wysoki",
              "lerntext": "wysoki",
              "de": "hoch, groß"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "stawać się",
            "lerntext": "stawać się",
            "de": "werden"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę dużo [Slot]",
          "lerntext": "ja chcę dużo [Slot]"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen"
            },
            {
              "schrift": "wiedzieć",
              "lerntext": "wiedzieć",
              "de": "wissen"
            },
            {
              "schrift": "wierzyć",
              "lerntext": "wierzyć",
              "de": "glauben"
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
              "de": "denken"
            },
            {
              "schrift": "kupować",
              "lerntext": "kupować",
              "de": "kaufen"
            },
            {
              "schrift": "dać",
              "lerntext": "dać",
              "de": "geben"
            },
            {
              "schrift": "brać",
              "lerntext": "brać",
              "de": "nehmen"
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben"
            },
            {
              "schrift": "stać",
              "lerntext": "stać",
              "de": "stehen"
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
          "schrift": "ja staję się [Slot]",
          "lerntext": "ja staję się [Slot]"
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "otwarty",
              "lerntext": "otwarty",
              "de": "offen"
            },
            {
              "schrift": "zamknięty",
              "lerntext": "zamknięty",
              "de": "geschlossen"
            },
            {
              "schrift": "pewnie",
              "lerntext": "pewnie",
              "de": "sicher"
            },
            {
              "schrift": "niebezpieczny",
              "lerntext": "niebezpieczny",
              "de": "gefährlich"
            },
            {
              "schrift": "wierzyć",
              "lerntext": "wierzyć",
              "de": "glauben"
            },
            {
              "schrift": "niebieski",
              "lerntext": "niebieski",
              "de": "blau"
            },
            {
              "schrift": "wiedzieć",
              "lerntext": "wiedzieć",
              "de": "wissen"
            },
            {
              "schrift": "śnieg",
              "lerntext": "śnieg",
              "de": "Schnee"
            },
            {
              "schrift": "siedem",
              "lerntext": "siedem",
              "de": "sieben"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "stawać się",
            "lerntext": "stawać się",
            "de": "werden"
          },
          {
            "schrift": "się",
            "lerntext": "się",
            "de": "sich"
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
          "schrift": "jestem zmęczony [Slot] pracuję",
          "lerntext": "jestem zmęczony [Slot] pracuję"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "und"
          },
          {
            "schrift": "ale",
            "lerntext": "ale",
            "de": "aber"
          },
          {
            "schrift": "albo",
            "lerntext": "albo",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "weil"
            },
            {
              "schrift": "o",
              "lerntext": "o",
              "de": "über, um"
            },
            {
              "schrift": "podczas",
              "lerntext": "podczas",
              "de": "während"
            },
            {
              "schrift": "chociaż",
              "lerntext": "chociaż",
              "de": "obwohl"
            },
            {
              "schrift": "przed",
              "lerntext": "przed",
              "de": "vor"
            },
            {
              "schrift": "niebezpieczny",
              "lerntext": "niebezpieczny",
              "de": "gefährlich"
            },
            {
              "schrift": "że",
              "lerntext": "że",
              "de": "dass"
            },
            {
              "schrift": "zamknięty",
              "lerntext": "zamknięty",
              "de": "geschlossen"
            },
            {
              "schrift": "otwarty",
              "lerntext": "otwarty",
              "de": "offen"
            },
            {
              "schrift": "więc",
              "lerntext": "więc",
              "de": "also"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "und"
          },
          {
            "schrift": "ale",
            "lerntext": "ale",
            "de": "aber"
          },
          {
            "schrift": "albo",
            "lerntext": "albo",
            "de": "oder"
          },
          {
            "schrift": "więc",
            "lerntext": "więc",
            "de": "also"
          },
          {
            "schrift": "że",
            "lerntext": "że",
            "de": "dass"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jestem zmęczony [Slot] pracuję",
          "lerntext": "jestem zmęczony [Slot] pracuję"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "und"
          },
          {
            "schrift": "ale",
            "lerntext": "ale",
            "de": "aber"
          },
          {
            "schrift": "albo",
            "lerntext": "albo",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "może",
              "lerntext": "może",
              "de": "vielleicht"
            },
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "weil"
            },
            {
              "schrift": "chociaż",
              "lerntext": "chociaż",
              "de": "obwohl"
            },
            {
              "schrift": "podczas",
              "lerntext": "podczas",
              "de": "während"
            },
            {
              "schrift": "jeden",
              "lerntext": "jeden",
              "de": "eins"
            },
            {
              "schrift": "czternaście",
              "lerntext": "czternaście",
              "de": "vierzehn"
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
          "schrift": "chcę [Slot] ale nie mogę",
          "lerntext": "chcę [Slot] ale nie mogę"
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rozumieć",
              "lerntext": "rozumieć",
              "de": "verstehen"
            },
            {
              "schrift": "mieć nadzieję",
              "lerntext": "mieć nadzieję",
              "de": "hoffen"
            },
            {
              "schrift": "może",
              "lerntext": "może",
              "de": "vielleicht"
            },
            {
              "schrift": "ból",
              "lerntext": "ból",
              "de": "Schmerz"
            },
            {
              "schrift": "tracić",
              "lerntext": "tracić",
              "de": "verlieren"
            },
            {
              "schrift": "dostawać",
              "lerntext": "dostawać",
              "de": "bekommen"
            },
            {
              "schrift": "brązowy",
              "lerntext": "brązowy",
              "de": "braun"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ból",
            "lerntext": "ból",
            "de": "Schmerz"
          }
        ],
        "id": "12.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to [Slot] ale da się",
          "lerntext": "to [Slot] ale da się"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "trudny",
              "lerntext": "trudny",
              "de": "schwierig"
            },
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach"
            },
            {
              "schrift": "ciekawy",
              "lerntext": "ciekawy",
              "de": "interessant"
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch"
            },
            {
              "schrift": "szybko",
              "lerntext": "szybko",
              "de": "schnell"
            },
            {
              "schrift": "rozumieć",
              "lerntext": "rozumieć",
              "de": "verstehen"
            },
            {
              "schrift": "mieć nadzieję",
              "lerntext": "mieć nadzieję",
              "de": "hoffen"
            },
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber"
            },
            {
              "schrift": "dziewięćdziesiąt",
              "lerntext": "dziewięćdziesiąt",
              "de": "neunzig"
            },
            {
              "schrift": "tani",
              "lerntext": "tani",
              "de": "billig"
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
          "schrift": "to [Slot] ale da się",
          "lerntext": "to [Slot] ale da się"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "powoli",
              "lerntext": "powoli",
              "de": "langsam"
            },
            {
              "schrift": "brzydki",
              "lerntext": "brzydki",
              "de": "hässlich"
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch"
            },
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach"
            },
            {
              "schrift": "minuta",
              "lerntext": "minuta",
              "de": "Minute"
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
              "de": "denken"
            },
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "12.5"
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
        "id": "12.6"
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
          "schrift": "boli mnie [Slot]",
          "lerntext": "boli mnie [Slot]"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mój",
            "lerntext": "mój",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "głowa",
              "lerntext": "głowa",
              "de": "Kopf"
            },
            {
              "schrift": "oko",
              "lerntext": "oko",
              "de": "Auge"
            },
            {
              "schrift": "powoli",
              "lerntext": "powoli",
              "de": "langsam"
            },
            {
              "schrift": "brzydki",
              "lerntext": "brzydki",
              "de": "hässlich"
            },
            {
              "schrift": "piętnaście",
              "lerntext": "piętnaście",
              "de": "fünfzehn"
            },
            {
              "schrift": "dzisiaj",
              "lerntext": "dzisiaj",
              "de": "heute"
            },
            {
              "schrift": "sześćdziesiąt",
              "lerntext": "sześćdziesiąt",
              "de": "sechzig"
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
          "schrift": "mam ból [Slot]",
          "lerntext": "mam ból [Slot]"
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "noga",
              "lerntext": "noga",
              "de": "Bein, Fuß"
            },
            {
              "schrift": "oko",
              "lerntext": "oko",
              "de": "Auge"
            },
            {
              "schrift": "głowa",
              "lerntext": "głowa",
              "de": "Kopf"
            },
            {
              "schrift": "osiem",
              "lerntext": "osiem",
              "de": "acht"
            },
            {
              "schrift": "ciekawy",
              "lerntext": "ciekawy",
              "de": "interessant"
            },
            {
              "schrift": "szybko",
              "lerntext": "szybko",
              "de": "schnell"
            }
          ]
        ],
        "newCount": 0,
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier gibt es einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "talerz",
              "lerntext": "talerz",
              "de": "Teller"
            },
            {
              "schrift": "czytać",
              "lerntext": "czytać",
              "de": "lesen"
            },
            {
              "schrift": "niski",
              "lerntext": "niski",
              "de": "niedrig, klein"
            },
            {
              "schrift": "deszcz",
              "lerntext": "deszcz",
              "de": "Regen"
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben"
            },
            {
              "schrift": "dziesięć",
              "lerntext": "dziesięć",
              "de": "zehn"
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
          "schrift": "kupuję [Slot]",
          "lerntext": "kupuję [Slot]"
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sukienka",
              "lerntext": "sukienka",
              "de": "Kleid"
            },
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "Schuh"
            },
            {
              "schrift": "talerz",
              "lerntext": "talerz",
              "de": "Teller"
            },
            {
              "schrift": "trudny",
              "lerntext": "trudny",
              "de": "schwierig"
            },
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören"
            },
            {
              "schrift": "trzynaście",
              "lerntext": "trzynaście",
              "de": "dreizehn"
            },
            {
              "schrift": "godzina",
              "lerntext": "godzina",
              "de": "Stunde"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "14.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "mam [Slot]",
          "lerntext": "mam [Slot]"
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ubranie",
              "lerntext": "ubranie",
              "de": "Kleidung"
            },
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "Schuh"
            },
            {
              "schrift": "sukienka",
              "lerntext": "sukienka",
              "de": "Kleid"
            },
            {
              "schrift": "razem",
              "lerntext": "razem",
              "de": "zusammen"
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht"
            },
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest moja [Slot]",
          "lerntext": "to jest moja [Slot]"
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "praca",
              "lerntext": "praca",
              "de": "Arbeit"
            },
            {
              "schrift": "ubranie",
              "lerntext": "ubranie",
              "de": "Kleidung"
            },
            {
              "schrift": "sto",
              "lerntext": "sto",
              "de": "hundert"
            },
            {
              "schrift": "ręka",
              "lerntext": "ręka",
              "de": "Hand, Arm"
            },
            {
              "schrift": "potrzebować",
              "lerntext": "potrzebować",
              "de": "brauchen"
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee"
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
          "schrift": "czekam na [Slot]",
          "lerntext": "czekam na [Slot]"
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "odpowiedź",
              "lerntext": "odpowiedź",
              "de": "Antwort"
            },
            {
              "schrift": "egzamin",
              "lerntext": "egzamin",
              "de": "Prüfung"
            },
            {
              "schrift": "praca",
              "lerntext": "praca",
              "de": "Arbeit"
            },
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "wkrótce",
              "lerntext": "wkrótce",
              "de": "bald"
            },
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen"
            },
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft"
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
          "schrift": "dostałem dobrą [Slot]",
          "lerntext": "dostałem dobrą [Slot]"
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dom",
              "lerntext": "dom",
              "de": "Haus"
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer"
            },
            {
              "schrift": "stół",
              "lerntext": "stół",
              "de": "Tisch"
            },
            {
              "schrift": "odpowiedź",
              "lerntext": "odpowiedź",
              "de": "Antwort"
            },
            {
              "schrift": "egzamin",
              "lerntext": "egzamin",
              "de": "Prüfung"
            },
            {
              "schrift": "szklanka",
              "lerntext": "szklanka",
              "de": "Glas"
            },
            {
              "schrift": "dlaczego",
              "lerntext": "dlaczego",
              "de": "warum"
            },
            {
              "schrift": "bez",
              "lerntext": "bez",
              "de": "ohne"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "człowiek",
              "lerntext": "człowiek",
              "de": "Mensch"
            },
            {
              "schrift": "mężczyzna",
              "lerntext": "mężczyzna",
              "de": "Mann"
            },
            {
              "schrift": "chłopak",
              "lerntext": "chłopak",
              "de": "Junge, fester Freund"
            },
            {
              "schrift": "ludzie",
              "lerntext": "ludzie",
              "de": "Leute"
            },
            {
              "schrift": "kolega",
              "lerntext": "kolega",
              "de": "Kumpel"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rodzeństwo",
              "lerntext": "rodzeństwo",
              "de": "Geschwister"
            },
            {
              "schrift": "mąż",
              "lerntext": "mąż",
              "de": "Ehemann"
            },
            {
              "schrift": "żona",
              "lerntext": "żona",
              "de": "Ehefrau"
            },
            {
              "schrift": "imię",
              "lerntext": "imię",
              "de": "Vorname"
            },
            {
              "schrift": "rok",
              "lerntext": "rok",
              "de": "Jahr"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "miesiąc",
              "lerntext": "miesiąc",
              "de": "Monat"
            },
            {
              "schrift": "rano",
              "lerntext": "rano",
              "de": "Morgen"
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende"
            },
            {
              "schrift": "kraj",
              "lerntext": "kraj",
              "de": "Land"
            },
            {
              "schrift": "miejsce",
              "lerntext": "miejsce",
              "de": "Platz, Ort"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dziewczyna",
              "lerntext": "dziewczyna",
              "de": "Mädchen, feste Freundin"
            },
            {
              "schrift": "apteka",
              "lerntext": "apteka",
              "de": "Apotheke"
            },
            {
              "schrift": "bilet",
              "lerntext": "bilet",
              "de": "Fahrkarte"
            },
            {
              "schrift": "paszport",
              "lerntext": "paszport",
              "de": "Pass"
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Preis"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rachunek",
              "lerntext": "rachunek",
              "de": "Rechnung"
            },
            {
              "schrift": "karta",
              "lerntext": "karta",
              "de": "Karte"
            },
            {
              "schrift": "wykład",
              "lerntext": "wykład",
              "de": "Vorlesung"
            },
            {
              "schrift": "słowo",
              "lerntext": "słowo",
              "de": "Wort"
            },
            {
              "schrift": "język",
              "lerntext": "język",
              "de": "Sprache, Zunge"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pytanie",
              "lerntext": "pytanie",
              "de": "Frage"
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem"
            },
            {
              "schrift": "rzecz",
              "lerntext": "rzecz",
              "de": "Sache, Ding"
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte"
            },
            {
              "schrift": "butelka",
              "lerntext": "butelka",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "włosy",
              "lerntext": "włosy",
              "de": "Haare"
            },
            {
              "schrift": "lekarz",
              "lerntext": "lekarz",
              "de": "Arzt"
            },
            {
              "schrift": "lek",
              "lerntext": "lek",
              "de": "Medikament"
            },
            {
              "schrift": "gorączka",
              "lerntext": "gorączka",
              "de": "Fieber"
            },
            {
              "schrift": "numer",
              "lerntext": "numer",
              "de": "Nummer"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "muzyka",
              "lerntext": "muzyka",
              "de": "Musik"
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film"
            },
            {
              "schrift": "impreza",
              "lerntext": "impreza",
              "de": "Party"
            },
            {
              "schrift": "życie",
              "lerntext": "życie",
              "de": "Leben"
            },
            {
              "schrift": "świat",
              "lerntext": "świat",
              "de": "Welt"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "powietrze",
              "lerntext": "powietrze",
              "de": "Luft"
            },
            {
              "schrift": "pies",
              "lerntext": "pies",
              "de": "Hund"
            },
            {
              "schrift": "kot",
              "lerntext": "kot",
              "de": "Katze"
            },
            {
              "schrift": "prezent",
              "lerntext": "prezent",
              "de": "Geschenk"
            },
            {
              "schrift": "miłość",
              "lerntext": "miłość",
              "de": "Liebe"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "część",
              "lerntext": "część",
              "de": "Teil"
            },
            {
              "schrift": "koniec",
              "lerntext": "koniec",
              "de": "Ende"
            },
            {
              "schrift": "początek",
              "lerntext": "początek",
              "de": "Anfang"
            },
            {
              "schrift": "powód",
              "lerntext": "powód",
              "de": "Grund"
            },
            {
              "schrift": "przykład",
              "lerntext": "przykład",
              "de": "Beispiel"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pomysł",
              "lerntext": "pomysł",
              "de": "Idee"
            },
            {
              "schrift": "historia",
              "lerntext": "historia",
              "de": "Geschichte"
            },
            {
              "schrift": "strach",
              "lerntext": "strach",
              "de": "Angst"
            },
            {
              "schrift": "klient",
              "lerntext": "klient",
              "de": "Kunde"
            },
            {
              "schrift": "wypłata",
              "lerntext": "wypłata",
              "de": "Lohn"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "przerwa",
              "lerntext": "przerwa",
              "de": "Pause"
            },
            {
              "schrift": "zmiana",
              "lerntext": "zmiana",
              "de": "Schicht, Änderung"
            },
            {
              "schrift": "bagaż",
              "lerntext": "bagaż",
              "de": "Gepäck"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "15.12"
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
        "id": "15.13"
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "być",
              "lerntext": "być",
              "de": "sein"
            },
            {
              "schrift": "znać",
              "lerntext": "znać",
              "de": "kennen"
            },
            {
              "schrift": "powiedzieć",
              "lerntext": "powiedzieć",
              "de": "sagen"
            },
            {
              "schrift": "iść",
              "lerntext": "iść",
              "de": "gehen"
            },
            {
              "schrift": "przyjść",
              "lerntext": "przyjść",
              "de": "kommen"
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "kłaść",
              "lerntext": "kłaść",
              "de": "legen"
            },
            {
              "schrift": "nazywać",
              "lerntext": "nazywać",
              "de": "nennen"
            },
            {
              "schrift": "kosztować",
              "lerntext": "kosztować",
              "de": "kosten"
            },
            {
              "schrift": "wyjeżdżać",
              "lerntext": "wyjeżdżać",
              "de": "abfahren"
            },
            {
              "schrift": "przyjeżdżać",
              "lerntext": "przyjeżdżać",
              "de": "ankommen"
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wychodzić",
              "lerntext": "wychodzić",
              "de": "hinausgehen"
            },
            {
              "schrift": "wchodzić",
              "lerntext": "wchodzić",
              "de": "hineingehen"
            },
            {
              "schrift": "nosić",
              "lerntext": "nosić",
              "de": "tragen"
            },
            {
              "schrift": "uczyć się",
              "lerntext": "uczyć się",
              "de": "lernen"
            },
            {
              "schrift": "studiować",
              "lerntext": "studiować",
              "de": "studieren"
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pamiętać",
              "lerntext": "pamiętać",
              "de": "sich erinnern"
            },
            {
              "schrift": "zaczynać",
              "lerntext": "zaczynać",
              "de": "anfangen"
            },
            {
              "schrift": "kończyć",
              "lerntext": "kończyć",
              "de": "beenden"
            },
            {
              "schrift": "próbować",
              "lerntext": "próbować",
              "de": "versuchen"
            },
            {
              "schrift": "śpiewać",
              "lerntext": "śpiewać",
              "de": "singen"
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "biegać",
              "lerntext": "biegać",
              "de": "rennen"
            },
            {
              "schrift": "odwiedzać",
              "lerntext": "odwiedzać",
              "de": "besuchen"
            },
            {
              "schrift": "poznawać",
              "lerntext": "poznawać",
              "de": "kennenlernen"
            },
            {
              "schrift": "żenić się",
              "lerntext": "żenić się",
              "de": "heiraten"
            },
            {
              "schrift": "rodzić się",
              "lerntext": "rodzić się",
              "de": "geboren werden"
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wydawać się",
              "lerntext": "wydawać się",
              "de": "scheinen"
            },
            {
              "schrift": "zdarzać się",
              "lerntext": "zdarzać się",
              "de": "geschehen"
            },
            {
              "schrift": "zamawiać",
              "lerntext": "zamawiać",
              "de": "bestellen"
            },
            {
              "schrift": "rezerwować",
              "lerntext": "rezerwować",
              "de": "reservieren"
            },
            {
              "schrift": "wynajmować",
              "lerntext": "wynajmować",
              "de": "mieten"
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "podpisywać",
              "lerntext": "podpisywać",
              "de": "unterschreiben"
            },
            {
              "schrift": "gotować",
              "lerntext": "gotować",
              "de": "kochen"
            },
            {
              "schrift": "przepraszać",
              "lerntext": "przepraszać",
              "de": "sich entschuldigen"
            },
            {
              "schrift": "dziękować",
              "lerntext": "dziękować",
              "de": "danken"
            },
            {
              "schrift": "trzymać",
              "lerntext": "trzymać",
              "de": "halten"
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "załatwiać",
              "lerntext": "załatwiać",
              "de": "erledigen"
            },
            {
              "schrift": "wracać",
              "lerntext": "wracać",
              "de": "zurückkehren"
            },
            {
              "schrift": "prowadzić",
              "lerntext": "prowadzić",
              "de": "fahren, führen"
            },
            {
              "schrift": "zmieniać",
              "lerntext": "zmieniać",
              "de": "ändern"
            },
            {
              "schrift": "sprzątać",
              "lerntext": "sprzątać",
              "de": "aufräumen"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "16.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "witać",
              "lerntext": "witać",
              "de": "begrüssen"
            },
            {
              "schrift": "opowiadać",
              "lerntext": "opowiadać",
              "de": "erzählen"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "16.9"
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
        "id": "16.10"
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
          "schrift": "to bardzo [Slot]",
          "lerntext": "to bardzo [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "darmowy",
              "lerntext": "darmowy",
              "de": "kostenlos"
            },
            {
              "schrift": "pełny",
              "lerntext": "pełny",
              "de": "voll"
            },
            {
              "schrift": "pusty",
              "lerntext": "pusty",
              "de": "leer"
            },
            {
              "schrift": "wolny",
              "lerntext": "wolny",
              "de": "frei, langsam"
            },
            {
              "schrift": "zajęty",
              "lerntext": "zajęty",
              "de": "besetzt"
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
          "schrift": "to bardzo [Slot]",
          "lerntext": "to bardzo [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "zdrowy",
              "lerntext": "zdrowy",
              "de": "gesund"
            },
            {
              "schrift": "sympatyczny",
              "lerntext": "sympatyczny",
              "de": "sympathisch"
            },
            {
              "schrift": "fajny",
              "lerntext": "fajny",
              "de": "cool, nett"
            },
            {
              "schrift": "szybki",
              "lerntext": "szybki",
              "de": "schnell"
            },
            {
              "schrift": "świeży",
              "lerntext": "świeży",
              "de": "frisch"
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
          "schrift": "to bardzo [Slot]",
          "lerntext": "to bardzo [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "słony",
              "lerntext": "słony",
              "de": "salzig"
            },
            {
              "schrift": "ostry",
              "lerntext": "ostry",
              "de": "scharf"
            },
            {
              "schrift": "smaczny",
              "lerntext": "smaczny",
              "de": "lecker"
            },
            {
              "schrift": "polski",
              "lerntext": "polski",
              "de": "polnisch"
            },
            {
              "schrift": "niemiecki",
              "lerntext": "niemiecki",
              "de": "deutsch"
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
          "schrift": "to bardzo [Slot]",
          "lerntext": "to bardzo [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "angielski",
              "lerntext": "angielski",
              "de": "englisch"
            },
            {
              "schrift": "poprzedni",
              "lerntext": "poprzedni",
              "de": "voriger"
            },
            {
              "schrift": "bezpieczny",
              "lerntext": "bezpieczny",
              "de": "sicher"
            },
            {
              "schrift": "następny",
              "lerntext": "następny",
              "de": "nächster"
            },
            {
              "schrift": "dobry",
              "lerntext": "dobry",
              "de": "gut"
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
          "schrift": "to bardzo [Slot]",
          "lerntext": "to bardzo [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "prawdziwy",
              "lerntext": "prawdziwy",
              "de": "wahr, echt"
            },
            {
              "schrift": "zły",
              "lerntext": "zły",
              "de": "schlecht, böse"
            },
            {
              "schrift": "ładny",
              "lerntext": "ładny",
              "de": "hübsch"
            },
            {
              "schrift": "gorący",
              "lerntext": "gorący",
              "de": "heiß"
            },
            {
              "schrift": "możliwy",
              "lerntext": "możliwy",
              "de": "möglich"
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
          "schrift": "to bardzo [Slot]",
          "lerntext": "to bardzo [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "zagraniczny",
              "lerntext": "zagraniczny",
              "de": "ausländisch"
            }
          ]
        ],
        "newCount": 1,
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mało",
              "lerntext": "mało",
              "de": "wenig"
            },
            {
              "schrift": "trochę",
              "lerntext": "trochę",
              "de": "ein bisschen"
            },
            {
              "schrift": "więcej",
              "lerntext": "więcej",
              "de": "mehr"
            },
            {
              "schrift": "mniej",
              "lerntext": "mniej",
              "de": "weniger"
            },
            {
              "schrift": "rzadko",
              "lerntext": "rzadko",
              "de": "selten"
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "jeszcze",
              "lerntext": "jeszcze",
              "de": "noch"
            },
            {
              "schrift": "naprawdę",
              "lerntext": "naprawdę",
              "de": "wirklich"
            },
            {
              "schrift": "wystarczy",
              "lerntext": "wystarczy",
              "de": "genug"
            },
            {
              "schrift": "prawie",
              "lerntext": "prawie",
              "de": "fast"
            },
            {
              "schrift": "dokładnie",
              "lerntext": "dokładnie",
              "de": "genau"
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "znowu",
              "lerntext": "znowu",
              "de": "wieder"
            },
            {
              "schrift": "w środku",
              "lerntext": "w środku",
              "de": "drinnen"
            },
            {
              "schrift": "w domu",
              "lerntext": "w domu",
              "de": "zu Hause"
            },
            {
              "schrift": "nawet",
              "lerntext": "nawet",
              "de": "sogar"
            },
            {
              "schrift": "wreszcie",
              "lerntext": "wreszcie",
              "de": "endlich"
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "niestety",
              "lerntext": "niestety",
              "de": "leider"
            },
            {
              "schrift": "chętnie",
              "lerntext": "chętnie",
              "de": "gerne"
            },
            {
              "schrift": "prosto",
              "lerntext": "prosto",
              "de": "geradeaus"
            },
            {
              "schrift": "daleko",
              "lerntext": "daleko",
              "de": "weit"
            },
            {
              "schrift": "późno",
              "lerntext": "późno",
              "de": "spät"
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "na zewnątrz",
              "lerntext": "na zewnątrz",
              "de": "draußen"
            },
            {
              "schrift": "wszędzie",
              "lerntext": "wszędzie",
              "de": "überall"
            },
            {
              "schrift": "wcześnie",
              "lerntext": "wcześnie",
              "de": "früh"
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
          "schrift": "to dla [Slot]",
          "lerntext": "to dla [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ono",
              "lerntext": "ono",
              "de": "es"
            },
            {
              "schrift": "ci",
              "lerntext": "ci",
              "de": "dir"
            },
            {
              "schrift": "jej",
              "lerntext": "jej",
              "de": "ihr"
            },
            {
              "schrift": "ich",
              "lerntext": "ich",
              "de": "ihnen, ihr"
            },
            {
              "schrift": "siebie",
              "lerntext": "siebie",
              "de": "sich selbst"
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
          "schrift": "to dla [Slot]",
          "lerntext": "to dla [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wasz",
              "lerntext": "wasz",
              "de": "euer"
            },
            {
              "schrift": "swój",
              "lerntext": "swój",
              "de": "sein eigener"
            },
            {
              "schrift": "tamten",
              "lerntext": "tamten",
              "de": "jener"
            },
            {
              "schrift": "ktoś",
              "lerntext": "ktoś",
              "de": "jemand"
            },
            {
              "schrift": "nikt",
              "lerntext": "nikt",
              "de": "niemand"
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
          "schrift": "to dla [Slot]",
          "lerntext": "to dla [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nic",
              "lerntext": "nic",
              "de": "nichts"
            },
            {
              "schrift": "inny",
              "lerntext": "inny",
              "de": "anderer"
            },
            {
              "schrift": "taki",
              "lerntext": "taki",
              "de": "solcher"
            },
            {
              "schrift": "każdy",
              "lerntext": "każdy",
              "de": "jeder"
            },
            {
              "schrift": "sam",
              "lerntext": "sam",
              "de": "selbst, allein"
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
          "schrift": "to dla [Slot]",
          "lerntext": "to dla [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "obaj",
              "lerntext": "obaj",
              "de": "beide"
            },
            {
              "schrift": "siebie nawzajem",
              "lerntext": "siebie nawzajem",
              "de": "einander"
            },
            {
              "schrift": "oni",
              "lerntext": "oni",
              "de": "sie (Mehrzahl, männlich)"
            },
            {
              "schrift": "one",
              "lerntext": "one",
              "de": "sie (Mehrzahl, nicht männlich)"
            }
          ]
        ],
        "newCount": 4,
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
              "schrift": "trzydzieści",
              "lerntext": "trzydzieści",
              "de": "dreissig"
            },
            {
              "schrift": "milion",
              "lerntext": "milion",
              "de": "Million"
            },
            {
              "schrift": "pierwszy",
              "lerntext": "pierwszy",
              "de": "erster"
            },
            {
              "schrift": "drugi",
              "lerntext": "drugi",
              "de": "zweiter"
            },
            {
              "schrift": "trzeci",
              "lerntext": "trzeci",
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
              "schrift": "ostatni",
              "lerntext": "ostatni",
              "de": "letzter"
            },
            {
              "schrift": "pół",
              "lerntext": "pół",
              "de": "halb"
            },
            {
              "schrift": "podwójny",
              "lerntext": "podwójny",
              "de": "doppelt"
            },
            {
              "schrift": "para",
              "lerntext": "para",
              "de": "Paar"
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
    "title": "Weitere Bindewörter",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "przyjdę [Slot] mogę",
          "lerntext": "przyjdę [Slot] mogę"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "jeśli",
              "lerntext": "jeśli",
              "de": "wenn, falls"
            },
            {
              "schrift": "gdy",
              "lerntext": "gdy",
              "de": "als, wenn"
            },
            {
              "schrift": "niż",
              "lerntext": "niż",
              "de": "als (Vergleich)"
            },
            {
              "schrift": "dlatego",
              "lerntext": "dlatego",
              "de": "deshalb"
            },
            {
              "schrift": "jednak",
              "lerntext": "jednak",
              "de": "jedoch"
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
          "schrift": "przyjdę [Slot] mogę",
          "lerntext": "przyjdę [Slot] mogę"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "oraz",
              "lerntext": "oraz",
              "de": "sowie"
            },
            {
              "schrift": "ponieważ",
              "lerntext": "ponieważ",
              "de": "weil (förmlich)"
            },
            {
              "schrift": "czyli",
              "lerntext": "czyli",
              "de": "das heißt"
            }
          ]
        ],
        "newCount": 3,
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
    "title": "Weitere Präpositionen",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem"
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "po",
              "lerntext": "po",
              "de": "nach"
            },
            {
              "schrift": "wokół",
              "lerntext": "wokół",
              "de": "um herum"
            },
            {
              "schrift": "wzdłuż",
              "lerntext": "wzdłuż",
              "de": "entlang"
            },
            {
              "schrift": "zamiast",
              "lerntext": "zamiast",
              "de": "anstatt"
            },
            {
              "schrift": "blisko",
              "lerntext": "blisko",
              "de": "nahe"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "22.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem"
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nad",
              "lerntext": "nad",
              "de": "über"
            },
            {
              "schrift": "oprócz",
              "lerntext": "oprócz",
              "de": "außer"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "22.2"
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
        "id": "22.3"
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
          "schrift": "[Slot] to jest?",
          "lerntext": "[Slot] to jest?"
        },
        "frameDe": "[Slot] ist es?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ile",
              "lerntext": "ile",
              "de": "wie viel, wie viele"
            },
            {
              "schrift": "jaki",
              "lerntext": "jaki",
              "de": "was für ein"
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
