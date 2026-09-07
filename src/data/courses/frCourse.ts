// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_fr.py
// Neu bauen: python bauplan.py fr --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 24 Module, 151 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const FRENCH_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
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
            "de": "ihr, Sie"
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
            "schrift": "être",
            "lerntext": "être",
            "de": "sein"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nous suis [Slot]",
          "lerntext": "nous suis [Slot]"
        },
        "frameDe": "wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr, Sie"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "man, wir"
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
              "schrift": "on",
              "lerntext": "on",
              "de": "man, wir"
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "1.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nous suis [Slot]",
          "lerntext": "nous suis [Slot]"
        },
        "frameDe": "wir bin [Slot].",
        "pronouns": [
          {
            "schrift": "nous",
            "lerntext": "nous",
            "de": "wir"
          },
          {
            "schrift": "vous",
            "lerntext": "vous",
            "de": "ihr, Sie"
          },
          {
            "schrift": "on",
            "lerntext": "on",
            "de": "man, wir"
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
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
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
            "de": "ihr, Sie"
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
              "de": "stark, laut"
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
            "de": "ihr, Sie"
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
              "schrift": "je",
              "lerntext": "je",
              "de": "ich"
            },
            {
              "schrift": "nous",
              "lerntext": "nous",
              "de": "wir"
            },
            {
              "schrift": "tu",
              "lerntext": "tu",
              "de": "du"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung"
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett"
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
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche"
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett"
            },
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
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester"
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön"
            },
            {
              "schrift": "je",
              "lerntext": "je",
              "de": "ich"
            },
            {
              "schrift": "femme",
              "lerntext": "femme",
              "de": "Frau"
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
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch"
            },
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
              "schrift": "frère",
              "lerntext": "frère",
              "de": "Bruder"
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit"
            },
            {
              "schrift": "mère",
              "lerntext": "mère",
              "de": "Mutter"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "dorthin, daran"
          }
        ],
        "id": "2.3"
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
              "de": "Büro, Schreibtisch"
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer"
            },
            {
              "schrift": "nous",
              "lerntext": "nous",
              "de": "wir"
            },
            {
              "schrift": "table",
              "lerntext": "table",
              "de": "Tisch"
            },
            {
              "schrift": "tu",
              "lerntext": "tu",
              "de": "du"
            },
            {
              "schrift": "père",
              "lerntext": "père",
              "de": "Vater"
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
          "schrift": "je ai une [Slot]",
          "lerntext": "je ai une [Slot]"
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
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie"
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen, Tochter"
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto"
            },
            {
              "schrift": "main",
              "lerntext": "main",
              "de": "Hand"
            },
            {
              "schrift": "avoir",
              "lerntext": "avoir",
              "de": "haben"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            },
            {
              "schrift": "maison",
              "lerntext": "maison",
              "de": "Haus"
            },
            {
              "schrift": "sac",
              "lerntext": "sac",
              "de": "Tasche"
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "avoir",
            "lerntext": "avoir",
            "de": "haben"
          }
        ],
        "id": "2.5"
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
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen, Tochter"
            },
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
              "schrift": "professeur",
              "lerntext": "professeur",
              "de": "Lehrer"
            },
            {
              "schrift": "ami",
              "lerntext": "ami",
              "de": "Freund"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.6"
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
              "schrift": "notre",
              "lerntext": "notre",
              "de": "unser"
            },
            {
              "schrift": "ton",
              "lerntext": "ton",
              "de": "dein"
            },
            {
              "schrift": "mon",
              "lerntext": "mon",
              "de": "mein"
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro, Schreibtisch"
            },
            {
              "schrift": "malade",
              "lerntext": "malade",
              "de": "krank"
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
            },
            {
              "schrift": "être",
              "lerntext": "être",
              "de": "sein"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind"
            },
            {
              "schrift": "vieux",
              "lerntext": "vieux",
              "de": "alt"
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark, laut"
            },
            {
              "schrift": "étudiant",
              "lerntext": "étudiant",
              "de": "Student"
            },
            {
              "schrift": "pied",
              "lerntext": "pied",
              "de": "Fuß"
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
            },
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese"
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas"
            },
            {
              "schrift": "voiture",
              "lerntext": "voiture",
              "de": "Auto"
            },
            {
              "schrift": "porte",
              "lerntext": "porte",
              "de": "Tür"
            },
            {
              "schrift": "chaise",
              "lerntext": "chaise",
              "de": "Stuhl"
            },
            {
              "schrift": "fille",
              "lerntext": "fille",
              "de": "Mädchen, Tochter"
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
        "id": "2.9"
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
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese"
            },
            {
              "schrift": "jeune",
              "lerntext": "jeune",
              "de": "jung"
            },
            {
              "schrift": "livre",
              "lerntext": "livre",
              "de": "Buch"
            },
            {
              "schrift": "gentil",
              "lerntext": "gentil",
              "de": "nett"
            },
            {
              "schrift": "faible",
              "lerntext": "faible",
              "de": "schwach"
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
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen"
            },
            {
              "schrift": "vouloir",
              "lerntext": "vouloir",
              "de": "wollen"
            },
            {
              "schrift": "cette",
              "lerntext": "cette",
              "de": "diese"
            },
            {
              "schrift": "y",
              "lerntext": "y",
              "de": "dorthin, daran"
            },
            {
              "schrift": "sœur",
              "lerntext": "sœur",
              "de": "Schwester"
            },
            {
              "schrift": "lit",
              "lerntext": "lit",
              "de": "Bett"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "vouloir",
            "lerntext": "vouloir",
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
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot"
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
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser"
            },
            {
              "schrift": "manger",
              "lerntext": "manger",
              "de": "essen"
            }
          ]
        ],
        "newCount": 2,
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
              "de": "Zeit, Wetter"
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld, Silber"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot"
            },
            {
              "schrift": "besoin",
              "lerntext": "besoin",
              "de": "Bedürfnis"
            },
            {
              "schrift": "café",
              "lerntext": "café",
              "de": "Kaffee"
            },
            {
              "schrift": "famille",
              "lerntext": "famille",
              "de": "Familie"
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
            "de": "von, aus"
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
        "frameDe": "ich möchte einen [Slot], bitte.",
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
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht, Obst"
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld, Silber"
            },
            {
              "schrift": "temps",
              "lerntext": "temps",
              "de": "Zeit, Wetter"
            },
            {
              "schrift": "lait",
              "lerntext": "lait",
              "de": "Milch"
            },
            {
              "schrift": "pain",
              "lerntext": "pain",
              "de": "Brot"
            },
            {
              "schrift": "beau",
              "lerntext": "beau",
              "de": "schön"
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
              "schrift": "fruit",
              "lerntext": "fruit",
              "de": "Frucht, Obst"
            },
            {
              "schrift": "petit-déjeuner",
              "lerntext": "petit-déjeuner",
              "de": "Frühstück"
            },
            {
              "schrift": "dîner",
              "lerntext": "dîner",
              "de": "Abendessen"
            },
            {
              "schrift": "boire",
              "lerntext": "boire",
              "de": "trinken"
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "manger",
            "lerntext": "manger",
            "de": "essen"
          },
          {
            "schrift": "boire",
            "lerntext": "boire",
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
            "de": "ihr, Sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "certain",
              "lerntext": "certain",
              "de": "gewiss, sicher"
            },
            {
              "schrift": "non",
              "lerntext": "non",
              "de": "nein"
            },
            {
              "schrift": "oui",
              "lerntext": "oui",
              "de": "ja"
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
              "schrift": "viande",
              "lerntext": "viande",
              "de": "Fleisch"
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
            "de": "ihr, Sie"
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
              "de": "gewiss, sicher"
            },
            {
              "schrift": "légume",
              "lerntext": "légume",
              "de": "Gemüse"
            },
            {
              "schrift": "non",
              "lerntext": "non",
              "de": "nein"
            },
            {
              "schrift": "argent",
              "lerntext": "argent",
              "de": "Geld, Silber"
            },
            {
              "schrift": "de",
              "lerntext": "de",
              "de": "von, aus"
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
            "de": "wer, der/die/das"
          },
          {
            "schrift": "comme",
            "lerntext": "comme",
            "de": "wie, da"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles, ganz"
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht"
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu"
            },
            {
              "schrift": "pourquoi",
              "lerntext": "pourquoi",
              "de": "warum"
            },
            {
              "schrift": "bon",
              "lerntext": "bon",
              "de": "gut"
            },
            {
              "schrift": "important",
              "lerntext": "important",
              "de": "wichtig"
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
            "de": "wer, der/die/das"
          },
          {
            "schrift": "comme",
            "lerntext": "comme",
            "de": "wie, da"
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
          "schrift": "où y a-t-il une [Slot] ?",
          "lerntext": "où y a-t-il une [Slot] ?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo, wohin"
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
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof"
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
              "de": "Straße, Weg"
            },
            {
              "schrift": "tout",
              "lerntext": "tout",
              "de": "alles, ganz"
            },
            {
              "schrift": "mauvais",
              "lerntext": "mauvais",
              "de": "schlecht"
            },
            {
              "schrift": "chambre",
              "lerntext": "chambre",
              "de": "Zimmer"
            },
            {
              "schrift": "heureux",
              "lerntext": "heureux",
              "de": "glücklich"
            },
            {
              "schrift": "oui",
              "lerntext": "oui",
              "de": "ja"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo, wohin"
          },
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "dorthin, daran"
          }
        ],
        "id": "5.1"
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
            "de": "wo, wohin"
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
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen"
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof"
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank"
            },
            {
              "schrift": "école",
              "lerntext": "école",
              "de": "Schule"
            },
            {
              "schrift": "église",
              "lerntext": "église",
              "de": "Kirche"
            },
            {
              "schrift": "route",
              "lerntext": "route",
              "de": "Straße, Weg"
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
          "schrift": "il y a un [Slot] ici ?",
          "lerntext": "il y a un [Slot] ici ?"
        },
        "frameDe": "Gibt es hier ein [Slot]?",
        "pronouns": [
          {
            "schrift": "où",
            "lerntext": "où",
            "de": "wo, wohin"
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
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen"
            },
            {
              "schrift": "magasin",
              "lerntext": "magasin",
              "de": "Geschäft"
            },
            {
              "schrift": "bureau",
              "lerntext": "bureau",
              "de": "Büro, Schreibtisch"
            },
            {
              "schrift": "enfant",
              "lerntext": "enfant",
              "de": "Kind"
            },
            {
              "schrift": "fort",
              "lerntext": "fort",
              "de": "stark, laut"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "dorthin, daran"
          }
        ],
        "id": "5.3"
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
            "de": "dort, da"
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
              "de": "Straße, Weg"
            },
            {
              "schrift": "chez",
              "lerntext": "chez",
              "de": "bei"
            },
            {
              "schrift": "hôpital",
              "lerntext": "hôpital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "aéroport",
              "lerntext": "aéroport",
              "de": "Flughafen"
            },
            {
              "schrift": "eau",
              "lerntext": "eau",
              "de": "Wasser"
            },
            {
              "schrift": "gare",
              "lerntext": "gare",
              "de": "Bahnhof"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "là",
            "lerntext": "là",
            "de": "dort, da"
          },
          {
            "schrift": "chez",
            "lerntext": "chez",
            "de": "bei"
          }
        ],
        "id": "5.4"
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
            "de": "an, in, zu"
          },
          {
            "schrift": "sur",
            "lerntext": "sur",
            "de": "auf, über"
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
              "schrift": "sur",
              "lerntext": "sur",
              "de": "auf, über"
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
              "schrift": "avec",
              "lerntext": "avec",
              "de": "mit"
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt"
            },
            {
              "schrift": "en",
              "lerntext": "en",
              "de": "davon, daraus"
            },
            {
              "schrift": "verre",
              "lerntext": "verre",
              "de": "Glas"
            },
            {
              "schrift": "déjeuner",
              "lerntext": "déjeuner",
              "de": "Mittagessen"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "à",
            "lerntext": "à",
            "de": "an, in, zu"
          },
          {
            "schrift": "sur",
            "lerntext": "sur",
            "de": "auf, über"
          },
          {
            "schrift": "à",
            "lerntext": "à",
            "de": "an, in, zu"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "von, aus"
          },
          {
            "schrift": "avec",
            "lerntext": "avec",
            "de": "mit"
          },
          {
            "schrift": "sur",
            "lerntext": "sur",
            "de": "auf, über"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "von, aus"
          },
          {
            "schrift": "en",
            "lerntext": "en",
            "de": "davon, daraus"
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
          "schrift": "c'est [Slot] la maison",
          "lerntext": "c'est [Slot] la maison"
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "à",
            "lerntext": "à",
            "de": "an, in, zu"
          },
          {
            "schrift": "sur",
            "lerntext": "sur",
            "de": "auf, über"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "par",
              "lerntext": "par",
              "de": "durch, von"
            },
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
              "schrift": "derrière",
              "lerntext": "derrière",
              "de": "hinter (räumlich)"
            },
            {
              "schrift": "entre",
              "lerntext": "entre",
              "de": "zwischen"
            },
            {
              "schrift": "sous",
              "lerntext": "sous",
              "de": "unter"
            },
            {
              "schrift": "devant",
              "lerntext": "devant",
              "de": "vor (räumlich)"
            },
            {
              "schrift": "avec",
              "lerntext": "avec",
              "de": "mit"
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
              "schrift": "huit",
              "lerntext": "huit",
              "de": "acht"
            },
            {
              "schrift": "dix",
              "lerntext": "dix",
              "de": "zehn"
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
              "schrift": "treize",
              "lerntext": "treize",
              "de": "dreizehn"
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
        "frameDe": "Wie viel kostet ein [Slot]?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte, Ticket"
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise"
            },
            {
              "schrift": "peu",
              "lerntext": "peu",
              "de": "wenig"
            },
            {
              "schrift": "mille",
              "lerntext": "mille",
              "de": "tausend"
            },
            {
              "schrift": "contre",
              "lerntext": "contre",
              "de": "gegen"
            },
            {
              "schrift": "cinquante",
              "lerntext": "cinquante",
              "de": "fünfzig"
            },
            {
              "schrift": "deux",
              "lerntext": "deux",
              "de": "zwei"
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
              "de": "teuer, lieb"
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
              "schrift": "douze",
              "lerntext": "douze",
              "de": "zwölf"
            },
            {
              "schrift": "quatre",
              "lerntext": "quatre",
              "de": "vier"
            },
            {
              "schrift": "sept",
              "lerntext": "sept",
              "de": "sieben"
            },
            {
              "schrift": "sans",
              "lerntext": "sans",
              "de": "ohne"
            },
            {
              "schrift": "billet",
              "lerntext": "billet",
              "de": "Fahrkarte, Ticket"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "pour",
            "lerntext": "pour",
            "de": "für, um zu"
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
              "de": "einfach, leicht"
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief"
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
              "schrift": "six",
              "lerntext": "six",
              "de": "sechs"
            },
            {
              "schrift": "petit",
              "lerntext": "petit",
              "de": "klein"
            },
            {
              "schrift": "trois",
              "lerntext": "trois",
              "de": "drei"
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
              "de": "dick, groß"
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch"
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief"
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig"
            },
            {
              "schrift": "neuf",
              "lerntext": "neuf",
              "de": "neun"
            },
            {
              "schrift": "trente",
              "lerntext": "trente",
              "de": "dreißig"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "6.8"
      },
      {
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
        "id": "6.9"
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
              "de": "machen, tun"
            },
            {
              "schrift": "gros",
              "lerntext": "gros",
              "de": "dick, groß"
            },
            {
              "schrift": "soixante",
              "lerntext": "soixante",
              "de": "sechzig"
            },
            {
              "schrift": "onze",
              "lerntext": "onze",
              "de": "elf"
            },
            {
              "schrift": "voyage",
              "lerntext": "voyage",
              "de": "Reise"
            },
            {
              "schrift": "seize",
              "lerntext": "seize",
              "de": "sechzehn"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "pouvoir",
            "lerntext": "pouvoir",
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
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen"
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben"
            },
            {
              "schrift": "jouer",
              "lerntext": "jouer",
              "de": "spielen"
            },
            {
              "schrift": "faire",
              "lerntext": "faire",
              "de": "machen, tun"
            },
            {
              "schrift": "cher",
              "lerntext": "cher",
              "de": "teuer, lieb"
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
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen, sollen"
            },
            {
              "schrift": "dire",
              "lerntext": "dire",
              "de": "sagen"
            },
            {
              "schrift": "un",
              "lerntext": "un",
              "de": "eins"
            },
            {
              "schrift": "utiliser",
              "lerntext": "utiliser",
              "de": "benutzen"
            },
            {
              "schrift": "premier",
              "lerntext": "premier",
              "de": "erste"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "devoir",
            "lerntext": "devoir",
            "de": "müssen, sollen"
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
              "de": "anhalten, aufhören"
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen"
            },
            {
              "schrift": "quarante",
              "lerntext": "quarante",
              "de": "vierzig"
            },
            {
              "schrift": "expliquer",
              "lerntext": "expliquer",
              "de": "erklären"
            },
            {
              "schrift": "par",
              "lerntext": "par",
              "de": "durch, von"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
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
            "de": "ihr, Sie"
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
              "de": "schauen, betrachten"
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen, bitten"
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
              "schrift": "arrêter",
              "lerntext": "arrêter",
              "de": "anhalten, aufhören"
            },
            {
              "schrift": "lourd",
              "lerntext": "lourd",
              "de": "schwer (Gewicht)"
            },
            {
              "schrift": "travailler",
              "lerntext": "travailler",
              "de": "arbeiten"
            },
            {
              "schrift": "cent",
              "lerntext": "cent",
              "de": "hundert"
            },
            {
              "schrift": "vingt",
              "lerntext": "vingt",
              "de": "zwanzig"
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
            "de": "ihr, Sie"
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
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen, bitten"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten"
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen, betrachten"
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören"
            },
            {
              "schrift": "payer",
              "lerntext": "payer",
              "de": "bezahlen"
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
              "schrift": "facile",
              "lerntext": "facile",
              "de": "einfach, leicht"
            },
            {
              "schrift": "parler",
              "lerntext": "parler",
              "de": "sprechen"
            },
            {
              "schrift": "pouvoir",
              "lerntext": "pouvoir",
              "de": "Macht"
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
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben"
            },
            {
              "schrift": "oublier",
              "lerntext": "oublier",
              "de": "vergessen"
            },
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
              "schrift": "perdre",
              "lerntext": "perdre",
              "de": "verlieren"
            }
          ]
        ],
        "newCount": 1,
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
            "de": "ihr, Sie"
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
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen"
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen"
            },
            {
              "schrift": "ouvrir",
              "lerntext": "ouvrir",
              "de": "öffnen"
            },
            {
              "schrift": "pour",
              "lerntext": "pour",
              "de": "für, um zu"
            },
            {
              "schrift": "cinq",
              "lerntext": "cinq",
              "de": "fünf"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "aller",
            "lerntext": "aller",
            "de": "gehen"
          },
          {
            "schrift": "venir",
            "lerntext": "venir",
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
              "de": "Straße, Weg"
            },
            {
              "schrift": "attendre",
              "lerntext": "attendre",
              "de": "warten"
            },
            {
              "schrift": "grand",
              "lerntext": "grand",
              "de": "groß"
            },
            {
              "schrift": "huit",
              "lerntext": "huit",
              "de": "acht"
            },
            {
              "schrift": "entendre",
              "lerntext": "entendre",
              "de": "hören"
            },
            {
              "schrift": "derrière",
              "lerntext": "derrière",
              "de": "hinter (räumlich)"
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
            "de": "ihr, Sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen, funktionieren"
            },
            {
              "schrift": "vie",
              "lerntext": "vie",
              "de": "Leben"
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen, legen, stellen"
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug"
            },
            {
              "schrift": "peu",
              "lerntext": "peu",
              "de": "wenig"
            },
            {
              "schrift": "commencer",
              "lerntext": "commencer",
              "de": "beginnen"
            },
            {
              "schrift": "court",
              "lerntext": "court",
              "de": "kurz"
            },
            {
              "schrift": "montrer",
              "lerntext": "montrer",
              "de": "zeigen"
            }
          ]
        ],
        "newCount": 3,
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
              "de": "dann, also"
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
              "schrift": "bientôt",
              "lerntext": "bientôt",
              "de": "bald"
            },
            {
              "schrift": "aussi",
              "lerntext": "aussi",
              "de": "auch"
            },
            {
              "schrift": "déjà",
              "lerntext": "déjà",
              "de": "schon"
            },
            {
              "schrift": "seulement",
              "lerntext": "seulement",
              "de": "nur"
            },
            {
              "schrift": "jamais",
              "lerntext": "jamais",
              "de": "nie"
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
              "de": "Stunde, Uhrzeit"
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub, Ferien"
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
              "schrift": "soir",
              "lerntext": "soir",
              "de": "Abend"
            },
            {
              "schrift": "souvent",
              "lerntext": "souvent",
              "de": "oft"
            },
            {
              "schrift": "aujourd'hui",
              "lerntext": "aujourd'hui",
              "de": "heute"
            }
          ]
        ],
        "newCount": 2,
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
              "de": "Zeit, Wetter"
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
              "schrift": "marcher",
              "lerntext": "marcher",
              "de": "laufen, funktionieren"
            },
            {
              "schrift": "ensemble",
              "lerntext": "ensemble",
              "de": "zusammen"
            },
            {
              "schrift": "vacances",
              "lerntext": "vacances",
              "de": "Urlaub, Ferien"
            },
            {
              "schrift": "alors",
              "lerntext": "alors",
              "de": "dann, also"
            },
            {
              "schrift": "heure",
              "lerntext": "heure",
              "de": "Stunde, Uhrzeit"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "aimer",
            "lerntext": "aimer",
            "de": "lieben, mögen"
          },
          {
            "schrift": "aimer",
            "lerntext": "aimer",
            "de": "lieben, mögen"
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
              "de": "Sonne"
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer"
            },
            {
              "schrift": "hier",
              "lerntext": "hier",
              "de": "gestern"
            },
            {
              "schrift": "nuit",
              "lerntext": "nuit",
              "de": "Nacht"
            },
            {
              "schrift": "arbre",
              "lerntext": "arbre",
              "de": "Baum"
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
            "de": "ihr, Sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mich, mir"
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "dich, dir"
            },
            {
              "schrift": "vous",
              "lerntext": "vous",
              "de": "ihr, Sie"
            },
            {
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden"
            },
            {
              "schrift": "toujours",
              "lerntext": "toujours",
              "de": "immer"
            },
            {
              "schrift": "animal",
              "lerntext": "animal",
              "de": "Tier"
            },
            {
              "schrift": "fleur",
              "lerntext": "fleur",
              "de": "Blume"
            },
            {
              "schrift": "mettre",
              "lerntext": "mettre",
              "de": "setzen, legen, stellen"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "trouver",
            "lerntext": "trouver",
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
              "schrift": "me",
              "lerntext": "me",
              "de": "mich, mir"
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "dich, dir"
            },
            {
              "schrift": "parfois",
              "lerntext": "parfois",
              "de": "manchmal"
            },
            {
              "schrift": "vie",
              "lerntext": "vie",
              "de": "Leben"
            },
            {
              "schrift": "bientôt",
              "lerntext": "bientôt",
              "de": "bald"
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
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün"
            },
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
              "schrift": "noir",
              "lerntext": "noir",
              "de": "schwarz"
            },
            {
              "schrift": "jaune",
              "lerntext": "jaune",
              "de": "gelb"
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
              "de": "weich, süß, sanft"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm, heiß"
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
              "de": "sauber, eigen"
            },
            {
              "schrift": "blanc",
              "lerntext": "blanc",
              "de": "weiß"
            },
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mich, mir"
            },
            {
              "schrift": "vert",
              "lerntext": "vert",
              "de": "grün"
            },
            {
              "schrift": "trouver",
              "lerntext": "trouver",
              "de": "finden"
            },
            {
              "schrift": "jour",
              "lerntext": "jour",
              "de": "Tag"
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
              "de": "weich, süß, sanft"
            },
            {
              "schrift": "propre",
              "lerntext": "propre",
              "de": "sauber, eigen"
            },
            {
              "schrift": "froid",
              "lerntext": "froid",
              "de": "kalt"
            },
            {
              "schrift": "chaud",
              "lerntext": "chaud",
              "de": "warm, heiß"
            },
            {
              "schrift": "sec",
              "lerntext": "sec",
              "de": "trocken"
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
              "de": "schmutzig"
            },
            {
              "schrift": "doux",
              "lerntext": "doux",
              "de": "weich, süß, sanft"
            },
            {
              "schrift": "dix",
              "lerntext": "dix",
              "de": "zehn"
            },
            {
              "schrift": "long",
              "lerntext": "long",
              "de": "lang"
            },
            {
              "schrift": "haut",
              "lerntext": "haut",
              "de": "hoch"
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
              "schrift": "devenir",
              "lerntext": "devenir",
              "de": "werden"
            },
            {
              "schrift": "écrire",
              "lerntext": "écrire",
              "de": "schreiben"
            },
            {
              "schrift": "mourir",
              "lerntext": "mourir",
              "de": "sterben"
            },
            {
              "schrift": "quatorze",
              "lerntext": "quatorze",
              "de": "vierzehn"
            },
            {
              "schrift": "aussi",
              "lerntext": "aussi",
              "de": "auch"
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
              "de": "fühlen, riechen"
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen"
            },
            {
              "schrift": "acheter",
              "lerntext": "acheter",
              "de": "kaufen"
            },
            {
              "schrift": "donner",
              "lerntext": "donner",
              "de": "geben"
            },
            {
              "schrift": "vendre",
              "lerntext": "vendre",
              "de": "verkaufen"
            },
            {
              "schrift": "soleil",
              "lerntext": "soleil",
              "de": "Sonne"
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
              "de": "gewiss, sicher"
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
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen, riechen"
            },
            {
              "schrift": "savoir",
              "lerntext": "savoir",
              "de": "wissen"
            },
            {
              "schrift": "chercher",
              "lerntext": "chercher",
              "de": "suchen"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "devenir",
            "lerntext": "devenir",
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
              "de": "auf, über"
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
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen"
            },
            {
              "schrift": "ouvert",
              "lerntext": "ouvert",
              "de": "offen"
            },
            {
              "schrift": "donc",
              "lerntext": "donc",
              "de": "also, folglich"
            },
            {
              "schrift": "que",
              "lerntext": "que",
              "de": "dass, was"
            },
            {
              "schrift": "penser",
              "lerntext": "penser",
              "de": "denken"
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
            "de": "also, folglich"
          },
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "dass, was"
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
              "de": "genug, ziemlich"
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit"
            },
            {
              "schrift": "bien que",
              "lerntext": "bien que",
              "de": "obwohl"
            },
            {
              "schrift": "parce que",
              "lerntext": "parce que",
              "de": "weil"
            },
            {
              "schrift": "pendant",
              "lerntext": "pendant",
              "de": "während"
            },
            {
              "schrift": "fermé",
              "lerntext": "fermé",
              "de": "geschlossen"
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
              "schrift": "peut-être",
              "lerntext": "peut-être",
              "de": "vielleicht"
            },
            {
              "schrift": "assez",
              "lerntext": "assez",
              "de": "genug, ziemlich"
            },
            {
              "schrift": "profond",
              "lerntext": "profond",
              "de": "tief"
            },
            {
              "schrift": "pour que",
              "lerntext": "pour que",
              "de": "damit"
            },
            {
              "schrift": "déjà",
              "lerntext": "déjà",
              "de": "schon"
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
              "de": "einfach, leicht"
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
              "schrift": "comprendre",
              "lerntext": "comprendre",
              "de": "verstehen"
            },
            {
              "schrift": "semaine",
              "lerntext": "semaine",
              "de": "Woche"
            },
            {
              "schrift": "mer",
              "lerntext": "mer",
              "de": "Meer"
            },
            {
              "schrift": "demander",
              "lerntext": "demander",
              "de": "fragen, bitten"
            },
            {
              "schrift": "bas",
              "lerntext": "bas",
              "de": "niedrig"
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
              "schrift": "difficile",
              "lerntext": "difficile",
              "de": "schwierig"
            },
            {
              "schrift": "beaucoup",
              "lerntext": "beaucoup",
              "de": "viel"
            }
          ]
        ],
        "newCount": 1,
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
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken"
            },
            {
              "schrift": "prendre",
              "lerntext": "prendre",
              "de": "nehmen"
            },
            {
              "schrift": "poisson",
              "lerntext": "poisson",
              "de": "Fisch"
            },
            {
              "schrift": "quinze",
              "lerntext": "quinze",
              "de": "fünfzehn"
            },
            {
              "schrift": "croire",
              "lerntext": "croire",
              "de": "glauben"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "fait",
            "lerntext": "fait",
            "de": "Tatsache, Fakt"
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
              "de": "Kopf"
            },
            {
              "schrift": "envoyer",
              "lerntext": "envoyer",
              "de": "schicken"
            },
            {
              "schrift": "treize",
              "lerntext": "treize",
              "de": "dreizehn"
            },
            {
              "schrift": "devoir",
              "lerntext": "devoir",
              "de": "müssen, sollen"
            },
            {
              "schrift": "train",
              "lerntext": "train",
              "de": "Zug"
            }
          ]
        ],
        "newCount": 2,
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
          "schrift": "j'ai un [Slot]",
          "lerntext": "j'ai un [Slot]"
        },
        "frameDe": "Ich habe ein [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund, Boden"
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge"
            },
            {
              "schrift": "cœur",
              "lerntext": "cœur",
              "de": "Herz"
            },
            {
              "schrift": "pomme",
              "lerntext": "pomme",
              "de": "Apfel"
            },
            {
              "schrift": "mille",
              "lerntext": "mille",
              "de": "tausend"
            },
            {
              "schrift": "ville",
              "lerntext": "ville",
              "de": "Stadt"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "dorthin, daran"
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
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel"
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel"
            },
            {
              "schrift": "fond",
              "lerntext": "fond",
              "de": "Grund, Boden"
            },
            {
              "schrift": "œil",
              "lerntext": "œil",
              "de": "Auge"
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen, riechen"
            },
            {
              "schrift": "nouveau",
              "lerntext": "nouveau",
              "de": "neu"
            },
            {
              "schrift": "répondre",
              "lerntext": "répondre",
              "de": "antworten"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "14.2"
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
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh"
            },
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
              "schrift": "fourchette",
              "lerntext": "fourchette",
              "de": "Gabel"
            },
            {
              "schrift": "aller",
              "lerntext": "aller",
              "de": "gehen"
            },
            {
              "schrift": "rouge",
              "lerntext": "rouge",
              "de": "rot"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "14.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "j'achète un [Slot]",
          "lerntext": "j'achète un [Slot]"
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer"
            },
            {
              "schrift": "chaussure",
              "lerntext": "chaussure",
              "de": "Schuh"
            },
            {
              "schrift": "robe",
              "lerntext": "robe",
              "de": "Kleid"
            },
            {
              "schrift": "chemise",
              "lerntext": "chemise",
              "de": "Hemd"
            },
            {
              "schrift": "assiette",
              "lerntext": "assiette",
              "de": "Teller"
            },
            {
              "schrift": "regarder",
              "lerntext": "regarder",
              "de": "schauen, betrachten"
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
              "schrift": "couteau",
              "lerntext": "couteau",
              "de": "Messer"
            },
            {
              "schrift": "banque",
              "lerntext": "banque",
              "de": "Bank"
            },
            {
              "schrift": "thé",
              "lerntext": "thé",
              "de": "Tee"
            },
            {
              "schrift": "seulement",
              "lerntext": "seulement",
              "de": "nur"
            },
            {
              "schrift": "écouter",
              "lerntext": "écouter",
              "de": "zuhören"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "14.5"
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
              "de": "Hose"
            },
            {
              "schrift": "nom",
              "lerntext": "nom",
              "de": "Name"
            },
            {
              "schrift": "chapeau",
              "lerntext": "chapeau",
              "de": "Hut"
            },
            {
              "schrift": "prêt",
              "lerntext": "prêt",
              "de": "bereit"
            },
            {
              "schrift": "vin",
              "lerntext": "vin",
              "de": "Wein"
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
              "de": "Arbeit"
            },
            {
              "schrift": "cuillère",
              "lerntext": "cuillère",
              "de": "Löffel"
            },
            {
              "schrift": "contre",
              "lerntext": "contre",
              "de": "gegen"
            },
            {
              "schrift": "pourquoi",
              "lerntext": "pourquoi",
              "de": "warum"
            },
            {
              "schrift": "cinquante",
              "lerntext": "cinquante",
              "de": "fünfzig"
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
    "lessons": [
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
              "de": "Mann, Mensch"
            },
            {
              "schrift": "chose",
              "lerntext": "chose",
              "de": "Ding, Sache"
            },
            {
              "schrift": "monsieur",
              "lerntext": "monsieur",
              "de": "Herr"
            },
            {
              "schrift": "raison",
              "lerntext": "raison",
              "de": "Vernunft, Grund"
            },
            {
              "schrift": "monde",
              "lerntext": "monde",
              "de": "Welt, Leute"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dieu",
              "lerntext": "dieu",
              "de": "Gott"
            },
            {
              "schrift": "personne",
              "lerntext": "personne",
              "de": "Person"
            },
            {
              "schrift": "accord",
              "lerntext": "accord",
              "de": "Vereinbarung, Abkommen"
            },
            {
              "schrift": "peur",
              "lerntext": "peur",
              "de": "Angst"
            },
            {
              "schrift": "problème",
              "lerntext": "problème",
              "de": "Problem"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "place",
              "lerntext": "place",
              "de": "Platz, Ort"
            },
            {
              "schrift": "mot",
              "lerntext": "mot",
              "de": "Wort"
            },
            {
              "schrift": "idée",
              "lerntext": "idée",
              "de": "Idee"
            },
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende"
            },
            {
              "schrift": "histoire",
              "lerntext": "histoire",
              "de": "Geschichte"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
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
              "schrift": "coup",
              "lerntext": "coup",
              "de": "Schlag, Hieb"
            },
            {
              "schrift": "question",
              "lerntext": "question",
              "de": "Frage"
            },
            {
              "schrift": "côté",
              "lerntext": "côté",
              "de": "Seite"
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
              "schrift": "rue",
              "lerntext": "rue",
              "de": "Straße"
            },
            {
              "schrift": "droit",
              "lerntext": "droit",
              "de": "Recht"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pays",
              "lerntext": "pays",
              "de": "Land"
            },
            {
              "schrift": "partie",
              "lerntext": "partie",
              "de": "Teil, Partie"
            },
            {
              "schrift": "garçon",
              "lerntext": "garçon",
              "de": "Junge, Kellner"
            },
            {
              "schrift": "endroit",
              "lerntext": "endroit",
              "de": "Ort, Stelle"
            },
            {
              "schrift": "chemin",
              "lerntext": "chemin",
              "de": "Weg"
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
          "schrift": "voici le [Slot]",
          "lerntext": "voici le [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lettre",
              "lerntext": "lettre",
              "de": "Brief, Buchstabe"
            },
            {
              "schrift": "bruit",
              "lerntext": "bruit",
              "de": "Lärm, Geräusch"
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
              "schrift": "ligne",
              "lerntext": "ligne",
              "de": "Linie"
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
              "schrift": "point",
              "lerntext": "point",
              "de": "Punkt"
            },
            {
              "schrift": "forme",
              "lerntext": "forme",
              "de": "Form"
            },
            {
              "schrift": "cas",
              "lerntext": "cas",
              "de": "Fall"
            },
            {
              "schrift": "sens",
              "lerntext": "sens",
              "de": "Sinn, Richtung"
            },
            {
              "schrift": "chien",
              "lerntext": "chien",
              "de": "Hund"
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
              "schrift": "chat",
              "lerntext": "chat",
              "de": "Katze"
            },
            {
              "schrift": "lieu",
              "lerntext": "lieu",
              "de": "Ort"
            },
            {
              "schrift": "voix",
              "lerntext": "voix",
              "de": "Stimme"
            },
            {
              "schrift": "air",
              "lerntext": "air",
              "de": "Luft, Aussehen"
            },
            {
              "schrift": "esprit",
              "lerntext": "esprit",
              "de": "Geist, Verstand"
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
              "schrift": "état",
              "lerntext": "état",
              "de": "Zustand, Staat"
            },
            {
              "schrift": "force",
              "lerntext": "force",
              "de": "Kraft"
            },
            {
              "schrift": "guerra",
              "lerntext": "guerra",
              "de": "Krieg"
            },
            {
              "schrift": "loi",
              "lerntext": "loi",
              "de": "Gesetz"
            },
            {
              "schrift": "lumière",
              "lerntext": "lumière",
              "de": "Licht"
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
              "schrift": "marche",
              "lerntext": "marche",
              "de": "Stufe, Gang"
            },
            {
              "schrift": "mort",
              "lerntext": "mort",
              "de": "Tod, Tote(r)"
            },
            {
              "schrift": "moyen",
              "lerntext": "moyen",
              "de": "Mittel"
            },
            {
              "schrift": "paix",
              "lerntext": "paix",
              "de": "Frieden"
            },
            {
              "schrift": "peuple",
              "lerntext": "peuple",
              "de": "Volk"
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
              "schrift": "plan",
              "lerntext": "plan",
              "de": "Plan"
            },
            {
              "schrift": "rapport",
              "lerntext": "rapport",
              "de": "Bericht, Beziehung"
            },
            {
              "schrift": "regard",
              "lerntext": "regard",
              "de": "Blick"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "service",
              "lerntext": "service",
              "de": "Dienst"
            },
            {
              "schrift": "sorte",
              "lerntext": "sorte",
              "de": "Art, Sorte"
            },
            {
              "schrift": "suite",
              "lerntext": "suite",
              "de": "Folge, Fortsetzung"
            },
            {
              "schrift": "terre",
              "lerntext": "terre",
              "de": "Erde, Boden"
            },
            {
              "schrift": "vue",
              "lerntext": "vue",
              "de": "Sicht, Aussicht"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "oiseau",
              "lerntext": "oiseau",
              "de": "Vogel"
            },
            {
              "schrift": "vêtement",
              "lerntext": "vêtement",
              "de": "Kleidungsstück"
            },
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "photo",
              "lerntext": "photo",
              "de": "Foto"
            },
            {
              "schrift": "film",
              "lerntext": "film",
              "de": "Film"
            },
            {
              "schrift": "jeu",
              "lerntext": "jeu",
              "de": "Spiel"
            },
            {
              "schrift": "sport",
              "lerntext": "sport",
              "de": "Sport"
            },
            {
              "schrift": "équipe",
              "lerntext": "équipe",
              "de": "Team, Mannschaft"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "médecin",
              "lerntext": "médecin",
              "de": "Arzt"
            },
            {
              "schrift": "entreprise",
              "lerntext": "entreprise",
              "de": "Unternehmen"
            },
            {
              "schrift": "réunion",
              "lerntext": "réunion",
              "de": "Besprechung"
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
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "15.16"
      },
      {
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
        "id": "15.17"
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
          "schrift": "je veux [Slot]",
          "lerntext": "je veux [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "falloir",
              "lerntext": "falloir",
              "de": "nötig sein, müssen"
            },
            {
              "schrift": "passer",
              "lerntext": "passer",
              "de": "verbringen, vergehen"
            },
            {
              "schrift": "arriver",
              "lerntext": "arriver",
              "de": "ankommen, passieren"
            },
            {
              "schrift": "sembler",
              "lerntext": "sembler",
              "de": "scheinen"
            },
            {
              "schrift": "rendre",
              "lerntext": "rendre",
              "de": "zurückgeben, machen zu"
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
              "schrift": "sortir",
              "lerntext": "sortir",
              "de": "hinausgehen"
            },
            {
              "schrift": "vivre",
              "lerntext": "vivre",
              "de": "leben"
            },
            {
              "schrift": "entrer",
              "lerntext": "entrer",
              "de": "eintreten"
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
              "schrift": "partir",
              "lerntext": "partir",
              "de": "weggehen, abfahren"
            },
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
              "schrift": "monter",
              "lerntext": "monter",
              "de": "hinaufsteigen"
            },
            {
              "schrift": "apercevoir",
              "lerntext": "apercevoir",
              "de": "bemerken"
            },
            {
              "schrift": "recevoir",
              "lerntext": "recevoir",
              "de": "erhalten, empfangen"
            },
            {
              "schrift": "finir",
              "lerntext": "finir",
              "de": "beenden"
            },
            {
              "schrift": "tourner",
              "lerntext": "tourner",
              "de": "drehen, abbiegen"
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
              "schrift": "garder",
              "lerntext": "garder",
              "de": "behalten, hüten"
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
              "schrift": "essayer",
              "lerntext": "essayer",
              "de": "versuchen"
            },
            {
              "schrift": "ajouter",
              "lerntext": "ajouter",
              "de": "hinzufügen"
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
              "schrift": "porter",
              "lerntext": "porter",
              "de": "tragen"
            },
            {
              "schrift": "appeler",
              "lerntext": "appeler",
              "de": "rufen, nennen"
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
              "de": "heben, aufstehen"
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen, bedienen"
            },
            {
              "schrift": "crier",
              "lerntext": "crier",
              "de": "schreien"
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
              "de": "anbieten, schenken"
            },
            {
              "schrift": "apprendre",
              "lerntext": "apprendre",
              "de": "lernen, erfahren"
            }
          ]
        ],
        "newCount": 2,
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
              "de": "hell, klar"
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
              "de": "gleich, selbe"
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
              "de": "allein, einzig"
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
              "de": "wahr, echt"
            },
            {
              "schrift": "riche",
              "lerntext": "riche",
              "de": "reich"
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
              "de": "gleich, ähnlich"
            },
            {
              "schrift": "grave",
              "lerntext": "grave",
              "de": "ernst, schlimm"
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
            }
          ]
        ],
        "newCount": 2,
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
              "de": "endlich, schließlich"
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
              "schrift": "plus",
              "lerntext": "plus",
              "de": "mehr"
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
              "schrift": "moins",
              "lerntext": "moins",
              "de": "weniger"
            },
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
              "schrift": "plutôt",
              "lerntext": "plutôt",
              "de": "eher, lieber"
            },
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
              "schrift": "dedans",
              "lerntext": "dedans",
              "de": "drinnen"
            },
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
              "schrift": "mieux",
              "lerntext": "mieux",
              "de": "besser"
            }
          ]
        ],
        "newCount": 1,
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
    "title": "Zahlen und Zeit",
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
            }
          ]
        ],
        "newCount": 3,
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
    "title": "Weitere Pronomen",
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
              "de": "ihm, ihr"
            },
            {
              "schrift": "dont",
              "lerntext": "dont",
              "de": "dessen, deren"
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
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "20.3"
      },
      {
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
        "id": "20.4"
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
              "de": "in Richtung, gegen"
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
              "schrift": "depuis",
              "lerntext": "depuis",
              "de": "seit"
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
              "de": "laut, gemäß"
            }
          ]
        ],
        "newCount": 5,
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
          "schrift": "je viens [Slot] je peux",
          "lerntext": "je viens [Slot] je peux"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "wenn, falls, ob"
            },
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
              "de": "weder, noch"
            },
            {
              "schrift": "lorsque",
              "lerntext": "lorsque",
              "de": "als, wenn"
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
          "schrift": "je viens [Slot] je peux",
          "lerntext": "je viens [Slot] je peux"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "quoique",
              "lerntext": "quoique",
              "de": "obwohl"
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
    "title": "Artikel",
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
              "schrift": "une",
              "lerntext": "une",
              "de": "eine"
            },
            {
              "schrift": "des",
              "lerntext": "des",
              "de": "einige"
            }
          ]
        ],
        "newCount": 3,
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
  }
];
