// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_it.py
// Neu bauen: python bauplan.py it --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 24 Module, 150 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const ITALIAN_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
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
            "schrift": "suo",
            "lerntext": "suo",
            "de": "sein, ihr"
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
              "de": "bereit, fertig"
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
          "schrift": "noi sono [Slot]",
          "lerntext": "noi sono [Slot]"
        },
        "frameDe": "wir bin [Slot].",
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
          "schrift": "noi sono [Slot]",
          "lerntext": "noi sono [Slot]"
        },
        "frameDe": "wir bin [Slot].",
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
              "de": "stark, laut"
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
            "de": "sehr, viel"
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
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche"
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel"
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
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr"
            },
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
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung"
            }
          ]
        ],
        "newCount": 5,
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
              "de": "Telefon, Handy"
            },
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
              "schrift": "voi",
              "lerntext": "voi",
              "de": "ihr"
            },
            {
              "schrift": "donna",
              "lerntext": "donna",
              "de": "Frau"
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche"
            },
            {
              "schrift": "io",
              "lerntext": "io",
              "de": "ich"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach"
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
              "de": "Haus, Zuhause"
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer"
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche"
            },
            {
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster"
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte, Papier"
            },
            {
              "schrift": "sorella",
              "lerntext": "sorella",
              "de": "Schwester"
            },
            {
              "schrift": "stanco",
              "lerntext": "stanco",
              "de": "müde"
            },
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
              "schrift": "tu",
              "lerntext": "tu",
              "de": "du"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "hier"
          }
        ],
        "id": "2.3"
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
              "schrift": "finestra",
              "lerntext": "finestra",
              "de": "Fenster"
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer"
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus, Zuhause"
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte, Papier"
            },
            {
              "schrift": "telefono",
              "lerntext": "telefono",
              "de": "Telefon, Handy"
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
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto"
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand"
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund"
            },
            {
              "schrift": "albergo",
              "lerntext": "albergo",
              "de": "Hotel"
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch"
            },
            {
              "schrift": "bambino",
              "lerntext": "bambino",
              "de": "Kind"
            },
            {
              "schrift": "porta",
              "lerntext": "porta",
              "de": "Tür"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "avere",
            "lerntext": "avere",
            "de": "haben"
          }
        ],
        "id": "2.5"
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
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung"
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
              "schrift": "macchina",
              "lerntext": "macchina",
              "de": "Auto"
            },
            {
              "schrift": "bocca",
              "lerntext": "bocca",
              "de": "Mund"
            },
            {
              "schrift": "famiglia",
              "lerntext": "famiglia",
              "de": "Familie"
            },
            {
              "schrift": "contento",
              "lerntext": "contento",
              "de": "zufrieden"
            },
            {
              "schrift": "fratello",
              "lerntext": "fratello",
              "de": "Bruder"
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
              "schrift": "nostro",
              "lerntext": "nostro",
              "de": "unser"
            },
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
              "schrift": "appartamento",
              "lerntext": "appartamento",
              "de": "Wohnung"
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm"
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
            },
            {
              "schrift": "suo",
              "lerntext": "suo",
              "de": "sein, ihr"
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
              "schrift": "figlio",
              "lerntext": "figlio",
              "de": "Sohn"
            },
            {
              "schrift": "bello",
              "lerntext": "bello",
              "de": "schön"
            },
            {
              "schrift": "vecchio",
              "lerntext": "vecchio",
              "de": "alt"
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
              "de": "sein, ihr"
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch"
            },
            {
              "schrift": "malato",
              "lerntext": "malato",
              "de": "krank"
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett"
            },
            {
              "schrift": "studente",
              "lerntext": "studente",
              "de": "Student"
            },
            {
              "schrift": "polizia",
              "lerntext": "polizia",
              "de": "Polizei"
            },
            {
              "schrift": "cucina",
              "lerntext": "cucina",
              "de": "Küche"
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
        "id": "2.9"
      },
      {
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
        "id": "2.10"
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
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen"
            },
            {
              "schrift": "volere",
              "lerntext": "volere",
              "de": "wollen"
            },
            {
              "schrift": "di",
              "lerntext": "di",
              "de": "von"
            },
            {
              "schrift": "vi",
              "lerntext": "vi",
              "de": "euch"
            },
            {
              "schrift": "felice",
              "lerntext": "felice",
              "de": "glücklich"
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bereit, fertig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "volere",
            "lerntext": "volere",
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
              "de": "Wasser"
            },
            {
              "schrift": "caffe",
              "lerntext": "caffe",
              "de": "Kaffee"
            },
            {
              "schrift": "vino",
              "lerntext": "vino",
              "de": "Wein"
            },
            {
              "schrift": "mangiare",
              "lerntext": "mangiare",
              "de": "essen"
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch"
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
              "de": "Zeit, Wetter"
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
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse"
            },
            {
              "schrift": "zucchero",
              "lerntext": "zucchero",
              "de": "Zucker"
            },
            {
              "schrift": "servire",
              "lerntext": "servire",
              "de": "dienen, brauchen"
            },
            {
              "schrift": "latte",
              "lerntext": "latte",
              "de": "Milch"
            },
            {
              "schrift": "figlia",
              "lerntext": "figlia",
              "de": "Tochter"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "servire",
            "lerntext": "servire",
            "de": "dienen, brauchen"
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
        "frameDe": "ich möchte einen [Slot], bitte.",
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
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben"
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier"
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld"
            },
            {
              "schrift": "aiuto",
              "lerntext": "aiuto",
              "de": "Hilfe"
            },
            {
              "schrift": "pane",
              "lerntext": "pane",
              "de": "Brot"
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
        "frameDe": "ich möchte einen [Slot], bitte.",
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
              "de": "Frühstück"
            },
            {
              "schrift": "chiave",
              "lerntext": "chiave",
              "de": "Schlüssel"
            },
            {
              "schrift": "forte",
              "lerntext": "forte",
              "de": "stark, laut"
            },
            {
              "schrift": "tempo",
              "lerntext": "tempo",
              "de": "Zeit, Wetter"
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "Salz"
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
              "de": "Mittagessen"
            },
            {
              "schrift": "frutta",
              "lerntext": "frutta",
              "de": "Obst"
            },
            {
              "schrift": "bere",
              "lerntext": "bere",
              "de": "trinken"
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand"
            },
            {
              "schrift": "cena",
              "lerntext": "cena",
              "de": "Abendessen"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "mangiare",
            "lerntext": "mangiare",
            "de": "essen"
          },
          {
            "schrift": "bere",
            "lerntext": "bere",
            "de": "trinken"
          }
        ],
        "id": "3.6"
      },
      {
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
        "id": "3.7"
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
              "de": "bereit, fertig"
            },
            {
              "schrift": "certo",
              "lerntext": "certo",
              "de": "sicher"
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "nein"
            },
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
              "schrift": "si",
              "lerntext": "si",
              "de": "ja"
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
              "schrift": "certo",
              "lerntext": "certo",
              "de": "sicher"
            },
            {
              "schrift": "bicchiere",
              "lerntext": "bicchiere",
              "de": "Glas"
            },
            {
              "schrift": "arrabbiato",
              "lerntext": "arrabbiato",
              "de": "wütend"
            },
            {
              "schrift": "giovane",
              "lerntext": "giovane",
              "de": "jung"
            },
            {
              "schrift": "formaggio",
              "lerntext": "formaggio",
              "de": "Käse"
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
              "schrift": "quale",
              "lerntext": "quale",
              "de": "welcher"
            },
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
              "schrift": "male",
              "lerntext": "male",
              "de": "schlecht"
            },
            {
              "schrift": "perche",
              "lerntext": "perche",
              "de": "warum"
            },
            {
              "schrift": "bene",
              "lerntext": "bene",
              "de": "gut"
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig"
            },
            {
              "schrift": "nuovo",
              "lerntext": "nuovo",
              "de": "neu"
            }
          ]
        ],
        "newCount": 3,
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
              "schrift": "qualcosa",
              "lerntext": "qualcosa",
              "de": "etwas"
            },
            {
              "schrift": "quale",
              "lerntext": "quale",
              "de": "welcher"
            },
            {
              "schrift": "tutto",
              "lerntext": "tutto",
              "de": "alles"
            },
            {
              "schrift": "borsa",
              "lerntext": "borsa",
              "de": "Tasche"
            },
            {
              "schrift": "non",
              "lerntext": "non",
              "de": "nicht"
            }
          ]
        ],
        "newCount": 3,
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
              "de": "Bad, Toilette"
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen"
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof"
            },
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
              "schrift": "male",
              "lerntext": "male",
              "de": "schlecht"
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "5.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'è una [Slot] qui?",
          "lerntext": "c'è una [Slot] qui?"
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
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität"
            },
            {
              "schrift": "negozio",
              "lerntext": "negozio",
              "de": "Geschäft"
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad, Toilette"
            },
            {
              "schrift": "ristorante",
              "lerntext": "ristorante",
              "de": "Restaurant"
            },
            {
              "schrift": "aeroporto",
              "lerntext": "aeroporto",
              "de": "Flughafen"
            },
            {
              "schrift": "acqua",
              "lerntext": "acqua",
              "de": "Wasser"
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
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität"
            },
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
              "schrift": "perche",
              "lerntext": "perche",
              "de": "warum"
            },
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
        "id": "5.4"
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
              "de": "Weg, Straße"
            },
            {
              "schrift": "la",
              "lerntext": "la",
              "de": "die"
            },
            {
              "schrift": "ospedale",
              "lerntext": "ospedale",
              "de": "Krankenhaus"
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
              "schrift": "universita",
              "lerntext": "universita",
              "de": "Universität"
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
        "id": "5.5"
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
            "de": "zu, nach"
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
              "schrift": "sopra",
              "lerntext": "sopra",
              "de": "über"
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
              "schrift": "con",
              "lerntext": "con",
              "de": "mit"
            },
            {
              "schrift": "citta",
              "lerntext": "citta",
              "de": "Stadt"
            },
            {
              "schrift": "strada",
              "lerntext": "strada",
              "de": "Weg, Straße"
            },
            {
              "schrift": "stazione",
              "lerntext": "stazione",
              "de": "Bahnhof"
            },
            {
              "schrift": "colazione",
              "lerntext": "colazione",
              "de": "Frühstück"
            }
          ]
        ],
        "newCount": 4,
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
            "de": "zu, nach"
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
            "de": "zu, nach"
          }
        ],
        "id": "5.6"
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
            "de": "zu, nach"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "accanto",
              "lerntext": "accanto",
              "de": "neben"
            },
            {
              "schrift": "contro",
              "lerntext": "contro",
              "de": "gegen"
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
              "schrift": "con",
              "lerntext": "con",
              "de": "mit"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.7"
      },
      {
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
        "id": "5.8"
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
              "schrift": "diciannove",
              "lerntext": "diciannove",
              "de": "neunzehn"
            },
            {
              "schrift": "contro",
              "lerntext": "contro",
              "de": "gegen"
            },
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
              "schrift": "quattordici",
              "lerntext": "quattordici",
              "de": "vierzehn"
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
            "de": "sehr, viel"
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
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte, Ticket"
            },
            {
              "schrift": "venti",
              "lerntext": "venti",
              "de": "zwanzig"
            },
            {
              "schrift": "undici",
              "lerntext": "undici",
              "de": "elf"
            },
            {
              "schrift": "quindici",
              "lerntext": "quindici",
              "de": "fünfzehn"
            },
            {
              "schrift": "mille",
              "lerntext": "mille",
              "de": "tausend"
            },
            {
              "schrift": "cento",
              "lerntext": "cento",
              "de": "hundert"
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
              "de": "teuer, lieb"
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
              "schrift": "senza",
              "lerntext": "senza",
              "de": "ohne"
            },
            {
              "schrift": "sette",
              "lerntext": "sette",
              "de": "sieben"
            },
            {
              "schrift": "per",
              "lerntext": "per",
              "de": "für"
            },
            {
              "schrift": "valigia",
              "lerntext": "valigia",
              "de": "Koffer"
            },
            {
              "schrift": "diciotto",
              "lerntext": "diciotto",
              "de": "achtzehn"
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
              "de": "hoch, groß"
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig, klein"
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
              "schrift": "piccolo",
              "lerntext": "piccolo",
              "de": "klein"
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
              "schrift": "poco",
              "lerntext": "poco",
              "de": "wenig"
            },
            {
              "schrift": "cinquanta",
              "lerntext": "cinquanta",
              "de": "fünfzig"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "6.7"
      },
      {
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
        "id": "6.8"
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
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen, fahren"
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
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig, klein"
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht"
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer"
            },
            {
              "schrift": "cinque",
              "lerntext": "cinque",
              "de": "fünf"
            },
            {
              "schrift": "quaranta",
              "lerntext": "quaranta",
              "de": "vierzig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "potere",
            "lerntext": "potere",
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
              "de": "machen, tun"
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
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben"
            },
            {
              "schrift": "ballare",
              "lerntext": "ballare",
              "de": "tanzen"
            },
            {
              "schrift": "biglietto",
              "lerntext": "biglietto",
              "de": "Fahrkarte, Ticket"
            },
            {
              "schrift": "settanta",
              "lerntext": "settanta",
              "de": "siebzig"
            },
            {
              "schrift": "lungo",
              "lerntext": "lungo",
              "de": "lang"
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
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen, tun"
            },
            {
              "schrift": "andare",
              "lerntext": "andare",
              "de": "gehen, fahren"
            },
            {
              "schrift": "dovere",
              "lerntext": "dovere",
              "de": "müssen"
            },
            {
              "schrift": "ottanta",
              "lerntext": "ottanta",
              "de": "achtzig"
            },
            {
              "schrift": "leggere",
              "lerntext": "leggere",
              "de": "lesen"
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
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen"
            },
            {
              "schrift": "pagare",
              "lerntext": "pagare",
              "de": "bezahlen"
            },
            {
              "schrift": "lavorare",
              "lerntext": "lavorare",
              "de": "arbeiten"
            },
            {
              "schrift": "lavare",
              "lerntext": "lavare",
              "de": "waschen"
            },
            {
              "schrift": "aspettare",
              "lerntext": "aspettare",
              "de": "warten"
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
              "schrift": "caro",
              "lerntext": "caro",
              "de": "teuer, lieb"
            },
            {
              "schrift": "sedici",
              "lerntext": "sedici",
              "de": "sechzehn"
            },
            {
              "schrift": "nove",
              "lerntext": "nove",
              "de": "neun"
            },
            {
              "schrift": "usare",
              "lerntext": "usare",
              "de": "benutzen"
            },
            {
              "schrift": "giocare",
              "lerntext": "giocare",
              "de": "spielen"
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
              "de": "hören, fühlen"
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen"
            },
            {
              "schrift": "rispondere",
              "lerntext": "rispondere",
              "de": "antworten"
            },
            {
              "schrift": "chiedere",
              "lerntext": "chiedere",
              "de": "fragen"
            },
            {
              "schrift": "guardare",
              "lerntext": "guardare",
              "de": "schauen"
            },
            {
              "schrift": "otto",
              "lerntext": "otto",
              "de": "acht"
            },
            {
              "schrift": "quattro",
              "lerntext": "quattro",
              "de": "vier"
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
              "de": "sein, bleiben"
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen"
            },
            {
              "schrift": "incontrare",
              "lerntext": "incontrare",
              "de": "treffen"
            },
            {
              "schrift": "sessanta",
              "lerntext": "sessanta",
              "de": "sechzig"
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
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein, bleiben"
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen"
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
              "schrift": "diciassette",
              "lerntext": "diciassette",
              "de": "siebzehn"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.8"
      },
      {
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
        "id": "7.9"
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
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen"
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen"
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben"
            },
            {
              "schrift": "venire",
              "lerntext": "venire",
              "de": "kommen"
            },
            {
              "schrift": "chiudere",
              "lerntext": "chiudere",
              "de": "schließen"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "andare",
            "lerntext": "andare",
            "de": "gehen, fahren"
          },
          {
            "schrift": "venire",
            "lerntext": "venire",
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
              "de": "Weg, Straße"
            },
            {
              "schrift": "viaggiare",
              "lerntext": "viaggiare",
              "de": "reisen"
            },
            {
              "schrift": "pulire",
              "lerntext": "pulire",
              "de": "putzen"
            },
            {
              "schrift": "corto",
              "lerntext": "corto",
              "de": "kurz"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß"
            },
            {
              "schrift": "sentire",
              "lerntext": "sentire",
              "de": "hören, fühlen"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "viaggiare",
            "lerntext": "viaggiare",
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
              "de": "laufen, gehen"
            },
            {
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen"
            },
            {
              "schrift": "vivere",
              "lerntext": "vivere",
              "de": "leben"
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen, legen"
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus"
            },
            {
              "schrift": "ci",
              "lerntext": "ci",
              "de": "uns"
            },
            {
              "schrift": "treno",
              "lerntext": "treno",
              "de": "Zug"
            },
            {
              "schrift": "aiutare",
              "lerntext": "aiutare",
              "de": "helfen"
            },
            {
              "schrift": "dimenticare",
              "lerntext": "dimenticare",
              "de": "vergessen"
            }
          ]
        ],
        "newCount": 4,
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
            "de": "jetzt, sofort"
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
              "de": "jetzt, sofort"
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh, bald"
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
              "schrift": "oggi",
              "lerntext": "oggi",
              "de": "heute"
            },
            {
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann"
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen, legen"
            },
            {
              "schrift": "anche",
              "lerntext": "anche",
              "de": "auch"
            },
            {
              "schrift": "sempre",
              "lerntext": "sempre",
              "de": "immer"
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
              "de": "Stunde, Uhrzeit"
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
              "schrift": "abitare",
              "lerntext": "abitare",
              "de": "wohnen"
            },
            {
              "schrift": "camminare",
              "lerntext": "camminare",
              "de": "laufen, gehen"
            },
            {
              "schrift": "spesso",
              "lerntext": "spesso",
              "de": "oft"
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
              "de": "Stunde, Uhrzeit"
            },
            {
              "schrift": "ieri",
              "lerntext": "ieri",
              "de": "gestern"
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "nie"
            },
            {
              "schrift": "sera",
              "lerntext": "sera",
              "de": "Abend"
            },
            {
              "schrift": "vivere",
              "lerntext": "vivere",
              "de": "leben"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "9.4"
      },
      {
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
        "id": "9.5"
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
              "de": "Zeit, Wetter"
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg"
            },
            {
              "schrift": "amare",
              "lerntext": "amare",
              "de": "lieben"
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute"
            },
            {
              "schrift": "gia",
              "lerntext": "gia",
              "de": "schon"
            },
            {
              "schrift": "presto",
              "lerntext": "presto",
              "de": "früh, bald"
            },
            {
              "schrift": "giorno",
              "lerntext": "giorno",
              "de": "Tag"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "amare",
            "lerntext": "amare",
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
              "schrift": "vento",
              "lerntext": "vento",
              "de": "Wind"
            },
            {
              "schrift": "sole",
              "lerntext": "sole",
              "de": "Sonne"
            },
            {
              "schrift": "montagna",
              "lerntext": "montagna",
              "de": "Berg"
            },
            {
              "schrift": "pioggia",
              "lerntext": "pioggia",
              "de": "Regen"
            },
            {
              "schrift": "tre",
              "lerntext": "tre",
              "de": "drei"
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
              "de": "mir, mich"
            },
            {
              "schrift": "ti",
              "lerntext": "ti",
              "de": "dir, dich"
            },
            {
              "schrift": "lei",
              "lerntext": "lei",
              "de": "sie"
            },
            {
              "schrift": "ci",
              "lerntext": "ci",
              "de": "uns"
            },
            {
              "schrift": "cibo",
              "lerntext": "cibo",
              "de": "Essen"
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer"
            },
            {
              "schrift": "trovare",
              "lerntext": "trovare",
              "de": "finden"
            },
            {
              "schrift": "il",
              "lerntext": "il",
              "de": "der"
            },
            {
              "schrift": "novanta",
              "lerntext": "novanta",
              "de": "neunzig"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "trovare",
            "lerntext": "trovare",
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
              "schrift": "mi",
              "lerntext": "mi",
              "de": "mir, mich"
            },
            {
              "schrift": "ti",
              "lerntext": "ti",
              "de": "dir, dich"
            },
            {
              "schrift": "potere",
              "lerntext": "potere",
              "de": "können"
            },
            {
              "schrift": "alto",
              "lerntext": "alto",
              "de": "hoch, groß"
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur"
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
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau"
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot"
            },
            {
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz"
            },
            {
              "schrift": "verde",
              "lerntext": "verde",
              "de": "grün"
            },
            {
              "schrift": "giallo",
              "lerntext": "giallo",
              "de": "gelb"
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
              "de": "warm, heiß"
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
              "de": "braun"
            },
            {
              "schrift": "grigio",
              "lerntext": "grigio",
              "de": "grau"
            },
            {
              "schrift": "bianco",
              "lerntext": "bianco",
              "de": "weiß"
            },
            {
              "schrift": "due",
              "lerntext": "due",
              "de": "zwei"
            },
            {
              "schrift": "dieci",
              "lerntext": "dieci",
              "de": "zehn"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
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
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm, heiß"
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber"
            },
            {
              "schrift": "dolce",
              "lerntext": "dolce",
              "de": "süß"
            },
            {
              "schrift": "sporco",
              "lerntext": "sporco",
              "de": "schmutzig"
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
              "schrift": "diventare",
              "lerntext": "diventare",
              "de": "werden"
            },
            {
              "schrift": "parlare",
              "lerntext": "parlare",
              "de": "sprechen"
            },
            {
              "schrift": "insieme",
              "lerntext": "insieme",
              "de": "zusammen"
            },
            {
              "schrift": "vedere",
              "lerntext": "vedere",
              "de": "sehen"
            },
            {
              "schrift": "oggi",
              "lerntext": "oggi",
              "de": "heute"
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
              "de": "wissen, können"
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
              "de": "hören, fühlen"
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen"
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen"
            },
            {
              "schrift": "dare",
              "lerntext": "dare",
              "de": "geben"
            },
            {
              "schrift": "lavoro",
              "lerntext": "lavoro",
              "de": "Arbeit"
            },
            {
              "schrift": "vincere",
              "lerntext": "vincere",
              "de": "gewinnen"
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
              "de": "bereit, fertig"
            },
            {
              "schrift": "certo",
              "lerntext": "certo",
              "de": "sicher"
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben"
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen, können"
            },
            {
              "schrift": "cercare",
              "lerntext": "cercare",
              "de": "suchen"
            },
            {
              "schrift": "pensare",
              "lerntext": "pensare",
              "de": "denken"
            },
            {
              "schrift": "mare",
              "lerntext": "mare",
              "de": "Meer"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "diventare",
            "lerntext": "diventare",
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
              "de": "da, weil"
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
              "schrift": "quindi",
              "lerntext": "quindi",
              "de": "also"
            },
            {
              "schrift": "freddo",
              "lerntext": "freddo",
              "de": "kalt"
            },
            {
              "schrift": "diciannove",
              "lerntext": "diciannove",
              "de": "neunzehn"
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
              "schrift": "forse",
              "lerntext": "forse",
              "de": "vielleicht"
            },
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da, weil"
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
              "schrift": "allora",
              "lerntext": "allora",
              "de": "dann"
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
              "schrift": "forse",
              "lerntext": "forse",
              "de": "vielleicht"
            },
            {
              "schrift": "siccome",
              "lerntext": "siccome",
              "de": "da, weil"
            },
            {
              "schrift": "mentre",
              "lerntext": "mentre",
              "de": "während"
            },
            {
              "schrift": "senza",
              "lerntext": "senza",
              "de": "ohne"
            },
            {
              "schrift": "basso",
              "lerntext": "basso",
              "de": "niedrig, klein"
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
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen"
            },
            {
              "schrift": "sperare",
              "lerntext": "sperare",
              "de": "hoffen"
            },
            {
              "schrift": "continuare",
              "lerntext": "continuare",
              "de": "fortsetzen"
            },
            {
              "schrift": "blu",
              "lerntext": "blu",
              "de": "blau"
            },
            {
              "schrift": "contro",
              "lerntext": "contro",
              "de": "gegen"
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
              "schrift": "giusto",
              "lerntext": "giusto",
              "de": "richtig"
            },
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig"
            },
            {
              "schrift": "velocemente",
              "lerntext": "velocemente",
              "de": "schnell"
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach"
            },
            {
              "schrift": "falso",
              "lerntext": "falso",
              "de": "falsch"
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
              "de": "ändern, wechseln"
            },
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
              "schrift": "zero",
              "lerntext": "zero",
              "de": "null"
            },
            {
              "schrift": "caldo",
              "lerntext": "caldo",
              "de": "warm, heiß"
            },
            {
              "schrift": "dietro",
              "lerntext": "dietro",
              "de": "hinter"
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
              "schrift": "cambiare",
              "lerntext": "cambiare",
              "de": "ändern, wechseln"
            },
            {
              "schrift": "uno",
              "lerntext": "uno",
              "de": "eins"
            },
            {
              "schrift": "mettere",
              "lerntext": "mettere",
              "de": "setzen, legen"
            },
            {
              "schrift": "marrone",
              "lerntext": "marrone",
              "de": "braun"
            },
            {
              "schrift": "pulito",
              "lerntext": "pulito",
              "de": "sauber"
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
              "de": "Kopf"
            },
            {
              "schrift": "quattordici",
              "lerntext": "quattordici",
              "de": "vierzehn"
            },
            {
              "schrift": "capire",
              "lerntext": "capire",
              "de": "verstehen"
            },
            {
              "schrift": "aprire",
              "lerntext": "aprire",
              "de": "öffnen"
            },
            {
              "schrift": "letto",
              "lerntext": "letto",
              "de": "Bett"
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
              "de": "Auge"
            },
            {
              "schrift": "settimana",
              "lerntext": "settimana",
              "de": "Woche"
            },
            {
              "schrift": "autobus",
              "lerntext": "autobus",
              "de": "Bus"
            },
            {
              "schrift": "venti",
              "lerntext": "venti",
              "de": "zwanzig"
            },
            {
              "schrift": "leggero",
              "lerntext": "leggero",
              "de": "leicht"
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
              "de": "Teller, Gericht"
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein"
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch"
            },
            {
              "schrift": "no",
              "lerntext": "no",
              "de": "nein"
            },
            {
              "schrift": "undici",
              "lerntext": "undici",
              "de": "elf"
            },
            {
              "schrift": "carne",
              "lerntext": "carne",
              "de": "Fleisch"
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
              "de": "Teller, Gericht"
            },
            {
              "schrift": "stare",
              "lerntext": "stare",
              "de": "sein, bleiben"
            },
            {
              "schrift": "quindici",
              "lerntext": "quindici",
              "de": "fünfzehn"
            },
            {
              "schrift": "notte",
              "lerntext": "notte",
              "de": "Nacht"
            },
            {
              "schrift": "scrivere",
              "lerntext": "scrivere",
              "de": "schreiben"
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
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vestito",
              "lerntext": "vestito",
              "de": "Kleid, Anzug"
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh"
            },
            {
              "schrift": "piatto",
              "lerntext": "piatto",
              "de": "Teller, Gericht"
            },
            {
              "schrift": "credere",
              "lerntext": "credere",
              "de": "glauben"
            },
            {
              "schrift": "avere",
              "lerntext": "avere",
              "de": "haben"
            },
            {
              "schrift": "birra",
              "lerntext": "birra",
              "de": "Bier"
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
              "de": "Kleid, Anzug"
            },
            {
              "schrift": "scarpa",
              "lerntext": "scarpa",
              "de": "Schuh"
            },
            {
              "schrift": "dormire",
              "lerntext": "dormire",
              "de": "schlafen"
            },
            {
              "schrift": "rosso",
              "lerntext": "rosso",
              "de": "rot"
            },
            {
              "schrift": "morire",
              "lerntext": "morire",
              "de": "sterben"
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
              "de": "Name"
            },
            {
              "schrift": "pranzo",
              "lerntext": "pranzo",
              "de": "Mittagessen"
            },
            {
              "schrift": "mille",
              "lerntext": "mille",
              "de": "tausend"
            },
            {
              "schrift": "cento",
              "lerntext": "cento",
              "de": "hundert"
            },
            {
              "schrift": "soldi",
              "lerntext": "soldi",
              "de": "Geld"
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
              "de": "Name"
            },
            {
              "schrift": "troppo",
              "lerntext": "troppo",
              "de": "zu viel"
            },
            {
              "schrift": "debole",
              "lerntext": "debole",
              "de": "schwach"
            },
            {
              "schrift": "pesante",
              "lerntext": "pesante",
              "de": "schwer"
            },
            {
              "schrift": "sapere",
              "lerntext": "sapere",
              "de": "wissen, können"
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
              "de": "Antwort"
            },
            {
              "schrift": "sette",
              "lerntext": "sette",
              "de": "sieben"
            },
            {
              "schrift": "comprare",
              "lerntext": "comprare",
              "de": "kaufen"
            },
            {
              "schrift": "ridere",
              "lerntext": "ridere",
              "de": "lachen"
            },
            {
              "schrift": "prendere",
              "lerntext": "prendere",
              "de": "nehmen"
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
              "de": "Haus, Zuhause"
            },
            {
              "schrift": "camera",
              "lerntext": "camera",
              "de": "Zimmer"
            },
            {
              "schrift": "esame",
              "lerntext": "esame",
              "de": "Prüfung"
            },
            {
              "schrift": "risposta",
              "lerntext": "risposta",
              "de": "Antwort"
            },
            {
              "schrift": "braccio",
              "lerntext": "braccio",
              "de": "Arm"
            },
            {
              "schrift": "per",
              "lerntext": "per",
              "de": "für"
            },
            {
              "schrift": "tavolo",
              "lerntext": "tavolo",
              "de": "Tisch"
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
              "schrift": "nero",
              "lerntext": "nero",
              "de": "schwarz"
            },
            {
              "schrift": "gamba",
              "lerntext": "gamba",
              "de": "Bein"
            },
            {
              "schrift": "carta",
              "lerntext": "carta",
              "de": "Karte, Papier"
            },
            {
              "schrift": "bagno",
              "lerntext": "bagno",
              "de": "Bad, Toilette"
            },
            {
              "schrift": "fare",
              "lerntext": "fare",
              "de": "machen, tun"
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
    "lessons": [
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
              "de": "Mann, Mensch"
            },
            {
              "schrift": "ragazzo",
              "lerntext": "ragazzo",
              "de": "Junge, fester Freund"
            },
            {
              "schrift": "persona",
              "lerntext": "persona",
              "de": "Person"
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute"
            },
            {
              "schrift": "marito",
              "lerntext": "marito",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "moglie",
              "lerntext": "moglie",
              "de": "Ehefrau"
            },
            {
              "schrift": "anno",
              "lerntext": "anno",
              "de": "Jahr"
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
            },
            {
              "schrift": "pomeriggio",
              "lerntext": "pomeriggio",
              "de": "Nachmittag"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "paese",
              "lerntext": "paese",
              "de": "Dorf, Land"
            },
            {
              "schrift": "piazza",
              "lerntext": "piazza",
              "de": "Platz"
            },
            {
              "schrift": "posto",
              "lerntext": "posto",
              "de": "Platz, Ort"
            },
            {
              "schrift": "mercato",
              "lerntext": "mercato",
              "de": "Markt"
            },
            {
              "schrift": "bar",
              "lerntext": "bar",
              "de": "Bar, Cafe"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "farmacia",
              "lerntext": "farmacia",
              "de": "Apotheke"
            },
            {
              "schrift": "passaporto",
              "lerntext": "passaporto",
              "de": "Pass"
            },
            {
              "schrift": "ragazza",
              "lerntext": "ragazza",
              "de": "Mädchen, feste Freundin"
            },
            {
              "schrift": "prezzo",
              "lerntext": "prezzo",
              "de": "Preis"
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
        "id": "15.4"
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
              "schrift": "lezione",
              "lerntext": "lezione",
              "de": "Vorlesung, Unterricht"
            },
            {
              "schrift": "parola",
              "lerntext": "parola",
              "de": "Wort"
            },
            {
              "schrift": "lingua",
              "lerntext": "lingua",
              "de": "Sprache, Zunge"
            },
            {
              "schrift": "domanda",
              "lerntext": "domanda",
              "de": "Frage"
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
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment, Augenblick"
            },
            {
              "schrift": "pasta",
              "lerntext": "pasta",
              "de": "Nudeln, Teig"
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
              "schrift": "bottiglia",
              "lerntext": "bottiglia",
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "capelli",
              "lerntext": "capelli",
              "de": "Haare"
            },
            {
              "schrift": "medico",
              "lerntext": "medico",
              "de": "Arzt"
            },
            {
              "schrift": "medicina",
              "lerntext": "medicina",
              "de": "Medizin"
            },
            {
              "schrift": "dolore",
              "lerntext": "dolore",
              "de": "Schmerz"
            },
            {
              "schrift": "febbre",
              "lerntext": "febbre",
              "de": "Fieber"
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
              "schrift": "numero",
              "lerntext": "numero",
              "de": "Nummer, Zahl"
            },
            {
              "schrift": "musica",
              "lerntext": "musica",
              "de": "Musik"
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film"
            },
            {
              "schrift": "festa",
              "lerntext": "festa",
              "de": "Fest, Party"
            },
            {
              "schrift": "vita",
              "lerntext": "vita",
              "de": "Leben"
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
              "schrift": "mondo",
              "lerntext": "mondo",
              "de": "Welt"
            },
            {
              "schrift": "aria",
              "lerntext": "aria",
              "de": "Luft"
            },
            {
              "schrift": "fuoco",
              "lerntext": "fuoco",
              "de": "Feuer"
            },
            {
              "schrift": "cane",
              "lerntext": "cane",
              "de": "Hund"
            },
            {
              "schrift": "gatto",
              "lerntext": "gatto",
              "de": "Katze"
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
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk"
            },
            {
              "schrift": "amore",
              "lerntext": "amore",
              "de": "Liebe"
            },
            {
              "schrift": "parte",
              "lerntext": "parte",
              "de": "Teil"
            },
            {
              "schrift": "fine",
              "lerntext": "fine",
              "de": "Ende"
            },
            {
              "schrift": "inizio",
              "lerntext": "inizio",
              "de": "Anfang"
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
              "schrift": "modo",
              "lerntext": "modo",
              "de": "Art, Weise"
            },
            {
              "schrift": "motivo",
              "lerntext": "motivo",
              "de": "Grund"
            },
            {
              "schrift": "esempio",
              "lerntext": "esempio",
              "de": "Beispiel"
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee"
            },
            {
              "schrift": "storia",
              "lerntext": "storia",
              "de": "Geschichte"
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
          "schrift": "ecco il [Slot]",
          "lerntext": "ecco il [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "paura",
              "lerntext": "paura",
              "de": "Angst"
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
              "schrift": "sonno",
              "lerntext": "sonno",
              "de": "Schlaf"
            },
            {
              "schrift": "sconto",
              "lerntext": "sconto",
              "de": "Rabatt"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ingresso",
              "lerntext": "ingresso",
              "de": "Eintritt, Eingang"
            },
            {
              "schrift": "uscita",
              "lerntext": "uscita",
              "de": "Ausgang"
            },
            {
              "schrift": "documento",
              "lerntext": "documento",
              "de": "Dokument"
            },
            {
              "schrift": "lavoratore",
              "lerntext": "lavoratore",
              "de": "Arbeiter"
            },
            {
              "schrift": "cliente",
              "lerntext": "cliente",
              "de": "Kunde"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "turno",
              "lerntext": "turno",
              "de": "Schicht"
            },
            {
              "schrift": "taglia",
              "lerntext": "taglia",
              "de": "Kleidergrösse"
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
          "schrift": "voglio [Slot]",
          "lerntext": "voglio [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "essere",
              "lerntext": "essere",
              "de": "sein"
            },
            {
              "schrift": "chiamare",
              "lerntext": "chiamare",
              "de": "rufen, nennen"
            },
            {
              "schrift": "costare",
              "lerntext": "costare",
              "de": "kosten"
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
              "schrift": "uscire",
              "lerntext": "uscire",
              "de": "hinausgehen"
            },
            {
              "schrift": "entrare",
              "lerntext": "entrare",
              "de": "hineingehen"
            },
            {
              "schrift": "restare",
              "lerntext": "restare",
              "de": "bleiben"
            },
            {
              "schrift": "portare",
              "lerntext": "portare",
              "de": "bringen, tragen"
            },
            {
              "schrift": "piacere",
              "lerntext": "piacere",
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
              "schrift": "studiare",
              "lerntext": "studiare",
              "de": "studieren, lernen"
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
              "schrift": "cominciare",
              "lerntext": "cominciare",
              "de": "anfangen"
            },
            {
              "schrift": "finire",
              "lerntext": "finire",
              "de": "beenden"
            },
            {
              "schrift": "provare",
              "lerntext": "provare",
              "de": "versuchen, probieren"
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
              "schrift": "correre",
              "lerntext": "correre",
              "de": "rennen"
            },
            {
              "schrift": "guidare",
              "lerntext": "guidare",
              "de": "fahren, lenken"
            },
            {
              "schrift": "visitare",
              "lerntext": "visitare",
              "de": "besuchen"
            },
            {
              "schrift": "conoscersi",
              "lerntext": "conoscersi",
              "de": "sich kennenlernen"
            },
            {
              "schrift": "sposare",
              "lerntext": "sposare",
              "de": "heiraten"
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
              "schrift": "nascere",
              "lerntext": "nascere",
              "de": "geboren werden"
            },
            {
              "schrift": "sembrare",
              "lerntext": "sembrare",
              "de": "scheinen"
            },
            {
              "schrift": "succedere",
              "lerntext": "succedere",
              "de": "geschehen"
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
              "schrift": "firmare",
              "lerntext": "firmare",
              "de": "unterschreiben"
            },
            {
              "schrift": "cucinare",
              "lerntext": "cucinare",
              "de": "kochen"
            },
            {
              "schrift": "dispiacere",
              "lerntext": "dispiacere",
              "de": "leidtun"
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
              "schrift": "tornare",
              "lerntext": "tornare",
              "de": "zurückkehren"
            },
            {
              "schrift": "bisognare",
              "lerntext": "bisognare",
              "de": "nötig sein"
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
              "schrift": "salutare",
              "lerntext": "salutare",
              "de": "grüßen"
            }
          ]
        ],
        "newCount": 1,
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
              "de": "schlecht, böse"
            },
            {
              "schrift": "possibile",
              "lerntext": "possibile",
              "de": "möglich"
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
              "de": "letzter, vergangener"
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
              "de": "frisch, kühl"
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
              "de": "tüchtig, gut"
            }
          ]
        ],
        "newCount": 5,
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
          "schrift": "lo faccio [Slot]",
          "lerntext": "lo faccio [Slot]"
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "piu",
              "lerntext": "piu",
              "de": "mehr"
            },
            {
              "schrift": "meno",
              "lerntext": "meno",
              "de": "weniger"
            },
            {
              "schrift": "poi",
              "lerntext": "poi",
              "de": "dann, danach"
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
              "schrift": "abbastanza",
              "lerntext": "abbastanza",
              "de": "genug"
            },
            {
              "schrift": "quasi",
              "lerntext": "quasi",
              "de": "fast"
            },
            {
              "schrift": "proprio",
              "lerntext": "proprio",
              "de": "genau, gerade"
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
              "schrift": "sicuramente",
              "lerntext": "sicuramente",
              "de": "bestimmt"
            },
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
              "schrift": "soprattutto",
              "lerntext": "soprattutto",
              "de": "vor allem"
            },
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
              "schrift": "veramente",
              "lerntext": "veramente",
              "de": "tatsächlich"
            },
            {
              "schrift": "dopodomani",
              "lerntext": "dopodomani",
              "de": "übermorgen"
            }
          ]
        ],
        "newCount": 2,
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
              "schrift": "che",
              "lerntext": "che",
              "de": "der, die, das"
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
              "schrift": "qualcuno",
              "lerntext": "qualcuno",
              "de": "jemand"
            },
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
              "schrift": "ognuno",
              "lerntext": "ognuno",
              "de": "jeder"
            },
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
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "19.3"
      },
      {
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
        "id": "19.4"
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
          "schrift": "è [Slot] la casa",
          "lerntext": "è [Slot] la casa"
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "da",
              "lerntext": "da",
              "de": "von, seit"
            },
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
              "schrift": "davanti",
              "lerntext": "davanti",
              "de": "vor, gegenüber"
            },
            {
              "schrift": "fuori",
              "lerntext": "fuori",
              "de": "draußen"
            },
            {
              "schrift": "durante",
              "lerntext": "durante",
              "de": "während"
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
    "title": "Artikel",
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
              "schrift": "un",
              "lerntext": "un",
              "de": "ein"
            },
            {
              "schrift": "una",
              "lerntext": "una",
              "de": "eine"
            },
            {
              "schrift": "lo",
              "lerntext": "lo",
              "de": "der (vor s+Konsonant)"
            },
            {
              "schrift": "gli",
              "lerntext": "gli",
              "de": "die (Mehrzahl, vor Vokal)"
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
          "schrift": "[Slot] libro",
          "lerntext": "[Slot] libro"
        },
        "frameDe": "[Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "i",
              "lerntext": "i",
              "de": "die (Mehrzahl, männlich)"
            }
          ]
        ],
        "newCount": 1,
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
    "title": "Weitere Bindewörter",
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
              "schrift": "se",
              "lerntext": "se",
              "de": "wenn"
            },
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
        "newCount": 5,
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
    "title": "Weitere Fragewörter",
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
              "schrift": "chissa",
              "lerntext": "chissa",
              "de": "wer weiß"
            }
          ]
        ],
        "newCount": 1,
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
  }
];
