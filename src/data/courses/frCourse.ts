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
          "lerntext": "je suis [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank"
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "suis",
            "lerntext": "suis",
            "de": "sein"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nous sommes [Slot]",
          "lerntext": "nous sommes [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "man"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student"
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer"
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund"
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind"
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
          "lerntext": "il est très [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett"
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön"
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung"
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
          "lerntext": "il est très [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt"
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich"
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
          "lerntext": "il est très [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
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
          "lerntext": "nous sommes [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "man"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
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
          "lerntext": "il est très [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
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
          "schrift": "nous sommes [Slot]",
          "lerntext": "nous sommes [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "man"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür"
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester"
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl"
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche"
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater"
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder"
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch"
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
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
          "lerntext": "il y a une [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch"
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
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
            "de": "dorthin"
          }
        ],
        "id": "2.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "il y a une [Slot]",
          "lerntext": "il y a une [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus"
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer"
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
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
          "lerntext": "il y a un [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas"
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro"
            },
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
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
          "schrift": "je ai une [Slot]",
          "lerntext": "je ai une [Slot]"
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie"
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand"
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
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
            "de": "haben"
          }
        ],
        "id": "2.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je ai une [Slot]",
          "lerntext": "je ai une [Slot]"
        },
        "frameDe": "ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen"
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto"
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
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
          "lerntext": "je ai un [Slot]"
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß"
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
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
          "lerntext": "c'est mon [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein"
          },
          {
            "schrift": "ton",
            "lerntext": "ton",
            "de": "dein"
          },
          {
            "schrift": "notre",
            "lerntext": "notre",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter"
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater"
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau"
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
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
          "lerntext": "c'est [Slot] maison"
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein"
          },
          {
            "schrift": "ton",
            "lerntext": "ton",
            "de": "dein"
          },
          {
            "schrift": "notre",
            "lerntext": "notre",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein"
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
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
          "lerntext": "ce sont [Slot] livres"
        },
        "frameDe": "Das sind [Slot] Bücher.",
        "pronouns": [
          {
            "schrift": "ma",
            "lerntext": "ma",
            "de": "meine"
          },
          {
            "schrift": "ta",
            "lerntext": "ta",
            "de": "deine"
          },
          {
            "schrift": "nos",
            "lerntext": "nos",
            "de": "unsere"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese"
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "man",
              "wieder": true
            },
            {
              "schrift": "je",
              "lerntext": "je",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "nous",
              "lerntext": "nous",
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
              "schrift": "notre",
              "lerntext": "notre",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "ton",
              "lerntext": "ton",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "mon",
              "lerntext": "mon",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "vous",
              "lerntext": "vous",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "y",
              "lerntext": "y",
              "de": "dorthin",
              "wieder": true
            },
            {
              "schrift": "il",
              "lerntext": "il",
              "de": "er",
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
            "de": "dieser"
          }
        ],
        "id": "2.14"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] est ici",
          "lerntext": "[Slot] est ici"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ce",
              "lerntext": "ce",
              "de": "dieser"
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein"
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "meine",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "man",
              "wieder": true
            },
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese",
              "wieder": true
            },
            {
              "schrift": "je",
              "lerntext": "je",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "nous",
              "lerntext": "nous",
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
              "schrift": "notre",
              "lerntext": "notre",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "ton",
              "lerntext": "ton",
              "de": "dein",
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
          "lerntext": "c'est mon [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein"
          },
          {
            "schrift": "ton",
            "lerntext": "ton",
            "de": "dein"
          },
          {
            "schrift": "notre",
            "lerntext": "notre",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
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
          "lerntext": "[Slot] est ici"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "meine",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "man",
              "wieder": true
            },
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese",
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
          "lerntext": "[Slot] est ici"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "meine",
              "wieder": true
            },
            {
              "schrift": "on",
              "lerntext": "on",
              "de": "man",
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
          "lerntext": "[Slot] est ici"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
              "wieder": true
            },
            {
              "schrift": "ma",
              "lerntext": "ma",
              "de": "meine",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser"
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee"
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee"
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot"
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
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
            "de": "wollen"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch"
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
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
          "lerntext": "je ai besoin de [Slot]"
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit"
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
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
            "de": "Bedürfnis"
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
          "lerntext": "je voudrais un [Slot]"
        },
        "frameDe": "ich möchte eine [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht"
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
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
          "lerntext": "je voudrais un [Slot]"
        },
        "frameDe": "ich möchte ein [Slot], bitte.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück"
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen"
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen"
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
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
          "lerntext": "je mange [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch"
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch"
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel"
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse"
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
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
            "de": "essen"
          },
          {
            "schrift": "bois",
            "lerntext": "bois",
            "de": "trinken"
          }
        ],
        "id": "3.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je mange [Slot]",
          "lerntext": "je mange [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
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
          "lerntext": "je mange [Slot]"
        },
        "frameDe": "ich esse [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
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
          "schrift": "je ne suis pas [Slot]",
          "lerntext": "je ne suis pas [Slot]"
        },
        "frameDe": "ich bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss"
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
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
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt"
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu"
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut"
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht"
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig"
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
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
            "de": "was"
          },
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "wer"
          },
          {
            "schrift": "comme",
            "lerntext": "comme",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles"
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
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
            "de": "was"
          },
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "wer"
          },
          {
            "schrift": "comme",
            "lerntext": "comme",
            "de": "wie"
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
            "de": "was"
          },
          {
            "schrift": "qui",
            "lerntext": "qui",
            "de": "wer"
          },
          {
            "schrift": "comme",
            "lerntext": "comme",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
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
          "lerntext": "où y a-t-il une [Slot] ?"
        },
        "frameDe": "Wo gibt es eine [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank"
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche"
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule"
            },
            {
              "schrift": "route",
              "lerntext": "route",
              "de": "Straße"
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
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
            "de": "wo"
          },
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "dorthin"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "où y a-t-il une [Slot] ?",
          "lerntext": "où y a-t-il une [Slot] ?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof"
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
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
          "lerntext": "où y a-t-il un [Slot] ?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen"
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl",
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
          "lerntext": "où y a-t-il un [Slot] ?"
        },
        "frameDe": "Wo gibt es ein [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "magasin",
              "lerntext": "magasin",
              "de": "Geschäft"
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus",
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
          "lerntext": "il y a un [Slot] ici ?"
        },
        "frameDe": "Gibt es hier ein [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "magasin",
              "lerntext": "magasin",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
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
            "de": "dorthin"
          }
        ],
        "id": "5.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] est ici",
          "lerntext": "[Slot] est ici"
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
              "de": "Stadt"
            },
            {
              "schrift": "route",
              "lerntext": "route",
              "de": "Straße"
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "magasin",
              "lerntext": "magasin",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
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
          "lerntext": "c'est [Slot] la maison"
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
          "lerntext": "c'est [Slot] la maison"
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
          "lerntext": "[Slot] est ici"
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
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
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
          "lerntext": "c'est [Slot] la maison"
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
              "de": "erste"
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
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
              "de": "Fahrkarte"
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise"
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "wieder": true
            },
            {
              "schrift": "route",
              "lerntext": "route",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie",
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
              "de": "teuer"
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß"
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang"
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz"
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "wieder": true
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
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
              "de": "hoch"
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig"
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)"
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach"
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief"
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "wieder": true
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
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
              "de": "dick"
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
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
          "lerntext": "je peux [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen"
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben"
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen"
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären"
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen"
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
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
            "de": "Macht"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je peux [Slot]",
          "lerntext": "je peux [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
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
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen"
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
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
          "lerntext": "je dois [Slot]"
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten"
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen"
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen"
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
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
            "de": "müssen"
          }
        ],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je dois [Slot]",
          "lerntext": "je dois [Slot]"
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten"
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören"
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen"
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten"
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen"
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören"
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen"
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
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
          "lerntext": "je ne peux pas [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen"
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren"
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen"
            },
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben"
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben"
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
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
          "lerntext": "je ne peux pas [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen"
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
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
          "lerntext": "je ne peux pas [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
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
          "lerntext": "je vais à un [Slot]"
        },
        "frameDe": "ich gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "magasin",
              "lerntext": "magasin",
              "de": "Geschäft"
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
              "wieder": true
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
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
            "de": "gehen"
          },
          {
            "schrift": "viens",
            "lerntext": "viens",
            "de": "kommen"
          }
        ],
        "id": "8.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je voyage en [Slot]",
          "lerntext": "je voyage en [Slot]"
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug"
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto"
            },
            {
              "schrift": "route",
              "lerntext": "route",
              "de": "Straße"
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "wieder": true
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
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
          "lerntext": "je veux [Slot] maintenant"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen"
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen"
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
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
          "lerntext": "je veux [Slot] maintenant"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
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
          "schrift": "je voyage en [Slot]",
          "lerntext": "je voyage en [Slot]"
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
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
          "lerntext": "je veux [Slot] maintenant"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
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
              "de": "Morgen"
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
          "lerntext": "on se voit le [Slot]"
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
              "de": "Morgen"
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend"
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht"
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag"
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche"
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "wieder": true
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
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
            "de": "sich"
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
              "de": "Stunde"
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "wieder": true
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
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
              "de": "Urlaub"
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "matin",
              "lerntext": "matin",
              "de": "Morgen",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
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
          "lerntext": "on se voit le [Slot]"
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
              "wieder": true
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
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
          "lerntext": "je aime [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne"
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit"
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume"
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum"
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer"
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
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
            "de": "lieben"
          },
          {
            "schrift": "aime",
            "lerntext": "aime",
            "de": "lieben"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je aime [Slot]",
          "lerntext": "je aime [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier"
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
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
          "lerntext": "je vois [Slot]"
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mich"
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "dich"
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "sich",
              "wieder": true
            },
            {
              "schrift": "quoi",
              "lerntext": "quoi",
              "de": "was",
              "wieder": true
            },
            {
              "schrift": "qui",
              "lerntext": "qui",
              "de": "wer",
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
              "wieder": true
            },
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese",
              "wieder": true
            },
            {
              "schrift": "notre",
              "lerntext": "notre",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "mon",
              "lerntext": "mon",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "ta",
              "lerntext": "ta",
              "de": "deine",
              "wieder": true
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "unsere",
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
            "de": "finden"
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
              "de": "rot"
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau"
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb"
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün"
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz"
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
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
              "de": "weiß"
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
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
          "lerntext": "le repas est [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm"
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt"
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken"
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber"
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "wieder": true
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
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
            "de": "Mahlzeit"
          }
        ],
        "id": "10.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "le repas est [Slot]",
          "lerntext": "le repas est [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig"
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "wieder": true
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "wieder": true
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
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
          "lerntext": "le repas est [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "wieder": true
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "wieder": true
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
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
        "kind": "frame",
        "frame": {
          "schrift": "je aime [Slot]",
          "lerntext": "je aime [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
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
          "lerntext": "je vois [Slot]"
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mich",
              "wieder": true
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "dich",
              "wieder": true
            },
            {
              "schrift": "se",
              "lerntext": "se",
              "de": "sich",
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
          "lerntext": "je étais [Slot] hier"
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank"
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "wieder": true
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
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
          "lerntext": "je vais [Slot] demain"
        },
        "frameDe": "ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "tu",
            "lerntext": "tu",
            "de": "du"
          },
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen"
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen"
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben"
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen"
            },
            {
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden"
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
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
            "de": "werden"
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
          "lerntext": "je veux [Slot] beaucoup"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen"
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen"
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben"
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken"
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen"
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
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
          "lerntext": "je deviens [Slot]"
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          },
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen"
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen"
            },
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss"
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
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
            "de": "werden"
          }
        ],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je veux [Slot] beaucoup",
          "lerntext": "je veux [Slot] beaucoup"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
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
          "schrift": "je veux [Slot] beaucoup",
          "lerntext": "je veux [Slot] beaucoup"
        },
        "frameDe": "ich will viel [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
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
          "lerntext": "je suis fatigué [Slot] je travaille"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil"
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
              "de": "obwohl"
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit"
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
            "de": "und"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder"
          },
          {
            "schrift": "donc",
            "lerntext": "donc",
            "de": "also"
          },
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "dass"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je suis fatigué [Slot] je travaille",
          "lerntext": "je suis fatigué [Slot] je travaille"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder"
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
          "lerntext": "je veux [Slot] mais je ne peux pas"
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen"
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
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
          "lerntext": "c'est [Slot] mais ça va"
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
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch"
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell"
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam"
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "wieder": true
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
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
          "lerntext": "je veux te [Slot]"
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken"
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
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
          "lerntext": "je suis fatigué [Slot] je travaille"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "bien que",
              "lerntext": "bien que",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit",
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
          "lerntext": "c'est [Slot] mais ça va"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
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
          "lerntext": "je suis fatigué [Slot] je travaille"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder"
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
              "wieder": true
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit",
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
          "lerntext": "je suis fatigué [Slot] je travaille"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "et",
            "lerntext": "et",
            "de": "und"
          },
          {
            "schrift": "mais",
            "lerntext": "mais",
            "de": "aber"
          },
          {
            "schrift": "ou",
            "lerntext": "ou",
            "de": "oder"
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
          "lerntext": "une [Slot] me fait mal"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf"
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "wieder": true
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "repas",
              "lerntext": "repas",
              "de": "Mahlzeit",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
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
            "de": "Tatsache"
          }
        ],
        "id": "13.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "un [Slot] me fait mal",
          "lerntext": "un [Slot] me fait mal"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz"
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge"
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "wieder": true
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "repas",
              "lerntext": "repas",
              "de": "Mahlzeit",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
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
          "lerntext": "un [Slot] me fait mal"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mon",
            "lerntext": "mon",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
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
              "de": "Grund"
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
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
            "de": "dorthin"
          }
        ],
        "id": "14.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "ici il y a une [Slot]",
          "lerntext": "ici il y a une [Slot]"
        },
        "frameDe": "Hier gibt es eine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel"
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "wieder": true
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "wieder": true
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "wieder": true
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche",
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
          "lerntext": "ici il y a une [Slot]"
        },
        "frameDe": "Hier gibt es einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller"
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel"
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend",
              "wieder": true
            },
            {
              "schrift": "matin",
              "lerntext": "matin",
              "de": "Morgen",
              "wieder": true
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
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
              "de": "Schuh"
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel",
              "wieder": true
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
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
              "de": "Hemd"
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid"
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen",
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
              "de": "Messer"
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas",
              "wieder": true
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück",
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
              "de": "Hose"
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut"
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name"
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "Tatsache",
              "wieder": true
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
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
          "lerntext": "c'est mon [Slot]"
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit"
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
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
          "lerntext": "j'ai eu une bon [Slot]"
        },
        "frameDe": "Ich habe eine gute [Slot] bekommen.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus"
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer"
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch"
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
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
              "de": "Vernunft"
            },
            {
              "schrift": "monde",
              "lerntext": "monde",
              "de": "Welt"
            },
            {
              "schrift": "personne",
              "lerntext": "personne",
              "de": "Person"
            },
            {
              "schrift": "accord",
              "lerntext": "accord",
              "de": "Vereinbarung"
            },
            {
              "schrift": "peur",
              "lerntext": "peur",
              "de": "Angst"
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
              "de": "Idee"
            },
            {
              "schrift": "histoire",
              "lerntext": "histoire",
              "de": "Geschichte"
            },
            {
              "schrift": "madame",
              "lerntext": "madame",
              "de": "Frau (Anrede)"
            },
            {
              "schrift": "amour",
              "lerntext": "amour",
              "de": "Liebe"
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage"
            },
            {
              "schrift": "raison",
              "lerntext": "raison",
              "de": "Vernunft",
              "wieder": true
            },
            {
              "schrift": "monde",
              "lerntext": "monde",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "personne",
              "lerntext": "personne",
              "de": "Person",
              "wieder": true
            },
            {
              "schrift": "accord",
              "lerntext": "accord",
              "de": "Vereinbarung",
              "wieder": true
            },
            {
              "schrift": "peur",
              "lerntext": "peur",
              "de": "Angst",
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
              "de": "Seite"
            },
            {
              "schrift": "rue",
              "lerntext": "rue",
              "de": "Straße"
            },
            {
              "schrift": "groupe",
              "lerntext": "groupe",
              "de": "Gruppe"
            },
            {
              "schrift": "numéro",
              "lerntext": "numéro",
              "de": "Nummer"
            },
            {
              "schrift": "ligne",
              "lerntext": "ligne",
              "de": "Linie"
            },
            {
              "schrift": "idée",
              "lerntext": "idée",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "histoire",
              "lerntext": "histoire",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "madame",
              "lerntext": "madame",
              "de": "Frau (Anrede)",
              "wieder": true
            },
            {
              "schrift": "amour",
              "lerntext": "amour",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "raison",
              "lerntext": "raison",
              "de": "Vernunft",
              "wieder": true
            },
            {
              "schrift": "monde",
              "lerntext": "monde",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "personne",
              "lerntext": "personne",
              "de": "Person",
              "wieder": true
            },
            {
              "schrift": "accord",
              "lerntext": "accord",
              "de": "Vereinbarung",
              "wieder": true
            },
            {
              "schrift": "peur",
              "lerntext": "peur",
              "de": "Angst",
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
              "de": "Form"
            },
            {
              "schrift": "chat",
              "lerntext": "chat",
              "de": "Katze"
            },
            {
              "schrift": "voix",
              "lerntext": "voix",
              "de": "Stimme"
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft"
            },
            {
              "schrift": "force",
              "lerntext": "force",
              "de": "Kraft"
            },
            {
              "schrift": "côté",
              "lerntext": "côté",
              "de": "Seite",
              "wieder": true
            },
            {
              "schrift": "rue",
              "lerntext": "rue",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "groupe",
              "lerntext": "groupe",
              "de": "Gruppe",
              "wieder": true
            },
            {
              "schrift": "numéro",
              "lerntext": "numéro",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "ligne",
              "lerntext": "ligne",
              "de": "Linie",
              "wieder": true
            },
            {
              "schrift": "idée",
              "lerntext": "idée",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "histoire",
              "lerntext": "histoire",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "madame",
              "lerntext": "madame",
              "de": "Frau (Anrede)",
              "wieder": true
            },
            {
              "schrift": "amour",
              "lerntext": "amour",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage",
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
              "de": "Stufe"
            },
            {
              "schrift": "sorte",
              "lerntext": "sorte",
              "de": "Art"
            },
            {
              "schrift": "suite",
              "lerntext": "suite",
              "de": "Folge"
            },
            {
              "schrift": "terre",
              "lerntext": "terre",
              "de": "Erde"
            },
            {
              "schrift": "vue",
              "lerntext": "vue",
              "de": "Sicht"
            },
            {
              "schrift": "forme",
              "lerntext": "forme",
              "de": "Form",
              "wieder": true
            },
            {
              "schrift": "chat",
              "lerntext": "chat",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "voix",
              "lerntext": "voix",
              "de": "Stimme",
              "wieder": true
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "force",
              "lerntext": "force",
              "de": "Kraft",
              "wieder": true
            },
            {
              "schrift": "côté",
              "lerntext": "côté",
              "de": "Seite",
              "wieder": true
            },
            {
              "schrift": "rue",
              "lerntext": "rue",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "groupe",
              "lerntext": "groupe",
              "de": "Gruppe",
              "wieder": true
            },
            {
              "schrift": "numéro",
              "lerntext": "numéro",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "ligne",
              "lerntext": "ligne",
              "de": "Linie",
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
              "de": "Farbe"
            },
            {
              "schrift": "musique",
              "lerntext": "musique",
              "de": "Musik"
            },
            {
              "schrift": "art",
              "lerntext": "art",
              "de": "Kunst"
            },
            {
              "schrift": "réunion",
              "lerntext": "réunion",
              "de": "Besprechung"
            },
            {
              "schrift": "marche",
              "lerntext": "marche",
              "de": "Stufe",
              "wieder": true
            },
            {
              "schrift": "sorte",
              "lerntext": "sorte",
              "de": "Art",
              "wieder": true
            },
            {
              "schrift": "suite",
              "lerntext": "suite",
              "de": "Folge",
              "wieder": true
            },
            {
              "schrift": "terre",
              "lerntext": "terre",
              "de": "Erde",
              "wieder": true
            },
            {
              "schrift": "vue",
              "lerntext": "vue",
              "de": "Sicht",
              "wieder": true
            },
            {
              "schrift": "forme",
              "lerntext": "forme",
              "de": "Form",
              "wieder": true
            },
            {
              "schrift": "chat",
              "lerntext": "chat",
              "de": "Katze",
              "wieder": true
            },
            {
              "schrift": "voix",
              "lerntext": "voix",
              "de": "Stimme",
              "wieder": true
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "force",
              "lerntext": "force",
              "de": "Kraft",
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
              "de": "Mann"
            },
            {
              "schrift": "monsieur",
              "lerntext": "monsieur",
              "de": "Herr"
            },
            {
              "schrift": "dieu",
              "lerntext": "dieu",
              "de": "Gott"
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Platz"
            },
            {
              "schrift": "coup",
              "lerntext": "coup",
              "de": "Schlag"
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
              "de": "Monat"
            },
            {
              "schrift": "partie",
              "lerntext": "partie",
              "de": "Teil"
            },
            {
              "schrift": "garçon",
              "lerntext": "garçon",
              "de": "Junge"
            },
            {
              "schrift": "chemin",
              "lerntext": "chemin",
              "de": "Weg"
            },
            {
              "schrift": "lettre",
              "lerntext": "lettre",
              "de": "Brief"
            },
            {
              "schrift": "homme",
              "lerntext": "homme",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "monsieur",
              "lerntext": "monsieur",
              "de": "Herr",
              "wieder": true
            },
            {
              "schrift": "dieu",
              "lerntext": "dieu",
              "de": "Gott",
              "wieder": true
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "coup",
              "lerntext": "coup",
              "de": "Schlag",
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
              "de": "Lärm"
            },
            {
              "schrift": "point",
              "lerntext": "point",
              "de": "Punkt"
            },
            {
              "schrift": "cas",
              "lerntext": "cas",
              "de": "Fall"
            },
            {
              "schrift": "chien",
              "lerntext": "chien",
              "de": "Hund"
            },
            {
              "schrift": "lieu",
              "lerntext": "lieu",
              "de": "Ort"
            },
            {
              "schrift": "mois",
              "lerntext": "mois",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "partie",
              "lerntext": "partie",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "garçon",
              "lerntext": "garçon",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "chemin",
              "lerntext": "chemin",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "lettre",
              "lerntext": "lettre",
              "de": "Brief",
              "wieder": true
            },
            {
              "schrift": "homme",
              "lerntext": "homme",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "monsieur",
              "lerntext": "monsieur",
              "de": "Herr",
              "wieder": true
            },
            {
              "schrift": "dieu",
              "lerntext": "dieu",
              "de": "Gott",
              "wieder": true
            },
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Platz",
              "wieder": true
            },
            {
              "schrift": "coup",
              "lerntext": "coup",
              "de": "Schlag",
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
              "de": "Geist"
            },
            {
              "schrift": "état",
              "lerntext": "état",
              "de": "Zustand"
            },
            {
              "schrift": "guerra",
              "lerntext": "guerra",
              "de": "Krieg"
            },
            {
              "schrift": "mort",
              "lerntext": "mort",
              "de": "Tod"
            },
            {
              "schrift": "paix",
              "lerntext": "paix",
              "de": "Frieden"
            },
            {
              "schrift": "bruit",
              "lerntext": "bruit",
              "de": "Lärm",
              "wieder": true
            },
            {
              "schrift": "point",
              "lerntext": "point",
              "de": "Punkt",
              "wieder": true
            },
            {
              "schrift": "cas",
              "lerntext": "cas",
              "de": "Fall",
              "wieder": true
            },
            {
              "schrift": "chien",
              "lerntext": "chien",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "lieu",
              "lerntext": "lieu",
              "de": "Ort",
              "wieder": true
            },
            {
              "schrift": "mois",
              "lerntext": "mois",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "partie",
              "lerntext": "partie",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "garçon",
              "lerntext": "garçon",
              "de": "Junge",
              "wieder": true
            },
            {
              "schrift": "chemin",
              "lerntext": "chemin",
              "de": "Weg",
              "wieder": true
            },
            {
              "schrift": "lettre",
              "lerntext": "lettre",
              "de": "Brief",
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
              "de": "Plan"
            },
            {
              "schrift": "rapport",
              "lerntext": "rapport",
              "de": "Bericht"
            },
            {
              "schrift": "regard",
              "lerntext": "regard",
              "de": "Blick"
            },
            {
              "schrift": "service",
              "lerntext": "service",
              "de": "Dienst"
            },
            {
              "schrift": "oiseau",
              "lerntext": "oiseau",
              "de": "Vogel"
            },
            {
              "schrift": "esprit",
              "lerntext": "esprit",
              "de": "Geist",
              "wieder": true
            },
            {
              "schrift": "état",
              "lerntext": "état",
              "de": "Zustand",
              "wieder": true
            },
            {
              "schrift": "guerra",
              "lerntext": "guerra",
              "de": "Krieg",
              "wieder": true
            },
            {
              "schrift": "mort",
              "lerntext": "mort",
              "de": "Tod",
              "wieder": true
            },
            {
              "schrift": "paix",
              "lerntext": "paix",
              "de": "Frieden",
              "wieder": true
            },
            {
              "schrift": "bruit",
              "lerntext": "bruit",
              "de": "Lärm",
              "wieder": true
            },
            {
              "schrift": "point",
              "lerntext": "point",
              "de": "Punkt",
              "wieder": true
            },
            {
              "schrift": "cas",
              "lerntext": "cas",
              "de": "Fall",
              "wieder": true
            },
            {
              "schrift": "chien",
              "lerntext": "chien",
              "de": "Hund",
              "wieder": true
            },
            {
              "schrift": "lieu",
              "lerntext": "lieu",
              "de": "Ort",
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
              "de": "Film"
            },
            {
              "schrift": "sport",
              "lerntext": "sport",
              "de": "Sport"
            },
            {
              "schrift": "médecin",
              "lerntext": "médecin",
              "de": "Arzt"
            },
            {
              "schrift": "prix",
              "lerntext": "prix",
              "de": "Preis"
            },
            {
              "schrift": "marché",
              "lerntext": "marché",
              "de": "Markt"
            },
            {
              "schrift": "plan",
              "lerntext": "plan",
              "de": "Plan",
              "wieder": true
            },
            {
              "schrift": "rapport",
              "lerntext": "rapport",
              "de": "Bericht",
              "wieder": true
            },
            {
              "schrift": "regard",
              "lerntext": "regard",
              "de": "Blick",
              "wieder": true
            },
            {
              "schrift": "service",
              "lerntext": "service",
              "de": "Dienst",
              "wieder": true
            },
            {
              "schrift": "oiseau",
              "lerntext": "oiseau",
              "de": "Vogel",
              "wieder": true
            },
            {
              "schrift": "esprit",
              "lerntext": "esprit",
              "de": "Geist",
              "wieder": true
            },
            {
              "schrift": "état",
              "lerntext": "état",
              "de": "Zustand",
              "wieder": true
            },
            {
              "schrift": "guerra",
              "lerntext": "guerra",
              "de": "Krieg",
              "wieder": true
            },
            {
              "schrift": "mort",
              "lerntext": "mort",
              "de": "Tod",
              "wieder": true
            },
            {
              "schrift": "paix",
              "lerntext": "paix",
              "de": "Frieden",
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
              "de": "Ding"
            },
            {
              "schrift": "vie",
              "lerntext": "vie",
              "de": "Leben"
            },
            {
              "schrift": "problème",
              "lerntext": "problème",
              "de": "Problem"
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "Wort"
            },
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende"
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
              "de": "Recht"
            },
            {
              "schrift": "pays",
              "lerntext": "pays",
              "de": "Land"
            },
            {
              "schrift": "an",
              "lerntext": "an",
              "de": "Jahr (Zählwort)"
            },
            {
              "schrift": "année",
              "lerntext": "année",
              "de": "Jahr (Verlauf)"
            },
            {
              "schrift": "loi",
              "lerntext": "loi",
              "de": "Gesetz"
            },
            {
              "schrift": "chose",
              "lerntext": "chose",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "vie",
              "lerntext": "vie",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "problème",
              "lerntext": "problème",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende",
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
              "de": "Licht"
            },
            {
              "schrift": "moyen",
              "lerntext": "moyen",
              "de": "Mittel"
            },
            {
              "schrift": "peuple",
              "lerntext": "peuple",
              "de": "Volk"
            },
            {
              "schrift": "sang",
              "lerntext": "sang",
              "de": "Blut"
            },
            {
              "schrift": "secret",
              "lerntext": "secret",
              "de": "Geheimnis"
            },
            {
              "schrift": "droit",
              "lerntext": "droit",
              "de": "Recht",
              "wieder": true
            },
            {
              "schrift": "pays",
              "lerntext": "pays",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "an",
              "lerntext": "an",
              "de": "Jahr (Zählwort)",
              "wieder": true
            },
            {
              "schrift": "année",
              "lerntext": "année",
              "de": "Jahr (Verlauf)",
              "wieder": true
            },
            {
              "schrift": "loi",
              "lerntext": "loi",
              "de": "Gesetz",
              "wieder": true
            },
            {
              "schrift": "chose",
              "lerntext": "chose",
              "de": "Ding",
              "wieder": true
            },
            {
              "schrift": "vie",
              "lerntext": "vie",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "problème",
              "lerntext": "problème",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "Wort",
              "wieder": true
            },
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende",
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
              "de": "Kleidungsstück"
            },
            {
              "schrift": "photo",
              "lerntext": "photo",
              "de": "Foto"
            },
            {
              "schrift": "jeu",
              "lerntext": "jeu",
              "de": "Spiel"
            },
            {
              "schrift": "équipe",
              "lerntext": "équipe",
              "de": "Team"
            },
            {
              "schrift": "entreprise",
              "lerntext": "entreprise",
              "de": "Unternehmen"
            },
            {
              "schrift": "lumière",
              "lerntext": "lumière",
              "de": "Licht",
              "wieder": true
            },
            {
              "schrift": "moyen",
              "lerntext": "moyen",
              "de": "Mittel",
              "wieder": true
            },
            {
              "schrift": "peuple",
              "lerntext": "peuple",
              "de": "Volk",
              "wieder": true
            },
            {
              "schrift": "sang",
              "lerntext": "sang",
              "de": "Blut",
              "wieder": true
            },
            {
              "schrift": "secret",
              "lerntext": "secret",
              "de": "Geheimnis",
              "wieder": true
            },
            {
              "schrift": "droit",
              "lerntext": "droit",
              "de": "Recht",
              "wieder": true
            },
            {
              "schrift": "pays",
              "lerntext": "pays",
              "de": "Land",
              "wieder": true
            },
            {
              "schrift": "an",
              "lerntext": "an",
              "de": "Jahr (Zählwort)",
              "wieder": true
            },
            {
              "schrift": "année",
              "lerntext": "année",
              "de": "Jahr (Verlauf)",
              "wieder": true
            },
            {
              "schrift": "loi",
              "lerntext": "loi",
              "de": "Gesetz",
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
              "wieder": true
            },
            {
              "schrift": "sport",
              "lerntext": "sport",
              "de": "Sport",
              "wieder": true
            },
            {
              "schrift": "médecin",
              "lerntext": "médecin",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "prix",
              "lerntext": "prix",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "marché",
              "lerntext": "marché",
              "de": "Markt",
              "wieder": true
            },
            {
              "schrift": "plan",
              "lerntext": "plan",
              "de": "Plan",
              "wieder": true
            },
            {
              "schrift": "rapport",
              "lerntext": "rapport",
              "de": "Bericht",
              "wieder": true
            },
            {
              "schrift": "regard",
              "lerntext": "regard",
              "de": "Blick",
              "wieder": true
            },
            {
              "schrift": "service",
              "lerntext": "service",
              "de": "Dienst",
              "wieder": true
            },
            {
              "schrift": "oiseau",
              "lerntext": "oiseau",
              "de": "Vogel",
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
              "wieder": true
            },
            {
              "schrift": "photo",
              "lerntext": "photo",
              "de": "Foto",
              "wieder": true
            },
            {
              "schrift": "jeu",
              "lerntext": "jeu",
              "de": "Spiel",
              "wieder": true
            },
            {
              "schrift": "équipe",
              "lerntext": "équipe",
              "de": "Team",
              "wieder": true
            },
            {
              "schrift": "entreprise",
              "lerntext": "entreprise",
              "de": "Unternehmen",
              "wieder": true
            },
            {
              "schrift": "lumière",
              "lerntext": "lumière",
              "de": "Licht",
              "wieder": true
            },
            {
              "schrift": "moyen",
              "lerntext": "moyen",
              "de": "Mittel",
              "wieder": true
            },
            {
              "schrift": "peuple",
              "lerntext": "peuple",
              "de": "Volk",
              "wieder": true
            },
            {
              "schrift": "sang",
              "lerntext": "sang",
              "de": "Blut",
              "wieder": true
            },
            {
              "schrift": "secret",
              "lerntext": "secret",
              "de": "Geheimnis",
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
              "wieder": true
            },
            {
              "schrift": "musique",
              "lerntext": "musique",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "art",
              "lerntext": "art",
              "de": "Kunst",
              "wieder": true
            },
            {
              "schrift": "réunion",
              "lerntext": "réunion",
              "de": "Besprechung",
              "wieder": true
            },
            {
              "schrift": "marche",
              "lerntext": "marche",
              "de": "Stufe",
              "wieder": true
            },
            {
              "schrift": "sorte",
              "lerntext": "sorte",
              "de": "Art",
              "wieder": true
            },
            {
              "schrift": "suite",
              "lerntext": "suite",
              "de": "Folge",
              "wieder": true
            },
            {
              "schrift": "terre",
              "lerntext": "terre",
              "de": "Erde",
              "wieder": true
            },
            {
              "schrift": "vue",
              "lerntext": "vue",
              "de": "Sicht",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sembler",
              "lerntext": "sembler",
              "de": "scheinen"
            },
            {
              "schrift": "sortir",
              "lerntext": "sortir",
              "de": "hinausgehen"
            },
            {
              "schrift": "entrer",
              "lerntext": "entrer",
              "de": "eintreten"
            },
            {
              "schrift": "partir",
              "lerntext": "partir",
              "de": "weggehen"
            },
            {
              "schrift": "monter",
              "lerntext": "monter",
              "de": "hinaufsteigen"
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "recevoir",
              "lerntext": "recevoir",
              "de": "erhalten"
            },
            {
              "schrift": "appeler",
              "lerntext": "appeler",
              "de": "rufen"
            },
            {
              "schrift": "crier",
              "lerntext": "crier",
              "de": "schreien"
            },
            {
              "schrift": "falloir",
              "lerntext": "falloir",
              "de": "nötig sein"
            },
            {
              "schrift": "passer",
              "lerntext": "passer",
              "de": "verbringen"
            },
            {
              "schrift": "sembler",
              "lerntext": "sembler",
              "de": "scheinen",
              "wieder": true
            },
            {
              "schrift": "sortir",
              "lerntext": "sortir",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "entrer",
              "lerntext": "entrer",
              "de": "eintreten",
              "wieder": true
            },
            {
              "schrift": "partir",
              "lerntext": "partir",
              "de": "weggehen",
              "wieder": true
            },
            {
              "schrift": "monter",
              "lerntext": "monter",
              "de": "hinaufsteigen",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "arriver",
              "lerntext": "arriver",
              "de": "ankommen"
            },
            {
              "schrift": "rendre",
              "lerntext": "rendre",
              "de": "zurückgeben"
            },
            {
              "schrift": "vivre",
              "lerntext": "vivre",
              "de": "leben"
            },
            {
              "schrift": "reprendre",
              "lerntext": "reprendre",
              "de": "wieder aufnehmen"
            },
            {
              "schrift": "revenir",
              "lerntext": "revenir",
              "de": "zurückkommen"
            },
            {
              "schrift": "recevoir",
              "lerntext": "recevoir",
              "de": "erhalten",
              "wieder": true
            },
            {
              "schrift": "appeler",
              "lerntext": "appeler",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "crier",
              "lerntext": "crier",
              "de": "schreien",
              "wieder": true
            },
            {
              "schrift": "falloir",
              "lerntext": "falloir",
              "de": "nötig sein",
              "wieder": true
            },
            {
              "schrift": "passer",
              "lerntext": "passer",
              "de": "verbringen",
              "wieder": true
            },
            {
              "schrift": "sembler",
              "lerntext": "sembler",
              "de": "scheinen",
              "wieder": true
            },
            {
              "schrift": "sortir",
              "lerntext": "sortir",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "entrer",
              "lerntext": "entrer",
              "de": "eintreten",
              "wieder": true
            },
            {
              "schrift": "partir",
              "lerntext": "partir",
              "de": "weggehen",
              "wieder": true
            },
            {
              "schrift": "monter",
              "lerntext": "monter",
              "de": "hinaufsteigen",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "suivre",
              "lerntext": "suivre",
              "de": "folgen"
            },
            {
              "schrift": "paraître",
              "lerntext": "paraître",
              "de": "erscheinen"
            },
            {
              "schrift": "permettre",
              "lerntext": "permettre",
              "de": "erlauben"
            },
            {
              "schrift": "asseoir",
              "lerntext": "asseoir",
              "de": "sich setzen"
            },
            {
              "schrift": "apercevoir",
              "lerntext": "apercevoir",
              "de": "bemerken"
            },
            {
              "schrift": "arriver",
              "lerntext": "arriver",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "rendre",
              "lerntext": "rendre",
              "de": "zurückgeben",
              "wieder": true
            },
            {
              "schrift": "vivre",
              "lerntext": "vivre",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "reprendre",
              "lerntext": "reprendre",
              "de": "wieder aufnehmen",
              "wieder": true
            },
            {
              "schrift": "revenir",
              "lerntext": "revenir",
              "de": "zurückkommen",
              "wieder": true
            },
            {
              "schrift": "recevoir",
              "lerntext": "recevoir",
              "de": "erhalten",
              "wieder": true
            },
            {
              "schrift": "appeler",
              "lerntext": "appeler",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "crier",
              "lerntext": "crier",
              "de": "schreien",
              "wieder": true
            },
            {
              "schrift": "falloir",
              "lerntext": "falloir",
              "de": "nötig sein",
              "wieder": true
            },
            {
              "schrift": "passer",
              "lerntext": "passer",
              "de": "verbringen",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "finir",
              "lerntext": "finir",
              "de": "beenden"
            },
            {
              "schrift": "tourner",
              "lerntext": "tourner",
              "de": "drehen"
            },
            {
              "schrift": "garder",
              "lerntext": "garder",
              "de": "behalten"
            },
            {
              "schrift": "excuser",
              "lerntext": "excuser",
              "de": "entschuldigen"
            },
            {
              "schrift": "chanter",
              "lerntext": "chanter",
              "de": "singen"
            },
            {
              "schrift": "suivre",
              "lerntext": "suivre",
              "de": "folgen",
              "wieder": true
            },
            {
              "schrift": "paraître",
              "lerntext": "paraître",
              "de": "erscheinen",
              "wieder": true
            },
            {
              "schrift": "permettre",
              "lerntext": "permettre",
              "de": "erlauben",
              "wieder": true
            },
            {
              "schrift": "asseoir",
              "lerntext": "asseoir",
              "de": "sich setzen",
              "wieder": true
            },
            {
              "schrift": "apercevoir",
              "lerntext": "apercevoir",
              "de": "bemerken",
              "wieder": true
            },
            {
              "schrift": "arriver",
              "lerntext": "arriver",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "rendre",
              "lerntext": "rendre",
              "de": "zurückgeben",
              "wieder": true
            },
            {
              "schrift": "vivre",
              "lerntext": "vivre",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "reprendre",
              "lerntext": "reprendre",
              "de": "wieder aufnehmen",
              "wieder": true
            },
            {
              "schrift": "revenir",
              "lerntext": "revenir",
              "de": "zurückkommen",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "essayer",
              "lerntext": "essayer",
              "de": "versuchen"
            },
            {
              "schrift": "ajouter",
              "lerntext": "ajouter",
              "de": "hinzufügen"
            },
            {
              "schrift": "choisir",
              "lerntext": "choisir",
              "de": "auswählen"
            },
            {
              "schrift": "connaître",
              "lerntext": "connaître",
              "de": "kennen"
            },
            {
              "schrift": "tenir",
              "lerntext": "tenir",
              "de": "halten"
            },
            {
              "schrift": "finir",
              "lerntext": "finir",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "tourner",
              "lerntext": "tourner",
              "de": "drehen",
              "wieder": true
            },
            {
              "schrift": "garder",
              "lerntext": "garder",
              "de": "behalten",
              "wieder": true
            },
            {
              "schrift": "excuser",
              "lerntext": "excuser",
              "de": "entschuldigen",
              "wieder": true
            },
            {
              "schrift": "chanter",
              "lerntext": "chanter",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "suivre",
              "lerntext": "suivre",
              "de": "folgen",
              "wieder": true
            },
            {
              "schrift": "paraître",
              "lerntext": "paraître",
              "de": "erscheinen",
              "wieder": true
            },
            {
              "schrift": "permettre",
              "lerntext": "permettre",
              "de": "erlauben",
              "wieder": true
            },
            {
              "schrift": "asseoir",
              "lerntext": "asseoir",
              "de": "sich setzen",
              "wieder": true
            },
            {
              "schrift": "apercevoir",
              "lerntext": "apercevoir",
              "de": "bemerken",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "porter",
              "lerntext": "porter",
              "de": "tragen"
            },
            {
              "schrift": "jeter",
              "lerntext": "jeter",
              "de": "werfen"
            },
            {
              "schrift": "tomber",
              "lerntext": "tomber",
              "de": "fallen"
            },
            {
              "schrift": "lever",
              "lerntext": "lever",
              "de": "heben"
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen"
            },
            {
              "schrift": "essayer",
              "lerntext": "essayer",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "ajouter",
              "lerntext": "ajouter",
              "de": "hinzufügen",
              "wieder": true
            },
            {
              "schrift": "choisir",
              "lerntext": "choisir",
              "de": "auswählen",
              "wieder": true
            },
            {
              "schrift": "connaître",
              "lerntext": "connaître",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "tenir",
              "lerntext": "tenir",
              "de": "halten",
              "wieder": true
            },
            {
              "schrift": "finir",
              "lerntext": "finir",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "tourner",
              "lerntext": "tourner",
              "de": "drehen",
              "wieder": true
            },
            {
              "schrift": "garder",
              "lerntext": "garder",
              "de": "behalten",
              "wieder": true
            },
            {
              "schrift": "excuser",
              "lerntext": "excuser",
              "de": "entschuldigen",
              "wieder": true
            },
            {
              "schrift": "chanter",
              "lerntext": "chanter",
              "de": "singen",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "offrir",
              "lerntext": "offrir",
              "de": "anbieten"
            },
            {
              "schrift": "apprendre",
              "lerntext": "apprendre",
              "de": "lernen"
            },
            {
              "schrift": "porter",
              "lerntext": "porter",
              "de": "tragen",
              "wieder": true
            },
            {
              "schrift": "jeter",
              "lerntext": "jeter",
              "de": "werfen",
              "wieder": true
            },
            {
              "schrift": "tomber",
              "lerntext": "tomber",
              "de": "fallen",
              "wieder": true
            },
            {
              "schrift": "lever",
              "lerntext": "lever",
              "de": "heben",
              "wieder": true
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "essayer",
              "lerntext": "essayer",
              "de": "versuchen",
              "wieder": true
            },
            {
              "schrift": "ajouter",
              "lerntext": "ajouter",
              "de": "hinzufügen",
              "wieder": true
            },
            {
              "schrift": "choisir",
              "lerntext": "choisir",
              "de": "auswählen",
              "wieder": true
            },
            {
              "schrift": "connaître",
              "lerntext": "connaître",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "tenir",
              "lerntext": "tenir",
              "de": "halten",
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
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "offrir",
              "lerntext": "offrir",
              "de": "anbieten",
              "wieder": true
            },
            {
              "schrift": "apprendre",
              "lerntext": "apprendre",
              "de": "lernen",
              "wieder": true
            },
            {
              "schrift": "porter",
              "lerntext": "porter",
              "de": "tragen",
              "wieder": true
            },
            {
              "schrift": "jeter",
              "lerntext": "jeter",
              "de": "werfen",
              "wieder": true
            },
            {
              "schrift": "tomber",
              "lerntext": "tomber",
              "de": "fallen",
              "wieder": true
            },
            {
              "schrift": "lever",
              "lerntext": "lever",
              "de": "heben",
              "wieder": true
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen",
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
              "de": "andere"
            },
            {
              "schrift": "clair",
              "lerntext": "clair",
              "de": "hell"
            },
            {
              "schrift": "pauvre",
              "lerntext": "pauvre",
              "de": "arm"
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei"
            },
            {
              "schrift": "humide",
              "lerntext": "humide",
              "de": "feucht"
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
              "de": "natürlich"
            },
            {
              "schrift": "public",
              "lerntext": "public",
              "de": "öffentlich"
            },
            {
              "schrift": "inutile",
              "lerntext": "inutile",
              "de": "nutzlos"
            },
            {
              "schrift": "tel",
              "lerntext": "tel",
              "de": "solcher"
            },
            {
              "schrift": "même",
              "lerntext": "même",
              "de": "gleich"
            },
            {
              "schrift": "autre",
              "lerntext": "autre",
              "de": "andere",
              "wieder": true
            },
            {
              "schrift": "clair",
              "lerntext": "clair",
              "de": "hell",
              "wieder": true
            },
            {
              "schrift": "pauvre",
              "lerntext": "pauvre",
              "de": "arm",
              "wieder": true
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "humide",
              "lerntext": "humide",
              "de": "feucht",
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
              "de": "allein"
            },
            {
              "schrift": "dernier",
              "lerntext": "dernier",
              "de": "letzte"
            },
            {
              "schrift": "sûr",
              "lerntext": "sûr",
              "de": "sicher"
            },
            {
              "schrift": "vrai",
              "lerntext": "vrai",
              "de": "wahr"
            },
            {
              "schrift": "riche",
              "lerntext": "riche",
              "de": "reich"
            },
            {
              "schrift": "naturel",
              "lerntext": "naturel",
              "de": "natürlich",
              "wieder": true
            },
            {
              "schrift": "public",
              "lerntext": "public",
              "de": "öffentlich",
              "wieder": true
            },
            {
              "schrift": "inutile",
              "lerntext": "inutile",
              "de": "nutzlos",
              "wieder": true
            },
            {
              "schrift": "tel",
              "lerntext": "tel",
              "de": "solcher",
              "wieder": true
            },
            {
              "schrift": "même",
              "lerntext": "même",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "autre",
              "lerntext": "autre",
              "de": "andere",
              "wieder": true
            },
            {
              "schrift": "clair",
              "lerntext": "clair",
              "de": "hell",
              "wieder": true
            },
            {
              "schrift": "pauvre",
              "lerntext": "pauvre",
              "de": "arm",
              "wieder": true
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "humide",
              "lerntext": "humide",
              "de": "feucht",
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
              "de": "voll"
            },
            {
              "schrift": "pareil",
              "lerntext": "pareil",
              "de": "gleich"
            },
            {
              "schrift": "grave",
              "lerntext": "grave",
              "de": "ernst"
            },
            {
              "schrift": "vide",
              "lerntext": "vide",
              "de": "leer"
            },
            {
              "schrift": "gauche",
              "lerntext": "gauche",
              "de": "links"
            },
            {
              "schrift": "seul",
              "lerntext": "seul",
              "de": "allein",
              "wieder": true
            },
            {
              "schrift": "dernier",
              "lerntext": "dernier",
              "de": "letzte",
              "wieder": true
            },
            {
              "schrift": "sûr",
              "lerntext": "sûr",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "vrai",
              "lerntext": "vrai",
              "de": "wahr",
              "wieder": true
            },
            {
              "schrift": "riche",
              "lerntext": "riche",
              "de": "reich",
              "wieder": true
            },
            {
              "schrift": "naturel",
              "lerntext": "naturel",
              "de": "natürlich",
              "wieder": true
            },
            {
              "schrift": "public",
              "lerntext": "public",
              "de": "öffentlich",
              "wieder": true
            },
            {
              "schrift": "inutile",
              "lerntext": "inutile",
              "de": "nutzlos",
              "wieder": true
            },
            {
              "schrift": "tel",
              "lerntext": "tel",
              "de": "solcher",
              "wieder": true
            },
            {
              "schrift": "même",
              "lerntext": "même",
              "de": "gleich",
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
              "de": "hart"
            },
            {
              "schrift": "léger",
              "lerntext": "léger",
              "de": "leicht (Gewicht)"
            },
            {
              "schrift": "malheureux",
              "lerntext": "malheureux",
              "de": "unglücklich"
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich"
            },
            {
              "schrift": "impossible",
              "lerntext": "impossible",
              "de": "unmöglich"
            },
            {
              "schrift": "plein",
              "lerntext": "plein",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "pareil",
              "lerntext": "pareil",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "grave",
              "lerntext": "grave",
              "de": "ernst",
              "wieder": true
            },
            {
              "schrift": "vide",
              "lerntext": "vide",
              "de": "leer",
              "wieder": true
            },
            {
              "schrift": "gauche",
              "lerntext": "gauche",
              "de": "links",
              "wieder": true
            },
            {
              "schrift": "seul",
              "lerntext": "seul",
              "de": "allein",
              "wieder": true
            },
            {
              "schrift": "dernier",
              "lerntext": "dernier",
              "de": "letzte",
              "wieder": true
            },
            {
              "schrift": "sûr",
              "lerntext": "sûr",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "vrai",
              "lerntext": "vrai",
              "de": "wahr",
              "wieder": true
            },
            {
              "schrift": "riche",
              "lerntext": "riche",
              "de": "reich",
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
              "de": "privat"
            },
            {
              "schrift": "simple",
              "lerntext": "simple",
              "de": "einfach"
            },
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt"
            },
            {
              "schrift": "différent",
              "lerntext": "différent",
              "de": "verschieden"
            },
            {
              "schrift": "utile",
              "lerntext": "utile",
              "de": "nützlich"
            },
            {
              "schrift": "dur",
              "lerntext": "dur",
              "de": "hart",
              "wieder": true
            },
            {
              "schrift": "léger",
              "lerntext": "léger",
              "de": "leicht (Gewicht)",
              "wieder": true
            },
            {
              "schrift": "malheureux",
              "lerntext": "malheureux",
              "de": "unglücklich",
              "wieder": true
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich",
              "wieder": true
            },
            {
              "schrift": "impossible",
              "lerntext": "impossible",
              "de": "unmöglich",
              "wieder": true
            },
            {
              "schrift": "plein",
              "lerntext": "plein",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "pareil",
              "lerntext": "pareil",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "grave",
              "lerntext": "grave",
              "de": "ernst",
              "wieder": true
            },
            {
              "schrift": "vide",
              "lerntext": "vide",
              "de": "leer",
              "wieder": true
            },
            {
              "schrift": "gauche",
              "lerntext": "gauche",
              "de": "links",
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
              "de": "genau"
            },
            {
              "schrift": "vif",
              "lerntext": "vif",
              "de": "lebhaft"
            },
            {
              "schrift": "privé",
              "lerntext": "privé",
              "de": "privat",
              "wieder": true
            },
            {
              "schrift": "simple",
              "lerntext": "simple",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt",
              "wieder": true
            },
            {
              "schrift": "différent",
              "lerntext": "différent",
              "de": "verschieden",
              "wieder": true
            },
            {
              "schrift": "utile",
              "lerntext": "utile",
              "de": "nützlich",
              "wieder": true
            },
            {
              "schrift": "dur",
              "lerntext": "dur",
              "de": "hart",
              "wieder": true
            },
            {
              "schrift": "léger",
              "lerntext": "léger",
              "de": "leicht (Gewicht)",
              "wieder": true
            },
            {
              "schrift": "malheureux",
              "lerntext": "malheureux",
              "de": "unglücklich",
              "wieder": true
            },
            {
              "schrift": "possible",
              "lerntext": "possible",
              "de": "möglich",
              "wieder": true
            },
            {
              "schrift": "impossible",
              "lerntext": "impossible",
              "de": "unmöglich",
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
              "wieder": true
            },
            {
              "schrift": "vif",
              "lerntext": "vif",
              "de": "lebhaft",
              "wieder": true
            },
            {
              "schrift": "privé",
              "lerntext": "privé",
              "de": "privat",
              "wieder": true
            },
            {
              "schrift": "simple",
              "lerntext": "simple",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "double",
              "lerntext": "double",
              "de": "doppelt",
              "wieder": true
            },
            {
              "schrift": "différent",
              "lerntext": "différent",
              "de": "verschieden",
              "wieder": true
            },
            {
              "schrift": "utile",
              "lerntext": "utile",
              "de": "nützlich",
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
          "lerntext": "je le fais [Slot]"
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
          "lerntext": "je le fais [Slot]"
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
          "lerntext": "je le fais [Slot]"
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
          "lerntext": "je le fais [Slot]"
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
          "lerntext": "je le fais [Slot]"
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
          "lerntext": "je le fais [Slot]"
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
          "lerntext": "je le fais [Slot]"
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
              "de": "sie (m. Pl.)"
            },
            {
              "schrift": "elles",
              "lerntext": "elles",
              "de": "sie (f. Pl.)"
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
              "de": "ihm"
            },
            {
              "schrift": "dont",
              "lerntext": "dont",
              "de": "dessen"
            },
            {
              "schrift": "elle",
              "lerntext": "elle",
              "de": "sie (Sg.)"
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
              "de": "ihnen"
            },
            {
              "schrift": "cet",
              "lerntext": "cet",
              "de": "dieser"
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "meine"
            },
            {
              "schrift": "tes",
              "lerntext": "tes",
              "de": "deine"
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "sein"
            },
            {
              "schrift": "ils",
              "lerntext": "ils",
              "de": "sie (m. Pl.)",
              "wieder": true
            },
            {
              "schrift": "elles",
              "lerntext": "elles",
              "de": "sie (f. Pl.)",
              "wieder": true
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
              "de": "ihm",
              "wieder": true
            },
            {
              "schrift": "dont",
              "lerntext": "dont",
              "de": "dessen",
              "wieder": true
            },
            {
              "schrift": "elle",
              "lerntext": "elle",
              "de": "sie (Sg.)",
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
              "de": "seine"
            },
            {
              "schrift": "ses",
              "lerntext": "ses",
              "de": "seine"
            },
            {
              "schrift": "votre",
              "lerntext": "votre",
              "de": "euer"
            },
            {
              "schrift": "vos",
              "lerntext": "vos",
              "de": "eure"
            },
            {
              "schrift": "leurs",
              "lerntext": "leurs",
              "de": "ihre"
            },
            {
              "schrift": "leur",
              "lerntext": "leur",
              "de": "ihnen",
              "wieder": true
            },
            {
              "schrift": "cet",
              "lerntext": "cet",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "meine",
              "wieder": true
            },
            {
              "schrift": "tes",
              "lerntext": "tes",
              "de": "deine",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "ils",
              "lerntext": "ils",
              "de": "sie (m. Pl.)",
              "wieder": true
            },
            {
              "schrift": "elles",
              "lerntext": "elles",
              "de": "sie (f. Pl.)",
              "wieder": true
            },
            {
              "schrift": "lui",
              "lerntext": "lui",
              "de": "ihm",
              "wieder": true
            },
            {
              "schrift": "dont",
              "lerntext": "dont",
              "de": "dessen",
              "wieder": true
            },
            {
              "schrift": "elle",
              "lerntext": "elle",
              "de": "sie (Sg.)",
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
              "wieder": true
            },
            {
              "schrift": "ses",
              "lerntext": "ses",
              "de": "seine",
              "wieder": true
            },
            {
              "schrift": "votre",
              "lerntext": "votre",
              "de": "euer",
              "wieder": true
            },
            {
              "schrift": "vos",
              "lerntext": "vos",
              "de": "eure",
              "wieder": true
            },
            {
              "schrift": "leurs",
              "lerntext": "leurs",
              "de": "ihre",
              "wieder": true
            },
            {
              "schrift": "leur",
              "lerntext": "leur",
              "de": "ihnen",
              "wieder": true
            },
            {
              "schrift": "cet",
              "lerntext": "cet",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "meine",
              "wieder": true
            },
            {
              "schrift": "tes",
              "lerntext": "tes",
              "de": "deine",
              "wieder": true
            },
            {
              "schrift": "son",
              "lerntext": "son",
              "de": "sein",
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
              "wieder": true
            },
            {
              "schrift": "ses",
              "lerntext": "ses",
              "de": "seine",
              "wieder": true
            },
            {
              "schrift": "votre",
              "lerntext": "votre",
              "de": "euer",
              "wieder": true
            },
            {
              "schrift": "vos",
              "lerntext": "vos",
              "de": "eure",
              "wieder": true
            },
            {
              "schrift": "leurs",
              "lerntext": "leurs",
              "de": "ihre",
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
          "lerntext": "c'est [Slot] la maison"
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
          "lerntext": "c'est [Slot] la maison"
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
          "lerntext": "c'est [Slot] la maison"
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
          "lerntext": "c'est [Slot] la maison"
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
          "lerntext": "je viens [Slot] je peux"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "puisque",
              "lerntext": "puisque",
              "de": "da ja"
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "denn"
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "weder"
            },
            {
              "schrift": "quoique",
              "lerntext": "quoique",
              "de": "obwohl"
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
          "lerntext": "je viens [Slot] je peux"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "puisque",
              "lerntext": "puisque",
              "de": "da ja",
              "wieder": true
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "denn",
              "wieder": true
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "weder",
              "wieder": true
            },
            {
              "schrift": "quoique",
              "lerntext": "quoique",
              "de": "obwohl",
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
          "lerntext": "je viens [Slot] je peux"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "puisque",
              "lerntext": "puisque",
              "de": "da ja",
              "wieder": true
            },
            {
              "schrift": "car",
              "lerntext": "car",
              "de": "denn",
              "wieder": true
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "weder",
              "wieder": true
            },
            {
              "schrift": "quoique",
              "lerntext": "quoique",
              "de": "obwohl",
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
          "lerntext": "[Slot] livre"
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
          "lerntext": "je ai [Slot]"
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "regardé",
              "lerntext": "regardé",
              "de": "schauen"
            },
            {
              "schrift": "acheté",
              "lerntext": "acheté",
              "de": "kaufen"
            },
            {
              "schrift": "vu",
              "lerntext": "vu",
              "de": "sehen"
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "machen"
            },
            {
              "schrift": "trouvé",
              "lerntext": "trouvé",
              "de": "finden"
            },
            {
              "schrift": "écrit",
              "lerntext": "écrit",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "entendu",
              "lerntext": "entendu",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "perdu",
              "lerntext": "perdu",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "pris",
              "lerntext": "pris",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "envoyé",
              "lerntext": "envoyé",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "montré",
              "lerntext": "montré",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "parlé",
              "lerntext": "parlé",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "commencé",
              "lerntext": "commencé",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "voulu",
              "lerntext": "voulu",
              "de": "wollen",
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
          "lerntext": "je ai [Slot]"
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "pris",
              "lerntext": "pris",
              "de": "nehmen"
            },
            {
              "schrift": "écrit",
              "lerntext": "écrit",
              "de": "schreiben"
            },
            {
              "schrift": "entendu",
              "lerntext": "entendu",
              "de": "hören"
            },
            {
              "schrift": "perdu",
              "lerntext": "perdu",
              "de": "verlieren"
            },
            {
              "schrift": "regardé",
              "lerntext": "regardé",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "vu",
              "lerntext": "vu",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "acheté",
              "lerntext": "acheté",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "trouvé",
              "lerntext": "trouvé",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "envoyé",
              "lerntext": "envoyé",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "mis",
              "lerntext": "mis",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "mort",
              "lerntext": "mort",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "expliqué",
              "lerntext": "expliqué",
              "de": "erklären",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travaillé",
              "lerntext": "travaillé",
              "de": "arbeiten"
            },
            {
              "schrift": "joué",
              "lerntext": "joué",
              "de": "spielen"
            },
            {
              "schrift": "dormi",
              "lerntext": "dormi",
              "de": "schlafen"
            },
            {
              "schrift": "attendu",
              "lerntext": "attendu",
              "de": "warten"
            },
            {
              "schrift": "cherché",
              "lerntext": "cherché",
              "de": "suchen"
            },
            {
              "schrift": "demandé",
              "lerntext": "demandé",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "payé",
              "lerntext": "payé",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "répondu",
              "lerntext": "répondu",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "envoyé",
              "lerntext": "envoyé",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "mangé",
              "lerntext": "mangé",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "senti",
              "lerntext": "senti",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "donné",
              "lerntext": "donné",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "vendu",
              "lerntext": "vendu",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "cru",
              "lerntext": "cru",
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
          "schrift": "hier j'ai [Slot]",
          "lerntext": "hier j'ai [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "demandé",
              "lerntext": "demandé",
              "de": "fragen"
            },
            {
              "schrift": "répondu",
              "lerntext": "répondu",
              "de": "antworten"
            },
            {
              "schrift": "payé",
              "lerntext": "payé",
              "de": "bezahlen"
            },
            {
              "schrift": "travaillé",
              "lerntext": "travaillé",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "dormi",
              "lerntext": "dormi",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "attendu",
              "lerntext": "attendu",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "cherché",
              "lerntext": "cherché",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "joué",
              "lerntext": "joué",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "venu",
              "lerntext": "venu",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "pensé",
              "lerntext": "pensé",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "écouté",
              "lerntext": "écouté",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "resté",
              "lerntext": "resté",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "envoyé",
              "lerntext": "envoyé",
              "de": "schicken",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oublié",
              "lerntext": "oublié",
              "de": "vergessen"
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen"
            },
            {
              "schrift": "donné",
              "lerntext": "donné",
              "de": "geben"
            },
            {
              "schrift": "dit",
              "lerntext": "dit",
              "de": "sagen"
            },
            {
              "schrift": "parlé",
              "lerntext": "parlé",
              "de": "sprechen"
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "arrêté",
              "lerntext": "arrêté",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "allé",
              "lerntext": "allé",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "ri",
              "lerntext": "ri",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "dû",
              "lerntext": "dû",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "marché",
              "lerntext": "marché",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "utilisé",
              "lerntext": "utilisé",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "devenu",
              "lerntext": "devenu",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "su",
              "lerntext": "su",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "bu",
              "lerntext": "bu",
              "de": "trinken",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "öffnen"
            },
            {
              "schrift": "oublié",
              "lerntext": "oublié",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "compris",
              "lerntext": "compris",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "donné",
              "lerntext": "donné",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "dit",
              "lerntext": "dit",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "parlé",
              "lerntext": "parlé",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "montré",
              "lerntext": "montré",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "commencé",
              "lerntext": "commencé",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "eu",
              "lerntext": "eu",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "voulu",
              "lerntext": "voulu",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "mis",
              "lerntext": "mis",
              "de": "setzen",
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
              "schrift": "regardes",
              "lerntext": "regardes",
              "de": "schauen"
            },
            {
              "schrift": "achètes",
              "lerntext": "achètes",
              "de": "kaufen"
            },
            {
              "schrift": "vois",
              "lerntext": "vois",
              "de": "sehen"
            },
            {
              "schrift": "fais",
              "lerntext": "fais",
              "de": "machen"
            },
            {
              "schrift": "trouves",
              "lerntext": "trouves",
              "de": "finden"
            },
            {
              "schrift": "écris",
              "lerntext": "écris",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "prends",
              "lerntext": "prends",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "meurs",
              "lerntext": "meurs",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "expliques",
              "lerntext": "expliques",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "manges",
              "lerntext": "manges",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "aimes",
              "lerntext": "aimes",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "vends",
              "lerntext": "vends",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "crois",
              "lerntext": "crois",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "viens",
              "lerntext": "viens",
              "de": "kommen",
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
              "schrift": "prends",
              "lerntext": "prends",
              "de": "nehmen"
            },
            {
              "schrift": "écris",
              "lerntext": "écris",
              "de": "schreiben"
            },
            {
              "schrift": "regardes",
              "lerntext": "regardes",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "vois",
              "lerntext": "vois",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "fais",
              "lerntext": "fais",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "achètes",
              "lerntext": "achètes",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "trouves",
              "lerntext": "trouves",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "penses",
              "lerntext": "penses",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "écoutes",
              "lerntext": "écoutes",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "restes",
              "lerntext": "restes",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "envoies",
              "lerntext": "envoies",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "arrêtes",
              "lerntext": "arrêtes",
              "de": "anhalten",
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
          "lerntext": "il [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travaille",
              "lerntext": "travaille",
              "de": "arbeiten"
            },
            {
              "schrift": "joue",
              "lerntext": "joue",
              "de": "spielen"
            },
            {
              "schrift": "dort",
              "lerntext": "dort",
              "de": "schlafen"
            },
            {
              "schrift": "attend",
              "lerntext": "attend",
              "de": "warten"
            },
            {
              "schrift": "cherche",
              "lerntext": "cherche",
              "de": "suchen"
            },
            {
              "schrift": "demande",
              "lerntext": "demande",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "répond",
              "lerntext": "répond",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "va",
              "lerntext": "va",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "rit",
              "lerntext": "rit",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "doit",
              "lerntext": "doit",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "marche",
              "lerntext": "marche",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "utilise",
              "lerntext": "utilise",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "devient",
              "lerntext": "devient",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "sait",
              "lerntext": "sait",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "boit",
              "lerntext": "boit",
              "de": "trinken",
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
          "lerntext": "il [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "il",
            "lerntext": "il",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "demande",
              "lerntext": "demande",
              "de": "fragen"
            },
            {
              "schrift": "répond",
              "lerntext": "répond",
              "de": "antworten"
            },
            {
              "schrift": "travaille",
              "lerntext": "travaille",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "dort",
              "lerntext": "dort",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "attend",
              "lerntext": "attend",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "cherche",
              "lerntext": "cherche",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "joue",
              "lerntext": "joue",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "montre",
              "lerntext": "montre",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "commence",
              "lerntext": "commence",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "a",
              "lerntext": "a",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "veut",
              "lerntext": "veut",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "met",
              "lerntext": "met",
              "de": "setzen",
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
          "lerntext": "nous [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oublions",
              "lerntext": "oublions",
              "de": "vergessen"
            },
            {
              "schrift": "comprenons",
              "lerntext": "comprenons",
              "de": "verstehen"
            },
            {
              "schrift": "donnons",
              "lerntext": "donnons",
              "de": "geben"
            },
            {
              "schrift": "disons",
              "lerntext": "disons",
              "de": "sagen"
            },
            {
              "schrift": "parlons",
              "lerntext": "parlons",
              "de": "sprechen"
            },
            {
              "schrift": "ouvrons",
              "lerntext": "ouvrons",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "mourons",
              "lerntext": "mourons",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "expliquons",
              "lerntext": "expliquons",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "mangeons",
              "lerntext": "mangeons",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "sentons",
              "lerntext": "sentons",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "aimons",
              "lerntext": "aimons",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "vendons",
              "lerntext": "vendons",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "croyons",
              "lerntext": "croyons",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "venons",
              "lerntext": "venons",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "pensons",
              "lerntext": "pensons",
              "de": "denken",
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
          "lerntext": "nous [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ouvrons",
              "lerntext": "ouvrons",
              "de": "öffnen"
            },
            {
              "schrift": "oublions",
              "lerntext": "oublions",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "comprenons",
              "lerntext": "comprenons",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "donnons",
              "lerntext": "donnons",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "disons",
              "lerntext": "disons",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "parlons",
              "lerntext": "parlons",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "écoutons",
              "lerntext": "écoutons",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "restons",
              "lerntext": "restons",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "envoyons",
              "lerntext": "envoyons",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "arrêtons",
              "lerntext": "arrêtons",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "allons",
              "lerntext": "allons",
              "de": "gehen",
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
          "lerntext": "vous [Slot]"
        },
        "frameDe": "ihr [Slot].",
        "pronouns": [
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "restent",
              "lerntext": "restent",
              "de": "bleiben"
            },
            {
              "schrift": "rient",
              "lerntext": "rient",
              "de": "lachen"
            },
            {
              "schrift": "pensent",
              "lerntext": "pensent",
              "de": "denken"
            },
            {
              "schrift": "croient",
              "lerntext": "croient",
              "de": "glauben"
            },
            {
              "schrift": "doivent",
              "lerntext": "doivent",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "marchent",
              "lerntext": "marchent",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "utilisent",
              "lerntext": "utilisent",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "deviennent",
              "lerntext": "deviennent",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "savent",
              "lerntext": "savent",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "boivent",
              "lerntext": "boivent",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "montrent",
              "lerntext": "montrent",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "commencent",
              "lerntext": "commencent",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "ont",
              "lerntext": "ont",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "veulent",
              "lerntext": "veulent",
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
              "de": "schwierig"
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig"
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer"
            },
            {
              "schrift": "sale",
              "lerntext": "sale",
              "de": "schmutzig"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
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
          "lerntext": "suis aussi [Slot] que toi"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß"
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein"
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung"
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
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
            "de": "als"
          }
        ],
        "id": "27.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "suis aussi [Slot] que toi",
          "lerntext": "suis aussi [Slot] que toi"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm"
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt"
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu"
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark"
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
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
          "lerntext": "je me sens [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach"
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
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
            "de": "Sinn"
          }
        ],
        "id": "28.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je me sens [Slot]",
          "lerntext": "je me sens [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung"
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt"
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
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
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
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
          "lerntext": "nous nous voyons [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
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
          "lerntext": "nous nous voyons [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
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
          "lerntext": "je reste ici [Slot] je suis fatigué"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil"
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "wenn"
            },
            {
              "schrift": "bien que",
              "lerntext": "bien que",
              "de": "obwohl"
            },
            {
              "schrift": "lorsque",
              "lerntext": "lorsque",
              "de": "als"
            },
            {
              "schrift": "mais",
              "lerntext": "mais",
              "de": "aber"
            },
            {
              "schrift": "ou",
              "lerntext": "ou",
              "de": "oder",
              "wieder": true
            },
            {
              "schrift": "et",
              "lerntext": "et",
              "de": "und",
              "wieder": true
            },
            {
              "schrift": "donc",
              "lerntext": "donc",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "comme",
              "lerntext": "comme",
              "de": "wie",
              "wieder": true
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit",
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
          "lerntext": "je reste ici [Slot] je suis fatigué"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ou",
              "lerntext": "ou",
              "de": "oder"
            },
            {
              "schrift": "et",
              "lerntext": "et",
              "de": "und"
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "wenn",
              "wieder": true
            },
            {
              "schrift": "lorsque",
              "lerntext": "lorsque",
              "de": "als",
              "wieder": true
            },
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "bien que",
              "lerntext": "bien que",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "mais",
              "lerntext": "mais",
              "de": "aber",
              "wieder": true
            },
            {
              "schrift": "donc",
              "lerntext": "donc",
              "de": "also",
              "wieder": true
            },
            {
              "schrift": "comme",
              "lerntext": "comme",
              "de": "wie",
              "wieder": true
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit",
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
          "lerntext": "je crois que c'est [Slot]"
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
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch"
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank"
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang"
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
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
            "de": "dass"
          }
        ],
        "id": "29.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je crois que c'est [Slot]",
          "lerntext": "je crois que c'est [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach"
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz"
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich"
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
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
          "lerntext": "si j'ai le temps, je veux [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben"
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen"
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken"
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben"
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "aimer",
              "lerntext": "aimer",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken",
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
          "lerntext": "peux-tu [Slot], je te prie ?"
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
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten"
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten"
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen"
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
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
          "lerntext": "peux-tu [Slot], je te prie ?"
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
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten"
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen"
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
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
          "lerntext": "tu dois [Slot]"
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
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen"
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen"
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen"
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen"
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "aimer",
              "lerntext": "aimer",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
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
          "lerntext": "tu dois [Slot]"
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
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen"
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
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
          "lerntext": "je donne le livre à [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund"
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter"
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind"
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "Sinn",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
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
          "lerntext": "je donne le livre à [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester"
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder"
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "Sinn",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
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
          "lerntext": "je montre la ville à [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund"
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter"
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind"
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester",
              "wieder": true
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "Tatsache",
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
          "lerntext": "je montre la ville à [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester"
            },
            {
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder"
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student",
              "wieder": true
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
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
          "lerntext": "je veux un verre de [Slot]"
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch"
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee"
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "wieder": true
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "Sinn",
              "wieder": true
            },
            {
              "schrift": "repas",
              "lerntext": "repas",
              "de": "Mahlzeit",
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
            "de": "Glas"
          }
        ],
        "id": "32.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nous avons assez de [Slot]",
          "lerntext": "nous avons assez de [Slot]"
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld"
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot"
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht"
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch"
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch",
              "wieder": true
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "Tatsache",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
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
          "lerntext": "nous avons assez de [Slot]"
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch"
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht",
              "wieder": true
            },
            {
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch",
              "wieder": true
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
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
          "lerntext": "je attends depuis une [Slot]"
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde"
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche"
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht"
            },
            {
              "schrift": "travail",
              "lerntext": "travail",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht",
              "wieder": true
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte",
              "wieder": true
            },
            {
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel",
              "wieder": true
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise",
              "wieder": true
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank",
              "wieder": true
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür",
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
          "lerntext": "je attends depuis une [Slot]"
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag"
            },
            {
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend"
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "Sinn",
              "wieder": true
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel",
              "wieder": true
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee",
              "wieder": true
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein",
              "wieder": true
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub",
              "wieder": true
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof",
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
          "lerntext": "[Slot] je vais à la maison"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
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
          "lerntext": "[Slot] je vais à la maison"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
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
          "lerntext": "je voudrais [Slot]"
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "rester",
              "lerntext": "rester",
              "de": "bleiben"
            },
            {
              "schrift": "rire",
              "lerntext": "rire",
              "de": "lachen"
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken"
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben"
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
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
          "schrift": "pourriez-vous me donner [Slot] ?",
          "lerntext": "pourriez-vous me donner [Slot] ?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot"
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch"
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche"
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "wieder": true
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier",
              "wieder": true
            },
            {
              "schrift": "pantalon",
              "lerntext": "pantalon",
              "de": "Hose",
              "wieder": true
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis",
              "wieder": true
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "repas",
              "lerntext": "repas",
              "de": "Mahlzeit",
              "wieder": true
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer",
              "wieder": true
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz",
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
          "lerntext": "pourriez-vous me donner [Slot] ?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch"
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche",
              "wieder": true
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch",
              "wieder": true
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot",
              "wieder": true
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee",
              "wieder": true
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen",
              "wieder": true
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut",
              "wieder": true
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "fait",
              "lerntext": "fait",
              "de": "Tatsache",
              "wieder": true
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd",
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
          "lerntext": "je pense que c'est [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß"
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein"
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung"
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm",
              "wieder": true
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön",
              "wieder": true
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)",
              "wieder": true
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch",
              "wieder": true
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht",
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
          "lerntext": "je pense que c'est [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm"
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt"
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu"
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark"
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß",
              "wieder": true
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste",
              "wieder": true
            },
            {
              "schrift": "bleu",
              "lerntext": "bleu",
              "de": "blau",
              "wieder": true
            },
            {
              "schrift": "lent",
              "lerntext": "lent",
              "de": "langsam",
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
          "lerntext": "je trouve ça très [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
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
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch"
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank"
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang"
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz",
              "wieder": true
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich",
              "wieder": true
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken",
              "wieder": true
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün",
              "wieder": true
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett",
              "wieder": true
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich",
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
          "lerntext": "je trouve ça très [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach"
            },
            {
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz"
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich"
            },
            {
              "schrift": "faux",
              "lerntext": "faux",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank",
              "wieder": true
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot",
              "wieder": true
            },
            {
              "schrift": "rapide",
              "lerntext": "rapide",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief",
              "wieder": true
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb",
              "wieder": true
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig",
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
          "lerntext": "demain je vais [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen"
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen"
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen"
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen"
            },
            {
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden"
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "aimer",
              "lerntext": "aimer",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
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
          "lerntext": "demain je vais [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen"
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben"
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "voir",
              "lerntext": "voir",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
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
          "lerntext": "je veux [Slot] bientôt"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten"
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten"
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen"
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
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
          "lerntext": "je veux [Slot] bientôt"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten"
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
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
          "lerntext": "c'est l'homme qui [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "reste",
              "lerntext": "reste",
              "de": "bleiben"
            },
            {
              "schrift": "rit",
              "lerntext": "rit",
              "de": "lachen"
            },
            {
              "schrift": "pense",
              "lerntext": "pense",
              "de": "denken"
            },
            {
              "schrift": "croit",
              "lerntext": "croit",
              "de": "glauben"
            },
            {
              "schrift": "mange",
              "lerntext": "mange",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "sent",
              "lerntext": "sent",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "aime",
              "lerntext": "aime",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "vend",
              "lerntext": "vend",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "vient",
              "lerntext": "vient",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "perd",
              "lerntext": "perd",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "écoute",
              "lerntext": "écoute",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "envoie",
              "lerntext": "envoie",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "arrête",
              "lerntext": "arrête",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "va",
              "lerntext": "va",
              "de": "gehen",
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
          "lerntext": "je cherche un endroit où on peut [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten"
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten"
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen"
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
              "wieder": true
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden",
              "wieder": true
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken",
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
            "de": "wo"
          },
          {
            "schrift": "endroit",
            "lerntext": "endroit",
            "de": "Ort"
          }
        ],
        "id": "37.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "je cherche un endroit où on peut [Slot]",
          "lerntext": "je cherche un endroit où on peut [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten"
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen",
              "wieder": true
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule"
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof"
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen"
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt"
            },
            {
              "schrift": "endroit",
              "lerntext": "endroit",
              "de": "Ort",
              "wieder": true
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume",
              "wieder": true
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid",
              "wieder": true
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen",
              "wieder": true
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse",
              "wieder": true
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum",
              "wieder": true
            },
            {
              "schrift": "tête",
              "lerntext": "tête",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh",
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
          "lerntext": "je veux [Slot] parce que j'ai le temps"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen"
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen"
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen"
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen"
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "aimer",
              "lerntext": "aimer",
              "de": "lieben",
              "wieder": true
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören",
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
          "lerntext": "je veux [Slot] parce que j'ai le temps"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "je",
            "lerntext": "je",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen"
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen",
              "wieder": true
            },
            {
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten",
              "wieder": true
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen",
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
