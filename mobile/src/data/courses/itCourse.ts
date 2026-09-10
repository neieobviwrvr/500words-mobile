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
          "lerntext": "io sono [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend"
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "sono",
            "lerntext": "sono",
            "de": "sein"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io sono [Slot]",
          "lerntext": "io sono [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pronto",
              "lerntext": "pronto",
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
          "schrift": "noi siamo [Slot]",
          "lerntext": "noi siamo [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student"
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege"
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei"
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund"
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
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
          "schrift": "noi siamo [Slot]",
          "lerntext": "noi siamo [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bambino",
              "lerntext": "bambino",
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
          "schrift": "lui è molto [Slot]",
          "lerntext": "lui è molto [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön"
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung"
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt"
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
          "lerntext": "lui è molto [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich"
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
          "lerntext": "io sono [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
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
          "schrift": "noi siamo [Slot]",
          "lerntext": "noi siamo [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
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
          "lerntext": "io sono [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
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
          "schrift": "noi siamo [Slot]",
          "lerntext": "noi siamo [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
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
          "lerntext": "questo è una [Slot]"
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche"
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür"
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter"
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester"
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
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
            "de": "dieser"
          }
        ],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "questo è una [Slot]",
          "lerntext": "questo è una [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel"
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
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
          "lerntext": "questo è un [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder"
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
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
          "lerntext": "questo è un [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch"
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett"
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche"
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte"
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus"
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer"
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster"
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas"
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel"
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
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
          "lerntext": "io ho una [Slot]"
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie"
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter"
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand"
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
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
            "de": "haben"
          }
        ],
        "id": "2.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io ho una [Slot]",
          "lerntext": "io ho una [Slot]"
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund"
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
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
          "lerntext": "io ho una [Slot]"
        },
        "frameDe": "ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto"
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
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
          "lerntext": "io ho un [Slot]"
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung"
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
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
          "lerntext": "io ho un [Slot]"
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn"
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm"
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß"
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper"
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
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
          "lerntext": "questa è mia [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein"
          },
          {
            "schrift": "tuo",
            "lerntext": "tuo",
            "de": "dein"
          },
          {
            "schrift": "nostro",
            "lerntext": "nostro",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter"
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater"
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau"
            },
            {
              "schrift": "collega",
              "lerntext": "collega",
              "de": "Kollege"
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
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
          "lerntext": "questa è [Slot] casa"
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein"
          },
          {
            "schrift": "tuo",
            "lerntext": "tuo",
            "de": "dein"
          },
          {
            "schrift": "nostro",
            "lerntext": "nostro",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "suo",
              "lerntext": "suo",
              "de": "sein"
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "io",
              "lerntext": "io",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "noi",
              "lerntext": "noi",
              "de": "wir",
              "wieder": true
            },
            {
              "schrift": "tu",
              "lerntext": "tu",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "lei",
              "lerntext": "lei",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "questo",
              "lerntext": "questo",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
              "de": "er",
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
          "lerntext": "[Slot] è qui"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "questo",
              "lerntext": "questo",
              "de": "dieser"
            },
            {
              "schrift": "suo",
              "lerntext": "suo",
              "de": "sein"
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch"
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "nostro",
              "lerntext": "nostro",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "tuo",
              "lerntext": "tuo",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "mio",
              "lerntext": "mio",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "io",
              "lerntext": "io",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "noi",
              "lerntext": "noi",
              "de": "wir",
              "wieder": true
            },
            {
              "schrift": "tu",
              "lerntext": "tu",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "lei",
              "lerntext": "lei",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
              "de": "er",
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
          "lerntext": "questa è mia [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein"
          },
          {
            "schrift": "tuo",
            "lerntext": "tuo",
            "de": "dein"
          },
          {
            "schrift": "nostro",
            "lerntext": "nostro",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
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
          "lerntext": "[Slot] è qui"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch",
              "wieder": true
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "nostro",
              "lerntext": "nostro",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "tuo",
              "lerntext": "tuo",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "mio",
              "lerntext": "mio",
              "de": "mein",
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
          "lerntext": "io voglio [Slot]"
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser"
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee"
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier"
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein"
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen"
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
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
            "de": "wollen"
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
          "lerntext": "io voglio [Slot]"
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot"
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse"
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch"
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker"
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
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
          "lerntext": "io ho bisogno di [Slot]"
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe"
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit"
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld"
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz"
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
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
            "de": "dienen"
          }
        ],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io vorrei una [Slot]",
          "lerntext": "io vorrei una [Slot]"
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück"
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen"
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst"
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
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
          "lerntext": "io vorrei un [Slot]"
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen"
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
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
          "lerntext": "io mangio [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch"
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch"
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse"
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
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
            "de": "essen"
          },
          {
            "schrift": "bevo",
            "lerntext": "bevo",
            "de": "trinken"
          }
        ],
        "id": "3.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io mangio [Slot]",
          "lerntext": "io mangio [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
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
          "lerntext": "io mangio [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
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
          "lerntext": "io non sono [Slot]"
        },
        "frameDe": "ich bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bereit"
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
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "wieder": true
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
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
            "de": "ja"
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
          "lerntext": "sei [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt"
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu"
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
              "de": "wichtig"
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "ja",
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
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
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
          "lerntext": "[Slot] è questo?"
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
            "de": "wer"
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
              "de": "etwas"
            },
            {
              "schrift": "tutto",
              "lerntext": "tutto",
              "de": "alles"
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch",
              "wieder": true
            },
            {
              "schrift": "nostro",
              "lerntext": "nostro",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "mio",
              "lerntext": "mio",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "tuo",
              "lerntext": "tuo",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "suo",
              "lerntext": "suo",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "noi",
              "lerntext": "noi",
              "de": "wir",
              "wieder": true
            },
            {
              "schrift": "lei",
              "lerntext": "lei",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "tu",
              "lerntext": "tu",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "io",
              "lerntext": "io",
              "de": "ich",
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
            "de": "wer"
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
          "lerntext": "sei [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
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
              "wieder": true
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "ja",
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
          "lerntext": "sei [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          },
          {
            "schrift": "voi",
            "lerntext": "voi",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
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
              "wieder": true
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "ja",
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
              "de": "Schule"
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße"
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
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
              "de": "Bahnhof"
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
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
              "de": "Flughafen"
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
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
              "de": "Geschäft"
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant"
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad"
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
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
              "de": "Universität"
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
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
              "de": "Krankenhaus"
            },
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
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
          "lerntext": "[Slot] è qui"
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
              "de": "Stadt"
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg"
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen",
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
          "lerntext": "è [Slot] la casa"
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
          "lerntext": "è [Slot] la casa"
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
          "lerntext": "è [Slot] la casa"
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
          "lerntext": "[Slot] è qui"
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
              "wieder": true
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
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
          "lerntext": "quanto costa una [Slot]?"
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
              "de": "Koffer"
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
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
          "lerntext": "quanto costa un [Slot]?"
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
              "de": "Fahrkarte"
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
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
          "lerntext": "è troppo [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß"
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein"
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang"
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden",
              "wieder": true
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
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
          "lerntext": "è troppo [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch"
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig"
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer"
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht"
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
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
          "lerntext": "io posso [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen"
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen"
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren"
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben"
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen"
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben",
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
            "de": "können"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io posso [Slot]",
          "lerntext": "io posso [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen"
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen"
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen"
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
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
          "schrift": "io devo [Slot]",
          "lerntext": "io devo [Slot]"
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten"
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen"
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten"
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen"
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
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
            "de": "müssen"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io devo [Slot]",
          "lerntext": "io devo [Slot]"
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen"
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
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
          "lerntext": "io voglio [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen"
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen"
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen"
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten"
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen"
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
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
          "lerntext": "io voglio [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören"
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen"
            },
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
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
          "lerntext": "io non posso [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen"
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren"
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen"
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen"
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein"
            },
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
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
          "lerntext": "io non posso [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben"
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen"
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen"
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen"
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
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
          "lerntext": "io non posso [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
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
          "lerntext": "io non posso [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
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
          "lerntext": "io vado a un [Slot]"
        },
        "frameDe": "ich gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft"
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
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
            "de": "gehen"
          },
          {
            "schrift": "vengo",
            "lerntext": "vengo",
            "de": "kommen"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io viaggio in [Slot]",
          "lerntext": "io viaggio in [Slot]"
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
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
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug"
            },
            {
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto"
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg"
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
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
            "de": "reisen"
          }
        ],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot] adesso",
          "lerntext": "io voglio [Slot] adesso"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen"
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen"
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen"
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
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
            "de": "uns"
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
          "lerntext": "io voglio [Slot] adesso"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
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
          "lerntext": "io viaggio in [Slot]"
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
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
          "lerntext": "io voglio [Slot] adesso"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
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
              "de": "dann"
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
          "lerntext": "ci vediamo la [Slot]"
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
              "de": "Abend"
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht"
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag"
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche"
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
            "de": "auch"
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
              "de": "Stunde"
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
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
              "de": "Minute"
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
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
          "lerntext": "ci vediamo la [Slot]"
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
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
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
          "lerntext": "ci vediamo la [Slot]"
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
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
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
          "lerntext": "io amo [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne"
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen"
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind"
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit"
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg"
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "wieder": true
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
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
            "de": "lieben"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io amo [Slot]",
          "lerntext": "io amo [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer"
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
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
          "lerntext": "io vedo [Slot]"
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mi",
              "lerntext": "mi",
              "de": "mir"
            },
            {
              "schrift": "ti",
              "lerntext": "ti",
              "de": "dir"
            },
            {
              "schrift": "ci",
              "lerntext": "ci",
              "de": "uns"
            },
            {
              "schrift": "tutto",
              "lerntext": "tutto",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "qualcosa",
              "lerntext": "qualcosa",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "chi",
              "lerntext": "chi",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch",
              "wieder": true
            },
            {
              "schrift": "nostro",
              "lerntext": "nostro",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "mio",
              "lerntext": "mio",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "tuo",
              "lerntext": "tuo",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "suo",
              "lerntext": "suo",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "questo",
              "lerntext": "questo",
              "de": "dieser",
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
            "de": "finden"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "der"
          },
          {
            "schrift": "cibo",
            "lerntext": "cibo",
            "de": "Essen"
          }
        ],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "è [Slot]",
          "lerntext": "è [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot"
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau"
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb"
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün"
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz"
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
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
          "lerntext": "è [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß"
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun"
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau"
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
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
          "lerntext": "il cibo è [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm"
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt"
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber"
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig"
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
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
          "lerntext": "il cibo è [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
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
          "lerntext": "io amo [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
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
          "schrift": "il cibo è [Slot]",
          "lerntext": "il cibo è [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
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
        "kind": "frame",
        "frame": {
          "schrift": "io vedo [Slot]",
          "lerntext": "io vedo [Slot]"
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mi",
              "lerntext": "mi",
              "de": "mir",
              "wieder": true
            },
            {
              "schrift": "ti",
              "lerntext": "ti",
              "de": "dir",
              "wieder": true
            },
            {
              "schrift": "tutto",
              "lerntext": "tutto",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "qualcosa",
              "lerntext": "qualcosa",
              "de": "etwas",
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
          "lerntext": "io ero [Slot] ieri"
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank"
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden"
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
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
          "lerntext": "io [Slot] domani"
        },
        "frameDe": "ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen"
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben"
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen"
            },
            {
              "schrift": "trovare",
              "lerntext": "trovare",
              "de": "finden"
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
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
            "de": "werden"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot] molto",
          "lerntext": "io voglio [Slot] molto"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen"
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen"
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben"
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken"
            },
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören"
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
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
            "de": "Arbeit"
          }
        ],
        "id": "11.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io divento [Slot]",
          "lerntext": "io divento [Slot]"
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen"
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen"
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bereit"
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
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
            "de": "werden"
          }
        ],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "io voglio [Slot] molto",
          "lerntext": "io voglio [Slot] molto"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen",
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
          "lerntext": "io voglio [Slot] molto"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
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
          "lerntext": "sono stanco [Slot] lavoro"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "e",
            "lerntext": "e",
            "de": "und"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da"
            },
            {
              "schrift": "sopra",
              "lerntext": "sopra",
              "de": "über"
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während"
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl"
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
              "wieder": true
            },
            {
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann",
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
            "de": "und"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder"
          },
          {
            "schrift": "quindi",
            "lerntext": "quindi",
            "de": "also"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "sono stanco [Slot] lavoro",
          "lerntext": "sono stanco [Slot] lavoro"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "e",
            "lerntext": "e",
            "de": "und"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder"
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
          "lerntext": "voglio [Slot] ma non posso"
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen"
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen"
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen"
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
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
          "lerntext": "è [Slot] ma va bene"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig"
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach"
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig"
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch"
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
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
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
          "lerntext": "è [Slot] ma va bene"
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
              "de": "hässlich"
            },
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
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
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern"
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
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
          "lerntext": "è [Slot] ma va bene"
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
              "wieder": true
            },
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
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
          "lerntext": "sono stanco [Slot] lavoro"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "e",
            "lerntext": "e",
            "de": "und"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da",
              "wieder": true
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
              "de": "auch",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
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
          "lerntext": "sono stanco [Slot] lavoro"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "e",
            "lerntext": "e",
            "de": "und"
          },
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "aber"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da",
              "wieder": true
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
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
          "schrift": "una [Slot] mi fa male",
          "lerntext": "una [Slot] mi fa male"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf"
            },
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
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
          "lerntext": "un [Slot] mi fa male"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mio",
            "lerntext": "mio",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge"
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
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
          "lerntext": "ho male a una [Slot]"
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein"
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
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
              "de": "Teller"
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "wieder": true
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
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
          "lerntext": "compro una [Slot]"
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh"
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
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
          "lerntext": "compro un [Slot]"
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid"
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
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
          "lerntext": "ho [Slot]"
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name"
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
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
          "lerntext": "questo è il mio [Slot]"
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit"
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
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
          "lerntext": "aspetto una [Slot]"
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort"
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
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
          "lerntext": "aspetto un [Slot]"
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung"
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
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
          "lerntext": "ho preso una buon [Slot]"
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus"
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer"
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
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
          "lerntext": "ho preso un buon [Slot]"
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch"
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas",
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
              "de": "Person"
            },
            {
              "schrift": "moglie",
              "lerntext": "moglie",
              "de": "Ehefrau"
            },
            {
              "schrift": "bar",
              "lerntext": "bar",
              "de": "Bar"
            },
            {
              "schrift": "farmacia",
              "lerntext": "farmacia",
              "de": "Apotheke"
            },
            {
              "schrift": "conto",
              "lerntext": "conto",
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
              "de": "Vorlesung"
            },
            {
              "schrift": "lingua",
              "lerntext": "lingua",
              "de": "Sprache"
            },
            {
              "schrift": "domanda",
              "lerntext": "domanda",
              "de": "Frage"
            },
            {
              "schrift": "pizza",
              "lerntext": "pizza",
              "de": "Pizza"
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte"
            },
            {
              "schrift": "persona",
              "lerntext": "persona",
              "de": "Person",
              "wieder": true
            },
            {
              "schrift": "moglie",
              "lerntext": "moglie",
              "de": "Ehefrau",
              "wieder": true
            },
            {
              "schrift": "bar",
              "lerntext": "bar",
              "de": "Bar",
              "wieder": true
            },
            {
              "schrift": "farmacia",
              "lerntext": "farmacia",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "conto",
              "lerntext": "conto",
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
              "de": "Flasche"
            },
            {
              "schrift": "medicina",
              "lerntext": "medicina",
              "de": "Medizin"
            },
            {
              "schrift": "numero",
              "lerntext": "numero",
              "de": "Nummer"
            },
            {
              "schrift": "musica",
              "lerntext": "musica",
              "de": "Musik"
            },
            {
              "schrift": "mondo",
              "lerntext": "mondo",
              "de": "Welt"
            },
            {
              "schrift": "lezione",
              "lerntext": "lezione",
              "de": "Vorlesung",
              "wieder": true
            },
            {
              "schrift": "lingua",
              "lerntext": "lingua",
              "de": "Sprache",
              "wieder": true
            },
            {
              "schrift": "domanda",
              "lerntext": "domanda",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "pizza",
              "lerntext": "pizza",
              "de": "Pizza",
              "wieder": true
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
              "de": "Speisekarte",
              "wieder": true
            },
            {
              "schrift": "persona",
              "lerntext": "persona",
              "de": "Person",
              "wieder": true
            },
            {
              "schrift": "moglie",
              "lerntext": "moglie",
              "de": "Ehefrau",
              "wieder": true
            },
            {
              "schrift": "bar",
              "lerntext": "bar",
              "de": "Bar",
              "wieder": true
            },
            {
              "schrift": "farmacia",
              "lerntext": "farmacia",
              "de": "Apotheke",
              "wieder": true
            },
            {
              "schrift": "conto",
              "lerntext": "conto",
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
              "de": "Luft"
            },
            {
              "schrift": "gatto",
              "lerntext": "gatto",
              "de": "Katze"
            },
            {
              "schrift": "amore",
              "lerntext": "amore",
              "de": "Liebe"
            },
            {
              "schrift": "modo",
              "lerntext": "modo",
              "de": "Art"
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee"
            },
            {
              "schrift": "bottiglia",
              "lerntext": "bottiglia",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "medicina",
              "lerntext": "medicina",
              "de": "Medizin",
              "wieder": true
            },
            {
              "schrift": "numero",
              "lerntext": "numero",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "musica",
              "lerntext": "musica",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "mondo",
              "lerntext": "mondo",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "lezione",
              "lerntext": "lezione",
              "de": "Vorlesung",
              "wieder": true
            },
            {
              "schrift": "lingua",
              "lerntext": "lingua",
              "de": "Sprache",
              "wieder": true
            },
            {
              "schrift": "domanda",
              "lerntext": "domanda",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "pizza",
              "lerntext": "pizza",
              "de": "Pizza",
              "wieder": true
            },
            {
              "schrift": "menu",
              "lerntext": "menu",
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
              "de": "Geschichte"
            },
            {
              "schrift": "paura",
              "lerntext": "paura",
              "de": "Angst"
            },
            {
              "schrift": "turno",
              "lerntext": "turno",
              "de": "Schicht"
            },
            {
              "schrift": "taglia",
              "lerntext": "taglia",
              "de": "Kleidergrösse"
            },
            {
              "schrift": "aria",
              "lerntext": "aria",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "gatto",
              "lerntext": "gatto",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "amore",
              "lerntext": "amore",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "modo",
              "lerntext": "modo",
              "de": "Art",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "bottiglia",
              "lerntext": "bottiglia",
              "de": "Flasche",
              "wieder": true
            },
            {
              "schrift": "medicina",
              "lerntext": "medicina",
              "de": "Medizin",
              "wieder": true
            },
            {
              "schrift": "numero",
              "lerntext": "numero",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "musica",
              "lerntext": "musica",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "mondo",
              "lerntext": "mondo",
              "de": "Welt",
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
              "de": "Mann"
            },
            {
              "schrift": "ragazzo",
              "lerntext": "ragazzo",
              "de": "Junge"
            },
            {
              "schrift": "marito",
              "lerntext": "marito",
              "de": "Ehemann"
            },
            {
              "schrift": "mese",
              "lerntext": "mese",
              "de": "Monat"
            },
            {
              "schrift": "mattina",
              "lerntext": "mattina",
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
              "de": "Nachmittag"
            },
            {
              "schrift": "piazza",
              "lerntext": "piazza",
              "de": "Platz"
            },
            {
              "schrift": "mercato",
              "lerntext": "mercato",
              "de": "Markt"
            },
            {
              "schrift": "passaporto",
              "lerntext": "passaporto",
              "de": "Pass"
            },
            {
              "schrift": "prezzo",
              "lerntext": "prezzo",
              "de": "Preis"
            },
            {
              "schrift": "uomo",
              "lerntext": "uomo",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "ragazzo",
              "lerntext": "ragazzo",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "marito",
              "lerntext": "marito",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "mese",
              "lerntext": "mese",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "mattina",
              "lerntext": "mattina",
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
              "de": "Moment"
            },
            {
              "schrift": "medico",
              "lerntext": "medico",
              "de": "Arzt"
            },
            {
              "schrift": "dolore",
              "lerntext": "dolore",
              "de": "Schmerz"
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film"
            },
            {
              "schrift": "cane",
              "lerntext": "cane",
              "de": "Hund"
            },
            {
              "schrift": "pomeriggio",
              "lerntext": "pomeriggio",
              "de": "Nachmittag",
              "wieder": true
            },
            {
              "schrift": "piazza",
              "lerntext": "piazza",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "mercato",
              "lerntext": "mercato",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "passaporto",
              "lerntext": "passaporto",
              "de": "Pass",
              "wieder": true
            },
            {
              "schrift": "prezzo",
              "lerntext": "prezzo",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "uomo",
              "lerntext": "uomo",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "ragazzo",
              "lerntext": "ragazzo",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "marito",
              "lerntext": "marito",
              "de": "Ehemann",
              "wieder": true
            },
            {
              "schrift": "mese",
              "lerntext": "mese",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "mattina",
              "lerntext": "mattina",
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
              "de": "Teil"
            },
            {
              "schrift": "inizio",
              "lerntext": "inizio",
              "de": "Anfang"
            },
            {
              "schrift": "motivo",
              "lerntext": "motivo",
              "de": "Grund"
            },
            {
              "schrift": "fame",
              "lerntext": "fame",
              "de": "Hunger"
            },
            {
              "schrift": "sete",
              "lerntext": "sete",
              "de": "Durst"
            },
            {
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment",
              "wieder": true
            },
            {
              "schrift": "medico",
              "lerntext": "medico",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "dolore",
              "lerntext": "dolore",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "cane",
              "lerntext": "cane",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "pomeriggio",
              "lerntext": "pomeriggio",
              "de": "Nachmittag",
              "wieder": true
            },
            {
              "schrift": "piazza",
              "lerntext": "piazza",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "mercato",
              "lerntext": "mercato",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "passaporto",
              "lerntext": "passaporto",
              "de": "Pass",
              "wieder": true
            },
            {
              "schrift": "prezzo",
              "lerntext": "prezzo",
              "de": "Preis",
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
              "de": "Schlaf"
            },
            {
              "schrift": "sconto",
              "lerntext": "sconto",
              "de": "Rabatt"
            },
            {
              "schrift": "ingresso",
              "lerntext": "ingresso",
              "de": "Eintritt"
            },
            {
              "schrift": "uscita",
              "lerntext": "uscita",
              "de": "Ausgang"
            },
            {
              "schrift": "lavoratore",
              "lerntext": "lavoratore",
              "de": "Arbeiter"
            },
            {
              "schrift": "parte",
              "lerntext": "parte",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "inizio",
              "lerntext": "inizio",
              "de": "Anfang",
              "wieder": true
            },
            {
              "schrift": "motivo",
              "lerntext": "motivo",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "fame",
              "lerntext": "fame",
              "de": "Hunger",
              "wieder": true
            },
            {
              "schrift": "sete",
              "lerntext": "sete",
              "de": "Durst",
              "wieder": true
            },
            {
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment",
              "wieder": true
            },
            {
              "schrift": "medico",
              "lerntext": "medico",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "dolore",
              "lerntext": "dolore",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "wieder": true
            },
            {
              "schrift": "cane",
              "lerntext": "cane",
              "de": "Hund",
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
              "de": "Kunde"
            },
            {
              "schrift": "sonno",
              "lerntext": "sonno",
              "de": "Schlaf",
              "wieder": true
            },
            {
              "schrift": "sconto",
              "lerntext": "sconto",
              "de": "Rabatt",
              "wieder": true
            },
            {
              "schrift": "ingresso",
              "lerntext": "ingresso",
              "de": "Eintritt",
              "wieder": true
            },
            {
              "schrift": "uscita",
              "lerntext": "uscita",
              "de": "Ausgang",
              "wieder": true
            },
            {
              "schrift": "lavoratore",
              "lerntext": "lavoratore",
              "de": "Arbeiter",
              "wieder": true
            },
            {
              "schrift": "parte",
              "lerntext": "parte",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "inizio",
              "lerntext": "inizio",
              "de": "Anfang",
              "wieder": true
            },
            {
              "schrift": "motivo",
              "lerntext": "motivo",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "fame",
              "lerntext": "fame",
              "de": "Hunger",
              "wieder": true
            },
            {
              "schrift": "sete",
              "lerntext": "sete",
              "de": "Durst",
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
              "de": "Jahr"
            },
            {
              "schrift": "paese",
              "lerntext": "paese",
              "de": "Dorf"
            },
            {
              "schrift": "ragazza",
              "lerntext": "ragazza",
              "de": "Mädchen"
            },
            {
              "schrift": "parola",
              "lerntext": "parola",
              "de": "Wort"
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem"
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
              "de": "Fieber"
            },
            {
              "schrift": "festa",
              "lerntext": "festa",
              "de": "Fest"
            },
            {
              "schrift": "vita",
              "lerntext": "vita",
              "de": "Leben"
            },
            {
              "schrift": "fuoco",
              "lerntext": "fuoco",
              "de": "Feuer"
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk"
            },
            {
              "schrift": "anno",
              "lerntext": "anno",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "paese",
              "lerntext": "paese",
              "de": "Dorf",
              "wieder": true
            },
            {
              "schrift": "ragazza",
              "lerntext": "ragazza",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "parola",
              "lerntext": "parola",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
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
              "de": "Ende"
            },
            {
              "schrift": "esempio",
              "lerntext": "esempio",
              "de": "Beispiel"
            },
            {
              "schrift": "documento",
              "lerntext": "documento",
              "de": "Dokument"
            },
            {
              "schrift": "febbre",
              "lerntext": "febbre",
              "de": "Fieber",
              "wieder": true
            },
            {
              "schrift": "festa",
              "lerntext": "festa",
              "de": "Fest",
              "wieder": true
            },
            {
              "schrift": "vita",
              "lerntext": "vita",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "fuoco",
              "lerntext": "fuoco",
              "de": "Feuer",
              "wieder": true
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "anno",
              "lerntext": "anno",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "paese",
              "lerntext": "paese",
              "de": "Dorf",
              "wieder": true
            },
            {
              "schrift": "ragazza",
              "lerntext": "ragazza",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "parola",
              "lerntext": "parola",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem",
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
              "de": "Leute"
            },
            {
              "schrift": "pasta",
              "lerntext": "pasta",
              "de": "Nudeln"
            },
            {
              "schrift": "capelli",
              "lerntext": "capelli",
              "de": "Haare"
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
              "wieder": true
            },
            {
              "schrift": "paura",
              "lerntext": "paura",
              "de": "Angst",
              "wieder": true
            },
            {
              "schrift": "turno",
              "lerntext": "turno",
              "de": "Schicht",
              "wieder": true
            },
            {
              "schrift": "taglia",
              "lerntext": "taglia",
              "de": "Kleidergrösse",
              "wieder": true
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute",
              "wieder": true
            },
            {
              "schrift": "pasta",
              "lerntext": "pasta",
              "de": "Nudeln",
              "wieder": true
            },
            {
              "schrift": "capelli",
              "lerntext": "capelli",
              "de": "Haare",
              "wieder": true
            },
            {
              "schrift": "aria",
              "lerntext": "aria",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "gatto",
              "lerntext": "gatto",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "amore",
              "lerntext": "amore",
              "de": "Liebe",
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
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "storia",
              "lerntext": "storia",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "paura",
              "lerntext": "paura",
              "de": "Angst",
              "wieder": true
            },
            {
              "schrift": "turno",
              "lerntext": "turno",
              "de": "Schicht",
              "wieder": true
            },
            {
              "schrift": "taglia",
              "lerntext": "taglia",
              "de": "Kleidergrösse",
              "wieder": true
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute",
              "wieder": true
            },
            {
              "schrift": "pasta",
              "lerntext": "pasta",
              "de": "Nudeln",
              "wieder": true
            },
            {
              "schrift": "capelli",
              "lerntext": "capelli",
              "de": "Haare",
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
              "wieder": true
            },
            {
              "schrift": "esempio",
              "lerntext": "esempio",
              "de": "Beispiel",
              "wieder": true
            },
            {
              "schrift": "documento",
              "lerntext": "documento",
              "de": "Dokument",
              "wieder": true
            },
            {
              "schrift": "febbre",
              "lerntext": "febbre",
              "de": "Fieber",
              "wieder": true
            },
            {
              "schrift": "festa",
              "lerntext": "festa",
              "de": "Fest",
              "wieder": true
            },
            {
              "schrift": "vita",
              "lerntext": "vita",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "fuoco",
              "lerntext": "fuoco",
              "de": "Feuer",
              "wieder": true
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk",
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
              "wieder": true
            },
            {
              "schrift": "sonno",
              "lerntext": "sonno",
              "de": "Schlaf",
              "wieder": true
            },
            {
              "schrift": "sconto",
              "lerntext": "sconto",
              "de": "Rabatt",
              "wieder": true
            },
            {
              "schrift": "ingresso",
              "lerntext": "ingresso",
              "de": "Eintritt",
              "wieder": true
            },
            {
              "schrift": "uscita",
              "lerntext": "uscita",
              "de": "Ausgang",
              "wieder": true
            },
            {
              "schrift": "lavoratore",
              "lerntext": "lavoratore",
              "de": "Arbeiter",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chiamare",
              "lerntext": "chiamare",
              "de": "rufen"
            },
            {
              "schrift": "bisognare",
              "lerntext": "bisognare",
              "de": "nötig sein"
            },
            {
              "schrift": "costare",
              "lerntext": "costare",
              "de": "kosten"
            },
            {
              "schrift": "entrare",
              "lerntext": "entrare",
              "de": "hineingehen"
            },
            {
              "schrift": "portare",
              "lerntext": "portare",
              "de": "bringen"
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "piacere",
              "lerntext": "piacere",
              "de": "gefallen"
            },
            {
              "schrift": "studiare",
              "lerntext": "studiare",
              "de": "studieren"
            },
            {
              "schrift": "finire",
              "lerntext": "finire",
              "de": "beenden"
            },
            {
              "schrift": "riuscire",
              "lerntext": "riuscire",
              "de": "schaffen"
            },
            {
              "schrift": "cantare",
              "lerntext": "cantare",
              "de": "singen"
            },
            {
              "schrift": "chiamare",
              "lerntext": "chiamare",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "bisognare",
              "lerntext": "bisognare",
              "de": "nötig sein",
              "wieder": true
            },
            {
              "schrift": "costare",
              "lerntext": "costare",
              "de": "kosten",
              "wieder": true
            },
            {
              "schrift": "entrare",
              "lerntext": "entrare",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "portare",
              "lerntext": "portare",
              "de": "bringen",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "conoscersi",
              "lerntext": "conoscersi",
              "de": "sich kennenlernen"
            },
            {
              "schrift": "succedere",
              "lerntext": "succedere",
              "de": "geschehen"
            },
            {
              "schrift": "firmare",
              "lerntext": "firmare",
              "de": "unterschreiben"
            },
            {
              "schrift": "dispiacere",
              "lerntext": "dispiacere",
              "de": "leidtun"
            },
            {
              "schrift": "tornare",
              "lerntext": "tornare",
              "de": "zurückkehren"
            },
            {
              "schrift": "piacere",
              "lerntext": "piacere",
              "de": "gefallen",
              "wieder": true
            },
            {
              "schrift": "studiare",
              "lerntext": "studiare",
              "de": "studieren",
              "wieder": true
            },
            {
              "schrift": "finire",
              "lerntext": "finire",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "riuscire",
              "lerntext": "riuscire",
              "de": "schaffen",
              "wieder": true
            },
            {
              "schrift": "cantare",
              "lerntext": "cantare",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "chiamare",
              "lerntext": "chiamare",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "bisognare",
              "lerntext": "bisognare",
              "de": "nötig sein",
              "wieder": true
            },
            {
              "schrift": "costare",
              "lerntext": "costare",
              "de": "kosten",
              "wieder": true
            },
            {
              "schrift": "entrare",
              "lerntext": "entrare",
              "de": "hineingehen",
              "wieder": true
            },
            {
              "schrift": "portare",
              "lerntext": "portare",
              "de": "bringen",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vivere",
              "lerntext": "vivere",
              "de": "leben"
            },
            {
              "schrift": "partire",
              "lerntext": "partire",
              "de": "abfahren"
            },
            {
              "schrift": "arrivare",
              "lerntext": "arrivare",
              "de": "ankommen"
            },
            {
              "schrift": "uscire",
              "lerntext": "uscire",
              "de": "hinausgehen"
            },
            {
              "schrift": "restare",
              "lerntext": "restare",
              "de": "bleiben"
            },
            {
              "schrift": "conoscersi",
              "lerntext": "conoscersi",
              "de": "sich kennenlernen",
              "wieder": true
            },
            {
              "schrift": "succedere",
              "lerntext": "succedere",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "firmare",
              "lerntext": "firmare",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "dispiacere",
              "lerntext": "dispiacere",
              "de": "leidtun",
              "wieder": true
            },
            {
              "schrift": "tornare",
              "lerntext": "tornare",
              "de": "zurückkehren",
              "wieder": true
            },
            {
              "schrift": "piacere",
              "lerntext": "piacere",
              "de": "gefallen",
              "wieder": true
            },
            {
              "schrift": "studiare",
              "lerntext": "studiare",
              "de": "studieren",
              "wieder": true
            },
            {
              "schrift": "finire",
              "lerntext": "finire",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "riuscire",
              "lerntext": "riuscire",
              "de": "schaffen",
              "wieder": true
            },
            {
              "schrift": "cantare",
              "lerntext": "cantare",
              "de": "singen",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "conoscere",
              "lerntext": "conoscere",
              "de": "kennen"
            },
            {
              "schrift": "imparare",
              "lerntext": "imparare",
              "de": "lernen"
            },
            {
              "schrift": "insegnare",
              "lerntext": "insegnare",
              "de": "unterrichten"
            },
            {
              "schrift": "ricordare",
              "lerntext": "ricordare",
              "de": "sich erinnern"
            },
            {
              "schrift": "cominciare",
              "lerntext": "cominciare",
              "de": "anfangen"
            },
            {
              "schrift": "vivere",
              "lerntext": "vivere",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "partire",
              "lerntext": "partire",
              "de": "abfahren",
              "wieder": true
            },
            {
              "schrift": "arrivare",
              "lerntext": "arrivare",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "uscire",
              "lerntext": "uscire",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "restare",
              "lerntext": "restare",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "conoscersi",
              "lerntext": "conoscersi",
              "de": "sich kennenlernen",
              "wieder": true
            },
            {
              "schrift": "succedere",
              "lerntext": "succedere",
              "de": "geschehen",
              "wieder": true
            },
            {
              "schrift": "firmare",
              "lerntext": "firmare",
              "de": "unterschreiben",
              "wieder": true
            },
            {
              "schrift": "dispiacere",
              "lerntext": "dispiacere",
              "de": "leidtun",
              "wieder": true
            },
            {
              "schrift": "tornare",
              "lerntext": "tornare",
              "de": "zurückkehren",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "provare",
              "lerntext": "provare",
              "de": "versuchen"
            },
            {
              "schrift": "correre",
              "lerntext": "correre",
              "de": "rennen"
            },
            {
              "schrift": "visitare",
              "lerntext": "visitare",
              "de": "besuchen"
            },
            {
              "schrift": "sposare",
              "lerntext": "sposare",
              "de": "heiraten"
            },
            {
              "schrift": "nascere",
              "lerntext": "nascere",
              "de": "geboren werden"
            },
            {
              "schrift": "conoscere",
              "lerntext": "conoscere",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "imparare",
              "lerntext": "imparare",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "insegnare",
              "lerntext": "insegnare",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "ricordare",
              "lerntext": "ricordare",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "cominciare",
              "lerntext": "cominciare",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "vivere",
              "lerntext": "vivere",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "partire",
              "lerntext": "partire",
              "de": "abfahren",
              "wieder": true
            },
            {
              "schrift": "arrivare",
              "lerntext": "arrivare",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "uscire",
              "lerntext": "uscire",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "restare",
              "lerntext": "restare",
              "de": "bleiben",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sembrare",
              "lerntext": "sembrare",
              "de": "scheinen"
            },
            {
              "schrift": "preferire",
              "lerntext": "preferire",
              "de": "bevorzugen"
            },
            {
              "schrift": "ordinare",
              "lerntext": "ordinare",
              "de": "bestellen"
            },
            {
              "schrift": "prenotare",
              "lerntext": "prenotare",
              "de": "reservieren"
            },
            {
              "schrift": "affittare",
              "lerntext": "affittare",
              "de": "mieten"
            },
            {
              "schrift": "provare",
              "lerntext": "provare",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "correre",
              "lerntext": "correre",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "visitare",
              "lerntext": "visitare",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "sposare",
              "lerntext": "sposare",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "nascere",
              "lerntext": "nascere",
              "de": "geboren werden",
              "wieder": true
            },
            {
              "schrift": "conoscere",
              "lerntext": "conoscere",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "imparare",
              "lerntext": "imparare",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "insegnare",
              "lerntext": "insegnare",
              "de": "unterrichten",
              "wieder": true
            },
            {
              "schrift": "ricordare",
              "lerntext": "ricordare",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "cominciare",
              "lerntext": "cominciare",
              "de": "anfangen",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cucinare",
              "lerntext": "cucinare",
              "de": "kochen"
            },
            {
              "schrift": "scusare",
              "lerntext": "scusare",
              "de": "entschuldigen"
            },
            {
              "schrift": "ringraziare",
              "lerntext": "ringraziare",
              "de": "danken"
            },
            {
              "schrift": "telefonare",
              "lerntext": "telefonare",
              "de": "telefonieren"
            },
            {
              "schrift": "salutare",
              "lerntext": "salutare",
              "de": "grüßen"
            },
            {
              "schrift": "sembrare",
              "lerntext": "sembrare",
              "de": "scheinen",
              "wieder": true
            },
            {
              "schrift": "preferire",
              "lerntext": "preferire",
              "de": "bevorzugen",
              "wieder": true
            },
            {
              "schrift": "ordinare",
              "lerntext": "ordinare",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "prenotare",
              "lerntext": "prenotare",
              "de": "reservieren",
              "wieder": true
            },
            {
              "schrift": "affittare",
              "lerntext": "affittare",
              "de": "mieten",
              "wieder": true
            },
            {
              "schrift": "provare",
              "lerntext": "provare",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "correre",
              "lerntext": "correre",
              "de": "rennen",
              "wieder": true
            },
            {
              "schrift": "visitare",
              "lerntext": "visitare",
              "de": "besuchen",
              "wieder": true
            },
            {
              "schrift": "sposare",
              "lerntext": "sposare",
              "de": "heiraten",
              "wieder": true
            },
            {
              "schrift": "nascere",
              "lerntext": "nascere",
              "de": "geboren werden",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cucinare",
              "lerntext": "cucinare",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "scusare",
              "lerntext": "scusare",
              "de": "entschuldigen",
              "wieder": true
            },
            {
              "schrift": "ringraziare",
              "lerntext": "ringraziare",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "telefonare",
              "lerntext": "telefonare",
              "de": "telefonieren",
              "wieder": true
            },
            {
              "schrift": "salutare",
              "lerntext": "salutare",
              "de": "grüßen",
              "wieder": true
            },
            {
              "schrift": "sembrare",
              "lerntext": "sembrare",
              "de": "scheinen",
              "wieder": true
            },
            {
              "schrift": "preferire",
              "lerntext": "preferire",
              "de": "bevorzugen",
              "wieder": true
            },
            {
              "schrift": "ordinare",
              "lerntext": "ordinare",
              "de": "bestellen",
              "wieder": true
            },
            {
              "schrift": "prenotare",
              "lerntext": "prenotare",
              "de": "reservieren",
              "wieder": true
            },
            {
              "schrift": "affittare",
              "lerntext": "affittare",
              "de": "mieten",
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
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cucinare",
              "lerntext": "cucinare",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "scusare",
              "lerntext": "scusare",
              "de": "entschuldigen",
              "wieder": true
            },
            {
              "schrift": "ringraziare",
              "lerntext": "ringraziare",
              "de": "danken",
              "wieder": true
            },
            {
              "schrift": "telefonare",
              "lerntext": "telefonare",
              "de": "telefonieren",
              "wieder": true
            },
            {
              "schrift": "salutare",
              "lerntext": "salutare",
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
          "schrift": "è molto [Slot]",
          "lerntext": "è molto [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "buono",
              "lerntext": "buono",
              "de": "gut"
            },
            {
              "schrift": "vero",
              "lerntext": "vero",
              "de": "wahr"
            },
            {
              "schrift": "sbagliato",
              "lerntext": "sbagliato",
              "de": "verkehrt"
            },
            {
              "schrift": "gratis",
              "lerntext": "gratis",
              "de": "kostenlos"
            },
            {
              "schrift": "pieno",
              "lerntext": "pieno",
              "de": "voll"
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
          "lerntext": "è molto [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vuoto",
              "lerntext": "vuoto",
              "de": "leer"
            },
            {
              "schrift": "libero",
              "lerntext": "libero",
              "de": "frei"
            },
            {
              "schrift": "occupato",
              "lerntext": "occupato",
              "de": "besetzt"
            },
            {
              "schrift": "cattivo",
              "lerntext": "cattivo",
              "de": "schlecht"
            },
            {
              "schrift": "possibile",
              "lerntext": "possibile",
              "de": "möglich"
            },
            {
              "schrift": "buono",
              "lerntext": "buono",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "vero",
              "lerntext": "vero",
              "de": "wahr",
              "wieder": true
            },
            {
              "schrift": "sbagliato",
              "lerntext": "sbagliato",
              "de": "verkehrt",
              "wieder": true
            },
            {
              "schrift": "gratis",
              "lerntext": "gratis",
              "de": "kostenlos",
              "wieder": true
            },
            {
              "schrift": "pieno",
              "lerntext": "pieno",
              "de": "voll",
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
          "lerntext": "è molto [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "economico",
              "lerntext": "economico",
              "de": "günstig"
            },
            {
              "schrift": "sano",
              "lerntext": "sano",
              "de": "gesund"
            },
            {
              "schrift": "simpatico",
              "lerntext": "simpatico",
              "de": "sympathisch"
            },
            {
              "schrift": "gentile",
              "lerntext": "gentile",
              "de": "freundlich"
            },
            {
              "schrift": "veloce",
              "lerntext": "veloce",
              "de": "schnell"
            },
            {
              "schrift": "vuoto",
              "lerntext": "vuoto",
              "de": "leer",
              "wieder": true
            },
            {
              "schrift": "libero",
              "lerntext": "libero",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "occupato",
              "lerntext": "occupato",
              "de": "besetzt",
              "wieder": true
            },
            {
              "schrift": "cattivo",
              "lerntext": "cattivo",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "possibile",
              "lerntext": "possibile",
              "de": "möglich",
              "wieder": true
            },
            {
              "schrift": "buono",
              "lerntext": "buono",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "vero",
              "lerntext": "vero",
              "de": "wahr",
              "wieder": true
            },
            {
              "schrift": "sbagliato",
              "lerntext": "sbagliato",
              "de": "verkehrt",
              "wieder": true
            },
            {
              "schrift": "gratis",
              "lerntext": "gratis",
              "de": "kostenlos",
              "wieder": true
            },
            {
              "schrift": "pieno",
              "lerntext": "pieno",
              "de": "voll",
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
          "lerntext": "è molto [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lento",
              "lerntext": "lento",
              "de": "langsam"
            },
            {
              "schrift": "salato",
              "lerntext": "salato",
              "de": "salzig"
            },
            {
              "schrift": "piccante",
              "lerntext": "piccante",
              "de": "scharf"
            },
            {
              "schrift": "buonissimo",
              "lerntext": "buonissimo",
              "de": "sehr gut"
            },
            {
              "schrift": "primo piano",
              "lerntext": "primo piano",
              "de": "erster Stock"
            },
            {
              "schrift": "economico",
              "lerntext": "economico",
              "de": "günstig",
              "wieder": true
            },
            {
              "schrift": "sano",
              "lerntext": "sano",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "simpatico",
              "lerntext": "simpatico",
              "de": "sympathisch",
              "wieder": true
            },
            {
              "schrift": "gentile",
              "lerntext": "gentile",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "veloce",
              "lerntext": "veloce",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "vuoto",
              "lerntext": "vuoto",
              "de": "leer",
              "wieder": true
            },
            {
              "schrift": "libero",
              "lerntext": "libero",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "occupato",
              "lerntext": "occupato",
              "de": "besetzt",
              "wieder": true
            },
            {
              "schrift": "cattivo",
              "lerntext": "cattivo",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "possibile",
              "lerntext": "possibile",
              "de": "möglich",
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
          "lerntext": "è molto [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ultimo posto",
              "lerntext": "ultimo posto",
              "de": "letzter Platz"
            },
            {
              "schrift": "italiano",
              "lerntext": "italiano",
              "de": "italienisch"
            },
            {
              "schrift": "tedesco",
              "lerntext": "tedesco",
              "de": "deutsch"
            },
            {
              "schrift": "inglese",
              "lerntext": "inglese",
              "de": "englisch"
            },
            {
              "schrift": "scorso",
              "lerntext": "scorso",
              "de": "letzter"
            },
            {
              "schrift": "lento",
              "lerntext": "lento",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "salato",
              "lerntext": "salato",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "piccante",
              "lerntext": "piccante",
              "de": "scharf",
              "wieder": true
            },
            {
              "schrift": "buonissimo",
              "lerntext": "buonissimo",
              "de": "sehr gut",
              "wieder": true
            },
            {
              "schrift": "primo piano",
              "lerntext": "primo piano",
              "de": "erster Stock",
              "wieder": true
            },
            {
              "schrift": "economico",
              "lerntext": "economico",
              "de": "günstig",
              "wieder": true
            },
            {
              "schrift": "sano",
              "lerntext": "sano",
              "de": "gesund",
              "wieder": true
            },
            {
              "schrift": "simpatico",
              "lerntext": "simpatico",
              "de": "sympathisch",
              "wieder": true
            },
            {
              "schrift": "gentile",
              "lerntext": "gentile",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "veloce",
              "lerntext": "veloce",
              "de": "schnell",
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
          "lerntext": "è molto [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fresco",
              "lerntext": "fresco",
              "de": "frisch"
            },
            {
              "schrift": "straniero",
              "lerntext": "straniero",
              "de": "ausländisch"
            },
            {
              "schrift": "prossimo",
              "lerntext": "prossimo",
              "de": "nächster"
            },
            {
              "schrift": "solito",
              "lerntext": "solito",
              "de": "üblich"
            },
            {
              "schrift": "bravo",
              "lerntext": "bravo",
              "de": "tüchtig"
            },
            {
              "schrift": "ultimo posto",
              "lerntext": "ultimo posto",
              "de": "letzter Platz",
              "wieder": true
            },
            {
              "schrift": "italiano",
              "lerntext": "italiano",
              "de": "italienisch",
              "wieder": true
            },
            {
              "schrift": "tedesco",
              "lerntext": "tedesco",
              "de": "deutsch",
              "wieder": true
            },
            {
              "schrift": "inglese",
              "lerntext": "inglese",
              "de": "englisch",
              "wieder": true
            },
            {
              "schrift": "scorso",
              "lerntext": "scorso",
              "de": "letzter",
              "wieder": true
            },
            {
              "schrift": "lento",
              "lerntext": "lento",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "salato",
              "lerntext": "salato",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "piccante",
              "lerntext": "piccante",
              "de": "scharf",
              "wieder": true
            },
            {
              "schrift": "buonissimo",
              "lerntext": "buonissimo",
              "de": "sehr gut",
              "wieder": true
            },
            {
              "schrift": "primo piano",
              "lerntext": "primo piano",
              "de": "erster Stock",
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
          "lerntext": "è molto [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fresco",
              "lerntext": "fresco",
              "de": "frisch",
              "wieder": true
            },
            {
              "schrift": "straniero",
              "lerntext": "straniero",
              "de": "ausländisch",
              "wieder": true
            },
            {
              "schrift": "prossimo",
              "lerntext": "prossimo",
              "de": "nächster",
              "wieder": true
            },
            {
              "schrift": "solito",
              "lerntext": "solito",
              "de": "üblich",
              "wieder": true
            },
            {
              "schrift": "bravo",
              "lerntext": "bravo",
              "de": "tüchtig",
              "wieder": true
            },
            {
              "schrift": "ultimo posto",
              "lerntext": "ultimo posto",
              "de": "letzter Platz",
              "wieder": true
            },
            {
              "schrift": "italiano",
              "lerntext": "italiano",
              "de": "italienisch",
              "wieder": true
            },
            {
              "schrift": "tedesco",
              "lerntext": "tedesco",
              "de": "deutsch",
              "wieder": true
            },
            {
              "schrift": "inglese",
              "lerntext": "inglese",
              "de": "englisch",
              "wieder": true
            },
            {
              "schrift": "scorso",
              "lerntext": "scorso",
              "de": "letzter",
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
          "lerntext": "è molto [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fresco",
              "lerntext": "fresco",
              "de": "frisch",
              "wieder": true
            },
            {
              "schrift": "straniero",
              "lerntext": "straniero",
              "de": "ausländisch",
              "wieder": true
            },
            {
              "schrift": "prossimo",
              "lerntext": "prossimo",
              "de": "nächster",
              "wieder": true
            },
            {
              "schrift": "solito",
              "lerntext": "solito",
              "de": "üblich",
              "wieder": true
            },
            {
              "schrift": "bravo",
              "lerntext": "bravo",
              "de": "tüchtig",
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
          "lerntext": "lo faccio [Slot]"
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
          "lerntext": "lo faccio [Slot]"
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
          "lerntext": "lo faccio [Slot]"
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
          "lerntext": "lo faccio [Slot]"
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
          "lerntext": "lo faccio [Slot]"
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
          "lerntext": "lo faccio [Slot]"
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
          "lerntext": "è per [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "loro",
              "lerntext": "loro",
              "de": "sie (Mehrzahl)"
            },
            {
              "schrift": "entrambi",
              "lerntext": "entrambi",
              "de": "beide"
            },
            {
              "schrift": "ne",
              "lerntext": "ne",
              "de": "davon"
            },
            {
              "schrift": "quello",
              "lerntext": "quello",
              "de": "jener"
            },
            {
              "schrift": "qualcuno",
              "lerntext": "qualcuno",
              "de": "jemand"
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
          "lerntext": "è per [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "niente",
              "lerntext": "niente",
              "de": "nichts"
            },
            {
              "schrift": "nessuno",
              "lerntext": "nessuno",
              "de": "niemand"
            },
            {
              "schrift": "altro",
              "lerntext": "altro",
              "de": "anderer"
            },
            {
              "schrift": "stesso",
              "lerntext": "stesso",
              "de": "selbe"
            },
            {
              "schrift": "ognuno",
              "lerntext": "ognuno",
              "de": "jeder"
            },
            {
              "schrift": "loro",
              "lerntext": "loro",
              "de": "sie (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "entrambi",
              "lerntext": "entrambi",
              "de": "beide",
              "wieder": true
            },
            {
              "schrift": "ne",
              "lerntext": "ne",
              "de": "davon",
              "wieder": true
            },
            {
              "schrift": "quello",
              "lerntext": "quello",
              "de": "jener",
              "wieder": true
            },
            {
              "schrift": "qualcuno",
              "lerntext": "qualcuno",
              "de": "jemand",
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
          "lerntext": "è per [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vostro",
              "lerntext": "vostro",
              "de": "euer"
            },
            {
              "schrift": "ciascuno",
              "lerntext": "ciascuno",
              "de": "jeder einzelne"
            },
            {
              "schrift": "alcuni",
              "lerntext": "alcuni",
              "de": "einige"
            },
            {
              "schrift": "niente",
              "lerntext": "niente",
              "de": "nichts",
              "wieder": true
            },
            {
              "schrift": "nessuno",
              "lerntext": "nessuno",
              "de": "niemand",
              "wieder": true
            },
            {
              "schrift": "altro",
              "lerntext": "altro",
              "de": "anderer",
              "wieder": true
            },
            {
              "schrift": "stesso",
              "lerntext": "stesso",
              "de": "selbe",
              "wieder": true
            },
            {
              "schrift": "ognuno",
              "lerntext": "ognuno",
              "de": "jeder",
              "wieder": true
            },
            {
              "schrift": "loro",
              "lerntext": "loro",
              "de": "sie (Mehrzahl)",
              "wieder": true
            },
            {
              "schrift": "entrambi",
              "lerntext": "entrambi",
              "de": "beide",
              "wieder": true
            },
            {
              "schrift": "ne",
              "lerntext": "ne",
              "de": "davon",
              "wieder": true
            },
            {
              "schrift": "quello",
              "lerntext": "quello",
              "de": "jener",
              "wieder": true
            },
            {
              "schrift": "qualcuno",
              "lerntext": "qualcuno",
              "de": "jemand",
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
          "lerntext": "è per [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vostro",
              "lerntext": "vostro",
              "de": "euer",
              "wieder": true
            },
            {
              "schrift": "ciascuno",
              "lerntext": "ciascuno",
              "de": "jeder einzelne",
              "wieder": true
            },
            {
              "schrift": "alcuni",
              "lerntext": "alcuni",
              "de": "einige",
              "wieder": true
            },
            {
              "schrift": "niente",
              "lerntext": "niente",
              "de": "nichts",
              "wieder": true
            },
            {
              "schrift": "nessuno",
              "lerntext": "nessuno",
              "de": "niemand",
              "wieder": true
            },
            {
              "schrift": "altro",
              "lerntext": "altro",
              "de": "anderer",
              "wieder": true
            },
            {
              "schrift": "stesso",
              "lerntext": "stesso",
              "de": "selbe",
              "wieder": true
            },
            {
              "schrift": "ognuno",
              "lerntext": "ognuno",
              "de": "jeder",
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
          "lerntext": "è per [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vostro",
              "lerntext": "vostro",
              "de": "euer",
              "wieder": true
            },
            {
              "schrift": "ciascuno",
              "lerntext": "ciascuno",
              "de": "jeder einzelne",
              "wieder": true
            },
            {
              "schrift": "alcuni",
              "lerntext": "alcuni",
              "de": "einige",
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
          "lerntext": "è [Slot] la casa"
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
          "lerntext": "è [Slot] la casa"
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
          "lerntext": "è [Slot] la casa"
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
          "lerntext": "vengo [Slot] posso"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pero",
              "lerntext": "pero",
              "de": "jedoch"
            },
            {
              "schrift": "oppure",
              "lerntext": "oppure",
              "de": "oder aber"
            },
            {
              "schrift": "invece",
              "lerntext": "invece",
              "de": "stattdessen"
            },
            {
              "schrift": "comunque",
              "lerntext": "comunque",
              "de": "jedenfalls"
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
          "lerntext": "vengo [Slot] posso"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pero",
              "lerntext": "pero",
              "de": "jedoch",
              "wieder": true
            },
            {
              "schrift": "oppure",
              "lerntext": "oppure",
              "de": "oder aber",
              "wieder": true
            },
            {
              "schrift": "invece",
              "lerntext": "invece",
              "de": "stattdessen",
              "wieder": true
            },
            {
              "schrift": "comunque",
              "lerntext": "comunque",
              "de": "jedenfalls",
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
          "lerntext": "vengo [Slot] posso"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pero",
              "lerntext": "pero",
              "de": "jedoch",
              "wieder": true
            },
            {
              "schrift": "oppure",
              "lerntext": "oppure",
              "de": "oder aber",
              "wieder": true
            },
            {
              "schrift": "invece",
              "lerntext": "invece",
              "de": "stattdessen",
              "wieder": true
            },
            {
              "schrift": "comunque",
              "lerntext": "comunque",
              "de": "jedenfalls",
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
          "lerntext": "[Slot] libro"
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
          "lerntext": "[Slot] libro"
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
          "lerntext": "[Slot] libro"
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
          "lerntext": "[Slot] è?"
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
          "lerntext": "io ho [Slot]"
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "guardato",
              "lerntext": "guardato",
              "de": "schauen"
            },
            {
              "schrift": "comprato",
              "lerntext": "comprato",
              "de": "kaufen"
            },
            {
              "schrift": "visto",
              "lerntext": "visto",
              "de": "sehen"
            },
            {
              "schrift": "fatto",
              "lerntext": "fatto",
              "de": "machen"
            },
            {
              "schrift": "trovato",
              "lerntext": "trovato",
              "de": "finden"
            },
            {
              "schrift": "preso",
              "lerntext": "preso",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "scritto",
              "lerntext": "scritto",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "perso",
              "lerntext": "perso",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "sentito",
              "lerntext": "sentito",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "cambiato",
              "lerntext": "cambiato",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "continuato",
              "lerntext": "continuato",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "sperato",
              "lerntext": "sperato",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "capito",
              "lerntext": "capito",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "stato",
              "lerntext": "stato",
              "de": "sein",
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
          "lerntext": "io ho [Slot]"
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "preso",
              "lerntext": "preso",
              "de": "nehmen"
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "lesen"
            },
            {
              "schrift": "scritto",
              "lerntext": "scritto",
              "de": "schreiben"
            },
            {
              "schrift": "sentito",
              "lerntext": "sentito",
              "de": "hören"
            },
            {
              "schrift": "perso",
              "lerntext": "perso",
              "de": "verlieren"
            },
            {
              "schrift": "comprato",
              "lerntext": "comprato",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "guardato",
              "lerntext": "guardato",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "visto",
              "lerntext": "visto",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "fatto",
              "lerntext": "fatto",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "trovato",
              "lerntext": "trovato",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "cambiato",
              "lerntext": "cambiato",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "potuto",
              "lerntext": "potuto",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "messo",
              "lerntext": "messo",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "ballato",
              "lerntext": "ballato",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "öffnen",
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
          "lerntext": "ieri ho [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavorato",
              "lerntext": "lavorato",
              "de": "arbeiten"
            },
            {
              "schrift": "giocato",
              "lerntext": "giocato",
              "de": "spielen"
            },
            {
              "schrift": "ballato",
              "lerntext": "ballato",
              "de": "tanzen"
            },
            {
              "schrift": "dormito",
              "lerntext": "dormito",
              "de": "schlafen"
            },
            {
              "schrift": "aspettato",
              "lerntext": "aspettato",
              "de": "warten"
            },
            {
              "schrift": "cercato",
              "lerntext": "cercato",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "chiesto",
              "lerntext": "chiesto",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "risposto",
              "lerntext": "risposto",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "aiutato",
              "lerntext": "aiutato",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "pagato",
              "lerntext": "pagato",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "pensato",
              "lerntext": "pensato",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "continuato",
              "lerntext": "continuato",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "cambiato",
              "lerntext": "cambiato",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "voluto",
              "lerntext": "voluto",
              "de": "wollen",
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
          "lerntext": "ieri ho [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercato",
              "lerntext": "cercato",
              "de": "suchen"
            },
            {
              "schrift": "chiesto",
              "lerntext": "chiesto",
              "de": "fragen"
            },
            {
              "schrift": "risposto",
              "lerntext": "risposto",
              "de": "antworten"
            },
            {
              "schrift": "aiutato",
              "lerntext": "aiutato",
              "de": "helfen"
            },
            {
              "schrift": "pagato",
              "lerntext": "pagato",
              "de": "bezahlen"
            },
            {
              "schrift": "lavorato",
              "lerntext": "lavorato",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "giocato",
              "lerntext": "giocato",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "ballato",
              "lerntext": "ballato",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "dormito",
              "lerntext": "dormito",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "aspettato",
              "lerntext": "aspettato",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "camminato",
              "lerntext": "camminato",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "saputo",
              "lerntext": "saputo",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "viaggiato",
              "lerntext": "viaggiato",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "dato",
              "lerntext": "dato",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "stato",
              "lerntext": "stato",
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
          "schrift": "ho già [Slot]",
          "lerntext": "ho già [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vinto",
              "lerntext": "vinto",
              "de": "gewinnen"
            },
            {
              "schrift": "dimenticato",
              "lerntext": "dimenticato",
              "de": "vergessen"
            },
            {
              "schrift": "capito",
              "lerntext": "capito",
              "de": "verstehen"
            },
            {
              "schrift": "incontrato",
              "lerntext": "incontrato",
              "de": "treffen"
            },
            {
              "schrift": "dato",
              "lerntext": "dato",
              "de": "geben"
            },
            {
              "schrift": "detto",
              "lerntext": "detto",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "parlato",
              "lerntext": "parlato",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "lavato",
              "lerntext": "lavato",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "servito",
              "lerntext": "servito",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "creduto",
              "lerntext": "creduto",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "riso",
              "lerntext": "riso",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "morto",
              "lerntext": "morto",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "abitato",
              "lerntext": "abitato",
              "de": "wohnen",
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
          "lerntext": "ho già [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "detto",
              "lerntext": "detto",
              "de": "sagen"
            },
            {
              "schrift": "parlato",
              "lerntext": "parlato",
              "de": "sprechen"
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "öffnen"
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "schließen"
            },
            {
              "schrift": "lavato",
              "lerntext": "lavato",
              "de": "waschen"
            },
            {
              "schrift": "vinto",
              "lerntext": "vinto",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "dimenticato",
              "lerntext": "dimenticato",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "capito",
              "lerntext": "capito",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "incontrato",
              "lerntext": "incontrato",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "dato",
              "lerntext": "dato",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "dovuto",
              "lerntext": "dovuto",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "amato",
              "lerntext": "amato",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "usato",
              "lerntext": "usato",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "guidato",
              "lerntext": "guidato",
              "de": "fahren",
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
          "lerntext": "tu [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "guardi",
              "lerntext": "guardi",
              "de": "schauen"
            },
            {
              "schrift": "compri",
              "lerntext": "compri",
              "de": "kaufen"
            },
            {
              "schrift": "vedi",
              "lerntext": "vedi",
              "de": "sehen"
            },
            {
              "schrift": "fai",
              "lerntext": "fai",
              "de": "machen"
            },
            {
              "schrift": "trovi",
              "lerntext": "trovi",
              "de": "finden"
            },
            {
              "schrift": "prendi",
              "lerntext": "prendi",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "leggi",
              "lerntext": "leggi",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "scrivi",
              "lerntext": "scrivi",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "mangi",
              "lerntext": "mangi",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "vieni",
              "lerntext": "vieni",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "bevi",
              "lerntext": "bevi",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "speri",
              "lerntext": "speri",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "vai",
              "lerntext": "vai",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "diventi",
              "lerntext": "diventi",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "piangi",
              "lerntext": "piangi",
              "de": "weinen",
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
          "lerntext": "tu [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "prendi",
              "lerntext": "prendi",
              "de": "nehmen"
            },
            {
              "schrift": "leggi",
              "lerntext": "leggi",
              "de": "lesen"
            },
            {
              "schrift": "scrivi",
              "lerntext": "scrivi",
              "de": "schreiben"
            },
            {
              "schrift": "compri",
              "lerntext": "compri",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "guardi",
              "lerntext": "guardi",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "vedi",
              "lerntext": "vedi",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "fai",
              "lerntext": "fai",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "trovi",
              "lerntext": "trovi",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "sei",
              "lerntext": "sei",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "puoi",
              "lerntext": "puoi",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "metti",
              "lerntext": "metti",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "hai",
              "lerntext": "hai",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "pensi",
              "lerntext": "pensi",
              "de": "denken",
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
          "lerntext": "lui [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavora",
              "lerntext": "lavora",
              "de": "arbeiten"
            },
            {
              "schrift": "gioca",
              "lerntext": "gioca",
              "de": "spielen"
            },
            {
              "schrift": "balla",
              "lerntext": "balla",
              "de": "tanzen"
            },
            {
              "schrift": "dorme",
              "lerntext": "dorme",
              "de": "schlafen"
            },
            {
              "schrift": "aspetta",
              "lerntext": "aspetta",
              "de": "warten"
            },
            {
              "schrift": "cerca",
              "lerntext": "cerca",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "chiede",
              "lerntext": "chiede",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "risponde",
              "lerntext": "risponde",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "continua",
              "lerntext": "continua",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "cambia",
              "lerntext": "cambia",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "vuole",
              "lerntext": "vuole",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "cammina",
              "lerntext": "cammina",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "sa",
              "lerntext": "sa",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "viaggia",
              "lerntext": "viaggia",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "sta",
              "lerntext": "sta",
              "de": "sein",
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
          "lerntext": "lui [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "lui",
            "lerntext": "lui",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cerca",
              "lerntext": "cerca",
              "de": "suchen"
            },
            {
              "schrift": "chiede",
              "lerntext": "chiede",
              "de": "fragen"
            },
            {
              "schrift": "risponde",
              "lerntext": "risponde",
              "de": "antworten"
            },
            {
              "schrift": "lavora",
              "lerntext": "lavora",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "gioca",
              "lerntext": "gioca",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "balla",
              "lerntext": "balla",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "dorme",
              "lerntext": "dorme",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "aspetta",
              "lerntext": "aspetta",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "serve",
              "lerntext": "serve",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "crede",
              "lerntext": "crede",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "ride",
              "lerntext": "ride",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "muore",
              "lerntext": "muore",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "abita",
              "lerntext": "abita",
              "de": "wohnen",
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
          "lerntext": "noi [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vinciamo",
              "lerntext": "vinciamo",
              "de": "gewinnen"
            },
            {
              "schrift": "dimentichiamo",
              "lerntext": "dimentichiamo",
              "de": "vergessen"
            },
            {
              "schrift": "capiamo",
              "lerntext": "capiamo",
              "de": "verstehen"
            },
            {
              "schrift": "incontriamo",
              "lerntext": "incontriamo",
              "de": "treffen"
            },
            {
              "schrift": "diamo",
              "lerntext": "diamo",
              "de": "geben"
            },
            {
              "schrift": "diciamo",
              "lerntext": "diciamo",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "parliamo",
              "lerntext": "parliamo",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "apriamo",
              "lerntext": "apriamo",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "dobbiamo",
              "lerntext": "dobbiamo",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "amiamo",
              "lerntext": "amiamo",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "usiamo",
              "lerntext": "usiamo",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "puliamo",
              "lerntext": "puliamo",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "guidiamo",
              "lerntext": "guidiamo",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "mangiamo",
              "lerntext": "mangiamo",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "veniamo",
              "lerntext": "veniamo",
              "de": "kommen",
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
          "lerntext": "noi [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "diciamo",
              "lerntext": "diciamo",
              "de": "sagen"
            },
            {
              "schrift": "parliamo",
              "lerntext": "parliamo",
              "de": "sprechen"
            },
            {
              "schrift": "apriamo",
              "lerntext": "apriamo",
              "de": "öffnen"
            },
            {
              "schrift": "vinciamo",
              "lerntext": "vinciamo",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "dimentichiamo",
              "lerntext": "dimentichiamo",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "capiamo",
              "lerntext": "capiamo",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "incontriamo",
              "lerntext": "incontriamo",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "diamo",
              "lerntext": "diamo",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "beviamo",
              "lerntext": "beviamo",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "speriamo",
              "lerntext": "speriamo",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "andiamo",
              "lerntext": "andiamo",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "diventiamo",
              "lerntext": "diventiamo",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "piangiamo",
              "lerntext": "piangiamo",
              "de": "weinen",
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
          "lerntext": "lei [Slot]"
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abitano",
              "lerntext": "abitano",
              "de": "wohnen"
            },
            {
              "schrift": "stanno",
              "lerntext": "stanno",
              "de": "sein"
            },
            {
              "schrift": "ridono",
              "lerntext": "ridono",
              "de": "lachen"
            },
            {
              "schrift": "piangono",
              "lerntext": "piangono",
              "de": "weinen"
            },
            {
              "schrift": "pensano",
              "lerntext": "pensano",
              "de": "denken"
            },
            {
              "schrift": "credono",
              "lerntext": "credono",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "sperano",
              "lerntext": "sperano",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "servono",
              "lerntext": "servono",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "sono",
              "lerntext": "sono",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "possono",
              "lerntext": "possono",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "mettono",
              "lerntext": "mettono",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "hanno",
              "lerntext": "hanno",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "continuano",
              "lerntext": "continuano",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "cambiano",
              "lerntext": "cambiano",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "vogliono",
              "lerntext": "vogliono",
              "de": "wollen",
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
          "lerntext": "lei [Slot]"
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "lei",
            "lerntext": "lei",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "credono",
              "lerntext": "credono",
              "de": "glauben"
            },
            {
              "schrift": "sperano",
              "lerntext": "sperano",
              "de": "hoffen"
            },
            {
              "schrift": "servono",
              "lerntext": "servono",
              "de": "dienen"
            },
            {
              "schrift": "abitano",
              "lerntext": "abitano",
              "de": "wohnen",
              "wieder": true
            },
            {
              "schrift": "stanno",
              "lerntext": "stanno",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "ridono",
              "lerntext": "ridono",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "piangono",
              "lerntext": "piangono",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "pensano",
              "lerntext": "pensano",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "camminano",
              "lerntext": "camminano",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "sanno",
              "lerntext": "sanno",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "viaggiano",
              "lerntext": "viaggiano",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "muoiono",
              "lerntext": "muoiono",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "devono",
              "lerntext": "devono",
              "de": "müssen",
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
          "lerntext": "è più [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig"
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig"
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer"
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig"
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
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
          "lerntext": "è più [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            },
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
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
          "lerntext": "sono [Slot] come te"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß"
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein"
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung"
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer"
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
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
          "lerntext": "sono [Slot] come te"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm"
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt"
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu"
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
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
          "lerntext": "io mi sento [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
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
          "lerntext": "io mi sento [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bereit"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung"
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend"
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
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
          "lerntext": "noi ci vediamo [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
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
          "lerntext": "noi ci vediamo [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
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
          "lerntext": "resto qui [Slot] sono stanco"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da"
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "wenn"
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl"
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während"
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "aber"
            },
            {
              "schrift": "o",
              "lerntext": "o",
              "de": "oder",
              "wieder": true
            },
            {
              "schrift": "e",
              "lerntext": "e",
              "de": "und",
              "wieder": true
            },
            {
              "schrift": "quindi",
              "lerntext": "quindi",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
              "de": "auch",
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
          "lerntext": "resto qui [Slot] sono stanco"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "o",
              "lerntext": "o",
              "de": "oder"
            },
            {
              "schrift": "e",
              "lerntext": "e",
              "de": "und"
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "wenn",
              "wieder": true
            },
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da",
              "wieder": true
            },
            {
              "schrift": "benche",
              "lerntext": "benche",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "aber",
              "wieder": true
            },
            {
              "schrift": "quindi",
              "lerntext": "quindi",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
              "de": "auch",
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
          "lerntext": "credo che sia [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach"
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank"
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz"
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang"
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
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
            "de": "der"
          }
        ],
        "id": "29.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "credo che sia [Slot]",
          "lerntext": "credo che sia [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach"
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz"
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend"
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
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
          "lerntext": "se ho tempo, voglio [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen"
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein"
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen"
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen"
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken"
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
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
          "lerntext": "se ho tempo, voglio [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben"
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen"
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen"
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
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
          "lerntext": "puoi [Slot], per favore?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten"
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen"
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen"
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen"
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten"
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
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
          "lerntext": "puoi [Slot], per favore?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen"
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen"
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten"
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen"
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen"
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
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
          "lerntext": "tu devi [Slot]"
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen"
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen"
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen"
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen"
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
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
          "lerntext": "tu devi [Slot]"
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen"
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen"
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen"
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben",
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
          "lerntext": "io do il libro a [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund"
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter"
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind"
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
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
          "lerntext": "io do il libro a [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau"
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend",
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
          "lerntext": "io mostro la città a [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund"
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter"
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind"
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
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
          "lerntext": "io mostro la città a [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau"
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "amico",
              "lerntext": "amico",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
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
          "lerntext": "io voglio un bicchiere di [Slot]"
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser"
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier"
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch"
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee"
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "verdura",
              "lerntext": "verdura",
              "de": "Gemüse",
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
            "de": "Glas"
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
          "lerntext": "noi abbiamo abbastanza [Slot]"
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld"
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit"
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot"
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst"
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch"
            },
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie",
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
          "lerntext": "noi abbiamo abbastanza [Slot]"
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "noi",
            "lerntext": "noi",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pesce",
              "lerntext": "pesce",
              "de": "Fisch"
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker"
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch"
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst",
              "wieder": true
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei",
              "wieder": true
            },
            {
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "nome",
              "lerntext": "nome",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein",
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
          "lerntext": "io aspetto da una [Slot]"
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ora",
              "lerntext": "ora",
              "de": "Stunde"
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute"
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche"
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht"
            },
            {
              "schrift": "via",
              "lerntext": "via",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter",
              "wieder": true
            },
            {
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung",
              "wieder": true
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür",
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
          "lerntext": "io aspetto da una [Slot]"
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag"
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend"
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "corpo",
              "lerntext": "corpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "testa",
              "lerntext": "testa",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer",
              "wieder": true
            },
            {
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse",
              "wieder": true
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg",
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
          "lerntext": "[Slot] vado a casa"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
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
          "lerntext": "[Slot] vado a casa"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
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
          "lerntext": "io vorrei [Slot]"
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen"
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein"
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen"
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen"
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken"
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
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
          "lerntext": "io vorrei [Slot]"
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben"
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen"
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen"
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen",
              "wieder": true
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "piangere",
              "lerntext": "piangere",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser"
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot"
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel"
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch"
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche"
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker",
              "wieder": true
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz",
              "wieder": true
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker"
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee"
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch"
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel",
              "wieder": true
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster",
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
          "lerntext": "io penso che sia [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß"
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein"
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung"
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun",
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
          "lerntext": "io penso che sia [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm"
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt"
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu"
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht",
              "wieder": true
            },
            {
              "schrift": "chiuso",
              "lerntext": "chiuso",
              "de": "geschlossen",
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
          "lerntext": "io lo trovo molto [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach"
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank"
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz"
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang"
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend",
              "wieder": true
            },
            {
              "schrift": "aperto",
              "lerntext": "aperto",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer",
              "wieder": true
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau",
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
          "lerntext": "io lo trovo molto [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach"
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz"
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend"
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "brutto",
              "lerntext": "brutto",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen"
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen"
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen"
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen"
            },
            {
              "schrift": "trovare",
              "lerntext": "trovare",
              "de": "finden"
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen"
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen"
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben"
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "trovare",
              "lerntext": "trovare",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
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
          "lerntext": "io voglio [Slot] presto"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten"
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen"
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen"
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen"
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten"
            },
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
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
          "lerntext": "io voglio [Slot] presto"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen"
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen"
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten"
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
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
          "lerntext": "questo è l'uomo che [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "abita",
              "lerntext": "abita",
              "de": "wohnen"
            },
            {
              "schrift": "sta",
              "lerntext": "sta",
              "de": "sein"
            },
            {
              "schrift": "ride",
              "lerntext": "ride",
              "de": "lachen"
            },
            {
              "schrift": "piange",
              "lerntext": "piange",
              "de": "weinen"
            },
            {
              "schrift": "pensa",
              "lerntext": "pensa",
              "de": "denken"
            },
            {
              "schrift": "crede",
              "lerntext": "crede",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "spera",
              "lerntext": "spera",
              "de": "hoffen",
              "wieder": true
            },
            {
              "schrift": "serve",
              "lerntext": "serve",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "viene",
              "lerntext": "viene",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "beve",
              "lerntext": "beve",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "va",
              "lerntext": "va",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "diventa",
              "lerntext": "diventa",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "può",
              "lerntext": "può",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "mette",
              "lerntext": "mette",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "chiude",
              "lerntext": "chiude",
              "de": "schließen",
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
          "lerntext": "questo è l'uomo che [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "crede",
              "lerntext": "crede",
              "de": "glauben"
            },
            {
              "schrift": "spera",
              "lerntext": "spera",
              "de": "hoffen"
            },
            {
              "schrift": "serve",
              "lerntext": "serve",
              "de": "dienen"
            },
            {
              "schrift": "abita",
              "lerntext": "abita",
              "de": "wohnen",
              "wieder": true
            },
            {
              "schrift": "sta",
              "lerntext": "sta",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "ride",
              "lerntext": "ride",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "piange",
              "lerntext": "piange",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "pensa",
              "lerntext": "pensa",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "ha",
              "lerntext": "ha",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "continua",
              "lerntext": "continua",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "cambia",
              "lerntext": "cambia",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "perde",
              "lerntext": "perde",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "vuole",
              "lerntext": "vuole",
              "de": "wollen",
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
          "lerntext": "cerco un posto dove si può [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten"
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen"
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen"
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen"
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten"
            },
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen",
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
            "de": "Platz"
          }
        ],
        "id": "37.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "cerco un posto dove si può [Slot]",
          "lerntext": "cerco un posto dove si può [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen"
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen"
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten"
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant"
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel"
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule"
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität"
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus"
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "posto",
              "lerntext": "posto",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung",
              "wieder": true
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe",
              "wieder": true
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof"
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen"
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt"
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "scuola",
              "lerntext": "scuola",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "posto",
              "lerntext": "posto",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "piede",
              "lerntext": "piede",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "occhio",
              "lerntext": "occhio",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller",
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
          "lerntext": "voglio [Slot] perché ho tempo"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen"
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen"
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen"
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen"
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen",
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
          "lerntext": "voglio [Slot] perché ho tempo"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "io",
            "lerntext": "io",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen"
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen"
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen"
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen",
              "wieder": true
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen",
              "wieder": true
            },
            {
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "perdere",
              "lerntext": "perdere",
              "de": "verlieren",
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
