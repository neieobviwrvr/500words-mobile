// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_it.py
// Neu bauen: python bauplan.py it --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 38 Module, 286 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const ITALIAN_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "io sono [Slot]",
          "lerntext": "io sono [Slot]",
          "wortarten": {
            "io": "p",
            "sono": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "c": "a"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "sono",
            "lerntext": "sono",
            "de": "sein",
            "c": "v"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io sono [Slot]",
          "lerntext": "io sono [Slot]",
          "wortarten": {
            "io": "p",
            "sono": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pronto",
              "lerntext": "pronto",
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
          "schrift": "noi siamo [Slot]",
          "lerntext": "noi siamo [Slot]",
          "wortarten": {
            "noi": "p",
            "siamo": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "c": "n"
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
              "c": "n"
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
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
          "schrift": "noi siamo [Slot]",
          "lerntext": "noi siamo [Slot]",
          "wortarten": {
            "noi": "p",
            "siamo": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bambino",
              "lerntext": "bambino",
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
          "schrift": "lui è molto [Slot]",
          "lerntext": "lui è molto [Slot]",
          "wortarten": {
            "lui": "p",
            "è": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "molto",
            "lerntext": "molto",
            "de": "sehr"
          }
        ],
        "id": "1.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "lui è molto [Slot]",
          "lerntext": "lui è molto [Slot]",
          "wortarten": {
            "lui": "p",
            "è": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "c": "a"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "1.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io sono [Slot]",
          "lerntext": "io sono [Slot]",
          "wortarten": {
            "io": "p",
            "sono": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
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
          "schrift": "noi siamo [Slot]",
          "lerntext": "noi siamo [Slot]",
          "wortarten": {
            "noi": "p",
            "siamo": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n",
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
          "schrift": "io sono [Slot]",
          "lerntext": "io sono [Slot]",
          "wortarten": {
            "io": "p",
            "sono": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
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
        "kind": "frame",
        "frame": {
          "schrift": "noi siamo [Slot]",
          "lerntext": "noi siamo [Slot]",
          "wortarten": {
            "noi": "p",
            "siamo": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n",
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
          "schrift": "questo è una [Slot]",
          "lerntext": "questo è una [Slot]",
          "wortarten": {
            "questo": "p",
            "è": "v"
          }
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "c": "n"
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "questo",
            "lerntext": "questo",
            "de": "dieser",
            "c": "p"
          }
        ],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "questo è una [Slot]",
          "lerntext": "questo è una [Slot]",
          "wortarten": {
            "questo": "p",
            "è": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "c": "n"
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "questo è un [Slot]",
          "lerntext": "questo è un [Slot]",
          "wortarten": {
            "questo": "p",
            "è": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "questo è un [Slot]",
          "lerntext": "questo è un [Slot]",
          "wortarten": {
            "questo": "p",
            "è": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "c": "n"
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "c": "n"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n",
              "wieder": true
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
          "schrift": "qui c'è una [Slot]",
          "lerntext": "qui c'è una [Slot]"
        },
        "frameDe": "Hier ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "c": "n"
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "c": "n"
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "hier"
          }
        ],
        "id": "2.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "qui c'è una [Slot]",
          "lerntext": "qui c'è una [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "c": "n"
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "2.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "qui c'è un [Slot]",
          "lerntext": "qui c'è un [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n",
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
          "schrift": "qui c'è un [Slot]",
          "lerntext": "qui c'è un [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "c": "n"
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io ho una [Slot]",
          "lerntext": "io ho una [Slot]",
          "wortarten": {
            "io": "p",
            "ho": "v"
          }
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "c": "n"
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "c": "n"
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "c": "n"
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
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
            "schrift": "ho",
            "lerntext": "ho",
            "de": "haben",
            "c": "v"
          }
        ],
        "id": "2.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io ho una [Slot]",
          "lerntext": "io ho una [Slot]",
          "wortarten": {
            "io": "p",
            "ho": "v"
          }
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "c": "n"
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io ho una [Slot]",
          "lerntext": "io ho una [Slot]",
          "wortarten": {
            "io": "p",
            "ho": "v"
          }
        },
        "frameDe": "ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n",
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
          "schrift": "io ho un [Slot]",
          "lerntext": "io ho un [Slot]",
          "wortarten": {
            "io": "p",
            "ho": "v"
          }
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "c": "n"
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io ho un [Slot]",
          "lerntext": "io ho un [Slot]",
          "wortarten": {
            "io": "p",
            "ho": "v"
          }
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "c": "n"
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "c": "n"
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "c": "n"
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "c": "n"
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.13"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "questa è mia [Slot]",
          "lerntext": "questa è mia [Slot]",
          "wortarten": {
            "è": "v",
            "mia": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "tuo",
            "lerntext": "tuo",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nostro",
            "lerntext": "nostro",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "c": "n"
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
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
          "schrift": "questa è [Slot] casa",
          "lerntext": "questa è [Slot] casa",
          "wortarten": {
            "è": "v",
            "casa": "n"
          }
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "tuo",
            "lerntext": "tuo",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nostro",
            "lerntext": "nostro",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "suo",
              "lerntext": "suo",
              "de": "sein",
              "c": "p"
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "io",
              "lerntext": "io",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "noi",
              "lerntext": "noi",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tu",
              "lerntext": "tu",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "lei",
              "lerntext": "lei",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "questo",
              "lerntext": "questo",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
              "de": "er",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.15"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] è qui",
          "lerntext": "[Slot] è qui",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "questo",
              "lerntext": "questo",
              "de": "dieser",
              "c": "p"
            },
            {
              "schrift": "suo",
              "lerntext": "suo",
              "de": "sein",
              "c": "p"
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch",
              "c": "p"
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nostro",
              "lerntext": "nostro",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tuo",
              "lerntext": "tuo",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mio",
              "lerntext": "mio",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "io",
              "lerntext": "io",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "noi",
              "lerntext": "noi",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tu",
              "lerntext": "tu",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "lei",
              "lerntext": "lei",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
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
            "schrift": "qui",
            "lerntext": "qui",
            "de": "hier"
          }
        ],
        "id": "2.16"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "questa è mia [Slot]",
          "lerntext": "questa è mia [Slot]",
          "wortarten": {
            "è": "v",
            "mia": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "tuo",
            "lerntext": "tuo",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nostro",
            "lerntext": "nostro",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.17"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] è qui",
          "lerntext": "[Slot] è qui",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nostro",
              "lerntext": "nostro",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tuo",
              "lerntext": "tuo",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mio",
              "lerntext": "mio",
              "de": "mein",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.18"
      },
      {
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
        "id": "2.19"
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
          "schrift": "io voglio [Slot]",
          "lerntext": "io voglio [Slot]",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "c": "n"
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen",
              "c": "n"
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "voglio",
            "lerntext": "voglio",
            "de": "wollen",
            "c": "v"
          },
          {
            "schrift": "di",
            "lerntext": "di",
            "de": "von"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot]",
          "lerntext": "io voglio [Slot]",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "c": "n"
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
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
          "schrift": "io ho bisogno di [Slot]",
          "lerntext": "io ho bisogno di [Slot]",
          "wortarten": {
            "io": "p",
            "ho": "v"
          }
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "c": "n"
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "c": "n"
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "servo",
            "lerntext": "servo",
            "de": "dienen",
            "c": "v"
          }
        ],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io vorrei una [Slot]",
          "lerntext": "io vorrei una [Slot]",
          "wortarten": {
            "io": "p"
          }
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "c": "n"
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "c": "n"
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "3.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io vorrei un [Slot]",
          "lerntext": "io vorrei un [Slot]",
          "wortarten": {
            "io": "p"
          }
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "c": "n"
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "3.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io mangio [Slot]",
          "lerntext": "io mangio [Slot]",
          "wortarten": {
            "io": "p",
            "mangio": "v"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "c": "n"
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "mangio",
            "lerntext": "mangio",
            "de": "essen",
            "c": "v"
          },
          {
            "schrift": "bevo",
            "lerntext": "bevo",
            "de": "trinken",
            "c": "v"
          }
        ],
        "id": "3.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io mangio [Slot]",
          "lerntext": "io mangio [Slot]",
          "wortarten": {
            "io": "p",
            "mangio": "v"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
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
          "schrift": "io mangio [Slot]",
          "lerntext": "io mangio [Slot]",
          "wortarten": {
            "io": "p",
            "mangio": "v"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "c": "n",
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
        "id": "3.9"
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
          "schrift": "io non sono [Slot]",
          "lerntext": "io non sono [Slot]",
          "wortarten": {
            "io": "p",
            "sono": "v"
          }
        },
        "frameDe": "ich bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "certo",
              "lerntext": "certo",
              "de": "sicher"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "non",
            "lerntext": "non",
            "de": "nicht"
          },
          {
            "schrift": "si",
            "lerntext": "si",
            "de": "ja",
            "c": "p"
          },
          {
            "schrift": "no",
            "lerntext": "no",
            "de": "nein"
          },
          {
            "schrift": "sei",
            "lerntext": "sei",
            "de": "sechs"
          }
        ],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "sei [Slot]?",
          "lerntext": "sei [Slot]?",
          "wortarten": {
            "sei": "v"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "bene",
              "lerntext": "bene",
              "de": "gut"
            },
            {
              "schrift": "male",
              "lerntext": "male",
              "de": "schlecht"
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "ja",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "certo",
              "lerntext": "certo",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "non",
              "lerntext": "non",
              "de": "nicht",
              "wieder": true
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a",
              "wieder": true
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
          "schrift": "[Slot] è questo?",
          "lerntext": "[Slot] è questo?",
          "wortarten": {
            "è": "v",
            "questo?": "p"
          }
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "cosa",
            "lerntext": "cosa",
            "de": "was"
          },
          {
            "schrift": "chi",
            "lerntext": "chi",
            "de": "wer",
            "c": "p"
          },
          {
            "schrift": "come",
            "lerntext": "come",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "qualcosa",
              "lerntext": "qualcosa",
              "de": "etwas",
              "c": "p"
            },
            {
              "schrift": "tutto",
              "lerntext": "tutto",
              "de": "alles",
              "c": "p"
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nostro",
              "lerntext": "nostro",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mio",
              "lerntext": "mio",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tuo",
              "lerntext": "tuo",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "suo",
              "lerntext": "suo",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "noi",
              "lerntext": "noi",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "lei",
              "lerntext": "lei",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tu",
              "lerntext": "tu",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "io",
              "lerntext": "io",
              "de": "ich",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "cosa",
            "lerntext": "cosa",
            "de": "was"
          },
          {
            "schrift": "chi",
            "lerntext": "chi",
            "de": "wer",
            "c": "p"
          },
          {
            "schrift": "come",
            "lerntext": "come",
            "de": "wie"
          },
          {
            "schrift": "perche",
            "lerntext": "perche",
            "de": "warum"
          }
        ],
        "id": "4.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "sei [Slot]?",
          "lerntext": "sei [Slot]?",
          "wortarten": {
            "sei": "v"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bene",
              "lerntext": "bene",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "male",
              "lerntext": "male",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "ja",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "certo",
              "lerntext": "certo",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "non",
              "lerntext": "non",
              "de": "nicht",
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
          "schrift": "sei [Slot]?",
          "lerntext": "sei [Slot]?",
          "wortarten": {
            "sei": "v"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bene",
              "lerntext": "bene",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "male",
              "lerntext": "male",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "ja",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "nein",
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
          "schrift": "dove c'è una [Slot]?",
          "lerntext": "dove c'è una [Slot]?"
        },
        "frameDe": "Wo gibt es eine [Slot]?",
        "pronouns": [
          {
            "schrift": "dove",
            "lerntext": "dove",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "c": "n"
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "dove",
            "lerntext": "dove",
            "de": "wo"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "dove c'è una [Slot]?",
          "lerntext": "dove c'è una [Slot]?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "dove",
            "lerntext": "dove",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n",
              "wieder": true
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
          "schrift": "dove c'è un [Slot]?",
          "lerntext": "dove c'è un [Slot]?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "dove",
            "lerntext": "dove",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
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
          "schrift": "dove c'è un [Slot]?",
          "lerntext": "dove c'è un [Slot]?"
        },
        "frameDe": "Wo gibt es ein [Slot]?",
        "pronouns": [
          {
            "schrift": "dove",
            "lerntext": "dove",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "c": "n"
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "5.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'è una [Slot] qui?",
          "lerntext": "c'è una [Slot] qui?"
        },
        "frameDe": "Gibt es hier eine [Slot]?",
        "pronouns": [
          {
            "schrift": "dove",
            "lerntext": "dove",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
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
          "schrift": "c'è un [Slot] qui?",
          "lerntext": "c'è un [Slot] qui?"
        },
        "frameDe": "Gibt es hier ein [Slot]?",
        "pronouns": [
          {
            "schrift": "dove",
            "lerntext": "dove",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
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
          "schrift": "[Slot] è qui",
          "lerntext": "[Slot] è qui",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "hier"
          },
          {
            "schrift": "li",
            "lerntext": "li",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "li",
            "lerntext": "li",
            "de": "dort"
          },
          {
            "schrift": "la",
            "lerntext": "la",
            "de": "die"
          }
        ],
        "id": "5.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "è [Slot] la casa",
          "lerntext": "è [Slot] la casa",
          "wortarten": {
            "è": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "su",
            "lerntext": "su",
            "de": "auf"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sotto",
              "lerntext": "sotto",
              "de": "unter"
            },
            {
              "schrift": "tra",
              "lerntext": "tra",
              "de": "zwischen"
            },
            {
              "schrift": "dietro",
              "lerntext": "dietro",
              "de": "hinter"
            },
            {
              "schrift": "prima",
              "lerntext": "prima",
              "de": "vor"
            },
            {
              "schrift": "accanto",
              "lerntext": "accanto",
              "de": "neben"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "su",
            "lerntext": "su",
            "de": "auf"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu"
          },
          {
            "schrift": "di",
            "lerntext": "di",
            "de": "von"
          },
          {
            "schrift": "con",
            "lerntext": "con",
            "de": "mit"
          },
          {
            "schrift": "sopra",
            "lerntext": "sopra",
            "de": "über"
          },
          {
            "schrift": "di",
            "lerntext": "di",
            "de": "von"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu"
          }
        ],
        "id": "5.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "è [Slot] la casa",
          "lerntext": "è [Slot] la casa",
          "wortarten": {
            "è": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "su",
            "lerntext": "su",
            "de": "auf"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "contro",
              "lerntext": "contro",
              "de": "gegen"
            },
            {
              "schrift": "sotto",
              "lerntext": "sotto",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "tra",
              "lerntext": "tra",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "dietro",
              "lerntext": "dietro",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "prima",
              "lerntext": "prima",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "accanto",
              "lerntext": "accanto",
              "de": "neben",
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
          "schrift": "è [Slot] la casa",
          "lerntext": "è [Slot] la casa",
          "wortarten": {
            "è": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "in",
            "lerntext": "in",
            "de": "in"
          },
          {
            "schrift": "su",
            "lerntext": "su",
            "de": "auf"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "contro",
              "lerntext": "contro",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "sotto",
              "lerntext": "sotto",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "tra",
              "lerntext": "tra",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "dietro",
              "lerntext": "dietro",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "prima",
              "lerntext": "prima",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "accanto",
              "lerntext": "accanto",
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
          "schrift": "[Slot] è qui",
          "lerntext": "[Slot] è qui",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "hier"
          },
          {
            "schrift": "li",
            "lerntext": "li",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
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
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null"
            },
            {
              "schrift": "uno",
              "lerntext": "uno",
              "de": "eins"
            },
            {
              "schrift": "due",
              "lerntext": "due",
              "de": "zwei"
            },
            {
              "schrift": "tre",
              "lerntext": "tre",
              "de": "drei"
            },
            {
              "schrift": "quattro",
              "lerntext": "quattro",
              "de": "vier"
            },
            {
              "schrift": "cinque",
              "lerntext": "cinque",
              "de": "fünf"
            },
            {
              "schrift": "sei",
              "lerntext": "sei",
              "de": "sechs"
            },
            {
              "schrift": "sette",
              "lerntext": "sette",
              "de": "sieben"
            },
            {
              "schrift": "otto",
              "lerntext": "otto",
              "de": "acht"
            },
            {
              "schrift": "nove",
              "lerntext": "nove",
              "de": "neun"
            },
            {
              "schrift": "dieci",
              "lerntext": "dieci",
              "de": "zehn"
            }
          ]
        ],
        "newCount": 10,
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
              "schrift": "undici",
              "lerntext": "undici",
              "de": "elf"
            },
            {
              "schrift": "dodici",
              "lerntext": "dodici",
              "de": "zwölf"
            },
            {
              "schrift": "tredici",
              "lerntext": "tredici",
              "de": "dreizehn"
            },
            {
              "schrift": "quattordici",
              "lerntext": "quattordici",
              "de": "vierzehn"
            },
            {
              "schrift": "quindici",
              "lerntext": "quindici",
              "de": "fünfzehn"
            },
            {
              "schrift": "sedici",
              "lerntext": "sedici",
              "de": "sechzehn"
            },
            {
              "schrift": "diciassette",
              "lerntext": "diciassette",
              "de": "siebzehn"
            },
            {
              "schrift": "diciotto",
              "lerntext": "diciotto",
              "de": "achtzehn"
            },
            {
              "schrift": "diciannove",
              "lerntext": "diciannove",
              "de": "neunzehn"
            },
            {
              "schrift": "venti",
              "lerntext": "venti",
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
              "schrift": "quaranta",
              "lerntext": "quaranta",
              "de": "vierzig"
            },
            {
              "schrift": "cinquanta",
              "lerntext": "cinquanta",
              "de": "fünfzig"
            },
            {
              "schrift": "sessanta",
              "lerntext": "sessanta",
              "de": "sechzig"
            },
            {
              "schrift": "settanta",
              "lerntext": "settanta",
              "de": "siebzig"
            },
            {
              "schrift": "ottanta",
              "lerntext": "ottanta",
              "de": "achtzig"
            },
            {
              "schrift": "novanta",
              "lerntext": "novanta",
              "de": "neunzig"
            },
            {
              "schrift": "cento",
              "lerntext": "cento",
              "de": "hundert"
            },
            {
              "schrift": "mille",
              "lerntext": "mille",
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
          "schrift": "quanto costa una [Slot]?",
          "lerntext": "quanto costa una [Slot]?",
          "wortarten": {
            "costa": "v"
          }
        },
        "frameDe": "Wie viel kostet ein [Slot]?",
        "pronouns": [
          {
            "schrift": "quanto",
            "lerntext": "quanto",
            "de": "wie viel"
          },
          {
            "schrift": "quanti",
            "lerntext": "quanti",
            "de": "wie viele"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "c": "n"
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "quanto",
            "lerntext": "quanto",
            "de": "wie viel"
          },
          {
            "schrift": "quanti",
            "lerntext": "quanti",
            "de": "wie viele"
          },
          {
            "schrift": "molto",
            "lerntext": "molto",
            "de": "sehr"
          },
          {
            "schrift": "poco",
            "lerntext": "poco",
            "de": "wenig"
          }
        ],
        "id": "6.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "quanto costa un [Slot]?",
          "lerntext": "quanto costa un [Slot]?",
          "wortarten": {
            "costa": "v"
          }
        },
        "frameDe": "Wie viel kostet eine [Slot]?",
        "pronouns": [
          {
            "schrift": "quanto",
            "lerntext": "quanto",
            "de": "wie viel"
          },
          {
            "schrift": "quanti",
            "lerntext": "quanti",
            "de": "wie viele"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "c": "n"
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "6.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "è troppo [Slot]",
          "lerntext": "è troppo [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "per",
            "lerntext": "per",
            "de": "für"
          },
          {
            "schrift": "senza",
            "lerntext": "senza",
            "de": "ohne"
          },
          {
            "schrift": "troppo",
            "lerntext": "troppo",
            "de": "zu viel"
          }
        ],
        "id": "6.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "è troppo [Slot]",
          "lerntext": "è troppo [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "c": "a"
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "c": "a"
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "c": "a"
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "c": "a"
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
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
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "uno",
              "lerntext": "uno",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "due",
              "lerntext": "due",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "tre",
              "lerntext": "tre",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "quattro",
              "lerntext": "quattro",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "cinque",
              "lerntext": "cinque",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "sette",
              "lerntext": "sette",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "otto",
              "lerntext": "otto",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "nove",
              "lerntext": "nove",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "dieci",
              "lerntext": "dieci",
              "de": "zehn",
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
              "schrift": "undici",
              "lerntext": "undici",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "dodici",
              "lerntext": "dodici",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "tredici",
              "lerntext": "tredici",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "quattordici",
              "lerntext": "quattordici",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "quindici",
              "lerntext": "quindici",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "sedici",
              "lerntext": "sedici",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "diciassette",
              "lerntext": "diciassette",
              "de": "siebzehn",
              "wieder": true
            },
            {
              "schrift": "diciotto",
              "lerntext": "diciotto",
              "de": "achtzehn",
              "wieder": true
            },
            {
              "schrift": "diciannove",
              "lerntext": "diciannove",
              "de": "neunzehn",
              "wieder": true
            },
            {
              "schrift": "venti",
              "lerntext": "venti",
              "de": "zwanzig",
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
              "schrift": "quaranta",
              "lerntext": "quaranta",
              "de": "vierzig",
              "wieder": true
            },
            {
              "schrift": "cinquanta",
              "lerntext": "cinquanta",
              "de": "fünfzig",
              "wieder": true
            },
            {
              "schrift": "sessanta",
              "lerntext": "sessanta",
              "de": "sechzig",
              "wieder": true
            },
            {
              "schrift": "settanta",
              "lerntext": "settanta",
              "de": "siebzig",
              "wieder": true
            },
            {
              "schrift": "ottanta",
              "lerntext": "ottanta",
              "de": "achtzig",
              "wieder": true
            },
            {
              "schrift": "novanta",
              "lerntext": "novanta",
              "de": "neunzig",
              "wieder": true
            },
            {
              "schrift": "cento",
              "lerntext": "cento",
              "de": "hundert",
              "wieder": true
            },
            {
              "schrift": "mille",
              "lerntext": "mille",
              "de": "tausend",
              "wieder": true
            },
            {
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null",
              "wieder": true
            },
            {
              "schrift": "uno",
              "lerntext": "uno",
              "de": "eins",
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
              "schrift": "due",
              "lerntext": "due",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "tre",
              "lerntext": "tre",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "quattro",
              "lerntext": "quattro",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "cinque",
              "lerntext": "cinque",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "sette",
              "lerntext": "sette",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "otto",
              "lerntext": "otto",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "nove",
              "lerntext": "nove",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "dieci",
              "lerntext": "dieci",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "undici",
              "lerntext": "undici",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "dodici",
              "lerntext": "dodici",
              "de": "zwölf",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.11"
      },
      {
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
        "id": "6.12"
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
          "schrift": "io posso [Slot]",
          "lerntext": "io posso [Slot]",
          "wortarten": {
            "io": "p",
            "posso": "v"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "c": "v"
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
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
            "schrift": "posso",
            "lerntext": "posso",
            "de": "können",
            "c": "v"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io posso [Slot]",
          "lerntext": "io posso [Slot]",
          "wortarten": {
            "io": "p",
            "posso": "v"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "c": "v"
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "c": "v",
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
          "schrift": "io devo [Slot]",
          "lerntext": "io devo [Slot]",
          "wortarten": {
            "io": "p",
            "devo": "v"
          }
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
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
            "schrift": "dovere",
            "lerntext": "dovere",
            "de": "müssen",
            "c": "v"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io devo [Slot]",
          "lerntext": "io devo [Slot]",
          "wortarten": {
            "io": "p",
            "devo": "v"
          }
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "c": "v"
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "7.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot]",
          "lerntext": "io voglio [Slot]",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "7.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot]",
          "lerntext": "io voglio [Slot]",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "7.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io non posso [Slot]",
          "lerntext": "io non posso [Slot]",
          "wortarten": {
            "io": "p",
            "posso": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "c": "v"
            },
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "7.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io non posso [Slot]",
          "lerntext": "io non posso [Slot]",
          "wortarten": {
            "io": "p",
            "posso": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "c": "v"
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io non posso [Slot]",
          "lerntext": "io non posso [Slot]",
          "wortarten": {
            "io": "p",
            "posso": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
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
          "schrift": "io non posso [Slot]",
          "lerntext": "io non posso [Slot]",
          "wortarten": {
            "io": "p",
            "posso": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
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
          "schrift": "io vado a un [Slot]",
          "lerntext": "io vado a un [Slot]",
          "wortarten": {
            "io": "p",
            "vado": "v"
          }
        },
        "frameDe": "ich gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "vado",
            "lerntext": "vado",
            "de": "gehen",
            "c": "v"
          },
          {
            "schrift": "vengo",
            "lerntext": "vengo",
            "de": "kommen",
            "c": "v"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io viaggio in [Slot]",
          "lerntext": "io viaggio in [Slot]",
          "wortarten": {
            "io": "p",
            "viaggio": "v"
          }
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
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
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "c": "n"
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "viaggio",
            "lerntext": "viaggio",
            "de": "reisen",
            "c": "v"
          }
        ],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot] adesso",
          "lerntext": "io voglio [Slot] adesso",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "c": "v"
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "c": "v"
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ci",
            "lerntext": "ci",
            "de": "uns",
            "c": "p"
          },
          {
            "schrift": "la",
            "lerntext": "la",
            "de": "die"
          },
          {
            "schrift": "adesso",
            "lerntext": "adesso",
            "de": "jetzt"
          }
        ],
        "id": "8.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot] adesso",
          "lerntext": "io voglio [Slot] adesso",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
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
          "schrift": "io viaggio in [Slot]",
          "lerntext": "io viaggio in [Slot]",
          "wortarten": {
            "io": "p",
            "viaggio": "v"
          }
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
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
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "c": "n",
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
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot] adesso",
          "lerntext": "io voglio [Slot] adesso",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.6"
      },
      {
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
        "id": "8.7"
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
              "schrift": "oggi",
              "lerntext": "oggi",
              "de": "heute"
            },
            {
              "schrift": "ieri",
              "lerntext": "ieri",
              "de": "gestern"
            },
            {
              "schrift": "domani",
              "lerntext": "domani",
              "de": "morgen"
            },
            {
              "schrift": "adesso",
              "lerntext": "adesso",
              "de": "jetzt"
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh"
            },
            {
              "schrift": "sempre",
              "lerntext": "sempre",
              "de": "immer"
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "nie"
            },
            {
              "schrift": "spesso",
              "lerntext": "spesso",
              "de": "oft"
            },
            {
              "schrift": "gia",
              "lerntext": "gia",
              "de": "schon"
            },
            {
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann",
              "c": "k"
            },
            {
              "schrift": "insieme",
              "lerntext": "insieme",
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
          "schrift": "ci vediamo la [Slot]",
          "lerntext": "ci vediamo la [Slot]",
          "wortarten": {
            "ci": "p",
            "vediamo": "v"
          }
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "quando",
            "lerntext": "quando",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "domani",
              "lerntext": "domani",
              "de": "morgen"
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "sempre",
              "lerntext": "sempre",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "gia",
              "lerntext": "gia",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "insieme",
              "lerntext": "insieme",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "oggi",
              "lerntext": "oggi",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "poco",
              "lerntext": "poco",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "ieri",
              "lerntext": "ieri",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "spesso",
              "lerntext": "spesso",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "quando",
            "lerntext": "quando",
            "de": "wann"
          },
          {
            "schrift": "anche",
            "lerntext": "anche",
            "de": "auch",
            "c": "k"
          },
          {
            "schrift": "solo",
            "lerntext": "solo",
            "de": "nur"
          }
        ],
        "id": "9.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "dura una [Slot]",
          "lerntext": "dura una [Slot]"
        },
        "frameDe": "Es dauert eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n",
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
          "schrift": "dura un [Slot]",
          "lerntext": "dura un [Slot]"
        },
        "frameDe": "Es dauert eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
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
          "schrift": "ci vediamo la [Slot]",
          "lerntext": "ci vediamo la [Slot]",
          "wortarten": {
            "ci": "p",
            "vediamo": "v"
          }
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "quando",
            "lerntext": "quando",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sempre",
              "lerntext": "sempre",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "gia",
              "lerntext": "gia",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "insieme",
              "lerntext": "insieme",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "oggi",
              "lerntext": "oggi",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "poco",
              "lerntext": "poco",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "ieri",
              "lerntext": "ieri",
              "de": "gestern",
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
          "schrift": "ci vediamo la [Slot]",
          "lerntext": "ci vediamo la [Slot]",
          "wortarten": {
            "ci": "p",
            "vediamo": "v"
          }
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "quando",
            "lerntext": "quando",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "spesso",
              "lerntext": "spesso",
              "de": "oft",
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
          "schrift": "io amo [Slot]",
          "lerntext": "io amo [Slot]",
          "wortarten": {
            "io": "p",
            "amo": "v"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "c": "n"
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "c": "n"
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "c": "n"
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "c": "n"
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
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
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "amo",
            "lerntext": "amo",
            "de": "lieben",
            "c": "v"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io amo [Slot]",
          "lerntext": "io amo [Slot]",
          "wortarten": {
            "io": "p",
            "amo": "v"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "c": "n"
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
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
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
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
          "schrift": "io vedo [Slot]",
          "lerntext": "io vedo [Slot]",
          "wortarten": {
            "io": "p",
            "vedo": "v"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mi",
              "lerntext": "mi",
              "de": "mir",
              "c": "p"
            },
            {
              "schrift": "ti",
              "lerntext": "ti",
              "de": "dir",
              "c": "p"
            },
            {
              "schrift": "ci",
              "lerntext": "ci",
              "de": "uns",
              "c": "p"
            },
            {
              "schrift": "tutto",
              "lerntext": "tutto",
              "de": "alles",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "qualcosa",
              "lerntext": "qualcosa",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "chi",
              "lerntext": "chi",
              "de": "wer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nostro",
              "lerntext": "nostro",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mio",
              "lerntext": "mio",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tuo",
              "lerntext": "tuo",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "suo",
              "lerntext": "suo",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "questo",
              "lerntext": "questo",
              "de": "dieser",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "trovo",
            "lerntext": "trovo",
            "de": "finden",
            "c": "v"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "der"
          },
          {
            "schrift": "cibo",
            "lerntext": "cibo",
            "de": "Essen",
            "c": "n"
          }
        ],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "è [Slot]",
          "lerntext": "è [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "c": "a"
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "c": "a"
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "c": "a"
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "c": "a"
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
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
          "schrift": "è [Slot]",
          "lerntext": "è [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "c": "a"
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "c": "a"
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "c": "a"
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
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
          "schrift": "il cibo è [Slot]",
          "lerntext": "il cibo è [Slot]",
          "wortarten": {
            "cibo": "n",
            "è": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "10.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "il cibo è [Slot]",
          "lerntext": "il cibo è [Slot]",
          "wortarten": {
            "cibo": "n",
            "è": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
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
          "schrift": "io amo [Slot]",
          "lerntext": "io amo [Slot]",
          "wortarten": {
            "io": "p",
            "amo": "v"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
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
          "schrift": "il cibo è [Slot]",
          "lerntext": "il cibo è [Slot]",
          "wortarten": {
            "cibo": "n",
            "è": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
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
          "schrift": "io vedo [Slot]",
          "lerntext": "io vedo [Slot]",
          "wortarten": {
            "io": "p",
            "vedo": "v"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mi",
              "lerntext": "mi",
              "de": "mir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ti",
              "lerntext": "ti",
              "de": "dir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tutto",
              "lerntext": "tutto",
              "de": "alles",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "qualcosa",
              "lerntext": "qualcosa",
              "de": "etwas",
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
        "id": "10.11"
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
          "schrift": "io ero [Slot] ieri",
          "lerntext": "io ero [Slot] ieri",
          "wortarten": {
            "io": "p"
          }
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "c": "a"
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
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
          "schrift": "io [Slot] domani",
          "lerntext": "io [Slot] domani",
          "wortarten": {
            "io": "p"
          }
        },
        "frameDe": "ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "trovare",
              "lerntext": "trovare",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "diventare",
            "lerntext": "diventare",
            "de": "werden",
            "c": "v"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot] molto",
          "lerntext": "io voglio [Slot] molto",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "c": "v"
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "lavoro",
            "lerntext": "lavoro",
            "de": "Arbeit",
            "c": "n"
          }
        ],
        "id": "11.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io divento [Slot]",
          "lerntext": "io divento [Slot]",
          "wortarten": {
            "io": "p",
            "divento": "v"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
              "c": "a"
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "c": "a"
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "divento",
            "lerntext": "divento",
            "de": "werden",
            "c": "v"
          }
        ],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot] molto",
          "lerntext": "io voglio [Slot] molto",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
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
          "schrift": "io voglio [Slot] molto",
          "lerntext": "io voglio [Slot] molto",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
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
        "id": "11.7"
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
          "schrift": "sono stanco [Slot] lavoro",
          "lerntext": "sono stanco [Slot] lavoro",
          "wortarten": {
            "sono": "v",
            "stanco": "a"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "e",
            "lerntext": "e",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da",
              "c": "k"
            },
            {
              "schrift": "sopra",
              "lerntext": "sopra",
              "de": "über"
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während",
              "c": "k"
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "fino",
              "lerntext": "fino",
              "de": "bis"
            },
            {
              "schrift": "prima",
              "lerntext": "prima",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
              "de": "auch",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "senza",
              "lerntext": "senza",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "per",
              "lerntext": "per",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "contro",
              "lerntext": "contro",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "accanto",
              "lerntext": "accanto",
              "de": "neben",
              "wieder": true
            },
            {
              "schrift": "tra",
              "lerntext": "tra",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "sotto",
              "lerntext": "sotto",
              "de": "unter",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "e",
            "lerntext": "e",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder",
            "c": "k"
          },
          {
            "schrift": "quindi",
            "lerntext": "quindi",
            "de": "also",
            "c": "k"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "sono stanco [Slot] lavoro",
          "lerntext": "sono stanco [Slot] lavoro",
          "wortarten": {
            "sono": "v",
            "stanco": "a"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "e",
            "lerntext": "e",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "prima",
              "lerntext": "prima",
              "de": "vor"
            },
            {
              "schrift": "fino",
              "lerntext": "fino",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "sopra",
              "lerntext": "sopra",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "senza",
              "lerntext": "senza",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "per",
              "lerntext": "per",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "contro",
              "lerntext": "contro",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "dietro",
              "lerntext": "dietro",
              "de": "hinter",
              "wieder": true
            },
            {
              "schrift": "su",
              "lerntext": "su",
              "de": "auf",
              "wieder": true
            },
            {
              "schrift": "in",
              "lerntext": "in",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "accanto",
              "lerntext": "accanto",
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
          "schrift": "voglio [Slot] ma non posso",
          "lerntext": "voglio [Slot] ma non posso",
          "wortarten": {
            "voglio": "v",
            "ma": "k",
            "posso": "v"
          }
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "c": "v"
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "c": "v",
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
          "schrift": "è [Slot] ma va bene",
          "lerntext": "è [Slot] ma va bene",
          "wortarten": {
            "è": "v",
            "ma": "k",
            "va": "v"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "c": "a"
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "velocemente",
              "lerntext": "velocemente",
              "de": "schnell"
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "li",
              "lerntext": "li",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "sempre",
              "lerntext": "sempre",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "certo",
              "lerntext": "certo",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "gia",
              "lerntext": "gia",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "insieme",
              "lerntext": "insieme",
              "de": "zusammen",
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
          "schrift": "è [Slot] ma va bene",
          "lerntext": "è [Slot] ma va bene",
          "wortarten": {
            "è": "v",
            "ma": "k",
            "va": "v"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lentamente",
              "lerntext": "lentamente",
              "de": "langsam"
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "c": "a"
            },
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "velocemente",
              "lerntext": "velocemente",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "li",
              "lerntext": "li",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "male",
              "lerntext": "male",
              "de": "schlecht",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "c": "v"
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
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
          "schrift": "è [Slot] ma va bene",
          "lerntext": "è [Slot] ma va bene",
          "wortarten": {
            "è": "v",
            "ma": "k",
            "va": "v"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lentamente",
              "lerntext": "lentamente",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "velocemente",
              "lerntext": "velocemente",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
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
          "schrift": "sono stanco [Slot] lavoro",
          "lerntext": "sono stanco [Slot] lavoro",
          "wortarten": {
            "sono": "v",
            "stanco": "a"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "e",
            "lerntext": "e",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
              "de": "auch",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "fino",
              "lerntext": "fino",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "c": "v",
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
          "schrift": "sono stanco [Slot] lavoro",
          "lerntext": "sono stanco [Slot] lavoro",
          "wortarten": {
            "sono": "v",
            "stanco": "a"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "e",
            "lerntext": "e",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
              "de": "auch",
              "c": "k",
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
          "schrift": "una [Slot] mi fa male",
          "lerntext": "una [Slot] mi fa male",
          "wortarten": {
            "mi": "p",
            "fa": "v"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "c": "n"
            },
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "13.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "un [Slot] mi fa male",
          "lerntext": "un [Slot] mi fa male",
          "wortarten": {
            "mi": "p",
            "fa": "v"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "c": "n"
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "c": "n",
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
          "schrift": "ho male a una [Slot]",
          "lerntext": "ho male a una [Slot]",
          "wortarten": {
            "ho": "v"
          }
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "c": "n"
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
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
          "schrift": "qui c'è un [Slot]",
          "lerntext": "qui c'è un [Slot]"
        },
        "frameDe": "Hier gibt es einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "c": "n"
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
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
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "der"
          }
        ],
        "id": "14.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "compro una [Slot]",
          "lerntext": "compro una [Slot]",
          "wortarten": {
            "compro": "v"
          }
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "c": "n"
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
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
          "schrift": "compro un [Slot]",
          "lerntext": "compro un [Slot]",
          "wortarten": {
            "compro": "v"
          }
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "c": "n"
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
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
          "schrift": "ho [Slot]",
          "lerntext": "ho [Slot]",
          "wortarten": {
            "ho": "v"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "c": "n"
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
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
          "schrift": "questo è il mio [Slot]",
          "lerntext": "questo è il mio [Slot]",
          "wortarten": {
            "questo": "p",
            "è": "v",
            "mio": "p"
          }
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit",
              "c": "n"
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
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
          "schrift": "aspetto una [Slot]",
          "lerntext": "aspetto una [Slot]",
          "wortarten": {
            "aspetto": "v"
          }
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "c": "n"
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "c": "n",
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
          "schrift": "aspetto un [Slot]",
          "lerntext": "aspetto un [Slot]",
          "wortarten": {
            "aspetto": "v"
          }
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "c": "n"
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ho preso una buon [Slot]",
          "lerntext": "ho preso una buon [Slot]",
          "wortarten": {
            "ho": "v",
            "preso": "v"
          }
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
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
        "kind": "frame",
        "frame": {
          "schrift": "ho preso un buon [Slot]",
          "lerntext": "ho preso un buon [Slot]",
          "wortarten": {
            "ho": "v",
            "preso": "v"
          }
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.9"
      },
      {
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
        "id": "14.10"
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "persona",
              "lerntext": "persona",
              "de": "Person",
              "c": "n"
            },
            {
              "schrift": "moglie",
              "lerntext": "moglie",
              "de": "Ehefrau",
              "c": "n"
            },
            {
              "schrift": "bar",
              "lerntext": "bar",
              "de": "Bar",
              "c": "n"
            },
            {
              "schrift": "farmacia",
              "lerntext": "farmacia",
              "de": "Apotheke",
              "c": "n"
            },
            {
              "schrift": "conto",
              "lerntext": "conto",
              "de": "Rechnung",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lezione",
              "lerntext": "lezione",
              "de": "Vorlesung",
              "c": "n"
            },
            {
              "schrift": "lingua",
              "lerntext": "lingua",
              "de": "Sprache",
              "c": "n"
            },
            {
              "schrift": "domanda",
              "lerntext": "domanda",
              "de": "Frage",
              "c": "n"
            },
            {
              "schrift": "pizza",
              "lerntext": "pizza",
              "de": "Pizza",
              "c": "n"
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte",
              "c": "n"
            },
            {
              "schrift": "persona",
              "lerntext": "persona",
              "de": "Person",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "moglie",
              "lerntext": "moglie",
              "de": "Ehefrau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bar",
              "lerntext": "bar",
              "de": "Bar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "farmacia",
              "lerntext": "farmacia",
              "de": "Apotheke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "conto",
              "lerntext": "conto",
              "de": "Rechnung",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bottiglia",
              "lerntext": "bottiglia",
              "de": "Flasche",
              "c": "n"
            },
            {
              "schrift": "medicina",
              "lerntext": "medicina",
              "de": "Medizin",
              "c": "n"
            },
            {
              "schrift": "numero",
              "lerntext": "numero",
              "de": "Nummer",
              "c": "n"
            },
            {
              "schrift": "musica",
              "lerntext": "musica",
              "de": "Musik",
              "c": "n"
            },
            {
              "schrift": "mondo",
              "lerntext": "mondo",
              "de": "Welt",
              "c": "n"
            },
            {
              "schrift": "lezione",
              "lerntext": "lezione",
              "de": "Vorlesung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lingua",
              "lerntext": "lingua",
              "de": "Sprache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "domanda",
              "lerntext": "domanda",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pizza",
              "lerntext": "pizza",
              "de": "Pizza",
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
              "schrift": "persona",
              "lerntext": "persona",
              "de": "Person",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "moglie",
              "lerntext": "moglie",
              "de": "Ehefrau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bar",
              "lerntext": "bar",
              "de": "Bar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "farmacia",
              "lerntext": "farmacia",
              "de": "Apotheke",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "conto",
              "lerntext": "conto",
              "de": "Rechnung",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "aria",
              "lerntext": "aria",
              "de": "Luft",
              "c": "n"
            },
            {
              "schrift": "gatto",
              "lerntext": "gatto",
              "de": "Katze",
              "c": "n"
            },
            {
              "schrift": "amore",
              "lerntext": "amore",
              "de": "Liebe",
              "c": "n"
            },
            {
              "schrift": "modo",
              "lerntext": "modo",
              "de": "Art",
              "c": "n"
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "c": "n"
            },
            {
              "schrift": "bottiglia",
              "lerntext": "bottiglia",
              "de": "Flasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "medicina",
              "lerntext": "medicina",
              "de": "Medizin",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "numero",
              "lerntext": "numero",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "musica",
              "lerntext": "musica",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mondo",
              "lerntext": "mondo",
              "de": "Welt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lezione",
              "lerntext": "lezione",
              "de": "Vorlesung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lingua",
              "lerntext": "lingua",
              "de": "Sprache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "domanda",
              "lerntext": "domanda",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pizza",
              "lerntext": "pizza",
              "de": "Pizza",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "storia",
              "lerntext": "storia",
              "de": "Geschichte",
              "c": "n"
            },
            {
              "schrift": "paura",
              "lerntext": "paura",
              "de": "Angst",
              "c": "n"
            },
            {
              "schrift": "turno",
              "lerntext": "turno",
              "de": "Schicht",
              "c": "n"
            },
            {
              "schrift": "taglia",
              "lerntext": "taglia",
              "de": "Kleidergrösse",
              "c": "n"
            },
            {
              "schrift": "aria",
              "lerntext": "aria",
              "de": "Luft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gatto",
              "lerntext": "gatto",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amore",
              "lerntext": "amore",
              "de": "Liebe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "modo",
              "lerntext": "modo",
              "de": "Art",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bottiglia",
              "lerntext": "bottiglia",
              "de": "Flasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "medicina",
              "lerntext": "medicina",
              "de": "Medizin",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "numero",
              "lerntext": "numero",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "musica",
              "lerntext": "musica",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mondo",
              "lerntext": "mondo",
              "de": "Welt",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "uomo",
              "lerntext": "uomo",
              "de": "Mann",
              "c": "n"
            },
            {
              "schrift": "ragazzo",
              "lerntext": "ragazzo",
              "de": "Junge",
              "c": "n"
            },
            {
              "schrift": "marito",
              "lerntext": "marito",
              "de": "Ehemann",
              "c": "n"
            },
            {
              "schrift": "mese",
              "lerntext": "mese",
              "de": "Monat",
              "c": "n"
            },
            {
              "schrift": "mattina",
              "lerntext": "mattina",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pomeriggio",
              "lerntext": "pomeriggio",
              "de": "Nachmittag",
              "c": "n"
            },
            {
              "schrift": "piazza",
              "lerntext": "piazza",
              "de": "Platz",
              "c": "n"
            },
            {
              "schrift": "mercato",
              "lerntext": "mercato",
              "de": "Markt",
              "c": "n"
            },
            {
              "schrift": "passaporto",
              "lerntext": "passaporto",
              "de": "Pass",
              "c": "n"
            },
            {
              "schrift": "prezzo",
              "lerntext": "prezzo",
              "de": "Preis",
              "c": "n"
            },
            {
              "schrift": "uomo",
              "lerntext": "uomo",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ragazzo",
              "lerntext": "ragazzo",
              "de": "Junge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "marito",
              "lerntext": "marito",
              "de": "Ehemann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mese",
              "lerntext": "mese",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mattina",
              "lerntext": "mattina",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment",
              "c": "n"
            },
            {
              "schrift": "medico",
              "lerntext": "medico",
              "de": "Arzt",
              "c": "n"
            },
            {
              "schrift": "dolore",
              "lerntext": "dolore",
              "de": "Schmerz",
              "c": "n"
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "c": "n"
            },
            {
              "schrift": "cane",
              "lerntext": "cane",
              "de": "Hund",
              "c": "n"
            },
            {
              "schrift": "pomeriggio",
              "lerntext": "pomeriggio",
              "de": "Nachmittag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piazza",
              "lerntext": "piazza",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mercato",
              "lerntext": "mercato",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "passaporto",
              "lerntext": "passaporto",
              "de": "Pass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "prezzo",
              "lerntext": "prezzo",
              "de": "Preis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uomo",
              "lerntext": "uomo",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ragazzo",
              "lerntext": "ragazzo",
              "de": "Junge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "marito",
              "lerntext": "marito",
              "de": "Ehemann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mese",
              "lerntext": "mese",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mattina",
              "lerntext": "mattina",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "parte",
              "lerntext": "parte",
              "de": "Teil",
              "c": "n"
            },
            {
              "schrift": "inizio",
              "lerntext": "inizio",
              "de": "Anfang",
              "c": "n"
            },
            {
              "schrift": "motivo",
              "lerntext": "motivo",
              "de": "Grund",
              "c": "n"
            },
            {
              "schrift": "fame",
              "lerntext": "fame",
              "de": "Hunger",
              "c": "n"
            },
            {
              "schrift": "sete",
              "lerntext": "sete",
              "de": "Durst",
              "c": "n"
            },
            {
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "medico",
              "lerntext": "medico",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dolore",
              "lerntext": "dolore",
              "de": "Schmerz",
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
              "schrift": "cane",
              "lerntext": "cane",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomeriggio",
              "lerntext": "pomeriggio",
              "de": "Nachmittag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piazza",
              "lerntext": "piazza",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mercato",
              "lerntext": "mercato",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "passaporto",
              "lerntext": "passaporto",
              "de": "Pass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "prezzo",
              "lerntext": "prezzo",
              "de": "Preis",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sonno",
              "lerntext": "sonno",
              "de": "Schlaf",
              "c": "n"
            },
            {
              "schrift": "sconto",
              "lerntext": "sconto",
              "de": "Rabatt",
              "c": "n"
            },
            {
              "schrift": "ingresso",
              "lerntext": "ingresso",
              "de": "Eintritt",
              "c": "n"
            },
            {
              "schrift": "uscita",
              "lerntext": "uscita",
              "de": "Ausgang",
              "c": "n"
            },
            {
              "schrift": "lavoratore",
              "lerntext": "lavoratore",
              "de": "Arbeiter",
              "c": "n"
            },
            {
              "schrift": "parte",
              "lerntext": "parte",
              "de": "Teil",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "inizio",
              "lerntext": "inizio",
              "de": "Anfang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "motivo",
              "lerntext": "motivo",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fame",
              "lerntext": "fame",
              "de": "Hunger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sete",
              "lerntext": "sete",
              "de": "Durst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "medico",
              "lerntext": "medico",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dolore",
              "lerntext": "dolore",
              "de": "Schmerz",
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
              "schrift": "cane",
              "lerntext": "cane",
              "de": "Hund",
              "c": "n",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cliente",
              "lerntext": "cliente",
              "de": "Kunde",
              "c": "n"
            },
            {
              "schrift": "sonno",
              "lerntext": "sonno",
              "de": "Schlaf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sconto",
              "lerntext": "sconto",
              "de": "Rabatt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ingresso",
              "lerntext": "ingresso",
              "de": "Eintritt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uscita",
              "lerntext": "uscita",
              "de": "Ausgang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lavoratore",
              "lerntext": "lavoratore",
              "de": "Arbeiter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parte",
              "lerntext": "parte",
              "de": "Teil",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "inizio",
              "lerntext": "inizio",
              "de": "Anfang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "motivo",
              "lerntext": "motivo",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fame",
              "lerntext": "fame",
              "de": "Hunger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sete",
              "lerntext": "sete",
              "de": "Durst",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "15.11"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "anno",
              "lerntext": "anno",
              "de": "Jahr",
              "c": "n"
            },
            {
              "schrift": "paese",
              "lerntext": "paese",
              "de": "Dorf",
              "c": "n"
            },
            {
              "schrift": "ragazza",
              "lerntext": "ragazza",
              "de": "Mädchen",
              "c": "n"
            },
            {
              "schrift": "parola",
              "lerntext": "parola",
              "de": "Wort",
              "c": "n"
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem",
              "c": "n"
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "febbre",
              "lerntext": "febbre",
              "de": "Fieber",
              "c": "n"
            },
            {
              "schrift": "festa",
              "lerntext": "festa",
              "de": "Fest",
              "c": "n"
            },
            {
              "schrift": "vita",
              "lerntext": "vita",
              "de": "Leben",
              "c": "n"
            },
            {
              "schrift": "fuoco",
              "lerntext": "fuoco",
              "de": "Feuer",
              "c": "n"
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk",
              "c": "n"
            },
            {
              "schrift": "anno",
              "lerntext": "anno",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "paese",
              "lerntext": "paese",
              "de": "Dorf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ragazza",
              "lerntext": "ragazza",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parola",
              "lerntext": "parola",
              "de": "Wort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fine",
              "lerntext": "fine",
              "de": "Ende",
              "c": "n"
            },
            {
              "schrift": "esempio",
              "lerntext": "esempio",
              "de": "Beispiel",
              "c": "n"
            },
            {
              "schrift": "documento",
              "lerntext": "documento",
              "de": "Dokument",
              "c": "n"
            },
            {
              "schrift": "febbre",
              "lerntext": "febbre",
              "de": "Fieber",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "festa",
              "lerntext": "festa",
              "de": "Fest",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vita",
              "lerntext": "vita",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fuoco",
              "lerntext": "fuoco",
              "de": "Feuer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "anno",
              "lerntext": "anno",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "paese",
              "lerntext": "paese",
              "de": "Dorf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ragazza",
              "lerntext": "ragazza",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parola",
              "lerntext": "parola",
              "de": "Wort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem",
              "c": "n",
              "wieder": true
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute",
              "c": "n"
            },
            {
              "schrift": "pasta",
              "lerntext": "pasta",
              "de": "Nudeln",
              "c": "n"
            },
            {
              "schrift": "capelli",
              "lerntext": "capelli",
              "de": "Haare",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "storia",
              "lerntext": "storia",
              "de": "Geschichte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "paura",
              "lerntext": "paura",
              "de": "Angst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "turno",
              "lerntext": "turno",
              "de": "Schicht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "taglia",
              "lerntext": "taglia",
              "de": "Kleidergrösse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pasta",
              "lerntext": "pasta",
              "de": "Nudeln",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "capelli",
              "lerntext": "capelli",
              "de": "Haare",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aria",
              "lerntext": "aria",
              "de": "Luft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gatto",
              "lerntext": "gatto",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amore",
              "lerntext": "amore",
              "de": "Liebe",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "modo",
              "lerntext": "modo",
              "de": "Art",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "storia",
              "lerntext": "storia",
              "de": "Geschichte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "paura",
              "lerntext": "paura",
              "de": "Angst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "turno",
              "lerntext": "turno",
              "de": "Schicht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "taglia",
              "lerntext": "taglia",
              "de": "Kleidergrösse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pasta",
              "lerntext": "pasta",
              "de": "Nudeln",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "capelli",
              "lerntext": "capelli",
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
        "kind": "frame",
        "frame": {
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fine",
              "lerntext": "fine",
              "de": "Ende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "esempio",
              "lerntext": "esempio",
              "de": "Beispiel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "documento",
              "lerntext": "documento",
              "de": "Dokument",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "febbre",
              "lerntext": "febbre",
              "de": "Fieber",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "festa",
              "lerntext": "festa",
              "de": "Fest",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vita",
              "lerntext": "vita",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fuoco",
              "lerntext": "fuoco",
              "de": "Feuer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cliente",
              "lerntext": "cliente",
              "de": "Kunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sonno",
              "lerntext": "sonno",
              "de": "Schlaf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sconto",
              "lerntext": "sconto",
              "de": "Rabatt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ingresso",
              "lerntext": "ingresso",
              "de": "Eintritt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "uscita",
              "lerntext": "uscita",
              "de": "Ausgang",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lavoratore",
              "lerntext": "lavoratore",
              "de": "Arbeiter",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chiamare",
              "lerntext": "chiamare",
              "de": "rufen",
              "c": "v"
            },
            {
              "schrift": "bisognare",
              "lerntext": "bisognare",
              "de": "nötig sein",
              "c": "v"
            },
            {
              "schrift": "costare",
              "lerntext": "costare",
              "de": "kosten",
              "c": "v"
            },
            {
              "schrift": "entrare",
              "lerntext": "entrare",
              "de": "hineingehen",
              "c": "v"
            },
            {
              "schrift": "portare",
              "lerntext": "portare",
              "de": "bringen",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "piacere",
              "lerntext": "piacere",
              "de": "gefallen",
              "c": "v"
            },
            {
              "schrift": "studiare",
              "lerntext": "studiare",
              "de": "studieren",
              "c": "v"
            },
            {
              "schrift": "finire",
              "lerntext": "finire",
              "de": "beenden",
              "c": "v"
            },
            {
              "schrift": "riuscire",
              "lerntext": "riuscire",
              "de": "schaffen",
              "c": "v"
            },
            {
              "schrift": "cantare",
              "lerntext": "cantare",
              "de": "singen",
              "c": "v"
            },
            {
              "schrift": "chiamare",
              "lerntext": "chiamare",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bisognare",
              "lerntext": "bisognare",
              "de": "nötig sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "costare",
              "lerntext": "costare",
              "de": "kosten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entrare",
              "lerntext": "entrare",
              "de": "hineingehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "portare",
              "lerntext": "portare",
              "de": "bringen",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "conoscersi",
              "lerntext": "conoscersi",
              "de": "sich kennenlernen",
              "c": "v"
            },
            {
              "schrift": "succedere",
              "lerntext": "succedere",
              "de": "geschehen",
              "c": "v"
            },
            {
              "schrift": "firmare",
              "lerntext": "firmare",
              "de": "unterschreiben",
              "c": "v"
            },
            {
              "schrift": "dispiacere",
              "lerntext": "dispiacere",
              "de": "leidtun",
              "c": "v"
            },
            {
              "schrift": "tornare",
              "lerntext": "tornare",
              "de": "zurückkehren",
              "c": "v"
            },
            {
              "schrift": "piacere",
              "lerntext": "piacere",
              "de": "gefallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "studiare",
              "lerntext": "studiare",
              "de": "studieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "finire",
              "lerntext": "finire",
              "de": "beenden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "riuscire",
              "lerntext": "riuscire",
              "de": "schaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cantare",
              "lerntext": "cantare",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiamare",
              "lerntext": "chiamare",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bisognare",
              "lerntext": "bisognare",
              "de": "nötig sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "costare",
              "lerntext": "costare",
              "de": "kosten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entrare",
              "lerntext": "entrare",
              "de": "hineingehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "portare",
              "lerntext": "portare",
              "de": "bringen",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vivere",
              "lerntext": "vivere",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "partire",
              "lerntext": "partire",
              "de": "abfahren",
              "c": "v"
            },
            {
              "schrift": "arrivare",
              "lerntext": "arrivare",
              "de": "ankommen",
              "c": "v"
            },
            {
              "schrift": "uscire",
              "lerntext": "uscire",
              "de": "hinausgehen",
              "c": "v"
            },
            {
              "schrift": "restare",
              "lerntext": "restare",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "conoscersi",
              "lerntext": "conoscersi",
              "de": "sich kennenlernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "succedere",
              "lerntext": "succedere",
              "de": "geschehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "firmare",
              "lerntext": "firmare",
              "de": "unterschreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dispiacere",
              "lerntext": "dispiacere",
              "de": "leidtun",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tornare",
              "lerntext": "tornare",
              "de": "zurückkehren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piacere",
              "lerntext": "piacere",
              "de": "gefallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "studiare",
              "lerntext": "studiare",
              "de": "studieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "finire",
              "lerntext": "finire",
              "de": "beenden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "riuscire",
              "lerntext": "riuscire",
              "de": "schaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cantare",
              "lerntext": "cantare",
              "de": "singen",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "conoscere",
              "lerntext": "conoscere",
              "de": "kennen",
              "c": "v"
            },
            {
              "schrift": "imparare",
              "lerntext": "imparare",
              "de": "lernen",
              "c": "v"
            },
            {
              "schrift": "insegnare",
              "lerntext": "insegnare",
              "de": "unterrichten",
              "c": "v"
            },
            {
              "schrift": "ricordare",
              "lerntext": "ricordare",
              "de": "sich erinnern",
              "c": "v"
            },
            {
              "schrift": "cominciare",
              "lerntext": "cominciare",
              "de": "anfangen",
              "c": "v"
            },
            {
              "schrift": "vivere",
              "lerntext": "vivere",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "partire",
              "lerntext": "partire",
              "de": "abfahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrivare",
              "lerntext": "arrivare",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "uscire",
              "lerntext": "uscire",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "restare",
              "lerntext": "restare",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conoscersi",
              "lerntext": "conoscersi",
              "de": "sich kennenlernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "succedere",
              "lerntext": "succedere",
              "de": "geschehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "firmare",
              "lerntext": "firmare",
              "de": "unterschreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dispiacere",
              "lerntext": "dispiacere",
              "de": "leidtun",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tornare",
              "lerntext": "tornare",
              "de": "zurückkehren",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "provare",
              "lerntext": "provare",
              "de": "versuchen",
              "c": "v"
            },
            {
              "schrift": "correre",
              "lerntext": "correre",
              "de": "rennen",
              "c": "v"
            },
            {
              "schrift": "visitare",
              "lerntext": "visitare",
              "de": "besuchen",
              "c": "v"
            },
            {
              "schrift": "sposare",
              "lerntext": "sposare",
              "de": "heiraten",
              "c": "v"
            },
            {
              "schrift": "nascere",
              "lerntext": "nascere",
              "de": "geboren werden",
              "c": "v"
            },
            {
              "schrift": "conoscere",
              "lerntext": "conoscere",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "imparare",
              "lerntext": "imparare",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "insegnare",
              "lerntext": "insegnare",
              "de": "unterrichten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ricordare",
              "lerntext": "ricordare",
              "de": "sich erinnern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cominciare",
              "lerntext": "cominciare",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vivere",
              "lerntext": "vivere",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "partire",
              "lerntext": "partire",
              "de": "abfahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrivare",
              "lerntext": "arrivare",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "uscire",
              "lerntext": "uscire",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "restare",
              "lerntext": "restare",
              "de": "bleiben",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sembrare",
              "lerntext": "sembrare",
              "de": "scheinen",
              "c": "v"
            },
            {
              "schrift": "preferire",
              "lerntext": "preferire",
              "de": "bevorzugen",
              "c": "v"
            },
            {
              "schrift": "ordinare",
              "lerntext": "ordinare",
              "de": "bestellen",
              "c": "v"
            },
            {
              "schrift": "prenotare",
              "lerntext": "prenotare",
              "de": "reservieren",
              "c": "v"
            },
            {
              "schrift": "affittare",
              "lerntext": "affittare",
              "de": "mieten",
              "c": "v"
            },
            {
              "schrift": "provare",
              "lerntext": "provare",
              "de": "versuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "correre",
              "lerntext": "correre",
              "de": "rennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "visitare",
              "lerntext": "visitare",
              "de": "besuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sposare",
              "lerntext": "sposare",
              "de": "heiraten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "nascere",
              "lerntext": "nascere",
              "de": "geboren werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conoscere",
              "lerntext": "conoscere",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "imparare",
              "lerntext": "imparare",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "insegnare",
              "lerntext": "insegnare",
              "de": "unterrichten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ricordare",
              "lerntext": "ricordare",
              "de": "sich erinnern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cominciare",
              "lerntext": "cominciare",
              "de": "anfangen",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cucinare",
              "lerntext": "cucinare",
              "de": "kochen",
              "c": "v"
            },
            {
              "schrift": "scusare",
              "lerntext": "scusare",
              "de": "entschuldigen",
              "c": "v"
            },
            {
              "schrift": "ringraziare",
              "lerntext": "ringraziare",
              "de": "danken",
              "c": "v"
            },
            {
              "schrift": "telefonare",
              "lerntext": "telefonare",
              "de": "telefonieren",
              "c": "v"
            },
            {
              "schrift": "salutare",
              "lerntext": "salutare",
              "de": "grüßen",
              "c": "v"
            },
            {
              "schrift": "sembrare",
              "lerntext": "sembrare",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "preferire",
              "lerntext": "preferire",
              "de": "bevorzugen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ordinare",
              "lerntext": "ordinare",
              "de": "bestellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prenotare",
              "lerntext": "prenotare",
              "de": "reservieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "affittare",
              "lerntext": "affittare",
              "de": "mieten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "provare",
              "lerntext": "provare",
              "de": "versuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "correre",
              "lerntext": "correre",
              "de": "rennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "visitare",
              "lerntext": "visitare",
              "de": "besuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sposare",
              "lerntext": "sposare",
              "de": "heiraten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "nascere",
              "lerntext": "nascere",
              "de": "geboren werden",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cucinare",
              "lerntext": "cucinare",
              "de": "kochen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "scusare",
              "lerntext": "scusare",
              "de": "entschuldigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ringraziare",
              "lerntext": "ringraziare",
              "de": "danken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "telefonare",
              "lerntext": "telefonare",
              "de": "telefonieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "salutare",
              "lerntext": "salutare",
              "de": "grüßen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sembrare",
              "lerntext": "sembrare",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "preferire",
              "lerntext": "preferire",
              "de": "bevorzugen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ordinare",
              "lerntext": "ordinare",
              "de": "bestellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prenotare",
              "lerntext": "prenotare",
              "de": "reservieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "affittare",
              "lerntext": "affittare",
              "de": "mieten",
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]",
          "wortarten": {
            "voglio": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cucinare",
              "lerntext": "cucinare",
              "de": "kochen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "scusare",
              "lerntext": "scusare",
              "de": "entschuldigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ringraziare",
              "lerntext": "ringraziare",
              "de": "danken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "telefonare",
              "lerntext": "telefonare",
              "de": "telefonieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "salutare",
              "lerntext": "salutare",
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
          "schrift": "è molto [Slot]",
          "lerntext": "è molto [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "buono",
              "lerntext": "buono",
              "de": "gut",
              "c": "a"
            },
            {
              "schrift": "vero",
              "lerntext": "vero",
              "de": "wahr",
              "c": "a"
            },
            {
              "schrift": "sbagliato",
              "lerntext": "sbagliato",
              "de": "verkehrt",
              "c": "a"
            },
            {
              "schrift": "gratis",
              "lerntext": "gratis",
              "de": "kostenlos",
              "c": "a"
            },
            {
              "schrift": "pieno",
              "lerntext": "pieno",
              "de": "voll",
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
          "schrift": "è molto [Slot]",
          "lerntext": "è molto [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vuoto",
              "lerntext": "vuoto",
              "de": "leer",
              "c": "a"
            },
            {
              "schrift": "libero",
              "lerntext": "libero",
              "de": "frei",
              "c": "a"
            },
            {
              "schrift": "occupato",
              "lerntext": "occupato",
              "de": "besetzt",
              "c": "a"
            },
            {
              "schrift": "cattivo",
              "lerntext": "cattivo",
              "de": "schlecht",
              "c": "a"
            },
            {
              "schrift": "possibile",
              "lerntext": "possibile",
              "de": "möglich",
              "c": "a"
            },
            {
              "schrift": "buono",
              "lerntext": "buono",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vero",
              "lerntext": "vero",
              "de": "wahr",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sbagliato",
              "lerntext": "sbagliato",
              "de": "verkehrt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gratis",
              "lerntext": "gratis",
              "de": "kostenlos",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pieno",
              "lerntext": "pieno",
              "de": "voll",
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
          "schrift": "è molto [Slot]",
          "lerntext": "è molto [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "economico",
              "lerntext": "economico",
              "de": "günstig",
              "c": "a"
            },
            {
              "schrift": "sano",
              "lerntext": "sano",
              "de": "gesund",
              "c": "a"
            },
            {
              "schrift": "simpatico",
              "lerntext": "simpatico",
              "de": "sympathisch",
              "c": "a"
            },
            {
              "schrift": "gentile",
              "lerntext": "gentile",
              "de": "freundlich",
              "c": "a"
            },
            {
              "schrift": "veloce",
              "lerntext": "veloce",
              "de": "schnell",
              "c": "a"
            },
            {
              "schrift": "vuoto",
              "lerntext": "vuoto",
              "de": "leer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "libero",
              "lerntext": "libero",
              "de": "frei",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "occupato",
              "lerntext": "occupato",
              "de": "besetzt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cattivo",
              "lerntext": "cattivo",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "possibile",
              "lerntext": "possibile",
              "de": "möglich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "buono",
              "lerntext": "buono",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vero",
              "lerntext": "vero",
              "de": "wahr",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sbagliato",
              "lerntext": "sbagliato",
              "de": "verkehrt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gratis",
              "lerntext": "gratis",
              "de": "kostenlos",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pieno",
              "lerntext": "pieno",
              "de": "voll",
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
          "schrift": "è molto [Slot]",
          "lerntext": "è molto [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lento",
              "lerntext": "lento",
              "de": "langsam",
              "c": "a"
            },
            {
              "schrift": "salato",
              "lerntext": "salato",
              "de": "salzig",
              "c": "a"
            },
            {
              "schrift": "piccante",
              "lerntext": "piccante",
              "de": "scharf",
              "c": "a"
            },
            {
              "schrift": "buonissimo",
              "lerntext": "buonissimo",
              "de": "sehr gut",
              "c": "a"
            },
            {
              "schrift": "primo piano",
              "lerntext": "primo piano",
              "de": "erster Stock",
              "c": "a"
            },
            {
              "schrift": "economico",
              "lerntext": "economico",
              "de": "günstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sano",
              "lerntext": "sano",
              "de": "gesund",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "simpatico",
              "lerntext": "simpatico",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gentile",
              "lerntext": "gentile",
              "de": "freundlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "veloce",
              "lerntext": "veloce",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vuoto",
              "lerntext": "vuoto",
              "de": "leer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "libero",
              "lerntext": "libero",
              "de": "frei",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "occupato",
              "lerntext": "occupato",
              "de": "besetzt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cattivo",
              "lerntext": "cattivo",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "possibile",
              "lerntext": "possibile",
              "de": "möglich",
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
          "schrift": "è molto [Slot]",
          "lerntext": "è molto [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ultimo posto",
              "lerntext": "ultimo posto",
              "de": "letzter Platz",
              "c": "a"
            },
            {
              "schrift": "italiano",
              "lerntext": "italiano",
              "de": "italienisch",
              "c": "a"
            },
            {
              "schrift": "tedesco",
              "lerntext": "tedesco",
              "de": "deutsch",
              "c": "a"
            },
            {
              "schrift": "inglese",
              "lerntext": "inglese",
              "de": "englisch",
              "c": "a"
            },
            {
              "schrift": "scorso",
              "lerntext": "scorso",
              "de": "letzter",
              "c": "a"
            },
            {
              "schrift": "lento",
              "lerntext": "lento",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "salato",
              "lerntext": "salato",
              "de": "salzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piccante",
              "lerntext": "piccante",
              "de": "scharf",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "buonissimo",
              "lerntext": "buonissimo",
              "de": "sehr gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "primo piano",
              "lerntext": "primo piano",
              "de": "erster Stock",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "economico",
              "lerntext": "economico",
              "de": "günstig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sano",
              "lerntext": "sano",
              "de": "gesund",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "simpatico",
              "lerntext": "simpatico",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gentile",
              "lerntext": "gentile",
              "de": "freundlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "veloce",
              "lerntext": "veloce",
              "de": "schnell",
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
          "schrift": "è molto [Slot]",
          "lerntext": "è molto [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fresco",
              "lerntext": "fresco",
              "de": "frisch",
              "c": "a"
            },
            {
              "schrift": "straniero",
              "lerntext": "straniero",
              "de": "ausländisch",
              "c": "a"
            },
            {
              "schrift": "prossimo",
              "lerntext": "prossimo",
              "de": "nächster",
              "c": "a"
            },
            {
              "schrift": "solito",
              "lerntext": "solito",
              "de": "üblich",
              "c": "a"
            },
            {
              "schrift": "bravo",
              "lerntext": "bravo",
              "de": "tüchtig",
              "c": "a"
            },
            {
              "schrift": "ultimo posto",
              "lerntext": "ultimo posto",
              "de": "letzter Platz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "italiano",
              "lerntext": "italiano",
              "de": "italienisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tedesco",
              "lerntext": "tedesco",
              "de": "deutsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "inglese",
              "lerntext": "inglese",
              "de": "englisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "scorso",
              "lerntext": "scorso",
              "de": "letzter",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lento",
              "lerntext": "lento",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "salato",
              "lerntext": "salato",
              "de": "salzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piccante",
              "lerntext": "piccante",
              "de": "scharf",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "buonissimo",
              "lerntext": "buonissimo",
              "de": "sehr gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "primo piano",
              "lerntext": "primo piano",
              "de": "erster Stock",
              "c": "a",
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
          "schrift": "è molto [Slot]",
          "lerntext": "è molto [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fresco",
              "lerntext": "fresco",
              "de": "frisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "straniero",
              "lerntext": "straniero",
              "de": "ausländisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "prossimo",
              "lerntext": "prossimo",
              "de": "nächster",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "solito",
              "lerntext": "solito",
              "de": "üblich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bravo",
              "lerntext": "bravo",
              "de": "tüchtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ultimo posto",
              "lerntext": "ultimo posto",
              "de": "letzter Platz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "italiano",
              "lerntext": "italiano",
              "de": "italienisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tedesco",
              "lerntext": "tedesco",
              "de": "deutsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "inglese",
              "lerntext": "inglese",
              "de": "englisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "scorso",
              "lerntext": "scorso",
              "de": "letzter",
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
        "kind": "frame",
        "frame": {
          "schrift": "è molto [Slot]",
          "lerntext": "è molto [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fresco",
              "lerntext": "fresco",
              "de": "frisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "straniero",
              "lerntext": "straniero",
              "de": "ausländisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "prossimo",
              "lerntext": "prossimo",
              "de": "nächster",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "solito",
              "lerntext": "solito",
              "de": "üblich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bravo",
              "lerntext": "bravo",
              "de": "tüchtig",
              "c": "a",
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
    "title": "Weitere Adverbien",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "lo faccio [Slot]",
          "lerntext": "lo faccio [Slot]",
          "wortarten": {
            "faccio": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "meno",
              "lerntext": "meno",
              "de": "weniger"
            },
            {
              "schrift": "poi",
              "lerntext": "poi",
              "de": "dann"
            },
            {
              "schrift": "subito",
              "lerntext": "subito",
              "de": "sofort"
            },
            {
              "schrift": "ancora",
              "lerntext": "ancora",
              "de": "noch"
            },
            {
              "schrift": "forse",
              "lerntext": "forse",
              "de": "vielleicht"
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
          "schrift": "lo faccio [Slot]",
          "lerntext": "lo faccio [Slot]",
          "wortarten": {
            "faccio": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "davvero",
              "lerntext": "davvero",
              "de": "wirklich"
            },
            {
              "schrift": "cosi",
              "lerntext": "cosi",
              "de": "so"
            },
            {
              "schrift": "quasi",
              "lerntext": "quasi",
              "de": "fast"
            },
            {
              "schrift": "proprio",
              "lerntext": "proprio",
              "de": "genau"
            },
            {
              "schrift": "sicuramente",
              "lerntext": "sicuramente",
              "de": "bestimmt"
            },
            {
              "schrift": "meno",
              "lerntext": "meno",
              "de": "weniger",
              "wieder": true
            },
            {
              "schrift": "poi",
              "lerntext": "poi",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "subito",
              "lerntext": "subito",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "ancora",
              "lerntext": "ancora",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "forse",
              "lerntext": "forse",
              "de": "vielleicht",
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
          "schrift": "lo faccio [Slot]",
          "lerntext": "lo faccio [Slot]",
          "wortarten": {
            "faccio": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "volentieri",
              "lerntext": "volentieri",
              "de": "gerne"
            },
            {
              "schrift": "purtroppo",
              "lerntext": "purtroppo",
              "de": "leider"
            },
            {
              "schrift": "magari",
              "lerntext": "magari",
              "de": "hoffentlich"
            },
            {
              "schrift": "almeno",
              "lerntext": "almeno",
              "de": "wenigstens"
            },
            {
              "schrift": "soprattutto",
              "lerntext": "soprattutto",
              "de": "vor allem"
            },
            {
              "schrift": "davvero",
              "lerntext": "davvero",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "cosi",
              "lerntext": "cosi",
              "de": "so",
              "wieder": true
            },
            {
              "schrift": "quasi",
              "lerntext": "quasi",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "proprio",
              "lerntext": "proprio",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "sicuramente",
              "lerntext": "sicuramente",
              "de": "bestimmt",
              "wieder": true
            },
            {
              "schrift": "meno",
              "lerntext": "meno",
              "de": "weniger",
              "wieder": true
            },
            {
              "schrift": "poi",
              "lerntext": "poi",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "subito",
              "lerntext": "subito",
              "de": "sofort",
              "wieder": true
            },
            {
              "schrift": "ancora",
              "lerntext": "ancora",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "forse",
              "lerntext": "forse",
              "de": "vielleicht",
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
          "schrift": "lo faccio [Slot]",
          "lerntext": "lo faccio [Slot]",
          "wortarten": {
            "faccio": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "stasera",
              "lerntext": "stasera",
              "de": "heute Abend"
            },
            {
              "schrift": "stamattina",
              "lerntext": "stamattina",
              "de": "heute Morgen"
            },
            {
              "schrift": "sempre piu",
              "lerntext": "sempre piu",
              "de": "immer mehr"
            },
            {
              "schrift": "tardi",
              "lerntext": "tardi",
              "de": "spät"
            },
            {
              "schrift": "veramente",
              "lerntext": "veramente",
              "de": "tatsächlich"
            },
            {
              "schrift": "volentieri",
              "lerntext": "volentieri",
              "de": "gerne",
              "wieder": true
            },
            {
              "schrift": "purtroppo",
              "lerntext": "purtroppo",
              "de": "leider",
              "wieder": true
            },
            {
              "schrift": "magari",
              "lerntext": "magari",
              "de": "hoffentlich",
              "wieder": true
            },
            {
              "schrift": "almeno",
              "lerntext": "almeno",
              "de": "wenigstens",
              "wieder": true
            },
            {
              "schrift": "soprattutto",
              "lerntext": "soprattutto",
              "de": "vor allem",
              "wieder": true
            },
            {
              "schrift": "davvero",
              "lerntext": "davvero",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "cosi",
              "lerntext": "cosi",
              "de": "so",
              "wieder": true
            },
            {
              "schrift": "quasi",
              "lerntext": "quasi",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "proprio",
              "lerntext": "proprio",
              "de": "genau",
              "wieder": true
            },
            {
              "schrift": "sicuramente",
              "lerntext": "sicuramente",
              "de": "bestimmt",
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
          "schrift": "lo faccio [Slot]",
          "lerntext": "lo faccio [Slot]",
          "wortarten": {
            "faccio": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dopodomani",
              "lerntext": "dopodomani",
              "de": "übermorgen"
            },
            {
              "schrift": "stasera",
              "lerntext": "stasera",
              "de": "heute Abend",
              "wieder": true
            },
            {
              "schrift": "stamattina",
              "lerntext": "stamattina",
              "de": "heute Morgen",
              "wieder": true
            },
            {
              "schrift": "sempre piu",
              "lerntext": "sempre piu",
              "de": "immer mehr",
              "wieder": true
            },
            {
              "schrift": "tardi",
              "lerntext": "tardi",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "veramente",
              "lerntext": "veramente",
              "de": "tatsächlich",
              "wieder": true
            },
            {
              "schrift": "volentieri",
              "lerntext": "volentieri",
              "de": "gerne",
              "wieder": true
            },
            {
              "schrift": "purtroppo",
              "lerntext": "purtroppo",
              "de": "leider",
              "wieder": true
            },
            {
              "schrift": "magari",
              "lerntext": "magari",
              "de": "hoffentlich",
              "wieder": true
            },
            {
              "schrift": "almeno",
              "lerntext": "almeno",
              "de": "wenigstens",
              "wieder": true
            },
            {
              "schrift": "soprattutto",
              "lerntext": "soprattutto",
              "de": "vor allem",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "18.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "lo faccio [Slot]",
          "lerntext": "lo faccio [Slot]",
          "wortarten": {
            "faccio": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dopodomani",
              "lerntext": "dopodomani",
              "de": "übermorgen",
              "wieder": true
            },
            {
              "schrift": "stasera",
              "lerntext": "stasera",
              "de": "heute Abend",
              "wieder": true
            },
            {
              "schrift": "stamattina",
              "lerntext": "stamattina",
              "de": "heute Morgen",
              "wieder": true
            },
            {
              "schrift": "sempre piu",
              "lerntext": "sempre piu",
              "de": "immer mehr",
              "wieder": true
            },
            {
              "schrift": "tardi",
              "lerntext": "tardi",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "veramente",
              "lerntext": "veramente",
              "de": "tatsächlich",
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
          "schrift": "è per [Slot]",
          "lerntext": "è per [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "loro",
              "lerntext": "loro",
              "de": "sie (Mehrzahl)",
              "c": "p"
            },
            {
              "schrift": "entrambi",
              "lerntext": "entrambi",
              "de": "beide",
              "c": "p"
            },
            {
              "schrift": "ne",
              "lerntext": "ne",
              "de": "davon",
              "c": "p"
            },
            {
              "schrift": "quello",
              "lerntext": "quello",
              "de": "jener",
              "c": "p"
            },
            {
              "schrift": "qualcuno",
              "lerntext": "qualcuno",
              "de": "jemand",
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
          "schrift": "è per [Slot]",
          "lerntext": "è per [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "niente",
              "lerntext": "niente",
              "de": "nichts",
              "c": "p"
            },
            {
              "schrift": "nessuno",
              "lerntext": "nessuno",
              "de": "niemand",
              "c": "p"
            },
            {
              "schrift": "altro",
              "lerntext": "altro",
              "de": "anderer",
              "c": "p"
            },
            {
              "schrift": "stesso",
              "lerntext": "stesso",
              "de": "selbe",
              "c": "p"
            },
            {
              "schrift": "ognuno",
              "lerntext": "ognuno",
              "de": "jeder",
              "c": "p"
            },
            {
              "schrift": "loro",
              "lerntext": "loro",
              "de": "sie (Mehrzahl)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "entrambi",
              "lerntext": "entrambi",
              "de": "beide",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ne",
              "lerntext": "ne",
              "de": "davon",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "quello",
              "lerntext": "quello",
              "de": "jener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "qualcuno",
              "lerntext": "qualcuno",
              "de": "jemand",
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
          "schrift": "è per [Slot]",
          "lerntext": "è per [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vostro",
              "lerntext": "vostro",
              "de": "euer",
              "c": "p"
            },
            {
              "schrift": "ciascuno",
              "lerntext": "ciascuno",
              "de": "jeder einzelne",
              "c": "p"
            },
            {
              "schrift": "alcuni",
              "lerntext": "alcuni",
              "de": "einige",
              "c": "p"
            },
            {
              "schrift": "niente",
              "lerntext": "niente",
              "de": "nichts",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nessuno",
              "lerntext": "nessuno",
              "de": "niemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "altro",
              "lerntext": "altro",
              "de": "anderer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "stesso",
              "lerntext": "stesso",
              "de": "selbe",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ognuno",
              "lerntext": "ognuno",
              "de": "jeder",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "loro",
              "lerntext": "loro",
              "de": "sie (Mehrzahl)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "entrambi",
              "lerntext": "entrambi",
              "de": "beide",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ne",
              "lerntext": "ne",
              "de": "davon",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "quello",
              "lerntext": "quello",
              "de": "jener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "qualcuno",
              "lerntext": "qualcuno",
              "de": "jemand",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "19.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "è per [Slot]",
          "lerntext": "è per [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vostro",
              "lerntext": "vostro",
              "de": "euer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ciascuno",
              "lerntext": "ciascuno",
              "de": "jeder einzelne",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "alcuni",
              "lerntext": "alcuni",
              "de": "einige",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "niente",
              "lerntext": "niente",
              "de": "nichts",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nessuno",
              "lerntext": "nessuno",
              "de": "niemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "altro",
              "lerntext": "altro",
              "de": "anderer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "stesso",
              "lerntext": "stesso",
              "de": "selbe",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ognuno",
              "lerntext": "ognuno",
              "de": "jeder",
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
          "schrift": "è per [Slot]",
          "lerntext": "è per [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vostro",
              "lerntext": "vostro",
              "de": "euer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ciascuno",
              "lerntext": "ciascuno",
              "de": "jeder einzelne",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "alcuni",
              "lerntext": "alcuni",
              "de": "einige",
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
              "schrift": "trenta",
              "lerntext": "trenta",
              "de": "dreissig"
            },
            {
              "schrift": "primo",
              "lerntext": "primo",
              "de": "erster"
            },
            {
              "schrift": "secondo",
              "lerntext": "secondo",
              "de": "zweiter"
            },
            {
              "schrift": "terzo",
              "lerntext": "terzo",
              "de": "dritter"
            },
            {
              "schrift": "ultimo",
              "lerntext": "ultimo",
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
              "schrift": "mezzo",
              "lerntext": "mezzo",
              "de": "halb"
            },
            {
              "schrift": "doppio",
              "lerntext": "doppio",
              "de": "doppelt"
            },
            {
              "schrift": "paio",
              "lerntext": "paio",
              "de": "Paar"
            },
            {
              "schrift": "milione",
              "lerntext": "milione",
              "de": "Million"
            },
            {
              "schrift": "trenta",
              "lerntext": "trenta",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "primo",
              "lerntext": "primo",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "secondo",
              "lerntext": "secondo",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "terzo",
              "lerntext": "terzo",
              "de": "dritter",
              "wieder": true
            },
            {
              "schrift": "ultimo",
              "lerntext": "ultimo",
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
              "schrift": "mezzo",
              "lerntext": "mezzo",
              "de": "halb",
              "wieder": true
            },
            {
              "schrift": "doppio",
              "lerntext": "doppio",
              "de": "doppelt",
              "wieder": true
            },
            {
              "schrift": "paio",
              "lerntext": "paio",
              "de": "Paar",
              "wieder": true
            },
            {
              "schrift": "milione",
              "lerntext": "milione",
              "de": "Million",
              "wieder": true
            },
            {
              "schrift": "trenta",
              "lerntext": "trenta",
              "de": "dreissig",
              "wieder": true
            },
            {
              "schrift": "primo",
              "lerntext": "primo",
              "de": "erster",
              "wieder": true
            },
            {
              "schrift": "secondo",
              "lerntext": "secondo",
              "de": "zweiter",
              "wieder": true
            },
            {
              "schrift": "terzo",
              "lerntext": "terzo",
              "de": "dritter",
              "wieder": true
            },
            {
              "schrift": "ultimo",
              "lerntext": "ultimo",
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
              "schrift": "mezzo",
              "lerntext": "mezzo",
              "de": "halb",
              "wieder": true
            },
            {
              "schrift": "doppio",
              "lerntext": "doppio",
              "de": "doppelt",
              "wieder": true
            },
            {
              "schrift": "paio",
              "lerntext": "paio",
              "de": "Paar",
              "wieder": true
            },
            {
              "schrift": "milione",
              "lerntext": "milione",
              "de": "Million",
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
          "schrift": "è [Slot] la casa",
          "lerntext": "è [Slot] la casa",
          "wortarten": {
            "è": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dopo",
              "lerntext": "dopo",
              "de": "nach"
            },
            {
              "schrift": "dentro",
              "lerntext": "dentro",
              "de": "drinnen"
            },
            {
              "schrift": "verso",
              "lerntext": "verso",
              "de": "Richtung"
            },
            {
              "schrift": "vicino",
              "lerntext": "vicino",
              "de": "nahe"
            },
            {
              "schrift": "davanti",
              "lerntext": "davanti",
              "de": "vor"
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
          "schrift": "è [Slot] la casa",
          "lerntext": "è [Slot] la casa",
          "wortarten": {
            "è": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fuori",
              "lerntext": "fuori",
              "de": "draußen"
            },
            {
              "schrift": "durante",
              "lerntext": "durante",
              "de": "während"
            },
            {
              "schrift": "dopo",
              "lerntext": "dopo",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "dentro",
              "lerntext": "dentro",
              "de": "drinnen",
              "wieder": true
            },
            {
              "schrift": "verso",
              "lerntext": "verso",
              "de": "Richtung",
              "wieder": true
            },
            {
              "schrift": "vicino",
              "lerntext": "vicino",
              "de": "nahe",
              "wieder": true
            },
            {
              "schrift": "davanti",
              "lerntext": "davanti",
              "de": "vor",
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
          "schrift": "è [Slot] la casa",
          "lerntext": "è [Slot] la casa",
          "wortarten": {
            "è": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fuori",
              "lerntext": "fuori",
              "de": "draußen",
              "wieder": true
            },
            {
              "schrift": "durante",
              "lerntext": "durante",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "dopo",
              "lerntext": "dopo",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "dentro",
              "lerntext": "dentro",
              "de": "drinnen",
              "wieder": true
            },
            {
              "schrift": "verso",
              "lerntext": "verso",
              "de": "Richtung",
              "wieder": true
            },
            {
              "schrift": "vicino",
              "lerntext": "vicino",
              "de": "nahe",
              "wieder": true
            },
            {
              "schrift": "davanti",
              "lerntext": "davanti",
              "de": "vor",
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
          "schrift": "vengo [Slot] posso",
          "lerntext": "vengo [Slot] posso",
          "wortarten": {
            "vengo": "v",
            "posso": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pero",
              "lerntext": "pero",
              "de": "jedoch",
              "c": "k"
            },
            {
              "schrift": "oppure",
              "lerntext": "oppure",
              "de": "oder aber",
              "c": "k"
            },
            {
              "schrift": "invece",
              "lerntext": "invece",
              "de": "stattdessen",
              "c": "k"
            },
            {
              "schrift": "comunque",
              "lerntext": "comunque",
              "de": "jedenfalls",
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
          "schrift": "vengo [Slot] posso",
          "lerntext": "vengo [Slot] posso",
          "wortarten": {
            "vengo": "v",
            "posso": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pero",
              "lerntext": "pero",
              "de": "jedoch",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "oppure",
              "lerntext": "oppure",
              "de": "oder aber",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "invece",
              "lerntext": "invece",
              "de": "stattdessen",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "comunque",
              "lerntext": "comunque",
              "de": "jedenfalls",
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
          "schrift": "vengo [Slot] posso",
          "lerntext": "vengo [Slot] posso",
          "wortarten": {
            "vengo": "v",
            "posso": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pero",
              "lerntext": "pero",
              "de": "jedoch",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "oppure",
              "lerntext": "oppure",
              "de": "oder aber",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "invece",
              "lerntext": "invece",
              "de": "stattdessen",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "comunque",
              "lerntext": "comunque",
              "de": "jedenfalls",
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
    "title": "Artikel",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] libro",
          "lerntext": "[Slot] libro",
          "wortarten": {
            "libro": "n"
          }
        },
        "frameDe": "[Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "le",
              "lerntext": "le",
              "de": "die (Mehrzahl, weiblich)"
            },
            {
              "schrift": "gli",
              "lerntext": "gli",
              "de": "die (Mehrzahl, vor Vokal)"
            },
            {
              "schrift": "i",
              "lerntext": "i",
              "de": "die (Mehrzahl, männlich)"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "23.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] libro",
          "lerntext": "[Slot] libro",
          "wortarten": {
            "libro": "n"
          }
        },
        "frameDe": "[Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "le",
              "lerntext": "le",
              "de": "die (Mehrzahl, weiblich)",
              "wieder": true
            },
            {
              "schrift": "gli",
              "lerntext": "gli",
              "de": "die (Mehrzahl, vor Vokal)",
              "wieder": true
            },
            {
              "schrift": "i",
              "lerntext": "i",
              "de": "die (Mehrzahl, männlich)",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "23.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] libro",
          "lerntext": "[Slot] libro",
          "wortarten": {
            "libro": "n"
          }
        },
        "frameDe": "[Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "le",
              "lerntext": "le",
              "de": "die (Mehrzahl, weiblich)",
              "wieder": true
            },
            {
              "schrift": "gli",
              "lerntext": "gli",
              "de": "die (Mehrzahl, vor Vokal)",
              "wieder": true
            },
            {
              "schrift": "i",
              "lerntext": "i",
              "de": "die (Mehrzahl, männlich)",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
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
        "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
        "newFrameWords": [],
        "id": "23.4"
      }
    ]
  },
  {
    "number": 24,
    "title": "Weitere Fragewörter",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] è?",
          "lerntext": "[Slot] è?",
          "wortarten": {
            "è?": "v"
          }
        },
        "frameDe": "[Slot] ist es?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "quale",
              "lerntext": "quale",
              "de": "welcher"
            },
            {
              "schrift": "chissa",
              "lerntext": "chissa",
              "de": "wer weiß"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "24.1"
      },
      {
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
        "id": "24.2"
      }
    ]
  },
  {
    "number": 25,
    "title": "Was hast du gemacht?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "io ho [Slot]",
          "lerntext": "io ho [Slot]",
          "wortarten": {
            "io": "p",
            "ho": "v"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "guardato",
              "lerntext": "guardato",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "comprato",
              "lerntext": "comprato",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "visto",
              "lerntext": "visto",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "fatto",
              "lerntext": "fatto",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "trovato",
              "lerntext": "trovato",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "preso",
              "lerntext": "preso",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "scritto",
              "lerntext": "scritto",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perso",
              "lerntext": "perso",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentito",
              "lerntext": "sentito",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiato",
              "lerntext": "cambiato",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continuato",
              "lerntext": "continuato",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sperato",
              "lerntext": "sperato",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "capito",
              "lerntext": "capito",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stato",
              "lerntext": "stato",
              "de": "sein",
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
          "schrift": "io ho [Slot]",
          "lerntext": "io ho [Slot]",
          "wortarten": {
            "io": "p",
            "ho": "v"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "preso",
              "lerntext": "preso",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "scritto",
              "lerntext": "scritto",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "sentito",
              "lerntext": "sentito",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "perso",
              "lerntext": "perso",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "comprato",
              "lerntext": "comprato",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guardato",
              "lerntext": "guardato",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "visto",
              "lerntext": "visto",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fatto",
              "lerntext": "fatto",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trovato",
              "lerntext": "trovato",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiato",
              "lerntext": "cambiato",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potuto",
              "lerntext": "potuto",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "messo",
              "lerntext": "messo",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ballato",
              "lerntext": "ballato",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "öffnen",
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
          "schrift": "ieri ho [Slot]",
          "lerntext": "ieri ho [Slot]",
          "wortarten": {
            "ho": "v"
          }
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavorato",
              "lerntext": "lavorato",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "giocato",
              "lerntext": "giocato",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "ballato",
              "lerntext": "ballato",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "dormito",
              "lerntext": "dormito",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "aspettato",
              "lerntext": "aspettato",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "cercato",
              "lerntext": "cercato",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiesto",
              "lerntext": "chiesto",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "risposto",
              "lerntext": "risposto",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aiutato",
              "lerntext": "aiutato",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pagato",
              "lerntext": "pagato",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensato",
              "lerntext": "pensato",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continuato",
              "lerntext": "continuato",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiato",
              "lerntext": "cambiato",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "voluto",
              "lerntext": "voluto",
              "de": "wollen",
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
          "schrift": "ieri ho [Slot]",
          "lerntext": "ieri ho [Slot]",
          "wortarten": {
            "ho": "v"
          }
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercato",
              "lerntext": "cercato",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "chiesto",
              "lerntext": "chiesto",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "risposto",
              "lerntext": "risposto",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "aiutato",
              "lerntext": "aiutato",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "pagato",
              "lerntext": "pagato",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "lavorato",
              "lerntext": "lavorato",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "giocato",
              "lerntext": "giocato",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ballato",
              "lerntext": "ballato",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormito",
              "lerntext": "dormito",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aspettato",
              "lerntext": "aspettato",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "camminato",
              "lerntext": "camminato",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saputo",
              "lerntext": "saputo",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggiato",
              "lerntext": "viaggiato",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dato",
              "lerntext": "dato",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stato",
              "lerntext": "stato",
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
          "schrift": "ho già [Slot]",
          "lerntext": "ho già [Slot]",
          "wortarten": {
            "ho": "v"
          }
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vinto",
              "lerntext": "vinto",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "dimenticato",
              "lerntext": "dimenticato",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "capito",
              "lerntext": "capito",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "incontrato",
              "lerntext": "incontrato",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "dato",
              "lerntext": "dato",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "detto",
              "lerntext": "detto",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parlato",
              "lerntext": "parlato",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavato",
              "lerntext": "lavato",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "servito",
              "lerntext": "servito",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "creduto",
              "lerntext": "creduto",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "riso",
              "lerntext": "riso",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morto",
              "lerntext": "morto",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "abitato",
              "lerntext": "abitato",
              "de": "wohnen",
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
          "schrift": "ho già [Slot]",
          "lerntext": "ho già [Slot]",
          "wortarten": {
            "ho": "v"
          }
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "detto",
              "lerntext": "detto",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "parlato",
              "lerntext": "parlato",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "lavato",
              "lerntext": "lavato",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "vinto",
              "lerntext": "vinto",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dimenticato",
              "lerntext": "dimenticato",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "capito",
              "lerntext": "capito",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "incontrato",
              "lerntext": "incontrato",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dato",
              "lerntext": "dato",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dovuto",
              "lerntext": "dovuto",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "amato",
              "lerntext": "amato",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usato",
              "lerntext": "usato",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidato",
              "lerntext": "guidato",
              "de": "fahren",
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
        "id": "25.7"
      }
    ]
  },
  {
    "number": 26,
    "title": "Du, ihr, sie",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "tu [Slot]",
          "lerntext": "tu [Slot]",
          "wortarten": {
            "tu": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "guardi",
              "lerntext": "guardi",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "compri",
              "lerntext": "compri",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "vedi",
              "lerntext": "vedi",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "fai",
              "lerntext": "fai",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "trovi",
              "lerntext": "trovi",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "prendi",
              "lerntext": "prendi",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leggi",
              "lerntext": "leggi",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "scrivi",
              "lerntext": "scrivi",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangi",
              "lerntext": "mangi",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vieni",
              "lerntext": "vieni",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bevi",
              "lerntext": "bevi",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "speri",
              "lerntext": "speri",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vai",
              "lerntext": "vai",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "diventi",
              "lerntext": "diventi",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piangi",
              "lerntext": "piangi",
              "de": "weinen",
              "c": "v",
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
          "schrift": "tu [Slot]",
          "lerntext": "tu [Slot]",
          "wortarten": {
            "tu": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "prendi",
              "lerntext": "prendi",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "leggi",
              "lerntext": "leggi",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "scrivi",
              "lerntext": "scrivi",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "compri",
              "lerntext": "compri",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guardi",
              "lerntext": "guardi",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vedi",
              "lerntext": "vedi",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fai",
              "lerntext": "fai",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trovi",
              "lerntext": "trovi",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sei",
              "lerntext": "sei",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "puoi",
              "lerntext": "puoi",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "metti",
              "lerntext": "metti",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hai",
              "lerntext": "hai",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensi",
              "lerntext": "pensi",
              "de": "denken",
              "c": "v",
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
          "schrift": "lui [Slot]",
          "lerntext": "lui [Slot]",
          "wortarten": {
            "lui": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavora",
              "lerntext": "lavora",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "gioca",
              "lerntext": "gioca",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "balla",
              "lerntext": "balla",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "dorme",
              "lerntext": "dorme",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "aspetta",
              "lerntext": "aspetta",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "cerca",
              "lerntext": "cerca",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiede",
              "lerntext": "chiede",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "risponde",
              "lerntext": "risponde",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continua",
              "lerntext": "continua",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambia",
              "lerntext": "cambia",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vuole",
              "lerntext": "vuole",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cammina",
              "lerntext": "cammina",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sa",
              "lerntext": "sa",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggia",
              "lerntext": "viaggia",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sta",
              "lerntext": "sta",
              "de": "sein",
              "c": "v",
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
          "schrift": "lui [Slot]",
          "lerntext": "lui [Slot]",
          "wortarten": {
            "lui": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cerca",
              "lerntext": "cerca",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "chiede",
              "lerntext": "chiede",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "risponde",
              "lerntext": "risponde",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "lavora",
              "lerntext": "lavora",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gioca",
              "lerntext": "gioca",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "balla",
              "lerntext": "balla",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dorme",
              "lerntext": "dorme",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aspetta",
              "lerntext": "aspetta",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "serve",
              "lerntext": "serve",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crede",
              "lerntext": "crede",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ride",
              "lerntext": "ride",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "muore",
              "lerntext": "muore",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "abita",
              "lerntext": "abita",
              "de": "wohnen",
              "c": "v",
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
          "schrift": "noi [Slot]",
          "lerntext": "noi [Slot]",
          "wortarten": {
            "noi": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vinciamo",
              "lerntext": "vinciamo",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "dimentichiamo",
              "lerntext": "dimentichiamo",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "capiamo",
              "lerntext": "capiamo",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "incontriamo",
              "lerntext": "incontriamo",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "diamo",
              "lerntext": "diamo",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "diciamo",
              "lerntext": "diciamo",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parliamo",
              "lerntext": "parliamo",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "apriamo",
              "lerntext": "apriamo",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dobbiamo",
              "lerntext": "dobbiamo",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "amiamo",
              "lerntext": "amiamo",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usiamo",
              "lerntext": "usiamo",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "puliamo",
              "lerntext": "puliamo",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidiamo",
              "lerntext": "guidiamo",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiamo",
              "lerntext": "mangiamo",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "veniamo",
              "lerntext": "veniamo",
              "de": "kommen",
              "c": "v",
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
        "kind": "frame",
        "frame": {
          "schrift": "noi [Slot]",
          "lerntext": "noi [Slot]",
          "wortarten": {
            "noi": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "diciamo",
              "lerntext": "diciamo",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "parliamo",
              "lerntext": "parliamo",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "apriamo",
              "lerntext": "apriamo",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "vinciamo",
              "lerntext": "vinciamo",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dimentichiamo",
              "lerntext": "dimentichiamo",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "capiamo",
              "lerntext": "capiamo",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "incontriamo",
              "lerntext": "incontriamo",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "diamo",
              "lerntext": "diamo",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "beviamo",
              "lerntext": "beviamo",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "speriamo",
              "lerntext": "speriamo",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "andiamo",
              "lerntext": "andiamo",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "diventiamo",
              "lerntext": "diventiamo",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piangiamo",
              "lerntext": "piangiamo",
              "de": "weinen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "26.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "lei [Slot]",
          "lerntext": "lei [Slot]",
          "wortarten": {
            "lei": "p"
          }
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abitano",
              "lerntext": "abitano",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "stanno",
              "lerntext": "stanno",
              "de": "sein",
              "c": "v"
            },
            {
              "schrift": "ridono",
              "lerntext": "ridono",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "piangono",
              "lerntext": "piangono",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "pensano",
              "lerntext": "pensano",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "credono",
              "lerntext": "credono",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sperano",
              "lerntext": "sperano",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "servono",
              "lerntext": "servono",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sono",
              "lerntext": "sono",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "possono",
              "lerntext": "possono",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettono",
              "lerntext": "mettono",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hanno",
              "lerntext": "hanno",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continuano",
              "lerntext": "continuano",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiano",
              "lerntext": "cambiano",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vogliono",
              "lerntext": "vogliono",
              "de": "wollen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "26.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "lei [Slot]",
          "lerntext": "lei [Slot]",
          "wortarten": {
            "lei": "p"
          }
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "credono",
              "lerntext": "credono",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "sperano",
              "lerntext": "sperano",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "servono",
              "lerntext": "servono",
              "de": "dienen",
              "c": "v"
            },
            {
              "schrift": "abitano",
              "lerntext": "abitano",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stanno",
              "lerntext": "stanno",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ridono",
              "lerntext": "ridono",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piangono",
              "lerntext": "piangono",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensano",
              "lerntext": "pensano",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "camminano",
              "lerntext": "camminano",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sanno",
              "lerntext": "sanno",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggiano",
              "lerntext": "viaggiano",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "muoiono",
              "lerntext": "muoiono",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devono",
              "lerntext": "devono",
              "de": "müssen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "26.8"
      },
      {
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
        "id": "26.9"
      }
    ]
  },
  {
    "number": 27,
    "title": "Größer, besser, lieber",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "è più [Slot]",
          "lerntext": "è più [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "piu",
            "lerntext": "piu",
            "de": "mehr"
          }
        ],
        "id": "27.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "è più [Slot]",
          "lerntext": "è più [Slot]",
          "wortarten": {
            "è": "v"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
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
          "schrift": "sono [Slot] come te",
          "lerntext": "sono [Slot] come te",
          "wortarten": {
            "sono": "v",
            "te": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
              "c": "a",
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
          "schrift": "sono [Slot] come te",
          "lerntext": "sono [Slot] come te",
          "wortarten": {
            "sono": "v",
            "te": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "c": "a",
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
        "task": "Vergleich zwei Dinge miteinander.",
        "newFrameWords": [],
        "id": "27.5"
      }
    ]
  },
  {
    "number": 28,
    "title": "Ich fühle mich",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "io mi sento [Slot]",
          "lerntext": "io mi sento [Slot]",
          "wortarten": {
            "io": "p",
            "mi": "p",
            "sento": "v"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "c": "a",
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
          "schrift": "io mi sento [Slot]",
          "lerntext": "io mi sento [Slot]",
          "wortarten": {
            "io": "p",
            "mi": "p",
            "sento": "v"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "c": "a",
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
          "schrift": "noi ci vediamo [Slot]",
          "lerntext": "noi ci vediamo [Slot]",
          "wortarten": {
            "noi": "p",
            "ci": "p",
            "vediamo": "v"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oggi",
              "lerntext": "oggi",
              "de": "heute"
            },
            {
              "schrift": "domani",
              "lerntext": "domani",
              "de": "morgen"
            },
            {
              "schrift": "adesso",
              "lerntext": "adesso",
              "de": "jetzt"
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh"
            },
            {
              "schrift": "ieri",
              "lerntext": "ieri",
              "de": "gestern"
            },
            {
              "schrift": "spesso",
              "lerntext": "spesso",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "sempre",
              "lerntext": "sempre",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "piu",
              "lerntext": "piu",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "lentamente",
              "lerntext": "lentamente",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "velocemente",
              "lerntext": "velocemente",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "ja",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "poco",
              "lerntext": "poco",
              "de": "wenig",
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
          "schrift": "noi ci vediamo [Slot]",
          "lerntext": "noi ci vediamo [Slot]",
          "wortarten": {
            "noi": "p",
            "ci": "p",
            "vediamo": "v"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "spesso",
              "lerntext": "spesso",
              "de": "oft"
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "nie"
            },
            {
              "schrift": "sempre",
              "lerntext": "sempre",
              "de": "immer"
            },
            {
              "schrift": "oggi",
              "lerntext": "oggi",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "adesso",
              "lerntext": "adesso",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "domani",
              "lerntext": "domani",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "ieri",
              "lerntext": "ieri",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "piu",
              "lerntext": "piu",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "lentamente",
              "lerntext": "lentamente",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "troppo",
              "lerntext": "troppo",
              "de": "zu viel",
              "wieder": true
            },
            {
              "schrift": "certo",
              "lerntext": "certo",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
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
        "id": "28.5"
      }
    ]
  },
  {
    "number": 29,
    "title": "Weil, wenn, obwohl",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "resto qui [Slot] sono stanco",
          "lerntext": "resto qui [Slot] sono stanco",
          "wortarten": {
            "resto": "v",
            "sono": "v",
            "stanco": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da",
              "c": "k"
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "wenn",
              "c": "k"
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während",
              "c": "k"
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "aber",
              "c": "k"
            },
            {
              "schrift": "o",
              "lerntext": "o",
              "de": "oder",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "e",
              "lerntext": "e",
              "de": "und",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "quindi",
              "lerntext": "quindi",
              "de": "also",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
              "de": "auch",
              "c": "k",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "29.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "resto qui [Slot] sono stanco",
          "lerntext": "resto qui [Slot] sono stanco",
          "wortarten": {
            "resto": "v",
            "sono": "v",
            "stanco": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "o",
              "lerntext": "o",
              "de": "oder",
              "c": "k"
            },
            {
              "schrift": "e",
              "lerntext": "e",
              "de": "und",
              "c": "k"
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "wenn",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "aber",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "quindi",
              "lerntext": "quindi",
              "de": "also",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
              "de": "auch",
              "c": "k",
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
          "schrift": "credo che sia [Slot]",
          "lerntext": "credo che sia [Slot]",
          "wortarten": {
            "credo": "v"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "che",
            "lerntext": "che",
            "de": "der",
            "c": "p"
          }
        ],
        "id": "29.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "credo che sia [Slot]",
          "lerntext": "credo che sia [Slot]",
          "wortarten": {
            "credo": "v"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "c": "a",
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
        "kind": "frame",
        "frame": {
          "schrift": "se ho tempo, voglio [Slot]",
          "lerntext": "se ho tempo, voglio [Slot]",
          "wortarten": {
            "se": "k",
            "ho": "v",
            "tempo,": "n",
            "voglio": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "c": "v"
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "29.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "se ho tempo, voglio [Slot]",
          "lerntext": "se ho tempo, voglio [Slot]",
          "wortarten": {
            "se": "k",
            "ho": "v",
            "tempo,": "n",
            "voglio": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "c": "v"
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "29.6"
      },
      {
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
        "id": "29.7"
      }
    ]
  },
  {
    "number": 30,
    "title": "Bitten und auffordern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "puoi [Slot], per favore?",
          "lerntext": "puoi [Slot], per favore?",
          "wortarten": {
            "puoi": "v"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "c": "v",
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
          "schrift": "puoi [Slot], per favore?",
          "lerntext": "puoi [Slot], per favore?",
          "wortarten": {
            "puoi": "v"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "c": "v",
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
          "schrift": "tu devi [Slot]",
          "lerntext": "tu devi [Slot]",
          "wortarten": {
            "tu": "p",
            "devi": "v"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "c": "v",
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
          "schrift": "tu devi [Slot]",
          "lerntext": "tu devi [Slot]",
          "wortarten": {
            "tu": "p",
            "devi": "v"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben",
              "c": "v",
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
        "task": "Bitte jemanden höflich um etwas.",
        "newFrameWords": [],
        "id": "30.5"
      }
    ]
  },
  {
    "number": 31,
    "title": "Wem gebe ich was?",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "io do il libro a [Slot]",
          "lerntext": "io do il libro a [Slot]",
          "wortarten": {
            "io": "p",
            "do": "v",
            "libro": "n"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "31.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io do il libro a [Slot]",
          "lerntext": "io do il libro a [Slot]",
          "wortarten": {
            "io": "p",
            "do": "v",
            "libro": "n"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "31.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io mostro la città a [Slot]",
          "lerntext": "io mostro la città a [Slot]",
          "wortarten": {
            "io": "p"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
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
        "kind": "frame",
        "frame": {
          "schrift": "io mostro la città a [Slot]",
          "lerntext": "io mostro la città a [Slot]",
          "wortarten": {
            "io": "p"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "31.4"
      },
      {
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
        "id": "31.5"
      }
    ]
  },
  {
    "number": 32,
    "title": "Ein Glas, genug, zu viel",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio un bicchiere di [Slot]",
          "lerntext": "io voglio un bicchiere di [Slot]",
          "wortarten": {
            "io": "p",
            "voglio": "v",
            "bicchiere": "n"
          }
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "c": "n"
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
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
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "bicchiere",
            "lerntext": "bicchiere",
            "de": "Glas",
            "c": "n"
          },
          {
            "schrift": "un",
            "lerntext": "un",
            "de": "ein"
          }
        ],
        "id": "32.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "noi abbiamo abbastanza [Slot]",
          "lerntext": "noi abbiamo abbastanza [Slot]",
          "wortarten": {
            "noi": "p",
            "abbiamo": "v"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "c": "n"
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "abbastanza",
            "lerntext": "abbastanza",
            "de": "genug"
          }
        ],
        "id": "32.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "noi abbiamo abbastanza [Slot]",
          "lerntext": "noi abbiamo abbastanza [Slot]",
          "wortarten": {
            "noi": "p",
            "abbiamo": "v"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "c": "n",
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
        "id": "32.4"
      }
    ]
  },
  {
    "number": 33,
    "title": "Seit, vor, in einer Stunde",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "io aspetto da una [Slot]",
          "lerntext": "io aspetto da una [Slot]",
          "wortarten": {
            "io": "p",
            "aspetto": "v"
          }
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "c": "n"
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "da",
            "lerntext": "da",
            "de": "von"
          },
          {
            "schrift": "una",
            "lerntext": "una",
            "de": "eine"
          }
        ],
        "id": "33.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io aspetto da una [Slot]",
          "lerntext": "io aspetto da una [Slot]",
          "wortarten": {
            "io": "p",
            "aspetto": "v"
          }
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg",
              "c": "n",
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
          "schrift": "[Slot] vado a casa",
          "lerntext": "[Slot] vado a casa",
          "wortarten": {
            "vado": "v",
            "casa": "n"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oggi",
              "lerntext": "oggi",
              "de": "heute"
            },
            {
              "schrift": "domani",
              "lerntext": "domani",
              "de": "morgen"
            },
            {
              "schrift": "adesso",
              "lerntext": "adesso",
              "de": "jetzt"
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh"
            },
            {
              "schrift": "ieri",
              "lerntext": "ieri",
              "de": "gestern"
            },
            {
              "schrift": "spesso",
              "lerntext": "spesso",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "sempre",
              "lerntext": "sempre",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "abbastanza",
              "lerntext": "abbastanza",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "piu",
              "lerntext": "piu",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "gia",
              "lerntext": "gia",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "insieme",
              "lerntext": "insieme",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "li",
              "lerntext": "li",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "lentamente",
              "lerntext": "lentamente",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "velocemente",
              "lerntext": "velocemente",
              "de": "schnell",
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
          "schrift": "[Slot] vado a casa",
          "lerntext": "[Slot] vado a casa",
          "wortarten": {
            "vado": "v",
            "casa": "n"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "spesso",
              "lerntext": "spesso",
              "de": "oft"
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "nie"
            },
            {
              "schrift": "sempre",
              "lerntext": "sempre",
              "de": "immer"
            },
            {
              "schrift": "oggi",
              "lerntext": "oggi",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "adesso",
              "lerntext": "adesso",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "domani",
              "lerntext": "domani",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "ieri",
              "lerntext": "ieri",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "abbastanza",
              "lerntext": "abbastanza",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "piu",
              "lerntext": "piu",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "ja",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "poco",
              "lerntext": "poco",
              "de": "wenig",
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
        "task": "Sag, wann du etwas machst.",
        "newFrameWords": [],
        "id": "33.5"
      }
    ]
  },
  {
    "number": 34,
    "title": "Ich hätte gern",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "io vorrei [Slot]",
          "lerntext": "io vorrei [Slot]",
          "wortarten": {
            "io": "p"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "c": "v"
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "c": "v",
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
          "schrift": "io vorrei [Slot]",
          "lerntext": "io vorrei [Slot]",
          "wortarten": {
            "io": "p"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "c": "v"
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "c": "v",
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
          "schrift": "potrebbe darmi [Slot]?",
          "lerntext": "potrebbe darmi [Slot]?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "c": "n"
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "c": "n",
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
          "schrift": "potrebbe darmi [Slot]?",
          "lerntext": "potrebbe darmi [Slot]?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "c": "n"
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "c": "n",
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
        "task": "Bitte höflich um etwas.",
        "newFrameWords": [],
        "id": "34.5"
      }
    ]
  },
  {
    "number": 35,
    "title": "Ich glaube, dass",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "io penso che sia [Slot]",
          "lerntext": "io penso che sia [Slot]",
          "wortarten": {
            "io": "p",
            "penso": "v"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "c": "a",
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
          "schrift": "io penso che sia [Slot]",
          "lerntext": "io penso che sia [Slot]",
          "wortarten": {
            "io": "p",
            "penso": "v"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "c": "a",
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
          "schrift": "io lo trovo molto [Slot]",
          "lerntext": "io lo trovo molto [Slot]",
          "wortarten": {
            "io": "p",
            "trovo": "v"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "lo",
            "lerntext": "lo",
            "de": "der (vor s+Konsonant)"
          }
        ],
        "id": "35.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io lo trovo molto [Slot]",
          "lerntext": "io lo trovo molto [Slot]",
          "wortarten": {
            "io": "p",
            "trovo": "v"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "c": "a"
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "c": "a",
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
        "task": "Sag deine Meinung zu etwas.",
        "newFrameWords": [],
        "id": "35.5"
      }
    ]
  },
  {
    "number": 36,
    "title": "Was ich vorhabe",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "domani [Slot]",
          "lerntext": "domani [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "trovare",
              "lerntext": "trovare",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "36.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "domani [Slot]",
          "lerntext": "domani [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trovare",
              "lerntext": "trovare",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
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
          "schrift": "io voglio [Slot] presto",
          "lerntext": "io voglio [Slot] presto",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "36.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot] presto",
          "lerntext": "io voglio [Slot] presto",
          "wortarten": {
            "io": "p",
            "voglio": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
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
        "task": "Erzähl, was du morgen machst.",
        "newFrameWords": [],
        "id": "36.5"
      }
    ]
  },
  {
    "number": 37,
    "title": "Der Mann, der dort steht",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "questo è l'uomo che [Slot]",
          "lerntext": "questo è l'uomo che [Slot]",
          "wortarten": {
            "questo": "p",
            "è": "v"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "abita",
              "lerntext": "abita",
              "de": "wohnen",
              "c": "v"
            },
            {
              "schrift": "sta",
              "lerntext": "sta",
              "de": "sein",
              "c": "v"
            },
            {
              "schrift": "ride",
              "lerntext": "ride",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "piange",
              "lerntext": "piange",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "pensa",
              "lerntext": "pensa",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "crede",
              "lerntext": "crede",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "spera",
              "lerntext": "spera",
              "de": "hoffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "serve",
              "lerntext": "serve",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viene",
              "lerntext": "viene",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "beve",
              "lerntext": "beve",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "va",
              "lerntext": "va",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "diventa",
              "lerntext": "diventa",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "può",
              "lerntext": "può",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mette",
              "lerntext": "mette",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiude",
              "lerntext": "chiude",
              "de": "schließen",
              "c": "v",
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
          "schrift": "questo è l'uomo che [Slot]",
          "lerntext": "questo è l'uomo che [Slot]",
          "wortarten": {
            "questo": "p",
            "è": "v"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "crede",
              "lerntext": "crede",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "spera",
              "lerntext": "spera",
              "de": "hoffen",
              "c": "v"
            },
            {
              "schrift": "serve",
              "lerntext": "serve",
              "de": "dienen",
              "c": "v"
            },
            {
              "schrift": "abita",
              "lerntext": "abita",
              "de": "wohnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sta",
              "lerntext": "sta",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ride",
              "lerntext": "ride",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piange",
              "lerntext": "piange",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensa",
              "lerntext": "pensa",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ha",
              "lerntext": "ha",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continua",
              "lerntext": "continua",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambia",
              "lerntext": "cambia",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perde",
              "lerntext": "perde",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vuole",
              "lerntext": "vuole",
              "de": "wollen",
              "c": "v",
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
          "schrift": "cerco un posto dove si può [Slot]",
          "lerntext": "cerco un posto dove si può [Slot]",
          "wortarten": {
            "cerco": "v",
            "posto": "n",
            "può": "v"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
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
            "schrift": "dove",
            "lerntext": "dove",
            "de": "wo"
          },
          {
            "schrift": "posto",
            "lerntext": "posto",
            "de": "Platz",
            "c": "n"
          }
        ],
        "id": "37.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "cerco un posto dove si può [Slot]",
          "lerntext": "cerco un posto dove si può [Slot]",
          "wortarten": {
            "cerco": "v",
            "posto": "n",
            "può": "v"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
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
        "task": "Beschreib jemanden mit einem Nebensatz.",
        "newFrameWords": [],
        "id": "37.5"
      }
    ]
  },
  {
    "number": 38,
    "title": "Alles zusammen",
    "niveau": "A2",
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "ieri ero a [Slot]",
          "lerntext": "ieri ero a [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n"
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "posto",
              "lerntext": "posto",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "38.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ieri ero a [Slot]",
          "lerntext": "ieri ero a [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "posto",
              "lerntext": "posto",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "38.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "voglio [Slot] perché ho tempo",
          "lerntext": "voglio [Slot] perché ho tempo",
          "wortarten": {
            "voglio": "v",
            "ho": "v",
            "tempo": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "c": "v"
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "38.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "voglio [Slot] perché ho tempo",
          "lerntext": "voglio [Slot] perché ho tempo",
          "wortarten": {
            "voglio": "v",
            "ho": "v",
            "tempo": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "38.4"
      },
      {
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
        "id": "38.5"
      }
    ]
  }
];
