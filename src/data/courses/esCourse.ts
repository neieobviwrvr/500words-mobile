// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_es.py
// Neu bauen: python bauplan.py es --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// 24 Module, 148 Lektionen.

import { CourseModuleData } from '../courseTypes';

export const SPANISH_COURSE: CourseModuleData[] =
[
  {
    "number": 1,
    "title": "Ich bin, du bist",
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
            "schrift": "ser",
            "lerntext": "ser",
            "de": "sein (dauerhaft)"
          }
        ],
        "id": "1.1"
      },
      {
        "kind": "frame",
        "frame": {
          "schrift": "nosotros / nosotras soy [Slot]",
          "lerntext": "nosotros / nosotras soy [Slot]"
        },
        "frameDe": "wir bin [Slot].",
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
              "de": "Chef, Chefin"
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund, Freundin"
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind, Junge/Mädchen"
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
              "de": "sympathisch, nett"
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch, schön"
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
        "id": "1.5"
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
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett"
            },
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
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr"
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
              "schrift": "yo",
              "lerntext": "yo",
              "de": "ich"
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig"
            }
          ]
        ],
        "newCount": 4,
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
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater"
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder, Schwester"
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch, nett"
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr"
            },
            {
              "schrift": "tú",
              "lerntext": "tú",
              "de": "du"
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde"
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund, Freundin"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [],
        "id": "2.2"
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
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche"
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch"
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster"
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder, Schwester"
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
              "de": "Telefon"
            },
            {
              "schrift": "madre",
              "lerntext": "madre",
              "de": "Mutter"
            },
            {
              "schrift": "bonito / bonita",
              "lerntext": "bonito / bonita",
              "de": "hübsch, schön"
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
            "schrift": "aquí",
            "lerntext": "aquí",
            "de": "hier"
          }
        ],
        "id": "2.3"
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
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro"
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch"
            },
            {
              "schrift": "casa",
              "lerntext": "casa",
              "de": "Haus"
            },
            {
              "schrift": "débil",
              "lerntext": "débil",
              "de": "schwach"
            },
            {
              "schrift": "cama",
              "lerntext": "cama",
              "de": "Bett"
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "2.4"
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
              "de": "Papier, Rolle"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro"
            },
            {
              "schrift": "niño / niña",
              "lerntext": "niño / niña",
              "de": "Kind, Junge/Mädchen"
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster"
            },
            {
              "schrift": "feliz",
              "lerntext": "feliz",
              "de": "glücklich"
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)"
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
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "fuerte",
              "lerntext": "fuerte",
              "de": "stark"
            },
            {
              "schrift": "silla",
              "lerntext": "silla",
              "de": "Stuhl"
            },
            {
              "schrift": "habitación",
              "lerntext": "habitación",
              "de": "Zimmer"
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "tener",
            "lerntext": "tener",
            "de": "haben"
          }
        ],
        "id": "2.6"
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
              "de": "Sohn, Tochter"
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto"
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
              "schrift": "familia",
              "lerntext": "familia",
              "de": "Familie"
            },
            {
              "schrift": "mujer",
              "lerntext": "mujer",
              "de": "Frau"
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch"
            },
            {
              "schrift": "joven",
              "lerntext": "joven",
              "de": "jung"
            },
            {
              "schrift": "padre",
              "lerntext": "padre",
              "de": "Vater"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [],
        "id": "2.7"
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
            "de": "mein, meine"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein, deine"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
            "de": "unser, unsere"
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
              "de": "Chef, Chefin"
            },
            {
              "schrift": "nuestro / nuestra",
              "lerntext": "nuestro / nuestra",
              "de": "unser, unsere"
            },
            {
              "schrift": "mi / mis",
              "lerntext": "mi / mis",
              "de": "mein, meine"
            },
            {
              "schrift": "tu / tus",
              "lerntext": "tu / tus",
              "de": "dein, deine"
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn, Tochter"
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto"
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
          "schrift": "esta es [Slot] casa",
          "lerntext": "esta es [Slot] casa"
        },
        "frameDe": "Das ist [Slot] Haus.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein, meine"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein, deine"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
            "de": "unser, unsere"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mi / mis",
              "lerntext": "mi / mis",
              "de": "mein, meine"
            },
            {
              "schrift": "tu / tus",
              "lerntext": "tu / tus",
              "de": "dein, deine"
            },
            {
              "schrift": "nuestro / nuestra",
              "lerntext": "nuestro / nuestra",
              "de": "unser, unsere"
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)"
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
              "schrift": "brazo",
              "lerntext": "brazo",
              "de": "Arm"
            },
            {
              "schrift": "viejo / vieja",
              "lerntext": "viejo / vieja",
              "de": "alt"
            },
            {
              "schrift": "mano",
              "lerntext": "mano",
              "de": "Hand"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [],
        "id": "2.9"
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
            "de": "mein, meine"
          },
          {
            "schrift": "tu / tus",
            "lerntext": "tu / tus",
            "de": "dein, deine"
          },
          {
            "schrift": "nuestro / nuestra",
            "lerntext": "nuestro / nuestra",
            "de": "unser, unsere"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "mi / mis",
              "lerntext": "mi / mis",
              "de": "mein, meine"
            },
            {
              "schrift": "tu / tus",
              "lerntext": "tu / tus",
              "de": "dein, deine"
            },
            {
              "schrift": "nuestro / nuestra",
              "lerntext": "nuestro / nuestra",
              "de": "unser, unsere"
            },
            {
              "schrift": "este / esta",
              "lerntext": "este / esta",
              "de": "dieser, diese"
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche"
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier, Rolle"
            },
            {
              "schrift": "boca",
              "lerntext": "boca",
              "de": "Mund"
            },
            {
              "schrift": "tener",
              "lerntext": "tener",
              "de": "haben"
            },
            {
              "schrift": "hermano / hermana",
              "lerntext": "hermano / hermana",
              "de": "Bruder, Schwester"
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
          "schrift": "[Slot] está aquí",
          "lerntext": "[Slot] está aquí"
        },
        "frameDe": "[Slot] ist hier.",
        "pronouns": [
          {
            "schrift": "ninguno / ninguna",
            "lerntext": "ninguno / ninguna",
            "de": "keiner, keine"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "ninguno / ninguna",
              "lerntext": "ninguno / ninguna",
              "de": "keiner, keine"
            },
            {
              "schrift": "este / esta",
              "lerntext": "este / esta",
              "de": "dieser, diese"
            },
            {
              "schrift": "ser",
              "lerntext": "ser",
              "de": "sein (dauerhaft)"
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch"
            },
            {
              "schrift": "hijo / hija",
              "lerntext": "hijo / hija",
              "de": "Sohn, Tochter"
            },
            {
              "schrift": "aburrido / aburrida",
              "lerntext": "aburrido / aburrida",
              "de": "langweilig"
            },
            {
              "schrift": "coche",
              "lerntext": "coche",
              "de": "Auto"
            },
            {
              "schrift": "hotel",
              "lerntext": "hotel",
              "de": "Hotel"
            },
            {
              "schrift": "mesa",
              "lerntext": "mesa",
              "de": "Tisch"
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
        "id": "2.11"
      },
      {
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
        "id": "2.12"
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
              "schrift": "querer",
              "lerntext": "querer",
              "de": "wollen, mögen, lieben"
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch"
            },
            {
              "schrift": "simpático / simpática",
              "lerntext": "simpático / simpática",
              "de": "sympathisch, nett"
            },
            {
              "schrift": "vosotros / vosotras",
              "lerntext": "vosotros / vosotras",
              "de": "ihr"
            },
            {
              "schrift": "oficina",
              "lerntext": "oficina",
              "de": "Büro"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "querer",
            "lerntext": "querer",
            "de": "wollen, mögen, lieben"
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
              "de": "Zeit, Wetter"
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld"
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen"
            },
            {
              "schrift": "necesitar",
              "lerntext": "necesitar",
              "de": "brauchen"
            },
            {
              "schrift": "agua",
              "lerntext": "agua",
              "de": "Wasser"
            },
            {
              "schrift": "muy",
              "lerntext": "muy",
              "de": "sehr"
            },
            {
              "schrift": "teléfono",
              "lerntext": "teléfono",
              "de": "Telefon"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "necesitar",
            "lerntext": "necesitar",
            "de": "brauchen"
          }
        ],
        "id": "3.2"
      },
      {
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
        "id": "3.3"
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
              "de": "fertig, clever"
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher"
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld"
            },
            {
              "schrift": "sí",
              "lerntext": "sí",
              "de": "ja"
            },
            {
              "schrift": "tiempo",
              "lerntext": "tiempo",
              "de": "Zeit, Wetter"
            },
            {
              "schrift": "comer",
              "lerntext": "comer",
              "de": "essen"
            },
            {
              "schrift": "pie",
              "lerntext": "pie",
              "de": "Fuß"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "no",
            "lerntext": "no",
            "de": "nein, nicht"
          },
          {
            "schrift": "sí",
            "lerntext": "sí",
            "de": "ja"
          },
          {
            "schrift": "no",
            "lerntext": "no",
            "de": "nein, nicht"
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
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig, clever"
            },
            {
              "schrift": "seguro / segura",
              "lerntext": "seguro / segura",
              "de": "sicher"
            },
            {
              "schrift": "dinero",
              "lerntext": "dinero",
              "de": "Geld"
            },
            {
              "schrift": "cansado / cansada",
              "lerntext": "cansado / cansada",
              "de": "müde"
            },
            {
              "schrift": "querer",
              "lerntext": "querer",
              "de": "wollen, mögen, lieben"
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
              "schrift": "cuál",
              "lerntext": "cuál",
              "de": "welcher, welche"
            },
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas"
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
              "de": "alles, ganz"
            },
            {
              "schrift": "bien",
              "lerntext": "bien",
              "de": "gut"
            },
            {
              "schrift": "nuevo / nueva",
              "lerntext": "nuevo / nueva",
              "de": "neu"
            },
            {
              "schrift": "mal",
              "lerntext": "mal",
              "de": "schlecht"
            },
            {
              "schrift": "por qué",
              "lerntext": "por qué",
              "de": "warum"
            },
            {
              "schrift": "importante",
              "lerntext": "importante",
              "de": "wichtig"
            }
          ]
        ],
        "newCount": 3,
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
              "schrift": "tienda",
              "lerntext": "tienda",
              "de": "Geschäft, Laden"
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof, Station"
            },
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
              "schrift": "adónde",
              "lerntext": "adónde",
              "de": "wohin"
            },
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas"
            },
            {
              "schrift": "todo / toda",
              "lerntext": "todo / toda",
              "de": "alles, ganz"
            },
            {
              "schrift": "cuál",
              "lerntext": "cuál",
              "de": "welcher, welche"
            },
            {
              "schrift": "cuerpo",
              "lerntext": "cuerpo",
              "de": "Körper"
            }
          ]
        ],
        "newCount": 5,
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
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant"
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad, Toilette"
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen"
            },
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
              "schrift": "tienda",
              "lerntext": "tienda",
              "de": "Geschäft, Laden"
            },
            {
              "schrift": "estación",
              "lerntext": "estación",
              "de": "Bahnhof, Station"
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
          "schrift": "¿hay una [Slot] cerca?",
          "lerntext": "¿hay una [Slot] cerca?"
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
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität"
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant"
            },
            {
              "schrift": "aeropuerto",
              "lerntext": "aeropuerto",
              "de": "Flughafen"
            },
            {
              "schrift": "baño",
              "lerntext": "baño",
              "de": "Bad, Toilette"
            },
            {
              "schrift": "adónde",
              "lerntext": "adónde",
              "de": "wohin"
            },
            {
              "schrift": "iglesia",
              "lerntext": "iglesia",
              "de": "Kirche"
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
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität"
            },
            {
              "schrift": "restaurante",
              "lerntext": "restaurante",
              "de": "Restaurant"
            },
            {
              "schrift": "amigo / amiga",
              "lerntext": "amigo / amiga",
              "de": "Freund, Freundin"
            },
            {
              "schrift": "mal",
              "lerntext": "mal",
              "de": "schlecht"
            },
            {
              "schrift": "puerta",
              "lerntext": "puerta",
              "de": "Tür"
            }
          ]
        ],
        "newCount": 2,
        "task": null,
        "newFrameWords": [],
        "id": "5.4"
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
              "de": "Museum"
            },
            {
              "schrift": "hospital",
              "lerntext": "hospital",
              "de": "Krankenhaus"
            },
            {
              "schrift": "universidad",
              "lerntext": "universidad",
              "de": "Universität"
            },
            {
              "schrift": "ventana",
              "lerntext": "ventana",
              "de": "Fenster"
            },
            {
              "schrift": "algo",
              "lerntext": "algo",
              "de": "etwas"
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
        "id": "5.5"
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
            "de": "in, auf, an"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu, nach, an"
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
              "schrift": "sobre",
              "lerntext": "sobre",
              "de": "über, auf"
            },
            {
              "schrift": "entre",
              "lerntext": "entre",
              "de": "zwischen"
            },
            {
              "schrift": "tras",
              "lerntext": "tras",
              "de": "nach, hinter"
            },
            {
              "schrift": "ante",
              "lerntext": "ante",
              "de": "vor, angesichts"
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt"
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "mit"
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
              "schrift": "escuela",
              "lerntext": "escuela",
              "de": "Schule"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "en",
            "lerntext": "en",
            "de": "in, auf, an"
          },
          {
            "schrift": "en",
            "lerntext": "en",
            "de": "in, auf, an"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu, nach, an"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "von, aus"
          },
          {
            "schrift": "con",
            "lerntext": "con",
            "de": "mit"
          },
          {
            "schrift": "sobre",
            "lerntext": "sobre",
            "de": "über, auf"
          },
          {
            "schrift": "de",
            "lerntext": "de",
            "de": "von, aus"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu, nach, an"
          }
        ],
        "id": "5.6"
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
            "de": "in, auf, an"
          },
          {
            "schrift": "a",
            "lerntext": "a",
            "de": "zu, nach, an"
          }
        ],
        "slotGroups": [
          [
            {
              "schrift": "por",
              "lerntext": "por",
              "de": "durch, wegen, für (Grund)"
            },
            {
              "schrift": "hacia",
              "lerntext": "hacia",
              "de": "in Richtung, gegen"
            },
            {
              "schrift": "ante",
              "lerntext": "ante",
              "de": "vor, angesichts"
            },
            {
              "schrift": "tras",
              "lerntext": "tras",
              "de": "nach, hinter"
            },
            {
              "schrift": "entre",
              "lerntext": "entre",
              "de": "zwischen"
            },
            {
              "schrift": "bajo",
              "lerntext": "bajo",
              "de": "unter"
            },
            {
              "schrift": "ciudad",
              "lerntext": "ciudad",
              "de": "Stadt"
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
              "de": "erster, erste"
            },
            {
              "schrift": "segundo / segunda",
              "lerntext": "segundo / segunda",
              "de": "zweiter, zweite"
            },
            {
              "schrift": "por",
              "lerntext": "por",
              "de": "durch, wegen, für (Grund)"
            },
            {
              "schrift": "ocho",
              "lerntext": "ocho",
              "de": "acht"
            },
            {
              "schrift": "cuarenta",
              "lerntext": "cuarenta",
              "de": "vierzig"
            },
            {
              "schrift": "uno",
              "lerntext": "uno",
              "de": "eins"
            },
            {
              "schrift": "trece",
              "lerntext": "trece",
              "de": "dreizehn"
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
              "schrift": "diecisiete",
              "lerntext": "diecisiete",
              "de": "siebzehn"
            },
            {
              "schrift": "siete",
              "lerntext": "siete",
              "de": "sieben"
            },
            {
              "schrift": "veinte",
              "lerntext": "veinte",
              "de": "zwanzig"
            },
            {
              "schrift": "ochenta",
              "lerntext": "ochenta",
              "de": "achtzig"
            },
            {
              "schrift": "treinta",
              "lerntext": "treinta",
              "de": "dreißig"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "por",
            "lerntext": "por",
            "de": "durch, wegen, für (Grund)"
          },
          {
            "schrift": "sin",
            "lerntext": "sin",
            "de": "ohne"
          },
          {
            "schrift": "demasiado",
            "lerntext": "demasiado",
            "de": "zu viel, zu sehr"
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
              "de": "groß, hoch"
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig, klein (Körpergröße)"
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit"
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng, schmal"
            },
            {
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig"
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang"
            },
            {
              "schrift": "seis",
              "lerntext": "seis",
              "de": "sechs"
            },
            {
              "schrift": "diecinueve",
              "lerntext": "diecinueve",
              "de": "neunzehn"
            },
            {
              "schrift": "pequeño / pequeña",
              "lerntext": "pequeño / pequeña",
              "de": "klein"
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
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig, klein (Körpergröße)"
            },
            {
              "schrift": "hacia",
              "lerntext": "hacia",
              "de": "in Richtung, gegen"
            },
            {
              "schrift": "nueve",
              "lerntext": "nueve",
              "de": "neun"
            },
            {
              "schrift": "dieciocho",
              "lerntext": "dieciocho",
              "de": "achtzehn"
            },
            {
              "schrift": "dos",
              "lerntext": "dos",
              "de": "zwei"
            }
          ]
        ],
        "newCount": 1,
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
              "de": "gehen, fahren"
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
              "schrift": "alto / alta",
              "lerntext": "alto / alta",
              "de": "groß, hoch"
            },
            {
              "schrift": "poder",
              "lerntext": "poder",
              "de": "können"
            },
            {
              "schrift": "diez",
              "lerntext": "diez",
              "de": "zehn"
            },
            {
              "schrift": "primero / primera",
              "lerntext": "primero / primera",
              "de": "erster, erste"
            },
            {
              "schrift": "segundo / segunda",
              "lerntext": "segundo / segunda",
              "de": "zweiter, zweite"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "poder",
            "lerntext": "poder",
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
              "de": "machen, tun"
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
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben"
            },
            {
              "schrift": "bailar",
              "lerntext": "bailar",
              "de": "tanzen"
            },
            {
              "schrift": "estrecho / estrecha",
              "lerntext": "estrecho / estrecha",
              "de": "eng, schmal"
            },
            {
              "schrift": "sin",
              "lerntext": "sin",
              "de": "ohne"
            },
            {
              "schrift": "cincuenta",
              "lerntext": "cincuenta",
              "de": "fünfzig"
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
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen, tun"
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen"
            },
            {
              "schrift": "decir",
              "lerntext": "decir",
              "de": "sagen"
            },
            {
              "schrift": "ayudar",
              "lerntext": "ayudar",
              "de": "helfen"
            },
            {
              "schrift": "explicar",
              "lerntext": "explicar",
              "de": "erklären"
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
              "de": "warten, hoffen"
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
              "schrift": "sesenta",
              "lerntext": "sesenta",
              "de": "sechzig"
            },
            {
              "schrift": "tres",
              "lerntext": "tres",
              "de": "drei"
            },
            {
              "schrift": "catorce",
              "lerntext": "catorce",
              "de": "vierzehn"
            },
            {
              "schrift": "ancho / ancha",
              "lerntext": "ancho / ancha",
              "de": "breit"
            },
            {
              "schrift": "gordo / gorda",
              "lerntext": "gordo / gorda",
              "de": "dick"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "deber",
            "lerntext": "deber",
            "de": "sollen, müssen, schulden"
          },
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "der/die/das (Relativpronomen), dass"
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
              "de": "putzen, reinigen"
            },
            {
              "schrift": "esperar",
              "lerntext": "esperar",
              "de": "warten, hoffen"
            },
            {
              "schrift": "comenzar",
              "lerntext": "comenzar",
              "de": "beginnen"
            },
            {
              "schrift": "pagar",
              "lerntext": "pagar",
              "de": "bezahlen"
            },
            {
              "schrift": "setenta",
              "lerntext": "setenta",
              "de": "siebzig"
            },
            {
              "schrift": "jugar",
              "lerntext": "jugar",
              "de": "spielen"
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
              "de": "sprechen, reden"
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören"
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen, ansehen"
            },
            {
              "schrift": "reunión",
              "lerntext": "reunión",
              "de": "Treffen, Sitzung"
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen, anrufen, nennen"
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen"
            },
            {
              "schrift": "limpiar",
              "lerntext": "limpiar",
              "de": "putzen, reinigen"
            },
            {
              "schrift": "lavar",
              "lerntext": "lavar",
              "de": "waschen"
            },
            {
              "schrift": "corto / corta",
              "lerntext": "corto / corta",
              "de": "kurz"
            },
            {
              "schrift": "cuatro",
              "lerntext": "cuatro",
              "de": "vier"
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
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen"
            },
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
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören"
            },
            {
              "schrift": "reunión",
              "lerntext": "reunión",
              "de": "Treffen, Sitzung"
            },
            {
              "schrift": "mirar",
              "lerntext": "mirar",
              "de": "schauen, ansehen"
            },
            {
              "schrift": "quince",
              "lerntext": "quince",
              "de": "fünfzehn"
            },
            {
              "schrift": "noventa",
              "lerntext": "noventa",
              "de": "neunzig"
            }
          ]
        ],
        "newCount": 3,
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
              "de": "verlieren, verpassen"
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
              "de": "bleiben, sich verabreden"
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben"
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören"
            },
            {
              "schrift": "preguntar",
              "lerntext": "preguntar",
              "de": "fragen"
            },
            {
              "schrift": "ver",
              "lerntext": "ver",
              "de": "sehen"
            },
            {
              "schrift": "recibir",
              "lerntext": "recibir",
              "de": "empfangen, bekommen"
            },
            {
              "schrift": "ir",
              "lerntext": "ir",
              "de": "gehen, fahren"
            }
          ]
        ],
        "newCount": 5,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "recibir",
            "lerntext": "recibir",
            "de": "empfangen, bekommen"
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
              "de": "lassen, verlassen"
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen, verdienen"
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen"
            },
            {
              "schrift": "quedar",
              "lerntext": "quedar",
              "de": "bleiben, sich verabreden"
            },
            {
              "schrift": "perder",
              "lerntext": "perder",
              "de": "verlieren, verpassen"
            },
            {
              "schrift": "llorar",
              "lerntext": "llorar",
              "de": "weinen"
            },
            {
              "schrift": "dormir",
              "lerntext": "dormir",
              "de": "schlafen"
            }
          ]
        ],
        "newCount": 4,
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
              "de": "Geschäft, Laden"
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen"
            },
            {
              "schrift": "venir",
              "lerntext": "venir",
              "de": "kommen"
            },
            {
              "schrift": "dejar",
              "lerntext": "dejar",
              "de": "lassen, verlassen"
            },
            {
              "schrift": "ganar",
              "lerntext": "ganar",
              "de": "gewinnen, verdienen"
            },
            {
              "schrift": "llamar",
              "lerntext": "llamar",
              "de": "rufen, anrufen, nennen"
            }
          ]
        ],
        "newCount": 0,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "ir",
            "lerntext": "ir",
            "de": "gehen, fahren"
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
              "schrift": "viajar",
              "lerntext": "viajar",
              "de": "reisen"
            },
            {
              "schrift": "cien",
              "lerntext": "cien",
              "de": "hundert"
            },
            {
              "schrift": "grande",
              "lerntext": "grande",
              "de": "groß"
            },
            {
              "schrift": "abrir",
              "lerntext": "abrir",
              "de": "öffnen"
            },
            {
              "schrift": "mil",
              "lerntext": "mil",
              "de": "tausend"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "viajar",
            "lerntext": "viajar",
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
              "schrift": "correr",
              "lerntext": "correr",
              "de": "laufen, rennen"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben, wohnen"
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen, legen, setzen"
            },
            {
              "schrift": "avión",
              "lerntext": "avión",
              "de": "Flugzeug"
            },
            {
              "schrift": "tren",
              "lerntext": "tren",
              "de": "Zug"
            },
            {
              "schrift": "hablar",
              "lerntext": "hablar",
              "de": "sprechen, reden"
            },
            {
              "schrift": "morir",
              "lerntext": "morir",
              "de": "sterben"
            },
            {
              "schrift": "doce",
              "lerntext": "doce",
              "de": "zwölf"
            }
          ]
        ],
        "newCount": 3,
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
              "de": "schon, bereits"
            },
            {
              "schrift": "entonces",
              "lerntext": "entonces",
              "de": "also, dann"
            },
            {
              "schrift": "todavía",
              "lerntext": "todavía",
              "de": "noch, immer noch"
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
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben, wohnen"
            },
            {
              "schrift": "también",
              "lerntext": "también",
              "de": "auch"
            },
            {
              "schrift": "ayer",
              "lerntext": "ayer",
              "de": "gestern"
            },
            {
              "schrift": "entonces",
              "lerntext": "entonces",
              "de": "also, dann"
            },
            {
              "schrift": "siempre",
              "lerntext": "siempre",
              "de": "immer"
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
            "de": "nur, allein"
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
              "de": "Stunde, Uhrzeit"
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht"
            },
            {
              "schrift": "semana",
              "lerntext": "semana",
              "de": "Woche"
            },
            {
              "schrift": "correr",
              "lerntext": "correr",
              "de": "laufen, rennen"
            },
            {
              "schrift": "día",
              "lerntext": "día",
              "de": "Tag"
            },
            {
              "schrift": "todavía",
              "lerntext": "todavía",
              "de": "noch, immer noch"
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
              "de": "Stunde, Uhrzeit"
            },
            {
              "schrift": "poner",
              "lerntext": "poner",
              "de": "stellen, legen, setzen"
            },
            {
              "schrift": "nunca",
              "lerntext": "nunca",
              "de": "nie"
            },
            {
              "schrift": "pronto",
              "lerntext": "pronto",
              "de": "bald"
            },
            {
              "schrift": "ya",
              "lerntext": "ya",
              "de": "schon, bereits"
            }
          ]
        ],
        "newCount": 2,
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
              "de": "Zeit, Wetter"
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde"
            },
            {
              "schrift": "minuto",
              "lerntext": "minuto",
              "de": "Minute"
            },
            {
              "schrift": "hoy",
              "lerntext": "hoy",
              "de": "heute"
            },
            {
              "schrift": "autobús",
              "lerntext": "autobús",
              "de": "Bus"
            },
            {
              "schrift": "solo",
              "lerntext": "solo",
              "de": "nur, allein"
            }
          ]
        ],
        "newCount": 4,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "querer",
            "lerntext": "querer",
            "de": "wollen, mögen, lieben"
          },
          {
            "schrift": "querer",
            "lerntext": "querer",
            "de": "wollen, mögen, lieben"
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
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee"
            },
            {
              "schrift": "lluvia",
              "lerntext": "lluvia",
              "de": "Regen"
            },
            {
              "schrift": "sol",
              "lerntext": "sol",
              "de": "Sonne"
            },
            {
              "schrift": "viento",
              "lerntext": "viento",
              "de": "Wind"
            },
            {
              "schrift": "leer",
              "lerntext": "leer",
              "de": "lesen"
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
              "de": "mich, mir"
            },
            {
              "schrift": "te",
              "lerntext": "te",
              "de": "dich, dir"
            },
            {
              "schrift": "lo / la",
              "lerntext": "lo / la",
              "de": "ihn, es, sie (Objektpronomen)"
            },
            {
              "schrift": "ella",
              "lerntext": "ella",
              "de": "sie"
            },
            {
              "schrift": "nos",
              "lerntext": "nos",
              "de": "uns"
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg"
            },
            {
              "schrift": "encontrar",
              "lerntext": "encontrar",
              "de": "finden"
            },
            {
              "schrift": "mar",
              "lerntext": "mar",
              "de": "Meer"
            },
            {
              "schrift": "dieciséis",
              "lerntext": "dieciséis",
              "de": "sechzehn"
            },
            {
              "schrift": "cinco",
              "lerntext": "cinco",
              "de": "fünf"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [
          {
            "schrift": "encontrar",
            "lerntext": "encontrar",
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
              "de": "heiß, warm"
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
              "schrift": "trabajar",
              "lerntext": "trabajar",
              "de": "arbeiten"
            },
            {
              "schrift": "lo / la",
              "lerntext": "lo / la",
              "de": "ihn, es, sie (Objektpronomen)"
            },
            {
              "schrift": "caro / cara",
              "lerntext": "caro / cara",
              "de": "teuer"
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
          "schrift": "la comida está [Slot]",
          "lerntext": "la comida está [Slot]"
        },
        "frameDe": "Das Essen ist [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "especialmente",
              "lerntext": "especialmente",
              "de": "besonders"
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß"
            },
            {
              "schrift": "sucio / sucia",
              "lerntext": "sucio / sucia",
              "de": "schmutzig"
            },
            {
              "schrift": "caliente",
              "lerntext": "caliente",
              "de": "heiß, warm"
            },
            {
              "schrift": "frío / fría",
              "lerntext": "frío / fría",
              "de": "kalt"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "10.5"
      },
      {
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
        "id": "10.6"
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
              "schrift": "especialmente",
              "lerntext": "especialmente",
              "de": "besonders"
            },
            {
              "schrift": "crear",
              "lerntext": "crear",
              "de": "erschaffen"
            },
            {
              "schrift": "once",
              "lerntext": "once",
              "de": "elf"
            },
            {
              "schrift": "deber",
              "lerntext": "deber",
              "de": "sollen, müssen, schulden"
            },
            {
              "schrift": "ocho",
              "lerntext": "ocho",
              "de": "acht"
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
              "de": "nehmen, trinken"
            },
            {
              "schrift": "encontrar",
              "lerntext": "encontrar",
              "de": "finden"
            },
            {
              "schrift": "cuarenta",
              "lerntext": "cuarenta",
              "de": "vierzig"
            },
            {
              "schrift": "hora",
              "lerntext": "hora",
              "de": "Stunde, Uhrzeit"
            },
            {
              "schrift": "montaña",
              "lerntext": "montaña",
              "de": "Berg"
            },
            {
              "schrift": "me",
              "lerntext": "me",
              "de": "mich, mir"
            },
            {
              "schrift": "ante",
              "lerntext": "ante",
              "de": "vor, angesichts"
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
              "de": "wissen, können"
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
              "de": "fühlen, spüren, bedauern"
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen"
            },
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen, trinken"
            },
            {
              "schrift": "dar",
              "lerntext": "dar",
              "de": "geben"
            },
            {
              "schrift": "comprar",
              "lerntext": "comprar",
              "de": "kaufen"
            },
            {
              "schrift": "limpio / limpia",
              "lerntext": "limpio / limpia",
              "de": "sauber"
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
              "de": "offen, geöffnet"
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen"
            },
            {
              "schrift": "listo / lista",
              "lerntext": "listo / lista",
              "de": "fertig, clever"
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
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen"
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben"
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen, spüren, bedauern"
            },
            {
              "schrift": "pensar",
              "lerntext": "pensar",
              "de": "denken"
            },
            {
              "schrift": "saber",
              "lerntext": "saber",
              "de": "wissen, können"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
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
              "de": "über, auf"
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
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen"
            },
            {
              "schrift": "peligroso / peligrosa",
              "lerntext": "peligroso / peligrosa",
              "de": "gefährlich"
            },
            {
              "schrift": "abierto / abierta",
              "lerntext": "abierto / abierta",
              "de": "offen, geöffnet"
            },
            {
              "schrift": "vender",
              "lerntext": "vender",
              "de": "verkaufen"
            },
            {
              "schrift": "hacer",
              "lerntext": "hacer",
              "de": "machen, tun"
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
            "de": "also, dann"
          },
          {
            "schrift": "que",
            "lerntext": "que",
            "de": "der/die/das (Relativpronomen), dass"
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
              "de": "vor, angesichts"
            },
            {
              "schrift": "quizás",
              "lerntext": "quizás",
              "de": "vielleicht"
            },
            {
              "schrift": "bastante",
              "lerntext": "bastante",
              "de": "ziemlich, genug"
            },
            {
              "schrift": "hasta",
              "lerntext": "hasta",
              "de": "bis"
            },
            {
              "schrift": "porque",
              "lerntext": "porque",
              "de": "weil"
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
              "schrift": "barato / barata",
              "lerntext": "barato / barata",
              "de": "billig"
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
              "de": "warten, hoffen"
            },
            {
              "schrift": "bastante",
              "lerntext": "bastante",
              "de": "ziemlich, genug"
            },
            {
              "schrift": "quizás",
              "lerntext": "quizás",
              "de": "vielleicht"
            },
            {
              "schrift": "oír",
              "lerntext": "oír",
              "de": "hören"
            },
            {
              "schrift": "cerrado / cerrada",
              "lerntext": "cerrado / cerrada",
              "de": "geschlossen"
            },
            {
              "schrift": "escuchar",
              "lerntext": "escuchar",
              "de": "zuhören"
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
              "de": "richtig, korrekt"
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch, unwahr"
            },
            {
              "schrift": "entender",
              "lerntext": "entender",
              "de": "verstehen"
            },
            {
              "schrift": "noche",
              "lerntext": "noche",
              "de": "Nacht"
            },
            {
              "schrift": "cerrar",
              "lerntext": "cerrar",
              "de": "schließen"
            },
            {
              "schrift": "vivir",
              "lerntext": "vivir",
              "de": "leben, wohnen"
            },
            {
              "schrift": "trabajo",
              "lerntext": "trabajo",
              "de": "Arbeit"
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
              "schrift": "fácil",
              "lerntext": "fácil",
              "de": "einfach"
            },
            {
              "schrift": "correcto / correcta",
              "lerntext": "correcto / correcta",
              "de": "richtig, korrekt"
            },
            {
              "schrift": "falso / falsa",
              "lerntext": "falso / falsa",
              "de": "falsch, unwahr"
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
              "de": "senden, schicken"
            },
            {
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern, wechseln"
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich"
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam"
            },
            {
              "schrift": "rápido / rápida",
              "lerntext": "rápido / rápida",
              "de": "schnell"
            },
            {
              "schrift": "interesante",
              "lerntext": "interesante",
              "de": "interessant"
            },
            {
              "schrift": "también",
              "lerntext": "también",
              "de": "auch"
            }
          ]
        ],
        "newCount": 2,
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
          "schrift": "me duele una [Slot]",
          "lerntext": "me duele una [Slot]"
        },
        "frameDe": "[Slot] tut weh.",
        "pronouns": [
          {
            "schrift": "mi / mis",
            "lerntext": "mi / mis",
            "de": "mein, meine"
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
              "schrift": "cambiar",
              "lerntext": "cambiar",
              "de": "ändern, wechseln"
            },
            {
              "schrift": "enviar",
              "lerntext": "enviar",
              "de": "senden, schicken"
            },
            {
              "schrift": "feo / fea",
              "lerntext": "feo / fea",
              "de": "hässlich"
            },
            {
              "schrift": "lento / lenta",
              "lerntext": "lento / lenta",
              "de": "langsam"
            },
            {
              "schrift": "uno",
              "lerntext": "uno",
              "de": "eins"
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
            "de": "mein, meine"
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
              "de": "Kopf"
            },
            {
              "schrift": "comida",
              "lerntext": "comida",
              "de": "Essen"
            },
            {
              "schrift": "trece",
              "lerntext": "trece",
              "de": "dreizehn"
            },
            {
              "schrift": "con",
              "lerntext": "con",
              "de": "mit"
            },
            {
              "schrift": "diecisiete",
              "lerntext": "diecisiete",
              "de": "siebzehn"
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
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge"
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz"
            },
            {
              "schrift": "dedo",
              "lerntext": "dedo",
              "de": "Finger"
            },
            {
              "schrift": "bajo / baja",
              "lerntext": "bajo / baja",
              "de": "niedrig, klein (Körpergröße)"
            },
            {
              "schrift": "tomar",
              "lerntext": "tomar",
              "de": "nehmen, trinken"
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
              "de": "Bein"
            },
            {
              "schrift": "difícil",
              "lerntext": "difícil",
              "de": "schwierig"
            },
            {
              "schrift": "largo / larga",
              "lerntext": "largo / larga",
              "de": "lang"
            },
            {
              "schrift": "usar",
              "lerntext": "usar",
              "de": "benutzen"
            },
            {
              "schrift": "siete",
              "lerntext": "siete",
              "de": "sieben"
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
              "de": "Teller, Gericht"
            },
            {
              "schrift": "pelo",
              "lerntext": "pelo",
              "de": "Haar"
            },
            {
              "schrift": "museo",
              "lerntext": "museo",
              "de": "Museum"
            },
            {
              "schrift": "veinte",
              "lerntext": "veinte",
              "de": "zwanzig"
            },
            {
              "schrift": "ochenta",
              "lerntext": "ochenta",
              "de": "achtzig"
            },
            {
              "schrift": "escribir",
              "lerntext": "escribir",
              "de": "schreiben"
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
              "de": "Teller, Gericht"
            },
            {
              "schrift": "nieve",
              "lerntext": "nieve",
              "de": "Schnee"
            },
            {
              "schrift": "dulce",
              "lerntext": "dulce",
              "de": "süß"
            },
            {
              "schrift": "treinta",
              "lerntext": "treinta",
              "de": "dreißig"
            },
            {
              "schrift": "pierna",
              "lerntext": "pierna",
              "de": "Bein"
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
              "de": "Schuh"
            },
            {
              "schrift": "os",
              "lerntext": "os",
              "de": "euch"
            },
            {
              "schrift": "tonto / tonta",
              "lerntext": "tonto / tonta",
              "de": "dumm"
            },
            {
              "schrift": "libro",
              "lerntext": "libro",
              "de": "Buch"
            },
            {
              "schrift": "cocina",
              "lerntext": "cocina",
              "de": "Küche"
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
              "de": "Schuh"
            },
            {
              "schrift": "reír",
              "lerntext": "reír",
              "de": "lachen"
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
              "schrift": "ojo",
              "lerntext": "ojo",
              "de": "Auge"
            },
            {
              "schrift": "papel",
              "lerntext": "papel",
              "de": "Papier, Rolle"
            },
            {
              "schrift": "corazón",
              "lerntext": "corazón",
              "de": "Herz"
            },
            {
              "schrift": "calle",
              "lerntext": "calle",
              "de": "Straße"
            },
            {
              "schrift": "seis",
              "lerntext": "seis",
              "de": "sechs"
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
              "de": "Antwort"
            },
            {
              "schrift": "bastante",
              "lerntext": "bastante",
              "de": "ziemlich, genug"
            },
            {
              "schrift": "segundo",
              "lerntext": "segundo",
              "de": "Sekunde"
            },
            {
              "schrift": "buscar",
              "lerntext": "buscar",
              "de": "suchen"
            },
            {
              "schrift": "ducharse",
              "lerntext": "ducharse",
              "de": "duschen"
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
              "de": "Himmel"
            },
            {
              "schrift": "creer",
              "lerntext": "creer",
              "de": "glauben"
            },
            {
              "schrift": "sentir",
              "lerntext": "sentir",
              "de": "fühlen, spüren, bedauern"
            },
            {
              "schrift": "ropa",
              "lerntext": "ropa",
              "de": "Kleidung"
            },
            {
              "schrift": "diecinueve",
              "lerntext": "diecinueve",
              "de": "neunzehn"
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "año",
              "lerntext": "año",
              "de": "Jahr"
            },
            {
              "schrift": "hombre",
              "lerntext": "hombre",
              "de": "Mann, Mensch"
            },
            {
              "schrift": "mundo",
              "lerntext": "mundo",
              "de": "Welt"
            },
            {
              "schrift": "vida",
              "lerntext": "vida",
              "de": "Leben"
            },
            {
              "schrift": "parte",
              "lerntext": "parte",
              "de": "Teil"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
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
              "schrift": "gobierno",
              "lerntext": "gobierno",
              "de": "Regierung"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "palabra",
              "lerntext": "palabra",
              "de": "Wort"
            },
            {
              "schrift": "número",
              "lerntext": "número",
              "de": "Nummer, Zahl"
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
            },
            {
              "schrift": "tarjeta",
              "lerntext": "tarjeta",
              "de": "Karte"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cuenta",
              "lerntext": "cuenta",
              "de": "Rechnung, Konto"
            },
            {
              "schrift": "billete",
              "lerntext": "billete",
              "de": "Fahrschein, Geldschein"
            },
            {
              "schrift": "taxi",
              "lerntext": "taxi",
              "de": "Taxi"
            },
            {
              "schrift": "metro",
              "lerntext": "metro",
              "de": "U-Bahn"
            },
            {
              "schrift": "música",
              "lerntext": "música",
              "de": "Musik"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "canción",
              "lerntext": "canción",
              "de": "Lied"
            },
            {
              "schrift": "fiesta",
              "lerntext": "fiesta",
              "de": "Party, Fest"
            },
            {
              "schrift": "cumpleaños",
              "lerntext": "cumpleaños",
              "de": "Geburtstag"
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "teléfono móvil",
              "lerntext": "teléfono móvil",
              "de": "Handy"
            },
            {
              "schrift": "internet",
              "lerntext": "internet",
              "de": "Internet"
            },
            {
              "schrift": "correo",
              "lerntext": "correo",
              "de": "Post, E-Mail"
            },
            {
              "schrift": "mensaje",
              "lerntext": "mensaje",
              "de": "Nachricht"
            },
            {
              "schrift": "empleado / empleada",
              "lerntext": "empleado / empleada",
              "de": "Angestellter, Angestellte"
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
              "schrift": "sueldo",
              "lerntext": "sueldo",
              "de": "Lohn"
            },
            {
              "schrift": "cita",
              "lerntext": "cita",
              "de": "Termin, Verabredung"
            },
            {
              "schrift": "cara",
              "lerntext": "cara",
              "de": "Gesicht"
            },
            {
              "schrift": "miedo",
              "lerntext": "miedo",
              "de": "Angst"
            },
            {
              "schrift": "alegría",
              "lerntext": "alegría",
              "de": "Freude"
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
              "schrift": "suerte",
              "lerntext": "suerte",
              "de": "Glück (Zufall)"
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
              "schrift": "pregunta",
              "lerntext": "pregunta",
              "de": "Frage"
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
              "schrift": "razón",
              "lerntext": "razón",
              "de": "Grund, Vernunft"
            },
            {
              "schrift": "error",
              "lerntext": "error",
              "de": "Fehler"
            },
            {
              "schrift": "futuro",
              "lerntext": "futuro",
              "de": "Zukunft"
            },
            {
              "schrift": "tema",
              "lerntext": "tema",
              "de": "Thema"
            },
            {
              "schrift": "padres",
              "lerntext": "padres",
              "de": "Eltern"
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
              "schrift": "historia",
              "lerntext": "historia",
              "de": "Geschichte"
            },
            {
              "schrift": "lugar",
              "lerntext": "lugar",
              "de": "Ort"
            },
            {
              "schrift": "ejemplo",
              "lerntext": "ejemplo",
              "de": "Beispiel"
            },
            {
              "schrift": "mes",
              "lerntext": "mes",
              "de": "Monat"
            },
            {
              "schrift": "cosa",
              "lerntext": "cosa",
              "de": "Sache, Ding"
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
              "schrift": "gente",
              "lerntext": "gente",
              "de": "Leute"
            },
            {
              "schrift": "río",
              "lerntext": "río",
              "de": "Fluss"
            },
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
              "schrift": "pueblo",
              "lerntext": "pueblo",
              "de": "Dorf, Volk"
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "barrio",
              "lerntext": "barrio",
              "de": "Stadtviertel"
            },
            {
              "schrift": "plaza",
              "lerntext": "plaza",
              "de": "Platz (Ort)"
            },
            {
              "schrift": "salud",
              "lerntext": "salud",
              "de": "Gesundheit"
            },
            {
              "schrift": "enfermedad",
              "lerntext": "enfermedad",
              "de": "Krankheit"
            },
            {
              "schrift": "médico / médica",
              "lerntext": "médico / médica",
              "de": "Arzt, Ärztin"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "sueño",
              "lerntext": "sueño",
              "de": "Traum, Schläfrigkeit"
            },
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
              "schrift": "amor",
              "lerntext": "amor",
              "de": "Liebe"
            },
            {
              "schrift": "final",
              "lerntext": "final",
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
          "schrift": "aquí está el [Slot]",
          "lerntext": "aquí está el [Slot]"
        },
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "cambio",
              "lerntext": "cambio",
              "de": "Wechsel, Kleingeld"
            },
            {
              "schrift": "diferencia",
              "lerntext": "diferencia",
              "de": "Unterschied"
            },
            {
              "schrift": "tipo",
              "lerntext": "tipo",
              "de": "Typ, Art"
            },
            {
              "schrift": "grupo",
              "lerntext": "grupo",
              "de": "Gruppe"
            },
            {
              "schrift": "equipo",
              "lerntext": "equipo",
              "de": "Team, Ausrüstung"
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
        "frameDe": "Hier ist der [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "estado",
              "lerntext": "estado",
              "de": "Zustand, Staat"
            },
            {
              "schrift": "aire",
              "lerntext": "aire",
              "de": "Luft"
            },
            {
              "schrift": "fin",
              "lerntext": "fin",
              "de": "Ende, Zweck"
            }
          ]
        ],
        "newCount": 3,
        "task": null,
        "newFrameWords": [],
        "id": "15.15"
      },
      {
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
        "id": "15.16"
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
          "schrift": "quiero [Slot]",
          "lerntext": "quiero [Slot]"
        },
        "frameDe": "Ich will [Slot].",
        "pronouns": [],
        "slotGroups": [
          [
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
              "de": "passieren, vorbeigehen, verbringen"
            },
            {
              "schrift": "parecer",
              "lerntext": "parecer",
              "de": "scheinen, aussehen wie"
            },
            {
              "schrift": "llevar",
              "lerntext": "llevar",
              "de": "tragen, bringen, mitnehmen"
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
              "schrift": "seguir",
              "lerntext": "seguir",
              "de": "folgen, weitermachen"
            },
            {
              "schrift": "tratar",
              "lerntext": "tratar",
              "de": "behandeln, versuchen"
            },
            {
              "schrift": "contar",
              "lerntext": "contar",
              "de": "erzählen, zählen"
            },
            {
              "schrift": "estudiar",
              "lerntext": "estudiar",
              "de": "studieren, lernen"
            },
            {
              "schrift": "nacer",
              "lerntext": "nacer",
              "de": "geboren werden"
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
              "schrift": "gustar",
              "lerntext": "gustar",
              "de": "gefallen, mögen"
            },
            {
              "schrift": "beber",
              "lerntext": "beber",
              "de": "trinken"
            },
            {
              "schrift": "caminar",
              "lerntext": "caminar",
              "de": "gehen, laufen"
            },
            {
              "schrift": "conducir",
              "lerntext": "conducir",
              "de": "fahren, lenken"
            },
            {
              "schrift": "cocinar",
              "lerntext": "cocinar",
              "de": "kochen"
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
              "schrift": "levantarse",
              "lerntext": "levantarse",
              "de": "aufstehen"
            },
            {
              "schrift": "acostarse",
              "lerntext": "acostarse",
              "de": "sich hinlegen, schlafen gehen"
            },
            {
              "schrift": "vestirse",
              "lerntext": "vestirse",
              "de": "sich anziehen"
            },
            {
              "schrift": "cantar",
              "lerntext": "cantar",
              "de": "singen"
            },
            {
              "schrift": "mandar",
              "lerntext": "mandar",
              "de": "schicken, befehlen"
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
              "schrift": "salir",
              "lerntext": "salir",
              "de": "hinausgehen, ausgehen, abfahren"
            },
            {
              "schrift": "volver",
              "lerntext": "volver",
              "de": "zurückkommen, wiederkehren"
            },
            {
              "schrift": "conocer",
              "lerntext": "conocer",
              "de": "kennen, kennenlernen"
            },
            {
              "schrift": "empezar",
              "lerntext": "empezar",
              "de": "anfangen"
            },
            {
              "schrift": "entrar",
              "lerntext": "entrar",
              "de": "eintreten, hineingehen"
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
              "de": "bitten, bestellen"
            },
            {
              "schrift": "recordar",
              "lerntext": "recordar",
              "de": "sich erinnern"
            },
            {
              "schrift": "terminar",
              "lerntext": "terminar",
              "de": "beenden, fertig sein"
            },
            {
              "schrift": "permitir",
              "lerntext": "permitir",
              "de": "erlauben"
            },
            {
              "schrift": "conseguir",
              "lerntext": "conseguir",
              "de": "erreichen, bekommen"
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
              "schrift": "servir",
              "lerntext": "servir",
              "de": "dienen, servieren"
            },
            {
              "schrift": "sacar",
              "lerntext": "sacar",
              "de": "herausnehmen, herausholen"
            },
            {
              "schrift": "caer",
              "lerntext": "caer",
              "de": "fallen"
            },
            {
              "schrift": "considerar",
              "lerntext": "considerar",
              "de": "betrachten, überlegen"
            },
            {
              "schrift": "acabar",
              "lerntext": "acabar",
              "de": "beenden, fertig werden"
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
              "de": "bringen, mitbringen"
            },
            {
              "schrift": "aceptar",
              "lerntext": "aceptar",
              "de": "akzeptieren"
            },
            {
              "schrift": "tocar",
              "lerntext": "tocar",
              "de": "berühren, anfassen, spielen (Instrument)"
            }
          ]
        ],
        "newCount": 3,
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
              "de": "älter, größer"
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
              "de": "wahr, echt"
            },
            {
              "schrift": "claro / clara",
              "lerntext": "claro / clara",
              "de": "klar, hell"
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
              "de": "jünger, kleiner"
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
              "de": "beschäftigt, besetzt"
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
              "de": "reich, lecker"
            },
            {
              "schrift": "pobre",
              "lerntext": "pobre",
              "de": "arm"
            },
            {
              "schrift": "guapo / guapa",
              "lerntext": "guapo / guapa",
              "de": "gutaussehend, hübsch"
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
              "de": "seltsam, fremd"
            },
            {
              "schrift": "normal",
              "lerntext": "normal",
              "de": "normal"
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
              "de": "anders, unterschiedlich"
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
            }
          ]
        ],
        "newCount": 1,
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
              "schrift": "más",
              "lerntext": "más",
              "de": "mehr"
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
              "schrift": "tal vez",
              "lerntext": "tal vez",
              "de": "vielleicht"
            },
            {
              "schrift": "realmente",
              "lerntext": "realmente",
              "de": "wirklich"
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
              "de": "wirklich, wahrhaftig"
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
              "de": "zurück, hinten"
            },
            {
              "schrift": "luego",
              "lerntext": "luego",
              "de": "danach, gleich"
            },
            {
              "schrift": "después",
              "lerntext": "después",
              "de": "danach, später"
            },
            {
              "schrift": "antes",
              "lerntext": "antes",
              "de": "vorher, davor"
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
            }
          ]
        ],
        "newCount": 5,
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
              "de": "anderer, andere"
            },
            {
              "schrift": "mismo / misma",
              "lerntext": "mismo / misma",
              "de": "derselbe, dieselbe, selbst"
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
              "schrift": "se",
              "lerntext": "se",
              "de": "sich"
            },
            {
              "schrift": "los / las",
              "lerntext": "los / las",
              "de": "sie (Objektpronomen, Plural)"
            },
            {
              "schrift": "le / les",
              "lerntext": "le / les",
              "de": "ihm/ihr, ihnen (indirektes Objekt)"
            },
            {
              "schrift": "su / sus",
              "lerntext": "su / sus",
              "de": "sein/ihr, seine/ihre"
            },
            {
              "schrift": "vuestro / vuestra",
              "lerntext": "vuestro / vuestra",
              "de": "euer, eure"
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
              "schrift": "ese / esa",
              "lerntext": "ese / esa",
              "de": "dieser/jener (da), diese/jene (da)"
            },
            {
              "schrift": "aquel / aquella",
              "lerntext": "aquel / aquella",
              "de": "jener, jene (dort)"
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
              "schrift": "nadie",
              "lerntext": "nadie",
              "de": "niemand"
            },
            {
              "schrift": "alguno / alguna",
              "lerntext": "alguno / alguna",
              "de": "irgendein, irgendeine"
            }
          ]
        ],
        "newCount": 2,
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
    "title": "Weitere Präpositionen",
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
              "de": "für, um zu (Zweck)"
            },
            {
              "schrift": "desde",
              "lerntext": "desde",
              "de": "seit, von ... an"
            },
            {
              "schrift": "contra",
              "lerntext": "contra",
              "de": "gegen"
            },
            {
              "schrift": "según",
              "lerntext": "según",
              "de": "laut, gemäß"
            },
            {
              "schrift": "dentro de",
              "lerntext": "dentro de",
              "de": "innerhalb von"
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
              "schrift": "fuera de",
              "lerntext": "fuera de",
              "de": "außerhalb von"
            },
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
              "de": "oben auf, über"
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
          "schrift": "vengo [Slot] puedo",
          "lerntext": "vengo [Slot] puedo"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "si",
              "lerntext": "si",
              "de": "wenn, falls"
            },
            {
              "schrift": "cuando",
              "lerntext": "cuando",
              "de": "wenn, als"
            },
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
              "de": "trotzdem, jedoch"
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
          "schrift": "vengo [Slot] puedo",
          "lerntext": "vengo [Slot] puedo"
        },
        "frameDe": "Ich komme, [Slot] ich kann.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "por eso",
              "lerntext": "por eso",
              "de": "deshalb"
            },
            {
              "schrift": "así que",
              "lerntext": "así que",
              "de": "also, sodass"
            },
            {
              "schrift": "ni",
              "lerntext": "ni",
              "de": "noch, nicht einmal"
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
              "de": "letzter, letzte"
            },
            {
              "schrift": "medio / media",
              "lerntext": "medio / media",
              "de": "halb, Hälfte"
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
        "id": "22.1"
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
              "schrift": "el / la / los / las",
              "lerntext": "el / la / los / las",
              "de": "der, die, das (bestimmter Artikel)"
            },
            {
              "schrift": "un / una",
              "lerntext": "un / una",
              "de": "ein, eine"
            },
            {
              "schrift": "unos / unas",
              "lerntext": "unos / unas",
              "de": "einige, ein paar"
            },
            {
              "schrift": "al",
              "lerntext": "al",
              "de": "an dem, zum"
            },
            {
              "schrift": "del",
              "lerntext": "del",
              "de": "von dem, vom"
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
          "schrift": "[Slot] libro",
          "lerntext": "[Slot] libro"
        },
        "frameDe": "[Slot] Buch.",
        "pronouns": [],
        "slotGroups": [
          [
            {
              "schrift": "lo",
              "lerntext": "lo",
              "de": "das (neutraler Artikel, z.B. 'lo importante')"
            }
          ]
        ],
        "newCount": 1,
        "task": null,
        "newFrameWords": [],
        "id": "23.2"
      },
      {
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
        "id": "23.3"
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
              "schrift": "para qué",
              "lerntext": "para qué",
              "de": "wofür, wozu"
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
        "newCount": 4,
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
