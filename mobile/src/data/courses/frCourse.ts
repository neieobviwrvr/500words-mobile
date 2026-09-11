// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_fr.py
// Neu bauen: python bauplan.py fr --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 38 Module, 279 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const FRENCH_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "je suis [Slot]",
          "lerntext": "je suis [Slot]",
          "wortarten": {
            "je": "p",
            "suis": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
              "c": "a"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "suis",
            "lerntext": "suis",
            "de": "sein",
            "c": "v"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nous sommes [Slot]",
          "lerntext": "nous sommes [Slot]",
          "wortarten": {
            "nous": "p",
            "sommes": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "man",
            "c": "p"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
              "c": "n"
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "c": "n"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "1.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "il est très [Slot]",
          "lerntext": "il est très [Slot]",
          "wortarten": {
            "il": "p",
            "est": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "c": "a"
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "très",
            "lerntext": "très",
            "de": "sehr"
          }
        ],
        "id": "1.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "il est très [Slot]",
          "lerntext": "il est très [Slot]",
          "wortarten": {
            "il": "p",
            "est": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
              "c": "a"
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
          "schrift": "il est très [Slot]",
          "lerntext": "il est très [Slot]",
          "wortarten": {
            "il": "p",
            "est": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "1.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nous sommes [Slot]",
          "lerntext": "nous sommes [Slot]",
          "wortarten": {
            "nous": "p",
            "sommes": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "man",
            "c": "p"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "c": "n",
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
          "schrift": "il est très [Slot]",
          "lerntext": "il est très [Slot]",
          "wortarten": {
            "il": "p",
            "est": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
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
          "schrift": "nous sommes [Slot]",
          "lerntext": "nous sommes [Slot]",
          "wortarten": {
            "nous": "p",
            "sommes": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "man",
            "c": "p"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
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
        "id": "1.9"
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
          "schrift": "c'est une [Slot]",
          "lerntext": "c'est une [Slot]"
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "c": "n"
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est une [Slot]",
          "lerntext": "c'est une [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "c": "n"
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
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
          "schrift": "c'est un [Slot]",
          "lerntext": "c'est un [Slot]"
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est un [Slot]",
          "lerntext": "c'est un [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
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
          "schrift": "c'est un [Slot]",
          "lerntext": "c'est un [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "c": "n"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "il y a une [Slot]",
          "lerntext": "il y a une [Slot]",
          "wortarten": {
            "il": "p",
            "a": "v"
          }
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "dorthin",
            "c": "p"
          }
        ],
        "id": "2.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "il y a une [Slot]",
          "lerntext": "il y a une [Slot]",
          "wortarten": {
            "il": "p",
            "a": "v"
          }
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "il y a un [Slot]",
          "lerntext": "il y a un [Slot]",
          "wortarten": {
            "il": "p",
            "a": "v"
          }
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "c": "n"
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "c": "n"
            },
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
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
          "schrift": "je ai une [Slot]",
          "lerntext": "je ai une [Slot]",
          "wortarten": {
            "je": "p",
            "ai": "v"
          }
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "c": "n"
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "c": "n"
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ai",
            "lerntext": "ai",
            "de": "haben",
            "c": "v"
          }
        ],
        "id": "2.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je ai une [Slot]",
          "lerntext": "je ai une [Slot]",
          "wortarten": {
            "je": "p",
            "ai": "v"
          }
        },
        "frameDe": "ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "c": "n"
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "2.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je ai un [Slot]",
          "lerntext": "je ai un [Slot]",
          "wortarten": {
            "je": "p",
            "ai": "v"
          }
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "c": "n"
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
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
          "schrift": "c'est mon [Slot]",
          "lerntext": "c'est mon [Slot]",
          "wortarten": {
            "mon": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "ton",
            "lerntext": "ton",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "notre",
            "lerntext": "notre",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est [Slot] maison",
          "lerntext": "c'est [Slot] maison",
          "wortarten": {
            "maison": "n"
          }
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "ton",
            "lerntext": "ton",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "notre",
            "lerntext": "notre",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
              "c": "v"
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.13"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ce sont [Slot] livres",
          "lerntext": "ce sont [Slot] livres",
          "wortarten": {
            "ce": "p",
            "sont": "v"
          }
        },
        "frameDe": "Das sind [Slot] Bücher.",
        "pronouns": [
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "meine",
            "c": "p"
          },
          {
            "schrift": "ta",
            "lerntext": "ta",
            "de": "deine",
            "c": "p"
          },
          {
            "schrift": "nos",
            "lerntext": "nos",
            "de": "unsere",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese",
              "c": "p"
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "man",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "je",
              "lerntext": "je",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nous",
              "lerntext": "nous",
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
              "schrift": "notre",
              "lerntext": "notre",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ton",
              "lerntext": "ton",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mon",
              "lerntext": "mon",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vous",
              "lerntext": "vous",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "y",
              "lerntext": "y",
              "de": "dorthin",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "il",
              "lerntext": "il",
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
            "schrift": "ce",
            "lerntext": "ce",
            "de": "dieser",
            "c": "p"
          }
        ],
        "id": "2.14"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] est ici",
          "lerntext": "[Slot] est ici",
          "wortarten": {
            "est": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ce",
              "lerntext": "ce",
              "de": "dieser",
              "c": "p"
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
              "c": "v"
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "meine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "man",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "je",
              "lerntext": "je",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nous",
              "lerntext": "nous",
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
              "schrift": "notre",
              "lerntext": "notre",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ton",
              "lerntext": "ton",
              "de": "dein",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ici",
            "lerntext": "ici",
            "de": "hier"
          }
        ],
        "id": "2.15"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est mon [Slot]",
          "lerntext": "c'est mon [Slot]",
          "wortarten": {
            "mon": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "ton",
            "lerntext": "ton",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "notre",
            "lerntext": "notre",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
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
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] est ici",
          "lerntext": "[Slot] est ici",
          "wortarten": {
            "est": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "meine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "man",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese",
              "c": "p",
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
          "schrift": "[Slot] est ici",
          "lerntext": "[Slot] est ici",
          "wortarten": {
            "est": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "meine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "man",
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
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] est ici",
          "lerntext": "[Slot] est ici",
          "wortarten": {
            "est": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "meine",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.19"
      },
      {
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
        "id": "2.20"
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "c": "n"
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "c": "n"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "veux",
            "lerntext": "veux",
            "de": "wollen",
            "c": "v"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "3.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je ai besoin de [Slot]",
          "lerntext": "je ai besoin de [Slot]",
          "wortarten": {
            "je": "p",
            "ai": "v",
            "besoin": "n"
          }
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "besoin",
            "lerntext": "besoin",
            "de": "Bedürfnis",
            "c": "n"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "von"
          }
        ],
        "id": "3.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je voudrais un [Slot]",
          "lerntext": "je voudrais un [Slot]",
          "wortarten": {
            "je": "p"
          }
        },
        "frameDe": "ich möchte eine [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "c": "n"
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "3.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je voudrais un [Slot]",
          "lerntext": "je voudrais un [Slot]",
          "wortarten": {
            "je": "p"
          }
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
              "c": "n"
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "c": "n"
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "c": "n"
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "3.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je mange [Slot]",
          "lerntext": "je mange [Slot]",
          "wortarten": {
            "je": "p",
            "mange": "v"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "c": "n"
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "c": "n"
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "mange",
            "lerntext": "mange",
            "de": "essen",
            "c": "v"
          },
          {
            "schrift": "bois",
            "lerntext": "bois",
            "de": "trinken",
            "c": "v"
          }
        ],
        "id": "3.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je mange [Slot]",
          "lerntext": "je mange [Slot]",
          "wortarten": {
            "je": "p",
            "mange": "v"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
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
          "schrift": "je mange [Slot]",
          "lerntext": "je mange [Slot]",
          "wortarten": {
            "je": "p",
            "mange": "v"
          }
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
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
          "schrift": "je ne suis pas [Slot]",
          "lerntext": "je ne suis pas [Slot]",
          "wortarten": {
            "je": "p",
            "suis": "v"
          }
        },
        "frameDe": "ich bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "c": "a"
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
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
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "pas",
            "lerntext": "pas",
            "de": "nicht"
          },
          {
            "schrift": "oui",
            "lerntext": "oui",
            "de": "ja"
          },
          {
            "schrift": "non",
            "lerntext": "non",
            "de": "nein"
          }
        ],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es-tu [Slot] ?",
          "lerntext": "es-tu [Slot] ?"
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "c": "a"
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "c": "a"
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
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
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
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
          "schrift": "[Slot] est-ce ?",
          "lerntext": "[Slot] est-ce ?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "quoi",
            "lerntext": "quoi",
            "de": "was",
            "c": "p"
          },
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "wer",
            "c": "p"
          },
          {
            "schrift": "comme",
            "lerntext": "comme",
            "de": "wie",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "c": "a"
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
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
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "quoi",
            "lerntext": "quoi",
            "de": "was",
            "c": "p"
          },
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "wer",
            "c": "p"
          },
          {
            "schrift": "comme",
            "lerntext": "comme",
            "de": "wie",
            "c": "k"
          },
          {
            "schrift": "pourquoi",
            "lerntext": "pourquoi",
            "de": "warum"
          }
        ],
        "id": "4.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] est-ce ?",
          "lerntext": "[Slot] est-ce ?"
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "quoi",
            "lerntext": "quoi",
            "de": "was",
            "c": "p"
          },
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "wer",
            "c": "p"
          },
          {
            "schrift": "comme",
            "lerntext": "comme",
            "de": "wie",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "c": "a",
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
        "id": "4.5"
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
          "schrift": "où y a-t-il une [Slot] ?",
          "lerntext": "où y a-t-il une [Slot] ?",
          "wortarten": {
            "où": "p"
          }
        },
        "frameDe": "Wo gibt es eine [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "c": "n"
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "c": "n"
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "route",
              "lerntext": "route",
              "de": "Straße",
              "c": "n"
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
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
            "schrift": "où",
            "lerntext": "où",
            "de": "wo",
            "c": "p"
          },
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "dorthin",
            "c": "p"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "où y a-t-il une [Slot] ?",
          "lerntext": "où y a-t-il une [Slot] ?",
          "wortarten": {
            "où": "p"
          }
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
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
          "schrift": "où y a-t-il un [Slot] ?",
          "lerntext": "où y a-t-il un [Slot] ?",
          "wortarten": {
            "où": "p"
          }
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
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
          "schrift": "où y a-t-il un [Slot] ?",
          "lerntext": "où y a-t-il un [Slot] ?",
          "wortarten": {
            "où": "p"
          }
        },
        "frameDe": "Wo gibt es ein [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "magasin",
              "lerntext": "magasin",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
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
          "schrift": "il y a un [Slot] ici ?",
          "lerntext": "il y a un [Slot] ici ?",
          "wortarten": {
            "il": "p",
            "a": "v"
          }
        },
        "frameDe": "Gibt es hier ein [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "magasin",
              "lerntext": "magasin",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "dorthin",
            "c": "p"
          }
        ],
        "id": "5.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] est ici",
          "lerntext": "[Slot] est ici",
          "wortarten": {
            "est": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "ici",
            "lerntext": "ici",
            "de": "hier"
          },
          {
            "schrift": "là",
            "lerntext": "là",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "route",
              "lerntext": "route",
              "de": "Straße",
              "c": "n"
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "magasin",
              "lerntext": "magasin",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
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
            "schrift": "là",
            "lerntext": "là",
            "de": "dort"
          },
          {
            "schrift": "chez",
            "lerntext": "chez",
            "de": "bei"
          }
        ],
        "id": "5.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est [Slot] la maison",
          "lerntext": "c'est [Slot] la maison",
          "wortarten": {
            "maison": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "à",
            "lerntext": "à",
            "de": "an"
          },
          {
            "schrift": "sur",
            "lerntext": "sur",
            "de": "auf"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sous",
              "lerntext": "sous",
              "de": "unter"
            },
            {
              "schrift": "entre",
              "lerntext": "entre",
              "de": "zwischen"
            },
            {
              "schrift": "derrière",
              "lerntext": "derrière",
              "de": "hinter (räumlich)"
            },
            {
              "schrift": "devant",
              "lerntext": "devant",
              "de": "vor (räumlich)"
            },
            {
              "schrift": "par",
              "lerntext": "par",
              "de": "durch"
            },
            {
              "schrift": "chez",
              "lerntext": "chez",
              "de": "bei",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "à",
            "lerntext": "à",
            "de": "an"
          },
          {
            "schrift": "sur",
            "lerntext": "sur",
            "de": "auf"
          },
          {
            "schrift": "à",
            "lerntext": "à",
            "de": "an"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "von"
          },
          {
            "schrift": "avec",
            "lerntext": "avec",
            "de": "mit"
          },
          {
            "schrift": "sur",
            "lerntext": "sur",
            "de": "auf"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "von"
          },
          {
            "schrift": "en",
            "lerntext": "en",
            "de": "davon"
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
          "schrift": "c'est [Slot] la maison",
          "lerntext": "c'est [Slot] la maison",
          "wortarten": {
            "maison": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "à",
            "lerntext": "à",
            "de": "an"
          },
          {
            "schrift": "sur",
            "lerntext": "sur",
            "de": "auf"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "contre",
              "lerntext": "contre",
              "de": "gegen"
            },
            {
              "schrift": "chez",
              "lerntext": "chez",
              "de": "bei"
            },
            {
              "schrift": "sous",
              "lerntext": "sous",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "entre",
              "lerntext": "entre",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "derrière",
              "lerntext": "derrière",
              "de": "hinter (räumlich)",
              "wieder": true
            },
            {
              "schrift": "devant",
              "lerntext": "devant",
              "de": "vor (räumlich)",
              "wieder": true
            },
            {
              "schrift": "par",
              "lerntext": "par",
              "de": "durch",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "5.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] est ici",
          "lerntext": "[Slot] est ici",
          "wortarten": {
            "est": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "ici",
            "lerntext": "ici",
            "de": "hier"
          },
          {
            "schrift": "là",
            "lerntext": "là",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
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
          "schrift": "c'est [Slot] la maison",
          "lerntext": "c'est [Slot] la maison",
          "wortarten": {
            "maison": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "à",
            "lerntext": "à",
            "de": "an"
          },
          {
            "schrift": "sur",
            "lerntext": "sur",
            "de": "auf"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "contre",
              "lerntext": "contre",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "sous",
              "lerntext": "sous",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "entre",
              "lerntext": "entre",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "derrière",
              "lerntext": "derrière",
              "de": "hinter (räumlich)",
              "wieder": true
            },
            {
              "schrift": "devant",
              "lerntext": "devant",
              "de": "vor (räumlich)",
              "wieder": true
            },
            {
              "schrift": "par",
              "lerntext": "par",
              "de": "durch",
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
        "id": "5.11"
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
              "schrift": "un",
              "lerntext": "un",
              "de": "eins"
            },
            {
              "schrift": "deux",
              "lerntext": "deux",
              "de": "zwei"
            },
            {
              "schrift": "trois",
              "lerntext": "trois",
              "de": "drei"
            },
            {
              "schrift": "quatre",
              "lerntext": "quatre",
              "de": "vier"
            },
            {
              "schrift": "cinq",
              "lerntext": "cinq",
              "de": "fünf"
            },
            {
              "schrift": "six",
              "lerntext": "six",
              "de": "sechs"
            },
            {
              "schrift": "sept",
              "lerntext": "sept",
              "de": "sieben"
            },
            {
              "schrift": "huit",
              "lerntext": "huit",
              "de": "acht"
            },
            {
              "schrift": "neuf",
              "lerntext": "neuf",
              "de": "neun"
            },
            {
              "schrift": "dix",
              "lerntext": "dix",
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
              "schrift": "onze",
              "lerntext": "onze",
              "de": "elf"
            },
            {
              "schrift": "douze",
              "lerntext": "douze",
              "de": "zwölf"
            },
            {
              "schrift": "treize",
              "lerntext": "treize",
              "de": "dreizehn"
            },
            {
              "schrift": "quatorze",
              "lerntext": "quatorze",
              "de": "vierzehn"
            },
            {
              "schrift": "quinze",
              "lerntext": "quinze",
              "de": "fünfzehn"
            },
            {
              "schrift": "seize",
              "lerntext": "seize",
              "de": "sechzehn"
            },
            {
              "schrift": "vingt",
              "lerntext": "vingt",
              "de": "zwanzig"
            }
          ]
        ],
        "newCount": 7,
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
              "schrift": "trente",
              "lerntext": "trente",
              "de": "dreißig"
            },
            {
              "schrift": "quarante",
              "lerntext": "quarante",
              "de": "vierzig"
            },
            {
              "schrift": "cinquante",
              "lerntext": "cinquante",
              "de": "fünfzig"
            },
            {
              "schrift": "soixante",
              "lerntext": "soixante",
              "de": "sechzig"
            },
            {
              "schrift": "cent",
              "lerntext": "cent",
              "de": "hundert"
            },
            {
              "schrift": "mille",
              "lerntext": "mille",
              "de": "tausend"
            }
          ]
        ],
        "newCount": 6,
        "task": null,
        "newFrameWords": [],
        "id": "6.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est la [Slot] fois",
          "lerntext": "c'est la [Slot] fois"
        },
        "frameDe": "Das ist das [Slot] Mal.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "c": "a"
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
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
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "la",
            "lerntext": "la",
            "de": "die"
          }
        ],
        "id": "6.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "combien coûte un [Slot] ?",
          "lerntext": "combien coûte un [Slot] ?"
        },
        "frameDe": "Wie viel kostet eine [Slot]?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "c": "n"
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "c": "n"
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "route",
              "lerntext": "route",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "très",
            "lerntext": "très",
            "de": "sehr"
          },
          {
            "schrift": "peu",
            "lerntext": "peu",
            "de": "wenig"
          }
        ],
        "id": "6.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est trop [Slot]",
          "lerntext": "c'est trop [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
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
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "pour",
            "lerntext": "pour",
            "de": "für"
          },
          {
            "schrift": "sans",
            "lerntext": "sans",
            "de": "ohne"
          }
        ],
        "id": "6.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est trop [Slot]",
          "lerntext": "c'est trop [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "c": "a"
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "c": "a"
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "c": "a"
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "c": "a"
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "6.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est trop [Slot]",
          "lerntext": "c'est trop [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "c": "a"
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
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
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
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
              "schrift": "un",
              "lerntext": "un",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "deux",
              "lerntext": "deux",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "trois",
              "lerntext": "trois",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "quatre",
              "lerntext": "quatre",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "cinq",
              "lerntext": "cinq",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "six",
              "lerntext": "six",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "sept",
              "lerntext": "sept",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "huit",
              "lerntext": "huit",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "neuf",
              "lerntext": "neuf",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "dix",
              "lerntext": "dix",
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
              "schrift": "onze",
              "lerntext": "onze",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "douze",
              "lerntext": "douze",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "treize",
              "lerntext": "treize",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "quatorze",
              "lerntext": "quatorze",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "quinze",
              "lerntext": "quinze",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "seize",
              "lerntext": "seize",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "vingt",
              "lerntext": "vingt",
              "de": "zwanzig",
              "wieder": true
            },
            {
              "schrift": "trente",
              "lerntext": "trente",
              "de": "dreißig",
              "wieder": true
            },
            {
              "schrift": "quarante",
              "lerntext": "quarante",
              "de": "vierzig",
              "wieder": true
            },
            {
              "schrift": "cinquante",
              "lerntext": "cinquante",
              "de": "fünfzig",
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
              "schrift": "soixante",
              "lerntext": "soixante",
              "de": "sechzig",
              "wieder": true
            },
            {
              "schrift": "cent",
              "lerntext": "cent",
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
              "schrift": "un",
              "lerntext": "un",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "deux",
              "lerntext": "deux",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "trois",
              "lerntext": "trois",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "quatre",
              "lerntext": "quatre",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "cinq",
              "lerntext": "cinq",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "six",
              "lerntext": "six",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "sept",
              "lerntext": "sept",
              "de": "sieben",
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
              "schrift": "huit",
              "lerntext": "huit",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "neuf",
              "lerntext": "neuf",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "dix",
              "lerntext": "dix",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "onze",
              "lerntext": "onze",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "douze",
              "lerntext": "douze",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "treize",
              "lerntext": "treize",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "quatorze",
              "lerntext": "quatorze",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "quinze",
              "lerntext": "quinze",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "seize",
              "lerntext": "seize",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "vingt",
              "lerntext": "vingt",
              "de": "zwanzig",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "6.12"
      },
      {
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
        "id": "6.13"
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
          "schrift": "je peux [Slot]",
          "lerntext": "je peux [Slot]",
          "wortarten": {
            "je": "p"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "c": "v"
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "c": "v"
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "peux",
            "lerntext": "peux",
            "de": "Macht",
            "c": "v"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je peux [Slot]",
          "lerntext": "je peux [Slot]",
          "wortarten": {
            "je": "p"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
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
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "c": "v"
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "7.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je dois [Slot]",
          "lerntext": "je dois [Slot]",
          "wortarten": {
            "je": "p",
            "dois": "v"
          }
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "c": "v"
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
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
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "devoir",
            "lerntext": "devoir",
            "de": "müssen",
            "c": "v"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je dois [Slot]",
          "lerntext": "je dois [Slot]",
          "wortarten": {
            "je": "p",
            "dois": "v"
          }
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "c": "v"
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
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
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
              "c": "v"
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
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
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
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
          "schrift": "je ne peux pas [Slot]",
          "lerntext": "je ne peux pas [Slot]",
          "wortarten": {
            "je": "p"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "c": "v"
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
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
          "schrift": "je ne peux pas [Slot]",
          "lerntext": "je ne peux pas [Slot]",
          "wortarten": {
            "je": "p"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "7.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je ne peux pas [Slot]",
          "lerntext": "je ne peux pas [Slot]",
          "wortarten": {
            "je": "p"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
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
          "schrift": "je vais à un [Slot]",
          "lerntext": "je vais à un [Slot]",
          "wortarten": {
            "je": "p",
            "vais": "v"
          }
        },
        "frameDe": "ich gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "magasin",
              "lerntext": "magasin",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "vais",
            "lerntext": "vais",
            "de": "gehen",
            "c": "v"
          },
          {
            "schrift": "viens",
            "lerntext": "viens",
            "de": "kommen",
            "c": "v"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je voyage en [Slot]",
          "lerntext": "je voyage en [Slot]",
          "wortarten": {
            "je": "p",
            "voyage": "n"
          }
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "c": "n"
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "route",
              "lerntext": "route",
              "de": "Straße",
              "c": "n"
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je veux [Slot] maintenant",
          "lerntext": "je veux [Slot] maintenant",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "c": "v"
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "c": "v"
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "la",
            "lerntext": "la",
            "de": "die"
          },
          {
            "schrift": "maintenant",
            "lerntext": "maintenant",
            "de": "jetzt"
          }
        ],
        "id": "8.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je veux [Slot] maintenant",
          "lerntext": "je veux [Slot] maintenant",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
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
          "schrift": "je voyage en [Slot]",
          "lerntext": "je voyage en [Slot]",
          "wortarten": {
            "je": "p",
            "voyage": "n"
          }
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
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
        "kind": "frame",
        "frame": {
          "schrift": "je veux [Slot] maintenant",
          "lerntext": "je veux [Slot] maintenant",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
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
              "schrift": "aujourd'hui",
              "lerntext": "aujourd'hui",
              "de": "heute"
            },
            {
              "schrift": "hier",
              "lerntext": "hier",
              "de": "gestern"
            },
            {
              "schrift": "matin",
              "lerntext": "matin",
              "de": "Morgen",
              "c": "n"
            },
            {
              "schrift": "maintenant",
              "lerntext": "maintenant",
              "de": "jetzt"
            },
            {
              "schrift": "bientôt",
              "lerntext": "bientôt",
              "de": "bald"
            },
            {
              "schrift": "toujours",
              "lerntext": "toujours",
              "de": "immer"
            },
            {
              "schrift": "jamais",
              "lerntext": "jamais",
              "de": "nie"
            },
            {
              "schrift": "souvent",
              "lerntext": "souvent",
              "de": "oft"
            },
            {
              "schrift": "parfois",
              "lerntext": "parfois",
              "de": "manchmal"
            },
            {
              "schrift": "déjà",
              "lerntext": "déjà",
              "de": "schon"
            },
            {
              "schrift": "alors",
              "lerntext": "alors",
              "de": "dann"
            },
            {
              "schrift": "ensemble",
              "lerntext": "ensemble",
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
          "schrift": "on se voit le [Slot]",
          "lerntext": "on se voit le [Slot]",
          "wortarten": {
            "on": "p",
            "se": "p",
            "voit": "v"
          }
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "quand",
            "lerntext": "quand",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "matin",
              "lerntext": "matin",
              "de": "Morgen",
              "c": "n"
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "quand",
            "lerntext": "quand",
            "de": "wann"
          },
          {
            "schrift": "aussi",
            "lerntext": "aussi",
            "de": "auch"
          },
          {
            "schrift": "seulement",
            "lerntext": "seulement",
            "de": "nur"
          },
          {
            "schrift": "se",
            "lerntext": "se",
            "de": "sich",
            "c": "p"
          },
          {
            "schrift": "le",
            "lerntext": "le",
            "de": "der"
          }
        ],
        "id": "9.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ça dure une [Slot]",
          "lerntext": "ça dure une [Slot]"
        },
        "frameDe": "Es dauert eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
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
          "schrift": "ça dure une [Slot]",
          "lerntext": "ça dure une [Slot]"
        },
        "frameDe": "Es dauert einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "c": "n"
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "matin",
              "lerntext": "matin",
              "de": "Morgen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
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
              "schrift": "aujourd'hui",
              "lerntext": "aujourd'hui",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "hier",
              "lerntext": "hier",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "bientôt",
              "lerntext": "bientôt",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "toujours",
              "lerntext": "toujours",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "jamais",
              "lerntext": "jamais",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "souvent",
              "lerntext": "souvent",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "parfois",
              "lerntext": "parfois",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "déjà",
              "lerntext": "déjà",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "alors",
              "lerntext": "alors",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "ensemble",
              "lerntext": "ensemble",
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
          "schrift": "on se voit le [Slot]",
          "lerntext": "on se voit le [Slot]",
          "wortarten": {
            "on": "p",
            "se": "p",
            "voit": "v"
          }
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "quand",
            "lerntext": "quand",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
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
              "schrift": "aujourd'hui",
              "lerntext": "aujourd'hui",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "hier",
              "lerntext": "hier",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "bientôt",
              "lerntext": "bientôt",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "toujours",
              "lerntext": "toujours",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "jamais",
              "lerntext": "jamais",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "souvent",
              "lerntext": "souvent",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "parfois",
              "lerntext": "parfois",
              "de": "manchmal",
              "wieder": true
            },
            {
              "schrift": "déjà",
              "lerntext": "déjà",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "alors",
              "lerntext": "alors",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "ensemble",
              "lerntext": "ensemble",
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
          "schrift": "je aime [Slot]",
          "lerntext": "je aime [Slot]",
          "wortarten": {
            "je": "p",
            "aime": "v"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "c": "n"
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "c": "n"
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "c": "n"
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "c": "n"
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "aime",
            "lerntext": "aime",
            "de": "lieben",
            "c": "v"
          },
          {
            "schrift": "aime",
            "lerntext": "aime",
            "de": "lieben",
            "c": "v"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je aime [Slot]",
          "lerntext": "je aime [Slot]",
          "wortarten": {
            "je": "p",
            "aime": "v"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "c": "n"
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
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
          "schrift": "je vois [Slot]",
          "lerntext": "je vois [Slot]",
          "wortarten": {
            "je": "p",
            "vois": "v"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mich",
              "c": "p"
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "dich",
              "c": "p"
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "sich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "quoi",
              "lerntext": "quoi",
              "de": "was",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "qui",
              "lerntext": "qui",
              "de": "wer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "en",
              "lerntext": "en",
              "de": "davon",
              "wieder": true
            },
            {
              "schrift": "ton",
              "lerntext": "ton",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "notre",
              "lerntext": "notre",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mon",
              "lerntext": "mon",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "trouve",
            "lerntext": "trouve",
            "de": "finden",
            "c": "v"
          }
        ],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est [Slot]",
          "lerntext": "c'est [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "c": "a"
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "c": "a"
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "c": "a"
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "c": "a"
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
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
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
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
          "schrift": "c'est [Slot]",
          "lerntext": "c'est [Slot]"
        },
        "frameDe": "Sie ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "c": "a"
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
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
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "10.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "le repas est [Slot]",
          "lerntext": "le repas est [Slot]",
          "wortarten": {
            "repas": "n",
            "est": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "c": "a"
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "le",
            "lerntext": "le",
            "de": "der"
          },
          {
            "schrift": "repas",
            "lerntext": "repas",
            "de": "Mahlzeit",
            "c": "n"
          }
        ],
        "id": "10.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "le repas est [Slot]",
          "lerntext": "le repas est [Slot]",
          "wortarten": {
            "repas": "n",
            "est": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
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
          "schrift": "le repas est [Slot]",
          "lerntext": "le repas est [Slot]",
          "wortarten": {
            "repas": "n",
            "est": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "c": "a",
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
          "schrift": "je aime [Slot]",
          "lerntext": "je aime [Slot]",
          "wortarten": {
            "je": "p",
            "aime": "v"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "c": "n",
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
          "schrift": "je vois [Slot]",
          "lerntext": "je vois [Slot]",
          "wortarten": {
            "je": "p",
            "vois": "v"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "dich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "sich",
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
          "schrift": "je étais [Slot] hier",
          "lerntext": "je étais [Slot] hier",
          "wortarten": {
            "je": "p"
          }
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
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
          "schrift": "je vais [Slot] demain",
          "lerntext": "je vais [Slot] demain",
          "wortarten": {
            "je": "p",
            "vais": "v"
          }
        },
        "frameDe": "ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "c": "v"
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "devenir",
            "lerntext": "devenir",
            "de": "werden",
            "c": "v"
          },
          {
            "schrift": "demain",
            "lerntext": "demain",
            "de": "morgen"
          }
        ],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je veux [Slot] beaucoup",
          "lerntext": "je veux [Slot] beaucoup",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "c": "v"
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "c": "v"
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "beaucoup",
            "lerntext": "beaucoup",
            "de": "viel"
          }
        ],
        "id": "11.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je deviens [Slot]",
          "lerntext": "je deviens [Slot]",
          "wortarten": {
            "je": "p",
            "deviens": "v"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "c": "a"
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "c": "a"
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "c": "a"
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
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
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "deviens",
            "lerntext": "deviens",
            "de": "werden",
            "c": "v"
          }
        ],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je veux [Slot] beaucoup",
          "lerntext": "je veux [Slot] beaucoup",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
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
          "schrift": "je veux [Slot] beaucoup",
          "lerntext": "je veux [Slot] beaucoup",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
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
          "schrift": "je suis fatigué [Slot] je travaille",
          "lerntext": "je suis fatigué [Slot] je travaille",
          "wortarten": {
            "je": "p",
            "suis": "v",
            "travaille": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "sur",
              "lerntext": "sur",
              "de": "auf"
            },
            {
              "schrift": "pendant",
              "lerntext": "pendant",
              "de": "während"
            },
            {
              "schrift": "bien que",
              "lerntext": "bien que",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit",
              "c": "k"
            },
            {
              "schrift": "devant",
              "lerntext": "devant",
              "de": "vor (räumlich)",
              "wieder": true
            },
            {
              "schrift": "avec",
              "lerntext": "avec",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "sans",
              "lerntext": "sans",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "pour",
              "lerntext": "pour",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "comme",
              "lerntext": "comme",
              "de": "wie",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "contre",
              "lerntext": "contre",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "entre",
              "lerntext": "entre",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "sous",
              "lerntext": "sous",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "par",
              "lerntext": "par",
              "de": "durch",
              "wieder": true
            },
            {
              "schrift": "derrière",
              "lerntext": "derrière",
              "de": "hinter (räumlich)",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder",
            "c": "k"
          },
          {
            "schrift": "donc",
            "lerntext": "donc",
            "de": "also",
            "c": "k"
          },
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "dass",
            "c": "p"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je suis fatigué [Slot] je travaille",
          "lerntext": "je suis fatigué [Slot] je travaille",
          "wortarten": {
            "je": "p",
            "suis": "v",
            "travaille": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "devant",
              "lerntext": "devant",
              "de": "vor (räumlich)"
            },
            {
              "schrift": "peut-être",
              "lerntext": "peut-être",
              "de": "vielleicht"
            },
            {
              "schrift": "assez",
              "lerntext": "assez",
              "de": "genug"
            },
            {
              "schrift": "pendant",
              "lerntext": "pendant",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "sur",
              "lerntext": "sur",
              "de": "auf",
              "wieder": true
            },
            {
              "schrift": "peu",
              "lerntext": "peu",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "oui",
              "lerntext": "oui",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "aussi",
              "lerntext": "aussi",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "pourquoi",
              "lerntext": "pourquoi",
              "de": "warum",
              "wieder": true
            },
            {
              "schrift": "seulement",
              "lerntext": "seulement",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "non",
              "lerntext": "non",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "beaucoup",
              "lerntext": "beaucoup",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "demain",
              "lerntext": "demain",
              "de": "morgen",
              "wieder": true
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
          "schrift": "je veux [Slot] mais je ne peux pas",
          "lerntext": "je veux [Slot] mais je ne peux pas",
          "wortarten": {
            "je": "p",
            "veux": "v",
            "mais": "k"
          }
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "12.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est [Slot] mais ça va",
          "lerntext": "c'est [Slot] mais ça va",
          "wortarten": {
            "mais": "k",
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
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "c": "a"
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
              "c": "a"
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "c": "a",
              "wieder": true
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
          "schrift": "je veux te [Slot]",
          "lerntext": "je veux te [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v",
            "te": "p"
          }
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken",
              "c": "v"
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
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
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "12.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je suis fatigué [Slot] je travaille",
          "lerntext": "je suis fatigué [Slot] je travaille",
          "wortarten": {
            "je": "p",
            "suis": "v",
            "travaille": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "bien que",
              "lerntext": "bien que",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "peut-être",
              "lerntext": "peut-être",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "assez",
              "lerntext": "assez",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "peu",
              "lerntext": "peu",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "oui",
              "lerntext": "oui",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "aussi",
              "lerntext": "aussi",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "pourquoi",
              "lerntext": "pourquoi",
              "de": "warum",
              "wieder": true
            },
            {
              "schrift": "seulement",
              "lerntext": "seulement",
              "de": "nur",
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
          "schrift": "c'est [Slot] mais ça va",
          "lerntext": "c'est [Slot] mais ça va",
          "wortarten": {
            "mais": "k",
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
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "c": "a",
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
          "schrift": "je suis fatigué [Slot] je travaille",
          "lerntext": "je suis fatigué [Slot] je travaille",
          "wortarten": {
            "je": "p",
            "suis": "v",
            "travaille": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "non",
              "lerntext": "non",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "pendant",
              "lerntext": "pendant",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "bien que",
              "lerntext": "bien que",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "avec",
              "lerntext": "avec",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "peut-être",
              "lerntext": "peut-être",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "assez",
              "lerntext": "assez",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "peu",
              "lerntext": "peu",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "oui",
              "lerntext": "oui",
              "de": "ja",
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
          "schrift": "je suis fatigué [Slot] je travaille",
          "lerntext": "je suis fatigué [Slot] je travaille",
          "wortarten": {
            "je": "p",
            "suis": "v",
            "travaille": "v"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber",
            "c": "k"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder",
            "c": "k"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aussi",
              "lerntext": "aussi",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "pourquoi",
              "lerntext": "pourquoi",
              "de": "warum",
              "wieder": true
            },
            {
              "schrift": "seulement",
              "lerntext": "seulement",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "non",
              "lerntext": "non",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "beaucoup",
              "lerntext": "beaucoup",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "demain",
              "lerntext": "demain",
              "de": "morgen",
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
        "id": "12.10"
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
          "schrift": "une [Slot] me fait mal",
          "lerntext": "une [Slot] me fait mal",
          "wortarten": {
            "me": "p"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "c": "n"
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "repas",
              "lerntext": "repas",
              "de": "Mahlzeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "fait",
            "lerntext": "fait",
            "de": "Tatsache",
            "c": "n"
          }
        ],
        "id": "13.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "un [Slot] me fait mal",
          "lerntext": "un [Slot] me fait mal",
          "wortarten": {
            "me": "p"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "c": "n"
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "c": "n"
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "repas",
              "lerntext": "repas",
              "de": "Mahlzeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "13.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "un [Slot] me fait mal",
          "lerntext": "un [Slot] me fait mal",
          "wortarten": {
            "me": "p"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
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
          "schrift": "j'ai un [Slot]",
          "lerntext": "j'ai un [Slot]"
        },
        "frameDe": "Ich habe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "c": "n"
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "dorthin",
            "c": "p"
          }
        ],
        "id": "14.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ici il y a une [Slot]",
          "lerntext": "ici il y a une [Slot]",
          "wortarten": {
            "il": "p",
            "a": "v"
          }
        },
        "frameDe": "Hier gibt es eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "c": "n"
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
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
          "schrift": "ici il y a une [Slot]",
          "lerntext": "ici il y a une [Slot]",
          "wortarten": {
            "il": "p",
            "a": "v"
          }
        },
        "frameDe": "Hier gibt es einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "c": "n"
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "c": "n"
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "matin",
              "lerntext": "matin",
              "de": "Morgen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
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
          "schrift": "j'achète une [Slot]",
          "lerntext": "j'achète une [Slot]"
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "c": "n"
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
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
          "schrift": "j'achète une [Slot]",
          "lerntext": "j'achète une [Slot]"
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "c": "n"
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "c": "n"
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
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
          "schrift": "j'achète un [Slot]",
          "lerntext": "j'achète un [Slot]"
        },
        "frameDe": "Ich kaufe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "c": "n"
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
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
          "schrift": "j'ai [Slot]",
          "lerntext": "j'ai [Slot]"
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "c": "n"
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "c": "n"
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "c": "n"
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "Tatsache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "14.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est mon [Slot]",
          "lerntext": "c'est mon [Slot]",
          "wortarten": {
            "mon": "p"
          }
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "c": "n"
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "14.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "j'ai eu une bon [Slot]",
          "lerntext": "j'ai eu une bon [Slot]",
          "wortarten": {
            "eu": "v",
            "bon": "a"
          }
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
              "c": "n"
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "raison",
              "lerntext": "raison",
              "de": "Vernunft",
              "c": "n"
            },
            {
              "schrift": "monde",
              "lerntext": "monde",
              "de": "Welt",
              "c": "n"
            },
            {
              "schrift": "personne",
              "lerntext": "personne",
              "de": "Person",
              "c": "n"
            },
            {
              "schrift": "accord",
              "lerntext": "accord",
              "de": "Vereinbarung",
              "c": "n"
            },
            {
              "schrift": "peur",
              "lerntext": "peur",
              "de": "Angst",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "idée",
              "lerntext": "idée",
              "de": "Idee",
              "c": "n"
            },
            {
              "schrift": "histoire",
              "lerntext": "histoire",
              "de": "Geschichte",
              "c": "n"
            },
            {
              "schrift": "madame",
              "lerntext": "madame",
              "de": "Frau (Anrede)",
              "c": "n"
            },
            {
              "schrift": "amour",
              "lerntext": "amour",
              "de": "Liebe",
              "c": "n"
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage",
              "c": "n"
            },
            {
              "schrift": "raison",
              "lerntext": "raison",
              "de": "Vernunft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "monde",
              "lerntext": "monde",
              "de": "Welt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "personne",
              "lerntext": "personne",
              "de": "Person",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "accord",
              "lerntext": "accord",
              "de": "Vereinbarung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "peur",
              "lerntext": "peur",
              "de": "Angst",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "côté",
              "lerntext": "côté",
              "de": "Seite",
              "c": "n"
            },
            {
              "schrift": "rue",
              "lerntext": "rue",
              "de": "Straße",
              "c": "n"
            },
            {
              "schrift": "groupe",
              "lerntext": "groupe",
              "de": "Gruppe",
              "c": "n"
            },
            {
              "schrift": "numéro",
              "lerntext": "numéro",
              "de": "Nummer",
              "c": "n"
            },
            {
              "schrift": "ligne",
              "lerntext": "ligne",
              "de": "Linie",
              "c": "n"
            },
            {
              "schrift": "idée",
              "lerntext": "idée",
              "de": "Idee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "histoire",
              "lerntext": "histoire",
              "de": "Geschichte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "madame",
              "lerntext": "madame",
              "de": "Frau (Anrede)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amour",
              "lerntext": "amour",
              "de": "Liebe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "raison",
              "lerntext": "raison",
              "de": "Vernunft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "monde",
              "lerntext": "monde",
              "de": "Welt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "personne",
              "lerntext": "personne",
              "de": "Person",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "accord",
              "lerntext": "accord",
              "de": "Vereinbarung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "peur",
              "lerntext": "peur",
              "de": "Angst",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "forme",
              "lerntext": "forme",
              "de": "Form",
              "c": "n"
            },
            {
              "schrift": "chat",
              "lerntext": "chat",
              "de": "Katze",
              "c": "n"
            },
            {
              "schrift": "voix",
              "lerntext": "voix",
              "de": "Stimme",
              "c": "n"
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft",
              "c": "n"
            },
            {
              "schrift": "force",
              "lerntext": "force",
              "de": "Kraft",
              "c": "n"
            },
            {
              "schrift": "côté",
              "lerntext": "côté",
              "de": "Seite",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rue",
              "lerntext": "rue",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "groupe",
              "lerntext": "groupe",
              "de": "Gruppe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "numéro",
              "lerntext": "numéro",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ligne",
              "lerntext": "ligne",
              "de": "Linie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "idée",
              "lerntext": "idée",
              "de": "Idee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "histoire",
              "lerntext": "histoire",
              "de": "Geschichte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "madame",
              "lerntext": "madame",
              "de": "Frau (Anrede)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amour",
              "lerntext": "amour",
              "de": "Liebe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "marche",
              "lerntext": "marche",
              "de": "Stufe",
              "c": "n"
            },
            {
              "schrift": "sorte",
              "lerntext": "sorte",
              "de": "Art",
              "c": "n"
            },
            {
              "schrift": "suite",
              "lerntext": "suite",
              "de": "Folge",
              "c": "n"
            },
            {
              "schrift": "terre",
              "lerntext": "terre",
              "de": "Erde",
              "c": "n"
            },
            {
              "schrift": "vue",
              "lerntext": "vue",
              "de": "Sicht",
              "c": "n"
            },
            {
              "schrift": "forme",
              "lerntext": "forme",
              "de": "Form",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chat",
              "lerntext": "chat",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voix",
              "lerntext": "voix",
              "de": "Stimme",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "force",
              "lerntext": "force",
              "de": "Kraft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "côté",
              "lerntext": "côté",
              "de": "Seite",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rue",
              "lerntext": "rue",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "groupe",
              "lerntext": "groupe",
              "de": "Gruppe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "numéro",
              "lerntext": "numéro",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ligne",
              "lerntext": "ligne",
              "de": "Linie",
              "c": "n",
              "wieder": true
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "couleur",
              "lerntext": "couleur",
              "de": "Farbe",
              "c": "n"
            },
            {
              "schrift": "musique",
              "lerntext": "musique",
              "de": "Musik",
              "c": "n"
            },
            {
              "schrift": "art",
              "lerntext": "art",
              "de": "Kunst",
              "c": "n"
            },
            {
              "schrift": "réunion",
              "lerntext": "réunion",
              "de": "Besprechung",
              "c": "n"
            },
            {
              "schrift": "marche",
              "lerntext": "marche",
              "de": "Stufe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorte",
              "lerntext": "sorte",
              "de": "Art",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "suite",
              "lerntext": "suite",
              "de": "Folge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "terre",
              "lerntext": "terre",
              "de": "Erde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vue",
              "lerntext": "vue",
              "de": "Sicht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "forme",
              "lerntext": "forme",
              "de": "Form",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chat",
              "lerntext": "chat",
              "de": "Katze",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voix",
              "lerntext": "voix",
              "de": "Stimme",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "force",
              "lerntext": "force",
              "de": "Kraft",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "15.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "homme",
              "lerntext": "homme",
              "de": "Mann",
              "c": "n"
            },
            {
              "schrift": "monsieur",
              "lerntext": "monsieur",
              "de": "Herr",
              "c": "n"
            },
            {
              "schrift": "dieu",
              "lerntext": "dieu",
              "de": "Gott",
              "c": "n"
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Platz",
              "c": "n"
            },
            {
              "schrift": "coup",
              "lerntext": "coup",
              "de": "Schlag",
              "c": "n"
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mois",
              "lerntext": "mois",
              "de": "Monat",
              "c": "n"
            },
            {
              "schrift": "partie",
              "lerntext": "partie",
              "de": "Teil",
              "c": "n"
            },
            {
              "schrift": "garçon",
              "lerntext": "garçon",
              "de": "Junge",
              "c": "n"
            },
            {
              "schrift": "chemin",
              "lerntext": "chemin",
              "de": "Weg",
              "c": "n"
            },
            {
              "schrift": "lettre",
              "lerntext": "lettre",
              "de": "Brief",
              "c": "n"
            },
            {
              "schrift": "homme",
              "lerntext": "homme",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "monsieur",
              "lerntext": "monsieur",
              "de": "Herr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dieu",
              "lerntext": "dieu",
              "de": "Gott",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "coup",
              "lerntext": "coup",
              "de": "Schlag",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bruit",
              "lerntext": "bruit",
              "de": "Lärm",
              "c": "n"
            },
            {
              "schrift": "point",
              "lerntext": "point",
              "de": "Punkt",
              "c": "n"
            },
            {
              "schrift": "cas",
              "lerntext": "cas",
              "de": "Fall",
              "c": "n"
            },
            {
              "schrift": "chien",
              "lerntext": "chien",
              "de": "Hund",
              "c": "n"
            },
            {
              "schrift": "lieu",
              "lerntext": "lieu",
              "de": "Ort",
              "c": "n"
            },
            {
              "schrift": "mois",
              "lerntext": "mois",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "partie",
              "lerntext": "partie",
              "de": "Teil",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "garçon",
              "lerntext": "garçon",
              "de": "Junge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chemin",
              "lerntext": "chemin",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lettre",
              "lerntext": "lettre",
              "de": "Brief",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "homme",
              "lerntext": "homme",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "monsieur",
              "lerntext": "monsieur",
              "de": "Herr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dieu",
              "lerntext": "dieu",
              "de": "Gott",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Platz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "coup",
              "lerntext": "coup",
              "de": "Schlag",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "esprit",
              "lerntext": "esprit",
              "de": "Geist",
              "c": "n"
            },
            {
              "schrift": "état",
              "lerntext": "état",
              "de": "Zustand",
              "c": "n"
            },
            {
              "schrift": "guerra",
              "lerntext": "guerra",
              "de": "Krieg",
              "c": "n"
            },
            {
              "schrift": "mort",
              "lerntext": "mort",
              "de": "Tod",
              "c": "n"
            },
            {
              "schrift": "paix",
              "lerntext": "paix",
              "de": "Frieden",
              "c": "n"
            },
            {
              "schrift": "bruit",
              "lerntext": "bruit",
              "de": "Lärm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "point",
              "lerntext": "point",
              "de": "Punkt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cas",
              "lerntext": "cas",
              "de": "Fall",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chien",
              "lerntext": "chien",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lieu",
              "lerntext": "lieu",
              "de": "Ort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mois",
              "lerntext": "mois",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "partie",
              "lerntext": "partie",
              "de": "Teil",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "garçon",
              "lerntext": "garçon",
              "de": "Junge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chemin",
              "lerntext": "chemin",
              "de": "Weg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lettre",
              "lerntext": "lettre",
              "de": "Brief",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "plan",
              "lerntext": "plan",
              "de": "Plan",
              "c": "n"
            },
            {
              "schrift": "rapport",
              "lerntext": "rapport",
              "de": "Bericht",
              "c": "n"
            },
            {
              "schrift": "regard",
              "lerntext": "regard",
              "de": "Blick",
              "c": "n"
            },
            {
              "schrift": "service",
              "lerntext": "service",
              "de": "Dienst",
              "c": "n"
            },
            {
              "schrift": "oiseau",
              "lerntext": "oiseau",
              "de": "Vogel",
              "c": "n"
            },
            {
              "schrift": "esprit",
              "lerntext": "esprit",
              "de": "Geist",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "état",
              "lerntext": "état",
              "de": "Zustand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "guerra",
              "lerntext": "guerra",
              "de": "Krieg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mort",
              "lerntext": "mort",
              "de": "Tod",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "paix",
              "lerntext": "paix",
              "de": "Frieden",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "bruit",
              "lerntext": "bruit",
              "de": "Lärm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "point",
              "lerntext": "point",
              "de": "Punkt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cas",
              "lerntext": "cas",
              "de": "Fall",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chien",
              "lerntext": "chien",
              "de": "Hund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lieu",
              "lerntext": "lieu",
              "de": "Ort",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "c": "n"
            },
            {
              "schrift": "sport",
              "lerntext": "sport",
              "de": "Sport",
              "c": "n"
            },
            {
              "schrift": "médecin",
              "lerntext": "médecin",
              "de": "Arzt",
              "c": "n"
            },
            {
              "schrift": "prix",
              "lerntext": "prix",
              "de": "Preis",
              "c": "n"
            },
            {
              "schrift": "marché",
              "lerntext": "marché",
              "de": "Markt",
              "c": "n"
            },
            {
              "schrift": "plan",
              "lerntext": "plan",
              "de": "Plan",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rapport",
              "lerntext": "rapport",
              "de": "Bericht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "regard",
              "lerntext": "regard",
              "de": "Blick",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "service",
              "lerntext": "service",
              "de": "Dienst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oiseau",
              "lerntext": "oiseau",
              "de": "Vogel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "esprit",
              "lerntext": "esprit",
              "de": "Geist",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "état",
              "lerntext": "état",
              "de": "Zustand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "guerra",
              "lerntext": "guerra",
              "de": "Krieg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mort",
              "lerntext": "mort",
              "de": "Tod",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "paix",
              "lerntext": "paix",
              "de": "Frieden",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "chose",
              "lerntext": "chose",
              "de": "Ding",
              "c": "n"
            },
            {
              "schrift": "vie",
              "lerntext": "vie",
              "de": "Leben",
              "c": "n"
            },
            {
              "schrift": "problème",
              "lerntext": "problème",
              "de": "Problem",
              "c": "n"
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "Wort",
              "c": "n"
            },
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende",
              "c": "n"
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "droit",
              "lerntext": "droit",
              "de": "Recht",
              "c": "n"
            },
            {
              "schrift": "pays",
              "lerntext": "pays",
              "de": "Land",
              "c": "n"
            },
            {
              "schrift": "an",
              "lerntext": "an",
              "de": "Jahr (Zählwort)",
              "c": "n"
            },
            {
              "schrift": "année",
              "lerntext": "année",
              "de": "Jahr (Verlauf)",
              "c": "n"
            },
            {
              "schrift": "loi",
              "lerntext": "loi",
              "de": "Gesetz",
              "c": "n"
            },
            {
              "schrift": "chose",
              "lerntext": "chose",
              "de": "Ding",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vie",
              "lerntext": "vie",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "problème",
              "lerntext": "problème",
              "de": "Problem",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "Wort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende",
              "c": "n",
              "wieder": true
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lumière",
              "lerntext": "lumière",
              "de": "Licht",
              "c": "n"
            },
            {
              "schrift": "moyen",
              "lerntext": "moyen",
              "de": "Mittel",
              "c": "n"
            },
            {
              "schrift": "peuple",
              "lerntext": "peuple",
              "de": "Volk",
              "c": "n"
            },
            {
              "schrift": "sang",
              "lerntext": "sang",
              "de": "Blut",
              "c": "n"
            },
            {
              "schrift": "secret",
              "lerntext": "secret",
              "de": "Geheimnis",
              "c": "n"
            },
            {
              "schrift": "droit",
              "lerntext": "droit",
              "de": "Recht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pays",
              "lerntext": "pays",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "an",
              "lerntext": "an",
              "de": "Jahr (Zählwort)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "année",
              "lerntext": "année",
              "de": "Jahr (Verlauf)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "loi",
              "lerntext": "loi",
              "de": "Gesetz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chose",
              "lerntext": "chose",
              "de": "Ding",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vie",
              "lerntext": "vie",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "problème",
              "lerntext": "problème",
              "de": "Problem",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "Wort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende",
              "c": "n",
              "wieder": true
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vêtement",
              "lerntext": "vêtement",
              "de": "Kleidungsstück",
              "c": "n"
            },
            {
              "schrift": "photo",
              "lerntext": "photo",
              "de": "Foto",
              "c": "n"
            },
            {
              "schrift": "jeu",
              "lerntext": "jeu",
              "de": "Spiel",
              "c": "n"
            },
            {
              "schrift": "équipe",
              "lerntext": "équipe",
              "de": "Team",
              "c": "n"
            },
            {
              "schrift": "entreprise",
              "lerntext": "entreprise",
              "de": "Unternehmen",
              "c": "n"
            },
            {
              "schrift": "lumière",
              "lerntext": "lumière",
              "de": "Licht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "moyen",
              "lerntext": "moyen",
              "de": "Mittel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "peuple",
              "lerntext": "peuple",
              "de": "Volk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sang",
              "lerntext": "sang",
              "de": "Blut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "secret",
              "lerntext": "secret",
              "de": "Geheimnis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "droit",
              "lerntext": "droit",
              "de": "Recht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pays",
              "lerntext": "pays",
              "de": "Land",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "an",
              "lerntext": "an",
              "de": "Jahr (Zählwort)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "année",
              "lerntext": "année",
              "de": "Jahr (Verlauf)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "loi",
              "lerntext": "loi",
              "de": "Gesetz",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.16"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sport",
              "lerntext": "sport",
              "de": "Sport",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "médecin",
              "lerntext": "médecin",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "prix",
              "lerntext": "prix",
              "de": "Preis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "marché",
              "lerntext": "marché",
              "de": "Markt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "plan",
              "lerntext": "plan",
              "de": "Plan",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "rapport",
              "lerntext": "rapport",
              "de": "Bericht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "regard",
              "lerntext": "regard",
              "de": "Blick",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "service",
              "lerntext": "service",
              "de": "Dienst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oiseau",
              "lerntext": "oiseau",
              "de": "Vogel",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vêtement",
              "lerntext": "vêtement",
              "de": "Kleidungsstück",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "photo",
              "lerntext": "photo",
              "de": "Foto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jeu",
              "lerntext": "jeu",
              "de": "Spiel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "équipe",
              "lerntext": "équipe",
              "de": "Team",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "entreprise",
              "lerntext": "entreprise",
              "de": "Unternehmen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lumière",
              "lerntext": "lumière",
              "de": "Licht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "moyen",
              "lerntext": "moyen",
              "de": "Mittel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "peuple",
              "lerntext": "peuple",
              "de": "Volk",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sang",
              "lerntext": "sang",
              "de": "Blut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "secret",
              "lerntext": "secret",
              "de": "Geheimnis",
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "couleur",
              "lerntext": "couleur",
              "de": "Farbe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "musique",
              "lerntext": "musique",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "art",
              "lerntext": "art",
              "de": "Kunst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "réunion",
              "lerntext": "réunion",
              "de": "Besprechung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "marche",
              "lerntext": "marche",
              "de": "Stufe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sorte",
              "lerntext": "sorte",
              "de": "Art",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "suite",
              "lerntext": "suite",
              "de": "Folge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "terre",
              "lerntext": "terre",
              "de": "Erde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vue",
              "lerntext": "vue",
              "de": "Sicht",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sembler",
              "lerntext": "sembler",
              "de": "scheinen",
              "c": "v"
            },
            {
              "schrift": "sortir",
              "lerntext": "sortir",
              "de": "hinausgehen",
              "c": "v"
            },
            {
              "schrift": "entrer",
              "lerntext": "entrer",
              "de": "eintreten",
              "c": "v"
            },
            {
              "schrift": "partir",
              "lerntext": "partir",
              "de": "weggehen",
              "c": "v"
            },
            {
              "schrift": "monter",
              "lerntext": "monter",
              "de": "hinaufsteigen",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "recevoir",
              "lerntext": "recevoir",
              "de": "erhalten",
              "c": "v"
            },
            {
              "schrift": "appeler",
              "lerntext": "appeler",
              "de": "rufen",
              "c": "v"
            },
            {
              "schrift": "crier",
              "lerntext": "crier",
              "de": "schreien",
              "c": "v"
            },
            {
              "schrift": "falloir",
              "lerntext": "falloir",
              "de": "nötig sein",
              "c": "v"
            },
            {
              "schrift": "passer",
              "lerntext": "passer",
              "de": "verbringen",
              "c": "v"
            },
            {
              "schrift": "sembler",
              "lerntext": "sembler",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sortir",
              "lerntext": "sortir",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entrer",
              "lerntext": "entrer",
              "de": "eintreten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "partir",
              "lerntext": "partir",
              "de": "weggehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "monter",
              "lerntext": "monter",
              "de": "hinaufsteigen",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "arriver",
              "lerntext": "arriver",
              "de": "ankommen",
              "c": "v"
            },
            {
              "schrift": "rendre",
              "lerntext": "rendre",
              "de": "zurückgeben",
              "c": "v"
            },
            {
              "schrift": "vivre",
              "lerntext": "vivre",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "reprendre",
              "lerntext": "reprendre",
              "de": "wieder aufnehmen",
              "c": "v"
            },
            {
              "schrift": "revenir",
              "lerntext": "revenir",
              "de": "zurückkommen",
              "c": "v"
            },
            {
              "schrift": "recevoir",
              "lerntext": "recevoir",
              "de": "erhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "appeler",
              "lerntext": "appeler",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crier",
              "lerntext": "crier",
              "de": "schreien",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "falloir",
              "lerntext": "falloir",
              "de": "nötig sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "passer",
              "lerntext": "passer",
              "de": "verbringen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sembler",
              "lerntext": "sembler",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sortir",
              "lerntext": "sortir",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entrer",
              "lerntext": "entrer",
              "de": "eintreten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "partir",
              "lerntext": "partir",
              "de": "weggehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "monter",
              "lerntext": "monter",
              "de": "hinaufsteigen",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "suivre",
              "lerntext": "suivre",
              "de": "folgen",
              "c": "v"
            },
            {
              "schrift": "paraître",
              "lerntext": "paraître",
              "de": "erscheinen",
              "c": "v"
            },
            {
              "schrift": "permettre",
              "lerntext": "permettre",
              "de": "erlauben",
              "c": "v"
            },
            {
              "schrift": "asseoir",
              "lerntext": "asseoir",
              "de": "sich setzen",
              "c": "v"
            },
            {
              "schrift": "apercevoir",
              "lerntext": "apercevoir",
              "de": "bemerken",
              "c": "v"
            },
            {
              "schrift": "arriver",
              "lerntext": "arriver",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rendre",
              "lerntext": "rendre",
              "de": "zurückgeben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vivre",
              "lerntext": "vivre",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "reprendre",
              "lerntext": "reprendre",
              "de": "wieder aufnehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "revenir",
              "lerntext": "revenir",
              "de": "zurückkommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "recevoir",
              "lerntext": "recevoir",
              "de": "erhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "appeler",
              "lerntext": "appeler",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crier",
              "lerntext": "crier",
              "de": "schreien",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "falloir",
              "lerntext": "falloir",
              "de": "nötig sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "passer",
              "lerntext": "passer",
              "de": "verbringen",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "finir",
              "lerntext": "finir",
              "de": "beenden",
              "c": "v"
            },
            {
              "schrift": "tourner",
              "lerntext": "tourner",
              "de": "drehen",
              "c": "v"
            },
            {
              "schrift": "garder",
              "lerntext": "garder",
              "de": "behalten",
              "c": "v"
            },
            {
              "schrift": "excuser",
              "lerntext": "excuser",
              "de": "entschuldigen",
              "c": "v"
            },
            {
              "schrift": "chanter",
              "lerntext": "chanter",
              "de": "singen",
              "c": "v"
            },
            {
              "schrift": "suivre",
              "lerntext": "suivre",
              "de": "folgen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "paraître",
              "lerntext": "paraître",
              "de": "erscheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "permettre",
              "lerntext": "permettre",
              "de": "erlauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "asseoir",
              "lerntext": "asseoir",
              "de": "sich setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "apercevoir",
              "lerntext": "apercevoir",
              "de": "bemerken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arriver",
              "lerntext": "arriver",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "rendre",
              "lerntext": "rendre",
              "de": "zurückgeben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vivre",
              "lerntext": "vivre",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "reprendre",
              "lerntext": "reprendre",
              "de": "wieder aufnehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "revenir",
              "lerntext": "revenir",
              "de": "zurückkommen",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "essayer",
              "lerntext": "essayer",
              "de": "versuchen",
              "c": "v"
            },
            {
              "schrift": "ajouter",
              "lerntext": "ajouter",
              "de": "hinzufügen",
              "c": "v"
            },
            {
              "schrift": "choisir",
              "lerntext": "choisir",
              "de": "auswählen",
              "c": "v"
            },
            {
              "schrift": "connaître",
              "lerntext": "connaître",
              "de": "kennen",
              "c": "v"
            },
            {
              "schrift": "tenir",
              "lerntext": "tenir",
              "de": "halten",
              "c": "v"
            },
            {
              "schrift": "finir",
              "lerntext": "finir",
              "de": "beenden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tourner",
              "lerntext": "tourner",
              "de": "drehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "garder",
              "lerntext": "garder",
              "de": "behalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "excuser",
              "lerntext": "excuser",
              "de": "entschuldigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chanter",
              "lerntext": "chanter",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "suivre",
              "lerntext": "suivre",
              "de": "folgen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "paraître",
              "lerntext": "paraître",
              "de": "erscheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "permettre",
              "lerntext": "permettre",
              "de": "erlauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "asseoir",
              "lerntext": "asseoir",
              "de": "sich setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "apercevoir",
              "lerntext": "apercevoir",
              "de": "bemerken",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "porter",
              "lerntext": "porter",
              "de": "tragen",
              "c": "v"
            },
            {
              "schrift": "jeter",
              "lerntext": "jeter",
              "de": "werfen",
              "c": "v"
            },
            {
              "schrift": "tomber",
              "lerntext": "tomber",
              "de": "fallen",
              "c": "v"
            },
            {
              "schrift": "lever",
              "lerntext": "lever",
              "de": "heben",
              "c": "v"
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen",
              "c": "v"
            },
            {
              "schrift": "essayer",
              "lerntext": "essayer",
              "de": "versuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ajouter",
              "lerntext": "ajouter",
              "de": "hinzufügen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "choisir",
              "lerntext": "choisir",
              "de": "auswählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "connaître",
              "lerntext": "connaître",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tenir",
              "lerntext": "tenir",
              "de": "halten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "finir",
              "lerntext": "finir",
              "de": "beenden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tourner",
              "lerntext": "tourner",
              "de": "drehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "garder",
              "lerntext": "garder",
              "de": "behalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "excuser",
              "lerntext": "excuser",
              "de": "entschuldigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chanter",
              "lerntext": "chanter",
              "de": "singen",
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "offrir",
              "lerntext": "offrir",
              "de": "anbieten",
              "c": "v"
            },
            {
              "schrift": "apprendre",
              "lerntext": "apprendre",
              "de": "lernen",
              "c": "v"
            },
            {
              "schrift": "porter",
              "lerntext": "porter",
              "de": "tragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jeter",
              "lerntext": "jeter",
              "de": "werfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tomber",
              "lerntext": "tomber",
              "de": "fallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lever",
              "lerntext": "lever",
              "de": "heben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "essayer",
              "lerntext": "essayer",
              "de": "versuchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ajouter",
              "lerntext": "ajouter",
              "de": "hinzufügen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "choisir",
              "lerntext": "choisir",
              "de": "auswählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "connaître",
              "lerntext": "connaître",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tenir",
              "lerntext": "tenir",
              "de": "halten",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "16.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "offrir",
              "lerntext": "offrir",
              "de": "anbieten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "apprendre",
              "lerntext": "apprendre",
              "de": "lernen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "porter",
              "lerntext": "porter",
              "de": "tragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jeter",
              "lerntext": "jeter",
              "de": "werfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tomber",
              "lerntext": "tomber",
              "de": "fallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lever",
              "lerntext": "lever",
              "de": "heben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen",
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
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est très [Slot]",
          "lerntext": "c'est très [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "autre",
              "lerntext": "autre",
              "de": "andere",
              "c": "a"
            },
            {
              "schrift": "clair",
              "lerntext": "clair",
              "de": "hell",
              "c": "a"
            },
            {
              "schrift": "pauvre",
              "lerntext": "pauvre",
              "de": "arm",
              "c": "a"
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei",
              "c": "a"
            },
            {
              "schrift": "humide",
              "lerntext": "humide",
              "de": "feucht",
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
          "schrift": "c'est très [Slot]",
          "lerntext": "c'est très [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "naturel",
              "lerntext": "naturel",
              "de": "natürlich",
              "c": "a"
            },
            {
              "schrift": "public",
              "lerntext": "public",
              "de": "öffentlich",
              "c": "a"
            },
            {
              "schrift": "inutile",
              "lerntext": "inutile",
              "de": "nutzlos",
              "c": "a"
            },
            {
              "schrift": "tel",
              "lerntext": "tel",
              "de": "solcher",
              "c": "a"
            },
            {
              "schrift": "même",
              "lerntext": "même",
              "de": "gleich",
              "c": "a"
            },
            {
              "schrift": "autre",
              "lerntext": "autre",
              "de": "andere",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "clair",
              "lerntext": "clair",
              "de": "hell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pauvre",
              "lerntext": "pauvre",
              "de": "arm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "humide",
              "lerntext": "humide",
              "de": "feucht",
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
          "schrift": "c'est très [Slot]",
          "lerntext": "c'est très [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "seul",
              "lerntext": "seul",
              "de": "allein",
              "c": "a"
            },
            {
              "schrift": "dernier",
              "lerntext": "dernier",
              "de": "letzte",
              "c": "a"
            },
            {
              "schrift": "sûr",
              "lerntext": "sûr",
              "de": "sicher",
              "c": "a"
            },
            {
              "schrift": "vrai",
              "lerntext": "vrai",
              "de": "wahr",
              "c": "a"
            },
            {
              "schrift": "riche",
              "lerntext": "riche",
              "de": "reich",
              "c": "a"
            },
            {
              "schrift": "naturel",
              "lerntext": "naturel",
              "de": "natürlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "public",
              "lerntext": "public",
              "de": "öffentlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "inutile",
              "lerntext": "inutile",
              "de": "nutzlos",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tel",
              "lerntext": "tel",
              "de": "solcher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "même",
              "lerntext": "même",
              "de": "gleich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "autre",
              "lerntext": "autre",
              "de": "andere",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "clair",
              "lerntext": "clair",
              "de": "hell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pauvre",
              "lerntext": "pauvre",
              "de": "arm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "humide",
              "lerntext": "humide",
              "de": "feucht",
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
          "schrift": "c'est très [Slot]",
          "lerntext": "c'est très [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "plein",
              "lerntext": "plein",
              "de": "voll",
              "c": "a"
            },
            {
              "schrift": "pareil",
              "lerntext": "pareil",
              "de": "gleich",
              "c": "a"
            },
            {
              "schrift": "grave",
              "lerntext": "grave",
              "de": "ernst",
              "c": "a"
            },
            {
              "schrift": "vide",
              "lerntext": "vide",
              "de": "leer",
              "c": "a"
            },
            {
              "schrift": "gauche",
              "lerntext": "gauche",
              "de": "links",
              "c": "a"
            },
            {
              "schrift": "seul",
              "lerntext": "seul",
              "de": "allein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dernier",
              "lerntext": "dernier",
              "de": "letzte",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sûr",
              "lerntext": "sûr",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vrai",
              "lerntext": "vrai",
              "de": "wahr",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "riche",
              "lerntext": "riche",
              "de": "reich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "naturel",
              "lerntext": "naturel",
              "de": "natürlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "public",
              "lerntext": "public",
              "de": "öffentlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "inutile",
              "lerntext": "inutile",
              "de": "nutzlos",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tel",
              "lerntext": "tel",
              "de": "solcher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "même",
              "lerntext": "même",
              "de": "gleich",
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
          "schrift": "c'est très [Slot]",
          "lerntext": "c'est très [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dur",
              "lerntext": "dur",
              "de": "hart",
              "c": "a"
            },
            {
              "schrift": "léger",
              "lerntext": "léger",
              "de": "leicht (Gewicht)",
              "c": "a"
            },
            {
              "schrift": "malheureux",
              "lerntext": "malheureux",
              "de": "unglücklich",
              "c": "a"
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich",
              "c": "a"
            },
            {
              "schrift": "impossible",
              "lerntext": "impossible",
              "de": "unmöglich",
              "c": "a"
            },
            {
              "schrift": "plein",
              "lerntext": "plein",
              "de": "voll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pareil",
              "lerntext": "pareil",
              "de": "gleich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grave",
              "lerntext": "grave",
              "de": "ernst",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vide",
              "lerntext": "vide",
              "de": "leer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gauche",
              "lerntext": "gauche",
              "de": "links",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "seul",
              "lerntext": "seul",
              "de": "allein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dernier",
              "lerntext": "dernier",
              "de": "letzte",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sûr",
              "lerntext": "sûr",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vrai",
              "lerntext": "vrai",
              "de": "wahr",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "riche",
              "lerntext": "riche",
              "de": "reich",
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
          "schrift": "c'est très [Slot]",
          "lerntext": "c'est très [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "privé",
              "lerntext": "privé",
              "de": "privat",
              "c": "a"
            },
            {
              "schrift": "simple",
              "lerntext": "simple",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt",
              "c": "a"
            },
            {
              "schrift": "différent",
              "lerntext": "différent",
              "de": "verschieden",
              "c": "a"
            },
            {
              "schrift": "utile",
              "lerntext": "utile",
              "de": "nützlich",
              "c": "a"
            },
            {
              "schrift": "dur",
              "lerntext": "dur",
              "de": "hart",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "léger",
              "lerntext": "léger",
              "de": "leicht (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malheureux",
              "lerntext": "malheureux",
              "de": "unglücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "impossible",
              "lerntext": "impossible",
              "de": "unmöglich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "plein",
              "lerntext": "plein",
              "de": "voll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pareil",
              "lerntext": "pareil",
              "de": "gleich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "grave",
              "lerntext": "grave",
              "de": "ernst",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vide",
              "lerntext": "vide",
              "de": "leer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gauche",
              "lerntext": "gauche",
              "de": "links",
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
          "schrift": "c'est très [Slot]",
          "lerntext": "c'est très [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "précis",
              "lerntext": "précis",
              "de": "genau",
              "c": "a"
            },
            {
              "schrift": "vif",
              "lerntext": "vif",
              "de": "lebhaft",
              "c": "a"
            },
            {
              "schrift": "privé",
              "lerntext": "privé",
              "de": "privat",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "simple",
              "lerntext": "simple",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "différent",
              "lerntext": "différent",
              "de": "verschieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "utile",
              "lerntext": "utile",
              "de": "nützlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dur",
              "lerntext": "dur",
              "de": "hart",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "léger",
              "lerntext": "léger",
              "de": "leicht (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malheureux",
              "lerntext": "malheureux",
              "de": "unglücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "impossible",
              "lerntext": "impossible",
              "de": "unmöglich",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "17.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est très [Slot]",
          "lerntext": "c'est très [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "précis",
              "lerntext": "précis",
              "de": "genau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vif",
              "lerntext": "vif",
              "de": "lebhaft",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "privé",
              "lerntext": "privé",
              "de": "privat",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "simple",
              "lerntext": "simple",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "différent",
              "lerntext": "différent",
              "de": "verschieden",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "utile",
              "lerntext": "utile",
              "de": "nützlich",
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
          "schrift": "je le fais [Slot]",
          "lerntext": "je le fais [Slot]",
          "wortarten": {
            "je": "p",
            "fais": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tard",
              "lerntext": "tard",
              "de": "spät"
            },
            {
              "schrift": "vraiment",
              "lerntext": "vraiment",
              "de": "wirklich"
            },
            {
              "schrift": "enfin",
              "lerntext": "enfin",
              "de": "endlich"
            },
            {
              "schrift": "surtout",
              "lerntext": "surtout",
              "de": "vor allem"
            },
            {
              "schrift": "dehors",
              "lerntext": "dehors",
              "de": "draußen"
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
          "schrift": "je le fais [Slot]",
          "lerntext": "je le fais [Slot]",
          "wortarten": {
            "je": "p",
            "fais": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "loin",
              "lerntext": "loin",
              "de": "weit"
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut"
            },
            {
              "schrift": "comment",
              "lerntext": "comment",
              "de": "wie"
            },
            {
              "schrift": "encore",
              "lerntext": "encore",
              "de": "noch"
            },
            {
              "schrift": "moins",
              "lerntext": "moins",
              "de": "weniger"
            },
            {
              "schrift": "tard",
              "lerntext": "tard",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "vraiment",
              "lerntext": "vraiment",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "enfin",
              "lerntext": "enfin",
              "de": "endlich",
              "wieder": true
            },
            {
              "schrift": "surtout",
              "lerntext": "surtout",
              "de": "vor allem",
              "wieder": true
            },
            {
              "schrift": "dehors",
              "lerntext": "dehors",
              "de": "draußen",
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
          "schrift": "je le fais [Slot]",
          "lerntext": "je le fais [Slot]",
          "wortarten": {
            "je": "p",
            "fais": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ensuite",
              "lerntext": "ensuite",
              "de": "danach"
            },
            {
              "schrift": "puis",
              "lerntext": "puis",
              "de": "dann"
            },
            {
              "schrift": "tôt",
              "lerntext": "tôt",
              "de": "früh"
            },
            {
              "schrift": "vite",
              "lerntext": "vite",
              "de": "schnell"
            },
            {
              "schrift": "plutôt",
              "lerntext": "plutôt",
              "de": "eher"
            },
            {
              "schrift": "loin",
              "lerntext": "loin",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "comment",
              "lerntext": "comment",
              "de": "wie",
              "wieder": true
            },
            {
              "schrift": "encore",
              "lerntext": "encore",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "moins",
              "lerntext": "moins",
              "de": "weniger",
              "wieder": true
            },
            {
              "schrift": "tard",
              "lerntext": "tard",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "vraiment",
              "lerntext": "vraiment",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "enfin",
              "lerntext": "enfin",
              "de": "endlich",
              "wieder": true
            },
            {
              "schrift": "surtout",
              "lerntext": "surtout",
              "de": "vor allem",
              "wieder": true
            },
            {
              "schrift": "dehors",
              "lerntext": "dehors",
              "de": "draußen",
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
          "schrift": "je le fais [Slot]",
          "lerntext": "je le fais [Slot]",
          "wortarten": {
            "je": "p",
            "fais": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "d'abord",
              "lerntext": "d'abord",
              "de": "zuerst"
            },
            {
              "schrift": "presque",
              "lerntext": "presque",
              "de": "fast"
            },
            {
              "schrift": "tellement",
              "lerntext": "tellement",
              "de": "so sehr"
            },
            {
              "schrift": "environ",
              "lerntext": "environ",
              "de": "ungefähr"
            },
            {
              "schrift": "dedans",
              "lerntext": "dedans",
              "de": "drinnen"
            },
            {
              "schrift": "ensuite",
              "lerntext": "ensuite",
              "de": "danach",
              "wieder": true
            },
            {
              "schrift": "puis",
              "lerntext": "puis",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "tôt",
              "lerntext": "tôt",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "vite",
              "lerntext": "vite",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "plutôt",
              "lerntext": "plutôt",
              "de": "eher",
              "wieder": true
            },
            {
              "schrift": "loin",
              "lerntext": "loin",
              "de": "weit",
              "wieder": true
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "comment",
              "lerntext": "comment",
              "de": "wie",
              "wieder": true
            },
            {
              "schrift": "encore",
              "lerntext": "encore",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "moins",
              "lerntext": "moins",
              "de": "weniger",
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
          "schrift": "je le fais [Slot]",
          "lerntext": "je le fais [Slot]",
          "wortarten": {
            "je": "p",
            "fais": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "autour",
              "lerntext": "autour",
              "de": "herum"
            },
            {
              "schrift": "près",
              "lerntext": "près",
              "de": "nah"
            },
            {
              "schrift": "partout",
              "lerntext": "partout",
              "de": "überall"
            },
            {
              "schrift": "nulle part",
              "lerntext": "nulle part",
              "de": "nirgendwo"
            },
            {
              "schrift": "mieux",
              "lerntext": "mieux",
              "de": "besser"
            },
            {
              "schrift": "d'abord",
              "lerntext": "d'abord",
              "de": "zuerst",
              "wieder": true
            },
            {
              "schrift": "presque",
              "lerntext": "presque",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "tellement",
              "lerntext": "tellement",
              "de": "so sehr",
              "wieder": true
            },
            {
              "schrift": "environ",
              "lerntext": "environ",
              "de": "ungefähr",
              "wieder": true
            },
            {
              "schrift": "dedans",
              "lerntext": "dedans",
              "de": "drinnen",
              "wieder": true
            },
            {
              "schrift": "ensuite",
              "lerntext": "ensuite",
              "de": "danach",
              "wieder": true
            },
            {
              "schrift": "puis",
              "lerntext": "puis",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "tôt",
              "lerntext": "tôt",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "vite",
              "lerntext": "vite",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "plutôt",
              "lerntext": "plutôt",
              "de": "eher",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "18.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je le fais [Slot]",
          "lerntext": "je le fais [Slot]",
          "wortarten": {
            "je": "p",
            "fais": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "autour",
              "lerntext": "autour",
              "de": "herum",
              "wieder": true
            },
            {
              "schrift": "près",
              "lerntext": "près",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "partout",
              "lerntext": "partout",
              "de": "überall",
              "wieder": true
            },
            {
              "schrift": "nulle part",
              "lerntext": "nulle part",
              "de": "nirgendwo",
              "wieder": true
            },
            {
              "schrift": "mieux",
              "lerntext": "mieux",
              "de": "besser",
              "wieder": true
            },
            {
              "schrift": "d'abord",
              "lerntext": "d'abord",
              "de": "zuerst",
              "wieder": true
            },
            {
              "schrift": "presque",
              "lerntext": "presque",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "tellement",
              "lerntext": "tellement",
              "de": "so sehr",
              "wieder": true
            },
            {
              "schrift": "environ",
              "lerntext": "environ",
              "de": "ungefähr",
              "wieder": true
            },
            {
              "schrift": "dedans",
              "lerntext": "dedans",
              "de": "drinnen",
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
        "kind": "frame",
        "frame": {
          "schrift": "je le fais [Slot]",
          "lerntext": "je le fais [Slot]",
          "wortarten": {
            "je": "p",
            "fais": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "autour",
              "lerntext": "autour",
              "de": "herum",
              "wieder": true
            },
            {
              "schrift": "près",
              "lerntext": "près",
              "de": "nah",
              "wieder": true
            },
            {
              "schrift": "partout",
              "lerntext": "partout",
              "de": "überall",
              "wieder": true
            },
            {
              "schrift": "nulle part",
              "lerntext": "nulle part",
              "de": "nirgendwo",
              "wieder": true
            },
            {
              "schrift": "mieux",
              "lerntext": "mieux",
              "de": "besser",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "18.7"
      },
      {
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
        "id": "18.8"
      }
    ]
  },
  {
    "number": 19,
    "title": "Zahlen und Zeit",
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
              "schrift": "hiver",
              "lerntext": "hiver",
              "de": "Winter"
            },
            {
              "schrift": "lundi",
              "lerntext": "lundi",
              "de": "Montag"
            },
            {
              "schrift": "mardi",
              "lerntext": "mardi",
              "de": "Dienstag"
            },
            {
              "schrift": "mercredi",
              "lerntext": "mercredi",
              "de": "Mittwoch"
            },
            {
              "schrift": "jeudi",
              "lerntext": "jeudi",
              "de": "Donnerstag"
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
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vendredi",
              "lerntext": "vendredi",
              "de": "Freitag"
            },
            {
              "schrift": "samedi",
              "lerntext": "samedi",
              "de": "Samstag"
            },
            {
              "schrift": "dimanche",
              "lerntext": "dimanche",
              "de": "Sonntag"
            },
            {
              "schrift": "janvier",
              "lerntext": "janvier",
              "de": "Januar"
            },
            {
              "schrift": "février",
              "lerntext": "février",
              "de": "Februar"
            },
            {
              "schrift": "hiver",
              "lerntext": "hiver",
              "de": "Winter",
              "wieder": true
            },
            {
              "schrift": "lundi",
              "lerntext": "lundi",
              "de": "Montag",
              "wieder": true
            },
            {
              "schrift": "mardi",
              "lerntext": "mardi",
              "de": "Dienstag",
              "wieder": true
            },
            {
              "schrift": "mercredi",
              "lerntext": "mercredi",
              "de": "Mittwoch",
              "wieder": true
            },
            {
              "schrift": "jeudi",
              "lerntext": "jeudi",
              "de": "Donnerstag",
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
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mars",
              "lerntext": "mars",
              "de": "März"
            },
            {
              "schrift": "avril",
              "lerntext": "avril",
              "de": "April"
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "Mai"
            },
            {
              "schrift": "juin",
              "lerntext": "juin",
              "de": "Juni"
            },
            {
              "schrift": "juillet",
              "lerntext": "juillet",
              "de": "Juli"
            },
            {
              "schrift": "vendredi",
              "lerntext": "vendredi",
              "de": "Freitag",
              "wieder": true
            },
            {
              "schrift": "samedi",
              "lerntext": "samedi",
              "de": "Samstag",
              "wieder": true
            },
            {
              "schrift": "dimanche",
              "lerntext": "dimanche",
              "de": "Sonntag",
              "wieder": true
            },
            {
              "schrift": "janvier",
              "lerntext": "janvier",
              "de": "Januar",
              "wieder": true
            },
            {
              "schrift": "février",
              "lerntext": "février",
              "de": "Februar",
              "wieder": true
            },
            {
              "schrift": "hiver",
              "lerntext": "hiver",
              "de": "Winter",
              "wieder": true
            },
            {
              "schrift": "lundi",
              "lerntext": "lundi",
              "de": "Montag",
              "wieder": true
            },
            {
              "schrift": "mardi",
              "lerntext": "mardi",
              "de": "Dienstag",
              "wieder": true
            },
            {
              "schrift": "mercredi",
              "lerntext": "mercredi",
              "de": "Mittwoch",
              "wieder": true
            },
            {
              "schrift": "jeudi",
              "lerntext": "jeudi",
              "de": "Donnerstag",
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
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "août",
              "lerntext": "août",
              "de": "August"
            },
            {
              "schrift": "septembre",
              "lerntext": "septembre",
              "de": "September"
            },
            {
              "schrift": "octobre",
              "lerntext": "octobre",
              "de": "Oktober"
            },
            {
              "schrift": "novembre",
              "lerntext": "novembre",
              "de": "November"
            },
            {
              "schrift": "décembre",
              "lerntext": "décembre",
              "de": "Dezember"
            },
            {
              "schrift": "mars",
              "lerntext": "mars",
              "de": "März",
              "wieder": true
            },
            {
              "schrift": "avril",
              "lerntext": "avril",
              "de": "April",
              "wieder": true
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "Mai",
              "wieder": true
            },
            {
              "schrift": "juin",
              "lerntext": "juin",
              "de": "Juni",
              "wieder": true
            },
            {
              "schrift": "juillet",
              "lerntext": "juillet",
              "de": "Juli",
              "wieder": true
            },
            {
              "schrift": "vendredi",
              "lerntext": "vendredi",
              "de": "Freitag",
              "wieder": true
            },
            {
              "schrift": "samedi",
              "lerntext": "samedi",
              "de": "Samstag",
              "wieder": true
            },
            {
              "schrift": "dimanche",
              "lerntext": "dimanche",
              "de": "Sonntag",
              "wieder": true
            },
            {
              "schrift": "janvier",
              "lerntext": "janvier",
              "de": "Januar",
              "wieder": true
            },
            {
              "schrift": "février",
              "lerntext": "février",
              "de": "Februar",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "19.4"
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
              "schrift": "printemps",
              "lerntext": "printemps",
              "de": "Frühling"
            },
            {
              "schrift": "été",
              "lerntext": "été",
              "de": "Sommer"
            },
            {
              "schrift": "automne",
              "lerntext": "automne",
              "de": "Herbst"
            },
            {
              "schrift": "août",
              "lerntext": "août",
              "de": "August",
              "wieder": true
            },
            {
              "schrift": "septembre",
              "lerntext": "septembre",
              "de": "September",
              "wieder": true
            },
            {
              "schrift": "octobre",
              "lerntext": "octobre",
              "de": "Oktober",
              "wieder": true
            },
            {
              "schrift": "novembre",
              "lerntext": "novembre",
              "de": "November",
              "wieder": true
            },
            {
              "schrift": "décembre",
              "lerntext": "décembre",
              "de": "Dezember",
              "wieder": true
            },
            {
              "schrift": "mars",
              "lerntext": "mars",
              "de": "März",
              "wieder": true
            },
            {
              "schrift": "avril",
              "lerntext": "avril",
              "de": "April",
              "wieder": true
            },
            {
              "schrift": "mai",
              "lerntext": "mai",
              "de": "Mai",
              "wieder": true
            },
            {
              "schrift": "juin",
              "lerntext": "juin",
              "de": "Juni",
              "wieder": true
            },
            {
              "schrift": "juillet",
              "lerntext": "juillet",
              "de": "Juli",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "19.5"
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
              "schrift": "printemps",
              "lerntext": "printemps",
              "de": "Frühling",
              "wieder": true
            },
            {
              "schrift": "été",
              "lerntext": "été",
              "de": "Sommer",
              "wieder": true
            },
            {
              "schrift": "automne",
              "lerntext": "automne",
              "de": "Herbst",
              "wieder": true
            },
            {
              "schrift": "août",
              "lerntext": "août",
              "de": "August",
              "wieder": true
            },
            {
              "schrift": "septembre",
              "lerntext": "septembre",
              "de": "September",
              "wieder": true
            },
            {
              "schrift": "octobre",
              "lerntext": "octobre",
              "de": "Oktober",
              "wieder": true
            },
            {
              "schrift": "novembre",
              "lerntext": "novembre",
              "de": "November",
              "wieder": true
            },
            {
              "schrift": "décembre",
              "lerntext": "décembre",
              "de": "Dezember",
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
              "schrift": "printemps",
              "lerntext": "printemps",
              "de": "Frühling",
              "wieder": true
            },
            {
              "schrift": "été",
              "lerntext": "été",
              "de": "Sommer",
              "wieder": true
            },
            {
              "schrift": "automne",
              "lerntext": "automne",
              "de": "Herbst",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "19.7"
      },
      {
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
        "id": "19.8"
      }
    ]
  },
  {
    "number": 20,
    "title": "Weitere Pronomen",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est pour [Slot]",
          "lerntext": "c'est pour [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ils",
              "lerntext": "ils",
              "de": "sie (m. Pl.)",
              "c": "p"
            },
            {
              "schrift": "elles",
              "lerntext": "elles",
              "de": "sie (f. Pl.)",
              "c": "p"
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
              "de": "ihm",
              "c": "p"
            },
            {
              "schrift": "dont",
              "lerntext": "dont",
              "de": "dessen",
              "c": "p"
            },
            {
              "schrift": "elle",
              "lerntext": "elle",
              "de": "sie (Sg.)",
              "c": "p"
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
          "schrift": "c'est pour [Slot]",
          "lerntext": "c'est pour [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "leur",
              "lerntext": "leur",
              "de": "ihnen",
              "c": "p"
            },
            {
              "schrift": "cet",
              "lerntext": "cet",
              "de": "dieser",
              "c": "p"
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "meine",
              "c": "p"
            },
            {
              "schrift": "tes",
              "lerntext": "tes",
              "de": "deine",
              "c": "p"
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "sein",
              "c": "p"
            },
            {
              "schrift": "ils",
              "lerntext": "ils",
              "de": "sie (m. Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "elles",
              "lerntext": "elles",
              "de": "sie (f. Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
              "de": "ihm",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "dont",
              "lerntext": "dont",
              "de": "dessen",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "elle",
              "lerntext": "elle",
              "de": "sie (Sg.)",
              "c": "p",
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
          "schrift": "c'est pour [Slot]",
          "lerntext": "c'est pour [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sa",
              "lerntext": "sa",
              "de": "seine",
              "c": "p"
            },
            {
              "schrift": "ses",
              "lerntext": "ses",
              "de": "seine",
              "c": "p"
            },
            {
              "schrift": "votre",
              "lerntext": "votre",
              "de": "euer",
              "c": "p"
            },
            {
              "schrift": "vos",
              "lerntext": "vos",
              "de": "eure",
              "c": "p"
            },
            {
              "schrift": "leurs",
              "lerntext": "leurs",
              "de": "ihre",
              "c": "p"
            },
            {
              "schrift": "leur",
              "lerntext": "leur",
              "de": "ihnen",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "cet",
              "lerntext": "cet",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "meine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tes",
              "lerntext": "tes",
              "de": "deine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ils",
              "lerntext": "ils",
              "de": "sie (m. Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "elles",
              "lerntext": "elles",
              "de": "sie (f. Pl.)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
              "de": "ihm",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "dont",
              "lerntext": "dont",
              "de": "dessen",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "elle",
              "lerntext": "elle",
              "de": "sie (Sg.)",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "20.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est pour [Slot]",
          "lerntext": "c'est pour [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sa",
              "lerntext": "sa",
              "de": "seine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ses",
              "lerntext": "ses",
              "de": "seine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "votre",
              "lerntext": "votre",
              "de": "euer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vos",
              "lerntext": "vos",
              "de": "eure",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "leurs",
              "lerntext": "leurs",
              "de": "ihre",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "leur",
              "lerntext": "leur",
              "de": "ihnen",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "cet",
              "lerntext": "cet",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "meine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tes",
              "lerntext": "tes",
              "de": "deine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "sein",
              "c": "p",
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
        "kind": "frame",
        "frame": {
          "schrift": "c'est pour [Slot]",
          "lerntext": "c'est pour [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sa",
              "lerntext": "sa",
              "de": "seine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ses",
              "lerntext": "ses",
              "de": "seine",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "votre",
              "lerntext": "votre",
              "de": "euer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vos",
              "lerntext": "vos",
              "de": "eure",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "leurs",
              "lerntext": "leurs",
              "de": "ihre",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "20.5"
      },
      {
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
        "id": "20.6"
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
          "schrift": "c'est [Slot] la maison",
          "lerntext": "c'est [Slot] la maison",
          "wortarten": {
            "maison": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sauf",
              "lerntext": "sauf",
              "de": "außer"
            },
            {
              "schrift": "malgré",
              "lerntext": "malgré",
              "de": "trotz"
            },
            {
              "schrift": "dans",
              "lerntext": "dans",
              "de": "in"
            },
            {
              "schrift": "vers",
              "lerntext": "vers",
              "de": "in Richtung"
            },
            {
              "schrift": "avant",
              "lerntext": "avant",
              "de": "vor (zeitlich)"
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
          "schrift": "c'est [Slot] la maison",
          "lerntext": "c'est [Slot] la maison",
          "wortarten": {
            "maison": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "après",
              "lerntext": "après",
              "de": "nach (zeitlich)"
            },
            {
              "schrift": "jusqu'à",
              "lerntext": "jusqu'à",
              "de": "bis zu"
            },
            {
              "schrift": "parmi",
              "lerntext": "parmi",
              "de": "unter (Menge)"
            },
            {
              "schrift": "selon",
              "lerntext": "selon",
              "de": "laut"
            },
            {
              "schrift": "sauf",
              "lerntext": "sauf",
              "de": "außer",
              "wieder": true
            },
            {
              "schrift": "malgré",
              "lerntext": "malgré",
              "de": "trotz",
              "wieder": true
            },
            {
              "schrift": "dans",
              "lerntext": "dans",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "vers",
              "lerntext": "vers",
              "de": "in Richtung",
              "wieder": true
            },
            {
              "schrift": "avant",
              "lerntext": "avant",
              "de": "vor (zeitlich)",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "21.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "c'est [Slot] la maison",
          "lerntext": "c'est [Slot] la maison",
          "wortarten": {
            "maison": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "après",
              "lerntext": "après",
              "de": "nach (zeitlich)",
              "wieder": true
            },
            {
              "schrift": "jusqu'à",
              "lerntext": "jusqu'à",
              "de": "bis zu",
              "wieder": true
            },
            {
              "schrift": "parmi",
              "lerntext": "parmi",
              "de": "unter (Menge)",
              "wieder": true
            },
            {
              "schrift": "selon",
              "lerntext": "selon",
              "de": "laut",
              "wieder": true
            },
            {
              "schrift": "sauf",
              "lerntext": "sauf",
              "de": "außer",
              "wieder": true
            },
            {
              "schrift": "malgré",
              "lerntext": "malgré",
              "de": "trotz",
              "wieder": true
            },
            {
              "schrift": "dans",
              "lerntext": "dans",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "vers",
              "lerntext": "vers",
              "de": "in Richtung",
              "wieder": true
            },
            {
              "schrift": "avant",
              "lerntext": "avant",
              "de": "vor (zeitlich)",
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
          "schrift": "c'est [Slot] la maison",
          "lerntext": "c'est [Slot] la maison",
          "wortarten": {
            "maison": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "après",
              "lerntext": "après",
              "de": "nach (zeitlich)",
              "wieder": true
            },
            {
              "schrift": "jusqu'à",
              "lerntext": "jusqu'à",
              "de": "bis zu",
              "wieder": true
            },
            {
              "schrift": "parmi",
              "lerntext": "parmi",
              "de": "unter (Menge)",
              "wieder": true
            },
            {
              "schrift": "selon",
              "lerntext": "selon",
              "de": "laut",
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
    "title": "Weitere Bindewörter",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "je viens [Slot] je peux",
          "lerntext": "je viens [Slot] je peux",
          "wortarten": {
            "je": "p",
            "viens": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "puisque",
              "lerntext": "puisque",
              "de": "da ja",
              "c": "k"
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "denn",
              "c": "k"
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "weder",
              "c": "k"
            },
            {
              "schrift": "quoique",
              "lerntext": "quoique",
              "de": "obwohl",
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
          "schrift": "je viens [Slot] je peux",
          "lerntext": "je viens [Slot] je peux",
          "wortarten": {
            "je": "p",
            "viens": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "puisque",
              "lerntext": "puisque",
              "de": "da ja",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "denn",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "weder",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "quoique",
              "lerntext": "quoique",
              "de": "obwohl",
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
          "schrift": "je viens [Slot] je peux",
          "lerntext": "je viens [Slot] je peux",
          "wortarten": {
            "je": "p",
            "viens": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "puisque",
              "lerntext": "puisque",
              "de": "da ja",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "denn",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "weder",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "quoique",
              "lerntext": "quoique",
              "de": "obwohl",
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
          "schrift": "[Slot] livre",
          "lerntext": "[Slot] livre",
          "wortarten": {
            "livre": "n"
          }
        },
        "frameDe": "[Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "les",
              "lerntext": "les",
              "de": "die"
            },
            {
              "schrift": "des",
              "lerntext": "des",
              "de": "einige"
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
    "title": "Weitere Wörter",
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
              "schrift": "Mot_extra_1",
              "lerntext": "Mot_extra_1",
              "de": "Extra_Wort_1"
            },
            {
              "schrift": "Mot_extra_2",
              "lerntext": "Mot_extra_2",
              "de": "Extra_Wort_2"
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
          "schrift": "je ai [Slot]",
          "lerntext": "je ai [Slot]",
          "wortarten": {
            "je": "p",
            "ai": "v"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "regardé",
              "lerntext": "regardé",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "acheté",
              "lerntext": "acheté",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "vu",
              "lerntext": "vu",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "trouvé",
              "lerntext": "trouvé",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "écrit",
              "lerntext": "écrit",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendu",
              "lerntext": "entendu",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdu",
              "lerntext": "perdu",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pris",
              "lerntext": "pris",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoyé",
              "lerntext": "envoyé",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montré",
              "lerntext": "montré",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parlé",
              "lerntext": "parlé",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencé",
              "lerntext": "commencé",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "voulu",
              "lerntext": "voulu",
              "de": "wollen",
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
          "schrift": "je ai [Slot]",
          "lerntext": "je ai [Slot]",
          "wortarten": {
            "je": "p",
            "ai": "v"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pris",
              "lerntext": "pris",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "écrit",
              "lerntext": "écrit",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "entendu",
              "lerntext": "entendu",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "perdu",
              "lerntext": "perdu",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "regardé",
              "lerntext": "regardé",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vu",
              "lerntext": "vu",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "acheté",
              "lerntext": "acheté",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trouvé",
              "lerntext": "trouvé",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoyé",
              "lerntext": "envoyé",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mis",
              "lerntext": "mis",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mort",
              "lerntext": "mort",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliqué",
              "lerntext": "expliqué",
              "de": "erklären",
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
          "schrift": "hier j'ai [Slot]",
          "lerntext": "hier j'ai [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travaillé",
              "lerntext": "travaillé",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "joué",
              "lerntext": "joué",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dormi",
              "lerntext": "dormi",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "attendu",
              "lerntext": "attendu",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "cherché",
              "lerntext": "cherché",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "demandé",
              "lerntext": "demandé",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "payé",
              "lerntext": "payé",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "répondu",
              "lerntext": "répondu",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoyé",
              "lerntext": "envoyé",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangé",
              "lerntext": "mangé",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "senti",
              "lerntext": "senti",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "donné",
              "lerntext": "donné",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendu",
              "lerntext": "vendu",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cru",
              "lerntext": "cru",
              "de": "glauben",
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
          "schrift": "hier j'ai [Slot]",
          "lerntext": "hier j'ai [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "demandé",
              "lerntext": "demandé",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "répondu",
              "lerntext": "répondu",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "payé",
              "lerntext": "payé",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "travaillé",
              "lerntext": "travaillé",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormi",
              "lerntext": "dormi",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "attendu",
              "lerntext": "attendu",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cherché",
              "lerntext": "cherché",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "joué",
              "lerntext": "joué",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venu",
              "lerntext": "venu",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensé",
              "lerntext": "pensé",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écouté",
              "lerntext": "écouté",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "resté",
              "lerntext": "resté",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoyé",
              "lerntext": "envoyé",
              "de": "schicken",
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
          "schrift": "j'ai déjà [Slot]",
          "lerntext": "j'ai déjà [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oublié",
              "lerntext": "oublié",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "donné",
              "lerntext": "donné",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "dit",
              "lerntext": "dit",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "parlé",
              "lerntext": "parlé",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêté",
              "lerntext": "arrêté",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "allé",
              "lerntext": "allé",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ri",
              "lerntext": "ri",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dû",
              "lerntext": "dû",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "marché",
              "lerntext": "marché",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "utilisé",
              "lerntext": "utilisé",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devenu",
              "lerntext": "devenu",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "su",
              "lerntext": "su",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bu",
              "lerntext": "bu",
              "de": "trinken",
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
          "schrift": "j'ai déjà [Slot]",
          "lerntext": "j'ai déjà [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "oublié",
              "lerntext": "oublié",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "donné",
              "lerntext": "donné",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dit",
              "lerntext": "dit",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parlé",
              "lerntext": "parlé",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montré",
              "lerntext": "montré",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencé",
              "lerntext": "commencé",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "eu",
              "lerntext": "eu",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "voulu",
              "lerntext": "voulu",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mis",
              "lerntext": "mis",
              "de": "setzen",
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
              "schrift": "regardes",
              "lerntext": "regardes",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "achètes",
              "lerntext": "achètes",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "vois",
              "lerntext": "vois",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "fais",
              "lerntext": "fais",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "trouves",
              "lerntext": "trouves",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "écris",
              "lerntext": "écris",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prends",
              "lerntext": "prends",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "meurs",
              "lerntext": "meurs",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliques",
              "lerntext": "expliques",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "manges",
              "lerntext": "manges",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aimes",
              "lerntext": "aimes",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vends",
              "lerntext": "vends",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crois",
              "lerntext": "crois",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viens",
              "lerntext": "viens",
              "de": "kommen",
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
              "schrift": "prends",
              "lerntext": "prends",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "écris",
              "lerntext": "écris",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "regardes",
              "lerntext": "regardes",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vois",
              "lerntext": "vois",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "fais",
              "lerntext": "fais",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "achètes",
              "lerntext": "achètes",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trouves",
              "lerntext": "trouves",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "penses",
              "lerntext": "penses",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écoutes",
              "lerntext": "écoutes",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "restes",
              "lerntext": "restes",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoies",
              "lerntext": "envoies",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêtes",
              "lerntext": "arrêtes",
              "de": "anhalten",
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
          "schrift": "il [Slot]",
          "lerntext": "il [Slot]",
          "wortarten": {
            "il": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travaille",
              "lerntext": "travaille",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "joue",
              "lerntext": "joue",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dort",
              "lerntext": "dort",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "attend",
              "lerntext": "attend",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "cherche",
              "lerntext": "cherche",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "demande",
              "lerntext": "demande",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "répond",
              "lerntext": "répond",
              "de": "antworten",
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
              "schrift": "rit",
              "lerntext": "rit",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "doit",
              "lerntext": "doit",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "marche",
              "lerntext": "marche",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "utilise",
              "lerntext": "utilise",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devient",
              "lerntext": "devient",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sait",
              "lerntext": "sait",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boit",
              "lerntext": "boit",
              "de": "trinken",
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
          "schrift": "il [Slot]",
          "lerntext": "il [Slot]",
          "wortarten": {
            "il": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "demande",
              "lerntext": "demande",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "répond",
              "lerntext": "répond",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "travaille",
              "lerntext": "travaille",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dort",
              "lerntext": "dort",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "attend",
              "lerntext": "attend",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cherche",
              "lerntext": "cherche",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "joue",
              "lerntext": "joue",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montre",
              "lerntext": "montre",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commence",
              "lerntext": "commence",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "a",
              "lerntext": "a",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "veut",
              "lerntext": "veut",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "met",
              "lerntext": "met",
              "de": "setzen",
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
          "schrift": "nous [Slot]",
          "lerntext": "nous [Slot]",
          "wortarten": {
            "nous": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oublions",
              "lerntext": "oublions",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "comprenons",
              "lerntext": "comprenons",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "donnons",
              "lerntext": "donnons",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "disons",
              "lerntext": "disons",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "parlons",
              "lerntext": "parlons",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "ouvrons",
              "lerntext": "ouvrons",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mourons",
              "lerntext": "mourons",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliquons",
              "lerntext": "expliquons",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mangeons",
              "lerntext": "mangeons",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentons",
              "lerntext": "sentons",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aimons",
              "lerntext": "aimons",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendons",
              "lerntext": "vendons",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "croyons",
              "lerntext": "croyons",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venons",
              "lerntext": "venons",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensons",
              "lerntext": "pensons",
              "de": "denken",
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
          "schrift": "nous [Slot]",
          "lerntext": "nous [Slot]",
          "wortarten": {
            "nous": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ouvrons",
              "lerntext": "ouvrons",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "oublions",
              "lerntext": "oublions",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprenons",
              "lerntext": "comprenons",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "donnons",
              "lerntext": "donnons",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "disons",
              "lerntext": "disons",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parlons",
              "lerntext": "parlons",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écoutons",
              "lerntext": "écoutons",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "restons",
              "lerntext": "restons",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoyons",
              "lerntext": "envoyons",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêtons",
              "lerntext": "arrêtons",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "allons",
              "lerntext": "allons",
              "de": "gehen",
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
          "schrift": "vous [Slot]",
          "lerntext": "vous [Slot]",
          "wortarten": {
            "vous": "p"
          }
        },
        "frameDe": "ihr [Slot].",
        "pronouns": [
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "restent",
              "lerntext": "restent",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "rient",
              "lerntext": "rient",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "pensent",
              "lerntext": "pensent",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "croient",
              "lerntext": "croient",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "doivent",
              "lerntext": "doivent",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "marchent",
              "lerntext": "marchent",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "utilisent",
              "lerntext": "utilisent",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "deviennent",
              "lerntext": "deviennent",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "savent",
              "lerntext": "savent",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boivent",
              "lerntext": "boivent",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montrent",
              "lerntext": "montrent",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencent",
              "lerntext": "commencent",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ont",
              "lerntext": "ont",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "veulent",
              "lerntext": "veulent",
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
        "id": "26.8"
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
          "schrift": "c'est plus [Slot]",
          "lerntext": "c'est plus [Slot]"
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
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a"
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "plus",
            "lerntext": "plus",
            "de": "mehr"
          }
        ],
        "id": "27.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "suis aussi [Slot] que toi",
          "lerntext": "suis aussi [Slot] que toi",
          "wortarten": {
            "suis": "v",
            "toi": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
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
            "schrift": "lorsque",
            "lerntext": "lorsque",
            "de": "als",
            "c": "k"
          }
        ],
        "id": "27.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "suis aussi [Slot] que toi",
          "lerntext": "suis aussi [Slot] que toi",
          "wortarten": {
            "suis": "v",
            "toi": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
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
        "id": "27.4"
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
          "schrift": "je me sens [Slot]",
          "lerntext": "je me sens [Slot]",
          "wortarten": {
            "je": "p",
            "me": "p"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "malade",
              "lerntext": "malade",
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
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
              "c": "a"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "sens",
            "lerntext": "sens",
            "de": "Sinn",
            "c": "n"
          }
        ],
        "id": "28.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je me sens [Slot]",
          "lerntext": "je me sens [Slot]",
          "wortarten": {
            "je": "p",
            "me": "p"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
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
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
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
          "schrift": "nous nous voyons [Slot]",
          "lerntext": "nous nous voyons [Slot]",
          "wortarten": {
            "nous": "p",
            "voyons": "v"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aujourd'hui",
              "lerntext": "aujourd'hui",
              "de": "heute"
            },
            {
              "schrift": "maintenant",
              "lerntext": "maintenant",
              "de": "jetzt"
            },
            {
              "schrift": "bientôt",
              "lerntext": "bientôt",
              "de": "bald"
            },
            {
              "schrift": "hier",
              "lerntext": "hier",
              "de": "gestern"
            },
            {
              "schrift": "souvent",
              "lerntext": "souvent",
              "de": "oft"
            },
            {
              "schrift": "jamais",
              "lerntext": "jamais",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "toujours",
              "lerntext": "toujours",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "plus",
              "lerntext": "plus",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "quand",
              "lerntext": "quand",
              "de": "wann",
              "wieder": true
            },
            {
              "schrift": "là",
              "lerntext": "là",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "peu",
              "lerntext": "peu",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "ensemble",
              "lerntext": "ensemble",
              "de": "zusammen",
              "wieder": true
            },
            {
              "schrift": "assez",
              "lerntext": "assez",
              "de": "genug",
              "wieder": true
            },
            {
              "schrift": "oui",
              "lerntext": "oui",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "alors",
              "lerntext": "alors",
              "de": "dann",
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
          "schrift": "nous nous voyons [Slot]",
          "lerntext": "nous nous voyons [Slot]",
          "wortarten": {
            "nous": "p",
            "voyons": "v"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jamais",
              "lerntext": "jamais",
              "de": "nie"
            },
            {
              "schrift": "toujours",
              "lerntext": "toujours",
              "de": "immer"
            },
            {
              "schrift": "aujourd'hui",
              "lerntext": "aujourd'hui",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "bientôt",
              "lerntext": "bientôt",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "souvent",
              "lerntext": "souvent",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "maintenant",
              "lerntext": "maintenant",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "hier",
              "lerntext": "hier",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "plus",
              "lerntext": "plus",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "quand",
              "lerntext": "quand",
              "de": "wann",
              "wieder": true
            },
            {
              "schrift": "beaucoup",
              "lerntext": "beaucoup",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "peut-être",
              "lerntext": "peut-être",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "parfois",
              "lerntext": "parfois",
              "de": "manchmal",
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
          "schrift": "je reste ici [Slot] je suis fatigué",
          "lerntext": "je reste ici [Slot] je suis fatigué",
          "wortarten": {
            "je": "p",
            "reste": "v",
            "suis": "v"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "wenn",
              "c": "k"
            },
            {
              "schrift": "bien que",
              "lerntext": "bien que",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "lorsque",
              "lerntext": "lorsque",
              "de": "als",
              "c": "k"
            },
            {
              "schrift": "mais",
              "lerntext": "mais",
              "de": "aber",
              "c": "k"
            },
            {
              "schrift": "ou",
              "lerntext": "ou",
              "de": "oder",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "et",
              "lerntext": "et",
              "de": "und",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "donc",
              "lerntext": "donc",
              "de": "also",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "comme",
              "lerntext": "comme",
              "de": "wie",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit",
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
          "schrift": "je reste ici [Slot] je suis fatigué",
          "lerntext": "je reste ici [Slot] je suis fatigué",
          "wortarten": {
            "je": "p",
            "reste": "v",
            "suis": "v"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ou",
              "lerntext": "ou",
              "de": "oder",
              "c": "k"
            },
            {
              "schrift": "et",
              "lerntext": "et",
              "de": "und",
              "c": "k"
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "wenn",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "lorsque",
              "lerntext": "lorsque",
              "de": "als",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "bien que",
              "lerntext": "bien que",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "mais",
              "lerntext": "mais",
              "de": "aber",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "donc",
              "lerntext": "donc",
              "de": "also",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "comme",
              "lerntext": "comme",
              "de": "wie",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit",
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
          "schrift": "je crois que c'est [Slot]",
          "lerntext": "je crois que c'est [Slot]",
          "wortarten": {
            "je": "p",
            "crois": "v"
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
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "dass",
            "c": "p"
          }
        ],
        "id": "29.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je crois que c'est [Slot]",
          "lerntext": "je crois que c'est [Slot]",
          "wortarten": {
            "je": "p",
            "crois": "v"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a"
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
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
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
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
          "schrift": "si j'ai le temps, je veux [Slot]",
          "lerntext": "si j'ai le temps, je veux [Slot]",
          "wortarten": {
            "si": "k",
            "temps,": "n",
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aimer",
              "lerntext": "aimer",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken",
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
        "id": "29.6"
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
          "schrift": "peux-tu [Slot], je te prie ?",
          "lerntext": "peux-tu [Slot], je te prie ?",
          "wortarten": {
            "je": "p",
            "te": "p"
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
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
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
          "schrift": "peux-tu [Slot], je te prie ?",
          "lerntext": "peux-tu [Slot], je te prie ?",
          "wortarten": {
            "je": "p",
            "te": "p"
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
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
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
          "schrift": "tu dois [Slot]",
          "lerntext": "tu dois [Slot]",
          "wortarten": {
            "tu": "p",
            "dois": "v"
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
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aimer",
              "lerntext": "aimer",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
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
          "schrift": "tu dois [Slot]",
          "lerntext": "tu dois [Slot]",
          "wortarten": {
            "tu": "p",
            "dois": "v"
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
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
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
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
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
          "schrift": "je donne le livre à [Slot]",
          "lerntext": "je donne le livre à [Slot]",
          "wortarten": {
            "je": "p",
            "donne": "v",
            "livre": "n"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "Sinn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
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
          "schrift": "je donne le livre à [Slot]",
          "lerntext": "je donne le livre à [Slot]",
          "wortarten": {
            "je": "p",
            "donne": "v",
            "livre": "n"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "Sinn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
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
          "schrift": "je montre la ville à [Slot]",
          "lerntext": "je montre la ville à [Slot]",
          "wortarten": {
            "je": "p",
            "montre": "v",
            "ville": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n"
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "c": "n"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "Tatsache",
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
          "schrift": "je montre la ville à [Slot]",
          "lerntext": "je montre la ville à [Slot]",
          "wortarten": {
            "je": "p",
            "montre": "v",
            "ville": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "c": "n"
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
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
          "schrift": "je veux un verre de [Slot]",
          "lerntext": "je veux un verre de [Slot]",
          "wortarten": {
            "je": "p",
            "veux": "v",
            "verre": "n"
          }
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "Sinn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "repas",
              "lerntext": "repas",
              "de": "Mahlzeit",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "verre",
            "lerntext": "verre",
            "de": "Glas",
            "c": "n"
          }
        ],
        "id": "32.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nous avons assez de [Slot]",
          "lerntext": "nous avons assez de [Slot]",
          "wortarten": {
            "nous": "p",
            "avons": "v"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "c": "n"
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "c": "n"
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "Tatsache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "assez",
            "lerntext": "assez",
            "de": "genug"
          }
        ],
        "id": "32.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nous avons assez de [Slot]",
          "lerntext": "nous avons assez de [Slot]",
          "wortarten": {
            "nous": "p",
            "avons": "v"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "c": "n"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
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
          "schrift": "je attends depuis une [Slot]",
          "lerntext": "je attends depuis une [Slot]",
          "wortarten": {
            "je": "p",
            "attends": "v"
          }
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
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
            "schrift": "depuis",
            "lerntext": "depuis",
            "de": "seit"
          },
          {
            "schrift": "une",
            "lerntext": "une",
            "de": "eine"
          }
        ],
        "id": "33.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je attends depuis une [Slot]",
          "lerntext": "je attends depuis une [Slot]",
          "wortarten": {
            "je": "p",
            "attends": "v"
          }
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "c": "n"
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "Sinn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
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
          "schrift": "[Slot] je vais à la maison",
          "lerntext": "[Slot] je vais à la maison",
          "wortarten": {
            "je": "p",
            "vais": "v",
            "maison": "n"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aujourd'hui",
              "lerntext": "aujourd'hui",
              "de": "heute"
            },
            {
              "schrift": "maintenant",
              "lerntext": "maintenant",
              "de": "jetzt"
            },
            {
              "schrift": "bientôt",
              "lerntext": "bientôt",
              "de": "bald"
            },
            {
              "schrift": "hier",
              "lerntext": "hier",
              "de": "gestern"
            },
            {
              "schrift": "souvent",
              "lerntext": "souvent",
              "de": "oft"
            },
            {
              "schrift": "jamais",
              "lerntext": "jamais",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "toujours",
              "lerntext": "toujours",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "là",
              "lerntext": "là",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "plus",
              "lerntext": "plus",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "pourquoi",
              "lerntext": "pourquoi",
              "de": "warum",
              "wieder": true
            },
            {
              "schrift": "seulement",
              "lerntext": "seulement",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "demain",
              "lerntext": "demain",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "non",
              "lerntext": "non",
              "de": "nein",
              "wieder": true
            },
            {
              "schrift": "peu",
              "lerntext": "peu",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "ensemble",
              "lerntext": "ensemble",
              "de": "zusammen",
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
          "schrift": "[Slot] je vais à la maison",
          "lerntext": "[Slot] je vais à la maison",
          "wortarten": {
            "je": "p",
            "vais": "v",
            "maison": "n"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jamais",
              "lerntext": "jamais",
              "de": "nie"
            },
            {
              "schrift": "toujours",
              "lerntext": "toujours",
              "de": "immer"
            },
            {
              "schrift": "aujourd'hui",
              "lerntext": "aujourd'hui",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "bientôt",
              "lerntext": "bientôt",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "souvent",
              "lerntext": "souvent",
              "de": "oft",
              "wieder": true
            },
            {
              "schrift": "maintenant",
              "lerntext": "maintenant",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "hier",
              "lerntext": "hier",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "quand",
              "lerntext": "quand",
              "de": "wann",
              "wieder": true
            },
            {
              "schrift": "oui",
              "lerntext": "oui",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "alors",
              "lerntext": "alors",
              "de": "dann",
              "wieder": true
            },
            {
              "schrift": "beaucoup",
              "lerntext": "beaucoup",
              "de": "viel",
              "wieder": true
            },
            {
              "schrift": "peut-être",
              "lerntext": "peut-être",
              "de": "vielleicht",
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
          "schrift": "je voudrais [Slot]",
          "lerntext": "je voudrais [Slot]",
          "wortarten": {
            "je": "p"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
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
          "schrift": "pourriez-vous me donner [Slot] ?",
          "lerntext": "pourriez-vous me donner [Slot] ?",
          "wortarten": {
            "me": "p",
            "donner": "v"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n"
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n"
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "repas",
              "lerntext": "repas",
              "de": "Mahlzeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "c": "n",
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
          "schrift": "pourriez-vous me donner [Slot] ?",
          "lerntext": "pourriez-vous me donner [Slot] ?",
          "wortarten": {
            "me": "p",
            "donner": "v"
          }
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "c": "n"
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "Tatsache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
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
        "id": "34.4"
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
          "schrift": "je pense que c'est [Slot]",
          "lerntext": "je pense que c'est [Slot]",
          "wortarten": {
            "je": "p",
            "pense": "v"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
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
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
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
          "schrift": "je pense que c'est [Slot]",
          "lerntext": "je pense que c'est [Slot]",
          "wortarten": {
            "je": "p",
            "pense": "v"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "c": "a"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "c": "a"
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
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
          "schrift": "je trouve ça très [Slot]",
          "lerntext": "je trouve ça très [Slot]",
          "wortarten": {
            "je": "p",
            "trouve": "v"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a"
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
              "c": "a",
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
          "schrift": "je trouve ça très [Slot]",
          "lerntext": "je trouve ça très [Slot]",
          "wortarten": {
            "je": "p",
            "trouve": "v"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "c": "a"
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "c": "a"
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
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
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
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
          "schrift": "demain je vais [Slot]",
          "lerntext": "demain je vais [Slot]",
          "wortarten": {
            "je": "p",
            "vais": "v"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aimer",
              "lerntext": "aimer",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
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
          "schrift": "demain je vais [Slot]",
          "lerntext": "demain je vais [Slot]",
          "wortarten": {
            "je": "p",
            "vais": "v"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
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
          "schrift": "je veux [Slot] bientôt",
          "lerntext": "je veux [Slot] bientôt",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
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
          "schrift": "je veux [Slot] bientôt",
          "lerntext": "je veux [Slot] bientôt",
          "wortarten": {
            "je": "p",
            "veux": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
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
          "schrift": "c'est l'homme qui [Slot]",
          "lerntext": "c'est l'homme qui [Slot]",
          "wortarten": {
            "qui": "p"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "reste",
              "lerntext": "reste",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "rit",
              "lerntext": "rit",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "pense",
              "lerntext": "pense",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "croit",
              "lerntext": "croit",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "mange",
              "lerntext": "mange",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sent",
              "lerntext": "sent",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aime",
              "lerntext": "aime",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vend",
              "lerntext": "vend",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vient",
              "lerntext": "vient",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perd",
              "lerntext": "perd",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écoute",
              "lerntext": "écoute",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoie",
              "lerntext": "envoie",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrête",
              "lerntext": "arrête",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "va",
              "lerntext": "va",
              "de": "gehen",
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
          "schrift": "je cherche un endroit où on peut [Slot]",
          "lerntext": "je cherche un endroit où on peut [Slot]",
          "wortarten": {
            "je": "p",
            "cherche": "v",
            "endroit": "n",
            "où": "p",
            "on": "p"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo",
            "c": "p"
          },
          {
            "schrift": "endroit",
            "lerntext": "endroit",
            "de": "Ort",
            "c": "n"
          }
        ],
        "id": "37.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je cherche un endroit où on peut [Slot]",
          "lerntext": "je cherche un endroit où on peut [Slot]",
          "wortarten": {
            "je": "p",
            "cherche": "v",
            "endroit": "n",
            "où": "p",
            "on": "p"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "c": "v"
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
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
        "id": "37.4"
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
          "schrift": "hier j'étais à [Slot]",
          "lerntext": "hier j'étais à [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "endroit",
              "lerntext": "endroit",
              "de": "Ort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
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
          "schrift": "je veux [Slot] parce que j'ai le temps",
          "lerntext": "je veux [Slot] parce que j'ai le temps",
          "wortarten": {
            "je": "p",
            "veux": "v",
            "temps": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "c": "v"
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aimer",
              "lerntext": "aimer",
              "de": "lieben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
              "c": "v",
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
          "schrift": "je veux [Slot] parce que j'ai le temps",
          "lerntext": "je veux [Slot] parce que j'ai le temps",
          "wortarten": {
            "je": "p",
            "veux": "v",
            "temps": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen",
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
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
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
        "id": "38.4"
      }
    ]
  }
];
