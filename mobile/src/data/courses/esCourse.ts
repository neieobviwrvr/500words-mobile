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
          "lerntext": "yo estoy [Slot]"
        },
        "frameDe": "ich bin [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "soy",
            "lerntext": "soy",
            "de": "sein (dauerhaft)"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nosotros / nosotras somos [Slot]",
          "lerntext": "nosotros / nosotras somos [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef"
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund"
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind"
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
          "lerntext": "él es muy [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch"
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch"
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig"
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark"
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
          "lerntext": "él es muy [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach"
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung"
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt"
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich"
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
          "lerntext": "él es muy [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
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
          "schrift": "nosotros / nosotras somos [Slot]",
          "lerntext": "nosotros / nosotras somos [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
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
          "schrift": "él es muy [Slot]",
          "lerntext": "él es muy [Slot]"
        },
        "frameDe": "er ist sehr [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
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
          "schrift": "nosotros / nosotras somos [Slot]",
          "lerntext": "nosotros / nosotras somos [Slot]"
        },
        "frameDe": "wir sind [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
              "wieder": true
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
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
          "schrift": "esto es una [Slot]",
          "lerntext": "esto es una [Slot]"
        },
        "frameDe": "Das ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür"
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter"
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
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
            "de": "dies (neutral)"
          }
        ],
        "id": "2.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "esto es una [Slot]",
          "lerntext": "esto es una [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl"
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
          "lerntext": "esto es una [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
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
          "lerntext": "esto es un [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
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
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder"
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
          "lerntext": "esto es un [Slot]"
        },
        "frameDe": "Das ist ein [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
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
              "schrift": "teléfono",
              "lerntext": "teléfono",
              "de": "Telefon"
            },
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
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
          "schrift": "aquí hay una [Slot]",
          "lerntext": "aquí hay una [Slot]"
        },
        "frameDe": "Hier ist eine [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche"
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch"
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer"
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster"
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro"
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
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
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
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
          "lerntext": "yo tengo una [Slot]"
        },
        "frameDe": "ich habe eine [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie"
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand"
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
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
            "de": "haben"
          }
        ],
        "id": "2.10"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo tengo una [Slot]",
          "lerntext": "yo tengo una [Slot]"
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund"
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
          "lerntext": "yo tengo un [Slot]"
        },
        "frameDe": "ich habe einen [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn"
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm"
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß"
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper"
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
          "lerntext": "yo tengo un [Slot]"
        },
        "frameDe": "ich habe ein [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto"
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
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
          "lerntext": "esta es mi [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
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
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau"
            },
            {
              "schrift": "jefe / jefa",
              "lerntext": "jefe / jefa",
              "de": "Chef"
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
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
          "lerntext": "esta es [Slot] casa"
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)"
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
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
          "lerntext": "estos son [Slot] libros"
        },
        "frameDe": "Das sind [Slot] Bücher.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "este / esta",
              "lerntext": "este / esta",
              "de": "dieser"
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "yo",
              "lerntext": "yo",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "tú",
              "lerntext": "tú",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "nosotros / nosotras",
              "lerntext": "nosotros / nosotras",
              "de": "wir",
              "wieder": true
            },
            {
              "schrift": "ella",
              "lerntext": "ella",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "esto",
              "lerntext": "esto",
              "de": "dies (neutral)",
              "wieder": true
            },
            {
              "schrift": "él",
              "lerntext": "él",
              "de": "er",
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
          "lerntext": "[Slot] está aquí"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "ninguno / ninguna",
            "lerntext": "ninguno / ninguna",
            "de": "keiner"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "este / esta",
              "lerntext": "este / esta",
              "de": "dieser"
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch"
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "yo",
              "lerntext": "yo",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "tú",
              "lerntext": "tú",
              "de": "du",
              "wieder": true
            },
            {
              "schrift": "nosotros / nosotras",
              "lerntext": "nosotros / nosotras",
              "de": "wir",
              "wieder": true
            },
            {
              "schrift": "nuestro / nuestra",
              "lerntext": "nuestro / nuestra",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "mi / mis",
              "lerntext": "mi / mis",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "tu / tus",
              "lerntext": "tu / tus",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "ella",
              "lerntext": "ella",
              "de": "sie",
              "wieder": true
            },
            {
              "schrift": "esto",
              "lerntext": "esto",
              "de": "dies (neutral)",
              "wieder": true
            },
            {
              "schrift": "él",
              "lerntext": "él",
              "de": "er",
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
          "lerntext": "esta es mi [Slot]"
        },
        "frameDe": "Das ist mein [Slot].",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
            "de": "unser"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
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
          "lerntext": "yo quiero [Slot]"
        },
        "frameDe": "ich möchte [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser"
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen"
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
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
            "de": "wollen"
          }
        ],
        "id": "3.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo necesito [Slot]",
          "lerntext": "yo necesito [Slot]"
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit"
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld"
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
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
            "de": "brauchen"
          }
        ],
        "id": "3.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo necesito [Slot]",
          "lerntext": "yo necesito [Slot]"
        },
        "frameDe": "ich brauche [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
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
          "lerntext": "yo no estoy [Slot]"
        },
        "frameDe": "ich bin nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig"
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
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
          "lerntext": "¿eres tú [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt"
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu"
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
              "de": "wichtig"
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
              "wieder": true
            },
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
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
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
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
          "lerntext": "¿[Slot] es esto?"
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
            "de": "wer (Relativpronomen)"
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
              "de": "etwas"
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
              "de": "alles"
            },
            {
              "schrift": "ninguno / ninguna",
              "lerntext": "ninguno / ninguna",
              "de": "keiner",
              "wieder": true
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch",
              "wieder": true
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "nuestro / nuestra",
              "lerntext": "nuestro / nuestra",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "mi / mis",
              "lerntext": "mi / mis",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "tu / tus",
              "lerntext": "tu / tus",
              "de": "dein",
              "wieder": true
            },
            {
              "schrift": "este / esta",
              "lerntext": "este / esta",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "nosotros / nosotras",
              "lerntext": "nosotros / nosotras",
              "de": "wir",
              "wieder": true
            },
            {
              "schrift": "yo",
              "lerntext": "yo",
              "de": "ich",
              "wieder": true
            },
            {
              "schrift": "ella",
              "lerntext": "ella",
              "de": "sie",
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
            "de": "wer (Relativpronomen)"
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
          "lerntext": "¿eres tú [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
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
              "wieder": true
            },
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
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
          "lerntext": "¿[Slot] es esto?"
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
            "de": "wer (Relativpronomen)"
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
              "wieder": true
            },
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch",
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
          "lerntext": "¿eres tú [Slot]?"
        },
        "frameDe": "Bist du [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          },
          {
            "schrift": "vosotros / vosotras",
            "lerntext": "vosotros / vosotras",
            "de": "ihr"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
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
          "lerntext": "¿[Slot] es esto?"
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
            "de": "wer (Relativpronomen)"
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
              "wieder": true
            },
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
              "de": "alles",
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
              "de": "Kirche"
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule"
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße"
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
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
              "de": "Bahnhof"
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund",
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
              "de": "Geschäft"
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
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
              "de": "Flughafen"
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
              "wieder": true
            },
            {
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm",
              "wieder": true
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater",
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
              "de": "Restaurant"
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad"
            },
            {
              "schrift": "tienda",
              "lerntext": "tienda",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
              "wieder": true
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto",
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
              "de": "Universität"
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
              "wieder": true
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter",
              "wieder": true
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
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
              "de": "Krankenhaus"
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum"
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "tienda",
              "lerntext": "tienda",
              "de": "Geschäft",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer",
              "wieder": true
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus",
              "wieder": true
            },
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
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
          "lerntext": "[Slot] está aquí"
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
              "de": "Stadt"
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park"
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand"
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
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
          "lerntext": "está [Slot] la casa"
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
          "lerntext": "está [Slot] la casa"
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
          "lerntext": "[Slot] está aquí"
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
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
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
        "kind": "frame",
        "frame": {
          "schrift": "está [Slot] la casa",
          "lerntext": "está [Slot] la casa"
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
          "lerntext": "[Slot] está aquí"
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
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
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
          "lerntext": "es la [Slot] vez"
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
            "de": "Mal (z.B. 'eine Mal')"
          }
        ],
        "id": "6.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es demasiado [Slot]",
          "lerntext": "es demasiado [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer"
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß"
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein"
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang"
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
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
          "lerntext": "es demasiado [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz"
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß"
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig"
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit"
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng"
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher",
              "wieder": true
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig",
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
        "newFrameWords": [],
        "id": "6.6"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "es demasiado [Slot]",
          "lerntext": "es demasiado [Slot]"
        },
        "frameDe": "Das ist zu [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick"
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
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
          "lerntext": "yo puedo [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen"
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen"
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen"
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben"
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen"
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "querer",
              "lerntext": "querer",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
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
            "de": "können"
          }
        ],
        "id": "7.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo puedo [Slot]",
          "lerntext": "yo puedo [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen"
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären"
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen"
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen"
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen"
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "querer",
              "lerntext": "querer",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
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
          "lerntext": "yo puedo [Slot]"
        },
        "frameDe": "ich kann [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen"
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
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
          "lerntext": "yo tengo que [Slot]"
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten"
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen"
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen"
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "wieder": true
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "querer",
              "lerntext": "querer",
              "de": "wollen",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
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
            "de": "sollen"
          },
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "der"
          }
        ],
        "id": "7.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo tengo que [Slot]",
          "lerntext": "yo tengo que [Slot]"
        },
        "frameDe": "ich muss [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen"
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen"
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen"
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
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
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "wieder": true
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
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
          "lerntext": "yo quiero [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen"
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören"
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen"
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen"
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen"
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
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
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
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
          "lerntext": "yo quiero [Slot]"
        },
        "frameDe": "ich will [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören"
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen"
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
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
          "lerntext": "yo no puedo [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren"
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen"
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen"
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben"
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben"
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
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
            "de": "erreichen"
          }
        ],
        "id": "7.8"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo no puedo [Slot]",
          "lerntext": "yo no puedo [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen"
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen"
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen"
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen"
            },
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
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
          "lerntext": "yo no puedo [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
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
          "lerntext": "yo no puedo [Slot]"
        },
        "frameDe": "ich darf nicht [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
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
          "lerntext": "yo voy a una [Slot]"
        },
        "frameDe": "ich gehe zu einem [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tienda",
              "lerntext": "tienda",
              "de": "Geschäft"
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
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
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser",
              "wieder": true
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster",
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
          "schrift": "yo viajo en [Slot]",
          "lerntext": "yo viajo en [Slot]"
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus"
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug"
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto"
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug"
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
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
            "de": "reisen"
          }
        ],
        "id": "8.2"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo quiero [Slot] ahora",
          "lerntext": "yo quiero [Slot] ahora"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben"
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen"
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
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
          "lerntext": "yo quiero [Slot] ahora"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
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
          "lerntext": "yo viajo en [Slot]"
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
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
          "lerntext": "yo quiero [Slot] ahora"
        },
        "frameDe": "ich will jetzt [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
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
          "lerntext": "yo viajo en [Slot]"
        },
        "frameDe": "ich fahre mit [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
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
              "de": "also"
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
          "lerntext": "nos vemos por la [Slot]"
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
              "de": "Nacht"
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag"
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche"
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
            "de": "uns"
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
              "de": "Stunde"
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
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
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde"
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie",
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
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "wieder": true
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
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
          "lerntext": "yo amo [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne"
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen"
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee"
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind"
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit"
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "wieder": true
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "wieder": true
            },
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
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
            "de": "wollen"
          },
          {
            "schrift": "quiero",
            "lerntext": "quiero",
            "de": "wollen"
          }
        ],
        "id": "10.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo amo [Slot]",
          "lerntext": "yo amo [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg"
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer"
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit",
              "wieder": true
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
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
          "lerntext": "yo veo a [Slot]"
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
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
              "schrift": "lo / la",
              "lerntext": "lo / la",
              "de": "ihn"
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "uns"
            },
            {
              "schrift": "ninguno / ninguna",
              "lerntext": "ninguno / ninguna",
              "de": "keiner",
              "wieder": true
            },
            {
              "schrift": "quien",
              "lerntext": "quien",
              "de": "wer (Relativpronomen)",
              "wieder": true
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
              "de": "alles",
              "wieder": true
            },
            {
              "schrift": "que",
              "lerntext": "que",
              "de": "der",
              "wieder": true
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch",
              "wieder": true
            },
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas",
              "wieder": true
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr",
              "wieder": true
            },
            {
              "schrift": "nuestro / nuestra",
              "lerntext": "nuestro / nuestra",
              "de": "unser",
              "wieder": true
            },
            {
              "schrift": "mi / mis",
              "lerntext": "mi / mis",
              "de": "mein",
              "wieder": true
            },
            {
              "schrift": "tu / tus",
              "lerntext": "tu / tus",
              "de": "dein",
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
            "de": "finden"
          }
        ],
        "id": "10.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "la comida está [Slot]",
          "lerntext": "la comida está [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß"
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß"
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt"
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber"
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig"
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
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
            "de": "Essen"
          }
        ],
        "id": "10.4"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo amo [Slot]",
          "lerntext": "yo amo [Slot]"
        },
        "frameDe": "ich mag [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
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
          "lerntext": "la comida está [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
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
          "lerntext": "yo veo a [Slot]"
        },
        "frameDe": "ich sehe [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
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
              "schrift": "lo / la",
              "lerntext": "lo / la",
              "de": "ihn",
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
          "lerntext": "la comida está [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
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
          "lerntext": "yo estaba [Slot] ayer"
        },
        "frameDe": "ich war gestern [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde"
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
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
          "lerntext": "yo voy a [Slot] mañana"
        },
        "frameDe": "ich werde morgen [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          },
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen"
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen"
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben"
            },
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen"
            },
            {
              "schrift": "encontrar",
              "lerntext": "encontrar",
              "de": "finden"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
              "wieder": true
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
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
          "lerntext": "yo quiero [Slot] mucho"
        },
        "frameDe": "ich [Slot] viel.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen"
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen"
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben"
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken"
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen"
            },
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
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
          "lerntext": "yo me pongo [Slot]"
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen"
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen"
            },
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig"
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher"
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich"
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
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
          "lerntext": "yo quiero [Slot] mucho"
        },
        "frameDe": "ich [Slot] viel.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
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
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
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
          "schrift": "yo me pongo [Slot]",
          "lerntext": "yo me pongo [Slot]"
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
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
          "lerntext": "yo quiero [Slot] mucho"
        },
        "frameDe": "ich [Slot] viel.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
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
        "id": "11.7"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "yo me pongo [Slot]",
          "lerntext": "yo me pongo [Slot]"
        },
        "frameDe": "ich werde [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          },
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
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
          "lerntext": "estoy cansado [Slot] trabajo"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "und"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
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
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil"
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
              "de": "obwohl"
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
            "de": "und"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
            "de": "aber"
          },
          {
            "schrift": "o",
            "lerntext": "o",
            "de": "oder"
          },
          {
            "schrift": "entonces",
            "lerntext": "entonces",
            "de": "also"
          },
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "der"
          },
          {
            "schrift": "trabajo",
            "lerntext": "trabajo",
            "de": "Arbeit"
          }
        ],
        "id": "12.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "estoy cansado [Slot] trabajo",
          "lerntext": "estoy cansado [Slot] trabajo"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "und"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
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
          "lerntext": "quiero [Slot] pero no puedo"
        },
        "frameDe": "Ich will [Slot], aber ich kann nicht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten"
            },
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
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
          "lerntext": "es [Slot] pero funciona"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig"
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach"
            },
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant"
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig"
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch"
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
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
          "lerntext": "es [Slot] pero funciona"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell"
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam"
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich"
            },
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will dich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden"
            },
            {
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern"
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
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
          "lerntext": "estoy cansado [Slot] trabajo"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "und"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
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
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "aunque",
              "lerntext": "aunque",
              "de": "obwohl",
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
          "lerntext": "es [Slot] pero funciona"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
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
          "lerntext": "estoy cansado [Slot] trabajo"
        },
        "frameDe": "Ich bin müde, [Slot] ich arbeite.",
        "pronouns": [
          {
            "schrift": "y",
            "lerntext": "y",
            "de": "und"
          },
          {
            "schrift": "pero",
            "lerntext": "pero",
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
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "aunque",
              "lerntext": "aunque",
              "de": "obwohl",
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
          "lerntext": "es [Slot] pero funciona"
        },
        "frameDe": "Es ist [Slot], aber es geht.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
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
          "lerntext": "me duele una [Slot]"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf"
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "trabajo",
              "lerntext": "trabajo",
              "de": "Arbeit",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
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
          "lerntext": "me duele un [Slot]"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz"
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge"
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger"
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
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
          "lerntext": "tengo dolor en una [Slot]"
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein"
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
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
            "de": "Schmerz"
          }
        ],
        "id": "13.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "tengo dolor en un [Slot]",
          "lerntext": "tengo dolor en un [Slot]"
        },
        "frameDe": "Ich habe Schmerzen im [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar"
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "trabajo",
              "lerntext": "trabajo",
              "de": "Arbeit",
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
              "de": "Teller"
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "wieder": true
            },
            {
              "schrift": "dolor",
              "lerntext": "dolor",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
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
          "lerntext": "compro un [Slot]"
        },
        "frameDe": "Ich kaufe einen [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh"
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "wieder": true
            },
            {
              "schrift": "dolor",
              "lerntext": "dolor",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
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
          "lerntext": "tengo [Slot]"
        },
        "frameDe": "Ich habe [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung"
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass"
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name"
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
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
          "lerntext": "este es mi [Slot]"
        },
        "frameDe": "Das ist meine [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "trabajo",
              "lerntext": "trabajo",
              "de": "Arbeit"
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
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
          "lerntext": "espero una [Slot]"
        },
        "frameDe": "Ich warte auf [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort"
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
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
              "de": "Himmel"
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
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
          "lerntext": "he sacado una buen [Slot]"
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
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer"
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch"
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "wieder": true
            },
            {
              "schrift": "dolor",
              "lerntext": "dolor",
              "de": "Schmerz",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mundo",
              "lerntext": "mundo",
              "de": "Welt"
            },
            {
              "schrift": "gobierno",
              "lerntext": "gobierno",
              "de": "Regierung"
            },
            {
              "schrift": "número",
              "lerntext": "número",
              "de": "Nummer"
            },
            {
              "schrift": "tarjeta",
              "lerntext": "tarjeta",
              "de": "Karte"
            },
            {
              "schrift": "cuenta",
              "lerntext": "cuenta",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "metro",
              "lerntext": "metro",
              "de": "U-Bahn"
            },
            {
              "schrift": "música",
              "lerntext": "música",
              "de": "Musik"
            },
            {
              "schrift": "fiesta",
              "lerntext": "fiesta",
              "de": "Party"
            },
            {
              "schrift": "correo",
              "lerntext": "correo",
              "de": "Post"
            },
            {
              "schrift": "mensaje",
              "lerntext": "mensaje",
              "de": "Nachricht"
            },
            {
              "schrift": "mundo",
              "lerntext": "mundo",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "gobierno",
              "lerntext": "gobierno",
              "de": "Regierung",
              "wieder": true
            },
            {
              "schrift": "número",
              "lerntext": "número",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "tarjeta",
              "lerntext": "tarjeta",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "cuenta",
              "lerntext": "cuenta",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "miedo",
              "lerntext": "miedo",
              "de": "Angst"
            },
            {
              "schrift": "alegría",
              "lerntext": "alegría",
              "de": "Freude"
            },
            {
              "schrift": "verdad",
              "lerntext": "verdad",
              "de": "Wahrheit"
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee"
            },
            {
              "schrift": "opinión",
              "lerntext": "opinión",
              "de": "Meinung"
            },
            {
              "schrift": "metro",
              "lerntext": "metro",
              "de": "U-Bahn",
              "wieder": true
            },
            {
              "schrift": "música",
              "lerntext": "música",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "fiesta",
              "lerntext": "fiesta",
              "de": "Party",
              "wieder": true
            },
            {
              "schrift": "correo",
              "lerntext": "correo",
              "de": "Post",
              "wieder": true
            },
            {
              "schrift": "mensaje",
              "lerntext": "mensaje",
              "de": "Nachricht",
              "wieder": true
            },
            {
              "schrift": "mundo",
              "lerntext": "mundo",
              "de": "Welt",
              "wieder": true
            },
            {
              "schrift": "gobierno",
              "lerntext": "gobierno",
              "de": "Regierung",
              "wieder": true
            },
            {
              "schrift": "número",
              "lerntext": "número",
              "de": "Nummer",
              "wieder": true
            },
            {
              "schrift": "tarjeta",
              "lerntext": "tarjeta",
              "de": "Karte",
              "wieder": true
            },
            {
              "schrift": "cuenta",
              "lerntext": "cuenta",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "Frage"
            },
            {
              "schrift": "futuro",
              "lerntext": "futuro",
              "de": "Zukunft"
            },
            {
              "schrift": "historia",
              "lerntext": "historia",
              "de": "Geschichte"
            },
            {
              "schrift": "cosa",
              "lerntext": "cosa",
              "de": "Sache"
            },
            {
              "schrift": "salud",
              "lerntext": "salud",
              "de": "Gesundheit"
            },
            {
              "schrift": "miedo",
              "lerntext": "miedo",
              "de": "Angst",
              "wieder": true
            },
            {
              "schrift": "alegría",
              "lerntext": "alegría",
              "de": "Freude",
              "wieder": true
            },
            {
              "schrift": "verdad",
              "lerntext": "verdad",
              "de": "Wahrheit",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "opinión",
              "lerntext": "opinión",
              "de": "Meinung",
              "wieder": true
            },
            {
              "schrift": "metro",
              "lerntext": "metro",
              "de": "U-Bahn",
              "wieder": true
            },
            {
              "schrift": "música",
              "lerntext": "música",
              "de": "Musik",
              "wieder": true
            },
            {
              "schrift": "fiesta",
              "lerntext": "fiesta",
              "de": "Party",
              "wieder": true
            },
            {
              "schrift": "correo",
              "lerntext": "correo",
              "de": "Post",
              "wieder": true
            },
            {
              "schrift": "mensaje",
              "lerntext": "mensaje",
              "de": "Nachricht",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "enfermedad",
              "lerntext": "enfermedad",
              "de": "Krankheit"
            },
            {
              "schrift": "amor",
              "lerntext": "amor",
              "de": "Liebe"
            },
            {
              "schrift": "grupo",
              "lerntext": "grupo",
              "de": "Gruppe"
            },
            {
              "schrift": "aire",
              "lerntext": "aire",
              "de": "Luft"
            },
            {
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "futuro",
              "lerntext": "futuro",
              "de": "Zukunft",
              "wieder": true
            },
            {
              "schrift": "historia",
              "lerntext": "historia",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "cosa",
              "lerntext": "cosa",
              "de": "Sache",
              "wieder": true
            },
            {
              "schrift": "salud",
              "lerntext": "salud",
              "de": "Gesundheit",
              "wieder": true
            },
            {
              "schrift": "miedo",
              "lerntext": "miedo",
              "de": "Angst",
              "wieder": true
            },
            {
              "schrift": "alegría",
              "lerntext": "alegría",
              "de": "Freude",
              "wieder": true
            },
            {
              "schrift": "verdad",
              "lerntext": "verdad",
              "de": "Wahrheit",
              "wieder": true
            },
            {
              "schrift": "idea",
              "lerntext": "idea",
              "de": "Idee",
              "wieder": true
            },
            {
              "schrift": "opinión",
              "lerntext": "opinión",
              "de": "Meinung",
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
          "lerntext": "aquí está el [Slot]"
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
              "schrift": "punto",
              "lerntext": "punto",
              "de": "Punkt"
            },
            {
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment"
            },
            {
              "schrift": "precio",
              "lerntext": "precio",
              "de": "Preis"
            },
            {
              "schrift": "mercado",
              "lerntext": "mercado",
              "de": "Markt"
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "billete",
              "lerntext": "billete",
              "de": "Fahrschein"
            },
            {
              "schrift": "cumpleaños",
              "lerntext": "cumpleaños",
              "de": "Geburtstag"
            },
            {
              "schrift": "empleado / empleada",
              "lerntext": "empleado / empleada",
              "de": "Angestellter"
            },
            {
              "schrift": "sueldo",
              "lerntext": "sueldo",
              "de": "Lohn"
            },
            {
              "schrift": "cita",
              "lerntext": "cita",
              "de": "Termin"
            },
            {
              "schrift": "parte",
              "lerntext": "parte",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "punto",
              "lerntext": "punto",
              "de": "Punkt",
              "wieder": true
            },
            {
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment",
              "wieder": true
            },
            {
              "schrift": "precio",
              "lerntext": "precio",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "mercado",
              "lerntext": "mercado",
              "de": "Markt",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "razón",
              "lerntext": "razón",
              "de": "Grund"
            },
            {
              "schrift": "error",
              "lerntext": "error",
              "de": "Fehler"
            },
            {
              "schrift": "lugar",
              "lerntext": "lugar",
              "de": "Ort"
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "Monat"
            },
            {
              "schrift": "río",
              "lerntext": "río",
              "de": "Fluss"
            },
            {
              "schrift": "billete",
              "lerntext": "billete",
              "de": "Fahrschein",
              "wieder": true
            },
            {
              "schrift": "cumpleaños",
              "lerntext": "cumpleaños",
              "de": "Geburtstag",
              "wieder": true
            },
            {
              "schrift": "empleado / empleada",
              "lerntext": "empleado / empleada",
              "de": "Angestellter",
              "wieder": true
            },
            {
              "schrift": "sueldo",
              "lerntext": "sueldo",
              "de": "Lohn",
              "wieder": true
            },
            {
              "schrift": "cita",
              "lerntext": "cita",
              "de": "Termin",
              "wieder": true
            },
            {
              "schrift": "parte",
              "lerntext": "parte",
              "de": "Teil",
              "wieder": true
            },
            {
              "schrift": "punto",
              "lerntext": "punto",
              "de": "Punkt",
              "wieder": true
            },
            {
              "schrift": "momento",
              "lerntext": "momento",
              "de": "Moment",
              "wieder": true
            },
            {
              "schrift": "precio",
              "lerntext": "precio",
              "de": "Preis",
              "wieder": true
            },
            {
              "schrift": "mercado",
              "lerntext": "mercado",
              "de": "Markt",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "luna",
              "lerntext": "luna",
              "de": "Mond"
            },
            {
              "schrift": "estrella",
              "lerntext": "estrella",
              "de": "Stern"
            },
            {
              "schrift": "plaza",
              "lerntext": "plaza",
              "de": "Platz (Ort)"
            },
            {
              "schrift": "médico / médica",
              "lerntext": "médico / médica",
              "de": "Arzt"
            },
            {
              "schrift": "sueño",
              "lerntext": "sueño",
              "de": "Traum"
            },
            {
              "schrift": "razón",
              "lerntext": "razón",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "error",
              "lerntext": "error",
              "de": "Fehler",
              "wieder": true
            },
            {
              "schrift": "lugar",
              "lerntext": "lugar",
              "de": "Ort",
              "wieder": true
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "río",
              "lerntext": "río",
              "de": "Fluss",
              "wieder": true
            },
            {
              "schrift": "billete",
              "lerntext": "billete",
              "de": "Fahrschein",
              "wieder": true
            },
            {
              "schrift": "cumpleaños",
              "lerntext": "cumpleaños",
              "de": "Geburtstag",
              "wieder": true
            },
            {
              "schrift": "empleado / empleada",
              "lerntext": "empleado / empleada",
              "de": "Angestellter",
              "wieder": true
            },
            {
              "schrift": "sueldo",
              "lerntext": "sueldo",
              "de": "Lohn",
              "wieder": true
            },
            {
              "schrift": "cita",
              "lerntext": "cita",
              "de": "Termin",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "hambre",
              "lerntext": "hambre",
              "de": "Hunger"
            },
            {
              "schrift": "sed",
              "lerntext": "sed",
              "de": "Durst"
            },
            {
              "schrift": "cambio",
              "lerntext": "cambio",
              "de": "Wechsel"
            },
            {
              "schrift": "diferencia",
              "lerntext": "diferencia",
              "de": "Unterschied"
            },
            {
              "schrift": "tipo",
              "lerntext": "tipo",
              "de": "Typ"
            },
            {
              "schrift": "luna",
              "lerntext": "luna",
              "de": "Mond",
              "wieder": true
            },
            {
              "schrift": "estrella",
              "lerntext": "estrella",
              "de": "Stern",
              "wieder": true
            },
            {
              "schrift": "plaza",
              "lerntext": "plaza",
              "de": "Platz (Ort)",
              "wieder": true
            },
            {
              "schrift": "médico / médica",
              "lerntext": "médico / médica",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "sueño",
              "lerntext": "sueño",
              "de": "Traum",
              "wieder": true
            },
            {
              "schrift": "razón",
              "lerntext": "razón",
              "de": "Grund",
              "wieder": true
            },
            {
              "schrift": "error",
              "lerntext": "error",
              "de": "Fehler",
              "wieder": true
            },
            {
              "schrift": "lugar",
              "lerntext": "lugar",
              "de": "Ort",
              "wieder": true
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "Monat",
              "wieder": true
            },
            {
              "schrift": "río",
              "lerntext": "río",
              "de": "Fluss",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "estado",
              "lerntext": "estado",
              "de": "Zustand"
            },
            {
              "schrift": "hambre",
              "lerntext": "hambre",
              "de": "Hunger",
              "wieder": true
            },
            {
              "schrift": "sed",
              "lerntext": "sed",
              "de": "Durst",
              "wieder": true
            },
            {
              "schrift": "cambio",
              "lerntext": "cambio",
              "de": "Wechsel",
              "wieder": true
            },
            {
              "schrift": "diferencia",
              "lerntext": "diferencia",
              "de": "Unterschied",
              "wieder": true
            },
            {
              "schrift": "tipo",
              "lerntext": "tipo",
              "de": "Typ",
              "wieder": true
            },
            {
              "schrift": "luna",
              "lerntext": "luna",
              "de": "Mond",
              "wieder": true
            },
            {
              "schrift": "estrella",
              "lerntext": "estrella",
              "de": "Stern",
              "wieder": true
            },
            {
              "schrift": "plaza",
              "lerntext": "plaza",
              "de": "Platz (Ort)",
              "wieder": true
            },
            {
              "schrift": "médico / médica",
              "lerntext": "médico / médica",
              "de": "Arzt",
              "wieder": true
            },
            {
              "schrift": "sueño",
              "lerntext": "sueño",
              "de": "Traum",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "año",
              "lerntext": "año",
              "de": "Jahr"
            },
            {
              "schrift": "vida",
              "lerntext": "vida",
              "de": "Leben"
            },
            {
              "schrift": "país",
              "lerntext": "país",
              "de": "Land (Staat)"
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem"
            },
            {
              "schrift": "palabra",
              "lerntext": "palabra",
              "de": "Wort"
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "taxi",
              "lerntext": "taxi",
              "de": "Taxi"
            },
            {
              "schrift": "canción",
              "lerntext": "canción",
              "de": "Lied"
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk"
            },
            {
              "schrift": "foto",
              "lerntext": "foto",
              "de": "Foto"
            },
            {
              "schrift": "teléfono móvil",
              "lerntext": "teléfono móvil",
              "de": "Handy"
            },
            {
              "schrift": "año",
              "lerntext": "año",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "vida",
              "lerntext": "vida",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "país",
              "lerntext": "país",
              "de": "Land (Staat)",
              "wieder": true
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "palabra",
              "lerntext": "palabra",
              "de": "Wort",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "internet",
              "lerntext": "internet",
              "de": "Internet"
            },
            {
              "schrift": "reunión",
              "lerntext": "reunión",
              "de": "Treffen"
            },
            {
              "schrift": "cara",
              "lerntext": "cara",
              "de": "Gesicht"
            },
            {
              "schrift": "suerte",
              "lerntext": "suerte",
              "de": "Glück (Zufall)"
            },
            {
              "schrift": "tema",
              "lerntext": "tema",
              "de": "Thema"
            },
            {
              "schrift": "taxi",
              "lerntext": "taxi",
              "de": "Taxi",
              "wieder": true
            },
            {
              "schrift": "canción",
              "lerntext": "canción",
              "de": "Lied",
              "wieder": true
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "foto",
              "lerntext": "foto",
              "de": "Foto",
              "wieder": true
            },
            {
              "schrift": "teléfono móvil",
              "lerntext": "teléfono móvil",
              "de": "Handy",
              "wieder": true
            },
            {
              "schrift": "año",
              "lerntext": "año",
              "de": "Jahr",
              "wieder": true
            },
            {
              "schrift": "vida",
              "lerntext": "vida",
              "de": "Leben",
              "wieder": true
            },
            {
              "schrift": "país",
              "lerntext": "país",
              "de": "Land (Staat)",
              "wieder": true
            },
            {
              "schrift": "problema",
              "lerntext": "problema",
              "de": "Problem",
              "wieder": true
            },
            {
              "schrift": "palabra",
              "lerntext": "palabra",
              "de": "Wort",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ejemplo",
              "lerntext": "ejemplo",
              "de": "Beispiel"
            },
            {
              "schrift": "pueblo",
              "lerntext": "pueblo",
              "de": "Dorf"
            },
            {
              "schrift": "barrio",
              "lerntext": "barrio",
              "de": "Stadtviertel"
            },
            {
              "schrift": "final",
              "lerntext": "final",
              "de": "Ende"
            },
            {
              "schrift": "equipo",
              "lerntext": "equipo",
              "de": "Team"
            },
            {
              "schrift": "internet",
              "lerntext": "internet",
              "de": "Internet",
              "wieder": true
            },
            {
              "schrift": "reunión",
              "lerntext": "reunión",
              "de": "Treffen",
              "wieder": true
            },
            {
              "schrift": "cara",
              "lerntext": "cara",
              "de": "Gesicht",
              "wieder": true
            },
            {
              "schrift": "suerte",
              "lerntext": "suerte",
              "de": "Glück (Zufall)",
              "wieder": true
            },
            {
              "schrift": "tema",
              "lerntext": "tema",
              "de": "Thema",
              "wieder": true
            },
            {
              "schrift": "taxi",
              "lerntext": "taxi",
              "de": "Taxi",
              "wieder": true
            },
            {
              "schrift": "canción",
              "lerntext": "canción",
              "de": "Lied",
              "wieder": true
            },
            {
              "schrift": "regalo",
              "lerntext": "regalo",
              "de": "Geschenk",
              "wieder": true
            },
            {
              "schrift": "foto",
              "lerntext": "foto",
              "de": "Foto",
              "wieder": true
            },
            {
              "schrift": "teléfono móvil",
              "lerntext": "teléfono móvil",
              "de": "Handy",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist das [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende"
            },
            {
              "schrift": "ejemplo",
              "lerntext": "ejemplo",
              "de": "Beispiel",
              "wieder": true
            },
            {
              "schrift": "pueblo",
              "lerntext": "pueblo",
              "de": "Dorf",
              "wieder": true
            },
            {
              "schrift": "barrio",
              "lerntext": "barrio",
              "de": "Stadtviertel",
              "wieder": true
            },
            {
              "schrift": "final",
              "lerntext": "final",
              "de": "Ende",
              "wieder": true
            },
            {
              "schrift": "equipo",
              "lerntext": "equipo",
              "de": "Team",
              "wieder": true
            },
            {
              "schrift": "internet",
              "lerntext": "internet",
              "de": "Internet",
              "wieder": true
            },
            {
              "schrift": "reunión",
              "lerntext": "reunión",
              "de": "Treffen",
              "wieder": true
            },
            {
              "schrift": "cara",
              "lerntext": "cara",
              "de": "Gesicht",
              "wieder": true
            },
            {
              "schrift": "suerte",
              "lerntext": "suerte",
              "de": "Glück (Zufall)",
              "wieder": true
            },
            {
              "schrift": "tema",
              "lerntext": "tema",
              "de": "Thema",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "padres",
              "lerntext": "padres",
              "de": "Eltern"
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute"
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "enfermedad",
              "lerntext": "enfermedad",
              "de": "Krankheit",
              "wieder": true
            },
            {
              "schrift": "amor",
              "lerntext": "amor",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "grupo",
              "lerntext": "grupo",
              "de": "Gruppe",
              "wieder": true
            },
            {
              "schrift": "aire",
              "lerntext": "aire",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "padres",
              "lerntext": "padres",
              "de": "Eltern",
              "wieder": true
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute",
              "wieder": true
            },
            {
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "Frage",
              "wieder": true
            },
            {
              "schrift": "futuro",
              "lerntext": "futuro",
              "de": "Zukunft",
              "wieder": true
            },
            {
              "schrift": "historia",
              "lerntext": "historia",
              "de": "Geschichte",
              "wieder": true
            },
            {
              "schrift": "cosa",
              "lerntext": "cosa",
              "de": "Sache",
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
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist die [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "salud",
              "lerntext": "salud",
              "de": "Gesundheit",
              "wieder": true
            },
            {
              "schrift": "enfermedad",
              "lerntext": "enfermedad",
              "de": "Krankheit",
              "wieder": true
            },
            {
              "schrift": "amor",
              "lerntext": "amor",
              "de": "Liebe",
              "wieder": true
            },
            {
              "schrift": "grupo",
              "lerntext": "grupo",
              "de": "Gruppe",
              "wieder": true
            },
            {
              "schrift": "aire",
              "lerntext": "aire",
              "de": "Luft",
              "wieder": true
            },
            {
              "schrift": "padres",
              "lerntext": "padres",
              "de": "Eltern",
              "wieder": true
            },
            {
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "seguir",
              "lerntext": "seguir",
              "de": "folgen"
            },
            {
              "schrift": "cocinar",
              "lerntext": "cocinar",
              "de": "kochen"
            },
            {
              "schrift": "levantarse",
              "lerntext": "levantarse",
              "de": "aufstehen"
            },
            {
              "schrift": "acostarse",
              "lerntext": "acostarse",
              "de": "sich hinlegen"
            },
            {
              "schrift": "vestirse",
              "lerntext": "vestirse",
              "de": "sich anziehen"
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mandar",
              "lerntext": "mandar",
              "de": "schicken"
            },
            {
              "schrift": "salir",
              "lerntext": "salir",
              "de": "hinausgehen"
            },
            {
              "schrift": "estar",
              "lerntext": "estar",
              "de": "sein (Zustand, Ort)"
            },
            {
              "schrift": "llegar",
              "lerntext": "llegar",
              "de": "ankommen"
            },
            {
              "schrift": "pasar",
              "lerntext": "pasar",
              "de": "passieren"
            },
            {
              "schrift": "seguir",
              "lerntext": "seguir",
              "de": "folgen",
              "wieder": true
            },
            {
              "schrift": "cocinar",
              "lerntext": "cocinar",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "levantarse",
              "lerntext": "levantarse",
              "de": "aufstehen",
              "wieder": true
            },
            {
              "schrift": "acostarse",
              "lerntext": "acostarse",
              "de": "sich hinlegen",
              "wieder": true
            },
            {
              "schrift": "vestirse",
              "lerntext": "vestirse",
              "de": "sich anziehen",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "parecer",
              "lerntext": "parecer",
              "de": "scheinen"
            },
            {
              "schrift": "llevar",
              "lerntext": "llevar",
              "de": "tragen"
            },
            {
              "schrift": "tratar",
              "lerntext": "tratar",
              "de": "behandeln"
            },
            {
              "schrift": "contar",
              "lerntext": "contar",
              "de": "erzählen"
            },
            {
              "schrift": "estudiar",
              "lerntext": "estudiar",
              "de": "studieren"
            },
            {
              "schrift": "mandar",
              "lerntext": "mandar",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "salir",
              "lerntext": "salir",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "estar",
              "lerntext": "estar",
              "de": "sein (Zustand, Ort)",
              "wieder": true
            },
            {
              "schrift": "llegar",
              "lerntext": "llegar",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "pasar",
              "lerntext": "pasar",
              "de": "passieren",
              "wieder": true
            },
            {
              "schrift": "seguir",
              "lerntext": "seguir",
              "de": "folgen",
              "wieder": true
            },
            {
              "schrift": "cocinar",
              "lerntext": "cocinar",
              "de": "kochen",
              "wieder": true
            },
            {
              "schrift": "levantarse",
              "lerntext": "levantarse",
              "de": "aufstehen",
              "wieder": true
            },
            {
              "schrift": "acostarse",
              "lerntext": "acostarse",
              "de": "sich hinlegen",
              "wieder": true
            },
            {
              "schrift": "vestirse",
              "lerntext": "vestirse",
              "de": "sich anziehen",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "nacer",
              "lerntext": "nacer",
              "de": "geboren werden"
            },
            {
              "schrift": "correr",
              "lerntext": "correr",
              "de": "laufen"
            },
            {
              "schrift": "gustar",
              "lerntext": "gustar",
              "de": "gefallen"
            },
            {
              "schrift": "beber",
              "lerntext": "beber",
              "de": "trinken"
            },
            {
              "schrift": "conducir",
              "lerntext": "conducir",
              "de": "fahren"
            },
            {
              "schrift": "parecer",
              "lerntext": "parecer",
              "de": "scheinen",
              "wieder": true
            },
            {
              "schrift": "llevar",
              "lerntext": "llevar",
              "de": "tragen",
              "wieder": true
            },
            {
              "schrift": "tratar",
              "lerntext": "tratar",
              "de": "behandeln",
              "wieder": true
            },
            {
              "schrift": "contar",
              "lerntext": "contar",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "estudiar",
              "lerntext": "estudiar",
              "de": "studieren",
              "wieder": true
            },
            {
              "schrift": "mandar",
              "lerntext": "mandar",
              "de": "schicken",
              "wieder": true
            },
            {
              "schrift": "salir",
              "lerntext": "salir",
              "de": "hinausgehen",
              "wieder": true
            },
            {
              "schrift": "estar",
              "lerntext": "estar",
              "de": "sein (Zustand, Ort)",
              "wieder": true
            },
            {
              "schrift": "llegar",
              "lerntext": "llegar",
              "de": "ankommen",
              "wieder": true
            },
            {
              "schrift": "pasar",
              "lerntext": "pasar",
              "de": "passieren",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cantar",
              "lerntext": "cantar",
              "de": "singen"
            },
            {
              "schrift": "volver",
              "lerntext": "volver",
              "de": "zurückkommen"
            },
            {
              "schrift": "conocer",
              "lerntext": "conocer",
              "de": "kennen"
            },
            {
              "schrift": "empezar",
              "lerntext": "empezar",
              "de": "anfangen"
            },
            {
              "schrift": "entrar",
              "lerntext": "entrar",
              "de": "eintreten"
            },
            {
              "schrift": "nacer",
              "lerntext": "nacer",
              "de": "geboren werden",
              "wieder": true
            },
            {
              "schrift": "correr",
              "lerntext": "correr",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "gustar",
              "lerntext": "gustar",
              "de": "gefallen",
              "wieder": true
            },
            {
              "schrift": "beber",
              "lerntext": "beber",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "conducir",
              "lerntext": "conducir",
              "de": "fahren",
              "wieder": true
            },
            {
              "schrift": "parecer",
              "lerntext": "parecer",
              "de": "scheinen",
              "wieder": true
            },
            {
              "schrift": "llevar",
              "lerntext": "llevar",
              "de": "tragen",
              "wieder": true
            },
            {
              "schrift": "tratar",
              "lerntext": "tratar",
              "de": "behandeln",
              "wieder": true
            },
            {
              "schrift": "contar",
              "lerntext": "contar",
              "de": "erzählen",
              "wieder": true
            },
            {
              "schrift": "estudiar",
              "lerntext": "estudiar",
              "de": "studieren",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "pedir",
              "lerntext": "pedir",
              "de": "bitten"
            },
            {
              "schrift": "recordar",
              "lerntext": "recordar",
              "de": "sich erinnern"
            },
            {
              "schrift": "terminar",
              "lerntext": "terminar",
              "de": "beenden"
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen"
            },
            {
              "schrift": "recibir",
              "lerntext": "recibir",
              "de": "empfangen"
            },
            {
              "schrift": "cantar",
              "lerntext": "cantar",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "volver",
              "lerntext": "volver",
              "de": "zurückkommen",
              "wieder": true
            },
            {
              "schrift": "conocer",
              "lerntext": "conocer",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "empezar",
              "lerntext": "empezar",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "entrar",
              "lerntext": "entrar",
              "de": "eintreten",
              "wieder": true
            },
            {
              "schrift": "nacer",
              "lerntext": "nacer",
              "de": "geboren werden",
              "wieder": true
            },
            {
              "schrift": "correr",
              "lerntext": "correr",
              "de": "laufen",
              "wieder": true
            },
            {
              "schrift": "gustar",
              "lerntext": "gustar",
              "de": "gefallen",
              "wieder": true
            },
            {
              "schrift": "beber",
              "lerntext": "beber",
              "de": "trinken",
              "wieder": true
            },
            {
              "schrift": "conducir",
              "lerntext": "conducir",
              "de": "fahren",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "permitir",
              "lerntext": "permitir",
              "de": "erlauben"
            },
            {
              "schrift": "sacar",
              "lerntext": "sacar",
              "de": "herausnehmen"
            },
            {
              "schrift": "caer",
              "lerntext": "caer",
              "de": "fallen"
            },
            {
              "schrift": "considerar",
              "lerntext": "considerar",
              "de": "betrachten"
            },
            {
              "schrift": "acabar",
              "lerntext": "acabar",
              "de": "beenden"
            },
            {
              "schrift": "pedir",
              "lerntext": "pedir",
              "de": "bitten",
              "wieder": true
            },
            {
              "schrift": "recordar",
              "lerntext": "recordar",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "terminar",
              "lerntext": "terminar",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "recibir",
              "lerntext": "recibir",
              "de": "empfangen",
              "wieder": true
            },
            {
              "schrift": "cantar",
              "lerntext": "cantar",
              "de": "singen",
              "wieder": true
            },
            {
              "schrift": "volver",
              "lerntext": "volver",
              "de": "zurückkommen",
              "wieder": true
            },
            {
              "schrift": "conocer",
              "lerntext": "conocer",
              "de": "kennen",
              "wieder": true
            },
            {
              "schrift": "empezar",
              "lerntext": "empezar",
              "de": "anfangen",
              "wieder": true
            },
            {
              "schrift": "entrar",
              "lerntext": "entrar",
              "de": "eintreten",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "traer",
              "lerntext": "traer",
              "de": "bringen"
            },
            {
              "schrift": "aceptar",
              "lerntext": "aceptar",
              "de": "akzeptieren"
            },
            {
              "schrift": "tocar",
              "lerntext": "tocar",
              "de": "berühren"
            },
            {
              "schrift": "permitir",
              "lerntext": "permitir",
              "de": "erlauben",
              "wieder": true
            },
            {
              "schrift": "sacar",
              "lerntext": "sacar",
              "de": "herausnehmen",
              "wieder": true
            },
            {
              "schrift": "caer",
              "lerntext": "caer",
              "de": "fallen",
              "wieder": true
            },
            {
              "schrift": "considerar",
              "lerntext": "considerar",
              "de": "betrachten",
              "wieder": true
            },
            {
              "schrift": "acabar",
              "lerntext": "acabar",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "pedir",
              "lerntext": "pedir",
              "de": "bitten",
              "wieder": true
            },
            {
              "schrift": "recordar",
              "lerntext": "recordar",
              "de": "sich erinnern",
              "wieder": true
            },
            {
              "schrift": "terminar",
              "lerntext": "terminar",
              "de": "beenden",
              "wieder": true
            },
            {
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen",
              "wieder": true
            },
            {
              "schrift": "recibir",
              "lerntext": "recibir",
              "de": "empfangen",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "traer",
              "lerntext": "traer",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "aceptar",
              "lerntext": "aceptar",
              "de": "akzeptieren",
              "wieder": true
            },
            {
              "schrift": "tocar",
              "lerntext": "tocar",
              "de": "berühren",
              "wieder": true
            },
            {
              "schrift": "permitir",
              "lerntext": "permitir",
              "de": "erlauben",
              "wieder": true
            },
            {
              "schrift": "sacar",
              "lerntext": "sacar",
              "de": "herausnehmen",
              "wieder": true
            },
            {
              "schrift": "caer",
              "lerntext": "caer",
              "de": "fallen",
              "wieder": true
            },
            {
              "schrift": "considerar",
              "lerntext": "considerar",
              "de": "betrachten",
              "wieder": true
            },
            {
              "schrift": "acabar",
              "lerntext": "acabar",
              "de": "beenden",
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
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "traer",
              "lerntext": "traer",
              "de": "bringen",
              "wieder": true
            },
            {
              "schrift": "aceptar",
              "lerntext": "aceptar",
              "de": "akzeptieren",
              "wieder": true
            },
            {
              "schrift": "tocar",
              "lerntext": "tocar",
              "de": "berühren",
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
          "lerntext": "es muy [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bueno / buena",
              "lerntext": "bueno / buena",
              "de": "gut"
            },
            {
              "schrift": "malo / mala",
              "lerntext": "malo / mala",
              "de": "schlecht"
            },
            {
              "schrift": "mayor",
              "lerntext": "mayor",
              "de": "älter"
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei"
            },
            {
              "schrift": "perfecto / perfecta",
              "lerntext": "perfecto / perfecta",
              "de": "perfekt"
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
          "lerntext": "es muy [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "verdadero / verdadera",
              "lerntext": "verdadero / verdadera",
              "de": "wahr"
            },
            {
              "schrift": "claro / clara",
              "lerntext": "claro / clara",
              "de": "klar"
            },
            {
              "schrift": "oscuro / oscura",
              "lerntext": "oscuro / oscura",
              "de": "dunkel"
            },
            {
              "schrift": "salado / salada",
              "lerntext": "salado / salada",
              "de": "salzig"
            },
            {
              "schrift": "picante",
              "lerntext": "picante",
              "de": "scharf (Geschmack)"
            },
            {
              "schrift": "bueno / buena",
              "lerntext": "bueno / buena",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "malo / mala",
              "lerntext": "malo / mala",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "mayor",
              "lerntext": "mayor",
              "de": "älter",
              "wieder": true
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "perfecto / perfecta",
              "lerntext": "perfecto / perfecta",
              "de": "perfekt",
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
          "lerntext": "es muy [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "menor",
              "lerntext": "menor",
              "de": "jünger"
            },
            {
              "schrift": "mejor",
              "lerntext": "mejor",
              "de": "besser"
            },
            {
              "schrift": "peor",
              "lerntext": "peor",
              "de": "schlechter"
            },
            {
              "schrift": "delgado / delgada",
              "lerntext": "delgado / delgada",
              "de": "schlank"
            },
            {
              "schrift": "ocupado / ocupada",
              "lerntext": "ocupado / ocupada",
              "de": "beschäftigt"
            },
            {
              "schrift": "verdadero / verdadera",
              "lerntext": "verdadero / verdadera",
              "de": "wahr",
              "wieder": true
            },
            {
              "schrift": "claro / clara",
              "lerntext": "claro / clara",
              "de": "klar",
              "wieder": true
            },
            {
              "schrift": "oscuro / oscura",
              "lerntext": "oscuro / oscura",
              "de": "dunkel",
              "wieder": true
            },
            {
              "schrift": "salado / salada",
              "lerntext": "salado / salada",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "picante",
              "lerntext": "picante",
              "de": "scharf (Geschmack)",
              "wieder": true
            },
            {
              "schrift": "bueno / buena",
              "lerntext": "bueno / buena",
              "de": "gut",
              "wieder": true
            },
            {
              "schrift": "malo / mala",
              "lerntext": "malo / mala",
              "de": "schlecht",
              "wieder": true
            },
            {
              "schrift": "mayor",
              "lerntext": "mayor",
              "de": "älter",
              "wieder": true
            },
            {
              "schrift": "libre",
              "lerntext": "libre",
              "de": "frei",
              "wieder": true
            },
            {
              "schrift": "perfecto / perfecta",
              "lerntext": "perfecto / perfecta",
              "de": "perfekt",
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
          "lerntext": "es muy [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lleno / llena",
              "lerntext": "lleno / llena",
              "de": "voll"
            },
            {
              "schrift": "vacío / vacía",
              "lerntext": "vacío / vacía",
              "de": "leer"
            },
            {
              "schrift": "rico / rica",
              "lerntext": "rico / rica",
              "de": "reich"
            },
            {
              "schrift": "pobre",
              "lerntext": "pobre",
              "de": "arm"
            },
            {
              "schrift": "guapo / guapa",
              "lerntext": "guapo / guapa",
              "de": "gutaussehend"
            },
            {
              "schrift": "menor",
              "lerntext": "menor",
              "de": "jünger",
              "wieder": true
            },
            {
              "schrift": "mejor",
              "lerntext": "mejor",
              "de": "besser",
              "wieder": true
            },
            {
              "schrift": "peor",
              "lerntext": "peor",
              "de": "schlechter",
              "wieder": true
            },
            {
              "schrift": "delgado / delgada",
              "lerntext": "delgado / delgada",
              "de": "schlank",
              "wieder": true
            },
            {
              "schrift": "ocupado / ocupada",
              "lerntext": "ocupado / ocupada",
              "de": "beschäftigt",
              "wieder": true
            },
            {
              "schrift": "verdadero / verdadera",
              "lerntext": "verdadero / verdadera",
              "de": "wahr",
              "wieder": true
            },
            {
              "schrift": "claro / clara",
              "lerntext": "claro / clara",
              "de": "klar",
              "wieder": true
            },
            {
              "schrift": "oscuro / oscura",
              "lerntext": "oscuro / oscura",
              "de": "dunkel",
              "wieder": true
            },
            {
              "schrift": "salado / salada",
              "lerntext": "salado / salada",
              "de": "salzig",
              "wieder": true
            },
            {
              "schrift": "picante",
              "lerntext": "picante",
              "de": "scharf (Geschmack)",
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
          "lerntext": "es muy [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "amable",
              "lerntext": "amable",
              "de": "freundlich"
            },
            {
              "schrift": "inteligente",
              "lerntext": "inteligente",
              "de": "intelligent"
            },
            {
              "schrift": "loco / loca",
              "lerntext": "loco / loca",
              "de": "verrückt"
            },
            {
              "schrift": "extraño / extraña",
              "lerntext": "extraño / extraña",
              "de": "seltsam"
            },
            {
              "schrift": "normal",
              "lerntext": "normal",
              "de": "normal"
            },
            {
              "schrift": "lleno / llena",
              "lerntext": "lleno / llena",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "vacío / vacía",
              "lerntext": "vacío / vacía",
              "de": "leer",
              "wieder": true
            },
            {
              "schrift": "rico / rica",
              "lerntext": "rico / rica",
              "de": "reich",
              "wieder": true
            },
            {
              "schrift": "pobre",
              "lerntext": "pobre",
              "de": "arm",
              "wieder": true
            },
            {
              "schrift": "guapo / guapa",
              "lerntext": "guapo / guapa",
              "de": "gutaussehend",
              "wieder": true
            },
            {
              "schrift": "menor",
              "lerntext": "menor",
              "de": "jünger",
              "wieder": true
            },
            {
              "schrift": "mejor",
              "lerntext": "mejor",
              "de": "besser",
              "wieder": true
            },
            {
              "schrift": "peor",
              "lerntext": "peor",
              "de": "schlechter",
              "wieder": true
            },
            {
              "schrift": "delgado / delgada",
              "lerntext": "delgado / delgada",
              "de": "schlank",
              "wieder": true
            },
            {
              "schrift": "ocupado / ocupada",
              "lerntext": "ocupado / ocupada",
              "de": "beschäftigt",
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
          "lerntext": "es muy [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "especial",
              "lerntext": "especial",
              "de": "besonders"
            },
            {
              "schrift": "diferente",
              "lerntext": "diferente",
              "de": "anders"
            },
            {
              "schrift": "igual",
              "lerntext": "igual",
              "de": "gleich"
            },
            {
              "schrift": "posible",
              "lerntext": "posible",
              "de": "möglich"
            },
            {
              "schrift": "imposible",
              "lerntext": "imposible",
              "de": "unmöglich"
            },
            {
              "schrift": "amable",
              "lerntext": "amable",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "inteligente",
              "lerntext": "inteligente",
              "de": "intelligent",
              "wieder": true
            },
            {
              "schrift": "loco / loca",
              "lerntext": "loco / loca",
              "de": "verrückt",
              "wieder": true
            },
            {
              "schrift": "extraño / extraña",
              "lerntext": "extraño / extraña",
              "de": "seltsam",
              "wieder": true
            },
            {
              "schrift": "normal",
              "lerntext": "normal",
              "de": "normal",
              "wieder": true
            },
            {
              "schrift": "lleno / llena",
              "lerntext": "lleno / llena",
              "de": "voll",
              "wieder": true
            },
            {
              "schrift": "vacío / vacía",
              "lerntext": "vacío / vacía",
              "de": "leer",
              "wieder": true
            },
            {
              "schrift": "rico / rica",
              "lerntext": "rico / rica",
              "de": "reich",
              "wieder": true
            },
            {
              "schrift": "pobre",
              "lerntext": "pobre",
              "de": "arm",
              "wieder": true
            },
            {
              "schrift": "guapo / guapa",
              "lerntext": "guapo / guapa",
              "de": "gutaussehend",
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
          "lerntext": "es muy [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "necesario / necesaria",
              "lerntext": "necesario / necesaria",
              "de": "nötig"
            },
            {
              "schrift": "especial",
              "lerntext": "especial",
              "de": "besonders",
              "wieder": true
            },
            {
              "schrift": "diferente",
              "lerntext": "diferente",
              "de": "anders",
              "wieder": true
            },
            {
              "schrift": "igual",
              "lerntext": "igual",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "posible",
              "lerntext": "posible",
              "de": "möglich",
              "wieder": true
            },
            {
              "schrift": "imposible",
              "lerntext": "imposible",
              "de": "unmöglich",
              "wieder": true
            },
            {
              "schrift": "amable",
              "lerntext": "amable",
              "de": "freundlich",
              "wieder": true
            },
            {
              "schrift": "inteligente",
              "lerntext": "inteligente",
              "de": "intelligent",
              "wieder": true
            },
            {
              "schrift": "loco / loca",
              "lerntext": "loco / loca",
              "de": "verrückt",
              "wieder": true
            },
            {
              "schrift": "extraño / extraña",
              "lerntext": "extraño / extraña",
              "de": "seltsam",
              "wieder": true
            },
            {
              "schrift": "normal",
              "lerntext": "normal",
              "de": "normal",
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
          "lerntext": "es muy [Slot]"
        },
        "frameDe": "Es ist sehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "necesario / necesaria",
              "lerntext": "necesario / necesaria",
              "de": "nötig",
              "wieder": true
            },
            {
              "schrift": "especial",
              "lerntext": "especial",
              "de": "besonders",
              "wieder": true
            },
            {
              "schrift": "diferente",
              "lerntext": "diferente",
              "de": "anders",
              "wieder": true
            },
            {
              "schrift": "igual",
              "lerntext": "igual",
              "de": "gleich",
              "wieder": true
            },
            {
              "schrift": "posible",
              "lerntext": "posible",
              "de": "möglich",
              "wieder": true
            },
            {
              "schrift": "imposible",
              "lerntext": "imposible",
              "de": "unmöglich",
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
          "lerntext": "lo hago [Slot]"
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
          "lerntext": "lo hago [Slot]"
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
          "lerntext": "lo hago [Slot]"
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
          "lerntext": "lo hago [Slot]"
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
          "lerntext": "lo hago [Slot]"
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
          "lerntext": "lo hago [Slot]"
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
          "lerntext": "lo hago [Slot]"
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
          "lerntext": "es para [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "otro / otra",
              "lerntext": "otro / otra",
              "de": "anderer"
            },
            {
              "schrift": "mismo / misma",
              "lerntext": "mismo / misma",
              "de": "derselbe"
            },
            {
              "schrift": "usted",
              "lerntext": "usted",
              "de": "Sie (Höflichkeitsform)"
            },
            {
              "schrift": "ellos / ellas",
              "lerntext": "ellos / ellas",
              "de": "sie (Plural)"
            },
            {
              "schrift": "ustedes",
              "lerntext": "ustedes",
              "de": "Sie (Plural, Höflichkeitsform)"
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
          "lerntext": "es para [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "los / las",
              "lerntext": "los / las",
              "de": "sie (Objektpronomen, Plural)"
            },
            {
              "schrift": "le / les",
              "lerntext": "le / les",
              "de": "ihm"
            },
            {
              "schrift": "su / sus",
              "lerntext": "su / sus",
              "de": "sein"
            },
            {
              "schrift": "vuestro / vuestra",
              "lerntext": "vuestro / vuestra",
              "de": "euer"
            },
            {
              "schrift": "ese / esa",
              "lerntext": "ese / esa",
              "de": "dieser"
            },
            {
              "schrift": "otro / otra",
              "lerntext": "otro / otra",
              "de": "anderer",
              "wieder": true
            },
            {
              "schrift": "mismo / misma",
              "lerntext": "mismo / misma",
              "de": "derselbe",
              "wieder": true
            },
            {
              "schrift": "usted",
              "lerntext": "usted",
              "de": "Sie (Höflichkeitsform)",
              "wieder": true
            },
            {
              "schrift": "ellos / ellas",
              "lerntext": "ellos / ellas",
              "de": "sie (Plural)",
              "wieder": true
            },
            {
              "schrift": "ustedes",
              "lerntext": "ustedes",
              "de": "Sie (Plural, Höflichkeitsform)",
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
          "lerntext": "es para [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "aquel / aquella",
              "lerntext": "aquel / aquella",
              "de": "jener"
            },
            {
              "schrift": "eso",
              "lerntext": "eso",
              "de": "das (neutral)"
            },
            {
              "schrift": "alguien",
              "lerntext": "alguien",
              "de": "jemand"
            },
            {
              "schrift": "nada",
              "lerntext": "nada",
              "de": "nichts"
            },
            {
              "schrift": "nadie",
              "lerntext": "nadie",
              "de": "niemand"
            },
            {
              "schrift": "los / las",
              "lerntext": "los / las",
              "de": "sie (Objektpronomen, Plural)",
              "wieder": true
            },
            {
              "schrift": "le / les",
              "lerntext": "le / les",
              "de": "ihm",
              "wieder": true
            },
            {
              "schrift": "su / sus",
              "lerntext": "su / sus",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "vuestro / vuestra",
              "lerntext": "vuestro / vuestra",
              "de": "euer",
              "wieder": true
            },
            {
              "schrift": "ese / esa",
              "lerntext": "ese / esa",
              "de": "dieser",
              "wieder": true
            },
            {
              "schrift": "otro / otra",
              "lerntext": "otro / otra",
              "de": "anderer",
              "wieder": true
            },
            {
              "schrift": "mismo / misma",
              "lerntext": "mismo / misma",
              "de": "derselbe",
              "wieder": true
            },
            {
              "schrift": "usted",
              "lerntext": "usted",
              "de": "Sie (Höflichkeitsform)",
              "wieder": true
            },
            {
              "schrift": "ellos / ellas",
              "lerntext": "ellos / ellas",
              "de": "sie (Plural)",
              "wieder": true
            },
            {
              "schrift": "ustedes",
              "lerntext": "ustedes",
              "de": "Sie (Plural, Höflichkeitsform)",
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
          "lerntext": "es para [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "alguno / alguna",
              "lerntext": "alguno / alguna",
              "de": "irgendein"
            },
            {
              "schrift": "aquel / aquella",
              "lerntext": "aquel / aquella",
              "de": "jener",
              "wieder": true
            },
            {
              "schrift": "eso",
              "lerntext": "eso",
              "de": "das (neutral)",
              "wieder": true
            },
            {
              "schrift": "alguien",
              "lerntext": "alguien",
              "de": "jemand",
              "wieder": true
            },
            {
              "schrift": "nada",
              "lerntext": "nada",
              "de": "nichts",
              "wieder": true
            },
            {
              "schrift": "nadie",
              "lerntext": "nadie",
              "de": "niemand",
              "wieder": true
            },
            {
              "schrift": "los / las",
              "lerntext": "los / las",
              "de": "sie (Objektpronomen, Plural)",
              "wieder": true
            },
            {
              "schrift": "le / les",
              "lerntext": "le / les",
              "de": "ihm",
              "wieder": true
            },
            {
              "schrift": "su / sus",
              "lerntext": "su / sus",
              "de": "sein",
              "wieder": true
            },
            {
              "schrift": "vuestro / vuestra",
              "lerntext": "vuestro / vuestra",
              "de": "euer",
              "wieder": true
            },
            {
              "schrift": "ese / esa",
              "lerntext": "ese / esa",
              "de": "dieser",
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
          "lerntext": "es para [Slot]"
        },
        "frameDe": "Es ist für [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "alguno / alguna",
              "lerntext": "alguno / alguna",
              "de": "irgendein",
              "wieder": true
            },
            {
              "schrift": "aquel / aquella",
              "lerntext": "aquel / aquella",
              "de": "jener",
              "wieder": true
            },
            {
              "schrift": "eso",
              "lerntext": "eso",
              "de": "das (neutral)",
              "wieder": true
            },
            {
              "schrift": "alguien",
              "lerntext": "alguien",
              "de": "jemand",
              "wieder": true
            },
            {
              "schrift": "nada",
              "lerntext": "nada",
              "de": "nichts",
              "wieder": true
            },
            {
              "schrift": "nadie",
              "lerntext": "nadie",
              "de": "niemand",
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
          "lerntext": "está [Slot] la casa"
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
          "lerntext": "está [Slot] la casa"
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
          "lerntext": "está [Slot] la casa"
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
          "lerntext": "está [Slot] la casa"
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
          "lerntext": "vengo [Slot] puedo"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "mientras",
              "lerntext": "mientras",
              "de": "während"
            },
            {
              "schrift": "además",
              "lerntext": "además",
              "de": "außerdem"
            },
            {
              "schrift": "sin embargo",
              "lerntext": "sin embargo",
              "de": "trotzdem"
            },
            {
              "schrift": "por eso",
              "lerntext": "por eso",
              "de": "deshalb"
            },
            {
              "schrift": "así que",
              "lerntext": "así que",
              "de": "also"
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
          "lerntext": "vengo [Slot] puedo"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "noch"
            },
            {
              "schrift": "mientras",
              "lerntext": "mientras",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "además",
              "lerntext": "además",
              "de": "außerdem",
              "wieder": true
            },
            {
              "schrift": "sin embargo",
              "lerntext": "sin embargo",
              "de": "trotzdem",
              "wieder": true
            },
            {
              "schrift": "por eso",
              "lerntext": "por eso",
              "de": "deshalb",
              "wieder": true
            },
            {
              "schrift": "así que",
              "lerntext": "así que",
              "de": "also",
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
          "lerntext": "vengo [Slot] puedo"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "noch",
              "wieder": true
            },
            {
              "schrift": "mientras",
              "lerntext": "mientras",
              "de": "während",
              "wieder": true
            },
            {
              "schrift": "además",
              "lerntext": "además",
              "de": "außerdem",
              "wieder": true
            },
            {
              "schrift": "sin embargo",
              "lerntext": "sin embargo",
              "de": "trotzdem",
              "wieder": true
            },
            {
              "schrift": "por eso",
              "lerntext": "por eso",
              "de": "deshalb",
              "wieder": true
            },
            {
              "schrift": "así que",
              "lerntext": "así que",
              "de": "also",
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
          "lerntext": "¿[Slot] es?"
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
          "lerntext": "¿[Slot] es?"
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
          "lerntext": "¿[Slot] es?"
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
          "lerntext": "[Slot] libro"
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
          "lerntext": "[Slot] libro"
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
          "lerntext": "[Slot] libro"
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
          "lerntext": "yo he [Slot]"
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mirado",
              "lerntext": "mirado",
              "de": "schauen"
            },
            {
              "schrift": "comprado",
              "lerntext": "comprado",
              "de": "kaufen"
            },
            {
              "schrift": "visto",
              "lerntext": "visto",
              "de": "sehen"
            },
            {
              "schrift": "hecho",
              "lerntext": "hecho",
              "de": "machen"
            },
            {
              "schrift": "encontrado",
              "lerntext": "encontrado",
              "de": "finden"
            },
            {
              "schrift": "tomado",
              "lerntext": "tomado",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "leído",
              "lerntext": "leído",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "escrito",
              "lerntext": "escrito",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "oído",
              "lerntext": "oído",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "perdido",
              "lerntext": "perdido",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "enviado",
              "lerntext": "enviado",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "cambiado",
              "lerntext": "cambiado",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "entendido",
              "lerntext": "entendido",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "lavado",
              "lerntext": "lavado",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "vendido",
              "lerntext": "vendido",
              "de": "verkaufen",
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
          "lerntext": "yo he [Slot]"
        },
        "frameDe": "ich habe [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tomado",
              "lerntext": "tomado",
              "de": "nehmen"
            },
            {
              "schrift": "leído",
              "lerntext": "leído",
              "de": "lesen"
            },
            {
              "schrift": "escrito",
              "lerntext": "escrito",
              "de": "schreiben"
            },
            {
              "schrift": "oído",
              "lerntext": "oído",
              "de": "hören"
            },
            {
              "schrift": "perdido",
              "lerntext": "perdido",
              "de": "verlieren"
            },
            {
              "schrift": "mirado",
              "lerntext": "mirado",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "comprado",
              "lerntext": "comprado",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "visto",
              "lerntext": "visto",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "hecho",
              "lerntext": "hecho",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "encontrado",
              "lerntext": "encontrado",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "enviado",
              "lerntext": "enviado",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "cambiado",
              "lerntext": "cambiado",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "entendido",
              "lerntext": "entendido",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "ayudado",
              "lerntext": "ayudado",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "vivido",
              "lerntext": "vivido",
              "de": "leben",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabajado",
              "lerntext": "trabajado",
              "de": "arbeiten"
            },
            {
              "schrift": "jugado",
              "lerntext": "jugado",
              "de": "spielen"
            },
            {
              "schrift": "bailado",
              "lerntext": "bailado",
              "de": "tanzen"
            },
            {
              "schrift": "dormido",
              "lerntext": "dormido",
              "de": "schlafen"
            },
            {
              "schrift": "esperado",
              "lerntext": "esperado",
              "de": "warten"
            },
            {
              "schrift": "buscado",
              "lerntext": "buscado",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "preguntado",
              "lerntext": "preguntado",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "pagado",
              "lerntext": "pagado",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "ayudado",
              "lerntext": "ayudado",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "enviado",
              "lerntext": "enviado",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "cambiado",
              "lerntext": "cambiado",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "reído",
              "lerntext": "reído",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "necesitado",
              "lerntext": "necesitado",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "sabido",
              "lerntext": "sabido",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "puesto",
              "lerntext": "puesto",
              "de": "stellen",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscado",
              "lerntext": "buscado",
              "de": "suchen"
            },
            {
              "schrift": "preguntado",
              "lerntext": "preguntado",
              "de": "fragen"
            },
            {
              "schrift": "ayudado",
              "lerntext": "ayudado",
              "de": "helfen"
            },
            {
              "schrift": "pagado",
              "lerntext": "pagado",
              "de": "bezahlen"
            },
            {
              "schrift": "trabajado",
              "lerntext": "trabajado",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "bailado",
              "lerntext": "bailado",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "dormido",
              "lerntext": "dormido",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "jugado",
              "lerntext": "jugado",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "esperado",
              "lerntext": "esperado",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "enviado",
              "lerntext": "enviado",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "dado",
              "lerntext": "dado",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "comido",
              "lerntext": "comido",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "usado",
              "lerntext": "usado",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "comenzado",
              "lerntext": "comenzado",
              "de": "beginnen",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ganado",
              "lerntext": "ganado",
              "de": "gewinnen"
            },
            {
              "schrift": "entendido",
              "lerntext": "entendido",
              "de": "verstehen"
            },
            {
              "schrift": "dado",
              "lerntext": "dado",
              "de": "geben"
            },
            {
              "schrift": "dicho",
              "lerntext": "dicho",
              "de": "sagen"
            },
            {
              "schrift": "hablado",
              "lerntext": "hablado",
              "de": "sprechen"
            },
            {
              "schrift": "cerrado",
              "lerntext": "cerrado",
              "de": "schließen",
              "wieder": true
            },
            {
              "schrift": "abierto",
              "lerntext": "abierto",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "lavado",
              "lerntext": "lavado",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "muerto",
              "lerntext": "muerto",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "quedado",
              "lerntext": "quedado",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "podido",
              "lerntext": "podido",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "debido",
              "lerntext": "debido",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "cambiado",
              "lerntext": "cambiado",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "escuchado",
              "lerntext": "escuchado",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "sentido",
              "lerntext": "sentido",
              "de": "fühlen",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abierto",
              "lerntext": "abierto",
              "de": "öffnen"
            },
            {
              "schrift": "cerrado",
              "lerntext": "cerrado",
              "de": "schließen"
            },
            {
              "schrift": "lavado",
              "lerntext": "lavado",
              "de": "waschen"
            },
            {
              "schrift": "ganado",
              "lerntext": "ganado",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "entendido",
              "lerntext": "entendido",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "dicho",
              "lerntext": "dicho",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "hablado",
              "lerntext": "hablado",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "dado",
              "lerntext": "dado",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "conseguido",
              "lerntext": "conseguido",
              "de": "erreichen",
              "wieder": true
            },
            {
              "schrift": "llamado",
              "lerntext": "llamado",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "venido",
              "lerntext": "venido",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "pensado",
              "lerntext": "pensado",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "limpiado",
              "lerntext": "limpiado",
              "de": "putzen",
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
          "lerntext": "tú [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "miras",
              "lerntext": "miras",
              "de": "schauen"
            },
            {
              "schrift": "compras",
              "lerntext": "compras",
              "de": "kaufen"
            },
            {
              "schrift": "ves",
              "lerntext": "ves",
              "de": "sehen"
            },
            {
              "schrift": "haces",
              "lerntext": "haces",
              "de": "machen"
            },
            {
              "schrift": "encuentras",
              "lerntext": "encuentras",
              "de": "finden"
            },
            {
              "schrift": "tomas",
              "lerntext": "tomas",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "lees",
              "lerntext": "lees",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "escribes",
              "lerntext": "escribes",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "vas",
              "lerntext": "vas",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "creas",
              "lerntext": "creas",
              "de": "erschaffen",
              "wieder": true
            },
            {
              "schrift": "explicas",
              "lerntext": "explicas",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "te duchas",
              "lerntext": "te duchas",
              "de": "duschen",
              "wieder": true
            },
            {
              "schrift": "viajas",
              "lerntext": "viajas",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "crees",
              "lerntext": "crees",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "dejas",
              "lerntext": "dejas",
              "de": "lassen",
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
          "lerntext": "tú [Slot]"
        },
        "frameDe": "du [Slot].",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tomas",
              "lerntext": "tomas",
              "de": "nehmen"
            },
            {
              "schrift": "lees",
              "lerntext": "lees",
              "de": "lesen"
            },
            {
              "schrift": "escribes",
              "lerntext": "escribes",
              "de": "schreiben"
            },
            {
              "schrift": "miras",
              "lerntext": "miras",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "compras",
              "lerntext": "compras",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "ves",
              "lerntext": "ves",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "haces",
              "lerntext": "haces",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "encuentras",
              "lerntext": "encuentras",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "caminas",
              "lerntext": "caminas",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "envías",
              "lerntext": "envías",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "lloras",
              "lerntext": "lloras",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "vendes",
              "lerntext": "vendes",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "vives",
              "lerntext": "vives",
              "de": "leben",
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
          "lerntext": "él [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabaja",
              "lerntext": "trabaja",
              "de": "arbeiten"
            },
            {
              "schrift": "juega",
              "lerntext": "juega",
              "de": "spielen"
            },
            {
              "schrift": "baila",
              "lerntext": "baila",
              "de": "tanzen"
            },
            {
              "schrift": "duerme",
              "lerntext": "duerme",
              "de": "schlafen"
            },
            {
              "schrift": "espera",
              "lerntext": "espera",
              "de": "warten"
            },
            {
              "schrift": "busca",
              "lerntext": "busca",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "ríe",
              "lerntext": "ríe",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "necesita",
              "lerntext": "necesita",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "sabe",
              "lerntext": "sabe",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "pone",
              "lerntext": "pone",
              "de": "stellen",
              "wieder": true
            },
            {
              "schrift": "come",
              "lerntext": "come",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "usa",
              "lerntext": "usa",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "comienza",
              "lerntext": "comienza",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "muere",
              "lerntext": "muere",
              "de": "sterben",
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
          "lerntext": "él [Slot]"
        },
        "frameDe": "er [Slot].",
        "pronouns": [
          {
            "schrift": "él",
            "lerntext": "él",
            "de": "er"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "busca",
              "lerntext": "busca",
              "de": "suchen"
            },
            {
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "fragen"
            },
            {
              "schrift": "trabaja",
              "lerntext": "trabaja",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "baila",
              "lerntext": "baila",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "duerme",
              "lerntext": "duerme",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "juega",
              "lerntext": "juega",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "espera",
              "lerntext": "espera",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "queda",
              "lerntext": "queda",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "puede",
              "lerntext": "puede",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "debe",
              "lerntext": "debe",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "cambia",
              "lerntext": "cambia",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "escucha",
              "lerntext": "escucha",
              "de": "zuhören",
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
          "lerntext": "nosotros / nosotras [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ganamos",
              "lerntext": "ganamos",
              "de": "gewinnen"
            },
            {
              "schrift": "entendemos",
              "lerntext": "entendemos",
              "de": "verstehen"
            },
            {
              "schrift": "damos",
              "lerntext": "damos",
              "de": "geben"
            },
            {
              "schrift": "decimos",
              "lerntext": "decimos",
              "de": "sagen"
            },
            {
              "schrift": "hablamos",
              "lerntext": "hablamos",
              "de": "sprechen"
            },
            {
              "schrift": "abrimos",
              "lerntext": "abrimos",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "sentimos",
              "lerntext": "sentimos",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "conseguimos",
              "lerntext": "conseguimos",
              "de": "erreichen",
              "wieder": true
            },
            {
              "schrift": "llamamos",
              "lerntext": "llamamos",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "venimos",
              "lerntext": "venimos",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "pensamos",
              "lerntext": "pensamos",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "limpiamos",
              "lerntext": "limpiamos",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "vamos",
              "lerntext": "vamos",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "creamos",
              "lerntext": "creamos",
              "de": "erschaffen",
              "wieder": true
            },
            {
              "schrift": "explicamos",
              "lerntext": "explicamos",
              "de": "erklären",
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
          "lerntext": "nosotros / nosotras [Slot]"
        },
        "frameDe": "wir [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrimos",
              "lerntext": "abrimos",
              "de": "öffnen"
            },
            {
              "schrift": "ganamos",
              "lerntext": "ganamos",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "entendemos",
              "lerntext": "entendemos",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "decimos",
              "lerntext": "decimos",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "hablamos",
              "lerntext": "hablamos",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "damos",
              "lerntext": "damos",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "nos duchamos",
              "lerntext": "nos duchamos",
              "de": "duschen",
              "wieder": true
            },
            {
              "schrift": "viajamos",
              "lerntext": "viajamos",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "creemos",
              "lerntext": "creemos",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "dejamos",
              "lerntext": "dejamos",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "caminamos",
              "lerntext": "caminamos",
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
          "schrift": "ella [Slot]",
          "lerntext": "ella [Slot]"
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viven",
              "lerntext": "viven",
              "de": "leben"
            },
            {
              "schrift": "quedan",
              "lerntext": "quedan",
              "de": "bleiben"
            },
            {
              "schrift": "ríen",
              "lerntext": "ríen",
              "de": "lachen"
            },
            {
              "schrift": "lloran",
              "lerntext": "lloran",
              "de": "weinen"
            },
            {
              "schrift": "piensan",
              "lerntext": "piensan",
              "de": "denken"
            },
            {
              "schrift": "creen",
              "lerntext": "creen",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "necesitan",
              "lerntext": "necesitan",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "esperan",
              "lerntext": "esperan",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "envían",
              "lerntext": "envían",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "tienen",
              "lerntext": "tienen",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "venden",
              "lerntext": "venden",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "saben",
              "lerntext": "saben",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "ponen",
              "lerntext": "ponen",
              "de": "stellen",
              "wieder": true
            },
            {
              "schrift": "comen",
              "lerntext": "comen",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "usan",
              "lerntext": "usan",
              "de": "benutzen",
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
          "lerntext": "ella [Slot]"
        },
        "frameDe": "sie [Slot].",
        "pronouns": [
          {
            "schrift": "ella",
            "lerntext": "ella",
            "de": "sie"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "creen",
              "lerntext": "creen",
              "de": "glauben"
            },
            {
              "schrift": "esperan",
              "lerntext": "esperan",
              "de": "warten"
            },
            {
              "schrift": "necesitan",
              "lerntext": "necesitan",
              "de": "brauchen"
            },
            {
              "schrift": "viven",
              "lerntext": "viven",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "quedan",
              "lerntext": "quedan",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "ríen",
              "lerntext": "ríen",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "lloran",
              "lerntext": "lloran",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "piensan",
              "lerntext": "piensan",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "comienzan",
              "lerntext": "comienzan",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "mueren",
              "lerntext": "mueren",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "pueden",
              "lerntext": "pueden",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "deben",
              "lerntext": "deben",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "cambian",
              "lerntext": "cambian",
              "de": "ändern",
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
          "lerntext": "es más [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant"
            },
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig"
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig"
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich"
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer"
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
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
          "lerntext": "es más [Slot]"
        },
        "frameDe": "Das ist mehr [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig"
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            },
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant",
              "wieder": true
            },
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig",
              "wieder": true
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig",
              "wieder": true
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
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
          "lerntext": "soy tan [Slot] como tú"
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
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein"
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt"
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung"
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
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
            "de": "wenn"
          }
        ],
        "id": "27.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "soy tan [Slot] como tú",
          "lerntext": "soy tan [Slot] como tú"
        },
        "frameDe": "bin so [Slot] wie du.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch"
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß"
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt"
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu"
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
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
          "lerntext": "yo me siento [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde"
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig"
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark"
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach"
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
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
          "lerntext": "yo me siento [Slot]"
        },
        "frameDe": "ich fühle mich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch"
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "triste",
              "lerntext": "triste",
              "de": "traurig",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
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
          "lerntext": "nosotros / nosotras nos vemos [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
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
          "lerntext": "nosotros / nosotras nos vemos [Slot]"
        },
        "frameDe": "wir treffen uns [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
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
          "lerntext": "me quedo aquí [Slot] estoy cansado"
        },
        "frameDe": "Ich bleibe hier, [Slot] ich müde bin.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil"
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "wenn"
            },
            {
              "schrift": "aunque",
              "lerntext": "aunque",
              "de": "obwohl"
            },
            {
              "schrift": "cuando",
              "lerntext": "cuando",
              "de": "wenn"
            },
            {
              "schrift": "pero",
              "lerntext": "pero",
              "de": "aber"
            },
            {
              "schrift": "o",
              "lerntext": "o",
              "de": "oder",
              "wieder": true
            },
            {
              "schrift": "y",
              "lerntext": "y",
              "de": "und",
              "wieder": true
            },
            {
              "schrift": "entonces",
              "lerntext": "entonces",
              "de": "also",
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
          "lerntext": "me quedo aquí [Slot] estoy cansado"
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
              "schrift": "y",
              "lerntext": "y",
              "de": "und"
            },
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "wenn",
              "wieder": true
            },
            {
              "schrift": "cuando",
              "lerntext": "cuando",
              "de": "wenn",
              "wieder": true
            },
            {
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil",
              "wieder": true
            },
            {
              "schrift": "aunque",
              "lerntext": "aunque",
              "de": "obwohl",
              "wieder": true
            },
            {
              "schrift": "pero",
              "lerntext": "pero",
              "de": "aber",
              "wieder": true
            },
            {
              "schrift": "entonces",
              "lerntext": "entonces",
              "de": "also",
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
          "lerntext": "creo que es [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach"
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch"
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz"
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang"
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
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
            "de": "der"
          }
        ],
        "id": "29.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "creo que es [Slot]",
          "lerntext": "creo que es [Slot]"
        },
        "frameDe": "Ich glaube, dass es [Slot] ist.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß"
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
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
          "lerntext": "si tengo tiempo, quiero [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben"
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben"
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen"
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen"
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken"
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
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
          "lerntext": "si tengo tiempo, quiero [Slot]"
        },
        "frameDe": "Wenn ich Zeit habe, will ich [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten"
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
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
          "lerntext": "¿puedes [Slot], por favor?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten"
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen"
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten"
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen",
              "wieder": true
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen",
              "wieder": true
            },
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
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
          "schrift": "¿puedes [Slot], por favor?",
          "lerntext": "¿puedes [Slot], por favor?"
        },
        "frameDe": "Kannst du bitte [Slot]?",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen"
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen"
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen"
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen"
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
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
          "lerntext": "tú tienes que [Slot]"
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen"
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen"
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben"
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen"
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen"
            },
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
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
          "lerntext": "tú tienes que [Slot]"
        },
        "frameDe": "du musst [Slot].",
        "pronouns": [
          {
            "schrift": "tú",
            "lerntext": "tú",
            "de": "du"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen"
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
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
          "lerntext": "yo doy el libro a [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
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
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind"
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau"
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht",
              "wieder": true
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
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
          "lerntext": "yo doy el libro a [Slot]"
        },
        "frameDe": "ich gebe [Slot] das Buch.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
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
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
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
          "lerntext": "yo enseño la ciudad a [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
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
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind"
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau"
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
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
          "lerntext": "yo enseño la ciudad a [Slot]"
        },
        "frameDe": "ich zeige [Slot] die Stadt.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind",
              "wieder": true
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
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
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
              "wieder": true
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute",
              "wieder": true
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
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
          "lerntext": "yo quiero un vaso de [Slot]"
        },
        "frameDe": "ich möchte ein Glas [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser"
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee",
              "wieder": true
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld",
              "wieder": true
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer",
              "wieder": true
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "cielo",
              "lerntext": "cielo",
              "de": "Himmel",
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
          "lerntext": "nosotros / nosotras tenemos suficiente [Slot]"
        },
        "frameDe": "wir haben genug [Slot].",
        "pronouns": [
          {
            "schrift": "nosotros / nosotras",
            "lerntext": "nosotros / nosotras",
            "de": "wir"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld"
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit"
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde",
              "wieder": true
            },
            {
              "schrift": "pasaporte",
              "lerntext": "pasaporte",
              "de": "Reisepass",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum",
              "wieder": true
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn",
              "wieder": true
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "wieder": true
            },
            {
              "schrift": "dolor",
              "lerntext": "dolor",
              "de": "Schmerz",
              "wieder": true
            },
            {
              "schrift": "zapato",
              "lerntext": "zapato",
              "de": "Schuh",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
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
          "lerntext": "yo espero desde hace una [Slot]"
        },
        "frameDe": "ich warte seit einer [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde"
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute"
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche"
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht"
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung",
              "wieder": true
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche",
              "wieder": true
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand",
              "wieder": true
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "respuesta",
              "lerntext": "respuesta",
              "de": "Antwort",
              "wieder": true
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde",
              "wieder": true
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche",
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
          "lerntext": "yo espero desde hace una [Slot]"
        },
        "frameDe": "ich warte seit einem [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag"
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund",
              "wieder": true
            },
            {
              "schrift": "plato",
              "lerntext": "plato",
              "de": "Teller",
              "wieder": true
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug",
              "wieder": true
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind",
              "wieder": true
            },
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus",
              "wieder": true
            },
            {
              "schrift": "parque",
              "lerntext": "parque",
              "de": "Park",
              "wieder": true
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger",
              "wieder": true
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper",
              "wieder": true
            },
            {
              "schrift": "cabeza",
              "lerntext": "cabeza",
              "de": "Kopf",
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
          "lerntext": "[Slot] voy a casa"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
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
          "lerntext": "[Slot] voy a casa"
        },
        "frameDe": "[Slot] gehe ich nach Hause.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
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
          "lerntext": "yo me gustaría [Slot]"
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben"
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben"
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen"
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen"
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken"
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
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
          "lerntext": "yo me gustaría [Slot]"
        },
        "frameDe": "ich hätte gern [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten"
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser"
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch"
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar",
              "wieder": true
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen",
              "wieder": true
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne",
              "wieder": true
            },
            {
              "schrift": "nombre",
              "lerntext": "nombre",
              "de": "Name",
              "wieder": true
            },
            {
              "schrift": "vez",
              "lerntext": "vez",
              "de": "Mal (z.B. 'eine Mal')",
              "wieder": true
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro",
              "wieder": true
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug",
              "wieder": true
            },
            {
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
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
          "lerntext": "yo pienso que es [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
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
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein"
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt"
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung"
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer"
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß",
              "wieder": true
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt",
              "wieder": true
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu",
              "wieder": true
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch",
              "wieder": true
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
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
          "lerntext": "yo pienso que es [Slot]"
        },
        "frameDe": "ich denke, das ist [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch"
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß"
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt"
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu"
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein",
              "wieder": true
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung",
              "wieder": true
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer",
              "wieder": true
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
              "wieder": true
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm",
              "wieder": true
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit",
              "wieder": true
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig",
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
          "lerntext": "yo lo encuentro muy [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach"
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch"
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz"
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang"
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß",
              "wieder": true
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach",
              "wieder": true
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich",
              "wieder": true
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng",
              "wieder": true
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig",
              "wieder": true
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick",
              "wieder": true
            },
            {
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß",
              "wieder": true
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch",
              "wieder": true
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen",
              "wieder": true
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen",
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
          "lerntext": "yo lo encuentro muy [Slot]"
        },
        "frameDe": "ich finde das sehr [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß"
            },
            {
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach",
              "wieder": true
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch",
              "wieder": true
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz",
              "wieder": true
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang",
              "wieder": true
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber",
              "wieder": true
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig",
              "wieder": true
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich",
              "wieder": true
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam",
              "wieder": true
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig",
              "wieder": true
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell",
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
          "lerntext": "mañana voy a [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen"
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen"
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen"
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen"
            },
            {
              "schrift": "encontrar",
              "lerntext": "encontrar",
              "de": "finden"
            },
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen",
              "wieder": true
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen",
              "wieder": true
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "wieder": true
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen",
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
          "lerntext": "mañana voy a [Slot]"
        },
        "frameDe": "Morgen werde ich [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen"
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen"
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben"
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen",
              "wieder": true
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen",
              "wieder": true
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen",
              "wieder": true
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen",
              "wieder": true
            },
            {
              "schrift": "encontrar",
              "lerntext": "encontrar",
              "de": "finden",
              "wieder": true
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
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
          "lerntext": "yo quiero [Slot] pronto"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten"
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen"
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten"
            },
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
              "wieder": true
            },
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
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
          "lerntext": "yo quiero [Slot] pronto"
        },
        "frameDe": "ich will bald [Slot].",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen"
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen"
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
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
          "lerntext": "este es el hombre que [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "vive",
              "lerntext": "vive",
              "de": "leben"
            },
            {
              "schrift": "queda",
              "lerntext": "queda",
              "de": "bleiben"
            },
            {
              "schrift": "ríe",
              "lerntext": "ríe",
              "de": "lachen"
            },
            {
              "schrift": "llora",
              "lerntext": "llora",
              "de": "weinen"
            },
            {
              "schrift": "piensa",
              "lerntext": "piensa",
              "de": "denken"
            },
            {
              "schrift": "cree",
              "lerntext": "cree",
              "de": "glauben",
              "wieder": true
            },
            {
              "schrift": "necesita",
              "lerntext": "necesita",
              "de": "brauchen",
              "wieder": true
            },
            {
              "schrift": "espera",
              "lerntext": "espera",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "comienza",
              "lerntext": "comienza",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "pierde",
              "lerntext": "pierde",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "muere",
              "lerntext": "muere",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "puede",
              "lerntext": "puede",
              "de": "können",
              "wieder": true
            },
            {
              "schrift": "debe",
              "lerntext": "debe",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "cambia",
              "lerntext": "cambia",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "escucha",
              "lerntext": "escucha",
              "de": "zuhören",
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
            "de": "Mann"
          }
        ],
        "id": "37.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "este es el hombre que [Slot]",
          "lerntext": "este es el hombre que [Slot]"
        },
        "frameDe": "Das ist der Mann, der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cree",
              "lerntext": "cree",
              "de": "glauben"
            },
            {
              "schrift": "espera",
              "lerntext": "espera",
              "de": "warten"
            },
            {
              "schrift": "necesita",
              "lerntext": "necesita",
              "de": "brauchen"
            },
            {
              "schrift": "vive",
              "lerntext": "vive",
              "de": "leben",
              "wieder": true
            },
            {
              "schrift": "queda",
              "lerntext": "queda",
              "de": "bleiben",
              "wieder": true
            },
            {
              "schrift": "ríe",
              "lerntext": "ríe",
              "de": "lachen",
              "wieder": true
            },
            {
              "schrift": "llora",
              "lerntext": "llora",
              "de": "weinen",
              "wieder": true
            },
            {
              "schrift": "piensa",
              "lerntext": "piensa",
              "de": "denken",
              "wieder": true
            },
            {
              "schrift": "siente",
              "lerntext": "siente",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "consigue",
              "lerntext": "consigue",
              "de": "erreichen",
              "wieder": true
            },
            {
              "schrift": "llama",
              "lerntext": "llama",
              "de": "rufen",
              "wieder": true
            },
            {
              "schrift": "viene",
              "lerntext": "viene",
              "de": "kommen",
              "wieder": true
            },
            {
              "schrift": "cierra",
              "lerntext": "cierra",
              "de": "schließen",
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
          "lerntext": "busco un sitio donde se puede [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten"
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen"
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten"
            },
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen",
              "wieder": true
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
              "wieder": true
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen",
              "wieder": true
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen",
              "wieder": true
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären",
              "wieder": true
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen",
              "wieder": true
            },
            {
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen",
              "wieder": true
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen",
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
            "de": "sich"
          }
        ],
        "id": "37.3"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "busco un sitio donde se puede [Slot]",
          "lerntext": "busco un sitio donde se puede [Slot]"
        },
        "frameDe": "Ich suche einen Ort, wo man [Slot] kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen"
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen"
            },
            {
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten",
              "wieder": true
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen",
              "wieder": true
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen",
              "wieder": true
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen",
              "wieder": true
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten",
              "wieder": true
            },
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen",
              "wieder": true
            },
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden",
              "wieder": true
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen",
              "wieder": true
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben",
              "wieder": true
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule"
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität"
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof",
              "wieder": true
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen",
              "wieder": true
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt",
              "wieder": true
            },
            {
              "schrift": "hombre",
              "lerntext": "hombre",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein",
              "wieder": true
            },
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett",
              "wieder": true
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier",
              "wieder": true
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad",
              "wieder": true
            },
            {
              "schrift": "playa",
              "lerntext": "playa",
              "de": "Strand",
              "wieder": true
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz",
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
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof"
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen"
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt"
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant",
              "wieder": true
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel",
              "wieder": true
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität",
              "wieder": true
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus",
              "wieder": true
            },
            {
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule",
              "wieder": true
            },
            {
              "schrift": "hombre",
              "lerntext": "hombre",
              "de": "Mann",
              "wieder": true
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen",
              "wieder": true
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß",
              "wieder": true
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
              "de": "Telefon",
              "wieder": true
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl",
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
          "lerntext": "quiero [Slot] porque tengo tiempo"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen"
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen"
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben"
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen"
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen"
            },
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen",
              "wieder": true
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen",
              "wieder": true
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen",
              "wieder": true
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen",
              "wieder": true
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen",
              "wieder": true
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören",
              "wieder": true
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen",
              "wieder": true
            },
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren",
              "wieder": true
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben",
              "wieder": true
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können",
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
          "lerntext": "quiero [Slot] porque tengo tiempo"
        },
        "frameDe": "Ich möchte [Slot], weil ich Zeit habe.",
        "pronouns": [
          {
            "schrift": "yo",
            "lerntext": "yo",
            "de": "ich"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen"
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen",
              "wieder": true
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen",
              "wieder": true
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen",
              "wieder": true
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen",
              "wieder": true
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben",
              "wieder": true
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen",
              "wieder": true
            },
            {
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern",
              "wieder": true
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören",
              "wieder": true
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen",
              "wieder": true
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)",
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
