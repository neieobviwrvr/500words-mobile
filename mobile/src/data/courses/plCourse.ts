// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_pl.py
// Neu bauen: python bauplan.py pl --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 37 Module, 274 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const POLISH_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja jestem [Slot]",
          "lerntext": "ja jestem [Slot]",
          "wortarten": {
            "ja": "p",
            "jestem": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "zadowolony",
              "lerntext": "zadowolony",
              "de": "zufrieden",
              "c": "a"
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "jestem",
            "lerntext": "jestem",
            "de": "sein",
            "c": "v"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja jestem [Slot]",
          "lerntext": "ja jestem [Slot]",
          "wortarten": {
            "ja": "p",
            "jestem": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gotowy",
              "lerntext": "gotowy",
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
          "schrift": "my jesteśmy [Slot]",
          "lerntext": "my jesteśmy [Slot]",
          "wortarten": {
            "my": "p",
            "jesteśmy": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "wy",
            "lerntext": "wy",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "policja",
              "lerntext": "policja",
              "de": "Polizei",
              "c": "n"
            },
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)",
              "c": "n"
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
              "de": "Kind",
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
          "schrift": "on jest bardzo [Slot]",
          "lerntext": "on jest bardzo [Slot]",
          "wortarten": {
            "on": "p",
            "jest": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "miły",
              "lerntext": "miły",
              "de": "nett",
              "c": "a"
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "śmieszny",
              "lerntext": "śmieszny",
              "de": "lustig",
              "c": "a"
            },
            {
              "schrift": "nudny",
              "lerntext": "nudny",
              "de": "langweilig",
              "c": "a"
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a"
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
          "lerntext": "on jest bardzo [Slot]",
          "wortarten": {
            "on": "p",
            "jest": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "szczęśliwy",
              "lerntext": "szczęśliwy",
              "de": "glücklich",
              "c": "a"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "1.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "on jest bardzo [Slot]",
          "lerntext": "on jest bardzo [Slot]",
          "wortarten": {
            "on": "p",
            "jest": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "miły",
              "lerntext": "miły",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "śmieszny",
              "lerntext": "śmieszny",
              "de": "lustig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nudny",
              "lerntext": "nudny",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szczęśliwy",
              "lerntext": "szczęśliwy",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "1.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja jestem [Slot]",
          "lerntext": "ja jestem [Slot]",
          "wortarten": {
            "ja": "p",
            "jestem": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zadowolony",
              "lerntext": "zadowolony",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gotowy",
              "lerntext": "gotowy",
              "de": "bereit",
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
          "schrift": "on jest bardzo [Slot]",
          "lerntext": "on jest bardzo [Slot]",
          "wortarten": {
            "on": "p",
            "jest": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "miły",
              "lerntext": "miły",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "śmieszny",
              "lerntext": "śmieszny",
              "de": "lustig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nudny",
              "lerntext": "nudny",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szczęśliwy",
              "lerntext": "szczęśliwy",
              "de": "glücklich",
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
          "schrift": "ja jestem [Slot]",
          "lerntext": "ja jestem [Slot]",
          "wortarten": {
            "ja": "p",
            "jestem": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zadowolony",
              "lerntext": "zadowolony",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gotowy",
              "lerntext": "gotowy",
              "de": "bereit",
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
        "id": "1.10"
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
          "schrift": "to jest [Slot]",
          "lerntext": "to jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "drzwi",
              "lerntext": "drzwi",
              "de": "Tür",
              "c": "n"
            },
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "policja",
              "lerntext": "policja",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot]",
          "lerntext": "to jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel",
              "c": "n"
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
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
          "schrift": "to jest [Slot]",
          "lerntext": "to jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "książka",
              "lerntext": "książka",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "łóżko",
              "lerntext": "łóżko",
              "de": "Bett",
              "c": "n"
            },
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon",
              "c": "n"
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kuchnia",
              "lerntext": "kuchnia",
              "de": "Küche",
              "c": "n"
            },
            {
              "schrift": "drzwi",
              "lerntext": "drzwi",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "policja",
              "lerntext": "policja",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
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
            "schrift": "tutaj",
            "lerntext": "tutaj",
            "de": "hier"
          }
        ],
        "id": "2.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stół",
              "lerntext": "stół",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dom",
              "lerntext": "dom",
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "okno",
              "lerntext": "okno",
              "de": "Fenster",
              "c": "n"
            },
            {
              "schrift": "szklanka",
              "lerntext": "szklanka",
              "de": "Glas",
              "c": "n"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "łóżko",
              "lerntext": "łóżko",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "książka",
              "lerntext": "książka",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
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
          "schrift": "ja mam [Slot]",
          "lerntext": "ja mam [Slot]",
          "wortarten": {
            "ja": "p",
            "mam": "v"
          }
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "rodzina",
              "lerntext": "rodzina",
              "de": "Familie",
              "c": "n"
            },
            {
              "schrift": "córka",
              "lerntext": "córka",
              "de": "Tochter",
              "c": "n"
            },
            {
              "schrift": "mieszkanie",
              "lerntext": "mieszkanie",
              "de": "Wohnung",
              "c": "n"
            },
            {
              "schrift": "ręka",
              "lerntext": "ręka",
              "de": "Hand",
              "c": "n"
            },
            {
              "schrift": "kuchnia",
              "lerntext": "kuchnia",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "drzwi",
              "lerntext": "drzwi",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "policja",
              "lerntext": "policja",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
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
            "schrift": "mam",
            "lerntext": "mam",
            "de": "haben",
            "c": "v"
          }
        ],
        "id": "2.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja mam [Slot]",
          "lerntext": "ja mam [Slot]",
          "wortarten": {
            "ja": "p",
            "mam": "v"
          }
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "syn",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n"
            },
            {
              "schrift": "ciało",
              "lerntext": "ciało",
              "de": "Körper",
              "c": "n"
            },
            {
              "schrift": "usta",
              "lerntext": "usta",
              "de": "Mund",
              "c": "n"
            },
            {
              "schrift": "stół",
              "lerntext": "stół",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
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
          "schrift": "ja mam [Slot]",
          "lerntext": "ja mam [Slot]",
          "wortarten": {
            "ja": "p",
            "mam": "v"
          }
        },
        "frameDe": "ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "samochód",
              "lerntext": "samochód",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "noga",
              "lerntext": "noga",
              "de": "Bein",
              "c": "n"
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szklanka",
              "lerntext": "szklanka",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "okno",
              "lerntext": "okno",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dom",
              "lerntext": "dom",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "łóżko",
              "lerntext": "łóżko",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "książka",
              "lerntext": "książka",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
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
          "schrift": "to jest moja [Slot]",
          "lerntext": "to jest moja [Slot]",
          "wortarten": {
            "jest": "v",
            "moja": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mój",
            "lerntext": "mój",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "twój",
            "lerntext": "twój",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nasz",
            "lerntext": "nasz",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "usta",
              "lerntext": "usta",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "córka",
              "lerntext": "córka",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mieszkanie",
              "lerntext": "mieszkanie",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "samochód",
              "lerntext": "samochód",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "syn",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ciało",
              "lerntext": "ciało",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noga",
              "lerntext": "noga",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rodzina",
              "lerntext": "rodzina",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ręka",
              "lerntext": "ręka",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot] dom",
          "lerntext": "to jest [Slot] dom",
          "wortarten": {
            "jest": "v",
            "dom": "n"
          }
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mój",
            "lerntext": "mój",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "twój",
            "lerntext": "twój",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nasz",
            "lerntext": "nasz",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jego",
              "lerntext": "jego",
              "de": "sein",
              "c": "p"
            },
            {
              "schrift": "wy",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ja",
              "lerntext": "ja",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "my",
              "lerntext": "my",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ty",
              "lerntext": "ty",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ona",
              "lerntext": "ona",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "er",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.11"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to są [Slot] książki",
          "lerntext": "to są [Slot] książki",
          "wortarten": {
            "są": "v"
          }
        },
        "frameDe": "Das sind [Slot] Bücher.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "diese",
              "c": "p"
            },
            {
              "schrift": "wszyscy",
              "lerntext": "wszyscy",
              "de": "alle",
              "c": "p"
            },
            {
              "schrift": "wy",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mój",
              "lerntext": "mój",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "twój",
              "lerntext": "twój",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "jego",
              "lerntext": "jego",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nasz",
              "lerntext": "nasz",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ja",
              "lerntext": "ja",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "my",
              "lerntext": "my",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ty",
              "lerntext": "ty",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ona",
              "lerntext": "ona",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "er",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] jest tutaj",
          "lerntext": "[Slot] jest tutaj",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ten",
              "lerntext": "ten",
              "de": "dieser",
              "c": "p"
            },
            {
              "schrift": "jego",
              "lerntext": "jego",
              "de": "sein",
              "c": "p"
            },
            {
              "schrift": "wam",
              "lerntext": "wam",
              "de": "euch",
              "c": "p"
            },
            {
              "schrift": "wy",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "diese",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wszyscy",
              "lerntext": "wszyscy",
              "de": "alle",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mój",
              "lerntext": "mój",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "twój",
              "lerntext": "twój",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nasz",
              "lerntext": "nasz",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ja",
              "lerntext": "ja",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "my",
              "lerntext": "my",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ty",
              "lerntext": "ty",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ona",
              "lerntext": "ona",
              "de": "sie",
              "c": "p",
              "wieder": true
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
        "id": "2.13"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest moja [Slot]",
          "lerntext": "to jest moja [Slot]",
          "wortarten": {
            "jest": "v",
            "moja": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mój",
            "lerntext": "mój",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "twój",
            "lerntext": "twój",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nasz",
            "lerntext": "nasz",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "usta",
              "lerntext": "usta",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "córka",
              "lerntext": "córka",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mieszkanie",
              "lerntext": "mieszkanie",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "samochód",
              "lerntext": "samochód",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "syn",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ciało",
              "lerntext": "ciało",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noga",
              "lerntext": "noga",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rodzina",
              "lerntext": "rodzina",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ręka",
              "lerntext": "ręka",
              "de": "Hand",
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
          "schrift": "[Slot] jest tutaj",
          "lerntext": "[Slot] jest tutaj",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ten",
              "lerntext": "ten",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wam",
              "lerntext": "wam",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wy",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "diese",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wszyscy",
              "lerntext": "wszyscy",
              "de": "alle",
              "c": "p",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stół",
              "lerntext": "stół",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "okno",
              "lerntext": "okno",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szklanka",
              "lerntext": "szklanka",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n",
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
          "schrift": "ja chcę [Slot]",
          "lerntext": "ja chcę [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "herbata",
              "lerntext": "herbata",
              "de": "Tee",
              "c": "n"
            },
            {
              "schrift": "piwo",
              "lerntext": "piwo",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "wino",
              "lerntext": "wino",
              "de": "Wein",
              "c": "n"
            },
            {
              "schrift": "kuchnia",
              "lerntext": "kuchnia",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "usta",
              "lerntext": "usta",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "łóżko",
              "lerntext": "łóżko",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "drzwi",
              "lerntext": "drzwi",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szklanka",
              "lerntext": "szklanka",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "córka",
              "lerntext": "córka",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "chcę",
            "lerntext": "chcę",
            "de": "wollen",
            "c": "v"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę [Slot]",
          "lerntext": "ja chcę [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jedzenie",
              "lerntext": "jedzenie",
              "de": "Essen",
              "c": "n"
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "Käse",
              "c": "n"
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "herbata",
              "lerntext": "herbata",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piwo",
              "lerntext": "piwo",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wino",
              "lerntext": "wino",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mieszkanie",
              "lerntext": "mieszkanie",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "samochód",
              "lerntext": "samochód",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "syn",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kuchnia",
              "lerntext": "kuchnia",
              "de": "Küche",
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
          "schrift": "ja potrzebuję [Slot]",
          "lerntext": "ja potrzebuję [Slot]",
          "wortarten": {
            "ja": "p",
            "potrzebuję": "v"
          }
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pomoc",
              "lerntext": "pomoc",
              "de": "Hilfe",
              "c": "n"
            },
            {
              "schrift": "czas",
              "lerntext": "czas",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "sól",
              "lerntext": "sól",
              "de": "Salz",
              "c": "n"
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jedzenie",
              "lerntext": "jedzenie",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wino",
              "lerntext": "wino",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piwo",
              "lerntext": "piwo",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "herbata",
              "lerntext": "herbata",
              "de": "Tee",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "potrzebuję",
            "lerntext": "potrzebuję",
            "de": "brauchen",
            "c": "v"
          }
        ],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja poproszę [Slot]",
          "lerntext": "ja poproszę [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "śniadanie",
              "lerntext": "śniadanie",
              "de": "Frühstück",
              "c": "n"
            },
            {
              "schrift": "obiad",
              "lerntext": "obiad",
              "de": "Mittagessen",
              "c": "n"
            },
            {
              "schrift": "kolacja",
              "lerntext": "kolacja",
              "de": "Abendessen",
              "c": "n"
            },
            {
              "schrift": "owoce",
              "lerntext": "owoce",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sól",
              "lerntext": "sól",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jedzenie",
              "lerntext": "jedzenie",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noga",
              "lerntext": "noga",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dom",
              "lerntext": "dom",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piwo",
              "lerntext": "piwo",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "okno",
              "lerntext": "okno",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "książka",
              "lerntext": "książka",
              "de": "Buch",
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
          "schrift": "ja jem [Slot]",
          "lerntext": "ja jem [Slot]",
          "wortarten": {
            "ja": "p",
            "jem": "v"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mięso",
              "lerntext": "mięso",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "warzywa",
              "lerntext": "warzywa",
              "de": "Gemüse",
              "c": "n"
            },
            {
              "schrift": "kolacja",
              "lerntext": "kolacja",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "obiad",
              "lerntext": "obiad",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomoc",
              "lerntext": "pomoc",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śniadanie",
              "lerntext": "śniadanie",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "owoce",
              "lerntext": "owoce",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "czas",
              "lerntext": "czas",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sól",
              "lerntext": "sól",
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
            "schrift": "jem",
            "lerntext": "jem",
            "de": "essen",
            "c": "v"
          },
          {
            "schrift": "piję",
            "lerntext": "piję",
            "de": "trinken",
            "c": "v"
          }
        ],
        "id": "3.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja jem [Slot]",
          "lerntext": "ja jem [Slot]",
          "wortarten": {
            "ja": "p",
            "jem": "v"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mięso",
              "lerntext": "mięso",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "warzywa",
              "lerntext": "warzywa",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kolacja",
              "lerntext": "kolacja",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "obiad",
              "lerntext": "obiad",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomoc",
              "lerntext": "pomoc",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śniadanie",
              "lerntext": "śniadanie",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "owoce",
              "lerntext": "owoce",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "czas",
              "lerntext": "czas",
              "de": "Zeit",
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
          "schrift": "ja jem [Slot]",
          "lerntext": "ja jem [Slot]",
          "wortarten": {
            "ja": "p",
            "jem": "v"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mięso",
              "lerntext": "mięso",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "warzywa",
              "lerntext": "warzywa",
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
          "schrift": "ja nie jestem [Slot]",
          "lerntext": "ja nie jestem [Slot]",
          "wortarten": {
            "ja": "p",
            "jestem": "v"
          }
        },
        "frameDe": "ich bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
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
              "schrift": "bardzo",
              "lerntext": "bardzo",
              "de": "sehr",
              "wieder": true
            },
            {
              "schrift": "tutaj",
              "lerntext": "tutaj",
              "de": "hier",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "nie",
            "lerntext": "nie",
            "de": "nicht"
          },
          {
            "schrift": "tak",
            "lerntext": "tak",
            "de": "ja"
          },
          {
            "schrift": "nie",
            "lerntext": "nie",
            "de": "nicht"
          }
        ],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "czy jesteś [Slot]?",
          "lerntext": "czy jesteś [Slot]?",
          "wortarten": {
            "jesteś": "v"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "wy",
            "lerntext": "wy",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu",
              "c": "a"
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
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "tak",
              "lerntext": "tak",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "pewnie",
              "lerntext": "pewnie",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "śmieszny",
              "lerntext": "śmieszny",
              "de": "lustig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szczęśliwy",
              "lerntext": "szczęśliwy",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nudny",
              "lerntext": "nudny",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "miły",
              "lerntext": "miły",
              "de": "nett",
              "c": "a",
              "wieder": true
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
          "lerntext": "[Slot] to jest?",
          "wortarten": {
            "jest?": "v"
          }
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
              "de": "welcher",
              "c": "p"
            },
            {
              "schrift": "coś",
              "lerntext": "coś",
              "de": "etwas",
              "c": "p"
            },
            {
              "schrift": "wszystko",
              "lerntext": "wszystko",
              "de": "alles",
              "c": "p"
            },
            {
              "schrift": "ten",
              "lerntext": "ten",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wam",
              "lerntext": "wam",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "twój",
              "lerntext": "twój",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nasz",
              "lerntext": "nasz",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wszyscy",
              "lerntext": "wszyscy",
              "de": "alle",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "diese",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mój",
              "lerntext": "mój",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wy",
              "lerntext": "wy",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "jego",
              "lerntext": "jego",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "my",
              "lerntext": "my",
              "de": "wir",
              "c": "p",
              "wieder": true
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
        "kind": "frame",
        "frame": {
          "schrift": "czy jesteś [Slot]?",
          "lerntext": "czy jesteś [Slot]?",
          "wortarten": {
            "jesteś": "v"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "wy",
            "lerntext": "wy",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dobrze",
              "lerntext": "dobrze",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "źle",
              "lerntext": "źle",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "ważny",
              "lerntext": "ważny",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tak",
              "lerntext": "tak",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "pewnie",
              "lerntext": "pewnie",
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
          "schrift": "[Slot] to jest?",
          "lerntext": "[Slot] to jest?",
          "wortarten": {
            "jest?": "v"
          }
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
              "de": "welcher",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "coś",
              "lerntext": "coś",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wszystko",
              "lerntext": "wszystko",
              "de": "alles",
              "c": "p",
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
          "schrift": "czy jesteś [Slot]?",
          "lerntext": "czy jesteś [Slot]?",
          "wortarten": {
            "jesteś": "v"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "wy",
            "lerntext": "wy",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dobrze",
              "lerntext": "dobrze",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "źle",
              "lerntext": "źle",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "ważny",
              "lerntext": "ważny",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tak",
              "lerntext": "tak",
              "de": "ja",
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
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] to jest?",
          "lerntext": "[Slot] to jest?",
          "wortarten": {
            "jest?": "v"
          }
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
              "de": "welcher",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "coś",
              "lerntext": "coś",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wszystko",
              "lerntext": "wszystko",
              "de": "alles",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "4.7"
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
        "id": "4.8"
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
          "schrift": "gdzie jest [Slot]?",
          "lerntext": "gdzie jest [Slot]?",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Wo gibt es eine [Slot]?",
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
              "schrift": "toaleta",
              "lerntext": "toaleta",
              "de": "Toilette",
              "c": "n"
            },
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "ulica",
              "lerntext": "ulica",
              "de": "Straße",
              "c": "n"
            },
            {
              "schrift": "rodzina",
              "lerntext": "rodzina",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomoc",
              "lerntext": "pomoc",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "czas",
              "lerntext": "czas",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ręka",
              "lerntext": "ręka",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "drzwi",
              "lerntext": "drzwi",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mieszkanie",
              "lerntext": "mieszkanie",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "córka",
              "lerntext": "córka",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
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
          "lerntext": "gdzie jest [Slot]?",
          "wortarten": {
            "jest": "v"
          }
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
              "de": "Laden",
              "c": "n"
            },
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "herbata",
              "lerntext": "herbata",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stół",
              "lerntext": "stół",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wino",
              "lerntext": "wino",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ciało",
              "lerntext": "ciało",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "syn",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
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
          "schrift": "gdzie jest [Slot]?",
          "lerntext": "gdzie jest [Slot]?",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Wo gibt es ein [Slot]?",
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
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "kolacja",
              "lerntext": "kolacja",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "obiad",
              "lerntext": "obiad",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jedzenie",
              "lerntext": "jedzenie",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sól",
              "lerntext": "sól",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "warzywa",
              "lerntext": "warzywa",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śniadanie",
              "lerntext": "śniadanie",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mięso",
              "lerntext": "mięso",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "owoce",
              "lerntext": "owoce",
              "de": "Obst",
              "c": "n",
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
          "schrift": "czy tutaj jest [Slot]?",
          "lerntext": "czy tutaj jest [Slot]?",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Gibt es hier eine [Slot]?",
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
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "toaleta",
              "lerntext": "toaleta",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ulica",
              "lerntext": "ulica",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rodzina",
              "lerntext": "rodzina",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomoc",
              "lerntext": "pomoc",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kuchnia",
              "lerntext": "kuchnia",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "policja",
              "lerntext": "policja",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "czas",
              "lerntext": "czas",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "czy",
            "lerntext": "czy",
            "de": "ob (Fragepartikel)"
          }
        ],
        "id": "5.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "czy tutaj jest [Slot]?",
          "lerntext": "czy tutaj jest [Slot]?",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Gibt es hier einen [Slot]?",
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
              "schrift": "rynek",
              "lerntext": "rynek",
              "de": "Markt",
              "c": "n"
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sklep",
              "lerntext": "sklep",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "herbata",
              "lerntext": "herbata",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stół",
              "lerntext": "stół",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "usta",
              "lerntext": "usta",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wino",
              "lerntext": "wino",
              "de": "Wein",
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
          "schrift": "czy tutaj jest [Slot]?",
          "lerntext": "czy tutaj jest [Slot]?",
          "wortarten": {
            "jest": "v"
          }
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
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szklanka",
              "lerntext": "szklanka",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kolacja",
              "lerntext": "kolacja",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "obiad",
              "lerntext": "obiad",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jedzenie",
              "lerntext": "jedzenie",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noga",
              "lerntext": "noga",
              "de": "Bein",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "5.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] jest tutaj",
          "lerntext": "[Slot] jest tutaj",
          "wortarten": {
            "jest": "v"
          }
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
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "droga",
              "lerntext": "droga",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "las",
              "lerntext": "las",
              "de": "Wald",
              "c": "n"
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rynek",
              "lerntext": "rynek",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "toaleta",
              "lerntext": "toaleta",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ulica",
              "lerntext": "ulica",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sklep",
              "lerntext": "sklep",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule",
              "c": "n",
              "wieder": true
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
            "de": "bei"
          }
        ],
        "id": "5.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem",
          "wortarten": {
            "jest": "v"
          }
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
            "de": "zu"
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
              "schrift": "przez",
              "lerntext": "przez",
              "de": "durch"
            },
            {
              "schrift": "przy",
              "lerntext": "przy",
              "de": "bei",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
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
            "de": "zu"
          },
          {
            "schrift": "od",
            "lerntext": "od",
            "de": "von"
          },
          {
            "schrift": "z",
            "lerntext": "z",
            "de": "mit"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "über"
          },
          {
            "schrift": "od",
            "lerntext": "od",
            "de": "von"
          },
          {
            "schrift": "do",
            "lerntext": "do",
            "de": "zu"
          }
        ],
        "id": "5.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem",
          "wortarten": {
            "jest": "v"
          }
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
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "przeciwko",
              "lerntext": "przeciwko",
              "de": "gegen"
            },
            {
              "schrift": "przy",
              "lerntext": "przy",
              "de": "bei"
            },
            {
              "schrift": "pod",
              "lerntext": "pod",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "między",
              "lerntext": "między",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "przed",
              "lerntext": "przed",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "obok",
              "lerntext": "obok",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "przez",
              "lerntext": "przez",
              "de": "durch",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "5.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] jest tutaj",
          "lerntext": "[Slot] jest tutaj",
          "wortarten": {
            "jest": "v"
          }
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
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "droga",
              "lerntext": "droga",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "las",
              "lerntext": "las",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rynek",
              "lerntext": "rynek",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus",
              "c": "n",
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
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem",
          "wortarten": {
            "jest": "v"
          }
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
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "przeciwko",
              "lerntext": "przeciwko",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "pod",
              "lerntext": "pod",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "między",
              "lerntext": "między",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "przed",
              "lerntext": "przed",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "obok",
              "lerntext": "obok",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "przez",
              "lerntext": "przez",
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
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] jest tutaj",
          "lerntext": "[Slot] jest tutaj",
          "wortarten": {
            "jest": "v"
          }
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
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "droga",
              "lerntext": "droga",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "las",
              "lerntext": "las",
              "de": "Wald",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "5.12"
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
        "id": "5.13"
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
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "tani",
              "lerntext": "tani",
              "de": "billig",
              "c": "a"
            },
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ważny",
              "lerntext": "ważny",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zadowolony",
              "lerntext": "zadowolony",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gotowy",
              "lerntext": "gotowy",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "śmieszny",
              "lerntext": "śmieszny",
              "de": "lustig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a",
              "wieder": true
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
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "wysoki",
              "lerntext": "wysoki",
              "de": "hoch",
              "c": "a"
            },
            {
              "schrift": "niski",
              "lerntext": "niski",
              "de": "niedrig",
              "c": "a"
            },
            {
              "schrift": "ciężki",
              "lerntext": "ciężki",
              "de": "schwer",
              "c": "a"
            },
            {
              "schrift": "lekki",
              "lerntext": "lekki",
              "de": "leicht",
              "c": "a"
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tani",
              "lerntext": "tani",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szczęśliwy",
              "lerntext": "szczęśliwy",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nudny",
              "lerntext": "nudny",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
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
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "jeden",
              "lerntext": "jeden",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "dwa",
              "lerntext": "dwa",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "trzy",
              "lerntext": "trzy",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "cztery",
              "lerntext": "cztery",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "pięć",
              "lerntext": "pięć",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "sześć",
              "lerntext": "sześć",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "siedem",
              "lerntext": "siedem",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "osiem",
              "lerntext": "osiem",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "dziewięć",
              "lerntext": "dziewięć",
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
              "schrift": "dziesięć",
              "lerntext": "dziesięć",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "jedenaście",
              "lerntext": "jedenaście",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "dwanaście",
              "lerntext": "dwanaście",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "trzynaście",
              "lerntext": "trzynaście",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "czternaście",
              "lerntext": "czternaście",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "piętnaście",
              "lerntext": "piętnaście",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "szesnaście",
              "lerntext": "szesnaście",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "siedemnaście",
              "lerntext": "siedemnaście",
              "de": "siebzehn",
              "wieder": true
            },
            {
              "schrift": "osiemnaście",
              "lerntext": "osiemnaście",
              "de": "achtzehn",
              "wieder": true
            },
            {
              "schrift": "dziewiętnaście",
              "lerntext": "dziewiętnaście",
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
              "schrift": "dwadzieścia",
              "lerntext": "dwadzieścia",
              "de": "zwanzig",
              "wieder": true
            },
            {
              "schrift": "czterdzieści",
              "lerntext": "czterdzieści",
              "de": "vierzig",
              "wieder": true
            },
            {
              "schrift": "pięćdziesiąt",
              "lerntext": "pięćdziesiąt",
              "de": "fünfzig",
              "wieder": true
            },
            {
              "schrift": "sześćdziesiąt",
              "lerntext": "sześćdziesiąt",
              "de": "sechzig",
              "wieder": true
            },
            {
              "schrift": "siedemdziesiąt",
              "lerntext": "siedemdziesiąt",
              "de": "siebzig",
              "wieder": true
            },
            {
              "schrift": "osiemdziesiąt",
              "lerntext": "osiemdziesiąt",
              "de": "achtzig",
              "wieder": true
            },
            {
              "schrift": "dziewięćdziesiąt",
              "lerntext": "dziewięćdziesiąt",
              "de": "neunzig",
              "wieder": true
            },
            {
              "schrift": "sto",
              "lerntext": "sto",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "tysiąc",
              "lerntext": "tysiąc",
              "de": "tausend",
              "wieder": true
            },
            {
              "schrift": "zero",
              "lerntext": "zero",
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
              "schrift": "jeden",
              "lerntext": "jeden",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "dwa",
              "lerntext": "dwa",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "trzy",
              "lerntext": "trzy",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "cztery",
              "lerntext": "cztery",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "pięć",
              "lerntext": "pięć",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "sześć",
              "lerntext": "sześć",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "siedem",
              "lerntext": "siedem",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "osiem",
              "lerntext": "osiem",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "dziewięć",
              "lerntext": "dziewięć",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "dziesięć",
              "lerntext": "dziesięć",
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
          "schrift": "ja mogę [Slot]",
          "lerntext": "ja mogę [Slot]",
          "wortarten": {
            "ja": "p",
            "mogę": "v"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren",
              "c": "v"
            },
            {
              "schrift": "pisać",
              "lerntext": "pisać",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "czytać",
              "lerntext": "czytać",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "pić",
              "lerntext": "pić",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebować",
              "lerntext": "potrzebować",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jeść",
              "lerntext": "jeść",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chcieć",
              "lerntext": "chcieć",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "być",
              "lerntext": "być",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mieć",
              "lerntext": "mieć",
              "de": "haben",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "mogę",
            "lerntext": "mogę",
            "de": "können",
            "c": "v"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja mogę [Slot]",
          "lerntext": "ja mogę [Slot]",
          "wortarten": {
            "ja": "p",
            "mogę": "v"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pomagać",
              "lerntext": "pomagać",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen",
              "c": "v"
            },
            {
              "schrift": "robić",
              "lerntext": "robić",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "powiedzieć",
              "lerntext": "powiedzieć",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "używać",
              "lerntext": "używać",
              "de": "benutzen",
              "c": "v"
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pisać",
              "lerntext": "pisać",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czytać",
              "lerntext": "czytać",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pić",
              "lerntext": "pić",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebować",
              "lerntext": "potrzebować",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jeść",
              "lerntext": "jeść",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chcieć",
              "lerntext": "chcieć",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "być",
              "lerntext": "być",
              "de": "sein",
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
          "schrift": "ja muszę [Slot]",
          "lerntext": "ja muszę [Slot]",
          "wortarten": {
            "ja": "p",
            "muszę": "v"
          }
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "płacić",
              "lerntext": "płacić",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "myć",
              "lerntext": "myć",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "pomagać",
              "lerntext": "pomagać",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "móc",
              "lerntext": "móc",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "robić",
              "lerntext": "robić",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "powiedzieć",
              "lerntext": "powiedzieć",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używać",
              "lerntext": "używać",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pić",
              "lerntext": "pić",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebować",
              "lerntext": "potrzebować",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "musieć",
            "lerntext": "musieć",
            "de": "müssen",
            "c": "v"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę [Slot]",
          "lerntext": "ja chcę [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören",
              "c": "v"
            },
            {
              "schrift": "patrzeć",
              "lerntext": "patrzeć",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "dzwonić",
              "lerntext": "dzwonić",
              "de": "anrufen",
              "c": "v"
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myć",
              "lerntext": "myć",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płacić",
              "lerntext": "płacić",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pomagać",
              "lerntext": "pomagać",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "móc",
              "lerntext": "móc",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "robić",
              "lerntext": "robić",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen",
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
          "schrift": "ja chcę [Slot]",
          "lerntext": "ja chcę [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "słyszeć",
              "lerntext": "słyszeć",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "widzieć",
              "lerntext": "widzieć",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "patrzeć",
              "lerntext": "patrzeć",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwonić",
              "lerntext": "dzwonić",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myć",
              "lerntext": "myć",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płacić",
              "lerntext": "płacić",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jeść",
              "lerntext": "jeść",
              "de": "essen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja nie mogę [Slot]",
          "lerntext": "ja nie mogę [Slot]",
          "wortarten": {
            "ja": "p",
            "mogę": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "tracić",
              "lerntext": "tracić",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "śmiać się",
              "lerntext": "śmiać się",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słyszeć",
              "lerntext": "słyszeć",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "widzieć",
              "lerntext": "widzieć",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "patrzeć",
              "lerntext": "patrzeć",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwonić",
              "lerntext": "dzwonić",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "dostaję",
            "lerntext": "dostaję",
            "de": "bekommen",
            "c": "v"
          }
        ],
        "id": "7.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja nie mogę [Slot]",
          "lerntext": "ja nie mogę [Slot]",
          "wortarten": {
            "ja": "p",
            "mogę": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "umierać",
              "lerntext": "umierać",
              "de": "sterben",
              "c": "v"
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "zamykać",
              "lerntext": "zamykać",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tracić",
              "lerntext": "tracić",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śmiać się",
              "lerntext": "śmiać się",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słyszeć",
              "lerntext": "słyszeć",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "powiedzieć",
              "lerntext": "powiedzieć",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "widzieć",
              "lerntext": "widzieć",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen",
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
          "schrift": "ja nie mogę [Slot]",
          "lerntext": "ja nie mogę [Slot]",
          "wortarten": {
            "ja": "p",
            "mogę": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "umierać",
              "lerntext": "umierać",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zamykać",
              "lerntext": "zamykać",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tracić",
              "lerntext": "tracić",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śmiać się",
              "lerntext": "śmiać się",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten",
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
          "schrift": "ja mogę [Slot]",
          "lerntext": "ja mogę [Slot]",
          "wortarten": {
            "ja": "p",
            "mogę": "v"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pisać",
              "lerntext": "pisać",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czytać",
              "lerntext": "czytać",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używać",
              "lerntext": "używać",
              "de": "benutzen",
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
        "kind": "frame",
        "frame": {
          "schrift": "ja nie mogę [Slot]",
          "lerntext": "ja nie mogę [Slot]",
          "wortarten": {
            "ja": "p",
            "mogę": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "umierać",
              "lerntext": "umierać",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zamykać",
              "lerntext": "zamykać",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "7.10"
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
        "id": "7.11"
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
          "schrift": "ja jadę [Slot]",
          "lerntext": "ja jadę [Slot]",
          "wortarten": {
            "ja": "p",
            "jadę": "v"
          }
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "c": "n"
            },
            {
              "schrift": "pociąg",
              "lerntext": "pociąg",
              "de": "Zug",
              "c": "n"
            },
            {
              "schrift": "samochód",
              "lerntext": "samochód",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "droga",
              "lerntext": "droga",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "toaleta",
              "lerntext": "toaleta",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rynek",
              "lerntext": "rynek",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ulica",
              "lerntext": "ulica",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sklep",
              "lerntext": "sklep",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "las",
              "lerntext": "las",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "miasto",
              "lerntext": "miasto",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "podróżuję",
            "lerntext": "podróżuję",
            "de": "reisen",
            "c": "v"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę [Slot] teraz",
          "lerntext": "ja chcę [Slot] teraz",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siedzieć",
              "lerntext": "siedzieć",
              "de": "sitzen",
              "c": "v"
            },
            {
              "schrift": "stać",
              "lerntext": "stać",
              "de": "stehen",
              "c": "v"
            },
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "podróżować",
              "lerntext": "podróżować",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dostawać",
              "lerntext": "dostawać",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mieć",
              "lerntext": "mieć",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chcieć",
              "lerntext": "chcieć",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pomagać",
              "lerntext": "pomagać",
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
            "schrift": "teraz",
            "lerntext": "teraz",
            "de": "jetzt"
          }
        ],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę [Slot] teraz",
          "lerntext": "ja chcę [Slot] teraz",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siedzieć",
              "lerntext": "siedzieć",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stać",
              "lerntext": "stać",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podróżować",
              "lerntext": "podróżować",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dostawać",
              "lerntext": "dostawać",
              "de": "bekommen",
              "c": "v",
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
          "schrift": "ja chcę [Slot] teraz",
          "lerntext": "ja chcę [Slot] teraz",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siedzieć",
              "lerntext": "siedzieć",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stać",
              "lerntext": "stać",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podróżować",
              "lerntext": "podróżować",
              "de": "reisen",
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
        "id": "8.5"
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
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "dzień",
              "lerntext": "dzień",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "tydzień",
              "lerntext": "tydzień",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "zaraz",
              "lerntext": "zaraz",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "pociąg",
              "lerntext": "pociąg",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nigdy",
              "lerntext": "nigdy",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "zawsze",
              "lerntext": "zawsze",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "razem",
              "lerntext": "razem",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "już",
              "lerntext": "już",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "czasami",
              "lerntext": "czasami",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "wkrótce",
              "lerntext": "wkrótce",
              "de": "bald",
              "wieder": true
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
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "minuta",
              "lerntext": "minuta",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tydzień",
              "lerntext": "tydzień",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "toaleta",
              "lerntext": "toaleta",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ulica",
              "lerntext": "ulica",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "miasto",
              "lerntext": "miasto",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ręka",
              "lerntext": "ręka",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "drzwi",
              "lerntext": "drzwi",
              "de": "Tür",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "9.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to trwa [Slot]",
          "lerntext": "to trwa [Slot]"
        },
        "frameDe": "Es dauert einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub",
              "c": "n"
            },
            {
              "schrift": "wieczór",
              "lerntext": "wieczór",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dzień",
              "lerntext": "dzień",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pociąg",
              "lerntext": "pociąg",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rynek",
              "lerntext": "rynek",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sklep",
              "lerntext": "sklep",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "las",
              "lerntext": "las",
              "de": "Wald",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel",
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
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "wczoraj",
              "lerntext": "wczoraj",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "wkrótce",
              "lerntext": "wkrótce",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "zawsze",
              "lerntext": "zawsze",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "nigdy",
              "lerntext": "nigdy",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "czasami",
              "lerntext": "czasami",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "już",
              "lerntext": "już",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "zaraz",
              "lerntext": "zaraz",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "razem",
              "lerntext": "razem",
              "de": "zusammen",
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
              "schrift": "wieczór",
              "lerntext": "wieczór",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dzień",
              "lerntext": "dzień",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tydzień",
              "lerntext": "tydzień",
              "de": "Woche",
              "c": "n",
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
          "schrift": "ja lubię [Slot]",
          "lerntext": "ja lubię [Slot]",
          "wortarten": {
            "ja": "p",
            "lubię": "v"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "słońce",
              "lerntext": "słońce",
              "de": "Sonne",
              "c": "n"
            },
            {
              "schrift": "deszcz",
              "lerntext": "deszcz",
              "de": "Regen",
              "c": "n"
            },
            {
              "schrift": "śnieg",
              "lerntext": "śnieg",
              "de": "Schnee",
              "c": "n"
            },
            {
              "schrift": "pogoda",
              "lerntext": "pogoda",
              "de": "Wetter",
              "c": "n"
            },
            {
              "schrift": "góra",
              "lerntext": "góra",
              "de": "Berg",
              "c": "n"
            },
            {
              "schrift": "minuta",
              "lerntext": "minuta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "godzina",
              "lerntext": "godzina",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pociąg",
              "lerntext": "pociąg",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wieczór",
              "lerntext": "wieczór",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tydzień",
              "lerntext": "tydzień",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dzień",
              "lerntext": "dzień",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
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
            "schrift": "lubię",
            "lerntext": "lubię",
            "de": "mögen",
            "c": "v"
          },
          {
            "schrift": "kocham",
            "lerntext": "kocham",
            "de": "lieben",
            "c": "v"
          },
          {
            "schrift": "jedzenie",
            "lerntext": "jedzenie",
            "de": "Essen",
            "c": "n"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja lubię [Slot]",
          "lerntext": "ja lubię [Slot]",
          "wortarten": {
            "ja": "p",
            "lubię": "v"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morze",
              "lerntext": "morze",
              "de": "Meer",
              "c": "n"
            },
            {
              "schrift": "słońce",
              "lerntext": "słońce",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "deszcz",
              "lerntext": "deszcz",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śnieg",
              "lerntext": "śnieg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pogoda",
              "lerntext": "pogoda",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "góra",
              "lerntext": "góra",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuta",
              "lerntext": "minuta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "godzina",
              "lerntext": "godzina",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pociąg",
              "lerntext": "pociąg",
              "de": "Zug",
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
          "schrift": "ja widzę [Slot]",
          "lerntext": "ja widzę [Slot]",
          "wortarten": {
            "ja": "p",
            "widzę": "v"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mnie",
              "lerntext": "mnie",
              "de": "mich",
              "c": "p"
            },
            {
              "schrift": "ciebie",
              "lerntext": "ciebie",
              "de": "dich",
              "c": "p"
            },
            {
              "schrift": "go",
              "lerntext": "go",
              "de": "ihn",
              "c": "p"
            },
            {
              "schrift": "nas",
              "lerntext": "nas",
              "de": "uns",
              "c": "p"
            },
            {
              "schrift": "coś",
              "lerntext": "coś",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ten",
              "lerntext": "ten",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wam",
              "lerntext": "wam",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wszystko",
              "lerntext": "wszystko",
              "de": "alles",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "który",
              "lerntext": "który",
              "de": "welcher",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "twój",
              "lerntext": "twój",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nasz",
              "lerntext": "nasz",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wszyscy",
              "lerntext": "wszyscy",
              "de": "alle",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "diese",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mój",
              "lerntext": "mój",
              "de": "mein",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "znajdę",
            "lerntext": "znajdę",
            "de": "finden",
            "c": "v"
          }
        ],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot]",
          "lerntext": "to jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "czerwony",
              "lerntext": "czerwony",
              "de": "rot",
              "c": "a"
            },
            {
              "schrift": "niebieski",
              "lerntext": "niebieski",
              "de": "blau",
              "c": "a"
            },
            {
              "schrift": "żółty",
              "lerntext": "żółty",
              "de": "gelb",
              "c": "a"
            },
            {
              "schrift": "zielony",
              "lerntext": "zielony",
              "de": "grün",
              "c": "a"
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "wysoki",
              "lerntext": "wysoki",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciężki",
              "lerntext": "ciężki",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lekki",
              "lerntext": "lekki",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niski",
              "lerntext": "niski",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tani",
              "lerntext": "tani",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer",
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
          "schrift": "to jest [Slot]",
          "lerntext": "to jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "biały",
              "lerntext": "biały",
              "de": "weiß",
              "c": "a"
            },
            {
              "schrift": "brązowy",
              "lerntext": "brązowy",
              "de": "braun",
              "c": "a"
            },
            {
              "schrift": "szary",
              "lerntext": "szary",
              "de": "grau",
              "c": "a"
            },
            {
              "schrift": "czerwony",
              "lerntext": "czerwony",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niebieski",
              "lerntext": "niebieski",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "żółty",
              "lerntext": "żółty",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zielony",
              "lerntext": "zielony",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wysoki",
              "lerntext": "wysoki",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciężki",
              "lerntext": "ciężki",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lekki",
              "lerntext": "lekki",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niski",
              "lerntext": "niski",
              "de": "niedrig",
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
          "schrift": "jedzenie jest [Slot]",
          "lerntext": "jedzenie jest [Slot]",
          "wortarten": {
            "jedzenie": "n",
            "jest": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "brudny",
              "lerntext": "brudny",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "biały",
              "lerntext": "biały",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szary",
              "lerntext": "szary",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brązowy",
              "lerntext": "brązowy",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czerwony",
              "lerntext": "czerwony",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niebieski",
              "lerntext": "niebieski",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "żółty",
              "lerntext": "żółty",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zielony",
              "lerntext": "zielony",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wysoki",
              "lerntext": "wysoki",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
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
          "lerntext": "jedzenie jest [Slot]",
          "wortarten": {
            "jedzenie": "n",
            "jest": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "zwykły",
              "lerntext": "zwykły",
              "de": "gewöhnlich",
              "c": "a"
            },
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brudny",
              "lerntext": "brudny",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "biały",
              "lerntext": "biały",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szary",
              "lerntext": "szary",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brązowy",
              "lerntext": "brązowy",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czerwony",
              "lerntext": "czerwony",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niebieski",
              "lerntext": "niebieski",
              "de": "blau",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "10.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja lubię [Slot]",
          "lerntext": "ja lubię [Slot]",
          "wortarten": {
            "ja": "p",
            "lubię": "v"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morze",
              "lerntext": "morze",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "słońce",
              "lerntext": "słońce",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "deszcz",
              "lerntext": "deszcz",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śnieg",
              "lerntext": "śnieg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pogoda",
              "lerntext": "pogoda",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "góra",
              "lerntext": "góra",
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
          "schrift": "jedzenie jest [Slot]",
          "lerntext": "jedzenie jest [Slot]",
          "wortarten": {
            "jedzenie": "n",
            "jest": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "zwykły",
              "lerntext": "zwykły",
              "de": "gewöhnlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brudny",
              "lerntext": "brudny",
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
        "kind": "frame",
        "frame": {
          "schrift": "ja widzę [Slot]",
          "lerntext": "ja widzę [Slot]",
          "wortarten": {
            "ja": "p",
            "widzę": "v"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mnie",
              "lerntext": "mnie",
              "de": "mich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ciebie",
              "lerntext": "ciebie",
              "de": "dich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "go",
              "lerntext": "go",
              "de": "ihn",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nas",
              "lerntext": "nas",
              "de": "uns",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja widzę [Slot]",
          "lerntext": "ja widzę [Slot]",
          "wortarten": {
            "ja": "p",
            "widzę": "v"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mnie",
              "lerntext": "mnie",
              "de": "mich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ciebie",
              "lerntext": "ciebie",
              "de": "dich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "go",
              "lerntext": "go",
              "de": "ihn",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nas",
              "lerntext": "nas",
              "de": "uns",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.11"
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
        "id": "10.12"
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
          "schrift": "wczoraj ja byłem [Slot]",
          "lerntext": "wczoraj ja byłem [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "zadowolony",
              "lerntext": "zadowolony",
              "de": "zufrieden",
              "c": "a"
            },
            {
              "schrift": "zwykły",
              "lerntext": "zwykły",
              "de": "gewöhnlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "biały",
              "lerntext": "biały",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tani",
              "lerntext": "tani",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brudny",
              "lerntext": "brudny",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciężki",
              "lerntext": "ciężki",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "żółty",
              "lerntext": "żółty",
              "de": "gelb",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "się",
            "lerntext": "się",
            "de": "sich",
            "c": "p"
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
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kupować",
              "lerntext": "kupować",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "dać",
              "lerntext": "dać",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "brać",
              "lerntext": "brać",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "znaleźć",
              "lerntext": "znaleźć",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "lubić",
              "lerntext": "lubić",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kochać",
              "lerntext": "kochać",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zamykać",
              "lerntext": "zamykać",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "być",
              "lerntext": "być",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "stawać się",
            "lerntext": "stawać się",
            "de": "werden",
            "c": "v"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę dużo [Slot]",
          "lerntext": "ja chcę dużo [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "wiedzieć",
              "lerntext": "wiedzieć",
              "de": "wissen",
              "c": "v"
            },
            {
              "schrift": "wierzyć",
              "lerntext": "wierzyć",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "stawać się",
              "lerntext": "stawać się",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "brać",
              "lerntext": "brać",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dać",
              "lerntext": "dać",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kupować",
              "lerntext": "kupować",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lubić",
              "lerntext": "lubić",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kochać",
              "lerntext": "kochać",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dostawać",
              "lerntext": "dostawać",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "móc",
              "lerntext": "móc",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tracić",
              "lerntext": "tracić",
              "de": "verlieren",
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
          "schrift": "ja staję się [Slot]",
          "lerntext": "ja staję się [Slot]",
          "wortarten": {
            "ja": "p",
            "się": "p"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "otwarty",
              "lerntext": "otwarty",
              "de": "offen",
              "c": "a"
            },
            {
              "schrift": "zamknięty",
              "lerntext": "zamknięty",
              "de": "geschlossen",
              "c": "a"
            },
            {
              "schrift": "niebezpieczny",
              "lerntext": "niebezpieczny",
              "de": "gefährlich",
              "c": "a"
            },
            {
              "schrift": "zwykły",
              "lerntext": "zwykły",
              "de": "gewöhnlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szary",
              "lerntext": "szary",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lekki",
              "lerntext": "lekki",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zielony",
              "lerntext": "zielony",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brązowy",
              "lerntext": "brązowy",
              "de": "braun",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "staję się",
            "lerntext": "staję się",
            "de": "werden",
            "c": "v"
          },
          {
            "schrift": "się",
            "lerntext": "się",
            "de": "sich",
            "c": "p"
          }
        ],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja chcę dużo [Slot]",
          "lerntext": "ja chcę dużo [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wiedzieć",
              "lerntext": "wiedzieć",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wierzyć",
              "lerntext": "wierzyć",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "brać",
              "lerntext": "brać",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dać",
              "lerntext": "dać",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kupować",
              "lerntext": "kupować",
              "de": "kaufen",
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
          "schrift": "ja staję się [Slot]",
          "lerntext": "ja staję się [Slot]",
          "wortarten": {
            "ja": "p",
            "się": "p"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "otwarty",
              "lerntext": "otwarty",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zamknięty",
              "lerntext": "zamknięty",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niebezpieczny",
              "lerntext": "niebezpieczny",
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
          "schrift": "ja chcę dużo [Slot]",
          "lerntext": "ja chcę dużo [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wiedzieć",
              "lerntext": "wiedzieć",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wierzyć",
              "lerntext": "wierzyć",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
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
          "schrift": "ja staję się [Slot]",
          "lerntext": "ja staję się [Slot]",
          "wortarten": {
            "ja": "p",
            "się": "p"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "otwarty",
              "lerntext": "otwarty",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zamknięty",
              "lerntext": "zamknięty",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niebezpieczny",
              "lerntext": "niebezpieczny",
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
          "schrift": "jestem zmęczony [Slot] pracuję",
          "lerntext": "jestem zmęczony [Slot] pracuję",
          "wortarten": {
            "jestem": "v",
            "zmęczony": "a",
            "pracuję": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ale",
            "lerntext": "ale",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "albo",
            "lerntext": "albo",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "o",
              "lerntext": "o",
              "de": "über"
            },
            {
              "schrift": "podczas",
              "lerntext": "podczas",
              "de": "während"
            },
            {
              "schrift": "chociaż",
              "lerntext": "chociaż",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "przed",
              "lerntext": "przed",
              "de": "vor"
            },
            {
              "schrift": "bez",
              "lerntext": "bez",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "dla",
              "lerntext": "dla",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "z",
              "lerntext": "z",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "przeciwko",
              "lerntext": "przeciwko",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "pod",
              "lerntext": "pod",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "obok",
              "lerntext": "obok",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "między",
              "lerntext": "między",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "przez",
              "lerntext": "przez",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "na",
              "lerntext": "na",
              "de": "auf",
              "wieder": true
            },
            {
              "schrift": "w",
              "lerntext": "w",
              "de": "in",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ale",
            "lerntext": "ale",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "albo",
            "lerntext": "albo",
            "de": "oder",
            "c": "k"
          },
          {
            "schrift": "więc",
            "lerntext": "więc",
            "de": "also",
            "c": "k"
          },
          {
            "schrift": "że",
            "lerntext": "że",
            "de": "dass",
            "c": "k"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jestem zmęczony [Slot] pracuję",
          "lerntext": "jestem zmęczony [Slot] pracuję",
          "wortarten": {
            "jestem": "v",
            "zmęczony": "a",
            "pracuję": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ale",
            "lerntext": "ale",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "albo",
            "lerntext": "albo",
            "de": "oder",
            "c": "k"
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
              "schrift": "też",
              "lerntext": "też",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "tylko",
              "lerntext": "tylko",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "tam",
              "lerntext": "tam",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "dużo",
              "lerntext": "dużo",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "dzisiaj",
              "lerntext": "dzisiaj",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "pewnie",
              "lerntext": "pewnie",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "tak",
              "lerntext": "tak",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "zaraz",
              "lerntext": "zaraz",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "dobrze",
              "lerntext": "dobrze",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "nigdy",
              "lerntext": "nigdy",
              "de": "nie",
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
          "schrift": "chcę [Slot] ale nie mogę",
          "lerntext": "chcę [Slot] ale nie mogę",
          "wortarten": {
            "chcę": "v",
            "ale": "k",
            "mogę": "v"
          }
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rozumieć",
              "lerntext": "rozumieć",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "mieć nadzieję",
              "lerntext": "mieć nadzieję",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "lubić",
              "lerntext": "lubić",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kochać",
              "lerntext": "kochać",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "robić",
              "lerntext": "robić",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myć",
              "lerntext": "myć",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ból",
            "lerntext": "ból",
            "de": "Schmerz",
            "c": "n"
          }
        ],
        "id": "12.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to [Slot] ale da się",
          "lerntext": "to [Slot] ale da się",
          "wortarten": {
            "ale": "k",
            "da": "v",
            "się": "p"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "trudny",
              "lerntext": "trudny",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "ciekawy",
              "lerntext": "ciekawy",
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "szybko",
              "lerntext": "szybko",
              "de": "schnell"
            },
            {
              "schrift": "może",
              "lerntext": "może",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "też",
              "lerntext": "też",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "tylko",
              "lerntext": "tylko",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "otwarty",
              "lerntext": "otwarty",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niebezpieczny",
              "lerntext": "niebezpieczny",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zamknięty",
              "lerntext": "zamknięty",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zawsze",
              "lerntext": "zawsze",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "tam",
              "lerntext": "tam",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "razem",
              "lerntext": "razem",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "już",
              "lerntext": "już",
              "de": "schon",
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
          "schrift": "to [Slot] ale da się",
          "lerntext": "to [Slot] ale da się",
          "wortarten": {
            "ale": "k",
            "da": "v",
            "się": "p"
          }
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
              "de": "hässlich",
              "c": "a"
            },
            {
              "schrift": "trudny",
              "lerntext": "trudny",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciekawy",
              "lerntext": "ciekawy",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szybko",
              "lerntext": "szybko",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "może",
              "lerntext": "może",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "też",
              "lerntext": "też",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "tylko",
              "lerntext": "tylko",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "czasami",
              "lerntext": "czasami",
              "de": "manchmal",
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
          "schrift": "to [Slot] ale da się",
          "lerntext": "to [Slot] ale da się",
          "wortarten": {
            "ale": "k",
            "da": "v",
            "się": "p"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "powoli",
              "lerntext": "powoli",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "brzydki",
              "lerntext": "brzydki",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "trudny",
              "lerntext": "trudny",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciekawy",
              "lerntext": "ciekawy",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szybko",
              "lerntext": "szybko",
              "de": "schnell",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "12.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jestem zmęczony [Slot] pracuję",
          "lerntext": "jestem zmęczony [Slot] pracuję",
          "wortarten": {
            "jestem": "v",
            "zmęczony": "a",
            "pracuję": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ale",
            "lerntext": "ale",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "albo",
            "lerntext": "albo",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "podczas",
              "lerntext": "podczas",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "chociaż",
              "lerntext": "chociaż",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "bez",
              "lerntext": "bez",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "dla",
              "lerntext": "dla",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "z",
              "lerntext": "z",
              "de": "mit",
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
          "schrift": "jestem zmęczony [Slot] pracuję",
          "lerntext": "jestem zmęczony [Slot] pracuję",
          "wortarten": {
            "jestem": "v",
            "zmęczony": "a",
            "pracuję": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "i",
            "lerntext": "i",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ale",
            "lerntext": "ale",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "albo",
            "lerntext": "albo",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "podczas",
              "lerntext": "podczas",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "chociaż",
              "lerntext": "chociaż",
              "de": "obwohl",
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
        "id": "12.9"
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
          "schrift": "boli mnie [Slot]",
          "lerntext": "boli mnie [Slot]",
          "wortarten": {
            "mnie": "p"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mój",
            "lerntext": "mój",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "głowa",
              "lerntext": "głowa",
              "de": "Kopf",
              "c": "n"
            },
            {
              "schrift": "oko",
              "lerntext": "oko",
              "de": "Auge",
              "c": "n"
            },
            {
              "schrift": "ból",
              "lerntext": "ból",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "morze",
              "lerntext": "morze",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "słońce",
              "lerntext": "słońce",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuta",
              "lerntext": "minuta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śnieg",
              "lerntext": "śnieg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "góra",
              "lerntext": "góra",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "deszcz",
              "lerntext": "deszcz",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "godzina",
              "lerntext": "godzina",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pogoda",
              "lerntext": "pogoda",
              "de": "Wetter",
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
          "schrift": "mam ból [Slot]",
          "lerntext": "mam ból [Slot]",
          "wortarten": {
            "mam": "v",
            "ból": "n"
          }
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "noga",
              "lerntext": "noga",
              "de": "Bein",
              "c": "n"
            },
            {
              "schrift": "głowa",
              "lerntext": "głowa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oko",
              "lerntext": "oko",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "morze",
              "lerntext": "morze",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "słońce",
              "lerntext": "słońce",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuta",
              "lerntext": "minuta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dom",
              "lerntext": "dom",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "13.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "boli mnie [Slot]",
          "lerntext": "boli mnie [Slot]",
          "wortarten": {
            "mnie": "p"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mój",
            "lerntext": "mój",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "głowa",
              "lerntext": "głowa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oko",
              "lerntext": "oko",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ból",
              "lerntext": "ból",
              "de": "Schmerz",
              "c": "n",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier gibt es einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "talerz",
              "lerntext": "talerz",
              "de": "Teller",
              "c": "n"
            },
            {
              "schrift": "ból",
              "lerntext": "ból",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "głowa",
              "lerntext": "głowa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wieczór",
              "lerntext": "wieczór",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ciało",
              "lerntext": "ciało",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dzień",
              "lerntext": "dzień",
              "de": "Tag",
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
          "schrift": "kupuję [Slot]",
          "lerntext": "kupuję [Slot]",
          "wortarten": {
            "kupuję": "v"
          }
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "Schuh",
              "c": "n"
            },
            {
              "schrift": "talerz",
              "lerntext": "talerz",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ból",
              "lerntext": "ból",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "głowa",
              "lerntext": "głowa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "syn",
              "lerntext": "syn",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rynek",
              "lerntext": "rynek",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "herbata",
              "lerntext": "herbata",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pociąg",
              "lerntext": "pociąg",
              "de": "Zug",
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
          "schrift": "kupuję [Slot]",
          "lerntext": "kupuję [Slot]",
          "wortarten": {
            "kupuję": "v"
          }
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sukienka",
              "lerntext": "sukienka",
              "de": "Kleid",
              "c": "n"
            },
            {
              "schrift": "oko",
              "lerntext": "oko",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sól",
              "lerntext": "sól",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "warzywa",
              "lerntext": "warzywa",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śniadanie",
              "lerntext": "śniadanie",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mięso",
              "lerntext": "mięso",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piwo",
              "lerntext": "piwo",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "okno",
              "lerntext": "okno",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "łóżko",
              "lerntext": "łóżko",
              "de": "Bett",
              "c": "n",
              "wieder": true
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
          "schrift": "mam [Slot]",
          "lerntext": "mam [Slot]",
          "wortarten": {
            "mam": "v"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ubranie",
              "lerntext": "ubranie",
              "de": "Kleidung",
              "c": "n"
            },
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sukienka",
              "lerntext": "sukienka",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "talerz",
              "lerntext": "talerz",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śnieg",
              "lerntext": "śnieg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oko",
              "lerntext": "oko",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "góra",
              "lerntext": "góra",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tydzień",
              "lerntext": "tydzień",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "deszcz",
              "lerntext": "deszcz",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "godzina",
              "lerntext": "godzina",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "owoce",
              "lerntext": "owoce",
              "de": "Obst",
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
          "schrift": "to jest moja [Slot]",
          "lerntext": "to jest moja [Slot]",
          "wortarten": {
            "jest": "v",
            "moja": "p"
          }
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "praca",
              "lerntext": "praca",
              "de": "Arbeit",
              "c": "n"
            },
            {
              "schrift": "ubranie",
              "lerntext": "ubranie",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sukienka",
              "lerntext": "sukienka",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "talerz",
              "lerntext": "talerz",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "morze",
              "lerntext": "morze",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pogoda",
              "lerntext": "pogoda",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "książka",
              "lerntext": "książka",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "czekam na [Slot]",
          "lerntext": "czekam na [Slot]",
          "wortarten": {
            "czekam": "v"
          }
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "odpowiedź",
              "lerntext": "odpowiedź",
              "de": "Antwort",
              "c": "n"
            },
            {
              "schrift": "egzamin",
              "lerntext": "egzamin",
              "de": "Prüfung",
              "c": "n"
            },
            {
              "schrift": "praca",
              "lerntext": "praca",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ubranie",
              "lerntext": "ubranie",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sukienka",
              "lerntext": "sukienka",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "talerz",
              "lerntext": "talerz",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szklanka",
              "lerntext": "szklanka",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "toaleta",
              "lerntext": "toaleta",
              "de": "Toilette",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "słońce",
              "lerntext": "słońce",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "14.6"
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
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "pokój",
              "lerntext": "pokój",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "stół",
              "lerntext": "stół",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "odpowiedź",
              "lerntext": "odpowiedź",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "egzamin",
              "lerntext": "egzamin",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "praca",
              "lerntext": "praca",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ubranie",
              "lerntext": "ubranie",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sukienka",
              "lerntext": "sukienka",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sklep",
              "lerntext": "sklep",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "żona",
              "lerntext": "żona",
              "de": "Ehefrau",
              "c": "n"
            },
            {
              "schrift": "apteka",
              "lerntext": "apteka",
              "de": "Apotheke",
              "c": "n"
            },
            {
              "schrift": "bilet",
              "lerntext": "bilet",
              "de": "Fahrkarte",
              "c": "n"
            },
            {
              "schrift": "rachunek",
              "lerntext": "rachunek",
              "de": "Rechnung",
              "c": "n"
            },
            {
              "schrift": "karta",
              "lerntext": "karta",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wykład",
              "lerntext": "wykład",
              "de": "Vorlesung",
              "c": "n"
            },
            {
              "schrift": "język",
              "lerntext": "język",
              "de": "Sprache",
              "c": "n"
            },
            {
              "schrift": "pytanie",
              "lerntext": "pytanie",
              "de": "Frage",
              "c": "n"
            },
            {
              "schrift": "rzecz",
              "lerntext": "rzecz",
              "de": "Sache",
              "c": "n"
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte",
              "c": "n"
            },
            {
              "schrift": "żona",
              "lerntext": "żona",
              "de": "Ehefrau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "apteka",
              "lerntext": "apteka",
              "de": "Apotheke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bilet",
              "lerntext": "bilet",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rachunek",
              "lerntext": "rachunek",
              "de": "Rechnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "karta",
              "lerntext": "karta",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "butelka",
              "lerntext": "butelka",
              "de": "Flasche",
              "c": "n"
            },
            {
              "schrift": "numer",
              "lerntext": "numer",
              "de": "Nummer",
              "c": "n"
            },
            {
              "schrift": "muzyka",
              "lerntext": "muzyka",
              "de": "Musik",
              "c": "n"
            },
            {
              "schrift": "impreza",
              "lerntext": "impreza",
              "de": "Party",
              "c": "n"
            },
            {
              "schrift": "świat",
              "lerntext": "świat",
              "de": "Welt",
              "c": "n"
            },
            {
              "schrift": "wykład",
              "lerntext": "wykład",
              "de": "Vorlesung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "język",
              "lerntext": "język",
              "de": "Sprache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pytanie",
              "lerntext": "pytanie",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rzecz",
              "lerntext": "rzecz",
              "de": "Sache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "żona",
              "lerntext": "żona",
              "de": "Ehefrau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "apteka",
              "lerntext": "apteka",
              "de": "Apotheke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bilet",
              "lerntext": "bilet",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rachunek",
              "lerntext": "rachunek",
              "de": "Rechnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "karta",
              "lerntext": "karta",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "powietrze",
              "lerntext": "powietrze",
              "de": "Luft",
              "c": "n"
            },
            {
              "schrift": "kot",
              "lerntext": "kot",
              "de": "Katze",
              "c": "n"
            },
            {
              "schrift": "miłość",
              "lerntext": "miłość",
              "de": "Liebe",
              "c": "n"
            },
            {
              "schrift": "pomysł",
              "lerntext": "pomysł",
              "de": "Idee",
              "c": "n"
            },
            {
              "schrift": "historia",
              "lerntext": "historia",
              "de": "Geschichte",
              "c": "n"
            },
            {
              "schrift": "butelka",
              "lerntext": "butelka",
              "de": "Flasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "numer",
              "lerntext": "numer",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "muzyka",
              "lerntext": "muzyka",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "impreza",
              "lerntext": "impreza",
              "de": "Party",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "świat",
              "lerntext": "świat",
              "de": "Welt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wykład",
              "lerntext": "wykład",
              "de": "Vorlesung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "język",
              "lerntext": "język",
              "de": "Sprache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pytanie",
              "lerntext": "pytanie",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rzecz",
              "lerntext": "rzecz",
              "de": "Sache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "strach",
              "lerntext": "strach",
              "de": "Angst",
              "c": "n"
            },
            {
              "schrift": "przerwa",
              "lerntext": "przerwa",
              "de": "Pause",
              "c": "n"
            },
            {
              "schrift": "zmiana",
              "lerntext": "zmiana",
              "de": "Schicht",
              "c": "n"
            },
            {
              "schrift": "powietrze",
              "lerntext": "powietrze",
              "de": "Luft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kot",
              "lerntext": "kot",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "miłość",
              "lerntext": "miłość",
              "de": "Liebe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomysł",
              "lerntext": "pomysł",
              "de": "Idee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "historia",
              "lerntext": "historia",
              "de": "Geschichte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "butelka",
              "lerntext": "butelka",
              "de": "Flasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "numer",
              "lerntext": "numer",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "muzyka",
              "lerntext": "muzyka",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "impreza",
              "lerntext": "impreza",
              "de": "Party",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "świat",
              "lerntext": "świat",
              "de": "Welt",
              "c": "n",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mężczyzna",
              "lerntext": "mężczyzna",
              "de": "Mann",
              "c": "n"
            },
            {
              "schrift": "chłopak",
              "lerntext": "chłopak",
              "de": "Junge",
              "c": "n"
            },
            {
              "schrift": "kolega",
              "lerntext": "kolega",
              "de": "Kumpel",
              "c": "n"
            },
            {
              "schrift": "mąż",
              "lerntext": "mąż",
              "de": "Ehemann",
              "c": "n"
            },
            {
              "schrift": "imię",
              "lerntext": "imię",
              "de": "Vorname",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "miesiąc",
              "lerntext": "miesiąc",
              "de": "Monat",
              "c": "n"
            },
            {
              "schrift": "rano",
              "lerntext": "rano",
              "de": "Morgen",
              "c": "n"
            },
            {
              "schrift": "miejsce",
              "lerntext": "miejsce",
              "de": "Platz",
              "c": "n"
            },
            {
              "schrift": "paszport",
              "lerntext": "paszport",
              "de": "Pass",
              "c": "n"
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Preis",
              "c": "n"
            },
            {
              "schrift": "mężczyzna",
              "lerntext": "mężczyzna",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chłopak",
              "lerntext": "chłopak",
              "de": "Junge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kolega",
              "lerntext": "kolega",
              "de": "Kumpel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mąż",
              "lerntext": "mąż",
              "de": "Ehemann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "imię",
              "lerntext": "imię",
              "de": "Vorname",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lekarz",
              "lerntext": "lekarz",
              "de": "Arzt",
              "c": "n"
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "c": "n"
            },
            {
              "schrift": "pies",
              "lerntext": "pies",
              "de": "Hund",
              "c": "n"
            },
            {
              "schrift": "część",
              "lerntext": "część",
              "de": "Teil",
              "c": "n"
            },
            {
              "schrift": "początek",
              "lerntext": "początek",
              "de": "Anfang",
              "c": "n"
            },
            {
              "schrift": "miesiąc",
              "lerntext": "miesiąc",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rano",
              "lerntext": "rano",
              "de": "Morgen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "miejsce",
              "lerntext": "miejsce",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "paszport",
              "lerntext": "paszport",
              "de": "Pass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Preis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mężczyzna",
              "lerntext": "mężczyzna",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chłopak",
              "lerntext": "chłopak",
              "de": "Junge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kolega",
              "lerntext": "kolega",
              "de": "Kumpel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mąż",
              "lerntext": "mąż",
              "de": "Ehemann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "imię",
              "lerntext": "imię",
              "de": "Vorname",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "powód",
              "lerntext": "powód",
              "de": "Grund",
              "c": "n"
            },
            {
              "schrift": "klient",
              "lerntext": "klient",
              "de": "Kunde",
              "c": "n"
            },
            {
              "schrift": "wypłata",
              "lerntext": "wypłata",
              "de": "Lohn",
              "c": "n"
            },
            {
              "schrift": "lekarz",
              "lerntext": "lekarz",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pies",
              "lerntext": "pies",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "część",
              "lerntext": "część",
              "de": "Teil",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "początek",
              "lerntext": "początek",
              "de": "Anfang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "miesiąc",
              "lerntext": "miesiąc",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rano",
              "lerntext": "rano",
              "de": "Morgen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "miejsce",
              "lerntext": "miejsce",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "paszport",
              "lerntext": "paszport",
              "de": "Pass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Preis",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "15.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rok",
              "lerntext": "rok",
              "de": "Jahr",
              "c": "n"
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende",
              "c": "n"
            },
            {
              "schrift": "kraj",
              "lerntext": "kraj",
              "de": "Land",
              "c": "n"
            },
            {
              "schrift": "dziewczyna",
              "lerntext": "dziewczyna",
              "de": "Mädchen",
              "c": "n"
            },
            {
              "schrift": "słowo",
              "lerntext": "słowo",
              "de": "Wort",
              "c": "n"
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
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem",
              "c": "n"
            },
            {
              "schrift": "lek",
              "lerntext": "lek",
              "de": "Medikament",
              "c": "n"
            },
            {
              "schrift": "gorączka",
              "lerntext": "gorączka",
              "de": "Fieber",
              "c": "n"
            },
            {
              "schrift": "życie",
              "lerntext": "życie",
              "de": "Leben",
              "c": "n"
            },
            {
              "schrift": "prezent",
              "lerntext": "prezent",
              "de": "Geschenk",
              "c": "n"
            },
            {
              "schrift": "rok",
              "lerntext": "rok",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kraj",
              "lerntext": "kraj",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dziewczyna",
              "lerntext": "dziewczyna",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "słowo",
              "lerntext": "słowo",
              "de": "Wort",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "koniec",
              "lerntext": "koniec",
              "de": "Ende",
              "c": "n"
            },
            {
              "schrift": "przykład",
              "lerntext": "przykład",
              "de": "Beispiel",
              "c": "n"
            },
            {
              "schrift": "bagaż",
              "lerntext": "bagaż",
              "de": "Gepäck",
              "c": "n"
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lek",
              "lerntext": "lek",
              "de": "Medikament",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gorączka",
              "lerntext": "gorączka",
              "de": "Fieber",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "życie",
              "lerntext": "życie",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "prezent",
              "lerntext": "prezent",
              "de": "Geschenk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rok",
              "lerntext": "rok",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "weekend",
              "lerntext": "weekend",
              "de": "Wochenende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kraj",
              "lerntext": "kraj",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dziewczyna",
              "lerntext": "dziewczyna",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "słowo",
              "lerntext": "słowo",
              "de": "Wort",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "15.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ludzie",
              "lerntext": "ludzie",
              "de": "Leute",
              "c": "n"
            },
            {
              "schrift": "rodzeństwo",
              "lerntext": "rodzeństwo",
              "de": "Geschwister",
              "c": "n"
            },
            {
              "schrift": "włosy",
              "lerntext": "włosy",
              "de": "Haare",
              "c": "n"
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "strach",
              "lerntext": "strach",
              "de": "Angst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "przerwa",
              "lerntext": "przerwa",
              "de": "Pause",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zmiana",
              "lerntext": "zmiana",
              "de": "Schicht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ludzie",
              "lerntext": "ludzie",
              "de": "Leute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rodzeństwo",
              "lerntext": "rodzeństwo",
              "de": "Geschwister",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "włosy",
              "lerntext": "włosy",
              "de": "Haare",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "powietrze",
              "lerntext": "powietrze",
              "de": "Luft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kot",
              "lerntext": "kot",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "miłość",
              "lerntext": "miłość",
              "de": "Liebe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomysł",
              "lerntext": "pomysł",
              "de": "Idee",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.14"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "powód",
              "lerntext": "powód",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klient",
              "lerntext": "klient",
              "de": "Kunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wypłata",
              "lerntext": "wypłata",
              "de": "Lohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lekarz",
              "lerntext": "lekarz",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pies",
              "lerntext": "pies",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "część",
              "lerntext": "część",
              "de": "Teil",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "początek",
              "lerntext": "początek",
              "de": "Anfang",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "15.15"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "koniec",
              "lerntext": "koniec",
              "de": "Ende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "przykład",
              "lerntext": "przykład",
              "de": "Beispiel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bagaż",
              "lerntext": "bagaż",
              "de": "Gepäck",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "problem",
              "lerntext": "problem",
              "de": "Problem",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lek",
              "lerntext": "lek",
              "de": "Medikament",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gorączka",
              "lerntext": "gorączka",
              "de": "Fieber",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "życie",
              "lerntext": "życie",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "prezent",
              "lerntext": "prezent",
              "de": "Geschenk",
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
          "schrift": "tutaj jest [Slot]",
          "lerntext": "tutaj jest [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "historia",
              "lerntext": "historia",
              "de": "Geschichte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "strach",
              "lerntext": "strach",
              "de": "Angst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "przerwa",
              "lerntext": "przerwa",
              "de": "Pause",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zmiana",
              "lerntext": "zmiana",
              "de": "Schicht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ludzie",
              "lerntext": "ludzie",
              "de": "Leute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rodzeństwo",
              "lerntext": "rodzeństwo",
              "de": "Geschwister",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "włosy",
              "lerntext": "włosy",
              "de": "Haare",
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
        "id": "15.18"
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "kłaść",
              "lerntext": "kłaść",
              "de": "legen",
              "c": "v"
            },
            {
              "schrift": "witać",
              "lerntext": "witać",
              "de": "begrüssen",
              "c": "v"
            },
            {
              "schrift": "kosztować",
              "lerntext": "kosztować",
              "de": "kosten",
              "c": "v"
            },
            {
              "schrift": "zaczynać",
              "lerntext": "zaczynać",
              "de": "anfangen",
              "c": "v"
            },
            {
              "schrift": "odwiedzać",
              "lerntext": "odwiedzać",
              "de": "besuchen",
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "zdarzać się",
              "lerntext": "zdarzać się",
              "de": "geschehen",
              "c": "v"
            },
            {
              "schrift": "wynajmować",
              "lerntext": "wynajmować",
              "de": "mieten",
              "c": "v"
            },
            {
              "schrift": "znać",
              "lerntext": "znać",
              "de": "kennen",
              "c": "v"
            },
            {
              "schrift": "iść",
              "lerntext": "iść",
              "de": "gehen",
              "c": "v"
            },
            {
              "schrift": "przyjść",
              "lerntext": "przyjść",
              "de": "kommen",
              "c": "v"
            },
            {
              "schrift": "kłaść",
              "lerntext": "kłaść",
              "de": "legen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "witać",
              "lerntext": "witać",
              "de": "begrüssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kosztować",
              "lerntext": "kosztować",
              "de": "kosten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zaczynać",
              "lerntext": "zaczynać",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "odwiedzać",
              "lerntext": "odwiedzać",
              "de": "besuchen",
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nazywać",
              "lerntext": "nazywać",
              "de": "nennen",
              "c": "v"
            },
            {
              "schrift": "wyjeżdżać",
              "lerntext": "wyjeżdżać",
              "de": "abfahren",
              "c": "v"
            },
            {
              "schrift": "przyjeżdżać",
              "lerntext": "przyjeżdżać",
              "de": "ankommen",
              "c": "v"
            },
            {
              "schrift": "wychodzić",
              "lerntext": "wychodzić",
              "de": "hinausgehen",
              "c": "v"
            },
            {
              "schrift": "wchodzić",
              "lerntext": "wchodzić",
              "de": "hineingehen",
              "c": "v"
            },
            {
              "schrift": "zdarzać się",
              "lerntext": "zdarzać się",
              "de": "geschehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wynajmować",
              "lerntext": "wynajmować",
              "de": "mieten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "znać",
              "lerntext": "znać",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "iść",
              "lerntext": "iść",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "przyjść",
              "lerntext": "przyjść",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kłaść",
              "lerntext": "kłaść",
              "de": "legen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "witać",
              "lerntext": "witać",
              "de": "begrüssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kosztować",
              "lerntext": "kosztować",
              "de": "kosten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zaczynać",
              "lerntext": "zaczynać",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "odwiedzać",
              "lerntext": "odwiedzać",
              "de": "besuchen",
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nosić",
              "lerntext": "nosić",
              "de": "tragen",
              "c": "v"
            },
            {
              "schrift": "uczyć się",
              "lerntext": "uczyć się",
              "de": "lernen",
              "c": "v"
            },
            {
              "schrift": "studiować",
              "lerntext": "studiować",
              "de": "studieren",
              "c": "v"
            },
            {
              "schrift": "pamiętać",
              "lerntext": "pamiętać",
              "de": "sich erinnern",
              "c": "v"
            },
            {
              "schrift": "kończyć",
              "lerntext": "kończyć",
              "de": "beenden",
              "c": "v"
            },
            {
              "schrift": "nazywać",
              "lerntext": "nazywać",
              "de": "nennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wyjeżdżać",
              "lerntext": "wyjeżdżać",
              "de": "abfahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "przyjeżdżać",
              "lerntext": "przyjeżdżać",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wychodzić",
              "lerntext": "wychodzić",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wchodzić",
              "lerntext": "wchodzić",
              "de": "hineingehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zdarzać się",
              "lerntext": "zdarzać się",
              "de": "geschehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wynajmować",
              "lerntext": "wynajmować",
              "de": "mieten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "znać",
              "lerntext": "znać",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "iść",
              "lerntext": "iść",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "przyjść",
              "lerntext": "przyjść",
              "de": "kommen",
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "próbować",
              "lerntext": "próbować",
              "de": "versuchen",
              "c": "v"
            },
            {
              "schrift": "śpiewać",
              "lerntext": "śpiewać",
              "de": "singen",
              "c": "v"
            },
            {
              "schrift": "biegać",
              "lerntext": "biegać",
              "de": "rennen",
              "c": "v"
            },
            {
              "schrift": "poznawać",
              "lerntext": "poznawać",
              "de": "kennenlernen",
              "c": "v"
            },
            {
              "schrift": "żenić się",
              "lerntext": "żenić się",
              "de": "heiraten",
              "c": "v"
            },
            {
              "schrift": "nosić",
              "lerntext": "nosić",
              "de": "tragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "uczyć się",
              "lerntext": "uczyć się",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "studiować",
              "lerntext": "studiować",
              "de": "studieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pamiętać",
              "lerntext": "pamiętać",
              "de": "sich erinnern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kończyć",
              "lerntext": "kończyć",
              "de": "beenden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "nazywać",
              "lerntext": "nazywać",
              "de": "nennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wyjeżdżać",
              "lerntext": "wyjeżdżać",
              "de": "abfahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "przyjeżdżać",
              "lerntext": "przyjeżdżać",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wychodzić",
              "lerntext": "wychodzić",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wchodzić",
              "lerntext": "wchodzić",
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rodzić się",
              "lerntext": "rodzić się",
              "de": "geboren werden",
              "c": "v"
            },
            {
              "schrift": "wydawać się",
              "lerntext": "wydawać się",
              "de": "scheinen",
              "c": "v"
            },
            {
              "schrift": "zamawiać",
              "lerntext": "zamawiać",
              "de": "bestellen",
              "c": "v"
            },
            {
              "schrift": "rezerwować",
              "lerntext": "rezerwować",
              "de": "reservieren",
              "c": "v"
            },
            {
              "schrift": "podpisywać",
              "lerntext": "podpisywać",
              "de": "unterschreiben",
              "c": "v"
            },
            {
              "schrift": "próbować",
              "lerntext": "próbować",
              "de": "versuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śpiewać",
              "lerntext": "śpiewać",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "biegać",
              "lerntext": "biegać",
              "de": "rennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poznawać",
              "lerntext": "poznawać",
              "de": "kennenlernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żenić się",
              "lerntext": "żenić się",
              "de": "heiraten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "nosić",
              "lerntext": "nosić",
              "de": "tragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "uczyć się",
              "lerntext": "uczyć się",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "studiować",
              "lerntext": "studiować",
              "de": "studieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pamiętać",
              "lerntext": "pamiętać",
              "de": "sich erinnern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kończyć",
              "lerntext": "kończyć",
              "de": "beenden",
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gotować",
              "lerntext": "gotować",
              "de": "kochen",
              "c": "v"
            },
            {
              "schrift": "przepraszać",
              "lerntext": "przepraszać",
              "de": "sich entschuldigen",
              "c": "v"
            },
            {
              "schrift": "dziękować",
              "lerntext": "dziękować",
              "de": "danken",
              "c": "v"
            },
            {
              "schrift": "trzymać",
              "lerntext": "trzymać",
              "de": "halten",
              "c": "v"
            },
            {
              "schrift": "załatwiać",
              "lerntext": "załatwiać",
              "de": "erledigen",
              "c": "v"
            },
            {
              "schrift": "rodzić się",
              "lerntext": "rodzić się",
              "de": "geboren werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wydawać się",
              "lerntext": "wydawać się",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zamawiać",
              "lerntext": "zamawiać",
              "de": "bestellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rezerwować",
              "lerntext": "rezerwować",
              "de": "reservieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podpisywać",
              "lerntext": "podpisywać",
              "de": "unterschreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "próbować",
              "lerntext": "próbować",
              "de": "versuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śpiewać",
              "lerntext": "śpiewać",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "biegać",
              "lerntext": "biegać",
              "de": "rennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poznawać",
              "lerntext": "poznawać",
              "de": "kennenlernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żenić się",
              "lerntext": "żenić się",
              "de": "heiraten",
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wracać",
              "lerntext": "wracać",
              "de": "zurückkehren",
              "c": "v"
            },
            {
              "schrift": "prowadzić",
              "lerntext": "prowadzić",
              "de": "fahren",
              "c": "v"
            },
            {
              "schrift": "zmieniać",
              "lerntext": "zmieniać",
              "de": "ändern",
              "c": "v"
            },
            {
              "schrift": "sprzątać",
              "lerntext": "sprzątać",
              "de": "aufräumen",
              "c": "v"
            },
            {
              "schrift": "opowiadać",
              "lerntext": "opowiadać",
              "de": "erzählen",
              "c": "v"
            },
            {
              "schrift": "gotować",
              "lerntext": "gotować",
              "de": "kochen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "przepraszać",
              "lerntext": "przepraszać",
              "de": "sich entschuldigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dziękować",
              "lerntext": "dziękować",
              "de": "danken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trzymać",
              "lerntext": "trzymać",
              "de": "halten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "załatwiać",
              "lerntext": "załatwiać",
              "de": "erledigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rodzić się",
              "lerntext": "rodzić się",
              "de": "geboren werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wydawać się",
              "lerntext": "wydawać się",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zamawiać",
              "lerntext": "zamawiać",
              "de": "bestellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rezerwować",
              "lerntext": "rezerwować",
              "de": "reservieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podpisywać",
              "lerntext": "podpisywać",
              "de": "unterschreiben",
              "c": "v",
              "wieder": true
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
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wracać",
              "lerntext": "wracać",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prowadzić",
              "lerntext": "prowadzić",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zmieniać",
              "lerntext": "zmieniać",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sprzątać",
              "lerntext": "sprzątać",
              "de": "aufräumen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "opowiadać",
              "lerntext": "opowiadać",
              "de": "erzählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gotować",
              "lerntext": "gotować",
              "de": "kochen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "przepraszać",
              "lerntext": "przepraszać",
              "de": "sich entschuldigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dziękować",
              "lerntext": "dziękować",
              "de": "danken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trzymać",
              "lerntext": "trzymać",
              "de": "halten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "załatwiać",
              "lerntext": "załatwiać",
              "de": "erledigen",
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
          "schrift": "chcę [Slot]",
          "lerntext": "chcę [Slot]",
          "wortarten": {
            "chcę": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wracać",
              "lerntext": "wracać",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prowadzić",
              "lerntext": "prowadzić",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zmieniać",
              "lerntext": "zmieniać",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sprzątać",
              "lerntext": "sprzątać",
              "de": "aufräumen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "opowiadać",
              "lerntext": "opowiadać",
              "de": "erzählen",
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
              "de": "kostenlos",
              "c": "a"
            },
            {
              "schrift": "pełny",
              "lerntext": "pełny",
              "de": "voll",
              "c": "a"
            },
            {
              "schrift": "pusty",
              "lerntext": "pusty",
              "de": "leer",
              "c": "a"
            },
            {
              "schrift": "wolny",
              "lerntext": "wolny",
              "de": "frei",
              "c": "a"
            },
            {
              "schrift": "zajęty",
              "lerntext": "zajęty",
              "de": "besetzt",
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
              "de": "gesund",
              "c": "a"
            },
            {
              "schrift": "sympatyczny",
              "lerntext": "sympatyczny",
              "de": "sympathisch",
              "c": "a"
            },
            {
              "schrift": "fajny",
              "lerntext": "fajny",
              "de": "cool",
              "c": "a"
            },
            {
              "schrift": "szybki",
              "lerntext": "szybki",
              "de": "schnell",
              "c": "a"
            },
            {
              "schrift": "świeży",
              "lerntext": "świeży",
              "de": "frisch",
              "c": "a"
            },
            {
              "schrift": "darmowy",
              "lerntext": "darmowy",
              "de": "kostenlos",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pełny",
              "lerntext": "pełny",
              "de": "voll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pusty",
              "lerntext": "pusty",
              "de": "leer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wolny",
              "lerntext": "wolny",
              "de": "frei",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zajęty",
              "lerntext": "zajęty",
              "de": "besetzt",
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
              "de": "salzig",
              "c": "a"
            },
            {
              "schrift": "ostry",
              "lerntext": "ostry",
              "de": "scharf",
              "c": "a"
            },
            {
              "schrift": "smaczny",
              "lerntext": "smaczny",
              "de": "lecker",
              "c": "a"
            },
            {
              "schrift": "polski",
              "lerntext": "polski",
              "de": "polnisch",
              "c": "a"
            },
            {
              "schrift": "niemiecki",
              "lerntext": "niemiecki",
              "de": "deutsch",
              "c": "a"
            },
            {
              "schrift": "zdrowy",
              "lerntext": "zdrowy",
              "de": "gesund",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sympatyczny",
              "lerntext": "sympatyczny",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fajny",
              "lerntext": "fajny",
              "de": "cool",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szybki",
              "lerntext": "szybki",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "świeży",
              "lerntext": "świeży",
              "de": "frisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "darmowy",
              "lerntext": "darmowy",
              "de": "kostenlos",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pełny",
              "lerntext": "pełny",
              "de": "voll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pusty",
              "lerntext": "pusty",
              "de": "leer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wolny",
              "lerntext": "wolny",
              "de": "frei",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zajęty",
              "lerntext": "zajęty",
              "de": "besetzt",
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
              "de": "englisch",
              "c": "a"
            },
            {
              "schrift": "poprzedni",
              "lerntext": "poprzedni",
              "de": "voriger",
              "c": "a"
            },
            {
              "schrift": "bezpieczny",
              "lerntext": "bezpieczny",
              "de": "sicher",
              "c": "a"
            },
            {
              "schrift": "następny",
              "lerntext": "następny",
              "de": "nächster",
              "c": "a"
            },
            {
              "schrift": "dobry",
              "lerntext": "dobry",
              "de": "gut",
              "c": "a"
            },
            {
              "schrift": "słony",
              "lerntext": "słony",
              "de": "salzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ostry",
              "lerntext": "ostry",
              "de": "scharf",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smaczny",
              "lerntext": "smaczny",
              "de": "lecker",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "polski",
              "lerntext": "polski",
              "de": "polnisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niemiecki",
              "lerntext": "niemiecki",
              "de": "deutsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zdrowy",
              "lerntext": "zdrowy",
              "de": "gesund",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sympatyczny",
              "lerntext": "sympatyczny",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fajny",
              "lerntext": "fajny",
              "de": "cool",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szybki",
              "lerntext": "szybki",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "świeży",
              "lerntext": "świeży",
              "de": "frisch",
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
              "de": "wahr",
              "c": "a"
            },
            {
              "schrift": "zły",
              "lerntext": "zły",
              "de": "schlecht",
              "c": "a"
            },
            {
              "schrift": "ładny",
              "lerntext": "ładny",
              "de": "hübsch",
              "c": "a"
            },
            {
              "schrift": "gorący",
              "lerntext": "gorący",
              "de": "heiß",
              "c": "a"
            },
            {
              "schrift": "możliwy",
              "lerntext": "możliwy",
              "de": "möglich",
              "c": "a"
            },
            {
              "schrift": "angielski",
              "lerntext": "angielski",
              "de": "englisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "poprzedni",
              "lerntext": "poprzedni",
              "de": "voriger",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bezpieczny",
              "lerntext": "bezpieczny",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "następny",
              "lerntext": "następny",
              "de": "nächster",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dobry",
              "lerntext": "dobry",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słony",
              "lerntext": "słony",
              "de": "salzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ostry",
              "lerntext": "ostry",
              "de": "scharf",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smaczny",
              "lerntext": "smaczny",
              "de": "lecker",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "polski",
              "lerntext": "polski",
              "de": "polnisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niemiecki",
              "lerntext": "niemiecki",
              "de": "deutsch",
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
              "de": "ausländisch",
              "c": "a"
            },
            {
              "schrift": "prawdziwy",
              "lerntext": "prawdziwy",
              "de": "wahr",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zły",
              "lerntext": "zły",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ładny",
              "lerntext": "ładny",
              "de": "hübsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gorący",
              "lerntext": "gorący",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "możliwy",
              "lerntext": "możliwy",
              "de": "möglich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "angielski",
              "lerntext": "angielski",
              "de": "englisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "poprzedni",
              "lerntext": "poprzedni",
              "de": "voriger",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bezpieczny",
              "lerntext": "bezpieczny",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "następny",
              "lerntext": "następny",
              "de": "nächster",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dobry",
              "lerntext": "dobry",
              "de": "gut",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "17.6"
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
              "de": "ausländisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "prawdziwy",
              "lerntext": "prawdziwy",
              "de": "wahr",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zły",
              "lerntext": "zły",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ładny",
              "lerntext": "ładny",
              "de": "hübsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gorący",
              "lerntext": "gorący",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "możliwy",
              "lerntext": "możliwy",
              "de": "möglich",
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]",
          "wortarten": {
            "robię": "v"
          }
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
              "schrift": "mniej",
              "lerntext": "mniej",
              "de": "weniger"
            },
            {
              "schrift": "rzadko",
              "lerntext": "rzadko",
              "de": "selten"
            },
            {
              "schrift": "jeszcze",
              "lerntext": "jeszcze",
              "de": "noch"
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
          "lerntext": "robię to [Slot]",
          "wortarten": {
            "robię": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "naprawdę",
              "lerntext": "naprawdę",
              "de": "wirklich"
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
            },
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
              "schrift": "mało",
              "lerntext": "mało",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "trochę",
              "lerntext": "trochę",
              "de": "ein bisschen",
              "wieder": true
            },
            {
              "schrift": "mniej",
              "lerntext": "mniej",
              "de": "weniger",
              "wieder": true
            },
            {
              "schrift": "rzadko",
              "lerntext": "rzadko",
              "de": "selten",
              "wieder": true
            },
            {
              "schrift": "jeszcze",
              "lerntext": "jeszcze",
              "de": "noch",
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]",
          "wortarten": {
            "robię": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
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
            },
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
              "schrift": "naprawdę",
              "lerntext": "naprawdę",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "prawie",
              "lerntext": "prawie",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "dokładnie",
              "lerntext": "dokładnie",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "znowu",
              "lerntext": "znowu",
              "de": "wieder",
              "wieder": true
            },
            {
              "schrift": "w środku",
              "lerntext": "w środku",
              "de": "drinnen",
              "wieder": true
            },
            {
              "schrift": "mało",
              "lerntext": "mało",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "trochę",
              "lerntext": "trochę",
              "de": "ein bisschen",
              "wieder": true
            },
            {
              "schrift": "mniej",
              "lerntext": "mniej",
              "de": "weniger",
              "wieder": true
            },
            {
              "schrift": "rzadko",
              "lerntext": "rzadko",
              "de": "selten",
              "wieder": true
            },
            {
              "schrift": "jeszcze",
              "lerntext": "jeszcze",
              "de": "noch",
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]",
          "wortarten": {
            "robię": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
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
              "schrift": "spokojnie",
              "lerntext": "spokojnie",
              "de": "ruhig"
            },
            {
              "schrift": "późno",
              "lerntext": "późno",
              "de": "spät"
            },
            {
              "schrift": "na zewnątrz",
              "lerntext": "na zewnątrz",
              "de": "draußen"
            },
            {
              "schrift": "w domu",
              "lerntext": "w domu",
              "de": "zu Hause",
              "wieder": true
            },
            {
              "schrift": "nawet",
              "lerntext": "nawet",
              "de": "sogar",
              "wieder": true
            },
            {
              "schrift": "wreszcie",
              "lerntext": "wreszcie",
              "de": "endlich",
              "wieder": true
            },
            {
              "schrift": "niestety",
              "lerntext": "niestety",
              "de": "leider",
              "wieder": true
            },
            {
              "schrift": "chętnie",
              "lerntext": "chętnie",
              "de": "gerne",
              "wieder": true
            },
            {
              "schrift": "naprawdę",
              "lerntext": "naprawdę",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "prawie",
              "lerntext": "prawie",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "dokładnie",
              "lerntext": "dokładnie",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "znowu",
              "lerntext": "znowu",
              "de": "wieder",
              "wieder": true
            },
            {
              "schrift": "w środku",
              "lerntext": "w środku",
              "de": "drinnen",
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]",
          "wortarten": {
            "robię": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wszędzie",
              "lerntext": "wszędzie",
              "de": "überall"
            },
            {
              "schrift": "wcześnie",
              "lerntext": "wcześnie",
              "de": "früh"
            },
            {
              "schrift": "prosto",
              "lerntext": "prosto",
              "de": "geradeaus",
              "wieder": true
            },
            {
              "schrift": "daleko",
              "lerntext": "daleko",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "spokojnie",
              "lerntext": "spokojnie",
              "de": "ruhig",
              "wieder": true
            },
            {
              "schrift": "późno",
              "lerntext": "późno",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "na zewnątrz",
              "lerntext": "na zewnątrz",
              "de": "draußen",
              "wieder": true
            },
            {
              "schrift": "w domu",
              "lerntext": "w domu",
              "de": "zu Hause",
              "wieder": true
            },
            {
              "schrift": "nawet",
              "lerntext": "nawet",
              "de": "sogar",
              "wieder": true
            },
            {
              "schrift": "wreszcie",
              "lerntext": "wreszcie",
              "de": "endlich",
              "wieder": true
            },
            {
              "schrift": "niestety",
              "lerntext": "niestety",
              "de": "leider",
              "wieder": true
            },
            {
              "schrift": "chętnie",
              "lerntext": "chętnie",
              "de": "gerne",
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
          "schrift": "robię to [Slot]",
          "lerntext": "robię to [Slot]",
          "wortarten": {
            "robię": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wszędzie",
              "lerntext": "wszędzie",
              "de": "überall",
              "wieder": true
            },
            {
              "schrift": "wcześnie",
              "lerntext": "wcześnie",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "prosto",
              "lerntext": "prosto",
              "de": "geradeaus",
              "wieder": true
            },
            {
              "schrift": "daleko",
              "lerntext": "daleko",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "spokojnie",
              "lerntext": "spokojnie",
              "de": "ruhig",
              "wieder": true
            },
            {
              "schrift": "późno",
              "lerntext": "późno",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "na zewnątrz",
              "lerntext": "na zewnątrz",
              "de": "draußen",
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
              "de": "es",
              "c": "p"
            },
            {
              "schrift": "ci",
              "lerntext": "ci",
              "de": "dir",
              "c": "p"
            },
            {
              "schrift": "jej",
              "lerntext": "jej",
              "de": "ihr",
              "c": "p"
            },
            {
              "schrift": "ich",
              "lerntext": "ich",
              "de": "ihnen",
              "c": "p"
            },
            {
              "schrift": "siebie",
              "lerntext": "siebie",
              "de": "sich selbst",
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
              "de": "euer",
              "c": "p"
            },
            {
              "schrift": "swój",
              "lerntext": "swój",
              "de": "sein eigener",
              "c": "p"
            },
            {
              "schrift": "tamten",
              "lerntext": "tamten",
              "de": "jener",
              "c": "p"
            },
            {
              "schrift": "ktoś",
              "lerntext": "ktoś",
              "de": "jemand",
              "c": "p"
            },
            {
              "schrift": "nikt",
              "lerntext": "nikt",
              "de": "niemand",
              "c": "p"
            },
            {
              "schrift": "ono",
              "lerntext": "ono",
              "de": "es",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ci",
              "lerntext": "ci",
              "de": "dir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "jej",
              "lerntext": "jej",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ich",
              "lerntext": "ich",
              "de": "ihnen",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "siebie",
              "lerntext": "siebie",
              "de": "sich selbst",
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
              "de": "nichts",
              "c": "p"
            },
            {
              "schrift": "inny",
              "lerntext": "inny",
              "de": "anderer",
              "c": "p"
            },
            {
              "schrift": "taki",
              "lerntext": "taki",
              "de": "solcher",
              "c": "p"
            },
            {
              "schrift": "każdy",
              "lerntext": "każdy",
              "de": "jeder",
              "c": "p"
            },
            {
              "schrift": "sam",
              "lerntext": "sam",
              "de": "selbst",
              "c": "p"
            },
            {
              "schrift": "wasz",
              "lerntext": "wasz",
              "de": "euer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "swój",
              "lerntext": "swój",
              "de": "sein eigener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tamten",
              "lerntext": "tamten",
              "de": "jener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ktoś",
              "lerntext": "ktoś",
              "de": "jemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nikt",
              "lerntext": "nikt",
              "de": "niemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ono",
              "lerntext": "ono",
              "de": "es",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ci",
              "lerntext": "ci",
              "de": "dir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "jej",
              "lerntext": "jej",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ich",
              "lerntext": "ich",
              "de": "ihnen",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "siebie",
              "lerntext": "siebie",
              "de": "sich selbst",
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
              "de": "beide",
              "c": "p"
            },
            {
              "schrift": "siebie nawzajem",
              "lerntext": "siebie nawzajem",
              "de": "einander",
              "c": "p"
            },
            {
              "schrift": "oni",
              "lerntext": "oni",
              "de": "sie (Mehrzahl, männlich)",
              "c": "p"
            },
            {
              "schrift": "one",
              "lerntext": "one",
              "de": "sie (Mehrzahl, nicht männlich)",
              "c": "p"
            },
            {
              "schrift": "nic",
              "lerntext": "nic",
              "de": "nichts",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "inny",
              "lerntext": "inny",
              "de": "anderer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "taki",
              "lerntext": "taki",
              "de": "solcher",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "każdy",
              "lerntext": "każdy",
              "de": "jeder",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "sam",
              "lerntext": "sam",
              "de": "selbst",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "wasz",
              "lerntext": "wasz",
              "de": "euer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "swój",
              "lerntext": "swój",
              "de": "sein eigener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tamten",
              "lerntext": "tamten",
              "de": "jener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ktoś",
              "lerntext": "ktoś",
              "de": "jemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nikt",
              "lerntext": "nikt",
              "de": "niemand",
              "c": "p",
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
              "de": "beide",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "siebie nawzajem",
              "lerntext": "siebie nawzajem",
              "de": "einander",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "oni",
              "lerntext": "oni",
              "de": "sie (Mehrzahl, männlich)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "one",
              "lerntext": "one",
              "de": "sie (Mehrzahl, nicht männlich)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nic",
              "lerntext": "nic",
              "de": "nichts",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "inny",
              "lerntext": "inny",
              "de": "anderer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "taki",
              "lerntext": "taki",
              "de": "solcher",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "każdy",
              "lerntext": "każdy",
              "de": "jeder",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "sam",
              "lerntext": "sam",
              "de": "selbst",
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
              "de": "beide",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "siebie nawzajem",
              "lerntext": "siebie nawzajem",
              "de": "einander",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "oni",
              "lerntext": "oni",
              "de": "sie (Mehrzahl, männlich)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "one",
              "lerntext": "one",
              "de": "sie (Mehrzahl, nicht männlich)",
              "c": "p",
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
            },
            {
              "schrift": "trzydzieści",
              "lerntext": "trzydzieści",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "milion",
              "lerntext": "milion",
              "de": "Million",
              "wieder": true
            },
            {
              "schrift": "pierwszy",
              "lerntext": "pierwszy",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "drugi",
              "lerntext": "drugi",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "trzeci",
              "lerntext": "trzeci",
              "de": "dritter",
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
              "schrift": "ostatni",
              "lerntext": "ostatni",
              "de": "letzter",
              "wieder": true
            },
            {
              "schrift": "pół",
              "lerntext": "pół",
              "de": "halb",
              "wieder": true
            },
            {
              "schrift": "podwójny",
              "lerntext": "podwójny",
              "de": "doppelt",
              "wieder": true
            },
            {
              "schrift": "para",
              "lerntext": "para",
              "de": "Paar",
              "wieder": true
            },
            {
              "schrift": "trzydzieści",
              "lerntext": "trzydzieści",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "milion",
              "lerntext": "milion",
              "de": "Million",
              "wieder": true
            },
            {
              "schrift": "pierwszy",
              "lerntext": "pierwszy",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "drugi",
              "lerntext": "drugi",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "trzeci",
              "lerntext": "trzeci",
              "de": "dritter",
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
              "schrift": "ostatni",
              "lerntext": "ostatni",
              "de": "letzter",
              "wieder": true
            },
            {
              "schrift": "pół",
              "lerntext": "pół",
              "de": "halb",
              "wieder": true
            },
            {
              "schrift": "podwójny",
              "lerntext": "podwójny",
              "de": "doppelt",
              "wieder": true
            },
            {
              "schrift": "para",
              "lerntext": "para",
              "de": "Paar",
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
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem",
          "wortarten": {
            "jest": "v"
          }
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
        "id": "21.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem",
          "wortarten": {
            "jest": "v"
          }
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
            },
            {
              "schrift": "po",
              "lerntext": "po",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "wokół",
              "lerntext": "wokół",
              "de": "um herum",
              "wieder": true
            },
            {
              "schrift": "wzdłuż",
              "lerntext": "wzdłuż",
              "de": "entlang",
              "wieder": true
            },
            {
              "schrift": "zamiast",
              "lerntext": "zamiast",
              "de": "anstatt",
              "wieder": true
            },
            {
              "schrift": "blisko",
              "lerntext": "blisko",
              "de": "nahe",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "21.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest [Slot] domem",
          "lerntext": "to jest [Slot] domem",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nad",
              "lerntext": "nad",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "oprócz",
              "lerntext": "oprócz",
              "de": "außer",
              "wieder": true
            },
            {
              "schrift": "po",
              "lerntext": "po",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "wokół",
              "lerntext": "wokół",
              "de": "um herum",
              "wieder": true
            },
            {
              "schrift": "wzdłuż",
              "lerntext": "wzdłuż",
              "de": "entlang",
              "wieder": true
            },
            {
              "schrift": "zamiast",
              "lerntext": "zamiast",
              "de": "anstatt",
              "wieder": true
            },
            {
              "schrift": "blisko",
              "lerntext": "blisko",
              "de": "nahe",
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
          "schrift": "przyjdę [Slot] mogę",
          "lerntext": "przyjdę [Slot] mogę",
          "wortarten": {
            "przyjdę": "v",
            "mogę": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "niż",
              "lerntext": "niż",
              "de": "als (Vergleich)",
              "c": "k"
            },
            {
              "schrift": "dlatego",
              "lerntext": "dlatego",
              "de": "deshalb",
              "c": "k"
            },
            {
              "schrift": "jednak",
              "lerntext": "jednak",
              "de": "jedoch",
              "c": "k"
            },
            {
              "schrift": "oraz",
              "lerntext": "oraz",
              "de": "sowie",
              "c": "k"
            },
            {
              "schrift": "ponieważ",
              "lerntext": "ponieważ",
              "de": "weil (förmlich)",
              "c": "k"
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
          "schrift": "przyjdę [Slot] mogę",
          "lerntext": "przyjdę [Slot] mogę",
          "wortarten": {
            "przyjdę": "v",
            "mogę": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "czyli",
              "lerntext": "czyli",
              "de": "das heißt",
              "c": "k"
            },
            {
              "schrift": "niż",
              "lerntext": "niż",
              "de": "als (Vergleich)",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "dlatego",
              "lerntext": "dlatego",
              "de": "deshalb",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "jednak",
              "lerntext": "jednak",
              "de": "jedoch",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "oraz",
              "lerntext": "oraz",
              "de": "sowie",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "ponieważ",
              "lerntext": "ponieważ",
              "de": "weil (förmlich)",
              "c": "k",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "22.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "przyjdę [Slot] mogę",
          "lerntext": "przyjdę [Slot] mogę",
          "wortarten": {
            "przyjdę": "v",
            "mogę": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "czyli",
              "lerntext": "czyli",
              "de": "das heißt",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "niż",
              "lerntext": "niż",
              "de": "als (Vergleich)",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "dlatego",
              "lerntext": "dlatego",
              "de": "deshalb",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "jednak",
              "lerntext": "jednak",
              "de": "jedoch",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "oraz",
              "lerntext": "oraz",
              "de": "sowie",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "ponieważ",
              "lerntext": "ponieważ",
              "de": "weil (förmlich)",
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
          "schrift": "[Slot] to jest?",
          "lerntext": "[Slot] to jest?",
          "wortarten": {
            "jest?": "v"
          }
        },
        "frameDe": "[Slot] ist es?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ile",
              "lerntext": "ile",
              "de": "wie viel"
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
  },
  {
    "number": 24,
    "title": "Was hast du gemacht?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "ja [Slot]",
          "lerntext": "ja [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "patrzył",
              "lerntext": "patrzył",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "kupował",
              "lerntext": "kupował",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "widział",
              "lerntext": "widział",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "robił",
              "lerntext": "robił",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "znalazł",
              "lerntext": "znalazł",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "brał",
              "lerntext": "brał",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czytał",
              "lerntext": "czytał",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pisał",
              "lerntext": "pisał",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słyszał",
              "lerntext": "słyszał",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tracił",
              "lerntext": "tracił",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rozumiał",
              "lerntext": "rozumiał",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "miał nadzieję",
              "lerntext": "miał nadzieję",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pił",
              "lerntext": "pił",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pytał",
              "lerntext": "pytał",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "szukał",
              "lerntext": "szukał",
              "de": "suchen",
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
          "schrift": "ja [Slot]",
          "lerntext": "ja [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "brał",
              "lerntext": "brał",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "czytał",
              "lerntext": "czytał",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "pisał",
              "lerntext": "pisał",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "słyszał",
              "lerntext": "słyszał",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "tracił",
              "lerntext": "tracił",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "patrzył",
              "lerntext": "patrzył",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kupował",
              "lerntext": "kupował",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "widział",
              "lerntext": "widział",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "robił",
              "lerntext": "robił",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "znalazł",
              "lerntext": "znalazł",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rozumiał",
              "lerntext": "rozumiał",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "miał nadzieję",
              "lerntext": "miał nadzieję",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śmiał się",
              "lerntext": "śmiał się",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spał",
              "lerntext": "spał",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebował",
              "lerntext": "potrzebował",
              "de": "brauchen",
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
          "schrift": "wczoraj [Slot]",
          "lerntext": "wczoraj [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pracował",
              "lerntext": "pracował",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "grał",
              "lerntext": "grał",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "tańczył",
              "lerntext": "tańczył",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "spał",
              "lerntext": "spał",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "czekał",
              "lerntext": "czekał",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "odpowiadał",
              "lerntext": "odpowiadał",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płacił",
              "lerntext": "płacił",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "szukał",
              "lerntext": "szukał",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pytał",
              "lerntext": "pytał",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pomagał",
              "lerntext": "pomagał",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwonił",
              "lerntext": "dzwonił",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wierzył",
              "lerntext": "wierzył",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używał",
              "lerntext": "używał",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rozumiał",
              "lerntext": "rozumiał",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "umierał",
              "lerntext": "umierał",
              "de": "sterben",
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
          "schrift": "wczoraj [Slot]",
          "lerntext": "wczoraj [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szukał",
              "lerntext": "szukał",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "pytał",
              "lerntext": "pytał",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "odpowiadał",
              "lerntext": "odpowiadał",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "pomagał",
              "lerntext": "pomagał",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "płacił",
              "lerntext": "płacił",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "pracował",
              "lerntext": "pracował",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "grał",
              "lerntext": "grał",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tańczył",
              "lerntext": "tańczył",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spał",
              "lerntext": "spał",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czekał",
              "lerntext": "czekał",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jadł",
              "lerntext": "jadł",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "siedział",
              "lerntext": "siedział",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podróżował",
              "lerntext": "podróżował",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stał",
              "lerntext": "stał",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "miał nadzieję",
              "lerntext": "miał nadzieję",
              "de": "hoffen",
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
          "schrift": "już [Slot]",
          "lerntext": "już [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "wygrywał",
              "lerntext": "wygrywał",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "zapominał",
              "lerntext": "zapominał",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "rozumiał",
              "lerntext": "rozumiał",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "spotykał",
              "lerntext": "spotykał",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "dał",
              "lerntext": "dał",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "powiedział",
              "lerntext": "powiedział",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mówił",
              "lerntext": "mówił",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "otwierał",
              "lerntext": "otwierał",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zamykał",
              "lerntext": "zamykał",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mył",
              "lerntext": "mył",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wiedział",
              "lerntext": "wiedział",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musiał",
              "lerntext": "musiał",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mógł",
              "lerntext": "mógł",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płakał",
              "lerntext": "płakał",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żył",
              "lerntext": "żył",
              "de": "leben",
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
          "schrift": "już [Slot]",
          "lerntext": "już [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "powiedział",
              "lerntext": "powiedział",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "mówił",
              "lerntext": "mówił",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "otwierał",
              "lerntext": "otwierał",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "zamykał",
              "lerntext": "zamykał",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "mył",
              "lerntext": "mył",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "dał",
              "lerntext": "dał",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wygrywał",
              "lerntext": "wygrywał",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zapominał",
              "lerntext": "zapominał",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rozumiał",
              "lerntext": "rozumiał",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spotykał",
              "lerntext": "spotykał",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazywał",
              "lerntext": "pokazywał",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pił",
              "lerntext": "pił",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śmiał się",
              "lerntext": "śmiał się",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stawał się",
              "lerntext": "stawał się",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kochał",
              "lerntext": "kochał",
              "de": "lieben",
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
          "schrift": "ty [Slot]",
          "lerntext": "ty [Slot]",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "patrzysz",
              "lerntext": "patrzysz",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "kupujesz",
              "lerntext": "kupujesz",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "widzisz",
              "lerntext": "widzisz",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "robisz",
              "lerntext": "robisz",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "znajdziesz",
              "lerntext": "znajdziesz",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "bierzesz",
              "lerntext": "bierzesz",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czytasz",
              "lerntext": "czytasz",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piszesz",
              "lerntext": "piszesz",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słuchasz",
              "lerntext": "słuchasz",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jedziesz",
              "lerntext": "jedziesz",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myślisz",
              "lerntext": "myślisz",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebujesz",
              "lerntext": "potrzebujesz",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwonisz",
              "lerntext": "dzwonisz",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wierzysz",
              "lerntext": "wierzysz",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używasz",
              "lerntext": "używasz",
              "de": "benutzen",
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
          "schrift": "ty [Slot]",
          "lerntext": "ty [Slot]",
          "wortarten": {
            "ty": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bierzesz",
              "lerntext": "bierzesz",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "czytasz",
              "lerntext": "czytasz",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "piszesz",
              "lerntext": "piszesz",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "patrzysz",
              "lerntext": "patrzysz",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kupujesz",
              "lerntext": "kupujesz",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "widzisz",
              "lerntext": "widzisz",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "robisz",
              "lerntext": "robisz",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "znajdziesz",
              "lerntext": "znajdziesz",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zostajesz",
              "lerntext": "zostajesz",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mieszkasz",
              "lerntext": "mieszkasz",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "masz",
              "lerntext": "masz",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chcesz",
              "lerntext": "chcesz",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jesteś",
              "lerntext": "jesteś",
              "de": "sein",
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
          "schrift": "on [Slot]",
          "lerntext": "on [Slot]",
          "wortarten": {
            "on": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pracuje",
              "lerntext": "pracuje",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "gra",
              "lerntext": "gra",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "tańczy",
              "lerntext": "tańczy",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "śpi",
              "lerntext": "śpi",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "czeka",
              "lerntext": "czeka",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "odpowiada",
              "lerntext": "odpowiada",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "szuka",
              "lerntext": "szuka",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pyta",
              "lerntext": "pyta",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "umiera",
              "lerntext": "umiera",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "je",
              "lerntext": "je",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "siedzi",
              "lerntext": "siedzi",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podróżuje",
              "lerntext": "podróżuje",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stoi",
              "lerntext": "stoi",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lubi",
              "lerntext": "lubi",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dostaje",
              "lerntext": "dostaje",
              "de": "bekommen",
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
          "schrift": "on [Slot]",
          "lerntext": "on [Slot]",
          "wortarten": {
            "on": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szuka",
              "lerntext": "szuka",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "pyta",
              "lerntext": "pyta",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "odpowiada",
              "lerntext": "odpowiada",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "pracuje",
              "lerntext": "pracuje",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gra",
              "lerntext": "gra",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tańczy",
              "lerntext": "tańczy",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śpi",
              "lerntext": "śpi",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czeka",
              "lerntext": "czeka",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ma nadzieję",
              "lerntext": "ma nadzieję",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wie",
              "lerntext": "wie",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musi",
              "lerntext": "musi",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "może",
              "lerntext": "może",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płacze",
              "lerntext": "płacze",
              "de": "weinen",
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
          "schrift": "my [Slot]",
          "lerntext": "my [Slot]",
          "wortarten": {
            "my": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "wygrywamy",
              "lerntext": "wygrywamy",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "zapominamy",
              "lerntext": "zapominamy",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "rozumiemy",
              "lerntext": "rozumiemy",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "spotykamy",
              "lerntext": "spotykamy",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "damy",
              "lerntext": "damy",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "powiemy",
              "lerntext": "powiemy",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mówimy",
              "lerntext": "mówimy",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "otwieramy",
              "lerntext": "otwieramy",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żyjemy",
              "lerntext": "żyjemy",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazujemy",
              "lerntext": "pokazujemy",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pijemy",
              "lerntext": "pijemy",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śmiejemy się",
              "lerntext": "śmiejemy się",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stajemy się",
              "lerntext": "stajemy się",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kochamy",
              "lerntext": "kochamy",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słuchamy",
              "lerntext": "słuchamy",
              "de": "zuhören",
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
          "schrift": "my [Slot]",
          "lerntext": "my [Slot]",
          "wortarten": {
            "my": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "powiemy",
              "lerntext": "powiemy",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "mówimy",
              "lerntext": "mówimy",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "otwieramy",
              "lerntext": "otwieramy",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "damy",
              "lerntext": "damy",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wygrywamy",
              "lerntext": "wygrywamy",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zapominamy",
              "lerntext": "zapominamy",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rozumiemy",
              "lerntext": "rozumiemy",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spotykamy",
              "lerntext": "spotykamy",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jedziemy",
              "lerntext": "jedziemy",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myślimy",
              "lerntext": "myślimy",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebujemy",
              "lerntext": "potrzebujemy",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwonimy",
              "lerntext": "dzwonimy",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wierzymy",
              "lerntext": "wierzymy",
              "de": "glauben",
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
          "schrift": "ona [Slot]",
          "lerntext": "ona [Slot]",
          "wortarten": {
            "ona": "p"
          }
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mieszkają",
              "lerntext": "mieszkają",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "zostają",
              "lerntext": "zostają",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "śmieją się",
              "lerntext": "śmieją się",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "płaczą",
              "lerntext": "płaczą",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "myślą",
              "lerntext": "myślą",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "mają nadzieję",
              "lerntext": "mają nadzieję",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wierzą",
              "lerntext": "wierzą",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebują",
              "lerntext": "potrzebują",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używają",
              "lerntext": "używają",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mają",
              "lerntext": "mają",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chcą",
              "lerntext": "chcą",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "są",
              "lerntext": "są",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "umierają",
              "lerntext": "umierają",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jedzą",
              "lerntext": "jedzą",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "siedzą",
              "lerntext": "siedzą",
              "de": "sitzen",
              "c": "v",
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
          "schrift": "ona [Slot]",
          "lerntext": "ona [Slot]",
          "wortarten": {
            "ona": "p"
          }
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "ona",
            "lerntext": "ona",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "wierzą",
              "lerntext": "wierzą",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "mają nadzieję",
              "lerntext": "mają nadzieję",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "potrzebują",
              "lerntext": "potrzebują",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "mieszkają",
              "lerntext": "mieszkają",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zostają",
              "lerntext": "zostają",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śmieją się",
              "lerntext": "śmieją się",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płaczą",
              "lerntext": "płaczą",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myślą",
              "lerntext": "myślą",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podróżują",
              "lerntext": "podróżują",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stoją",
              "lerntext": "stoją",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lubią",
              "lerntext": "lubią",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dostają",
              "lerntext": "dostają",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wiedzą",
              "lerntext": "wiedzą",
              "de": "wissen",
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
          "schrift": "to jest bardziej [Slot]",
          "lerntext": "to jest bardziej [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ciekawy",
              "lerntext": "ciekawy",
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "trudny",
              "lerntext": "trudny",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "ważny",
              "lerntext": "ważny",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "niebezpieczny",
              "lerntext": "niebezpieczny",
              "de": "gefährlich",
              "c": "a"
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "brudny",
              "lerntext": "brudny",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brzydki",
              "lerntext": "brzydki",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niski",
              "lerntext": "niski",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "biały",
              "lerntext": "biały",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zamknięty",
              "lerntext": "zamknięty",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "więcej",
            "lerntext": "więcej",
            "de": "mehr"
          }
        ],
        "id": "26.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest bardziej [Slot]",
          "lerntext": "to jest bardziej [Slot]",
          "wortarten": {
            "jest": "v"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "brudny",
              "lerntext": "brudny",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "ciekawy",
              "lerntext": "ciekawy",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "trudny",
              "lerntext": "trudny",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ważny",
              "lerntext": "ważny",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niebezpieczny",
              "lerntext": "niebezpieczny",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brzydki",
              "lerntext": "brzydki",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szary",
              "lerntext": "szary",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brązowy",
              "lerntext": "brązowy",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wysoki",
              "lerntext": "wysoki",
              "de": "hoch",
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
          "schrift": "jestem tak [Slot] jak ty",
          "lerntext": "jestem tak [Slot] jak ty",
          "wortarten": {
            "jestem": "v",
            "ty": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brzydki",
              "lerntext": "brzydki",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zielony",
              "lerntext": "zielony",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gotowy",
              "lerntext": "gotowy",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czerwony",
              "lerntext": "czerwony",
              "de": "rot",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "gdy",
            "lerntext": "gdy",
            "de": "als",
            "c": "k"
          }
        ],
        "id": "26.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "jestem tak [Slot] jak ty",
          "lerntext": "jestem tak [Slot] jak ty",
          "wortarten": {
            "jestem": "v",
            "ty": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zwykły",
              "lerntext": "zwykły",
              "de": "gewöhnlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "miły",
              "lerntext": "miły",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tani",
              "lerntext": "tani",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niski",
              "lerntext": "niski",
              "de": "niedrig",
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
          "schrift": "ja czuję się [Slot]",
          "lerntext": "ja czuję się [Slot]",
          "wortarten": {
            "ja": "p",
            "się": "p"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "gotowy",
              "lerntext": "gotowy",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "otwarty",
              "lerntext": "otwarty",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niebieski",
              "lerntext": "niebieski",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach",
              "c": "a",
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
          "schrift": "ja czuję się [Slot]",
          "lerntext": "ja czuję się [Slot]",
          "wortarten": {
            "ja": "p",
            "się": "p"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gotowy",
              "lerntext": "gotowy",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "smutny",
              "lerntext": "smutny",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zmęczony",
              "lerntext": "zmęczony",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciężki",
              "lerntext": "ciężki",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "żółty",
              "lerntext": "żółty",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lekki",
              "lerntext": "lekki",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "śmieszny",
              "lerntext": "śmieszny",
              "de": "lustig",
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
          "schrift": "my spotykamy się [Slot]",
          "lerntext": "my spotykamy się [Slot]",
          "wortarten": {
            "my": "p",
            "spotykamy": "v",
            "się": "p"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dzisiaj",
              "lerntext": "dzisiaj",
              "de": "heute"
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
              "schrift": "wczoraj",
              "lerntext": "wczoraj",
              "de": "gestern"
            },
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "nigdy",
              "lerntext": "nigdy",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "zawsze",
              "lerntext": "zawsze",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "więcej",
              "lerntext": "więcej",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "powoli",
              "lerntext": "powoli",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "może",
              "lerntext": "może",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "źle",
              "lerntext": "źle",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "też",
              "lerntext": "też",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "dużo",
              "lerntext": "dużo",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "tylko",
              "lerntext": "tylko",
              "de": "nur",
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
          "schrift": "my spotykamy się [Slot]",
          "lerntext": "my spotykamy się [Slot]",
          "wortarten": {
            "my": "p",
            "spotykamy": "v",
            "się": "p"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft"
            },
            {
              "schrift": "nigdy",
              "lerntext": "nigdy",
              "de": "nie"
            },
            {
              "schrift": "zawsze",
              "lerntext": "zawsze",
              "de": "immer"
            },
            {
              "schrift": "dzisiaj",
              "lerntext": "dzisiaj",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "wkrótce",
              "lerntext": "wkrótce",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "teraz",
              "lerntext": "teraz",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "wczoraj",
              "lerntext": "wczoraj",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "jutro",
              "lerntext": "jutro",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "więcej",
              "lerntext": "więcej",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "powoli",
              "lerntext": "powoli",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "szybko",
              "lerntext": "szybko",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "może",
              "lerntext": "może",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "dobrze",
              "lerntext": "dobrze",
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
          "schrift": "zostaję tutaj, [Slot] jestem zmęczony",
          "lerntext": "zostaję tutaj, [Slot] jestem zmęczony",
          "wortarten": {
            "zostaję": "v",
            "jestem": "v",
            "zmęczony": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "jeśli",
              "lerntext": "jeśli",
              "de": "wenn",
              "c": "k"
            },
            {
              "schrift": "chociaż",
              "lerntext": "chociaż",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "gdy",
              "lerntext": "gdy",
              "de": "als",
              "c": "k"
            },
            {
              "schrift": "ale",
              "lerntext": "ale",
              "de": "aber",
              "c": "k"
            },
            {
              "schrift": "albo",
              "lerntext": "albo",
              "de": "oder",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "i",
              "lerntext": "i",
              "de": "und",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "że",
              "lerntext": "że",
              "de": "dass",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "więc",
              "lerntext": "więc",
              "de": "also",
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
          "schrift": "zostaję tutaj, [Slot] jestem zmęczony",
          "lerntext": "zostaję tutaj, [Slot] jestem zmęczony",
          "wortarten": {
            "zostaję": "v",
            "jestem": "v",
            "zmęczony": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "albo",
              "lerntext": "albo",
              "de": "oder",
              "c": "k"
            },
            {
              "schrift": "i",
              "lerntext": "i",
              "de": "und",
              "c": "k"
            },
            {
              "schrift": "jeśli",
              "lerntext": "jeśli",
              "de": "wenn",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "gdy",
              "lerntext": "gdy",
              "de": "als",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "bo",
              "lerntext": "bo",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "chociaż",
              "lerntext": "chociaż",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "ale",
              "lerntext": "ale",
              "de": "aber",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "że",
              "lerntext": "że",
              "de": "dass",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "więc",
              "lerntext": "więc",
              "de": "also",
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
          "schrift": "myślę, że to jest [Slot]",
          "lerntext": "myślę, że to jest [Slot]",
          "wortarten": {
            "myślę,": "v",
            "że": "k",
            "jest": "v"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "biały",
              "lerntext": "biały",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nudny",
              "lerntext": "nudny",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zamknięty",
              "lerntext": "zamknięty",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szary",
              "lerntext": "szary",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brązowy",
              "lerntext": "brązowy",
              "de": "braun",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "że",
            "lerntext": "że",
            "de": "dass",
            "c": "k"
          }
        ],
        "id": "28.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "myślę, że to jest [Slot]",
          "lerntext": "myślę, że to jest [Slot]",
          "wortarten": {
            "myślę,": "v",
            "że": "k",
            "jest": "v"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brzydki",
              "lerntext": "brzydki",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wysoki",
              "lerntext": "wysoki",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zielony",
              "lerntext": "zielony",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czerwony",
              "lerntext": "czerwony",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zwykły",
              "lerntext": "zwykły",
              "de": "gewöhnlich",
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
          "schrift": "jeśli mam czas, chcę [Slot]",
          "lerntext": "jeśli mam czas, chcę [Slot]",
          "wortarten": {
            "jeśli": "k",
            "mam": "v",
            "czas,": "n",
            "chcę": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "śmiać się",
              "lerntext": "śmiać się",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "mieć nadzieję",
              "lerntext": "mieć nadzieję",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wierzyć",
              "lerntext": "wierzyć",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebować",
              "lerntext": "potrzebować",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "móc",
              "lerntext": "móc",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pić",
              "lerntext": "pić",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stawać się",
              "lerntext": "stawać się",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kochać",
              "lerntext": "kochać",
              "de": "lieben",
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
          "schrift": "jeśli mam czas, chcę [Slot]",
          "lerntext": "jeśli mam czas, chcę [Slot]",
          "wortarten": {
            "jeśli": "k",
            "mam": "v",
            "czas,": "n",
            "chcę": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wierzyć",
              "lerntext": "wierzyć",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "mieć nadzieję",
              "lerntext": "mieć nadzieję",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "potrzebować",
              "lerntext": "potrzebować",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śmiać się",
              "lerntext": "śmiać się",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwonić",
              "lerntext": "dzwonić",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używać",
              "lerntext": "używać",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mieć",
              "lerntext": "mieć",
              "de": "haben",
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
          "schrift": "czy możesz [Slot], proszę?",
          "lerntext": "czy możesz [Slot], proszę?",
          "wortarten": {
            "możesz": "v"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "płacić",
              "lerntext": "płacić",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pomagać",
              "lerntext": "pomagać",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chcieć",
              "lerntext": "chcieć",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "być",
              "lerntext": "być",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "umierać",
              "lerntext": "umierać",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jeść",
              "lerntext": "jeść",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "siedzieć",
              "lerntext": "siedzieć",
              "de": "sitzen",
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
          "schrift": "czy możesz [Slot], proszę?",
          "lerntext": "czy możesz [Slot], proszę?",
          "wortarten": {
            "możesz": "v"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "pomagać",
              "lerntext": "pomagać",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "płacić",
              "lerntext": "płacić",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podróżować",
              "lerntext": "podróżować",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stać",
              "lerntext": "stać",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lubić",
              "lerntext": "lubić",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dostawać",
              "lerntext": "dostawać",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wiedzieć",
              "lerntext": "wiedzieć",
              "de": "wissen",
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
          "schrift": "ty musisz [Slot]",
          "lerntext": "ty musisz [Slot]",
          "wortarten": {
            "ty": "p",
            "musisz": "v"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "rozumieć",
              "lerntext": "rozumieć",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "dać",
              "lerntext": "dać",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "powiedzieć",
              "lerntext": "powiedzieć",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "móc",
              "lerntext": "móc",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pić",
              "lerntext": "pić",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stawać się",
              "lerntext": "stawać się",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kochać",
              "lerntext": "kochać",
              "de": "lieben",
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
          "schrift": "ty musisz [Slot]",
          "lerntext": "ty musisz [Slot]",
          "wortarten": {
            "ty": "p",
            "musisz": "v"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "ty",
            "lerntext": "ty",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "powiedzieć",
              "lerntext": "powiedzieć",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "dać",
              "lerntext": "dać",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rozumieć",
              "lerntext": "rozumieć",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwonić",
              "lerntext": "dzwonić",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używać",
              "lerntext": "używać",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mieć",
              "lerntext": "mieć",
              "de": "haben",
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
          "schrift": "ja daję książkę [Slot]",
          "lerntext": "ja daję książkę [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)",
              "c": "n"
            },
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "odpowiedź",
              "lerntext": "odpowiedź",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "egzamin",
              "lerntext": "egzamin",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "praca",
              "lerntext": "praca",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ubranie",
              "lerntext": "ubranie",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sukienka",
              "lerntext": "sukienka",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "warzywa",
              "lerntext": "warzywa",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śniadanie",
              "lerntext": "śniadanie",
              "de": "Frühstück",
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
          "schrift": "ja daję książkę [Slot]",
          "lerntext": "ja daję książkę [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "odpowiedź",
              "lerntext": "odpowiedź",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "egzamin",
              "lerntext": "egzamin",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "praca",
              "lerntext": "praca",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "głowa",
              "lerntext": "głowa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piwo",
              "lerntext": "piwo",
              "de": "Bier",
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
          "schrift": "ja pokazuję miasto [Slot]",
          "lerntext": "ja pokazuję miasto [Slot]",
          "wortarten": {
            "ja": "p",
            "pokazuję": "v",
            "miasto": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)",
              "c": "n"
            },
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "odpowiedź",
              "lerntext": "odpowiedź",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "egzamin",
              "lerntext": "egzamin",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "praca",
              "lerntext": "praca",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "córka",
              "lerntext": "córka",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rodzina",
              "lerntext": "rodzina",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kolacja",
              "lerntext": "kolacja",
              "de": "Abendessen",
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
          "schrift": "ja pokazuję miasto [Slot]",
          "lerntext": "ja pokazuję miasto [Slot]",
          "wortarten": {
            "ja": "p",
            "pokazuję": "v",
            "miasto": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "kobieta",
              "lerntext": "kobieta",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "siostra",
              "lerntext": "siostra",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "brat",
              "lerntext": "brat",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "przyjaciel",
              "lerntext": "przyjaciel",
              "de": "Freund (enger)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dziecko",
              "lerntext": "dziecko",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "student",
              "lerntext": "student",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "matka",
              "lerntext": "matka",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojciec",
              "lerntext": "ojciec",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "odpowiedź",
              "lerntext": "odpowiedź",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "egzamin",
              "lerntext": "egzamin",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mieszkanie",
              "lerntext": "mieszkanie",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "talerz",
              "lerntext": "talerz",
              "de": "Teller",
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
          "schrift": "ja chcę szklankę [Slot]",
          "lerntext": "ja chcę szklankę [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "piwo",
              "lerntext": "piwo",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "usta",
              "lerntext": "usta",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sól",
              "lerntext": "sól",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śnieg",
              "lerntext": "śnieg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "okno",
              "lerntext": "okno",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "deszcz",
              "lerntext": "deszcz",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "łóżko",
              "lerntext": "łóżko",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "godzina",
              "lerntext": "godzina",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dzień",
              "lerntext": "dzień",
              "de": "Tag",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "szklanka",
            "lerntext": "szklanka",
            "de": "Glas",
            "c": "n"
          }
        ],
        "id": "31.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "my mamy dosyć [Slot]",
          "lerntext": "my mamy dosyć [Slot]",
          "wortarten": {
            "my": "p",
            "mamy": "v"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "czas",
              "lerntext": "czas",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "owoce",
              "lerntext": "owoce",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "mięso",
              "lerntext": "mięso",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kuchnia",
              "lerntext": "kuchnia",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "policja",
              "lerntext": "policja",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ubranie",
              "lerntext": "ubranie",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "but",
              "lerntext": "but",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuta",
              "lerntext": "minuta",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "las",
              "lerntext": "las",
              "de": "Wald",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "wystarczy",
            "lerntext": "wystarczy",
            "de": "genug"
          }
        ],
        "id": "31.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "my mamy dosyć [Slot]",
          "lerntext": "my mamy dosyć [Slot]",
          "wortarten": {
            "my": "p",
            "mamy": "v"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "my",
            "lerntext": "my",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ryba",
              "lerntext": "ryba",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "owoce",
              "lerntext": "owoce",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mięso",
              "lerntext": "mięso",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pieniądze",
              "lerntext": "pieniądze",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "czas",
              "lerntext": "czas",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wieczór",
              "lerntext": "wieczór",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ciało",
              "lerntext": "ciało",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oko",
              "lerntext": "oko",
              "de": "Auge",
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
          "schrift": "ja czekam od [Slot]",
          "lerntext": "ja czekam od [Slot]",
          "wortarten": {
            "ja": "p",
            "czekam": "v"
          }
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "godzina",
              "lerntext": "godzina",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "minuta",
              "lerntext": "minuta",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "tydzień",
              "lerntext": "tydzień",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "noc",
              "lerntext": "noc",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "ulica",
              "lerntext": "ulica",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomoc",
              "lerntext": "pomoc",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ręka",
              "lerntext": "ręka",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "odpowiedź",
              "lerntext": "odpowiedź",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "praca",
              "lerntext": "praca",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "córka",
              "lerntext": "córka",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "egzamin",
              "lerntext": "egzamin",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rodzina",
              "lerntext": "rodzina",
              "de": "Familie",
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
          "schrift": "ja czekam od [Slot]",
          "lerntext": "ja czekam od [Slot]",
          "wortarten": {
            "ja": "p",
            "czekam": "v"
          }
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dzień",
              "lerntext": "dzień",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "wieczór",
              "lerntext": "wieczór",
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "ból",
              "lerntext": "ból",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "wino",
              "lerntext": "wino",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sklep",
              "lerntext": "sklep",
              "de": "Laden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "urlop",
              "lerntext": "urlop",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "głowa",
              "lerntext": "głowa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "herbata",
              "lerntext": "herbata",
              "de": "Tee",
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
          "schrift": "[Slot] idę do domu",
          "lerntext": "[Slot] idę do domu",
          "wortarten": {
            "idę": "v"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dzisiaj",
              "lerntext": "dzisiaj",
              "de": "heute"
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
              "schrift": "wczoraj",
              "lerntext": "wczoraj",
              "de": "gestern"
            },
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "nigdy",
              "lerntext": "nigdy",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "zawsze",
              "lerntext": "zawsze",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "wystarczy",
              "lerntext": "wystarczy",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "więcej",
              "lerntext": "więcej",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "źle",
              "lerntext": "źle",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "pewnie",
              "lerntext": "pewnie",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "też",
              "lerntext": "też",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "razem",
              "lerntext": "razem",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "czasami",
              "lerntext": "czasami",
              "de": "manchmal",
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
          "schrift": "[Slot] idę do domu",
          "lerntext": "[Slot] idę do domu",
          "wortarten": {
            "idę": "v"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "często",
              "lerntext": "często",
              "de": "oft"
            },
            {
              "schrift": "nigdy",
              "lerntext": "nigdy",
              "de": "nie"
            },
            {
              "schrift": "zawsze",
              "lerntext": "zawsze",
              "de": "immer"
            },
            {
              "schrift": "dzisiaj",
              "lerntext": "dzisiaj",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "wkrótce",
              "lerntext": "wkrótce",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "teraz",
              "lerntext": "teraz",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "wczoraj",
              "lerntext": "wczoraj",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "jutro",
              "lerntext": "jutro",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "wystarczy",
              "lerntext": "wystarczy",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "dużo",
              "lerntext": "dużo",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "więcej",
              "lerntext": "więcej",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "bardzo",
              "lerntext": "bardzo",
              "de": "sehr",
              "wieder": true
            },
            {
              "schrift": "zaraz",
              "lerntext": "zaraz",
              "de": "sofort",
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
          "schrift": "ja chciałbym [Slot]",
          "lerntext": "ja chciałbym [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "śmiać się",
              "lerntext": "śmiać się",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "mieć nadzieję",
              "lerntext": "mieć nadzieję",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wierzyć",
              "lerntext": "wierzyć",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebować",
              "lerntext": "potrzebować",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chcieć",
              "lerntext": "chcieć",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "być",
              "lerntext": "być",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "umierać",
              "lerntext": "umierać",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jeść",
              "lerntext": "jeść",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "siedzieć",
              "lerntext": "siedzieć",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podróżować",
              "lerntext": "podróżować",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stać",
              "lerntext": "stać",
              "de": "stehen",
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
          "schrift": "ja chciałbym [Slot]",
          "lerntext": "ja chciałbym [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "wierzyć",
              "lerntext": "wierzyć",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "mieć nadzieję",
              "lerntext": "mieć nadzieję",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "potrzebować",
              "lerntext": "potrzebować",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "mieszkać",
              "lerntext": "mieszkać",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zostawać",
              "lerntext": "zostawać",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śmiać się",
              "lerntext": "śmiać się",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płakać",
              "lerntext": "płakać",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myśleć",
              "lerntext": "myśleć",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lubić",
              "lerntext": "lubić",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dostawać",
              "lerntext": "dostawać",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wiedzieć",
              "lerntext": "wiedzieć",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "móc",
              "lerntext": "móc",
              "de": "können",
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
          "schrift": "czy może mi pan dać [Slot]?",
          "lerntext": "czy może mi pan dać [Slot]?",
          "wortarten": {
            "może": "v",
            "mi": "p",
            "dać": "v"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel",
              "c": "n"
            },
            {
              "schrift": "książka",
              "lerntext": "książka",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "morze",
              "lerntext": "morze",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pogoda",
              "lerntext": "pogoda",
              "de": "Wetter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "obiad",
              "lerntext": "obiad",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "góra",
              "lerntext": "góra",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sukienka",
              "lerntext": "sukienka",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "warzywa",
              "lerntext": "warzywa",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śniadanie",
              "lerntext": "śniadanie",
              "de": "Frühstück",
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
          "schrift": "czy może mi pan dać [Slot]?",
          "lerntext": "czy może mi pan dać [Slot]?",
          "wortarten": {
            "może": "v",
            "mi": "p",
            "dać": "v"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cukier",
              "lerntext": "cukier",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "kawa",
              "lerntext": "kawa",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "mleko",
              "lerntext": "mleko",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "książka",
              "lerntext": "książka",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "klucz",
              "lerntext": "klucz",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "torba",
              "lerntext": "torba",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "woda",
              "lerntext": "woda",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chleb",
              "lerntext": "chleb",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefon",
              "lerntext": "telefon",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "słońce",
              "lerntext": "słońce",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kolacja",
              "lerntext": "kolacja",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pociąg",
              "lerntext": "pociąg",
              "de": "Zug",
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
          "schrift": "ja myślę, że to [Slot]",
          "lerntext": "ja myślę, że to [Slot]",
          "wortarten": {
            "ja": "p",
            "myślę,": "v",
            "że": "k"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szczęśliwy",
              "lerntext": "szczęśliwy",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "miły",
              "lerntext": "miły",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tani",
              "lerntext": "tani",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niski",
              "lerntext": "niski",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "otwarty",
              "lerntext": "otwarty",
              "de": "offen",
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
          "schrift": "ja myślę, że to [Slot]",
          "lerntext": "ja myślę, że to [Slot]",
          "wortarten": {
            "ja": "p",
            "myślę,": "v",
            "że": "k"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "piękny",
              "lerntext": "piękny",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "ciepły",
              "lerntext": "ciepły",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "zimny",
              "lerntext": "zimny",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "nowy",
              "lerntext": "nowy",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "silny",
              "lerntext": "silny",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "duży",
              "lerntext": "duży",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mały",
              "lerntext": "mały",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "drogi",
              "lerntext": "drogi",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "młody",
              "lerntext": "młody",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stary",
              "lerntext": "stary",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "niebieski",
              "lerntext": "niebieski",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ciężki",
              "lerntext": "ciężki",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "żółty",
              "lerntext": "żółty",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lekki",
              "lerntext": "lekki",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "śmieszny",
              "lerntext": "śmieszny",
              "de": "lustig",
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
          "schrift": "ja uważam to za bardzo [Slot]",
          "lerntext": "ja uważam to za bardzo [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "biały",
              "lerntext": "biały",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nudny",
              "lerntext": "nudny",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zamknięty",
              "lerntext": "zamknięty",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "szary",
              "lerntext": "szary",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brązowy",
              "lerntext": "brązowy",
              "de": "braun",
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
          "schrift": "ja uważam to za bardzo [Slot]",
          "lerntext": "ja uważam to za bardzo [Slot]",
          "wortarten": {
            "ja": "p"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "czysty",
              "lerntext": "czysty",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "słaby",
              "lerntext": "słaby",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "czarny",
              "lerntext": "czarny",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "słodki",
              "lerntext": "słodki",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "wściekły",
              "lerntext": "wściekły",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "łatwy",
              "lerntext": "łatwy",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fałszywy",
              "lerntext": "fałszywy",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "krótki",
              "lerntext": "krótki",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "długi",
              "lerntext": "długi",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chory",
              "lerntext": "chory",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brzydki",
              "lerntext": "brzydki",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "wysoki",
              "lerntext": "wysoki",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zielony",
              "lerntext": "zielony",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "czerwony",
              "lerntext": "czerwony",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "zwykły",
              "lerntext": "zwykły",
              "de": "gewöhnlich",
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
          "schrift": "jutro będę [Slot]",
          "lerntext": "jutro będę [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "patrzeć",
              "lerntext": "patrzeć",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "kupować",
              "lerntext": "kupować",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "widzieć",
              "lerntext": "widzieć",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "robić",
              "lerntext": "robić",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "znaleźć",
              "lerntext": "znaleźć",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "brać",
              "lerntext": "brać",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czytać",
              "lerntext": "czytać",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pisać",
              "lerntext": "pisać",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pić",
              "lerntext": "pić",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stawać się",
              "lerntext": "stawać się",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kochać",
              "lerntext": "kochać",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren",
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
          "schrift": "jutro będę [Slot]",
          "lerntext": "jutro będę [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "brać",
              "lerntext": "brać",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "czytać",
              "lerntext": "czytać",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "pisać",
              "lerntext": "pisać",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "patrzeć",
              "lerntext": "patrzeć",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kupować",
              "lerntext": "kupować",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "widzieć",
              "lerntext": "widzieć",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "robić",
              "lerntext": "robić",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "znaleźć",
              "lerntext": "znaleźć",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwonić",
              "lerntext": "dzwonić",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używać",
              "lerntext": "używać",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mieć",
              "lerntext": "mieć",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chcieć",
              "lerntext": "chcieć",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "być",
              "lerntext": "być",
              "de": "sein",
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
          "schrift": "ja chcę wkrótce [Slot]",
          "lerntext": "ja chcę wkrótce [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "umierać",
              "lerntext": "umierać",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słyszeć",
              "lerntext": "słyszeć",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jeść",
              "lerntext": "jeść",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "siedzieć",
              "lerntext": "siedzieć",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podróżować",
              "lerntext": "podróżować",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stać",
              "lerntext": "stać",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lubić",
              "lerntext": "lubić",
              "de": "mögen",
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
          "schrift": "ja chcę wkrótce [Slot]",
          "lerntext": "ja chcę wkrótce [Slot]",
          "wortarten": {
            "ja": "p",
            "chcę": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dostawać",
              "lerntext": "dostawać",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wiedzieć",
              "lerntext": "wiedzieć",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zamykać",
              "lerntext": "zamykać",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "móc",
              "lerntext": "móc",
              "de": "können",
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
          "schrift": "to jest człowiek, który [Slot]",
          "lerntext": "to jest człowiek, który [Slot]",
          "wortarten": {
            "jest": "v",
            "człowiek,": "n",
            "który": "p"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mieszka",
              "lerntext": "mieszka",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "zostaje",
              "lerntext": "zostaje",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "śmieje się",
              "lerntext": "śmieje się",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "płacze",
              "lerntext": "płacze",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "myśli",
              "lerntext": "myśli",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "ma nadzieję",
              "lerntext": "ma nadzieję",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wierzy",
              "lerntext": "wierzy",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potrzebuje",
              "lerntext": "potrzebuje",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żyje",
              "lerntext": "żyje",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazuje",
              "lerntext": "pokazuje",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pije",
              "lerntext": "pije",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "staje się",
              "lerntext": "staje się",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kocha",
              "lerntext": "kocha",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słucha",
              "lerntext": "słucha",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "traci",
              "lerntext": "traci",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "człowiek",
            "lerntext": "człowiek",
            "de": "Mensch",
            "c": "n"
          }
        ],
        "id": "36.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "to jest człowiek, który [Slot]",
          "lerntext": "to jest człowiek, który [Slot]",
          "wortarten": {
            "jest": "v",
            "człowiek,": "n",
            "który": "p"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "wierzy",
              "lerntext": "wierzy",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "ma nadzieję",
              "lerntext": "ma nadzieję",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "potrzebuje",
              "lerntext": "potrzebuje",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "mieszka",
              "lerntext": "mieszka",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zostaje",
              "lerntext": "zostaje",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "śmieje się",
              "lerntext": "śmieje się",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "płacze",
              "lerntext": "płacze",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myśli",
              "lerntext": "myśli",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jedzie",
              "lerntext": "jedzie",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwoni",
              "lerntext": "dzwoni",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używa",
              "lerntext": "używa",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "myje",
              "lerntext": "myje",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "haben",
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
          "schrift": "szukam miejsca, gdzie można [Slot]",
          "lerntext": "szukam miejsca, gdzie można [Slot]",
          "wortarten": {
            "szukam": "v"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chcieć",
              "lerntext": "chcieć",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "być",
              "lerntext": "być",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "umierać",
              "lerntext": "umierać",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słyszeć",
              "lerntext": "słyszeć",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jeść",
              "lerntext": "jeść",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "siedzieć",
              "lerntext": "siedzieć",
              "de": "sitzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podróżować",
              "lerntext": "podróżować",
              "de": "reisen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "gdzie",
            "lerntext": "gdzie",
            "de": "wo"
          }
        ],
        "id": "36.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "szukam miejsca, gdzie można [Slot]",
          "lerntext": "szukam miejsca, gdzie można [Slot]",
          "wortarten": {
            "szukam": "v"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "szukać",
              "lerntext": "szukać",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "pytać",
              "lerntext": "pytać",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "odpowiadać",
              "lerntext": "odpowiadać",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "pracować",
              "lerntext": "pracować",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "grać",
              "lerntext": "grać",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tańczyć",
              "lerntext": "tańczyć",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spać",
              "lerntext": "spać",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "czekać",
              "lerntext": "czekać",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stać",
              "lerntext": "stać",
              "de": "stehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lubić",
              "lerntext": "lubić",
              "de": "mögen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dostawać",
              "lerntext": "dostawać",
              "de": "bekommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "wiedzieć",
              "lerntext": "wiedzieć",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zamykać",
              "lerntext": "zamykać",
              "de": "schließen",
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
          "schrift": "wczoraj byłem w [Slot]",
          "lerntext": "wczoraj byłem w [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "miasto",
              "lerntext": "miasto",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "człowiek",
              "lerntext": "człowiek",
              "de": "Mensch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mieszkanie",
              "lerntext": "mieszkanie",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "talerz",
              "lerntext": "talerz",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "usta",
              "lerntext": "usta",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sól",
              "lerntext": "sól",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "śnieg",
              "lerntext": "śnieg",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "Käse",
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
          "schrift": "wczoraj byłem w [Slot]",
          "lerntext": "wczoraj byłem w [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dworzec",
              "lerntext": "dworzec",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "lotnisko",
              "lerntext": "lotnisko",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "miasto",
              "lerntext": "miasto",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szkoła",
              "lerntext": "szkoła",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uniwersytet",
              "lerntext": "uniwersytet",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "szpital",
              "lerntext": "szpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restauracja",
              "lerntext": "restauracja",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "człowiek",
              "lerntext": "człowiek",
              "de": "Mensch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "okno",
              "lerntext": "okno",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "deszcz",
              "lerntext": "deszcz",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "łóżko",
              "lerntext": "łóżko",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "kuchnia",
              "lerntext": "kuchnia",
              "de": "Küche",
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
          "schrift": "chcę [Slot], bo mam czas",
          "lerntext": "chcę [Slot], bo mam czas",
          "wortarten": {
            "chcę": "v",
            "bo": "k",
            "mam": "v",
            "czas": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "rozumieć",
              "lerntext": "rozumieć",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "dać",
              "lerntext": "dać",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "powiedzieć",
              "lerntext": "powiedzieć",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "musieć",
              "lerntext": "musieć",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "móc",
              "lerntext": "móc",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "żyć",
              "lerntext": "żyć",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pokazywać",
              "lerntext": "pokazywać",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pić",
              "lerntext": "pić",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stawać się",
              "lerntext": "stawać się",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "kochać",
              "lerntext": "kochać",
              "de": "lieben",
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
          "schrift": "chcę [Slot], bo mam czas",
          "lerntext": "chcę [Slot], bo mam czas",
          "wortarten": {
            "chcę": "v",
            "bo": "k",
            "mam": "v",
            "czas": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "ja",
            "lerntext": "ja",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "powiedzieć",
              "lerntext": "powiedzieć",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "mówić",
              "lerntext": "mówić",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "otwierać",
              "lerntext": "otwierać",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "wygrywać",
              "lerntext": "wygrywać",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "zapominać",
              "lerntext": "zapominać",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rozumieć",
              "lerntext": "rozumieć",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spotykać",
              "lerntext": "spotykać",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dać",
              "lerntext": "dać",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "słuchać",
              "lerntext": "słuchać",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tracić",
              "lerntext": "tracić",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jechać",
              "lerntext": "jechać",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dzwonić",
              "lerntext": "dzwonić",
              "de": "anrufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "używać",
              "lerntext": "używać",
              "de": "benutzen",
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
