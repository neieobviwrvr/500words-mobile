// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_es.py
// Neu bauen: python bauplan.py es --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 38 Module, 285 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const SPANISH_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo estoy [Slot]",
          "lerntext": "yo estoy [Slot]",
          "wortarten": {
            "yo": "p",
            "estoy": "v"
          }
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "c": "a"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "soy",
            "lerntext": "soy",
            "de": "sein (dauerhaft)",
            "c": "v"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nosotros / nosotras somos [Slot]",
          "lerntext": "nosotros / nosotras somos [Slot]",
          "wortarten": {
            "nosotros": "p",
            "nosotras": "p",
            "somos": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "c": "n"
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
              "c": "n"
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
              "c": "n"
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
          "schrift": "él es muy [Slot]",
          "lerntext": "él es muy [Slot]",
          "wortarten": {
            "él": "p",
            "es": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "c": "a"
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "c": "a"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a"
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "c": "a"
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "c": "a"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "muy",
            "lerntext": "muy",
            "de": "sehr"
          }
        ],
        "id": "1.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "él es muy [Slot]",
          "lerntext": "él es muy [Slot]",
          "wortarten": {
            "él": "p",
            "es": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "c": "a"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "1.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "él es muy [Slot]",
          "lerntext": "él es muy [Slot]",
          "wortarten": {
            "él": "p",
            "es": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
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
          "schrift": "nosotros / nosotras somos [Slot]",
          "lerntext": "nosotros / nosotras somos [Slot]",
          "wortarten": {
            "nosotros": "p",
            "nosotras": "p",
            "somos": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
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
          "schrift": "él es muy [Slot]",
          "lerntext": "él es muy [Slot]",
          "wortarten": {
            "él": "p",
            "es": "v"
          }
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
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
          "schrift": "nosotros / nosotras somos [Slot]",
          "lerntext": "nosotros / nosotras somos [Slot]",
          "wortarten": {
            "nosotros": "p",
            "nosotras": "p",
            "somos": "v"
          }
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
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
          "schrift": "esto es una [Slot]",
          "lerntext": "esto es una [Slot]",
          "wortarten": {
            "esto": "p",
            "es": "v"
          }
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "puerta",
              "lerntext": "puerta",
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
              "schrift": "mujer",
              "lerntext": "mujer",
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
            "schrift": "esto",
            "lerntext": "esto",
            "de": "dies (neutral)",
            "c": "p"
          }
        ],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "esto es una [Slot]",
          "lerntext": "esto es una [Slot]",
          "wortarten": {
            "esto": "p",
            "es": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "c": "n"
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
          "schrift": "esto es una [Slot]",
          "lerntext": "esto es una [Slot]",
          "wortarten": {
            "esto": "p",
            "es": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "c": "n"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
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
          "schrift": "esto es un [Slot]",
          "lerntext": "esto es un [Slot]",
          "wortarten": {
            "esto": "p",
            "es": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
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
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
          "schrift": "esto es un [Slot]",
          "lerntext": "esto es un [Slot]",
          "wortarten": {
            "esto": "p",
            "es": "v"
          }
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
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
              "schrift": "teléfono",
              "lerntext": "teléfono",
              "de": "Telefon",
              "c": "n"
            },
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
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
          "schrift": "aquí hay una [Slot]",
          "lerntext": "aquí hay una [Slot]"
        },
        "frameDe": "Hier ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "c": "n"
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
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
              "schrift": "mujer",
              "lerntext": "mujer",
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
            "schrift": "aquí",
            "lerntext": "aquí",
            "de": "hier"
          }
        ],
        "id": "2.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "aquí hay una [Slot]",
          "lerntext": "aquí hay una [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
          "schrift": "aquí hay una [Slot]",
          "lerntext": "aquí hay una [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
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
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "c": "n"
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "c": "n"
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "aquí hay un [Slot]",
          "lerntext": "aquí hay un [Slot]"
        },
        "frameDe": "Hier ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "c": "n"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
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
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
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
          "schrift": "yo tengo una [Slot]",
          "lerntext": "yo tengo una [Slot]",
          "wortarten": {
            "yo": "p",
            "tengo": "v"
          }
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "c": "n"
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "c": "n"
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
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
              "schrift": "mujer",
              "lerntext": "mujer",
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
            "schrift": "tengo",
            "lerntext": "tengo",
            "de": "haben",
            "c": "v"
          }
        ],
        "id": "2.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo tengo una [Slot]",
          "lerntext": "yo tengo una [Slot]",
          "wortarten": {
            "yo": "p",
            "tengo": "v"
          }
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "c": "n"
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
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
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
          "schrift": "yo tengo un [Slot]",
          "lerntext": "yo tengo un [Slot]",
          "wortarten": {
            "yo": "p",
            "tengo": "v"
          }
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "c": "n"
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "c": "n"
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "c": "n"
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "c": "n"
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
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
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.12"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo tengo un [Slot]",
          "lerntext": "yo tengo un [Slot]",
          "wortarten": {
            "yo": "p",
            "tengo": "v"
          }
        },
        "frameDe": "ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
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
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
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
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.13"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "esta es mi [Slot]",
          "lerntext": "esta es mi [Slot]",
          "wortarten": {
            "esta": "p",
            "es": "v",
            "mi": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
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
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "c": "n"
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
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
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
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
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
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
          "schrift": "esta es [Slot] casa",
          "lerntext": "esta es [Slot] casa",
          "wortarten": {
            "esta": "p",
            "es": "v",
            "casa": "n"
          }
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "c": "v"
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "c": "v",
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
          "schrift": "estos son [Slot] libros",
          "lerntext": "estos son [Slot] libros",
          "wortarten": {
            "son": "v"
          }
        },
        "frameDe": "Das sind [Slot] Bücher.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "este / esta",
              "lerntext": "este / esta",
              "de": "dieser",
              "c": "p"
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "yo",
              "lerntext": "yo",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tú",
              "lerntext": "tú",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nosotros / nosotras",
              "lerntext": "nosotros / nosotras",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ella",
              "lerntext": "ella",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "esto",
              "lerntext": "esto",
              "de": "dies (neutral)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "él",
              "lerntext": "él",
              "de": "er",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.16"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] está aquí",
          "lerntext": "[Slot] está aquí",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "ninguno / ninguna",
            "lerntext": "ninguno / ninguna",
            "de": "keiner",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "este / esta",
              "lerntext": "este / esta",
              "de": "dieser",
              "c": "p"
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch",
              "c": "p"
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "yo",
              "lerntext": "yo",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tú",
              "lerntext": "tú",
              "de": "du",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nosotros / nosotras",
              "lerntext": "nosotros / nosotras",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nuestro / nuestra",
              "lerntext": "nuestro / nuestra",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mi / mis",
              "lerntext": "mi / mis",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tu / tus",
              "lerntext": "tu / tus",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ella",
              "lerntext": "ella",
              "de": "sie",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "esto",
              "lerntext": "esto",
              "de": "dies (neutral)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "él",
              "lerntext": "él",
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
            "schrift": "aquí",
            "lerntext": "aquí",
            "de": "hier"
          }
        ],
        "id": "2.17"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "esta es mi [Slot]",
          "lerntext": "esta es mi [Slot]",
          "wortarten": {
            "esta": "p",
            "es": "v",
            "mi": "p"
          }
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein",
            "c": "p"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein",
            "c": "p"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
            "de": "unser",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
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
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "c": "n",
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
          "schrift": "yo quiero [Slot]",
          "lerntext": "yo quiero [Slot]",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "c": "v"
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
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
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
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
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "quiero",
            "lerntext": "quiero",
            "de": "wollen",
            "c": "v"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo necesito [Slot]",
          "lerntext": "yo necesito [Slot]",
          "wortarten": {
            "yo": "p",
            "necesito": "v"
          }
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "necesito",
            "lerntext": "necesito",
            "de": "brauchen",
            "c": "v"
          }
        ],
        "id": "3.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo necesito [Slot]",
          "lerntext": "yo necesito [Slot]",
          "wortarten": {
            "yo": "p",
            "necesito": "v"
          }
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "3.3"
      },
      {
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
        "id": "3.4"
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
          "schrift": "yo no estoy [Slot]",
          "lerntext": "yo no estoy [Slot]",
          "wortarten": {
            "yo": "p",
            "estoy": "v"
          }
        },
        "frameDe": "ich bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
              "c": "a"
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher",
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
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "no",
            "lerntext": "no",
            "de": "nein"
          },
          {
            "schrift": "sí",
            "lerntext": "sí",
            "de": "ja"
          },
          {
            "schrift": "no",
            "lerntext": "no",
            "de": "nein"
          }
        ],
        "id": "4.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "¿eres tú [Slot]?",
          "lerntext": "¿eres tú [Slot]?",
          "wortarten": {
            "¿eres": "v",
            "tú": "p"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut"
            },
            {
              "schrift": "mal",
              "lerntext": "mal",
              "de": "schlecht"
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "c": "a"
            },
            {
              "schrift": "sí",
              "lerntext": "sí",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
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
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "muy",
              "lerntext": "muy",
              "de": "sehr",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
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
          "schrift": "¿[Slot] es esto?",
          "lerntext": "¿[Slot] es esto?",
          "wortarten": {
            "es": "v",
            "esto?": "p"
          }
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "qué",
            "lerntext": "qué",
            "de": "was"
          },
          {
            "schrift": "quien",
            "lerntext": "quien",
            "de": "wer (Relativpronomen)",
            "c": "p"
          },
          {
            "schrift": "cómo",
            "lerntext": "cómo",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas",
              "c": "p"
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
              "de": "alles",
              "c": "p"
            },
            {
              "schrift": "ninguno / ninguna",
              "lerntext": "ninguno / ninguna",
              "de": "keiner",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nuestro / nuestra",
              "lerntext": "nuestro / nuestra",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mi / mis",
              "lerntext": "mi / mis",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tu / tus",
              "lerntext": "tu / tus",
              "de": "dein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "este / esta",
              "lerntext": "este / esta",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nosotros / nosotras",
              "lerntext": "nosotros / nosotras",
              "de": "wir",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "yo",
              "lerntext": "yo",
              "de": "ich",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ella",
              "lerntext": "ella",
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
            "schrift": "qué",
            "lerntext": "qué",
            "de": "was"
          },
          {
            "schrift": "quien",
            "lerntext": "quien",
            "de": "wer (Relativpronomen)",
            "c": "p"
          },
          {
            "schrift": "cómo",
            "lerntext": "cómo",
            "de": "wie"
          },
          {
            "schrift": "por qué",
            "lerntext": "por qué",
            "de": "warum"
          }
        ],
        "id": "4.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "¿eres tú [Slot]?",
          "lerntext": "¿eres tú [Slot]?",
          "wortarten": {
            "¿eres": "v",
            "tú": "p"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "mal",
              "lerntext": "mal",
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
              "schrift": "sí",
              "lerntext": "sí",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
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
        "kind": "frame",
        "frame": {
          "schrift": "¿[Slot] es esto?",
          "lerntext": "¿[Slot] es esto?",
          "wortarten": {
            "es": "v",
            "esto?": "p"
          }
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "qué",
            "lerntext": "qué",
            "de": "was"
          },
          {
            "schrift": "quien",
            "lerntext": "quien",
            "de": "wer (Relativpronomen)",
            "c": "p"
          },
          {
            "schrift": "cómo",
            "lerntext": "cómo",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ninguno / ninguna",
              "lerntext": "ninguno / ninguna",
              "de": "keiner",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
              "de": "alles",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch",
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
          "schrift": "¿eres tú [Slot]?",
          "lerntext": "¿eres tú [Slot]?",
          "wortarten": {
            "¿eres": "v",
            "tú": "p"
          }
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "mal",
              "lerntext": "mal",
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
              "schrift": "sí",
              "lerntext": "sí",
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
          "schrift": "¿[Slot] es esto?",
          "lerntext": "¿[Slot] es esto?",
          "wortarten": {
            "es": "v",
            "esto?": "p"
          }
        },
        "frameDe": "[Slot] ist das?",
        "pronouns": [
          {
            "schrift": "qué",
            "lerntext": "qué",
            "de": "was"
          },
          {
            "schrift": "quien",
            "lerntext": "quien",
            "de": "wer (Relativpronomen)",
            "c": "p"
          },
          {
            "schrift": "cómo",
            "lerntext": "cómo",
            "de": "wie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ninguno / ninguna",
              "lerntext": "ninguno / ninguna",
              "de": "keiner",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
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
          "schrift": "¿dónde hay una [Slot]?",
          "lerntext": "¿dónde hay una [Slot]?"
        },
        "frameDe": "Wo gibt es eine [Slot]?",
        "pronouns": [
          {
            "schrift": "dónde",
            "lerntext": "dónde",
            "de": "wo"
          },
          {
            "schrift": "adónde",
            "lerntext": "adónde",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "c": "n"
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "c": "n"
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
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
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
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
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "dónde",
            "lerntext": "dónde",
            "de": "wo"
          }
        ],
        "id": "5.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "¿dónde hay una [Slot]?",
          "lerntext": "¿dónde hay una [Slot]?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "dónde",
            "lerntext": "dónde",
            "de": "wo"
          },
          {
            "schrift": "adónde",
            "lerntext": "adónde",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
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
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
          "schrift": "¿dónde hay una [Slot]?",
          "lerntext": "¿dónde hay una [Slot]?"
        },
        "frameDe": "Wo gibt es ein [Slot]?",
        "pronouns": [
          {
            "schrift": "dónde",
            "lerntext": "dónde",
            "de": "wo"
          },
          {
            "schrift": "adónde",
            "lerntext": "adónde",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tienda",
              "lerntext": "tienda",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
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
          "schrift": "¿dónde hay un [Slot]?",
          "lerntext": "¿dónde hay un [Slot]?"
        },
        "frameDe": "Wo gibt es einen [Slot]?",
        "pronouns": [
          {
            "schrift": "dónde",
            "lerntext": "dónde",
            "de": "wo"
          },
          {
            "schrift": "adónde",
            "lerntext": "adónde",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
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
          "schrift": "¿dónde hay un [Slot]?",
          "lerntext": "¿dónde hay un [Slot]?"
        },
        "frameDe": "Wo gibt es ein [Slot]?",
        "pronouns": [
          {
            "schrift": "dónde",
            "lerntext": "dónde",
            "de": "wo"
          },
          {
            "schrift": "adónde",
            "lerntext": "adónde",
            "de": "wohin"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "c": "n"
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "c": "n"
            },
            {
              "schrift": "tienda",
              "lerntext": "tienda",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "¿hay una [Slot] cerca?",
          "lerntext": "¿hay una [Slot] cerca?"
        },
        "frameDe": "Gibt es hier eine [Slot]?",
        "pronouns": [
          {
            "schrift": "dónde",
            "lerntext": "dónde",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
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
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
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
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
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
          "schrift": "¿hay un [Slot] cerca?",
          "lerntext": "¿hay un [Slot] cerca?"
        },
        "frameDe": "Gibt es hier ein [Slot]?",
        "pronouns": [
          {
            "schrift": "dónde",
            "lerntext": "dónde",
            "de": "wo"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "c": "n"
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tienda",
              "lerntext": "tienda",
              "de": "Geschäft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
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
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] está aquí",
          "lerntext": "[Slot] está aquí",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "aquí",
            "lerntext": "aquí",
            "de": "hier"
          },
          {
            "schrift": "allí",
            "lerntext": "allí",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "c": "n"
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "c": "n"
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "allí",
            "lerntext": "allí",
            "de": "dort"
          }
        ],
        "id": "5.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "está [Slot] la casa",
          "lerntext": "está [Slot] la casa",
          "wortarten": {
            "está": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "en",
            "lerntext": "en",
            "de": "in"
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
              "schrift": "bajo",
              "lerntext": "bajo",
              "de": "unter"
            },
            {
              "schrift": "entre",
              "lerntext": "entre",
              "de": "zwischen"
            },
            {
              "schrift": "tras",
              "lerntext": "tras",
              "de": "nach"
            },
            {
              "schrift": "ante",
              "lerntext": "ante",
              "de": "vor"
            },
            {
              "schrift": "por",
              "lerntext": "por",
              "de": "durch"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "en",
            "lerntext": "en",
            "de": "in"
          },
          {
            "schrift": "en",
            "lerntext": "en",
            "de": "in"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "von"
          },
          {
            "schrift": "con",
            "lerntext": "con",
            "de": "mit"
          },
          {
            "schrift": "sobre",
            "lerntext": "sobre",
            "de": "über"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "von"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu"
          }
        ],
        "id": "5.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "está [Slot] la casa",
          "lerntext": "está [Slot] la casa",
          "wortarten": {
            "está": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "en",
            "lerntext": "en",
            "de": "in"
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
              "schrift": "hacia",
              "lerntext": "hacia",
              "de": "in Richtung"
            },
            {
              "schrift": "bajo",
              "lerntext": "bajo",
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
              "schrift": "tras",
              "lerntext": "tras",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "ante",
              "lerntext": "ante",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "por",
              "lerntext": "por",
              "de": "durch",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "5.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] está aquí",
          "lerntext": "[Slot] está aquí",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "aquí",
            "lerntext": "aquí",
            "de": "hier"
          },
          {
            "schrift": "allí",
            "lerntext": "allí",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
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
        "kind": "frame",
        "frame": {
          "schrift": "está [Slot] la casa",
          "lerntext": "está [Slot] la casa",
          "wortarten": {
            "está": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es liegt [Slot] dem Haus.",
        "pronouns": [
          {
            "schrift": "en",
            "lerntext": "en",
            "de": "in"
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
              "schrift": "hacia",
              "lerntext": "hacia",
              "de": "in Richtung",
              "wieder": true
            },
            {
              "schrift": "bajo",
              "lerntext": "bajo",
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
              "schrift": "tras",
              "lerntext": "tras",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "ante",
              "lerntext": "ante",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "por",
              "lerntext": "por",
              "de": "durch",
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
        "kind": "frame",
        "frame": {
          "schrift": "[Slot] está aquí",
          "lerntext": "[Slot] está aquí",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "aquí",
            "lerntext": "aquí",
            "de": "hier"
          },
          {
            "schrift": "allí",
            "lerntext": "allí",
            "de": "dort"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "5.13"
      },
      {
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
        "id": "5.14"
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
              "schrift": "uno",
              "lerntext": "uno",
              "de": "eins"
            },
            {
              "schrift": "dos",
              "lerntext": "dos",
              "de": "zwei"
            },
            {
              "schrift": "tres",
              "lerntext": "tres",
              "de": "drei"
            },
            {
              "schrift": "cuatro",
              "lerntext": "cuatro",
              "de": "vier"
            },
            {
              "schrift": "cinco",
              "lerntext": "cinco",
              "de": "fünf"
            },
            {
              "schrift": "seis",
              "lerntext": "seis",
              "de": "sechs"
            },
            {
              "schrift": "siete",
              "lerntext": "siete",
              "de": "sieben"
            },
            {
              "schrift": "ocho",
              "lerntext": "ocho",
              "de": "acht"
            },
            {
              "schrift": "nueve",
              "lerntext": "nueve",
              "de": "neun"
            },
            {
              "schrift": "diez",
              "lerntext": "diez",
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
              "schrift": "once",
              "lerntext": "once",
              "de": "elf"
            },
            {
              "schrift": "doce",
              "lerntext": "doce",
              "de": "zwölf"
            },
            {
              "schrift": "trece",
              "lerntext": "trece",
              "de": "dreizehn"
            },
            {
              "schrift": "catorce",
              "lerntext": "catorce",
              "de": "vierzehn"
            },
            {
              "schrift": "quince",
              "lerntext": "quince",
              "de": "fünfzehn"
            },
            {
              "schrift": "dieciséis",
              "lerntext": "dieciséis",
              "de": "sechzehn"
            },
            {
              "schrift": "diecisiete",
              "lerntext": "diecisiete",
              "de": "siebzehn"
            },
            {
              "schrift": "dieciocho",
              "lerntext": "dieciocho",
              "de": "achtzehn"
            },
            {
              "schrift": "diecinueve",
              "lerntext": "diecinueve",
              "de": "neunzehn"
            },
            {
              "schrift": "veinte",
              "lerntext": "veinte",
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
              "schrift": "treinta",
              "lerntext": "treinta",
              "de": "dreißig"
            },
            {
              "schrift": "cuarenta",
              "lerntext": "cuarenta",
              "de": "vierzig"
            },
            {
              "schrift": "cincuenta",
              "lerntext": "cincuenta",
              "de": "fünfzig"
            },
            {
              "schrift": "sesenta",
              "lerntext": "sesenta",
              "de": "sechzig"
            },
            {
              "schrift": "setenta",
              "lerntext": "setenta",
              "de": "siebzig"
            },
            {
              "schrift": "ochenta",
              "lerntext": "ochenta",
              "de": "achtzig"
            },
            {
              "schrift": "noventa",
              "lerntext": "noventa",
              "de": "neunzig"
            },
            {
              "schrift": "cien",
              "lerntext": "cien",
              "de": "hundert"
            },
            {
              "schrift": "mil",
              "lerntext": "mil",
              "de": "tausend"
            }
          ]
        ],
        "newCount": 9,
        "task": null,
        "newFrameWords": [],
        "id": "6.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es la [Slot] vez",
          "lerntext": "es la [Slot] vez",
          "wortarten": {
            "es": "v",
            "vez": "n"
          }
        },
        "frameDe": "Das ist das [Slot] Mal.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "primero / primera",
              "lerntext": "primero / primera",
              "de": "erster"
            },
            {
              "schrift": "segundo / segunda",
              "lerntext": "segundo / segunda",
              "de": "zweiter"
            },
            {
              "schrift": "cinco",
              "lerntext": "cinco",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "tres",
              "lerntext": "tres",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "nueve",
              "lerntext": "nueve",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "uno",
              "lerntext": "uno",
              "de": "eins",
              "wieder": true
            },
            {
              "schrift": "mil",
              "lerntext": "mil",
              "de": "tausend",
              "wieder": true
            },
            {
              "schrift": "seis",
              "lerntext": "seis",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "trece",
              "lerntext": "trece",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "cincuenta",
              "lerntext": "cincuenta",
              "de": "fünfzig",
              "wieder": true
            },
            {
              "schrift": "quince",
              "lerntext": "quince",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "diecisiete",
              "lerntext": "diecisiete",
              "de": "siebzehn",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "vez",
            "lerntext": "vez",
            "de": "Mal (z.B. 'eine Mal')",
            "c": "n"
          }
        ],
        "id": "6.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es demasiado [Slot]",
          "lerntext": "es demasiado [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "c": "a"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
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
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
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
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "por",
            "lerntext": "por",
            "de": "durch"
          },
          {
            "schrift": "sin",
            "lerntext": "sin",
            "de": "ohne"
          },
          {
            "schrift": "demasiado",
            "lerntext": "demasiado",
            "de": "zu viel"
          }
        ],
        "id": "6.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es demasiado [Slot]",
          "lerntext": "es demasiado [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "c": "a"
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "c": "a"
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "c": "a"
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "c": "a"
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
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
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
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
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
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
        "newFrameWords": [],
        "id": "6.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es demasiado [Slot]",
          "lerntext": "es demasiado [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "c": "a"
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
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
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
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
              "schrift": "dos",
              "lerntext": "dos",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "cuatro",
              "lerntext": "cuatro",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "siete",
              "lerntext": "siete",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "ocho",
              "lerntext": "ocho",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "diez",
              "lerntext": "diez",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "once",
              "lerntext": "once",
              "de": "elf",
              "wieder": true
            },
            {
              "schrift": "doce",
              "lerntext": "doce",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "catorce",
              "lerntext": "catorce",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "dieciséis",
              "lerntext": "dieciséis",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "dieciocho",
              "lerntext": "dieciocho",
              "de": "achtzehn",
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
              "schrift": "diecinueve",
              "lerntext": "diecinueve",
              "de": "neunzehn",
              "wieder": true
            },
            {
              "schrift": "veinte",
              "lerntext": "veinte",
              "de": "zwanzig",
              "wieder": true
            },
            {
              "schrift": "treinta",
              "lerntext": "treinta",
              "de": "dreißig",
              "wieder": true
            },
            {
              "schrift": "cuarenta",
              "lerntext": "cuarenta",
              "de": "vierzig",
              "wieder": true
            },
            {
              "schrift": "sesenta",
              "lerntext": "sesenta",
              "de": "sechzig",
              "wieder": true
            },
            {
              "schrift": "setenta",
              "lerntext": "setenta",
              "de": "siebzig",
              "wieder": true
            },
            {
              "schrift": "ochenta",
              "lerntext": "ochenta",
              "de": "achtzig",
              "wieder": true
            },
            {
              "schrift": "noventa",
              "lerntext": "noventa",
              "de": "neunzig",
              "wieder": true
            },
            {
              "schrift": "cien",
              "lerntext": "cien",
              "de": "hundert",
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
              "schrift": "dos",
              "lerntext": "dos",
              "de": "zwei",
              "wieder": true
            },
            {
              "schrift": "tres",
              "lerntext": "tres",
              "de": "drei",
              "wieder": true
            },
            {
              "schrift": "cuatro",
              "lerntext": "cuatro",
              "de": "vier",
              "wieder": true
            },
            {
              "schrift": "cinco",
              "lerntext": "cinco",
              "de": "fünf",
              "wieder": true
            },
            {
              "schrift": "seis",
              "lerntext": "seis",
              "de": "sechs",
              "wieder": true
            },
            {
              "schrift": "siete",
              "lerntext": "siete",
              "de": "sieben",
              "wieder": true
            },
            {
              "schrift": "ocho",
              "lerntext": "ocho",
              "de": "acht",
              "wieder": true
            },
            {
              "schrift": "nueve",
              "lerntext": "nueve",
              "de": "neun",
              "wieder": true
            },
            {
              "schrift": "diez",
              "lerntext": "diez",
              "de": "zehn",
              "wieder": true
            },
            {
              "schrift": "once",
              "lerntext": "once",
              "de": "elf",
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
              "schrift": "doce",
              "lerntext": "doce",
              "de": "zwölf",
              "wieder": true
            },
            {
              "schrift": "trece",
              "lerntext": "trece",
              "de": "dreizehn",
              "wieder": true
            },
            {
              "schrift": "catorce",
              "lerntext": "catorce",
              "de": "vierzehn",
              "wieder": true
            },
            {
              "schrift": "quince",
              "lerntext": "quince",
              "de": "fünfzehn",
              "wieder": true
            },
            {
              "schrift": "dieciséis",
              "lerntext": "dieciséis",
              "de": "sechzehn",
              "wieder": true
            },
            {
              "schrift": "diecisiete",
              "lerntext": "diecisiete",
              "de": "siebzehn",
              "wieder": true
            },
            {
              "schrift": "dieciocho",
              "lerntext": "dieciocho",
              "de": "achtzehn",
              "wieder": true
            },
            {
              "schrift": "diecinueve",
              "lerntext": "diecinueve",
              "de": "neunzehn",
              "wieder": true
            },
            {
              "schrift": "veinte",
              "lerntext": "veinte",
              "de": "zwanzig",
              "wieder": true
            },
            {
              "schrift": "treinta",
              "lerntext": "treinta",
              "de": "dreißig",
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
          "schrift": "yo puedo [Slot]",
          "lerntext": "yo puedo [Slot]",
          "wortarten": {
            "yo": "p",
            "puedo": "v"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "c": "v"
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "querer",
              "lerntext": "querer",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "puedo",
            "lerntext": "puedo",
            "de": "können",
            "c": "v"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo puedo [Slot]",
          "lerntext": "yo puedo [Slot]",
          "wortarten": {
            "yo": "p",
            "puedo": "v"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "c": "v"
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "c": "v"
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "querer",
              "lerntext": "querer",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
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
          "schrift": "yo puedo [Slot]",
          "lerntext": "yo puedo [Slot]",
          "wortarten": {
            "yo": "p",
            "puedo": "v"
          }
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "c": "v"
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "7.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo tengo que [Slot]",
          "lerntext": "yo tengo que [Slot]",
          "wortarten": {
            "yo": "p",
            "tengo": "v"
          }
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
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
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "c": "v"
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "querer",
              "lerntext": "querer",
              "de": "wollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "deber",
            "lerntext": "deber",
            "de": "sollen",
            "c": "v"
          },
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "der",
            "c": "p"
          }
        ],
        "id": "7.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo tengo que [Slot]",
          "lerntext": "yo tengo que [Slot]",
          "wortarten": {
            "yo": "p",
            "tengo": "v"
          }
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "c": "v"
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "c": "v"
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
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
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "c": "v",
              "wieder": true
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
          "schrift": "yo quiero [Slot]",
          "lerntext": "yo quiero [Slot]",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "c": "v"
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "c": "v"
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
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
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "7.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo quiero [Slot]",
          "lerntext": "yo quiero [Slot]",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "7.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo no puedo [Slot]",
          "lerntext": "yo no puedo [Slot]",
          "wortarten": {
            "yo": "p",
            "puedo": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
              "c": "v"
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "consigo",
            "lerntext": "consigo",
            "de": "erreichen",
            "c": "v"
          }
        ],
        "id": "7.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo no puedo [Slot]",
          "lerntext": "yo no puedo [Slot]",
          "wortarten": {
            "yo": "p",
            "puedo": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "c": "v"
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "7.9"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo no puedo [Slot]",
          "lerntext": "yo no puedo [Slot]",
          "wortarten": {
            "yo": "p",
            "puedo": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
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
        "kind": "frame",
        "frame": {
          "schrift": "yo no puedo [Slot]",
          "lerntext": "yo no puedo [Slot]",
          "wortarten": {
            "yo": "p",
            "puedo": "v"
          }
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "7.11"
      },
      {
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
        "id": "7.12"
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
          "schrift": "yo voy a una [Slot]",
          "lerntext": "yo voy a una [Slot]",
          "wortarten": {
            "yo": "p",
            "voy": "v"
          }
        },
        "frameDe": "ich gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tienda",
              "lerntext": "tienda",
              "de": "Geschäft",
              "c": "n"
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "camino",
            "lerntext": "camino",
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
          "schrift": "yo viajo en [Slot]",
          "lerntext": "yo viajo en [Slot]",
          "wortarten": {
            "yo": "p",
            "viajo": "v"
          }
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "c": "n"
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "c": "n"
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "c": "n"
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "c": "n"
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "viajo",
            "lerntext": "viajo",
            "de": "reisen",
            "c": "v"
          }
        ],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo quiero [Slot] ahora",
          "lerntext": "yo quiero [Slot] ahora",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen",
              "c": "v"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
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
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ahora",
            "lerntext": "ahora",
            "de": "jetzt"
          }
        ],
        "id": "8.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo quiero [Slot] ahora",
          "lerntext": "yo quiero [Slot] ahora",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
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
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
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
          "schrift": "yo viajo en [Slot]",
          "lerntext": "yo viajo en [Slot]",
          "wortarten": {
            "yo": "p",
            "viajo": "v"
          }
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
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
          "schrift": "yo quiero [Slot] ahora",
          "lerntext": "yo quiero [Slot] ahora",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
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
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
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
        "kind": "frame",
        "frame": {
          "schrift": "yo viajo en [Slot]",
          "lerntext": "yo viajo en [Slot]",
          "wortarten": {
            "yo": "p",
            "viajo": "v"
          }
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "8.7"
      },
      {
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
        "id": "8.8"
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
              "schrift": "hoy",
              "lerntext": "hoy",
              "de": "heute"
            },
            {
              "schrift": "ayer",
              "lerntext": "ayer",
              "de": "gestern"
            },
            {
              "schrift": "mañana",
              "lerntext": "mañana",
              "de": "morgen"
            },
            {
              "schrift": "ahora",
              "lerntext": "ahora",
              "de": "jetzt"
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bald"
            },
            {
              "schrift": "siempre",
              "lerntext": "siempre",
              "de": "immer"
            },
            {
              "schrift": "nunca",
              "lerntext": "nunca",
              "de": "nie"
            },
            {
              "schrift": "ya",
              "lerntext": "ya",
              "de": "schon"
            },
            {
              "schrift": "entonces",
              "lerntext": "entonces",
              "de": "also",
              "c": "k"
            },
            {
              "schrift": "todavía",
              "lerntext": "todavía",
              "de": "noch"
            }
          ]
        ],
        "newCount": 9,
        "task": null,
        "newFrameWords": [],
        "id": "9.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nos vemos por la [Slot]",
          "lerntext": "nos vemos por la [Slot]",
          "wortarten": {
            "nos": "p",
            "vemos": "v"
          }
        },
        "frameDe": "Wir sehen uns am [Slot].",
        "pronouns": [
          {
            "schrift": "cuándo",
            "lerntext": "cuándo",
            "de": "wann"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mañana",
              "lerntext": "mañana",
              "de": "morgen"
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "hoy",
              "lerntext": "hoy",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "nunca",
              "lerntext": "nunca",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "ya",
              "lerntext": "ya",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "siempre",
              "lerntext": "siempre",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "todavía",
              "lerntext": "todavía",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "ayer",
              "lerntext": "ayer",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "allí",
              "lerntext": "allí",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "mal",
              "lerntext": "mal",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "cuándo",
            "lerntext": "cuándo",
            "de": "wann"
          },
          {
            "schrift": "también",
            "lerntext": "también",
            "de": "auch"
          },
          {
            "schrift": "solo",
            "lerntext": "solo",
            "de": "nur"
          },
          {
            "schrift": "nos",
            "lerntext": "nos",
            "de": "uns",
            "c": "p"
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
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "c": "n"
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
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
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
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
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "c": "n"
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
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
              "schrift": "entonces",
              "lerntext": "entonces",
              "de": "also",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "hoy",
              "lerntext": "hoy",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "ayer",
              "lerntext": "ayer",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "siempre",
              "lerntext": "siempre",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "nunca",
              "lerntext": "nunca",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "ya",
              "lerntext": "ya",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "todavía",
              "lerntext": "todavía",
              "de": "noch",
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
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
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
          "schrift": "yo amo [Slot]",
          "lerntext": "yo amo [Slot]",
          "wortarten": {
            "yo": "p"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "c": "n"
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "c": "n"
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "c": "n"
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "c": "n"
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
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
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "quiero",
            "lerntext": "quiero",
            "de": "wollen",
            "c": "v"
          },
          {
            "schrift": "quiero",
            "lerntext": "quiero",
            "de": "wollen",
            "c": "v"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo amo [Slot]",
          "lerntext": "yo amo [Slot]",
          "wortarten": {
            "yo": "p"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "c": "n"
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "c": "n"
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
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
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "10.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo veo a [Slot]",
          "lerntext": "yo veo a [Slot]",
          "wortarten": {
            "yo": "p",
            "veo": "v"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
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
              "schrift": "lo / la",
              "lerntext": "lo / la",
              "de": "ihn",
              "c": "p"
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "uns",
              "c": "p"
            },
            {
              "schrift": "ninguno / ninguna",
              "lerntext": "ninguno / ninguna",
              "de": "keiner",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "quien",
              "lerntext": "quien",
              "de": "wer (Relativpronomen)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
              "de": "alles",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "que",
              "lerntext": "que",
              "de": "der",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nuestro / nuestra",
              "lerntext": "nuestro / nuestra",
              "de": "unser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mi / mis",
              "lerntext": "mi / mis",
              "de": "mein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "tu / tus",
              "lerntext": "tu / tus",
              "de": "dein",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "encuentro",
            "lerntext": "encuentro",
            "de": "finden",
            "c": "v"
          }
        ],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "la comida está [Slot]",
          "lerntext": "la comida está [Slot]",
          "wortarten": {
            "comida": "n",
            "está": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "c": "a"
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "comida",
            "lerntext": "comida",
            "de": "Essen",
            "c": "n"
          }
        ],
        "id": "10.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo amo [Slot]",
          "lerntext": "yo amo [Slot]",
          "wortarten": {
            "yo": "p"
          }
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "la comida está [Slot]",
          "lerntext": "la comida está [Slot]",
          "wortarten": {
            "comida": "n",
            "está": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "10.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo veo a [Slot]",
          "lerntext": "yo veo a [Slot]",
          "wortarten": {
            "yo": "p",
            "veo": "v"
          }
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
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
              "schrift": "lo / la",
              "lerntext": "lo / la",
              "de": "ihn",
              "c": "p",
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
          "schrift": "la comida está [Slot]",
          "lerntext": "la comida está [Slot]",
          "wortarten": {
            "comida": "n",
            "está": "v"
          }
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
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
        "id": "10.9"
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
          "schrift": "yo estaba [Slot] ayer",
          "lerntext": "yo estaba [Slot] ayer",
          "wortarten": {
            "yo": "p"
          }
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "c": "a"
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
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
          "schrift": "yo voy a [Slot] mañana",
          "lerntext": "yo voy a [Slot] mañana",
          "wortarten": {
            "yo": "p",
            "voy": "v"
          }
        },
        "frameDe": "ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "c": "v"
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "encontrar",
              "lerntext": "encontrar",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "11.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo quiero [Slot] mucho",
          "lerntext": "yo quiero [Slot] mucho",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich [Slot] viel.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "c": "v"
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
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
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "11.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo me pongo [Slot]",
          "lerntext": "yo me pongo [Slot]",
          "wortarten": {
            "yo": "p",
            "me": "p",
            "pongo": "v"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "c": "a"
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "c": "a"
            },
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
              "c": "a"
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher",
              "c": "a"
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
              "c": "a"
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
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
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "11.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo quiero [Slot] mucho",
          "lerntext": "yo quiero [Slot] mucho",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich [Slot] viel.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
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
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
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
          "schrift": "yo me pongo [Slot]",
          "lerntext": "yo me pongo [Slot]",
          "wortarten": {
            "yo": "p",
            "me": "p",
            "pongo": "v"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
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
          "schrift": "yo quiero [Slot] mucho",
          "lerntext": "yo quiero [Slot] mucho",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich [Slot] viel.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
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
        "id": "11.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo me pongo [Slot]",
          "lerntext": "yo me pongo [Slot]",
          "wortarten": {
            "yo": "p",
            "me": "p",
            "pongo": "v"
          }
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
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
          "schrift": "estoy cansado [Slot] trabajo",
          "lerntext": "estoy cansado [Slot] trabajo",
          "wortarten": {
            "estoy": "v",
            "cansado": "a"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
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
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil",
              "c": "k"
            },
            {
              "schrift": "sobre",
              "lerntext": "sobre",
              "de": "über"
            },
            {
              "schrift": "durante",
              "lerntext": "durante",
              "de": "während"
            },
            {
              "schrift": "aunque",
              "lerntext": "aunque",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "hasta",
              "lerntext": "hasta",
              "de": "bis"
            },
            {
              "schrift": "ante",
              "lerntext": "ante",
              "de": "vor",
              "wieder": true
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "hacia",
              "lerntext": "hacia",
              "de": "in Richtung",
              "wieder": true
            },
            {
              "schrift": "sin",
              "lerntext": "sin",
              "de": "ohne",
              "wieder": true
            },
            {
              "schrift": "entre",
              "lerntext": "entre",
              "de": "zwischen",
              "wieder": true
            },
            {
              "schrift": "tras",
              "lerntext": "tras",
              "de": "nach",
              "wieder": true
            },
            {
              "schrift": "bajo",
              "lerntext": "bajo",
              "de": "unter",
              "wieder": true
            },
            {
              "schrift": "de",
              "lerntext": "de",
              "de": "von",
              "wieder": true
            },
            {
              "schrift": "en",
              "lerntext": "en",
              "de": "in",
              "wieder": true
            },
            {
              "schrift": "por",
              "lerntext": "por",
              "de": "durch",
              "wieder": true
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
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
            "schrift": "entonces",
            "lerntext": "entonces",
            "de": "also",
            "c": "k"
          },
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "der",
            "c": "p"
          },
          {
            "schrift": "trabajo",
            "lerntext": "trabajo",
            "de": "Arbeit",
            "c": "n"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "estoy cansado [Slot] trabajo",
          "lerntext": "estoy cansado [Slot] trabajo",
          "wortarten": {
            "estoy": "v",
            "cansado": "a"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
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
              "schrift": "ante",
              "lerntext": "ante",
              "de": "vor"
            },
            {
              "schrift": "quizás",
              "lerntext": "quizás",
              "de": "vielleicht"
            },
            {
              "schrift": "bastante",
              "lerntext": "bastante",
              "de": "ziemlich"
            },
            {
              "schrift": "durante",
              "lerntext": "durante",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "hasta",
              "lerntext": "hasta",
              "de": "bis",
              "wieder": true
            },
            {
              "schrift": "sobre",
              "lerntext": "sobre",
              "de": "über",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "también",
              "lerntext": "también",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "mit",
              "wieder": true
            },
            {
              "schrift": "hoy",
              "lerntext": "hoy",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "nunca",
              "lerntext": "nunca",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "hacia",
              "lerntext": "hacia",
              "de": "in Richtung",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bald",
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
          "schrift": "quiero [Slot] pero no puedo",
          "lerntext": "quiero [Slot] pero no puedo",
          "wortarten": {
            "quiero": "v",
            "pero": "k",
            "puedo": "v"
          }
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
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
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
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
          "schrift": "es [Slot] pero funciona",
          "lerntext": "es [Slot] pero funciona",
          "wortarten": {
            "es": "v",
            "pero": "k"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig",
              "c": "a"
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "c": "a"
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
              "c": "a",
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
          "schrift": "es [Slot] pero funciona",
          "lerntext": "es [Slot] pero funciona",
          "wortarten": {
            "es": "v",
            "pero": "k"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "c": "a"
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "c": "a"
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "c": "a"
            },
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
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
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "12.5"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden",
              "c": "v"
            },
            {
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern",
              "c": "v"
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "12.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "estoy cansado [Slot] trabajo",
          "lerntext": "estoy cansado [Slot] trabajo",
          "wortarten": {
            "estoy": "v",
            "cansado": "a"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
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
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "aunque",
              "lerntext": "aunque",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "quizás",
              "lerntext": "quizás",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "bastante",
              "lerntext": "bastante",
              "de": "ziemlich",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "también",
              "lerntext": "también",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "durante",
              "lerntext": "durante",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "hasta",
              "lerntext": "hasta",
              "de": "bis",
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
          "schrift": "es [Slot] pero funciona",
          "lerntext": "es [Slot] pero funciona",
          "wortarten": {
            "es": "v",
            "pero": "k"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a",
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
          "schrift": "estoy cansado [Slot] trabajo",
          "lerntext": "estoy cansado [Slot] trabajo",
          "wortarten": {
            "estoy": "v",
            "cansado": "a"
          }
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "und",
            "c": "k"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
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
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "aunque",
              "lerntext": "aunque",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "quizás",
              "lerntext": "quizás",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "bastante",
              "lerntext": "bastante",
              "de": "ziemlich",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "también",
              "lerntext": "también",
              "de": "auch",
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
          "schrift": "es [Slot] pero funciona",
          "lerntext": "es [Slot] pero funciona",
          "wortarten": {
            "es": "v",
            "pero": "k"
          }
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "c": "a",
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
          "schrift": "me duele una [Slot]",
          "lerntext": "me duele una [Slot]",
          "wortarten": {
            "me": "p"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "c": "n"
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "trabajo",
              "lerntext": "trabajo",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
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
          "schrift": "me duele un [Slot]",
          "lerntext": "me duele un [Slot]",
          "wortarten": {
            "me": "p"
          }
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "c": "n"
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "c": "n"
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "c": "n"
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "13.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tengo dolor en una [Slot]",
          "lerntext": "tengo dolor en una [Slot]",
          "wortarten": {
            "tengo": "v",
            "dolor": "n"
          }
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "c": "n"
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "dolor",
            "lerntext": "dolor",
            "de": "Schmerz",
            "c": "n"
          }
        ],
        "id": "13.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tengo dolor en un [Slot]",
          "lerntext": "tengo dolor en un [Slot]",
          "wortarten": {
            "tengo": "v",
            "dolor": "n"
          }
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "c": "n"
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "trabajo",
              "lerntext": "trabajo",
              "de": "Arbeit",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "13.4"
      },
      {
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
        "id": "13.5"
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
          "schrift": "aquí hay un [Slot]",
          "lerntext": "aquí hay un [Slot]"
        },
        "frameDe": "Hier gibt es einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "c": "n"
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dolor",
              "lerntext": "dolor",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
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
          "schrift": "compro un [Slot]",
          "lerntext": "compro un [Slot]",
          "wortarten": {
            "compro": "v"
          }
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "c": "n"
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dolor",
              "lerntext": "dolor",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
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
          "schrift": "tengo [Slot]",
          "lerntext": "tengo [Slot]",
          "wortarten": {
            "tengo": "v"
          }
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "c": "n"
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "c": "n"
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "c": "n"
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
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
          "schrift": "este es mi [Slot]",
          "lerntext": "este es mi [Slot]",
          "wortarten": {
            "este": "p",
            "es": "v",
            "mi": "p"
          }
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "trabajo",
              "lerntext": "trabajo",
              "de": "Arbeit",
              "c": "n"
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "14.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "espero una [Slot]",
          "lerntext": "espero una [Slot]",
          "wortarten": {
            "espero": "v"
          }
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "c": "n"
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
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
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
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
          "schrift": "mañana hay [Slot]",
          "lerntext": "mañana hay [Slot]"
        },
        "frameDe": "Morgen gibt es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "c": "n"
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
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
          "schrift": "he sacado una buen [Slot]",
          "lerntext": "he sacado una buen [Slot]",
          "wortarten": {
            "sacado": "v"
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
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "c": "n"
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "c": "n"
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dolor",
              "lerntext": "dolor",
              "de": "Schmerz",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mundo",
              "lerntext": "mundo",
              "de": "Welt",
              "c": "n"
            },
            {
              "schrift": "gobierno",
              "lerntext": "gobierno",
              "de": "Regierung",
              "c": "n"
            },
            {
              "schrift": "número",
              "lerntext": "número",
              "de": "Nummer",
              "c": "n"
            },
            {
              "schrift": "tarjeta",
              "lerntext": "tarjeta",
              "de": "Karte",
              "c": "n"
            },
            {
              "schrift": "cuenta",
              "lerntext": "cuenta",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "metro",
              "lerntext": "metro",
              "de": "U-Bahn",
              "c": "n"
            },
            {
              "schrift": "música",
              "lerntext": "música",
              "de": "Musik",
              "c": "n"
            },
            {
              "schrift": "fiesta",
              "lerntext": "fiesta",
              "de": "Party",
              "c": "n"
            },
            {
              "schrift": "correo",
              "lerntext": "correo",
              "de": "Post",
              "c": "n"
            },
            {
              "schrift": "mensaje",
              "lerntext": "mensaje",
              "de": "Nachricht",
              "c": "n"
            },
            {
              "schrift": "mundo",
              "lerntext": "mundo",
              "de": "Welt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gobierno",
              "lerntext": "gobierno",
              "de": "Regierung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "número",
              "lerntext": "número",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tarjeta",
              "lerntext": "tarjeta",
              "de": "Karte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuenta",
              "lerntext": "cuenta",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "miedo",
              "lerntext": "miedo",
              "de": "Angst",
              "c": "n"
            },
            {
              "schrift": "alegría",
              "lerntext": "alegría",
              "de": "Freude",
              "c": "n"
            },
            {
              "schrift": "verdad",
              "lerntext": "verdad",
              "de": "Wahrheit",
              "c": "n"
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "c": "n"
            },
            {
              "schrift": "opinión",
              "lerntext": "opinión",
              "de": "Meinung",
              "c": "n"
            },
            {
              "schrift": "metro",
              "lerntext": "metro",
              "de": "U-Bahn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "música",
              "lerntext": "música",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fiesta",
              "lerntext": "fiesta",
              "de": "Party",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "correo",
              "lerntext": "correo",
              "de": "Post",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mensaje",
              "lerntext": "mensaje",
              "de": "Nachricht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mundo",
              "lerntext": "mundo",
              "de": "Welt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gobierno",
              "lerntext": "gobierno",
              "de": "Regierung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "número",
              "lerntext": "número",
              "de": "Nummer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tarjeta",
              "lerntext": "tarjeta",
              "de": "Karte",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuenta",
              "lerntext": "cuenta",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "Frage",
              "c": "n"
            },
            {
              "schrift": "futuro",
              "lerntext": "futuro",
              "de": "Zukunft",
              "c": "n"
            },
            {
              "schrift": "historia",
              "lerntext": "historia",
              "de": "Geschichte",
              "c": "n"
            },
            {
              "schrift": "cosa",
              "lerntext": "cosa",
              "de": "Sache",
              "c": "n"
            },
            {
              "schrift": "salud",
              "lerntext": "salud",
              "de": "Gesundheit",
              "c": "n"
            },
            {
              "schrift": "miedo",
              "lerntext": "miedo",
              "de": "Angst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "alegría",
              "lerntext": "alegría",
              "de": "Freude",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verdad",
              "lerntext": "verdad",
              "de": "Wahrheit",
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
              "schrift": "opinión",
              "lerntext": "opinión",
              "de": "Meinung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "metro",
              "lerntext": "metro",
              "de": "U-Bahn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "música",
              "lerntext": "música",
              "de": "Musik",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "fiesta",
              "lerntext": "fiesta",
              "de": "Party",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "correo",
              "lerntext": "correo",
              "de": "Post",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mensaje",
              "lerntext": "mensaje",
              "de": "Nachricht",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "enfermedad",
              "lerntext": "enfermedad",
              "de": "Krankheit",
              "c": "n"
            },
            {
              "schrift": "amor",
              "lerntext": "amor",
              "de": "Liebe",
              "c": "n"
            },
            {
              "schrift": "grupo",
              "lerntext": "grupo",
              "de": "Gruppe",
              "c": "n"
            },
            {
              "schrift": "aire",
              "lerntext": "aire",
              "de": "Luft",
              "c": "n"
            },
            {
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "futuro",
              "lerntext": "futuro",
              "de": "Zukunft",
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
              "schrift": "cosa",
              "lerntext": "cosa",
              "de": "Sache",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "salud",
              "lerntext": "salud",
              "de": "Gesundheit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "miedo",
              "lerntext": "miedo",
              "de": "Angst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "alegría",
              "lerntext": "alegría",
              "de": "Freude",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "verdad",
              "lerntext": "verdad",
              "de": "Wahrheit",
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
              "schrift": "opinión",
              "lerntext": "opinión",
              "de": "Meinung",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
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
              "schrift": "punto",
              "lerntext": "punto",
              "de": "Punkt",
              "c": "n"
            },
            {
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment",
              "c": "n"
            },
            {
              "schrift": "precio",
              "lerntext": "precio",
              "de": "Preis",
              "c": "n"
            },
            {
              "schrift": "mercado",
              "lerntext": "mercado",
              "de": "Markt",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "billete",
              "lerntext": "billete",
              "de": "Fahrschein",
              "c": "n"
            },
            {
              "schrift": "cumpleaños",
              "lerntext": "cumpleaños",
              "de": "Geburtstag",
              "c": "n"
            },
            {
              "schrift": "empleado / empleada",
              "lerntext": "empleado / empleada",
              "de": "Angestellter",
              "c": "n"
            },
            {
              "schrift": "sueldo",
              "lerntext": "sueldo",
              "de": "Lohn",
              "c": "n"
            },
            {
              "schrift": "cita",
              "lerntext": "cita",
              "de": "Termin",
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
              "schrift": "punto",
              "lerntext": "punto",
              "de": "Punkt",
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
              "schrift": "precio",
              "lerntext": "precio",
              "de": "Preis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mercado",
              "lerntext": "mercado",
              "de": "Markt",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "razón",
              "lerntext": "razón",
              "de": "Grund",
              "c": "n"
            },
            {
              "schrift": "error",
              "lerntext": "error",
              "de": "Fehler",
              "c": "n"
            },
            {
              "schrift": "lugar",
              "lerntext": "lugar",
              "de": "Ort",
              "c": "n"
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "Monat",
              "c": "n"
            },
            {
              "schrift": "río",
              "lerntext": "río",
              "de": "Fluss",
              "c": "n"
            },
            {
              "schrift": "billete",
              "lerntext": "billete",
              "de": "Fahrschein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cumpleaños",
              "lerntext": "cumpleaños",
              "de": "Geburtstag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "empleado / empleada",
              "lerntext": "empleado / empleada",
              "de": "Angestellter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sueldo",
              "lerntext": "sueldo",
              "de": "Lohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cita",
              "lerntext": "cita",
              "de": "Termin",
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
              "schrift": "punto",
              "lerntext": "punto",
              "de": "Punkt",
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
              "schrift": "precio",
              "lerntext": "precio",
              "de": "Preis",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mercado",
              "lerntext": "mercado",
              "de": "Markt",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "luna",
              "lerntext": "luna",
              "de": "Mond",
              "c": "n"
            },
            {
              "schrift": "estrella",
              "lerntext": "estrella",
              "de": "Stern",
              "c": "n"
            },
            {
              "schrift": "plaza",
              "lerntext": "plaza",
              "de": "Platz (Ort)",
              "c": "n"
            },
            {
              "schrift": "médico / médica",
              "lerntext": "médico / médica",
              "de": "Arzt",
              "c": "n"
            },
            {
              "schrift": "sueño",
              "lerntext": "sueño",
              "de": "Traum",
              "c": "n"
            },
            {
              "schrift": "razón",
              "lerntext": "razón",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "error",
              "lerntext": "error",
              "de": "Fehler",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lugar",
              "lerntext": "lugar",
              "de": "Ort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "río",
              "lerntext": "río",
              "de": "Fluss",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "billete",
              "lerntext": "billete",
              "de": "Fahrschein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cumpleaños",
              "lerntext": "cumpleaños",
              "de": "Geburtstag",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "empleado / empleada",
              "lerntext": "empleado / empleada",
              "de": "Angestellter",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sueldo",
              "lerntext": "sueldo",
              "de": "Lohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cita",
              "lerntext": "cita",
              "de": "Termin",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hambre",
              "lerntext": "hambre",
              "de": "Hunger",
              "c": "n"
            },
            {
              "schrift": "sed",
              "lerntext": "sed",
              "de": "Durst",
              "c": "n"
            },
            {
              "schrift": "cambio",
              "lerntext": "cambio",
              "de": "Wechsel",
              "c": "n"
            },
            {
              "schrift": "diferencia",
              "lerntext": "diferencia",
              "de": "Unterschied",
              "c": "n"
            },
            {
              "schrift": "tipo",
              "lerntext": "tipo",
              "de": "Typ",
              "c": "n"
            },
            {
              "schrift": "luna",
              "lerntext": "luna",
              "de": "Mond",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "estrella",
              "lerntext": "estrella",
              "de": "Stern",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "plaza",
              "lerntext": "plaza",
              "de": "Platz (Ort)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "médico / médica",
              "lerntext": "médico / médica",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sueño",
              "lerntext": "sueño",
              "de": "Traum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "razón",
              "lerntext": "razón",
              "de": "Grund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "error",
              "lerntext": "error",
              "de": "Fehler",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lugar",
              "lerntext": "lugar",
              "de": "Ort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "Monat",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "río",
              "lerntext": "río",
              "de": "Fluss",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "estado",
              "lerntext": "estado",
              "de": "Zustand",
              "c": "n"
            },
            {
              "schrift": "hambre",
              "lerntext": "hambre",
              "de": "Hunger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sed",
              "lerntext": "sed",
              "de": "Durst",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cambio",
              "lerntext": "cambio",
              "de": "Wechsel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "diferencia",
              "lerntext": "diferencia",
              "de": "Unterschied",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tipo",
              "lerntext": "tipo",
              "de": "Typ",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "luna",
              "lerntext": "luna",
              "de": "Mond",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "estrella",
              "lerntext": "estrella",
              "de": "Stern",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "plaza",
              "lerntext": "plaza",
              "de": "Platz (Ort)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "médico / médica",
              "lerntext": "médico / médica",
              "de": "Arzt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sueño",
              "lerntext": "sueño",
              "de": "Traum",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "año",
              "lerntext": "año",
              "de": "Jahr",
              "c": "n"
            },
            {
              "schrift": "vida",
              "lerntext": "vida",
              "de": "Leben",
              "c": "n"
            },
            {
              "schrift": "país",
              "lerntext": "país",
              "de": "Land (Staat)",
              "c": "n"
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem",
              "c": "n"
            },
            {
              "schrift": "palabra",
              "lerntext": "palabra",
              "de": "Wort",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "taxi",
              "lerntext": "taxi",
              "de": "Taxi",
              "c": "n"
            },
            {
              "schrift": "canción",
              "lerntext": "canción",
              "de": "Lied",
              "c": "n"
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk",
              "c": "n"
            },
            {
              "schrift": "foto",
              "lerntext": "foto",
              "de": "Foto",
              "c": "n"
            },
            {
              "schrift": "teléfono móvil",
              "lerntext": "teléfono móvil",
              "de": "Handy",
              "c": "n"
            },
            {
              "schrift": "año",
              "lerntext": "año",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vida",
              "lerntext": "vida",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "país",
              "lerntext": "país",
              "de": "Land (Staat)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "palabra",
              "lerntext": "palabra",
              "de": "Wort",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "internet",
              "lerntext": "internet",
              "de": "Internet",
              "c": "n"
            },
            {
              "schrift": "reunión",
              "lerntext": "reunión",
              "de": "Treffen",
              "c": "n"
            },
            {
              "schrift": "cara",
              "lerntext": "cara",
              "de": "Gesicht",
              "c": "n"
            },
            {
              "schrift": "suerte",
              "lerntext": "suerte",
              "de": "Glück (Zufall)",
              "c": "n"
            },
            {
              "schrift": "tema",
              "lerntext": "tema",
              "de": "Thema",
              "c": "n"
            },
            {
              "schrift": "taxi",
              "lerntext": "taxi",
              "de": "Taxi",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "canción",
              "lerntext": "canción",
              "de": "Lied",
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
              "schrift": "foto",
              "lerntext": "foto",
              "de": "Foto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "teléfono móvil",
              "lerntext": "teléfono móvil",
              "de": "Handy",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "año",
              "lerntext": "año",
              "de": "Jahr",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vida",
              "lerntext": "vida",
              "de": "Leben",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "país",
              "lerntext": "país",
              "de": "Land (Staat)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "palabra",
              "lerntext": "palabra",
              "de": "Wort",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ejemplo",
              "lerntext": "ejemplo",
              "de": "Beispiel",
              "c": "n"
            },
            {
              "schrift": "pueblo",
              "lerntext": "pueblo",
              "de": "Dorf",
              "c": "n"
            },
            {
              "schrift": "barrio",
              "lerntext": "barrio",
              "de": "Stadtviertel",
              "c": "n"
            },
            {
              "schrift": "final",
              "lerntext": "final",
              "de": "Ende",
              "c": "n"
            },
            {
              "schrift": "equipo",
              "lerntext": "equipo",
              "de": "Team",
              "c": "n"
            },
            {
              "schrift": "internet",
              "lerntext": "internet",
              "de": "Internet",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "reunión",
              "lerntext": "reunión",
              "de": "Treffen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cara",
              "lerntext": "cara",
              "de": "Gesicht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "suerte",
              "lerntext": "suerte",
              "de": "Glück (Zufall)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tema",
              "lerntext": "tema",
              "de": "Thema",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "taxi",
              "lerntext": "taxi",
              "de": "Taxi",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "canción",
              "lerntext": "canción",
              "de": "Lied",
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
              "schrift": "foto",
              "lerntext": "foto",
              "de": "Foto",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "teléfono móvil",
              "lerntext": "teléfono móvil",
              "de": "Handy",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende",
              "c": "n"
            },
            {
              "schrift": "ejemplo",
              "lerntext": "ejemplo",
              "de": "Beispiel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pueblo",
              "lerntext": "pueblo",
              "de": "Dorf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "barrio",
              "lerntext": "barrio",
              "de": "Stadtviertel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "final",
              "lerntext": "final",
              "de": "Ende",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "equipo",
              "lerntext": "equipo",
              "de": "Team",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "internet",
              "lerntext": "internet",
              "de": "Internet",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "reunión",
              "lerntext": "reunión",
              "de": "Treffen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cara",
              "lerntext": "cara",
              "de": "Gesicht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "suerte",
              "lerntext": "suerte",
              "de": "Glück (Zufall)",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tema",
              "lerntext": "tema",
              "de": "Thema",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "15.16"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "padres",
              "lerntext": "padres",
              "de": "Eltern",
              "c": "n"
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute",
              "c": "n"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "15.17"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "enfermedad",
              "lerntext": "enfermedad",
              "de": "Krankheit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amor",
              "lerntext": "amor",
              "de": "Liebe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "grupo",
              "lerntext": "grupo",
              "de": "Gruppe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aire",
              "lerntext": "aire",
              "de": "Luft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "padres",
              "lerntext": "padres",
              "de": "Eltern",
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
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "Frage",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "futuro",
              "lerntext": "futuro",
              "de": "Zukunft",
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
              "schrift": "cosa",
              "lerntext": "cosa",
              "de": "Sache",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]",
          "wortarten": {
            "está": "v"
          }
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "salud",
              "lerntext": "salud",
              "de": "Gesundheit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "enfermedad",
              "lerntext": "enfermedad",
              "de": "Krankheit",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amor",
              "lerntext": "amor",
              "de": "Liebe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "grupo",
              "lerntext": "grupo",
              "de": "Gruppe",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aire",
              "lerntext": "aire",
              "de": "Luft",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "padres",
              "lerntext": "padres",
              "de": "Eltern",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute",
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "seguir",
              "lerntext": "seguir",
              "de": "folgen",
              "c": "v"
            },
            {
              "schrift": "cocinar",
              "lerntext": "cocinar",
              "de": "kochen",
              "c": "v"
            },
            {
              "schrift": "levantarse",
              "lerntext": "levantarse",
              "de": "aufstehen",
              "c": "v"
            },
            {
              "schrift": "acostarse",
              "lerntext": "acostarse",
              "de": "sich hinlegen",
              "c": "v"
            },
            {
              "schrift": "vestirse",
              "lerntext": "vestirse",
              "de": "sich anziehen",
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mandar",
              "lerntext": "mandar",
              "de": "schicken",
              "c": "v"
            },
            {
              "schrift": "salir",
              "lerntext": "salir",
              "de": "hinausgehen",
              "c": "v"
            },
            {
              "schrift": "estar",
              "lerntext": "estar",
              "de": "sein (Zustand, Ort)",
              "c": "v"
            },
            {
              "schrift": "llegar",
              "lerntext": "llegar",
              "de": "ankommen",
              "c": "v"
            },
            {
              "schrift": "pasar",
              "lerntext": "pasar",
              "de": "passieren",
              "c": "v"
            },
            {
              "schrift": "seguir",
              "lerntext": "seguir",
              "de": "folgen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cocinar",
              "lerntext": "cocinar",
              "de": "kochen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "levantarse",
              "lerntext": "levantarse",
              "de": "aufstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "acostarse",
              "lerntext": "acostarse",
              "de": "sich hinlegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vestirse",
              "lerntext": "vestirse",
              "de": "sich anziehen",
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "parecer",
              "lerntext": "parecer",
              "de": "scheinen",
              "c": "v"
            },
            {
              "schrift": "llevar",
              "lerntext": "llevar",
              "de": "tragen",
              "c": "v"
            },
            {
              "schrift": "tratar",
              "lerntext": "tratar",
              "de": "behandeln",
              "c": "v"
            },
            {
              "schrift": "contar",
              "lerntext": "contar",
              "de": "erzählen",
              "c": "v"
            },
            {
              "schrift": "estudiar",
              "lerntext": "estudiar",
              "de": "studieren",
              "c": "v"
            },
            {
              "schrift": "mandar",
              "lerntext": "mandar",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "salir",
              "lerntext": "salir",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "estar",
              "lerntext": "estar",
              "de": "sein (Zustand, Ort)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llegar",
              "lerntext": "llegar",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pasar",
              "lerntext": "pasar",
              "de": "passieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "seguir",
              "lerntext": "seguir",
              "de": "folgen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cocinar",
              "lerntext": "cocinar",
              "de": "kochen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "levantarse",
              "lerntext": "levantarse",
              "de": "aufstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "acostarse",
              "lerntext": "acostarse",
              "de": "sich hinlegen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vestirse",
              "lerntext": "vestirse",
              "de": "sich anziehen",
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nacer",
              "lerntext": "nacer",
              "de": "geboren werden",
              "c": "v"
            },
            {
              "schrift": "correr",
              "lerntext": "correr",
              "de": "laufen",
              "c": "v"
            },
            {
              "schrift": "gustar",
              "lerntext": "gustar",
              "de": "gefallen",
              "c": "v"
            },
            {
              "schrift": "beber",
              "lerntext": "beber",
              "de": "trinken",
              "c": "v"
            },
            {
              "schrift": "conducir",
              "lerntext": "conducir",
              "de": "fahren",
              "c": "v"
            },
            {
              "schrift": "parecer",
              "lerntext": "parecer",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llevar",
              "lerntext": "llevar",
              "de": "tragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tratar",
              "lerntext": "tratar",
              "de": "behandeln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "contar",
              "lerntext": "contar",
              "de": "erzählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "estudiar",
              "lerntext": "estudiar",
              "de": "studieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mandar",
              "lerntext": "mandar",
              "de": "schicken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "salir",
              "lerntext": "salir",
              "de": "hinausgehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "estar",
              "lerntext": "estar",
              "de": "sein (Zustand, Ort)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llegar",
              "lerntext": "llegar",
              "de": "ankommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pasar",
              "lerntext": "pasar",
              "de": "passieren",
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cantar",
              "lerntext": "cantar",
              "de": "singen",
              "c": "v"
            },
            {
              "schrift": "volver",
              "lerntext": "volver",
              "de": "zurückkommen",
              "c": "v"
            },
            {
              "schrift": "conocer",
              "lerntext": "conocer",
              "de": "kennen",
              "c": "v"
            },
            {
              "schrift": "empezar",
              "lerntext": "empezar",
              "de": "anfangen",
              "c": "v"
            },
            {
              "schrift": "entrar",
              "lerntext": "entrar",
              "de": "eintreten",
              "c": "v"
            },
            {
              "schrift": "nacer",
              "lerntext": "nacer",
              "de": "geboren werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "correr",
              "lerntext": "correr",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gustar",
              "lerntext": "gustar",
              "de": "gefallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "beber",
              "lerntext": "beber",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conducir",
              "lerntext": "conducir",
              "de": "fahren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "parecer",
              "lerntext": "parecer",
              "de": "scheinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llevar",
              "lerntext": "llevar",
              "de": "tragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tratar",
              "lerntext": "tratar",
              "de": "behandeln",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "contar",
              "lerntext": "contar",
              "de": "erzählen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "estudiar",
              "lerntext": "estudiar",
              "de": "studieren",
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pedir",
              "lerntext": "pedir",
              "de": "bitten",
              "c": "v"
            },
            {
              "schrift": "recordar",
              "lerntext": "recordar",
              "de": "sich erinnern",
              "c": "v"
            },
            {
              "schrift": "terminar",
              "lerntext": "terminar",
              "de": "beenden",
              "c": "v"
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen",
              "c": "v"
            },
            {
              "schrift": "recibir",
              "lerntext": "recibir",
              "de": "empfangen",
              "c": "v"
            },
            {
              "schrift": "cantar",
              "lerntext": "cantar",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "volver",
              "lerntext": "volver",
              "de": "zurückkommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conocer",
              "lerntext": "conocer",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "empezar",
              "lerntext": "empezar",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entrar",
              "lerntext": "entrar",
              "de": "eintreten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "nacer",
              "lerntext": "nacer",
              "de": "geboren werden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "correr",
              "lerntext": "correr",
              "de": "laufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "gustar",
              "lerntext": "gustar",
              "de": "gefallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "beber",
              "lerntext": "beber",
              "de": "trinken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conducir",
              "lerntext": "conducir",
              "de": "fahren",
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "permitir",
              "lerntext": "permitir",
              "de": "erlauben",
              "c": "v"
            },
            {
              "schrift": "sacar",
              "lerntext": "sacar",
              "de": "herausnehmen",
              "c": "v"
            },
            {
              "schrift": "caer",
              "lerntext": "caer",
              "de": "fallen",
              "c": "v"
            },
            {
              "schrift": "considerar",
              "lerntext": "considerar",
              "de": "betrachten",
              "c": "v"
            },
            {
              "schrift": "acabar",
              "lerntext": "acabar",
              "de": "beenden",
              "c": "v"
            },
            {
              "schrift": "pedir",
              "lerntext": "pedir",
              "de": "bitten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "recordar",
              "lerntext": "recordar",
              "de": "sich erinnern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "terminar",
              "lerntext": "terminar",
              "de": "beenden",
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
              "schrift": "recibir",
              "lerntext": "recibir",
              "de": "empfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cantar",
              "lerntext": "cantar",
              "de": "singen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "volver",
              "lerntext": "volver",
              "de": "zurückkommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conocer",
              "lerntext": "conocer",
              "de": "kennen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "empezar",
              "lerntext": "empezar",
              "de": "anfangen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entrar",
              "lerntext": "entrar",
              "de": "eintreten",
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "traer",
              "lerntext": "traer",
              "de": "bringen",
              "c": "v"
            },
            {
              "schrift": "aceptar",
              "lerntext": "aceptar",
              "de": "akzeptieren",
              "c": "v"
            },
            {
              "schrift": "tocar",
              "lerntext": "tocar",
              "de": "berühren",
              "c": "v"
            },
            {
              "schrift": "permitir",
              "lerntext": "permitir",
              "de": "erlauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sacar",
              "lerntext": "sacar",
              "de": "herausnehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "caer",
              "lerntext": "caer",
              "de": "fallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "considerar",
              "lerntext": "considerar",
              "de": "betrachten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "acabar",
              "lerntext": "acabar",
              "de": "beenden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pedir",
              "lerntext": "pedir",
              "de": "bitten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "recordar",
              "lerntext": "recordar",
              "de": "sich erinnern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "terminar",
              "lerntext": "terminar",
              "de": "beenden",
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
              "schrift": "recibir",
              "lerntext": "recibir",
              "de": "empfangen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "16.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "traer",
              "lerntext": "traer",
              "de": "bringen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aceptar",
              "lerntext": "aceptar",
              "de": "akzeptieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tocar",
              "lerntext": "tocar",
              "de": "berühren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "permitir",
              "lerntext": "permitir",
              "de": "erlauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sacar",
              "lerntext": "sacar",
              "de": "herausnehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "caer",
              "lerntext": "caer",
              "de": "fallen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "considerar",
              "lerntext": "considerar",
              "de": "betrachten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "acabar",
              "lerntext": "acabar",
              "de": "beenden",
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]",
          "wortarten": {
            "quiero": "v"
          }
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "traer",
              "lerntext": "traer",
              "de": "bringen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "aceptar",
              "lerntext": "aceptar",
              "de": "akzeptieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tocar",
              "lerntext": "tocar",
              "de": "berühren",
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
          "schrift": "es muy [Slot]",
          "lerntext": "es muy [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bueno / buena",
              "lerntext": "bueno / buena",
              "de": "gut",
              "c": "a"
            },
            {
              "schrift": "malo / mala",
              "lerntext": "malo / mala",
              "de": "schlecht",
              "c": "a"
            },
            {
              "schrift": "mayor",
              "lerntext": "mayor",
              "de": "älter",
              "c": "a"
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei",
              "c": "a"
            },
            {
              "schrift": "perfecto / perfecta",
              "lerntext": "perfecto / perfecta",
              "de": "perfekt",
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
          "schrift": "es muy [Slot]",
          "lerntext": "es muy [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "verdadero / verdadera",
              "lerntext": "verdadero / verdadera",
              "de": "wahr",
              "c": "a"
            },
            {
              "schrift": "claro / clara",
              "lerntext": "claro / clara",
              "de": "klar",
              "c": "a"
            },
            {
              "schrift": "oscuro / oscura",
              "lerntext": "oscuro / oscura",
              "de": "dunkel",
              "c": "a"
            },
            {
              "schrift": "salado / salada",
              "lerntext": "salado / salada",
              "de": "salzig",
              "c": "a"
            },
            {
              "schrift": "picante",
              "lerntext": "picante",
              "de": "scharf (Geschmack)",
              "c": "a"
            },
            {
              "schrift": "bueno / buena",
              "lerntext": "bueno / buena",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malo / mala",
              "lerntext": "malo / mala",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mayor",
              "lerntext": "mayor",
              "de": "älter",
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
              "schrift": "perfecto / perfecta",
              "lerntext": "perfecto / perfecta",
              "de": "perfekt",
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
          "schrift": "es muy [Slot]",
          "lerntext": "es muy [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "menor",
              "lerntext": "menor",
              "de": "jünger",
              "c": "a"
            },
            {
              "schrift": "mejor",
              "lerntext": "mejor",
              "de": "besser",
              "c": "a"
            },
            {
              "schrift": "peor",
              "lerntext": "peor",
              "de": "schlechter",
              "c": "a"
            },
            {
              "schrift": "delgado / delgada",
              "lerntext": "delgado / delgada",
              "de": "schlank",
              "c": "a"
            },
            {
              "schrift": "ocupado / ocupada",
              "lerntext": "ocupado / ocupada",
              "de": "beschäftigt",
              "c": "a"
            },
            {
              "schrift": "verdadero / verdadera",
              "lerntext": "verdadero / verdadera",
              "de": "wahr",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "claro / clara",
              "lerntext": "claro / clara",
              "de": "klar",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "oscuro / oscura",
              "lerntext": "oscuro / oscura",
              "de": "dunkel",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "salado / salada",
              "lerntext": "salado / salada",
              "de": "salzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "picante",
              "lerntext": "picante",
              "de": "scharf (Geschmack)",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bueno / buena",
              "lerntext": "bueno / buena",
              "de": "gut",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "malo / mala",
              "lerntext": "malo / mala",
              "de": "schlecht",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mayor",
              "lerntext": "mayor",
              "de": "älter",
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
              "schrift": "perfecto / perfecta",
              "lerntext": "perfecto / perfecta",
              "de": "perfekt",
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
          "schrift": "es muy [Slot]",
          "lerntext": "es muy [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lleno / llena",
              "lerntext": "lleno / llena",
              "de": "voll",
              "c": "a"
            },
            {
              "schrift": "vacío / vacía",
              "lerntext": "vacío / vacía",
              "de": "leer",
              "c": "a"
            },
            {
              "schrift": "rico / rica",
              "lerntext": "rico / rica",
              "de": "reich",
              "c": "a"
            },
            {
              "schrift": "pobre",
              "lerntext": "pobre",
              "de": "arm",
              "c": "a"
            },
            {
              "schrift": "guapo / guapa",
              "lerntext": "guapo / guapa",
              "de": "gutaussehend",
              "c": "a"
            },
            {
              "schrift": "menor",
              "lerntext": "menor",
              "de": "jünger",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mejor",
              "lerntext": "mejor",
              "de": "besser",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "peor",
              "lerntext": "peor",
              "de": "schlechter",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "delgado / delgada",
              "lerntext": "delgado / delgada",
              "de": "schlank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ocupado / ocupada",
              "lerntext": "ocupado / ocupada",
              "de": "beschäftigt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "verdadero / verdadera",
              "lerntext": "verdadero / verdadera",
              "de": "wahr",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "claro / clara",
              "lerntext": "claro / clara",
              "de": "klar",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "oscuro / oscura",
              "lerntext": "oscuro / oscura",
              "de": "dunkel",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "salado / salada",
              "lerntext": "salado / salada",
              "de": "salzig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "picante",
              "lerntext": "picante",
              "de": "scharf (Geschmack)",
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
          "schrift": "es muy [Slot]",
          "lerntext": "es muy [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "amable",
              "lerntext": "amable",
              "de": "freundlich",
              "c": "a"
            },
            {
              "schrift": "inteligente",
              "lerntext": "inteligente",
              "de": "intelligent",
              "c": "a"
            },
            {
              "schrift": "loco / loca",
              "lerntext": "loco / loca",
              "de": "verrückt",
              "c": "a"
            },
            {
              "schrift": "extraño / extraña",
              "lerntext": "extraño / extraña",
              "de": "seltsam",
              "c": "a"
            },
            {
              "schrift": "normal",
              "lerntext": "normal",
              "de": "normal",
              "c": "a"
            },
            {
              "schrift": "lleno / llena",
              "lerntext": "lleno / llena",
              "de": "voll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vacío / vacía",
              "lerntext": "vacío / vacía",
              "de": "leer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rico / rica",
              "lerntext": "rico / rica",
              "de": "reich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pobre",
              "lerntext": "pobre",
              "de": "arm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "guapo / guapa",
              "lerntext": "guapo / guapa",
              "de": "gutaussehend",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "menor",
              "lerntext": "menor",
              "de": "jünger",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "mejor",
              "lerntext": "mejor",
              "de": "besser",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "peor",
              "lerntext": "peor",
              "de": "schlechter",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "delgado / delgada",
              "lerntext": "delgado / delgada",
              "de": "schlank",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ocupado / ocupada",
              "lerntext": "ocupado / ocupada",
              "de": "beschäftigt",
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
          "schrift": "es muy [Slot]",
          "lerntext": "es muy [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "especial",
              "lerntext": "especial",
              "de": "besonders",
              "c": "a"
            },
            {
              "schrift": "diferente",
              "lerntext": "diferente",
              "de": "anders",
              "c": "a"
            },
            {
              "schrift": "igual",
              "lerntext": "igual",
              "de": "gleich",
              "c": "a"
            },
            {
              "schrift": "posible",
              "lerntext": "posible",
              "de": "möglich",
              "c": "a"
            },
            {
              "schrift": "imposible",
              "lerntext": "imposible",
              "de": "unmöglich",
              "c": "a"
            },
            {
              "schrift": "amable",
              "lerntext": "amable",
              "de": "freundlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "inteligente",
              "lerntext": "inteligente",
              "de": "intelligent",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "loco / loca",
              "lerntext": "loco / loca",
              "de": "verrückt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "extraño / extraña",
              "lerntext": "extraño / extraña",
              "de": "seltsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "normal",
              "lerntext": "normal",
              "de": "normal",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lleno / llena",
              "lerntext": "lleno / llena",
              "de": "voll",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "vacío / vacía",
              "lerntext": "vacío / vacía",
              "de": "leer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rico / rica",
              "lerntext": "rico / rica",
              "de": "reich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "pobre",
              "lerntext": "pobre",
              "de": "arm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "guapo / guapa",
              "lerntext": "guapo / guapa",
              "de": "gutaussehend",
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
          "schrift": "es muy [Slot]",
          "lerntext": "es muy [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "necesario / necesaria",
              "lerntext": "necesario / necesaria",
              "de": "nötig",
              "c": "a"
            },
            {
              "schrift": "especial",
              "lerntext": "especial",
              "de": "besonders",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "diferente",
              "lerntext": "diferente",
              "de": "anders",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "igual",
              "lerntext": "igual",
              "de": "gleich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "posible",
              "lerntext": "posible",
              "de": "möglich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "imposible",
              "lerntext": "imposible",
              "de": "unmöglich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "amable",
              "lerntext": "amable",
              "de": "freundlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "inteligente",
              "lerntext": "inteligente",
              "de": "intelligent",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "loco / loca",
              "lerntext": "loco / loca",
              "de": "verrückt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "extraño / extraña",
              "lerntext": "extraño / extraña",
              "de": "seltsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "normal",
              "lerntext": "normal",
              "de": "normal",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "17.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es muy [Slot]",
          "lerntext": "es muy [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "necesario / necesaria",
              "lerntext": "necesario / necesaria",
              "de": "nötig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "especial",
              "lerntext": "especial",
              "de": "besonders",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "diferente",
              "lerntext": "diferente",
              "de": "anders",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "igual",
              "lerntext": "igual",
              "de": "gleich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "posible",
              "lerntext": "posible",
              "de": "möglich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "imposible",
              "lerntext": "imposible",
              "de": "unmöglich",
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
          "schrift": "lo hago [Slot]",
          "lerntext": "lo hago [Slot]",
          "wortarten": {
            "hago": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tampoco",
              "lerntext": "tampoco",
              "de": "auch nicht"
            },
            {
              "schrift": "menos",
              "lerntext": "menos",
              "de": "weniger"
            },
            {
              "schrift": "ahí",
              "lerntext": "ahí",
              "de": "da"
            },
            {
              "schrift": "incluso",
              "lerntext": "incluso",
              "de": "sogar"
            },
            {
              "schrift": "tal vez",
              "lerntext": "tal vez",
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
          "schrift": "lo hago [Slot]",
          "lerntext": "lo hago [Slot]",
          "wortarten": {
            "hago": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "realmente",
              "lerntext": "realmente",
              "de": "wirklich"
            },
            {
              "schrift": "especialmente",
              "lerntext": "especialmente",
              "de": "besonders"
            },
            {
              "schrift": "generalmente",
              "lerntext": "generalmente",
              "de": "im Allgemeinen"
            },
            {
              "schrift": "normalmente",
              "lerntext": "normalmente",
              "de": "normalerweise"
            },
            {
              "schrift": "probablemente",
              "lerntext": "probablemente",
              "de": "wahrscheinlich"
            },
            {
              "schrift": "tampoco",
              "lerntext": "tampoco",
              "de": "auch nicht",
              "wieder": true
            },
            {
              "schrift": "menos",
              "lerntext": "menos",
              "de": "weniger",
              "wieder": true
            },
            {
              "schrift": "ahí",
              "lerntext": "ahí",
              "de": "da",
              "wieder": true
            },
            {
              "schrift": "incluso",
              "lerntext": "incluso",
              "de": "sogar",
              "wieder": true
            },
            {
              "schrift": "tal vez",
              "lerntext": "tal vez",
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
          "schrift": "lo hago [Slot]",
          "lerntext": "lo hago [Slot]",
          "wortarten": {
            "hago": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "verdaderamente",
              "lerntext": "verdaderamente",
              "de": "wirklich"
            },
            {
              "schrift": "así",
              "lerntext": "así",
              "de": "so"
            },
            {
              "schrift": "apenas",
              "lerntext": "apenas",
              "de": "kaum"
            },
            {
              "schrift": "arriba",
              "lerntext": "arriba",
              "de": "oben"
            },
            {
              "schrift": "abajo",
              "lerntext": "abajo",
              "de": "unten"
            },
            {
              "schrift": "realmente",
              "lerntext": "realmente",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "especialmente",
              "lerntext": "especialmente",
              "de": "besonders",
              "wieder": true
            },
            {
              "schrift": "generalmente",
              "lerntext": "generalmente",
              "de": "im Allgemeinen",
              "wieder": true
            },
            {
              "schrift": "normalmente",
              "lerntext": "normalmente",
              "de": "normalerweise",
              "wieder": true
            },
            {
              "schrift": "probablemente",
              "lerntext": "probablemente",
              "de": "wahrscheinlich",
              "wieder": true
            },
            {
              "schrift": "tampoco",
              "lerntext": "tampoco",
              "de": "auch nicht",
              "wieder": true
            },
            {
              "schrift": "menos",
              "lerntext": "menos",
              "de": "weniger",
              "wieder": true
            },
            {
              "schrift": "ahí",
              "lerntext": "ahí",
              "de": "da",
              "wieder": true
            },
            {
              "schrift": "incluso",
              "lerntext": "incluso",
              "de": "sogar",
              "wieder": true
            },
            {
              "schrift": "tal vez",
              "lerntext": "tal vez",
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
          "schrift": "lo hago [Slot]",
          "lerntext": "lo hago [Slot]",
          "wortarten": {
            "hago": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "adelante",
              "lerntext": "adelante",
              "de": "vorwärts"
            },
            {
              "schrift": "atrás",
              "lerntext": "atrás",
              "de": "zurück"
            },
            {
              "schrift": "luego",
              "lerntext": "luego",
              "de": "danach"
            },
            {
              "schrift": "después",
              "lerntext": "después",
              "de": "danach"
            },
            {
              "schrift": "antes",
              "lerntext": "antes",
              "de": "vorher"
            },
            {
              "schrift": "verdaderamente",
              "lerntext": "verdaderamente",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "así",
              "lerntext": "así",
              "de": "so",
              "wieder": true
            },
            {
              "schrift": "apenas",
              "lerntext": "apenas",
              "de": "kaum",
              "wieder": true
            },
            {
              "schrift": "arriba",
              "lerntext": "arriba",
              "de": "oben",
              "wieder": true
            },
            {
              "schrift": "abajo",
              "lerntext": "abajo",
              "de": "unten",
              "wieder": true
            },
            {
              "schrift": "realmente",
              "lerntext": "realmente",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "especialmente",
              "lerntext": "especialmente",
              "de": "besonders",
              "wieder": true
            },
            {
              "schrift": "generalmente",
              "lerntext": "generalmente",
              "de": "im Allgemeinen",
              "wieder": true
            },
            {
              "schrift": "normalmente",
              "lerntext": "normalmente",
              "de": "normalerweise",
              "wieder": true
            },
            {
              "schrift": "probablemente",
              "lerntext": "probablemente",
              "de": "wahrscheinlich",
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
          "schrift": "lo hago [Slot]",
          "lerntext": "lo hago [Slot]",
          "wortarten": {
            "hago": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tarde",
              "lerntext": "tarde",
              "de": "spät"
            },
            {
              "schrift": "temprano",
              "lerntext": "temprano",
              "de": "früh"
            },
            {
              "schrift": "despacio",
              "lerntext": "despacio",
              "de": "langsam"
            },
            {
              "schrift": "rápido",
              "lerntext": "rápido",
              "de": "schnell"
            },
            {
              "schrift": "casi",
              "lerntext": "casi",
              "de": "fast"
            },
            {
              "schrift": "adelante",
              "lerntext": "adelante",
              "de": "vorwärts",
              "wieder": true
            },
            {
              "schrift": "atrás",
              "lerntext": "atrás",
              "de": "zurück",
              "wieder": true
            },
            {
              "schrift": "luego",
              "lerntext": "luego",
              "de": "danach",
              "wieder": true
            },
            {
              "schrift": "después",
              "lerntext": "después",
              "de": "danach",
              "wieder": true
            },
            {
              "schrift": "antes",
              "lerntext": "antes",
              "de": "vorher",
              "wieder": true
            },
            {
              "schrift": "verdaderamente",
              "lerntext": "verdaderamente",
              "de": "wirklich",
              "wieder": true
            },
            {
              "schrift": "así",
              "lerntext": "así",
              "de": "so",
              "wieder": true
            },
            {
              "schrift": "apenas",
              "lerntext": "apenas",
              "de": "kaum",
              "wieder": true
            },
            {
              "schrift": "arriba",
              "lerntext": "arriba",
              "de": "oben",
              "wieder": true
            },
            {
              "schrift": "abajo",
              "lerntext": "abajo",
              "de": "unten",
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
          "schrift": "lo hago [Slot]",
          "lerntext": "lo hago [Slot]",
          "wortarten": {
            "hago": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tarde",
              "lerntext": "tarde",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "temprano",
              "lerntext": "temprano",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "despacio",
              "lerntext": "despacio",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "rápido",
              "lerntext": "rápido",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "casi",
              "lerntext": "casi",
              "de": "fast",
              "wieder": true
            },
            {
              "schrift": "adelante",
              "lerntext": "adelante",
              "de": "vorwärts",
              "wieder": true
            },
            {
              "schrift": "atrás",
              "lerntext": "atrás",
              "de": "zurück",
              "wieder": true
            },
            {
              "schrift": "luego",
              "lerntext": "luego",
              "de": "danach",
              "wieder": true
            },
            {
              "schrift": "después",
              "lerntext": "después",
              "de": "danach",
              "wieder": true
            },
            {
              "schrift": "antes",
              "lerntext": "antes",
              "de": "vorher",
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
          "schrift": "lo hago [Slot]",
          "lerntext": "lo hago [Slot]",
          "wortarten": {
            "hago": "v"
          }
        },
        "frameDe": "Ich mache es [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "tarde",
              "lerntext": "tarde",
              "de": "spät",
              "wieder": true
            },
            {
              "schrift": "temprano",
              "lerntext": "temprano",
              "de": "früh",
              "wieder": true
            },
            {
              "schrift": "despacio",
              "lerntext": "despacio",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "rápido",
              "lerntext": "rápido",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "casi",
              "lerntext": "casi",
              "de": "fast",
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
    "title": "Weitere Pronomen",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "es para [Slot]",
          "lerntext": "es para [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "otro / otra",
              "lerntext": "otro / otra",
              "de": "anderer",
              "c": "p"
            },
            {
              "schrift": "mismo / misma",
              "lerntext": "mismo / misma",
              "de": "derselbe",
              "c": "p"
            },
            {
              "schrift": "usted",
              "lerntext": "usted",
              "de": "Sie (Höflichkeitsform)",
              "c": "p"
            },
            {
              "schrift": "ellos / ellas",
              "lerntext": "ellos / ellas",
              "de": "sie (Plural)",
              "c": "p"
            },
            {
              "schrift": "ustedes",
              "lerntext": "ustedes",
              "de": "Sie (Plural, Höflichkeitsform)",
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
          "schrift": "es para [Slot]",
          "lerntext": "es para [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "los / las",
              "lerntext": "los / las",
              "de": "sie (Objektpronomen, Plural)",
              "c": "p"
            },
            {
              "schrift": "le / les",
              "lerntext": "le / les",
              "de": "ihm",
              "c": "p"
            },
            {
              "schrift": "su / sus",
              "lerntext": "su / sus",
              "de": "sein",
              "c": "p"
            },
            {
              "schrift": "vuestro / vuestra",
              "lerntext": "vuestro / vuestra",
              "de": "euer",
              "c": "p"
            },
            {
              "schrift": "ese / esa",
              "lerntext": "ese / esa",
              "de": "dieser",
              "c": "p"
            },
            {
              "schrift": "otro / otra",
              "lerntext": "otro / otra",
              "de": "anderer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mismo / misma",
              "lerntext": "mismo / misma",
              "de": "derselbe",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "usted",
              "lerntext": "usted",
              "de": "Sie (Höflichkeitsform)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ellos / ellas",
              "lerntext": "ellos / ellas",
              "de": "sie (Plural)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ustedes",
              "lerntext": "ustedes",
              "de": "Sie (Plural, Höflichkeitsform)",
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
          "schrift": "es para [Slot]",
          "lerntext": "es para [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "aquel / aquella",
              "lerntext": "aquel / aquella",
              "de": "jener",
              "c": "p"
            },
            {
              "schrift": "eso",
              "lerntext": "eso",
              "de": "das (neutral)",
              "c": "p"
            },
            {
              "schrift": "alguien",
              "lerntext": "alguien",
              "de": "jemand",
              "c": "p"
            },
            {
              "schrift": "nada",
              "lerntext": "nada",
              "de": "nichts",
              "c": "p"
            },
            {
              "schrift": "nadie",
              "lerntext": "nadie",
              "de": "niemand",
              "c": "p"
            },
            {
              "schrift": "los / las",
              "lerntext": "los / las",
              "de": "sie (Objektpronomen, Plural)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "le / les",
              "lerntext": "le / les",
              "de": "ihm",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "su / sus",
              "lerntext": "su / sus",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vuestro / vuestra",
              "lerntext": "vuestro / vuestra",
              "de": "euer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ese / esa",
              "lerntext": "ese / esa",
              "de": "dieser",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "otro / otra",
              "lerntext": "otro / otra",
              "de": "anderer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "mismo / misma",
              "lerntext": "mismo / misma",
              "de": "derselbe",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "usted",
              "lerntext": "usted",
              "de": "Sie (Höflichkeitsform)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ellos / ellas",
              "lerntext": "ellos / ellas",
              "de": "sie (Plural)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ustedes",
              "lerntext": "ustedes",
              "de": "Sie (Plural, Höflichkeitsform)",
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
          "schrift": "es para [Slot]",
          "lerntext": "es para [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "alguno / alguna",
              "lerntext": "alguno / alguna",
              "de": "irgendein",
              "c": "p"
            },
            {
              "schrift": "aquel / aquella",
              "lerntext": "aquel / aquella",
              "de": "jener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "eso",
              "lerntext": "eso",
              "de": "das (neutral)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "alguien",
              "lerntext": "alguien",
              "de": "jemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nada",
              "lerntext": "nada",
              "de": "nichts",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nadie",
              "lerntext": "nadie",
              "de": "niemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "los / las",
              "lerntext": "los / las",
              "de": "sie (Objektpronomen, Plural)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "le / les",
              "lerntext": "le / les",
              "de": "ihm",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "su / sus",
              "lerntext": "su / sus",
              "de": "sein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "vuestro / vuestra",
              "lerntext": "vuestro / vuestra",
              "de": "euer",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "ese / esa",
              "lerntext": "ese / esa",
              "de": "dieser",
              "c": "p",
              "wieder": true
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "19.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es para [Slot]",
          "lerntext": "es para [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "alguno / alguna",
              "lerntext": "alguno / alguna",
              "de": "irgendein",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "aquel / aquella",
              "lerntext": "aquel / aquella",
              "de": "jener",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "eso",
              "lerntext": "eso",
              "de": "das (neutral)",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "alguien",
              "lerntext": "alguien",
              "de": "jemand",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nada",
              "lerntext": "nada",
              "de": "nichts",
              "c": "p",
              "wieder": true
            },
            {
              "schrift": "nadie",
              "lerntext": "nadie",
              "de": "niemand",
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
    "title": "Weitere Präpositionen",
    "niveau": null,
    "lessons": [
      {
        "kind": "frame",
        "frame": {
          "schrift": "está [Slot] la casa",
          "lerntext": "está [Slot] la casa",
          "wortarten": {
            "está": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "para",
              "lerntext": "para",
              "de": "für"
            },
            {
              "schrift": "contra",
              "lerntext": "contra",
              "de": "gegen"
            },
            {
              "schrift": "según",
              "lerntext": "según",
              "de": "laut"
            },
            {
              "schrift": "dentro de",
              "lerntext": "dentro de",
              "de": "innerhalb von"
            },
            {
              "schrift": "fuera de",
              "lerntext": "fuera de",
              "de": "außerhalb von"
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
          "schrift": "está [Slot] la casa",
          "lerntext": "está [Slot] la casa",
          "wortarten": {
            "está": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cerca de",
              "lerntext": "cerca de",
              "de": "in der Nähe von"
            },
            {
              "schrift": "lejos de",
              "lerntext": "lejos de",
              "de": "weit weg von"
            },
            {
              "schrift": "encima de",
              "lerntext": "encima de",
              "de": "oben auf"
            },
            {
              "schrift": "para",
              "lerntext": "para",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "contra",
              "lerntext": "contra",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "según",
              "lerntext": "según",
              "de": "laut",
              "wieder": true
            },
            {
              "schrift": "dentro de",
              "lerntext": "dentro de",
              "de": "innerhalb von",
              "wieder": true
            },
            {
              "schrift": "fuera de",
              "lerntext": "fuera de",
              "de": "außerhalb von",
              "wieder": true
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "20.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "está [Slot] la casa",
          "lerntext": "está [Slot] la casa",
          "wortarten": {
            "está": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cerca de",
              "lerntext": "cerca de",
              "de": "in der Nähe von",
              "wieder": true
            },
            {
              "schrift": "lejos de",
              "lerntext": "lejos de",
              "de": "weit weg von",
              "wieder": true
            },
            {
              "schrift": "encima de",
              "lerntext": "encima de",
              "de": "oben auf",
              "wieder": true
            },
            {
              "schrift": "para",
              "lerntext": "para",
              "de": "für",
              "wieder": true
            },
            {
              "schrift": "contra",
              "lerntext": "contra",
              "de": "gegen",
              "wieder": true
            },
            {
              "schrift": "según",
              "lerntext": "según",
              "de": "laut",
              "wieder": true
            },
            {
              "schrift": "dentro de",
              "lerntext": "dentro de",
              "de": "innerhalb von",
              "wieder": true
            },
            {
              "schrift": "fuera de",
              "lerntext": "fuera de",
              "de": "außerhalb von",
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
          "schrift": "está [Slot] la casa",
          "lerntext": "está [Slot] la casa",
          "wortarten": {
            "está": "v",
            "casa": "n"
          }
        },
        "frameDe": "Es ist [Slot] dem Haus.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cerca de",
              "lerntext": "cerca de",
              "de": "in der Nähe von",
              "wieder": true
            },
            {
              "schrift": "lejos de",
              "lerntext": "lejos de",
              "de": "weit weg von",
              "wieder": true
            },
            {
              "schrift": "encima de",
              "lerntext": "encima de",
              "de": "oben auf",
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
              "schrift": "doscientos / doscientas",
              "lerntext": "doscientos / doscientas",
              "de": "zweihundert"
            },
            {
              "schrift": "millón",
              "lerntext": "millón",
              "de": "Million"
            },
            {
              "schrift": "último / última",
              "lerntext": "último / última",
              "de": "letzter"
            },
            {
              "schrift": "medio / media",
              "lerntext": "medio / media",
              "de": "halb"
            },
            {
              "schrift": "mucho / mucha",
              "lerntext": "mucho / mucha",
              "de": "viel"
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
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "poco / poca",
              "lerntext": "poco / poca",
              "de": "wenig"
            },
            {
              "schrift": "varios / varias",
              "lerntext": "varios / varias",
              "de": "mehrere"
            },
            {
              "schrift": "doscientos / doscientas",
              "lerntext": "doscientos / doscientas",
              "de": "zweihundert",
              "wieder": true
            },
            {
              "schrift": "millón",
              "lerntext": "millón",
              "de": "Million",
              "wieder": true
            },
            {
              "schrift": "último / última",
              "lerntext": "último / última",
              "de": "letzter",
              "wieder": true
            },
            {
              "schrift": "medio / media",
              "lerntext": "medio / media",
              "de": "halb",
              "wieder": true
            },
            {
              "schrift": "mucho / mucha",
              "lerntext": "mucho / mucha",
              "de": "viel",
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
          "schrift": "[Slot]",
          "lerntext": "[Slot]"
        },
        "frameDe": "[Slot]",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "poco / poca",
              "lerntext": "poco / poca",
              "de": "wenig",
              "wieder": true
            },
            {
              "schrift": "varios / varias",
              "lerntext": "varios / varias",
              "de": "mehrere",
              "wieder": true
            },
            {
              "schrift": "doscientos / doscientas",
              "lerntext": "doscientos / doscientas",
              "de": "zweihundert",
              "wieder": true
            },
            {
              "schrift": "millón",
              "lerntext": "millón",
              "de": "Million",
              "wieder": true
            },
            {
              "schrift": "último / última",
              "lerntext": "último / última",
              "de": "letzter",
              "wieder": true
            },
            {
              "schrift": "medio / media",
              "lerntext": "medio / media",
              "de": "halb",
              "wieder": true
            },
            {
              "schrift": "mucho / mucha",
              "lerntext": "mucho / mucha",
              "de": "viel",
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
          "schrift": "vengo [Slot] puedo",
          "lerntext": "vengo [Slot] puedo",
          "wortarten": {
            "vengo": "v",
            "puedo": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mientras",
              "lerntext": "mientras",
              "de": "während",
              "c": "k"
            },
            {
              "schrift": "además",
              "lerntext": "además",
              "de": "außerdem",
              "c": "k"
            },
            {
              "schrift": "sin embargo",
              "lerntext": "sin embargo",
              "de": "trotzdem",
              "c": "k"
            },
            {
              "schrift": "por eso",
              "lerntext": "por eso",
              "de": "deshalb",
              "c": "k"
            },
            {
              "schrift": "así que",
              "lerntext": "así que",
              "de": "also",
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
          "schrift": "vengo [Slot] puedo",
          "lerntext": "vengo [Slot] puedo",
          "wortarten": {
            "vengo": "v",
            "puedo": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "noch",
              "c": "k"
            },
            {
              "schrift": "mientras",
              "lerntext": "mientras",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "además",
              "lerntext": "además",
              "de": "außerdem",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "sin embargo",
              "lerntext": "sin embargo",
              "de": "trotzdem",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "por eso",
              "lerntext": "por eso",
              "de": "deshalb",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "así que",
              "lerntext": "así que",
              "de": "also",
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
          "schrift": "vengo [Slot] puedo",
          "lerntext": "vengo [Slot] puedo",
          "wortarten": {
            "vengo": "v",
            "puedo": "v"
          }
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "noch",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "mientras",
              "lerntext": "mientras",
              "de": "während",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "además",
              "lerntext": "además",
              "de": "außerdem",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "sin embargo",
              "lerntext": "sin embargo",
              "de": "trotzdem",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "por eso",
              "lerntext": "por eso",
              "de": "deshalb",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "así que",
              "lerntext": "así que",
              "de": "also",
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
          "schrift": "¿[Slot] es?",
          "lerntext": "¿[Slot] es?",
          "wortarten": {
            "es?": "v"
          }
        },
        "frameDe": "[Slot] ist es?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "quién",
              "lerntext": "quién",
              "de": "wer"
            },
            {
              "schrift": "cuál",
              "lerntext": "cuál",
              "de": "welcher"
            },
            {
              "schrift": "para qué",
              "lerntext": "para qué",
              "de": "wofür"
            },
            {
              "schrift": "cuánto / cuánta",
              "lerntext": "cuánto / cuánta",
              "de": "wie viel"
            },
            {
              "schrift": "cuántos / cuántas",
              "lerntext": "cuántos / cuántas",
              "de": "wie viele"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "23.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "¿[Slot] es?",
          "lerntext": "¿[Slot] es?",
          "wortarten": {
            "es?": "v"
          }
        },
        "frameDe": "[Slot] ist es?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "quién",
              "lerntext": "quién",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "cuál",
              "lerntext": "cuál",
              "de": "welcher",
              "wieder": true
            },
            {
              "schrift": "para qué",
              "lerntext": "para qué",
              "de": "wofür",
              "wieder": true
            },
            {
              "schrift": "cuánto / cuánta",
              "lerntext": "cuánto / cuánta",
              "de": "wie viel",
              "wieder": true
            },
            {
              "schrift": "cuántos / cuántas",
              "lerntext": "cuántos / cuántas",
              "de": "wie viele",
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
          "schrift": "¿[Slot] es?",
          "lerntext": "¿[Slot] es?",
          "wortarten": {
            "es?": "v"
          }
        },
        "frameDe": "[Slot] ist es?",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "quién",
              "lerntext": "quién",
              "de": "wer",
              "wieder": true
            },
            {
              "schrift": "cuál",
              "lerntext": "cuál",
              "de": "welcher",
              "wieder": true
            },
            {
              "schrift": "para qué",
              "lerntext": "para qué",
              "de": "wofür",
              "wieder": true
            },
            {
              "schrift": "cuánto / cuánta",
              "lerntext": "cuánto / cuánta",
              "de": "wie viel",
              "wieder": true
            },
            {
              "schrift": "cuántos / cuántas",
              "lerntext": "cuántos / cuántas",
              "de": "wie viele",
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
              "schrift": "el / la / los / las",
              "lerntext": "el / la / los / las",
              "de": "der"
            },
            {
              "schrift": "un / una",
              "lerntext": "un / una",
              "de": "ein"
            },
            {
              "schrift": "unos / unas",
              "lerntext": "unos / unas",
              "de": "einige"
            },
            {
              "schrift": "al",
              "lerntext": "al",
              "de": "an dem"
            },
            {
              "schrift": "del",
              "lerntext": "del",
              "de": "von dem"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "24.1"
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
              "schrift": "el / la / los / las",
              "lerntext": "el / la / los / las",
              "de": "der",
              "wieder": true
            },
            {
              "schrift": "un / una",
              "lerntext": "un / una",
              "de": "ein",
              "wieder": true
            },
            {
              "schrift": "unos / unas",
              "lerntext": "unos / unas",
              "de": "einige",
              "wieder": true
            },
            {
              "schrift": "al",
              "lerntext": "al",
              "de": "an dem",
              "wieder": true
            },
            {
              "schrift": "del",
              "lerntext": "del",
              "de": "von dem",
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
              "schrift": "el / la / los / las",
              "lerntext": "el / la / los / las",
              "de": "der",
              "wieder": true
            },
            {
              "schrift": "un / una",
              "lerntext": "un / una",
              "de": "ein",
              "wieder": true
            },
            {
              "schrift": "unos / unas",
              "lerntext": "unos / unas",
              "de": "einige",
              "wieder": true
            },
            {
              "schrift": "al",
              "lerntext": "al",
              "de": "an dem",
              "wieder": true
            },
            {
              "schrift": "del",
              "lerntext": "del",
              "de": "von dem",
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
        "id": "24.4"
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
          "schrift": "yo he [Slot]",
          "lerntext": "yo he [Slot]",
          "wortarten": {
            "yo": "p"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mirado",
              "lerntext": "mirado",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "comprado",
              "lerntext": "comprado",
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
              "schrift": "hecho",
              "lerntext": "hecho",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "encontrado",
              "lerntext": "encontrado",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "tomado",
              "lerntext": "tomado",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leído",
              "lerntext": "leído",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escrito",
              "lerntext": "escrito",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "oído",
              "lerntext": "oído",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perdido",
              "lerntext": "perdido",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "enviado",
              "lerntext": "enviado",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiado",
              "lerntext": "cambiado",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendido",
              "lerntext": "entendido",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavado",
              "lerntext": "lavado",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendido",
              "lerntext": "vendido",
              "de": "verkaufen",
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
          "schrift": "yo he [Slot]",
          "lerntext": "yo he [Slot]",
          "wortarten": {
            "yo": "p"
          }
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tomado",
              "lerntext": "tomado",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "leído",
              "lerntext": "leído",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "escrito",
              "lerntext": "escrito",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "oído",
              "lerntext": "oído",
              "de": "hören",
              "c": "v"
            },
            {
              "schrift": "perdido",
              "lerntext": "perdido",
              "de": "verlieren",
              "c": "v"
            },
            {
              "schrift": "mirado",
              "lerntext": "mirado",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprado",
              "lerntext": "comprado",
              "de": "kaufen",
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
              "schrift": "hecho",
              "lerntext": "hecho",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "encontrado",
              "lerntext": "encontrado",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "enviado",
              "lerntext": "enviado",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiado",
              "lerntext": "cambiado",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendido",
              "lerntext": "entendido",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ayudado",
              "lerntext": "ayudado",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vivido",
              "lerntext": "vivido",
              "de": "leben",
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
          "schrift": "ayer he [Slot]",
          "lerntext": "ayer he [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabajado",
              "lerntext": "trabajado",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "jugado",
              "lerntext": "jugado",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "bailado",
              "lerntext": "bailado",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "dormido",
              "lerntext": "dormido",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "esperado",
              "lerntext": "esperado",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "buscado",
              "lerntext": "buscado",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "preguntado",
              "lerntext": "preguntado",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pagado",
              "lerntext": "pagado",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ayudado",
              "lerntext": "ayudado",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "enviado",
              "lerntext": "enviado",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiado",
              "lerntext": "cambiado",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "reído",
              "lerntext": "reído",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "necesitado",
              "lerntext": "necesitado",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sabido",
              "lerntext": "sabido",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "puesto",
              "lerntext": "puesto",
              "de": "stellen",
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
          "schrift": "ayer he [Slot]",
          "lerntext": "ayer he [Slot]"
        },
        "frameDe": "Gestern habe ich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscado",
              "lerntext": "buscado",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "preguntado",
              "lerntext": "preguntado",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "ayudado",
              "lerntext": "ayudado",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "pagado",
              "lerntext": "pagado",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "trabajado",
              "lerntext": "trabajado",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bailado",
              "lerntext": "bailado",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dormido",
              "lerntext": "dormido",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "jugado",
              "lerntext": "jugado",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "esperado",
              "lerntext": "esperado",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "enviado",
              "lerntext": "enviado",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dado",
              "lerntext": "dado",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comido",
              "lerntext": "comido",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usado",
              "lerntext": "usado",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comenzado",
              "lerntext": "comenzado",
              "de": "beginnen",
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
          "schrift": "ya he [Slot]",
          "lerntext": "ya he [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ganado",
              "lerntext": "ganado",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "entendido",
              "lerntext": "entendido",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "dado",
              "lerntext": "dado",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "dicho",
              "lerntext": "dicho",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "hablado",
              "lerntext": "hablado",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "cerrado",
              "lerntext": "cerrado",
              "de": "schließen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "abierto",
              "lerntext": "abierto",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavado",
              "lerntext": "lavado",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "muerto",
              "lerntext": "muerto",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "quedado",
              "lerntext": "quedado",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "podido",
              "lerntext": "podido",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "debido",
              "lerntext": "debido",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiado",
              "lerntext": "cambiado",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escuchado",
              "lerntext": "escuchado",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentido",
              "lerntext": "sentido",
              "de": "fühlen",
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
          "schrift": "ya he [Slot]",
          "lerntext": "ya he [Slot]"
        },
        "frameDe": "Ich habe schon [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abierto",
              "lerntext": "abierto",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "cerrado",
              "lerntext": "cerrado",
              "de": "schließen",
              "c": "v"
            },
            {
              "schrift": "lavado",
              "lerntext": "lavado",
              "de": "waschen",
              "c": "v"
            },
            {
              "schrift": "ganado",
              "lerntext": "ganado",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendido",
              "lerntext": "entendido",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dicho",
              "lerntext": "dicho",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hablado",
              "lerntext": "hablado",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dado",
              "lerntext": "dado",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conseguido",
              "lerntext": "conseguido",
              "de": "erreichen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llamado",
              "lerntext": "llamado",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venido",
              "lerntext": "venido",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensado",
              "lerntext": "pensado",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "limpiado",
              "lerntext": "limpiado",
              "de": "putzen",
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
          "schrift": "tú [Slot]",
          "lerntext": "tú [Slot]",
          "wortarten": {
            "tú": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "miras",
              "lerntext": "miras",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "compras",
              "lerntext": "compras",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "ves",
              "lerntext": "ves",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "haces",
              "lerntext": "haces",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "encuentras",
              "lerntext": "encuentras",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "tomas",
              "lerntext": "tomas",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lees",
              "lerntext": "lees",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escribes",
              "lerntext": "escribes",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vas",
              "lerntext": "vas",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "creas",
              "lerntext": "creas",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "explicas",
              "lerntext": "explicas",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "te duchas",
              "lerntext": "te duchas",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viajas",
              "lerntext": "viajas",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crees",
              "lerntext": "crees",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dejas",
              "lerntext": "dejas",
              "de": "lassen",
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
          "schrift": "tú [Slot]",
          "lerntext": "tú [Slot]",
          "wortarten": {
            "tú": "p"
          }
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tomas",
              "lerntext": "tomas",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "lees",
              "lerntext": "lees",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "escribes",
              "lerntext": "escribes",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "miras",
              "lerntext": "miras",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "compras",
              "lerntext": "compras",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ves",
              "lerntext": "ves",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "haces",
              "lerntext": "haces",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "encuentras",
              "lerntext": "encuentras",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "caminas",
              "lerntext": "caminas",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envías",
              "lerntext": "envías",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lloras",
              "lerntext": "lloras",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vendes",
              "lerntext": "vendes",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vives",
              "lerntext": "vives",
              "de": "leben",
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
          "schrift": "él [Slot]",
          "lerntext": "él [Slot]",
          "wortarten": {
            "él": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabaja",
              "lerntext": "trabaja",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "juega",
              "lerntext": "juega",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "baila",
              "lerntext": "baila",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "duerme",
              "lerntext": "duerme",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "espera",
              "lerntext": "espera",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "busca",
              "lerntext": "busca",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ríe",
              "lerntext": "ríe",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "necesita",
              "lerntext": "necesita",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sabe",
              "lerntext": "sabe",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pone",
              "lerntext": "pone",
              "de": "stellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "come",
              "lerntext": "come",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usa",
              "lerntext": "usa",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comienza",
              "lerntext": "comienza",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "muere",
              "lerntext": "muere",
              "de": "sterben",
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
          "schrift": "él [Slot]",
          "lerntext": "él [Slot]",
          "wortarten": {
            "él": "p"
          }
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "busca",
              "lerntext": "busca",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "trabaja",
              "lerntext": "trabaja",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "baila",
              "lerntext": "baila",
              "de": "tanzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "duerme",
              "lerntext": "duerme",
              "de": "schlafen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "juega",
              "lerntext": "juega",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "espera",
              "lerntext": "espera",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "queda",
              "lerntext": "queda",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "puede",
              "lerntext": "puede",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "debe",
              "lerntext": "debe",
              "de": "sollen",
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
              "schrift": "escucha",
              "lerntext": "escucha",
              "de": "zuhören",
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
          "schrift": "nosotros / nosotras [Slot]",
          "lerntext": "nosotros / nosotras [Slot]",
          "wortarten": {
            "nosotros": "p",
            "nosotras": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ganamos",
              "lerntext": "ganamos",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "entendemos",
              "lerntext": "entendemos",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "damos",
              "lerntext": "damos",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "decimos",
              "lerntext": "decimos",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "hablamos",
              "lerntext": "hablamos",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "abrimos",
              "lerntext": "abrimos",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "sentimos",
              "lerntext": "sentimos",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conseguimos",
              "lerntext": "conseguimos",
              "de": "erreichen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llamamos",
              "lerntext": "llamamos",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venimos",
              "lerntext": "venimos",
              "de": "kommen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensamos",
              "lerntext": "pensamos",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "limpiamos",
              "lerntext": "limpiamos",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vamos",
              "lerntext": "vamos",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "creamos",
              "lerntext": "creamos",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "explicamos",
              "lerntext": "explicamos",
              "de": "erklären",
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
          "schrift": "nosotros / nosotras [Slot]",
          "lerntext": "nosotros / nosotras [Slot]",
          "wortarten": {
            "nosotros": "p",
            "nosotras": "p"
          }
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrimos",
              "lerntext": "abrimos",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "ganamos",
              "lerntext": "ganamos",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entendemos",
              "lerntext": "entendemos",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "decimos",
              "lerntext": "decimos",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hablamos",
              "lerntext": "hablamos",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "damos",
              "lerntext": "damos",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "nos duchamos",
              "lerntext": "nos duchamos",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viajamos",
              "lerntext": "viajamos",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "creemos",
              "lerntext": "creemos",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dejamos",
              "lerntext": "dejamos",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "caminamos",
              "lerntext": "caminamos",
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
          "schrift": "ella [Slot]",
          "lerntext": "ella [Slot]",
          "wortarten": {
            "ella": "p"
          }
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viven",
              "lerntext": "viven",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "quedan",
              "lerntext": "quedan",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "ríen",
              "lerntext": "ríen",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "lloran",
              "lerntext": "lloran",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "piensan",
              "lerntext": "piensan",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "creen",
              "lerntext": "creen",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "necesitan",
              "lerntext": "necesitan",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "esperan",
              "lerntext": "esperan",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "envían",
              "lerntext": "envían",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tienen",
              "lerntext": "tienen",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venden",
              "lerntext": "venden",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saben",
              "lerntext": "saben",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ponen",
              "lerntext": "ponen",
              "de": "stellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comen",
              "lerntext": "comen",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usan",
              "lerntext": "usan",
              "de": "benutzen",
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
          "schrift": "ella [Slot]",
          "lerntext": "ella [Slot]",
          "wortarten": {
            "ella": "p"
          }
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "creen",
              "lerntext": "creen",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "esperan",
              "lerntext": "esperan",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "necesitan",
              "lerntext": "necesitan",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "viven",
              "lerntext": "viven",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "quedan",
              "lerntext": "quedan",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ríen",
              "lerntext": "ríen",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lloran",
              "lerntext": "lloran",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piensan",
              "lerntext": "piensan",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comienzan",
              "lerntext": "comienzan",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "mueren",
              "lerntext": "mueren",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pueden",
              "lerntext": "pueden",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "deben",
              "lerntext": "deben",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambian",
              "lerntext": "cambian",
              "de": "ändern",
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
          "schrift": "es más [Slot]",
          "lerntext": "es más [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant",
              "c": "a"
            },
            {
              "schrift": "difícil",
              "lerntext": "difícil",
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
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
              "c": "a"
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
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
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "más",
            "lerntext": "más",
            "de": "mehr"
          }
        ],
        "id": "27.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es más [Slot]",
          "lerntext": "es más [Slot]",
          "wortarten": {
            "es": "v"
          }
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
              "c": "a"
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
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
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig",
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
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
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
          "schrift": "soy tan [Slot] como tú",
          "lerntext": "soy tan [Slot] como tú",
          "wortarten": {
            "soy": "v",
            "tú": "p"
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
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "cuando",
            "lerntext": "cuando",
            "de": "wenn",
            "c": "k"
          }
        ],
        "id": "27.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "soy tan [Slot] como tú",
          "lerntext": "soy tan [Slot] como tú",
          "wortarten": {
            "soy": "v",
            "tú": "p"
          }
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a"
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "c": "a"
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
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
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
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
          "schrift": "yo me siento [Slot]",
          "lerntext": "yo me siento [Slot]",
          "wortarten": {
            "yo": "p",
            "me": "p",
            "siento": "v"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
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
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "c": "a"
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
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
          "schrift": "yo me siento [Slot]",
          "lerntext": "yo me siento [Slot]",
          "wortarten": {
            "yo": "p",
            "me": "p",
            "siento": "v"
          }
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a"
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
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
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
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
          "schrift": "nosotros / nosotras nos vemos [Slot]",
          "lerntext": "nosotros / nosotras nos vemos [Slot]",
          "wortarten": {
            "nosotros": "p",
            "nosotras": "p",
            "nos": "p",
            "vemos": "v"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hoy",
              "lerntext": "hoy",
              "de": "heute"
            },
            {
              "schrift": "mañana",
              "lerntext": "mañana",
              "de": "morgen"
            },
            {
              "schrift": "ahora",
              "lerntext": "ahora",
              "de": "jetzt"
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bald"
            },
            {
              "schrift": "ayer",
              "lerntext": "ayer",
              "de": "gestern"
            },
            {
              "schrift": "siempre",
              "lerntext": "siempre",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "nunca",
              "lerntext": "nunca",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "también",
              "lerntext": "también",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "bastante",
              "lerntext": "bastante",
              "de": "ziemlich",
              "wieder": true
            },
            {
              "schrift": "allí",
              "lerntext": "allí",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "todavía",
              "lerntext": "todavía",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "más",
              "lerntext": "más",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "quizás",
              "lerntext": "quizás",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "sí",
              "lerntext": "sí",
              "de": "ja",
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
          "schrift": "nosotros / nosotras nos vemos [Slot]",
          "lerntext": "nosotros / nosotras nos vemos [Slot]",
          "wortarten": {
            "nosotros": "p",
            "nosotras": "p",
            "nos": "p",
            "vemos": "v"
          }
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nunca",
              "lerntext": "nunca",
              "de": "nie"
            },
            {
              "schrift": "siempre",
              "lerntext": "siempre",
              "de": "immer"
            },
            {
              "schrift": "hoy",
              "lerntext": "hoy",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "ahora",
              "lerntext": "ahora",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "ayer",
              "lerntext": "ayer",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "mañana",
              "lerntext": "mañana",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "también",
              "lerntext": "también",
              "de": "auch",
              "wieder": true
            },
            {
              "schrift": "bastante",
              "lerntext": "bastante",
              "de": "ziemlich",
              "wieder": true
            },
            {
              "schrift": "mal",
              "lerntext": "mal",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "allí",
              "lerntext": "allí",
              "de": "dort",
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
          "schrift": "me quedo aquí [Slot] estoy cansado",
          "lerntext": "me quedo aquí [Slot] estoy cansado",
          "wortarten": {
            "me": "p",
            "quedo": "v",
            "estoy": "v",
            "cansado": "a"
          }
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "porque",
              "lerntext": "porque",
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
              "schrift": "aunque",
              "lerntext": "aunque",
              "de": "obwohl",
              "c": "k"
            },
            {
              "schrift": "cuando",
              "lerntext": "cuando",
              "de": "wenn",
              "c": "k"
            },
            {
              "schrift": "pero",
              "lerntext": "pero",
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
              "schrift": "y",
              "lerntext": "y",
              "de": "und",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "entonces",
              "lerntext": "entonces",
              "de": "also",
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
          "schrift": "me quedo aquí [Slot] estoy cansado",
          "lerntext": "me quedo aquí [Slot] estoy cansado",
          "wortarten": {
            "me": "p",
            "quedo": "v",
            "estoy": "v",
            "cansado": "a"
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
              "schrift": "y",
              "lerntext": "y",
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
              "schrift": "cuando",
              "lerntext": "cuando",
              "de": "wenn",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "aunque",
              "lerntext": "aunque",
              "de": "obwohl",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "pero",
              "lerntext": "pero",
              "de": "aber",
              "c": "k",
              "wieder": true
            },
            {
              "schrift": "entonces",
              "lerntext": "entonces",
              "de": "also",
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
          "schrift": "creo que es [Slot]",
          "lerntext": "creo que es [Slot]",
          "wortarten": {
            "creo": "v",
            "es": "v"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
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
            "de": "der",
            "c": "p"
          }
        ],
        "id": "29.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "creo que es [Slot]",
          "lerntext": "creo que es [Slot]",
          "wortarten": {
            "creo": "v",
            "es": "v"
          }
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
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
          "schrift": "si tengo tiempo, quiero [Slot]",
          "lerntext": "si tengo tiempo, quiero [Slot]",
          "wortarten": {
            "si": "k",
            "tengo": "v",
            "tiempo,": "n",
            "quiero": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
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
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
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
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
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
          "schrift": "si tengo tiempo, quiero [Slot]",
          "lerntext": "si tengo tiempo, quiero [Slot]",
          "wortarten": {
            "si": "k",
            "tengo": "v",
            "tiempo,": "n",
            "quiero": "v"
          }
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
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
          "schrift": "¿puedes [Slot], por favor?",
          "lerntext": "¿puedes [Slot], por favor?",
          "wortarten": {
            "¿puedes": "v"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
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
          "schrift": "¿puedes [Slot], por favor?",
          "lerntext": "¿puedes [Slot], por favor?",
          "wortarten": {
            "¿puedes": "v"
          }
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "c": "v"
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "c": "v"
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
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
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
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
          "schrift": "tú tienes que [Slot]",
          "lerntext": "tú tienes que [Slot]",
          "wortarten": {
            "tú": "p",
            "tienes": "v"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
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
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
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
          "schrift": "tú tienes que [Slot]",
          "lerntext": "tú tienes que [Slot]",
          "wortarten": {
            "tú": "p",
            "tienes": "v"
          }
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
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
          "schrift": "yo doy el libro a [Slot]",
          "lerntext": "yo doy el libro a [Slot]",
          "wortarten": {
            "yo": "p",
            "doy": "v",
            "libro": "n"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
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
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
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
          "schrift": "yo doy el libro a [Slot]",
          "lerntext": "yo doy el libro a [Slot]",
          "wortarten": {
            "yo": "p",
            "doy": "v",
            "libro": "n"
          }
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
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
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
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
          "schrift": "yo enseño la ciudad a [Slot]",
          "lerntext": "yo enseño la ciudad a [Slot]",
          "wortarten": {
            "yo": "p",
            "ciudad": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
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
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
              "c": "n"
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "c": "n"
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
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
          "schrift": "yo enseño la ciudad a [Slot]",
          "lerntext": "yo enseño la ciudad a [Slot]",
          "wortarten": {
            "yo": "p",
            "ciudad": "n"
          }
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "c": "n"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
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
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
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
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
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
          "schrift": "yo quiero un vaso de [Slot]",
          "lerntext": "yo quiero un vaso de [Slot]",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
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
          "schrift": "nosotros / nosotras tenemos suficiente [Slot]",
          "lerntext": "nosotros / nosotras tenemos suficiente [Slot]",
          "wortarten": {
            "nosotros": "p",
            "nosotras": "p",
            "tenemos": "v"
          }
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "c": "n"
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "c": "n"
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dolor",
              "lerntext": "dolor",
              "de": "Schmerz",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "bastante",
            "lerntext": "bastante",
            "de": "ziemlich"
          }
        ],
        "id": "32.2"
      },
      {
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
        "id": "32.3"
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
          "schrift": "yo espero desde hace una [Slot]",
          "lerntext": "yo espero desde hace una [Slot]",
          "wortarten": {
            "yo": "p",
            "espero": "v",
            "hace": "v"
          }
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hora",
              "lerntext": "hora",
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
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "c": "n"
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "c": "n"
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
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
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "c": "n",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "desde",
            "lerntext": "desde",
            "de": "seit"
          }
        ],
        "id": "33.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo espero desde hace una [Slot]",
          "lerntext": "yo espero desde hace una [Slot]",
          "wortarten": {
            "yo": "p",
            "espero": "v",
            "hace": "v"
          }
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "c": "n"
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
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
          "schrift": "[Slot] voy a casa",
          "lerntext": "[Slot] voy a casa",
          "wortarten": {
            "voy": "v",
            "casa": "n"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hoy",
              "lerntext": "hoy",
              "de": "heute"
            },
            {
              "schrift": "mañana",
              "lerntext": "mañana",
              "de": "morgen"
            },
            {
              "schrift": "ahora",
              "lerntext": "ahora",
              "de": "jetzt"
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bald"
            },
            {
              "schrift": "ayer",
              "lerntext": "ayer",
              "de": "gestern"
            },
            {
              "schrift": "siempre",
              "lerntext": "siempre",
              "de": "immer",
              "wieder": true
            },
            {
              "schrift": "nunca",
              "lerntext": "nunca",
              "de": "nie",
              "wieder": true
            },
            {
              "schrift": "muy",
              "lerntext": "muy",
              "de": "sehr",
              "wieder": true
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "todavía",
              "lerntext": "todavía",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "más",
              "lerntext": "más",
              "de": "mehr",
              "wieder": true
            },
            {
              "schrift": "quizás",
              "lerntext": "quizás",
              "de": "vielleicht",
              "wieder": true
            },
            {
              "schrift": "sí",
              "lerntext": "sí",
              "de": "ja",
              "wieder": true
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur",
              "wieder": true
            },
            {
              "schrift": "también",
              "lerntext": "también",
              "de": "auch",
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
          "schrift": "[Slot] voy a casa",
          "lerntext": "[Slot] voy a casa",
          "wortarten": {
            "voy": "v",
            "casa": "n"
          }
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nunca",
              "lerntext": "nunca",
              "de": "nie"
            },
            {
              "schrift": "siempre",
              "lerntext": "siempre",
              "de": "immer"
            },
            {
              "schrift": "hoy",
              "lerntext": "hoy",
              "de": "heute",
              "wieder": true
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bald",
              "wieder": true
            },
            {
              "schrift": "ahora",
              "lerntext": "ahora",
              "de": "jetzt",
              "wieder": true
            },
            {
              "schrift": "ayer",
              "lerntext": "ayer",
              "de": "gestern",
              "wieder": true
            },
            {
              "schrift": "mañana",
              "lerntext": "mañana",
              "de": "morgen",
              "wieder": true
            },
            {
              "schrift": "mal",
              "lerntext": "mal",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "ya",
              "lerntext": "ya",
              "de": "schon",
              "wieder": true
            },
            {
              "schrift": "allí",
              "lerntext": "allí",
              "de": "dort",
              "wieder": true
            },
            {
              "schrift": "muy",
              "lerntext": "muy",
              "de": "sehr",
              "wieder": true
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut",
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
          "schrift": "yo me gustaría [Slot]",
          "lerntext": "yo me gustaría [Slot]",
          "wortarten": {
            "yo": "p",
            "me": "p"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
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
          "schrift": "yo me gustaría [Slot]",
          "lerntext": "yo me gustaría [Slot]",
          "wortarten": {
            "yo": "p",
            "me": "p"
          }
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
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
          "schrift": "¿podría darme [Slot]?",
          "lerntext": "¿podría darme [Slot]?"
        },
        "frameDe": "Könnten Sie mir [Slot] geben?",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "c": "n"
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch",
              "c": "n"
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
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
          "schrift": "yo pienso que es [Slot]",
          "lerntext": "yo pienso que es [Slot]",
          "wortarten": {
            "yo": "p",
            "pienso": "v",
            "es": "v"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
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
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "c": "a"
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a"
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a"
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a"
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
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
          "schrift": "yo pienso que es [Slot]",
          "lerntext": "yo pienso que es [Slot]",
          "wortarten": {
            "yo": "p",
            "pienso": "v",
            "es": "v"
          }
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "c": "a"
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "c": "a"
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "c": "a"
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "c": "a"
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
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
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
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
          "schrift": "yo lo encuentro muy [Slot]",
          "lerntext": "yo lo encuentro muy [Slot]",
          "wortarten": {
            "yo": "p",
            "encuentro": "v"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "c": "a"
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a"
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a"
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a"
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
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
            "schrift": "lo",
            "lerntext": "lo",
            "de": "das (neutraler Artikel, z.B. 'lo importante')"
          }
        ],
        "id": "35.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo lo encuentro muy [Slot]",
          "lerntext": "yo lo encuentro muy [Slot]",
          "wortarten": {
            "yo": "p",
            "encuentro": "v"
          }
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "c": "a"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "c": "a"
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "c": "a",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
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
          "schrift": "mañana voy a [Slot]",
          "lerntext": "mañana voy a [Slot]",
          "wortarten": {
            "voy": "v"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "c": "v"
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen",
              "c": "v"
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "c": "v"
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
              "c": "v"
            },
            {
              "schrift": "encontrar",
              "lerntext": "encontrar",
              "de": "finden",
              "c": "v"
            },
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
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
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
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
          "schrift": "mañana voy a [Slot]",
          "lerntext": "mañana voy a [Slot]",
          "wortarten": {
            "voy": "v"
          }
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "c": "v"
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
              "c": "v"
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "c": "v"
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "encontrar",
              "lerntext": "encontrar",
              "de": "finden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
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
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
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
          "schrift": "yo quiero [Slot] pronto",
          "lerntext": "yo quiero [Slot] pronto",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
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
          "schrift": "yo quiero [Slot] pronto",
          "lerntext": "yo quiero [Slot] pronto",
          "wortarten": {
            "yo": "p",
            "quiero": "v"
          }
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
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
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
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
          "schrift": "este es el hombre que [Slot]",
          "lerntext": "este es el hombre que [Slot]",
          "wortarten": {
            "este": "p",
            "es": "v",
            "hombre": "n"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vive",
              "lerntext": "vive",
              "de": "leben",
              "c": "v"
            },
            {
              "schrift": "queda",
              "lerntext": "queda",
              "de": "bleiben",
              "c": "v"
            },
            {
              "schrift": "ríe",
              "lerntext": "ríe",
              "de": "lachen",
              "c": "v"
            },
            {
              "schrift": "llora",
              "lerntext": "llora",
              "de": "weinen",
              "c": "v"
            },
            {
              "schrift": "piensa",
              "lerntext": "piensa",
              "de": "denken",
              "c": "v"
            },
            {
              "schrift": "cree",
              "lerntext": "cree",
              "de": "glauben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "necesita",
              "lerntext": "necesita",
              "de": "brauchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "espera",
              "lerntext": "espera",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comienza",
              "lerntext": "comienza",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "pierde",
              "lerntext": "pierde",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "muere",
              "lerntext": "muere",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "puede",
              "lerntext": "puede",
              "de": "können",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "debe",
              "lerntext": "debe",
              "de": "sollen",
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
              "schrift": "escucha",
              "lerntext": "escucha",
              "de": "zuhören",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "hombre",
            "lerntext": "hombre",
            "de": "Mann",
            "c": "n"
          }
        ],
        "id": "37.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "este es el hombre que [Slot]",
          "lerntext": "este es el hombre que [Slot]",
          "wortarten": {
            "este": "p",
            "es": "v",
            "hombre": "n"
          }
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cree",
              "lerntext": "cree",
              "de": "glauben",
              "c": "v"
            },
            {
              "schrift": "espera",
              "lerntext": "espera",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "necesita",
              "lerntext": "necesita",
              "de": "brauchen",
              "c": "v"
            },
            {
              "schrift": "vive",
              "lerntext": "vive",
              "de": "leben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "queda",
              "lerntext": "queda",
              "de": "bleiben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ríe",
              "lerntext": "ríe",
              "de": "lachen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llora",
              "lerntext": "llora",
              "de": "weinen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "piensa",
              "lerntext": "piensa",
              "de": "denken",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "siente",
              "lerntext": "siente",
              "de": "fühlen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "consigue",
              "lerntext": "consigue",
              "de": "erreichen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "llama",
              "lerntext": "llama",
              "de": "rufen",
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
              "schrift": "cierra",
              "lerntext": "cierra",
              "de": "schließen",
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
          "schrift": "busco un sitio donde se puede [Slot]",
          "lerntext": "busco un sitio donde se puede [Slot]",
          "wortarten": {
            "busco": "v",
            "puede": "v"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "c": "v"
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v"
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "c": "v"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "c": "v"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v"
            },
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "c": "v",
              "wieder": true
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "dónde",
            "lerntext": "dónde",
            "de": "wo"
          },
          {
            "schrift": "se",
            "lerntext": "se",
            "de": "sich",
            "c": "p"
          }
        ],
        "id": "37.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "busco un sitio donde se puede [Slot]",
          "lerntext": "busco un sitio donde se puede [Slot]",
          "wortarten": {
            "busco": "v",
            "puede": "v"
          }
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "c": "v"
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "c": "v"
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
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
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
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
          "schrift": "ayer estuve en [Slot]",
          "lerntext": "ayer estuve en [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
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
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n"
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "c": "n"
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "c": "n"
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hombre",
              "lerntext": "hombre",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
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
          "schrift": "ayer estuve en [Slot]",
          "lerntext": "ayer estuve en [Slot]"
        },
        "frameDe": "Gestern war ich im [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "c": "n"
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "c": "n"
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "c": "n"
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
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
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "hombre",
              "lerntext": "hombre",
              "de": "Mann",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
              "de": "Telefon",
              "c": "n",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
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
          "schrift": "quiero [Slot] porque tengo tiempo",
          "lerntext": "quiero [Slot] porque tengo tiempo",
          "wortarten": {
            "quiero": "v",
            "porque": "k",
            "tengo": "v",
            "tiempo": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "c": "v"
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen",
              "c": "v"
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "c": "v"
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "c": "v"
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "c": "v"
            },
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
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
          "schrift": "quiero [Slot] porque tengo tiempo",
          "lerntext": "quiero [Slot] porque tengo tiempo",
          "wortarten": {
            "quiero": "v",
            "porque": "k",
            "tengo": "v",
            "tiempo": "n"
          }
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich",
            "c": "p"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "c": "v"
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern",
              "c": "v",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
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
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
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
